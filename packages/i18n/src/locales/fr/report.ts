export const report = {
  title: 'Rapport hebdomadaire',
  subtitle: 'Ce que KidGate a observé cette semaine.',
  weekOf: 'Semaine {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Envoyé dimanche',
  triggerManual: 'Créé par vous',

  statScreenTime: 'Temps d’écran',
  statDailyAverage: 'Moyenne par jour',
  statBlockedApps: 'Applis bloquées',
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
    '{{count}} ouvertures d’applis bloquées, contre {{previous}} la semaine dernière.',
  findingBlockedWeb:
    '{{count}} sites filtrés, contre {{previous}} la semaine dernière.',
  findingQuietWeek:
    'Une semaine calme : {{total}} au total, et rien qui ait demandé votre attention.',

  narrativeTitle: 'En une phrase',
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
    'Aucun temps d’écran n’a été enregistré ces deux dernières semaines, il n’y a donc rien à rapporter. Un appareil éteint ne signale rien, ce qui n’est pas la même chose qu’une semaine calme.',
  rateLimited: 'Trop de tentatives. Patientez une minute.',
  failed: 'Impossible de rédiger le rapport. Réessayez dans un instant.',

  historyTitle: 'Semaines précédentes',
  historyEmpty: 'Les rapports que vous recevrez sont conservés ici pendant un an.',
} as const;
