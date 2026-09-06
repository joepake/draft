export const webFilter = {
  title: 'Filtre web',
  fallbackDeviceName: 'Appareil de l’enfant',
  appliesToAll: 'S’applique aux {{count}} appareils de {{name}}',
  coverageLine: 'Actif sur {{enforcing}} appareil(s) sur {{total}}',
  mergeNotice:
    'Les appareils de {{name}} avaient des réglages de filtre web différents. Enregistrer ici applique un seul ensemble à tous, combiné vers le choix le plus strict.',
  mergeLoosened: 'Désormais autorisé sur chaque appareil : {{domains}}',
  toastUpdateFailed: 'Impossible de mettre à jour le Filtre web. Veuillez réessayer.',
  heroTitle: 'Filtrer les sites pour adultes',
  heroSubtitleIos:
    'Utilise le filtre de contenu web de Temps d’écran d’Apple pour limiter le contenu adulte dans Safari et les navigateurs intégrés aux apps de l’appareil de l’enfant.',
  heroSubtitleAndroid:
    'Utilise un VPN DNS local sur l’appareil Android de l’enfant pour bloquer les domaines adultes connus dans les navigateurs et de nombreuses apps.',
  heroSubtitleMacos:
    'Exécute le filtre de contenu de KidGate sur le Mac de l’enfant pour bloquer les sites pour adultes connus dans les navigateurs et de nombreuses applis.',
  toggleHintIos: 'Nécessite l’autorisation Temps d’écran sur l’appareil de l’enfant.',
  toggleHintAndroid:
    'L’enfant doit approuver une fois la connexion VPN de KidGate. Gardez le VPN actif pour que le filtre fonctionne.',
  toggleHintMacos:
    'L’enfant doit approuver une fois l’extension de filtre KidGate dans Réglages Système. Laisse-la approuvée pour que le filtre fonctionne.',
  toggleAccessibilityLabel: 'Activer le Filtre web',
  safeSearchSectionTitle: 'Recherche sécurisée et YouTube',
  safeSearchSectionSubtitle:
    'Force Google, Bing et DuckDuckGo à des résultats sûrs et verrouille YouTube en mode restreint. Nécessite le filtre web activé.',
  safeSearchLabel: 'Imposer SafeSearch',
  safeSearchHint:
    'Verrouille Google SafeSearch, le mode restreint de YouTube, Bing et DuckDuckGo sur leur réglage strict. Android, Android TV et Chrome.',
  infoTitle: 'Fonctionnement',
  infoLine1Ios: 'Apple filtre automatiquement les sites pour adultes.',
  infoLine2Ios:
    'Utilise le filtre de contenu adulte d’Apple dans Safari et ne bloque pas tout dans les autres apps.',
  infoLine3Ios:
    'KidGate applique le réglage automatiquement quand l’app de l’appareil de l’enfant synchronise les contrôles.',
  infoLine1Android:
    'KidGate lance un VPN local qui inspecte le DNS à la recherche de domaines adultes et bloque certains résolveurs DNS chiffrés.',
  infoLine2Android:
    'Désactivez le DNS privé sur l’appareil de l’enfant. S’il est actif, les navigateurs peuvent contourner le filtre.',
  infoLine3Android:
    'L’appareil de l’enfant affiche une icône VPN pendant le filtrage. Couper le VPN arrête le filtre — rouvrez KidGate pour le rétablir.',
  infoLine4Android:
    'Allez dans Paramètres → Réseau et Internet → DNS privé → Désactivé.',
  infoLine1Macos:
    'KidGate exécute un filtre de contenu sur le Mac qui vérifie les sites consultés et bloque ceux qui relèvent de tes catégories.',
  infoLine2Macos:
    'Si le filtre apparaît comme non approuvé sur le Mac de l’enfant, ouvre Réglages Système → Général → Éléments de connexion et extensions pour l’approuver.',
  infoLine3Macos:
    'Le Mac de l’enfant affiche le filtre comme actif une fois approuvé. S’il est désactivé là-bas, rouvre KidGate pour le restaurer.',
  infoLine4Macos:
    'Le filtre lit les noms des sites, que les navigateurs modernes masquent pour environ la moitié des visites — ces sites ne sont pas vérifiés selon vos catégories. Il bloque tout de même la plupart des sites que les enfants atteignent ainsi.',
  privateDnsBannerTitle: 'Désactiver le DNS privé',
  privateDnsBannerBody:
    'Le DNS privé est activé, le filtre adulte peut donc être contourné. Désactivez-le pour que le filtre fonctionne.',
  privateDnsBannerButton: 'Ouvrir les réglages DNS',
  vpnConsentBannerTitle: 'Rétablir le VPN du Filtre web',
  vpnConsentBannerBody:
    'Le VPN de KidGate est désactivé. Le filtre adulte a besoin d’un VPN connecté.',
  vpnConsentBannerButton: 'Activer le VPN',
  iosOnlyNote: 'Utilise Temps d’écran sur iOS',
  androidVpnNote: 'Utilise un VPN DNS local sur Android',
  macosFilterNote: 'Utilise le filtre de contenu de KidGate sur Mac',

  heroSubtitleWindows:
    "Exécute le résolveur de KidGate sur le PC de l'enfant pour bloquer les sites pour adultes connus dans tous les navigateurs.",

  toggleHintWindows:
    'Rien à approuver sur le PC. Le service KidGate en arrière-plan active le filtre en quelques secondes.',

  infoLine1Windows:
    'KidGate exécute sur le PC un résolveur qui vérifie quels sites sont recherchés et bloque ceux de vos catégories.',

  infoLine2Windows:
    "Chrome, Edge et Firefox y sont tenus par un paramètre appliqué par KidGate. Rien n'est demandé à votre enfant.",

  infoLine3Windows:
    "Cela nécessite le service KidGate en arrière-plan. Si le filtrage reste désactivé, réinstallez KidGate sur le PC en tant qu'administrateur.",

  infoLine4Windows:
    "Le filtre ne lit que les noms de sites. Il ne voit pas l'intérieur d'une page, et un site recherché il y a un instant peut continuer à s'ouvrir quelques minutes.",

  windowsFilterNote: 'Utilise le résolveur de KidGate sous Windows',
  webFilteringNote:
    'iOS utilise le filtre adulte de Temps d’écran ; Android une liste de blocage via VPN DNS local.',
  safeSearchAlertsNote:
    'Safari ne partage pas les termes de recherche ; les alertes par mots-clés nécessitent un navigateur sécurisé géré.',
  webHistoryNote: 'Nécessite un navigateur filtré ou des rapports de type DNS/VPN.',
  categoriesTitle: 'Que bloquer',
  categoriesSubtitle:
    'KidGate utilise ses propres listes de domaines. Elles couvrent les sites que les enfants atteignent vraiment, pas tout le web — complétez-les avec les listes ci-dessous.',
  androidOnlyCategory: 'Android uniquement : iOS n’a pas de contrôle web par catégorie',
  iosCategoryNote:
    'L’iPhone ne gère que {{category}}, via le filtre d’Apple. Les autres catégories s’appliquent aux appareils Android.',
  allowListTitle: 'Toujours autoriser',
  allowListSubtitle:
    'Sites qui restent accessibles même si une catégorie les bloquerait.',
  allowListEmpty: 'Aucune exception pour l’instant.',
  allowListInputAccessibility: 'Ajouter un site toujours autorisé',
  blockListTitle: 'Toujours bloquer',
  blockListSubtitle: 'Sites refusés quoi que disent les catégories.',
  blockListEmpty: 'Aucun site bloqué pour l’instant.',
  blockListInputAccessibility: 'Ajouter un site toujours bloqué',
  allowListOnlyLabel: 'Sites autorisés uniquement',
  allowListOnlyHintAndroid:
    'Tout ce qui n’est pas dans votre liste est refusé. Cela agit au niveau DNS, donc les autres apps perdent aussi leurs connexions.',
  allowListOnlyHintIos:
    'Safari et les navigateurs intégrés ne peuvent ouvrir que les sites de votre liste.',
  allowListOnlyNeedsEntries: 'Ajoutez au moins un site autorisé avant d’activer.',
  domainPlaceholder: 'exemple.com',
  addDomain: 'Ajouter un site',
  removeDomain: 'Retirer {{domain}}',
  invalidDomain: 'Saisissez une adresse, comme exemple.com',
  listFull: 'Vous pouvez enregistrer jusqu’à {{max}} sites dans cette liste.',
  openHistory: 'Historique web',
  openHistorySubtitle:
    'Voyez quels sites cet appareil a atteints et ce qui a été bloqué',
  blockedPageTitle: 'Site bloqué',
  blockedPageBody:
    'KidGate a bloqué ce site pour ta famille. Si tu penses que c’est une erreur, demande à tes parents.',
  category: {
    adult: 'Contenu adulte',
    selfHarm: 'Automutilation et troubles alimentaires',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'Éducation',
    utility: 'Utilitaires',
    browser: 'Navigateurs web',
    devTools: 'Programmation et dev',
    messaging: 'Messagerie et appels',
    community: 'Forums et communautés',
    shortVideo: 'Vidéos courtes',
    creative: 'Photo, vidéo et art',
    productivity: 'Notes et productivité',
    reading: 'Livres et BD',
    fileSharing: 'Fichiers et téléchargements',
    bypass: 'Applis de contournement',
    gambling: 'Jeux d’argent',
    gameGambling: 'Loot boxes et paris de skins',
    dating: 'Rencontres',
    strangerChat: 'Chat avec des inconnus',
    drugs: 'Drogues et alcool',
    violence: 'Violence et gore',
    extremism: 'Extrémisme et haine',
    piracy: 'Piratage',
    social: 'Réseaux sociaux',
    videoStreaming: 'Streaming vidéo',
    music: 'Musique',
    gaming: 'Jeux',
    shopping: 'Achats',
    aiCompanion: 'Compagnons IA',
    aiAssistant: 'Assistants IA',
    cryptoTrading: 'Crypto et trading',
    vpn: 'Applis VPN',
  },
  categoryHint: {
    adult: 'Sites explicites et pour adultes',
    selfHarm: 'Forums pro-ana et pro-suicide',
    gambling: 'Casinos, paris sportifs, poker',
    gameGambling: 'Ouverture de caisses, paris skins et Roblox',
    dating: 'Applis de rencontre',
    strangerChat: 'Clones dOmegle, chat vidéo aléatoire',
    drugs: 'Cannabis, vapotage, alcool',
    violence: 'Sites gore et images choc',
    extremism: 'Forums haineux et sites extrémistes',
    piracy: 'Torrents et streaming pirate',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, portails de jeux',
    shopping: 'Amazon, Shein, mode express',
    aiCompanion: 'Character.AI, Replika, bots de jeu de rôle',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, applis de trading',
    vpn: 'Pages de téléchargement VPN. Pas une appli déjà installée.',
  },
  categoryGroup: {
    harm: 'Contenus nocifs',
    contact: 'Inconnus',
    bypass: 'Contournement du filtre',
    ai: 'IA',
    entertainment: 'Loisirs et réseaux sociaux',
    money: 'Achats et argent',
  },
  categoriesOnCount: '{{on}} sur {{total}} activés',
  askToOpen: 'Demander à un parent',
  askToOpenSubtitle: 'Si ton parent accepte, ce site s’ouvrira.',
  askToOpenDomainLabel: 'Quel site ?',
  askToOpenBlockedLabel: 'Bloqués récemment',
  askToOpenPending: 'Tu as déjà demandé un site. Attends la réponse.',
  askToOpenTooSoon: 'Tu viens d’envoyer une demande. Réessaie dans une minute.',
  askToOpenTooMany: 'Tu peux demander seulement quelques sites à la fois.',
  requestsTitle: 'Demandes de sites',
  requestsSubtitle: 'Sites que cet appareil a demandé d’autoriser.',
  siteRequestApproved: 'Site autorisé',
  siteRequestApprovedDescription:
    '{{domain}} a été ajouté à « Toujours autoriser » sur {{deviceName}}.',
  siteRequestDenied: 'Demande de site refusée',
  siteRequestDeniedDescription: '{{domain}} reste bloqué sur {{deviceName}}.',
  siteRequestReceived: 'Demande de site',
  siteRequestReceivedDescription: '{{deviceName}} demande à ouvrir {{domain}}.',
} as const;
