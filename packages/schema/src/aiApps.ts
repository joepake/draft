/**
 * What an app is, decided once for the whole product.
 *
 * The parent question this answers is the one the report and the new-app push
 * both raise and neither can finish: the child used something called
 * `com.zhiliaoapp.musically` for two hours, and the parent has no idea what
 * that is. A classification turns the identifier into a sentence.
 *
 * ## Product-wide, never per family
 *
 * Discord is a chat app for every family in the product, so the row is keyed by
 * the app identifier and by nothing else — one classification per identifier,
 * ever. That is what makes the cost a rounding error (`docs/FEASIBILITY.md`,
 * "AI app classification": ≈$0.00002 an app, ≈$0.20/month at 10K new apps),
 * and it is also why the collection carries no family data at all and can be
 * read by any signed-in client.
 *
 * ## What the gate ruled in and out, and why the shape looks thin
 *
 * The spike measured three runs over 43 hand-labelled apps. Categories were
 * right 33–34 out of 35 with **zero serious-category misses and zero serious
 * false alarms**, and every launcher, keyboard and login window came back
 * `system` every time.
 *
 * Two things it measured as *unreliable* are therefore missing here rather than
 * present-and-ignored:
 *
 * - **No risk flags.** `strangerChat` was raised on Microsoft Teams in all
 *   three runs and on a desktop developer tool in two. A push telling a parent
 *   their child's school app lets them talk to strangers is the cry-wolf the
 *   `tamperAlerts` entry in `docs/FEASIBILITY.md` warns about, and confidence
 *   did not separate the false ones. The field is absent so that nobody adds a
 *   renderer for it before the accuracy exists.
 * - **`minAge` is information, not a threshold.** It came back 0 — unknown —
 *   for Teams, Zalo, FPT Play and more. Nothing may branch on it; a renderer
 *   shows it when it is non-zero and says nothing when it is not. This is also
 *   the reason KidGate does not ask a parent for a child's age: the unreliable
 *   half of that comparison is the number on the app.
 */

/**
 * Every label the classifier may return.
 *
 * The first ten are `WEB_FILTER_CATEGORIES` from `./webActivity`, deliberately
 * the same words: a parent who has set the web filter to block `gambling`
 * should not meet a second, differently-named taxonomy when they look at an
 * app. Restated rather than imported because this package holds no behaviour
 * and the two lists answer to different owners — the filter's list is a
 * contract with every enforcement platform, and a change there must not
 * silently re-key a year of cached classifications.
 *
 * The rest exist only here. `education` and `utility` are what keep a school
 * app from having to be `none`; `system` and `none` are the two ways of saying
 * "do not put this in front of a parent".
 *
 * ## The twelve added after the first taxonomy shipped
 *
 * The original fourteen sent a browser, a code editor, a messaging app and a
 * notes app all to `utility` or `none`, which is the same as saying nothing.
 * Each addition below had to answer one question — *does a parent do anything
 * differently on seeing it* — and the ones that could not (weather, clocks,
 * ride-hailing, beauty apps) were left out on purpose, because every extra
 * label is another boundary the model can land on the wrong side of.
 *
 * Three of them exist because an existing label was hiding two different
 * behaviours:
 *
 * - `shortVideo` splits from `videoStreaming`. An hour of a film and an hour of
 *   an infinite feed are not the same hour, and the feed is the one a parent
 *   asks about.
 * - `messaging` and `community` split from `social`. A one-to-one chat app, a
 *   friends feed and a public forum carry three different exposures to people
 *   the child does not know.
 *
 * `bypass` is deliberately one label covering four kinds of app — VPNs, remote
 * desktop, hidden-vault apps disguised as calculators, and third-party app
 * stores or emulators that install around `BlockedAppsScreen`. A model asked
 * "is this app for getting around parental control" answers far more reliably
 * than one asked to tell AnyDesk from a photo vault, and the parent needs
 * exactly one sentence out of it. It joins the serious six for the same reason
 * they are there: a machine label becomes a warning only when being wrong about
 * it is rare.
 *
 * `selfHarm` was considered and rejected. It cannot be read off a bundle
 * identifier, and a false one is the single worst thing this feature could
 * put in front of a family.
 */
export const APP_CATEGORIES = [
  'adult',
  'gambling',
  'gameGambling',
  'dating',
  'drugs',
  'violence',
  'piracy',
  'bypass',
  'social',
  'messaging',
  'community',
  'videoStreaming',
  'shortVideo',
  'gaming',
  'music',
  'shopping',
  'browser',
  'devTools',
  'creative',
  'productivity',
  'reading',
  'fileSharing',
  'education',
  'utility',
  'system',
  'none',
] as const;

