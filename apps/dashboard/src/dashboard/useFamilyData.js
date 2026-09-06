import { useEffect, useMemo, useRef, useState } from 'react';
import { CONSOLE_HIDDEN_GRACE_MS } from '@kidgate/core/domain/consoleVisibility';
import {
  buildMemberActorNames,
  usableOwnerLabel,
} from '@kidgate/core/domain/activityActor';
import { resolveStoredDeviceName } from '@kidgate/core/domain/deviceName';
import { webHistoryLabel } from '@kidgate/core/domain/webHistoryLabel';
import { isPremiumSubscriptionActive } from '@kidgate/core/domain/subscription';
import { t } from '@kidgate/i18n/web';
import {
  activityRepository,
  clock,
  deviceRepository,
  familyRepository,
  childRepository,
  leaderboardRepository,
  screenTimeBoardRepository,
  rewardTaskRepository,
  safetyCheckInRepository,
  sosAlertRepository,
  subscriptionRepository,
  timeRequestRepository,
  siteRequestRepository,
  usageDayRepository,
  webHistoryRepository,
  videoHistoryRepository,
} from '../adapters/repositories.js';
import {
  isLeaderboardVisible,
  leaderboardWindow,
  rankChildren,
} from '@kidgate/core/domain/leaderboard';
import {
  foldScreenTimeBoard,
  isScreenTimeBoardVisible,
  screenTimeBoardWindow,
} from '@kidgate/core/domain/screenTimeBoard';
import { toDeviceView } from './deviceView.js';
import { touchParentPresenceIfDue } from './parentPresence.js';

/**
 * Live family data for the parent dashboard.
 *
 * Every read goes through `@kidgate/core`, the same repositories `apps/mobile`
 * uses. What this file used to be — Firestore queries with collection names
 * spelled out as string literals, a hand-written mapper per document type — is
 * gone; the family root is `users/{familyId}` where `familyId` is the OWNER's
 * uid, and resolving it is still the first thing that has to happen, but the
 * paths and the parsing now live in one place for both apps.
 */

/*
 * Rows are handed on with their keys intact. This file used to render them
 * here by humanising the key — "App Installed Title", in every language —
 * because the web key space has none of the app's feed keys. It now has a
 * door to them (`@kidgate/i18n/activityFeed`), and the copy is resolved at
 * render time in `dashboard/activityCopy.js`, so a language change re-reads
 * rather than freezing the wording captured when the snapshot arrived.
 */

/** One device's rows, in the `{ [deviceId]: rows }` shape the dashboard reads. */
function forDevice(deviceId, rows) {
  return deviceId ? { [deviceId]: rows } : {};
}

/**
 * Whether this tab is on screen, with the grace from `@kidgate/core`.
 *
 * **Only the device list is gated on it, and the asymmetry is the point.**
 * Detaching a listener saves the reads its documents would have caused while
 * nobody was looking, and costs one read per document to re-attach — so it pays
 * on `childDevices`, three documents that change every minute of every day, and
 * loses badly on the history panels, which hold three hundred documents that
 * change almost never. A parent flicking between tabs would pay six hundred
 * reads to save none.
 *
 * `docs/DATA_RETENTION.md` §9 has the measurement that decides which is which.
 */
function useConsoleVisible() {
  const [visible, setVisible] = useState(
    () => typeof document === 'undefined' || document.visibilityState !== 'hidden',
  );

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    let timer = null;
    const onChange = () => {
      if (document.visibilityState !== 'hidden') {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        setVisible(true);
        return;
      }
      if (timer) return;
      timer = setTimeout(() => {
        timer = null;
        // Re-checked rather than assumed: the tab may have come back and gone
        // again inside the grace, and this timer is the older of the two.
        if (document.visibilityState === 'hidden') setVisible(false);
      }, CONSOLE_HIDDEN_GRACE_MS);
    };
    document.addEventListener('visibilitychange', onChange);
    return () => {
      if (timer) clearTimeout(timer);
      document.removeEventListener('visibilitychange', onChange);
    };
  }, []);

  return visible;
}

