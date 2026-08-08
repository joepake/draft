/**
 * Demo data for the parent dashboard preview.
 *
 * Shapes mirror the KidGate app types (Device, DeviceControls, UsageDay,
 * Activity, SosAlert, SafetyCheckIn, TimeRequest, WebHistoryEntry, RewardTask)
 * so this module is the only thing that has to change when the dashboard is
 * wired to Firestore.
 */

const DAY_MS = 86400000

function isoDaysAgo(days, hour = 12, minute = 0) {
  const d = new Date(Date.now() - days * DAY_MS)
  d.setHours(hour, minute, 0, 0)
  return d.toISOString()
}

function minutesAgo(mins) {
  return new Date(Date.now() - mins * 60000).toISOString()
}

function dateKey(days) {
  return new Date(Date.now() - days * DAY_MS).toISOString().slice(0, 10)
}

/** 30 days of usage, weekend-heavy, with a believable amount of noise. */
function buildUsage(seed, base, weekendBoost) {
  const out = []
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i * DAY_MS)
    const weekend = d.getDay() === 0 || d.getDay() === 6
    const wobble = Math.sin((i + seed) * 1.7) * 28 + Math.cos((i + seed) * 0.9) * 17
    const minutes = Math.max(
      12,
      Math.round(base + (weekend ? weekendBoost : 0) + wobble),
    )
    const bonus = i % 6 === 2 ? 15 : i % 9 === 4 ? 30 : 0
    out.push({ date: dateKey(i), minutes, bonusMinutes: bonus })
  }
  return out
}

export const family = {
  name: 'Nguyen family',
  ownerEmail: 'parent@kidgate.app',
  plan: 'Premium',
  parents: [
    { id: 'p1', name: 'Thuc', role: 'owner' },
    { id: 'p2', name: 'Mai', role: 'parent' },
  ],
}

export const devices = [
  {
    id: 'dev-minh',
    name: "Minh's iPhone",
    childName: 'Minh',
    age: 13,
    initials: 'M',
    platform: 'ios',
    modelName: 'iPhone 13',
    osVersion: '18.4',
    status: 'online',
    isLocked: false,
    lastActiveAt: minutesAgo(3),
    batteryLevel: 62,
    batteryCharging: false,
    lastLocation: {
      placeName: 'School',
      address: 'Le Quy Don Secondary School',
      updatedAt: minutesAgo(11),
    },
    controls: {
      dailyLimitMinutes: 180,
      minutesUsedToday: 134,
      bonusMinutesToday: 15,
      dailyLimitExceeded: false,
      scheduleEnabled: true,
      scheduleWindows: [
        { start: '22:00', end: '06:30', days: [0, 1, 2, 3, 4, 5, 6], label: 'Bedtime' },
        { start: '07:30', end: '11:30', days: [1, 2, 3, 4, 5], label: 'School' },
        { start: '19:00', end: '20:30', days: [1, 2, 3, 4], label: 'Homework' },
      ],
      appBlockingEnabled: true,
      blockedAppsConfigured: true,
      blockedAppCount: 6,
      blockedCategoryCount: 2,
      webFilterEnabled: true,
      webFilterCategories: ['adult', 'gambling', 'dating', 'drugs', 'violence', 'piracy'],
      locationSharingEnabled: true,
      screenTimeAuthorized: true,
      appLimits: [
        { id: 'tiktok', label: 'TikTok', minutes: 45 },
        { id: 'youtube', label: 'YouTube', minutes: 60 },
        { id: 'roblox', label: 'Roblox', minutes: 40 },
      ],
      topApps: [
        { packageName: 'youtube', label: 'YouTube', minutes: 48 },
        { packageName: 'tiktok', label: 'TikTok', minutes: 52 },
        { packageName: 'messenger', label: 'Messenger', minutes: 21 },
        { packageName: 'roblox', label: 'Roblox', minutes: 18 },
        { packageName: 'chrome', label: 'Chrome', minutes: 9 },
        { packageName: 'duolingo', label: 'Duolingo', minutes: 6 },
      ],
    },
    protectionStatus: {
      screenTime: 'authorized',
      location: 'authorized',
      notifications: 'authorized',
      camera: 'authorized',
      backgroundAppRefresh: 'denied',
      lastCheckedAt: minutesAgo(11),
    },
    protectionCounters: { appBlocked: 41, tamper: 2 },
    webFilterBlockedCount: 17,
    usage: buildUsage(1, 128, 70),
  },
  {
    id: 'dev-linh',
    name: "Linh's Galaxy A54",
    childName: 'Linh',
    age: 9,
    initials: 'L',
    platform: 'android',
    modelName: 'Galaxy A54',
    osVersion: '15',
    status: 'locked',
    isLocked: true,
    lastActiveAt: minutesAgo(48),
    batteryLevel: 23,
    batteryCharging: false,
    lastLocation: {
      placeName: 'Home',
      address: '12 Nguyen Hue, District 1',
      updatedAt: minutesAgo(52),
    },
    controls: {
      dailyLimitMinutes: 120,
      minutesUsedToday: 120,
      bonusMinutesToday: 0,
      dailyLimitExceeded: true,
      scheduleEnabled: true,
      scheduleWindows: [
        { start: '21:00', end: '07:00', days: [0, 1, 2, 3, 4, 5, 6], label: 'Bedtime' },
        { start: '08:00', end: '11:00', days: [1, 2, 3, 4, 5], label: 'School' },
      ],
      appBlockingEnabled: true,
      blockedAppsConfigured: true,
      blockedAppCount: 11,
      blockedCategoryCount: 3,
      webFilterEnabled: true,
      webFilterCategories: ['adult', 'gambling', 'dating', 'drugs', 'violence', 'piracy', 'social'],
      locationSharingEnabled: true,
      screenTimeAuthorized: true,
      appLimits: [
        { id: 'roblox', label: 'Roblox', minutes: 30 },
        { id: 'youtubekids', label: 'YouTube Kids', minutes: 45 },
      ],
      topApps: [
        { packageName: 'roblox', label: 'Roblox', minutes: 38 },
        { packageName: 'youtubekids', label: 'YouTube Kids', minutes: 34 },
        { packageName: 'zalo', label: 'Zalo', minutes: 16 },
        { packageName: 'camera', label: 'Camera', minutes: 12 },
        { packageName: 'chrome', label: 'Chrome', minutes: 11 },
        { packageName: 'monkeyjunior', label: 'Monkey Junior', minutes: 9 },
      ],
    },
    protectionStatus: {
      screenTime: 'authorized',
      location: 'authorized',
      notifications: 'authorized',
      camera: 'denied',
      overlay: 'authorized',
      batteryOptimization: 'denied',
      exactAlarm: 'authorized',
      accessibility: 'authorized',
      lastCheckedAt: minutesAgo(52),
    },
    protectionCounters: { appBlocked: 96, tamper: 5 },
    webFilterBlockedCount: 63,
    usage: buildUsage(7, 96, 55),
  },
]

