export const notifications = {
  title: 'Notifications',
  subtitleAllOn: 'Toutes les alertes activées',
  subtitleMuted_one: '1 alerte coupée',
  subtitleMuted: '{{count}} alertes coupées',
  sosAlwaysOn: 'Le SOS passe toujours, même si tout est désactivé ici.',
  sosFullScreenOff:
    'Sur ce téléphone, un SOS s’affiche en petite bannière au lieu d’occuper tout l’écran, il est donc plus facile de le manquer. Autorisez les alertes en plein écran pour corriger cela.',
  sosFullScreenAllow: 'Autoriser les alertes en plein écran',
  sectionAlerts: 'Alertes',
  sectionAlertsHint: 'Choisissez quelles alertes sont envoyées à un téléphone parent.',
  sectionSummary: 'Récapitulatif',
  sectionQuietHours: 'Heures silencieuses',
  sectionQuietHoursHint:
    'Seuls le SOS et les Alertes de messages les plus graves passent pendant cette plage. Rien n’est envoyé après coup ; les événements apparaissent toujours dans Activité.',
  quietHoursLabel: 'Heures silencieuses',
  quietHoursOff: 'Désactivé — les alertes arrivent à toute heure',
  quietHoursActive: 'Aucune alerte envoyée de {{start}} à {{end}}',
  quietHoursStart: 'De',
  quietHoursEnd: 'À',
  quietHoursSameTime: 'Choisissez deux heures différentes.',
  footnote:
    'Ces réglages ne valent que pour un seul téléphone. Les autres appareils parents gardent les leurs.',
  toastSaveFailed: 'Enregistrement impossible. Réessayez.',
  localReminderSetupTitle: 'Terminez la configuration',
  localReminderIdleTitle: 'Vos règles restent actives',
  localReminderIdleBody:
    'Vous n’avez pas ouvert KidGate depuis une semaine. Consultez le temps d’écran d’aujourd’hui et ce qui a été bloqué.',
  localReminderDormancyTitle: 'Les rapports pourraient cesser',
  localReminderDormancyBody:
    'Si personne n’ouvre KidGate pendant {{days}} jours, les appareils de votre enfant cessent d’envoyer des rapports jusqu’à ce que quelqu’un l’ouvre à nouveau. Vos règles fonctionnent toujours.',
  alert: {
    tamperAlerts: {
      label: 'Alertes de protection',
      hint: 'Une autorisation nécessaire à KidGate est désactivée sur un appareil enfant, son horloge ou son fuseau horaire est modifié, ou le SOS est pressé alors qu’il est verrouillé.',
    },
    placeAlerts: {
      label: 'Alertes de lieux',
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
      label: 'Tâches à récompense',
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
      label: 'Rapport hebdomadaire',
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
