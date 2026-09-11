/** Spanish. */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{flagged}} de {{total}} aplicaciones merecen una mirada',
    summaryClear: 'Nada marcado entre {{total}} aplicaciones',
    summaryFlaggedExtension:
      '{{flagged}} de {{total}} extensiones de Chrome merecen un vistazo',
    summaryClearExtension: 'Nada destacable entre {{total}} extensiones de Chrome',
  },
  meta: {
    title: 'KidGate — Control parental que respeta a tu hijo',
    description:
      'KidGate ayuda a los padres a gestionar el tiempo de uso, bloquear apps, filtrar la web y mantener el contacto, sin quitarle libertad al niño.',
  },

  common: {
    comingSoon: 'Próximamente',
    loading: 'Cargando…',
    signOut: 'Cerrar sesión',
  },

  language: {
    title: 'Idioma',
    change: 'Cambiar idioma',
    system: 'Idioma del navegador',
    english: 'Inglés',
    vietnamese: 'Vietnamita',
    spanish: 'Español',
    portuguese: 'Portugués (Brasil)',
    german: 'Alemán',
    french: 'Francés',
    japanese: 'Japonés',
    korean: 'Coreano',
    arabic: 'Árabe',
    indonesian: 'Indonesio',
    italian: 'Italiano',
    turkish: 'Turco',
    hindi: 'Hindi',
    russian: 'Ruso',
  },

  nav: {
    skip: 'Ir al contenido',
    main: 'Principal',
    about: 'Nosotros',
    support: 'Soporte',
    privacy: 'Privacidad',
    terms: 'Términos',
    dashboard: 'Panel',
  },

  footer: {
    blurb:
      'Control parental que ayuda a las familias a ponerse de acuerdo sobre el tiempo de uso en vez de discutir por él.',
    product: 'Producto',
    about: 'Sobre nosotros',
    dashboard: 'Panel para padres',
    supportGuides: 'Soporte y guías',
    download: 'Descargar',
    contact: 'Contáctanos',
    legal: 'Legal',
    privacyPolicy: 'Política de privacidad',
    terms: 'Términos y condiciones',
    deleteData: 'Eliminar tus datos',
    rights: '© {{year}} KidGate. Todos los derechos reservados.',
    madeFor: 'Hecho para familias en iPhone, Android, Mac y Windows.',
  },

  legalNote:
    'Esta página solo está disponible en inglés, y el texto en inglés es la versión que se aplica. Escribe a [support@kidgate.app](mailto:support@kidgate.app) si necesitas ayuda para entender alguna parte.',

  store: {
    appleAria: 'Descargar KidGate en el App Store',
    appleSmall: 'Descárgala en el',
    appleName: 'App Store',
    googleAria: 'Consigue KidGate en Google Play',
    googleSmall: 'Disponible en',
    googleName: 'Google Play',
  },

  home: {
    heroBadge: 'Control parental, como debe ser',
    heroTitle: 'Protege a tus hijos',
    heroTitleAccent: 'sin quitarles su libertad.',
    heroLede:
      'KidGate da a los padres un control claro y tranquilo sobre el tiempo de uso, las apps y la seguridad, mientras los hijos conservan un móvil que sigue sintiéndose suyo.',
    heroCheck1: 'Tiempo de uso',
    heroCheck2: 'Bloqueo de apps',
    heroCheck3: 'Filtrado web',
    heroCheck4: 'Ubicación',
    heroCheck5: 'Panel familiar',

    phoneDailyLimit: 'Límite diario',
    phoneDailyLimitValue: '1 h 24 min de 3 h usadas',
    phoneBlockedHours: 'Horas bloqueadas',
    phoneScheduleOn: 'Horario activo',
    phoneLocation: 'Ubicación',
    phoneLocationValue: 'En el colegio · hace 5 min',
    phoneCheckIn: 'Registro correcto',

    trust1Title: 'Nunca hay anuncios',
    trust1Text: 'Los datos de los niños nunca se usan para publicidad',
    trust2Title: 'Elimínalo cuando quieras',
    trust2Text: 'Borra tu cuenta familiar y todos los datos cuando lo pidas',
    trust3Title: 'Móvil y ordenador',
    trust3Text: 'iPhone, Android, Mac y Windows en una sola cuenta familiar',
    trust4Title: 'Un plan por familia',
    trust4Text: 'Todos los dispositivos de padres e hijos, una suscripción',

    featuresEyebrow: 'Funciones',
    featuresTitle: 'Todo lo que un padre necesita',
    featuresSub:
      'De los límites diarios a las alertas de emergencia: una app para el bienestar digital de toda la familia.',
    feature1Title: 'Tiempo de uso y límites diarios',
    feature1Text:
      'Fija un tope diario y Horas bloqueadas para el colegio y la hora de dormir. El dispositivo se bloquea solo cuando se acaba el tiempo.',
    feature2Title: 'Bloqueo de apps',
    feature2Text:
      'Elige exactamente qué apps puede abrir tu hijo, protegido con tu PIN de padre, y activa el bloqueo a distancia.',
    feature3Title: 'Límites por app',
    feature3Text:
      'Limita cada app por separado, además del límite diario: «media hora de TikTok» sin tener que prohibirla del todo.',
    feature4Title: 'Filtrado web e historial',
    feature4Text:
      'Rechaza los sitios para adultos y de apuestas en el móvil y en el ordenador. Con Premium, mira qué sitios se consultaron y cuáles se bloquearon.',
    feature5Title: 'Ubicación en vivo y lugares',
    feature5Text:
      'Consulta la última ubicación de tu hijo, revisa el historial y recibe un aviso cuando llega o sale de un lugar guardado.',
    feature6Title: 'Registro y SOS',
    feature6Text:
      'Pide a tu hijo que confirme que está bien y recibe un SOS inmediato con ubicación y foto en una emergencia.',
    feature7Title: 'Alertas de protección y de apps',
    feature7Text:
      'Entérate en el momento en que se desactiva un permiso importante. Con Premium, una app nueva en Android espera tu aprobación antes de abrirse.',
    feature8Title: 'Tareas con recompensa y tiempo extra',
    feature8Text:
      'Los niños ganan minutos extra completando tareas, o piden más tiempo. Ambas cosas llegan a tu móvil para que las apruebes.',

    feature9Title: 'Bloqueo de dispositivo',
    feature9Text:
      'Bloquea el dispositivo ahora y libéralo cuando quieras: la cena, los deberes o una norma que se saltó.',
    feature10Title: 'Informe semanal',
    feature10Text:
      'Cada lunes: tiempo de pantalla, la media diaria, lo que se bloqueó y cómo va la semana frente a la anterior.',
    feature11Title: 'Tabla de estrellas',
    feature11Text:
      'Los niños ven cuántas estrellas ganó cada uno esta semana. Empieza de nuevo cada lunes, y tú decides si está activada.',
    feature12Title: 'Historial de actividad',
    feature12Text:
      'Todo lo que pasó, en orden: un dispositivo desbloqueado, un sitio filtrado, una tarea terminada, una alerta enviada. Hoy es gratis; Premium conserva 30 días.',
    featurePremium: 'Premium',
    platformsTitle: 'Un solo KidGate, esté donde esté la pantalla',
    platformsSub:
      'Las mismas normas y la misma cuenta familiar en el móvil y en el ordenador. La app de escritorio se instala desde esta web, no desde una tienda; Chrome y Android TV están a la espera de la revisión de sus tiendas.',

    showcaseEyebrow: 'Panel para padres',
    showcaseTitle: 'Toda la familia en una pantalla',
    showcaseSub:
      'Tiempo de uso, intentos bloqueados, ubicación y todo lo que necesita tu atención: en tu móvil o en cualquier navegador.',
    showcaseTile1: 'Tiempo de uso hoy',
    showcaseTile2: 'Intentos bloqueados',
    showcaseTile3: 'Necesita atención',
    showcaseCaption1: 'Lee los informes desde cualquier navegador',
    showcaseCaption2: 'Los cambios se aprueban desde tu móvil',

    setupEyebrow: 'Configuración',
    setupTitle: 'Listo en pocos minutos',
    setupSub: 'No hacen falta conocimientos técnicos: la app te guía en cada paso.',
    step1Title: 'Configura tu dispositivo',
    step1Text:
      'Instala KidGate, elige «Este es un dispositivo de padre» e inicia sesión con Google, Apple o correo.',
    step2Title: 'Vincula el dispositivo de tu hijo',
    step2Text:
      'Instala KidGate en el móvil de tu hijo y conéctalo escaneando un código QR. Menos de un minuto.',
    step3Title: 'Define tus reglas',
    step3Text:
      'Elige un límite diario, bloquea apps y horas y activa la ubicación, todo desde tu propio móvil.',

    whyEyebrow: 'Por qué KidGate',
    whyTitle: 'Creado para la confianza, no para la vigilancia',
    whySub: 'Diseñado para que padres e hijos sigan hablando.',
    why1Title: 'Un plan, toda la familia',
    why1Text:
      'Una sola suscripción Premium cubre todos los dispositivos de padres e hijos, y solo paga el titular de la familia. El plan gratuito mantiene supervisado un dispositivo infantil.',
    why2Title: 'Pensado para criar en pareja',
    why2Text:
      'Invita a un segundo padre a gestionar los mismos hijos, con el acceso que apruebe el titular.',
    why3Title: 'La privacidad primero',
    why3Text:
      'Nunca vendemos datos personales ni usamos los datos de los niños para publicidad. Bórralo todo cuando quieras.',
    why4Title: 'Honestos sobre los límites',
    why4Text:
      'Te decimos qué puede y qué no puede aplicar cada plataforma, en vez de prometer un control que no existe.',

    onlyEyebrow: 'Solo en KidGate',
    onlyTitle: 'Lo que no encontrarás en otro sitio',
    onlySub:
      'Seis cosas que comprobamos frente a las apps con las que nos comparan. Cada una indica en qué plataforma es cierta.',
    only1Title: 'También la tele del salón',
    only1Text:
      'Android TV tiene Límite diario, Horas bloqueadas, bloqueo de apps y Filtro web. En la tele, el bloqueo hace lo que puede —una app bloqueada vuelve a la pantalla de inicio— y desde el sofá no hay SOS ni petición de tiempo extra. La versión ya funciona en hardware real y está a la espera de su publicación en la tienda, por eso la lista de plataformas dice Previsto. La mayoría de controles parentales se quedan en el móvil.',
    only2Title: 'Alertas de mensajes que no salen del móvil',
    only2Text:
      'En Android, los mensajes se cotejan en el propio dispositivo con listas de palabras clave en 14 idiomas, y lo que sale del móvil es la palabra detectada, nunca la conversación. Solo una cosa cambia eso, y solo si tú lo pides: activa la confirmación por IA y un mensaje entrante ambiguo se envía para que lo valoren, de modo que no te despierte una palabra corriente.',
    only3Title: 'Cualquier app, no una lista de apps',
    only3Text:
      'En Android, las alertas salen de las notificaciones y de lo que se escribe en cualquier app que use tu hijo o hija — Zalo, LINE, KakaoTalk, el chat de un juego — no de una lista fija de apps compatibles.',
    only4Title: 'Una salida para el niño',
    only4Text:
      'Mantener SOS cinco segundos te avisa al instante, con ubicación; en Android y Mac además desbloquea el dispositivo un rato. Quien siempre puede pedir ayuda no tiene motivo para pelearse con la app.',
    only5Title: 'Reglas que se cumplen sin internet',
    only5Text:
      'Las Horas bloqueadas y el Límite diario se aplican en el propio dispositivo, así que desenchufar el router no cambia nada. La tele incluso acepta tu PIN parental sin ninguna conexión.',
    only6Title: 'Reconocimiento cuando la semana lo merece',
    only6Text:
      'Cada informe semanal reserva espacio para lo que fue bien — un límite respetado, ninguna noche hasta tarde, una tarea terminada — y solo lo dice cuando la semana se midió de verdad.',

    faqEyebrow: 'Preguntas frecuentes',
    faqTitle: 'Lo que los padres preguntan primero',
    faqSub: 'Respuestas rápidas antes de descargar.',
    faq1Q: '¿Hay una prueba gratuita?',
    faq1A:
      'Sí. La prueba de 7 días empieza cuando conectas tu primer dispositivo de padre y de hijo, e incluye todas las funciones Premium. Cuando termina, las reglas que pusiste —Límite diario, Horas bloqueadas, Apps bloqueadas, Filtro web, Bloqueo de dispositivo, peticiones de tiempo extra y tareas con recompensa— siguen funcionando gratis en un dispositivo infantil, y aún puedes preguntarle a ese dispositivo dónde está. La actividad en vivo, el historial, los informes semanales y el seguimiento de ubicación son lo que Premium devuelve.',
    faq2Q: '¿Cuántos dispositivos puedo gestionar?',
    faq2A:
      'Una suscripción cubre a toda tu familia: cada dispositivo infantil y cada padre en el mismo plan. En el plan gratuito un dispositivo infantil sigue supervisado y tú eliges cuál; los demás siguen aplicando las reglas que ya pusiste y dejan de enviar actividad.',
    faq3Q: '¿Puede mi hijo desinstalar o saltarse KidGate?',
    faq3A:
      'Los ajustes sensibles están detrás de tu PIN de padre, y las Alertas de protección te avisan de inmediato si se desactiva un permiso clave en el dispositivo del niño.',
    faq4Q: '¿Puedo gestionarlo todo desde un ordenador?',
    faq4A:
      'Sí. El panel para padres se abre en cualquier navegador: inicia sesión con un código de tu móvil y verás la misma familia, los mismos dispositivos y los mismos ajustes. Leer funciona de inmediato; bloquear un dispositivo o cambiar un límite pide tu PIN parental, o una aprobación desde la app.',
    faq5Q: '¿Cuánto cuesta Premium?',
    faq5A:
      'Premium cuesta $6.99 al mes o $39.99 al año en Estados Unidos, se cobra a través del App Store o Google Play y allí se muestra en tu propia moneda. Un plan Lifetime de pago único cubre hasta tres dispositivos infantiles. El plan gratuito nunca caduca.',
    faqMore: '¿Más preguntas? Visita Soporte',

    ctaTitle: 'Empieza hoy a proteger a tu familia',
    ctaSub:
      'Prueba gratuita de 7 días con acceso completo. No hace falta tarjeta para empezar.',
    ctaNote: 'Cancela cuando quieras desde el App Store o Google Play.',
  },

  login: {
    title: 'Acceso para padres',
    sub: 'Usa la misma cuenta que creaste en la app de KidGate. Al entrar aquí verás la misma familia, dispositivos y ajustes.',
    notConfiguredTitle: 'Firebase no está configurado en este despliegue.',
    notConfiguredBody:
      'Define las variables de entorno VITE_FIREBASE_* para habilitar el acceso.',
    qrWhy:
      'Escanear con el móvil te identifica y desbloquea los controles en un solo paso. Los métodos de abajo te identifican para consultar; desbloquear los controles requiere después tu PIN.',
    orViewOnly: 'o entra de otra forma',
    google: 'Continuar con Google',
    googleBusy: 'Abriendo Google…',
    apple: 'Continuar con Apple',
    appleBusy: 'Abriendo Apple…',
    orEmail: 'o usa tu correo',
    email: 'Correo',
    emailPlaceholder: 'tu@ejemplo.com',
    password: 'Contraseña',
    submit: 'Iniciar sesión',
    submitBusy: 'Iniciando sesión…',
    forgot: '¿Olvidaste tu contraseña?',
    resetNeedsEmail:
      'Escribe primero tu correo y luego elige «¿Olvidaste tu contraseña?».',
    resetSent: 'Correo de restablecimiento enviado a {{email}}.',
    foot: 'Las cuentas de KidGate se crean en la app móvil; el panel web solo accede a una familia existente. ¿Es tu primera vez? Instala la app y vincula un dispositivo de tu hijo primero.',
  },

  qr: {
    start: 'Iniciar sesión con la app de KidGate',
    generating: 'Generando código…',
    step1: 'Abre KidGate en tu móvil.',
    step2: 'Ve a *Ajustes → Iniciar sesión en la web*.',
    step3: 'Escanea este código y aprueba.',
    waiting: 'Esperando aprobación · caduca en {{time}}',
    signingIn: 'Aprobado. Iniciando sesión…',
    expired: 'Este código ha caducado.',
    failed: 'El inicio de sesión no se completó.',
    newCode: 'Mostrar un código nuevo',
    tryAgain: 'Reintentar',
  },

  authError: {
    generic: 'Algo salió mal. Inténtalo de nuevo.',
    invalidEmail: 'Ese correo no parece correcto.',
    userDisabled: 'Esta cuenta ha sido desactivada.',
    userNotFound: 'Ninguna cuenta de KidGate usa ese correo.',
    wrongPassword: 'Correo o contraseña incorrectos.',
    rateLimited:
      'Demasiados códigos de acceso desde esta red. Vuelve a intentarlo en {{minutes}} min.',
    tooManyRequests: 'Demasiados intentos. Espera unos minutos y vuelve a probar.',
    popupClosed: 'La ventana de acceso se cerró antes de terminar.',
    popupCancelled: 'Se canceló el inicio de sesión.',
    popupBlocked:
      'Tu navegador bloqueó la ventana de acceso. Permite las ventanas emergentes para este sitio e inténtalo de nuevo.',
    accountExists:
      'Ese correo ya está registrado con otro método de acceso. Usa el que configuraste en la app.',
    operationNotAllowed:
      'Ese método de acceso aún no está habilitado en este proyecto.',
    unauthorizedDomain:
      'Este dominio no está autorizado en los ajustes de Firebase Authentication.',
    invalidCustomToken:
      'Ese enlace de acceso ya no es válido. Muestra un código QR nuevo.',
    webRejected: 'La solicitud se rechazó en el móvil.',
    webExpired: 'El código caducó. Genera uno nuevo.',
    noFunctionsUrl:
      'La URL de Cloud Functions no está configurada (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'Tu sesión ha caducado. Vuelve a iniciar sesión.',
  },

  live: {
    checkingSession: 'Comprobando tu sesión…',
    loadingFamily: 'Cargando tu familia…',
    loadFailedTitle: 'No se pudo cargar tu familia',
    noAccessTitle: 'No hay ninguna familia en esta cuenta',
    noAccess:
      'Esta cuenta no tiene acceso a ninguna familia de KidGate. Inicia sesión con la cuenta de padre que usas en la app.',
  },

  time: {
    never: 'nunca',
    justNow: 'ahora mismo',
    minutes: 'hace {{count}} min',
    hours: 'hace {{count}} h',
    days: 'hace {{count}} d',
  },

  viz: {
    hours: '{{count}}h',
    minutes: '{{count}}min',
    hoursMinutes: '{{hours}}h {{minutes}}min',
    none: '—',
    byDay: 'Tiempo de uso por día',
    limit: 'Límite {{value}}',
    screenTime: 'Tiempo de uso',
    bonus: 'Extra',
    bonusEarned: 'Minutos extra ganados',
    overLimit: 'Por encima del límite diario',
    dailyLimit: 'Límite diario',
    ofLimit: 'de {{value}}',
    noLimit: 'sin límite fijado',
    blocked: 'Bloqueado',
    blockedHours: 'Horas bloqueadas',
    day0: 'dom',
    day1: 'lun',
    day2: 'mar',
    day3: 'mié',
    day4: 'jue',
    day5: 'vie',
    day6: 'sáb',
    timelineUsed: 'En uso',
    timelineIdle: 'Sin usar',
    timelineUnmeasured: 'Sin medir',
    timelineUnmeasuredHint:
      'KidGate no se estaba ejecutando en el dispositivo, o el dispositivo estaba suspendido. Esos minutos tampoco están en el total.',
    timelineUnsupported:
      'Este dispositivo puede informar cuánto tiempo se usó, pero no cuándo.',
    timelinePending: 'Aún no hay línea de tiempo.',
  },

  perm: {
    screenTime: 'Tiempo de uso',
    location: 'Ubicación',
    notifications: 'Notificaciones',
    camera: 'Cámara',
    backgroundAppRefresh: 'Actualización en segundo plano',
    overlay: 'Mostrar sobre otras aplicaciones',
    batteryOptimization: 'Batería sin restricciones',
    exactAlarm: 'Alarmas exactas',
    accessibility: 'Accesibilidad',
  },

  webCat: {
    adult: 'Contenido adulto',
    selfHarm: 'Autolesiones y trastornos alimentarios',
    gambling: 'Apuestas',
    gameGambling: 'Cajas de botín y apuestas de skins',
    dating: 'Citas',
    strangerChat: 'Chat con desconocidos',
    drugs: 'Drogas y alcohol',
    violence: 'Violencia y gore',
    extremism: 'Extremismo y odio',
    piracy: 'Piratería',
    social: 'Redes sociales',
    videoStreaming: 'Vídeo en streaming',
    music: 'Música',
    gaming: 'Juegos',
    shopping: 'Compras',
    aiCompanion: 'Compañeros de IA',
    aiAssistant: 'Asistentes de IA',
    cryptoTrading: 'Cripto y trading',
    vpn: 'Apps VPN',
  },

  appCat: {
    adult: 'Contenido adulto',
    gambling: 'Apuestas',
    gameGambling: 'Cajas de botín y apuestas de skins',
    dating: 'Citas',
    drugs: 'Drogas y alcohol',
    violence: 'Violencia y gore',
    piracy: 'Piratería',
    bypass: 'Evasión de filtros y VPN',
  },

  webCatGroup: {
    harm: 'Contenido dañino',
    contact: 'Desconocidos',
    bypass: 'Evasión del filtro',
    ai: 'IA',
    entertainment: 'Ocio y redes sociales',
    money: 'Compras y dinero',
  },

  dash: {
    tabOverview: 'Resumen',
    tabScreen: 'Tiempo de uso',
    tabApps: 'Apps y web',
    tabSafety: 'Seguridad',
    tabControls: 'Controles',
    tabReport: 'Informe semanal',
    tabReportNew: 'Nuevo informe semanal',

    children: 'Hijos',
    noChildren: 'Aún no hay dispositivos de hijos vinculados.',
    unassignedDevices: 'Sin asignar',
    manage: 'Gestionar',
    parents_one: '{{count}} padre',
    parents_other: '{{count}} padres',
    devices_one: '{{count}} dispositivo de hijo',
    devices_other: '{{count}} dispositivos de hijos',
    planManageOnPhone:
      'Los planes se compran y se cambian en la app de KidGate del móvil.',
    fallbackFamily: 'Tu familia',
    fallbackDevice: 'Dispositivo del hijo',

    statusOnline: 'En línea',
    statusOffline: 'Sin conexión',
    statusLocked: 'Bloqueado',
    statusLockSent: 'Bloqueo enviado',
    statusLockNotApplied: 'Bloqueo no aplicado',
    statusPaused: 'En pausa',

    stateAllowed: 'Permitido',
    stateDenied: 'Desactivado',
    stateNotDetermined: 'Aún no solicitado',
    stateRestricted: 'Restringido',
    stateUnavailable: 'No disponible',
    stateUnknown: 'Desconocido',

    lastActive: 'Última actividad {{when}}',
    appVersion: 'Versión de la app',
    appVersionUpdate: '{{running}} · {{latest}} disponible',
    appVersionRestart: '{{running}} · reinicia la app para terminar',
    buildOutdated: 'Actualización disponible',
    checkIn: 'Registro',
    sending: 'Enviando…',
    lockDevice: 'Bloquear dispositivo',
    unlock: 'Desbloquear',
    working: 'Trabajando…',
    save: 'Guardar',

    unlockTitle: 'Los cambios están bloqueados.',
    unlockBody:
      'Consultar funciona al momento. Para bloquear un dispositivo, cambiar límites o aprobar solicitudes, desbloquea este navegador con tu PIN de madre o padre, o apruébalo escaneando el código QR con la app de KidGate. Los avisos de seguridad funcionan igual en ambos casos.',
    unlockCta: 'Desbloquear cambios',
    unlockToChange: 'Desbloquea los cambios primero',
    pinTitle: 'Introduce tu PIN',
    pinBody:
      'Los mismos seis dígitos que usas en la app. Este navegador queda desbloqueado 8 horas; aprobarlo desde la app lo mantiene con la sesión iniciada 7 días.',
    pinLabel: 'PIN de madre o padre',
    pinSubmit: 'Desbloquear',
    pinOrScan: 'O aprueba desde el móvil',
    qrSaferNote:
      'Aprobar desde el móvil es lo más seguro: hace falta el móvil vinculado en la mano, mientras que el PIN son seis dígitos que alguien de la familia puede haberte visto teclear.',
    pinWrong: 'PIN incorrecto. Intentos restantes: {{count}}.',
    pinLocked:
      'Demasiados intentos fallidos. Espera 15 minutos o aprueba este navegador desde el móvil.',
    pinNotSet:
      'Tu familia aún no tiene PIN. Configúralo en la app o aprueba este navegador desde el móvil.',
    unlockedToast: 'Cambios desbloqueados en este navegador.',
    close: 'Cerrar',

    noDeviceTitle: 'Todavía no hay dispositivos de hijos',
    noDeviceBody:
      'Abre KidGate en tu móvil, ve a *Familia → + → Conectar el dispositivo de un hijo* y escanea el código QR que aparece en el dispositivo de tu hijo. Aparecerá aquí a los pocos segundos de vincularlo.',

    toastCheckIn: '{{name}} recibirá una solicitud de registro.',
    toastTimeApproved: 'Tiempo extra aprobado.',
    toastCheckInResent: 'Registro enviado de nuevo.',

    tileScreenToday: 'Tiempo de uso hoy',
    tileSameAsAverage: 'Igual que la media de 7 días',
    tileDeltaUp: '↑ {{percent}} % frente a la media de 7 días',
    tileDeltaDown: '↓ {{percent}} % frente a la media de 7 días',
    tileBlocked: 'Intentos bloqueados',
    tileBlockedMeta: 'Apps detenidas desde la instalación',
    tileSites: 'Sitios filtrados',
    tileCategoriesHit_one: '{{count}} categoría afectada',
    tileCategoriesHit_other: '{{count}} categorías afectadas',
    tileNothingBlocked: 'Aún no se ha bloqueado nada',
    tileAttention: 'Necesita atención',
    tileOpenItems: 'Elementos abiertos abajo',
    tileAllClear: 'Todo en orden',

    cardScreenTime: 'Tiempo de uso',
    cardScreenTimeSub: 'Últimos 14 días, frente al límite diario',
    usageSyncNote:
      'El tiempo de uso puede tardar unos minutos en aparecer en esta pantalla, más si el dispositivo no tiene conexión a Internet o se cerró de forma inesperada.',
    usageSyncNoteTv:
      'Este televisor solo se conecta de forma periódica, así que el tiempo de uso puede tardar hasta una hora en aparecer en esta pantalla, más si no hay conexión a Internet.',
    cardRecent: 'Actividad reciente',
    cardRecentSub: 'Lo más nuevo primero',
    cardRecentEmpty:
      'Todavía no hay registros. Los bloqueos, apps bloqueadas, avisos de lugares y sincronizaciones de tiempo de uso de este dispositivo aparecerán aquí.',
    cardAttention: 'Necesita tu atención',
    cardAttentionSub: '{{count}} abiertos',
    cardAttentionEmpty: 'Nada que revisar. Las protecciones se ven bien.',
    cardProtection: 'Estado de la protección',
    cardProtectionSub: 'Comprobado {{when}}',

    attnMoreMinutes: '{{name}} pidió {{minutes}} minutos más',
    attnReason: '«{{reason}}» · {{when}}',
    attnCheckInMissed: 'Se perdió un registro',
    attnCheckInMissedMeta: 'Enviado {{when}} · sin respuesta',
    attnLimitReached: 'Límite diario alcanzado: dispositivo bloqueado',
    attnLimitReachedMeta: '{{used}} usados hoy',
    attnBatteryLow: 'Batería baja ({{level}} %)',
    attnBatteryLowMeta:
      'Las actualizaciones de ubicación pueden pararse si el móvil se apaga',
    attnReview: 'Revisar',
    attnResend: 'Reenviar',
    attnHowToFix: 'Cómo arreglarlo',
    attnUnlock: 'Desbloquear',
    attnAppOnly: 'Disponible en la app de KidGate',

    todayTitle: 'Hoy',
    todaySub: 'Frente al límite diario y los minutos extra ganados',
    used: 'Usado',
    left: 'Restante',
    dailyLimit: 'Límite diario',
    bonusToday: 'Extra de hoy',
    off: 'Desactivado',
    on: 'Activado',
    topAppsTitle: 'Apps más usadas hoy',
    topAppsTitleDay: 'Apps más usadas · {{date}}',
    topAppsSub: 'Los topes por app se muestran como marca',
    topAppsFreeHint:
      'Top 3 de hoy: la lista completa y el historial vienen con Premium.',
    trendTitle: 'Tendencia del tiempo de uso',
    trendSub: 'Últimos {{count}} días',
    rangeDays: '{{count}} d',
    blockedHoursTitle: 'Horas bloqueadas',
    blockedHoursSub_one:
      '{{count}} franja horaria · el dispositivo sigue bloqueado dentro de los bloques sombreados',
    blockedHoursSub_other:
      '{{count}} franjas horarias · el dispositivo sigue bloqueado dentro de los bloques sombreados',
    scheduleOff: 'El horario está desactivado',
    schedMax: 'Un dispositivo admite {{max}} tramos como máximo.',

    appUsageTitle: 'Uso de apps hoy',
    appUsageSub: 'Tiempo dedicado por app',
    topAppsOther: 'Otras apps',
    underAMinute: 'Menos de un minuto',
    appUsageEmpty: 'Aún no se ha registrado uso de apps.',
    appBlockingTitle: 'Bloqueo de apps',
    appBlockingSub: 'Elegido en el dispositivo del niño con el PIN de padre',
    blockingLabel: 'Bloqueo',
    appsBlocked: 'Apps bloqueadas',
    categories: 'Categorías',
    perAppHint:
      'Los topes por app funcionan aparte de la lista de bloqueo: «30 minutos de TikTok» es una decisión distinta de «nada de TikTok».',
    limitsMax: 'Un dispositivo admite {{max}} apps limitadas como máximo.',
    perDay: '{{value}}/día',
    webActivityTitle: 'Actividad web',
    webActivitySub: 'Dominios más visitados, últimos 30 días',
    webActivityEmpty: 'Aún no hay actividad web.',
    inventoryTitle: 'Aplicaciones instaladas',
    inventorySub: 'Todo en este dispositivo, no solo lo que cambió',
    inventoryEmpty: 'Este dispositivo aún no ha publicado su lista de aplicaciones.',
    inventoryStale:
      'Esta lista está desactualizada. Se renovará cuando el dispositivo vuelva a conectarse.',
    inventoryFirstScan:
      'Primer análisis, así que KidGate no puede decir cuándo llegó cada una.',
    inventoryFlagged: 'Merecen una mirada',
    inventoryFlaggedLabel: 'A revisar',
    inventoryOtherLabel: 'Identificadas',
    inventoryUnknownLabel: 'Sin identificar',
    inventoryIncomplete:
      'Una aplicación sin icono en la pantalla de inicio puede no aparecer aquí.',
    inventoryPending: 'Esperando tu aprobación',
    pendingInstallBlocked: 'Bloqueada hasta que la permitas',
    installAllow: 'Permitir',
    pendingInstallsTitle: 'Apps nuevas esperando aprobación',
    pendingInstallsSub:
      'Instaladas después de activar la aprobación y bloqueadas por el propio dispositivo',
    pendingInstallsEmpty: 'No hay apps nuevas esperando aprobación.',
    toastInstallAllowed: 'App permitida',
    rowInstallApproval: 'Aprobar apps nuevas',
    rowInstallApprovalDesc: '{{count}} apps esperando aprobación',
    rowInstallApprovalDesc_one: '{{count}} app esperando aprobación',
    rowInstallApprovalDescIos:
      'Oculta el App Store; Apple no permite aprobar app por app',
    webActivitySyncNote:
      'La actividad web puede tardar unos minutos en aparecer en esta pantalla, más si el dispositivo no tiene conexión a Internet o se cerró de forma inesperada.',
    webActivitySyncNoteTv:
      'Este televisor solo se conecta de forma periódica, así que la actividad web puede tardar hasta una hora en aparecer en esta pantalla, más si no hay conexión a Internet.',
    colDomain: 'Dominio',
    colVisits: 'Visitas',
    colBlocked: 'Bloqueadas',
    colLastSeen: 'Última vez',
    videosTitle: 'Vídeos vistos',
    videosSub: 'Qué se vio en YouTube y la web',
    videosEmpty: 'Aún no hay vídeos.',
    colVideo: 'Vídeo',
    colChannel: 'Canal',
    colViews: 'Visualizaciones',
    filterRefusedTitle: 'Lo que rechazó el filtro',
    filterRefusedSub_one: '{{count}} consulta bloqueada, últimos 30 días',
    filterRefusedSub_other: '{{count}} consultas bloqueadas, últimos 30 días',
    nothingBlockedYet: 'Todavía no se ha bloqueado nada.',
    rollupNoteAi:
      'Algunos tipos se dedujeron del nombre del sitio en vez de coincidir con uno conocido, así que alguno puede fallar.',
    webBackgroundNote:
      'Cuando nadie usa el dispositivo, algunas apps siguen accediendo a Internet en segundo plano: actualizaciones, recomendaciones y comprobaciones funcionan solas.',
    filterHintIos:
      'En iOS el filtro usa el control de contenido para adultos de Apple; el bloqueo por categorías es solo para Android.',
    filterHintAndroid: 'Las categorías las aplica el filtro DNS del dispositivo.',
    filterHintMacos:
      'Las categorías las aplica el filtro de contenido de KidGate en el Mac.',

    locationTitle: 'Ubicación',
    locationSharingOff: 'El uso compartido está desactivado',
    locationSyncNote:
      'La ubicación puede tardar unos minutos en actualizarse, más si el dispositivo no tiene conexión a Internet o se cerró de forma inesperada.',
    locationUpdated: 'Actualizado {{when}}',
    locationWaiting: 'Esperando la primera actualización',
    lastKnownLocation: 'Última ubicación conocida',
    nearPlace: 'Cerca de {{place}}',
    noPlaces:
      'Aún no hay lugares guardados. Añade uno en la app para recibir un aviso cuando tu hijo llegue o salga.',
    placeRadius: '{{meters}} m · ',
    placeArrive: 'llegada',
    placeLeave: 'salida',
    placeNoAlerts: 'sin avisos',
    placeSamePin:
      'Este es el mismo punto que «{{name}}». Usa el mapa de la app para ponerlo en otro sitio.',
    placeWebHint:
      'En la web solo se puede crear un lugar donde el dispositivo informó su posición por última vez. Usa el mapa de la app para elegir cualquier otro sitio.',
    placeNeedsLocation: 'Esperando una ubicación de este dispositivo.',
    sosTitle: 'Alertas SOS',
    sosSub: 'Señales de emergencia del dispositivo del niño',
    sosEmpty:
      'No hay alertas SOS. Probadlo juntos una vez para que los dos sepáis cómo funciona.',
    sosAcknowledged: 'confirmada',
    sosActive: 'activa',

    checkInsTitle: 'Registros',
    checkInsSub: 'Pide a tu hijo que confirme que está bien',
    checkInSafe: 'Confirmó estar bien',
    checkInMissed: 'Sin respuesta',
    checkInWaiting: 'Esperando',
    checkInPhotoRequested: 'se pidieron foto y ubicación',
    checkInNoReply: 'aún sin respuesta',
    checkInPhotoSkipped: 'foto omitida',
    checkInPhotoAttached: 'foto adjunta',
    checkInNoPhoto: 'no se pidió foto',
    sendCheckIn: 'Enviar un registro ahora',

    protectionAlertsTitle: 'Alertas de protección',
    protectionAlertsSub_one: '{{count}} evento desde la instalación',
    protectionAlertsSub_other: '{{count}} eventos desde la instalación',
    protectionAlertsHint:
      'Una alerta de protección significa que KidGate puede aplicar menos de lo que has definido. Restaura el permiso en el dispositivo del niño para borrarla.',

    limitCardTitle: 'Límite diario',
    limitCardSub: 'Limita los minutos disponibles cada día',
    limitAria: 'Minutos del límite diario',
    limitScaleMin: '30 min',
    limitScaleMax: '8 h',
    limitHint:
      'Los minutos extra de las tareas y de las solicitudes de tiempo aprobadas se suman encima, solo ese día.',
    limitShared: 'Compartido entre todos los dispositivos',
    limitSharedSpent: 'Hoy se han usado {{used}} de {{limit}}',
    limitSharedHint:
      'Es el día completo de este niño, no un límite de este dispositivo: cada dispositivo recibe lo que los demás no han usado. Se cambia en la app de KidGate.',
    whatsOnTitle: 'Qué está activado',
    whatsOnSub: 'Los cambios se sincronizan con el dispositivo del niño',
    rowBlockedHours: 'Horas bloqueadas',
    rowBlockedHoursDesc_one: '{{count}} franja horaria · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} franjas horarias · {{list}}',
    rowAppBlocking: 'Bloqueo de apps',
    rowAppBlockingApps: '{{count}} apps',
    rowAppBlockingApps_one: '{{count}} app',
    rowAppBlockingCategories: '{{count}} categorías',
    rowAppBlockingCategories_one: '{{count}} categoría',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Filtro web',
    rowWebFilterDesc_one: '{{count}} categoría rechazada',
    rowWebFilterDesc_other: '{{count}} categorías rechazadas',
    rowNotSupported: 'No compatible con este dispositivo',
    rowWebFilterAwaitingApproval: 'Esperando aprobación en el dispositivo',
    rowWebFilterSwitchedOff: 'Desactivado en el dispositivo',
    rowLocation: 'Compartir ubicación',
    rowLocationDesc: 'Última actualización {{when}}',
    rowLocationNone: 'Todavía sin ubicación',
    rowSearchMonitoring: 'Supervisión de búsquedas',
    rowSearchMonitoringDesc:
      'Navegadores y YouTube. Solo se informa la palabra marcada, nunca la búsqueda en sí.',
    rowSafeSearch: 'Forzar SafeSearch',
    rowSafeSearchDesc:
      'Fija Google SafeSearch, el modo restringido de YouTube, Bing y DuckDuckGo en su ajuste estricto. Android, Android TV y Chrome. En este nivel YouTube también oculta los comentarios y bloquea algunos vídeos normales.',

    webFilterCatsTitle: 'Categorías del filtro web',
    webFilterCatsSub: 'Tipos de contenido bloqueados',
    dnsHint:
      'Los resolutores de DNS cifrado siempre se rechazan mientras el filtro funciona: dejarlos accesibles es lo que permite a un navegador esquivar todas las demás categorías.',
    starChartTitle: 'Tabla de estrellas',
    starChartSub: 'Estrellas conseguidas esta semana, por hijo',
    starChartEmpty:
      'Añade un segundo hijo en la app para empezar la tabla de estrellas.',
    starChartStars: '{{count}} estrellas',
    familyScreenTimeTitle: 'Tiempo de uso de la familia',
    familyScreenTimeSub: 'Menos tiempo de uso primero, esta semana',
    familyScreenTimeEmpty:
      'Nadie ha informado todavía esta semana. Las filas aparecen cuando los móviles informan.',
    familyScreenTimeParent: 'Padre o madre',
    familyScreenTimeDays: '{{count}} días informados',
    rewardTasksTitle: 'Tareas con recompensa',
    rewardTasksSub: 'Gana minutos extra completando tareas',
    rewardTaskMeta: '+{{minutes}} min · {{cadence}}',
    rewardTaskStars: 'Dificultad: {{count}} de 3',
    rewardTaskWaiting: ' · esperando tu aprobación',
    approve: 'Aprobar',
    siteRequestsTitle: 'Peticiones de sitios',
    siteRequestsSub: 'Sitios que este dispositivo pidió permitir',
    siteRequestAllow: 'Permitir',
    siteRequestDeny: 'Ahora no',
    attnSiteRequest: '{{name}} pidió abrir {{domain}}',
    toastSiteAllowed: 'Sitio permitido',
    timelineTitle: 'Cuándo se usó',
    timelineSub:
      'Hoy, de medianoche a medianoche. El verde es tiempo en el dispositivo.',
  },

  controlError: {
    generic: 'No se pudo completar. Inténtalo de nuevo.',
    network: 'Sin conexión. Comprueba tu red e inténtalo de nuevo.',
    sessionExpired: 'Tu sesión ha caducado. Vuelve a iniciar sesión.',
    forbidden:
      'Esta sesión del navegador no puede hacer cambios. Vuelve a iniciar sesión escaneando el código QR con la app de KidGate.',
    notFound: 'Eso ya no está ahí; puede que se haya cambiado desde el teléfono.',
    conflict: 'Alguien acaba de cambiar esto. Recarga para ver cómo quedó.',
    rateLimited: 'Demasiados cambios a la vez. Espera un momento e inténtalo de nuevo.',
    server: 'KidGate no pudo completar eso. Inténtalo de nuevo en breve.',
    premiumRequired:
      'Esta es una función Premium. Los planes se gestionan en la app de KidGate en tu teléfono.',
  },

  report: {
    title: 'Informe semanal',
    subtitle: 'Lo que KidGate observó durante la semana.',
    weekOf: 'Semana {{week}}',
    range: '{{from}} – {{to}}',
    writtenAt: 'Escrito el {{when}}',
    triggerScheduled: 'Enviado el lunes',
    triggerManual: 'Creado por ti',
    statScreenTime: 'Tiempo de pantalla',
    statDailyAverage: 'Media diaria',
    statBlockedApps: 'Apps bloqueadas',
    statBlockedWebVisits: 'Sitios filtrados',
    statTasksApproved: 'Tareas completadas',
    trendUp: '{{value}} más que la semana anterior',
    trendDown: '{{value}} menos que la semana anterior',
    trendFlat: 'Prácticamente igual que la semana anterior',
    trendFirstWeek: 'Primera semana medida',
    barThisWeek: 'Esta semana',
    barLastWeek: 'La semana pasada',
    highlights: 'Conviene saber',
    sevAttention: 'Merece una mirada',
    sevNotable: 'Destacado',
    sevInfo: 'Bueno saberlo',
    findingUsageUp:
      'El tiempo de pantalla subió un {{percent}}%: {{delta}} más que la semana pasada.',
    findingUsageDown:
      'El tiempo de pantalla bajó un {{percent}}%: {{delta}} menos que la semana pasada.',
    findingUsageFlat: 'El tiempo de pantalla se mantuvo en {{total}}.',
    findingLateNight_one: 'Una noche después de las 23:00, hasta las {{time}}.',
    findingLateNight_other:
      '{{count}} noches después de las 23:00; la más tardía, hasta las {{time}}.',
    findingNewTopApp: '{{app}} es nueva esta semana y ya suma {{duration}}.',
    findingAppSurge:
      '{{app}} sube {{delta}} respecto a la semana pasada: {{duration}} en total.',
    findingLimitHit_one: 'Se alcanzó el límite diario de {{limit}} un día.',
    findingLimitHit_other:
      'Se alcanzó el límite diario de {{limit}} en {{count}} días.',
    findingBlockedApps:
      '{{count}} aperturas de apps bloqueadas, frente a {{previous}} la semana pasada.',
    findingBlockedWeb:
      '{{count}} sitios filtrados, frente a {{previous}} la semana pasada.',
    findingQuietWeek:
      'Una semana tranquila: {{total}} en total y nada que requiriera tu atención.',
    narrativeTitle: 'En una frase',
    finePrint:
      'Las cifras cubren del {{from}} al {{to}}, en todos los dispositivos de la familia. El tiempo de pantalla es lo que informaron los dispositivos; los minutos que no pudieron medir no están en ningún total.',
    shareImage: 'Guardar como imagen',
    sharePdf: 'Guardar como PDF',
    copySummary: 'Copiar resumen',
    copied: 'Resumen copiado.',
    imageSaved: 'Imagen guardada.',
    shareFailed: 'Este navegador no puede guardarlo. Copia el resumen en su lugar.',
    emptyTitle: 'Todavía no hay informe',
    emptyBody:
      'Cada lunes por la mañana llega un informe que cubre los siete días anteriores.',
    noUsage:
      'No se registró tiempo de pantalla en las últimas dos semanas, así que todavía no hay nada que informar. Un dispositivo sin conexión no informa nada, y eso no es lo mismo que una semana tranquila.',
    rateLimited: 'Demasiados intentos. Espera un minuto.',
    loadFailedTitle: 'No se cargaron los informes',
    loadFailed: 'No se pudieron abrir los informes. Recarga la página para reintentar.',
    retryLoad: 'Reintentar',
    failed: 'No se pudo escribir el informe. Inténtalo de nuevo en un momento.',
    existed: 'Esta semana ya tenía un informe: aquí está.',
    childrenTitle: 'Cada hijo',
    childrenNote:
      'La misma quincena, por dispositivo. Los porcentajes son del total familiar.',
    colChild: 'Hijo',
    colScreenTime: 'Tiempo de pantalla',
    colShare: 'Proporción',
    colChange: 'Frente a la semana pasada',
    colLimit: 'Sobre el límite',
    colLateNights: 'Noches tarde',
    colTopApp: 'Más usada',
    unnamedChild: 'Dispositivo sin nombre',
    changeUp: '+{{value}}',
    changeDown: '−{{value}}',
    changeFlat: 'prácticamente igual',
    noLimit: 'Sin límite',
    noTopApp: '—',
    limitDays_one: '{{count}} día',
    limitDays_other: '{{count}} días',
    lateNightsNone: 'ninguna',
    busiest: 'Más tiempo de pantalla',

    historyTitle: 'Semanas anteriores',
    historyEmpty:
      'Los informes que recibas a partir de ahora se guardan aquí durante un año.',
  },

  support: {
    title: 'Soporte de KidGate',
    updated: 'Estamos aquí para ayudarte',

    contactTitle: 'Contáctanos',
    contactEmail: '**Correo:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Tiempo de respuesta:** en 24 horas (de lunes a viernes)',
    contactNote:
      'Al escribirnos, incluye el correo de tu cuenta de padre de KidGate y una breve descripción del problema para que podamos ayudarte más rápido.',

    startTitle: 'Primeros pasos',
    start1:
      '**1. Configura el dispositivo del padre.** Instala KidGate, abre la app y elige *Este es un dispositivo de padre*. Inicia sesión con Google, Apple o correo y ponle nombre a tu familia.',
    start2:
      '**2. Define un PIN de padre.** Ve a *Ajustes → Seguridad* y crea un PIN de padre de 6 dígitos. Lo necesitas para cambiar ajustes sensibles y elegir apps bloqueadas en el dispositivo del niño. No lo compartas con tus hijos.',
    start3:
      '**3. Conecta el dispositivo del niño.** Instala KidGate en el dispositivo de tu hijo y elige *Este es un dispositivo de hijo*. En el dispositivo del padre, abre *Familia → + → Conectar el dispositivo de un hijo* y escanea el código QR que aparece en el dispositivo del niño (o introduce el código de 6 caracteres). Confirma la conexión en el dispositivo del niño.',
    start4:
      '**4. Concede permisos en el dispositivo del niño.** Abre la pantalla *Estado* en el dispositivo del niño y permite todos los permisos que pide KidGate: en Android, notificaciones, Acceso de uso, Mostrar sobre otras aplicaciones, Accesibilidad y batería sin restricciones; en iOS, *Permitir uso de apps y sitios web* (Tiempo de uso). Los controles no funcionarán del todo hasta que estén activados.',
    start5:
      '**5. Configura los controles.** Desde el dispositivo del padre, abre la tarjeta del dispositivo del niño y define el límite diario, las horas bloqueadas, las apps bloqueadas, el filtro web y las funciones de ubicación.',
    startNote:
      'La app también incluye una guía paso a paso: *Ajustes → Guía de uso*, con detalles sobre vinculación de dispositivos, permisos, controles diarios y funciones de seguridad.',

    faqTitle: 'Preguntas frecuentes',

    faq1Q: '¿Puedo gestionar mi familia desde un ordenador?',
    faq1A:
      'Sí. Abre el [panel web](/dashboard) e inicia sesión con la misma cuenta que usas en la app: Google, Apple o tu correo y contraseña. Muestra la misma familia, dispositivos, informes y ajustes. Las cuentas y la vinculación de dispositivos se siguen haciendo en la app móvil.',

    faq2Q: '¿Cómo vinculo los dispositivos del padre y del hijo?',
    faq2A:
      'En el dispositivo del niño, abre KidGate y elige *Este es un dispositivo de hijo*: aparecerán un código QR y un código de 6 caracteres. En el dispositivo del padre, abre *Familia → + → Conectar el dispositivo de un hijo* y escanea el código QR (recomendado) o introduce el código a mano. Después confirma el nombre del padre en el dispositivo del niño. Los códigos caducan: si la vinculación falla, toca *Código nuevo* en el dispositivo del niño e inténtalo otra vez.',

    faq3Q: '¿Pueden dos padres gestionar la misma familia?',
    faq3A:
      'Sí. En el dispositivo del titular de la familia, abre *Familia → + → Añadir otro dispositivo de padre* y comparte el código QR o el código de invitación. El otro padre instala KidGate, inicia sesión como padre y elige *Familia → + → Unirse a la familia*. El titular aprueba después la solicitud. Una suscripción cubre a toda la familia; solo paga el titular.',

    faq4Q: '¿Cómo funciona la prueba gratuita?',
    faq4A:
      'La prueba de 7 días empieza cuando conectas tu primer dispositivo de padre y de hijo, y da acceso completo a todas las funciones. Quitar un dispositivo infantil no reinicia la prueba. Cuando termina, todas las reglas siguen funcionando gratis en un dispositivo infantil; Premium conserva la actividad en vivo, el historial, los informes semanales y todos los dispositivos.',

    faq5Q: '¿Cómo cancelo mi suscripción?',
    faq5A:
      'Las suscripciones se cobran a través del App Store o Google Play, no directamente por KidGate. En iOS: *Ajustes → tu nombre → Suscripciones*. En Android: *Google Play → icono de perfil → Pagos y suscripciones → Suscripciones*. La suscripción se renueva automáticamente salvo que canceles al menos 24 horas antes de que termine el periodo actual.',

    faq6Q: '¿Cómo restauro mis compras?',
    faq6A:
      'En el dispositivo del padre, abre la pantalla *Planes* y toca *Restaurar compras*. Asegúrate de haber iniciado sesión con la misma cuenta de la tienda que usaste en la compra original. Ten en cuenta que solo el titular de la familia puede suscribirse o restaurar compras.',

    faq7Q: '¿Por qué no aparecen los datos de tiempo de uso?',
    faq7A:
      'Los datos de uso vienen del dispositivo del niño. Comprueba que está conectado, abre KidGate en él y mira la pantalla *Estado*: todas las filas de permisos deberían aparecer como permitidas (en Android, el Acceso de uso es necesario para el seguimiento del tiempo de uso). Los informes pueden tardar unos minutos en sincronizarse.',

    faq8Q: '¿Por qué no funciona el bloqueo o las horas bloqueadas?',
    faq8A:
      'En Android, el bloqueo necesita *Mostrar sobre otras aplicaciones* y el asistente de *Accesibilidad* activados, además de batería sin restricciones. En Xiaomi, Samsung, Oppo, Vivo y dispositivos similares, permite también el inicio automático y quita KidGate de cualquier lista de "apps en reposo" (mira *Estado → Mantener KidGate en marcha* en el dispositivo del niño). En iOS, el bloqueo depende de la autorización de Tiempo de uso. Si un permiso se desactiva más tarde, recibirás una alerta de protección en el dispositivo del padre.',

    faq9Q: '¿Cómo bloqueo apps concretas?',
    faq9A:
      'La selección de apps se hace en el dispositivo del niño: abre *KidGate → Ajustes*, introduce el PIN de padre, elige *Elegir apps para bloquear* y guarda. Después, en el dispositivo del padre, abre la pantalla *Apps bloqueadas* del dispositivo y activa *Habilitar bloqueo de apps*. En iOS, Apple puede ocultar los nombres exactos de las apps al dispositivo del padre: es una limitación de la plataforma.',

    faq10Q: '¿Por qué no se actualiza la ubicación de mi hijo?',
    faq10A:
      'La ubicación debe estar permitida para KidGate en el dispositivo del niño, y el dispositivo necesita conexión de red. Abre la pantalla *Ubicación* del dispositivo desde el móvil del padre y desliza hacia abajo para actualizar. Los modos de ahorro de batería pueden retrasar las actualizaciones, y el GPS en interiores puede ser menos preciso.',

    faq11Q: '¿Cómo quito KidGate del dispositivo de mi hijo?',
    faq11A:
      'Primero elimina el dispositivo desde la app del padre (abre el dispositivo en *Familia* y elige eliminar) y luego desinstala la app en el dispositivo del niño.',

    faq12Q: '¿Cómo elimino mi cuenta y mis datos?',
    faq12A:
      'En la app del padre, ve a *Ajustes → Cuenta → Eliminar cuenta*. Esto borra de forma permanente tu cuenta familiar y todos los datos (dispositivos, actividad, historial de ubicación y fotos SOS) de todos los padres e hijos. Consulta nuestra página de [Eliminación de cuenta y datos](/delete-account) para ver todas las opciones, incluida la eliminación sin tener la app instalada.',

    legalTitle: 'Legal',
    legalDeletion: 'Eliminación de cuenta y datos',
  },

  download: {
    eyebrow: 'Descargar',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 o posterior. Apple silicon e Intel.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 o posterior, 64 bits.',
    button: 'Descargar',
    warningSub:
      'Windows muestra ese aviso con cualquier app instalada fuera de su propia tienda por un desarrollador que aún no está en su lista verificada: no responde a nada encontrado en KidGate. La tarjeta de Windows de arriba explica cómo permitirlo. El paquete de Mac está firmado y notarizado por Apple y no genera ningún aviso. Descarga solo desde kidgate.app.',
    macosSteps:
      'Abre el paquete descargado y sigue el instalador. Después macOS te pide una vez que permitas la extensión del sistema de KidGate, en Ajustes del Sistema: el Filtro web no funciona hasta que lo hagas.',
    windowsSteps:
      'Cuando Windows diga que protegió tu PC, elige Más información y luego Ejecutar de todas formas.',
  },
  about: {
    eyebrow: 'Sobre nosotros',
    title: 'Control parental en el que la familia',
    titleAccent: 'sí puede ponerse de acuerdo.',
    lede: 'KidGate lo hace un equipo pequeño e independiente dedicado a un solo producto. Nuestra postura de fondo es que una madre o un padre pueda fiarse de lo que dice la app, incluso cuando dice que no puede ayudar.',
    storyEyebrow: 'Por qué existe KidGate',
    storyTitle: 'El tiempo de pantalla se convirtió en la discusión de cada casa',
    storyP1:
      'Casi todas las familias viven la misma tarde: un temporizador que nadie acordó, un móvil retirado y un hijo convencido de que las reglas cambiaron a sus espaldas. Las herramientas que debían arreglarlo casi siempre lo empeoraron: por un lado un bloqueo sin explicación, por otro un panel que se lee como vigilancia.',
    storyP2:
      'Así que construimos la versión que queríamos en casa. Se configuran una vez el Límite diario, las Horas bloqueadas, el Bloqueo de apps y el Filtrado web, y el dispositivo los respeta. El niño ve los mismos números que ven sus padres, puede pedir más tiempo y siempre puede avisarles con SOS. KidGate no finge no estar ahí.',
    storyP3:
      'Funciona en iPhone, Android, Mac y Windows, con una extensión para Chrome y un panel que se abre en cualquier navegador. Una familia, un plan, todos los dispositivos.',
    valuesEyebrow: 'En qué creemos',
    valuesTitle: 'Cuatro reglas que no rompemos',
    valuesSub:
      'Las preguntas que más nos hacen, respondidas antes de que tengas que hacerlas.',
    value1Title: 'Un niño no es un sospechoso',
    value1Text:
      'Las reglas se ven en el dispositivo al que se aplican. El niño ve qué está activo y cuánto tiempo le queda, puede pedir más y puede lanzar un SOS en cualquier momento. Un control que necesita ser secreto no es un control del que la familia pueda hablar.',
    value2Title: 'Los datos de tu familia no están en venta',
    value2Text:
      'Nunca hay anuncios. Nada sobre un niño se usa para publicidad ni se vende a terceros. Puedes borrar la cuenta familiar y todo lo que contiene cuando quieras, desde la app o desde este sitio.',
    value3Title: 'Decimos lo que no podemos hacer',
    value3Text:
      'Cada plataforma limita lo que una app puede imponer. Donde KidGate solo puede hacer lo posible —cerrar una app bloqueada en un ordenador en lugar de impedir que se abra— la pantalla lo dice, en vez de mostrar un tick verde.',
    value4Title: 'Una familia, un plan',
    value4Text:
      'Una sola suscripción Premium cubre a todos los padres y todos los dispositivos de los hijos. El Límite diario, las Horas bloqueadas, las Apps bloqueadas y el Filtro web siguen funcionando gratis en un dispositivo infantil, así que las reglas de seguridad nunca quedan detrás del muro de pago.',
    makeEyebrow: 'Qué hacemos',
    makeTitle: 'Un solo KidGate, esté donde esté la pantalla',
    makeSub:
      'Las mismas reglas, escritas una vez, aplicadas con lo que permita cada plataforma.',
    make1Title: 'iPhone y iPad',
    make1Text:
      'Límites diarios, Horas bloqueadas y bloqueo de apps a través del propio marco Screen Time de Apple.',
    make2Title: 'Android',
    make2Text:
      'Límites, bloqueo de apps, bloqueo a pantalla completa y Filtrado web, más un aviso cuando aparece una app nueva.',
    make3Title: 'macOS',
    make3Text:
      'El agente de escritorio en un Mac: el mismo horario y los mismos límites, y un día que los padres pueden leer de verdad.',
    make4Title: 'Windows',
    make4Text:
      'El mismo agente en un PC, con un servicio en segundo plano que vuelve a arrancarlo si se cierra o se detiene.',
    make5Soon: 'Previsto',
    make5Title: 'Android TV',
    make5Text:
      'La pantalla del salón, tratada como un dispositivo compartido de la familia y no de un solo hijo: los mismos límites y el mismo horario que en los móviles. Esta versión ya ha funcionado en hardware real y espera su publicación en la tienda.',
    make6Title: 'Chrome',
    make6Text:
      'Una extensión de navegador que lleva el mismo Filtrado web dentro de Chrome, tanto en un ordenador que ya tiene KidGate como en uno que no puede tenerlo. Está construida y vinculada, y espera la revisión de Chrome Web Store.',
    make7Title: 'Panel para padres',
    make7Text:
      'El navegador es la segunda pantalla de un padre. Entra desde cualquier ordenador con un código de tu móvil; no hay nada que instalar.',
    factsEyebrow: 'KidGate hoy',
    factsTitle: 'Cuatro números',
    fact1Label: 'idiomas, del árabe al vietnamita',
    fact2Label: 'plataformas, más el panel',
    fact3Label: 'anuncios, nunca',
    fact4Label: 'suscripción por familia',
    contactEyebrow: 'Habla con nosotros',
    contactTitle: 'Una persona lee cada mensaje',
    contactSub:
      'Una duda, un error, una función que tu familia necesita o una traducción que suena mal en tu idioma: escríbenos.',
    contactEmail: 'Escríbenos',
    contactSupport: 'Soporte y guías',
    contactPrivacy: 'Cómo tratamos los datos',
  },
};
