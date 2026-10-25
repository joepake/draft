export const activities = {
  activityTypeSupportSession: 'Soporte',
  supportSessionTitle: 'Acceso de soporte',
  supportSessionBody:
    'Un agente de soporte de KidGate abrió tu cuenta familiar para atender una solicitud.',
  supportSessionBodyTicket:
    'Un agente de soporte de KidGate abrió tu cuenta familiar para atender la solicitud {{ticketRef}}.',
  title: 'Actividad',
  subtitleAllDevices: 'Últimos eventos de todos los dispositivos',
  subtitleTimelineForDevice: 'Cronología de {{deviceName}}',
  subtitleTimelineForChild: 'Cronología de {{childName}}',
  fallbackDeviceName: 'dispositivo',
  fallbackChildName: 'tu hijo o hija',
  liveBadge: 'En vivo',
  tryAgain: 'Intentar de nuevo',

  emptyTitleAll: 'Aún no hay actividad',
  emptyTitleDevice: 'No hay actividad para este dispositivo',
  emptyDescriptionAll:
    'Los eventos de bloqueo, desbloqueo y SOS de los dispositivos de tus hijos aparecerán aquí.',
  emptyDescriptionDevice:
    'Selecciona otro dispositivo o espera a que se registren eventos de bloqueo, desbloqueo y SOS en este dispositivo.',

  guestEmptyTitle: 'La actividad de tus hijos',
  guestEmptyDescription:
    'Cuando conectes el dispositivo de tu hijo, aquí verás al momento los bloqueos, desbloqueos, alertas SOS y avisos sobre sus apps.',
  guestSubtitle:
    'Inicia sesión para seguir la actividad de los dispositivos de tus hijos',

  guestPreviewHeading: 'Lo que verás',
  guestPreviewLock: 'Dispositivo bloqueado',
  guestPreviewSos: 'Alerta SOS',
  guestPreviewScreenTime: 'Actualización de Tiempo de uso',
  guestPreviewHint:
    'Ejemplo: la actividad real aparecerá cuando conectes un dispositivo',

  activityTypeLocked: 'Bloqueado',
  activityTypeUnlocked: 'Desbloqueado',
  activityTypeAppOpened: 'Aplicación abierta',
  activityTypeAppBlocked: 'Aplicación bloqueada',
  activityTypeAppInstalled: 'Aplicación instalada',
  activityTypeAppRemoved: 'Aplicación desinstalada',
  activityTypePlaceEnter: 'Entró en un lugar',
  activityTypePlaceExit: 'Salió de un lugar',
  activityTypeTamper: 'Alertas de protección',
  activityTypeScreenTime: 'Tiempo de uso',
  activityTypeCheckIn: 'Check-in',
  activityTypeLocationRequest: 'Ubicación',
  activityTypeTimeRequest: 'Solicitudes de tiempo',
  activityTypeRewardTask: 'Tareas con recompensa',
  activityTypeSearchAlert: 'Alertas de mensajes',
  activityTypeWebFilter: 'Filtro web',
  activityTypeEmergency: 'SOS',
  activityTypeUnknown: 'Actividad',

  sosEscapeTitle: 'Desbloqueo de emergencia',
  sosEscapeBody: 'El SOS desbloqueó este dispositivo durante {{minutes}} minutos.',
  sosEscapeRepeatTitle: 'Desbloqueo de emergencia ({{count}} hoy)',
  sosEscapeRepeatBody:
    'El SOS desbloqueó este dispositivo durante {{minutes}} minutos. Van {{count}} veces hoy.',
  sosEscapeLimitedTitle: 'Apps de emergencia abiertas',
  sosEscapeLimitedBody:
    'El SOS abrió las llamadas, los mapas y los mensajes en este dispositivo durante {{minutes}} minutos. Todo lo demás siguió bloqueado.',
  sosEscapeLimitedRepeatTitle: 'Apps de emergencia abiertas ({{count}} hoy)',
  sosEscapeLimitedRepeatBody:
    'El SOS abrió el teléfono, los mapas y los mensajes en este dispositivo durante {{minutes}} minutos. Van {{count}} veces hoy.',
  sosPressLockHeldTitle: 'SOS pulsado con el dispositivo bloqueado',
  sosPressLockHeldBody:
    'Se pulsó SOS en este dispositivo. La alerta se envió y el dispositivo siguió bloqueado.',
  sosPressLockHeldRepeatTitle:
    'SOS pulsado con el dispositivo bloqueado ({{count}} hoy)',
  sosPressLockHeldRepeatBody:
    'Se pulsó SOS en este dispositivo y siguió bloqueado. Van {{count}} veces hoy.',
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Se abrió una app bloqueada y KidGate la cerró.',
  appInstalledTitle: 'Aplicación instalada',
  appInstalledBody: 'Se instaló la aplicación {{appName}} en el dispositivo del niño.',
  appInstalledPendingBody:
    'Se instaló la aplicación {{appName}} en el dispositivo del niño y está bloqueada hasta que la permitas.',

  messageAlertTitle: 'Mensaje preocupante',
  messageAlertBody: 'Se detectó una palabra marcada en {{appName}}.',
  messageAlertBodyOutgoing:
    'Se detectó una palabra marcada en un mensaje que tu hijo escribió en {{appName}}.',
  messageAlertTitleSearch: 'Búsqueda preocupante',
  messageAlertBodySearch:
    'Se detectó una palabra marcada en una búsqueda en {{appName}}.',
  activityTypeMessageAlert: 'Alertas de mensajes',
  messageCheckedTitle: 'Revisado, nada preocupante',
  messageCheckedBody:
    'Apareció una palabra vigilada en {{appName}} y resultó inofensiva en su contexto.',
  activityTypeMessageChecked: 'Revisado',
  appRemovedTitle: 'Aplicación desinstalada',
  appRemovedBody: 'Se desinstaló la aplicación {{appName}} del dispositivo del niño.',
  extensionInstalledTitle: 'Extensión del navegador añadida',
  extensionInstalledBody: 'Se añadió la extensión {{appName}} al navegador del niño.',
  extensionRemovedTitle: 'Extensión del navegador eliminada',
  extensionRemovedBody: 'Se eliminó la extensión {{appName}} del navegador del niño.',

  placeEnterTitle: 'Entró en {{placeName}}',
  placeEnterBody: 'El dispositivo del niño entró en un lugar guardado.',

  placeExitTitle: 'Salió de {{placeName}}',
  placeExitBody: 'El dispositivo del niño salió de un lugar guardado.',

  tamperTitle: 'Se desactivó un permiso de protección',
  tamperFallbackTitle: 'Se desactivó un permiso de protección',
  tamperFallbackBody:
    'Se desactivó un permiso de protección en el dispositivo del niño.',

  tamperOverlayTitle: 'Se desactivó el permiso Mostrar sobre otras aplicaciones',
  tamperOverlayBody:
    'Es posible que la pantalla de bloqueo deje de mostrarse sobre otras aplicaciones hasta que se vuelva a habilitar este permiso.',

  tamperAccessibilityTitle: 'Se desactivó Accesibilidad',
  tamperAccessibilityBody:
    'La función Apps bloqueadas y el bloqueo del dispositivo pueden debilitarse hasta que Accesibilidad vuelva a activarse.',
  tamperUsageAccessTitle: 'Se desactivó el acceso al uso de aplicaciones',
  tamperUsageAccessBody:
    'Los límites de aplicaciones y las Horas bloqueadas pueden dejar de funcionar hasta que KidGate vuelva a medir el uso de aplicaciones en el dispositivo del niño.',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'Se desactivó el acceso a Tiempo de uso',
  tamperScreenTimeIosBody:
    'Los límites de aplicaciones y las Horas bloqueadas pueden dejar de funcionar hasta que se vuelva a permitir el acceso a Tiempo de uso en el dispositivo del niño.',
  tamperUsageAccessAndroidTitle: 'Se desactivó el Acceso de uso',
  tamperUsageAccessAndroidBody:
    'Los límites de aplicaciones y las Horas bloqueadas pueden dejar de funcionar hasta que se vuelva a activar el Acceso de uso para KidGate en el dispositivo del niño.',

  tamperBatteryTitle: 'Se desactivó el uso de batería sin restricciones',
  tamperBatteryBody:
    'El sistema puede pausar KidGate hasta que el uso de batería vuelva a configurarse como Sin restricciones.',

  tamperExactAlarmTitle: 'Se desactivaron Alarmas y recordatorios',
  tamperExactAlarmBody:
    'Las Horas bloqueadas pueden empezar o terminar tarde hasta que se vuelvan a permitir Alarmas y recordatorios.',

  tamperNotificationsTitle: 'Se desactivaron las notificaciones',
  tamperNotificationsBody:
    'Es posible que los comandos remotos y las alertas para padres no lleguen de forma confiable a este dispositivo.',

  tamperLocationTitle: 'Se desactivó la ubicación',
  tamperLocationBody:
    'Los padres no recibirán actualizaciones de ubicación hasta que vuelva a permitirse el acceso a la ubicación.',

  tamperCameraTitle: 'Se desactivó la cámara',
  tamperCameraBody:
    'Las fotos de SOS y Check-in pueden no enviarse hasta que se vuelva a permitir el acceso a la cámara.',

  tamperBackgroundRefreshTitle: 'Se desactivó la Actualización en segundo plano',
  tamperBackgroundRefreshBody:
    'KidGate puede actualizarse con menor frecuencia en segundo plano hasta que esta función vuelva a habilitarse.',

  tamperDeviceClockTitle: 'Se cambió la fecha, la hora o la zona horaria',
  tamperDeviceClockBody:
    'La fecha, la hora o la zona horaria de este dispositivo cambió — también puede pasar al viajar. El Tiempo de uso y las Horas bloqueadas ignoran los cambios de reloj y siguen la zona horaria del dispositivo.',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: 'Se desactivó el permiso Mostrar sobre otras aplicaciones.',
  tamperAccessibility: 'Se desactivó el servicio de Accesibilidad.',
  tamperUsageAccess: 'Se desactivó el acceso al uso.',
  tamperBattery: 'Se desactivó el uso de batería sin restricciones.',
  tamperExactAlarm: 'Se desactivó el permiso de Alarmas y recordatorios.',
  tamperNotifications: 'Se desactivó el permiso de notificaciones.',
  tamperLocation: 'Se desactivó el acceso a la ubicación.',
  tamperCamera: 'Se desactivó el acceso a la cámara.',
  tamperBackgroundRefresh: 'Se desactivó la Actualización en segundo plano.',

  filterAllDevices: 'Todos los dispositivos',
  // The child tier of the feed filter — "All" would read as all devices.
  filterAllChildren: 'Todos',
  dateToday: 'Hoy',
  dateYesterday: 'Ayer',

  filterByDevice: 'Filtrar por {{label}}',
  filterByChild: 'Mostrar solo a {{label}}',

  openFullSosHistory: 'Abrir el historial completo de SOS',
  openActivityDetails: 'Ver detalles',

  unknownDevice: 'Dispositivo desconocido',

  tamperWebFilterTitle: 'Filtro web desactivado',
  tamperWebFilterBody:
    'La VPN de KidGate en este dispositivo se desactivó o fue reemplazada por otra aplicación de VPN. Hasta que vuelva a activarse, los sitios no se filtran ni se registran.',
  tamperWebFilterMacBody:
    'El filtro web se desactivó en Ajustes del Sistema en este Mac. Hasta que vuelva a activarse, los sitios no se filtran ni se registran.',
  tamperWebFilterWindowsBody:
    'El servicio en segundo plano de KidGate en este PC se detuvo o se eliminó. Hasta que vuelva a activarse, los sitios no se filtran ni se registran.',
  tamperUninstallProtectionTitle: 'Protección de desinstalación desactivada',
  tamperUninstallProtectionBody:
    'Ahora se puede quitar KidGate del dispositivo del niño.',
  tamperReinstalledTitle: 'KidGate se volvió a instalar',
  tamperReinstalledBody:
    'KidGate se quitó de este dispositivo y se instaló de nuevo. No se registró nada mientras tanto.',
} as const;
