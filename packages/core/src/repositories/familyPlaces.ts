import type { ApiPort } from '@kidgate/ports/api';
import type { DevicePlace } from '@kidgate/schema/devicePlace';
import { toJsonBody } from '../domain/jsonBody';

/**
 * Writing the family's geofences — one endpoint, nothing else.
 *
 * "Home" exists once for the whole family (2026-08-26): `familyPlaces` on the
 * family root is client-immutable, `updateFamilyPlaces` sanitizes the list
 * and fans it into every child device's `places`, and a newly paired device
 * inherits it through `syncFamilyPlacesOnPairing`. Reading needs no
 * repository: every device document already carries the fanned-out copy, and
 * that is the field the parent screens were reading before the move.
 *
 * `childRules.ts` is the sibling — same auth shape, same fan-out argument.
 */

export interface FamilyPlacesRepositoryDeps {
  api: ApiPort;
}

export function createFamilyPlacesRepository(deps: FamilyPlacesRepositoryDeps) {
  const { api } = deps;

  return {
    /**
     * Replace the family's place list. Whole-list on purpose, unlike the
     * child-rules patch: the editor always holds the complete list, and a
     * partial merge of geofences has no meaning a parent could predict.
     */
    async updatePlaces(userId: string, places: DevicePlace[]): Promise<void> {
      await api.post(
        '/updateFamilyPlaces',
        // The list is already JSON-shaped; toJsonBody strips undefined from
        // objects and a place carries none of its optional siblings' fields.
        {
          familyOwnerUserId: userId,
          places: places.map(place => toJsonBody({ ...place })),
        },
        { as: 'parent' },
      );
    },
  };
}

export type FamilyPlacesRepository = ReturnType<typeof createFamilyPlacesRepository>;
