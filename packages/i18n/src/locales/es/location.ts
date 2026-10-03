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
  ringButton: 'Reproducir sonido',
  toastRingSentAndroid: '{{deviceName}} sonará en cuanto reciba la solicitud.',
  toastRingSentIos:
    '{{deviceName}} reproducirá un sonido en cuanto reciba la solicitud, salvo que esté en silencio o con un modo de concentración activado.',
  toastRingFailed:
    'No se pudo reproducir un sonido en el dispositivo. Inténtalo de nuevo.',
  ringNotificationsOff:
    'Las notificaciones están desactivadas en {{deviceName}}, así que no puede reproducir un sonido. Actívalas en los ajustes de ese dispositivo.',
  activityTitleRingRequested: 'Sonido solicitado',
  activityDescriptionRingRequested:
    'Se solicitó a {{deviceName}} que reprodujera un sonido para poder encontrarlo.',
  toastChildNeedsNotifications:
    'Abre KidGate en el dispositivo del niño y permite las notificaciones para que pueda recibir las solicitudes de actualización de ubicación.',
  checkInBadge: 'Check-in',
  movementHistoryTitle: 'Historial de ubicaciones',
  historyEmpty:
    'Todavía no hay historial. Los puntos aparecerán después de una actualización de ubicación o un Check-in.',
  historyHighlightAccessibility: 'Resaltar {{place}} en el mapa',
  historyOpenMapsAccessibility: 'Abrir {{place}} en Mapas',
  locationBannerTitle: 'Activar ubicación',
  locationBannerBody:
    'Tu padre o madre quiere ver la ubicación de este dispositivo para saber que has llegado bien.',
  locationBannerBodySharingOff:
    'Ahora mismo compartir la ubicación está desactivado, así que no se envía nada. Si lo permites aquí, funcionará enseguida si tu padre o madre lo activa más adelante.',
  allowLocationButton: 'Permitir ubicación',
  locationNotAllowed:
    'La ubicación aún no está permitida. Abre Ajustes → KidGate → Ubicación (o activa primero los Servicios de ubicación). Si la opción Ubicación no aparece, selecciona nuevamente «Permitir ubicación».',
  locationNotAllowedAndroid:
    'La ubicación aún no está permitida. Selecciona Abrir Ajustes, luego Permisos → Ubicación, y elige «Permitir todo el tiempo».',
  locationServicesOff:
    'La Localización está desactivada en todo el dispositivo. Abre Ajustes → Privacidad y seguridad → Localización, actívala y vuelve a KidGate para seleccionar «Permitir ubicación».',
  locationDeniedInSettings:
    'El acceso a la ubicación para KidGate fue denegado. Abre Ajustes → KidGate → Ubicación y selecciona «Mientras se usa la app» o «Siempre».',
  foregroundOnly:
    'La ubicación solo se actualiza mientras KidGate está abierto. Selecciona Abrir Ajustes, luego Ubicación, y elige «Siempre».',
  foregroundOnlyAndroid:
    'La ubicación solo se actualiza mientras KidGate está abierto. Selecciona Abrir Ajustes, luego Permisos → Ubicación, y elige «Permitir todo el tiempo».',
  toastLocateFailed:
    'No se pudo encontrar tu ubicación ahora mismo. Inténtalo de nuevo en un momento.',
  backgroundLocationTitle: 'Permitir ubicación cuando la aplicación esté cerrada',
  backgroundLocationBody:
    'KidGate necesita acceso a la ubicación en segundo plano para que los padres puedan ver dónde está este dispositivo incluso cuando la aplicación esté cerrada, ayudando a mantener la seguridad de la familia.',
  mapNoLocationsEmpty: 'Todavía no hay ubicaciones para mostrar',
  mapHistoryEmpty:
    'Los puntos del recorrido aparecerán en el mapa después de la próxima actualización de ubicación.',
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
  childPickCarriedA11y:
    'Marcar {{deviceName}} como el dispositivo que lleva {{childName}}',
  stayRange: '{{from}} – {{to}}',
  wizardStepAllow:
    'Selecciona Permitir y luego Siempre para que las actualizaciones sigan en segundo plano.',
  wizardStepAllowAndroid:
    'Elige «Mientras la app está en uso» y luego «Permitir todo el tiempo» cuando se te pida, para que las actualizaciones sigan llegando en segundo plano.',
  requestNoFix:
    'Este dispositivo no pudo obtener una posición. Puede que aún no tenga permiso de ubicación.',
  requestIpOnly:
    'Este dispositivo solo pudo estimar su posición a partir de la conexión a internet. Activa su Wi-Fi (no hace falta conectarse) y vuelve a intentarlo.',
  requestUnsupported: 'Este dispositivo no puede informar de su ubicación.',
  cardSharingOff: 'El uso compartido de la ubicación está desactivado',
  cardPermissionOff: 'La ubicación no está permitida en este dispositivo',
  cardForegroundOnly:
    'La ubicación solo se actualiza mientras KidGate está abierto en este dispositivo',
  cardIpOnly:
    'No se puede localizar este dispositivo: activa su Wi-Fi (no hace falta conectarse)',
  cardNotUpdating: 'La ubicación ha dejado de actualizarse',
  namesNeedPremium: 'Los nombres de lugares requieren un plan de pago',
  namesNeedPremiumTrialEnded:
    'Tu prueba ha terminado. Mejora tu plan para ver los nombres de los lugares completos.',
  namesNeedPremiumStill:
    'Las ubicaciones se siguen registrando y los lugares que has guardado siguen mostrando su nombre.',
  awayFromPlace: 'A {{distance}} al {{direction}} de {{place}}',
  distanceKm: '{{value}} km',
  distanceMeters: '{{value}} m',
  compassN: 'norte',
  compassNe: 'noreste',
  compassE: 'este',
  compassSe: 'sureste',
  compassS: 'sur',
  compassSw: 'suroeste',
  compassW: 'oeste',
  compassNw: 'noroeste',
  areaLabel: 'En algún lugar de {{area}}',
} as const;
