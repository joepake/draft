/**
 * Web-filter category labels, from the web pack (`webCat.*`).
 *
 * Categories used to have their own flat list here. They now come from
 * `WEB_FILTER_CATEGORY_GROUPS` in `@kidgate/core`, which the phone draws from
 * too — one order, one grouping, both parent surfaces. Permission names went
 * the same way on 2026-10-23: `@kidgate/core/domain/permissionChecklist`.
 */
export function webCategoryLabel(t, key) {
  return t(`webCat.${key}`);
}

export function webCategoryGroupLabel(t, id) {
  return t(`webCatGroup.${id}`);
}
