export const webHistory = {
  title: 'Historique web',
  fallbackDeviceName: 'Appareil de l’enfant',
  summarySites: 'Sites vus',
  summaryBlocked: 'Sites bloqués',
  sourceNoteIos:
    'Sur iPhone, ces données viennent du rapport Temps d’écran d’Apple : les sites où votre enfant a passé du temps, pas chaque page ouverte.',
  sourceNoteAndroid:
    'Sur Android, ces données viennent du filtre DNS de KidGate : les sites que ce téléphone a interrogés, pas chaque page ouverte.',
  filterOffNoteAndroid:
    'Le filtre web est désactivé : ce téléphone n’enregistre et ne bloque rien. Activez-le pour voir où il va.',
  filterOffNoteIos:
    'Le filtre web est désactivé, donc rien n’est bloqué. Cette liste montre seulement où le téléphone est allé.',
  filterAll: 'Tous les sites',
  filterBlocked: 'Bloqués seulement',
  emptyTitle: 'Rien d’enregistré pour l’instant',
  emptyBody:
    'Les sites apparaîtront ici dès que l’appareil de l’enfant naviguera avec KidGate actif.',
  emptyBlockedBody: 'Rien n’a encore été bloqué.',
  dayBlockedBadge: '{{count}} bloqués',
  visitsMeta: '{{count}} visites',
  visitsMeta_one: '{{count}} visite',
  blockedMeta: 'Bloqué {{count}} fois · {{category}}',
  blockedMeta_one: 'Bloqué une fois · {{category}}',
  categoryUnknown: 'Liste de blocage',
  showMoreDays: 'Voir {{count}} jours de plus',
  showMoreDays_one: 'Voir 1 jour de plus',
  rollupTitle: 'Où est passé le temps',
  rollupShare: '{{percent}} %',
  rollupNote:
    'Part des visites enregistrées par type de site. Android uniquement : l’iPhone n’indique pas à KidGate le type d’un domaine.',
} as const;
