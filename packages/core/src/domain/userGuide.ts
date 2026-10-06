/**
 * The user guide's shape — which topics, in which groups, how many steps, on
 * which device each step happens. The words are each locale's `userGuide` pack.
 *
 * Here rather than in an app because both parent consoles render it:
 * `apps/mobile` (Settings → Help) and `apps/dashboard` (Support).
 */
import type { IconName } from '@kidgate/tokens/icons';

export type UserGuideGroupId =
  | 'gettingStarted'
  | 'connection'
  | 'permissions'
  | 'controls'
  | 'safety'
  | 'reports'
  | 'account';

export type UserGuideTopicId =
  | 'getStartedParent'
  | 'getStartedChild'
  | 'connectChild'
  | 'connectComputer'
  | 'connectTv'
  | 'connectChrome'
  | 'inviteParent'
  | 'joinFamily'
  | 'manageDevices'
  | 'androidPermissions'
  | 'iosScreenTime'
  | 'oemKeepRunning'
  | 'dailyLimit'
  | 'blockedHours'
  | 'blockedApps'
  | 'appLimits'
  | 'lockUnlock'
  | 'pauseBrowsing'
  | 'timeRequests'
  | 'rewardTasks'
  | 'locationSharing'
  | 'checkIn'
  | 'sos'
  | 'webFilter'
  | 'protectionAlerts'
  | 'usageReports'
  | 'widget'
  | 'webHistory'
  | 'videoHistory'
  | 'appAlerts'
  | 'messageAlerts'
  | 'childProfiles'
  | 'plans'
  | 'notificationSettings'
  | 'appLanguage'
  | 'webSignIn'
  | 'securityPins'
  | 'reportProblem'
  | 'deleteAccount';

/**
 * Which phone a step is performed on.
 *
 * The guide is only reachable from the parent's own Settings, and the whole
 * permissions group happens on the *child's* phone — a parent reading "open
 * Accessibility" while holding the wrong device is the confusion this names.
 * Only the topics that genuinely mix the two carry it; a tag on every step of
 * every topic is noise that stops being read.
 */
export type GuideStepDevice = 'child' | 'parent';

export type UserGuideTopicConfig = {
  id: UserGuideTopicId;
  groupId: UserGuideGroupId;
  icon: IconName;
  stepCount: number;
  /** One entry per step, in order. Length is pinned to `stepCount` by a test. */
  stepDevices?: GuideStepDevice[];
  /**
   * Show the pointer to the child device's own setup wizard.
   *
   * For the permission topics that is the better route by a distance: the
   * wizard has a button per step that opens the exact system screen, which no
   * amount of prose on the parent's phone can do.
   */
  handoff?: boolean;
};

export type UserGuideGroupConfig = {
  id: UserGuideGroupId;
  icon: IconName;
  topicIds: UserGuideTopicId[];
};

