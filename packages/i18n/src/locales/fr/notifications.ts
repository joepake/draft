export const notifications = {
  title: 'Notifications',
  subtitleAllOn: 'Toutes les alertes activées',
  subtitleMuted_one: '1 alerte coupée',
  subtitleMuted: '{{count}} alertes coupées',
  sosAlwaysOn: 'Le SOS passe toujours, même si tout est désactivé ici.',
  sectionAlerts: 'Alertes',
  sectionAlertsHint: 'Choisissez ce dont ce téléphone est averti.',
  sectionSummary: 'Récapitulatif',
  sectionQuietHours: 'Heures silencieuses',
  sectionQuietHoursHint:
    'Les alertes restent muettes sur cette plage. Le SOS n’est jamais coupé, et les Alertes de messages les plus graves passent quand même.',
  quietHoursLabel: 'Heures silencieuses',
  quietHoursOff: 'Désactivé — les alertes arrivent à toute heure',
  quietHoursActive: 'Silencieux de {{start}} à {{end}}',
  quietHoursStart: 'De',
  quietHoursEnd: 'À',
  footnote:
    'Ces réglages ne valent que pour ce téléphone. Les autres appareils parents gardent les leurs.',
  toastSaveFailed: 'Enregistrement impossible. Réessayez.',
  alert: {
    tamperAlerts: {
      label: 'Protection désactivée',
      hint: 'Sur un appareil enfant, une autorisation nécessaire à KidGate a été désactivée, la date, l’heure ou le fuseau horaire a été modifié, ou le SOS a été pressé pendant que l’appareil était verrouillé. L’alerte SOS elle-même passe toujours.',
    },
    placeAlerts: {
      label: 'Arrivées et départs',
      hint: 'Votre enfant arrive dans un lieu enregistré ou le quitte.',
    },
    timeRequests: {
      label: 'Demandes de temps',
      hint: 'Votre enfant demande plus de temps d’écran.',
    },
    siteRequests: {
      label: 'Demandes de sites',
      hint: 'Votre enfant demande à ouvrir un site bloqué.',
    },
    checkIn: {
      label: 'Réponses aux Check-in',
      hint: 'Votre enfant répond à un Check-in.',
    },
    rewardTasks: {
      label: 'Récompenses réclamées',
      hint: 'Votre enfant déclare une tâche récompense comme terminée.',
    },
    appActivity: {
      label: 'Applis installées ou supprimées',
      hint: 'Une appli apparaît ou disparaît sur un appareil enfant.',
    },
    anomalyAlerts: {
      label: 'Activité inhabituelle',
      hint: 'Usage inhabituel sur un appareil enfant : usage nocturne, pics, nouvelles applis.',
    },
    weeklyDigest: {
      label: 'Bilan hebdomadaire',
      hint: 'Récapitulatif du lundi sur le temps d’écran et les blocages.',
    },
    messageAlerts: {
      label: 'Alertes de messages',
      hint: 'Des mots préoccupants apparaissent dans les messages ou les recherches de votre enfant.',
    },
    billing: {
      label: 'Rappels Premium',
      hint: 'Des rappels pour vous abonner après votre essai. Les avis de fin d’essai ou de fin de Premium passent toujours.',
    },
  },
};
