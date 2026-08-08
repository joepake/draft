/**
 * Field values the child device reports as bare keys. Order matters: the Web
 * Filter category chips render in this order, matching the app's own list.
 *
 * The labels themselves live in the locale packs (`webCat.*`, `perm.*`); these
 * arrays are what tells the dashboard which keys exist and are worth showing —
 * a protection field the app adds later shows up in Firestore before it has a
 * label here, and rendering a raw key like `backgroundRefreshV2` to a parent
 * is worse than leaving it out.
 */
export const WEB_CATEGORY_KEYS = [
  'adult',
  'gambling',
  'dating',
  'drugs',
  'violence',
  'piracy',
  'social',
  'videoStreaming',
  'gaming',
  'shopping',
]

export const PERMISSION_KEYS = [
  'screenTime',
  'location',
  'notifications',
  'camera',
  'backgroundAppRefresh',
  'overlay',
  'batteryOptimization',
  'exactAlarm',
  'accessibility',
]

const PERMISSION_SET = new Set(PERMISSION_KEYS)

export function isKnownPermission(key) {
  return PERMISSION_SET.has(key)
}

export function permissionLabel(t, key) {
  return t(`perm.${key}`)
}

export function webCategoryLabel(t, key) {
  return t(`webCat.${key}`)
}
