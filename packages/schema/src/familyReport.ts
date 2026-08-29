/**
 * A weekly report as stored, rather than as sent.
 *
 * The digest has always been a push and an email — written, delivered, gone.
 * That was fine while it said four numbers from a template, and stops being
 * fine the moment a model writes the sentence: the model is not deterministic,
 * and the `usageDays` behind it are purged at thirty days, so a parent asking
 * "why does it say this?" three weeks later is asking a question nobody can
 * answer.
 *
 * Storing the report answers it. It also does two things that were not the
 * reason for storing but justify it on their own: a history screen renders
 * from Firestore with no model call, and a few weeks of real reports beside
 * the findings that produced them is the evaluation set for the fourteen
 * locales that currently generate prose nobody has reviewed.
 */

import type { AppLanguage } from './language';

/** Only weekly exists. A daily report needs its own rules, not a flag here. */
export type FamilyReportKind = 'weekly';

/**
 * Who wrote the sentence a parent actually read.
 *
 * Worth persisting rather than inferring, because the fallback is silent by
 * design: `digestNarrative` returns null on a refusal, an outage or a rejected
 * figure, and the family gets the translated template. Without this field a
 * stored report cannot tell "the model wrote this" from "the model was never
 * asked", which makes the whole corpus useless for judging the model.
 */
export type FamilyReportSource = 'model' | 'template';

/**
 * Why a generated narrative was thrown away, when one was.
 *
 * Mirrors the guards in `functions/lib/digestNarrative.js`. A history screen
 * shows none of this to a parent; it is here so a locale failing in a language
 * nobody on the team reads is visible in the data rather than only in a log
 * line that has already rolled off.
 */
export type FamilyReportRejection =
  | 'ungroundedFigure'
  | 'bannedTerm'
  | 'tooLong'
  | 'malformed'
  | 'providerError'
  | 'notConfigured';

/** One finding as `@kidgate/core/domain/digestFindings` produced it. */
export interface FamilyReportFinding {
  kind: string;
  severity: 'info' | 'notable' | 'attention';
  params: Record<string, string | number>;
  /**
   * Whose week this is about, when the family has more than one child device.
   *
   * Deliberately beside `params` rather than inside it. A name in `params`
   * would have to appear in the sentence, which means a `{{child}}` slot in
   * every finding string in fourteen languages — and a family with one child
   * would then read "An used 3 hours more" where "3 hours more" is what a
   * parent of one actually wants. Out here, a renderer prefixes or chips it
   * when there is someone to distinguish, and ignores it when there is not.
   */
  child?: string | null;
}

/**
 * One child device's week, for the comparison table.
 *
 * The report itself stays one document for the family — one model call, one
 * push, one thing to read — but the figures behind it are per device, and
 * summing them was throwing away the answer to the first question a parent with
 * two children asks. These are the numbers, deterministic: nothing here goes
 * near the model.
 */
export interface FamilyReportChild {
  deviceId: string;
  /**
   * Who was holding it, as `Device.childId` stood at generation time.
   *
   * A snapshot, not a join. Reassigning a device next month rewrites who its
   * *future* weeks belong to and must not rewrite a report a parent already
   * read — a stored week whose rows moved between children is a document that
   * disagrees with the push that announced it.
   *
   * Absent on every report written before children existed, and on a device
   * nobody has assigned. Both mean the same thing to a renderer: this row
   * cannot be attributed to a person.
   */
  childId?: string | null;
  /** The device's name, which is what a parent called it. Null if unnamed. */
  name: string | null;
  screenMinutes: number;
  previousScreenMinutes: number;
  /** Null when this child has no Daily Limit set. */
  dailyLimitMinutes: number | null;
  /** Days at or over that limit. Zero when there is no limit. */
  limitDays: number;
  /** Nights with use in the late window. Zero on a device with no timeline. */
  lateNights: number;
  /** The app that took the most of this child's week, if any did. */
  topApp: { packageName: string; label: string; minutes: number } | null;
}

