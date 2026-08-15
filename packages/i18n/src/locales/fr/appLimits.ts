export const appLimits = {
  title: 'Limites d’apps',
  intro:
    'Plafonnez la durée d’utilisation de chaque appli par jour, en plus de la limite quotidienne de l’appareil.',
  emptyTitle: 'Aucune limite pour l’instant',
  emptySubtitle: 'Choisissez une appli ci-dessous pour lui donner sa propre limite.',
  usedToday: '{{used}} sur {{limit}} aujourd’hui',
  addSectionTitle: 'Ajouter une limite',
  addSectionSubtitle: 'Applis récemment utilisées par votre enfant.',
  candidateUsage: '{{duration}} aujourd’hui',
  noUsageYet:
    'Aucune utilisation signalée. Les limites apparaîtront dès que l’appareil enverra ses données.',
  footnote: 'Les limites se réinitialisent à minuit sur l’appareil de l’enfant.',
  toastSaved: 'Limites enregistrées.',
  toastSaveFailed: 'Enregistrement impossible. Réessayez.',
  removeAccessibility: 'Supprimer la limite de {{app}}',
  increaseAccessibility: 'Augmenter la limite de {{app}}',
  decreaseAccessibility: 'Réduire la limite de {{app}}',
  addAccessibility: 'Ajouter une limite quotidienne pour {{app}}',
} as const;
