/**
 * Device naming constraints.
 *
 * A persisted limit rather than a UI one: the value is enforced on write and
 * read back by every client, so it belongs with the document contract.
 *
 * Source: legacy `src/constants/DeviceName.ts`.
 */
export const MAX_DEVICE_NAME_LENGTH = 20;
