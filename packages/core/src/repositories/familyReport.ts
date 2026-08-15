import type { ApiPort } from '@kidgate/ports/api';
import type { DocSnapshot, FirestorePort } from '@kidgate/ports/firestore';
import type {
  FamilyReport,
  FamilyReportChild,
  FamilyReportFinding,
  FamilyReportRejection,
  FamilyReportSource,
} from '@kidgate/schema/familyReport';
import type { AppLanguage } from '@kidgate/schema/language';
import { familyReportsCollection } from '@kidgate/schema/paths';

/**
 * The stored weekly reports, read back.
 *
 * Written only by the Admin SDK — the Sunday digest job and the button below —
 * so there is no create or update here and `firestore.rules` says
 * `allow write: if false` on the collection. What a client does is read the
 * history, and ask for this week's if it does not exist yet.
 *
 * **A read, not a listener.** One document appears per family per week, and the
 * only other writer is a button whose own response carries the new report. A
 * live subscription would hold a socket open all day to observe an event that
 * happens on Sunday evening.
 *
 * **Read as a parent, not as the owner.** The rules use `isParentAccount()`
 * rather than `isOwner()` because the child device signs in under the same uid,
 * and a report names the apps a child used and the hours spent on them. Nothing
 * in this file can loosen that; it is noted because a repository that quietly
 * works from a child session would be the first sign the rule had been changed.
 */

/**
 * How many weeks a history screen asks for.
 *
 * A year is kept (`REPORT_RETENTION_DAYS`), and a parent scrolling back a year
 * is not a case worth 52 document reads on every dashboard load. Twelve is a
 * quarter, which is the span someone actually compares against.
 */
export const REPORT_PAGE_SIZE = 12;

/** Order by document id: `weekly_2026-W33` sorts chronologically as text. */
const DOCUMENT_ID = '__name__';

const SEVERITIES: FamilyReportFinding['severity'][] = ['info', 'notable', 'attention'];

const REJECTIONS: FamilyReportRejection[] = [
  'ungroundedFigure',
  'bannedTerm',
  'tooLong',
  'malformed',
  'providerError',
  'notConfigured',
];

/**
 * Findings as stored, with anything unexpected dropped.
 *
 * The same filter `domain/familyReport` applies on the way in, applied again on
 * the way out — a document written before a field existed, or by a version of
 * the job that has since been fixed, is read by this client too. A param
 * carrying an object would render as `[object Object]` in a report a parent
 * forwards.
 */
function mapFindings(raw: unknown): FamilyReportFinding[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .map(entry => {
      if (!entry || typeof entry !== 'object') {
        return null;
      }
      const row = entry as Record<string, unknown>;
      const kind = typeof row.kind === 'string' ? row.kind : '';
      if (!kind) {
        return null;
      }
      const severity = SEVERITIES.includes(
        row.severity as FamilyReportFinding['severity'],
      )
        ? (row.severity as FamilyReportFinding['severity'])
        : 'info';
      const params =
        row.params && typeof row.params === 'object'
          ? Object.fromEntries(
              Object.entries(row.params as Record<string, unknown>).filter(
                ([, value]) => typeof value === 'string' || typeof value === 'number',
              ),
            )
          : {};

      const child = typeof row.child === 'string' && row.child ? row.child : null;

      return { kind, severity, params, child } as FamilyReportFinding;
    })
    .filter((finding): finding is FamilyReportFinding => finding !== null);
}

/**
 * The per-child comparison rows.
 *
 * Empty for a report written before the table existed, which is why every
 * renderer has to treat an absent table as "one child, nothing to compare"
 * rather than as a broken document — a year of history is kept, and the reports
 * at the far end of it predate this field.
 */
function mapChildren(raw: unknown): FamilyReportChild[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .map(entry => {
      if (!entry || typeof entry !== 'object') {
        return null;
      }
      const row = entry as Record<string, unknown>;
      const deviceId = typeof row.deviceId === 'string' ? row.deviceId : '';
      if (!deviceId) {
        return null;
      }

      const app = row.topApp as Record<string, unknown> | null | undefined;
      const topApp =
        app && typeof app === 'object' && typeof app.packageName === 'string'
          ? {
              packageName: app.packageName,
              label: typeof app.label === 'string' ? app.label : app.packageName,
              minutes: Number(app.minutes ?? 0),
            }
          : null;

      const limit = Number(row.dailyLimitMinutes);

      return {
        deviceId,
        name: typeof row.name === 'string' && row.name ? row.name : null,
        screenMinutes: Number(row.screenMinutes ?? 0),
        previousScreenMinutes: Number(row.previousScreenMinutes ?? 0),
        dailyLimitMinutes: Number.isFinite(limit) && limit > 0 ? limit : null,
        limitDays: Number(row.limitDays ?? 0),
        lateNights: Number(row.lateNights ?? 0),
        topApp,
      } as FamilyReportChild;
    })
    .filter((child): child is FamilyReportChild => child !== null);
}

