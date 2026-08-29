/**
 * Whether message monitoring is actually watching, and what a parent surface
 * should say when it is not.
 *
 * The failure this exists to stop is a screen full of nothing. Message Alerts
 * renders an empty list with "no alerts" under it whether the feature caught
 * nothing all week or was never switched on — and those read identically to a
 * parent while meaning opposite things. An empty list is only reassuring if
 * something was listening.
 *
 * Shapes and the reason there are three of them:
 * `@kidgate/schema/messageMonitoringState`. Everything here is derived from the
 * device's own report; nothing is inferred from a platform except the one case
 * where the platform settles it (iOS cannot do this at all).
 *
 * Returns keys, never sentences — `packages/core` renders no copy, and both
 * parent surfaces have their own `t()`.
 */

import type {
  DeviceMessageMonitoringState,
  MessageMonitoringHalfState,
} from '@kidgate/schema/messageMonitoringState';
import { supportsMessageMonitoring, type AppInstallAlertInput } from './alertSupport';

/**
 * One half's state, in the order a reader ranks them.
 *
 * `revoked` is the only one that is a defect rather than a choice: the switch
 * says on, the OS consent behind it is gone, and nobody has been told. Android
 * produces it by itself — an accessibility grant does not survive every OS
 * update, a battery optimiser can drop a listener, and a child who finds the
 * Settings entry can turn it off in two taps without uninstalling anything.
 */
export type MessageMonitoringHalfStatus =
  /** The platform has no such channel — iOS, a TV, a browser extension. */
  | 'unsupported'
  /** The device has published nothing: an older build, or not beaten yet. */
  | 'unknown'
  /** Never granted the OS consent. A choice, not a fault. */
  | 'notGranted'
  /** Granted, switched off. Also a choice. */
  | 'off'
  /**
   * The parent switched it on and the device has not confirmed yet.
   *
   * Two fields, two questions, and this status is the gap between them:
   * `controls.messageMonitoringEnabled` is what the parent *asked for*,
   * `messageMonitoring.incoming.enabled` is what the device *reports doing*.
   * The second follows the first by one heartbeat when the child device is
   * awake, and by an unbounded amount when it is not.
   *
   * Without this the gap rendered as `off` — "granted, switched off, a
   * choice" — which is false twice over: the parent had just chosen the
   * opposite, and the copy under it told them to go set up a feature they
   * had already set up. Same distinction `Device.lockEnforcement` draws
   * between a lock that was sent and a lock that is in force.
   */
  | 'pending'
  /** Switched on, consent gone. Nothing is being scanned and nobody knows. */
  | 'revoked'
  | 'on';

export type MessageMonitoringHalf = 'incoming' | 'outgoing';

export interface MessageMonitoringInput extends AppInstallAlertInput {
  /** `Device.id`, so a notice can name the device it came from. */
  id?: string;
  messageMonitoring?: DeviceMessageMonitoringState | null | undefined;
  /**
   * The parent's intent, off `Device.controls`. Optional because a caller
   * that has not loaded controls must degrade to the old reading rather than
   * report `pending` it cannot know about — absent means "no intent stated",
   * never "intent is off".
   */
  controls?: {
    messageMonitoringEnabled?: boolean;
    messageMonitoringOutgoingEnabled?: boolean;
  } | null;
}

function halfStatus(
  half: MessageMonitoringHalfState | undefined,
  intended: boolean,
): MessageMonitoringHalfStatus {
  // A half missing from a document that has the parent object is still unknown
  // rather than off: a future build could publish one half before the other,
  // and guessing `false` there is the same lie as guessing it for the whole.
  if (!half || typeof half.granted !== 'boolean' || typeof half.enabled !== 'boolean') {
    return 'unknown';
  }
  if (half.enabled) {
    return half.granted ? 'on' : 'revoked';
  }
  if (!half.granted) {
    // The device has reported, and what it reported is that the OS consent is
    // not there. `notGranted` outranks the parent's intent because it is the
    // thing standing in the way, and its copy — go grant it on the device —
    // is the correct instruction whether or not the switch is on.
    return 'notGranted';
  }
  return intended ? 'pending' : 'off';
}

