import type { ApiPort } from '@kidgate/ports/api';

/**
 * "Ring device": a parent makes a child device play a sound so it can be found
 * (`requestChildRing`, `docs/FEASIBILITY.md`, "Play sound on a child's phone").
 *
 * Here for `apps/dashboard`, which had no ring until 2026-10-22. `apps/mobile`
 * reaches the same endpoint through its own axios
 * `LocationRequestService.requestRing` — migration step 9 debt
 * (`packages/core/CLAUDE.md`), not a second contract. When that app moves onto
 * `ApiPort` it should delete that method and call this.
 *
 * The endpoint asks for the ID token alone, so a browser without a write grant
 * can ring; `as: 'parent'` is what every console action says, and the adapter
 * decides what that attaches.
 */

export interface DeviceRingRepositoryDeps {
  api: ApiPort;
}

export function createDeviceRingRepository(deps: DeviceRingRepositoryDeps) {
  const { api } = deps;

  return {
    /**
     * `locating` is whether the same press also asked for a fix — only while
     * sharing is on, the device is not parked, and the location allowance has
     * room. The ring itself goes out either way.
     */
    async ring(familyId: string, deviceId: string): Promise<{ locating: boolean }> {
      const result = await api.post<{ locating?: boolean }>(
        '/requestChildRing',
        { userId: familyId, deviceId },
        { as: 'parent' },
      );
      return { locating: result?.locating === true };
    },
  };
}

export type DeviceRingRepository = ReturnType<typeof createDeviceRingRepository>;
