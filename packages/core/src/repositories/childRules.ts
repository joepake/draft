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
}

export function createChildRulesRepository(deps: ChildRulesRepositoryDeps) {
  const { api } = deps;

  return {
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