/** Both halves for one device. */
export function resolveMessageMonitoring(
  device: MessageMonitoringInput,
): Record<MessageMonitoringHalf, MessageMonitoringHalfStatus> {
  if (!supportsMessageMonitoring(device)) {
    return { incoming: 'unsupported', outgoing: 'unsupported' };
  }
  const state = device.messageMonitoring;
  if (!state) {
    return { incoming: 'unknown', outgoing: 'unknown' };
  }
  return {
    incoming: halfStatus(
      state.incoming,
      device.controls?.messageMonitoringEnabled === true,
    ),
    outgoing: halfStatus(
      state.outgoing,
      device.controls?.messageMonitoringOutgoingEnabled === true,
    ),
  };
}

/**
 * What a parent surface should raise about a set of devices, or nothing.
 *
 * Ranked worst first, and only one is ever shown: a screen that stacks four
 * banners is a screen nobody reads to the end of.
 *
 * - `revoked` — a half was switched on and has stopped. Always reported.
 * - `off` — **the incoming half** is not running, so the feed is structurally
 *   empty. Reported because the parent is standing on the Message Alerts
 *   screen, which is a request to see alerts.
 * - `pending` — switched on, device has not confirmed. Ranked below `off`
 *   rather than above it because it is not a problem yet, and above
 *   `unknown` because it says more: `unknown` is "the device has told us
 *   nothing at all", this is "we know what it was asked to do and are
 *   waiting". It resolves itself on the next heartbeat, so the copy asks for
 *   nothing — a banner that demanded an action here would be asking a parent
 *   to fix a delay.
 * - `unknown` — supported, and the device has told us nothing. Said plainly
 *   rather than rendered as either good or bad news.
 * - `outgoingAvailable` — incoming is watching and the typed half was never
 *   set up. A tip, not a warning: this family already opted in, and the half
 *   that catches self-harm and bullying is the one they do not have.
 *
 * A half nobody enabled is never nagged about beyond that single tip. The
 * outgoing service reads what a child writes; a product that pesters for it
 * every visit has picked a side the parent did not ask it to pick.
 */
export type MessageMonitoringNoticeKind =
  'revoked' | 'off' | 'pending' | 'unknown' | 'outgoingAvailable';

export interface MessageMonitoringNotice {
  kind: MessageMonitoringNoticeKind;
  /** Which halves are in that state — copy names them. */
  halves: MessageMonitoringHalf[];
  /** The devices in that state. Ids; the caller owns display names. */
  deviceIds: string[];
  titleKey: string;
  bodyKey: string;
}

const NOTICE_ORDER: MessageMonitoringNoticeKind[] = [
  'revoked',
  'off',
  'pending',
  'unknown',
  'outgoingAvailable',
];

/**
 * `null` when every supported device is watching, and when none can watch at
 * all — an iPhone-only family is told that by the platform note the screen
 * already renders, and saying it twice in two shapes is worse than once.
 */