/**
 * One person's week, rather than one piece of hardware's.
 *
 * `FamilyReportChild` is named for children and keyed by `deviceId`, which was
 * honest while a child was a device. It stopped being honest the moment
 * `Child` existed: a child with a phone, a laptop and a television appeared
 * three times in the comparison table and won it, and the family total counted
 * every minute the phone and the television were on together twice.
 *
 * This is the row that answers the question the table was always asked. It sits
 * beside `children` rather than replacing it — a year of reports is kept, the
 * device rows in them were correct about devices, and re-keying that field
 * would make every stored week say something it did not say when it was sent.
 *
 * ## Two totals, and neither is optional
 *
 * `deviceMinutes` sums the devices; `screenOnMinutes` is the union of their
 * timelines. They differ by however long two screens were on at once, which is
 * `overlapMinutes`. See `@kidgate/core/domain/childUsage` for the arithmetic
 * and for why the union is sometimes unknowable.
 */
export interface FamilyReportPerson {
  childId: string;
  /** The child's name as it stood when the report was written. */
  name: string | null;
  /** `Child.colorIndex`, so a stored report redraws in the colour it was sent in. */
  colorIndex: number;
  /** Which devices fed this row. For drilling down, and for auditing the join. */
  deviceIds: string[];

  /** Devices summed. Two screens at once is two minutes here. */
  deviceMinutes: number;
  previousDeviceMinutes: number;

  /**
   * Wall-clock minutes in front of any screen.
   *
   * **Null is a real answer**, not a missing field: it means no device this
   * child holds can report a timeline — an iPhone-only child, permanently, for
   * the reason `docs/FEASIBILITY.md` records. Rendering null as zero would tell
   * a parent their child never looked at a screen.
   *
   * When it is null, `screenOnLowMinutes` and `screenOnHighMinutes` bound what
   * is actually known and a renderer shows the range or shows nothing.
   */
  screenOnMinutes: number | null;
  screenOnLowMinutes: number;
  screenOnHighMinutes: number;
  /** `deviceMinutes − screenOnMinutes`, and 0 when the union is unknown. */
  overlapMinutes: number;

  /** Minutes measured over minutes elapsed, 0–1. Null when nothing timed the week. */
  coverage: number | null;
  /** Nights inside the late window, counted once per night across all devices. */
  lateNights: number;
  /** Days any one of this child's devices was at or over its own Daily Limit. */
  limitDays: number;
  /**
   * How many of this child's devices have a Daily Limit set.
   *
   * A limit belongs to a device, so a person has no single one — and without
   * this a renderer cannot tell "stayed under every limit" (zero limit days,
   * limits set) from "was never measured against one" (zero limit days, no
   * limits). The device table has `dailyLimitMinutes` for exactly that
   * distinction; this is its per-person equivalent.
   */
  limitedDevices: number;
  /** The app that took the most of this child's week, merged across devices. */
  topApp: { label: string; packageNames: string[]; minutes: number } | null;
}

/**
 * Which control the week's one suggested action opens.
 *
 * Both device-level, and that is the current limit rather than the intended
 * one: an app-level kind ("limit this app specifically") needs the editing
 * screens to accept an app to preselect, and until they do, a button pointing
 * at a list of forty apps is worse than the sentence it replaced.
 */
export type FamilyReportActionKind = 'blockedHours' | 'dailyLimit';

/**
 * The week's leading finding, resolved to something a parent can press.
 *
 * The narrative already closes with a suggestion, and `digestNarrative`'s brief
 * forbids it from naming a screen — the app names its screens differently in
 * fourteen languages, and a model inventing one sends a parent hunting. So the
 * prose says *set a daily limit* and stops. This is the same suggestion with a
 * destination attached, derived in arithmetic by
 * `@kidgate/core/domain/reportAction` and never by the model: a family whose
 * generated prose was rejected for the template still gets the button.
 *
 * Stored rather than derived at read time because the report is a snapshot. The
 * device may be renamed, its limit changed, or the child reassigned before
 * anyone opens the history screen, and a button that re-derives itself would
 * offer a different action from the one that shipped with the sentence above it.
 */
