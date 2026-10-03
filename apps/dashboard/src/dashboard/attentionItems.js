import { readDeviceBattery } from '@kidgate/core/domain/battery';
import { resolveCheckInOutcome } from '@kidgate/core/domain/checkInSupport';
import { getProtectionSummaryKeys } from '@kidgate/core/domain/protectionStatus';
import { isUsageStampToday } from '@kidgate/core/domain/reportHub';
import { formatMinutes } from './charts.jsx';
import { timeAgo } from './timeAgo.js';

/**
 * One device's open items, folded once for both readers.
 *
 * It was inline in `Dashboard.jsx` and read one device — the one a parent had
 * opened. The Attention rail asks the same question of every device in the
 * family, and a second derivation beside this one is exactly the drift the rule
 * in `apps/dashboard/CLAUDE.md` names: the feed maps
 * `getProtectionSummaryKeys(device).issues` and nothing else may.
 *
 * `siteRequests` is empty for every caller but the open device —
 * `useFamilyData` subscribes to that collection per device, so the rail cannot
 * see a pending domain on a machine nobody opened. Passing `[]` is honest; a
 * family-wide count derived from one device's rows would not be.
 */

/**
 * Issues the attention feed leaves to the part of this page that already
 * answers them.
 *
 * - `inactive` — the device's own status dot and its "last seen" line say this
 *   at the top of the page, on every tab.
 * - `web-filter-blocked` — the Web filter row on the Controls tab carries it in
 *   this key space's own words. It is also the one issue that sets
 *   `needsPlatformName`, and a `{{platform}}` placeholder has no app-side label
 *   to fill it with here.
 */
export const PROTECTION_ISSUES_SHOWN_ELSEWHERE = new Set([
  'inactive',
  'web-filter-blocked',
]);

/**
 * A glyph per issue, so the feed reads as a list of different problems rather
 * than a column of identical warning triangles. `alert` is the fallback and is
 * correct for anything new: a row with no icon of its own is still a row.
 */
export const PROTECTION_ISSUE_ICON = {
  'screen-time': 'clock',
  'missing-status': 'alert',
  location: 'mapPin',
  notifications: 'bell',
  overlay: 'lock',
  batteryOptimization: 'battery',
  exactAlarm: 'clock',
  // No accessibility glyph in `@kidgate/tokens/icons`; a hand is what the
  // grant is about and `userCheck` is the nearest honest one.
  accessibility: 'userCheck',
  backgroundAppRefresh: 'refresh',
  'consent-camera': 'camera',
  camera: 'camera',
  // No microphone glyph; the issue is about the SOS.
  microphone: 'siren',
  'consent-location': 'mapPin',
};

