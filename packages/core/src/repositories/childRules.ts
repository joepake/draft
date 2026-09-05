import type { ApiPort } from '@kidgate/ports/api';
import type { ChildRules } from '@kidgate/schema/childRules';
import { toJsonBody } from '../domain/jsonBody';

/**
 * Writing a child's rules — one endpoint, nothing else.
 *
 * There is deliberately no Firestore write path here: `rules` on the child
 * document is client-immutable (`childRulesUnchanged` in firestore.rules),
 * and `updateChildRules` is the only writer — it holds the premium gate and
 * fans the fields out into every assigned device's `controls`. Reading needs
 * no repository either: the child document already flows to the parent
 * surfaces through the listeners they hold, and the devices keep reading
 * their own `controls` exactly as before.
 *
 * `control.ts` is the sibling: this is the child-level half of the same
 * "parent fields go through a credential-verifying function" rule.
 */

export interface ChildRulesRepositoryDeps {
  api: ApiPort;
  /**
   * Only `setDailyBudget` uses it, and only to seed the devices — injected the
   * way `safetyCheckIn` takes `activities`, so this module keeps importing no
   * SDK and no sibling implementation.
   */
  controls?: {
    updateControls(
      userId: string,
      deviceId: string,
      controls: { dailyLimitMinutes: number | null },
    ): Promise<void>;
  };
}

export function createChildRulesRepository(deps: ChildRulesRepositoryDeps) {
  const { api, controls } = deps;

  return {
    /**
     * The child's shared daily budget — the rule write AND the device seeds.
     *
     * Two writes, and both are required. `dailyLimitMinutes` on `ChildRules`
     * is the number the parent chose; `controls.dailyLimitMinutes` on each
     * assigned device is the field every agent already locks on, so a budget
     * saved without seeding is decoration until the next usage report
     * rewrites it. Since 2026-08-27 `reportChildUsage` rewrites those copies
     * to `deviceUsed + (budget − totalUsed)` on every report — **the seed is
     * a starting value, not the answer** (`@kidgate/schema/childRules`).
     *
     * Here rather than in a screen since 2026-09-03: `ChildDetailScreen` had
     * it, `apps/dashboard` needed it, and a second copy is a second chance to
     * do only half of it.
     *
     * `Promise.allSettled`, not `all`: one unreachable device must not stop
     * the rest from getting the cap. The caller is told how many failed so it
     * can say so rather than claiming success.
     */
    async setDailyBudget(
      userId: string,
      childId: string,
      minutes: number | null,
      deviceIds: readonly string[],
    ): Promise<{ seedFailures: number }> {
      await this.updateRules(userId, childId, { dailyLimitMinutes: minutes });

      if (!controls || deviceIds.length === 0) {
        return { seedFailures: 0 };
      }

      const writes = await Promise.allSettled(
        deviceIds.map(deviceId =>
          controls.updateControls(userId, deviceId, { dailyLimitMinutes: minutes }),
        ),
      );
      return {
        seedFailures: writes.filter(result => result.status === 'rejected').length,
      };
    },

    /**
     * Apply a partial change to the child's rules. Partial on purpose — the
     * server merges over what is stored, so a screen that only toggled the
     * switch does not have to re-send four lists it never touched.
     */
    async updateRules(
      userId: string,
      childId: string,
      rules: Partial<ChildRules>,
    ): Promise<void> {
      await api.post(
        '/updateChildRules',
        { childId, familyOwnerUserId: userId, rules: toJsonBody(rules) },
        { as: 'parent' },
      );
    },
  };
}

export type ChildRulesRepository = ReturnType<typeof createChildRulesRepository>;