export interface FamilyReportAction {
  kind: FamilyReportActionKind;
  /** Which device the button opens. Never empty — an unresolved action is not stored. */
  deviceId: string;
  /** The device's name as it stood at generation time. Null when unnamed. */
  deviceName: string | null;
  /**
   * The `FindingKind` this answers, so a renderer words the button for the
   * reason and not for the control — "a late-night window" and "a daily limit"
   * are different sentences even when both open the same screen.
   *
   * A plain string for the same reason `FamilyReportFinding.kind` is one: the
   * union lives in `@kidgate/core/domain/digestFindings`, and this package
   * imports nothing.
   */
  from: string;
  /** Minutes to propose for `dailyLimit`. Null on every other kind. */
  minutes: number | null;
}

export interface FamilyReport {
  id: string;
  kind: FamilyReportKind;
  /**
   * `2026-W33`. The dedupe key, not a display value.
   *
   * A parent pressing the button twice in one week must get the report they
   * already have rather than a second one worded differently — two reports of
   * the same week that disagree is the failure this key exists to prevent, and
   * it is also what stops the button being a way to spend money in a loop.
   */
  periodKey: string;
  /** Inclusive local day keys the report covers, for display. */
  fromDate: string;
  toDate: string;

  /** What the findings were built from, so the numbers can be re-checked. */
  screenMinutes: number;
  previousScreenMinutes: number;
  blockedAppOpens: number;
  blockedWebVisits: number;

  findings: FamilyReportFinding[];

  /**
   * Per-child figures behind the family totals.
   *
   * **Optional, and it will be absent.** Reports are kept for a year and this
   * field arrived after the first of them were written, so every renderer has
   * to treat a missing table as "nothing to compare" rather than as a broken
   * document. `familyReportRepository` normalises it to `[]` on the way out;
   * the optionality here describes the stored document, not the mapped one.
   *
   * A renderer shows the table only when there is more than one row — a
   * one-row comparison is the hero figure repeated.
   */
  children?: FamilyReportChild[];

  /**
   * The same week grouped by person instead of by hardware.
   *
   * **Optional, and absent on every report written before children existed** —
   * the same year-long backlog `children` carries, one field later. A renderer
   * picks in this order and never merges the two:
   *
   * 1. `people` present and non-empty — show people. This is the answer.
   * 2. otherwise `children` — show devices, which is what that week knew.
   * 3. otherwise neither, and the hero figure is the whole report.
   *
   * Absent also when the family has assigned no device to any child. That is
   * not a broken report; it is a family that has not done the assignment yet,
   * and the device table is the best available answer for them.
   */
  people?: FamilyReportPerson[];

  /**
   * The narrative per locale, for the locales the family's parents read.
   *
   * A map rather than a string because two parents on different languages get
   * different sentences from the same findings, and both were sent — a history
   * screen has to show the reader the one they received.
   */
  narrative: Partial<Record<AppLanguage, string>>;
  source: FamilyReportSource;
  rejection: FamilyReportRejection | null;

  /**
   * The one thing to do about this week, when there was one.
   *
   * **Null is the common case and not a failure.** Most weeks resolve no
   * action: a quiet week has nothing to suggest, and a family with more than
   * one child device usually cannot say which device a family-wide finding was
   * about — `reportAction` returns null rather than guess, because a button
   * that opens the wrong child's settings is discovered only after the parent
   * has changed something.
   *
   * Optional as well as nullable: reports are kept for a year and every one
   * written before this field existed has no key at all.
   */
  action?: FamilyReportAction | null;

  /** Which model wrote it, so a regression can be tied to a version. */
  model: string | null;
  createdAt: string;
  /** `scheduled` for the Sunday job, `manual` for the button. */
  trigger: 'scheduled' | 'manual';
}
