import type { ApiPort } from '@kidgate/ports/api';
import type { ChildRules } from '@kidgate/schema/childRules';
import { toJsonBody } from '../domain/jsonBody';
import { readRefusal, type ControlsWriteResult } from './control';

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
    /**
     * `unknown`, not `void`: the real `updateControls` answers with what the
     * server refused (`ControlsWriteResult`), and a `void` here would refuse the
     * very implementation this dep exists to take. `setDailyBudget` ignores the
     * answer — it only needs the seed written — so the widest type that accepts
     * both is the honest one.
     */
    updateControls(
      userId: string,
      deviceId: string,
      controls: { dailyLimitMinutes: number | null },
    ): Promise<unknown>;
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
     * rewrites it. Since 2026-08-27 `syncChildAgent` rewrites those copies
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
    ): Promise<ControlsWriteResult & { seedFailures: number }> {
      /*
       * Carry the refusal out rather than dropping it. A parked device answers
       * a tightened budget with 200 and the key in `refusedKeys`, so
       * `seedFailures` stayed 0 and both consoles reported a clean save while
       * the device kept enforcing the older, looser number. `dailyLimitMinutes`
       * is not in `CHILD_RULE_KEYS`, so the divergence card never caught it
       * either.
       */
      const refusal = await this.updateRules(userId, childId, {
        dailyLimitMinutes: minutes,
      });

      if (!controls || deviceIds.length === 0) {
        return { ...refusal, seedFailures: 0 };
      }

      const writes = await Promise.allSettled(
        deviceIds.map(deviceId =>
          controls.updateControls(userId, deviceId, { dailyLimitMinutes: minutes }),
        ),
      );
      return {
        ...refusal,
        seedFailures: writes.filter(result => result.status === 'rejected').length,
      };
    },

    /**
     * Apply a partial change to the child's rules. Partial on purpose — the
     * server merges over what is stored, so a screen that only toggled the
     * switch does not have to re-send four lists it never touched.
     *
     * ## It hands back what the fan-out refused
     *
     * The child document takes the whole patch; a **parked** sibling takes only
     * the half that loosens (`docs/FEASIBILITY.md`, "Free tier: a parked device
     * goes loosen-only"), so this call can succeed and still leave one machine
     * enforcing the old rule. `updateChildRules` names those keys in the same
     * fields `updateDeviceControls` uses, read by the same `readRefusal` — one
     * refusal, one sentence, whichever endpoint the switch went through.
     *
     * Empty is the ordinary answer and a caller may ignore it.
     */
    async updateRules(
      userId: string,
      childId: string,
      rules: Partial<ChildRules>,
    ): Promise<ControlsWriteResult> {
      return readRefusal(
        await api.post(
          '/updateChildRules',
          { childId, familyOwnerUserId: userId, rules: toJsonBody(rules) },
          { as: 'parent' },
        ),
      );
    },
  };
}

export type ChildRulesRepository = ReturnType<typeof createChildRulesRepository>;
