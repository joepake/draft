import { useEffect, useMemo, useState } from 'react'
import {
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../lib/firebase.js'
import { t } from '../i18n/index.js'

/**
 * Live family data for the parent dashboard.
 *
 * Paths mirror the app's constants/FirestorePaths.ts exactly — the family root
 * is users/{familyId}, where familyId is the OWNER's uid. A secondary parent
 * keeps its own uid and stores the root it joined in users/{ownUid}.memberFamilyId,
 * so resolving the root is the first thing that has to happen.
 */

/** Firestore Timestamp | Date | string | millis → ISO string. */
function toIso(value) {
  if (!value) return undefined
  if (typeof value === 'string') return value
  if (typeof value === 'number') return new Date(value).toISOString()
  if (typeof value.toDate === 'function') return value.toDate().toISOString()
  if (value instanceof Date) return value.toISOString()
  return undefined
}

/**
 * `YYYY-MM-DD` in local time, matching the day keys the child device writes.
 * Deliberately not `toISOString()`, which would shift the key by a day either
 * side of UTC midnight.
 */
function localDateKey(daysAgo = 0) {
  const d = new Date()
  d.setDate(d.getDate() - daysAgo)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${month}-${day}`
}

function initialsOf(name) {
  const trimmed = (name || '').trim()
  return trimmed ? trimmed[0].toUpperCase() : '?'
}

/**
 * Activity rows written before the i18n keys existed carry a display string;
 * newer ones carry only a key. Without the app's locale bundle the key is the
 * only thing left, so it is humanised rather than shown raw.
 */
function humanizeKey(key) {
  if (!key) return ''
  const tail = key.split('.').pop() || key
  const spaced = tail.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' ')
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

function mapDevice(id, d) {
  const controls = d.controls || {}
  const places = Array.isArray(d.places) ? d.places : []
  const currentPlace = d.lastLocation?.placeName || null

  return {
    id,
    name: d.name || d.deviceLabel || t('dash.fallbackDevice'),
    childName: d.name || d.deviceLabel || t('dash.fallbackDevice'),
    initials: initialsOf(d.name || d.deviceLabel),
    platform: d.platform,
    modelName: d.modelName || d.deviceLabel || '',
    osVersion: d.osVersion || '',
    status: d.isLocked ? 'locked' : d.status || 'offline',
    isLocked: Boolean(d.isLocked),
    lastActiveAt: toIso(d.lastActiveAt),
    batteryLevel: d.batteryLevel,
    batteryCharging: Boolean(d.batteryCharging),
    lastLocation: d.lastLocation
      ? { ...d.lastLocation, updatedAt: toIso(d.lastLocation.updatedAt) }
      : null,
    controls: {
      dailyLimitMinutes: controls.dailyLimitMinutes ?? null,
      minutesUsedToday: controls.minutesUsedToday ?? 0,
      bonusMinutesToday: controls.bonusMinutesToday ?? 0,
      dailyLimitExceeded: Boolean(controls.dailyLimitExceeded),
      scheduleEnabled: Boolean(controls.scheduleEnabled),
      scheduleWindows: controls.scheduleWindows || [],
      appBlockingEnabled: Boolean(controls.appBlockingEnabled),
      blockedAppsConfigured: Boolean(controls.blockedAppsConfigured),
      blockedAppCount: controls.blockedAppCount ?? 0,
      blockedCategoryCount: controls.blockedCategoryCount ?? 0,
      webFilterEnabled: Boolean(controls.webFilterEnabled),
      webFilterCategories: controls.webFilterCategories || [],
      locationSharingEnabled: Boolean(controls.locationSharingEnabled),
      screenTimeAuthorized: Boolean(controls.screenTimeAuthorized),
      appLimits: controls.appLimits || [],
      topApps: controls.topApps || [],
    },
    protectionStatus: {
      ...(d.protectionStatus || {}),
      lastCheckedAt: toIso(d.protectionStatus?.lastCheckedAt),
    },
    protectionCounters: {
      appBlocked: d.protectionCounters?.appBlocked ?? 0,
      tamper: d.protectionCounters?.tamper ?? 0,
    },
    webFilterBlockedCount: d.webFilterBlockedCount ?? 0,
    places: places.map((p) => ({
      id: p.id,
      name: p.name,
      radius: p.radiusMeters,
      alertOnEnter: Boolean(p.notifyOnEnter),
      alertOnExit: Boolean(p.notifyOnExit),
      inside: currentPlace != null && currentPlace === p.name,
    })),
    usage: [],
  }
}

function groupByDevice(rows) {
  const out = {}
  rows.forEach((r) => {
    const key = r.deviceId || '_'
    ;(out[key] ||= []).push(r)
  })
  return out
}

export function useFamilyData(user, selectedDeviceId) {
  const [familyId, setFamilyId] = useState(null)
  const [resolving, setResolving] = useState(true)
  const [error, setError] = useState(null)

  const [devices, setDevices] = useState([])
  const [devicesLoaded, setDevicesLoaded] = useState(false)
  const [familyDoc, setFamilyDoc] = useState(null)
  const [memberCount, setMemberCount] = useState(1)
  const [activityRows, setActivityRows] = useState([])
  const [timeRequestRows, setTimeRequestRows] = useState([])
  const [sosRows, setSosRows] = useState([])
  const [checkInRows, setCheckInRows] = useState([])
  const [rewardRows, setRewardRows] = useState([])
  const [usage, setUsage] = useState({})
  const [web, setWeb] = useState({})

  // 1. Resolve the family root.
  useEffect(() => {
    let cancelled = false
    if (!user) {
      setFamilyId(null)
      setResolving(false)
      return
    }
    setResolving(true)
    setError(null)
    getDoc(doc(db, 'users', user.uid))
      .then((snap) => {
        if (cancelled) return
        const memberFamilyId = snap.data()?.memberFamilyId
        setFamilyId(
          typeof memberFamilyId === 'string' &&
            memberFamilyId &&
            memberFamilyId !== user.uid
            ? memberFamilyId
            : user.uid,
        )
      })
      .catch((e) => {
        if (cancelled) return
        // A brand-new parent has no user doc yet; their own uid is the root.
        if (e?.code === 'permission-denied') setError(e)
        setFamilyId(user.uid)
      })
      .finally(() => !cancelled && setResolving(false))
    return () => {
      cancelled = true
    }
  }, [user])

  // 2. Family-level collections.
  useEffect(() => {
    if (!familyId) return
    const root = ['users', familyId]
    setDevicesLoaded(false)

    // Only the device list is fatal — without it there is nothing to show. A
    // single failing side panel (a collection this account cannot read, an
    // index that is still building) must degrade to an empty panel rather than
    // replacing the whole dashboard with an error screen.
    const fatal = (e) => setError(e)
    const soft = (name) => (e) =>
      console.warn(`[kidgate] ${name} listener failed:`, e?.code || e?.message)

    const subs = [
      onSnapshot(
        doc(db, ...root),
        (snap) => setFamilyDoc(snap.data() || null),
        soft('family'),
      ),
      onSnapshot(
        collection(db, ...root, 'members'),
        (snap) => setMemberCount(snap.size + 1),
        () => setMemberCount(1),
      ),
      onSnapshot(
        collection(db, ...root, 'childDevices'),
        (snap) => {
          setDevices(snap.docs.map((d) => mapDevice(d.id, d.data())))
          setDevicesLoaded(true)
        },
        (e) => {
          setDevicesLoaded(true)
          fatal(e)
        },
      ),
      onSnapshot(
        query(
          collection(db, ...root, 'activities'),
          orderBy('createdAt', 'desc'),
          limit(60),
        ),
        (snap) =>
          setActivityRows(
            snap.docs.map((d) => {
              const a = d.data()
              return {
                id: d.id,
                deviceId: a.deviceId,
                type: a.type,
                title: a.title || humanizeKey(a.titleKey),
                description: a.description || humanizeKey(a.descriptionKey),
                createdAt: toIso(a.createdAt),
              }
            }),
          ),
        soft('activities'),
      ),
      onSnapshot(
        query(
          collection(db, ...root, 'timeRequests'),
          orderBy('createdAt', 'desc'),
          limit(30),
        ),
        (snap) =>
          setTimeRequestRows(
            snap.docs.map((d) => ({
              id: d.id,
              ...d.data(),
              createdAt: toIso(d.data().createdAt),
            })),
          ),
        soft('timeRequests'),
      ),
      onSnapshot(
        query(
          collection(db, ...root, 'sosAlerts'),
          orderBy('createdAt', 'desc'),
          limit(20),
        ),
        (snap) =>
          setSosRows(
            snap.docs.map((d) => {
              const s = d.data()
              return {
                id: d.id,
                deviceId: s.deviceId,
                status: s.status,
                message: s.message || humanizeKey(s.messageKey) || 'SOS alert',
                location: s.location,
                createdAt: toIso(s.createdAt),
              }
            }),
          ),
        soft('sosAlerts'),
      ),
      onSnapshot(
        query(
          collection(db, ...root, 'safetyCheckIns'),
          orderBy('createdAt', 'desc'),
          limit(20),
        ),
        (snap) =>
          setCheckInRows(
            snap.docs.map((d) => ({
              id: d.id,
              ...d.data(),
              createdAt: toIso(d.data().createdAt),
              respondedAt: toIso(d.data().respondedAt),
            })),
          ),
        soft('safetyCheckIns'),
      ),
      onSnapshot(
        collection(db, ...root, 'rewardTasks'),
        (snap) =>
          setRewardRows(
            snap.docs.map((d) => {
              const t = d.data()
              return {
                id: d.id,
                deviceId: t.deviceId,
                title: t.title,
                minutes: t.rewardMinutes ?? t.minutes ?? 0,
                status: t.status,
                cadence: t.cadence || t.kind || 'once',
              }
            }),
          ),
        soft('rewardTasks'),
      ),
    ]

    return () => subs.forEach((u) => u())
  }, [familyId])

  // 3. Per-device subcollections, only for the device on screen.
  useEffect(() => {
    if (!familyId || !selectedDeviceId) return
    const base = ['users', familyId, 'childDevices', selectedDeviceId]

    // A date range ordered ascending, not `orderBy('date','desc')`: the
    // project's firestore.indexes.json deliberately withholds the
    // COLLECTION+DESCENDING single-field index on usageDays.date, so a
    // descending sort fails with a missing-index error. This is the same
    // access pattern UsageDayRepository uses, and the range also bounds the
    // read — nothing prunes usageDays, so an unbounded query would grow with
    // the device's whole history.
    const unsubUsage = onSnapshot(
      query(
        collection(db, ...base, 'usageDays'),
        where('date', '>=', localDateKey(29)),
        where('date', '<=', localDateKey(0)),
        orderBy('date', 'asc'),
      ),
      (snap) => {
        const rows = snap.docs.map((d) => {
          const u = d.data()
          return {
            date: u.date || d.id,
            minutes: u.minutes ?? 0,
            bonusMinutes: u.bonusMinutes ?? 0,
          }
        })
        setUsage((prev) => ({ ...prev, [selectedDeviceId]: rows }))
      },
      (e) => setError(e),
    )

    // Ordered by `date`, not `lastAt`: webHistory.date is the field the
    // project's index config explicitly keeps a descending index for.
    const unsubWeb = onSnapshot(
      query(collection(db, ...base, 'webHistory'), orderBy('date', 'desc'), limit(300)),
      (snap) => {
        // Stored one row per domain per day; the dashboard shows one row per
        // domain across the window.
        const byDomain = new Map()
        snap.docs.forEach((d) => {
          const w = d.data()
          const cur = byDomain.get(w.domain) || {
            domain: w.domain,
            visits: 0,
            blockedVisits: 0,
            category: null,
            lastAt: undefined,
          }
          cur.visits += w.visits ?? 0
          cur.blockedVisits += w.blockedVisits ?? 0
          cur.category = cur.category || w.category || null
          const at = toIso(w.lastAt)
          if (at && (!cur.lastAt || at > cur.lastAt)) cur.lastAt = at
          byDomain.set(w.domain, cur)
        })
        const rows = [...byDomain.values()]
          .sort((a, b) => b.visits - a.visits)
          .slice(0, 12)
        setWeb((prev) => ({ ...prev, [selectedDeviceId]: rows }))
      },
      (e) => setError(e),
    )

    return () => {
      unsubUsage()
      unsubWeb()
    }
  }, [familyId, selectedDeviceId])

  const data = useMemo(() => {
    const withUsage = devices.map((d) => ({ ...d, usage: usage[d.id] || [] }))
    return {
      family: {
        name: familyDoc?.familyName || familyDoc?.name || t('dash.fallbackFamily'),
        // Kept as a raw key, not a label: the pill is on screen permanently, so
        // it has to re-read when the language changes rather than freeze at the
        // wording captured when this snapshot arrived.
        plan: familyDoc?.subscriptionStatus === 'premium' ? 'premium' : 'trial',
        parents: Array.from({ length: memberCount }, (_, i) => ({ id: i })),
      },
      devices: withUsage,
      activities: groupByDevice(activityRows),
      timeRequests: groupByDevice(timeRequestRows),
      sosAlerts: groupByDevice(sosRows),
      checkIns: groupByDevice(checkInRows),
      rewardTasks: groupByDevice(rewardRows),
      places: Object.fromEntries(withUsage.map((d) => [d.id, d.places])),
      webHistory: web,
    }
  }, [
    devices,
    usage,
    web,
    familyDoc,
    memberCount,
    activityRows,
    timeRequestRows,
    sosRows,
    checkInRows,
    rewardRows,
  ])

  // The device list has to have arrived before rendering, or the dashboard
  // shows "no child device yet" for a beat on every load.
  return {
    data,
    familyId,
    loading: resolving || (Boolean(familyId) && !devicesLoaded),
    error,
  }
}
