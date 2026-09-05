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
      "KidGate aide les parents à gérer le temps d’écran, bloquer des applis, filtrer le web et rester en contact — sans priver l'enfant de sa liberté.",
  },

  common: {
    comingSoon: 'Bientôt disponible',
    loading: 'Chargement…',
    signOut: 'Se déconnecter',
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
    about: 'À propos',
    support: 'Assistance',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    dashboard: 'Tableau de bord',
  },

  footer: {
    blurb:
      "Un contrôle parental qui aide les familles à s'entendre sur le temps d’écran plutôt qu'à se disputer à ce sujet.",
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
    madeFor: 'Conçu pour les familles sur iPhone, Android, Mac et Windows.',
  },

  legalNote:
    "Cette page n'existe qu'en anglais, et c'est le texte anglais qui fait foi. Écrivez à [support@kidgate.app](mailto:support@kidgate.app) si vous avez besoin d'aide pour comprendre un passage.",

  store: {
    appleAria: "Télécharger KidGate sur l'App Store",
    appleSmall: 'Télécharger dans',
    appleName: "l'App Store",
    googleAria: 'Obtenir KidGate sur Google Play',
    googleSmall: 'Disponible sur',
    googleName: 'Google Play',
  },

  home: {
    heroBadge: 'Le contrôle parental, comme il faut',
    heroTitle: 'Protégez vos enfants',
    heroTitleAccent: 'sans leur retirer leur liberté.',
    heroLede:
      "KidGate donne aux parents un contrôle calme et clair sur le temps d’écran, les applis et la sécurité — pendant que l'enfant garde un téléphone qui reste le sien.",
    heroCheck1: 'Temps d’écran',
    heroCheck2: "Blocage d'applis",
    heroCheck3: 'Filtrage web',
    heroCheck4: 'Localisation',
    heroCheck5: 'Tableau de bord familial',

    phoneDailyLimit: 'Limite quotidienne',
    phoneDailyLimitValue: '1 h 24 min utilisées sur 3 h',
    phoneBlockedHours: 'Heures bloquées',
    phoneScheduleOn: 'Planning actif',
    phoneLocation: 'Localisation',
    phoneLocationValue: "À l'école · il y a 5 min",
    phoneCheckIn: 'Check-in OK',

    trust1Title: 'Jamais de publicité',
    trust1Text: 'Les données des enfants ne servent jamais à la publicité',
    trust2Title: 'Suppression à tout moment',
    trust2Text: 'Effacez votre compte familial et toutes les données sur demande',
    trust3Title: 'Téléphone et ordinateur',
    trust3Text: 'iPhone, Android, Mac et Windows sur un seul compte famille',
    trust4Title: 'Un forfait par famille',
    trust4Text: 'Tous les appareils parents et enfants, un seul abonnement',

    featuresEyebrow: 'Fonctionnalités',
    featuresTitle: 'Tout ce dont un parent a besoin',
    featuresSub:
      "Des limites quotidiennes aux alertes d'urgence — une appli pour le bien-être numérique de toute la famille.",
    feature1Title: 'Temps d’écran et limites quotidiennes',
    feature1Text:
      "Fixez un plafond quotidien et des heures bloquées pour l'école et le coucher. L'appareil se verrouille tout seul quand le temps est écoulé.",
    feature2Title: "Blocage d'applis",
    feature2Text:
      'Choisissez exactement les applis que votre enfant peut ouvrir, protégé par votre code parent, et activez le blocage à distance.',
    feature3Title: 'Limites par appli',
    feature3Text:
      "Plafonnez chaque appli séparément, en plus de la limite quotidienne : « une demi-heure de TikTok » sans l'interdire pour autant.",
    feature4Title: 'Filtrage web et historique',
    feature4Text:
      "Refusez les sites pour adultes et de jeux d'argent, puis voyez quels sites le téléphone a réellement consultés et lesquels ont été bloqués.",
    feature5Title: 'Localisation en direct et lieux',
    feature5Text:
      "Consultez la dernière position de votre enfant, revoyez l'historique et soyez prévenu quand il arrive dans un lieu enregistré ou le quitte.",
    feature6Title: 'Check-in et SOS',
    feature6Text:
      "Demandez à votre enfant de confirmer qu'il va bien, et recevez un SOS immédiat avec position et photo en cas d'urgence.",
    feature7Title: "Alertes de protection et d'applis",
    feature7Text:
      "Sachez à l'instant où une autorisation importante est désactivée — et, sur Android, quand une appli est installée ou supprimée.",
    feature8Title: 'Tâches à récompense et temps en plus',
    feature8Text:
      'Les enfants gagnent des minutes bonus en accomplissant des tâches, ou demandent du temps en plus. Les deux arrivent sur votre téléphone pour validation.',

    feature9Title: 'Verrouillage de l’appareil',
    feature9Text:
      'Verrouillez l’appareil tout de suite et libérez-le quand vous le décidez — le dîner, les devoirs, ou une règle ignorée.',
    feature10Title: 'Rapport hebdomadaire',
    feature10Text:
      'Chaque lundi : temps d’écran, moyenne quotidienne, ce qui a été bloqué, et la comparaison avec la semaine précédente.',
    feature11Title: 'Tableau des étoiles',
    feature11Text:
      'Les enfants voient combien d’étoiles chacun a gagnées cette semaine. Il repart chaque lundi, et c’est vous qui décidez s’il est activé.',
    feature12Title: 'Fil d’activité',
    feature12Text:
      'Tout ce qui s’est passé, dans l’ordre — un appareil déverrouillé, un site filtré, une tâche terminée, une alerte envoyée.',
    platformsTitle: 'Un seul KidGate, où que soit l’écran',
    platformsSub:
      'Les mêmes règles et le même compte famille sur le téléphone et sur l’ordinateur. L’application de bureau s’installe depuis ce site, pas depuis un magasin d’applications.',

    showcaseEyebrow: 'Tableau de bord parent',
    showcaseTitle: 'Toute la famille sur un seul écran',
    showcaseSub:
      "Temps d’écran, tentatives bloquées, localisation et tout ce qui demande votre attention — sur votre téléphone ou dans n'importe quel navigateur.",
    showcaseTile1: "Temps d’écran aujourd'hui",
    showcaseTile2: 'Tentatives bloquées',
    showcaseTile3: 'Demande attention',
    showcaseCaption1: "Consultez les rapports depuis n'importe quel navigateur",
    showcaseCaption2: 'Les changements sont validés depuis votre téléphone',

    setupEyebrow: 'Installation',
    setupTitle: 'Opérationnel en quelques minutes',
    setupSub:
      "Aucune compétence technique nécessaire — l'appli vous guide à chaque étape.",
    step1Title: 'Configurez votre appareil',
    step1Text:
      'Installez KidGate, choisissez « Ceci est un appareil parent » et connectez-vous avec Google, Apple ou une adresse e-mail.',
    step2Title: "Associez l'appareil de votre enfant",
    step2Text:
      "Installez KidGate sur le téléphone de votre enfant et connectez-le en scannant un QR code. Moins d'une minute.",
    step3Title: 'Définissez vos règles',
    step3Text:
      'Choisissez une limite quotidienne, bloquez des applis et des horaires, activez la localisation — le tout depuis votre propre téléphone.',

    whyEyebrow: 'Pourquoi KidGate',
    whyTitle: 'Conçu pour la confiance, pas pour la surveillance',
    whySub: 'Pensé pour garder le dialogue ouvert entre parent et enfant.',
    why1Title: 'Un forfait, toute la famille',
    why1Text:
      'Un seul abonnement couvre tous les appareils parents et enfants. Seul le titulaire de la famille paie.',
    why2Title: 'Pensé pour la coparentalité',
    why2Text:
      "Invitez un second parent à gérer les mêmes enfants, avec l'accès que le titulaire approuve.",
    why3Title: "La confidentialité d'abord",
    why3Text:
      "Nous ne vendons jamais de données personnelles et n'utilisons jamais les données des enfants à des fins publicitaires. Supprimez tout quand vous voulez.",
    why4Title: 'Honnêtes sur les limites',
    why4Text:
      "Nous vous disons ce que chaque plateforme peut et ne peut pas appliquer, au lieu de promettre un contrôle qui n'existe pas.",

    onlyEyebrow: 'Seulement chez KidGate',
    onlyTitle: 'Ce que vous ne trouverez pas ailleurs',
    onlySub:
      'Six points vérifiés face aux applis auxquelles les parents nous comparent. Chacun précise la plateforme sur laquelle il est vrai.',
    only1Title: 'La télé du salon aussi',
    only1Text:
      'Android TV reçoit les mêmes heures bloquées, le même blocage d’applis, les mêmes limites par appli et le même filtrage web qu’un téléphone. La plupart des contrôles parentaux s’arrêtent au téléphone.',
    only2Title: 'Des alertes de messages qui restent sur le téléphone',
    only2Text:
      'Sur Android, les messages sont comparés sur l’appareil même à des listes de mots-clés en 14 langues. Seul le mot détecté est conservé — la conversation elle-même n’est jamais enregistrée.',
    only3Title: 'Toutes les applis, pas une liste d’applis',
    only3Text:
      'Sur Android, les alertes viennent des notifications et de ce que votre enfant tape dans n’importe quelle appli — Zalo, LINE, KakaoTalk, le chat d’un jeu — et non d’une liste fixe d’applis prises en charge.',
    only4Title: 'Une issue pour l’enfant',
    only4Text:
      'Cinq secondes sur SOS et vous êtes prévenu aussitôt, avec la position — sur Android et Mac, l’appareil est en plus déverrouillé un moment. Un enfant qui peut toujours appeler à l’aide n’a aucune raison de lutter contre l’appli.',
    only5Title: 'Des règles qui tiennent sans internet',
    only5Text:
      'Les heures bloquées et la limite quotidienne sont appliquées sur l’appareil lui-même : débrancher la box ne change rien. La télé accepte même votre PIN parental sans aucune connexion.',
    only6Title: 'Du crédit quand la semaine le mérite',
    only6Text:
      'Chaque rapport hebdomadaire garde une place pour ce qui s’est bien passé — une limite respectée, plus de nuit tardive, une tâche terminée — et ne le dit que lorsque la semaine a vraiment été mesurée.',

    faqEyebrow: 'FAQ',
    faqTitle: 'Les premières questions des parents',
    faqSub: 'Des réponses rapides avant de télécharger.',
    faq1Q: 'Existe-t-il un essai gratuit ?',
    faq1A:
      'Oui. L’essai commence dès que vos premiers appareils parent et enfant sont connectés, et inclut toutes les fonctions Premium. À la fin, toutes les règles que vous avez définies — Limite quotidienne, Heures bloquées, Applications bloquées, Filtre web et position — continuent de fonctionner gratuitement sur un appareil enfant.',
    faq2Q: "Combien d'appareils puis-je gérer ?",
    faq2A:
      "Un abonnement couvre toute votre famille — plusieurs appareils d'enfants et plusieurs parents sur le même forfait.",
    faq3Q:
      'Mon enfant peut-il désinstaller ou contourner KidGate ? À la fin, la Limite quotidienne, les Heures bloquées et la position continuent gratuitement sur un appareil enfant.',
    faq3A:
      "Les réglages sensibles sont protégés par votre code parent, et les alertes de protection vous préviennent aussitôt si une autorisation clé est désactivée sur l'appareil de l'enfant.",
    faq4Q: 'Puis-je tout gérer depuis un ordinateur ?',
    faq4A:
      'L’essai commence dès que vos premiers appareils parent et enfant sont connectés, et donne accès à toutes les fonctions. Retirer un appareil enfant ne le remet pas à zéro. À la fin, toutes les règles continuent de fonctionner gratuitement sur un appareil enfant ; Premium conserve l’activité en direct, l’historique, les rapports hebdomadaires et tous les appareils.',
    faqMore: "D'autres questions ? Voir l'assistance",

    ctaTitle: "Commencez à protéger votre famille dès aujourd'hui",
    ctaSub: 'Essai gratuit avec accès complet. Aucune carte bancaire pour démarrer.',
    ctaNote: "Annulez à tout moment depuis l'App Store ou Google Play.",
  },

  login: {
    title: 'Connexion parent',
    sub: "Utilisez le compte que vous avez créé dans l'appli KidGate. Vous verrez ici la même famille, les mêmes appareils et les mêmes réglages.",
    notConfiguredTitle: "Firebase n'est pas configuré sur ce déploiement.",
    notConfiguredBody:
      "Définissez les variables d'environnement VITE_FIREBASE_* pour activer la connexion.",
    qrWhy:
      'Scanner avec votre téléphone vous connecte et déverrouille les commandes en une seule étape. Les méthodes ci-dessous vous connectent pour consulter ; déverrouiller les commandes demande ensuite votre code PIN parent.',
    orViewOnly: 'ou connectez-vous autrement',
    google: 'Continuer avec Google',
    googleBusy: 'Ouverture de Google…',
    apple: 'Continuer avec Apple',
    appleBusy: "Ouverture d'Apple…",
    orEmail: 'ou utilisez votre e-mail',
    email: 'E-mail',
    emailPlaceholder: 'vous@exemple.com',
    password: 'Mot de passe',
    submit: 'Se connecter',
    submitBusy: 'Connexion…',
    forgot: 'Mot de passe oublié ?',
    resetNeedsEmail:
      "Saisissez d'abord votre adresse e-mail, puis choisissez « Mot de passe oublié ».",
    resetSent: 'E-mail de réinitialisation envoyé à {{email}}.',
    foot: "Les comptes KidGate se créent dans l'appli mobile — le tableau de bord web se connecte à une famille existante. Nouveau ici ? Installez d'abord l'appli et associez un appareil enfant.",
  },

  qr: {
    start: "Se connecter avec l'appli KidGate",
    generating: 'Génération du code…',
    step1: 'Ouvrez KidGate sur votre téléphone.',
    step2: 'Allez dans *Réglages → Se connecter sur le web*.',
    step3: 'Scannez ce code, puis validez.',
    waiting: 'En attente de validation · expire dans {{time}}',
    signingIn: 'Validé. Connexion…',
    expired: 'Ce code a expiré.',
    failed: "La connexion n'a pas abouti.",
    newCode: 'Afficher un nouveau code',
    tryAgain: 'Réessayer',
  },

  authError: {
    generic: "Une erreur s'est produite. Réessayez.",
    invalidEmail: 'Cette adresse e-mail ne semble pas correcte.',
    userDisabled: 'Ce compte a été désactivé.',
    userNotFound: 'Aucun compte KidGate ne utilise cette adresse e-mail.',
    wrongPassword: 'E-mail ou mot de passe incorrect.',
    tooManyRequests: 'Trop de tentatives. Attendez quelques minutes et réessayez.',
    popupClosed: 'La fenêtre de connexion a été fermée avant la fin.',
    popupCancelled: 'La connexion a été annulée.',
    popupBlocked:
      'Votre navigateur a bloqué la fenêtre de connexion. Autorisez les fenêtres pop-up pour ce site et réessayez.',
    accountExists:
      "Cette adresse est déjà enregistrée avec une autre méthode de connexion. Utilisez celle que vous avez configurée dans l'appli.",
    operationNotAllowed:
      "Cette méthode de connexion n'est pas encore activée pour ce projet.",
    unauthorizedDomain:
      "Ce domaine n'est pas autorisé dans les réglages de Firebase Authentication.",
    invalidCustomToken:
      "Ce lien de connexion n'est plus valide. Affichez un nouveau QR code.",
    webRejected: 'La demande a été refusée sur le téléphone.',
    webExpired: 'Le code a expiré. Générez-en un nouveau.',
    noFunctionsUrl:
      "L'URL des Cloud Functions n'est pas configurée (VITE_FIREBASE_FUNCTIONS_URL).",
    sessionExpired: 'Votre session a expiré. Reconnectez-vous.',
  },

  live: {
    checkingSession: 'Vérification de votre session…',
    loadingFamily: 'Chargement de votre famille…',
    loadFailedTitle: 'Impossible de charger votre famille',
    noAccess:
      "Ce compte n'a accès à aucune famille KidGate. Connectez-vous avec le compte parent que vous utilisez dans l'appli.",
  },

  time: {
    never: 'jamais',
    justNow: "à l'instant",
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
    backgroundAppRefresh: 'Actualisation en arrière-plan',
    overlay: 'Superposition aux autres apps',
    batteryOptimization: 'Batterie sans restriction',
    exactAlarm: 'Alarmes exactes',
    accessibility: 'Accessibilité',
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
    bypass: 'Contournement de filtre et VPN',
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
    tabApps: 'Applis et web',
    tabSafety: 'Sécurité',
    tabControls: 'Commandes',
    tabReport: 'Rapport hebdomadaire',
    tabReportNew: 'Nouveau rapport hebdomadaire',

    children: 'Enfants',
    noChildren: "Aucun appareil enfant associé pour l'instant.",
    unassignedDevices: 'Non attribué',
    manage: 'Gérer',
    parents_one: '{{count}} parent',
    parents_other: '{{count}} parents',
    devices_one: '{{count}} appareil enfant',
    devices_other: '{{count}} appareils enfants',
    planManageOnPhone:
      'Les forfaits s’achètent et se modifient dans l’application KidGate sur votre téléphone.',
    fallbackFamily: 'Votre famille',
    fallbackDevice: 'Appareil enfant',

    statusOnline: 'En ligne',
    statusOffline: 'Hors ligne',
    statusLocked: 'Verrouillé',
    statusLockSent: 'Verrouillage envoyé',
    statusLockNotApplied: 'Verrouillage non appliqué',
    statusPaused: 'En pause',

    stateAllowed: 'Autorisé',
    stateDenied: 'Désactivé',
    stateNotDetermined: 'Pas encore demandé',
    stateRestricted: 'Restreint',
    stateUnavailable: 'Indisponible',
    stateUnknown: 'Inconnu',

    lastActive: 'Dernière activité {{when}}',
    appVersion: "Version de l'app",
    appVersionUpdate: '{{running}} · {{latest}} disponible',
    appVersionRestart: "{{running}} · redémarrez l'app pour terminer",
    buildOutdated: 'Mise à jour disponible',
    checkIn: 'Check-in',
    sending: 'Envoi…',
    lockDevice: "Verrouiller l'appareil",
    unlock: 'Déverrouiller',
    working: 'En cours…',
    save: 'Enregistrer',

    unlockTitle: 'Les modifications sont verrouillées.',
    unlockBody:
      'La consultation fonctionne tout de suite. Pour verrouiller un appareil, changer les limites ou approuver des demandes, déverrouillez ce navigateur avec votre code PIN parent — ou validez-le en scannant le QR code avec l’application KidGate. Les demandes de nouvelles fonctionnent dans les deux cas.',
    unlockCta: 'Déverrouiller les modifications',
    unlockToChange: 'Déverrouillez d’abord les modifications',
    pinTitle: 'Saisissez votre code PIN parent',
    pinBody:
      'Les mêmes six chiffres que dans l’application. Ce navigateur reste déverrouillé 7 jours.',
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

    noDeviceTitle: "Pas encore d'appareil enfant",
    noDeviceBody:
      "Ouvrez KidGate sur votre téléphone, allez dans *Famille → + → Connecter un appareil enfant* et scannez le QR code affiché sur l'appareil de votre enfant. Il apparaîtra ici quelques secondes après l'association.",

    toastCheckIn: '{{name}} recevra une demande de check-in.',
    toastTimeApproved: 'Temps supplémentaire accordé.',
    toastCheckInResent: 'Check-in renvoyé.',

    tileScreenToday: "Temps d’écran aujourd'hui",
    tileSameAsAverage: 'Identique à la moyenne sur 7 jours',
    tileDeltaUp: '↑ {{percent}} % par rapport à la moyenne sur 7 jours',
    tileDeltaDown: '↓ {{percent}} % par rapport à la moyenne sur 7 jours',
    tileBlocked: 'Tentatives bloquées',
    tileBlockedMeta: "Applis stoppées depuis l'installation",
    tileSites: 'Sites filtrés',
    tileCategoriesHit_one: '{{count}} catégorie touchée',
    tileCategoriesHit_other: '{{count}} catégories touchées',
    tileNothingBlocked: 'Rien de bloqué pour le moment',
    tileAttention: 'Demande attention',
    tileOpenItems: 'Points ouverts ci-dessous',
    tileAllClear: 'Tout va bien',

    cardScreenTime: 'Temps d’écran',
    cardScreenTimeSub: '14 derniers jours, face à la limite quotidienne',
    usageSyncNote:
      'Le temps d’écran peut mettre quelques minutes à apparaître sur cet écran — plus longtemps si l’appareil n’a pas de connexion Internet ou s’est fermé de façon inattendue.',
    usageSyncNoteTv:
      'Cette télévision ne se connecte que périodiquement, le temps d’écran peut donc mettre jusqu’à 30 minutes à apparaître sur cet écran — plus longtemps sans connexion Internet.',
    cardRecent: 'Activité récente',
    cardRecentSub: 'Le plus récent en premier',
    cardRecentEmpty:
      "Rien d'enregistré pour l'instant. Les verrouillages, applis bloquées, alertes de lieu et synchronisations du temps d’écran de cet appareil apparaîtront ici.",
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
    attnLimitReachedMeta: "{{used}} utilisées aujourd'hui",
    attnBatteryLow: 'Batterie faible ({{level}} %)',
    attnBatteryLowMeta:
      "Les mises à jour de position peuvent s'arrêter si le téléphone s'éteint",
    attnReview: 'Examiner',
    attnResend: 'Renvoyer',
    attnHowToFix: 'Comment corriger',
    attnUnlock: 'Déverrouiller',
    attnAppOnly: "Disponible dans l'appli KidGate",

    todayTitle: "Aujourd'hui",
    todaySub: 'Face à la limite quotidienne et au bonus gagné',
    used: 'Utilisé',
    left: 'Restant',
    dailyLimit: 'Limite quotidienne',
    bonusToday: 'Bonus du jour',
    off: 'Désactivé',
    on: 'Activé',
    topAppsTitle: "Applis les plus utilisées aujourd'hui",
    topAppsSub: 'Les plafonds par appli sont indiqués par un repère',
    topAppsFreeHint:
      'Top 3 du jour : la liste complète et l’historique sont inclus dans Premium.',
    trendTitle: 'Évolution du temps d’écran',
    trendSub: '{{count}} derniers jours',
    rangeDays: '{{count}} j',
    blockedHoursTitle: 'Heures bloquées',
    blockedHoursSub_one:
      "{{count}} plage horaire · l'appareil reste verrouillé dans les blocs ombrés",
    blockedHoursSub_other:
      "{{count}} plages horaires · l'appareil reste verrouillé dans les blocs ombrés",
    scheduleOff: 'Le planning est désactivé',
    schedMax: 'Un appareil ne peut pas dépasser {{max}} plages.',

    appUsageTitle: "Usage des applis aujourd'hui",
    appUsageSub: 'Temps passé par appli',
    topAppsOther: 'Autres applis',
    underAMinute: 'Moins d’une minute',
    appUsageEmpty: 'Aucune utilisation d’applis signalée pour l’instant.',
    appBlockingTitle: "Blocage d'applis",
    appBlockingSub: "Choisi sur l'appareil de l'enfant avec le code parent",
    blockingLabel: 'Blocage',
    appsBlocked: 'Applis bloquées',
    categories: 'Catégories',
    perAppHint:
      "Les plafonds par appli sont indépendants de la liste de blocage — « 30 minutes de TikTok » n'est pas la même décision que « pas de TikTok ».",
    limitsMax: 'Un appareil ne peut pas dépasser {{max}} applis limitées.',
    perDay: '{{value}}/jour',
    webActivityTitle: 'Activité web',
    webActivitySub: 'Domaines les plus visités, 30 derniers jours',
    webActivityEmpty: 'Aucune activité web pour l’instant.',
    inventoryTitle: 'Applications installées',
    inventorySub: 'Tout sur cet appareil, pas seulement ce qui a changé',
    inventoryEmpty: 'Cet appareil n’a pas encore publié sa liste d’applications.',
    inventoryStale:
      'Cette liste n’est plus à jour. Elle se rafraîchira à la prochaine connexion de l’appareil.',
    inventoryFirstScan:
      'Première analyse : KidGate ne peut pas dire quand chacune est arrivée.',
    inventoryFlagged: 'À regarder de plus près',
    inventoryFlaggedLabel: 'À examiner',
    inventoryOtherLabel: 'Identifiées',
    inventoryUnknownLabel: 'Non identifiées',
    inventoryIncomplete:
      'Une application sans icône sur l’écran d’accueil peut ne pas apparaître ici.',
    inventoryPending: 'En attente de votre validation',
    pendingInstallBlocked: 'Bloquée tant que vous ne l’autorisez pas',
    installAllow: 'Autoriser',
    pendingInstallsTitle: 'Nouvelles applis en attente de validation',
    pendingInstallsSub:
      'Installées après l’activation de la validation, bloquées par l’appareil de lui-même',
    pendingInstallsEmpty: 'Aucune nouvelle appli en attente de validation.',
    toastInstallAllowed: 'Appli autorisée',
    rowInstallApproval: 'Valider les nouvelles applis',
    rowInstallApprovalDesc: '{{count}} applications en attente de validation',
    rowInstallApprovalDesc_one: '{{count}} application en attente de validation',
    rowInstallApprovalDescIos:
      'Masque l’App Store — Apple n’autorise aucune validation appli par appli',
    webActivitySyncNote:
      'L’activité web peut mettre quelques minutes à apparaître sur cet écran — plus longtemps si l’appareil n’a pas de connexion Internet ou s’est fermé de façon inattendue.',
    webActivitySyncNoteTv:
      'Cette télévision ne se connecte que périodiquement, l’activité web peut donc mettre jusqu’à 30 minutes à apparaître sur cet écran — plus longtemps sans connexion Internet.',
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
    nothingBlockedYet: "Rien n'a encore été bloqué.",
    rollupNoteAi:
      'Certains types ont été déduits du nom du site au lieu de correspondre à un site connu — quelques-uns peuvent être faux.',
    webBackgroundNote:
      'Quand personne n’utilise l’appareil, certaines applications accèdent quand même à Internet en arrière-plan : mises à jour, recommandations et synchronisations tournent seules.',
    filterHintIos:
      "Sur iOS, le filtre utilise le contrôle des contenus pour adultes d'Apple — le blocage par catégorie n'existe que sur Android.",
    filterHintAndroid:
      "Les catégories sont appliquées par le filtre DNS de l'appareil.",
    filterHintMacos:
      'Les catégories sont appliquées par le filtre de contenu KidGate sur le Mac.',

    locationTitle: 'Localisation',
    locationSharingOff: 'Le partage est désactivé',
    locationSyncNote:
      'La localisation peut mettre quelques minutes à se mettre à jour — plus longtemps si l’appareil n’a pas de connexion Internet ou s’est fermé de façon inattendue.',
    locationUpdated: 'Mis à jour {{when}}',
    locationWaiting: 'En attente de la première mise à jour',
    lastKnownLocation: 'Dernière position connue',
    nearPlace: 'Près de {{place}}',
    noPlaces:
      "Aucun lieu enregistré. Ajoutez-en un dans l'appli pour être prévenu quand votre enfant arrive ou repart.",
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
    sosSub: "Signaux d'urgence envoyés par l'appareil de l'enfant",
    sosEmpty:
      'Aucune alerte SOS. Testez-la une fois ensemble pour que vous sachiez tous les deux comment ça marche.',
    sosAcknowledged: 'prise en compte',
    sosActive: 'active',

    checkInsTitle: 'Check-ins',
    checkInsSub: "Demandez à votre enfant de confirmer qu'il va bien",
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
    protectionAlertsSub_one: "{{count}} événement depuis l'installation",
    protectionAlertsSub_other: "{{count}} événements depuis l'installation",
    protectionAlertsHint:
      "Une alerte de protection signifie que KidGate applique moins que ce que vous avez défini. Rétablissez l'autorisation sur l'appareil de l'enfant pour l'effacer.",

    limitCardTitle: 'Limite quotidienne',
    limitCardSub: 'Plafonnez les minutes disponibles chaque jour',
    limitAria: 'Minutes de la limite quotidienne',
    limitScaleMin: '30 min',
    limitScaleMax: '8 h',
    limitHint:
      "Les minutes bonus des tâches et des demandes de temps validées s'ajoutent par-dessus, pour ce jour-là uniquement.",
    limitShared: 'Partagé entre tous les appareils',
    limitSharedSpent: '{{used}} sur {{limit}} utilisés aujourd’hui',
    limitSharedHint:
      'C’est la journée entière de cet enfant, pas une limite propre à cet appareil : chaque appareil reçoit ce que les autres n’ont pas utilisé. Modifiable dans l’application KidGate.',
    whatsOnTitle: 'Ce qui est activé',
    whatsOnSub: "Les changements se synchronisent avec l'appareil de l'enfant",
    rowBlockedHours: 'Heures bloquées',
    rowBlockedHoursDesc_one: '{{count}} plage horaire · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} plages horaires · {{list}}',
    rowAppBlocking: "Blocage d'applis",
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
    rowSearchMonitoringDesc:
      'Navigateurs et YouTube. Seul le mot signalé est rapporté, jamais la recherche elle-même.',
    rowSafeSearch: 'Imposer SafeSearch',
    rowSafeSearchDesc:
      'Verrouille Google SafeSearch, le mode restreint de YouTube, Bing et DuckDuckGo sur leur réglage strict. Android, Android TV et Chrome.',

    webFilterCatsTitle: 'Catégories du filtre web',
    webFilterCatsSub: 'Types de contenu bloqués',
    dnsHint:
      "Les résolveurs DNS chiffrés sont toujours refusés tant que le filtre tourne — les laisser accessibles, c'est précisément ce qui permet à un navigateur de contourner toutes les autres catégories.",
    starChartTitle: 'Tableau des étoiles',
    starChartSub: 'Étoiles gagnées cette semaine, par enfant',
    starChartEmpty:
      'Ajoutez un deuxième enfant dans l’application pour lancer le tableau des étoiles.',
    starChartStars: '{{count}} étoiles',
    familyScreenTimeTitle: 'Temps d’écran de la famille',
    familyScreenTimeSub: 'Le moins de temps d’écran d’abord, cette semaine',
    familyScreenTimeEmpty:
      'Personne n’a encore rien remonté cette semaine. Les lignes apparaissent quand les téléphones remontent.',
    familyScreenTimeParent: 'Parent',
    familyScreenTimeDays: '{{count}} jours remontés',
    rewardTasksTitle: 'Tâches à récompense',
    rewardTasksSub: 'Gagnez des minutes en accomplissant des tâches',
    rewardTaskMeta: '+{{minutes}} min · {{cadence}}',
    rewardTaskStars: 'Difficulté : {{count}} sur 3',
    rewardTaskWaiting: ' · en attente de votre validation',
    approve: 'Valider',
    siteRequestsTitle: 'Demandes de sites',
    siteRequestsSub: 'Sites que cet appareil a demandé d’autoriser',
    siteRequestAllow: 'Autoriser',
    siteRequestDeny: 'Pas maintenant',
    attnSiteRequest: '{{name}} demande à ouvrir {{domain}}',
    toastSiteAllowed: 'Site autorisé',
    timelineTitle: 'Quand l’appareil a été utilisé',
    timelineSub:
      'Aujourd’hui, de minuit à minuit. Le vert correspond au temps passé sur l’appareil.',
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
      'Cette fonction est réservée à Premium. Les offres se gèrent dans l’app KidGate sur votre téléphone.',
  },

  report: {
    title: 'Rapport hebdomadaire',
    subtitle: 'Ce que KidGate a remarqué cette semaine.',
    weekOf: 'Semaine {{week}}',
    range: '{{from}} – {{to}}',
    writtenAt: 'Écrit le {{when}}',
    triggerScheduled: 'Envoyé lundi',
    triggerManual: 'Créé par vous',
    statScreenTime: "Temps d'écran",
    statDailyAverage: 'Moyenne quotidienne',
    statBlockedApps: 'Applis bloquées',
    statBlockedWebVisits: 'Sites filtrés',
    statTasksApproved: 'Tâches terminées',
    trendUp: '{{value}} de plus que la semaine précédente',
    trendDown: '{{value}} de moins que la semaine précédente',
    trendFlat: 'À peu près comme la semaine précédente',
    trendFirstWeek: 'Première semaine mesurée',
    barThisWeek: 'Cette semaine',
    barLastWeek: 'Semaine dernière',
    highlights: 'Bon à savoir',
    sevAttention: 'Mérite un coup d’œil',
    sevNotable: 'À noter',
    sevInfo: 'Pour information',
    findingUsageUp:
      "Le temps d'écran a augmenté de {{percent}}% — {{delta}} de plus que la semaine dernière.",
    findingUsageDown:
      "Le temps d'écran a baissé de {{percent}}% — {{delta}} de moins que la semaine dernière.",
    findingUsageFlat: "Le temps d'écran est resté à {{total}}.",
    findingLateNight_one: 'Une nuit après 23 h — jusqu’à {{time}}.',
    findingLateNight_other:
      '{{count}} nuits après 23 h — la plus tardive jusqu’à {{time}}.',
    findingNewTopApp:
      '{{app}} est nouvelle cette semaine et totalise déjà {{duration}}.',
    findingAppSurge: '{{app}} progresse de {{delta}} — {{duration}} au total.',
    findingLimitHit_one: 'La limite quotidienne de {{limit}} a été atteinte un jour.',
    findingLimitHit_other:
      'La limite quotidienne de {{limit}} a été atteinte {{count}} jours.',
    findingBlockedApps:
      "{{count}} ouvertures d'applis bloquées, contre {{previous}} la semaine dernière.",
    findingBlockedWeb:
      '{{count}} sites filtrés, contre {{previous}} la semaine dernière.',
    findingQuietWeek:
      'Une semaine calme — {{total}} en tout, et rien qui ait demandé votre attention.',
    narrativeTitle: 'En une phrase',
    finePrint:
      "Les chiffres couvrent du {{from}} au {{to}}, sur tous les appareils de la famille. Le temps d'écran est ce que les appareils ont rapporté ; les minutes qu'ils n'ont pas pu mesurer ne figurent dans aucun total.",
    generate: 'Écrire le rapport de cette semaine',
    generating: 'Rédaction…',
    shareImage: 'Enregistrer en image',
    sharePdf: 'Enregistrer en PDF',
    copySummary: 'Copier le résumé',
    copied: 'Résumé copié.',
    imageSaved: 'Image enregistrée.',
    shareFailed: 'Ce navigateur ne peut pas enregistrer cela. Copiez plutôt le résumé.',
    emptyTitle: 'Pas encore de rapport',
    emptyBody:
      'Un rapport arrive chaque lundi matin. Vous pouvez écrire celui de cette semaine maintenant — il couvre les sept derniers jours.',
    noUsage:
      "Aucun temps d'écran n'a été enregistré ces deux dernières semaines, il n'y a donc rien à rapporter. Un appareil hors ligne ne rapporte rien, ce qui n'est pas la même chose qu'une semaine calme.",
    rateLimited: 'Trop de tentatives. Patientez une minute.',
    loadFailedTitle: 'Rapports non chargés',
    loadFailed: 'Impossible d’ouvrir les rapports. Rechargez la page pour réessayer.',
    retryLoad: 'Réessayer',
    failed: 'Impossible d’écrire le rapport. Réessayez dans un instant.',
    existed: 'Cette semaine avait déjà un rapport — le voici.',
    childrenTitle: 'Chaque enfant',
    childrenNote:
      'La même quinzaine, par appareil. Les pourcentages portent sur le total de la famille.',
    colChild: 'Enfant',
    colScreenTime: "Temps d'écran",
    colShare: 'Part',
    colChange: 'Vs semaine dernière',
    colLimit: 'Au-delà de la limite',
    colLateNights: 'Nuits tardives',
    colTopApp: 'La plus utilisée',
    unnamedChild: 'Appareil sans nom',
    changeUp: '+{{value}}',
    changeDown: '−{{value}}',
    changeFlat: 'à peu près pareil',
    noLimit: 'Aucune limite',
    noTopApp: '—',
    limitDays_one: '{{count}} jour',
    limitDays_other: '{{count}} jours',
    lateNightsNone: 'aucune',
    busiest: "Le plus de temps d'écran",

    historyTitle: 'Semaines précédentes',
    historyEmpty:
      'Les rapports reçus à partir de maintenant sont conservés ici pendant un an.',
  },

  support: {
    title: 'Assistance KidGate',
    updated: 'Nous sommes là pour vous aider',

    contactTitle: 'Nous contacter',
    contactEmail: '**E-mail :** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Délai de réponse :** sous 24 heures (du lundi au vendredi)',
    contactNote:
      "Lorsque vous nous écrivez, indiquez l'adresse e-mail de votre compte parent KidGate et une courte description du problème pour que nous puissions vous aider plus vite.",

    startTitle: 'Premiers pas',
    start1:
      "**1. Configurez l'appareil parent.** Installez KidGate, ouvrez l'appli et choisissez *Ceci est un appareil parent*. Connectez-vous avec Google, Apple ou une adresse e-mail, puis nommez votre famille.",
    start2:
      "**2. Définissez un code parent.** Allez dans *Réglages → Sécurité* et créez un code parent à 6 chiffres. Il est nécessaire pour modifier les réglages sensibles et choisir les applis bloquées sur l'appareil de l'enfant. Ne le partagez pas avec vos enfants.",
    start3:
      "**3. Connectez l'appareil de l'enfant.** Installez KidGate sur l'appareil de votre enfant et choisissez *Ceci est un appareil enfant*. Sur l'appareil parent, ouvrez *Famille → + → Connecter un appareil enfant*, puis scannez le QR code affiché sur l'appareil de l'enfant (ou saisissez le code à 6 caractères). Confirmez la connexion sur l'appareil de l'enfant.",
    start4:
      "**4. Accordez les autorisations sur l'appareil de l'enfant.** Ouvrez l'écran *État* sur l'appareil de l'enfant et autorisez toutes les permissions demandées par KidGate — sur Android : notifications, Accès aux données d'usage, Superposition aux autres apps, Accessibilité et batterie sans restriction ; sur iOS : *Autoriser l'utilisation des apps et des sites* (Temps d’écran). Les commandes ne fonctionneront pas complètement tant qu'elles ne sont pas actives.",
    start5:
      "**5. Configurez les commandes.** Depuis l'appareil parent, ouvrez la fiche de l'appareil de l'enfant et réglez la limite quotidienne, les heures bloquées, les applis bloquées, le filtre web et les fonctions de localisation.",
    startNote:
      "L'appli contient aussi un guide pas à pas : *Réglages → Guide d'utilisation*, qui détaille l'association des appareils, les autorisations, les commandes quotidiennes et les fonctions de sécurité.",

    faqTitle: 'Questions fréquentes',

    faq1Q: 'Puis-je gérer ma famille depuis un ordinateur ?',
    faq1A:
      "Oui. Ouvrez le [tableau de bord web](/dashboard) et connectez-vous avec le même compte que dans l'appli — Google, Apple, ou votre e-mail et mot de passe. Vous y retrouvez la même famille, les mêmes appareils, rapports et réglages. La création de comptes et l'association d'appareils se font toujours dans l'appli mobile.",

    faq2Q: "Comment associer l'appareil parent et l'appareil enfant ?",
    faq2A:
      "Sur l'appareil de l'enfant, ouvrez KidGate et choisissez *Ceci est un appareil enfant* — un QR code et un code à 6 caractères apparaissent. Sur l'appareil parent, ouvrez *Famille → + → Connecter un appareil enfant* et scannez le QR code (recommandé) ou saisissez le code à la main. Confirmez ensuite le nom du parent sur l'appareil de l'enfant. Les codes expirent — si l'association échoue, touchez *Nouveau code* sur l'appareil de l'enfant et réessayez.",

    faq3Q: 'Deux parents peuvent-ils gérer la même famille ?',
    faq3A:
      "Oui. Sur l'appareil du titulaire de la famille, ouvrez *Famille → + → Ajouter un autre appareil parent* et partagez le QR code ou le code d'invitation. L'autre parent installe KidGate, se connecte comme parent et choisit *Famille → + → Rejoindre la famille*. Le titulaire approuve ensuite la demande. Un abonnement couvre toute la famille ; seul le titulaire paie.",

    faq4Q: "Comment fonctionne l'essai gratuit ?",
    faq4A:
      'L’essai commence dès que vos premiers appareils parent et enfant sont connectés, et donne accès à toutes les fonctions. Retirer un appareil enfant ne le remet pas à zéro. À la fin, toutes les règles continuent de fonctionner gratuitement sur un appareil enfant ; Premium conserve l’activité en direct, l’historique, les rapports hebdomadaires et tous les appareils.',

    faq5Q: 'Comment annuler mon abonnement ?',
    faq5A:
      "Les abonnements sont facturés via l'App Store ou Google Play, pas directement par KidGate. Sur iOS : *Réglages → votre nom → Abonnements*. Sur Android : *Google Play → icône de profil → Paiements et abonnements → Abonnements*. L'abonnement se renouvelle automatiquement sauf annulation au moins 24 heures avant la fin de la période en cours.",

    faq6Q: 'Comment restaurer mes achats ?',
    faq6A:
      "Sur l'appareil parent, ouvrez l'écran *Forfaits* et touchez *Restaurer les achats*. Vérifiez que vous êtes connecté avec le même compte de boutique que lors de l'achat initial. Notez que seul le titulaire de la famille peut s'abonner ou restaurer des achats.",

    faq7Q: "Pourquoi les données de temps d’écran n'apparaissent-elles pas ?",
    faq7A:
      "Les données d'usage viennent de l'appareil de l'enfant. Vérifiez qu'il est en ligne, ouvrez-y KidGate et regardez l'écran *État* — chaque ligne d'autorisation doit être marquée comme autorisée (sur Android, l'accès aux données d'usage est nécessaire au suivi du temps d’écran). Les rapports peuvent mettre quelques minutes à se synchroniser.",

    faq8Q: 'Pourquoi le verrouillage ou les heures bloquées ne fonctionnent-ils pas ?',
    faq8A:
      "Sur Android, le verrouillage nécessite *Superposition aux autres apps* et l'assistant *Accessibilité* activés, ainsi qu'une batterie sans restriction. Sur Xiaomi, Samsung, Oppo, Vivo et appareils similaires, autorisez aussi le démarrage automatique et retirez KidGate de toute liste d'« applis en veille » (voir *État → Garder KidGate actif* sur l'appareil de l'enfant). Sur iOS, le verrouillage dépend de l'autorisation Temps d’écran. Si une autorisation est désactivée plus tard, vous recevrez une alerte de protection sur l'appareil parent.",

    faq9Q: 'Comment bloquer des applis précises ?',
    faq9A:
      "La sélection des applis se fait sur l'appareil de l'enfant : ouvrez *KidGate → Réglages*, saisissez le code parent, choisissez *Choisir les applis à bloquer*, puis enregistrez. Ensuite, sur l'appareil parent, ouvrez l'écran *Applis bloquées* de l'appareil et activez *Activer le blocage d'applis*. Sur iOS, Apple peut masquer les noms exacts des applis à l'appareil parent — c'est une limite de la plateforme.",

    faq10Q: 'Pourquoi la position de mon enfant ne se met-elle pas à jour ?',
    faq10A:
      "La localisation doit être autorisée pour KidGate sur l'appareil de l'enfant, et l'appareil a besoin d'une connexion réseau. Ouvrez l'écran *Localisation* de l'appareil depuis le téléphone parent et tirez vers le bas pour actualiser. Les modes d'économie de batterie peuvent retarder les mises à jour, et le GPS en intérieur peut être moins précis.",

    faq11Q: "Comment retirer KidGate de l'appareil de mon enfant ?",
    faq11A:
      "Supprimez d'abord l'appareil depuis l'appli parent (ouvrez l'appareil dans *Famille* et choisissez Supprimer), puis désinstallez l'appli sur l'appareil de l'enfant.",

    faq12Q: 'Comment supprimer mon compte et mes données ?',
    faq12A:
      "Dans l'appli parent, allez dans *Réglages → Compte → Supprimer le compte*. Cela supprime définitivement votre compte familial et toutes les données — appareils, activité, historique de localisation et photos SOS — pour tous les parents et enfants. Consultez notre page [Suppression du compte et des données](/delete-account) pour toutes les options, y compris la suppression sans avoir l'appli installée.",

    legalTitle: 'Mentions légales',
    legalDeletion: 'Suppression du compte et des données',
  },

  download: {
    eyebrow: 'Télécharger',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 ou version ultérieure. Apple silicon et Intel.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 ou version ultérieure, 64 bits.',
    button: 'Télécharger',
    warningSub:
      'Les deux systèmes affichent cet avertissement pour toute application installée hors de leur boutique par un développeur qui ne figure pas encore sur leurs listes vérifiées — il ne signale rien qui ait été trouvé dans KidGate. Chaque carte ci-dessus indique comment autoriser le premier lancement. Téléchargez uniquement depuis kidgate.app.',
    macosSteps:
      'Ouvrez l’app une fois et laissez-la être refusée. Allez ensuite dans Réglages Système, Confidentialité et sécurité, faites défiler et choisissez Ouvrir quand même.',
    windowsSteps:
      'Quand Windows indique avoir protégé votre PC, choisissez Informations complémentaires puis Exécuter quand même.',
  },
  about: {
    eyebrow: 'À propos de nous',
    title: 'Un contrôle parental sur lequel une famille',
    titleAccent: 'peut vraiment s’entendre.',
    lede: 'KidGate est développé par une petite équipe indépendante qui ne fait qu’un seul produit. Notre position tient en une phrase : un parent doit pouvoir se fier à ce que dit l’application, y compris lorsqu’elle dit qu’elle ne peut rien faire.',
    storyEyebrow: 'Pourquoi KidGate existe',
    storyTitle: 'Le temps d’écran est devenu la dispute de tous les foyers',
    storyP1:
      'Presque toutes les familles vivent la même soirée : un minuteur que personne n’a accepté, un téléphone confisqué et un enfant persuadé que les règles ont changé dans son dos. Les outils censés régler cela l’ont surtout aggravé — d’un côté un verrouillage sans explication, de l’autre un tableau de bord qui se lit comme de la surveillance.',
    storyP2:
      'Nous avons donc construit la version que nous voulions à la maison. Le parent règle une fois la limite quotidienne, les Heures bloquées, le Blocage d’applis et le Filtrage web, et l’appareil s’y tient. L’enfant voit les mêmes chiffres que le parent, peut demander plus de temps et peut toujours joindre un parent avec le SOS. KidGate ne fait pas semblant d’être absent.',
    storyP3:
      'Il fonctionne sur iPhone, Android, Mac et Windows, avec un tableau de bord qui s’ouvre dans n’importe quel navigateur. Une famille, un forfait, tous les appareils.',
    valuesEyebrow: 'Ce en quoi nous croyons',
    valuesTitle: 'Quatre règles que nous ne cassons pas',
    valuesSub:
      'Les questions qu’on nous pose le plus, répondues avant que vous ayez à les poser.',
    value1Title: 'Un enfant n’est pas un suspect',
    value1Text:
      'Les règles sont visibles sur l’appareil auquel elles s’appliquent. L’enfant voit ce qui est activé et le temps qu’il lui reste, peut en demander plus et peut déclencher un SOS à tout moment. Un contrôle qui doit rester secret n’est pas un contrôle dont une famille peut parler.',
    value2Title: 'Les données de votre famille ne sont pas à vendre',
    value2Text:
      'Jamais de publicité. Rien concernant un enfant n’est utilisé à des fins publicitaires ni revendu. Vous pouvez supprimer le compte familial et tout ce qu’il contient quand vous le souhaitez, depuis l’application ou depuis ce site.',
    value3Title: 'Nous disons ce que nous ne savons pas faire',
    value3Text:
      'Chaque plateforme limite ce qu’une application a le droit d’imposer. Là où KidGate fait au mieux — fermer une appli bloquée sur un ordinateur plutôt qu’empêcher son lancement — l’écran le dit, au lieu d’afficher une coche verte.',
    value4Title: 'Une famille, un forfait',
    value4Text:
      'Un seul abonnement couvre tous les parents et tous les appareils des enfants. La limite quotidienne, les Heures bloquées et la localisation restent gratuites : les fonctions de sécurité ne sont jamais derrière le mur payant.',
    makeEyebrow: 'Ce que nous faisons',
    makeTitle: 'Un seul KidGate, où que soit l’écran',
    makeSub:
      'Les mêmes règles, écrites une fois, appliquées avec ce que chaque plateforme autorise.',
    make1Title: 'iPhone et iPad',
    make1Text:
      'Limites quotidiennes, Heures bloquées et blocage d’applis via le framework Screen Time d’Apple.',
    make2Title: 'Android',
    make2Text:
      'Limites, blocage d’applis, verrouillage plein écran et Filtrage web, plus une alerte dès qu’une nouvelle appli apparaît.',
    make3Title: 'macOS',
    make3Text:
      'L’agent de bureau sur un Mac : le même planning et les mêmes limites, et une journée qu’un parent peut vraiment lire.',
    make4Title: 'Windows',
    make4Text:
      'Le même agent sur un PC, avec un service en arrière-plan qui le relance s’il est fermé ou arrêté.',
    make5Soon: 'Prévu',
    make5Title: 'Android TV',
    make5Text:
      'L’écran du salon, traité comme un appareil partagé par la famille et non comme celui d’un seul enfant — avec les mêmes limites et le même planning que sur les téléphones.',
    make6Title: 'Tableau de bord parent',
    make6Text:
      'Le navigateur est le second écran du parent. Connectez-vous depuis n’importe quel ordinateur avec un code affiché sur votre téléphone ; rien à installer.',
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
};
