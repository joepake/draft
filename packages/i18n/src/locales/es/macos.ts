/**
 * La ventana propia del agente de escritorio (macOS y Windows).
 * Contexto clave por clave: ver en/macos.ts.
 */
export const macos = {
  headingNow: 'Ahora mismo',
  headingEnforce: 'Qué puede aplicar este Mac',
  headingEnforceHint:
    'Lo que configuró tu padre o madre y con qué firmeza puede mantenerlo este Mac.',
  headingRemovable: 'Qué tan fácil es quitarlo',

  parentAccessBody:
    'Introduce el PIN parental para elegir qué apps se bloquean en este Mac.',
  checking: 'Comprobando…',

  enforcing: 'Protección en marcha',
  enforcingYes: 'Sí',
  enforcingFailed: 'No — {{count}} comprobaciones seguidas fallaron',
  enforcingFailed_one: 'No — la última comprobación falló',

  lockState: 'Dispositivo bloqueado',
  lockStateNo: 'No',
  lockStateNotChecked: 'Aún sin comprobar',
  lockStateParent: 'Sí — bloqueado por tu padre o madre',
  lockStateSchedule: 'Sí — Horas bloqueadas',
  lockStateDailyLimit: 'Sí — Límite diario alcanzado',

  appBlocking: 'Bloqueo de apps',
  appBlockingBestEffort:
    'Mejor esfuerzo — las apps se cierran después de abrirse, no se impide que se abran',

  webFilterLabel: 'Filtro web',
  webFilterUnavailable: 'No disponible en este Mac',
  notSupportedOnThisDevice: 'No compatible con este dispositivo',

  scheduleLabel: 'Horas bloqueadas',
  dailyLimitLabel: 'Límite diario',
  enforcedHere: 'Activado, aplicado por KidGate',

  screenTimeLabel: 'Tiempo de uso',
  screenTimeAgentMeasured:
    'Contado por KidGate. El tiempo en que KidGate no está en ejecución no se cuenta.',

  batteryLabel: 'Batería',
  batteryReported: 'Se informa a la familia',
  batteryNone: 'Este Mac no tiene batería',

  locationLabel: 'Ubicación',
  locationOff: 'Desactivada',
  locationCoarse: 'Aproximada — por Wi-Fi, no GPS',

  accountLabel: 'Cuenta del niño',
  accountStandard: 'Estándar',
  accountAdmin: 'Administrador — esta cuenta puede desactivar KidGate por completo',

  restartLabel: 'Se reabre si se cierra',
  restartYes: 'Sí',
  restartNo: 'No — la configuración no está terminada',

  forceQuitLabel: 'Veces que se cerró KidGate',

  startAtLoginSectionTitle: 'Inicio',
  startAtLoginSectionDescription:
    'KidGate mide el tiempo de uso y aplica las reglas solo mientras está en ejecución.',
  startAtLoginLabel: 'Abrir KidGate al iniciar sesión',
  startAtLoginHintOn:
    'KidGate se abre con este dispositivo y vuelve a abrirse si se cierra.',
  startAtLoginHintOff:
    'No se mide ni se bloquea nada hasta que alguien vuelva a abrir KidGate.',
  startAtLoginUnavailable:
    'Este dispositivo no permitió que KidGate se añadiera al inicio.',

  stillRunningTitle: 'KidGate sigue en ejecución',
  stillRunningBodyMac:
    'Vuelve a abrirlo desde el icono de KidGate en la barra de menús.',
  stillRunningBodyWindows:
    'Vuelve a abrirlo desde el icono de KidGate en el área de notificación.',

  updateAvailableTitle: 'Hay una versión más reciente de KidGate',
  updateAvailableBody: 'KidGate {{version}} está listo para descargar.',
  updateAction: 'Obtener la actualización',

  chooseApps: 'Elegir apps para bloquear',
  chooseAppsHint:
    'Elige las apps que se bloquean en este Mac. Un padre o madre puede activar o desactivar el bloqueo desde su teléfono.',
  saveSelection: 'Guardar',
  noAppsFound: 'No se encontraron apps en la carpeta Applications.',
};
