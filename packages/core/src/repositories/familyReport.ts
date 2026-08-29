import type { ApiPort } from '@kidgate/ports/api';
import type { DocSnapshot, FirestorePort } from '@kidgate/ports/firestore';
import type {
  FamilyReport,
  FamilyReportAction,
  FamilyReportChild,
  FamilyReportFinding,
  FamilyReportPerson,
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

/**
 * The week stamp, which is both the sort key and half the document id.
 *
 * This ordered by `__name__` until it turned out Firestore only indexes the
 * document id ascending: `orderBy('__name__', 'desc')` needs a composite index
 * nobody declared, so every read failed `failed-precondition` and the history
 * screen rendered "no reports yet" over a year of stored weeks. `periodKey`
 * holds the same string the id is built from (`2026-W33`), sorts identically
 * as text, and is covered in both directions by the automatic single-field
 * index. See `QueryField` in `@kidgate/ports/firestore`.
 */
const SORT_FIELD = 'periodKey';

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
        childId: typeof row.childId === 'string' && row.childId ? row.childId : null,
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

/**
 * The per-person rows, with the null that matters preserved.
 *
 * `screenOnMinutes` is the one field here that must not be coerced. Every other
 * number falls back to zero because a missing count is a count of none;
 * `Number(undefined ?? 0)` on this one would turn "no device this child holds
 * can report when the screen was on" into "this child was never on a screen",
 * and a parent would read the second sentence having been told the first.
 */
function mapPeople(raw: unknown): FamilyReportPerson[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .map(entry => {
      if (!entry || typeof entry !== 'object') {
        return null;
      }
      const row = entry as Record<string, unknown>;
      const childId = typeof row.childId === 'string' ? row.childId : '';
      if (!childId) {
        return null;
      }

      const app = row.topApp as Record<string, unknown> | null | undefined;
      const topApp =
        app && typeof app === 'object' && typeof app.label === 'string'
          ? {
              label: app.label,
              packageNames: Array.isArray(app.packageNames)
                ? app.packageNames.filter(
                    (name): name is string => typeof name === 'string',
                  )
                : [],
              minutes: Number(app.minutes ?? 0),
            }
          : null;

      const screenOn = row.screenOnMinutes;
      const coverage = Number(row.coverage);

      return {
        childId,
        name: typeof row.name === 'string' && row.name ? row.name : null,
        colorIndex: Number(row.colorIndex ?? 0),
        deviceIds: Array.isArray(row.deviceIds)
          ? row.deviceIds.filter((id): id is string => typeof id === 'string')
          : [],
        deviceMinutes: Number(row.deviceMinutes ?? 0),
        previousDeviceMinutes: Number(row.previousDeviceMinutes ?? 0),
        screenOnMinutes: typeof screenOn === 'number' ? screenOn : null,
        screenOnLowMinutes: Number(row.screenOnLowMinutes ?? 0),
        screenOnHighMinutes: Number(row.screenOnHighMinutes ?? 0),
        overlapMinutes: Number(row.overlapMinutes ?? 0),
        coverage: Number.isFinite(coverage) ? coverage : null,
        lateNights: Number(row.lateNights ?? 0),
        limitDays: Number(row.limitDays ?? 0),
        limitedDevices: Number(row.limitedDevices ?? 0),
        topApp,
      } as FamilyReportPerson;
    })
    .filter((person): person is FamilyReportPerson => person !== null);
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
 * The week's suggested action, or null when the stored week has none.
 *
 * Null is the ordinary answer, not a parse failure: `reportAction` withholds an
 * action whenever the device it would open is not arithmetic, and every report
 * written before the field existed has no key at all.
 *
 * `deviceId` is what makes the field worth anything — the button navigates on
 * it — so a row without one is dropped rather than returned as a button that
 * goes nowhere. `minutes` is checked separately because only `dailyLimit`
 * carries one, and a `blockedHours` row that somehow has a number must not
 * hand a renderer a figure to print beside a window.
 */
function mapAction(raw: unknown): FamilyReportAction | null {
  if (!raw || typeof raw !== 'object') {
    return null;
  }
  const row = raw as Record<string, unknown>;
  if (row.kind !== 'blockedHours' && row.kind !== 'dailyLimit') {
    return null;
  }
  const deviceId = typeof row.deviceId === 'string' ? row.deviceId : '';
  if (!deviceId) {
    return null;
  }

  const minutes = Number(row.minutes);
  return {
    kind: row.kind,
    deviceId,
    deviceName: typeof row.deviceName === 'string' ? row.deviceName : null,
    from: typeof row.from === 'string' ? row.from : '',
    minutes:
      row.kind === 'dailyLimit' && Number.isFinite(minutes) && minutes > 0
        ? Math.round(minutes)
        : null,
  };
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
    people: mapPeople(data.people),
    action: mapAction(data.action),
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
        orderBy: [[SORT_FIELD, 'desc']],
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
     *
     * `familyId` is the family root, sent as `familyOwnerUserId` — the wire
     * name every handler in `functions/http` reads, never `familyId` (the same
     * trap `rewardTask.ts` documents at the top of the file). It has to be the
     * same root `fetchRecent` reads from, or the button writes a report the
     * list it refreshes cannot see.
     */
    async generateNow(
      familyId: string,
      locale?: string,
      options?: {
        /**
         * Rebuild and overwrite this week's stored report instead of getting
         * it back. Test-phase only: the endpoint's week key deliberately makes
         * a second press return the first wording, which is right for parents
         * and useless while the prompt is being tuned. Goes away with the
         * button when reports become schedule-only.
         */
        regenerate?: boolean;
      },
    ): Promise<GenerateReportResult> {
      const body = await api.post<GenerateReportBody>(
        '/generateWeeklyReport',
        {
          familyOwnerUserId: familyId,
          ...(locale ? { locale } : {}),
          ...(options?.regenerate ? { regenerate: true } : {}),
        },
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
