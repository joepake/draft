import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  // screenTimeBoardRepository, — board dropped 2026-09-08 (D4)
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
// Dropped 2026-09-08 with the board (docs/FEASIBILITY.md, D4).
// import {
//   foldScreenTimeBoard,
//   isScreenTimeBoardVisible,
//   screenTimeBoardWindow,
// } from '@kidgate/core/domain/screenTimeBoard';
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

/*
 * **The visibility gate went with the listeners** (2026-09-17).
 *
 * It detached the device list while the tab was hidden, which paid for itself
 * only because that listener was re-delivering all day. `adapters/oneShot.js`
 * now closes every subscription as soon as it has answered, so there is
 * nothing left to detach — and keeping the gate would have turned every
 * return to the tab into a fresh round of reads, which is the bill inverted.
 * `docs/DATA_RETENTION.md` §4.
 */

export function useFamilyData(user, selectedDeviceId) {
  /*
   * Bumped by `refresh()`, and in the deps of every read below: this is how
   * the page asks for the data again now that nothing streams it. The Refresh
   * button calls it, and so does a parent write once the server has accepted
   * one — an approved request has to leave the list, and no listener is going
   * to take it out.
   */
  const [version, setVersion] = useState(0);
  const [loadedAt, setLoadedAt] = useState(() => Date.now());
  const refresh = useCallback(() => {
    setLoadedAt(Date.now());
    setVersion(current => current + 1);
  }, []);
  /** Guards the skeleton against a re-run caused by the tab coming back. */
  const lastLoadedFamilyRef = useRef(null);
  const [familyId, setFamilyId] = useState(null);
  const [resolving, setResolving] = useState(true);
  const [error, setError] = useState(null);

  const [devices, setDevices] = useState([]);
  const [devicesLoaded, setDevicesLoaded] = useState(false);
  const [metaLoaded, setMetaLoaded] = useState(false);
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
  /*
   * The records themselves, not only their names. The notification card edits
   * one phone's push preferences, so it needs the id and the name together —
   * and the name map is keyed the other way round.
   */
  const [parentDevices, setParentDevices] = useState([]);
  /*
   * The SIGNED-IN account's own phones, which for a joined co-parent are not
   * the ones above.
   *
   * `firestore.rules` gates `users/{userId}/parentDevices` on
   * `isParentAccount(userId)` — `request.auth.uid == userId`, the account's own
   * root and nothing else — so a co-parent reading the owner's list is refused,
   * the list stays empty, and the notification card rendered nothing at all.
   * Their phones were there the whole time, one uid across.
   *
   * For the owner the two roots are the same string, which is what made the
   * missing half invisible in testing, and why this read is skipped there
   * rather than paying for the same documents twice.
   */
  const [accountParentDevices, setAccountParentDevices] = useState([]);
  const [ownerLabel, setOwnerLabel] = useState(null);
  /** The star chart's family switch, read with the rest of the meta. */
  const [leaderboardEnabled, setLeaderboardEnabled] = useState(true);

  const [activityRows, setActivityRows] = useState([]);
  /*
   * The same collection, unscoped: the Activity section is about the family,
   * the way the phone's Activities tab is, so it cannot read the per-device
   * rows below — those are filtered to whichever device the Family section
   * happens to have open, and a feed that changes when you pick a device is
   * not a family feed. `subscribe`'s `deviceId` argument is optional for
   * exactly this, so no new repository method is needed.
   */
  const [familyActivityRows, setFamilyActivityRows] = useState([]);
  /*
   * The three counts the Family screen's chip row needs, family-wide.
   *
   * Every other number on that row folds out of `devices`, which this hook
   * already holds for the whole family. These three do not: the per-device
   * subscriptions further down are scoped to whichever device is open, and a
   * summary that changed when a parent picked a phone would be describing one
   * machine while claiming to describe the family.
   */
  const [familyTimeRequests, setFamilyTimeRequests] = useState([]);
  const [familyCheckIns, setFamilyCheckIns] = useState([]);
  const [familySos, setFamilySos] = useState([]);
  const [timeRequestRows, setTimeRequestRows] = useState([]);
  const [siteRequestRows, setSiteRequestRows] = useState([]);
  const [sosRows, setSosRows] = useState([]);
  const [checkInRows, setCheckInRows] = useState([]);
  const [children, setChildren] = useState([]);
  const [leaderboard, setLeaderboard] = useState(null);
  // const [screenTimeBoardDoc, setScreenTimeBoardDoc] = useState(null);
  // The family switch, read once with the rest of the family-level data:
  // absent means off. Dropped with the board 2026-09-08.
  // const [screenTimeBoardEnabled, setScreenTimeBoardEnabled] = useState(undefined);
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
    if (!familyId) return;
    let cancelled = false;
    /*
     * Only when the family actually changed. This effect also re-runs when the
     * tab comes back on screen, and a skeleton over a list this page already
     * has would make coming back look like loading it for the first time.
     */
    if (lastLoadedFamilyRef.current !== familyId) {
      lastLoadedFamilyRef.current = familyId;
      setDevicesLoaded(false);
      setMetaLoaded(false);
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
        /* Absent is on, matching `isLeaderboardVisible` and the phone: the
           star chart ships on and the flag only ever records a family
           deliberately turning it off. */
        setLeaderboardEnabled(meta?.leaderboardEnabled !== false);
        /*
         * Stamped on success only, and deliberately not in the `catch`.
         *
         * It is the half of `unknownAccount` that says "this family root was
         * actually read and had nothing in it", as opposed to "we do not know
         * yet". A failed meta read leaves it false, so a parent whose fetch
         * broke keeps today's screen rather than being told they are in the
         * wrong account — the expensive direction of that mistake.
         */
        setMetaLoaded(true);
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
          setParentDevices(
            records.map(record => ({
              deviceId: record.deviceId,
              name: resolveStoredDeviceName(record) || record.deviceId,
            })),
          );
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
      /* The screen-time board is dropped (docs/FEASIBILITY.md, D4,
         2026-09-08). Unsubscribed rather than left running: it is a listener
         plus a family-document read per dashboard open, for a card nothing
         renders any more.
      screenTimeBoardRepository.subscribe(
        familyId,
        screenTimeBoardWindow(new Date()).periodKey,
        setScreenTimeBoardDoc,
        soft('screenTimeBoard'),
      ),
      */
    ];
    // familyRepository
    //   .getFamilyMeta(familyId)
    //   .then(meta => {
    //     if (!cancelled) setScreenTimeBoardEnabled(meta?.screenTimeBoardEnabled);
    //   })
    //   .catch(soft('familyMeta'));

    return () => {
      cancelled = true;
      subs.forEach(unsubscribe => unsubscribe());
    };
  }, [familyId, version]);

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

  /*
   * Keyed on the family alone, so picking a device does not tear it down and
   * rebuild it — the rows are the same rows whichever device is open.
   */
  useEffect(() => {
    if (!familyId) return undefined;
    const soft = name => e =>
      console.warn(`[kidgate] ${name} listener failed:`, e?.code || e?.message);
    const subs = [
      activityRepository.subscribe(
        familyId,
        setFamilyActivityRows,
        soft('familyActivities'),
      ),
      /* No `deviceId` argument: that optional last parameter is what scopes
         the per-device copy further down, and its absence is what makes this
         one the family's. */
      timeRequestRepository.subscribePending(
        familyId,
        setFamilyTimeRequests,
        soft('familyTimeRequests'),
      ),
      sosAlertRepository.subscribeActive(familyId, setFamilySos, soft('familySos')),
    ];
    return () => subs.forEach(unsubscribe => unsubscribe());
  }, [familyId, version]);

  /*
   * Check-ins have no family-wide query — a row carries a `deviceId` and
   * nothing else, so the join to a family happens against the ids resolved
   * here. `subscribeRecentForDevices` chunks by ten and reuses the composite
   * index the per-device query already needs, so nothing new lands in
   * `firestore.indexes.json`.
   *
   * Keyed on the id STRING rather than the array: `devices` is a new array on
   * every heartbeat, and depending on it would tear this listener down and
   * rebuild it several times a minute.
   */
  /*
   * The co-parent's own phones. Skipped for the owner, whose root the block
   * above already read — see `accountParentDevices`.
   */
  const accountId = user?.uid ?? null;
  useEffect(() => {
    if (!accountId || !familyId || accountId === familyId) {
      setAccountParentDevices([]);
      return undefined;
    }
    return deviceRepository.subscribeParentDevices(
      accountId,
      records =>
        setAccountParentDevices(
          records.map(record => ({
            deviceId: record.deviceId,
            name: resolveStoredDeviceName(record) || record.deviceId,
          })),
        ),
      e =>
        console.warn(
          '[kidgate] accountParentDevices read failed:',
          e?.code || e?.message,
        ),
    );
  }, [accountId, familyId, version]);

  const childDeviceIdKey = devices.map(device => device.id).join(',');
  useEffect(() => {
    if (!familyId || !childDeviceIdKey) {
      setFamilyCheckIns([]);
      return undefined;
    }
    return safetyCheckInRepository.subscribeRecentForDevices(
      familyId,
      childDeviceIdKey.split(','),
      setFamilyCheckIns,
      e =>
        console.warn(
          '[kidgate] familyCheckIns listener failed:',
          e?.code || e?.message,
        ),
    );
  }, [familyId, childDeviceIdKey, version]);

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
    ];

    return () => subs.forEach(unsubscribe => unsubscribe());
  }, [familyId, selectedChildId, selectedDeviceId, version]);

  /*
   * The two history panels, apart from the block above and on `version` alone.
   *
   * They are 600 documents between them (`WEB_HISTORY_PAGE_SIZE` and
   * `VIDEO_HISTORY_PAGE_SIZE`, 300 each) against roughly 60 for everything
   * else this device needs, and **no parent write moves either** — what a
   * child reached is not something a console edits. Re-reading them after
   * every toggle would have put the idle bill back, one switch at a time. The
   * Refresh button is what asks for these again.
   */
  useEffect(() => {
    if (!familyId || !selectedDeviceId) return;
    const soft = name => e =>
      console.warn(`[kidgate] ${name} read failed:`, e?.code || e?.message);
    const subs = [
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
  }, [familyId, selectedDeviceId, version]);

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
  }, [familyId, selectedChildId, selectedDeviceId, version]);

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
      /* Dropped 2026-09-08 with the board (docs/FEASIBILITY.md, D4).
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
      */
      leaderboard: {
        rows: leaderboardRows,
        visible: isLeaderboardVisible(children, leaderboardEnabled),
        /* The raw switch as well as the verdict: `visible` also folds in how
           many children there are — a one-child family has no standings to
           show — and the Settings toggle has to render the family's own
           answer, not that fold. */
        enabled: leaderboardEnabled,
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
      /** Every device's rows, newest first — what the Activity section reads. */
      familyActivities: familyActivityRows,
      /** The family-wide counts the Family screen's summary row folds. */
      familyTimeRequests,
      familyCheckIns,
      familySos,
      /**
       * The signed-in account's own phones.
       *
       * **Whoever is signed in, not whoever owns the family** (2026-09-17).
       *
       * The family-root read is refused for a joined co-parent — the rule is
       * `request.auth.uid == familyId` — so this was empty for them and the
       * notification card drew nothing. It is their OWN root that holds their
       * phones, and that one they may read. For the owner the two are the same
       * string and `accountParentDevices` is deliberately not fetched.
       *
       * The actor names beside activity rows still come from the family root
       * and still stop at the same wall: a co-parent cannot read the owner's
       * device names, so a row written by the owner's phone carries no name
       * for them. That is the rule, not an oversight — closing it needs a
       * server-side read, not a wider client one.
       */
      parentDevices: accountId === familyId ? parentDevices : accountParentDevices,
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
    accountId,
    accountParentDevices,
    devices,
    usage,
    webHistory,
    videos,
    rewardTasks,
    leaderboardRows,
    leaderboardEnabled,
    children,
    familyName,
    billing,
    memberCount,
    members,
    familyId,
    memberNamesByUserId,
    parentNamesByDeviceId,
    parentDevices,
    ownerLabel,
    user,
    selectedDeviceId,
    activityRows,
    familyActivityRows,
    familyTimeRequests,
    familyCheckIns,
    familySos,
    timeRequestRows,
    siteRequestRows,
    sosRows,
    checkInRows,
  ]);

  /**
   * A sign-in that landed on a family root nobody ever built.
   *
   * `resolveFamilyRootFromProfile` answers the caller's own uid whenever the
   * profile mirror names no other family, and that is the right answer for a
   * parent who owns their family — but it is also what a stranger gets. Only a
   * `permissionDenied` was told apart before, so signing in with the wrong
   * Google account produced a working, empty dashboard reading "No child
   * device yet", which is advice to go and pair a device into a family that is
   * not theirs.
   *
   * Every term is here to keep a *real* family out of it, and the expensive
   * mistake is the false positive:
   *
   *  - `metaLoaded` — the root was read and answered, not merely unread yet.
   *    Set on success only, so a failed read keeps today's screen.
   *  - `familyName` absent — a family named on the phone has one.
   *  - `trialStartedAt` absent — the trial clock starts at pairing, so a stamp
   *    means this family paired something once, however long ago.
   *  - no devices and no children — nothing was ever set up here.
   *
   * A parent who created an account on the phone and has not paired yet keeps
   * the pairing instructions, because their family carries a name.
   */
  const unknownAccount =
    metaLoaded &&
    devicesLoaded &&
    Boolean(user) &&
    familyId === user.uid &&
    !familyName &&
    !billing?.trialStartedAt &&
    devices.length === 0 &&
    children.length === 0;

  // The device list has to have arrived before rendering, or the dashboard
  // shows "no child device yet" for a beat on every load.
  return {
    data,
    familyId,
    loading: resolving || (Boolean(familyId) && !devicesLoaded),
    error,
    unknownAccount,
    /** When this data was asked for — the header prints it beside Refresh. */
    loadedAt,
    /** Read it all again: the header button, and every write that lands. */
    refresh,
  };
}
