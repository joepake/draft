export const report = {
  title: 'Rapport hebdomadaire',
  subtitle: 'Ce que KidGate a observé cette semaine.',
  weekOf: 'Semaine {{week}}',
  weekOfYear: 'Semaine {{week}} - {{year}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Envoyé lundi',
  triggerManual: 'Créé par vous',

  statScreenTime: 'Temps d’écran',
  statDailyAverage: 'Moyenne par jour',
  statBlockedApps: 'Ouvertures d’apps bloquées',
  statBlockedWebVisits: 'Visites de sites bloquées',
  statTasksApproved: 'Tâches terminées',

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
  findingLateNight_one:
    'Une nuit après 23 h : l’écran est resté allumé jusqu’à {{time}}.',
  findingLateNight_other:
    '{{count}} nuits après 23 h ; la plus tardive a duré jusqu’à {{time}}.',
  findingNewTopApp: '{{app}} est nouvelle cette semaine et occupe déjà {{duration}}.',
  findingAppSurge:
    '{{app}} progresse de {{delta}} par rapport à la semaine dernière : {{duration}} au total.',
  findingLimitHit_one: 'La Limite quotidienne de {{limit}} a été atteinte un jour.',
  findingLimitHit_other:
    'La Limite quotidienne de {{limit}} a été atteinte {{count}} jours.',
  findingBlockedApps:
    '{{count}} ouvertures d’applications bloquées, contre {{previous}} la semaine dernière.',
  findingBlockedWeb:
    '{{count}} visites de sites bloquées, contre {{previous}} la semaine dernière.',
  findingQuietWeek:
    'Une semaine calme : {{total}} au total, et rien qui ait demandé votre attention.',

  // La moitié positive du rapport. Chaque phrase dit ce qui s’est passé et le
  // chiffre qui l’appuie ; aucune ne complimente — `docs/COPY_STYLE.md`
  // interdit la flatterie autant que l’alarme.
  findingLimitRespected:
    'La Limite quotidienne de {{limit}} a été respectée les {{count}} jours.',
  findingLateNightGone_one:
    'Aucune nuit tardive cette semaine, après une nuit la semaine dernière.',
  findingLateNightGone_other:
    'Aucune nuit tardive cette semaine, après {{count}} nuits la semaine dernière.',
  findingBlockedAppsDown:
    '{{count}} ouvertures d’applications bloquées, contre {{previous}} la semaine dernière.',
  findingBlockedWebDown:
    '{{count}} visites de sites bloquées, contre {{previous}} la semaine dernière.',
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
  shareFailed: 'Impossible d’ouvrir le menu de partage. Réessayez.',
  shareLinkCta: 'Téléchargez l’appli sur {{url}}',
  shareFooterDesc:
    'KidGate aide les parents à gérer le temps d’écran, à voir la position et à filtrer le web.',
  shareFooterCta: 'Téléchargez l’appli sur kidgate.app',

  currentWeekTab: 'Cette semaine',
  currentWeekTitle: 'Mesure en cours',
  currentWeekBody: 'Le rapport de cette semaine arrive {{day}}.',
  currentWeekNote:
    'Il couvre du lundi au dimanche, sur tous les appareils de la famille. Rien ne manque encore — la semaine n’est pas terminée.',

  emptyTitle: 'Pas encore de rapport',
  emptyBody:
    'Avec Premium, un rapport arrive chaque lundi matin. Vous pouvez aussi rédiger celui de cette semaine maintenant : il couvre les sept derniers jours.',
  noUsage:
    'Aucun temps d’écran n’a été enregistré ces deux dernières semaines, il n’y a donc rien à rapporter. Un appareil hors ligne ne signale rien, ce qui n’est pas la même chose qu’une semaine calme.',
  rateLimited:
    'Impossible de rédiger un autre rapport pour le moment. Réessayez dans une minute.',
  loadFailedTitle: 'Rapports non chargés',
  loadFailed: 'Impossible d’ouvrir les rapports.',
  failed: 'Impossible de rédiger le rapport. Réessayez dans un instant.',

  historyTitle: 'Semaines précédentes',
  historyEmpty: 'Les rapports que vous recevrez sont conservés ici pendant un an.',

  hubToday: 'Aujourd’hui',
  hubTodayEmpty: 'Aucun appareil n’a encore transmis de données aujourd’hui.',
  hubByChild: 'Par enfant',
  hubChildUnassigned: 'Aucun appareil assigné',
  hubByDevice: 'Par appareil',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'Chaque enfant',
  childrenNoteByChild:
    'Cette semaine, chaque enfant sur tous les appareils qu’il utilise. Les pourcentages portent sur le total de la famille.',
  devicesTitle: 'Chaque appareil',
  childrenNote:
    'Cette semaine, par appareil. Les pourcentages portent sur le total de la famille.',
  colChild: 'Enfant',
  colDevice: 'Appareil',
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
  guestTitle: 'Voyez où est passé le temps d’écran de la semaine',
  guestDescription:
    'Connectez-vous pour comparer aujourd’hui à une journée habituelle et vos enfants entre eux. Avec Premium, recevez en plus un rapport écrit chaque lundi.',
  guestBenefitTrendTitle: 'Aujourd’hui, par rapport à la normale',
  guestBenefitTrendBody:
    'Le chiffre du jour est comparé à la moyenne quotidienne de votre famille, pour lui donner du sens.',
  guestBenefitChildTitle: 'Tous vos enfants, côte à côte',
  guestBenefitChildBody:
    'La part de chaque enfant dans le temps d’écran du jour, dans sa couleur, tous appareils confondus.',
  guestBenefitWeeklyTitle: 'Un rapport chaque lundi, avec Premium',
  guestBenefitWeeklyBody:
    'Ce qui a changé, les applis en hausse et les écrans tard le soir — le tout conservé un an.',
} as const;
