import {
  getVisibleActionSections,
  getVisibleActionSectionsForDevices,
  isActionSupported,
  isPersonLevelAction,
  omitPersonLevelActions,
} from '@kidgate/core/domain/deviceDetailActions';
import {
  platformLabelKey,
  resolveDisplayFormFactor,
} from '@kidgate/core/domain/deviceFormFactor';
import {
  focusOfHit,
  foldForSearch,
  guideSnippet,
  matchesQuery,
  searchUserGuide,
} from '@kidgate/core/domain/userGuideSearch';

/**
 * The header search's results — the phone's `FamilySearchScreen` rows, as plain
 * data. No React and no glyph component, so the root vitest can run it
 * (`searchSections.test.js`); `SearchSheet` draws what this returns.
 *
 * Sections in the phone's order — children, devices, features, guide, go to —
 * and only the ones with a row. Features wait for a typed word: a card per
 * device per feature is too long a list to show untyped. Guide topics wait too,
 * because `searchUserGuide` answers null for an empty query.
 *
 * A device matches on its child's name, so typing a child finds everything they
 * carry. A child's own cards (blocked hours, the web filter — never Location,
 * which stays per device) land the way the hub's grid lands them: on the first
 * machine that can carry the card.
 *
 * @param {object} input
 * @param {(key: string, params?: object) => string} input.appT the app pack
 * @param {{ t: Function } | null} input.guide the guide pack, null until loaded
 * @param {Array} input.guideIndex `buildUserGuideSearchIndex` over that pack
 * @param {(device: object) => string} input.deviceIcon the glyph name
 * @param {object} input.open where each kind of row lands — `child(id)`,
 *   `device(device)`, `card(device, action)`, `section(id)`,
 *   `guide(topicId | null, focus)`
 */
export function buildSearchSections({
  appT,
  guide,
  guideIndex,
  familyChildren,
  devices,
  query,
  deviceIcon,
  open,
}) {
  const childName = new Map(familyChildren.map(child => [child.id, child.name]));
  const childRows = familyChildren.map(child => ({
    key: child.id,
    icon: 'user',
    title: child.name,
    open: () => open.child(child.id),
  }));
  const deviceRows = devices.map(device => ({
    key: device.id,
    icon: deviceIcon(device),
    title: device.name,
    subtitle: [
      device.childId ? childName.get(device.childId) : undefined,
      appT(platformLabelKey(device.platform, resolveDisplayFormFactor(device))),
    ]
      .filter(Boolean)
      .join(' · '),
    open: () => open.device(device),
  }));
  const featureRows = [
    ...devices.flatMap(device => {
      const owner = device.childId ? childName.get(device.childId) : undefined;
      return omitPersonLevelActions(
        getVisibleActionSections(appT, device, false),
        device.childId,
      ).flatMap(section =>
        section.actions.map(action => ({
          key: `${device.id}:${action.id}`,
          icon: action.icon,
          title: action.title,
          subtitle: [device.name, owner].filter(Boolean).join(' · '),
          match: action.description,
          open: () => open.card(device, action),
        })),
      );
    }),
    ...familyChildren.flatMap(child => {
      const carried = devices.filter(device => device.childId === child.id);
      if (carried.length === 0) return [];
      return getVisibleActionSectionsForDevices(appT, carried, false).flatMap(section =>
        section.actions.filter(isPersonLevelAction).map(action => ({
          key: `${child.id}:${action.id}`,
          icon: action.icon,
          title: action.title,
          subtitle: child.name,
          match: action.description,
          open: () =>
            open.card(
              carried.find(device => isActionSupported(action, device)) ?? carried[0],
              action,
            ),
        })),
      );
    }),
  ];
  const guideRows = guide
    ? (searchUserGuide(guideIndex, query) ?? []).map(hit => ({
        key: hit.topicId,
        icon: 'book',
        title: guide.t(`userGuide.topics.${hit.topicId}.title`),
        subtitle: guideSnippet(hit, query, guide.t),
        phraseOnly: hit.phrase,
        open: () => open.guide(hit.topicId, focusOfHit(hit)),
      }))
    : [];
  // Pages reached without picking anyone first, named the way the menu names them.
  const goToRows = [
    { key: 'activity', icon: 'activity', title: appT('nav.activities') },
    { key: 'report', icon: 'chart', title: appT('nav.reports') },
    { key: 'settings', icon: 'settings', title: appT('nav.settings') },
    { key: 'support', icon: 'mail', title: appT('supportReports.title') },
  ]
    .map(row => ({ ...row, open: () => open.section(row.key) }))
    .concat({
      key: 'userGuide',
      icon: 'book',
      title: appT('settings.userGuideTitle'),
      subtitle: appT('settings.userGuideSubtitle'),
      open: () => open.guide(null),
    });

  const matching = rows =>
    rows.filter(row =>
      matchesQuery(`${row.title} ${row.subtitle ?? ''} ${row.match ?? ''}`, query),
    );
  const typed = foldForSearch(query) !== '';
  return [
    {
      id: 'children',
      title: appT('leaderboard.childrenTitle'),
      rows: matching(childRows),
    },
    {
      id: 'devices',
      title: appT('family.childDetailDevicesTitle'),
      rows: matching(deviceRows),
    },
    {
      id: 'features',
      title: appT('family.searchSectionFeatures'),
      rows: typed ? matching(featureRows) : [],
    },
    { id: 'guide', title: guide ? guide.t('userGuide.title') : '', rows: guideRows },
    { id: 'goTo', title: appT('family.searchSectionGoTo'), rows: matching(goToRows) },
  ].filter(section => section.rows.length > 0);
}
