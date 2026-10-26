export const blockedHours = {
  title: 'Heures bloquées',
  errorInvalidTimes:
    'Saisissez une heure de début et de fin valide (HH:mm) pour chaque plage horaire.',
  toastSaveFailed: 'Impossible d’enregistrer. Veuillez réessayer.',
  toastSaveSuccess: 'Heures bloquées enregistrées.',
  unsavedTitle: 'Ignorer les modifications ?',
  discardChanges: 'Ignorer',
  statusActiveNow: 'Actif maintenant',
  heroSubtitle:
    'Configurez jusqu’à {{max}} plages horaires pendant lesquelles l’utilisation de l’appareil est bloquée.',
  statTimeRangesLabel: 'Plages horaires',
  toggleTitle: 'Activer les Heures bloquées',
  toggleSubtitleOn:
    'L’utilisation de l’appareil est bloquée pendant les horaires ci-dessous.',
  toggleSubtitleOff:
    'Activez cette option pour bloquer l’utilisation de l’appareil selon un horaire.',
  toggleAccessibilityLabel: 'Activer les Heures bloquées',
  sectionTitle: 'Plages horaires bloquées',
  windowTitle: 'Plage {{number}}',
  windowOvernightSuffix: '· pendant la nuit',
  removeButton: 'Supprimer',
  timeStartLabel: 'Début',
  timeEndLabel: 'Fin',
  stepperMinus15Accessibility: '{{label}} moins 15 minutes',
  stepperPlus15Accessibility: '{{label}} plus 15 minutes',
  stepperMinus15: '−15',
  stepperPlus15: '+15',
  addBlockedTime: 'Ajouter une plage horaire',
  quickAddTitle: 'Ajout rapide',
  presetBedtime: 'Heure du coucher',
  presetSchool: 'École',
  presetStudy: 'Études',
  infoTitle: 'Fonctionnement',
  infoLine1:
    'Pendant les Heures bloquées, les applications sont bloquées sur l’appareil de l’enfant.',
  infoLine2:
    'Les plages horaires de nuit sont prises en charge, par exemple de 22:00 à 07:00.',
  infoLine3:
    'Sur iPhone et iPad, Temps d’écran doit être autorisé sur l’appareil de l’enfant.',
  infoSkippedExtension:
    'Les Heures bloquées ne sont pas disponibles dans l’extension {{name}}.',
  infoSkippedLockNotReady:
    'Les Heures bloquées ne s’appliqueront pas sur {{name}} tant que l’appareil n’est pas autorisé à verrouiller l’écran.',
  infoSkippedPlatform: 'Les Heures bloquées ne sont pas disponibles sur {{name}}.',
  off: 'Désactivé',
  blockedHoursStatusActiveNow: 'Actif maintenant',
  blockedHoursStatusOn: 'Activé',
  blockedHoursStatusOff: 'Désactivé',
  noDailyLimitBlockedHoursStatus:
    'Aucune limite quotidienne · Heures bloquées {{status}}',
  blockedHoursStatusLine: 'Heures bloquées · {{status}}',
  dayShortMon: 'Lun',
  dayShortTue: 'Mar',
  dayShortWed: 'Mer',
  dayShortThu: 'Jeu',
  dayShortFri: 'Ven',
  dayShortSat: 'Sam',
  dayShortSun: 'Dim',
  daysLabel: 'Jours',
  daysEveryDay: 'Tous les jours',
  daysWeekdays: 'En semaine',
  daysWeekend: 'Week-end',
  daysOvernightHint: 'Les plages de nuit comptent pour la nuit où elles commencent.',
  overlapWarning:
    'Cette plage horaire en chevauche une autre : les deux restent actives.',
  weekPreviewTitle: 'Votre semaine',
} as const;
