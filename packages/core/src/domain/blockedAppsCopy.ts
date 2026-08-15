/**
 * The blocked-apps summary a parent reads, as keys and parts.
 *
 * Lifted from `apps/mobile/src/utils/blockedApps.ts` — which had also drifted
 * from the schema: it declared its own `BlockedAppPreviewItem` instead of
 * importing the one in `@kidgate/schema/deviceControls`, the exact
 * hand-mirroring root rule 2 exists to stop. The schema type is the only one
 * now.
 *
 * `getBlockedAppsSummaryParts` returns parts rather than a joined sentence:
 * the caller renders each key and joins with its own separator, so the
 * decision of *what the summary says* is shared while the string stays the
 * surface's.
 */

import type {
  BlockedAppPreviewItem,
  DeviceControls,
} from '@kidgate/schema/deviceControls';

export interface BlockedAppsSummaryPart {
  key: string;
  params?: Record<string, number>;
}

export function getBlockedAppPreviewKindKey(
  kind: BlockedAppPreviewItem['kind'],
): string {
  switch (kind) {
    case 'app':
      return 'blockedApps.appKind';
    case 'category':
      return 'blockedApps.categoryKind';
    case 'website':
      return 'blockedApps.websiteKind';
  }
}

export function getBlockedAppPreviewItems(
  controls: DeviceControls,
): BlockedAppPreviewItem[] {
  return controls.blockedAppPreview ?? [];
}

/**
 * What the summary is computed from.
 *
 * The four fields it reads, not the whole `DeviceControls` — `apps/desktop`
 * holds its blocked selection in a local store rather than on the document
 * (macOS enumerates `/Applications` itself), and asking it for a full
 * `DeviceControls` to render one line would mean inventing a schedule and a
 * web filter it does not have. A parent's `DeviceControls` still satisfies it.
 */
export type BlockedAppsSummarySource = Pick<
  DeviceControls,
  | 'blockedAppsConfigured'
  | 'blockedAppCount'
  | 'blockedCategoryCount'
  | 'blockedAppPreview'
>;

/**
 * The parts of the summary line, most significant first. One part means the
 * whole sentence; several are joined by the caller (the phone uses " · ").
 */
export function getBlockedAppsSummaryParts(
  controls: BlockedAppsSummarySource,
): BlockedAppsSummaryPart[] {
  if (!controls.blockedAppsConfigured) {
    return [{ key: 'blockedApps.noAppsSelectedYet' }];
  }

  const parts: BlockedAppsSummaryPart[] = [];
  if (controls.blockedAppCount > 0) {
    parts.push({
      key: 'blockedApps.blockedAppCount',
      params: { count: controls.blockedAppCount },
    });
  }
  if (controls.blockedCategoryCount > 0) {
    parts.push({
      key: 'blockedApps.blockedCategoryCount',
      params: { count: controls.blockedCategoryCount },
    });
  }

  const previewCount = controls.blockedAppPreview?.length ?? 0;
  if (parts.length === 0 && previewCount > 0) {
    return [{ key: 'blockedApps.blockedItemCount', params: { count: previewCount } }];
  }

  return parts.length > 0 ? parts : [{ key: 'blockedApps.blockedListReady' }];
}

export function parseBlockedAppPreviewItems(value: unknown): BlockedAppPreviewItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map(entry => {
      if (!entry || typeof entry !== 'object') {
        return null;
      }

      const item = entry as Record<string, unknown>;
      const kind = item.kind;
      const label = item.label;

      if (
        (kind !== 'app' && kind !== 'category' && kind !== 'website') ||
        typeof label !== 'string' ||
        !label.trim()
      ) {
        return null;
      }

      return {
        kind,
        label: label.trim(),
      };
    })
    .filter((item): item is BlockedAppPreviewItem => item !== null);
}