export const USER_GUIDE_TOPICS: UserGuideTopicConfig[] = [
  {
    id: 'getStartedParent',
    groupId: 'gettingStarted',
    icon: 'user',
    stepCount: 7,
  },
  {
    id: 'getStartedChild',
    groupId: 'gettingStarted',
    icon: 'smartphone',
    stepCount: 6,
  },
  {
    id: 'connectChild',
    groupId: 'connection',
    icon: 'devices',
    stepCount: 8,
  },
  // The three non-phone agents: each pairs from the parent's phone but is
  // installed and set up on the child's own screen, so every step is tagged.
  // Step 1 names an install location that is a placeholder until each surface
  // ships (`docs/SETUP_GOLIVE.md` F1).
  {
    id: 'connectComputer',
    groupId: 'connection',
    icon: 'mac',
    stepCount: 7,
    stepDevices: ['child', 'child', 'child', 'parent', 'child', 'child', 'parent'],
  },
  {
    id: 'connectTv',
    groupId: 'connection',
    icon: 'tv',
    stepCount: 7,
    stepDevices: ['child', 'child', 'parent', 'child', 'child', 'child', 'parent'],
  },
  {
    id: 'connectChrome',
    groupId: 'connection',
    icon: 'extension',
    stepCount: 6,
    stepDevices: ['child', 'child', 'parent', 'child', 'parent', 'parent'],
  },
  {
    id: 'inviteParent',
    groupId: 'connection',
    icon: 'mail',
    stepCount: 6,
  },
  {
    id: 'joinFamily',
    groupId: 'connection',
    icon: 'home',
    stepCount: 5,
  },
  {
    id: 'manageDevices',
    groupId: 'connection',
    icon: 'pencil',
    stepCount: 5,
  },
  {
    id: 'androidPermissions',
    groupId: 'permissions',
    icon: 'android',
    stepCount: 8,
    stepDevices: [
      'child',
      'child',
      'child',
      'child',
      'child',
      'child',
      'child',
      'child',
    ],
    handoff: true,
  },
  {
    id: 'iosScreenTime',
    groupId: 'permissions',
    icon: 'apple',
    stepCount: 7,
    // Step 7 is the one that moves back to the parent's phone, and it is the
    // step families get wrong — the blocked-app list is chosen on the child's
    // device and only confirmed here.
    stepDevices: ['child', 'child', 'child', 'child', 'child', 'child', 'parent'],
    handoff: true,
  },
  {
    id: 'oemKeepRunning',
    groupId: 'permissions',
    icon: 'refresh',
    stepCount: 6,
    stepDevices: ['child', 'child', 'child', 'child', 'child', 'child'],
    handoff: true,
  },
  {
    id: 'dailyLimit',
    groupId: 'controls',
    icon: 'clock',
    stepCount: 5,
  },
  {
    id: 'blockedHours',
    groupId: 'controls',
    icon: 'moon',
    stepCount: 6,
  },
  {
    id: 'blockedApps',
    groupId: 'controls',
    icon: 'ban',
    stepCount: 7,
  },
  {
    id: 'lockUnlock',
    groupId: 'controls',
    icon: 'lock',
    stepCount: 6,
  },
  {
    id: 'appLimits',
    groupId: 'controls',
    icon: 'apps',
    stepCount: 5,
  },
  {
    id: 'pauseBrowsing',
    groupId: 'controls',
    icon: 'hourglass',
    stepCount: 5,
  },
  // Both are a round trip between the two phones — the child asks or claims,
  // the parent answers — so every step is tagged.
  {
    id: 'timeRequests',
    groupId: 'controls',
    icon: 'plus',
    stepCount: 5,
    stepDevices: ['child', 'parent', 'parent', 'child', 'parent'],
  },
  {
    id: 'rewardTasks',
    groupId: 'controls',
    icon: 'star',
    stepCount: 6,
    stepDevices: ['parent', 'parent', 'child', 'parent', 'parent', 'parent'],
  },
  {
    id: 'locationSharing',
    groupId: 'safety',
    icon: 'mapPin',
    stepCount: 6,
  },
  {
    id: 'checkIn',
    groupId: 'safety',
    icon: 'userCheck',
    stepCount: 5,
  },
  {
    id: 'sos',
    groupId: 'safety',
    icon: 'siren',
    stepCount: 6,
    stepDevices: ['child', 'child', 'child', 'parent', 'parent', 'parent'],
  },
  {
    id: 'webFilter',
    groupId: 'safety',
    icon: 'globe',
    stepCount: 4,
  },
  {
    id: 'protectionAlerts',
    groupId: 'safety',
    icon: 'shieldAlert',
    stepCount: 5,
  },
  {
    id: 'usageReports',
    groupId: 'reports',
    icon: 'chart',
    stepCount: 5,
  },
  {
    id: 'widget',
    groupId: 'reports',
    icon: 'grid',
    stepCount: 5,
    stepDevices: ['parent', 'parent', 'parent', 'parent', 'child'],
  },
  {
    id: 'webHistory',
    groupId: 'reports',
    icon: 'activity',
    stepCount: 5,
  },
  {
    id: 'videoHistory',
    groupId: 'reports',
    icon: 'play',
    stepCount: 5,
    // Step 3 is the notification-access grant on the child's Android phone:
    // without it the switch reads "Recording" and the list stays empty.
    stepDevices: ['parent', 'parent', 'child', 'parent', 'parent'],
  },
  {
    id: 'appAlerts',
    groupId: 'reports',
    icon: 'appInstall',
    stepCount: 5,
  },
  {
    id: 'messageAlerts',
    groupId: 'reports',
    icon: 'message',
    stepCount: 5,
    stepDevices: ['child', 'parent', 'parent', 'child', 'parent'],
  },
  {
    id: 'childProfiles',
    groupId: 'gettingStarted',
    icon: 'users',
    stepCount: 5,
  },
  {
    id: 'plans',
    groupId: 'account',
    icon: 'crown',
    stepCount: 5,
  },
  {
    id: 'notificationSettings',
    groupId: 'account',
    icon: 'bell',
    stepCount: 5,
  },
  {
    id: 'appLanguage',
    groupId: 'account',
    icon: 'globe',
    stepCount: 4,
  },
  {
    id: 'webSignIn',
    groupId: 'account',
    icon: 'globe',
    stepCount: 5,
  },
  {
    id: 'securityPins',
    groupId: 'account',
    icon: 'key',
    stepCount: 5,
  },
  {
    id: 'reportProblem',
    groupId: 'account',
    icon: 'mail',
    stepCount: 5,
  },
  {
    id: 'deleteAccount',
    groupId: 'account',
    icon: 'trash',
    stepCount: 5,
  },
];