export const activities = {
  'dev-minh': [
    { id: 'a1', type: 'app_blocked', title: 'TikTok blocked', description: 'Daily app limit reached', createdAt: minutesAgo(24) },
    { id: 'a2', type: 'screen_time', title: 'Screen time synced', description: '134 minutes today', createdAt: minutesAgo(31) },
    { id: 'a3', type: 'place_enter', title: 'Arrived at School', description: 'Le Quy Don Secondary School', createdAt: minutesAgo(196) },
    { id: 'a4', type: 'device_unlocked', title: 'Device unlocked', description: 'By Thuc · +15 min bonus', createdAt: minutesAgo(238) },
    { id: 'a5', type: 'app_installed', title: 'New app installed', description: 'CapCut', createdAt: minutesAgo(402) },
    { id: 'a6', type: 'device_locked', title: 'Blocked Hours started', description: 'Bedtime · 22:00–06:30', createdAt: minutesAgo(880) },
    { id: 'a7', type: 'tamper', title: 'Background App Refresh off', description: 'Protection weakened', createdAt: minutesAgo(1310) },
  ],
  'dev-linh': [
    { id: 'b1', type: 'device_locked', title: 'Device locked', description: 'Daily Limit reached', createdAt: minutesAgo(48) },
    { id: 'b2', type: 'app_blocked', title: 'Roblox blocked', description: 'App limit reached', createdAt: minutesAgo(72) },
    { id: 'b3', type: 'tamper', title: 'Camera permission off', description: 'Check-In photos unavailable', createdAt: minutesAgo(150) },
    { id: 'b4', type: 'place_exit', title: 'Left Home', description: '12 Nguyen Hue', createdAt: minutesAgo(430) },
    { id: 'b5', type: 'app_removed', title: 'App removed', description: 'Free Fire', createdAt: minutesAgo(700) },
    { id: 'b6', type: 'screen_time', title: 'Screen time synced', description: '120 minutes today', createdAt: minutesAgo(910) },
  ],
}

export const timeRequests = {
  'dev-minh': [
    { id: 't1', requestedMinutes: 30, reason: 'Finishing a group project call', status: 'pending', createdAt: minutesAgo(9) },
  ],
  'dev-linh': [
    { id: 't2', requestedMinutes: 20, reason: 'One more Roblox round', status: 'pending', createdAt: minutesAgo(41) },
    { id: 't3', requestedMinutes: 15, reason: 'Homework video', status: 'approved', createdAt: minutesAgo(1500) },
  ],
}

