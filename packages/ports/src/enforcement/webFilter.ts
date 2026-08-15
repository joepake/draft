import type { WebFilterMechanism } from '@kidgate/schema/capabilities';
import type { WebFilterPolicy } from '@kidgate/schema/policy';
import type { DomainVisit, WebFilterStatus } from '@kidgate/schema/telemetry';

/**
 * Legacy origin: `ControlsService.setWebFilterEnabled`, `setWebFilterPolicy`,
 * `getWebFilterStatus`, `getWebDomainsToday`.
 */
export interface WebFilterPort {
  /**
   * Where interception happens, exposed because the honest answer differs a
   * lot. A browser extension covers one browser and the child can disable it;
   * a VPN covers everything and breaks certificate-pinned apps. The parent is
   * entitled to know which one is protecting their child.
   */
  readonly mechanism: Exclude<WebFilterMechanism, false>;

  setEnabled(enabled: boolean): Promise<void>;
  setPolicy(policy: WebFilterPolicy): Promise<void>;
  getStatus(): Promise<WebFilterStatus>;

  /** Device-local today. Empty when the mechanism cannot attribute visits. */
  getDomainsToday(): Promise<DomainVisit[]>;
}
