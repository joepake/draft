export const webSignIn = {
  title: 'Im Web anmelden',
  subtitle: 'Familie am Computer verwalten',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'Ein Browser erreicht deine Familie erst, wenn du ihn auf diesem Telefon zulässt.',
  stepsTitle: 'Am Computer',
  step1: 'Öffne {{url}} in einem Browser.',
  step2: 'Warte, bis die Anmeldeseite einen QR-Code anzeigt.',
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
    'Er bekommt die gleiche Kontrolle wie dieses Telefon: Er sieht, wo deine Kinder sind, ändert Limits, sperrt Geräte und genehmigt Anfragen. Er kann 7 Tage lang Änderungen vornehmen, und du kannst ihn jederzeit unter Familie → Elternteile entfernen. Lass ihn nur zu, wenn du selbst dich anmeldest.',
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
  sessionsTitle: 'Dashboard',
  sessionRow: '{{browser}} auf {{os}}',
  sessionRowUnknown: 'Webbrowser',
  sessionExpires: 'Kann bis {{date}} Änderungen vornehmen',
  sessionViaQr: 'Mit einem QR-Code zugelassen',
  sessionViaPin: 'Mit der Eltern-PIN zugelassen',
  thisBrowser: 'Dieser Browser',
  sessionsRevoke: 'Entfernen',
  sessionsRevokeConfirmTitle: 'Diesen Browser entfernen?',
  sessionsRevokeConfirmBody:
    'Er kann keine Einstellungen mehr ändern und keine Geräte mehr steuern. Bis zum angezeigten Datum kann er noch einige Gerätedetails ändern, etwa einen Namen. Die Daten deiner Familie kann er aber weiterhin anzeigen, bis sich dort jemand abmeldet.',
  revokedToast: 'Browser entfernt.',
  revokeFailed: 'Dieser Browser konnte nicht entfernt werden. Versuche es erneut.',
} as const;
