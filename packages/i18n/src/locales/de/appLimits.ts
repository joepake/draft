export const appLimits = {
  title: 'App-Limits',
  intro:
    'Lege fest, wie lange jede App pro Tag laufen darf — zusätzlich zum Tageslimit des Geräts.',
  emptyTitle: 'Noch keine Limits',
  emptySubtitle: 'Wähle unten eine App und gib ihr ein eigenes Tageslimit.',
  usedToday: '{{used}} von {{limit}} heute',
  addSectionTitle: 'Limit hinzufügen',
  addSectionSubtitle: 'Apps, die dein Kind zuletzt genutzt hat.',
  candidateUsage: '{{duration}} heute',
  noUsageYet:
    'Noch keine Nutzung gemeldet. Limits erscheinen, sobald das Kindergerät berichtet.',
  footnote: 'Limits setzen sich um Mitternacht auf dem Kindergerät zurück.',
  toastSaved: 'App-Limits gespeichert.',
  toastSaveFailed: 'Speichern nicht möglich. Bitte erneut versuchen.',
  removeAccessibility: 'Limit für {{app}} entfernen',
  increaseAccessibility: 'Limit für {{app}} erhöhen',
  decreaseAccessibility: 'Limit für {{app}} verringern',
  addAccessibility: 'Tageslimit für {{app}} hinzufügen',
} as const;
