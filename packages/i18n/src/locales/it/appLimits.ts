export const appLimits = {
  title: 'Limiti app',
  intro:
    'Imposta quanto può durare ogni app al giorno, oltre al limite giornaliero del dispositivo.',
  emptyTitle: 'Ancora nessun limite',
  emptySubtitle: 'Scegli un’app qui sotto per darle un limite giornaliero suo.',
  usedToday: '{{used}} su {{limit}} oggi',
  addSectionTitle: 'Aggiungi un limite',
  addSectionSubtitle: 'App usate di recente da tuo figlio.',
  candidateUsage: '{{duration}} oggi',
  noUsageYet:
    'Nessun utilizzo ancora segnalato. I limiti compaiono quando il dispositivo invia i dati.',
  footnote: 'I limiti si azzerano a mezzanotte sul dispositivo del figlio.',
  toastSaved: 'Limiti salvati.',
  toastSaveFailed: 'Impossibile salvare. Riprova.',
  removeAccessibility: 'Rimuovi il limite di {{app}}',
  increaseAccessibility: 'Aumenta il limite di {{app}}',
  decreaseAccessibility: 'Riduci il limite di {{app}}',
  addAccessibility: 'Aggiungi un limite giornaliero per {{app}}',
} as const;
