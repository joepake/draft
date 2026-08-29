export type UserRole = 'parent' | 'child';

import type { MessageAiConsent } from './messageAiConsent';

export interface User {
  id: string;
  name: string;
  email: string;
  /**
   * Consent to the runtime AI message-analysis tier. Absent = off, the default.
   * Gates whether any message text may leave a child device
   * (`messageAiConsent.ts`, `docs/FEASIBILITY.md` tier 2).
   */
  messageAiConsent?: MessageAiConsent;
}
