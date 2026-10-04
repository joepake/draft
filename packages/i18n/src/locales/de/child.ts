export const child = {
  pageTitle: 'Status',
  statusPaused: 'Gesperrt',
  statusActive: 'Aktiv',
  readyTitle: 'Alles bereit',
  readyBody:
    'Wenn du mehr Bildschirmzeit brauchst, kannst du oben eine Anfrage an deine Eltern senden. Im Notfall nutze die SOS-Taste.',
  setupCollapsedTitle: 'Einrichtung mit einem Elternteil abschließen',
  setupCollapsedRequiredCount: '{{count}} erforderliche Schritte',
  setupCollapsedRequiredCount_one: '{{count}} erforderlicher Schritt',
  setupCollapsedOptionalCount: '{{count}} optionale Schritte',
  setupCollapsedOptionalCount_one: '{{count}} optionaler Schritt',
  oneMoment: 'Einen Moment bitte…',
  paused: 'Gesperrt',
  blockedHours: 'Sperrzeiten',
  limitReached: 'Limit erreicht',
  active: 'Aktiv',
  parentPausedThisDevice: 'Deine Eltern haben dieses Gerät vorerst gesperrt.',
  blockedHoursOnPaused:
    'Gerade sind Sperrzeiten aktiv. Ein guter Moment für eine Pause.',
  outOfScreenTimeAskParent:
    'Du hast die heutige Bildschirmzeit aufgebraucht. Unten kannst du mehr anfragen.',
  screenTimeToday: 'Bildschirmzeit heute',
  usedOverLimitMinutes: '{{used}} / {{limit}}',
  usedMinutesOnly: '{{used}}',
  outOfScreenTimeToday:
    'Du hast die heutige Bildschirmzeit aufgebraucht. Du kannst deine Eltern um mehr bitten.',
  devicePaused: 'Gerät gesperrt',
  devicePausedByParent: '{{deviceName}} ist gerade gesperrt.',
  phonePausedByParent: 'Deine Eltern haben dieses Gerät vorerst gesperrt.',
  pausedAskParentOrSos:
    'Bitte deine Eltern, das Gerät zu entsperren, wenn du es brauchst. Im Notfall kannst du weiterhin ein SOS senden.',
  blockedHoursLockTitle: 'Sperrzeiten',
  blockedHoursLockBody:
    'Gerade sind Sperrzeiten aktiv. Ein guter Moment für eine Pause.',
  blockedHoursLockHint:
    'Wenn du dieses Gerät jetzt brauchst, frag deine Eltern, ob sie die Sperrzeiten ändern. Im Notfall kannst du weiterhin ein SOS senden.',
  blockedHoursLockBodyUntil:
    'Die Sperrzeiten sind bis {{time}} aktiv. Ein guter Moment für eine Pause.',
  dailyLimitLockHint:
    'Frag deine Eltern, wenn du mehr Zeit brauchst. Im Notfall kannst du weiterhin ein SOS senden.',
  appClosedTitle: 'App geschlossen',
  appClosedBody: 'KidGate hat sie geschlossen, weil sie gerade blockiert ist.',
  parentPausedAccess: 'Deine Eltern haben dieses Gerät vorerst gesperrt.',
  parentRestoredAccess:
    'Deine Eltern haben das Gerät entsperrt. Du kannst es weiter nutzen.',
  toastDailyLimitIncreased:
    'Deine Eltern haben dir {{minutes}} Minuten mehr Bildschirmzeit gegeben.',
  toastDailyLimitIncreased_one:
    'Deine Eltern haben dir {{minutes}} Minute mehr Bildschirmzeit gegeben.',
  errorDeviceNotRegistered:
    'Dieses Gerät ist noch nicht bereit. Versuche es gleich noch einmal oder kopple es erneut, falls das weiterhin passiert.',
  errorScreenTimeRequired:
    'Zugriff auf Bildschirmzeit ist erforderlich. Erlaube ihn für KidGate und versuche es dann erneut.',
  minUsed: '{{used}} genutzt',
  setupContinueButton: 'Einrichtung fortsetzen',
  setupWizardTitle: 'Schutz einrichten',
  setupWizardProgress: '{{done}}/{{total}} erledigt',
  setupWizardRequired: 'Erforderlich',
  setupWizardOptional: 'Optional',
  setupWizardSkip: 'Später',
  setupWizardWatchGuide: 'So geht’s',
  setupGrantStuckHint:
    'Eingeschaltet, aber nichts passiert? Starte den Fernseher neu und versuche es erneut.',
  setupWizardAllDoneTitle: 'Alles bereit',
  setupWizardAllDoneSubtitle: 'Dieses Gerät ist jetzt geschützt.',
  setupWizardStepDone: 'Fertig – das ist jetzt aktiv.',
  setupWizardCoreDoneTitle: 'Der Basisschutz ist aktiv',
  setupWizardCoreDoneBody:
    'Die wichtigsten Berechtigungen sind erteilt und dieses Gerät ist geschützt. Die übrigen Schritte sind optionale Extras und lassen sich jetzt oder später erledigen.',
  setupWizardCoreDoneContinue: 'Jetzt verstärken',
  setupWizardCoreDoneLater: 'Später abschließen',
  setupWizardParentPinNote:
    'Eltern-PIN nötig – ein Elternteil gibt sie auf dem nächsten Bildschirm ein.',
} as const;
