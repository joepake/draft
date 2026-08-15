/**
 * La fenêtre de l’agent de bureau (macOS et Windows).
 * Contexte clé par clé : voir en/macos.ts.
 */
export const macos = {
  headingNow: 'En ce moment',
  headingEnforce: 'Ce que ce Mac peut appliquer',
  headingEnforceHint:
    'Ce que ton parent a défini, et avec quelle fermeté ce Mac peut le maintenir.',
  headingRemovable: 'À quel point c’est facile à retirer',

  parentAccessBody:
    'Saisissez le code PIN parent pour choisir les applications bloquées sur ce Mac.',
  checking: 'Vérification…',

  enforcing: 'Protection active',
  enforcingYes: 'Oui',
  enforcingFailed: 'Non — {{count}} vérifications d’affilée ont échoué',
  enforcingFailed_one: 'Non — la dernière vérification a échoué',

  lockState: 'Appareil verrouillé',
  lockStateNo: 'Non',
  lockStateNotChecked: 'Pas encore vérifié',
  lockStateParent: 'Oui — verrouillé par un parent',
  lockStateSchedule: 'Oui — Heures bloquées',
  lockStateDailyLimit: 'Oui — Limite quotidienne atteinte',

  appBlocking: 'Blocage d’applications',
  appBlockingBestEffort:
    'Au mieux — les applications sont fermées après leur ouverture, pas empêchées de s’ouvrir',

  webFilterLabel: 'Filtre web',
  webFilterUnavailable: 'Indisponible sur ce Mac',
  notSupportedOnThisDevice: 'Non pris en charge sur cet appareil',

  scheduleLabel: 'Heures bloquées',
  dailyLimitLabel: 'Limite quotidienne',
  enforcedHere: 'Activé, appliqué par KidGate',

  screenTimeLabel: 'Temps d’écran',
  screenTimeAgentMeasured:
    'Compté par KidGate. Le temps où KidGate ne fonctionne pas n’est pas compté.',

  batteryLabel: 'Batterie',
  batteryReported: 'Communiquée à la famille',
  batteryNone: 'Ce Mac n’a pas de batterie',

  locationLabel: 'Position',
  locationOff: 'Désactivée',
  locationCoarse: 'Approximative — via le Wi-Fi, pas le GPS',

  accountLabel: 'Compte de l’enfant',
  accountStandard: 'Standard',
  accountAdmin: 'Administrateur — ce compte peut désactiver complètement KidGate',

  restartLabel: 'Se relance s’il est fermé',
  restartYes: 'Oui',
  restartNo: 'Non — la configuration n’est pas terminée',

  forceQuitLabel: 'Nombre de fois où KidGate a été fermé',

  startAtLoginSectionTitle: 'Démarrage',
  startAtLoginSectionDescription:
    'KidGate mesure le temps d’écran et applique les règles uniquement lorsqu’il fonctionne.',
  startAtLoginLabel: 'Ouvrir KidGate à l’ouverture de session',
  startAtLoginHintOn: 'KidGate démarre avec cet appareil et se rouvre s’il est fermé.',
  startAtLoginHintOff:
    'Rien n’est mesuré ni bloqué tant que personne ne rouvre KidGate.',
  startAtLoginUnavailable:
    'Cet appareil n’a pas laissé KidGate s’ajouter au démarrage.',

  stillRunningTitle: 'KidGate fonctionne toujours',
  stillRunningBodyMac: 'Rouvrez-le depuis l’icône KidGate dans la barre des menus.',
  stillRunningBodyWindows:
    'Rouvrez-le depuis l’icône KidGate dans la zone de notification.',

  updateAvailableTitle: 'Une version plus récente de KidGate est disponible',
  updateAvailableBody: 'KidGate {{version}} est prêt à être téléchargé.',
  updateAction: 'Obtenir la mise à jour',

  chooseApps: 'Choisir les applications à bloquer',
  chooseAppsHint:
    'Choisissez les applications à bloquer sur ce Mac. Un parent peut activer ou désactiver le blocage depuis son téléphone.',
  saveSelection: 'Enregistrer',
  noAppsFound: 'Aucune application trouvée dans le dossier Applications.',
};
