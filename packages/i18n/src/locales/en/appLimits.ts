export const appLimits = {
  title: 'App Limits',
  intro:
    'Cap how long each app can be used per day. This is on top of the device-wide daily limit.',
  emptyTitle: 'No app limits yet',
  emptySubtitle: 'Pick an app below to give it its own daily cap.',
  usedToday: '{{used}} of {{limit}} today',
  addSectionTitle: 'Add a limit',
  addSectionSubtitle: 'Apps your child used recently.',
  candidateUsage: '{{duration}} today',
  noUsageYet:
    'No app usage reported yet. Limits become available once the child device reports usage.',
  footnote: 'Limits reset at midnight on the child device.',
  toastSaved: 'App limits saved.',
  toastSaveFailed: 'Unable to save. Try again.',
  removeAccessibility: 'Remove the limit on {{app}}',
  increaseAccessibility: 'Increase the limit on {{app}}',
  decreaseAccessibility: 'Decrease the limit on {{app}}',
  addAccessibility: 'Add a daily limit for {{app}}',
} as const;