export const sosAlerts = {
  'dev-minh': [],
  'dev-linh': [
    { id: 's1', status: 'acknowledged', message: 'SOS from Linh', createdAt: isoDaysAgo(4, 17, 42), acknowledgedAt: isoDaysAgo(4, 17, 44), location: { placeName: 'Park', address: 'Tao Dan Park' } },
  ],
}

export const checkIns = {
  'dev-minh': [
    { id: 'c1', status: 'safe', requirePhoto: true, createdAt: minutesAgo(190), respondedAt: minutesAgo(188), location: { placeName: 'School' } },
    { id: 'c2', status: 'safe', requirePhoto: false, createdAt: isoDaysAgo(1, 16, 10), respondedAt: isoDaysAgo(1, 16, 12), location: { placeName: 'Home' } },
  ],
  'dev-linh': [
    { id: 'c3', status: 'missed', requirePhoto: true, createdAt: minutesAgo(300), location: null },
    { id: 'c4', status: 'safe', requirePhoto: true, photoSkipped: true, createdAt: isoDaysAgo(2, 15, 5), respondedAt: isoDaysAgo(2, 15, 8), location: { placeName: 'Home' } },
  ],
}

export const places = {
  'dev-minh': [
    { id: 'pl1', name: 'Home', radius: 150, alertOnEnter: true, alertOnExit: true, inside: false },
    { id: 'pl2', name: 'School', radius: 200, alertOnEnter: true, alertOnExit: true, inside: true },
    { id: 'pl3', name: 'Grandma', radius: 120, alertOnEnter: true, alertOnExit: false, inside: false },
  ],
  'dev-linh': [
    { id: 'pl4', name: 'Home', radius: 150, alertOnEnter: true, alertOnExit: true, inside: true },
    { id: 'pl5', name: 'School', radius: 200, alertOnEnter: true, alertOnExit: true, inside: false },
  ],
}

export const webHistory = {
  'dev-minh': [
    { domain: 'youtube.com', visits: 184, blockedVisits: 0, category: null, lastAt: minutesAgo(22) },
    { domain: 'tiktok.com', visits: 121, blockedVisits: 0, category: null, lastAt: minutesAgo(28) },
    { domain: 'roblox.com', visits: 64, blockedVisits: 0, category: null, lastAt: minutesAgo(210) },
    { domain: 'wikipedia.org', visits: 39, blockedVisits: 0, category: null, lastAt: minutesAgo(240) },
    { domain: 'bet-arena.net', visits: 9, blockedVisits: 9, category: 'gambling', lastAt: minutesAgo(320) },
    { domain: 'xh-stream.co', visits: 6, blockedVisits: 6, category: 'adult', lastAt: minutesAgo(1180) },
    { domain: 'torrent-hub.io', visits: 2, blockedVisits: 2, category: 'piracy', lastAt: isoDaysAgo(3, 21, 15) },
  ],
  'dev-linh': [
    { domain: 'youtubekids.com', visits: 143, blockedVisits: 0, category: null, lastAt: minutesAgo(60) },
    { domain: 'roblox.com', visits: 98, blockedVisits: 0, category: null, lastAt: minutesAgo(75) },
    { domain: 'monkeyjunior.com', visits: 41, blockedVisits: 0, category: null, lastAt: minutesAgo(400) },
    { domain: 'instagram.com', visits: 28, blockedVisits: 28, category: 'social', lastAt: minutesAgo(120) },
    { domain: 'lucky-spin.win', visits: 19, blockedVisits: 19, category: 'gambling', lastAt: minutesAgo(500) },
    { domain: 'adult-tube.xyz', visits: 11, blockedVisits: 11, category: 'adult', lastAt: isoDaysAgo(2, 20, 40) },
    { domain: 'freefire-hack.ru', visits: 5, blockedVisits: 5, category: 'piracy', lastAt: isoDaysAgo(5, 19, 12) },
  ],
}

export const rewardTasks = {
  'dev-minh': [
    { id: 'r1', title: 'Finish homework', minutes: 20, status: 'claimed', cadence: 'daily' },
    { id: 'r2', title: 'Read 30 minutes', minutes: 15, status: 'approved', cadence: 'daily' },
    { id: 'r3', title: 'Tidy your room', minutes: 25, status: 'open', cadence: 'weekly' },
  ],
  'dev-linh': [
    { id: 'r4', title: 'Practice piano', minutes: 15, status: 'open', cadence: 'daily' },
    { id: 'r5', title: 'Help with dishes', minutes: 10, status: 'claimed', cadence: 'daily' },
  ],
}

/** Everything the dashboard needs, in one object, mirroring useFamilyData. */
export const demoData = {
  family,
  devices,
  activities,
  timeRequests,
  sosAlerts,
  checkIns,
  places,
  webHistory,
  rewardTasks,
}
