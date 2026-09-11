export const family = {
  title: 'Familia',
  connectButton: 'Conectar',
  connectAccessibility: 'Añadir un dispositivo de un niño o de un padre',
  addDeviceTitle: 'Añadir un dispositivo',
  addDeviceMessage: '¿Qué deseas conectar?',
  addChildOption: 'Añadir dispositivo del niño',
  addJoinFamilyOption: 'Unirse a una familia',
  addParentOption: 'Invitar a un padre',
  loginWebOption: 'Iniciar sesión en la web',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: '¿Quién usa {{deviceName}}?',
  assignSheetBody: 'El tiempo de pantalla y las estrellas cuentan para quien elijas.',
  assignSheetNobody: 'Nadie',
  assignSheetNobodyHint: 'Dispositivo compartido: no cuenta para nadie.',
  assignSheetAddAndAssign: 'Añadir y asignar',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: '¿Proteger a {{childName}} ahora?',
  quickProtectBody:
    'Activa un conjunto inicial de protecciones. Podrás ajustarlo todo más adelante en el perfil del niño.',
  quickProtectSourceLabel: 'Empezar desde',
  quickProtectAllOnBody:
    '{{childName}} ya tiene estas protecciones activadas. Elige a otro hijo para copiar sus horas, su límite y sus listas de sitios.',
  quickProtectReplaces: 'Sustituye lo que {{childName}} tiene ahora.',
  quickProtectWebFilterCopyHint:
    'Copia las categorías de {{childName}}, más {{allowed}} sitios permitidos y {{blocked}} bloqueados.',
  quickProtectSourceDefault: 'Valores predeterminados de KidGate',
  quickProtectSourceBody:
    'Copia las reglas de {{childName}}, incluidos los sitios permitidos y bloqueados.',
  quickProtectBedtime: 'Horas bloqueadas para dormir',
  quickProtectBedtimeHint:
    'Bloquea el uso del dispositivo por la noche, de 22:00 a 7:00.',
  quickProtectDailyLimit: 'Límite diario de tiempo de pantalla',
  quickProtectDailyLimitHint:
    '{{minutes}} minutos al día, compartidos entre todos sus dispositivos.',
  quickProtectWebFilter: 'Filtro web',
  quickProtectWebFilterHint:
    'Bloquea el contenido inapropiado y activa la búsqueda segura y las restricciones de YouTube.',
  quickProtectWebFilterPremium: 'Función Premium: incluida con un plan.',
  quickProtectApply: 'Activar protección',
  quickProtectSkip: 'Ahora no',
  quickProtectDone: 'La protección está activada. Ajústala cuando quieras.',
  quickProtectPartial:
    'Algunas protecciones no se pudieron guardar. Inténtalo de nuevo desde el perfil del niño.',
  pairDeviceFirstTitle: 'Aún no hay ningún dispositivo vinculado',
  pairDeviceFirstBody:
    'Vincula primero un dispositivo para este niño: en la pestaña Familia, toca el icono de escanear o «+» y elige «Añadir dispositivo del niño». Este control empieza a funcionar en cuanto uno se conecta.',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'Bloquear todo',
  unlockAll: 'Desbloquear todo',
  lockAllA11y: 'Bloquear todos los dispositivos de {{childName}}',
  unlockAllA11y: 'Desbloquear todos los dispositivos de {{childName}}',
  childDetailUnassignTitle: '¿Quitar del niño?',
  childDetailUnassignBody:
    '{{deviceName}} dejará de contar para {{childName}} y pasará a Sin asignar. Sigue emparejado y protegido.',
  childDetailUnassignConfirm: 'Quitar',
  childDetailUnassignA11y: 'Quitar {{deviceName}} de este niño',
  // The fold control on a group heading.
  collapseGroupA11y: 'Contraer {{name}}',
  expandGroupA11y: 'Expandir {{name}}',
  assignDeviceCta: 'Asignar a un niño…',
  unassignedHint: 'Estos dispositivos aún no cuentan para nadie.',
  unassignedHintMember:
    'El propietario de la familia asigna estos dispositivos a los hijos.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'Niños sin dispositivo',
  // Child detail screen.
  childDetailStarsWell: 'Estrellas esta semana',
  childStarsA11y: 'Estrellas esta semana: {{count}}',
  childDetailDevicesTitle: 'Dispositivos',
  childDetailSwipeHint: 'Desliza un dispositivo para quitar la asignación.',
  childDetailAssignMore: 'Asignar otro dispositivo…',
  childDetailAssignSheetTitle: 'Asignar un dispositivo a {{childName}}',
  childDetailNoDevices:
    'Aún no hay dispositivos. Asigna uno abajo o empareja uno nuevo desde la pestaña Familia.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'Aún no hay dispositivos. Solo el propietario de la familia decide de quién es cada dispositivo.',
  childDetailEditNameTitle: 'Editar nombre',
  childDetailColorLabel: 'Color',
  scanButtonAccessibility: 'Escanear código',
  scanTitle: 'Escanear código',
  scanBody:
    'Apunta la cámara a un dispositivo infantil, una invitación familiar o el código que aparece en un ordenador.',
  manualCodeLabel: 'Introduce el código de 6 caracteres',
  manualInstructions:
    'Introduce el código de 6 caracteres que aparece en el otro dispositivo.',

  headerHintEmpty: 'Administra y protege los dispositivos de tus hijos',

  headerHintGuest:
    'Explora libremente; inicia sesión cuando estés listo para conectar dispositivos.',

  familyCardManage: 'Administrar la familia, los padres y los dispositivos',

  familyCardJoined: 'Te has unido como padre',

  chipDeviceCount: '{{count}} dispositivos',
  chipDeviceCount_one: '{{count}} dispositivo',

  chipOnlineCount: '{{count}} en línea',
  metaOnlineCount: '{{online}}/{{count}} en línea',
  metaOnlineCount_one: '1 dispositivo en línea',

  chipSosCount: '{{count}} SOS',

  chipCheckInCount: '{{count}} Check-ins',
  chipCheckInCount_one: '{{count}} Check-in',

  chipRequestCount: '{{count}} solicitudes',
  chipRequestCount_one: '{{count}} solicitud',

  chipNeedsSetupCount: '{{count}} requieren configuración',
  chipNeedsSetupCount_one: '{{count}} requiere configuración',

  chipProtectedCount: '{{count}} protegidos',

  childDevicesProtected: '{{count}} dispositivos protegidos',

  chipHealthWarnCount: '{{count}} requieren configuración',
  chipHealthWarnCount_one: '{{count}} requiere configuración',

  chipHealthInactiveCount: '{{count}} inactivos más de 24 h',
  chipLocationBlocked: 'Sin ubicación',

  chipBlockedCount: '{{count}} bloqueados',

  healthProtected: 'Protegido',
  buildOutdated: 'Actualización disponible',
  healthNeedsSetup: 'Requiere configuración',
  healthOffline: 'Sin conexión',
  devicePausedLabel: 'En pausa',
  devicePausedHint: 'En pausa en el plan gratis: todas las reglas siguen vigentes',
  parkedBannerTitle: 'Elige el dispositivo que seguirás viendo',
  parkedBannerBody:
    'Tus reglas funcionan en todos los dispositivos. El plan gratis recibe informes de uno: elígelo, o mejora tu plan para conservarlos todos.',
  parkedBannerAction: 'Elegir dispositivo',
  chooseMonitoredTitle: '¿Qué dispositivo debe informar?',
  chooseMonitoredBody:
    'Todas las reglas siguen activas en todos. Solo el que elijas envía tiempo de pantalla y ubicación. Puedes cambiarlo una vez cada {{days}} días.',
  chooseMonitoredConfirm: 'Ver este dispositivo',
  chooseMonitoredUpgrade: 'Conservar todos: mejorar plan',
  chooseMonitoredDone: '{{name}} es ahora el dispositivo que informa',
  monitoredCooldown:
    'El dispositivo que informa solo puede cambiarse una vez cada {{days}} días',
  monitoredChooseFailed: 'No se pudo cambiar el dispositivo que informa',

  // Quick-glance rows on the device card
  cardWhereLabel: 'Ubicación',
  cardWhereAccessibility: 'Abrir la ubicación de {{deviceName}}',

  cardTodayLabel: 'Hoy',

  cardTodayUsed: '{{used}} de uso',

  cardTodayNoData: 'Aún no hay datos de uso',

  cardTodayAccessibility: 'Abrir el informe de uso de {{deviceName}}',

  emptyTitle: 'Aún no hay dispositivos de niños',

  emptyDescription:
    'Añade el dispositivo de tu hijo para empezar a supervisar el tiempo de pantalla y el uso de aplicaciones.',

  setupFamilyTitle: 'Configura tu familia',

  setupFamilyDescription:
    'Crea una familia para conectar los dispositivos de tus hijos o únete a una mediante una invitación de otro padre.',

  createFamilyButton: 'Crear familia',

  joinFamilyButton: 'Unirse a una familia',

  switchToJoinTitle: '¿Unirse a otra familia?',

  switchToJoinMessage:
    'Esto eliminará tu familia vacía para que puedas unirte a otra mediante un código de invitación. Si ya hay un dispositivo del niño vinculado, primero deberás administrarlo.',

  guestEmptyTitle: 'Tu familia comienza aquí',

  guestEmptyDescription:
    'Inicia sesión para vincular los dispositivos de tus hijos, recibir alertas y establecer límites saludables de tiempo de pantalla.',

  guestConnectButton: 'Iniciar sesión',

  guestCreateAccount: 'Crear una cuenta para padres',

  guestBenefitLimitsTitle: 'Tiempo de pantalla y límites de aplicaciones',

  guestBenefitLimitsBody: 'Bloquea dispositivos y establece horarios diarios.',

  guestBenefitAlertsTitle: 'Alertas SOS y de actividad',

  guestBenefitAlertsBody:
    'Recibe una notificación en cuanto algo requiera tu atención.',

  guestBenefitLocationTitle: 'Ubicación y Check-ins',

  guestBenefitLocationBody:
    'Consulta dónde está tu hijo y pídele que confirme que está a salvo.',

  stepsHeading: 'Primeros pasos',

  step1Title: 'Pulsa «Añadir dispositivo del niño»',

  step1Description: 'Aquí aparecerá un código QR de vinculación, listo para escanear.',

  step2Title: 'Escanéalo desde el dispositivo del niño',

  step2Description:
    'Descarga KidGate en el teléfono o la tablet de tu hijo, selecciona «Este es un dispositivo para un niño» y escanea el código.',

  connectChildButton: 'Conectar dispositivo del niño',
  listHint: 'Desliza un dispositivo hacia la izquierda para eliminarlo',

  removeAlertTitle: '¿Eliminar dispositivo?',

  removeAlertMessage:
    '{{deviceName}} se desconectará de tu cuenta. Se eliminarán todas las solicitudes de tiempo y el historial de actividad relacionados.',

  toastRemoveFailed: 'No se pudo eliminar el dispositivo. Inténtalo de nuevo.',

  swipeRemoving: 'Eliminando…',

  swipeRemove: 'Quitar',

  deviceNotFound: 'Dispositivo no encontrado',

  deviceMayHaveBeenRemoved:
    'Es posible que este dispositivo haya sido eliminado de tu cuenta.',

  deviceNotFoundError: 'Dispositivo no encontrado',

  deviceRemovedAlertTitle: 'Dispositivo eliminado',

  deviceRemovedAlertMessage:
    'Un padre eliminó este dispositivo de la cuenta familiar. Vuelve a seleccionar el rol de Niño para volver a conectarlo.',

  deviceNotRegistered: 'Este dispositivo aún no está registrado.',

  defaultDeviceName: 'Dispositivo del niño',

  fallbackDeviceName: 'Dispositivo del niño',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: 'iPhone del padre',

  parentAndroid: 'Android del padre',

  childIphone: 'iPhone del niño',

  parentIpad: 'iPad del padre',

  childIpad: 'iPad del niño',

  childAndroid: 'Android del niño',

  deviceFallbackName: 'Dispositivo',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'PC con Windows',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: 'Introduce un nombre para el dispositivo.',

  deviceNameTooLong:
    'El nombre del dispositivo debe tener como máximo {{max}} caracteres.',

  lastActiveDate: 'Última actividad: {{date}}',

  lastActiveUnknown: 'Sin actividad reciente',

  thisDevice: 'Este dispositivo',

  thisDeviceYou: 'Este dispositivo (Tú)',

  namedDeviceYou: '{{name}} (Tú)',

  deviceNameSaved: 'El nombre del dispositivo se actualizó.',

  deviceSectionTitle: 'Dispositivo',

  deviceNameLabel: 'Nombre del dispositivo',

  editDeviceNameTitle: 'Editar nombre del dispositivo',

  editDeviceNameSubtitle:
    'Solo el propietario de la familia puede cambiar el nombre de los dispositivos. Máximo {{maxLength}} caracteres.',

  deviceNameInputLabel: 'Nombre del dispositivo',

  deviceNamePlaceholder: 'iPhone de Sofía',

  unableToUpdateDeviceName:
    'No se pudo actualizar el nombre del dispositivo. Inténtalo de nuevo.',

  osLabelFallback: 'Sistema operativo',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS: requiere atención inmediata',

  waitingForCheckIn: 'Esperando Check-in',

  timeRequestsWaiting: '{{count}} solicitudes de tiempo pendientes',

  timeRequestsWaiting_one: '{{count}} solicitud de tiempo pendiente',

  youPausedThisDevice: 'Has bloqueado este dispositivo',

  lockSentWaitingForDevice: 'Bloqueo enviado: esperando al dispositivo',

  lockNotAppliedOnDevice: 'Este dispositivo no ha aplicado el bloqueo',

  blockedHoursActiveNow: 'Horas bloqueadas activas',

  inactiveOpenKidGate: 'Inactivo: abre KidGate en este dispositivo',

  protectionNeedsSetup: '{{issueLabel}} requiere configuración',

  dailyLimitOn: 'Límite diario activado',

  deviceReady: 'Listo',

  sos: 'SOS',

  deviceLocked: 'Dispositivo bloqueado',

  deviceUnlocked: 'Dispositivo desbloqueado',

  parentPausedChildDevice: '{{actorName}} bloqueó este dispositivo del niño.',

  parentRestoredChildDevice: '{{actorName}} desbloqueó este dispositivo del niño.',

  parentFallback: 'Un padre',

  formerParent: 'Un padre o madre que salió de la familia',
  batteryPercent: '{{percent}} %',
  batteryAccessibility: 'Batería al {{percent}} por ciento',
  batteryChargingAccessibility: 'Batería al {{percent}} por ciento, cargando',
  childDetailPerDevice: 'Por dispositivo: elige cuál',
  childDetailNotAvailable: 'No disponible',
  childDetailNotAvailableReason: 'No disponible en ninguno de sus dispositivos',
  childDetailProtectionOk: 'Protegido',
  childDetailProtectionAttention: '{{count}} dispositivos necesitan atención',
  childDetailProtectionAttention_one: '{{count}} dispositivo necesita atención',
  childDetailProtectionSheetTitle: 'Protección por dispositivo',
  childDetailRemoveTitle: 'Eliminar el perfil de {{childName}}',
  childDetailRemovingButton: 'Quitando…',
  childDetailOnlineCount: '{{online}} de {{total}} en línea',
  childDetailBudgetTitle: 'Límite diario',
  childDetailSectionControls: 'Reglas en todos sus dispositivos',
  childDetailSectionSafety: 'Combinado de todos sus dispositivos',
  childDetailSectionAlerts: 'Todos sus dispositivos, una sola lista',
  childDetailScopeAll: 'Todos los dispositivos',
  childDetailTodayWell: 'Usado hoy',
  childDetailUnassignAction: 'Quitar',
  childDetailLimitShared: 'Total en todos sus dispositivos',
} as const;