export function buildAttention({
  device,
  t,
  activityT,
  /**
   * The page's `useReaderToday()` — `{ key, nowMs }`, so each device is judged
   * on its own calendar — or a bare day key. Without it no stamped figure is
   * today's.
   */
  today = '',
  timeRequests = [],
  siteRequests = [],
  checkIns = [],
}) {
  const c = device?.controls ?? null;
  if (!device || !c) return [];
  const items = [];
  timeRequests
    .filter(req => req.status === 'pending')
    .forEach(req =>
      items.push({
        id: req.id,
        tone: 'warning',
        icon: 'clock',
        title: t('dash.attnMoreMinutes', {
          // The person if a parent has named one, the hardware otherwise —
          // "Bí asked for 15 more minutes" beats "iPad asked", and neither is
          // available for a device assigned to nobody.
          name: device.child?.name || device.name,
          minutes: req.requestedMinutes,
        }),
        meta: req.reason
          ? t('dash.attnReason', {
              reason: req.reason,
              when: timeAgo(req.createdAt),
            })
          : timeAgo(req.createdAt),
        action: 'review',
      }),
    );
  /*
    One action, and it is Allow — the same call the time-request row above
    makes with `review`, which approves. Declining lives in the Controls tab's
    card, where both answers sit side by side; this list is for the one move a
    parent most often wants, not for a decision surface.
  */
  siteRequests.forEach(req =>
    items.push({
      id: req.id,
      tone: 'warning',
      icon: 'globe',
      title: t('dash.attnSiteRequest', {
        name: device.child?.name || device.name,
        domain: req.domain,
      }),
      meta: req.reason
        ? t('dash.attnReason', {
            reason: req.reason,
            when: timeAgo(req.createdAt),
          })
        : timeAgo(req.createdAt),
      action: 'siteAllow',
    }),
  );
  /*
    A check-in the child closed with an SOS is `missed` on the document too,
    and is not one: nothing is left to resend, and "no response" is false of a
    child who asked for help. The SOS has its own card and summary chip.
  */
  checkIns
    .filter(ci => resolveCheckInOutcome(ci) === 'noResponse')
    .forEach(ci =>
      items.push({
        id: ci.id,
        tone: 'serious',
        icon: 'lifebuoy',
        title: t('dash.attnCheckInMissed'),
        meta: t('dash.attnCheckInMissedMeta', { when: timeAgo(ci.createdAt) }),
        action: 'resend',
      }),
    );
  /*
   * Everything wrong with this device's protection, from the fold the phone
   * reads — `@kidgate/core/domain/protectionStatus`.
   *
   * This page used to derive its own: denied permissions off `protectionStatus`
   * with a local `PERMISSION_FIX_KEY` table for the fix sentence, plus
   * `pendingConsentCopy` beside it. That was a second opinion about one
   * question, and it was a narrower one in three ways a parent could feel — it
   * only ever saw `denied`, so a permission that was never asked for
   * (`notDetermined`) or refused by iOS (`restricted`) reached nobody on the
   * web; it had one sentence where the phone has the **steps** (`hintKeys`, the
   * ones the child's own setup screens render); and it knew nothing about the
   * issues that come from the capability probe rather than from the checklist,
   * which is every issue a Mac, a PC or a television can have.
   */
  getProtectionSummaryKeys(device, Date.now())
    .issues.filter(issue => !PROTECTION_ISSUES_SHOWN_ELSEWHERE.has(issue.key))
    .forEach(issue =>
      items.push({
        id: `protection-${issue.key}`,
        // `info` is an issue that costs a feature and no enforcement — a
        // refused camera on a Mac. Listed, never dressed as a broken rule.
        tone: issue.severity === 'info' ? 'warning' : 'critical',
        icon: PROTECTION_ISSUE_ICON[issue.key] ?? 'alert',
        // The app key space, through `activityT`: the same sentences the phone's
        // issues sheet shows for the same device, already in fourteen packs.
        title: activityT(issue.labelKey),
        meta: activityT(issue.detailKey),
        action: 'howToFix',
        /*
         * Absent for the issues nobody has written steps for — iOS Screen Time,
         * location, the television's filter consent. The renderer falls back to
         * the one sentence it can honestly say, which is where to go and look.
         * Guessing a path through somebody else's Settings app costs a walk
         * across the house and the trust in the next instruction.
         */
        fixKeys: issue.hintKeys,
      }),
    );
  /*
   * A stamp, like the minutes beside it: set by a usage report and never
   * cleared at midnight, so a device off since yesterday still said "limit
   * reached" with yesterday's total. Today's or nothing — `isUsageStampToday`.
   */
  if (c.dailyLimitExceeded && isUsageStampToday(c, today, device.timeZone)) {
    items.push({
      id: 'limit',
      tone: 'warning',
      icon: 'lock',
      title: t('dash.attnLimitReached'),
      meta: t('dash.attnLimitReachedMeta', {
        used: formatMinutes(c.minutesUsedToday),
      }),
      action: 'unlock',
    });
  }
  /*
   * The child locked the Parent PIN out on this device. The phone offers the
   * reset in Settings to every parent (`pinLockoutSafe` allows any family
   * parent); until 2026-09-27 the web offered it nowhere, and the child is
   * told to ask a parent.
   */
  if (device.parentPinLocked) {
    items.push({
      id: 'pinLocked',
      tone: 'serious',
      icon: 'lock',
      title: activityT('pin.unlockChildPinTitle', { deviceName: device.name }),
      meta: activityT('pin.unlockChildPinSubtitle'),
      action: 'pinReset',
    });
  }
  // `readDeviceBattery` rather than a threshold written here: this row said
  // "battery low" at 25% while the reading beside the device name only went red
  // under 20, so the page disagreed with itself about the same phone.
  const batt = readDeviceBattery(device);
  if (batt?.isLow) {
    items.push({
      id: 'batt',
      tone: 'serious',
      icon: 'battery',
      level: batt.level,
      title: t('dash.attnBatteryLow', { level: batt.level }),
      meta: t('dash.attnBatteryLowMeta'),
    });
  }
  return items;
}

/**
 * The same fold, run over every device, for the rail beside the Family list.
 *
 * Ids are prefixed with the device: two phones missing the same grant would
 * otherwise both be `protection-notifications` and React would draw one.
 */
export function buildFamilyAttention({
  devices,
  t,
  activityT,
  today = '',
  timeRequests = [],
  checkIns = [],
}) {
  return devices.flatMap(device =>
    buildAttention({
      device,
      t,
      activityT,
      today,
      timeRequests: timeRequests.filter(row => row.deviceId === device.id),
      checkIns: checkIns.filter(row => row.deviceId === device.id),
    }).map(item => ({
      ...item,
      id: `${device.id}-${item.id}`,
      /* The row's own document id, unprefixed — `resolveTimeRequest` and
         `resolveSiteRequest` take it, and the prefixed one matches nothing. */
      sourceId: item.id,
      deviceId: device.id,
      deviceName: device.name,
      childName: device.child?.name ?? null,
    })),
  );
}
