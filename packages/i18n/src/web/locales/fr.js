/** French. */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{flagged}} applications sur {{total}} méritent un coup d’œil',
    summaryClear: 'Rien à signaler parmi {{total}} applications',
    summaryFlaggedExtension:
      '{{flagged}} extensions Chrome sur {{total}} méritent un coup d’œil',
    summaryClearExtension: 'Rien à signaler parmi {{total}} extensions Chrome',
  },
  meta: {
    title: 'KidGate — Un contrôle parental qui respecte votre enfant',
    description:
      'KidGate aide les parents à gérer le temps d’écran, bloquer des applis, filtrer le web et rester en contact — sans priver l’enfant de sa liberté.',
  },

  common: {
    comingSoon: 'Bientôt disponible',
    loading: 'Chargement…',
    signOut: 'Se déconnecter',
    crashTitle: 'Cette page ne répond plus',
    crashBody:
      'Un rechargement suffit généralement. Les réglages de votre famille et les appareils de votre enfant n’ont pas changé.',
    crashReload: 'Recharger la page',
  },

  language: {
    title: 'Langue',
    change: 'Changer de langue',
    system: 'Langue du navigateur',
    english: 'Anglais',
    vietnamese: 'Vietnamien',
    spanish: 'Espagnol',
    portuguese: 'Portugais (Brésil)',
    german: 'Allemand',
    french: 'Français',
    japanese: 'Japonais',
    korean: 'Coréen',
    arabic: 'Arabe',
    indonesian: 'Indonésien',
    italian: 'Italien',
    turkish: 'Turc',
    hindi: 'Hindi',
    russian: 'Russe',
  },

  nav: {
    skip: 'Aller au contenu',
    main: 'Principal',
    plans: 'Formules',
    about: 'À propos',
    support: 'Assistance',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    dashboard: 'Tableau de bord',
  },

  footer: {
    blurb:
      'Un contrôle parental qui aide les familles à s’entendre sur le temps d’écran plutôt qu’à se disputer à ce sujet.',
    product: 'Produit',
    about: 'À propos de nous',
    dashboard: 'Tableau de bord parent',
    supportGuides: 'Assistance et guides',
    download: 'Télécharger',
    contact: 'Nous contacter',
    legal: 'Mentions légales',
    privacyPolicy: 'Politique de confidentialité',
    terms: 'Conditions générales',
    deleteData: 'Supprimer vos données',
    rights: '© {{year}} KidGate. Tous droits réservés.',
    madeFor:
      'Conçu pour les familles sur iPhone, Android, Mac, Windows, Android TV et Chrome.',
  },

  legalNote:
    'Cette page n’existe qu’en anglais, et c’est le texte anglais qui fait foi. Écrivez à [support@kidgate.app](mailto:support@kidgate.app) si vous avez besoin d’aide pour comprendre un passage.',

  store: {
    appleAria: 'Télécharger KidGate sur l’App Store',
    appleSmall: 'Télécharger dans',
    appleName: 'l’App Store',
    googleAria: 'Obtenir KidGate sur Google Play',
    googleSmall: 'Disponible sur',
    googleName: 'Google Play',
    chromeName: 'Chrome Web Store',
  },

  home: {
    heroBadge: 'Le contrôle parental, comme il faut',
    heroTitle: 'Protégez vos enfants',
    heroTitleAccent: 'sans leur retirer leur liberté.',
    heroLede:
      'KidGate donne aux parents un contrôle calme et clair sur le temps d’écran, les applis et la sécurité — pendant que l’enfant garde un téléphone qui reste le sien.',
    heroCheck1: 'Temps d’écran',
    heroCheck2: 'Blocage d’applis',
    heroCheck3: 'Filtre web',
    heroCheck4: 'Localisation',
    heroCheck5: 'SOS',

    phoneDailyLimit: 'Limite quotidienne',
    phoneBlockedHours: 'Heures bloquées',
    phoneScheduleOn: 'Planning actif',
    phoneLocation: 'Localisation',
    phoneCheckIn: 'Check-in OK',

    trust1Title: 'Jamais de publicité',
    trust1Text: 'Les données des enfants ne servent jamais à la publicité',
    trust2Title: 'Suppression à tout moment',
    trust2Text: 'Effacez votre compte familial et toutes les données sur demande',
    trust3Title: 'Téléphone, ordinateur et télé',
    trust3Text:
      'iPhone, Android, Mac, Windows, Android TV et Chrome sur un seul compte famille',
    trust4Title: 'Une formule par famille',
    trust4Text: 'Tous les appareils parents et enfants, un seul abonnement',

    featuresEyebrow: 'Fonctionnalités',
    featuresTitle: 'Tout ce dont un parent a besoin',
    featuresSub:
      'Des limites quotidiennes aux alertes d’urgence — une appli pour le bien-être numérique de toute la famille.',
    feature1Title: 'Temps d’écran et limites quotidiennes',
    feature1Text:
      'Fixez un plafond quotidien et des Heures bloquées pour l’école et le coucher. L’appareil se verrouille tout seul quand le temps est écoulé.',
    feature2Title: 'Blocage d’applis',
    feature2Text:
      'Choisissez les applis que votre enfant ne peut pas ouvrir — un choix protégé par votre code PIN parent — et activez le blocage à distance.',
    feature3Title: 'Limites d’apps',
    feature3Text:
      'Sur Android, Android TV et ordinateur, plafonnez chaque appli séparément : « une demi-heure de TikTok » sans l’interdire pour autant.',
    feature4Title: 'Filtre web et historique',
    feature4Text:
      'Bloquez les sites pour adultes, les jeux d’argent, l’automutilation et plus encore sur tous les appareils ; avec Premium, voyez aussi quels sites ont été consultés.',
    feature5Title: 'Localisation et lieux',
    feature5Text:
      'Voyez où se trouve votre enfant jusqu’à 10 fois par jour ; Premium ajoute la position en direct et des alertes pour les lieux enregistrés.',
    feature6Title: 'Check-in et SOS',
    feature6Text:
      'Demandez à votre enfant de confirmer qu’il va bien ; en cas d’urgence, son téléphone vous envoie un SOS immédiat avec sa position.',
    feature7Title: 'Alertes de protection et d’applis',
    feature7Text:
      'Sachez à l’instant où une autorisation importante est désactivée sur le téléphone de votre enfant, et approuvez les nouvelles applis avant qu’elles ne s’ouvrent sur Android, Android TV ou un ordinateur.',
    feature8Title: 'Tâches à récompense et temps en plus',
    feature8Text:
      'Les enfants gagnent des minutes bonus et des étoiles en accomplissant des tâches, ou demandent du temps en plus — vous validez les deux depuis votre téléphone.',

    feature9Title: 'Verrouillage de l’appareil',
    feature9Text:
      'Verrouillez l’appareil tout de suite et libérez-le quand vous le décidez — le dîner, les devoirs, ou une règle ignorée.',
    feature10Title: 'Rapport hebdomadaire',
    feature10Text:
      'Chaque lundi : temps d’écran, moyenne quotidienne, ce qui a été bloqué, et la comparaison avec la semaine précédente.',
    feature11Title: 'Historique YouTube et vidéos',
    feature11Text:
      'Les vidéos YouTube et les Shorts regardés par votre enfant sur Android et dans Chrome, ainsi que les vidéos sur Android TV. Pas sur iPhone.',
    feature12Title: 'Fil d’activité',
    feature12Text:
      'Tout ce qui s’est passé, dans l’ordre — un appareil déverrouillé, une demande traitée, une alerte envoyée ; la journée en cours avec la formule gratuite, 30 jours avec Premium.',
    featurePremium: 'Premium',
    platformsTitle: 'Un seul KidGate, où que soit l’écran',
    platformsSub:
      'Les mêmes règles et le même compte famille sur le téléphone, sur l’ordinateur et sur Android TV — et le même Filtre web dans Chrome. L’application de bureau s’obtient sur ce site, pas dans un magasin d’applications.',

    showcaseEyebrow: 'Tableau de bord parent',
    showcaseTitle: 'Toute la famille sur un seul écran',
    showcaseSub:
      'Temps d’écran, tentatives bloquées, localisation et tout ce qui demande votre attention — sur votre téléphone ou dans n’importe quel navigateur.',
    showcaseCaption1: 'Consultez les rapports depuis n’importe quel navigateur',
    showcaseCaption2: 'Les changements sont validés depuis votre téléphone',

    setupEyebrow: 'Installation',
    setupTitle: 'Opérationnel en quelques minutes',
    setupSub:
      'Aucune compétence technique nécessaire — l’appli vous guide à chaque étape.',
    step1Title: 'Configurez votre appareil',
    step1Text:
      'Installez KidGate, choisissez « Ceci est un appareil parent » et connectez-vous avec Google ou une adresse e-mail — ou avec Apple, sur un iPhone.',
    step2Title: 'Associez l’appareil de votre enfant',
    step2Text:
      'Installez KidGate sur le téléphone de votre enfant et connectez-le en scannant un QR code. Moins d’une minute.',
    step3Title: 'Définissez vos règles',
    step3Text:
      'Choisissez une Limite quotidienne et des Heures bloquées, puis activez la localisation et le blocage des applications depuis votre propre téléphone. Les applis à bloquer se choisissent une seule fois sur l’appareil de votre enfant, avec votre code PIN parent.',

    whyEyebrow: 'Pourquoi KidGate',
    whyTitle: 'Conçu pour la confiance, pas pour la surveillance',
    whySub: 'Pensé pour garder le dialogue ouvert entre parent et enfant.',
    why1Title: 'Une formule, toute la famille',
    why1Text:
      'Un seul abonnement Premium couvre tous les appareils parents et enfants, et seul le titulaire de la famille paie. La formule gratuite garde un appareil enfant sous surveillance.',
    why2Title: 'Pensé pour la coparentalité',
    why2Text:
      'Invitez un second parent à gérer les mêmes enfants, avec l’accès que le titulaire approuve. Une famille peut compter jusqu’à 3 parents avec la formule gratuite et pendant l’essai, et jusqu’à 6 avec Premium.',
    why3Title: 'La confidentialité d’abord',
    why3Text:
      'Nous ne vendons jamais de données personnelles et n’utilisons jamais les données des enfants à des fins publicitaires. Supprimez tout quand vous voulez.',
    why4Title: 'Honnêtes sur les limites',
    why4Text:
      'Nous vous disons ce que chaque plateforme peut et ne peut pas appliquer, au lieu de promettre un contrôle qui n’existe pas.',

    onlyEyebrow: 'Seulement chez KidGate',
    onlyTitle: 'Ce que vous ne trouverez pas ailleurs',
    onlySub:
      'Six points vérifiés face aux applis auxquelles les parents nous comparent. Chacun précise la plateforme sur laquelle il est vrai.',
    only1Title: 'La télé du salon aussi',
    only1Text:
      'Android TV reçoit une Limite quotidienne, des Heures bloquées, le blocage d’applis et un Filtre web. Sur une télé, le blocage se fait au mieux — une appli bloquée est renvoyée à l’écran d’accueil — et il n’y a ni SOS ni demande de temps supplémentaire depuis le canapé. Une télé ne partage pas non plus sa position. La plupart des contrôles parentaux s’arrêtent au téléphone.',
    only2Title: 'Des alertes de messages qui restent sur le téléphone',
    only2Text:
      'Avec Premium sur Android, les messages sont comparés sur l’appareil même à des listes de mots-clés dans trois langues au plus, choisies parmi 14, et ce qui quitte le téléphone est le mot ou l’expression détectés, jamais la conversation. Une seule chose change cela, et seulement si vous le demandez : activez la confirmation par IA et un message entrant ambigu est envoyé à Gemini de Google pour être évalué, afin qu’un mot ordinaire ne vous réveille pas.',
    only3Title: 'Toutes les applis, pas une liste d’applis',
    only3Text:
      'Les alertes viennent des notifications de n’importe quelle appli utilisée par votre enfant — pas d’une liste fixe d’applis prises en charge — et de ce qu’il tape dans les principales applis de discussion, de réseaux sociaux et de jeux, dont Zalo, LINE et KakaoTalk. Android uniquement, avec Premium.',
    only4Title: 'Une issue pour l’enfant',
    only4Text:
      'Un appui de cinq secondes sur SOS depuis un téléphone vous prévient aussitôt, avec la position — et sur Android, cela ouvre aussi les appels, les cartes et les messages pendant cinq minutes, même sur un téléphone verrouillé. Un enfant qui peut appeler à l’aide depuis l’écran de verrouillage n’a aucune raison de lutter contre l’appli.',
    only5Title: 'Des règles qui tiennent sans internet',
    only5Text:
      'Les Heures bloquées et la Limite quotidienne sont appliquées sur l’appareil lui-même : débrancher la box ne change rien. La télé accepte même votre code PIN parent sans aucune connexion.',
    only6Title: 'Saluer ce que la semaine a réussi',
    only6Text:
      'Avec Premium, chaque rapport hebdomadaire garde une place pour ce qui s’est bien passé — une limite respectée, un coucher moins tardif, une tâche terminée — et ne le dit que lorsque la semaine a vraiment été mesurée.',

    faqEyebrow: 'FAQ',
    faqTitle: 'Les premières questions des parents',
    faqSub: 'Des réponses rapides avant de télécharger.',
    faq1Q: 'Existe-t-il un essai gratuit ?',
    faq1A:
      'Oui. L’essai de 7 jours commence dès que vos premiers appareils parent et enfant sont connectés, et inclut toutes les fonctions Premium. À la fin, les règles que vous avez définies — Limite quotidienne, Heures bloquées, Applications bloquées, Filtre web, Verrouillage de l’appareil, demandes de temps supplémentaire et tâches à récompense — continuent de fonctionner gratuitement sur tous les appareils enfants, et l’appareil que vous choisissez de garder sous surveillance continue de partager sa position. L’activité en direct, l’historique, les rapports hebdomadaires et le suivi de position sont ce que Premium rétablit.',
    faq2Q: 'Combien d’appareils puis-je gérer ?',
    faq2A:
      'Premium couvre jusqu’à 25 appareils enfant et 6 parents, vous compris, et chaque appareil envoie de l’activité. La formule gratuite couvre jusqu’à 8 appareils enfant et 3 parents. Chaque appareil continue d’appliquer les règles que vous avez définies, mais seul celui que vous choisissez envoie de l’activité, et sur les autres ces règles peuvent être assouplies mais pas renforcées.',
    faq3Q: 'Mon enfant peut-il désinstaller ou contourner KidGate ?',
    faq3A:
      'Les réglages sensibles sont protégés par votre code PIN parent, et les alertes de protection vous préviennent aussitôt si une autorisation clé est désactivée sur l’appareil de l’enfant.',
    faq4Q: 'Puis-je tout gérer depuis un ordinateur ?',
    faq4A:
      'Oui. Le tableau de bord parent s’ouvre dans n’importe quel navigateur. Scannez le code qu’il affiche avec l’application KidGate de votre téléphone : vous retrouvez la même famille, les mêmes appareils et les mêmes réglages, avec les commandes déverrouillées. Vous pouvez aussi vous connecter avec votre compte pour consulter ; verrouiller un appareil ou modifier une limite demande alors votre code PIN parent.',
    faq5Q: 'Combien coûte Premium ?',
    faq5A:
      'Premium coûte 4,99 $ par mois ou 39,99 $ par an aux États-Unis, facturé via l’App Store ou Google Play et affiché dans votre devise sur la boutique. Une formule À vie, à paiement unique, offre le même Premium sur chaque appareil enfant, tant que KidGate existe. La formule gratuite n’expire jamais.',
    faqMore: 'D’autres questions ? Voir l’assistance',

    ctaTitle: 'Commencez à protéger votre famille dès aujourd’hui',
    ctaSub: 'Essai gratuit de 7 jours avec accès complet.',
    ctaNote: 'Annulez à tout moment depuis l’App Store ou Google Play.',
  },

  login: {
    title: 'Connexion parent',
    sub: 'Utilisez le compte que vous avez créé dans l’appli KidGate. Vous verrez ici la même famille, les mêmes appareils et les mêmes réglages.',
    notConfiguredTitle: 'Firebase n’est pas configuré sur ce déploiement.',
    notConfiguredBody:
      'Définissez les variables d’environnement VITE_FIREBASE_* pour activer la connexion.',
    qrWhy:
      'Scanner avec votre téléphone vous connecte et déverrouille les commandes en une seule étape. Les méthodes ci-dessous vous connectent pour consulter ; déverrouiller les commandes demande ensuite votre code PIN parent.',
    orViewOnly: 'ou connectez-vous autrement',
    google: 'Continuer avec Google',
    googleBusy: 'Ouverture de Google…',
    apple: 'Continuer avec Apple',
    appleBusy: 'Ouverture d’Apple…',
    orEmail: 'ou utilisez votre e-mail',
    email: 'E-mail',
    emailPlaceholder: 'vous@exemple.com',
    password: 'Mot de passe',
    submit: 'Se connecter',
    submitBusy: 'Connexion…',
    forgot: 'Mot de passe oublié ?',
    resetNeedsEmail:
      'Saisissez d’abord votre adresse e-mail, puis choisissez « Mot de passe oublié ».',
    resetSent: 'E-mail de réinitialisation envoyé à {{email}}.',
    foot: 'Les comptes KidGate se créent dans l’appli mobile — le tableau de bord web se connecte à une famille existante. Nouveau ici ? Installez d’abord l’appli et associez un appareil enfant.',
  },

  qr: {
    start: 'Se connecter avec l’appli KidGate',
    generating: 'Génération du code…',
    step1: 'Ouvrez KidGate sur votre téléphone.',
    step2: 'Touchez l’icône de scan dans l’onglet *Famille*.',
    step3: 'Scannez ce code, puis validez.',
    waiting: 'En attente de validation · expire dans {{time}}',
    signingIn: 'Validé. Connexion…',
    expired: 'Ce code a expiré.',
    failed: 'La connexion n’a pas abouti.',
    newCode: 'Afficher un nouveau code',
    tryAgain: 'Réessayer',
  },

  authAction: {
    checking: 'Vérification du lien…',
    resetTitle: 'Choisissez un nouveau mot de passe',
    newPassword: 'Nouveau mot de passe',
    confirmPassword: 'Confirmez le nouveau mot de passe',
    mismatch: 'Les mots de passe ne correspondent pas.',
    tooShort: 'Le mot de passe doit contenir au moins 6 caractères.',
    save: 'Enregistrer le mot de passe',
    saving: 'Enregistrement…',
    resetDone: 'Mot de passe modifié',
    resetDoneBody:
      'Connectez-vous avec votre nouveau mot de passe, ici ou dans l’appli KidGate.',
    verifyDone: 'E-mail confirmé',
    verifyDoneBody: 'Revenez dans l’appli KidGate pour continuer.',
    invalid: 'Ce lien a expiré ou a déjà été utilisé',
    invalidBody: 'Ouvrez KidGate et demandez un nouveau lien.',
  },
  authError: {
    generic: 'Une erreur s’est produite. Réessayez.',
    invalidEmail: 'Cette adresse e-mail ne semble pas correcte.',
    userDisabled: 'Ce compte a été désactivé.',
    userNotFound: 'Aucun compte KidGate ne utilise cette adresse e-mail.',
    wrongPassword: 'L’e-mail ou le mot de passe est incorrect. Veuillez réessayer.',
    rateLimited:
      'Trop de codes de connexion depuis ce réseau. Réessayez dans {{minutes}} min.',
    tooManyRequests: 'Trop de tentatives. Attendez quelques minutes et réessayez.',
    popupClosed: 'La fenêtre de connexion a été fermée avant la fin.',
    popupCancelled: 'La connexion a été annulée.',
    popupBlocked:
      'Votre navigateur a bloqué la fenêtre de connexion. Autorisez les fenêtres pop-up pour ce site et réessayez.',
    accountExists:
      'Cette adresse est déjà enregistrée avec une autre méthode de connexion. Utilisez celle que vous avez configurée dans l’appli.',
    operationNotAllowed:
      'Cette méthode de connexion n’est pas encore activée pour ce projet.',
    unauthorizedDomain:
      'Ce domaine n’est pas autorisé dans les réglages de Firebase Authentication.',
    invalidCustomToken:
      'Ce lien de connexion n’est plus valide. Affichez un nouveau QR code.',
    webRejected: 'La demande a été refusée sur le téléphone.',
    webExpired: 'Le code a expiré. Générez-en un nouveau.',
    noFunctionsUrl:
      'L’URL des Cloud Functions n’est pas configurée (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'Votre session a expiré. Reconnectez-vous.',
  },

  live: {
    checkingSession: 'Vérification de votre session…',
    loadingFamily: 'Chargement de votre famille…',
    loadFailedTitle: 'Impossible de charger votre famille',
    noAccessTitle: 'Aucune famille sur ce compte',
    noAccess:
      'Ce compte n’a accès à aucune famille KidGate. Connectez-vous avec le compte parent que vous utilisez dans l’appli.',
    noFamily:
      'Ce compte n’a pas encore de famille KidGate. Si vous utilisez KidGate sur votre téléphone, déconnectez-vous puis reconnectez-vous ici avec le même compte. Pour créer une famille, configurez-la sur votre téléphone, puis rechargez cette page.',
    noFamilyStep1:
      'Installez KidGate sur votre téléphone, choisissez *Ceci est un appareil parent* et connectez-vous avec ce compte.',
    noFamilyStep2:
      'Ouvrez *Famille* et choisissez *Créer une famille*, ou *Rejoindre une famille* si un autre parent vous a invité.',
  },

  time: {
    never: 'jamais',
    justNow: 'à l’instant',
    minutes: 'il y a {{count}} min',
    hours: 'il y a {{count}} h',
    days: 'il y a {{count}} j',
  },

  viz: {
    hours: '{{count}}h',
    minutes: '{{count}}min',
    hoursMinutes: '{{hours}}h{{minutes}}',
    none: '—',
    byDay: 'Temps d’écran par jour',
    limit: 'Limite {{value}}',
    screenTime: 'Temps d’écran',
    bonus: 'Bonus',
    bonusEarned: 'Bonus gagné',
    overLimit: 'Au-delà de la limite quotidienne',
    dailyLimit: 'Limite quotidienne',
    ofLimit: 'sur {{value}}',
    noLimit: 'aucune limite définie',
    blocked: 'Bloqué',
    blockedHours: 'Heures bloquées',
    day0: 'dim',
    day1: 'lun',
    day2: 'mar',
    day3: 'mer',
    day4: 'jeu',
    day5: 'ven',
    day6: 'sam',
    timelineUsed: 'En cours d’utilisation',
    timelineIdle: 'Non utilisé',
    timelineUnmeasured: 'Non mesuré',
    timelineUnmeasuredHint:
      'KidGate ne fonctionnait pas sur l’appareil, ou l’appareil était en veille. Ces minutes ne sont pas non plus dans le total.',
    timelineUnsupported:
      'Cet appareil peut indiquer combien de temps il a été utilisé, mais pas quand.',
    timelinePending: 'Aucune chronologie pour l’instant.',
  },

  perm: {
    screenTime: 'Temps d’écran',
    location: 'Localisation',
    notifications: 'Notifications',
    camera: 'Appareil photo',
    microphone: 'Micro',
    backgroundAppRefresh: 'Actualisation en arrière-plan',
    overlay: 'Superposition aux autres apps',
    batteryOptimization: 'Batterie sans restriction',
    exactAlarm: 'Alarmes et rappels',
    accessibility: 'Accessibilité (assistant de verrouillage)',
  },

  webCat: {
    adult: 'Contenu adulte',
    selfHarm: 'Automutilation et troubles alimentaires',
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

  appCat: {
    adult: 'Contenu adulte',
    gambling: 'Jeux d’argent',
    gameGambling: 'Loot boxes et paris de skins',
    dating: 'Rencontres',
    drugs: 'Drogues et alcool',
    violence: 'Violence et gore',
    piracy: 'Piratage',
    bypass: 'Applis de contournement',
  },

  webCatGroup: {
    harm: 'Contenus nocifs',
    contact: 'Inconnus',
    bypass: 'Contournement du filtre',
    ai: 'IA',
    entertainment: 'Loisirs et réseaux sociaux',
    money: 'Achats et argent',
  },

  dash: {
    tabOverview: 'Vue générale',
    tabScreen: 'Temps d’écran',
    tabApps: 'Applis',
    tabWeb: 'Web',
    tabSafety: 'Sécurité',
    tabControls: 'Commandes',
    tabReport: 'Rapport hebdomadaire',
    tabReportNew: 'Nouveau rapport hebdomadaire',

    children: 'Enfants',
    noChildren: 'Aucun appareil enfant associé pour l’instant.',
    unassignedDevices: 'Non attribué',
    manage: 'Gérer',
    parents_one: '{{count}} parent',
    parents_other: '{{count}} parents',
    devices_one: '{{count}} appareil enfant',
    devices_other: '{{count}} appareils enfants',
    planManageOnPhone:
      'Les formules s’achètent et se modifient dans l’application KidGate sur votre téléphone.',
    fallbackFamily: 'Votre famille',
    fallbackDevice: 'Appareil de l’enfant',

    statusOnline: 'En ligne',
    statusOffline: 'Hors ligne',
    statusLocked: 'Verrouillé',
    statusLockSent: 'Verrouillage envoyé',
    statusLockNotApplied: 'Verrouillage non appliqué',
    statusPaused: 'En pause',

    stateAllowed: 'Autorisé',
    stateForegroundOnly: 'Seulement si l’app est ouverte',
    stateDenied: 'Désactivé',
    stateNotDetermined: 'Pas encore demandé',
    stateRestricted: 'Restreint',
    stateUnavailable: 'Indisponible',
    stateUnknown: 'Inconnu',

    lastActive: 'Dernière activité {{when}}',
    appVersion: 'Version de l’app',
    appVersionUpdate: '{{running}} · {{latest}} disponible',
    appVersionRestart: '{{running}} · redémarrez l’app pour terminer',
    buildOutdated: 'Mise à jour disponible',
    checkIn: 'Check-in',
    sending: 'Envoi…',
    lockDevice: 'Verrouiller l’appareil',
    unlock: 'Déverrouiller',
    working: 'En cours…',
    save: 'Enregistrer',

    unlockTitle: 'Les modifications sont verrouillées.',
    unlockBody:
      'La consultation fonctionne tout de suite. Pour verrouiller un appareil, changer les limites ou approuver des demandes, déverrouillez ce navigateur avec votre code PIN parent — ou validez-le en scannant le QR code avec l’application KidGate. Les Check-in fonctionnent dans les deux cas.',
    unlockCta: 'Déverrouiller les modifications',
    unlockToChange: 'Déverrouillez d’abord les modifications',
    refresh: 'Actualiser',
    liveOnApp: 'Ouvrez l’application pour le suivi en direct',
    pinTitle: 'Saisissez votre code PIN parent',
    pinBody:
      'Les mêmes six chiffres que dans l’application. Ce navigateur reste déverrouillé 8 heures ; une validation depuis l’application le garde connecté 7 jours.',
    pinLabel: 'Code PIN parent',
    pinSubmit: 'Déverrouiller',
    pinOrScan: 'Ou validez depuis votre téléphone',
    qrSaferNote:
      'La validation depuis le téléphone est la plus sûre des deux : elle exige le téléphone associé en main, alors que le code PIN est six chiffres que quelqu’un de la famille a pu vous voir saisir.',
    pinWrong: 'Code PIN incorrect. Essais restants : {{count}}.',
    pinLocked:
      'Trop d’essais incorrects. Attendez 15 minutes ou validez ce navigateur depuis votre téléphone.',
    pinNotSet:
      'Votre famille n’a pas encore de code PIN parent. Définissez-en un dans l’application ou validez ce navigateur depuis votre téléphone.',
    unlockedToast: 'Modifications déverrouillées sur ce navigateur.',
    close: 'Fermer',

    noDeviceBody:
      'Ouvrez KidGate sur votre téléphone, allez dans *Famille* et touchez l’icône de scan (*Scanner un code*). Scannez le QR code de l’appareil de votre enfant, ou saisissez son code à 6 caractères. Cliquez ensuite sur *Actualiser* ici.',
    pairStep2Title: 'Scannez le code avec votre téléphone',
    getKidGate: 'Télécharger KidGate',
    childNoDevices:
      'Pas encore d’appareil. Associez-en un, puis choisissez cet enfant quand l’appli demande qui l’utilise.',
    childNoDevicesAssign:
      'Pas encore d’appareil. Attribuez-en un ci-dessous, ou associez-en un nouveau.',

    toastCheckIn: '{{name}} recevra une demande de check-in.',
    toastTimeApproved: 'Temps supplémentaire accordé.',
    toastCheckInResent: 'Check-in renvoyé.',

    tileScreenToday: 'Temps d’écran aujourd’hui',
    tileSameAsAverage: 'Identique à la moyenne sur 7 jours',
    tileDeltaUp: '↑ {{percent}} % par rapport à la moyenne sur 7 jours',
    tileDeltaDown: '↓ {{percent}} % par rapport à la moyenne sur 7 jours',
    tileBlocked: 'Tentatives bloquées',
    tileBlockedMeta: 'Applis stoppées depuis l’installation',
    tileSites: 'Sites filtrés',
    tileCategoriesHit_one: '{{count}} catégorie touchée',
    tileCategoriesHit_other: '{{count}} catégories touchées',
    tileNothingBlocked: 'Rien de bloqué pour le moment',
    tileAttention: 'Attention requise',
    tileOpenItems: 'Points ouverts ci-dessous',
    tileAllClear: 'Tout va bien',

    cardScreenTime: 'Temps d’écran',
    cardScreenTimeSub: '14 derniers jours, face à la limite quotidienne',
    cardRecent: 'Activité récente',
    cardRecentSub: 'Le plus récent en premier',
    cardRecentEmpty:
      'Rien d’enregistré pour l’instant. Les verrouillages, applis bloquées, alertes de lieu et synchronisations du temps d’écran de cet appareil apparaîtront ici.',
    cardAttention: 'Demande votre attention',
    cardAttentionSub: '{{count}} en cours',
    cardAttentionEmpty: 'Rien à examiner. Les protections ont l’air en forme.',
    cardProtection: 'État de la protection',
    cardProtectionSub: 'Vérifié {{when}}',

    attnMoreMinutes: '{{name}} a demandé {{minutes}} minutes de plus',
    attnReason: '« {{reason}} » · {{when}}',
    attnCheckInMissed: 'Un check-in a été manqué',
    attnCheckInMissedMeta: 'Envoyé {{when}} · sans réponse',
    attnLimitReached: 'Limite quotidienne atteinte — appareil verrouillé',
    attnLimitReachedMeta: '{{used}} utilisées aujourd’hui',
    attnBatteryLow: 'Batterie faible ({{level}} %)',
    attnBatteryLowMeta:
      'Les mises à jour de position peuvent s’arrêter si le téléphone s’éteint',
    attnReview: 'Examiner',
    attnResend: 'Renvoyer',
    attnHowToFix: 'Comment corriger',
    attnUnlock: 'Déverrouiller',
    attnAppOnly: 'Disponible dans l’appli KidGate',

    todayTitle: 'Aujourd’hui',
    todaySub: 'Face à la limite quotidienne et au bonus gagné',
    used: 'Utilisé',
    left: 'Restant',
    dailyLimit: 'Limite quotidienne',
    bonusToday: 'Bonus du jour',
    off: 'Désactivé',
    on: 'Activé',
    topAppsTitle: 'Applis les plus utilisées aujourd’hui',
    topAppsTitleDay: 'Applis les plus utilisées · {{date}}',
    topAppsSub: 'Les plafonds par appli sont indiqués par un repère',
    trendTitle: 'Évolution du temps d’écran',
    trendSub: '{{count}} derniers jours',
    rangeDays: '{{count}} j',
    blockedHoursTitle: 'Heures bloquées',
    blockedHoursSub_one:
      '{{count}} plage horaire · l’appareil reste verrouillé dans les blocs ombrés',
    blockedHoursSub_other:
      '{{count}} plages horaires · l’appareil reste verrouillé dans les blocs ombrés',
    scheduleOff: 'Le planning est désactivé',
    schedMax: 'Un appareil ne peut pas dépasser {{max}} plages.',

    appUsageTitle: 'Usage des applis aujourd’hui',
    appUsageSub: 'Temps passé par appli',
    topAppsOther: 'Autres applications',
    underAMinute: 'Moins d’une minute',
    appUsageEmpty: 'Aucune utilisation d’applis signalée pour l’instant.',
    appBlockingTitle: 'Blocage des applications',
    appBlockingSub: 'Choisi sur l’appareil de l’enfant avec le code PIN parent',
    blockingLabel: 'Blocage',
    appsBlocked: 'Applications bloquées',
    categories: 'Catégories',
    perAppHint:
      'Les plafonds par appli sont indépendants de la liste de blocage — « 30 minutes de TikTok » n’est pas la même décision que « pas de TikTok ».',
    limitsMax: 'Un appareil ne peut pas dépasser {{max}} applis limitées.',
    perDay: '{{value}}/jour',
    webActivityTitle: 'Activité web',
    webActivitySub: 'Domaines les plus visités, 30 derniers jours',
    webActivityEmpty: 'Aucune activité web pour l’instant.',
    inventoryTitle: 'Applications installées',
    inventorySub: 'Tout sur cet appareil, pas seulement ce qui a changé',
    inventoryEmpty: 'Cet appareil n’a pas encore publié sa liste d’applications.',
    inventoryFirstScan:
      'Première analyse : KidGate ne peut pas dire quand chacune est arrivée.',
    inventoryFlagged: 'À regarder de plus près',
    inventoryFlaggedLabel: 'À regarder de plus près',
    inventoryOtherLabel: 'Identifiées',
    inventoryUnknownLabel: 'Non identifiées',
    installAllow: 'Autoriser',
    pendingInstallsTitle: 'Nouvelles applications en attente d’approbation',
    pendingInstallsSub:
      'Installées après l’activation de l’approbation, bloquées automatiquement par l’appareil',
    pendingInstallsEmpty: 'Aucune nouvelle application en attente d’approbation.',
    toastInstallAllowed: 'Appli autorisée',
    rowInstallApproval: 'Approuver les nouvelles applications',
    rowInstallApprovalDesc: '{{count}} applications en attente d’approbation',
    rowInstallApprovalDesc_one: '{{count}} application en attente d’approbation',
    rowInstallApprovalDescIos:
      'Masque l’App Store — Apple ne permet pas d’approuver application par application',
    colDomain: 'Domaine',
    colVisits: 'Visites',
    colBlocked: 'Bloquées',
    colLastSeen: 'Vu pour la dernière fois',
    videosTitle: 'Vidéos regardées',
    videosSub: 'Ce qui a été regardé sur YouTube et le web',
    videosEmpty: 'Aucune vidéo pour l’instant.',
    colVideo: 'Vidéo',
    colChannel: 'Chaîne',
    colViews: 'Vues',
    filterRefusedTitle: 'Ce que le filtre a refusé',
    filterRefusedSub_one: '{{count}} requête bloquée, 30 derniers jours',
    filterRefusedSub_other: '{{count}} requêtes bloquées, 30 derniers jours',
    nothingBlockedYet: 'Rien n’a encore été bloqué.',
    rollupNoteAi:
      'Certains types ont été déduits du nom du site au lieu de correspondre à un site connu — quelques-uns peuvent être faux.',
    webBackgroundNote:
      'Quand personne n’utilise l’appareil, certaines applications accèdent quand même à Internet en arrière-plan : mises à jour, recommandations et synchronisations tournent seules.',
    filterHintIos:
      'Cet iPhone ou iPad ne filtre qu’avec le contrôle des contenus pour adultes d’Apple. Mettez KidGate à jour sur l’appareil et autorisez le VPN de KidGate pour bloquer par catégorie.',
    filterHintAndroid:
      'Les catégories sont appliquées par le filtre DNS de l’appareil.',
    filterHintMacos:
      'Les catégories sont appliquées par le filtre de contenu KidGate sur le Mac.',

    locationTitle: 'Localisation',
    locationSharingOff: 'Le partage est désactivé',
    locationUpdated: 'Mis à jour {{when}}',
    locationWaiting: 'En attente de la première mise à jour',
    lastKnownLocation: 'Dernière position connue',
    nearPlace: 'Près de {{place}}',
    noPlaces:
      'Aucun lieu enregistré. Ajoutez-en un dans l’appli pour être prévenu quand votre enfant arrive ou repart.',
    placeRadius: '{{meters}} m · ',
    placeArrive: 'arrivée',
    placeLeave: 'départ',
    placeNoAlerts: 'aucune alerte',
    placeSamePin:
      'C’est le même endroit que « {{name}} ». Utilisez la carte de l’application pour le placer ailleurs.',
    placeWebHint:
      'Sur le web, un lieu ne peut être placé que là où l’appareil a signalé sa position pour la dernière fois. Utilisez la carte de l’application pour choisir ailleurs.',
    placeNeedsLocation: 'En attente d’une position de cet appareil.',
    sosTitle: 'Alertes SOS',
    sosSub: 'Signaux d’urgence envoyés par l’appareil de l’enfant',
    sosEmpty:
      'Aucune alerte SOS. Testez le SOS une fois ensemble pour que vous sachiez tous les deux comment il fonctionne.',
    sosAcknowledged: 'prise en compte',
    sosActive: 'active',

    checkInsTitle: 'Check-ins',
    checkInsSub: 'Demandez à votre enfant de confirmer qu’il va bien',
    checkInSafe: 'A confirmé être en sécurité',
    checkInMissed: 'Sans réponse',
    checkInWaiting: 'En attente',
    checkInPhotoRequested: 'photo et position demandées',
    checkInNoReply: 'pas encore de réponse',
    checkInPhotoSkipped: 'photo ignorée',
    checkInPhotoAttached: 'photo jointe',
    checkInNoPhoto: 'aucune photo demandée',
    sendCheckIn: 'Envoyer un check-in maintenant',

    protectionAlertsTitle: 'Alertes de protection',
    protectionAlertsSub_one: '{{count}} événement depuis l’installation',
    protectionAlertsSub_other: '{{count}} événements depuis l’installation',
    protectionAlertsHint:
      'Une alerte de protection signifie que KidGate applique moins que ce que vous avez défini. Rétablissez l’autorisation sur l’appareil de l’enfant pour l’effacer.',

    limitCardTitle: 'Limite quotidienne',
    limitCardSub: 'Plafonnez les minutes disponibles chaque jour',
    limitAria: 'Minutes de la limite quotidienne',
    limitScaleMin: '30 min',
    limitScaleMax: '8 h',
    limitHint:
      'Les minutes bonus des tâches à récompense et des demandes de temps approuvées s’ajoutent par-dessus, pour ce jour-là uniquement.',
    limitShared: 'Partagé entre tous les appareils',
    limitSharedSpent: '{{used}} sur {{limit}} utilisés aujourd’hui',
    limitSharedHint:
      'C’est la journée entière de cet enfant, pas une limite propre à cet appareil : chaque appareil reçoit ce que les autres n’ont pas utilisé. Modifiable dans l’application KidGate.',
    whatsOnTitle: 'Ce qui est activé',
    whatsOnSub: 'Les changements se synchronisent avec l’appareil de l’enfant',
    rowBlockedHours: 'Heures bloquées',
    rowBlockedHoursDesc_one: '{{count}} plage horaire · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} plages horaires · {{list}}',
    rowAppBlocking: 'Blocage des applications',
    rowAppBlockingApps: '{{count}} applications',
    rowAppBlockingApps_one: '{{count}} application',
    rowAppBlockingCategories: '{{count}} catégories',
    rowAppBlockingCategories_one: '{{count}} catégorie',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Filtre web',
    rowWebFilterDesc_one: '{{count}} catégorie refusée',
    rowWebFilterDesc_other: '{{count}} catégories refusées',
    rowNotSupported: 'Non pris en charge sur cet appareil',
    rowWebFilterAwaitingApproval: 'En attente d’autorisation sur l’appareil',
    rowWebFilterSwitchedOff: 'Désactivé sur l’appareil',
    rowLocation: 'Partage de position',
    rowLocationDesc: 'Dernière mise à jour {{when}}',
    rowLocationNone: 'Pas encore de position',
    rowSearchMonitoring: 'Surveillance des recherches',
    rowSafeSearch: 'Imposer SafeSearch',
    rowSafeSearchDesc:
      'Verrouille Google SafeSearch, le mode restreint de YouTube, Bing et DuckDuckGo sur leur réglage strict. Android, Android TV et Chrome. À ce niveau, YouTube masque aussi les commentaires et bloque certaines vidéos ordinaires.',

    webFilterCatsTitle: 'Catégories du filtre web',
    webFilterCatsSub: 'Types de contenu bloqués',
    dnsHint:
      'Les résolveurs DNS chiffrés sont toujours refusés tant que le filtre tourne — les laisser accessibles, c’est précisément ce qui permet à un navigateur de contourner toutes les autres catégories.',
    starChartTitle: 'Tableau des étoiles',
    starChartSub: 'Étoiles gagnées cette semaine, par enfant',
    starChartEmpty:
      'Ajoutez un deuxième enfant dans l’application pour lancer le tableau des étoiles.',
    starChartStars: '{{count}} étoiles',
    rewardTasksTitle: 'Tâches à récompense',
    rewardTasksSub: 'Gagnez des minutes en accomplissant des tâches',
    rewardTaskMeta: '+{{minutes}} min · {{cadence}}',
    rewardTaskStars: 'Difficulté : {{count}} sur 3',
    rewardTaskWaiting: ' · en attente de votre approbation',
    approve: 'Approuver',
    siteRequestsTitle: 'Demandes de sites',
    siteRequestsSub: 'Sites que cet appareil a demandé d’autoriser',
    siteRequestAllow: 'Autoriser',
    siteRequestDeny: 'Pas maintenant',
    attnSiteRequest: '{{name}} demande à ouvrir {{domain}}',
    toastSiteAllowed: 'Site autorisé',
    timelineTitle: 'Quand l’appareil a été utilisé',
    timelineSub:
      'Aujourd’hui, de minuit à minuit. Le vert correspond au temps passé sur l’appareil.',
    timelineSubDay:
      '{{date}}, de minuit à minuit. Le vert correspond au temps passé sur l’appareil.',
  },

  controlError: {
    generic: 'Cela n’a pas abouti. Réessayez.',
    network: 'Aucune connexion. Vérifiez votre réseau et réessayez.',
    sessionExpired: 'Votre session a expiré. Reconnectez-vous.',
    forbidden:
      'Cette session de navigateur ne peut rien modifier. Reconnectez-vous en scannant le code QR avec l’app KidGate.',
    notFound: 'Ce n’est plus là — cela a peut-être été modifié depuis le téléphone.',
    conflict: 'Quelqu’un vient de modifier ceci. Rechargez pour voir le résultat.',
    rateLimited: 'Trop de modifications à la fois. Patientez un instant et réessayez.',
    server: 'KidGate n’a pas pu terminer. Réessayez sous peu.',
    premiumRequired:
      'Cette fonction est réservée à Premium. Les formules se gèrent dans l’app KidGate sur votre téléphone.',
  },

  report: {
    title: 'Rapport hebdomadaire',
    subtitle: 'Ce que KidGate a observé cette semaine.',
    weekOf: 'Semaine {{week}}',
    writtenAt: 'Écrit le {{when}}',
    triggerScheduled: 'Envoyé lundi',
    triggerManual: 'Créé par vous',
    highlights: 'Bon à savoir',
    narrativeTitle: 'En une phrase',
    finePrint:
      'Les chiffres couvrent du {{from}} au {{to}}, sur tous les appareils de la famille. Le temps d’écran est ce que les appareils ont rapporté ; les minutes qu’ils n’ont pas pu mesurer ne figurent dans aucun total.',
    shareImage: 'Enregistrer en image',
    sharePdf: 'Enregistrer en PDF',
    copySummary: 'Copier le résumé',
    copied: 'Résumé copié.',
    imageSaved: 'Image enregistrée.',
    shareFailed: 'Ce navigateur ne peut pas enregistrer cela. Copiez plutôt le résumé.',
    emptyTitle: 'Pas encore de rapport',
    emptyBody:
      'Un rapport arrive chaque lundi matin et couvre les sept jours précédents.',
    noUsage:
      'Aucun temps d’écran n’a été enregistré ces deux dernières semaines, il n’y a donc rien à rapporter. Un appareil hors ligne ne rapporte rien, ce qui n’est pas la même chose qu’une semaine calme.',
    rateLimited: 'Trop de tentatives. Patientez une minute.',
    loadFailedTitle: 'Rapports non chargés',
    loadFailed: 'Impossible d’ouvrir les rapports. Rechargez la page pour réessayer.',
    retryLoad: 'Réessayer',
    failed: 'Impossible d’écrire le rapport. Réessayez dans un instant.',
    existed: 'Cette semaine avait déjà un rapport — le voici.',
    childrenTitle: 'Chaque enfant',
    childrenNote:
      'La même quinzaine, par appareil. Les pourcentages portent sur le total de la famille.',
    colScreenTime: 'Temps d’écran',
    colShare: 'Part',
    colChange: 'Vs semaine dernière',
    colLimit: 'Au-delà de la limite',
    colLateNights: 'Nuits tardives',
    colTopApp: 'La plus utilisée',
    noLimit: 'Aucune limite',
    busiest: 'Le plus de temps d’écran',

    historyTitle: 'Semaines précédentes',
    historyEmpty:
      'Les rapports reçus à partir de maintenant sont conservés ici pendant un an.',
  },

  support: {
    title: 'Assistance KidGate',
    updated: 'Nous sommes là pour vous aider',

    contactTitle: 'Nous contacter',
    contactEmail: '**E-mail :** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Délai de réponse :** généralement sous un jour ouvré',
    contactNote:
      'Lorsque vous nous écrivez, indiquez l’adresse e-mail de votre compte parent KidGate et une courte description du problème pour que nous puissions vous aider plus vite.',

    startTitle: 'Premiers pas',
    start1:
      '**1. Configurez l’appareil parent.** Installez KidGate, ouvrez l’appli et choisissez *Ceci est un appareil parent*. Connectez-vous avec Google ou une adresse e-mail (ou avec Apple, sur un iPhone), puis nommez votre famille.',
    start2:
      '**2. Définissez un code PIN parent.** Allez dans *Réglages → Sécurité* et créez un code PIN parent à 6 chiffres. Il est nécessaire pour modifier les réglages sensibles et choisir les applis bloquées sur l’appareil de l’enfant. Ne le partagez pas avec vos enfants.',
    start3:
      '**3. Connectez l’appareil de l’enfant.** Installez KidGate sur l’appareil de votre enfant et ouvrez-le. Sur un téléphone ou une tablette, choisissez *Ceci est un appareil enfant*. Sur l’appareil parent, ouvrez *Famille* et touchez l’icône de scan (*Scanner un code*), puis scannez le QR code affiché sur l’appareil de l’enfant (ou saisissez le code à 6 caractères). Si l’appareil de l’enfant le demande, confirmez-y la connexion ; une TV se connecte d’elle-même.',
    start4:
      '**4. Accordez les autorisations sur l’appareil de l’enfant.** Ouvrez l’écran *État* sur l’appareil de l’enfant et touchez *Poursuivre la configuration* — l’appli vous guide à travers chaque autorisation dont KidGate a besoin. Sur Android : Notifications, Accès à l’utilisation, Superposition aux autres apps, Accessibilité (assistant de verrouillage), Alarmes et rappels, et Batterie sans restriction ; sur iOS : *Autoriser l’utilisation des apps et des sites web* (Temps d’écran) et, pour le Filtre web, *Autoriser* lorsque iOS demande d’ajouter des configurations VPN. Les commandes ne fonctionneront pas complètement tant que ces autorisations ne sont pas actives.',
    start5:
      '**5. Configurez les commandes.** Depuis l’appareil parent, ouvrez la fiche de l’appareil de l’enfant et réglez la Limite quotidienne, les Heures bloquées, les Applications bloquées, le Filtre web et les fonctions de localisation.',
    startNote:
      'L’appli contient aussi un guide pas à pas : *Réglages → Guide d’utilisation*, qui détaille l’association des appareils, les autorisations, les commandes quotidiennes et les fonctions de sécurité.',

    faqTitle: 'Questions fréquentes',

    faq1Q: 'Puis-je gérer ma famille depuis un ordinateur ?',
    faq1A:
      'Oui. Ouvrez le [tableau de bord web](/dashboard) et scannez le code qu’il affiche avec l’application KidGate de votre téléphone — ou connectez-vous avec le même compte que dans l’appli : Google, Apple, ou votre e-mail et mot de passe. Vous y retrouvez la même famille, les mêmes appareils, rapports et réglages. Si vous êtes connecté avec un compte, modifier une commande demande votre code PIN parent. La création de comptes et l’association d’appareils se font toujours dans l’appli mobile.',

    faq2Q: 'Comment associer l’appareil parent et l’appareil enfant ?',
    faq2A:
      'Sur l’appareil de l’enfant, ouvrez KidGate. Sur un téléphone ou une tablette, choisissez *Ceci est un appareil enfant*. Un QR code et un code à 6 caractères apparaissent. Sur l’appareil parent, ouvrez *Famille* et touchez l’icône de scan (*Scanner un code*), puis scannez le QR code (recommandé) ou saisissez le code à la main. Si l’appareil de l’enfant le demande, confirmez-y le nom du parent ; une TV se connecte d’elle-même. Les codes expirent — si l’association échoue, touchez *Nouveau code* sur l’appareil de l’enfant et réessayez.',

    faq3Q: 'Deux parents peuvent-ils gérer la même famille ?',
    faq3A:
      'Oui. Sur l’appareil du titulaire de la famille, ouvrez *Famille → + → Inviter un parent* et partagez le QR code ou le code d’invitation. L’autre parent installe KidGate, se connecte comme parent, ouvre *Famille* et touche l’icône de scan (*Scanner un code*), puis scanne le QR code ou saisit le code d’invitation. Le titulaire approuve ensuite la demande. Une famille peut compter jusqu’à 3 parents avec la formule gratuite et pendant l’essai, et jusqu’à 6 avec Premium. Un abonnement couvre toute la famille ; seul le titulaire paie.',

    faq4Q: 'Comment fonctionne l’essai gratuit ?',
    faq4A:
      'L’essai de 7 jours commence dès que vos premiers appareils parent et enfant sont connectés, et donne accès à toutes les fonctions. Retirer un appareil enfant ne le remet pas à zéro. À la fin, toutes les règles continuent de fonctionner gratuitement et un appareil enfant de votre choix continue d’envoyer ses rapports ; Premium rétablit l’activité en direct, l’historique, les rapports hebdomadaires et les rapports de tous les appareils.',

    faq5Q: 'Comment annuler mon abonnement ?',
    faq5A:
      'Les abonnements sont facturés via l’App Store ou Google Play, pas directement par KidGate. Sur iOS : *Réglages → votre nom → Abonnements*. Sur Android : *Google Play → icône de profil → Paiements et abonnements → Abonnements*. L’abonnement se renouvelle automatiquement sauf annulation au moins 24 heures avant la fin de la période en cours.',

    faq6Q: 'Comment restaurer mes achats ?',
    faq6A:
      'Sur l’appareil parent, ouvrez l’écran *Formules* et touchez *Restaurer les achats*. Vérifiez que vous êtes connecté avec le même compte de boutique que lors de l’achat initial. Notez que seul le titulaire de la famille peut s’abonner ou restaurer des achats.',

    faq7Q: 'Pourquoi les données de temps d’écran n’apparaissent-elles pas ?',
    faq7A:
      'Les données d’usage viennent de l’appareil de l’enfant. Vérifiez qu’il est en ligne, ouvrez-y KidGate et regardez l’écran *État* — chaque ligne d’autorisation doit être marquée comme autorisée (sur Android, l’accès aux données d’usage est nécessaire au suivi du temps d’écran). Les rapports peuvent mettre quelques minutes à se synchroniser.',

    faq8Q: 'Pourquoi le verrouillage ou les Heures bloquées ne fonctionnent-ils pas ?',
    faq8A:
      'Sur Android, le verrouillage nécessite *Superposition aux autres apps* et l’assistant *Accessibilité* activés, ainsi qu’une batterie sans restriction. Sur Xiaomi, Samsung, Oppo, Vivo et appareils similaires, autorisez aussi le démarrage automatique et retirez KidGate de toute liste d’« applis en veille » (voir *État → Autoriser le démarrage automatique* sur l’appareil de l’enfant). Sur iOS, le verrouillage dépend de l’autorisation Temps d’écran. Si une autorisation est désactivée plus tard, vous recevrez une alerte de protection sur l’appareil parent.',

    faq9Q: 'Comment bloquer des applis précises ?',
    faq9A:
      'La sélection des applis se fait sur l’appareil de l’enfant : ouvrez *KidGate → Réglages*, touchez *Déverrouiller avec le code PIN parent*, ouvrez *Applications bloquées*, choisissez les applis et enregistrez. Ensuite, sur l’appareil parent, ouvrez l’écran *Applications bloquées* de cet appareil et activez *Activer le blocage des applications*. Sur iOS, Apple peut masquer les noms exacts des applis à l’appareil parent — c’est une limite de la plateforme.',

    faq10Q: 'Pourquoi la position de mon enfant ne se met-elle pas à jour ?',
    faq10A:
      'La localisation doit être autorisée pour KidGate sur l’appareil de l’enfant, et l’appareil a besoin d’une connexion réseau. Sur l’appareil parent, ouvrez l’écran *Localisation* de l’appareil et touchez *Actualiser la position*. Les modes d’économie de batterie peuvent retarder les mises à jour, et le GPS en intérieur peut être moins précis.',

    faq11Q: 'Comment retirer KidGate de l’appareil de mon enfant ?',
    faq11A:
      'Supprimez d’abord l’appareil depuis l’appli parent (ouvrez l’appareil dans *Famille* et choisissez Supprimer), puis désinstallez l’appli sur l’appareil de l’enfant.',

    faq12Q: 'Comment supprimer mon compte et mes données ?',
    faq12A:
      'Dans l’appli parent, allez dans *Réglages → Compte → Supprimer le compte*. Après un délai de 14 jours pendant lequel vous pouvez annuler, cela supprime définitivement votre compte familial et toutes les données — appareils, activité, historique de localisation et photos SOS — pour tous les parents et enfants. Consultez notre page [Suppression du compte et des données](/delete-account) pour toutes les options, y compris la suppression sans avoir l’appli installée.',

    legalTitle: 'Mentions légales',
    legalDeletion: 'Suppression du compte et des données',
  },

  download: {
    eyebrow: 'Télécharger',
    qrScan: 'Scannez avec l’appareil photo de votre téléphone pour obtenir l’appli',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 ou version ultérieure, sur un Mac à puce Apple silicon.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 ou version ultérieure, 64 bits.',
    button: 'Télécharger',
    warningSub:
      'Windows affiche un avertissement SmartScreen pour toute application installée hors de sa propre boutique par un développeur qui ne figure pas encore sur sa liste vérifiée — il ne signale rien qui ait été trouvé dans KidGate. La carte Windows ci-dessus indique comment l’autoriser. Le paquet Mac est signé avec un Developer ID Apple et notarisé par Apple : il ne déclenche donc aucun avertissement. Téléchargez uniquement depuis kidgate.app.',
    macosSteps:
      'Ouvrez le paquet téléchargé et suivez l’installateur. macOS vous demande ensuite une fois d’autoriser l’extension système KidGate : ouvrez les réglages indiqués par ce message et autorisez-la à cet endroit. Le Filtre web ne fonctionne pas tant que vous ne l’avez pas fait.',
    windowsSteps:
      'Votre navigateur peut d’abord signaler que ce fichier n’est pas souvent téléchargé — choisissez de le conserver. Ensuite, quand Windows indique avoir protégé votre PC, choisissez Informations complémentaires puis Exécuter quand même.',
  },
  about: {
    eyebrow: 'À propos de nous',
    title: 'Un contrôle parental sur lequel une famille',
    titleAccent: 'peut vraiment s’entendre.',
    lede: 'Nous ne faisons qu’un seul produit, et KidGate reçoit toute notre attention. Notre position tient en une phrase : un parent doit pouvoir se fier à ce que dit l’application, y compris lorsqu’elle dit qu’elle ne peut rien faire.',
    storyEyebrow: 'Pourquoi KidGate existe',
    storyTitle: 'Le temps d’écran est devenu la dispute de tous les foyers',
    storyP1:
      'Presque toutes les familles vivent la même soirée : un minuteur que personne n’a accepté, un téléphone confisqué et un enfant persuadé que les règles ont changé dans son dos. Les outils censés régler cela l’ont surtout aggravé — d’un côté un verrouillage sans explication, de l’autre un tableau de bord qui se lit comme de la surveillance.',
    storyP2:
      'Nous avons donc construit la version que nous voulions à la maison. Le parent règle une fois la Limite quotidienne, les Heures bloquées, les Applications bloquées et le Filtre web, et l’appareil s’y tient. L’enfant voit les mêmes chiffres que le parent, peut demander plus de temps et peut joindre un parent avec le SOS chaque fois que l’appareil est en ligne. KidGate ne fait pas semblant d’être absent.',
    storyP3:
      'Il fonctionne sur iPhone, Android, Mac, Windows et Android TV, avec une extension Chrome pour le Filtre web et un tableau de bord que les parents ouvrent dans n’importe quel navigateur. Une famille, un abonnement, tous les appareils.',
    valuesEyebrow: 'Ce en quoi nous croyons',
    valuesTitle: 'Quatre règles auxquelles nous ne dérogeons pas',
    valuesSub:
      'Écrites avant la première fonctionnalité, et chaque fonctionnalité depuis y est confrontée.',
    value1Title: 'Un enfant n’est pas un suspect',
    value1Text:
      'Les règles sont visibles sur l’appareil auquel elles s’appliquent. L’enfant voit ce qui est activé et le temps qu’il lui reste, peut en demander plus et peut déclencher un SOS à tout moment. Un contrôle qui doit rester secret n’est pas un contrôle dont une famille peut parler.',
    value2Title: 'Les données de votre famille ne sont pas à vendre',
    value2Text:
      'Jamais de publicité. Rien concernant un enfant n’est utilisé à des fins publicitaires ni revendu. Vous pouvez demander la suppression de votre compte familial et de tout ce qu’il contient à tout moment — depuis l’application, ou par e-mail comme l’explique ce site — et tout disparaît 14 jours plus tard.',
    value3Title: 'Nous disons ce que nous ne pouvons pas faire',
    value3Text:
      'Chaque plateforme limite ce qu’une application a le droit d’imposer. Là où KidGate fait au mieux — fermer une appli bloquée sur un ordinateur plutôt qu’empêcher son lancement — l’écran le dit, au lieu d’afficher une coche verte.',
    value4Title: 'Une famille, une formule',
    value4Text:
      'Un seul abonnement Premium couvre tous les parents et tous les appareils des enfants. Sans lui, la Limite quotidienne, les Heures bloquées, les Applications bloquées, le Verrouillage de l’appareil et le Filtre web continuent de fonctionner sur tous les appareils enfants, et le SOS vous parvient toujours : les règles de sécurité essentielles ne sont jamais derrière le mur payant.',
    makeEyebrow: 'Ce que nous faisons',
    makeTitle: 'Un seul KidGate, où que soit l’écran',
    makeSub:
      'Les mêmes règles, écrites une fois, appliquées avec ce que chaque plateforme autorise.',
    make1Title: 'iPhone et iPad',
    make1Text:
      'Limite quotidienne, Heures bloquées et blocage d’applis via Temps d’écran, le framework d’Apple, ainsi que le Filtre web via une connexion privée sur l’appareil lui-même.',
    make2Title: 'Android',
    make2Text:
      'Limites, blocage d’applis, verrouillage plein écran et Filtre web, plus une alerte dès qu’une nouvelle appli apparaît.',
    make3Title: 'macOS',
    make3Text:
      'L’agent de bureau sur un Mac : le même planning et les mêmes limites, et une journée qu’un parent peut vraiment lire.',
    make4Title: 'Windows',
    make4Text:
      'Le même agent sur un PC, avec un service en arrière-plan qui le relance s’il est fermé ou arrêté.',
    make5Title: 'Android TV',
    make5Text:
      'L’écran du salon, traité comme un appareil partagé par la famille et non comme celui d’un seul enfant — avec les mêmes limites et le même planning que sur les téléphones. Une télé ne partage pas sa position et n’a pas de SOS.',
    make6Title: 'Chrome',
    make6Text:
      'Une extension de navigateur qui porte le même Filtre web à l’intérieur de Chrome, sur un ordinateur qui a déjà KidGate comme sur un ordinateur qui ne peut pas l’avoir. Elle filtre le Web dans Chrome et rien d’autre : elle ne mesure pas le temps d’écran et ne bloque pas d’applis.',
    make7Title: 'Tableau de bord parent',
    make7Text:
      'Le navigateur est le second écran du parent. Connectez-vous depuis n’importe quel ordinateur en scannant un code avec votre téléphone ; rien à installer.',
    factsEyebrow: 'KidGate aujourd’hui',
    factsTitle: 'Quatre chiffres',
    fact1Label: 'langues, de l’arabe au vietnamien',
    fact2Label: 'plateformes, plus le tableau de bord',
    fact3Label: 'publicité, jamais',
    fact4Label: 'abonnement par famille',
    contactEyebrow: 'Parlez-nous',
    contactTitle: 'Chaque message est lu par une personne',
    contactSub:
      'Une question, un bug, une fonction dont votre famille a besoin, ou une traduction qui sonne faux dans votre langue — écrivez-nous.',
    contactEmail: 'Écrivez-nous',
    contactSupport: 'Assistance et guides',
    contactPrivacy: 'Comment nous traitons les données',
  },
  promo: {
    intro: 'Toute la journée de votre enfant, l’esprit tranquille.',
    school: 'Les cours commencent. Le téléphone se verrouille tout seul.',
    apps: 'Les applis que vous bloquez ne s’ouvrent pas.',
    arrive: 'Votre enfant arrive chez Mamie : vous recevez une notification.',
    checkIn:
      'Vous prenez des nouvelles : d’un seul geste, il confirme que tout va bien.',
    sos: 'En cas de problème, un SOS vous montre où il se trouve.',
    limit: 'Fini le temps de jeu. Le téléphone se verrouille tout seul.',
    lockNow: 'À table ! Verrouillez son téléphone depuis le vôtre.',
    web: 'Bloquez les sites nocifs sur tous les appareils.',
    tv: 'La télé du salon suit les mêmes règles de la maison.',
    reward: 'Devoirs terminés : 15 minutes bonus gagnées.',
    bedtime:
      'À l’heure du coucher, le téléphone, l’ordinateur et la télé dorment aussi.',
    kid: 'Enfant',
    parent: 'Parent',
    arrivedNotice: 'Léa est arrivée chez Mamie',
    checkAsk: 'Tout va bien ?',
    checkReply: 'Je vais bien',
    sosNotice: 'Léa a envoyé un SOS',
    timeUp: 'Fini le temps de jeu pour aujourd’hui',
    lockButton: 'Verrouiller',
    task: 'Devoirs terminés',
    granted: '+15 min',
    youtubeTitle: 'KidGate — Contrôle parental pour téléphone, ordinateur et télé',
    youtubeDescription:
      'Une journée ordinaire avec KidGate, de la sonnerie de l’école jusqu’au coucher.',
  },
  setup: {
    parentTitle: 'Configurer votre téléphone',
    parentSub: 'La première étape. Quelques minutes suffisent.',
    install:
      'Trouvez « KidGate » sur l’App Store ou Google Play et installez l’application.',
    installSub: 'iPhone, iPad ou téléphone Android.',
    role: 'Ouvrez KidGate et choisissez « {{parent}} ».',
    signIn:
      'Touchez « {{signIn}} », puis connectez-vous avec Apple, Google ou une adresse e-mail.',
    signInSub: 'Avec Apple, il suffit de confirmer avec Face ID.',
    family:
      'Dans « {{tab}} », touchez « {{create}} » et donnez un nom à votre famille.',
    done: 'De votre côté, c’est terminé.',
    next: 'Prochaine étape : installer KidGate sur l’appareil de votre enfant. Choisissez la vidéo qui correspond à son appareil.',
    parentYoutubeTitle: 'Comment configurer KidGate sur votre téléphone',
    parentYoutubeDescription:
      'Installez KidGate, connectez-vous et créez votre famille : la première étape avant de connecter les appareils de votre enfant.',
    pairSub: 'Connectez-le à votre téléphone, puis activez sa protection.',
    parentPhone: 'Votre téléphone',
    openSub: 'Un code QR s’affiche. Laissez cet écran ouvert.',
    scanSub: 'Impossible de le scanner ? Choisissez « {{manual}} ».',
    protect: 'Touchez « {{turnOn}} » pour commencer avec des règles sûres.',
    protectSub: 'Vous pourrez ajuster chacune d’elles plus tard.',
    tapAllow: 'Touchez « {{allow}} ».',
    extras: 'Enfin, autorisez l’appareil photo et le micro.',
    extrasSub:
      'Facultatif : votre enfant pourra alors joindre une photo ou un son à un SOS.',
    pairNext: 'Prochaine étape : définir les règles depuis votre téléphone.',
    iosTitle: 'Configurer l’iPhone de votre enfant',
    childPhone: 'iPhone de l’enfant',
    iosOpen:
      'Sur l’iPhone de votre enfant, ouvrez KidGate et choisissez « {{child}} ».',
    iosScan: 'Sur votre téléphone, touchez « {{add}} » et scannez le code QR.',
    iosConfirm:
      'Sur l’iPhone de votre enfant, vérifiez qu’il s’agit bien de vous, puis touchez « {{yes}} ».',
    iosPin: 'Créez votre « {{pin}} » (6 chiffres).',
    iosPinSub:
      'L’iPhone de votre enfant le demande avant toute modification des Applications bloquées.',
    iosAssign:
      'Choisissez qui utilise cet iPhone, ou ajoutez votre enfant par son prénom.',
    iosScreenTime:
      'Sur l’iPhone de votre enfant, touchez « {{allow}} », puis autorisez l’accès à Temps d’écran.',
    iosScreenTimeSub: 'Apple demande Face ID ou le code de cet iPhone.',
    iosNotify:
      'Touchez « {{settings}} », activez {{notifications}}, puis revenez dans KidGate.',
    iosRefresh: 'Touchez « {{settings}} » et activez « {{refresh}} ».',
    iosRefreshSub:
      'Facultatif : KidGate continue ainsi de fonctionner en arrière-plan.',
    iosBlocked: 'Touchez « {{strengthen}} », puis configurez « {{blocked}} ».',
    iosBlockedSub:
      'Vous touchez « {{unlock}} », saisissez votre code PIN, puis choisissez les applis.',
    iosDone: 'L’iPhone de votre enfant est protégé.',
    iosYoutubeTitle: 'Comment configurer KidGate sur l’iPhone de votre enfant',
    iosYoutubeDescription:
      'Connectez l’iPhone de votre enfant à votre téléphone avec un code QR, puis activez Temps d’écran et les autres autorisations nécessaires à KidGate, étape par étape.',
    androidTitle: 'Configurer le téléphone Android de votre enfant',
    childAndroid: 'Android de l’enfant',
    androidOpen:
      'Sur le téléphone de votre enfant, ouvrez KidGate et choisissez « {{child}} ».',
    androidScan: 'Sur votre téléphone, scannez le code QR avec KidGate.',
    androidConfirm:
      'Sur le téléphone de votre enfant, vérifiez qu’il s’agit bien de vous, puis touchez « {{yes}} ».',
    androidAssign:
      'Choisissez qui utilise ce téléphone, ou ajoutez votre enfant par son prénom.',
    androidUsage:
      'Sur le téléphone de votre enfant, touchez « {{open}} » et activez l’accès aux données d’utilisation pour KidGate.',
    androidBack: 'Balayez ensuite pour revenir à KidGate.',
    androidAccessibility:
      'Touchez « {{agree}} », puis activez KidGate sur la page Accessibilité.',
    androidOverlay:
      'Touchez « {{settings}} » et autorisez « {{overlay}} » pour KidGate.',
    androidNotify: 'Touchez « {{allow}} », puis autorisez les notifications.',
    androidWebFilter: 'Touchez « {{enable}} » et acceptez la demande de connexion.',
    androidWebFilterSub:
      'Le {{filter}} de KidGate fonctionne sur le téléphone sous forme de VPN.',
    androidBattery:
      'Touchez « {{settings}} », puis autorisez KidGate à toujours s’exécuter en arrière-plan.',
    androidStrengthen: 'Touchez « {{strengthen}} », puis activez « {{uninstall}} ».',
    androidMessages:
      'Pour « {{alerts}} », touchez « {{grant}} », puis activez KidGate.',
    androidMessagesSub:
      'KidGate analyse les messages reçus pour y repérer des mots d’alerte, directement sur le téléphone.',
    androidDone: 'Le téléphone de votre enfant est protégé.',
    androidYoutubeTitle:
      'Comment configurer KidGate sur le téléphone Android de votre enfant',
    androidYoutubeDescription:
      'Connectez le téléphone Android de votre enfant à votre téléphone avec un code QR, puis activez les autorisations nécessaires à KidGate, étape par étape.',
    macTitle: 'Configurer le Mac de votre enfant',
    childMac: 'Mac de l’enfant',
    macDownload:
      'Sur le Mac de votre enfant, téléchargez KidGate pour macOS sur kidgate.app.',
    macInstall: 'Ouvrez le programme d’installation téléchargé et suivez les étapes.',
    macPasswordSub: 'macOS demande le mot de passe de ce Mac.',
    macOpen: 'KidGate s’ouvre et affiche un code QR.',
    macOpenSub: 'Laissez cette fenêtre ouverte.',
    macScan:
      'Sur votre téléphone, touchez le bouton de scan dans KidGate, puis scannez le code QR.',
    macConfirm:
      'Sur le Mac, vérifiez qu’il s’agit bien de vous, puis cliquez sur « {{yes}} ».',
    macAssign: 'Choisissez qui utilise ce Mac, ou ajoutez votre enfant par son prénom.',
    macFilter:
      'Sur le Mac, cliquez sur « {{open}} », puis activez KidGate dans Extensions réseau.',
    macAllow:
      'Quand macOS demande si KidGate peut filtrer le contenu du réseau, cliquez sur « Autoriser ».',
    macAllowSub: 'Le {{filter}} de KidGate s’active alors.',
    macDone: 'Le Mac de votre enfant est protégé.',
    macYoutubeTitle: 'Comment configurer KidGate sur le Mac de votre enfant',
    macYoutubeDescription:
      'Installez KidGate sur le Mac de votre enfant, connectez-le à votre téléphone avec un code QR, puis activez le Filtre web dans Réglages Système.',
  },
};
