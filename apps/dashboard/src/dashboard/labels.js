import { PROTECTION_PERMISSION_KEYS } from '@kidgate/schema/device';

/**
 * Which keys the child device may report, and therefore which are worth
 * rendering. The list comes from `@kidgate/schema` — it was duplicated here by
 * hand, and a permission added to the app would have gone unlabelled on the
 * web until someone noticed.
 *
 * The labels themselves live in the locale packs (`webCat.*`, `perm.*`). A
 * field the schema does not know about is left out rather than shown raw: a
 * parent reading `backgroundRefreshV2` learns less than they would from a gap.
 *
 * Web-filter categories used to have their own flat list here. They now come
 * from `WEB_FILTER_CATEGORY_GROUPS` in `@kidgate/core`, which the phone draws
 * from too — one order, one grouping, both parent surfaces.
 */
export const PERMISSION_KEYS = PROTECTION_PERMISSION_KEYS;

const PERMISSION_SET = new Set(PERMISSION_KEYS);

export function isKnownPermission(key) {
  return PERMISSION_SET.has(key);
}

export function permissionLabel(t, key) {
  return t(`perm.${key}`);
}

export function webCategoryLabel(t, key) {
  return t(`webCat.${key}`);
}

export function webCategoryGroupLabel(t, id) {
  return t(`webCatGroup.${id}`);
}