function mapNarrative(raw: unknown): Partial<Record<AppLanguage, string>> {
  if (!raw || typeof raw !== 'object') {
    return {};
  }
  return Object.fromEntries(
    Object.entries(raw as Record<string, unknown>).filter(
      ([, text]) => typeof text === 'string' && text.trim().length > 0,
    ),
  ) as Partial<Record<AppLanguage, string>>;
}

/**
 * One report from its raw fields.
 *
 * Split from the snapshot so the same mapping covers the document read from
 * Firestore and the copy `generateWeeklyReport` returns in its response body —
 * they are the same document, and a response parsed loosely while the stored
 * one is parsed strictly would render two different cards for one week.
 */
function mapReportData(id: string, data: Record<string, unknown>): FamilyReport {
  const narrative = mapNarrative(data.narrative);
  const source: FamilyReportSource =
    data.source === 'model' || data.source === 'template'
      ? data.source
      : Object.keys(narrative).length > 0
        ? 'model'
        : 'template';

  return {
    id: typeof data.id === 'string' && data.id ? data.id : id,
    kind: 'weekly',
    periodKey: typeof data.periodKey === 'string' ? data.periodKey : '',
    fromDate: typeof data.fromDate === 'string' ? data.fromDate : '',
    toDate: typeof data.toDate === 'string' ? data.toDate : '',
    screenMinutes: Number(data.screenMinutes ?? 0),
    previousScreenMinutes: Number(data.previousScreenMinutes ?? 0),
    blockedAppOpens: Number(data.blockedAppOpens ?? 0),
    blockedWebVisits: Number(data.blockedWebVisits ?? 0),
    findings: mapFindings(data.findings),
    children: mapChildren(data.children),
    narrative,
    source,
    rejection: REJECTIONS.includes(data.rejection as FamilyReportRejection)
      ? (data.rejection as FamilyReportRejection)
      : null,
    model: typeof data.model === 'string' ? data.model : null,
    createdAt: typeof data.createdAt === 'string' ? data.createdAt : '',
    trigger: data.trigger === 'manual' ? 'manual' : 'scheduled',
  };
}

function mapReport(doc: DocSnapshot): FamilyReport {
  return mapReportData(doc.id, doc.data() ?? {});
}

/** Newest first, and never a document the week key could not be read from. */
function sortReports(reports: FamilyReport[]): FamilyReport[] {
  return reports
    .filter(report => report.periodKey !== '')
    .sort((a, b) => b.periodKey.localeCompare(a.periodKey));
}

/**
 * What `generateWeeklyReport` answers with.
 *
 * `created` is false when the week already had a report — pressing the button
 * twice returns the stored one rather than generating a second wording of the
 * same seven days. A caller can use it to tell "here is your report" from
 * "here is the one you already had", and must not treat it as a failure.
 */
export interface GenerateReportResult {
  report: FamilyReport;
  created: boolean;
}

/** The endpoint's body, before mapping. */
interface GenerateReportBody {
  ok: boolean;
  report: Record<string, unknown>;
  created: boolean;
}

export interface FamilyReportRepositoryDeps {
  db: FirestorePort;
  api: ApiPort;
}

export function createFamilyReportRepository(deps: FamilyReportRepositoryDeps) {
  const { db, api } = deps;

  return {
    async fetchRecent(
      familyId: string,
      limit: number = REPORT_PAGE_SIZE,
    ): Promise<FamilyReport[]> {
      const snapshot = await db.getDocs(familyReportsCollection(familyId), {
        orderBy: [[DOCUMENT_ID, 'desc']],
        limit,
      });
      return sortReports(snapshot.docs.map(mapReport));
    },

    /**
     * Generate this week's report now, or get back the one that exists.
     *
     * Costs a model call and reads a fortnight of usage, which is why the
     * endpoint is rate limited and keyed by week — see the header of
     * `functions/http/familyReport.js`. The `locale` is what the prose gets
     * written in; omitting it falls back to the account's language server-side,
     * which is the right answer for a scheduled send and the wrong one for a
     * parent who has just switched the dashboard to another language.
     */
    async generateNow(locale?: string): Promise<GenerateReportResult> {
      const body = await api.post<GenerateReportBody>(
        '/generateWeeklyReport',
        locale ? { locale } : {},
        { as: 'parent' },
      );
      const raw = body?.report ?? {};
      return {
        report: mapReportData(
          typeof raw.id === 'string' ? raw.id : '',
          raw as Record<string, unknown>,
        ),
        created: Boolean(body?.created),
      };
    },
  };
}

export type FamilyReportRepository = ReturnType<typeof createFamilyReportRepository>;
