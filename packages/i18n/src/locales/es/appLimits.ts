export const appLimits = {
  title: 'Límites de apps',
  intro:
    'Limita cuánto se puede usar cada app al día. Se suma al límite diario del dispositivo.',
  emptyTitle: 'Aún no hay límites',
  emptySubtitle: 'Elige una app abajo para darle su propio límite diario.',
  usedToday: '{{used}} de {{limit}} hoy',
  addSectionTitle: 'Añadir un límite',
  addSectionSubtitle: 'Apps que tu hijo o hija usó hace poco.',
  candidateUsage: '{{duration}} hoy',
  noUsageYet:
    'Todavía no hay uso registrado. Los límites aparecen cuando el dispositivo lo informe.',
  footnote: 'Los límites se reinician a medianoche en el dispositivo del menor.',
  toastSaved: 'Límites guardados.',
  toastSaveFailed: 'No se pudo guardar. Inténtalo de nuevo.',
  removeAccessibility: 'Quitar el límite de {{app}}',
  increaseAccessibility: 'Aumentar el límite de {{app}}',
  decreaseAccessibility: 'Reducir el límite de {{app}}',
  addAccessibility: 'Añadir un límite diario para {{app}}',
} as const;
