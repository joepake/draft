export const appInventory = {
  title: 'Aplicaciones en este dispositivo',
  subtitle: 'Todo lo que KidGate encontró instalado, no solo lo que cambió.',
  summaryFlagged: '{{flagged}} de {{total}} aplicaciones merecen una mirada',
  summaryClear: 'Nada marcado entre {{total}} aplicaciones',
  flaggedTitle: 'Merecen una mirada',
  otherTitle: 'Todo lo demás',
  unclassifiedTitle: 'Aún sin identificar',
  scannedLabel: 'Último análisis',
  staleNote:
    'Esta lista está desactualizada. Se renovará cuando el dispositivo vuelva a conectarse.',
  truncatedNote: 'Mostrando {{shown}} de {{total}} aplicaciones encontradas.',
  firstScanNote:
    'Este es el primer análisis, así que KidGate no puede decir cuándo llegó cada una.',
  newBadge: 'Nueva',
  ageBadge: '{{age}}+',
  emptyTitle: 'Todavía no hay análisis',
  emptySubtitle:
    'El dispositivo publicará su lista de aplicaciones la próxima vez que se conecte.',
  unsupportedTitle: 'Este dispositivo no puede listar sus aplicaciones',
  unsupportedIos:
    'Apple no permite que ninguna aplicación lea lo que está instalado en un iPhone o iPad, así que KidGate solo puede informar de las aplicaciones a medida que se usan.',
  unsupportedGeneric:
    'Este dispositivo no informa de las aplicaciones instaladas en él.',
  incompleteNote:
    'Una aplicación sin icono en la pantalla de inicio puede no aparecer aquí.',
  blockHint:
    'Para detener una aplicación, abre Aplicaciones bloqueadas en el propio dispositivo.',
  howItWorksLabel: 'Cómo funciona esta lista',
} as const;
