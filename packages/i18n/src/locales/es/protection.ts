export const protection = {
  permissionOffOnChildDevice:
    'Este permiso está desactivado en el dispositivo del niño.',
  permissionNotSetUpYet: 'Este permiso aún no se ha configurado.',
  permissionRestrictedByIos: 'Este permiso está restringido por los ajustes de iOS.',
  permissionStatusUnknown: 'KidGate no pudo leer el estado de este permiso.',
  kidGateOffline: 'KidGate en silencio más de 24 h',
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
  locationForegroundOnly:
    'La ubicación solo se actualiza mientras KidGate está abierto en el dispositivo del niño.',
  cameraPermission: 'Permiso de cámara',
  microphonePermission: 'Permiso de micrófono',
  microphoneOff:
    'El micrófono no está permitido en este dispositivo, así que un SOS enviado desde él llega sin sonido.',
  cameraConsentPending:
    'La cámara no está permitida en este dispositivo, así que un SOS o un Check-in enviado desde él llega sin foto.',
  locationConsentPending:
    'La ubicación no está permitida en este dispositivo, así que no puede informar dónde está.',
  consentStepOpenSettings:
    'Abre KidGate en el dispositivo de tu hijo o hija y ve a Ajustes.',
  consentStepParentPin: 'Introduce el PIN parental.',
  consentStepPermissions: 'Abre «Permisos» y permite lo que falte.',
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
  protectionsLookHealthy: 'Las protecciones de KidGate parecen estar en orden.',
  healthBadgeProtected: 'Verde — protegido',
  healthBadgeWarning: 'Amarillo — requiere configuración',
  healthBadgeInactive: 'Rojo — dispositivo del niño en silencio más de 24 h',
  iosUpgradeRequiredNote:
    'Esto necesita iOS 16 o posterior. Actualiza el dispositivo del niño en Ajustes › General › Actualización de software. Si no se ofrece ninguna actualización, este iPad o iPhone es demasiado antiguo para que Apple lo admita.',
  iosUpgradeActionLabel: 'Necesita iOS 16',
  appReviewRemindersNote:
    'iOS no expone los eventos de instalación; revisa las apps periódicamente junto con el dispositivo del niño.',
  screenTimeIndividualAuthorization:
    'Tiempo de uso se aprobó con el Apple ID propio del dispositivo del niño, así que el niño puede desactivar KidGate en Ajustes sin PIN y borrar la app. Solo un Apple ID infantil de tu grupo de En familia mantiene estos controles.',
  screenTimeIndividualStepChildAppleId:
    'Inicia sesión en el dispositivo del niño con un Apple ID infantil de tu grupo de En familia.',
  screenTimeIndividualStepReapprove:
    'Abre KidGate en el dispositivo del niño y vuelve a aprobar Tiempo de uso.',
} as const;