export const USER_GUIDE_GROUPS: UserGuideGroupConfig[] = [
  {
    id: 'gettingStarted',
    icon: 'sparkles',
    topicIds: ['getStartedParent', 'getStartedChild', 'childProfiles'],
  },
  {
    id: 'connection',
    icon: 'link',
    topicIds: [
      'connectChild',
      'connectComputer',
      'connectTv',
      'connectChrome',
      'inviteParent',
      'joinFamily',
      'manageDevices',
    ],
  },
  {
    id: 'permissions',
    icon: 'key',
    topicIds: ['androidPermissions', 'iosScreenTime', 'oemKeepRunning'],
  },
  {
    id: 'controls',
    icon: 'settings',
    topicIds: [
      'dailyLimit',
      'blockedHours',
      'blockedApps',
      'appLimits',
      'lockUnlock',
      'pauseBrowsing',
      'timeRequests',
      'rewardTasks',
    ],
  },
  {
    id: 'safety',
    icon: 'shield',
    topicIds: ['locationSharing', 'checkIn', 'sos', 'webFilter', 'protectionAlerts'],
  },
  {
    id: 'reports',
    icon: 'chart',
    topicIds: [
      'usageReports',
      'widget',
      'webHistory',
      'videoHistory',
      'appAlerts',
      'messageAlerts',
    ],
  },
  {
    id: 'account',
    icon: 'user',
    topicIds: [
      'plans',
      'notificationSettings',
      'appLanguage',
      'webSignIn',
      'securityPins',
      'reportProblem',
      'deleteAccount',
    ],
  },
];

export function getUserGuideTopic(topicId: string): UserGuideTopicConfig | undefined {
  return USER_GUIDE_TOPICS.find(topic => topic.id === topicId);
}

/**
 * A topic's steps, in order, out of one locale's `userGuide` pack node.
 *
 * The pack stores them as `{ '1': …, '2': … }`; blank entries are dropped.
 */
export function readGuideSteps(guide: unknown, topicId: string): string[] {
  const steps = (
    guide as
      { topics?: Record<string, { steps?: Record<string, unknown> }> } | undefined
  )?.topics?.[topicId]?.steps;
  if (!steps || typeof steps !== 'object') {
    return [];
  }
  return Object.keys(steps)
    .sort((a, b) => Number(a) - Number(b))
    .map(key => steps[key])
    .filter(
      (value): value is string => typeof value === 'string' && value.trim().length > 0,
    );
}

export type GuideStepSegment =
  { kind: 'text'; value: string } | { kind: 'chip'; value: string };

const CHIP_TOKEN = /\[\[(.+?)\]\]/g;

/**
 * Split a step into plain runs and chips — `[[Family]]` names a button the
 * parent is told to press, and each console draws it as a pill. The marker is
 * `[[…]]` rather than `{{…}}` because the latter is `translate()`'s
 * interpolation and would be eaten first.
 *
 * An unmatched `[[` is left as literal text rather than swallowed: half a
 * marker in one of fourteen packs is a typo, and printing it is how somebody
 * notices. `guideChipTokens.test.ts` is what should catch it first.
 */
export function parseGuideStep(text: string): GuideStepSegment[] {
  const segments: GuideStepSegment[] = [];
  let cursor = 0;

  for (const match of text.matchAll(CHIP_TOKEN)) {
    const start = match.index ?? 0;
    if (start > cursor) {
      segments.push({ kind: 'text', value: text.slice(cursor, start) });
    }
    segments.push({ kind: 'chip', value: (match[1] ?? '').trim() });
    cursor = start + match[0].length;
  }

  if (cursor < text.length) {
    segments.push({ kind: 'text', value: text.slice(cursor) });
  }
  return segments;
}
