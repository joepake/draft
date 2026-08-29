export const activities = {
  title: 'Actividad',
  subtitleAllDevices: 'Últimos eventos de todos los dispositivos',
  subtitleTimelineForDevice: 'Cronología de {{deviceName}}',
  subtitleTimelineForChild: 'Cronología de {{childName}}',
  fallbackDeviceName: 'dispositivo',
  liveBadge: 'En vivo',
  errorTitle: 'No se pudo cargar la actividad',
  tryAgain: 'Intentar de nuevo',

  emptyTitleAll: 'Aún no hay actividad',
  emptyTitleDevice: 'No hay actividad para este dispositivo',
  emptyDescriptionAll:
    'Los eventos de bloqueo, desbloqueo y SOS de los dispositivos de tus hijos aparecerán aquí.',
  emptyDescriptionDevice:
    'Selecciona otro dispositivo o espera a que se registren eventos de bloqueo, desbloqueo y SOS en este dispositivo.',

  guestEmptyTitle: 'Tu actividad',
  guestEmptyDescription:
    'Una vez que se conecte un dispositivo infantil, los eventos de bloqueo, desbloqueo, SOS y aplicaciones aparecerán aquí en tiempo real.',
  guestSignInButton: 'Iniciar sesión',
  guestCreateAccount: 'Crear una cuenta para padres',
  guestSubtitle:
    'Inicia sesión para seguir la actividad de los dispositivos de tus hijos',

  guestPreviewHeading: 'Lo que verás',
  guestPreviewLock: 'Dispositivo bloqueado',
  guestPreviewSos: 'Alerta SOS',
  guestPreviewScreenTime: 'Actualización de Tiempo de uso',
  guestPreviewHint:
    'Ejemplo: los eventos reales aparecerán una vez que conectes un dispositivo',

  activityTypeLocked: 'Bloqueado',
  activityTypeUnlocked: 'Desbloqueado',
  activityTypeAppOpened: 'Aplicación abierta',
  activityTypeAppBlocked: 'Aplicación bloqueada',
  activityTypeAppInstalled: 'Aplicación instalada',
  activityTypeAppRemoved: 'Aplicación desinstalada',
  activityTypePlaceEnter: 'Entró en un lugar',
  activityTypePlaceExit: 'Salió de un lugar',
  activityTypeTamper: 'Protección',
  activityTypeScreenTime: 'Tiempo de uso',
  activityTypeWebFilter: 'Filtro web',
  activityTypeEmergency: 'Emergencia',
  activityTypeUnknown: 'Actividad',

  sosEscapeTitle: 'Desbloqueo de emergencia',
  sosEscapeBody: 'El SOS desbloqueó este dispositivo durante {{minutes}} minutos.',
  sosEscapeRepeatTitle: 'Desbloqueo de emergencia ({{count}} hoy)',
  sosEscapeRepeatBody:
    'El SOS desbloqueó este dispositivo durante {{minutes}} minutos. Van {{count}} veces hoy.',
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'Se abrió una app bloqueada y KidGate la cerró.',
  appInstalledTitle: 'Aplicación instalada',
  appInstalledBody: 'Se instaló la aplicación {{appName}} en el dispositivo del niño.',

  messageAlertTitle: 'Contenido de mensaje preocupante',
  messageAlertBody: 'Se detectó una palabra marcada en {{appName}}.',
  messageAlertBodyOutgoing:
    'Se detectó una palabra marcada en un mensaje que tu hijo escribió en {{appName}}.',
  activityTypeMessageAlert: 'Alerta de mensaje',
  messageCheckedTitle: 'Revisado, nada preocupante',
  messageCheckedBody:
    'Apareció una palabra vigilada en {{appName}} y resultó inofensiva en su contexto.',
  activityTypeMessageChecked: 'Revisado',
  appRemovedTitle: 'Aplicación desinstalada',
  appRemovedBody: 'Se desinstaló la aplicación {{appName}} del dispositivo del niño.',

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
    'El bloqueo de aplicaciones y la aplicación de restricciones pueden verse afectados hasta que Accesibilidad vuelva a activarse.',
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

  tamperDeviceClockTitle: 'Se cambió la fecha o la hora',
  tamperDeviceClockBody:
    'El reloj de este dispositivo ya no coincide con la hora correcta. El Tiempo de uso y las Horas bloqueadas seguirán usando la hora correcta.',

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

  unknownDevice: 'Dispositivo desconocido',

  basicActivityNote:
    'Los eventos de bloqueo, desbloqueo y del dispositivo se registran en Actividad.',
  tamperUninstallProtectionTitle: 'Protección de desinstalación desactivada',
  tamperUninstallProtectionBody: 'Ahora se puede quitar KidGate de este teléfono.',
} as const;
