/**
 * What message monitoring is **actually doing** on one child device, as that
 * device reports it.
 *
 * Three shapes now describe this feature and they answer three different
 * questions. Keeping them apart is the point:
 *
 * - `DeviceCapabilities.messageMonitoring` — *could this platform ever?* A fact
 *   about Android, settled at build time, read through
 *   `@kidgate/core/domain/alertSupport`.
 * - `DeviceProtectionStatus` — *has the child granted the permissions the
 *   product needs on every device?* Every key there is something a parent is
 *   told to go fix.
 * - This — *is it running right now, on this phone?* Changes when a child flips
 *   a switch or when Android drops an accessibility grant, and a family that
 *   never wanted message monitoring is entitled to have it off.
 *
 * Message monitoring must not join `DeviceProtectionStatus` for exactly that
 * last reason: opt-in and off by default means a permission row would sit red
 * forever on every device whose family declined, which teaches parents to
 * ignore the one screen that has to stay believable.
 *
 * ## Why two halves rather than one flag
 *
 * They are two separate Android consents, granted on two different system
 * screens, and a child can hold either without the other:
 *
 * - `incoming` — `KidGateMessageListenerService`, a `NotificationListenerService`
 *   reading message notifications as they arrive.
 * - `outgoing` — `KidGateTypingMonitorService`, an `AccessibilityService`
 *   reading what the child types inside an allow-list of messaging apps.
 *
 * Merging them into one boolean would let a screen offer a switch the OS has
 * not permitted, and would hide the case this structure exists to surface: a
 * half that is **switched on but no longer granted**. That is the silent
 * failure — the parent believes messages are being watched, the child device
 * agrees it was asked to, and Android has quietly stopped delivering anything.
 * `@kidgate/core/domain/messageMonitoringStatus` names that state `revoked`.
 *
 * ## Absent is unknown, never off
 *
 * Every Android device paired before this field existed publishes nothing, and
 * so does every non-Android device. A reader must say "unknown" there rather
 * than "not watching" — the same rule `DeviceCapabilities` follows, for the
 * same reason: a screen that turns a missing field into an accusation is wrong
 * on every device that predates the field.
 */

/** One consent plus one switch. Both halves have exactly this shape. */
export interface MessageMonitoringHalfState {
  /** The OS consent behind this half. False once Android revokes it. */
  granted: boolean;
  /** The switch on the child device. False until someone turns it on. */
  enabled: boolean;
}

export interface DeviceMessageMonitoringState {
  incoming: MessageMonitoringHalfState;
  outgoing: MessageMonitoringHalfState;
  /**
   * The scan floor in force on the device (`MESSAGE_ALERT_SEVERITY_RANK`:
   * high=2, medium=1, low=0). Carried so a parent reading an empty alert list
   * can tell "nothing happened" from "only profanity happened, and profanity is
   * below the floor".
   */
  minSeverity?: number;
  /**
   * When the device last answered. ISO string on the wire, a server timestamp
   * at the moment of write — the same shape and the same caveat as
   * `DeviceProtectionStatus.lastCheckedAt`.
   */
  lastCheckedAt?: string;
}
