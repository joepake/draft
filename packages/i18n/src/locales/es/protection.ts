export const protection = {
  permissionOffOnChildDevice:
    'Este permiso está desactivado en el dispositivo del niño.',
  permissionNotSetUpYet: 'Este permiso aún no se ha configurado.',
  permissionRestrictedByIos: 'Este permiso está restringido por los ajustes de iOS.',
  permissionStatusUnknown: 'KidGate no pudo leer el estado de este permiso.',
  kidGateOffline: 'KidGate sin conexión',
  childAppMayBeOffline:
    'La app en el dispositivo del niño puede estar cerrada, eliminada o sin conexión.',
  statusNotUpdatedYet: 'Estado aún no actualizado',
  openKidGateOnChildPhone: 'Abre KidGate una vez en el dispositivo del niño.',
  screenTimePermission: 'Permiso de Tiempo de uso',
  screenTimeAccessOff:
    'El acceso a Tiempo de uso está desactivado, por lo que el bloqueo de apps y los límites pueden dejar de funcionar.',
  screenTimeSetupIncomplete:
    'La configuración de Tiempo de uso está incompleta en el dispositivo del niño.',
  usageAccessPermission: 'Acceso de uso',
  usageAccessOff:
    'El Acceso de uso está desactivado, por lo que KidGate no puede registrar el tiempo de pantalla ni aplicar límites.',
  usageAccessSetupIncomplete:
    'Activa el Acceso de uso para KidGate en los ajustes de Android.',
  overlayPermission: 'Mostrar sobre otras aplicaciones',
  batteryOptimizationPermission: 'Batería sin restricciones',
  batteryOptimizationOff:
    'Permite el uso de batería sin restricciones para que KidGate pueda mantener las protecciones activas.',
  exactAlarmPermission: 'Alarmas y recordatorios',
  exactAlarmOff:
    'Activa Alarmas y recordatorios para que las Horas bloqueadas empiecen a tiempo.',
  accessibilityPermission: 'Accesibilidad (ayuda de bloqueo)',
  accessibilityOff:
    'Activa Accesibilidad para KidGate para que el bloqueo se mantenga sobre otras apps.',
  overlayOffForLock:
    'Activa Mostrar sobre otras aplicaciones para que la pantalla de bloqueo pueda cubrir otras apps.',
  lockNotReadyTitle: 'Bloqueo no listo',
  lockNotReadyBody:
    'KidGate no puede mantener bloqueado este dispositivo Android hasta que se activen Mostrar sobre otras aplicaciones y Accesibilidad. Abre KidGate en el dispositivo del niño y completa lo siguiente:',
  lockNotReadyBodyIos:
    'KidGate no puede bloquear este iPhone hasta que se apruebe el acceso a Tiempo de uso en el dispositivo del niño. Abre KidGate en ese dispositivo y completa lo siguiente:',
  locationPermission: 'Permiso de ubicación',
  notificationsPermission: 'Permiso de notificaciones',
  backgroundUpdates: 'Actualizaciones en segundo plano',
  backgroundUpdatesRestricted:
    'Las actualizaciones en segundo plano están restringidas en este dispositivo.',
  turnOnBackgroundUpdatesInSettings:
    'Actívalas en los Ajustes del dispositivo para que KidGate se mantenga sincronizado.',
  inactive: 'Inactivo',
  openKidGateToSyncProtections:
    'Abre KidGate en este dispositivo para que las protecciones vuelvan a sincronizarse.',
  needsAttention: 'Requiere atención',
  protectionsNeedSetupAndroid:
    'Algunas protecciones necesitan configuración en el dispositivo del niño.',
  protectionsNeedSetupIos:
    'Algunas protecciones necesitan configuración en el dispositivo del niño.',
  protected: 'Protegido',
  protectionsLookHealthy: 'Las protecciones de KidGate funcionan correctamente.',
  healthBadgeProtected: 'Verde — protegido',
  healthBadgeWarning: 'Amarillo — requiere configuración',
  healthBadgeInactive: 'Rojo — dispositivo del niño sin conexión',
  iosFeatureSupportEvaluating:
    'La compatibilidad de esta función en iOS está en evaluación.',
  iosUpgradeRequiredNote:
    'Esto necesita iOS 16 o posterior. Actualiza el dispositivo del niño en Ajustes › General › Actualización de software. Si no se ofrece ninguna actualización, este iPad o iPhone es demasiado antiguo para que Apple lo admita.',
  iosUpgradeActionLabel: 'Necesita iOS 16',
  lockUnlockNote:
    'Bloquea el dispositivo mediante Tiempo de uso una vez que el niño autoriza el acceso.',
  scheduleNote:
    'Hasta 3 franjas de Horas bloqueadas bloquean apps mediante Tiempo de uso.',
  individualAppBlockingNote:
    'El niño selecciona las apps tras introducir el PIN parental de 6 dígitos.',
  tamperAlertsNote:
    'Informa de cambios en los permisos y de cuándo la app del dispositivo del niño lleva tiempo sin actualizarse.',
  appReviewRemindersNote:
    'iOS no expone los eventos de instalación; revisa las apps periódicamente junto con el dispositivo del niño.',
} as const;
