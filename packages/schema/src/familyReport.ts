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
   * The narrative per locale, for the locales the family's parents read.
   *
   * A map rather than a string because two parents on different languages get
   * different sentences from the same findings, and both were sent — a history
   * screen has to show the reader the one they received.
   */
  narrative: Partial<Record<AppLanguage, string>>;
  source: FamilyReportSource;
  rejection: FamilyReportRejection | null;

  /** Which model wrote it, so a regression can be tied to a version. */
  model: string | null;
  createdAt: string;
  /** `scheduled` for the Sunday job, `manual` for the button. */
  trigger: 'scheduled' | 'manual';
}
