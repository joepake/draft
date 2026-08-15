import { PROTECTION_PERMISSION_KEYS } from '@kidgate/schema/device';
import { WEB_FILTER_CATEGORIES } from '@kidgate/schema/webActivity';

/**
 * Which keys the child device may report, and therefore which are worth
 * rendering. Both lists come from `@kidgate/schema` — they were duplicated here
 * by hand, and a category added to the app would have gone unlabelled on the
 * web until someone noticed.
 *
 * The labels themselves live in the locale packs (`webCat.*`, `perm.*`). A
 * field the schema does not know about is left out rather than shown raw: a
 * parent reading `backgroundRefreshV2` learns less than they would from a gap.
 */
export const WEB_CATEGORY_KEYS = WEB_FILTER_CATEGORIES;

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
