export const userGuide = {
  title: 'Guide d’utilisation',
  subtitle:
    'Aide pas à pas sur les autorisations, l’appairage des appareils, les contrôles quotidiens et les fonctions de sécurité.',
  stepLabel: 'Étape {{n}}',
  stepsSectionTitle: 'Étapes',
  tipTitle: 'Astuce',
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
        'Limites, horaires, blocage d’applications et verrouillage de l’appareil',
    },
    safety: {
      title: 'Sécurité et surveillance',
      description: 'Localisation, Check-In, SOS, Filtre web et protection',
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
        '2': 'Connectez-vous avec Google ou Apple, ou créez un compte e-mail. Confirmez que vous êtes le propriétaire de la famille pour ce foyer.',
        '3': 'Si demandé, nommez votre famille (par exemple, « Famille Nguyen »). Ce nom apparaît quand d’autres parents rejoignent.',
        '4': 'Définissez un code PIN parent (6 chiffres) dans Réglages → Sécurité. Mémorisez-le ou conservez-le en lieu sûr, et ne le partagez pas avec les enfants.',
        '5': 'Recommandé : activez le verrouillage de l’app et le déverrouillage biométrique dans Réglages afin que d’autres personnes ne puissent pas ouvrir l’app parent sur votre appareil.',
        '6': 'Ouvrez Famille (Appareils). Appuyez sur + et choisissez Connecter un appareil enfant. Gardez cet écran prêt pour le code QR ou le code venant de l’appareil de l’enfant.',
        '7': 'Une fois l’appareil de l’enfant connecté, ouvrez sa fiche appareil. Définissez la Limite quotidienne et les Heures bloquées, et terminez les autorisations avec votre enfant.',
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
      title: 'Connecter un appareil enfant',
      summary:
        'Appairez un nouvel appareil enfant à votre famille avec un code QR ou un code.',
      tip: 'Les codes expirent. Si l’appairage échoue, sélectionnez Nouveau code sur l’appareil de l’enfant et réessayez.',
      steps: {
        '1': 'Sur l’appareil de l’enfant : ouvrez KidGate → Ceci est un appareil enfant. Laissez l’écran du code QR visible.',
        '2': 'Sur l’appareil parent : ouvrez Famille → appuyez sur + → Connecter un appareil enfant.',
        '3': 'Le code QR est recommandé : sélectionnez Scanner le code QR, autorisez l’accès à l’appareil photo si demandé, et alignez le code QR de l’appareil de l’enfant dans le cadre.',
        '4': 'Ou utilisez le code : sélectionnez Saisir le code manuellement, tapez les 6 caractères affichés sur l’appareil de l’enfant, puis continuez.',
        '5': 'Sur l’appareil de l’enfant, lisez attentivement l’écran de confirmation. Sélectionnez Oui, connecter uniquement si le nom du parent est correct.',
        '6': 'Attendez que l’appareil parent confirme la connexion. Le nouvel appareil apparaît sous Famille.',
        '7': 'Ouvrez le nouvel appareil et vérifiez que Dernière activité se met à jour. S’il reste hors ligne, rouvrez KidGate sur l’appareil de l’enfant et vérifiez la connexion réseau.',
        '8': 'Ensuite, accordez les autorisations sur l’appareil de l’enfant (voir le groupe Autorisations de l’app). Les contrôles ne fonctionneront pas pleinement tant que ces autorisations ne sont pas actives.',
      },
    },
    inviteParent: {
      title: 'Inviter un autre parent',
      summary:
        'Permettez à un second parent de rejoindre la même famille et de gérer les mêmes appareils enfants.',
      tip: 'Seul le propriétaire de la famille peut approuver les demandes. Approuvez rapidement, car les demandes peuvent expirer.',
      steps: {
        '1': 'Sur l’appareil du propriétaire de la famille, ouvrez Famille → appuyez sur + → Ajouter un autre appareil parent (ou Inviter un parent).',
        '2': 'Si vous n’avez pas encore créé de nom de famille, saisissez-en un et sélectionnez Créer une famille.',
        '3': 'Montrez le code QR d’invitation à l’autre parent, ou partagez le code d’invitation avec lui.',
        '4': 'Sur l’appareil de l’autre parent : ouvrez KidGate en tant que parent → Famille → + → Rejoindre une famille, puis scannez le code QR ou saisissez le code.',
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
        '2': 'Ouvrez Famille → appuyez sur + → Rejoindre une famille.',
        '3': 'Scannez le code QR d’invitation du propriétaire, ou saisissez le code d’invitation à 6 caractères.',
        '4': 'Attendez que le propriétaire approuve. Gardez l’app ouverte jusqu’à ce que vous voyiez que vous avez rejoint la famille.',
        '5': 'Vérifiez que les appareils enfants apparaissent sous Famille. Ouvrez un appareil pour consulter son état et ses contrôles.',
      },
    },
    androidPermissions: {
      title: 'Autorisations Android (appareil enfant)',
      summary:
        'Activez l’Accès à l’utilisation, l’affichage par-dessus les autres apps, l’Accessibilité, la batterie et les autorisations associées.',
      tip: 'L’exhaustivité compte plus que l’ordre. Chaque ligne rouge ou non autorisée sur l’écran État de l’enfant doit être corrigée avant de compter sur le verrouillage ou les Heures bloquées.',
      steps: {
        '1': 'Sur l’appareil de l’enfant, ouvrez KidGate → État et parcourez la liste des autorisations de haut en bas.',
        '2': 'Notifications : appuyez sur la ligne → Autoriser. Les parents ont besoin des notifications push pour les commandes de verrouillage et les demandes de temps.',
        '3': 'Accès à l’utilisation : ouvrez l’écran système → trouvez KidGate → activez-le. C’est requis pour le suivi du temps d’écran et les limites.',
        '4': 'Affichage par-dessus les autres apps : autorisez KidGate. C’est nécessaire pour que l’écran de verrouillage puisse s’afficher par-dessus les autres apps.',
        '5': 'Assistant d’accessibilité pour le verrouillage : Réglages → Accessibilité → Apps installées / téléchargées → KidGate → Activé. Cela garantit que le verrouillage reste appliqué.',
        '6': 'Batterie sans restriction : sélectionnez Autoriser quand demandé. Si aucune invite n’apparaît : Infos sur l’app → Batterie → Sans restriction.',
        '7': 'Alarmes et rappels : autorisez-le pour que les Heures bloquées commencent et se terminent à l’heure.',
        '8': 'Localisation et Appareil photo (si vous utilisez le Check-In ou les photos SOS) : autorisez-les selon les demandes de KidGate. Retournez sur État et confirmez que chaque ligne est autorisée.',
      },
    },
    iosScreenTime: {
      title: 'Temps d’écran iOS (appareil enfant)',
      summary:
        'Autorisez Utilisation des apps et des sites web afin que le verrouillage, les horaires et la sélection d’apps puissent fonctionner.',
      tip: 'Si le bouton Autoriser est absent, ouvrez Réglages iOS → Temps d’écran et assurez-vous d’abord que Temps d’écran est activé sur l’appareil de l’enfant.',
      steps: {
        '1': 'Sur l’iPhone de l’enfant, ouvrez KidGate et restez sur l’écran État / configuration.',
        '2': 'Sélectionnez Autoriser l’utilisation des apps et des sites web (ou la bannière Temps d’écran).',
        '3': 'Dans la boîte de dialogue système, sélectionnez Autoriser. Merci de ne pas fermer la boîte de dialogue sans faire de choix.',
        '4': 'Revenez à KidGate. La bannière disparaît une fois l’autorisation réussie.',
        '5': 'Si l’autorisation a été refusée précédemment : ouvrez Réglages iOS → trouvez KidGate → activez les options Temps d’écran / Contrôle parental associées, puis rouvrez KidGate.',
        '6': 'Pour choisir les applications bloquées : sur l’appareil de l’enfant, ouvrez Réglages KidGate → saisissez le code PIN parent → Choisir les applications à bloquer → enregistrez.',
        '7': 'Sur l’appareil parent, ouvrez l’appareil → Applications bloquées et confirmez que la liste a bien été synchronisée. Activez le blocage quand vous êtes prêt.',
      },
    },
    oemKeepRunning: {
      title: 'Garder KidGate actif (réglages du fabricant)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei et les appareils similaires suspendent souvent les apps en arrière-plan.',
      tip: 'Après avoir modifié les règles de batterie, redémarrez une fois l’appareil de l’enfant, rouvrez KidGate, puis testez le verrouillage depuis l’appareil parent.',
      steps: {
        '1': 'Sur l’appareil Android de l’enfant, ouvrez KidGate → État → Garder KidGate actif.',
        '2': 'Autorisez le démarrage automatique de KidGate dans l’écran de sécurité du fabricant (le libellé varie selon l’appareil).',
        '3': 'Réglez l’utilisation de la batterie de KidGate sur Sans restriction, à la fois dans les réglages Android et dans le menu batterie du fabricant, si les deux existent.',
        '4': 'Désactivez toute liste « apps en veille », « apps en veille profonde » ou « mise en veille des apps » incluant KidGate.',
        '5': 'Si un raccourci ne fonctionne pas, ouvrez manuellement l’app Sécurité / Entretien de l’appareil et recherchez KidGate, Démarrage automatique ou Batterie.',
        '6': 'Marquez chaque ligne comme Terminé dans KidGate au fur et à mesure, afin de voir ce qu’il reste à faire.',
      },
    },
    dailyLimit: {
      title: 'Définir une Limite quotidienne',
      summary:
        'Plafonnez le nombre de minutes que l’enfant peut utiliser l’appareil chaque jour.',
      tip: 'Les données d’utilisation proviennent de l’appareil de l’enfant. Si le compteur semble bloqué, ouvrez KidGate sur l’appareil de l’enfant et attendez une synchronisation.',
      steps: {
        '1': 'Sur l’appareil parent, ouvrez Famille → appuyez sur l’appareil de l’enfant.',
        '2': 'Sous Contrôles essentiels, sélectionnez Limite quotidienne.',
        '3': 'Choisissez une valeur en minutes par jour (ou modifiez le plafond existant), puis enregistrez.',
        '4': 'Vérifiez que la fiche appareil affiche les minutes utilisées et la limite du jour après la synchronisation de l’appareil de l’enfant.',
        '5': 'Quand la limite est atteinte, l’appareil se verrouille selon les règles de la plateforme. Sélectionnez Déverrouiller sur l’écran de l’appareil si vous souhaitez restaurer l’accès plus tôt.',
      },
    },
    blockedHours: {
      title: 'Définir les Heures bloquées',
      summary:
        'Planifiez jusqu’à 3 plages horaires pendant lesquelles l’appareil doit rester verrouillé.',
      tip: 'Définissez d’abord les heures de classe et les plages de coucher. Évitez les plages qui se chevauchent pour garder le planning clair.',
      steps: {
        '1': 'Ouvrez l’appareil de l’enfant sur l’appareil parent → Heures bloquées.',
        '2': 'Sélectionnez Définir les Heures bloquées (ou Modifier les Heures bloquées). Ajoutez une plage horaire avec une heure de début, une heure de fin et des jours.',
        '3': 'Enregistrez la plage. Vous pouvez ajouter jusqu’à 3 plages au total.',
        '4': 'Activez le planning si un interrupteur d’activation est affiché.',
        '5': 'Sur l’appareil de l’enfant, vérifiez que les autorisations Alarmes et rappels et Temps d’écran sont toujours accordées pour que les plannings s’exécutent à l’heure.',
        '6': 'Pendant une plage active, la fiche appareil affiche Heures bloquées actives · verrouillé. N’utilisez Déverrouiller que si vous souhaitez délibérément outrepasser le planning.',
      },
    },
    blockedApps: {
      title: 'Bloquer des applications spécifiques',
      summary:
        'Choisissez des applications sur l’appareil de l’enfant, puis activez le blocage depuis l’appareil parent.',
      tip: 'Sous iOS, Apple peut masquer les noms exacts des applications aux appareils parents. La sélection se fait toujours sur l’appareil de l’enfant avec le code PIN parent.',
      steps: {
        '1': 'Utilisez directement l’appareil de l’enfant. Ouvrez KidGate → Réglages.',
        '2': 'Saisissez le code PIN parent quand demandé.',
        '3': 'Ouvrez Choisir les applications à bloquer. Sélectionnez les applications (et les catégories, si affichées), puis enregistrez sur l’appareil de l’enfant.',
        '4': 'Sur l’appareil parent, ouvrez l’appareil → Applications bloquées et attendez que la liste sélectionnée apparaisse.',
        '5': 'Activez Activer le blocage des applications. Le statut doit indiquer Blocage activé.',
        '6': 'Testez en ouvrant une application bloquée sur l’appareil de l’enfant. Elle doit être restreinte selon les règles de la plateforme.',
        '7': 'Pour modifier la liste plus tard, répétez la sélection sur l’appareil de l’enfant avec le code PIN parent. L’appareil parent synchronisera la nouvelle liste.',
      },
    },
    lockUnlock: {
      title: 'Verrouiller et déverrouiller l’appareil',
      summary:
        'Verrouillez immédiatement l’appareil de l’enfant, ou restaurez l’accès.',
      tip: 'Sur Android, le verrouillage est le plus efficace quand Affichage par-dessus les autres apps et Accessibilité sont tous deux activés. Sur iOS, le verrouillage dépend de l’autorisation Temps d’écran.',
      steps: {
        '1': 'Ouvrez l’appareil de l’enfant sur l’appareil parent.',
        '2': 'Sélectionnez Verrouiller l’appareil (ou Verrouiller dans KidGate, selon les options de la plateforme affichées).',
        '3': 'Attendez quelques secondes. Le statut doit passer à Verrouillé. Si rien ne change, ouvrez KidGate sur l’appareil de l’enfant et revérifiez les autorisations.',
        '4': 'Pour restaurer l’accès, sélectionnez Déverrouiller sur le même écran d’appareil et confirmez.',
        '5': 'Facultatif : vous pouvez aussi verrouiller ou déverrouiller rapidement depuis Famille si ces raccourcis apparaissent sur la fiche appareil.',
      },
    },
    locationSharing: {
      title: 'Activer le partage de localisation',
      summary: 'Consultez la dernière position de votre enfant sur l’appareil parent.',
      tip: 'La localisation nécessite une autorisation sur l’appareil de l’enfant et une connexion réseau stable. Le GPS en intérieur peut être moins précis.',
      steps: {
        '1': 'Sur l’appareil de l’enfant, autorisez la Localisation pour KidGate quand demandé (ou dans les Réglages système).',
        '2': 'Sur l’appareil parent, ouvrez l’appareil → Localisation.',
        '3': 'Activez le partage s’il est désactivé, puis attendez la première mise à jour.',
        '4': 'Tirez vers le bas pour actualiser, ou rouvrez l’écran, si le statut affiche toujours En attente.',
        '5': 'Facultatif : configurez des Alertes de lieux pour être averti quand votre enfant entre dans un lieu enregistré ou en sort.',
      },
    },
    checkIn: {
      title: 'Demander un Check-In',
      summary:
        'Demandez à votre enfant de confirmer qu’il est en sécurité, avec sa position et une photo facultative.',
      tip: 'L’autorisation Appareil photo sur l’appareil de l’enfant est requise pour les Check-Ins avec photo.',
      steps: {
        '1': 'Ouvrez l’appareil de l’enfant sur l’appareil parent.',
        '2': 'Sélectionnez Check-In (l’action rapide ou la section Sécurité).',
        '3': 'L’appareil de l’enfant reçoit une notification et un écran de Check-In. L’enfant appuie pour confirmer qu’il va bien, ou pour demander de l’aide.',
        '4': 'Si l’accès à l’appareil photo est autorisé, KidGate joint une photo en plus de la position lorsque c’est possible.',
        '5': 'Sur l’appareil parent, ouvrez l’historique des Check-Ins pour consulter la dernière réponse et la photo.',
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
        '4': 'Sur l’appareil parent, ouvrez l’appareil → Alertes SOS pour consulter l’événement.',
        '5': 'Mettez-vous d’accord avec votre enfant sur quand utiliser le SOS et quand un Check-In normal suffit.',
      },
    },
    webFilter: {
      title: 'Limiter les sites pour adultes',
      summary:
        'Activez le Filtre web pour le contenu adulte lorsque la plateforme le prend en charge.',
      tip: 'Le filtrage web dépend des capacités de la plateforme. Combinez-le avec Applications bloquées pour une protection renforcée.',
      steps: {
        '1': 'Ouvrez l’appareil de l’enfant sur l’appareil parent → Filtre web.',
        '2': 'Consultez le statut actuel (sites pour adultes limités, ou filtrage désactivé).',
        '3': 'Activez le filtrage et enregistrez si un interrupteur est affiché.',
        '4': 'Vérifiez à nouveau plus tard depuis le même écran. Si le statut reste En attente, rouvrez KidGate sur l’appareil de l’enfant afin que les réglages puissent se synchroniser.',
      },
    },
    protectionAlerts: {
      title: 'Alertes de protection',
      summary:
        'Soyez averti lorsqu’une autorisation importante sur l’appareil de l’enfant est désactivée.',
      tip: 'Une alerte de protection signifie que la protection KidGate s’est affaiblie. Merci de rétablir l’autorisation sur l’appareil de l’enfant dès que possible.',
      steps: {
        '1': 'Ouvrez l’appareil de l’enfant → Protection (ou Alertes de protection).',
        '2': 'Consultez les événements récents tels que Affichage par-dessus les autres apps, Accessibilité, Accès à l’utilisation, Appareil photo ou Localisation désactivés.',
        '3': 'Sur l’appareil de l’enfant, ouvrez KidGate → État et réactivez l’autorisation indiquée.',
        '4': 'Retournez sur Alertes de protection et vérifiez qu’aucun nouvel événement inattendu n’apparaît.',
        '5': 'Gardez les notifications activées sur l’appareil parent afin d’être informé rapidement des changements.',
      },
    },
  },
} as const;
