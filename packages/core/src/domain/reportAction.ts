/**
 * The one thing a parent can do about the week, as a button rather than a clause.
 *
 * The narrative already ends with a suggestion — `digestNarrative`'s brief asks
 * for "ONE short, gentle suggestion tied to the leading finding" — and that
 * sentence is deliberately vague: it may not name a screen, because the app
 * names its screens differently in fourteen languages and a model inventing the
 * German for "Blocked Hours" sends a parent hunting. So the prose says *set a
 * daily limit* and the parent is left to find where.
 *
 * This closes that gap from the other side. The same leading finding, resolved
 * to a concrete target a renderer can navigate to, computed here in arithmetic
 * the model never sees.
 *
 * **Nothing here comes from the model, and nothing here reaches it.** The
 * narrative is generated, checked and possibly thrown away for the template;
 * this is derived from the same findings either way, so a family whose prose was
 * rejected still gets the button. The two are independent on purpose — a
 * suggestion a parent can act on should not depend on a provider being up.
 *
 * ## Why an action must resolve to a device, and why most weeks produce none
 *
 * Every control this can point at belongs to a device: `dailyLimitMinutes` and
 * `scheduleWindows` are `DeviceControls` fields, and the screens that edit them
 * take a `deviceId` and nothing else. A finding, meanwhile, mostly does not know
 * one — `familyFindings` runs the shared rules over the *merged* week, which is
 * what makes the report a family's rather than a device's.
 *
 * Rather than guess which device a family-wide finding meant, this returns null.
 * A button that opens the wrong child's settings is worse than no button: the
 * parent does not find out until after they have changed something. The cases
 * below are the ones where the device is arithmetic, not inference.
 */

import type {
  FamilyReportAction,
  FamilyReportActionKind,
} from '@kidgate/schema/familyReport';
import type { Finding, FindingKind } from './digestFindings';
import type { ChildWeeks } from './familyReport';

/*
 * The shape is `@kidgate/schema`'s, not this module's. It is a stored field —
 * rule 2 in the root `CLAUDE.md` puts document shapes there and only there —
 * and re-declaring it here to gain a `FindingKind` on `from` would trade the
 * one thing that matters (both writers agreeing on the document) for a
 * narrowing that only holds until the value is written. `action()` below
 * narrows at construction instead, which is where a wrong kind could actually
 * originate.
 */

/**
 * Suggested limits land on a quarter hour.
 *
 * `previousMinutes / 7` is 88.71 for a real week, and a button offering "89
 * minutes a day" reads as a machine that measured rather than a suggestion a
 * person would make. The rounding is cosmetic and it is also the reason the
 * guard below exists: rounding up can push the suggestion past the figure it
 * was supposed to sit under.
 */
const LIMIT_STEP_MINUTES = 15;

/** Below this a "limit" is a punishment, not a nudge; above it, not a limit. */
const MIN_SUGGESTED_LIMIT_MINUTES = 30;
const MAX_SUGGESTED_LIMIT_MINUTES = 8 * 60;

const DAYS_PER_WEEK = 7;

function sumMinutes(days: readonly { minutes: number }[]): number {
  return days.reduce((total, day) => total + Math.max(0, day.minutes || 0), 0);
}

function roundToStep(value: number): number {
  return Math.round(value / LIMIT_STEP_MINUTES) * LIMIT_STEP_MINUTES;
}

/**
 * Last week's daily average, as a limit worth proposing.
 *
 * The figure is not a target someone chose — it is the pace the household was
 * already keeping seven days ago, which is the one number a parent cannot argue
 * is arbitrary and the child cannot call impossible. "Back to last week" is a
 * conversation; "90 minutes because an algorithm said so" is not.
 *
 * Null when the proposal would not change anything: a suggestion at or above
 * what the child is doing now is a button that does nothing, and a parent who
 * presses it and sees no effect has learnt not to press the next one.
 */
function suggestedLimitMinutes(child: ChildWeeks): number | null {
  const earlier = sumMinutes(child.earlier);
  const recent = sumMinutes(child.recent);
  if (earlier <= 0 || recent <= 0) {
    return null;
  }

  const suggestion = roundToStep(earlier / DAYS_PER_WEEK);
  if (
    suggestion < MIN_SUGGESTED_LIMIT_MINUTES ||
    suggestion > MAX_SUGGESTED_LIMIT_MINUTES
  ) {
    return null;
  }

  // Rounding may have carried the suggestion above this week's own pace, which
  // is the case the step size introduced and the only one that matters here.
  if (suggestion >= recent / DAYS_PER_WEEK) {
    return null;
  }

  return suggestion;
}

