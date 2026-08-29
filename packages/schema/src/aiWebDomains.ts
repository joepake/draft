/**
 * Server-classified web domains, and the constraint that governs them.
 *
 * The static category tables (`@kidgate/core/domain/webFilterCategoryDomains`)
 * cover the sites children commonly reach; the AI classifier fills in the long
 * tail a family actually visits. The feasibility entry ("AI domain
 * classification + anomaly alerts", docs/FEASIBILITY.md) records the measured
 * verdict and the rule that came out of it: **AI labels may auto-block only
 * the six serious categories** — the four false blocks in the spike were all
 * leisure labels, and zero were serious.
 *
 * Storage contract: `users/{ownerUid}/childDevices/{deviceId}.aiWebDomains`
 * is a flat, already-serious-only string array written **only** by the
 * `classifyWebDomains` Cloud Function (Admin SDK); `firestore.rules` pins the
 * field immutable for every client. Enforcement folds it into
 * `WebFilterPolicy.blockedDomains` (see `resolveWebFilterPolicy`), which every
 * platform already honours — and the parent's allow list still outranks it,
 * so one wrong classification is one allow-list entry away from fixed.
 * Category detail lives in the server-only `webDomainCategories` cache, not
 * on the device document.
 */

import type { WebFilterCategory } from './webActivity';

/** The default-on categories a filter exists for. AI may only extend these. */
export const SERIOUS_WEB_FILTER_CATEGORIES: WebFilterCategory[] = [
  'adult',
  'gambling',
  'dating',
  'drugs',
  'violence',
  'piracy',
];

/**
 * Cap on `aiWebDomains` per device. Separate from
 * `MAX_WEB_FILTER_LIST_ENTRIES` (50) — that cap sizes a list a parent edits by
 * hand; this one bounds a machine-written list that rides the same document
 * every parent screen reads.
 */
export const MAX_AI_WEB_DOMAINS = 300;
