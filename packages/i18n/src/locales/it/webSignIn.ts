export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'KidGate sul web',
  title: 'Autorizza un browser',
  subtitle: 'Gestisci la famiglia da un computer',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Un browser vede la tua famiglia solo dopo che lo autorizzi da questo telefono.',
  stepsTitle: 'Sul computer',
  step1: 'Apri {{url}} in un browser.',
  step2: 'Scegli «Accedi con l’app KidGate».',
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
    'Avrà lo stesso controllo di questo telefono: potrà vedere dove sono i tuoi figli, cambiare i limiti, bloccare i dispositivi e approvare le richieste. Autorizzalo solo se sei tu ad accedere.',
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

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'Browser autorizzati',
  sessionsEmpty: 'Nessun browser ha effettuato l’accesso al tuo account.',
  sessionsRevoke: 'Disconnetti',
  sessionExpires: 'Scade {{when}}',
  revokedToast: 'Quel browser è stato disconnesso.',
} as const;
