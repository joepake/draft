export const screenTime = {
  turnOnScreenTime: 'Bildschirmzeit aktivieren',
  finishScreenTimeSetup: 'Bildschirmzeit-Einrichtung abschließen',
  screenTimeNeededForControls:
    'App-Blockierung, Sperrzeiten und Sperren benötigen Bildschirmzeit auf diesem Gerät.',
  screenTimeNeededForLimits:
    'Ohne Bildschirmzeit lassen sich Sperren, Sperrzeiten und App-Limits nicht anwenden.',
  screenTimeStepOpenKidGate: 'Öffne KidGate auf diesem Kindergerät.',
  screenTimeStepAllowUsage:
    'Wähle auf dem Status-Bildschirm „App- & Websitenutzung erlauben“.',
  screenTimeStepTapAllow: 'Wähle „Erlauben“, wenn du gefragt wirst.',
  screenTimeStepReturnHereAuto:
    'Kehre hierher zurück — der Status aktualisiert sich automatisch.',
  screenTimeDeniedStepOpenSettings:
    'Öffne auf dem Kindergerät Einstellungen → KidGate.',
  screenTimeDeniedStepTurnOnRestrictions: 'Aktiviere Bildschirmzeit.',
  screenTimeDeniedStepOpenKidGateAgain: 'Öffne KidGate erneut auf dem Kindergerät.',
  screenTimeDeniedStepReturnWhenReady:
    'Kehre hierher zurück — diese Karte verschwindet, sobald die Einrichtung fertig ist.',
  screenTimeSetupStep1: 'Wähle unten „App- & Websitenutzung erlauben“.',
  screenTimeSetupStep2: 'Wähle im Dialog zur App- & Websitenutzung „Erlauben“.',
  screenTimeSetupStep3: 'Kehre zurück, sobald der Dialog geschlossen ist.',
  screenTimeDeniedStep1: 'Wähle unten „App-Einstellungen öffnen“.',
  screenTimeDeniedStep2: 'Aktiviere auf der {{appName}}-Seite Bildschirmzeit.',
  screenTimeDeniedStep3: 'Kehre zu {{appName}} zurück — diese Karte verschwindet.',
  screenTimeBannerTitleDenied: 'Bildschirmzeit aktivieren',
  screenTimeBannerTitleRequest: 'App- & Websitenutzung erlauben',
  screenTimeBannerBodyDenied:
    '{{appName}} benötigt aktivierte Bildschirmzeit in den Einstellungen.',
  screenTimeBannerBodyRequest:
    'Damit können deine Eltern auf diesem Gerät Apps sperren und Sperrzeiten festlegen.',
  usageAccessBannerTitle: 'Nutzungszugriff aktivieren',
  usageAccessBannerBody:
    'KidGate braucht den Nutzungszugriff, um Bildschirmzeit zu erfassen und Limits durchzusetzen.',
  usageAccessStepOpenSettings: 'Wähle unten „Einstellungen öffnen“.',
  usageAccessStepFindKidGate: 'Suche KidGate und aktiviere den Nutzungszugriff.',
  usageAccessStepReturn:
    'Kehre hierher zurück — der Status aktualisiert sich automatisch.',
  noDailyLimitSet: 'Kein Tageslimit festgelegt',
  limitReachedStatus: '{{used}} / {{limit}} · Limit erreicht',
  minutesUsedStatus: '{{used}} / {{limit}} genutzt',
  usageUpdatesHint:
    'Die Nutzung wird alle paar Minuten aktualisiert, solange die Bildschirmzeit-Überwachung aktiv ist.',
  dailyLimitNote: 'Setzt eine tägliche Obergrenze für die Bildschirmzeit.',
  dailyLimitMinutes: '{{limitMinutes}} Min.',
} as const;
