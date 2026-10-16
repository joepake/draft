export const webSignIn = {
  title: 'Accedi sul web',
  subtitle: 'Gestisci la famiglia da un computer',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Un browser vede la tua famiglia solo dopo che lo autorizzi da questo telefono.',
  stepsTitle: 'Sul computer',
  step1: 'Apri {{url}} in un browser.',
  step2: 'Attendi che la pagina di accesso mostri un codice QR.',
  step3: 'Inquadra il codice mostrato con la fotocamera qui sotto.',
  scanHint: 'Tieni il codice QR dentro il riquadro.',
  manualTitle: 'Inserisci il codice di 6 caratteri',
  manualHint: 'Il codice è scritto sotto il codice QR sul computer.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'Continua',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'Autorizzare questo browser?',
  confirmBody:
    'Avrà lo stesso controllo di questo telefono: potrà vedere dove sono i tuoi figli, cambiare i limiti, bloccare i dispositivi e approvare le richieste. Potrà apportare modifiche per 7 giorni e puoi rimuoverlo in qualsiasi momento da Famiglia → Genitori. Autorizzalo solo se sei tu ad accedere.',
  confirmCodeLabel: 'Codice mostrato sul computer',
  approveButton: 'Autorizza',
  declineButton: 'Non autorizzare',
  declinedToast: 'Browser non autorizzato.',
  approvedTitle: 'Browser autorizzato',
  approvedBody: 'Il computer sta accedendo. Puoi posare il telefono.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'Questo codice QR non è un codice di accesso web. Controlla che sul computer sia aperta la schermata di accesso.',
  expired: 'Il codice è scaduto. Mostrane uno nuovo sul computer.',
  alreadyUsed: 'Il codice è già stato usato. Mostrane uno nuovo sul computer.',
  notFound: 'Codice non valido. Controlla i sei caratteri e riprova.',
  failed: 'Impossibile completare la richiesta. Riprova.',
  sessionsTitle: 'Browser che possono apportare modifiche',
  sessionsHint:
    'Questi browser hanno effettuato l’accesso alla dashboard web con il tuo account e possono apportare modifiche. Un browser che si limita a mostrare la tua famiglia non compare nell’elenco.',
  sessionsEmpty:
    'Nessun browser può apportare modifiche. Quando ne autorizzi uno, comparirà qui.',
  sessionRow: '{{browser}} su {{os}}',
  sessionRowUnknown: 'Browser web',
  sessionExpires: 'Può apportare modifiche fino al {{date}}',
  sessionViaQr: 'Autorizzato con un codice QR',
  sessionViaPin: 'Autorizzato con il PIN genitore',
  thisBrowser: 'Questo browser',
  sessionsRevoke: 'Rimuovi',
  sessionsRevokeConfirmTitle: 'Rimuovere questo browser?',
  sessionsRevokeConfirmBody:
    'Non potrà più modificare le impostazioni né controllare i dispositivi. Fino alla data indicata, può ancora modificare alcuni dettagli dei dispositivi, come il nome. Potrebbe però continuare a mostrare le informazioni della tua famiglia finché qualcuno non si disconnette da lì.',
  revokedToast: 'Browser rimosso.',
  revokeFailed: 'Impossibile rimuovere questo browser. Riprova.',
} as const;
