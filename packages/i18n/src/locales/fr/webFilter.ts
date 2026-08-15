export const webFilter = {
  title: 'Filtre web',
  fallbackDeviceName: 'Appareil de l’enfant',
  toastUpdateFailed: 'Impossible de mettre à jour le Filtre web. Veuillez réessayer.',
  heroTitle: 'Filtrer les sites pour adultes',
  heroSubtitleIos:
    'Utilise le filtre de contenu web de Temps d’écran d’Apple pour limiter le contenu adulte dans Safari et les navigateurs intégrés aux apps de l’appareil de l’enfant.',
  heroSubtitleAndroid:
    'Utilise un VPN DNS local sur l’appareil Android de l’enfant pour bloquer les domaines adultes connus dans les navigateurs et de nombreuses apps.',
  toggleLabel: 'Activer le Filtre web',
  toggleHintIos: 'Nécessite l’autorisation Temps d’écran sur l’appareil de l’enfant.',
  toggleHintAndroid:
    'L’enfant doit approuver une fois la connexion VPN de KidGate. Gardez le VPN actif pour que le filtre fonctionne.',
  toggleAccessibilityLabel: 'Activer le Filtre web',
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
    'Voyez quels sites ce téléphone a atteints et ce qui a été bloqué',
  category: {
    adult: 'Contenu adulte',
    gambling: 'Jeux d’argent',
    dating: 'Rencontres',
    drugs: 'Drogues et alcool',
    violence: 'Violence et extrémisme',
    piracy: 'Piratage',
    social: 'Réseaux sociaux',
    videoStreaming: 'Streaming vidéo',
    gaming: 'Jeux',
    shopping: 'Achats',
  },
  categoryHint: {
    adult: 'Sites explicites et pour adultes',
    gambling: 'Casinos, paris, coffres à butin',
    dating: 'Apps de rencontre et chat avec inconnus',
    drugs: 'Cannabis, vapotage, alcool',
    violence: 'Forums gore et extrémistes',
    piracy: 'Torrents et streaming pirate',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, portails de jeux',
    shopping: 'Amazon, Shein, mode express',
  },
} as const;
