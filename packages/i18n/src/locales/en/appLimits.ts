export const appLimits = {
  title: 'App Limits',
  emptyTitle: 'No app limits yet',
  emptySubtitle: 'Pick an app below to give it its own limit.',
  usedToday: '{{used}} of {{limit}} today',
  activeSectionTitle: 'Current limits',
  addSectionTitle: 'Add a limit',
  addSectionSubtitle: 'Most used today',
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
