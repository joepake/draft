export const screenTime = {
  turnOnScreenTime: 'Activer Temps d’écran',
  finishScreenTimeSetup: 'Terminer la configuration de Temps d’écran',
  screenTimeNeededForControls:
    'Les Applications bloquées, les Heures bloquées, la Limite quotidienne et le verrouillage nécessitent Temps d’écran sur cet appareil.',
  screenTimeNeededForLimits:
    'Sans Temps d’écran, le verrouillage, les Heures bloquées, la Limite quotidienne et les Applications bloquées ne peuvent pas s’appliquer.',
  screenTimeStepOpenKidGate: 'Ouvrez KidGate sur cet appareil de l’enfant.',
  screenTimeStepAllowUsage:
    'Sur l’écran État, sélectionnez Autoriser l’utilisation des apps et des sites web.',
  screenTimeStepTapAllow: 'Quand demandé, sélectionnez Autoriser.',
  screenTimeStepReturnHereAuto: 'Revenez ici — l’état se met à jour automatiquement.',
  screenTimeDeniedStepOpenSettings: 'Sur l’appareil de l’enfant, ouvrez les Réglages.',
  screenTimeDeniedStepFindKidGate: 'Trouvez KidGate dans la liste.',
  screenTimeDeniedStepTurnOnRestrictions: 'Activez Temps d’écran.',
  screenTimeDeniedStepOpenKidGateAgain: 'Rouvrez KidGate sur l’appareil de l’enfant.',
  screenTimeDeniedStepReturnWhenReady:
    'Revenez ici — cette carte disparaîtra une fois la configuration terminée.',
  screenTimeSetupStep1:
    'Sélectionnez Autoriser l’utilisation des apps et des sites web ci-dessous.',
  screenTimeSetupStep2:
    'Quand demandé, sélectionnez Autoriser dans la fenêtre Utilisation des apps et des sites web.',
  screenTimeSetupStep3: 'Revenez ici après la fermeture de la fenêtre.',
  screenTimeDeniedStep1: 'Sélectionnez Ouvrir les réglages de l’app ci-dessous.',
  screenTimeDeniedStep2: 'Sur la page {{appName}}, activez Temps d’écran.',
  screenTimeDeniedStep3: 'Revenez dans {{appName}} — cette carte disparaîtra.',
  screenTimeBannerTitleDenied: 'Activer Temps d’écran',
  screenTimeBannerTitleRequest: 'Autoriser l’utilisation des apps et des sites web',
  screenTimeBannerBodyDenied:
    '{{appName}} a besoin que Temps d’écran soit activé dans Réglages.',
  screenTimeBannerBodyRequest:
    'Cela permet à tes parents de bloquer des apps et de définir des Heures bloquées sur cet appareil.',
  screenTimeAuthPasscode:
    'Cet appareil doit avoir un code pour que KidGate puisse utiliser Temps d’écran. Définissez-en un dans Réglages, puis réessayez.',
  screenTimeAuthConflict:
    'Une autre app contrôle déjà Temps d’écran sur cet appareil. Supprimez cette app, puis réessayez.',
  screenTimeAuthRestricted:
    'Une restriction sur cet appareil empêche KidGate d’utiliser Temps d’écran. Demandez à la personne qui gère cet appareil de la lever.',
  usageAccessBannerTitle: 'Activer l’Accès à l’utilisation',
  usageAccessBannerBody:
    'KidGate a besoin de l’Accès à l’utilisation pour suivre le temps d’écran et appliquer les limites.',
  usageAccessStepOpenSettings: 'Sélectionnez Ouvrir les Réglages ci-dessous.',
  usageAccessStepFindKidGate:
    'Trouvez KidGate et activez l’accès aux données d’utilisation.',
  usageAccessStepReturn: 'Revenez ici — l’état se met à jour automatiquement.',
  noDailyLimitSet: 'Aucune Limite quotidienne définie',
  limitReachedStatus: '{{used}} / {{limit}} · Limite atteinte',
  minutesUsedStatus: '{{used}} / {{limit}} d’utilisation',
  usageUpdatesHint:
    'L’utilisation se met à jour toutes les quelques minutes tant que la surveillance de Temps d’écran est active.',
  dailyLimitMinutes: '{{limitMinutes}} min',
} as const;
