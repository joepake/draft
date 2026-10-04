export const child = {
  pageTitle: 'Estado',
  statusPaused: 'Bloqueado',
  statusActive: 'Activo',
  readyTitle: 'Todo listo',
  readyBody:
    'Si necesitas más tiempo de pantalla, puedes enviar una solicitud a tu padre o madre aquí arriba. En una emergencia, usa el botón SOS.',
  setupCollapsedTitle: 'Termina la configuración con tu padre o madre',
  setupCollapsedRequiredCount: '{{count}} pasos obligatorios',
  setupCollapsedRequiredCount_one: '{{count}} paso obligatorio',
  setupCollapsedOptionalCount: '{{count}} pasos opcionales',
  setupCollapsedOptionalCount_one: '{{count}} paso opcional',
  oneMoment: 'Un momento, por favor…',
  paused: 'Bloqueado',
  blockedHours: 'Horas bloqueadas',
  limitReached: 'Límite alcanzado',
  active: 'Activo',
  parentPausedThisDevice: 'Tu padre o madre ha bloqueado este dispositivo por ahora.',
  blockedHoursOnPaused:
    'Las Horas bloqueadas están activas. Es un buen momento para descansar.',
  outOfScreenTimeAskParent:
    'Has usado todo el tiempo de pantalla de hoy. Puedes pedir más aquí abajo.',
  screenTimeToday: 'Tiempo de uso hoy',
  usedOverLimitMinutes: '{{used}} / {{limit}}',
  usedMinutesOnly: '{{used}}',
  outOfScreenTimeToday:
    'Has usado todo el tiempo de pantalla de hoy. Puedes pedir más a tu padre o madre.',
  devicePaused: 'Dispositivo bloqueado',
  devicePausedByParent: '{{deviceName}} está bloqueado ahora.',
  phonePausedByParent: 'Tu padre o madre ha bloqueado este dispositivo por ahora.',
  pausedAskParentOrSos:
    'Pide a tu padre o madre que lo desbloquee cuando lo necesites. En una emergencia, aún puedes enviar un SOS.',
  blockedHoursLockTitle: 'Horas bloqueadas',
  blockedHoursLockBody:
    'Las Horas bloqueadas están activas. Es un buen momento para descansar.',
  blockedHoursLockHint:
    'Si necesitas este dispositivo ahora, pide a tu padre o madre que cambie las Horas bloqueadas. En una emergencia, aún puedes enviar un SOS.',
  blockedHoursLockBodyUntil:
    'Las Horas bloqueadas están activas hasta las {{time}}. Es un buen momento para descansar.',
  dailyLimitLockHint:
    'Si necesitas más tiempo, pídeselo a tu padre o madre. En una emergencia, aún puedes enviar un SOS.',
  appClosedTitle: 'App cerrada',
  appClosedBody: 'KidGate la cerró porque ahora está bloqueada.',
  parentPausedAccess: 'Tu padre o madre ha bloqueado este dispositivo por ahora.',
  parentRestoredAccess:
    'Tu padre o madre desbloqueó este dispositivo. Puedes seguir usándolo.',
  toastDailyLimitIncreased:
    'Tu padre o madre añadió {{minutes}} minutos más de tiempo de pantalla.',
  toastDailyLimitIncreased_one:
    'Tu padre o madre añadió {{minutes}} minuto más de tiempo de pantalla.',
  errorDeviceNotRegistered:
    'Este dispositivo aún no está listo. Inténtalo de nuevo en un momento, o vuelve a vincularlo si sigue pasando.',
  errorScreenTimeRequired:
    'Se necesita acceso a Tiempo de uso. Permítelo para KidGate y vuelve a intentarlo.',
  minUsed: '{{used}} de uso',
  setupContinueButton: 'Continuar configuración',
  setupWizardTitle: 'Configurar protección',
  setupWizardProgress: '{{done}}/{{total}} completados',
  setupWizardRequired: 'Obligatorio',
  setupWizardOptional: 'Opcional',
  setupWizardSkip: 'Omitir por ahora',
  setupWizardWatchGuide: 'Ver cómo hacerlo',
  setupGrantStuckHint:
    '¿Lo activaste pero nada cambió? Reinicia el televisor y vuelve a intentarlo.',
  setupWizardAllDoneTitle: 'Todo listo',
  setupWizardAllDoneSubtitle: 'Este dispositivo ya está protegido.',
  setupWizardStepDone: 'Listo: ese ya está activado.',
  setupWizardCoreDoneTitle: 'La protección básica está activada',
  setupWizardCoreDoneBody:
    'Los permisos imprescindibles están concedidos y este dispositivo está protegido. Los pasos que quedan son extras opcionales y se pueden hacer ahora o más tarde.',
  setupWizardCoreDoneContinue: 'Reforzarla ahora',
  setupWizardCoreDoneLater: 'Terminar más tarde',
  setupWizardParentPinNote:
    'Se necesita el PIN parental: un padre o una madre lo introduce en la pantalla siguiente.',
} as const;
