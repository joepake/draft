export const messageMonitoring = {
  actionTitle: 'Alertes de messages',
  actionDescription:
    'Soyez averti lorsque des mots préoccupants apparaissent dans les messages',
  title: 'Alertes de messages',
  heroTitle: 'Sécurité des messages',
  heroSubtitle:
    'KidGate signale les mots préoccupants dans les messages de votre enfant et vous avertit. Le message n’est jamais affiché — seulement le mot signalé.',
  androidOnlyNote: 'Disponible uniquement sur les appareils Android.',
  recentTitle: 'Alertes récentes',
  emptyTitle: 'Aucune alerte pour l’instant',
  emptySubtitle: 'Aucun mot préoccupant n’a été détecté dans les messages.',
  emptySubtitleNotWatching:
    'Les messages ne sont pas analysés en ce moment, cette liste restera donc vide quoi qu’il arrive.',
  flaggedTerm: 'Mot signalé : « {{term}} »',
  flaggedTermPrefix: 'Mot signalé : « ',
  flaggedTermSuffix: ' »',
  aiConfirmed: 'Confirmé par l’IA',
  categoryPredator: 'Sollicitation suspecte',
  categorySelfHarm: 'Possible automutilation',
  categoryExplicit: 'Contenu explicite',
  categoryViolence: 'Menace ou violence',
  categoryBullying: 'Harcèlement',
  categoryDrugs: 'Drogues ou substances',
  categoryAlcohol: 'Alcool',
  categoryTobacco: 'Tabac ou vapotage',
  categoryGambling: 'Jeux d’argent',
  categoryProfanity: 'Langage grossier',
  categoryUnknown: 'Message signalé',
  setupTitle: 'Sécurité des messages',
  setupBody:
    'Surveille les messages à la recherche de mots préoccupants. KidGate n’affiche jamais le message — seulement une alerte si quelque chose d’inquiétant apparaît.',
  setupGrant: 'Autoriser l’accès aux notifications',
  setupEnable: 'Sécurité des messages',
  controlledByParentHint:
    'S’active ou se désactive depuis l’app KidGate sur le téléphone du parent, pas ici.',
  parentIncomingLabel: 'Analyser les messages reçus',
  parentOutgoingLabel: 'Analyser les messages écrits',
  parentToggleHintGranted: 'Sur ce téléphone.',
  parentToggleHintNotGranted:
    'Pas encore autorisé sur ce téléphone — ouvre KidGate sur son appareil pour l’autoriser.',
  parentToggleSaveFailed: 'Impossible d’enregistrer la modification.',
  settingsTitle: 'Réglages des alertes de messages',
  checkedTitle: 'Vérifié, rien à signaler',
  checkedSubtitle:
    'Des mots surveillés sont apparus mais se sont révélés inoffensifs dans leur contexte, donc aucune alerte ne t’a été envoyée. Affichés ici pour que tu voies ce qui est filtré à ta place — dis-le-nous si l’un d’eux aurait dû te parvenir.',
  consentTitle: 'Analyse des messages par IA',
  consentBody:
    'Lorsqu’elle est activée, les messages qu’un mot-clé signale comme limites sont envoyés — sans noms, numéros ni liens — à un service d’IA pour confirmer s’ils sont réellement préoccupants avant de vous alerter. Les mots à haut risque alertent toujours immédiatement sans rien envoyer.',
  consentEnable: 'Activer l’analyse par IA',
  consentConfirmTitle: 'Activer l’analyse des messages par IA ?',
  consentConfirmBody:
    'Les messages limites, sans données personnelles, seront envoyés à un service d’IA pour vérification. Vous confirmez consentir à ce traitement.',
  consentAgree: 'J’accepte',
  outgoingTitle: 'Messages que tu écris',
  outgoingBody:
    'KidGate peut aussi vérifier ce que tu tapes dans les applis de discussion. Il cherche les mêmes mots d’alerte, sur ce téléphone. Tes messages ne sont jamais envoyés nulle part.',
  outgoingEnable: 'Vérifier ce que j’écris',
  outgoingGrant: 'Autoriser',
  directionIncoming: 'Reçu',
  directionOutgoing: 'Envoyé',
  alertBodyIncoming: 'Message depuis l’appli',
  alertBodyOutgoing: 'Message envoyé depuis l’appli',
  aiLegend:
    'Une alerte avec cette icône a été confirmée par l’IA avant de vous être notifiée.',
  setupRevoked:
    'Android a désactivé l’autorisation nécessaire. Accorde-la à nouveau pour continuer à analyser les messages.',
  outgoingRevoked:
    'Android a désactivé cette fonction. Accorde-la à nouveau pour continuer à analyser ce que tu écris.',
  outgoingDisclosureTitle: 'Avant d’autoriser',
  outgoingDisclosureBody:
    'KidGate lit uniquement ce que tu écris dans les applis de messagerie — jamais dans une autre appli, et jamais dans un champ de mot de passe. La recherche des mots d’alerte se fait sur ce téléphone. Tes messages ne sont envoyés nulle part ; seul le mot signalé parvient à tes parents.',
  outgoingRestrictedHint:
    'Si l’interrupteur est grisé, ouvre Paramètres › Applications › KidGate, appuie sur le menu ⋮ et choisis « Autoriser les paramètres restreints », puis reviens ici.',
  notice: {
    revokedTitle: 'L’analyse des messages s’est arrêtée',
    revokedBody:
      'Android a désactivé une autorisation dont KidGate a besoin : les messages ne sont plus analysés. Ouvrez KidGate sur l’appareil de votre enfant et accordez-la à nouveau.',
    offTitle: 'La sécurité des messages n’est pas activée',
    offBody:
      'Rien n’est analysé sur l’appareil de votre enfant, aucune alerte ne peut donc apparaître ici. Ouvrez KidGate sur son appareil pour la configurer.',
    pendingTitle: 'En attente de l’appareil de ton enfant',
    pendingBody:
      'Tu viens d’activer cette option. L’appareil de ton enfant la prendra en compte à sa prochaine connexion, en général en quelques minutes — plus vite si le téléphone est allumé. Rien d’autre à faire.',
    unknownTitle: 'En attente de l’appareil',
    unknownBody:
      'Cet appareil n’a pas encore indiqué si la sécurité des messages fonctionne : une liste vide ne veut donc pas dire grand-chose. Elle devrait se mettre à jour à la prochaine connexion.',
    outgoingAvailableTitle: 'Analyser aussi ce que votre enfant écrit',
    outgoingAvailableBody:
      'Les messages reçus sont déjà analysés. KidGate peut aussi analyser ce que votre enfant écrit dans les applis de messagerie — le harcèlement et l’automutilation y apparaissent bien plus souvent. Configurez-le sur son appareil.',
  },
  languagesLabel: 'Langues analysées',
  languagesHint:
    'Les langues dans lesquelles cet appareil recherche des mots inquiétants. Choisissez-en jusqu’à {{max}}.',
  languagesDefaultHint: 'Par défaut, la langue de l’appareil.',
} as const;
