import { createContext } from 'react';

/**
 * Whether this browser's write gate is closed, and how to open it — read by
 * `Toggle`, so a switch held by the gate can be pressed to unlock. Its `title`
 * was the only explanation, and a touchscreen never shows one. Null outside
 * `pages/Dashboard.jsx` (the design preview), where a switch behaves as before.
 */
export const WriteLockContext = createContext(null);
