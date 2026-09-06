export const legal = {
  privacyPolicy: {
    title: 'Politique de confidentialité',
    effectiveDate: 'En vigueur à compter du 6 septembre 2026',
    intro:
      'KidGate est le nom commercial et de produit utilisé par le développeur indépendant qui exploite l’application. Cette politique explique comment KidGate traite les données lorsque des parents utilisent le service pour gérer l’appareil d’un enfant. Elle couvre les applications KidGate pour iPhone, iPad et Android, l’agent KidGate pour macOS et Windows, l’extension de navigateur KidGate, l’application Android TV, le tableau de bord parent et le site kidgate.app.',
    sections: [
      {
        title: '1. Champ d’application et autorité parentale',
        body: 'Le compte parent configure les autorisations et gère les appareils des enfants. Les enfants ne créent pas leur propre compte KidGate ; un appareil n’est géré que par l’intermédiaire d’un compte parent. Un parent doit disposer d’une autorité parentale légale ou d’un pouvoir valable avant de surveiller ou de gérer un appareil. KidGate ne doit pas être utilisé pour surveiller secrètement des adultes ou toute personne ne relevant pas de la garde légale du parent.',
      },
      {
        title: '2. Données que nous traitons',
        body: 'Ce que KidGate traite dépend des fonctionnalités qu’un parent active et des autorisations accordées par le système d’exploitation. Cela peut inclure : les identifiants de compte et la connexion Google, Apple ou par e-mail utilisée pour créer le compte parent ; les prénoms qu’un parent donne à chaque enfant et les appareils qui leur sont attribués ; le nom, le modèle, le format, la version du système d’exploitation et de l’application, le niveau de batterie et l’état d’appairage de l’appareil ; les réglages eux-mêmes — Limite quotidienne, Heures bloquées, Applications bloquées, limites par application, catégories du Filtre web et le Code PIN parent, qui n’est conservé que sous forme de hachage à sens unique ; les totaux de Temps d’écran, une répartition par application et un relevé à la minute des périodes d’utilisation de l’appareil ; les applications installées sur l’appareil et les extensions ajoutées à son navigateur ; les domaines demandés par un appareil enfant et ceux que le Filtre web a refusés, comptés par jour et par heure ; les titres des vidéos lues lorsque la plateforme les rend visibles ; la position, l’historique de position et les lieux enregistrés par un parent ; les alertes SOS, les check-in de sécurité et la photo qu’un enfant envoie avec l’un ou l’autre ; les alertes déclenchées lorsqu’une protection est désactivée, lorsqu’une application est installée, ou lorsqu’un message ou une recherche correspond à une liste de mots-clés activée par un parent ; les demandes de temps supplémentaire, les demandes d’autorisation de site, les tâches à récompense et les totaux hebdomadaires d’étoiles affichés sur le tableau des étoiles ; le rapport hebdomadaire qui résume tout cela ; les messages d’assistance et toute capture d’écran qui y est jointe ; les rapports de plantage et les diagnostics techniques ; et les données de transaction d’abonnement fournies par une boutique d’applications. KidGate ne demande pas le vrai nom d’un enfant lorsqu’une fonctionnalité n’en a pas besoin.',
      },
      {
        title: '3. Ce qui reste sur l’appareil de l’enfant',
        body: 'La surveillance des messages et des recherches s’exécute sur l’appareil lui-même, sur Android uniquement, et seulement si un parent l’active. L’appareil compare le texte à des listes de mots-clés conservées localement ; ce qui est envoyé est une alerte indiquant le mot détecté, sa catégorie, l’application où il est apparu et l’heure. Le message lui-même, le reste de la conversation et la personne avec qui elle a eu lieu ne sont ni transmis ni conservés par KidGate. Il existe une exception, et elle relève d’un consentement distinct : lorsqu’un parent a en outre accepté la confirmation par IA, un message entrant dont la correspondance était ambiguë est envoyé au modèle Gemini de Google pour être évalué, afin qu’un parent ne soit pas alerté à cause d’un mot ordinaire. Le texte écrit par l’enfant n’est jamais envoyé pour confirmation par IA, quel que soit le consentement donné par la famille. En dehors de ce cas, KidGate enregistre le domaine demandé par un appareil et s’il a été refusé — pas l’adresse d’une page ni son contenu — et les fichiers, les photos et la navigation qu’aucune fonctionnalité activée ne lit restent sur l’appareil.',
      },
      {
        title: '4. Utilisation des données',
        body: 'Les données prennent en charge l’authentification, l’appairage des appareils, le contrôle parental, la synchronisation des paramètres, les alertes, les rapports, les abonnements, la prévention de la fraude, la sécurité des comptes, le dépannage et la fiabilité. KidGate ne vend pas de données personnelles et n’utilise pas les données des enfants à des fins de publicité comportementale. Aucune application KidGate ne contient de publicité.',
      },
      {
        title: '5. Traitement automatisé et IA',
        body: 'Trois fonctionnalités utilisent les modèles Gemini de Google, accessibles via Google Cloud : le résumé rédigé du rapport hebdomadaire, généré à partir des chiffres d’utilisation propres à la famille ; le classement des applications et des domaines de sites web dans les catégories utilisées par le Filtre web et les listes d’applications ; et l’étape de confirmation décrite à la section 3, qui ne s’exécute que si un parent y a consenti. Ces modèles produisent des appréciations qui peuvent être erronées. Une catégorie, une phrase de résumé ou une alerte de message est une invitation à regarder, pas un constat, et KidGate ne prend sur cette base aucune décision produisant un effet juridique ou comparable pour un enfant. Les sorties des modèles ne servent pas à entraîner les modèles de Google.',
      },
      {
        title: '6. Fondements juridiques et consentement',
        body: 'KidGate traite les données pour fournir les services demandés, respecter ses obligations légales, protéger des intérêts légitimes de sécurité et de sûreté, ou sur la base du consentement lorsque celui-ci est requis. Les parents sont responsables de fournir les informations requises et d’obtenir un consentement valable pour un enfant ou un utilisateur d’appareil. La surveillance des messages et la confirmation par IA font chacune l’objet d’un consentement distinct et explicite, enregistré par appareil et révocable à tout moment.',
      },
      {
        title: '7. Prestataires de services',
        body: 'KidGate repose sur Google Cloud et Firebase, qui fournissent l’authentification, la base de données, le stockage de fichiers, les fonctions serveur, les notifications push via Firebase Cloud Messaging, les rapports de plantage via Firebase Crashlytics et les modèles Gemini cités à la section 5. Apple et Google traitent en outre les achats d’abonnement, les renouvellements et les remboursements via leurs boutiques d’applications, et Google Analytics traite la mesure décrite à la section 8. Les données ne sont divulguées à ces prestataires que dans la mesure nécessaire au fonctionnement du service ; aux autorités lorsque la loi l’exige ; ou pour traiter des questions de sécurité, de fraude ou d’abus. Ces prestataires ont leurs propres obligations et politiques, et aucun n’est autorisé par KidGate à utiliser les données des enfants à des fins de marketing indépendant.',
      },
      {
        title: '8. Mesure d’audience du site et cookies',
        body: 'Le site kidgate.app mesure trois choses avec Google Analytics : les visites de pages, et les clics sur chacun des deux liens de téléchargement pour ordinateur. Cette mesure dépose un cookie de mesure d’audience dans le navigateur du lecteur. Les adresses IP sont tronquées, Google Signals et les identifiants publicitaires sont désactivés, et rien qui identifie un lecteur ou une famille n’est envoyé. Les applications KidGate transmettent un petit ensemble d’événements à la même propriété pour indiquer quelles fonctionnalités sont utilisées ; ces événements portent un identifiant d’instance d’application et jamais le prénom, un message, la position ou la navigation d’un enfant. Les applications et le site n’utilisent aucun réseau publicitaire ni aucun réseau de pistage.',
      },
      {
        title: '9. Où les données sont stockées et comment elles sont protégées',
        body: 'Les données des familles sont stockées dans la région de Singapour de Google Cloud et peuvent être traitées ailleurs par les prestataires cités à la section 7, ce qui signifie qu’elles peuvent quitter le pays où vit une famille. KidGate applique des mesures de protection techniques et organisationnelles raisonnables, notamment des contrôles d’accès, des pratiques de moindre privilège, des règles côté serveur qui limitent chaque lecture à une seule famille, et un transport sécurisé. Le Code PIN parent n’est conservé que sous forme de hachage à sens unique et ne peut pas être relu. Aucun système n’est totalement sécurisé ; KidGate ne peut garantir que les données ne seront jamais perdues, consultées sans autorisation ou que leur traitement ne sera jamais interrompu.',
      },
      {
        title: '10. Accès du personnel de KidGate à des fins d’assistance',
        body: 'Lorsque cela est nécessaire pour répondre à une demande d’assistance ou diagnostiquer un problème, le personnel autorisé de KidGate peut ouvrir un compte familial et voir ce que voit un parent : sa configuration et ses appareils, ainsi que l’activité qu’il contient — y compris l’historique de position, l’historique web, les alertes de messages et les photos jointes à un SOS ou à un check-in. Il peut aussi modifier des réglages et envoyer des commandes aux appareils. Cet accès est limité au personnel autorisé, exige une authentification à deux facteurs et sert uniquement à l’assistance ; chaque entrée dans un compte familial est journalisée avec l’heure et le motif indiqué. Les actions individuelles effectuées pendant une session d’assistance ne font pas aujourd’hui l’objet d’une journalisation distincte.',
      },
      {
        title: '11. Durée de conservation des données',
        body: 'Les enregistrements expirent selon un calendrier et sont supprimés automatiquement : le Temps d’écran et l’usage par application, l’historique web, l’historique vidéo, l’historique de position et le fil d’activité au bout de 30 jours ; les alertes SOS, les check-in de sécurité et les demandes de temps supplémentaire au bout de 90 jours ; les rapports hebdomadaires au bout de 365 jours. Les codes d’appairage expirent en quelques minutes et une connexion par navigateur dure 7 jours. Certains enregistrements n’ont aujourd’hui aucune date d’expiration et sont conservés jusqu’à la suppression du compte familial : le compte et ses réglages, les lieux enregistrés, les fiches des enfants et des appareils, les tâches à récompense, les demandes d’autorisation de site, le tableau des étoiles et l’historique hebdomadaire du temps d’écran, ainsi que la liste des applications installées sur chaque appareil. Les messages d’assistance et toute capture d’écran qui y est jointe sont conservés sans limite de durée et ne sont pas supprimés avec le compte ; il est prévu de combler cette lacune. Des enregistrements limités peuvent également subsister lorsque la loi, la prévention de la fraude, la rotation des sauvegardes ou les transactions effectuées via une boutique d’applications l’exigent.',
      },
      {
        title: '12. Suppression d’un compte',
        body: 'Un parent peut demander la suppression dans les Paramètres ou depuis kidgate.app. La demande reste en attente pendant 14 jours et peut être annulée durant ce délai ; passé ce délai, le compte familial, chaque enfant et chaque appareil qui en dépendent ainsi que les fichiers stockés qui lui appartiennent sont supprimés, et la connexion elle-même est retirée. La suppression est définitive et aucun export n’est possible ensuite. Les enregistrements d’assistance cités à la section 11 font exception et y survivent.',
      },
      {
        title: '13. Droits et choix',
        body: 'Selon le droit applicable, les utilisateurs peuvent demander l’accès, la rectification, la suppression, la limitation, l’opposition ou le retrait du consentement. La surveillance des messages et la confirmation par IA peuvent être désactivées à tout moment sans que le reste du service en soit affecté. Les autorisations de localisation, de notification, d’appareil photo et d’accès à l’appareil peuvent être désactivées dans le système d’exploitation, mais les fonctionnalités qui en dépendent cesseront de fonctionner ou deviendront incomplètes, et KidGate le signale sur l’écran du parent au lieu d’afficher une commande qui ne fonctionne plus.',
      },
      {
        title: '14. Données des enfants',
        body: 'KidGate ne traite les données d’un enfant que dans le cadre de la configuration et des directives du compte parent. Si des données d’un enfant ont été fournies sans l’autorité ou le consentement requis, KidGate peut restreindre le compte et supprimer les données après vérification.',
      },
      {
        title: '15. Incidents de sécurité des données',
        body: 'KidGate évaluera les incidents de sécurité confirmés, prendra des mesures d’atténuation raisonnables et informera les utilisateurs ou les autorités lorsque la loi l’exige. Les parents doivent protéger les comptes, les codes PIN et les appareils, et signaler rapidement tout accès non autorisé suspecté.',
      },
      {
        title: '16. Modifications et contact',
        body: 'Cette politique peut évoluer avec les fonctionnalités ou la législation. Les mises à jour importantes seront communiquées dans l’application ou par un canal de diffusion approprié. Les demandes relatives à la confidentialité peuvent être soumises via le canal d’assistance publié sur la fiche KidGate de la boutique d’applications.',
      },
    ],
  },
  termsOfService: {
    title: 'Conditions d’utilisation',
    effectiveDate: 'En vigueur à compter du 6 septembre 2026',
    intro:
      'En vous connectant à KidGate ou en l’utilisant, vous confirmez avoir lu et accepté les présentes conditions. KidGate est le nom commercial et de produit utilisé par le développeur indépendant qui exploite le service.',
    sections: [
      {
        title: '1. Admissibilité',
        body: 'Vous devez avoir l’âge requis pour conclure un contrat en vertu du droit applicable et disposer d’une autorité légale sur chaque enfant, compte et appareil que vous gérez. N’utilisez pas le service si vous n’acceptez pas les présentes conditions.',
      },
      {
        title: '2. Ce qu’est KidGate, et ce qu’il n’est pas',
        body: 'KidGate fournit des outils qui aident les parents à gérer des appareils, à définir des limites, à consulter l’état des appareils et à recevoir des alertes. Il ne remplace pas la supervision directe, un avis médical, les services d’urgence, les forces de l’ordre ou des services professionnels de protection de l’enfance. Le SOS vous prévient ; il ne contacte pas les services d’urgence et ne fonctionne pas lorsque l’appareil n’a pas de réseau.',
      },
      {
        title: '3. Logiciel installé sur un appareil géré',
        body: 'Appliquer une règle exige un logiciel sur l’appareil concerné, et chaque plateforme lui accorde des droits différemment : le framework Temps d’écran d’Apple sur iPhone et iPad, un service d’accessibilité et une autorisation d’administrateur d’appareil sur Android, une extension système et un agent en arrière-plan sur macOS, un service en arrière-plan sur Windows, et une extension de navigateur dans Chrome. Vous l’installez vous-même, sur un appareil que vous êtes en droit de gérer, et vous pouvez le retirer de cet appareil à tout moment. Le retirer, ou retirer une autorisation dont il dépend, met fin à l’application des règles sur cet appareil — KidGate vous dira que cela s’est produit, mais ne peut pas l’empêcher.',
      },
      {
        title: '4. Responsabilités des parents',
        body: 'Vous devez informer les enfants de manière appropriée, obtenir le consentement requis, configurer correctement les autorisations, tester les fonctionnalités et respecter les lois relatives à la confidentialité, à la surveillance, à l’emploi, à l’éducation et à la protection de l’enfance. La surveillance des messages et la confirmation par IA font chacune l’objet d’un consentement distinct et relèvent de votre décision, avec l’information que cette décision exige dans votre juridiction. N’utilisez pas KidGate pour une surveillance secrète, du harcèlement, un contrôle illicite ou une atteinte aux droits d’autrui.',
      },
      {
        title: '5. Sécurité du compte et Code PIN parent',
        body: 'Vous êtes responsable de l’activité du compte et de la protection des appareils, codes PIN et méthodes de connexion. Le Code PIN parent protège les réglages sensibles sur un appareil enfant et ne peut pas être récupéré depuis un appareil — il est conservé sous forme de hachage à sens unique. Signalez rapidement tout accès non autorisé suspecté. KidGate peut restreindre temporairement des comptes ou des appareils afin de protéger les utilisateurs ou d’enquêter sur un abus.',
      },
      {
        title: '6. Autorisations de la plateforme et limites techniques',
        body: 'Les fonctionnalités dépendent des autorisations du système d’exploitation, de l’accès réseau, de l’état de la batterie, des paramètres du fabricant, des services de localisation et de plateformes tierces, et ce que chaque plateforme autorise diffère. L’application de certaines règles relève, par conception, du meilleur effort possible — sur un ordinateur, une application bloquée est fermée plutôt qu’empêchée de se lancer — et KidGate précise lesquelles sur l’écran qui les propose. Les alertes peuvent être retardées, incomplètes ou inexactes. Vous devez vérifier les appareils directement et ne devez pas vous fier uniquement à KidGate pour la sécurité ou les urgences.',
      },
      {
        title: '7. Formules, essai et offre gratuite',
        body: 'Un essai gratuit avec accès complet commence dès l’appairage de vos premiers appareils parent et enfant et dure la période indiquée dans l’application. À la fin, les règles que vous avez définies continuent de s’appliquer sans paiement sur un appareil enfant — Limite quotidienne, Heures bloquées, Applications bloquées, le Filtre web, le Verrouillage de l’appareil, les demandes de temps supplémentaire et les tâches à récompense — tandis que l’activité en direct, l’historique, les rapports hebdomadaires et le suivi de position deviennent des fonctions Premium. Lorsqu’une famille compte plus d’appareils enfants que la formule n’en couvre, les appareils supplémentaires sont mis en pause : ils continuent d’appliquer les règles déjà définies et cessent d’envoyer de l’activité, et c’est vous qui choisissez l’appareil qui reste surveillé. Retirer un appareil enfant ne relance pas l’essai, et une famille ne peut appairer qu’un nombre limité d’appareils enfants sur la durée de vie du compte.',
      },
      {
        title: '8. Abonnements et paiements',
        body: 'Les achats, renouvellements, annulations et remboursements sont régis par les conditions de l’App Store d’Apple, de Google Play ou du prestataire de paiement concerné. Un seul abonnement couvre toute la famille et seul le titulaire de la famille paie. Les prix et fonctionnalités des formules peuvent changer après notification requise par la loi et les règles des boutiques d’applications.',
      },
      {
        title: '9. Contenus automatisés et générés par IA',
        body: 'Les résumés des rapports hebdomadaires, les catégories attribuées aux applications et aux sites web et l’étape de confirmation de la surveillance des messages sont produits par des modèles automatisés et peuvent se tromper dans les deux sens : un site peut être classé dans la mauvaise catégorie, un résumé peut décrire une semaine de façon inexacte, et une alerte peut se déclencher sur un message anodin ou ne pas se déclencher sur un message nuisible. Considérez tout cela comme une invitation à regarder plutôt que comme un constat, et ne vous en servez pas comme seule base d’une décision concernant un enfant.',
      },
      {
        title: '10. Licence et propriété',
        body: 'KidGate accorde une licence limitée, personnelle, non exclusive, incessible et révocable d’utilisation de l’application selon les présentes conditions. Vous ne pouvez pas revendre, effectuer de l’ingénierie inverse, contourner les protections, automatiser l’extraction de données, ou utiliser la marque, le code source ou le contenu au-delà de ce que la loi permet.',
      },
      {
        title: '11. Comportements interdits',
        body: 'Ne compromettez pas de systèmes, ne distribuez pas de logiciels malveillants, n’usurpez pas l’identité d’autrui, n’accédez pas à des données non autorisées, ne surchargez pas les services, ne contournez pas les limites, ne causez pas de préjudice et n’enfreignez pas la loi. KidGate peut restreindre ou résilier l’accès lorsqu’il estime raisonnablement qu’une violation s’est produite.',
      },
      {
        title: '12. Disponibilité et modifications',
        body: 'Le service peut être modifié, suspendu ou arrêté en raison de la maintenance, de la sécurité, de changements de plateforme, de la loi ou de considérations opérationnelles. KidGate est exploité par un développeur indépendant et peut être interrompu ; le cas échéant, les abonnements actifs sont traités conformément aux règles applicables de la boutique d’applications. KidGate vise une disponibilité raisonnable mais ne garantit pas un fonctionnement ininterrompu, exempt d’erreurs, ni la compatibilité avec tous les appareils.',
      },
      {
        title: '13. Avertissements',
        body: 'Dans la mesure permise par la loi, le service est fourni « tel quel » et « selon disponibilité », sans garantie implicite de qualité marchande, d’adéquation à un usage particulier, d’exactitude ou d’absence de contrefaçon. Rien n’exclut les droits impératifs des consommateurs ni la responsabilité que la loi ne permet pas d’exclure.',
      },
      {
        title: '14. Limitation de responsabilité',
        body: 'Dans la mesure permise par la loi, KidGate n’est pas responsable des dommages indirects, accessoires, spéciaux, punitifs, liés à la perte de données, de profits ou d’opportunités, résultant de l’utilisation ou de l’impossibilité d’utiliser le service. La responsabilité globale pour les réclamations liées au service ne dépassera pas le montant versé à KidGate au cours des 12 mois précédant l’événement, sauf disposition contraire de la loi.',
      },
      {
        title: '15. Indemnisation',
        body: 'Dans la mesure permise par la loi, vous acceptez d’indemniser KidGate contre les réclamations de tiers résultant d’une utilisation illicite, d’une surveillance non autorisée, d’une atteinte aux droits d’autrui ou d’une violation des présentes conditions. Cela ne couvre pas les préjudices légalement imputables directement à KidGate.',
      },
      {
        title: '16. Résiliation et litiges',
        body: 'Vous pouvez cesser d’utiliser le service et demander la suppression du compte. La suppression reste en attente pendant 14 jours et peut être annulée durant ce délai ; passé ce délai, le compte familial et ses données sont définitivement supprimés. KidGate peut suspendre ou résilier le service en cas de violation, de risque pour la sécurité ou d’exigence légale. Les parties doivent d’abord tenter de bonne foi de résoudre les litiges ; le droit applicable et les juridictions compétentes sont déterminés par les règles impératives applicables à l’utilisateur et à l’exploitant.',
      },
      {
        title: '17. Dispositions générales',
        body: 'Si une disposition est jugée inapplicable, les autres dispositions restent en vigueur. Le fait de ne pas faire respecter une disposition ne constitue pas une renonciation à celle-ci. Les présentes conditions, ainsi que la Politique de confidentialité et les conditions de toute boutique d’applications, constituent l’intégralité de l’accord relatif au service. KidGate peut céder les présentes conditions dans le cadre d’un transfert de l’application ; vos droits en vertu des lois impératives n’en sont pas affectés.',
      },
      {
        title: '18. Logiciels tiers',
        body: 'KidGate intègre deux polices, toutes deux utilisées sous la licence SIL Open Font License 1.1 : Plus Jakarta Sans de Tokotype et Baloo 2 de Ek Type. Les métriques verticales de Baloo 2 sont retaillées pour les hauteurs de ligne de cette application ; les tracés et le nom de la famille restent inchangés, et la licence autorise cette modification. Aucune des deux n’est vendue séparément. Sources et licence :',
        links: [
          {
            label: 'Plus Jakarta Sans sur GitHub',
            url: 'https://github.com/tokotype/PlusJakartaSans',
          },
          {
            label: 'Baloo 2 sur GitHub',
            url: 'https://github.com/EkType/Baloo2',
          },
          {
            label: 'SIL Open Font License 1.1',
            url: 'https://scripts.sil.org/OFL',
          },
        ],
      },
      {
        title: '19. Modifications et contact',
        body: 'Ces conditions peuvent être mises à jour. Les modifications importantes seront communiquées de manière appropriée ; la poursuite de l’utilisation après la date d’entrée en vigueur vaut acceptation des conditions mises à jour, dans la mesure permise par la loi. Les questions peuvent être soumises via le canal d’assistance figurant sur la fiche KidGate de la boutique d’applications.',
      },
    ],
  },
} as const;
