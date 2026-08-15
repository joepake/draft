export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'KidGate im Web',
  title: 'Browser zulassen',
  subtitle: 'Familie am Computer verwalten',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Ein Browser erreicht deine Familie erst, wenn du ihn auf diesem Telefon zulässt.',
  stepsTitle: 'Am Computer',
  step1: 'Öffne {{url}} in einem Browser.',
  step2: 'Wähle „Mit der KidGate-App anmelden“.',
  step3: 'Scanne den angezeigten Code mit der Kamera unten.',
  scanHint: 'Halte den QR-Code im Rahmen.',
  manualTitle: 'Gib den 6-stelligen Code ein',
  manualHint: 'Der Code steht unter dem QR-Code auf deinem Computer.',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'Weiter',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'Diesen Browser zulassen?',
  confirmBody:
    'Er bekommt die gleiche Kontrolle wie dieses Telefon: Er sieht, wo deine Kinder sind, ändert Limits, sperrt Geräte und genehmigt Anfragen. Lass ihn nur zu, wenn du selbst dich anmeldest.',
  confirmCodeLabel: 'Code von deinem Computer',
  approveButton: 'Zulassen',
  declineButton: 'Nicht zulassen',
  declinedToast: 'Browser nicht zugelassen.',
  approvedTitle: 'Browser zugelassen',
  approvedBody: 'Dein Computer meldet sich jetzt an. Du kannst das Telefon weglegen.',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'Dieser QR-Code ist kein Code für die Web-Anmeldung. Prüfe, ob auf dem Computer der Anmeldebildschirm offen ist.',
  expired: 'Dieser Code ist abgelaufen. Lass auf deinem Computer einen neuen anzeigen.',
  alreadyUsed:
    'Dieser Code wurde bereits verwendet. Lass auf deinem Computer einen neuen anzeigen.',
  notFound: 'Dieser Code ist ungültig. Prüfe die sechs Zeichen und versuche es erneut.',
  failed: 'Anfrage konnte nicht abgeschlossen werden. Bitte versuche es erneut.',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'Zugelassene Browser',
  sessionsEmpty: 'In deinem Konto ist kein Browser angemeldet.',
  sessionsRevoke: 'Abmelden',
  sessionExpires: 'Läuft ab {{when}}',
  revokedToast: 'Dieser Browser wurde abgemeldet.',
} as const;
