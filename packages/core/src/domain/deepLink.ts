/**
 * Deep-link configuration the QR parsers need.
 *
 * Passed in rather than read from the environment: the legacy versions of
 * these functions imported `react-native-config`, which bakes values in at
 * build time and cannot resolve in a browser or a Cloud Function. The values
 * are configuration, not logic, so they belong at the call site.
 */
export interface PairingLinkConfig {
  /** Custom URL scheme, without the `://`. */
  scheme: string;
  /** `https://…` host the scheme is rewritten to before parsing. */
  webHost: string;
}