/**
 * The device a family-wide finding can only have been about.
 *
 * One row is the whole family, so nothing is being inferred — with two rows
 * there genuinely is no answer, and the note at the top of this module says
 * what guessing costs.
 */
function soleDevice(children: readonly ChildWeeks[]): ChildWeeks | null {
  return children.length === 1 ? (children[0] ?? null) : null;
}

/**
 * The device whose limit `limitHitRepeatedly` was counted against.
 *
 * `familyFindings` produces this finding per device and then drops the device,
 * carrying only the child's name into the report — the name is what the
 * sentence needs, and a `deviceId` on a `Finding` would ride the spread in
 * `promptFinding` all the way into the model's prompt, where an identifier full
 * of digits is both data nobody needed to send and a string the number guard
 * would later reject the model for echoing.
 *
 * So it is re-derived rather than carried: re-run the same test, and accept the
 * answer only when exactly one device produces it. Two devices with the same
 * limit and the same overrun count is a real tie with no right answer, and it
 * takes the same exit as everything else here.
 */
function limitedDevice(
  finding: Finding,
  children: readonly ChildWeeks[],
): ChildWeeks | null {
  const limit = Number(finding.params?.limitMinutes);
  const days = Number(finding.params?.days);
  if (!Number.isFinite(limit) || limit <= 0 || !Number.isFinite(days)) {
    return null;
  }

  const matches = children.filter(child => {
    if (child.dailyLimitMinutes !== limit) {
      return false;
    }
    return (
      child.recent.filter(day => Math.max(0, day.minutes || 0) >= limit).length === days
    );
  });

  return matches.length === 1 ? (matches[0] ?? null) : null;
}

function action(
  kind: FamilyReportActionKind,
  child: ChildWeeks,
  from: FindingKind,
  minutes: number | null,
): FamilyReportAction {
  return {
    kind,
    deviceId: child.deviceId,
    deviceName: child.name ?? null,
    from,
    minutes,
  };
}

/**
 * One action for the week, or none.
 *
 * Findings arrive severity-sorted with the leading one first (`digestFindings`
 * sorts, `familyFindings` re-sorts after adding its own), and this walks them in
 * that order and takes the first that resolves. That is the same finding the
 * narrative was told to lead with, so the button under a paragraph is about the
 * thing the paragraph is about — two independent derivations that have to agree,
 * and they agree because both start from position zero of the same list.
 *
 * Never more than one. Three buttons is a settings screen, and a report that
 * ends in a decision between three actions is one a tired parent closes.
 */
export function reportAction(
  findings: readonly Finding[],
  children: readonly ChildWeeks[],
): FamilyReportAction | null {
  for (const finding of findings ?? []) {
    switch (finding.kind) {
      /*
       * A limit that is being reached is not answered by a limit. The child is
       * already stopping at the right number and starting again the next day,
       * so the lever that is left is *when* rather than *how long* — which is
       * the blocked window, and which is also the honest reading of a week that
       * hit the ceiling four days running.
       */
      case 'limitHitRepeatedly': {
        const child = limitedDevice(finding, children);
        if (child) {
          return action('blockedHours', child, finding.kind, null);
        }
        break;
      }

      /*
       * Late nights are a clock problem by definition — the finding is built
       * from a 23:00–05:00 window — so a daily limit cannot answer it. A child
       * can spend their whole allowance after midnight and never touch it.
       */
      case 'lateNight': {
        const child = soleDevice(children);
        if (child) {
          return action('blockedHours', child, finding.kind, null);
        }
        break;
      }

      /*
       * More time than last week, on a device nobody has bounded. This is the
       * only case where a number is proposed, and the number is last week's own
       * pace — see `suggestedLimitMinutes` for why that particular figure.
       *
       * Skipped when a limit already exists: suggesting one to a parent who set
       * one is the button telling them it has not read their settings. A limit
       * that exists and is not being hit needs no action, and one that is being
       * hit is `limitHitRepeatedly` above.
       */
      case 'usageUp':
      case 'appSurge':
      case 'newTopApp': {
        const child = soleDevice(children);
        if (!child || (child.dailyLimitMinutes ?? 0) > 0) {
          break;
        }
        const minutes = suggestedLimitMinutes(child);
        if (minutes !== null) {
          return action('dailyLimit', child, finding.kind, minutes);
        }
        break;
      }

      /*
       * `usageDown`, `usageFlat`, `quietWeek`: a good week, and the brief for
       * the prose says the same thing — "skip the suggestion when the week was
       * quiet; after 'nothing needed attention' there is nothing to suggest".
       * `blockedSpike` is deliberately here too: the blocking already worked,
       * and the action a rising block count invites is reviewing the filter,
       * which is a judgement about what to allow rather than a control to set.
       */
      default:
        break;
    }
  }

  return null;
}
