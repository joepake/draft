export const screenTime = {
  turnOnScreenTime: 'Activar Tiempo de uso',
  finishScreenTimeSetup: 'Terminar la configuración de Tiempo de uso',
  screenTimeNeededForControls:
    'El bloqueo de apps, las Horas bloqueadas y el bloqueo requieren Tiempo de uso en este dispositivo.',
  screenTimeNeededForLimits:
    'Sin Tiempo de uso no se pueden aplicar el bloqueo, las Horas bloqueadas ni los límites de apps.',
  screenTimeStepOpenKidGate: 'Abre KidGate en este dispositivo del niño.',
  screenTimeStepAllowUsage:
    'En la pantalla Estado, selecciona Permitir uso de apps y sitios web.',
  screenTimeStepTapAllow: 'Cuando se te pida, selecciona Permitir.',
  screenTimeStepReturnHereAuto: 'Vuelve aquí — el estado se actualiza automáticamente.',
  screenTimeDeniedStepOpenSettings:
    'En el dispositivo del niño, abre Ajustes → KidGate.',
  screenTimeDeniedStepTurnOnRestrictions: 'Activa Tiempo de uso.',
  screenTimeDeniedStepOpenKidGateAgain:
    'Vuelve a abrir KidGate en el dispositivo del niño.',
  screenTimeDeniedStepReturnWhenReady:
    'Vuelve aquí — esta tarjeta desaparecerá al completar la configuración.',
  screenTimeSetupStep1: 'Selecciona Permitir uso de apps y sitios web abajo.',
  screenTimeSetupStep2:
    'Cuando se te pida, selecciona Permitir en el diálogo de Uso de apps y sitios web.',
  screenTimeSetupStep3: 'Vuelve aquí cuando el diálogo se cierre.',
  screenTimeDeniedStep1: 'Selecciona Abrir ajustes de la app abajo.',
  screenTimeDeniedStep2: 'En la página de {{appName}}, activa Tiempo de uso.',
  screenTimeDeniedStep3: 'Vuelve a {{appName}} — esta tarjeta desaparecerá.',
  screenTimeBannerTitleDenied: 'Activar Tiempo de uso',
  screenTimeBannerTitleRequest: 'Permitir uso de apps y sitios web',
  screenTimeBannerBodyDenied: '{{appName}} necesita Tiempo de uso activado en Ajustes.',
  screenTimeBannerBodyRequest:
    'Esto permite a tus padres bloquear apps y establecer Horas bloqueadas en este dispositivo.',
  usageAccessBannerTitle: 'Activar Acceso de uso',
  usageAccessBannerBody:
    'KidGate necesita el Acceso de uso para medir el tiempo de pantalla y aplicar límites.',
  usageAccessStepOpenSettings: 'Selecciona Abrir Ajustes abajo.',
  usageAccessStepFindKidGate: 'Busca KidGate y activa el Acceso de uso.',
  usageAccessStepReturn: 'Vuelve aquí — el estado se actualiza automáticamente.',
  noDailyLimitSet: 'Sin Límite diario',
  limitReachedStatus: '{{used}} / {{limit}} · Límite alcanzado',
  minutesUsedStatus: '{{used}} / {{limit}} de uso',
  usageUpdatesHint:
    'El uso se actualiza cada pocos minutos mientras la supervisión de Tiempo de uso está activa.',
  dailyLimitNote: 'Aplica un tope diario de tiempo de pantalla.',
  dailyLimitMinutes: '{{limitMinutes}} min',
} as const;
