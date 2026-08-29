export const location = {
  title: 'Ubicación',
  fallbackDeviceName: 'Dispositivo del niño',
  syncNote:
    'La ubicación puede tardar unos minutos en actualizarse, más si el dispositivo no tiene conexión a Internet o se cerró de forma inesperada.',
  toastUpdateFailed:
    'No se pudo actualizar el uso compartido de la ubicación. Inténtalo de nuevo.',
  toggleLabel: 'Compartir ubicación',
  toggleHint:
    'Después de activar esta opción, abre KidGate una vez en este dispositivo.',
  toggleAccessibilityLabel: 'Compartir ubicación',
  lastKnownLocation: 'Última ubicación conocida',
  nearPlace: 'Cerca de {{place}}',
  noLocationHint:
    'Activa el uso compartido de la ubicación y luego abre KidGate una vez en este dispositivo.',
  waitingForLocation: 'Esperando ubicación',
  updatedAt: 'Actualizado {{date}}',
  openInMaps: 'Abrir en Mapas',
  openInMapsAccessibility: 'Abrir en Mapas',
  refreshButton: 'Actualizar ubicación',
  refreshingButton: 'Actualizando…',
  refreshAccessibility: 'Actualizar ubicación',
  toastEnableSharingFirst:
    'Activa primero el uso compartido de la ubicación antes de solicitar una actualización.',
  activityTitleRefreshRequested: 'Actualización de ubicación solicitada',
  activityDescriptionRefreshRequested:
    'Se solicitó a {{deviceName}} que enviara su ubicación actualizada.',
  toastRefreshSent:
    '{{deviceName}} actualizará su ubicación en cuanto reciba la solicitud.',
  toastRefreshFailed:
    'No se pudo solicitar la actualización de la ubicación. Inténtalo de nuevo.',
  toastChildNeedsNotifications:
    'Abre KidGate en el dispositivo del niño y permite las notificaciones para que pueda recibir las solicitudes de actualización de ubicación.',
  checkInBadge: 'Check-in',
  movementHistoryTitle: 'Historial de ubicaciones',
  historyEmpty:
    'Todavía no hay historial. Los puntos aparecerán después de una actualización de ubicación o un Check-in.',
  historyHighlightAccessibility: 'Resaltar {{place}} en el mapa',
  historyOpenMapsAccessibility: 'Abrir {{place}} en Mapas',
  latestBadge: 'Más reciente',
  unableToRequestLocationRefresh:
    'No se pudo solicitar la actualización de la ubicación',
  locationBannerTitle: 'Activar ubicación',
  locationBannerBody:
    'Tu padre o madre quiere ver la ubicación de este dispositivo para saber que has llegado sano y salvo.',
  locationBannerBodySharingOff:
    'Ahora mismo compartir la ubicación está desactivado, así que no se envía nada. Si lo permites aquí, funcionará enseguida si tu padre o madre lo activa más adelante.',
  allowLocationButton: 'Permitir ubicación',
  locationNotAllowed:
    'La ubicación aún no está permitida. Abre Ajustes → KidGate → Ubicación (o activa primero los Servicios de ubicación). Si la opción Ubicación no aparece, selecciona nuevamente «Permitir ubicación».',
  locationServicesOff:
    'Los Servicios de ubicación están desactivados en este dispositivo. Abre Ajustes → Privacidad y seguridad → Servicios de ubicación, actívalos y vuelve a KidGate para seleccionar «Permitir ubicación».',
  locationDeniedInSettings:
    'El acceso a la ubicación para KidGate fue denegado. Abre Ajustes → KidGate → Ubicación y selecciona «Mientras se usa la app» o «Siempre».',
  locationEnabled:
    'La ubicación está activada. Selecciona «Siempre» para que KidGate pueda actualizar la ubicación incluso cuando la aplicación esté cerrada.',
  backgroundLocationTitle: 'Permitir ubicación cuando la aplicación esté cerrada',
  backgroundLocationBody:
    'KidGate necesita acceso a la ubicación en segundo plano para que los padres puedan ver dónde está este dispositivo incluso cuando la aplicación esté cerrada, ayudando a mantener la seguridad de la familia.',
  locationNote:
    'Muestra la ubicación del niño cuando el uso compartido de la ubicación está activado en el dispositivo del niño.',
  placeAlertsNote:
    'Envía alertas de ubicación para casa, la escuela y otros lugares seguros.',
  mapNoLocationsEmpty: 'Todavía no hay ubicaciones para mostrar',
  mapUnavailable: 'Mapa no disponible. Comprueba tu conexión e inténtalo de nuevo.',
  historyShowMore: 'Ver {{count}} lugares más',
  historyShowMore_one: 'Ver 1 lugar más',
  childSharingHint: 'Se aplica a todos los dispositivos asignados a {{childName}}.',
  childNoCapableDevices:
    'Ningún dispositivo de {{childName}} puede informar la ubicación.',
  childCarriedQuestion: '¿Qué dispositivo lleva {{childName}}?',
  childCarriedHint:
    'Su ubicación se lee de ese dispositivo. Una tablet en casa puede informar una posición más reciente que el teléfono en la mochila, así que KidGate nunca adivina.',
  childDevicesOnline: '{{online}} de {{total}} en línea',
  childNoneOnline: 'Ningún dispositivo en línea',
  childPickCarried: 'Lo lleva',
  childPickCarriedA11y:
    'Marcar {{deviceName}} como el dispositivo que lleva {{childName}}',
  stayRange: '{{from}} – {{to}}',
  placeTotalsTitle: 'Tiempo en tus lugares',
  placeTotalsNote:
    'De los últimos {{count}} días de historial. Solo se cuentan los lugares guardados aquí.',
  placeTotalsNote_one:
    'Del último día de historial. Solo se cuentan los lugares guardados aquí.',
} as const;
