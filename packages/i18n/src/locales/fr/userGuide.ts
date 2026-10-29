export const userGuide = {
  title: 'Guide d’utilisation',
  subtitle:
    'Aide pas à pas sur les autorisations, l’appairage des appareils, les contrôles quotidiens et les fonctions de sécurité.',
  stepLabel: 'Étape {{n}}',
  stepsSectionTitle: 'Étapes',
  tipTitle: 'Astuce',
  // The Help Center video button: the wizard's own label (child.setupWizardWatchGuide).
  watchVideo: 'Voir comment faire',
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
        'Limite quotidienne, Heures bloquées, Applications bloquées, Limites d’apps, Verrouillage de l’appareil, Demandes de temps et Tâches bonus',
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
        'Premium, alertes, langue, tableau de bord web, codes PIN, assistance et suppression du compte',
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
        '2': 'Sélectionnez « Rejoindre KidGate », puis connectez-vous avec Google ou Apple, ou créez un compte e-mail.',
        '3': 'Dans Famille, sélectionnez Créer une famille et nommez votre famille (par exemple, « Famille Nguyen »). Ce nom apparaît quand d’autres parents rejoignent la famille. Si un autre parent a déjà créé votre famille, sélectionnez plutôt Rejoindre une famille.',
        '4': 'Si vous êtes le propriétaire de la famille, définissez un code PIN parent (6 chiffres) dans Réglages, puis Sécurité. Mémorisez-le ou conservez-le en lieu sûr, et ne le partagez pas avec les enfants.',
        '5': 'Recommandé : activez le verrouillage de l’app et le déverrouillage biométrique dans Réglages afin que d’autres personnes ne puissent pas ouvrir l’app parent sur votre appareil.',
        '6': 'Ouvrez Famille et appuyez sur l’icône de scan (Scanner un code). L’appareil photo s’ouvre directement : scannez le code QR affiché sur l’appareil de l’enfant, ou sélectionnez Saisir le code manuellement et tapez le code.',
        '7': 'Une fois l’appareil de l’enfant connecté, KidGate demande qui l’utilise : choisissez votre enfant (ou ajoutez-en un), ou « Personne » pour un appareil partagé. Ouvrez ensuite le profil de votre enfant dans Famille (ou l’appareil, s’il n’est attribué à aucun enfant). Définissez la Limite quotidienne et les Heures bloquées, et terminez les autorisations avec votre enfant.',
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
        '5': 'Sur l’écran « État », sélectionnez « Poursuivre la configuration » dans la carte « Termine la configuration avec un parent ». « Configurer la protection » demande ensuite chaque autorisation dont KidGate a besoin (notifications, localisation, appareil photo et droits spécifiques à la plateforme), une étape à la fois. Autorisez chacune, ou ignorez pour l’instant une étape facultative.',
        '6': 'Laissez KidGate installé et connecté sur l’appareil de l’enfant. Les parents gèrent les limites depuis leur propre appareil par la suite.',
      },
    },
    connectChild: {
      title: 'Connecter le téléphone ou la tablette d’un enfant',
      summary:
        'Appairez un nouvel appareil enfant à votre famille avec un code QR ou un code.',
      tip: 'Les codes expirent. Si l’appairage échoue, sélectionnez Nouveau code sur l’appareil de l’enfant et réessayez. Avec l’offre gratuite, un seul appareil envoie des rapports et vous ne pouvez renforcer les règles que sur celui-ci : un autre appareil que vous appairez démarre donc en pause.',
      steps: {
        '1': 'Sur l’appareil de l’enfant : ouvrez KidGate, puis Ceci est un appareil enfant. Laissez l’écran du code QR visible.',
        '2': 'Sur l’appareil parent : ouvrez Famille et appuyez sur l’icône de scan (Scanner un code).',
        '3': 'L’appareil photo s’ouvre directement : autorisez l’accès si demandé, et alignez le code QR de l’appareil de l’enfant dans le cadre.',
        '4': 'Ou utilisez le code : sélectionnez Saisir le code manuellement, tapez les 6 caractères affichés sur l’appareil de l’enfant, puis continuez.',
        '5': 'Sur l’appareil de l’enfant, lisez attentivement l’écran de confirmation. Sélectionnez Oui, connecter uniquement si le nom du parent est correct.',
        '6': 'Attendez que l’appareil parent confirme la connexion. Le propriétaire de la famille doit alors indiquer qui utilise le nouvel appareil : choisissez un enfant, ou « Personne » pour un appareil partagé. L’appareil apparaît sous Famille.',
        '7': 'Ouvrez le nouvel appareil et vérifiez que Dernière activité affiche une heure (Dernière connexion sur un iPhone). En ligne signifie que quelqu’un a utilisé l’appareil au cours des 10 dernières minutes : un appareil que personne n’utilise apparaît donc Hors ligne alors qu’il est toujours connecté. Si aucune heure n’apparaît, rouvrez KidGate sur l’appareil de l’enfant et vérifiez la connexion réseau.',
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
        '3': 'Ouvrez KidGate sur l’ordinateur. Il affiche un code QR et un code à 6 caractères. Aucune connexion n’est nécessaire. Si sa fenêtre est fermée, cliquez sur l’icône KidGate dans la barre des menus (Mac) ou dans la zone de notification (Windows).',
        '4': 'Sur votre appareil, ouvrez Famille, appuyez sur l’icône de scan (Scanner un code) et scannez le code QR — ou sélectionnez Saisir le code manuellement et tapez le code.',
        '5': 'Sur l’ordinateur, vérifiez le nom du parent et sélectionnez Oui, connecter.',
        '6': 'Suivez chaque étape de l’écran Terminer la configuration de cet appareil. Sur un Mac, sélectionnez Ouvrir Réglages pour l’étape Autoriser le filtre web, puis activez KidGate dans la page qui s’ouvre — le Filtre web ne fonctionne pas tant que ce n’est pas fait. Sur un Mac, sélectionnez Autoriser pour Localisation et Caméra. Sous Windows, activez KidGate pour les deux dans Paramètres, sous Confidentialité et sécurité, si l’étape vous le demande.',
        '7': 'De retour sur votre appareil, le propriétaire de la famille choisit quel enfant utilise l’ordinateur. Sur un Mac ou un PC Windows, vous bloquez les applications depuis « Applications installées ».',
      },
    },
    updateComputer: {
      title: 'Mettre à jour KidGate sur un ordinateur',
      summary:
        'Installez la nouvelle version sur le Mac ou le PC Windows de votre enfant. Cela se fait directement sur l’ordinateur, avec son mot de passe administrateur — pas depuis votre appareil.',
      keywords:
        'obsolète, périmé, ancienne version, dernière version, mise à niveau, réinstaller, admin, contrôle de compte d’utilisateur, uac, macbook, imac, portable',
      tip: 'Si votre enfant utilise un compte standard (non administrateur), comme recommandé lors de la connexion de l’ordinateur, une mise à jour exige le nom et le mot de passe d’un administrateur. Votre enfant ne peut donc pas l’installer seul. Vous n’avez pas besoin de changer de compte. Saisissez-les dans la fenêtre qui s’affiche. L’ordinateur reste connecté et conserve ses règles, et aucun nouvel appairage n’est nécessaire.',
      steps: {
        '1': 'Vous recevez une notification pour chaque ordinateur à mettre à jour, et la page de l’ordinateur indique qu’il n’est pas à jour. Il n’y a rien à installer depuis votre appareil. Allez sur l’ordinateur.',
        '2': 'Sur l’ordinateur, ouvrez KidGate. Si sa fenêtre est fermée, cliquez sur l’icône KidGate dans la barre des menus (Mac) ou dans la zone de notification (Windows). En haut de l’écran État, un bandeau indique « Une version plus récente de KidGate est disponible » — en rouge, avec « Mise à jour importante », si la mise à jour ne peut pas attendre.',
        '3': 'Sélectionnez « Obtenir la mise à jour ». KidGate télécharge la nouvelle version et ouvre le programme d’installation. Si le téléchargement échoue, c’est kidgate.app/download qui s’ouvre. Téléchargez KidGate depuis cette page et lancez-le, comme la première fois.',
        '4': 'Sur un Mac, suivez le programme d’installation et saisissez le nom et le mot de passe de l’administrateur lorsqu’ils sont demandés. Sur Windows, le système vous demande d’abord d’autoriser l’application à apporter des modifications. Saisissez le mot de passe administrateur si nécessaire, sélectionnez Oui, puis suivez le programme d’installation.',
        '5': 'Laissez l’ordinateur allumé jusqu’à ce que KidGate redémarre de lui-même. De retour sur votre appareil, l’ordinateur apparaît de nouveau à jour (sur le tableau de bord web, actualisez la page).',
      },
    },
    connectTv: {
      title: 'Connecter une Android TV',
      summary:
        'Installez KidGate sur une Android TV et appairez-la depuis votre appareil, sans rien saisir avec la télécommande.',
      keywords: 'android tv, google tv, télévision, télé, box',
      tip: 'Une TV ne propose ni Localisation, ni SOS, ni Check-in, ni Demandes de temps, et une application bloquée est fermée après s’être ouverte au lieu d’être empêchée de s’ouvrir. Le temps d’écran peut remonter avec jusqu’à une heure de retard. Une TV sans les services Google Play ne reçoit pas de notifications push : un verrouillage, un déverrouillage ou un changement de règle peut donc mettre jusqu’à 30 minutes à arriver.',
      steps: {
        '1': 'Sur la TV, ouvrez Google Play, recherchez KidGate et installez-le.',
        '2': 'Ouvrez KidGate sur la TV. Il affiche un code QR et un code à 6 caractères. Aucune connexion n’est nécessaire.',
        '3': 'Sur votre appareil, ouvrez Famille, appuyez sur l’icône de scan (Scanner un code) et scannez le code QR affiché sur la TV — ou sélectionnez Saisir le code manuellement et tapez le code.',
        '4': 'La TV se connecte d’elle-même en quelques secondes. Il n’y a rien à confirmer avec la télécommande.',
        '5': 'Suivez l’écran Configurer la protection sur la TV : sélectionnez Accepter pour activer Accessibilité, Ouvrir les Réglages pour Accès à l’utilisation et Superposition aux autres apps, puis Activer le VPN et approuvez la connexion pour que le Filtre web puisse fonctionner.',
        '6': 'Si un réglage ne reste pas activé, redémarrez la TV et réessayez. Vous pouvez rouvrir Configurer la protection depuis l’écran principal de KidGate sur la TV.',
        '7': 'De retour sur votre appareil, le propriétaire de la famille choisit quel enfant utilise la TV. Vous bloquez les applications de la TV depuis « Applications installées ».',
      },
    },
    connectChrome: {
      title: 'Connecter l’extension Chrome',
      summary:
        'Ajoutez le filtre web KidGate à Chrome sur un Chromebook, un Mac ou un PC. L’extension apparaît comme un appareil à part.',
      keywords: 'chromebook, extension chrome, extension de navigateur',
      tip: 'L’extension ne filtre que Chrome : ni les autres navigateurs, ni les fenêtres de navigation privée, sauf si vous l’autorisez. Sur chrome://extensions, ouvrez les Détails de KidGate et activez Autoriser en mode navigation privée. Elle n’a ni Limite quotidienne, ni Heures bloquées, ni Verrouillage de l’appareil, ni Applications bloquées, ni temps d’écran ; il faut pour cela un téléphone, un ordinateur ou une TV.',
      steps: {
        '1': 'Dans Chrome, sur l’ordinateur de votre enfant, allez sur le Chrome Web Store, recherchez KidGate et sélectionnez Ajouter à Chrome.',
        '2': 'Sélectionnez l’icône KidGate dans la barre d’outils de Chrome. Si vous ne la voyez pas, épinglez-la depuis le menu Extensions (icône en forme de pièce de puzzle). La fenêtre pop-up affiche un code QR et un code à 6 caractères. Gardez-la ouverte pendant l’appairage.',
        '3': 'Sur votre appareil, ouvrez Famille, appuyez sur l’icône de scan (Scanner un code) et scannez le code QR — ou sélectionnez Saisir le code manuellement et tapez le code.',
        '4': 'Dans la fenêtre pop-up de KidGate, vérifiez le nom du parent et sélectionnez Oui, connecter.',
        '5': 'De retour sur votre appareil, le propriétaire de la famille choisit quel enfant utilise l’extension ; activez ensuite le Filtre web pour celle-ci. D’ici là, l’extension affiche Inactif.',
        '6': 'Facultatif, avec Premium : pour voir quelles vidéos sont regardées, ouvrez Vidéos regardées et activez Enregistrer les vidéos regardées pour l’extension.',
      },
    },
    inviteParent: {
      title: 'Inviter un autre parent',
      summary:
        'Permettez à un second parent de rejoindre la même famille et de gérer les mêmes appareils enfants.',
      tip: 'Seul le propriétaire de la famille peut approuver les demandes. Approuvez rapidement, car les demandes peuvent expirer. Une famille peut compter jusqu’à 3 parents avec la version gratuite et pendant l’essai, et jusqu’à 6 avec Premium.',
      steps: {
        '1': 'Sur l’appareil du propriétaire de la famille, ouvrez Famille. Si votre famille n’a pas encore de nom, appuyez sur +, choisissez Créer une famille et nommez-la.',
        '2': 'Appuyez sur + et choisissez Inviter un parent.',
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
    manageDevices: {
      title: 'Renommer ou supprimer un appareil',
      summary:
        'Donnez à un appareil un nom que tout le monde reconnaît, ou déconnectez celui que votre enfant n’utilise plus.',
      keywords:
        'dissocier, déconnecter, effacer l’appareil, ancien téléphone, nouveau téléphone, vendu, changer le nom, réinitialiser',
      tip: 'Seul le propriétaire de la famille peut renommer ou supprimer des appareils. La suppression est définitive : le temps d’écran, la localisation, l’historique web et vidéo, l’activité, la liste des apps, les alertes SOS, les Check-ins, les demandes et les tâches bonus de l’appareil sont effacés. Pour le protéger à nouveau, connectez-le comme un nouvel appareil.',
      steps: {
        '1': 'Pour renommer un appareil, ouvrez-le depuis Famille ou depuis votre enfant, puis sélectionnez Modifier à côté de son nom.',
        '2': 'Saisissez un nom que tous les parents reconnaîtront d’un coup d’œil, puis enregistrez.',
        '3': 'Pour supprimer un appareil, ouvrez-le, sélectionnez Supprimer l’appareil en bas de son écran, puis confirmez. Dans l’onglet Appareils enfants de la fiche de la famille, vous pouvez aussi faire glisser un appareil vers la gauche.',
        '4': 'L’appareil quitte votre famille. Un téléphone indique qu’il a été supprimé ; un ordinateur, une TV ou l’extension Chrome revient à son écran d’appairage.',
        '5': 'Pour réutiliser l’appareil, par exemple après une réinitialisation ou s’il passe à un autre enfant, connectez-le comme un nouvel appareil : ouvrez Famille et appuyez sur l’icône de scan (Scanner un code).',
      },
    },
    androidPermissions: {
      title: 'Autorisations Android (appareil enfant)',
      summary:
        'Activez l’Accès à l’utilisation, l’affichage par-dessus les autres apps, l’Accessibilité, la batterie et les autorisations associées.',
      keywords:
        'accessibilité, accès aux données d’utilisation, superposition, notifications, administrateur de l’appareil, protection contre la désinstallation, microphone, vpn, autoriser',
      tip: 'L’exhaustivité compte plus que l’ordre. Effectuez chaque étape proposée par l’assistant, y compris les étapes facultatives, avant de compter sur le verrouillage ou les Heures bloquées. Une étape ignorée reste sur l’écran État jusqu’à ce que vous la fassiez.',
      steps: {
        '1': 'Ouvrez KidGate sur l’appareil de l’enfant et allez dans « État ». Sur la carte « Termine la configuration avec un parent », sélectionnez « Poursuivre la configuration » (une fois les étapes indispensables terminées, la carte affiche « La protection de base est active », avec « Renforcer maintenant »). « Configurer la protection » vous guide ensuite à travers les autorisations, une à la fois, dans l’ordre ci-dessous.',
        '2': 'Accès à l’utilisation : ouvrez l’écran système, puis trouvez KidGate, puis activez-le. C’est requis pour le suivi du temps d’écran et les limites.',
        '3': 'Assistant d’accessibilité pour le verrouillage : lisez l’information affichée et sélectionnez « Accepter » ; la page Accessibilité s’ouvre. Si une liste s’ouvre, trouvez KidGate sous « Apps installées / téléchargées », activez-le, puis sélectionnez « Autoriser » dans la confirmation d’Android. Cela garantit que le verrouillage reste appliqué.',
        '4': 'Superposition aux autres apps : autorisez KidGate, pour que l’écran de verrouillage puisse s’afficher par-dessus les autres apps. Ensuite, Notifications : sélectionnez « Autoriser ». KidGate a besoin des notifications de cet appareil pour les approbations de temps et les rappels.',
        '5': 'Localisation : choisissez « Toujours autoriser », sinon la carte ne se met à jour que lorsque KidGate est ouvert. Si le Filtre web est activé, l’étape suivante demande son VPN : sélectionnez « Activer le VPN » et acceptez la demande d’Android.',
        '6': 'Batterie sans restriction : sélectionnez Autoriser quand demandé. Si aucune invite n’apparaît : Infos sur l’app, puis Batterie, puis Sans restriction.',
        '7': 'Alarmes et rappels : autorisez-le pour que les Heures bloquées commencent et se terminent à l’heure. Ensuite, Empêcher la désinstallation : sélectionnez « Autoriser », puis Activer sur l’écran de confirmation d’Android. Il faudra alors désactiver cette option avant de pouvoir supprimer KidGate, et un parent en est alerté.',
        '8': 'Alertes messages : sélectionnez « Autoriser l’accès aux notifications » et activez KidGate dans la liste qui s’ouvre ; cela n’a d’importance que lorsqu’un parent active les Alertes messages. Ensuite, Caméra (pour le Check-in et les photos SOS) et microphone (pour le son du SOS) : autorisez-les pendant l’utilisation de l’app. Quand l’assistant affiche « Tout est prêt », la configuration est terminée.',
      },
    },
    iosScreenTime: {
      title: 'Temps d’écran iOS (appareil enfant)',
      summary:
        'Autorisez Utilisation des apps et des sites web afin que le verrouillage, les horaires et la sélection d’apps puissent fonctionner.',
      keywords: 'temps d’écran, family controls, iphone, ipad, autoriser',
      tip: 'Si l’autorisation échoue, KidGate en indique la raison : l’appareil a besoin d’un code, une autre app contrôle déjà Temps d’écran, ou une restriction empêche KidGate de l’utiliser. Corrigez cela dans Réglages iOS, puis réessayez.',
      steps: {
        '1': 'Ouvrez KidGate sur l’appareil de l’enfant et allez dans « État ». Sur la carte « Termine la configuration avec un parent », sélectionnez « Poursuivre la configuration » (une fois les étapes indispensables terminées, la carte affiche « La protection de base est active », avec « Renforcer maintenant »).',
        '2': 'Dans « Configurer la protection », sélectionnez « Autoriser l’utilisation des apps et des sites web ».',
        '3': 'Dans la boîte de dialogue système, sélectionnez Autoriser. Merci de ne pas fermer la boîte de dialogue sans faire de choix.',
        '4': 'Revenez à KidGate. L’assistant passe à l’étape suivante dès que l’autorisation réussit.',
        '5': 'Si l’autorisation a été refusée précédemment : ouvrez Réglages iOS, trouvez KidGate, activez Temps d’écran sur cette page, puis rouvrez KidGate.',
        '6': 'Pour choisir les applications bloquées : sur l’appareil de l’enfant, ouvrez Réglages KidGate, sélectionnez Déverrouiller avec le code PIN parent, ouvrez Applications bloquées, puis enregistrez.',
        '7': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Applications, et confirmez que la liste a bien été synchronisée. Activez le blocage quand vous êtes prêt.',
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
        '1': 'Ouvrez KidGate, allez dans État, puis ouvrez Configurer la protection. Cherchez l’étape Autoriser le démarrage automatique ; elle n’apparaît que sur les appareils dont le fabricant l’exige.',
        '2': 'Autorisez le démarrage automatique de KidGate dans l’écran de sécurité du fabricant (le libellé varie selon l’appareil).',
        '3': 'Réglez l’utilisation de la batterie de KidGate sur Sans restriction, à la fois dans les réglages Android et dans le menu batterie du fabricant, si les deux existent.',
        '4': 'Désactivez toute liste « apps en veille », « apps en veille profonde » ou « mise en veille des apps » incluant KidGate.',
        '5': 'Si un raccourci ne fonctionne pas, ouvrez manuellement l’app Sécurité / Entretien de l’appareil et recherchez KidGate, Démarrage automatique ou Batterie.',
        '6': 'KidGate ne peut pas lire les réglages du fabricant : sélectionnez donc Terminé sur l’étape Autoriser le démarrage automatique une fois que vous l’avez autorisé dans ces réglages.',
      },
    },
    dailyLimit: {
      title: 'Définir une Limite quotidienne',
      summary: 'Plafonnez le temps d’utilisation quotidien des appareils d’un enfant.',
      keywords: 'temps d’écran, heures par jour, temps écoulé, quota, prolonger',
      tip: 'Les données d’utilisation proviennent de l’appareil de l’enfant. Si le compteur semble bloqué, ouvrez KidGate sur l’appareil de l’enfant et attendez une synchronisation.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez Famille, puis appuyez sur le profil de votre enfant (ou sur l’appareil, s’il n’est attribué à aucun enfant).',
        '2': 'Sous Contrôles essentiels, sélectionnez Limite quotidienne.',
        '3': 'Choisissez une valeur en minutes par jour (ou modifiez le plafond existant), puis enregistrez. Pour un enfant, il s’agit d’un total unique, partagé par tous ses appareils.',
        '4': 'Après la synchronisation de l’appareil de l’enfant, vérifiez que les minutes utilisées aujourd’hui s’affichent à côté de la limite.',
        '5': 'Quand la limite est atteinte, l’appareil se verrouille jusqu’à minuit. Pour donner plus de temps aujourd’hui, approuvez une demande de temps ou augmentez la Limite quotidienne. Déverrouiller ne lève qu’un verrouillage que vous avez vous-même défini.',
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
        '2': 'Activez l’interrupteur « Activer les Heures bloquées ». Tant qu’il est désactivé, l’écran n’affiche aucune plage horaire et aucun moyen d’en ajouter une.',
        '3': 'Un nouveau planning commence avec une plage, de 22:00 à 07:00. Appuyez sur une plage pour régler ses horaires sur le cadran et choisir les jours de répétition. Pour ajouter une autre plage, sélectionnez « Ajouter une plage horaire » ou l’un des choix proposés sous « Ajout rapide ».',
        '4': 'Chaque modification est enregistrée dès que vous la faites. Pour supprimer une plage, balayez-la vers la gauche, ou ouvrez-la et sélectionnez « Supprimer ».',
        '5': 'Sur un appareil enfant Android, vérifiez que « Alarmes et rappels » est toujours autorisé pour que les plages commencent et se terminent à l’heure. Sur un iPhone ou un iPad, vérifiez que « Temps d’écran » est toujours autorisé.',
        '6': 'Pendant une plage active, la fiche Heures bloquées affiche Heures bloquées actives · verrouillé. Déverrouiller ne met pas fin à une plage : pour en terminer une plus tôt, désactivez l’interrupteur Activer les Heures bloquées ou modifiez ses horaires.',
      },
    },
    blockedApps: {
      title: 'Bloquer des applications spécifiques',
      summary:
        'Bloquez des applications depuis « Applications installées ». Sur un iPhone, choisissez-les sur l’iPhone lui-même.',
      keywords:
        'bloquer une appli, bloquer une application, tiktok, facebook, instagram, jeux, roblox, masquer une appli',
      tip: 'Un appareil d’enfant connecté reçoit chaque changement en une minute. Sous iOS, Apple peut masquer les noms exacts des applications aux appareils parents, et les applications se choisissent sur l’iPhone avec le code PIN parent.',
      steps: {
        '1': 'Sur votre appareil, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis « Applications », puis « Applications installées ».',
        '2': 'Appuyez sur une application et choisissez « Bloquer ». Bloquer une nouvelle application nécessite Premium.',
        '3': 'L’application se ferme sur l’appareil de l’enfant dès qu’elle s’ouvre. Pour l’autoriser à nouveau, appuyez dessus et choisissez « Débloquer ».',
        '4': 'Sur un iPhone, choisissez les applications sur l’iPhone lui-même : ouvrez KidGate, puis Réglages, sélectionnez « Déverrouiller avec le code PIN parent », puis ouvrez « Applications bloquées ».',
        '5': 'Activez ensuite « Activer les Applications bloquées » sur votre appareil. Le statut doit indiquer « Blocage activé ».',
        '6': 'Testez en ouvrant une application bloquée sur l’appareil de l’enfant. Elle doit être restreinte selon les règles de la plateforme.',
        '7': 'Pour modifier plus tard la liste d’un iPhone, répétez la sélection sur l’iPhone avec le code PIN parent.',
      },
    },
    appLimits: {
      title: 'Définir les Limites d’apps',
      summary:
        'Donnez à certaines applications leur propre plafond par jour, en plus de la Limite quotidienne.',
      keywords: 'limite de temps par appli, minutes par appli, tiktok, youtube, jeux',
      tip: 'Les Limites d’apps ne sont pas disponibles sur iPhone ni sur iPad. Sur un ordinateur ou une TV, une application qui atteint son plafond est fermée après s’être ouverte au lieu d’être empêchée de s’ouvrir.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Applications. Chaque appareil a ses propres limites ; si votre enfant en utilise plusieurs, chaque application indique sur lequel elle se trouve.',
        '2': 'Ouvrez l’onglet « Applications installées », appuyez sur l’application et sélectionnez « Définir une limite de temps ». Une nouvelle limite commence avec un plafond de 60 minutes.',
        '3': 'Réglez chaque plafond avec le cadran ou un préréglage, de 5 minutes à 8 heures par jour. Vous pouvez plafonner jusqu’à 20 applications.',
        '4': 'Sélectionnez « Enregistrer la limite ». Elle s’applique immédiatement, et les limites se réinitialisent à minuit sur l’appareil de l’enfant.',
        '5': 'La Limite quotidienne s’applique toujours à l’ensemble de l’appareil : une application peut donc être verrouillée avant d’avoir atteint son propre plafond. Pour supprimer une limite, appuyez dessus sous « Limites actuelles » dans l’onglet « Aperçu », puis sélectionnez « Supprimer la limite ».',
      },
    },
    lockUnlock: {
      title: 'Verrouiller et déverrouiller l’appareil',
      summary:
        'Verrouillez immédiatement l’appareil de l’enfant, ou restaurez l’accès.',
      tip: 'Sur Android, le verrouillage est le plus efficace quand Superposition aux autres apps et Accessibilité sont tous deux activés. Sur iOS, le verrouillage dépend de l’autorisation Temps d’écran ; si KidGate était fermé sur l’iPhone, le verrouillage apparaît dès que KidGate fonctionne de nouveau.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant).',
        '2': 'Sélectionnez Tout verrouiller pour verrouiller tous les appareils de cet enfant, ou ouvrez un appareil et sélectionnez Verrouiller l’appareil.',
        '3': 'Attendez quelques secondes. Le statut doit passer à Verrouillé. Si rien ne change, ouvrez KidGate sur l’appareil de l’enfant et revérifiez les autorisations.',
        '4': 'Pour restaurer l’accès, sélectionnez Tout déverrouiller (ou Déverrouiller sur l’écran de l’appareil).',
        '5': 'Facultatif : vous pouvez aussi verrouiller ou déverrouiller rapidement depuis Famille si ces raccourcis apparaissent sur la fiche appareil.',
        '6': 'Un téléphone ou un ordinateur verrouillé permet toujours à votre enfant d’envoyer un SOS. Sur Android, les appels fonctionnent toujours, et le SOS ouvre aussi les plans et les messages pendant 5 minutes, tout le reste restant verrouillé ; le SOS apparaît dans Activité.',
      },
    },
    siri: {
      title: 'Utiliser Siri sur votre iPhone',
      summary:
        'À la voix, verrouillez ou déverrouillez les appareils d’un enfant, donnez des minutes en plus et écoutez son temps d’écran du jour.',
      keywords:
        'voix, commande vocale, parler, mains libres, assistant vocal, Raccourcis, voice',
      tip: 'Les commandes vocales fonctionnent sur l’iPhone d’un parent, pour tous les parents de la famille, dans la langue réglée pour Siri. Dans certaines langues, Siri ne reconnaît pas le nom KidGate prononcé (c’est le cas en vietnamien) : saisissez plutôt la commande pour Siri au clavier, ou lancez-la depuis l’app Raccourcis. Les téléphones Android et le tableau de bord web n’en ont pas.',
      steps: {
        '1': 'Connectez-vous à KidGate sur votre iPhone et ouvrez l’app une fois. C’est ainsi que Siri apprend les prénoms de vos enfants, et un enfant ou un appareil ajouté ensuite est connu de Siri dès que vous rouvrez KidGate. Si Siri répond « Connectez-vous d’abord à KidGate. », ouvrez KidGate sur cet iPhone.',
        '2': 'Dites à Siri « KidGate, verrouille Léa », avec le prénom de votre enfant. Tous les appareils de cet enfant se verrouillent, comme avec Tout verrouiller. Un appareil qui n’est attribué à aucun enfant répond à son propre nom.',
        '3': 'Dites « KidGate, déverrouille Léa » pour rétablir l’accès. Pour tous les appareils de la famille à la fois, dites « KidGate, verrouille tout » ou « KidGate, déverrouille tout ».',
        '4': 'Dites « KidGate, donne des minutes en plus à Léa » pour ajouter 15 minutes aujourd’hui sur tous les appareils de cet enfant. Le temps en plus prend fin à minuit.',
        '5': 'Dites « KidGate temps d’écran de Léa » pour entendre le temps d’écran du jour. Siri lit les derniers chiffres que KidGate vous a affichés. Ouvrez d’abord KidGate pour avoir les plus récents.',
        '6': 'L’app Raccourcis liste les mêmes commandes sous KidGate, à lancer d’un toucher. Pour donner une autre durée, de 5 à 180 minutes, ajoutez l’action « Donner des minutes supplémentaires à un enfant » à votre propre raccourci et réglez-y les minutes.',
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
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis l’option Pause Internet dans la section Surveillance de la sécurité.',
        '2': 'Choisissez une durée avec le cadran ou un préréglage rapide (30, 60 ou 120 minutes), puis confirmez.',
        '3': 'Le Web reste bloqué sur cet appareil jusqu’à la fin du temps choisi. Vos réglages du Filtre web ne sont pas modifiés, et la pause fonctionne même lorsque le Filtre web est désactivé. Sur un ordinateur, les navigateurs sont fermés jusqu’à la fin de la pause.',
        '4': 'Pour y mettre fin plus tôt, ouvrez l’appareil, appuyez sur la fiche Pause Internet et sélectionnez Reprendre. Les minutes restantes ne sont pas conservées.',
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
      title: 'Configurer les Tâches bonus',
      summary:
        'Créez de petites tâches que votre enfant peut accomplir pour gagner des minutes en plus aujourd’hui.',
      tip: 'Les minutes bonus ne comptent que si l’appareil a une Limite quotidienne. Elles sont ajoutées à l’appareil sur lequel votre enfant a indiqué que la tâche était faite. Les Tâches bonus ne sont pas disponibles sur Android TV ni dans l’extension Chrome.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Tâches bonus.',
        '2': 'Sélectionnez Nouvelle tâche (tant que la liste est vide, vous pouvez aussi partir d’un modèle). Saisissez la tâche, choisissez la récompense en minutes (de 5 à 240), une difficulté et la répétition (Chaque jour ou Une fois), puis sélectionnez Créer la tâche.',
        '3': 'Sur l’appareil de l’enfant, la tâche apparaît sous Gagne du temps en plus. Une fois la tâche faite, votre enfant sélectionne C’est fait.',
        '4': 'Vous recevez une notification. La tâche apparaît dans Approbation requise (dans Famille et dans le profil de votre enfant) et dans À approuver (sur l’écran Tâches bonus). Sélectionnez Approuver pour ajouter les minutes pour aujourd’hui, ou Renvoyer pour que votre enfant puisse réessayer.',
        '5': 'Appuyez sur une tâche pour la modifier ou la supprimer. L’offre gratuite permet jusqu’à 10 tâches actives à la fois, et Premium en permet 20.',
        '6': 'Chaque tâche vaut 1 à 3 étoiles selon sa difficulté, et les étoiles comptent une fois la tâche approuvée. Dans une famille de 2 enfants ou plus, chaque enfant voit le Tableau des étoiles de la semaine dans KidGate sur son appareil ; il repart de zéro chaque semaine. Pour le masquer, le propriétaire de la famille ouvre Famille, puis la fiche de la famille, et désactive le Tableau des étoiles dans l’onglet Enfants.',
      },
    },
    locationSharing: {
      title: 'Activer le partage de localisation',
      summary: 'Consultez la dernière position de votre enfant sur l’appareil parent.',
      keywords: 'gps, carte, où est mon enfant, localiser le téléphone, lieux',
      tip: 'La localisation nécessite une autorisation sur l’appareil de l’enfant et une connexion réseau stable. Le GPS en intérieur peut être moins précis.',
      steps: {
        '1': 'Sur l’appareil de l’enfant, autorisez la Localisation pour KidGate quand c’est demandé (ou dans les Réglages système). Choisissez « Toujours autoriser » sur Android, ou « Toujours » sur iPhone ou iPad, sinon la position n’est mise à jour que lorsque KidGate est ouvert.',
        '2': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Localisation.',
        '3': 'Activez le partage s’il est désactivé, puis attendez la première mise à jour.',
        '4': 'Si le statut affiche toujours En attente, appuyez sur le bouton d’actualisation ou rouvrez l’écran.',
        '5': 'Facultatif et inclus dans Premium : ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis la section Alertes, et sélectionnez Lieux pour configurer des Alertes de lieux quand votre enfant entre dans un lieu enregistré ou en sort.',
        '6': 'Si le téléphone est égaré à proximité, ouvrez Localisation et touchez Faire sonner l’appareil. Un iPhone reste silencieux s’il est en mode silencieux ou qu’un mode de concentration est activé.',
      },
    },
    checkIn: {
      title: 'Demander un Check-in',
      summary:
        'Demandez à votre enfant de confirmer qu’il est en sécurité, avec sa position et, avec Premium, une photo.',
      tip: 'La photo fait partie de Premium ; avec l’offre gratuite, seule la position est demandée. L’autorisation d’accès à l’appareil photo sur l’appareil de l’enfant est requise pour la photo.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant).',
        '2': 'Sélectionnez Check-in dans la section Surveillance de la sécurité, puis « Envoyer » à côté de l’appareil.',
        '3': 'L’appareil de l’enfant reçoit une notification et un écran de Check-in. L’enfant appuie pour confirmer qu’il va bien, ou pour demander de l’aide.',
        '4': 'Avec Premium, si l’accès à l’appareil photo est autorisé, KidGate joint une photo en plus de la position lorsque c’est possible. Avec l’offre gratuite, seule la position est envoyée.',
        '5': 'Sur l’appareil parent, « Historique des check-ins » affiche sur le même écran la dernière réponse et la photo, s’il y en a une.',
      },
    },
    sos: {
      title: 'Alertes d’urgence SOS',
      summary:
        'Comment un enfant envoie un SOS, ce qu’il contient et comment les parents y répondent.',
      keywords:
        'bouton d’alerte, bouton panique, aide, danger, en danger, audio, voix, micro, sirène, e-mail, grands-parents, voisin',
      tip: 'Le SOS fonctionne sur les téléphones et les ordinateurs, pas sur une TV ni dans l’extension Chrome. Le son n’est enregistré que sur les téléphones. Testez-le une fois à la maison, avant d’ajouter des Contacts de confiance ou après les avoir prévenus, car chaque SOS leur envoie un e-mail. Convenez avec votre enfant de quand utiliser le SOS et quand un Check-in suffit.',
      steps: {
        '1': 'Sur l’appareil de l’enfant, ouvrez SOS dans KidGate. Sur un téléphone, c’est le bouton au milieu de la barre du bas.',
        '2': 'Maintenez le bouton SOS pendant 5 secondes. Le relâcher plus tôt annule l’envoi.',
        '3': 'L’alerte part dès que KidGate a la position, ce qui peut prendre jusqu’à une demi-minute ; sans position, elle part quand même. Sur un téléphone, l’appareil photo s’ouvre ensuite pour une photo, qui peut être ignorée. Si le micro a été autorisé lors de la configuration, jusqu’à 15 secondes de son sont enregistrées dès l’envoi du SOS.',
        '4': 'Les parents reçoivent une notification urgente, même pendant les Heures silencieuses. Si KidGate est ouvert, l’alerte s’affiche à l’écran, avec la Sirène SOS sauf si elle est désactivée dans Réglages.',
        '5': 'Ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis la section Alertes, et sélectionnez SOS. Chaque alerte affiche la position (Ouvrir dans Plans), la photo et l’Enregistrement audio, qui peut arriver un peu après l’alerte. Sélectionnez Je m’en occupe pour la marquer comme prise en charge.',
        '6': 'Pour prévenir aussi par e-mail des personnes hors de la famille, ouvrez Famille, puis la fiche de la famille, et choisissez Contacts de confiance. Sélectionnez Ajouter le contact pour en ajouter jusqu’à 5. À chaque SOS, elles reçoivent par e-mail le nom de l’expéditeur et la dernière position connue, jamais la photo ni le son. Prévenez-les d’abord.',
      },
    },
    webFilter: {
      title: 'Limiter les sites inappropriés',
      summary:
        'Activez le Filtre web pour le contenu inapproprié lorsque la plateforme le prend en charge.',
      keywords:
        'bloquer un site, bloquer un lien, url, contenu adulte, recherche sécurisée, mode restreint youtube, catégories, dns, dns privé, vpn, iphone, ipad',
      tip: 'Le filtre lit les noms de sites, pas les pages, et sa portée dépend de l’appareil. Les téléphones filtrent les navigateurs et de nombreuses apps. Un Mac ne peut pas vérifier les sites dont le navigateur masque le nom, soit environ la moitié des visites. Windows vérifie Chrome, Edge et Firefox, uniquement d’après le nom du site. L’extension Chrome ne filtre que Chrome. Le choix des catégories, vos propres listes et les réponses aux demandes de sites font partie de Premium. Combinez le Filtre web avec les Applications bloquées pour une protection renforcée.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Filtre web.',
        '2': 'Activez « Filtrer les sites inappropriés » en haut. Le réglage s’applique immédiatement, il n’y a rien à enregistrer. « Imposer SafeSearch » sur le même écran verrouille aussi Google, Bing et DuckDuckGo sur des résultats sûrs et YouTube sur le mode restreint, sur Android, Android TV et Chrome. Sur YouTube, le mode restreint masque aussi les commentaires et bloque certaines vidéos ordinaires ; KidGate vous demande donc confirmation avant de l’activer.',
        '3': 'Sous « Que bloquer », choisissez les catégories à refuser. Ajoutez des sites à « Toujours autoriser » ou « Toujours bloquer », ou activez « Sites autorisés uniquement » pour refuser tout ce qui ne figure pas dans votre liste d’autorisation. Quand votre enfant demande à ouvrir un site bloqué, la demande attend sous « Demandes de sites ». Ces réglages font partie de Premium ; l’offre gratuite utilise un ensemble fixe de catégories.',
        '4': 'Vérifiez à nouveau plus tard depuis le même écran. Une modification arrive sur l’appareil de l’enfant en quelques minutes, et un site déjà ouvert dessus peut continuer à se charger jusqu’à la fermeture du navigateur. Si elle n’est toujours pas arrivée, rouvrez KidGate sur l’appareil de l’enfant afin que les réglages puissent se synchroniser.',
        '5': 'Sur l’appareil de l’enfant, ouvrez KidGate et approuvez le filtre une fois. Sur un iPhone ou un iPad, sélectionnez Autoriser quand iOS demande d’ajouter des configurations VPN, puis saisissez le code de l’appareil. Sur Android, acceptez la demande de VPN, puis ouvrez Paramètres, puis Réseau et Internet, puis DNS privé, et choisissez Désactivé, car les navigateurs peuvent contourner le filtre tant que le DNS privé est activé. Sur un Mac, sélectionnez Ouvrir Réglages pour l’étape Autoriser le filtre web, puis activez KidGate.',
      },
    },
    protectionAlerts: {
      title: 'Alertes protection',
      summary:
        'Soyez averti lorsqu’une autorisation importante sur l’appareil de l’enfant est désactivée.',
      tip: 'Une alerte de protection signifie que la protection KidGate s’est affaiblie. Merci de rétablir l’autorisation sur l’appareil de l’enfant dès que possible.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis la section Alertes, et sélectionnez Alertes protection.',
        '2': 'La section « Autorisations surveillées » indique si chaque autorisation dont KidGate a besoin est toujours activée. En dessous figurent tous les changements des 30 derniers jours, par exemple la désactivation de l’Accessibilité ou de la Localisation.',
        '3': 'Sur l’appareil de l’enfant, ouvrez KidGate, puis État et réactivez l’autorisation indiquée.',
        '4': 'Retournez sur Alertes protection et vérifiez que l’autorisation apparaît de nouveau comme activée sous « Autorisations surveillées ».',
        '5': 'Gardez les notifications activées sur l’appareil parent afin d’être informé rapidement des changements.',
      },
    },
    usageReports: {
      title: 'Consulter les rapports d’utilisation',
      summary:
        'Voyez combien de temps chaque appareil a été utilisé aujourd’hui et sur les 30 derniers jours, par enfant, et dans un rapport chaque lundi.',
      tip: 'Avec l’offre gratuite, vous voyez le total du jour et les 3 applications les plus utilisées, mis à jour quand vous consultez l’app. Premium ajoute 30 jours d’historique, les moments où chaque appareil a été utilisé, les 10 applications les plus utilisées, un rapport pour chaque enfant et un nouveau rapport hebdomadaire chaque lundi. L’iPhone et l’iPad ne transmettent que le total. Le jour où un appareil rejoint la famille, l’utilisation antérieure peut être incomplète ou comptée dans « Autres applications ».',
      steps: {
        '1': 'Ouvrez Rapports. La section Aujourd’hui additionne tous les appareils ; en dessous se trouvent le Rapport hebdomadaire, chaque enfant (Par enfant) et chaque appareil (Par appareil).',
        '2': 'Appuyez sur un appareil pour ouvrir son Rapport d’utilisation : aujourd’hui par rapport à la Limite quotidienne, les 30 derniers jours, « Quand l’écran était allumé » et « Les plus utilisées ». Vous pouvez aussi l’ouvrir depuis Utilisation aujourd’hui sur l’écran de l’appareil.',
        '3': 'Appuyez sur un enfant pour voir un seul rapport couvrant tous ses appareils, pour Aujourd’hui, 7 jours ou 30 jours. Le temps passé sur deux écrans à la fois n’est compté qu’une fois : le total peut donc être inférieur à la somme des appareils.',
        '4': 'Avec Premium, un nouveau Rapport hebdomadaire arrive chaque lundi matin, avec une notification, pour toute semaine où un appareil a été utilisé. Quand un appareil se démarque, il suggère une chose à changer et ouvre le bon réglage.',
        '5': 'Quand vous ouvrez KidGate, chaque appareil est invité à envoyer des chiffres à jour : la mise à jour peut donc prendre quelques minutes. Un appareil sans connexion Internet envoie ses données dès qu’il est de nouveau en ligne.',
      },
    },
    screenTimeCounting: {
      title: 'Comment le temps d’écran est compté',
      summary:
        'Ce qui s’ajoute à la Limite quotidienne et aux rapports d’utilisation, y compris une vidéo lue dans une petite fenêtre flottante.',
      keywords:
        'image dans l’image, picture-in-picture, pip, vidéo flottante, mini-lecteur, petite fenêtre, youtube, musique, en pause, arrière-plan',
      tip: 'Sur iPhone et iPad, c’est Temps d’écran d’Apple qui décide de ce qui est compté. Sur un Mac, le son d’une vidéo peut continuer derrière le verrouillage.',
      steps: {
        '1': 'Le temps est compté tant qu’une application est ouverte sur l’écran de votre enfant. L’écran d’accueil, le bureau de l’ordinateur, l’écran de verrouillage et KidGate lui-même ne sont pas comptés.',
        '2': 'Sur un téléphone Android ou un ordinateur, une vidéo lue dans une petite fenêtre flottante (image dans l’image, PIP) est comptée pour l’application qui la lit, même quand une autre application est au premier plan.',
        '3': 'Quand cette vidéo flottante est lue par-dessus une autre application, les deux applications affichent ce temps dans « Les plus utilisées », mais le total du jour ne le compte qu’une fois.',
        '4': 'Une vidéo en pause laissée dans sa fenêtre flottante reste comptée tant que la fenêtre est à l’écran. Fermez la fenêtre pour arrêter le décompte.',
        '5': 'Sur un ordinateur, le temps passé derrière le verrouillage n’est pas compté. Sur un ordinateur Windows, le verrouillage met aussi en pause les vidéos et la musique dans la plupart des applications, et elles restent en pause quand le verrouillage est levé.',
      },
    },
    widget: {
      title: 'Ajouter un widget Temps d’écran',
      summary:
        'Voyez le temps d’écran de chaque enfant sur votre écran d’accueil, et laissez votre enfant voir sur le sien le temps qu’il lui reste.',
      keywords:
        'écran d’accueil, lanceur, en un coup d’œil, temps restant, minutes restantes, iphone, android',
      tip: 'Les widgets fonctionnent sur iPhone, iPad et Android, pas sur un ordinateur ni une TV. Un widget affiche les derniers chiffres reçus par KidGate et l’heure de cette mise à jour.',
      steps: {
        '1': 'Ouvrez Réglages et sélectionnez Ajouter le widget à l’écran d’accueil. Sur la plupart des téléphones Android, il suffit de confirmer l’emplacement. Sinon, KidGate affiche les étapes pour l’ajouter vous-même.',
        '2': 'Pour l’ajouter vous-même, maintenez le doigt sur un espace vide de l’écran d’accueil. Sur iPhone, touchez +, puis Ajouter un widget. Sur Android, touchez Widgets. Trouvez KidGate et choisissez le widget Temps d’écran.',
        '3': 'Chaque ligne indique le temps d’écran du jour d’un enfant par rapport à sa Limite quotidienne, et les enfants qui l’ont atteinte apparaissent en premier. Il affiche jusqu’à 2 enfants sur iPhone et jusqu’à 3 sur Android. Les appareils non attribués à un enfant ne sont pas affichés.',
        '4': 'Il se met à jour quand vous ouvrez KidGate. Quand l’app est fermée, avec Premium, il se met à jour au plus toutes les 20 minutes, et seulement pendant qu’un enfant utilise un appareil.',
        '5': 'Sur le téléphone de votre enfant, ajoutez le widget Temps restant de la même façon. Il indique le temps qu’il reste aujourd’hui, ou pourquoi l’appareil est verrouillé, et se met à jour quand KidGate est ouvert sur ce téléphone.',
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
        '5': 'L’écran affiche les 7 derniers jours. Quand votre enfant demande à ouvrir un site bloqué, la demande apparaît dans la fiche Approbation requise, pas ici.',
      },
    },
    videoHistory: {
      title: 'Voir les Vidéos regardées',
      summary:
        'Gardez la liste des vidéos YouTube que regarde votre enfant, avec la chaîne et l’heure.',
      keywords: 'youtube, shorts, vidéos regardées, historique de visionnage',
      tip: 'La fonction Vidéos regardées fait partie de Premium et ne couvre que YouTube. Elle fonctionne sur les téléphones Android et dans l’extension Chrome, pas sur iPhone ni sur iPad. Sur un Mac ou un PC, ajoutez l’extension Chrome. Un Android TV n’enregistre les vidéos qu’une fois que KidGate y a accès aux notifications, ce qu’aucun écran de TV ne permet encore d’accorder ; même alors, les Shorts ne sont pas listés.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Vidéos regardées dans la section Surveillance de la sécurité.',
        '2': 'Activez Enregistrer les vidéos regardées. L’enregistrement reste désactivé tant que vous ne l’activez pas et, depuis le profil de votre enfant, il s’applique à tous ses appareils.',
        '3': 'Sur un téléphone Android, KidGate a aussi besoin de l’accès aux notifications : sur l’appareil de l’enfant, ouvrez KidGate, puis Réglages, sélectionnez Déverrouiller avec le code PIN parent, puis Autoriser l’accès aux notifications dans la section Alertes messages. Les Shorts nécessitent aussi l’autorisation Accessibilité.',
        '4': 'Les vidéos s’affichent par jour, avec la chaîne et le nombre de lectures. Appuyez sur une vidéo pour la retrouver sur YouTube.',
        '5': 'Sur un Mac ou un PC, l’écran explique plutôt comment ajouter l’extension Chrome. L’extension enregistre les vidéos comme un appareil à part.',
      },
    },
    appAlerts: {
      title: 'Suivre les installations d’applications',
      summary:
        'Voyez quand des applications sont installées ou supprimées et ce qui se trouve sur un appareil, et gardez les nouvelles applications bloquées jusqu’à ce que vous les autorisiez.',
      tip: 'L’option Approuver les nouvelles applications et la liste des applications installées sont gratuites ; l’historique des installations et le blocage d’une nouvelle application font partie de Premium. L’iPhone et l’iPad ne peuvent pas signaler les installations ; sur ces appareils, l’option Approuver les nouvelles applications masque plutôt l’App Store.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis la fiche Applications.',
        '2': 'La section Changements récents liste les applications installées et supprimées, les plus récentes en premier. Vous recevez aussi une notification pour chacune.',
        '3': 'L’onglet Applications installées montre ce qui se trouve sur l’appareil, et Aperçu montre les applications du groupe À regarder de plus près. Sélectionnez Marquer sans risque pour sortir une application de ce groupe. Pour bloquer une application, appuyez dessus et sélectionnez « Bloquer ».',
        '4': 'Pour garder les nouvelles applications bloquées jusqu’à ce que vous les autorisiez, ouvrez Aperçu et activez Approuver les nouvelles applications. Toute application installée ensuite reste bloquée sur l’appareil.',
        '5': 'Quand une nouvelle application est en attente, sélectionnez Autoriser à côté d’elle pour qu’elle puisse s’ouvrir.',
      },
    },
    messageAlerts: {
      title: 'Activer les Alertes messages',
      summary:
        'Soyez averti quand un mot ou une expression préoccupants apparaissent dans les messages ou les recherches sur le téléphone Android de votre enfant. Vous voyez le mot ou l’expression signalés, jamais le message.',
      keywords: 'sms, messenger, whatsapp, mots-clés, harcèlement, lire les messages',
      tip: 'Les Alertes messages font partie de Premium. Les messages ne sont vérifiés que sur les téléphones Android ; les recherches le sont aussi dans l’extension Chrome. Seuls la catégorie et le mot ou l’expression signalés vous parviennent. L’analyse par IA reste désactivée, sauf si un parent l’active pour toute la famille.',
      steps: {
        '1': 'Sur le téléphone Android de votre enfant, ouvrez KidGate, puis Réglages, sélectionnez Déverrouiller avec le code PIN parent, puis Autoriser l’accès aux notifications dans la section Alertes messages, et activez KidGate dans la liste qui s’ouvre.',
        '2': 'Sur votre appareil, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Alertes messages dans la section Alertes, et appuyez sur l’icône des réglages en haut. Si votre enfant a plusieurs appareils, sélectionnez d’abord le téléphone Android.',
        '3': 'Activez Analyser les messages reçus. L’option Signaler aussi les grossièretés est facultative, et vous pouvez choisir jusqu’à 3 langues dans Langues analysées.',
        '4': 'Pour analyser aussi ce que votre enfant écrit et recherche : une fois Analyser les messages reçus activé, l’appareil de l’enfant affiche Avant d’autoriser dans la section Alertes messages. Sélectionnez Accepter à cet endroit, puis activez Analyser les messages écrits et Analyser ses recherches sur votre appareil.',
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
        '2': 'Après l’appairage d’un nouvel appareil, KidGate demande au propriétaire de la famille qui l’utilise. Choisissez votre enfant, ou Personne pour un appareil partagé. Si vous avez choisi un enfant, KidGate propose ensuite un ensemble de protections de départ : sélectionnez Activer la protection ou Pas maintenant.',
        '3': 'Un appareil pour lequel personne n’a encore été choisi apparaît sous Non attribué dans Famille. Sélectionnez Attribuer à un enfant… sur sa fiche.',
        '4': 'Une fois l’appareil attribué, la Limite quotidienne, les Heures bloquées, le Filtre web, le Check-in, le SOS, les Alertes de lieux et les Tâches bonus se règlent sur le profil de votre enfant et s’appliquent à tous ses appareils. La Limite quotidienne devient un total commun à ces appareils.',
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
        '2': 'L’essai de 7 jours commence dès que votre premier appareil enfant est appairé, et inclut toutes les fonctions Premium. Une seule limite demeure : le nombre de parents, jusqu’à 3 pendant l’essai et jusqu’à 6 avec Premium.',
        '3': 'Avec l’offre gratuite, toutes les règles continuent de fonctionner, mais un seul appareil envoie des rapports : le total du jour et les 3 applications les plus utilisées, mis à jour quand vous consultez l’app. Premium ajoute les mises à jour en direct, tous les appareils, 30 jours d’historique, l’historique web et vidéo, et les rapports hebdomadaires.',
        '4': 'Si l’essai se termine avec plus d’un appareil enfant, KidGate affiche l’écran Choisissez l’appareil qui envoie ses rapports. Cet appareil continue d’envoyer des rapports ; les autres affichent En pause et gardent leurs règles, mais une règle ne peut y être qu’assouplie, pas renforcée. Tout parent peut changer ce choix une fois tous les 7 jours.',
        '5': 'Pour vous abonner, choisissez une formule et sélectionnez S’abonner à Premium, ou Acheter à vie pour l’achat unique. Avec l’abonnement, tous les appareils en pause envoient de nouveau des rapports. Si vous avez déjà payé, sélectionnez Restaurer les achats.',
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
        '3': 'L’option Rapport hebdomadaire contrôle la notification du lundi qui annonce qu’un nouveau rapport est prêt.',
        '4': 'Activez Heures silencieuses, puis faites glisser les deux extrémités du cadran pour choisir quand les alertes sont coupées. Les horaires suivent l’horloge de ce téléphone.',
        '5': 'Dans Réglages, les options Alertes dans l’application et Sirène SOS sont distinctes : elles contrôlent la bannière dans l’app et le son puissant du SOS sur ce téléphone.',
      },
    },
    appLanguage: {
      title: 'Changer la langue de l’app',
      summary:
        'Choisissez la langue utilisée par KidGate sur chaque téléphone et sur le tableau de bord web.',
      keywords: 'français, anglais, traduction, mauvaise langue, langue d’affichage',
      tip: 'Chaque téléphone garde sa propre langue. Ses notifications et son widget la suivent.',
      steps: {
        '1': 'Sur le téléphone d’un parent ou d’un enfant, ouvrez Réglages et sélectionnez Langue.',
        '2': 'Choisissez une langue pour la fixer, ou Langue de l’appareil pour suivre le réglage du téléphone. Si KidGate ne propose pas la langue du téléphone, l’anglais est utilisé.',
        '3': 'L’app change aussitôt. Les notifications envoyées à ce téléphone et son widget utilisent aussi la nouvelle langue.',
        '4': 'Sur le tableau de bord web, changez la langue dans la section du compte du menu latéral. Le choix ne vaut que pour ce navigateur.',
      },
    },
    appearance: {
      title: 'Changer l’apparence de l’app',
      summary:
        'Choisissez le mode sombre, un style et une couleur de thème sur chaque téléphone.',
      keywords: 'thème, mode nuit, couleurs, rose, fond sombre, personnaliser',
      tip: 'Chaque téléphone garde sa propre apparence : un changement sur le téléphone de votre enfant ne modifie jamais le vôtre.',
      steps: {
        '1': 'Sur le téléphone d’un parent, ouvrez Réglages. Le mode sombre, le style et la couleur du thème se trouvent dans la section Apparence.',
        '2': 'Activez Mode sombre pour des écrans plus sombres, plus reposants pour les yeux le soir.',
        '3': 'Sélectionnez Style du thème et choisissez Classique ou Sucré, aux tons pastel chauds, plus doux et plus ludique.',
        '4': 'Sélectionnez Couleur du thème et choisissez la couleur des boutons et des accents. Les couleurs proposées dépendent du style : Sucré ne propose que des roses.',
        '5': 'Votre enfant peut faire les mêmes choix sur son propre téléphone, dans Réglages, section Préférences, sans le code PIN parent.',
        '6': 'Sur le tableau de bord web, activez Mode sombre dans la section du compte du menu latéral. Le choix ne vaut que pour ce navigateur.',
      },
    },
    webSignIn: {
      title: 'Utiliser KidGate sur un ordinateur',
      summary:
        'Connectez-vous au tableau de bord web et gérez votre famille depuis un navigateur.',
      tip: 'N’autorisez qu’un navigateur sur lequel vous vous connectez vous-même : il obtient le même contrôle que votre téléphone. Le tableau de bord web ne permet ni d’appairer un appareil enfant ni d’acheter une formule. Pour déconnecter un navigateur, utilisez Se déconnecter dans le tableau de bord. Pour qu’un navigateur ne puisse plus rien modifier, ouvrez Famille, puis Parents, et retirez-le sous « Tableau de bord » ; il pourra encore afficher votre famille tant qu’il n’est pas déconnecté.',
      steps: {
        '1': 'Sur l’ordinateur, ouvrez dashboard.kidgate.app. Un code QR s’affiche aussitôt.',
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
    reportProblem: {
      title: 'Signaler un problème',
      summary:
        'Dites à l’équipe KidGate ce qui n’a pas fonctionné, joignez des captures d’écran et lisez la réponse dans l’app.',
      keywords:
        'bug, erreur, contact, avis, ne fonctionne pas, panne, service client, aide, e-mail',
      tip: 'Vous recevez une notification quand KidGate répond. Si vous l’avez manquée, la ligne Assistance dans Réglages affiche Nouvelle réponse.',
      steps: {
        '1': 'Ouvrez Réglages et sélectionnez Assistance. Sur le tableau de bord web, Assistance se trouve dans le menu.',
        '2': 'Sélectionnez Signaler un problème, ou Nouveau signalement si vous en avez déjà envoyé un.',
        '3': 'Décrivez ce qui s’est passé et sur quel appareil, joignez jusqu’à 5 captures d’écran si besoin, puis sélectionnez Envoyer le signalement.',
        '4': 'Chaque signalement indique son statut : Reçu, En cours d’examen ou Résolu. La réponse de KidGate apparaît sous le signalement.',
        '5': 'Une fois que KidGate a répondu, vous pouvez à votre tour écrire sous le signalement, un message par réponse, jusqu’à ce qu’il soit Résolu. Pour un autre problème, envoyez un nouveau signalement.',
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
        '3': 'Confirmez votre identité (votre mot de passe, ou une nouvelle connexion avec Google ou Apple), saisissez « OK », puis sélectionnez « Programmer la suppression ». Cela ne fait que programmer la suppression : rien n’est encore supprimé.',
        '4': 'Le compte est supprimé au bout de 14 jours. D’ici là, ouvrez KidGate et sélectionnez Annuler la suppression pour tout conserver.',
        '5': 'Quand un co-parent supprime son compte, seul son propre compte est supprimé ; la famille reste. Pour quitter une famille sans supprimer votre compte, ouvrez la fiche de la famille dans Famille et sélectionnez Quitter la famille.',
      },
    },
  },
  ios: {
    blockedHours: {
      steps: {
        '5': 'Sur l’appareil enfant, vérifiez que KidGate dispose toujours des autorisations demandées lors de la configuration, pour que les plages commencent et se terminent à l’heure. Sur un iPhone ou un iPad, vérifiez que « Temps d’écran » est toujours autorisé.',
      },
    },
    lockUnlock: {
      tip: 'Sur un iPhone ou un iPad, le verrouillage dépend de l’autorisation Temps d’écran ; si KidGate était fermé sur l’iPhone, le verrouillage apparaît dès que KidGate fonctionne de nouveau. Sur les autres appareils, le verrouillage est le plus efficace quand toutes les autorisations demandées par KidGate sont accordées.',
      steps: {
        '6': 'Un téléphone ou un ordinateur verrouillé permet toujours à votre enfant d’envoyer un SOS, et le SOS apparaît dans Activité. Sur certains téléphones d’enfant, les appels fonctionnent toujours, et le SOS ouvre aussi les plans et les messages pendant 5 minutes, tout le reste restant verrouillé.',
      },
    },
    siri: {
      tip: 'Les commandes vocales fonctionnent sur l’iPhone d’un parent, pour tous les parents de la famille, dans la langue réglée pour Siri. Dans certaines langues, Siri ne reconnaît pas le nom KidGate prononcé (c’est le cas en vietnamien) : saisissez plutôt la commande pour Siri au clavier, ou lancez-la depuis l’app Raccourcis. Le tableau de bord web n’en a pas.',
    },
    timeRequests: {
      tip: 'Les demandes n’apparaissent que si l’appareil a une Limite quotidienne. Les minutes approuvées valent pour aujourd’hui, sur l’appareil qui a fait la demande, et ne lèvent ni un verrouillage que vous avez activé, ni les Heures bloquées. Les TV et l’extension Chrome ne peuvent pas envoyer de demandes.',
      steps: {
        '1': 'Sur l’appareil de l’enfant, votre enfant sélectionne Demander plus de temps sur l’écran d’accueil de KidGate (sur certains téléphones, également depuis l’écran de verrouillage quand la limite est atteinte), choisit les minutes, ajoute un motif s’il le souhaite et envoie la demande.',
      },
    },
    rewardTasks: {
      tip: 'Les minutes bonus ne comptent que si l’appareil a une Limite quotidienne. Elles sont ajoutées à l’appareil sur lequel votre enfant a indiqué que la tâche était faite. Les Tâches bonus ne sont pas disponibles sur une TV ni dans l’extension Chrome.',
    },
    locationSharing: {
      steps: {
        '1': 'Sur l’appareil de l’enfant, autorisez la Localisation pour KidGate quand c’est demandé (ou dans les Réglages système). Choisissez « Toujours » sur iPhone ou iPad, ou « Toujours autoriser » sur les autres téléphones, sinon la position n’est mise à jour que lorsque KidGate est ouvert.',
      },
    },
    webFilter: {
      steps: {
        '2': 'Activez « Filtrer les sites inappropriés » en haut. Le réglage s’applique immédiatement, il n’y a rien à enregistrer. « Imposer SafeSearch » sur le même écran verrouille aussi Google, Bing et DuckDuckGo sur des résultats sûrs et YouTube sur le mode restreint, sur les autres téléphones, les TV et Chrome, mais pas sur iPhone ni iPad. Sur YouTube, le mode restreint masque aussi les commentaires et bloque certaines vidéos ordinaires ; KidGate vous demande donc confirmation avant de l’activer.',
        '5': 'Sur l’appareil de l’enfant, ouvrez KidGate et approuvez le filtre une fois. Sur un iPhone ou un iPad, le filtre de contenu pour adultes d’Apple s’applique via Temps d’écran, sans étape supplémentaire. Sur un autre téléphone, acceptez la demande qu’il affiche, puis désactivez le DNS privé dans ses réglages réseau, car les navigateurs peuvent contourner le filtre tant que le DNS privé est activé. Sur un Mac, sélectionnez Ouvrir Réglages pour l’étape Autoriser le filtre web, puis activez KidGate.',
      },
    },
    screenTimeCounting: {
      steps: {
        '2': 'Sur un ordinateur et sur certains téléphones, une vidéo lue dans une petite fenêtre flottante (image dans l’image, PIP) est comptée pour l’application qui la lit, même quand une autre application est au premier plan.',
      },
    },
    widget: {
      keywords:
        'écran d’accueil, lanceur, en un coup d’œil, temps restant, minutes restantes, iphone, ipad',
      tip: 'Les widgets fonctionnent sur les téléphones et les tablettes, pas sur un ordinateur ni une TV. Un widget affiche les derniers chiffres reçus par KidGate et l’heure de cette mise à jour.',
      steps: {
        '1': 'Ouvrez Réglages et sélectionnez Ajouter le widget à l’écran d’accueil. Sur certains téléphones, il suffit de confirmer l’emplacement. Sinon, KidGate affiche les étapes pour l’ajouter vous-même.',
        '2': 'Pour l’ajouter vous-même, maintenez le doigt sur un espace vide de l’écran d’accueil. Sur iPhone, touchez +, puis Ajouter un widget. Trouvez KidGate et choisissez le widget Temps d’écran.',
        '3': 'Chaque ligne indique le temps d’écran du jour d’un enfant par rapport à sa Limite quotidienne, et les enfants qui l’ont atteinte apparaissent en premier. Il affiche jusqu’à 2 enfants sur iPhone. Les appareils non attribués à un enfant ne sont pas affichés.',
      },
    },
    webHistory: {
      tip: 'L’Historique web fait partie de Premium. Il liste des sites, pas des pages ni des minutes, et certaines lignes correspondent au trafic en arrière-plan des applications. Sur une TV, il peut avoir jusqu’à une heure de retard.',
    },
    videoHistory: {
      tip: 'La fonction Vidéos regardées fait partie de Premium et ne couvre que YouTube. Elle fonctionne sur les autres téléphones et dans l’extension Chrome, pas sur iPhone ni sur iPad. Sur un Mac ou un PC, ajoutez l’extension Chrome. Une TV n’enregistre les vidéos qu’une fois que KidGate y a accès aux notifications, ce qu’aucun écran de TV ne permet encore d’accorder ; même alors, les Shorts ne sont pas listés.',
      steps: {
        '3': 'Sur les autres téléphones, KidGate a aussi besoin de l’accès aux notifications : sur l’appareil de l’enfant, ouvrez KidGate, puis Réglages, sélectionnez Déverrouiller avec le code PIN parent, puis Autoriser l’accès aux notifications dans la section Alertes messages. Les Shorts nécessitent aussi l’autorisation Accessibilité.',
      },
    },
    messageAlerts: {
      summary:
        'Soyez averti quand un mot ou une expression préoccupants apparaissent dans les messages ou les recherches sur le téléphone de votre enfant. Vous voyez le mot ou l’expression signalés, jamais le message.',
      tip: 'Les Alertes messages font partie de Premium. Les messages ne peuvent pas être vérifiés sur iPhone ni sur iPad ; les recherches le sont aussi dans l’extension Chrome. Seuls la catégorie et le mot ou l’expression signalés vous parviennent. L’analyse par IA reste désactivée, sauf si un parent l’active pour toute la famille.',
      steps: {
        '1': 'Sur le téléphone de votre enfant, ouvrez KidGate, puis Réglages, sélectionnez Déverrouiller avec le code PIN parent, puis Autoriser l’accès aux notifications dans la section Alertes messages, et activez KidGate dans la liste qui s’ouvre.',
        '2': 'Sur votre appareil, ouvrez le profil de votre enfant (ou l’appareil, s’il n’est attribué à aucun enfant), puis Alertes messages dans la section Alertes, et appuyez sur l’icône des réglages en haut. Si votre enfant a plusieurs appareils, sélectionnez d’abord son téléphone.',
      },
    },
  },
  onChildDevice: 'Sur l’appareil de l’enfant',
  onParentDevice: 'Sur votre appareil',
  onParentPhone: 'Dans l’app sur votre téléphone',
  handoffHint:
    'KidGate peut guider ces étapes sur l’appareil de l’enfant : ouvrez KidGate sur cet appareil, allez dans État et, sur la carte « Termine la configuration avec un parent », choisissez « Poursuivre la configuration ». Chaque étape a un bouton qui ouvre le bon écran.',
} as const;
