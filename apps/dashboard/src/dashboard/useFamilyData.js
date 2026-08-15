import { useEffect, useMemo, useState } from 'react';
import {
  buildMemberActorNames,
  usableOwnerLabel,
} from '@kidgate/core/domain/activityActor';
import { resolveStoredDeviceName } from '@kidgate/core/domain/deviceName';
import { isPremiumSubscriptionActive } from '@kidgate/core/domain/subscription';
import { t } from '@kidgate/i18n/web';
import {
  activityRepository,
  clock,
  deviceRepository,
  familyRepository,
  childRepository,
  leaderboardRepository,
  rewardTaskRepository,
  safetyCheckInRepository,
  sosAlertRepository,
  subscriptionRepository,
  timeRequestRepository,
  usageDayRepository,
  webHistoryRepository,
} from '../adapters/repositories.js';
import {
  isLeaderboardVisible,
  leaderboardWindow,
  rankChildren,
} from '@kidgate/core/domain/leaderboard';
import { toDeviceView } from './deviceView.js';

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

export function useFamilyData(user, selectedDeviceId) {
  const [familyId, setFamilyId] = useState(null);
  const [resolving, setResolving] = useState(true);
  const [error, setError] = useState(null);

  const [devices, setDevices] = useState([]);
  const [devicesLoaded, setDevicesLoaded] = useState(false);
  const [familyName, setFamilyName] = useState('');
  const [billing, setBilling] = useState(null);
  const [memberCount, setMemberCount] = useState(1);
  // Who wrote each activity row. Rows store `actorUserId` /
  // `actorParentDeviceId` and never a name, so the feed's `{{actorName}}` is
  // resolved at render — see `dashboard/activityCopy.js`.
  const [memberNamesByUserId, setMemberNamesByUserId] = useState({});
  const [parentNamesByDeviceId, setParentNamesByDeviceId] = useState({});
  const [ownerLabel, setOwnerLabel] = useState(null);

  const [activityRows, setActivityRows] = useState([]);
  const [timeRequestRows, setTimeRequestRows] = useState([]);
  const [sosRows, setSosRows] = useState([]);
  const [checkInRows, setCheckInRows] = useState([]);
  const [children, setChildren] = useState([]);
  const [leaderboard, setLeaderboard] = useState(null);
  const [openTasks, setOpenTasks] = useState([]);
  const [approvedTasks, setApprovedTasks] = useState([]);
  const [usage, setUsage] = useState({});
  const [web, setWeb] = useState({});

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
    setDevicesLoaded(false);

    // Only the device list is fatal — without it there is nothing to show. A
    // single failing side panel (a collection this account cannot read, an
    // index that is still building) must degrade to an empty panel rather than
    // replacing the whole dashboard with an error screen.
    const soft = name => e =>
      console.warn(`[kidgate] ${name} listener failed:`, e?.code || e?.message);

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
          setDevices(records.map(toDeviceView));
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
    ];

    return () => {
      cancelled = true;
      subs.forEach(unsubscribe => unsubscribe());
    };
  }, [familyId]);

  // 3. Everything scoped to the device on screen.
  //
  // Family-wide before, per-device now, because every panel that consumes these
  // reads `rows[device.id]` and discards the rest — so the old queries paid for
  // reads on every other child in the family on every change.
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
      ),
      rewardTaskRepository.subscribeApprovedTasks(
        familyId,
        selectedDeviceId,
        setApprovedTasks,
        soft('rewardTasksApproved'),
      ),
      webHistoryRepository.subscribe(
        familyId,
        selectedDeviceId,
        entries => setWeb({ [selectedDeviceId]: entries }),
        soft('webHistory'),
      ),
    ];

    return () => subs.forEach(unsubscribe => unsubscribe());
  }, [familyId, selectedDeviceId]);

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
  }, [familyId, selectedDeviceId]);

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
        lastAt: undefined,
      };
      current.visits += entry.visits;
      current.blockedVisits += entry.blockedVisits;
      current.category = current.category || entry.category;
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
    const withUsage = devices.map(device => ({
      ...device,
      usage: usage[device.id] || [],
    }));

    return {
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
        parents: Array.from({ length: memberCount }, (_, index) => ({ id: index })),
      },
      devices: withUsage,
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
      sosAlerts: forDevice(selectedDeviceId, sosRows),
      checkIns: forDevice(selectedDeviceId, checkInRows),
      rewardTasks,
      places: Object.fromEntries(withUsage.map(device => [device.id, device.places])),
      webHistory,
    };
  }, [
    devices,
    usage,
    webHistory,
    rewardTasks,
    leaderboardRows,
    children,
    familyName,
    billing,
    memberCount,
    familyId,
    memberNamesByUserId,
    parentNamesByDeviceId,
    ownerLabel,
    user,
    selectedDeviceId,
    activityRows,
    timeRequestRows,
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
