export const appLimits = {
  title: 'Limiti app',
  intro:
    'Imposta per quanto tempo si può usare ogni app al giorno. Si aggiunge al Limite giornaliero.',
  emptyTitle: 'Ancora nessun limite',
  emptySubtitle: 'Scegli un’app qui sotto per darle un limite tutto suo.',
  usedToday: '{{used}} su {{limit}} oggi',
  addSectionTitle: 'Aggiungi un limite',
  addSectionSubtitle: 'Le app più usate oggi su questo dispositivo.',
  candidateUsage: '{{duration}} oggi',
  noUsageYet:
    'Nessun utilizzo ancora segnalato. I limiti compaiono quando il dispositivo invia i dati.',
  footnote: 'I limiti si azzerano a mezzanotte sul dispositivo del bambino.',
  toastSaved: 'Limiti salvati.',
  toastSaveFailed: 'Impossibile salvare. Riprova.',
  removeAccessibility: 'Rimuovi il limite di {{app}}',
  increaseAccessibility: 'Aumenta il limite di {{app}}',
  decreaseAccessibility: 'Riduci il limite di {{app}}',
  addAccessibility: 'Aggiungi un limite giornaliero per {{app}}',
} as const;
