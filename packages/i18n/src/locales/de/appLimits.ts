export const appLimits = {
  title: 'App-Limits',
  intro:
    'Lege fest, wie lange jede App pro Tag genutzt werden darf. Das gilt zusätzlich zum Tageslimit.',
  emptyTitle: 'Noch keine Limits',
  emptySubtitle: 'Wähle unten eine App und gib ihr ein eigenes Limit.',
  usedToday: '{{used}} von {{limit}} heute',
  addSectionTitle: 'Limit hinzufügen',
  addSectionSubtitle: 'Die heute am meisten genutzten Apps auf diesem Gerät.',
  candidateUsage: '{{duration}} heute',
  noUsageYet:
    'Noch keine Nutzung gemeldet. Limits lassen sich einstellen, sobald das Kindergerät die Nutzung meldet.',
  footnote: 'Limits setzen sich um Mitternacht auf dem Kindergerät zurück.',
  toastSaved: 'App-Limits gespeichert.',
  toastSaveFailed: 'Speichern nicht möglich. Bitte erneut versuchen.',
  removeAccessibility: 'Limit für {{app}} entfernen',
  increaseAccessibility: 'Limit für {{app}} erhöhen',
  decreaseAccessibility: 'Limit für {{app}} verringern',
  addAccessibility: 'Tageslimit für {{app}} hinzufügen',
} as const;
