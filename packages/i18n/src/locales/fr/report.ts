export const report = {
  title: 'Rapport hebdomadaire',
  subtitle: 'Ce que KidGate a observé cette semaine.',
  weekOf: 'Semaine {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Envoyé dimanche',
  triggerManual: 'Créé par vous',

  statScreenTime: 'Temps d’écran',
  statDailyAverage: 'Moyenne par jour',
  statBlockedApps: 'Applications bloquées',
  statBlockedWebVisits: 'Sites filtrés',

  trendUp: '{{value}} de plus que la semaine précédente',
  trendDown: '{{value}} de moins que la semaine précédente',
  trendFlat: 'À peu près comme la semaine précédente',
  trendFirstWeek: 'Première semaine mesurée',
  barThisWeek: 'Cette semaine',
  barLastWeek: 'Semaine dernière',

  highlights: 'Bon à savoir',
  sevAttention: 'À regarder',
  sevNotable: 'Notable',
  sevInfo: 'Pour information',

  findingUsageUp:
    'Le temps d’écran a augmenté de {{percent}} % : {{delta}} de plus que la semaine dernière.',
  findingUsageDown:
    'Le temps d’écran a baissé de {{percent}} % : {{delta}} de moins que la semaine dernière.',
  findingUsageFlat: 'Le temps d’écran est resté à {{total}}.',
  findingLateNight_one: 'Une nuit après 23 h : elle a duré jusqu’à {{time}}.',
  findingLateNight_other:
    '{{count}} nuits après 23 h ; la plus tardive a duré jusqu’à {{time}}.',
  findingNewTopApp: '{{app}} est nouvelle cette semaine et occupe déjà {{duration}}.',
  findingAppSurge:
    '{{app}} progresse de {{delta}} par rapport à la semaine dernière : {{duration}} au total.',
  findingLimitHit_one: 'La limite quotidienne de {{limit}} a été atteinte un jour.',
  findingLimitHit_other:
    'La limite quotidienne de {{limit}} a été atteinte {{count}} jours.',
  findingBlockedApps:
    '{{count}} ouvertures d’applications bloquées, contre {{previous}} la semaine dernière.',
  findingBlockedWeb:
    '{{count}} sites filtrés, contre {{previous}} la semaine dernière.',
  findingQuietWeek:
    'Une semaine calme : {{total}} au total, et rien qui ait demandé votre attention.',

  // La moitié positive du rapport. Chaque phrase dit ce qui s’est passé et le
  // chiffre qui l’appuie ; aucune ne complimente — `docs/COPY_STYLE.md`
  // interdit la flatterie autant que l’alarme.
  findingLimitRespected:
    'La limite quotidienne de {{limit}} a été respectée les {{count}} jours.',
  findingLateNightGone_one:
    'Aucune nuit tardive cette semaine, après une nuit la semaine dernière.',
  findingLateNightGone_other:
    'Aucune nuit tardive cette semaine, après {{count}} nuits la semaine dernière.',
  findingBlockedAppsDown:
    '{{count}} ouvertures d’applications bloquées, contre {{previous}} la semaine dernière.',
  findingBlockedWebDown:
    '{{count}} sites filtrés, contre {{previous}} la semaine dernière.',
  findingLearningTime:
    '{{duration}} dans des applications éducatives, surtout {{app}}.',
  findingTasksDone_one: 'Une tâche terminée, {{bonus}} gagnées.',
  findingTasksDone_other: '{{count}} tâches terminées, {{bonus}} gagnées.',
  findingAskedFirst_one: 'Une demande envoyée, plutôt que de contourner une règle.',
  findingAskedFirst_other:
    '{{count}} demandes envoyées, plutôt que de contourner les règles.',
  findingCheckedIn: 'Les {{asked}} Check-in ont tous reçu une réponse.',

  narrativeTitle: 'En une phrase',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'Une action possible',
  actionDailyLimit: 'Définir une Limite quotidienne de {{duration}}',
  actionDailyLimitWhy: 'C’était la moyenne quotidienne de la semaine dernière.',
  actionBlockedHours: 'Définir des Heures bloquées',
  actionBlockedHoursLateNight: 'Bloquer les heures nocturnes',
  actionOnDevice: 'Sur {{device}}',
  finePrint:
    'Les chiffres couvrent du {{from}} au {{to}}, sur tous les appareils de la famille. Le temps d’écran est ce que les appareils ont signalé ; les minutes qu’ils n’ont pas pu mesurer ne sont dans aucun total.',

  generate: 'Rédiger le rapport de la semaine',
  generating: 'Rédaction…',
  share: 'Partager',
  copySummary: 'Copier le résumé',
  copied: 'Résumé copié.',
  shareFailed: 'Impossible d’ouvrir le menu de partage.',

  emptyTitle: 'Pas encore de rapport',
  emptyBody:
    'Un rapport arrive chaque dimanche soir. Vous pouvez aussi rédiger celui de cette semaine maintenant : il couvre les sept derniers jours.',
  noUsage:
    'Aucun temps d’écran n’a été enregistré ces deux dernières semaines, il n’y a donc rien à rapporter. Un appareil hors ligne ne signale rien, ce qui n’est pas la même chose qu’une semaine calme.',
  rateLimited: 'Trop de tentatives. Patientez une minute.',
  loadFailedTitle: 'Rapports non chargés',
  loadFailed: 'Impossible d’ouvrir les rapports. Tirez vers le bas pour réessayer.',
  failed: 'Impossible de rédiger le rapport. Réessayez dans un instant.',

  historyTitle: 'Semaines précédentes',
  historyEmpty: 'Les rapports que vous recevrez sont conservés ici pendant un an.',

  hubToday: 'Aujourd’hui',
  hubTodayEmpty: 'Aucun appareil n’a encore transmis de données aujourd’hui.',
  hubByChild: 'Par enfant',
  hubByDevice: 'Par appareil',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'Chaque enfant',
  childrenNote:
    'La même quinzaine, par appareil. Les pourcentages portent sur le total de la famille.',
  colChild: 'Enfant',
  colScreenTime: 'Temps d’écran',
  colShare: 'Part',
  colChange: 'Vs semaine dernière',
  colLimit: 'Au-delà de la limite',
  colLateNights: 'Nuits tardives',
  colTopApp: 'La plus utilisée',
  unnamedChild: 'Sans nom',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'à peu près pareil',
  noLimit: 'Aucune limite',
  noTopApp: '—',
  limitDays_one: '{{count}} jour',
  limitDays_other: '{{count}} jours',
  lateNightsNone: 'aucune',
  busiest: 'Le plus de temps d’écran',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'Ce que vous verrez',
  guestPreviewHint:
    'Exemple — les chiffres réels apparaissent dès qu’un appareil est connecté',
  guestTitle: 'Voir où est passée la semaine',
  guestDescription:
    'Connectez-vous pour comparer aujourd’hui à une journée normale, situer vos enfants côte à côte et recevoir un rapport chaque dimanche.',
  guestBenefitTrendTitle: 'Aujourd’hui, face à l’ordinaire',
  guestBenefitTrendBody:
    'Un chiffre seul ne dit rien. Aujourd’hui est toujours tracé face à la moyenne quotidienne de votre propre famille.',
  guestBenefitChildTitle: 'Chaque enfant, côte à côte',
  guestBenefitChildBody:
    'La part de journée de chaque enfant, dans sa propre couleur, sur tous les appareils qu’il utilise.',
  guestBenefitWeeklyTitle: 'Un rapport chaque dimanche',
  guestBenefitWeeklyBody:
    'Ce qui a changé, quelles applis ont progressé et les soirées tardives — conservé un an.',
  guestSignInButton: 'Se connecter',
  guestCreateAccount: 'Créer un compte parent',
} as const;
