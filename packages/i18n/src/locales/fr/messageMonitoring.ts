export const messageMonitoring = {
  actionTitle: 'Alertes de messages',
  actionDescription:
    'Soyez averti lorsque des mots préoccupants apparaissent dans les messages',
  title: 'Alertes de contenu',
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
  flaggedTermMeaning: 'Sens : {{gloss}}',
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
  guidanceToggle: 'Que faire ensuite',
  guidanceHide: 'Masquer',
  guidanceFooter:
    'KidGate n’a pas conservé le message, seulement ce mot. Le reste ne peut venir que de votre enfant.',
  guidance: {
    predator:
      'L’approche d’un prédateur commence presque toujours de façon amicale, par quelqu’un que votre enfant croit de son âge. Demandez-lui avec qui il parle en ce moment et comment ils se sont connus, avant d’évoquer l’alerte : un enfant qui se sent pris en faute cesse de répondre.',
    selfHarm:
      'Ces mots sont bien plus souvent un signal qu’un projet, et en parler directement ne fait pas naître l’idée. Dites ce que vous avez vu et que vous n’êtes pas en colère ; si la réponse vous inquiète, appelez le jour même une ligne d’écoute.',
    explicit:
      'Ce contenu a pu lui être envoyé, lui être montré, ou être écrit par lui. Établissez lequel avant de réagir : recevoir un contenu explicite n’est pas la même conversation que d’en envoyer.',
    violence:
      'Une menace mérite d’être prise au sérieux même quand elle ressemble à une blague entre amis. Demandez si elle vient de quelqu’un de l’école ; si oui, l’école est le moyen le plus rapide d’y mettre fin.',
    bullying:
      'Les enfants en parlent rarement d’eux-mêmes, et les mêmes mots apparaissent que votre enfant ait été visé ou qu’il ait participé. Demandez ce qui s’est passé plutôt que qui est en faute, et notez les dates au cas où l’école en aurait besoin.',
    drugs:
      'Un mot signalé ne prouve aucune consommation : la curiosité, les chansons et les plaisanteries le déclenchent aussi. Posez la question ouvertement plutôt que de fouiller sa chambre ; l’essentiel est qu’il continue à vous parler.',
    alcohol:
      'C’est courant dans les conversations d’adolescents : voyez-y un contexte, pas une preuve. C’est le bon moment pour dire clairement quelle est votre règle, avant qu’une soirée ne rende la question urgente.',
    tobacco:
      'La vape circule dans le groupe d’amis et relève plus du social que du secret. Demandez ce que ses amis utilisent : nommer la chose précise porte mieux qu’un avertissement général.',
    gambling:
      'Coffres à butin, paquets de cartes et paris d’objets comptent, et ressemblent rarement à un jeu d’argent pour un enfant. Regardez ce qu’il dépense dans les jeux avant d’en faire un problème d’argent.',
    profanity:
      'Les grossièretés seules sont courantes et ne disent presque rien sur sa sécurité. Si ces alertes ne sont que du bruit pour votre famille, désactivez « Signaler aussi les grossièretés » dans les réglages de cet écran.',
    unknown:
      'Cette alerte vient d’un appareil ou d’une liste de mots que cette version ne nomme plus. Le mot signalé ci-dessus est ce sur quoi interroger ; rien d’autre du message n’a été conservé.',
  },
  setupTitle: 'Sécurité des messages',
  setupBody:
    'Surveille les messages à la recherche de mots préoccupants. KidGate n’affiche jamais le message — seulement une alerte si quelque chose d’inquiétant apparaît.',
  setupGrant: 'Autoriser l’accès aux notifications',
  setupEnable: 'Sécurité des messages',
  controlledByParentHint:
    'S’active ou se désactive depuis l’app KidGate sur le téléphone du parent, pas ici.',
  parentIncomingLabel: 'Analyser les messages reçus',
  parentOutgoingLabel: 'Analyser les messages écrits',
  parentSearchLabel: 'Analyser ses recherches',
  parentSearchHint:
    'Navigateurs et YouTube. Seul le mot signalé est rapporté, jamais la recherche elle-même.',
  parentToggleHintGranted: 'Sur ce téléphone.',
  parentToggleHintNotGranted:
    'Pas encore autorisé sur ce téléphone — ouvre KidGate sur son appareil pour l’autoriser.',
  parentProfanityLabel: 'Signaler aussi les grossièretés',
  parentProfanityHint:
    'Désactivé par défaut — les jurons ordinaires sont courants, ceci en fait aussi une alerte.',
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
  directionSearch: 'Recherché',
  alertBodyIncoming: 'Message depuis l’appli',
  alertBodyOutgoing: 'Message envoyé depuis l’appli',
  alertBodySearch: 'Recherche faite sur',
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