export function resolveMessageMonitoringNotice(
  devices: MessageMonitoringInput[],
): MessageMonitoringNotice | null {
  const found = new Map<
    MessageMonitoringNoticeKind,
    { halves: Set<MessageMonitoringHalf>; deviceIds: string[] }
  >();

  const add = (
    kind: MessageMonitoringNoticeKind,
    half: MessageMonitoringHalf | null,
    deviceId: string | undefined,
  ) => {
    const entry = found.get(kind) ?? {
      halves: new Set<MessageMonitoringHalf>(),
      deviceIds: [],
    };
    if (half) {
      entry.halves.add(half);
    }
    if (deviceId && !entry.deviceIds.includes(deviceId)) {
      entry.deviceIds.push(deviceId);
    }
    found.set(kind, entry);
  };

  for (const device of devices) {
    const status = resolveMessageMonitoring(device);
    if (status.incoming === 'unsupported') {
      continue;
    }
    if (status.incoming === 'revoked') {
      add('revoked', 'incoming', device.id);
    }
    if (status.outgoing === 'revoked') {
      add('revoked', 'outgoing', device.id);
    }
    if (status.incoming === 'off' || status.incoming === 'notGranted') {
      add('off', 'incoming', device.id);
    }
    // Either half: a parent who just switched the typed half on is owed the
    // same "waiting" answer as one who switched the arriving half on, and
    // nothing else on the screen would tell them their tap landed.
    if (status.incoming === 'pending') {
      add('pending', 'incoming', device.id);
    }
    if (status.outgoing === 'pending') {
      add('pending', 'outgoing', device.id);
    }
    if (status.incoming === 'unknown') {
      add('unknown', null, device.id);
    }
    if (
      status.incoming === 'on' &&
      (status.outgoing === 'off' || status.outgoing === 'notGranted')
    ) {
      add('outgoingAvailable', 'outgoing', device.id);
    }
  }

  for (const kind of NOTICE_ORDER) {
    const entry = found.get(kind);
    if (!entry) {
      continue;
    }
    return {
      kind,
      // Fixed order rather than insertion order: the sentence reads
      // "received and sent", never whichever device happened to sort first.
      halves: (['incoming', 'outgoing'] as const).filter(half =>
        entry.halves.has(half),
      ),
      deviceIds: entry.deviceIds,
      titleKey: `messageMonitoring.notice.${kind}Title`,
      bodyKey: `messageMonitoring.notice.${kind}Body`,
    };
  }
  return null;
}

/**
 * The Message Alerts card, in the shape every other alert card in the control
 * centre already has.
 *
 * It existed as neither: no summary case on the device grid and none on the
 * child hub, so a live feature rendered as "Roadmap — Learn more" while its tap
 * opened a real screen, and on the child hub the tap did nothing at all. The
 * question a card has to answer is the screen's own — is anything watching —
 * so it reads `resolveMessageMonitoringNotice` rather than inventing a second
 * rule that could disagree with the banner one tap away.
 *
 * Keys, not sentences: `packages/core` renders no copy.
 */
export type MessageMonitoringSummaryTone = 'active' | 'attention' | 'roadmap';

export interface MessageMonitoringSummary {
  valueKey: string;
  detailKey: string;
  tone: MessageMonitoringSummaryTone;
}

const NOTICE_SUMMARY: Record<MessageMonitoringNoticeKind, MessageMonitoringSummary> = {
  revoked: {
    valueKey: 'shared.off',
    detailKey: 'messageMonitoring.notice.revokedTitle',
    tone: 'attention',
  },
  off: {
    valueKey: 'shared.off',
    detailKey: 'messageMonitoring.notice.offTitle',
    tone: 'attention',
  },
  // "Waiting", not "Off", and deliberately not `attention`: the parent has
  // done everything asked of them and the only thing left is the device
  // checking in. An amber card here would report their own successful tap
  // back to them as a problem.
  pending: {
    valueKey: 'deviceDetail.waiting',
    detailKey: 'messageMonitoring.notice.pendingTitle',
    tone: 'active',
  },
  unknown: {
    valueKey: 'deviceDetail.waiting',
    detailKey: 'messageMonitoring.notice.unknownTitle',
    tone: 'attention',
  },
  // Watching, and the half that catches bullying and self-harm is missing. The
  // card stays green because the feed it opens is real — the tip is the detail
  // line, not a warning about a feature that is running.
  outgoingAvailable: {
    valueKey: 'shared.on',
    detailKey: 'messageMonitoring.notice.outgoingAvailableTitle',
    tone: 'active',
  },
};

export function resolveMessageMonitoringSummary(
  devices: MessageMonitoringInput[],
): MessageMonitoringSummary {
  // Nothing here can watch — an iPhone, a TV, a browser. The struck-out card
  // already says "not available on this device"; a status on top of it would
  // be a second answer to a question the row has answered.
  if (!devices.some(device => supportsMessageMonitoring(device))) {
    return {
      valueKey: 'shared.off',
      detailKey: 'messageMonitoring.actionDescription',
      tone: 'roadmap',
    };
  }
  const notice = resolveMessageMonitoringNotice(devices);
  if (!notice) {
    return {
      valueKey: 'shared.on',
      detailKey: 'messageMonitoring.actionDescription',
      tone: 'active',
    };
  }
  return NOTICE_SUMMARY[notice.kind];
}