export function useFamilyData(user, selectedDeviceId) {
  const visible = useConsoleVisible();
  /** Guards the skeleton against a re-run caused by the tab coming back. */
  const lastLoadedFamilyRef = useRef(null);
  const [familyId, setFamilyId] = useState(null);
  const [resolving, setResolving] = useState(true);
  const [error, setError] = useState(null);

  const [devices, setDevices] = useState([]);
  const [devicesLoaded, setDevicesLoaded] = useState(false);
  const [familyName, setFamilyName] = useState('');
  const [billing, setBilling] = useState(null);
  const [memberCount, setMemberCount] = useState(1);
  /*
   * The membership list itself, not only its length. The count answers the
   * sidebar; removing a co-parent needs the rows — a uid and a label — and
   * re-deriving them from the actor-name map would be the same data twice.
   */
  const [members, setMembers] = useState([]);
  // Who wrote each activity row. Rows store `actorUserId` /
  // `actorParentDeviceId` and never a name, so the feed's `{{actorName}}` is
  // resolved at render — see `dashboard/activityCopy.js`.
  const [memberNamesByUserId, setMemberNamesByUserId] = useState({});
  const [parentNamesByDeviceId, setParentNamesByDeviceId] = useState({});
  const [ownerLabel, setOwnerLabel] = useState(null);

  const [activityRows, setActivityRows] = useState([]);
  const [timeRequestRows, setTimeRequestRows] = useState([]);
  const [siteRequestRows, setSiteRequestRows] = useState([]);
  const [sosRows, setSosRows] = useState([]);
  const [checkInRows, setCheckInRows] = useState([]);
  const [children, setChildren] = useState([]);
  const [leaderboard, setLeaderboard] = useState(null);
  const [screenTimeBoardDoc, setScreenTimeBoardDoc] = useState(null);
  // The family switch, read once with the rest of the family-level data:
  // absent means off, so a family that never asked sees no card.
  const [screenTimeBoardEnabled, setScreenTimeBoardEnabled] = useState(undefined);
  const [openTasks, setOpenTasks] = useState([]);
  const [approvedTasks, setApprovedTasks] = useState([]);
  const [usage, setUsage] = useState({});
  const [web, setWeb] = useState({});
  const [videos, setVideos] = useState({});

  // 1. Resolve the family root.
  useEffect(() => {
    let cancelled = false;
    if (!user) {
      setFamilyId(null);
      setResolving(false);
      return;
    }
    setResolving(true);
    setError(null);

    familyRepository
      .resolveFamilyRootFromProfile(user.uid)
      .then(root => !cancelled && setFamilyId(root))
      .catch(e => {
        if (cancelled) return;
        // A brand-new parent has no user doc yet; their own uid is the root.
        // Permission-denied is different — it means this account has no
        // KidGate family at all, and the caller renders that as such.
        if (e?.code === 'permissionDenied') setError(e);
        setFamilyId(user.uid);
      })
      .finally(() => !cancelled && setResolving(false));

    return () => {
      cancelled = true;
    };
  }, [user]);

  // 2. Family-level data.
  useEffect(() => {
    if (!familyId || !visible) return;
    let cancelled = false;
    /*
     * Only when the family actually changed. This effect also re-runs when the
     * tab comes back on screen, and a skeleton over a list this page already
     * has would make coming back look like loading it for the first time.
     */
    if (lastLoadedFamilyRef.current !== familyId) {
      lastLoadedFamilyRef.current = familyId;
      setDevicesLoaded(false);
    }

    // Only the device list is fatal — without it there is nothing to show. A
    // single failing side panel (a collection this account cannot read, an
    // index that is still building) must degrade to an empty panel rather than
    // replacing the whole dashboard with an error screen.
    const soft = name => e =>
      console.warn(`[kidgate] ${name} listener failed:`, e?.code || e?.message);

    /** One "report now" per page open, not one per snapshot. See its use below. */
    let devicesAsked = false;

    /*
     * And one "a parent is looking" per day: the dormancy reaper's input, and
     * the call that wakes a family the reaper parked while nobody opened a
     * console for a month (`./parentPresence.js`). Not awaited and not part
     * of the loading state — a family that could not be stamped still renders.
     */
    touchParentPresenceIfDue(familyId).catch(() => undefined);

    // One read, not a listener: a family is renamed roughly once in its life,
    // and the alternative is a permanent second subscription to the same
    // document `subscribeToBilling` is already watching.
    familyRepository
      .getFamilyMeta(familyId)
      .then(meta => {
        if (cancelled) return;
        setFamilyName(meta?.name || '');
        setOwnerLabel(usableOwnerLabel(meta?.ownerLabel));
      })
      .catch(soft('familyMeta'));

    const subs = [
      subscriptionRepository.subscribeToBilling(familyId, setBilling),
      familyRepository.subscribeMembers(
        familyId,
        members => {
          // The owner is not a member document — they are the family root — so
          // the parent count is the membership list plus one.
          setMemberCount(members.length + 1);
          setMembers(members);
          setMemberNamesByUserId(buildMemberActorNames(members));
        },
        () => setMemberCount(1),
      ),
      // Parent devices name the actor on rows written before this family had a
      // second parent, and on any row whose actor has since left. Names are
      // decoration on an already-rendered feed, so a failing listener keeps the
      // last set rather than blanking authorship on every row.
      deviceRepository.subscribeParentDevices(
        familyId,
        records => {
          const next = {};
          for (const record of records) {
            next[record.deviceId] = resolveStoredDeviceName(record) ?? '';
          }
          setParentNamesByDeviceId(next);
        },
        soft('parentDevices'),
      ),
      deviceRepository.subscribeChildDevices(
        familyId,
        records => {
          const views = records.map(toDeviceView);
          /*
           * The first list after this page opened is "a parent opened the
           * console" — what a free-tier device's thirty-minute cadence trades
           * against (`@kidgate/core/domain/reportRequest`). Later snapshots are
           * the device answering, and asking from those would be asking again
           * about the reply just received.
           *
           * Not awaited, and failures are swallowed inside: the answer arrives
           * down this same listener, and the page is correct without it.
           */
          if (!devicesAsked) {
            devicesAsked = true;
            void deviceRepository.requestDeviceReports(familyId, views);
          }
          setDevices(views);
          setDevicesLoaded(true);
        },
        e => {
          setDevicesLoaded(true);
          setError(e);
        },
      ),
      // Family-level, not per-device: the star chart is the one panel here
      // that is about the whole family rather than the device on screen, so
      // it belongs beside the device list and not in the block below.
      childRepository.subscribe(familyId, setChildren, soft('children')),
      leaderboardRepository.subscribe(
        familyId,
        leaderboardWindow(new Date()).periodKey,
        setLeaderboard,
        soft('leaderboard'),
      ),
      // Sibling of the star chart: minutes per person this week, parents
      // included where they opted in. Server-written, family-readable.
      screenTimeBoardRepository.subscribe(
        familyId,
        screenTimeBoardWindow(new Date()).periodKey,
        setScreenTimeBoardDoc,
        soft('screenTimeBoard'),
      ),
    ];
    familyRepository
      .getFamilyMeta(familyId)
      .then(meta => {
        if (!cancelled) setScreenTimeBoardEnabled(meta?.screenTimeBoardEnabled);
      })
      .catch(soft('familyMeta'));

    return () => {
      cancelled = true;
      subs.forEach(unsubscribe => unsubscribe());
    };
  }, [familyId, visible]);

  // 3. Everything scoped to the device on screen.
  //
  // Family-wide before, per-device now, because every panel that consumes these
  // reads `rows[device.id]` and discards the rest — so the old queries paid for
  // reads on every other child in the family on every change.
  // The person's reward tasks ride alongside the device's own (childId on
  // the task, 2026-08-26) — same merged subscription the phone runs. Derived
  // outside the effect and depended on as a string: device docs change on
  // every heartbeat, and `devices` itself in the deps would resubscribe all
  // eight listeners each time.
  const selectedChildId =
    devices.find(device => device.id === selectedDeviceId)?.childId || '';

  useEffect(() => {
    if (!familyId || !selectedDeviceId) return;

    const soft = name => e =>
      console.warn(`[kidgate] ${name} listener failed:`, e?.code || e?.message);

    const subs = [
      activityRepository.subscribe(
        familyId,
        setActivityRows,
        soft('activities'),
        selectedDeviceId,
      ),
      timeRequestRepository.subscribePending(
        familyId,
        setTimeRequestRows,
        soft('timeRequests'),
        selectedDeviceId,
      ),
      // Scoped to the selected device, like the time requests above: the card
      // that shows them sits in the Controls tab, which is about one device.
      siteRequestRepository.subscribePending(
        familyId,
        setSiteRequestRows,
        soft('siteRequests'),
        selectedDeviceId,
      ),
      sosAlertRepository.subscribeRecentForDevice(
        familyId,
        selectedDeviceId,
        setSosRows,
        soft('sosAlerts'),
      ),
      safetyCheckInRepository.subscribeRecentForDevice(
        familyId,
        selectedDeviceId,
        setCheckInRows,
        soft('safetyCheckIns'),
      ),
      // Two subscriptions on purpose: core keeps approved tasks out of the
      // actionable feed, and this panel shows the whole list with a status
      // badge on each.
      rewardTaskRepository.subscribeDeviceTasks(
        familyId,
        selectedDeviceId,
        setOpenTasks,
        soft('rewardTasks'),
        selectedChildId || undefined,
      ),
      rewardTaskRepository.subscribeApprovedTasks(
        familyId,
        selectedDeviceId,
        setApprovedTasks,
        soft('rewardTasksApproved'),
        selectedChildId || undefined,
      ),
      webHistoryRepository.subscribe(
        familyId,
        selectedDeviceId,
        entries => setWeb({ [selectedDeviceId]: entries }),
        soft('webHistory'),
      ),
      videoHistoryRepository.subscribe(
        familyId,
        selectedDeviceId,
        entries => setVideos({ [selectedDeviceId]: entries }),
        soft('videoHistory'),
      ),
    ];

    return () => subs.forEach(unsubscribe => unsubscribe());
  }, [familyId, selectedChildId, selectedDeviceId]);

  // 4. The usage range: one read for the window, one listener for today.
  //
  // Nothing prunes `usageDays`, so a live query over the whole range would
  // grow with the device's history for no benefit — only today's row changes
  // while the dashboard is open, and that one is worth watching so a limit
  // filling up is visible without a reload.
  useEffect(() => {
    if (!familyId || !selectedDeviceId) return;
    let cancelled = false;
    const byDate = new Map();

    const publish = () =>
      setUsage({
        [selectedDeviceId]: [...byDate.values()].sort((a, b) =>
          a.date.localeCompare(b.date),
        ),
      });

    usageDayRepository
      .fetchRecent(familyId, selectedDeviceId, 30)
      .then(days => {
        if (cancelled) return;
        days.forEach(day => byDate.set(day.date, day));
        publish();
      })
      .catch(e => !cancelled && setError(e));

    const unsubscribe = usageDayRepository.subscribeDay(
      familyId,
      selectedDeviceId,
      clock.today(),
      day => {
        if (cancelled || !day) return;
        byDate.set(day.date, day);
        publish();
      },
      e => console.warn('[kidgate] usageDay listener failed:', e?.code || e?.message),
    );

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, [familyId, selectedChildId, selectedDeviceId]);

  /**
   * Stored one row per domain per day; the dashboard shows one row per domain
   * across the whole window, most visited first.
   */
  const webHistory = useMemo(() => {
    const entries = selectedDeviceId ? (web[selectedDeviceId] ?? []) : [];
    const byDomain = new Map();

    entries.forEach(entry => {
      const current = byDomain.get(entry.domain) ?? {
        domain: entry.domain,
        visits: 0,
        blockedVisits: 0,
        category: null,
        // Which of the row's two labels answered — the phone's screen needs
        // the same thing and reads it from `webHistoryLabel` directly. Kept
        // here because the roll-up throws the rows away.
        categorySource: null,
        lastAt: undefined,
      };
      current.visits += entry.visits;
      current.blockedVisits += entry.blockedVisits;
      if (!current.category) {
        const label = webHistoryLabel(entry);
        current.category = label.category;
        current.categorySource = label.source;
      }
      if (entry.lastAt && (!current.lastAt || entry.lastAt > current.lastAt)) {
        current.lastAt = entry.lastAt;
      }
      byDomain.set(entry.domain, current);
    });

    return forDevice(
      selectedDeviceId,
      [...byDomain.values()].sort((a, b) => b.visits - a.visits).slice(0, 12),
    );
  }, [web, selectedDeviceId]);

  const rewardTasks = useMemo(
    () => forDevice(selectedDeviceId, [...openTasks, ...approvedTasks]),
    [openTasks, approvedTasks, selectedDeviceId],
  );

  /**
   * The star chart, joined back to the children it names.
   *
   * The stored document carries ids and counts only, so the names come from
   * the `children` subscription — which also means a child added since the
   * last approval still appears, on zero, instead of being missing until
   * someone earns something.
   */
  const leaderboardRows = useMemo(() => {
    const totals = new Map(
      (leaderboard?.rows ?? []).map(row => [row.childId, row.stars]),
    );
    const byId = new Map(children.map(child => [child.id, child]));
    return rankChildren(children, totals).map(row => ({
      ...row,
      name: byId.get(row.childId)?.name ?? '',
    }));
  }, [children, leaderboard]);

  const data = useMemo(() => {
    // Join each device back to the person holding it. `toDeviceView` cannot do
    // this — it maps one record and never sees the `children` collection — and
    // every reader that needs the name would otherwise carry its own lookup.
    // A device pointing at a child this subscription has not delivered
    // (deleted, or the listener still warming up) resolves to null and renders
    // as unassigned, which is what it now is.
    const childById = new Map(children.map(child => [child.id, child]));
    const withUsage = devices.map(device => ({
      ...device,
      child: device.childId ? (childById.get(device.childId) ?? null) : null,
      usage: usage[device.id] || [],
    }));

    return {
      screenTimeBoard: (() => {
        const rows = foldScreenTimeBoard(
          screenTimeBoardDoc,
          new Date().toISOString().slice(0, 10),
        );
        return {
          rows,
          enabled: screenTimeBoardEnabled === true,
          visible: isScreenTimeBoardVisible(screenTimeBoardEnabled, rows),
        };
      })(),
      leaderboard: {
        rows: leaderboardRows,
        // The family flag lives on the family document, which this hook does
        // not read; absent means on, matching the app.
        visible: isLeaderboardVisible(children, undefined),
      },
      family: {
        name: familyName || t('dash.fallbackFamily'),
        // Kept as a raw key, not a label: the pill is on screen permanently, so
        // it has to re-read when the language changes rather than freeze at the
        // wording captured when this snapshot arrived.
        //
        // Read through the same entitlement rule the app uses. The previous
        // version tested a `subscriptionStatus` field that nothing writes, so a
        // paying family was shown "trial".
        plan: isPremiumSubscriptionActive(billing?.subscription ?? null, Date.now())
          ? 'premium'
          : 'trial',
        /*
         * Passed through so the plan card can tell a family that has never
         * paired a device from one whose trial is running: the trial clock
         * starts at pairing, so an absent stamp means not set up yet.
         */
        trialStartedAt: billing?.trialStartedAt ?? null,
        parents: Array.from({ length: memberCount }, (_, index) => ({ id: index })),
        members,
      },
      devices: withUsage,
      // The roster itself, not only the join above: the sidebar groups by child
      // and has to name a child whose devices are all offline the same as one
      // whose are not.
      children,
      actorNames: {
        familyId,
        memberNamesByUserId,
        parentNamesByDeviceId,
        ownerLabel,
        // Only when this account IS the owner: a secondary parent's own name
        // says nothing about who wrote a row the owner wrote.
        sessionOwnerName:
          user && familyId && user.uid === familyId ? user.displayName : null,
      },
      activities: forDevice(selectedDeviceId, activityRows),
      timeRequests: forDevice(selectedDeviceId, timeRequestRows),
      siteRequests: forDevice(selectedDeviceId, siteRequestRows),
      sosAlerts: forDevice(selectedDeviceId, sosRows),
      checkIns: forDevice(selectedDeviceId, checkInRows),
      rewardTasks,
      places: Object.fromEntries(withUsage.map(device => [device.id, device.places])),
      webHistory,
      videoHistory: videos,
    };
  }, [
    devices,
    usage,
    webHistory,
    videos,
    rewardTasks,
    leaderboardRows,
    screenTimeBoardDoc,
    screenTimeBoardEnabled,
    children,
    familyName,
    billing,
    memberCount,
    members,
    familyId,
    memberNamesByUserId,
    parentNamesByDeviceId,
    ownerLabel,
    user,
    selectedDeviceId,
    activityRows,
    timeRequestRows,
    siteRequestRows,
    sosRows,
    checkInRows,
  ]);

  // The device list has to have arrived before rendering, or the dashboard
  // shows "no child device yet" for a beat on every load.
  return {
    data,
    familyId,
    loading: resolving || (Boolean(familyId) && !devicesLoaded),
    error,
  };
}
