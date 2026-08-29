export const webHistory = {
  title: 'Historique web',
  fallbackDeviceName: 'Appareil de l’enfant',
  syncNote:
    'L’historique web peut mettre quelques minutes à apparaître sur cet écran — plus longtemps si l’appareil n’a pas de connexion Internet ou s’est fermé de façon inattendue.',
  syncNoteTv:
    'Cette télévision ne se connecte que périodiquement, l’historique web peut donc mettre jusqu’à 30 minutes à apparaître sur cet écran — plus longtemps sans connexion Internet.',
  summarySites: 'Sites vus',
  summaryBlocked: 'Sites bloqués',
  sourceNoteIos:
    'Sur iPhone, ces données viennent du rapport Temps d’écran d’Apple : les sites où votre enfant a passé du temps, pas chaque page ouverte.',
  sourceNoteAndroid:
    'Sur Android, ces données viennent du filtre DNS de KidGate : les sites que ce téléphone a interrogés, pas chaque page ouverte.',
  sourceNoteMacos:
    'Sur Mac, ces données viennent du filtre de KidGate : les sites que ce Mac a interrogés, pas chaque page ouverte.',
  sourceNoteExtension:
    'Dans ce navigateur, KidGate voit les pages réellement ouvertes — ce navigateur seulement, pas le reste de l’ordinateur.',
  filterOffNoteAndroid:
    'Le filtre web est désactivé : cet appareil n’enregistre et ne bloque rien. Activez-le pour voir où il va.',
  filterOffNoteMacos:
    'Le filtre web est désactivé : ce Mac n’enregistre et ne bloque rien. Activez-le pour voir où il va.',
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
  sectionUncategorized: 'Autres sites',
  blockCategory: 'Bloquer {{category}}',
  blockCategoryConfirmTitle: 'Bloquer {{category}} ?',
  blockCategoryConfirmBody:
    'Tous les sites que KidGate classe dans {{category}} seront refusés sur cet appareil. Vous pouvez le désactiver dans le Filtre web.',
  blockCategoryConfirmAction: 'Bloquer',
  blockCategoryDone: '{{category}} est maintenant bloqué.',
  unblockCategory: 'Débloquer {{category}}',
  unblockCategoryConfirmTitle: 'Débloquer {{category}} ?',
  unblockCategoryConfirmBody:
    'Les sites que KidGate classe dans {{category}} seront de nouveau accessibles sur cet appareil.',
  unblockCategoryConfirmAction: 'Débloquer',
  unblockCategoryDone: '{{category}} n’est plus bloqué.',
  serviceSites: '{{count}} sites',
  serviceSites_one: '{{count}} site',
  serviceNote:
    'Les sites qu’un service charge lui-même sont regroupés sur une ligne : ouvrir YouTube une fois en atteint plusieurs. Touchez une ligne pour les voir.',
  showMoreDays: 'Voir {{count}} jours de plus',
  showMoreDays_one: 'Voir 1 jour de plus',
  rollupTitle: 'Visites par type de site',
  rollupShare: '{{percent}} %',
  rollupNote:
    'Des requêtes, pas des minutes — une longue vidéo en fait quelques-unes, dix minutes de navigation en font des dizaines.',
  rollupNoteAi:
    'Certains types ont été déduits du nom du site au lieu de correspondre à un site connu — quelques-uns peuvent être faux.',
  rollupNoteExtension:
    'Des pages, pas des minutes — une longue vidéo compte pour une, dix minutes de navigation pour des dizaines.',
  hoursTitle: 'Quand la navigation a eu lieu',
  hoursNote:
    'Pages chargées par heure, à l’heure de l’appareil. Un onglet laissé ouvert tout l’après-midi compte une fois.',
  hoursEmpty: 'Aucune page aujourd’hui pour l’instant.',
  sourceNoteChild:
    'Combiné depuis {{count}} appareils. Chacun n’enregistre que ce que son propre filtre voit.',
  filterOffNoteChild:
    'Le filtre web est désactivé sur tous les appareils, les nouvelles visites ne sont donc pas enregistrées.',
} as const;
