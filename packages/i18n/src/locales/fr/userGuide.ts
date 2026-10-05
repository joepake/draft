export const userGuide = {
  title: 'Guide d’utilisation',
  subtitle:
    'Aide pas à pas sur les autorisations, l’appairage des appareils, les contrôles quotidiens et les fonctions de sécurité.',
  stepLabel: 'Étape {{n}}',
  stepsSectionTitle: 'Étapes',
  tipTitle: 'Astuce',
  searchPlaceholder: 'Rechercher dans le guide…',
  searchClear: 'Effacer la recherche',
  searchEmpty: 'Aucun sujet du guide ne correspond. Essayez un autre mot.',
  groups: {
    gettingStarted: {
      title: 'Prise en main',
      description: 'Configurez les appareils parent et enfant pour la première fois',
    },
    connection: {
      title: 'Connecter des appareils',
      description: 'Appairer un appareil enfant ou inviter un autre parent',
    },
    permissions: {
      title: 'Autorisations de l’app',
      description:
        'Accordez les autorisations dont KidGate a besoin sur l’appareil de l’enfant',
    },
    controls: {
      title: 'Contrôles quotidiens',
      description:
        'Limites, horaires, blocage d’applications, verrouillage de l’appareil, temps en plus et récompenses',
    },
    safety: {
      title: 'Sécurité et surveillance',
      description: 'Localisation, Check-in, SOS, Filtre web et protection',
    },
    reports: {
      title: 'Rapports et historique',
      description:
        'Rapports de temps d’écran, historique web et vidéo, alertes d’applications et de messages',
    },
    account: {
      title: 'Compte et formule',
      description:
        'Premium, alertes, tableau de bord web, codes PIN et suppression du compte',
    },
  },
  topics: {
    getStartedParent: {
      title: 'Configurer un appareil parent',
      summary:
        'Créez votre compte et votre famille, puis connectez votre premier appareil enfant.',
      tip: 'Définissez le code PIN parent dès le début. Vous en aurez besoin pour modifier les réglages sensibles et déverrouiller les contrôles sur l’appareil de l’enfant.',
      steps: {
        '1': 'Installez KidGate sur votre appareil. Ouvrez l’app et choisissez Ceci est un appareil parent.',
        '2': 'Connectez-vous avec Google ou Apple, ou créez un compte e-mail.',
        '3': 'Dans Famille, sélectionnez Créer une famille et nommez votre famille (par exemple, « Famille Nguyen »). Ce nom apparaît quand d’autres parents rejoignent la famille. Si un autre parent a déjà créé votre famille, sélectionnez plutôt Rejoindre une famille.',
        '4': 'Définissez un code PIN parent (6 chiffres) dans Réglages, puis Sécurité. Mémorisez-le ou conservez-le en lieu sûr, et ne le partagez pas avec les enfants.',
        '5': 'Recommandé : activez le verrouillage de l’app et le déverrouillage biométrique dans Réglages afin que d’autres personnes ne puissent pas ouvrir l’app parent sur votre appareil.',
        '6': 'Ouvrez Famille, appuyez sur + et choisissez Ajouter un appareil d’enfant. Gardez cet écran ouvert pour le code QR ou le code affiché sur l’appareil de l’enfant.',
        '7': 'Une fois l’appareil de l’enfant connecté, ouvrez Famille, puis le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant). Définissez la Limite quotidienne et les Heures bloquées, et terminez les autorisations avec votre enfant.',
      },
    },
    getStartedChild: {
      title: 'Configurer un appareil enfant',
      summary:
        'Installez KidGate sur l’appareil de l’enfant et accordez les autorisations.',
      tip: 'Faites-le avec un parent. De nombreux écrans d’autorisation n’apparaissent qu’une seule fois et sont faciles à manquer seul.',
      steps: {
        '1': 'Installez KidGate sur l’appareil de l’enfant. Ouvrez l’app et choisissez Ceci est un appareil enfant.',
        '2': 'Gardez l’écran d’appairage ouvert. Montrez le code QR au parent, ou lisez à voix haute le code à 6 caractères.',
        '3': 'Sur l’appareil parent, scannez le code QR ou saisissez le code. Sur l’appareil de l’enfant, confirmez le parent quand demandé — n’acceptez qu’une personne que vous connaissez.',
        '4': 'Attendez que l’écran d’accueil indique que l’appareil est connecté. Ne forcez pas la fermeture de KidGate pendant la configuration.',
        '5': 'Sur l’écran État, accordez chaque autorisation demandée par KidGate (notifications, localisation, appareil photo et droits spécifiques à la plateforme). Appuyez sur chaque ligne jusqu’à ce qu’elle indique « autorisé ».',
        '6': 'Laissez KidGate installé et connecté sur l’appareil de l’enfant. Les parents gèrent les limites depuis leur propre appareil par la suite.',
      },
    },
    connectChild: {
      title: 'Connecter le téléphone ou la tablette d’un enfant',
      summary:
        'Appairez un nouvel appareil enfant à votre famille avec un code QR ou un code.',
      tip: 'Les codes expirent. Si l’appairage échoue, sélectionnez Nouveau code sur l’appareil de l’enfant et réessayez.',
      steps: {
        '1': 'Sur l’appareil de l’enfant : ouvrez KidGate, puis Ceci est un appareil enfant. Laissez l’écran du code QR visible.',
        '2': 'Sur l’appareil parent : ouvrez Famille et appuyez sur l’icône de scan (Scanner un code).',
        '3': 'L’appareil photo s’ouvre directement : autorisez l’accès si demandé, et alignez le code QR de l’appareil de l’enfant dans le cadre.',
        '4': 'Ou utilisez le code : sélectionnez Saisir le code manuellement, tapez les 6 caractères affichés sur l’appareil de l’enfant, puis continuez.',
        '5': 'Sur l’appareil de l’enfant, lisez attentivement l’écran de confirmation. Sélectionnez Oui, connecter uniquement si le nom du parent est correct.',
        '6': 'Attendez que l’appareil parent confirme la connexion. Le nouvel appareil apparaît sous Famille.',
        '7': 'Ouvrez le nouvel appareil et vérifiez que Dernière activité se met à jour. S’il reste hors ligne, rouvrez KidGate sur l’appareil de l’enfant et vérifiez la connexion réseau.',
        '8': 'Ensuite, accordez les autorisations sur l’appareil de l’enfant (voir le groupe Autorisations de l’app). Les contrôles ne fonctionneront pas pleinement tant que ces autorisations ne sont pas actives.',
      },
    },
    connectComputer: {
      title: 'Connecter un ordinateur (Mac ou Windows)',
      summary:
        'Installez KidGate sur le Mac ou le PC Windows de votre enfant, puis appairez-le comme un téléphone.',
      keywords: 'mac, macbook, windows, pc, portable, ordinateur',
      tip: 'Configurez KidGate pendant que votre enfant est connecté à son propre compte sur l’ordinateur, et faites de ce compte un compte standard (non administrateur). Un compte administrateur peut supprimer KidGate.',
      steps: {
        '1': 'Sur l’ordinateur, ouvrez kidgate.app/download et téléchargez KidGate pour Mac ou Windows.',
        '2': 'Lancez le programme d’installation et approuvez la demande d’autorisation administrateur. Sur Windows, si un message indique que Windows a protégé votre PC, choisissez Informations complémentaires puis Exécuter quand même.',
        '3': 'Ouvrez KidGate sur l’ordinateur. Il affiche un code QR et un code à 6 caractères. Aucune connexion n’est nécessaire.',
        '4': 'Sur votre appareil, ouvrez Famille, appuyez sur l’icône de scan (Scanner un code) et scannez le code QR — ou sélectionnez Saisir le code manuellement et tapez le code.',
        '5': 'Sur l’ordinateur, vérifiez le nom du parent et sélectionnez Oui, connecter.',
        '6': 'Suivez chaque étape de l’écran Terminer la configuration de cet appareil. Sur un Mac, sélectionnez Ouvrir Réglages pour l’étape Autoriser le filtre web, puis activez KidGate dans la page qui s’ouvre — le Filtre web ne fonctionne pas tant que ce n’est pas fait. Sélectionnez Autoriser pour Localisation et Caméra.',
        '7': 'De retour sur votre appareil, choisissez quel enfant utilise l’ordinateur. Les applications à bloquer se choisissent sur l’ordinateur lui-même, après saisie du code PIN parent (Choisir les applications à bloquer).',
      },
    },
    connectTv: {
      title: 'Connecter une Android TV',
      summary:
        'Installez KidGate sur une Android TV et appairez-la depuis votre appareil, sans rien saisir avec la télécommande.',
      keywords: 'android tv, google tv, télévision, télé, fire tv, box',
      tip: 'Une TV ne propose ni Localisation, ni SOS, ni Check-in, ni Demandes de temps, et une application bloquée est fermée après s’être ouverte au lieu d’être empêchée de s’ouvrir. Le temps d’écran peut remonter avec jusqu’à une heure de retard.',
      steps: {
        '1': 'Sur la TV, ouvrez Google Play, recherchez KidGate et installez-le.',
        '2': 'Ouvrez KidGate sur la TV. Il affiche un code QR et un code à 6 caractères. Aucune connexion n’est nécessaire.',
        '3': 'Sur votre appareil, ouvrez Famille, appuyez sur l’icône de scan (Scanner un code) et scannez le code QR affiché sur la TV — ou sélectionnez Saisir le code manuellement et tapez le code.',
        '4': 'La TV se connecte d’elle-même en quelques secondes. Il n’y a rien à confirmer avec la télécommande.',
        '5': 'Suivez l’écran Configurer la protection sur la TV : sélectionnez Ouvrir les Réglages pour activer Accessibilité, Accès à l’utilisation et Superposition aux autres apps, puis approuvez la connexion VPN pour que le Filtre web puisse fonctionner.',
        '6': 'Si un réglage ne reste pas activé, redémarrez la TV et réessayez. Vous pouvez rouvrir Configurer la protection depuis l’écran principal de KidGate sur la TV.',
        '7': 'De retour sur votre appareil, choisissez quel enfant utilise la TV. Les applications à bloquer se choisissent sur la TV elle-même, après saisie du code PIN parent.',
      },
    },
    connectChrome: {
      title: 'Connecter l’extension Chrome',
      summary:
        'Ajoutez le filtre web KidGate à Chrome sur un Chromebook, un Mac ou un PC. L’extension apparaît comme un appareil à part.',
      keywords: 'chromebook, extension chrome, extension de navigateur',
      tip: 'L’extension ne filtre que Chrome : ni les autres navigateurs, ni les fenêtres de navigation privée, sauf si vous l’autorisez. Sur chrome://extensions, ouvrez les Détails de KidGate et activez Autoriser en mode navigation privée.',
      steps: {
        '1': 'Dans Chrome, sur l’ordinateur de votre enfant, allez sur le Chrome Web Store, recherchez KidGate et sélectionnez Ajouter à Chrome.',
        '2': 'Sélectionnez l’icône KidGate dans la barre d’outils de Chrome. Si vous ne la voyez pas, épinglez-la depuis le menu Extensions (icône en forme de pièce de puzzle). La fenêtre pop-up affiche un code QR et un code à 6 caractères. Gardez-la ouverte pendant l’appairage.',
        '3': 'Sur votre appareil, ouvrez Famille, appuyez sur l’icône de scan (Scanner un code) et scannez le code QR — ou sélectionnez Saisir le code manuellement et tapez le code.',
        '4': 'Dans la fenêtre pop-up de KidGate, vérifiez le nom du parent et sélectionnez Oui, connecter.',
        '5': 'De retour sur votre appareil, choisissez quel enfant utilise l’extension, puis activez le Filtre web pour celle-ci. D’ici là, l’extension affiche Inactif.',
        '6': 'Facultatif : pour voir quelles vidéos sont regardées, ouvrez Vidéos regardées et activez Enregistrer les vidéos regardées pour l’extension.',
      },
    },
    inviteParent: {
      title: 'Inviter un autre parent',
      summary:
        'Permettez à un second parent de rejoindre la même famille et de gérer les mêmes appareils enfants.',
      tip: 'Seul le propriétaire de la famille peut approuver les demandes. Approuvez rapidement, car les demandes peuvent expirer. Une famille peut compter jusqu’à 3 parents avec la version gratuite et pendant l’essai, et jusqu’à 6 avec Premium.',
      steps: {
        '1': 'Sur l’appareil du propriétaire de la famille, ouvrez Famille, puis appuyez sur +, puis Inviter un parent.',
        '2': 'Si vous n’avez pas encore créé de nom de famille, saisissez-en un et sélectionnez Créer une famille.',
        '3': 'Montrez le code QR d’invitation à l’autre parent, ou partagez le code d’invitation avec lui.',
        '4': 'Sur l’appareil de l’autre parent : ouvrez KidGate en tant que parent, ouvrez Famille et appuyez sur l’icône de scan (Scanner un code). Puis scannez le code QR d’invitation ou saisissez le code.',
        '5': 'Sur l’appareil du propriétaire, ouvrez la demande en attente et sélectionnez Approuver. Refusez si vous ne reconnaissez pas la personne.',
        '6': 'Le nouveau parent verra les mêmes appareils enfants et pourra aider à gérer les limites. Certaines actions, comme renommer ou supprimer des appareils, restent réservées au propriétaire.',
      },
    },
    joinFamily: {
      title: 'Rejoindre une famille existante',
      summary:
        'Utilisez une invitation du propriétaire de la famille pour devenir co-parent.',
      tip: 'Si la demande d’approbation expire, demandez au propriétaire un nouveau code QR ou code d’invitation.',
      steps: {
        '1': 'Installez KidGate et connectez-vous en tant que parent sur votre appareil.',
        '2': 'Ouvrez Famille et appuyez sur l’icône de scan (Scanner un code).',
        '3': 'Scannez le code QR d’invitation du propriétaire, ou sélectionnez Saisir le code manuellement et tapez le code d’invitation à 6 caractères.',
        '4': 'Attendez que le propriétaire approuve. Gardez l’app ouverte jusqu’à ce que vous voyiez que vous avez rejoint la famille.',
        '5': 'Vérifiez que les appareils enfants apparaissent sous Famille. Ouvrez un appareil pour consulter son état et ses contrôles.',
      },
    },
    androidPermissions: {
      title: 'Autorisations Android (appareil enfant)',
      summary:
        'Activez l’Accès à l’utilisation, l’affichage par-dessus les autres apps, l’Accessibilité, la batterie et les autorisations associées.',
      keywords:
        'accessibilité, accès aux données d’utilisation, superposition, notifications, administrateur de l’appareil, vpn, autoriser',
      tip: 'L’exhaustivité compte plus que l’ordre. Chaque ligne rouge ou non autorisée sur l’écran État de l’enfant doit être corrigée avant de compter sur le verrouillage ou les Heures bloquées.',
      steps: {
        '1': 'Sur l’appareil de l’enfant, ouvrez KidGate, puis État et parcourez la liste des autorisations de haut en bas.',
        '2': 'Notifications : appuyez sur la ligne, puis Autoriser. Les parents ont besoin des notifications push pour les commandes de verrouillage et les demandes de temps.',
        '3': 'Accès à l’utilisation : ouvrez l’écran système, puis trouvez KidGate, puis activez-le. C’est requis pour le suivi du temps d’écran et les limites.',
        '4': 'Superposition aux autres apps : autorisez KidGate. C’est nécessaire pour que l’écran de verrouillage puisse s’afficher par-dessus les autres apps.',
        '5': 'Assistant d’accessibilité pour le verrouillage : Paramètres, puis Accessibilité, puis Apps installées / téléchargées, puis KidGate, puis Activé. Cela garantit que le verrouillage reste appliqué.',
        '6': 'Batterie sans restriction : sélectionnez Autoriser quand demandé. Si aucune invite n’apparaît : Infos sur l’app, puis Batterie, puis Sans restriction.',
        '7': 'Alarmes et rappels : autorisez-le pour que les Heures bloquées commencent et se terminent à l’heure.',
        '8': 'Localisation et Appareil photo (si vous utilisez le Check-in ou les photos SOS) : autorisez-les selon les demandes de KidGate. Retournez sur État et confirmez que chaque ligne est autorisée.',
      },
    },
    iosScreenTime: {
      title: 'Temps d’écran iOS (appareil enfant)',
      summary:
        'Autorisez Utilisation des apps et des sites web afin que le verrouillage, les horaires et la sélection d’apps puissent fonctionner.',
      keywords: 'temps d’écran, family controls, iphone, ipad, autoriser',
      tip: 'Si le bouton Autoriser est absent, ouvrez Réglages iOS, puis Temps d’écran et assurez-vous d’abord que Temps d’écran est activé sur l’appareil de l’enfant.',
      steps: {
        '1': 'Ouvrez KidGate et restez sur l’écran « État ».',
        '2': 'Sélectionnez Autoriser l’utilisation des apps et des sites web (ou la bannière Temps d’écran).',
        '3': 'Dans la boîte de dialogue système, sélectionnez Autoriser. Merci de ne pas fermer la boîte de dialogue sans faire de choix.',
        '4': 'Revenez à KidGate. La bannière disparaît une fois l’autorisation réussie.',
        '5': 'Si l’autorisation a été refusée précédemment : ouvrez Réglages iOS, trouvez KidGate, activez Temps d’écran sur cette page, puis rouvrez KidGate.',
        '6': 'Pour choisir les applications bloquées : sur l’appareil de l’enfant, ouvrez Réglages KidGate, sélectionnez Déverrouiller avec le code PIN parent, ouvrez Applications bloquées, puis enregistrez.',
        '7': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Applications bloquées, et confirmez que la liste a bien été synchronisée. Activez le blocage quand vous êtes prêt.',
      },
    },
    oemKeepRunning: {
      title: 'Garder KidGate actif (réglages du fabricant)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei et les appareils similaires suspendent souvent les apps en arrière-plan.',
      keywords:
        'xiaomi, samsung, oppo, vivo, huawei, realme, économie de batterie, démarrage automatique, ne fonctionne plus, fermé en arrière-plan',
      tip: 'Après avoir modifié les règles de batterie, redémarrez une fois l’appareil de l’enfant, rouvrez KidGate, puis testez le verrouillage depuis l’appareil parent.',
      steps: {
        '1': 'Sur l’appareil Android de l’enfant, ouvrez KidGate, puis État, et cherchez l’étape Autoriser le démarrage automatique. Elle n’apparaît que sur les appareils dont le fabricant l’exige.',
        '2': 'Autorisez le démarrage automatique de KidGate dans l’écran de sécurité du fabricant (le libellé varie selon l’appareil).',
        '3': 'Réglez l’utilisation de la batterie de KidGate sur Sans restriction, à la fois dans les réglages Android et dans le menu batterie du fabricant, si les deux existent.',
        '4': 'Désactivez toute liste « apps en veille », « apps en veille profonde » ou « mise en veille des apps » incluant KidGate.',
        '5': 'Si un raccourci ne fonctionne pas, ouvrez manuellement l’app Sécurité / Entretien de l’appareil et recherchez KidGate, Démarrage automatique ou Batterie.',
        '6': 'Marquez chaque ligne comme Terminé dans KidGate au fur et à mesure, afin de voir ce qu’il reste à faire.',
      },
    },
    dailyLimit: {
      title: 'Définir une Limite quotidienne',
      summary: 'Plafonnez le temps d’utilisation quotidien de l’appareil par l’enfant.',
      keywords: 'temps d’écran, heures par jour, temps écoulé, quota, prolonger',
      tip: 'Les données d’utilisation proviennent de l’appareil de l’enfant. Si le compteur semble bloqué, ouvrez KidGate sur l’appareil de l’enfant et attendez une synchronisation.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez Famille, puis appuyez sur le profil de votre enfant (ou sur l’appareil, s’il n’est attribué à aucun enfant).',
        '2': 'Sous Contrôles essentiels, sélectionnez Limite quotidienne.',
        '3': 'Choisissez une valeur en minutes par jour (ou modifiez le plafond existant), puis enregistrez.',
        '4': 'Vérifiez que la fiche appareil affiche les minutes utilisées et la limite du jour après la synchronisation de l’appareil de l’enfant.',
        '5': 'Quand la limite est atteinte, l’appareil se verrouille selon les règles de la plateforme. Sélectionnez Déverrouiller sur l’écran de l’appareil si vous souhaitez restaurer l’accès plus tôt.',
      },
    },
    blockedHours: {
      title: 'Définir les Heures bloquées',
      summary:
        'Planifiez les plages horaires pendant lesquelles l’appareil doit rester verrouillé.',
      keywords: 'heure du coucher, nuit, heures d’école, horaires, pause',
      tip: 'Définissez d’abord les heures de classe et les plages de coucher. Évitez les plages qui se chevauchent pour garder le planning clair.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Heures bloquées.',
        '2': 'Sélectionnez Ajouter une plage horaire, puis définissez une heure de début, une heure de fin et les jours de répétition.',
        '3': 'Enregistrez la plage. Répétez l’opération pour ajouter une autre plage.',
        '4': 'Activez le planning si un interrupteur d’activation est affiché.',
        '5': 'Sur l’appareil de l’enfant, vérifiez que les autorisations Alarmes et rappels et Temps d’écran sont toujours accordées pour que les plannings s’exécutent à l’heure.',
        '6': 'Pendant une plage active, la fiche appareil affiche Heures bloquées actives · verrouillé. N’utilisez Déverrouiller que si vous souhaitez délibérément outrepasser le planning.',
      },
    },
    blockedApps: {
      title: 'Bloquer des applications spécifiques',
      summary:
        'Choisissez des applications sur l’appareil de l’enfant, puis activez le blocage depuis l’appareil parent.',
      keywords:
        'bloquer une appli, bloquer une application, tiktok, facebook, instagram, jeux, roblox, masquer une appli',
      tip: 'Sous iOS, Apple peut masquer les noms exacts des applications aux appareils parents. La sélection se fait toujours sur l’appareil de l’enfant avec le code PIN parent.',
      steps: {
        '1': 'Utilisez directement l’appareil de l’enfant. Ouvrez KidGate, puis Réglages.',
        '2': 'Sélectionnez Déverrouiller avec le code PIN parent, puis saisissez le code PIN parent.',
        '3': 'Ouvrez Applications bloquées (sur un ordinateur ou une TV : Choisir les applications à bloquer). Sélectionnez les applications (et les catégories, si affichées), puis enregistrez sur l’appareil de l’enfant.',
        '4': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Applications bloquées, et attendez que la liste sélectionnée apparaisse.',
        '5': 'Activez Activer le blocage des applications. Le statut doit indiquer Blocage activé.',
        '6': 'Testez en ouvrant une application bloquée sur l’appareil de l’enfant. Elle doit être restreinte selon les règles de la plateforme.',
        '7': 'Pour modifier la liste plus tard, répétez la sélection sur l’appareil de l’enfant avec le code PIN parent. L’appareil parent synchronisera la nouvelle liste.',
      },
    },
    appLimits: {
      title: 'Définir les Limites d’apps',
      summary:
        'Donnez à certaines applications leur propre plafond par jour, en plus de la Limite quotidienne.',
      keywords: 'limite de temps par appli, minutes par appli, tiktok, youtube, jeux',
      tip: 'Les Limites d’apps ne sont pas disponibles sur iPhone ni sur iPad. Sur un ordinateur ou une TV, une application qui atteint son plafond est fermée après s’être ouverte au lieu d’être empêchée de s’ouvrir.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Limites d’apps. Si votre enfant utilise plusieurs appareils, choisissez lequel : chaque appareil a sa propre liste.',
        '2': 'Sous Ajouter une limite, appuyez sur une application. Seules les applications utilisées aujourd’hui sur cet appareil sont listées, et chacune commence avec un plafond de 60 minutes.',
        '3': 'Réglez chaque plafond avec le cadran ou un préréglage, de 5 minutes à 8 heures par jour. Vous pouvez plafonner jusqu’à 20 applications.',
        '4': 'Sélectionnez Enregistrer. Les limites se réinitialisent à minuit sur l’appareil de l’enfant.',
        '5': 'La Limite quotidienne s’applique toujours à l’ensemble de l’appareil : une application peut donc être verrouillée avant d’avoir atteint son propre plafond. Pour supprimer une limite, sélectionnez Supprimer sur sa fiche, puis enregistrez.',
      },
    },
    lockUnlock: {
      title: 'Verrouiller et déverrouiller l’appareil',
      summary:
        'Verrouillez immédiatement l’appareil de l’enfant, ou restaurez l’accès.',
      tip: 'Sur Android, le verrouillage est le plus efficace quand Superposition aux autres apps et Accessibilité sont tous deux activés. Sur iOS, le verrouillage dépend de l’autorisation Temps d’écran.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant).',
        '2': 'Sélectionnez Tout verrouiller pour verrouiller tous les appareils de cet enfant, ou ouvrez un appareil et sélectionnez Verrouiller l’appareil.',
        '3': 'Attendez quelques secondes. Le statut doit passer à Verrouillé. Si rien ne change, ouvrez KidGate sur l’appareil de l’enfant et revérifiez les autorisations.',
        '4': 'Pour restaurer l’accès, sélectionnez Tout déverrouiller (ou Déverrouiller sur l’écran de l’appareil) et confirmez.',
        '5': 'Facultatif : vous pouvez aussi verrouiller ou déverrouiller rapidement depuis Famille si ces raccourcis apparaissent sur la fiche appareil.',
      },
    },
    pauseBrowsing: {
      title: 'Mettre la navigation en pause un moment',
      summary:
        'Bloquez le Web sur un appareil pendant 5 minutes à 8 heures. Les appels et les applications hors ligne continuent de fonctionner.',
      keywords:
        'couper internet, mettre le wifi en pause, pas de réseau, hors ligne, pause',
      tip: 'Dans l’extension Chrome, une pause ne concerne que Chrome. Pour une pause qui se répète chaque jour, utilisez plutôt les Heures bloquées.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis l’option Mettre la navigation en pause dans la section Surveillance de la sécurité.',
        '2': 'Choisissez une durée avec le cadran ou un préréglage rapide (30, 60 ou 120 minutes), puis confirmez.',
        '3': 'Le Web reste bloqué sur cet appareil jusqu’à la fin du temps choisi. Vos réglages du Filtre web ne sont pas modifiés, et la pause fonctionne même lorsque le Filtre web est désactivé.',
        '4': 'Pour y mettre fin plus tôt, ouvrez l’appareil, appuyez sur la fiche Mettre la navigation en pause et sélectionnez Reprendre. Les minutes restantes ne sont pas conservées.',
        '5': 'Depuis le profil de votre enfant, une pause s’applique à un seul appareil. Si votre enfant en utilise plusieurs, mettez chacun en pause depuis son propre écran d’appareil.',
      },
    },
    timeRequests: {
      title: 'Répondre aux Demandes de temps',
      summary:
        'Votre enfant peut demander des minutes en plus quand la Limite quotidienne est presque atteinte, et vous acceptez ou refusez depuis votre appareil.',
      tip: 'Les demandes n’apparaissent que si l’appareil a une Limite quotidienne. Les minutes approuvées valent pour aujourd’hui, sur l’appareil qui a fait la demande, et ne lèvent ni un verrouillage que vous avez activé, ni les Heures bloquées. Android TV et l’extension Chrome ne peuvent pas envoyer de demandes.',
      steps: {
        '1': 'Sur l’appareil de l’enfant, votre enfant sélectionne Demander plus de temps sur l’écran d’accueil de KidGate (sur Android, également depuis l’écran de verrouillage quand la limite est atteinte), choisit les minutes, ajoute un motif s’il le souhaite et envoie la demande.',
        '2': 'Vous recevez une notification. Ouvrez KidGate : la demande attend dans la fiche Approbation requise, dans Famille, dans le profil de votre enfant et sur l’appareil.',
        '3': 'Vérifiez les minutes et le motif, puis sélectionnez Approuver pour ajouter exactement ces minutes pour aujourd’hui, ou Pas maintenant pour refuser.',
        '4': 'L’appareil de l’enfant reçoit la réponse, et les minutes approuvées s’appliquent immédiatement. Chaque appareil ne peut avoir qu’une demande en attente à la fois.',
        '5': 'Les demandes traitées apparaissent dans Activité. Pour ne plus recevoir ces notifications sur votre appareil, désactivez Demandes de temps dans Notifications push, dans les Réglages.',
      },
    },
    rewardTasks: {
      title: 'Configurer les Tâches à récompense',
      summary:
        'Créez de petites tâches que votre enfant peut accomplir pour gagner des minutes en plus aujourd’hui.',
      tip: 'Les minutes bonus ne comptent que si l’appareil a une Limite quotidienne. Elles sont ajoutées à l’appareil sur lequel votre enfant a indiqué que la tâche était faite. Les Tâches à récompense ne sont pas disponibles sur Android TV ni dans l’extension Chrome.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Tâches à récompense.',
        '2': 'Sélectionnez Nouvelle tâche, ou partez d’un modèle. Saisissez la tâche, choisissez la récompense en minutes (de 5 à 240), une difficulté et la répétition (Chaque jour ou Une fois), puis sélectionnez Créer la tâche.',
        '3': 'Sur l’appareil de l’enfant, la tâche apparaît sous Gagne du temps en plus. Une fois la tâche faite, votre enfant sélectionne C’est fait.',
        '4': 'Vous recevez une notification. Dans À approuver (sur l’écran Tâches à récompense, dans Famille ou dans le profil de votre enfant), sélectionnez Approuver pour ajouter les minutes pour aujourd’hui, ou Renvoyer pour que votre enfant puisse réessayer.',
        '5': 'Appuyez sur une tâche pour la modifier ou la supprimer. L’offre gratuite permet jusqu’à 10 tâches actives à la fois, et Premium en permet 20.',
      },
    },
    locationSharing: {
      title: 'Activer le partage de localisation',
      summary: 'Consultez la dernière position de votre enfant sur l’appareil parent.',
      keywords: 'gps, carte, où est mon enfant, localiser le téléphone, lieux',
      tip: 'La localisation nécessite une autorisation sur l’appareil de l’enfant et une connexion réseau stable. Le GPS en intérieur peut être moins précis.',
      steps: {
        '1': 'Sur l’appareil de l’enfant, autorisez la Localisation pour KidGate quand demandé (ou dans les Réglages système).',
        '2': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Localisation.',
        '3': 'Activez le partage s’il est désactivé, puis attendez la première mise à jour.',
        '4': 'Si le statut affiche toujours En attente, appuyez sur le bouton d’actualisation ou rouvrez l’écran.',
        '5': 'Facultatif : ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis la section Alertes, et sélectionnez Lieux pour configurer des Alertes de lieux quand votre enfant entre dans un lieu enregistré ou en sort.',
        '6': 'Si le téléphone est égaré à proximité, ouvrez Localisation et touchez Faire sonner l’appareil. Un iPhone reste silencieux s’il est en mode silencieux ou qu’un mode de concentration est activé.',
      },
    },
    checkIn: {
      title: 'Demander un Check-in',
      summary:
        'Demandez à votre enfant de confirmer qu’il est en sécurité, avec sa position et une photo facultative.',
      tip: 'L’autorisation Appareil photo sur l’appareil de l’enfant est requise pour les Check-ins avec photo.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant).',
        '2': 'Sélectionnez Check-in (l’action rapide ou la ligne de la section Surveillance de la sécurité).',
        '3': 'L’appareil de l’enfant reçoit une notification et un écran de Check-in. L’enfant appuie pour confirmer qu’il va bien, ou pour demander de l’aide.',
        '4': 'Si l’accès à l’appareil photo est autorisé, KidGate joint une photo en plus de la position lorsque c’est possible.',
        '5': 'Sur l’appareil parent, ouvrez l’historique des Check-ins pour consulter la dernière réponse et la photo.',
      },
    },
    sos: {
      title: 'Alertes d’urgence SOS',
      summary:
        'Comprenez comment un enfant envoie un SOS et comment les parents l’examinent.',
      tip: 'Testez cela une fois à la maison afin que le parent et l’enfant connaissent tous deux la procédure avant une véritable urgence.',
      steps: {
        '1': 'Sur l’appareil de l’enfant, ouvrez l’onglet ou l’écran SOS dans KidGate.',
        '2': 'Suivez les étapes affichées à l’écran pour envoyer un SOS (la position et la photo dépendent des autorisations accordées).',
        '3': 'Les parents reçoivent une notification push lorsqu’un SOS est envoyé.',
        '4': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis la section Alertes, et sélectionnez SOS pour ouvrir les Alertes SOS et consulter l’événement.',
        '5': 'Mettez-vous d’accord avec votre enfant sur quand utiliser le SOS et quand un Check-in normal suffit.',
      },
    },
    webFilter: {
      title: 'Limiter les sites inappropriés',
      summary:
        'Activez le Filtre web pour le contenu inapproprié lorsque la plateforme le prend en charge.',
      keywords:
        'bloquer un site, bloquer un lien, url, contenu adulte, recherche sécurisée, dns, vpn, iphone, ipad',
      tip: 'Le filtrage web dépend des capacités de la plateforme. Combinez-le avec Applications bloquées pour une protection renforcée.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Filtre web.',
        '2': 'Consultez le statut actuel (sites inappropriés limités, ou filtrage désactivé).',
        '3': 'Activez le filtrage et enregistrez si un interrupteur est affiché.',
        '4': 'Vérifiez à nouveau plus tard depuis le même écran. Si le statut reste En attente, rouvrez KidGate sur l’appareil de l’enfant afin que les réglages puissent se synchroniser.',
        '5': 'Sur un iPhone ou un iPad, ouvrez KidGate sur l’appareil de l’enfant et sélectionnez Autoriser quand iOS demande d’ajouter des configurations VPN, puis saisissez le code de l’appareil. Cette demande n’apparaît qu’une seule fois.',
      },
    },
    protectionAlerts: {
      title: 'Alertes de protection',
      summary:
        'Soyez averti lorsqu’une autorisation importante sur l’appareil de l’enfant est désactivée.',
      tip: 'Une alerte de protection signifie que la protection KidGate s’est affaiblie. Merci de rétablir l’autorisation sur l’appareil de l’enfant dès que possible.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis la section Alertes, et sélectionnez Protection pour ouvrir les Alertes de protection.',
        '2': 'Consultez les événements récents tels que Superposition aux autres apps, Accessibilité, Accès à l’utilisation, Appareil photo ou Localisation désactivés.',
        '3': 'Sur l’appareil de l’enfant, ouvrez KidGate, puis État et réactivez l’autorisation indiquée.',
        '4': 'Retournez sur Alertes de protection et vérifiez qu’aucun nouvel événement inattendu n’apparaît.',
        '5': 'Gardez les notifications activées sur l’appareil parent afin d’être informé rapidement des changements.',
      },
    },
    usageReports: {
      title: 'Consulter les rapports d’utilisation',
      summary:
        'Voyez combien de temps chaque appareil a été utilisé aujourd’hui et sur les 30 derniers jours, par enfant, et dans un rapport chaque lundi.',
      tip: 'Avec l’offre gratuite, vous voyez le total du jour et les 3 applications les plus utilisées, mis à jour quand vous consultez l’app. Premium ajoute 30 jours d’historique, les moments où chaque appareil a été utilisé, toutes les applications, un rapport pour chaque enfant et un nouveau rapport hebdomadaire chaque lundi. L’iPhone et l’iPad ne transmettent que le total.',
      steps: {
        '1': 'Ouvrez Rapports. La section Aujourd’hui additionne tous les appareils ; en dessous se trouvent le Rapport hebdomadaire, chaque enfant (Par enfant) et chaque appareil (Par appareil).',
        '2': 'Appuyez sur un appareil pour ouvrir son Rapport d’utilisation : aujourd’hui par rapport à la Limite quotidienne, Les 30 derniers jours, Quand l’appareil a été utilisé et Applications les plus utilisées. Vous pouvez aussi l’ouvrir depuis Utilisation aujourd’hui sur l’écran de l’appareil.',
        '3': 'Appuyez sur un enfant pour voir un seul rapport couvrant tous ses appareils, pour Aujourd’hui, 7 jours ou 30 jours. Le temps passé sur deux écrans à la fois n’est compté qu’une fois : le total peut donc être inférieur à la somme des appareils.',
        '4': 'Un nouveau Rapport hebdomadaire arrive chaque lundi matin, avec une notification. Il suggère une chose que vous pourriez changer et ouvre le bon réglage.',
        '5': 'Quand vous ouvrez KidGate, chaque appareil est invité à envoyer des chiffres à jour : la mise à jour peut donc prendre quelques minutes. Un appareil sans connexion Internet envoie ses données dès qu’il est de nouveau en ligne.',
      },
    },
    webHistory: {
      title: 'Consulter l’Historique web',
      summary:
        'Voyez, jour par jour, quels sites un appareil a consultés et lesquels le Filtre web a bloqués.',
      keywords: 'historique de navigation, sites visités, navigateur, chrome, safari',
      tip: 'L’Historique web fait partie de Premium. Il liste des sites, pas des pages ni des minutes, et certaines lignes correspondent au trafic en arrière-plan des applications. Sur Android TV, il peut avoir jusqu’à une heure de retard.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Historique web dans la section Surveillance de la sécurité. Depuis le profil de votre enfant, il regroupe tous ses appareils.',
        '2': 'Pour chaque jour, les sites sont listés par type, avec le nombre de fois où chacun a été consulté. Sélectionnez Bloqués seulement pour ne voir que ce que le Filtre web a arrêté.',
        '3': 'Pour bloquer tout un type de site, ouvrez sa section et sélectionnez le bouton Bloquer à la fin de celle-ci. Depuis le profil de votre enfant, cela s’applique à tous ses appareils.',
        '4': 'L’historique provient du Filtre web : il ne se remplit donc que lorsque le filtre fonctionne sur cet appareil.',
        '5': 'L’historique est conservé 30 jours. Quand votre enfant demande à ouvrir un site bloqué, la demande apparaît dans la fiche Approbation requise, pas ici.',
      },
    },
    videoHistory: {
      title: 'Voir les Vidéos regardées',
      summary:
        'Gardez la liste des vidéos YouTube que regarde votre enfant, avec la chaîne et l’heure.',
      keywords: 'youtube, shorts, vidéos regardées, historique de visionnage',
      tip: 'La fonction Vidéos regardées fait partie de Premium et ne couvre que YouTube. Elle fonctionne sur les téléphones Android, sur Android TV et dans l’extension Chrome, pas sur iPhone ni sur iPad. Sur un Mac ou un PC, ajoutez l’extension Chrome. Sur une TV, les Shorts ne sont pas listés.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Vidéos regardées dans la section Surveillance de la sécurité.',
        '2': 'Activez Enregistrer les vidéos regardées. L’enregistrement reste désactivé tant que vous ne l’activez pas et, depuis le profil de votre enfant, il s’applique à tous ses appareils.',
        '3': 'Sur un téléphone Android, KidGate a aussi besoin de l’accès aux notifications : sur l’appareil de l’enfant, ouvrez KidGate, puis Réglages, sélectionnez Déverrouiller avec le code PIN parent, puis Autoriser l’accès aux notifications dans la section Alertes de messages. Les Shorts nécessitent aussi l’autorisation Accessibilité.',
        '4': 'Les vidéos s’affichent par jour, avec la chaîne et le nombre de lectures. Appuyez sur une vidéo pour la retrouver sur YouTube.',
        '5': 'Sur un Mac ou un PC, l’écran explique plutôt comment ajouter l’extension Chrome. L’extension enregistre les vidéos comme un appareil à part.',
      },
    },
    appAlerts: {
      title: 'Suivre les installations d’applications',
      summary:
        'Voyez quand des applications sont installées ou supprimées et ce qui se trouve sur un appareil, et gardez les nouvelles applications bloquées jusqu’à ce que vous les autorisiez.',
      tip: 'L’option Approuver les nouvelles applications est gratuite. L’écran Applications, avec l’historique des installations et la liste des applications installées, fait partie de Premium. L’iPhone et l’iPad ne peuvent pas signaler les installations ; sur ces appareils, l’option Approuver les nouvelles applications masque plutôt l’App Store.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis la fiche Applications dans la section Alertes.',
        '2': 'La section Changements récents liste les applications installées et supprimées, les plus récentes en premier. Vous recevez aussi une notification pour chacune.',
        '3': 'La liste Applications installées montre ce qui se trouve sur l’appareil, avec en haut les applications du groupe À regarder de plus près. Sélectionnez Sans risque pour sortir une application de ce groupe. Pour bloquer une application, utilisez Applications bloquées.',
        '4': 'Pour garder les nouvelles applications bloquées jusqu’à ce que vous les autorisiez, ouvrez Applications bloquées et activez Approuver les nouvelles applications. Toute application installée ensuite reste bloquée sur l’appareil.',
        '5': 'Quand une nouvelle application est en attente, sélectionnez Autoriser à côté d’elle pour qu’elle puisse s’ouvrir.',
      },
    },
    messageAlerts: {
      title: 'Activer les Alertes de messages',
      summary:
        'Soyez averti quand un mot ou une expression préoccupants apparaissent dans les messages ou les recherches sur le téléphone Android de votre enfant. Vous voyez le mot ou l’expression signalés, jamais le message.',
      keywords: 'sms, messenger, whatsapp, mots-clés, harcèlement, lire les messages',
      tip: 'Les Alertes de messages font partie de Premium et ne fonctionnent que sur les téléphones Android. Seuls la catégorie et le mot ou l’expression signalés vous parviennent. L’analyse par IA reste désactivée, sauf si un parent l’active pour toute la famille.',
      steps: {
        '1': 'Sur le téléphone Android de votre enfant, ouvrez KidGate, puis Réglages, sélectionnez Déverrouiller avec le code PIN parent, puis Autoriser l’accès aux notifications dans la section Alertes de messages, et activez KidGate dans la liste qui s’ouvre.',
        '2': 'Sur votre appareil, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Alertes de messages dans la section Alertes, et appuyez sur l’icône des réglages en haut. Si votre enfant a plusieurs appareils, sélectionnez d’abord le téléphone Android.',
        '3': 'Activez Analyser les messages reçus. L’option Signaler aussi les grossièretés est facultative, et vous pouvez choisir jusqu’à 3 langues dans Langues analysées.',
        '4': 'Pour analyser aussi ce que votre enfant écrit et recherche : sur l’appareil de l’enfant, sélectionnez Autoriser dans la section Alertes de messages, puis activez Analyser les messages écrits et Analyser ses recherches sur votre appareil.',
        '5': 'Les alertes apparaissent sous Alertes récentes, avec la catégorie et le mot ou l’expression signalés. Sélectionnez Que faire ensuite pour obtenir des conseils sur la façon d’en parler.',
      },
    },
    childProfiles: {
      title: 'Ajouter un enfant et attribuer des appareils',
      summary:
        'Donnez un profil à chaque enfant, puis attribuez-lui les appareils qu’il utilise, pour que ses règles et son temps d’écran le suivent.',
      tip: 'Seul le propriétaire de la famille peut ajouter des enfants et attribuer des appareils. Un nouvel appareil n’est attribué à personne tant que vous n’avez pas choisi.',
      steps: {
        '1': 'Dans Famille, appuyez sur + et choisissez Ajouter un enfant. Saisissez un prénom et enregistrez.',
        '2': 'Après l’appairage d’un nouvel appareil, KidGate demande qui l’utilise. Choisissez votre enfant, ou Personne pour un appareil partagé. KidGate propose ensuite un ensemble de protections de départ : sélectionnez Activer la protection ou Pas maintenant.',
        '3': 'Un appareil pour lequel personne n’a encore été choisi apparaît sous Non attribué dans Famille. Sélectionnez Attribuer à un enfant… sur sa fiche.',
        '4': 'Une fois l’appareil attribué, la Limite quotidienne, les Heures bloquées, le Filtre web, le Check-in, le SOS, les lieux et les Tâches à récompense se règlent sur le profil de votre enfant et s’appliquent à tous ses appareils. La Limite quotidienne devient un total commun à ces appareils.',
        '5': 'Pour déplacer un appareil, ouvrez le profil de l’enfant qui doit l’avoir et sélectionnez Attribuer un autre appareil…. Pour retirer un appareil d’un profil, balayez-le sur le profil de votre enfant et sélectionnez Retirer. Supprimer le profil d’un enfant laisse ses appareils appairés.',
      },
    },
    plans: {
      title: 'Premium et l’offre gratuite',
      summary:
        'Ce que comprennent l’essai, l’offre gratuite et Premium, et comment s’abonner.',
      keywords:
        'premium, prix, abonnement, essai gratuit, annuler, remboursement, passer à premium',
      tip: 'Seul le propriétaire de la famille peut s’abonner ou restaurer un achat, et uniquement dans l’app sur téléphone. Une seule formule couvre toute la famille et chacun de ses parents.',
      steps: {
        '1': 'Ouvrez Réglages. La fiche en haut indique votre formule actuelle ; sélectionnez Voir les formules.',
        '2': 'L’essai de 7 jours commence dès que votre premier appareil enfant est appairé, et inclut tout ce que contient Premium.',
        '3': 'Avec l’offre gratuite, toutes les règles continuent de fonctionner, mais un seul appareil envoie des rapports : le total du jour et les 3 applications les plus utilisées, mis à jour quand vous consultez l’app. Premium ajoute les mises à jour en direct, tous les appareils, 30 jours d’historique, l’historique web et vidéo, et les rapports hebdomadaires.',
        '4': 'Si l’essai se termine avec plus d’un appareil enfant, KidGate affiche l’écran Choisissez votre appareil principal. Cet appareil continue d’envoyer des rapports ; les autres affichent En pause mais gardent leurs règles. Vous pouvez changer ce choix une fois tous les 7 jours.',
        '5': 'Pour vous abonner, choisissez une formule et sélectionnez S’abonner à Premium. Avec l’abonnement, tous les appareils en pause envoient de nouveau des rapports. Si vous avez déjà payé, sélectionnez Restaurer les achats.',
      },
    },
    notificationSettings: {
      title: 'Choisir les alertes que vous recevez',
      summary:
        'Activez ou désactivez chaque type d’alerte et définissez des heures silencieuses, sur chaque téléphone parent.',
      tip: 'Le SOS arrive toujours, même si tout est désactivé et pendant les heures silencieuses. Ces réglages ne s’appliquent qu’à ce téléphone ; les autres parents choisissent les leurs.',
      steps: {
        '1': 'Ouvrez Réglages, puis Notifications push.',
        '2': 'Sous Alertes, désactivez chaque type d’alerte que vous ne voulez pas sur ce téléphone, par exemple Demandes de temps, ou encore Applis installées ou supprimées.',
        '3': 'L’option Bilan hebdomadaire contrôle la notification du lundi qui annonce le rapport hebdomadaire.',
        '4': 'Activez Heures silencieuses et réglez les champs De et À pour couper les alertes la nuit. Les horaires suivent l’horloge de ce téléphone.',
        '5': 'Dans Réglages, les options Alertes dans l’application et Sirène SOS sont distinctes : elles contrôlent la bannière dans l’app et le son puissant du SOS sur ce téléphone.',
      },
    },
    webSignIn: {
      title: 'Utiliser KidGate sur un ordinateur',
      summary:
        'Connectez-vous au tableau de bord web et gérez votre famille depuis un navigateur.',
      tip: 'N’autorisez qu’un navigateur sur lequel vous vous connectez vous-même : il obtient le même contrôle que votre téléphone. Le tableau de bord web ne permet ni d’appairer des appareils ni d’acheter une formule. Pour déconnecter un navigateur, utilisez Se déconnecter dans le tableau de bord.',
      steps: {
        '1': 'Sur l’ordinateur, ouvrez dashboard.kidgate.app et choisissez Se connecter avec l’appli KidGate. Un code QR s’affiche.',
        '2': 'Sur votre téléphone, ouvrez Réglages, puis Se connecter sur le web. Vous pouvez aussi scanner depuis Famille avec l’icône de scan.',
        '3': 'Scannez le code QR affiché dans le navigateur. Si l’appareil photo ne parvient pas à le lire, saisissez plutôt le code à 6 caractères.',
        '4': 'Vérifiez que le code correspond, puis sélectionnez Autoriser. Sélectionnez Ne pas autoriser si ce n’est pas vous qui avez lancé cette connexion.',
        '5': 'Le navigateur se connecte en quelques secondes et peut effectuer des modifications pendant 7 jours. Passé ce délai, il continue d’afficher votre famille ; pour modifier quelque chose, sélectionnez Déverrouiller les modifications dans le tableau de bord et saisissez votre code PIN parent, ou autorisez à nouveau le navigateur depuis votre téléphone.',
      },
    },
    securityPins: {
      title: 'Code PIN parent et Verrouillage de l’app',
      summary:
        'Deux codes PIN différents : le code PIN parent protège les réglages sur l’appareil de votre enfant, et le Verrouillage de l’app protège l’app parent sur votre téléphone.',
      tip: 'Seul le propriétaire de la famille peut définir ou réinitialiser le code PIN parent. Ne le partagez jamais avec votre enfant.',
      steps: {
        '1': 'Ouvrez Réglages. Sous Sécurité, sélectionnez Code PIN parent pour créer un code PIN à 6 chiffres, ou pour le modifier.',
        '2': 'L’appareil de votre enfant demande le code PIN parent avant de permettre de modifier les Applications bloquées ou de déconnecter KidGate sur cet appareil.',
        '3': 'Si vous l’oubliez, sélectionnez PIN oublié ? au même endroit pour en définir un nouveau en tant que propriétaire de la famille.',
        '4': 'Si un appareil enfant se verrouille après 5 tentatives de PIN incorrectes, la section Sécurité affiche une ligne de déverrouillage pour cet appareil. Sélectionnez-la pour réinitialiser les tentatives.',
        '5': 'Pour protéger l’app parent sur ce téléphone, activez Verrouillage de l’app et créez son propre code PIN à 6 chiffres. Vous pouvez aussi autoriser le déverrouillage avec Face ID, Touch ID ou une empreinte digitale.',
      },
    },
    deleteAccount: {
      title: 'Supprimer votre compte',
      summary:
        'Supprimez votre compte KidGate et ses données, avec 14 jours pour changer d’avis.',
      tip: 'Supprimer votre compte n’annule pas un abonnement souscrit sur l’App Store ou Google Play : annulez-le dans la boutique concernée. Un co-parent qui veut seulement cesser de gérer la famille peut plutôt la quitter.',
      steps: {
        '1': 'Ouvrez Réglages et, sous Compte, sélectionnez Supprimer le compte.',
        '2': 'Lisez ce qui sera supprimé. Si vous êtes le propriétaire de la famille, tous les co-parents et tous les appareils enfants perdent aussi l’accès.',
        '3': 'Confirmez votre identité (votre mot de passe, ou une nouvelle connexion avec Google ou Apple), saisissez « OK », puis sélectionnez Supprimer définitivement.',
        '4': 'Le compte est supprimé au bout de 14 jours. D’ici là, ouvrez KidGate et sélectionnez Annuler la suppression pour tout conserver.',
        '5': 'Quand un co-parent supprime son compte, seul son propre compte est supprimé ; la famille reste. Pour quitter une famille sans supprimer votre compte, ouvrez la fiche de la famille dans Famille et sélectionnez Quitter la famille.',
      },
    },
  },
  onChildDevice: 'Sur l’appareil de l’enfant',
  onParentDevice: 'Sur votre appareil',
  handoffHint:
    'KidGate peut guider ces étapes sur l’appareil de l’enfant : ouvrez KidGate sur cet appareil, allez dans État et choisissez Terminer la configuration avec un parent. Chaque étape a un bouton qui ouvre le bon écran.',
} as const;
