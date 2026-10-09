export const webFilter = {
  title: 'Filtre web',
  fallbackDeviceName: 'Appareil de l’enfant',
  appliesToAll: 'S’applique aux {{count}} appareils de {{name}}',
  appliesToAll_one: 'S’applique à {{count}} appareil de {{name}}',
  coverageLine: 'Actif sur {{enforcing}} appareil(s) sur {{total}}',
  mergeNotice:
    'Les appareils de {{name}} avaient des réglages de filtre web différents. Enregistrer ici applique un seul jeu de réglages à tous, en retenant à chaque fois le choix le plus strict.',
  mergeLoosened: 'Désormais autorisé sur chaque appareil : {{domains}}',
  toastUpdateFailed: 'Impossible de mettre à jour le Filtre web. Veuillez réessayer.',
  heroTitle: 'Filtrer les sites inappropriés',
  heroSubtitleIos:
    'Établit une connexion privée sur l’iPhone ou l’iPad de l’enfant pour bloquer les sites inappropriés connus dans les navigateurs et de nombreuses apps, en complément du filtre de contenu web de Temps d’écran d’Apple.',
  heroSubtitleAndroid:
    'Utilise un VPN DNS local sur l’appareil Android de l’enfant pour bloquer les domaines inappropriés connus dans les navigateurs et de nombreuses apps.',
  heroSubtitleMacos:
    'Exécute le filtre de contenu de KidGate sur le Mac de l’enfant pour bloquer les sites inappropriés connus dans les navigateurs et de nombreuses applis.',
  toggleHintIos:
    'L’enfant doit autoriser une fois le VPN de KidGate et saisir le code de l’appareil. Gardez le VPN installé pour que le filtre fonctionne.',
  toggleHintAndroid:
    'L’enfant doit approuver une fois la connexion VPN de KidGate. Gardez le VPN actif pour que le filtre fonctionne.',
  toggleHintMacos:
    'L’enfant doit approuver une fois l’extension de filtre KidGate dans Réglages Système. Laissez-la approuvée pour que le filtre fonctionne.',
  toggleAccessibilityLabel: 'Activer le Filtre web',
  safeSearchSectionTitle: 'Recherche sécurisée et YouTube',
  safeSearchSectionSubtitle:
    'Force Google, Bing et DuckDuckGo à des résultats sûrs et verrouille YouTube en mode restreint. Nécessite que le Filtre web soit activé.',
  safeSearchLabel: 'Imposer SafeSearch',
  safeSearchHint:
    'Verrouille Google SafeSearch, le mode restreint de YouTube, Bing et DuckDuckGo sur leur réglage strict. Android, Android TV et Chrome.',
  safeSearchStrictNote:
    'YouTube passe à son niveau le plus strict : les commentaires sont masqués et certaines vidéos ordinaires sont aussi bloquées. Un enfant ne peut pas le désactiver depuis son compte.',
  infoTitle: 'Fonctionnement',
  infoLine1Ios:
    'KidGate établit une connexion privée sur l’appareil : elle vérifie les sites consultés et bloque ceux qui relèvent des catégories que vous avez choisies.',
  infoLine2Ios:
    'Le filtre de contenu adulte d’Apple reste actif dans Safari et les navigateurs intégrés aux apps, comme deuxième niveau de protection.',
  infoLine3Ios:
    'Une icône VPN s’affiche pendant le filtrage. Si le VPN est désactivé dans Réglages, il se réactive en quelques secondes ; s’il est supprimé, le filtre s’arrête jusqu’à ce que le VPN soit de nouveau autorisé dans KidGate.',
  infoLine1Android:
    'KidGate établit une connexion privée sur l’appareil : elle vérifie les sites consultés et bloque ceux qui relèvent des catégories que vous avez choisies.',
  infoLine2Android:
    'Désactivez le DNS privé sur l’appareil de l’enfant. S’il est actif, les navigateurs peuvent contourner le filtre.',
  infoLine3Android:
    'L’appareil de l’enfant affiche une icône VPN pendant le filtrage. Couper le VPN arrête le filtre — rouvrez KidGate pour le rétablir.',
  infoLine4Android:
    'Dans les Réglages, ouvrez Réseau et Internet, puis DNS privé, et choisissez Désactivé.',
  infoLine1Macos:
    'KidGate exécute un filtre de contenu sur le Mac qui vérifie les sites consultés et bloque ceux qui relèvent de vos catégories.',
  infoLine2Macos:
    'Si le filtre apparaît comme non approuvé sur le Mac de l’enfant, ouvrez Réglages Système → Général → Éléments de connexion et extensions pour l’approuver.',
  infoLine3Macos:
    'Le Mac de l’enfant affiche le filtre comme actif une fois approuvé. S’il est désactivé là-bas, rouvre KidGate pour le restaurer.',
  infoLine4Macos:
    'Le filtre lit les noms des sites, que les navigateurs modernes masquent pour environ la moitié des visites — ces sites ne sont pas vérifiés selon vos catégories. Il bloque tout de même la plupart des sites que les enfants atteignent ainsi.',
  privateDnsBannerTitle: 'Désactiver le DNS privé',
  privateDnsBannerBody:
    'Le DNS privé est activé, le filtre web peut donc être contourné. Désactive-le pour que le filtre fonctionne.',
  privateDnsBannerButton: 'Ouvrir les réglages DNS',
  vpnConsentBannerTitle: 'Rétablir le VPN du Filtre web',
  vpnConsentBannerBody:
    'Le VPN de KidGate est désactivé. Le filtre adulte a besoin d’un VPN connecté.',
  vpnConsentBannerButton: 'Activer le VPN',
  vpnDisclosureNote:
    'Tant que le Filtre web est activé, le VPN de KidGate fonctionne uniquement sur cet appareil. Il voit le nom de chaque site que l’appareil consulte, jamais les pages, ce qui est tapé ni aucun autre trafic. Il bloque les sites choisis par tes parents et leur montre l’historique de navigation web de cet appareil (sites visités et bloqués), conservé 30 jours. KidGate ne vend jamais ces données et ne les utilise pour rien d’autre.',
  iosOnlyNote: 'Utilise une connexion privée et Temps d’écran sur iPhone',
  androidVpnNote: 'Utilise un VPN DNS local sur Android',
  macosFilterNote: 'Utilise le filtre de contenu de KidGate sur Mac',

  heroSubtitleWindows:
    'Exécute le résolveur de KidGate sur le PC de l’enfant pour bloquer les sites inappropriés connus dans tous les navigateurs.',
  heroSubtitleExtension:
    'Utilise l’extension KidGate dans Chrome sur l’ordinateur de l’enfant pour bloquer les sites inappropriés connus dans ce navigateur.',

  toggleHintWindows:
    'Rien à approuver sur le PC. Le service KidGate en arrière-plan active le filtre en quelques secondes.',
  toggleHintExtension:
    'Rien à approuver. Le filtre fonctionne uniquement dans Chrome, pas dans les autres navigateurs ni les applications.',

  infoLine1Windows:
    'KidGate exécute sur le PC un résolveur qui vérifie quels sites sont recherchés et bloque ceux de vos catégories.',

  infoLine2Windows:
    'Chrome, Edge et Firefox y sont tenus par un paramètre appliqué par KidGate. Rien n’est demandé à votre enfant.',

  infoLine3Windows:
    'Cela nécessite le service KidGate en arrière-plan. Si le filtrage reste désactivé, réinstallez KidGate sur le PC en tant qu’administrateur.',

  infoLine4Windows:
    'Le filtre ne lit que les noms de sites. Il ne voit pas l’intérieur d’une page, et un site recherché il y a un instant peut continuer à s’ouvrir quelques minutes.',
  infoLine1Extension:
    'L’extension KidGate vérifie chaque site avant que Chrome ne l’ouvre, et bloque ceux qui relèvent de vos catégories.',
  infoLine2Extension:
    'Seul Chrome est filtré, dans le profil où KidGate est installé. Les autres navigateurs et applications de l’ordinateur ne le sont pas.',
  infoLine3Extension:
    'Les fenêtres de navigation privée ne sont filtrées que si « Autoriser en mode navigation privée » est activé pour l’extension. Les fenêtres Invité ne sont pas filtrées.',
  infoLine4Extension:
    'Depuis une page bloquée, votre enfant peut vous demander d’autoriser le site. Supprimer ou désactiver l’extension arrête le filtre.',

  windowsFilterNote: 'Utilise le résolveur de KidGate sous Windows',
  extensionFilterNote: 'Utilise l’extension KidGate dans Chrome',
  categoriesTitle: 'Que bloquer',
  categoriesSubtitle:
    'KidGate utilise ses propres listes de domaines. Elles couvrent les sites que les enfants atteignent vraiment, pas tout le web — complétez-les avec les listes ci-dessous.',
  androidOnlyCategory: 'Indisponible sur iPhone — fonctionne sur les autres appareils',
  iosCategoryNote:
    'L’iPhone ne gère que {{category}}, via le filtre d’Apple. Les autres catégories s’appliquent sur les autres appareils.',
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
  allowListOnlyHintExtension:
    'Chrome ne peut ouvrir que les sites de votre liste. Les autres navigateurs et applications ne sont pas concernés.',
  allowListOnlyNeedsEntries:
    'Ajoutez au moins un site autorisé avant d’activer cette option.',
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
    strangerChat: 'Clones d’Omegle, chat vidéo aléatoire',
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
  privateDnsStep1: 'Ouvre les Paramètres sur cet appareil.',
  privateDnsStep2: 'Sélectionne Réseau et Internet.',
  privateDnsStep3: 'Ouvre DNS privé et choisis Désactivé.',
  vpnConsentStepAllow:
    'Sélectionne OK dans la demande VPN d’Android. Une icône de clé reste dans la barre d’état tant que le filtre fonctionne.',
  vpnConsentStepAllowIos:
    'Sélectionne Autoriser quand iOS demande d’ajouter des configurations VPN, puis saisis le code de l’appareil. Une icône VPN reste affichée tant que le filtre fonctionne.',
} as const;