/**
 * Which taxonomy a stored row was written against.
 *
 * A classification is written once per identifier and skipped forever after,
 * which is what makes the feature cost a rounding error — and which also means
 * a new label reaches nothing without this number. Every app classified before
 * `browser` existed is sitting on `utility`, and no amount of shipping the new
 * list changes that.
 *
 * So the sweep re-asks about any row stamped lower than this, and only those.
 * Bump it in the same commit as a change to `APP_CATEGORIES` — a taxonomy that
 * grows without a bump is a taxonomy that only applies to apps nobody has seen
 * yet. Do not bump it for a wording change to the prompt that cannot move a
 * verdict; every bump is one more pass over the whole dictionary.
 *
 * Version 1 is the original fourteen labels, and rows written then carry no
 * field at all — a missing value reads as 1.
 */
export const APP_TAXONOMY_VERSION = 2;

export type AppCategory = (typeof APP_CATEGORIES)[number];

/**
 * The eight a parent is warned about rather than merely told about.
 *
 * The first six mirror `SERIOUS_WEB_FILTER_CATEGORIES` in `./aiWebDomains` —
 * same six, same reason. Across three spike runs the classifier put nothing
 * benign into any of them and missed none of the ones planted, which is the
 * only evidence that justifies treating a machine label as a warning.
 *
 * `bypass` and `gameGambling` are app-side additions. Both clear the same bar
 * for a different reason: they name what an app is *for* rather than what it
 * contains, and purpose survives the trip through a bundle identifier better
 * than tone does. A VPN is a VPN in its own name; a case-opening app says so on
 * the tin. Neither is a judgement about the child.
 *
 * **This does not auto-block anything.** The web equivalent extends a device's
 * `blockedDomains` because a domain is enforced server-side against a list; an
 * app is blocked by a parent choosing it on `BlockedAppsScreen`, and a machine
 * that silently blocked a child's app would be discovered as a broken phone
 * rather than as a policy.
 */
export const SERIOUS_APP_CATEGORIES = [
  'adult',
  'gambling',
  'gameGambling',
  'dating',
  'drugs',
  'violence',
  'piracy',
  'bypass',
] as const;

export type SeriousAppCategory = (typeof SERIOUS_APP_CATEGORIES)[number];

/**
 * Categories no surface may ever mention.
 *
 * Not tidiness. On the one real Android TV in the product, the second and
 * fourth most-used "apps" of the month are a screensaver and a launcher, and
 * `com.apple.loginwindow` outranks most real apps on a Mac. A parent told their
 * child spent 95 minutes in "loginwindow" has learnt nothing and trusts the
 * feature less. This is the app equivalent of `WEB_NOISE_DOMAINS`, except that
 * the classifier produces it rather than a hand-kept list — it labelled every
 * system package correctly in all three spike runs, which a static list of OEM
 * package names could never have kept up with.
 */
export const HIDDEN_APP_CATEGORIES = ['system', 'none'] as const;

/** Server-only writes; any signed-in client reads. Keyed by app identifier. */
export const APP_CATEGORIES_COLLECTION = 'appCategories';

/**
 * One classification, as stored.
 *
 * No `packageName` field: it is the document id, and a copy inside the document
 * is a second thing to keep in step with the key.
 */
export interface AppCategoryEntry {
  category: AppCategory;
  /**
   * Whether the model claimed to recognise the app.
   *
   * `low` means it guessed from the identifier's shape. A renderer may show a
   * low-confidence *category*, because the spike's low-confidence rows were
   * honest ones (`com.acme.internal.fieldtool` → `none`, a git client → `none`)
   * — but nothing may treat a low-confidence serious category as a warning.
   */
  confidence: 'high' | 'low';
  /**
   * Publisher age rating, or **0 for unknown**, which is common.
   *
   * Zero is not "suitable for everyone". Never compare against it, never
   * render it as a number; a surface shows the rating only when it is
   * positive. See the header for why this field decides nothing.
   */
  minAge: number;
  /** Which model wrote it, so a regression can be tied to a version. */
  model: string;
  classifiedAt: string;
  /**
   * Which `APP_TAXONOMY_VERSION` produced this row.
   *
   * The sweep's only handle on its own history. Rows from before the field
   * existed read as 1; see the note on the constant for why nothing but the
   * sweep should care.
   */
  taxonomyVersion: number;
}

/** True when this classification is fit to put in front of a parent. */
export function isShowableAppCategory(entry: AppCategoryEntry | null): boolean {
  if (!entry) {
    return false;
  }
  return !(HIDDEN_APP_CATEGORIES as readonly string[]).includes(entry.category);
}

/**
 * True when this classification is a warning rather than a description.
 *
 * Both halves are load-bearing and both come from the gate. Serious-only,
 * because those are the six the spike never got wrong in either direction;
 * high-confidence-only, because a guess that lands on `dating` is the one
 * mistake that would cost a family's trust outright.
 */
export function isSeriousAppCategory(entry: AppCategoryEntry | null): boolean {
  if (!entry || entry.confidence !== 'high') {
    return false;
  }
  return (SERIOUS_APP_CATEGORIES as readonly string[]).includes(entry.category);
}
