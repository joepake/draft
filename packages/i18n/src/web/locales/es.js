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
    crashTitle: 'Esta página dejó de funcionar',
    crashBody:
      'Recargar suele solucionarlo. Los ajustes de tu familia y los dispositivos de tu hijo no han cambiado.',
    crashReload: 'Recargar la página',
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
    plans: 'Planes',
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
    madeFor:
      'Hecho para familias en iPhone, Android, Mac, Windows, Android TV y Chrome.',
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
    chromeName: 'Chrome Web Store',
  },

  home: {
    heroBadge: 'Control parental, como debe ser',
    launchCountdown: 'Lanzamiento en',
    heroTitle: 'Protege a tus hijos',
    heroTitleAccent: 'sin quitarles su libertad.',
    heroLede:
      'KidGate da a los padres un control claro y tranquilo sobre el tiempo de uso, las apps y la seguridad, mientras los hijos conservan un móvil que sigue sintiéndose suyo.',
    heroCheck1: 'Tiempo de uso',
    heroCheck2: 'Apps bloqueadas',
    heroCheck3: 'Filtro web',
    heroCheck4: 'Ubicación',
    heroCheck5: 'SOS',

    phoneDailyLimit: 'Límite diario',
    phoneBlockedHours: 'Horas bloqueadas',
    phoneScheduleOn: 'Horario activo',
    phoneLocation: 'Ubicación',
    phoneCheckIn: 'Check-in correcto',

    trust1Title: 'Sin anuncios, nunca',
    trust1Text: 'Los datos de los niños nunca se usan para publicidad',
    trust2Title: 'Elimínalo cuando quieras',
    trust2Text: 'Borra tu cuenta familiar y todos los datos cuando lo pidas',
    trust3Title: 'Móvil, ordenador y tele',
    trust3Text:
      'iPhone, Android, Mac, Windows, Android TV y Chrome en una sola cuenta familiar',
    trust4Title: 'Un plan por familia',
    trust4Text: 'Todos los dispositivos de padres e hijos, una suscripción',

    featuresEyebrow: 'Funciones',
    featuresTitle: 'Todo lo que un padre necesita',
    featuresSub:
      'De los límites diarios a las alertas de emergencia: una app para el bienestar digital de toda la familia.',
    feature1Title: 'Tiempo de uso y Límite diario',
    feature1Text:
      'Fija un tope diario y Horas bloqueadas para el colegio y la hora de dormir. El dispositivo se bloquea solo cuando se acaba el tiempo.',
    feature2Title: 'Apps bloqueadas',
    feature2Text:
      'Elige qué apps no puede abrir tu hijo, con esa elección protegida por tu PIN parental, y activa el bloqueo a distancia.',
    feature3Title: 'Límites de apps',
    feature3Text:
      'En Android, Android TV y ordenadores, limita cada app por separado: «media hora de TikTok» sin tener que prohibirla del todo.',
    feature4Title: 'Filtro web e historial',
    feature4Text:
      'Bloquea los sitios para adultos, las apuestas, las autolesiones y más en todos los dispositivos; con Premium, mira también qué sitios se consultaron.',
    feature5Title: 'Ubicación y lugares',
    feature5Text:
      'Mira dónde está tu hijo hasta 10 veces al día; Premium añade la ubicación en vivo y avisos para los lugares guardados.',
    feature6Title: 'Check-in y SOS',
    feature6Text:
      'Pide a tu hijo que confirme que está bien; en una emergencia, su móvil te envía un SOS inmediato con la ubicación.',
    feature7Title: 'Alertas de protección y de apps',
    feature7Text:
      'Entérate en el momento en que se desactiva un permiso importante en el móvil de tu hijo, y aprueba las apps nuevas antes de que se abran en Android, Android TV o un ordenador.',
    feature8Title: 'Tareas con recompensa y Solicitudes de tiempo',
    feature8Text:
      'Los niños ganan minutos extra y estrellas completando tareas, o piden más tiempo; tú apruebas ambas cosas desde tu móvil.',

    feature9Title: 'Bloqueo de dispositivo',
    feature9Text:
      'Bloquea el dispositivo ahora y libéralo cuando quieras: la cena, los deberes o una norma que se saltó.',
    feature10Title: 'Informe semanal',
    feature10Text:
      'Cada lunes: tiempo de pantalla, la media diaria, lo que se bloqueó y cómo va la semana frente a la anterior.',
    feature11Title: 'Historial de YouTube y vídeos',
    feature11Text:
      'Los vídeos y los Shorts de YouTube que ha visto tu hijo en Android y en Chrome, además de los vídeos en Android TV. No está disponible en iPhone.',
    feature12Title: 'Historial de actividad',
    feature12Text:
      'Todo lo que pasó, en orden: un dispositivo desbloqueado, una solicitud respondida, una alerta enviada; el día de hoy en el plan gratuito, 30 días con Premium.',
    featurePremium: 'Premium',
    platformsTitle: 'Un solo KidGate, esté donde esté la pantalla',
    platformsSub:
      'Las mismas normas y la misma cuenta familiar en el móvil, en el ordenador y en Android TV, y el mismo Filtro web en Chrome. La app de escritorio se descarga desde esta web, no desde una tienda.',

    showcaseEyebrow: 'Panel para padres',
    showcaseTitle: 'Toda la familia en una pantalla',
    showcaseSub:
      'Tiempo de uso, intentos bloqueados, ubicación y todo lo que necesita tu atención: en tu móvil o en cualquier navegador.',
    showcaseCaption1: 'Lee los informes desde cualquier navegador',
    showcaseCaption2: 'Los cambios se aprueban desde tu móvil',

    setupEyebrow: 'Configuración',
    setupTitle: 'Listo en pocos minutos',
    setupSub: 'No hacen falta conocimientos técnicos: la app te guía en cada paso.',
    step1Title: 'Configura tu dispositivo',
    step1Text:
      'Instala KidGate, elige «Este es un dispositivo de padre o madre» e inicia sesión con Google o con tu correo, o con Apple si usas un iPhone.',
    step2Title: 'Vincula el dispositivo de tu hijo',
    step2Text:
      'Instala KidGate en el móvil de tu hijo y conéctalo escaneando un código QR. Menos de un minuto.',
    step3Title: 'Define tus reglas',
    step3Text:
      'Elige un Límite diario y Horas bloqueadas, y activa la ubicación y el bloqueo de apps desde tu propio móvil. Las apps que se bloquean se eligen una sola vez en el dispositivo de tu hijo, con tu PIN parental.',

    whyEyebrow: 'Por qué KidGate',
    whyTitle: 'Creado para la confianza, no para la vigilancia',
    whySub: 'Diseñado para que padres e hijos sigan hablando.',
    why1Title: 'Un plan, toda la familia',
    why1Text:
      'Una sola suscripción Premium cubre todos los dispositivos de padres e hijos, y solo paga el titular de la familia. El plan gratuito mantiene supervisado un dispositivo infantil.',
    why2Title: 'Pensado para la crianza compartida',
    why2Text:
      'Invita a otro padre o madre a gestionar a los mismos hijos, con el acceso que apruebe el titular. Una familia puede tener hasta 3 padres en el plan gratuito y durante la prueba, y hasta 6 con Premium.',
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
      'Android TV tiene Límite diario, Horas bloqueadas, Apps bloqueadas y Filtro web. En la tele, el bloqueo hace lo que puede —una app bloqueada vuelve a la pantalla de inicio— y desde el sofá no hay SOS ni petición de tiempo extra. La tele tampoco comparte ubicación. La mayoría de controles parentales se quedan en el móvil.',
    only2Title: 'Alertas de mensajes que no salen del móvil',
    only2Text:
      'Con Premium en Android, los mensajes se cotejan en el propio dispositivo con listas de palabras clave en hasta tres idiomas que eliges entre 14, y lo que sale del móvil es la palabra o frase detectada, nunca la conversación. Solo una cosa cambia eso, y solo si tú lo pides: activa la confirmación por IA y un mensaje entrante ambiguo se envía a Gemini de Google para que lo valore, de modo que no te despierte una palabra corriente.',
    only3Title: 'Cualquier app, no una lista de apps',
    only3Text:
      'Las alertas salen de las notificaciones de cualquier app que use tu hijo o hija, no de una lista fija de apps compatibles, y de lo que se escribe en las principales apps de chat, redes sociales y juegos, entre ellas Zalo, LINE y KakaoTalk. Solo en Android, con Premium.',
    only4Title: 'Una salida para el niño',
    only4Text:
      'Mantener SOS pulsado cinco segundos en un móvil te avisa al instante, con la ubicación; y en Android además habilita llamadas, mapas y mensajes durante cinco minutos, incluso con el móvil bloqueado. Un niño que puede pedir ayuda desde la pantalla de bloqueo no tiene motivos para pelearse con la app.',
    only5Title: 'Reglas que se cumplen sin internet',
    only5Text:
      'Las Horas bloqueadas y el Límite diario se aplican en el propio dispositivo, así que desenchufar el router no cambia nada. La tele incluso acepta tu PIN parental sin ninguna conexión.',
    only6Title: 'Reconocimiento cuando la semana lo merece',
    only6Text:
      'Con Premium, cada informe semanal reserva espacio para lo que fue bien — un límite respetado, ninguna noche hasta tarde, una tarea terminada — y solo lo dice cuando la semana se midió de verdad.',

    faqEyebrow: 'Preguntas frecuentes',
    faqTitle: 'Lo que los padres preguntan primero',
    faqSub: 'Respuestas rápidas antes de descargar.',
    faq1Q: '¿Hay una prueba gratuita?',
    faq1A:
      'Sí. La prueba de 7 días empieza cuando conectas tu primer dispositivo de padre y de hijo, e incluye todas las funciones Premium. Cuando termina, las reglas que configuraste (Límite diario, Horas bloqueadas, Apps bloqueadas, Filtro web, Bloqueo de dispositivo, Solicitudes de tiempo y Tareas con recompensa) siguen funcionando gratis en todos los dispositivos infantiles que las admiten, y el único dispositivo que elijas mantener supervisado sigue compartiendo su ubicación. Con Premium recuperas la actividad en vivo, el historial, los informes semanales y el seguimiento de ubicación.',
    faq2Q: '¿Cuántos dispositivos puedo gestionar?',
    faq2A:
      'Premium cubre hasta 25 dispositivos infantiles y 6 padres o madres, contándote a ti, y todos los dispositivos envían actividad. El plan gratuito cubre hasta 8 dispositivos infantiles y 3 padres o madres. Todos los dispositivos siguen aplicando las reglas que pusiste, pero solo el que tú eliges envía actividad; en los demás, esas reglas pueden relajarse pero no endurecerse.',
    faq3Q: '¿Puede mi hijo desinstalar o saltarse KidGate?',
    faq3A:
      'Los ajustes sensibles están detrás de tu PIN parental, y las Alertas de protección te avisan de inmediato si se desactiva un permiso clave en el dispositivo del niño.',
    faq4Q: '¿Puedo gestionarlo todo desde un ordenador?',
    faq4A:
      'Sí. El panel para padres se abre en cualquier navegador. Escanea el código que muestra con la app KidGate de tu móvil y verás la misma familia, los mismos dispositivos y los mismos ajustes, con los controles desbloqueados. También puedes iniciar sesión con tu cuenta para consultar; bloquear un dispositivo o cambiar un límite pedirá entonces tu PIN parental.',
    faq5Q: '¿Cuánto cuesta Premium?',
    faq5A:
      'Premium cuesta 4,99 US$ al mes o 39,99 US$ al año en Estados Unidos, se cobra a través del App Store o Google Play y allí se muestra en tu propia moneda. El plan De por vida, de pago único, ofrece el mismo Premium en todos los dispositivos infantiles, mientras KidGate esté disponible. El plan gratuito nunca caduca.',
    faqMore: '¿Más preguntas? Visita Soporte',

    ctaTitle: 'Empieza hoy a proteger a tu familia',
    ctaSub: 'Prueba gratuita de 7 días con acceso completo.',
    ctaNote: 'Cancela cuando quieras desde el App Store o Google Play.',
  },

  login: {
    title: 'Acceso para padres',
    sub: 'Usa la misma cuenta que creaste en la app de KidGate. Al entrar aquí verás la misma familia, dispositivos y ajustes.',
    notConfiguredTitle: 'Firebase no está configurado en este despliegue.',
    notConfiguredBody:
      'Define las variables de entorno VITE_FIREBASE_* para habilitar el acceso.',
    qrWhy:
      'Escanear con el móvil te identifica y desbloquea los controles en un solo paso. Los métodos de abajo te identifican para consultar; desbloquear los controles requiere después tu PIN parental.',
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
    step2: 'Pulsa el icono de escaneo en la pestaña *Familia*.',
    step3: 'Escanea este código y aprueba.',
    waiting: 'Esperando aprobación · caduca en {{time}}',
    signingIn: 'Aprobado. Iniciando sesión…',
    expired: 'Este código ha caducado.',
    failed: 'El inicio de sesión no se completó.',
    newCode: 'Mostrar un código nuevo',
    tryAgain: 'Reintentar',
  },

  authAction: {
    checking: 'Comprobando el enlace…',
    resetTitle: 'Elige una contraseña nueva',
    newPassword: 'Contraseña nueva',
    confirmPassword: 'Confirma la contraseña nueva',
    mismatch: 'Las contraseñas no coinciden.',
    tooShort: 'La contraseña debe tener al menos 6 caracteres.',
    save: 'Guardar contraseña',
    saving: 'Guardando…',
    resetDone: 'Contraseña cambiada',
    resetDoneBody:
      'Inicia sesión con tu contraseña nueva, aquí o en la app de KidGate.',
    verifyDone: 'Correo confirmado',
    verifyDoneBody: 'Vuelve a la app de KidGate para continuar.',
    invalid: 'Este enlace caducó o ya se usó',
    invalidBody: 'Abre KidGate y pide un enlace nuevo.',
  },
  authError: {
    generic: 'Algo salió mal. Inténtalo de nuevo.',
    invalidEmail: 'Ese correo no parece correcto.',
    userDisabled: 'Esta cuenta ha sido desactivada.',
    userNotFound: 'Ninguna cuenta de KidGate usa ese correo.',
    wrongPassword: 'El correo o la contraseña no son correctos. Inténtalo de nuevo.',
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
    partialLoadFailed:
      'Parte de esta página no se cargó, así que una lista puede parecer vacía sin estarlo.',
    noAccessTitle: 'No hay ninguna familia en esta cuenta',
    noAccess:
      'Esta cuenta no tiene acceso a ninguna familia de KidGate. Inicia sesión con la cuenta de padre que usas en la app.',
    noFamily:
      'Esta cuenta aún no tiene una familia de KidGate. Si usas KidGate en tu móvil, cierra sesión e inicia sesión aquí con la misma cuenta. Para crear una familia, configúrala en tu móvil y luego recarga esta página.',
    noFamilyStep1:
      'Instala KidGate en tu móvil, elige *Este es un dispositivo de padre o madre* e inicia sesión con esta cuenta.',
    noFamilyStep2:
      'Abre *Familia* y elige *Crear familia*, o *Unirse a una familia* si otro padre o madre te invitó.',
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
  },

  perm: {
    screenTime: 'Tiempo de uso',
    location: 'Ubicación',
    camera: 'Cámara',
    microphone: 'Micrófono',
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
    bypass: 'Apps para saltarse el control',
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
    tabApps: 'Apps',
    tabWeb: 'Web',
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
    fallbackDevice: 'Dispositivo del niño',

    statusOnline: 'En línea',
    statusOffline: 'Sin conexión',
    statusLocked: 'Bloqueado',
    statusLockSent: 'Bloqueo enviado',
    statusLockNotApplied: 'Bloqueo no aplicado',
    statusPaused: 'En pausa',

    stateAllowed: 'Permitido',
    stateForegroundOnly: 'Solo con la app abierta',
    stateDenied: 'Desactivado',
    stateNotDetermined: 'Aún no solicitado',
    stateRestricted: 'Restringido',
    stateUnavailable: 'No disponible',
    stateUnknown: 'Desconocido',

    lastActive: 'Última actividad {{when}}',
    appVersion: 'Versión de la app',
    appVersionUpdate: '{{running}} · {{latest}} disponible',
    appVersionRestart: '{{running}} · reinicia la app para terminar',
    checkIn: 'Check-in',
    sending: 'Enviando…',
    lockDevice: 'Bloquear dispositivo',
    unlock: 'Desbloquear',
    working: 'Trabajando…',
    save: 'Guardar',

    unlockTitle: 'Los cambios están bloqueados.',
    unlockBody:
      'Consultar funciona al momento. Para bloquear un dispositivo, cambiar límites o aprobar solicitudes, desbloquea este navegador con tu PIN parental, o apruébalo escaneando el código QR con la app de KidGate. Los Check-in funcionan en ambos casos.',
    unlockCta: 'Desbloquear cambios',
    unlockToChange: 'Desbloquea los cambios primero',
    refresh: 'Actualizar',
    liveOnApp: 'Abre la app para ver los datos en vivo',
    pinTitle: 'Introduce tu PIN parental',
    pinBody:
      'Los mismos seis dígitos que usas en la app. Este navegador queda desbloqueado 8 horas; aprobarlo desde la app lo mantiene con la sesión iniciada 7 días.',
    pinLabel: 'PIN parental',
    pinSubmit: 'Desbloquear',
    pinOrScan: 'O aprueba desde el móvil',
    qrSaferNote:
      'Aprobar desde el móvil es lo más seguro: hace falta el móvil vinculado en la mano, mientras que el PIN son seis dígitos que alguien de la familia puede haberte visto teclear.',
    pinWrong: 'PIN incorrecto. Intentos restantes: {{count}}.',
    pinLocked:
      'Demasiados intentos fallidos. Espera 15 minutos o aprueba este navegador desde el móvil.',
    pinNotSet:
      'Tu familia aún no tiene PIN parental. Configúralo en la app o aprueba este navegador desde el móvil.',
    unlockedToast: 'Cambios desbloqueados en este navegador.',
    close: 'Cerrar',

    noDeviceBody:
      'Abre KidGate en tu móvil, ve a *Familia* y pulsa el icono de escaneo (*Escanear código*). Escanea el código QR del dispositivo de tu hijo o escribe su código de 6 caracteres. Después pulsa *Actualizar* aquí.',
    pairStep2Title: 'Escanea el código con tu móvil',
    getKidGate: 'Descargar KidGate',
    childNoDevices:
      'Aún no hay dispositivos. Empareja uno y elige su nombre cuando la app pregunte quién lo usa.',
    childNoDevicesAssign:
      'Aún no hay dispositivos. Asigna uno abajo o empareja uno nuevo.',

    toastCheckIn: '{{name}} recibirá una solicitud de Check-in.',
    toastTimeApproved: 'Tiempo extra aprobado.',
    toastCheckInResent: 'Check-in enviado de nuevo.',

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
    attnCheckInMissed: 'Se perdió un Check-in',
    attnCheckInMissedMeta: 'Enviado {{when}} · sin respuesta',
    attnLimitReached: 'Límite diario alcanzado: dispositivo bloqueado',
    attnBatteryLow: 'Batería baja ({{level}} %)',
    attnBatteryLowMeta:
      'Las actualizaciones de ubicación pueden pararse si el móvil se apaga',
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
    appUsageEmpty: 'Aún no se ha registrado uso de apps.',
    appBlockingTitle: 'Apps bloqueadas',
    blockingLabel: 'Bloqueo',
    appsBlocked: 'Apps bloqueadas',
    categories: 'Categorías',
    perAppHint:
      'Los topes por app funcionan aparte de la lista de bloqueo: «30 minutos de TikTok» es una decisión distinta de «nada de TikTok».',
    limitsMax: 'Un dispositivo admite {{max}} apps limitadas como máximo.',
    perDay: '{{value}}/día',
    webActivityTitle: 'Actividad web',
    webActivitySub: 'Dominios más visitados, últimos 7 días',
    webActivityEmpty: 'Aún no hay actividad web.',
    inventoryEmpty: 'Este dispositivo aún no ha publicado su lista de aplicaciones.',
    inventoryFirstScan:
      'Primer análisis, así que KidGate no puede decir cuándo llegó cada una.',
    inventoryOtherLabel: 'Identificadas',
    inventoryUnknownLabel: 'Sin identificar',
    installAllow: 'Permitir',
    pendingInstallsTitle: 'Apps nuevas esperando aprobación',
    pendingInstallsSub:
      'Instaladas después de activar la aprobación y bloqueadas por el propio dispositivo',
    toastInstallAllowed: 'App permitida',
    rowInstallApprovalDesc: '{{count}} apps esperando aprobación',
    rowInstallApprovalDesc_one: '{{count}} app esperando aprobación',
    rowInstallApprovalDescIos:
      'Oculta el App Store; Apple no permite aprobar app por app',
    colDomain: 'Dominio',
    colVisits: 'Visitas',
    colBlocked: 'Bloqueadas',
    colLastSeen: 'Última vez',
    videosSub: 'Qué se vio en YouTube y la web',
    videosEmpty: 'Aún no hay vídeos.',
    colVideo: 'Vídeo',
    colChannel: 'Canal',
    colViews: 'Visualizaciones',
    filterRefusedTitle: 'Lo que rechazó el filtro',
    filterRefusedSub_one: '{{count}} consulta bloqueada, últimos 7 días',
    filterRefusedSub_other: '{{count}} consultas bloqueadas, últimos 7 días',
    filterHintIos:
      'Este iPhone o iPad solo filtra con el control de contenido para adultos de Apple. Actualiza KidGate en él y permite la VPN de KidGate para bloquear por categorías.',
    filterHintAndroid: 'Las categorías las aplica el filtro DNS del dispositivo.',

    locationTitle: 'Ubicación',
    locationUpdated: 'Actualizado {{when}}',
    locationWaiting: 'Esperando la primera actualización',
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
    sosSub: 'Señales de emergencia del dispositivo del niño',
    sosEmpty:
      'No hay alertas SOS. Probadlo juntos una vez para que los dos sepáis cómo funciona.',
    sosAcknowledged: 'confirmada',
    sosActive: 'activa',

    checkInsTitle: 'Check-ins',
    checkInsSub: 'Pide a tu hijo que confirme que está bien',
    checkInSafe: 'Confirmó estar bien',
    checkInPhotoRequested: 'se pidieron foto y ubicación',
    checkInNoReply: 'aún sin respuesta',
    checkInPhotoSkipped: 'foto omitida',
    checkInPhotoAttached: 'foto adjunta',
    checkInNoPhoto: 'no se pidió foto',
    sendCheckIn: 'Enviar un Check-in ahora',

    protectionAlertsTitle: 'Alertas de protección',
    protectionAlertsSub_one: '{{count}} evento desde la instalación',
    protectionAlertsSub_other: '{{count}} eventos desde la instalación',

    limitCardTitle: 'Límite diario',
    limitCardSub: 'Limita los minutos disponibles cada día',
    limitAria: 'Minutos del límite diario',
    limitScaleMin: '30 min',
    limitScaleMax: '8 h',
    limitHint:
      'Los minutos extra de las tareas con recompensa y de las solicitudes de tiempo aprobadas se suman encima, solo ese día.',
    limitShared: 'Compartido entre todos los dispositivos',
    limitSharedSpent: 'Hoy se han usado {{used}} de {{limit}}',
    limitSharedHint:
      'Es el día completo de este niño, no un límite de este dispositivo: cada dispositivo recibe lo que los demás no han usado. Se cambia en la app de KidGate.',
    whatsOnSub: 'Los cambios se sincronizan con el dispositivo del niño',
    rowBlockedHours: 'Horas bloqueadas',
    rowBlockedHoursDesc_one: '{{count}} franja horaria · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} franjas horarias · {{list}}',
    rowAppBlocking: 'Apps bloqueadas',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Filtro web',
    rowWebFilterDesc_one: '{{count}} categoría rechazada',
    rowWebFilterDesc_other: '{{count}} categorías rechazadas',
    rowNotSupported: 'No compatible con este dispositivo',
    rowLocation: 'Compartir ubicación',
    rowLocationDesc: 'Última actualización {{when}}',
    rowLocationNone: 'Todavía sin ubicación',
    rowSearchMonitoring: 'Supervisión de búsquedas',
    rowSafeSearchDesc:
      'Fija Google SafeSearch, Bing y DuckDuckGo en su ajuste estricto en Android, Android TV y Chrome. En Android y Chrome también fija el modo restringido de YouTube, que además oculta los comentarios y bloquea algunos vídeos normales.',

    webFilterCatsTitle: 'Categorías del filtro web',
    webFilterCatsSub: 'Tipos de contenido bloqueados',
    dnsHint:
      'Los resolutores de DNS cifrado siempre se rechazan mientras el filtro funciona: dejarlos accesibles es lo que permite a un navegador esquivar todas las demás categorías.',
    starChartTitle: 'Tabla de estrellas',
    starChartSub: 'Estrellas conseguidas esta semana, por hijo',
    starChartEmpty:
      'Añade un segundo hijo en la app para empezar la tabla de estrellas.',
    starChartStars: '{{count}} estrellas',
    rewardTasksTitle: 'Tareas con recompensa',
    rewardTasksSub: 'Gana minutos extra completando tareas',
    rewardTaskMeta: '+{{minutes}} min · {{cadence}}',
    rewardTaskStars: 'Dificultad: {{count}} de 3',
    rewardTaskWaiting: ' · esperando tu aprobación',
    approve: 'Aprobar',
    siteRequestAllow: 'Permitir',
    siteRequestDeny: 'Ahora no',
    attnSiteRequest: '{{name}} pidió abrir {{domain}}',
    timelineSub:
      'Hoy, de medianoche a medianoche. El verde es tiempo en el dispositivo.',
    timelineSubDay:
      '{{date}}, de medianoche a medianoche. El verde es tiempo en el dispositivo.',
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
    writtenAt: 'Escrito el {{when}}',
    shareImage: 'Guardar como imagen',
    sharePdf: 'Guardar como PDF',
    imageSaved: 'Imagen guardada.',
    shareFailed:
      'No se puede guardar desde este navegador. Copia el resumen en su lugar.',
    emptyBody:
      'Con Premium, cada lunes por la mañana llega un informe que cubre los siete días anteriores. También puedes crear el de esta semana desde la app de KidGate en tu teléfono.',
    loadFailed: 'No se pudieron abrir los informes. Recarga la página para reintentar.',
    retryLoad: 'Reintentar',
    existed: 'Esta semana ya tenía un informe: aquí está.',
  },

  support: {
    title: 'Soporte de KidGate',
    updated: 'Estamos aquí para ayudarte',

    contactTitle: 'Contáctanos',
    contactEmail: '**Correo:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Tiempo de respuesta:** normalmente en un día laborable',
    contactNote:
      'Al escribirnos, incluye el correo de tu cuenta de padre de KidGate y una breve descripción del problema para que podamos ayudarte más rápido.',

    startTitle: 'Primeros pasos',
    start1:
      '**1. Configura el dispositivo de padre o madre.** Instala KidGate, abre la app y elige *Este es un dispositivo de padre o madre*. Inicia sesión con Google o con tu correo (o con Apple, en un iPhone) y ponle nombre a tu familia.',
    start2:
      '**2. Define un PIN parental.** Ve a *Ajustes → Seguridad* y crea un PIN parental de 6 dígitos. Lo necesitas para cambiar ajustes sensibles y elegir apps bloqueadas en el dispositivo del niño. No lo compartas con tus hijos.',
    start3:
      '**3. Conecta el dispositivo del niño.** Instala KidGate en el dispositivo de tu hijo y ábrelo. En un teléfono o una tablet, elige *Este es un dispositivo de un niño*. En el dispositivo del padre, abre *Familia* y pulsa el icono de escaneo (*Escanear código*), luego escanea el código QR que aparece en el dispositivo del niño (o introduce el código de 6 caracteres). Si el dispositivo del niño lo pide, confirma allí la conexión; una TV se conecta sola.',
    start4:
      '**4. Concede permisos en el dispositivo del niño.** Abre la pantalla *Estado* en el dispositivo del niño y toca *Continuar configuración*: te guía por todos los permisos que KidGate necesita. En Android: Notificaciones, Acceso de uso, Mostrar sobre otras aplicaciones, Ayuda de bloqueo por Accesibilidad, Alarmas y recordatorios, Batería sin restricciones, la conexión VPN sobre la que funciona el Filtro web, Impedir desinstalación y, para las Alertas de mensajes, el acceso a las notificaciones; en iOS: *Permitir uso de apps y sitios web* (Tiempo de uso) y, para el Filtro web, *Permitir* cuando iOS pida añadir configuraciones de VPN. Los controles no funcionarán del todo hasta que estén activados.',
    start5:
      '**5. Configura los controles.** Desde el dispositivo del padre, abre la tarjeta del dispositivo del niño y define el límite diario, las horas bloqueadas, las apps bloqueadas, el filtro web y las funciones de ubicación.',
    startNote:
      'La app también incluye una guía paso a paso: *Ajustes → Guía del usuario*, con detalles sobre vinculación de dispositivos, permisos, controles diarios y funciones de seguridad.',

    faqTitle: 'Preguntas frecuentes',

    faq1Q: '¿Puedo gestionar mi familia desde un ordenador?',
    faq1A:
      'Sí. Abre el [panel web](/dashboard) y escanea el código que muestra con la app KidGate de tu móvil, o inicia sesión con la misma cuenta que usas en la app: Google, Apple o tu correo y contraseña. Muestra la misma familia, dispositivos, informes y ajustes. Si has iniciado sesión con una cuenta, cambiar un control pide tu PIN parental. Las cuentas y la vinculación de dispositivos se siguen haciendo en la app móvil.',

    faq2Q: '¿Cómo vinculo los dispositivos del padre y del hijo?',
    faq2A:
      'En el dispositivo del niño, abre KidGate. En un teléfono o una tablet, elige *Este es un dispositivo de un niño*. Aparecerán un código QR y un código de 6 caracteres. En el dispositivo del padre, abre *Familia* y pulsa el icono de escaneo (*Escanear código*), luego escanea el código QR (recomendado) o introduce el código a mano. Si el dispositivo del niño lo pide, confirma allí el nombre del padre o la madre; una TV se conecta sola. Los códigos caducan: si la vinculación falla, toca *Nuevo código* en el dispositivo del niño e inténtalo otra vez.',

    faq3Q: '¿Pueden dos padres gestionar la misma familia?',
    faq3A:
      'Sí. En el dispositivo del titular de la familia, abre *Familia → + → Invitar a un padre* y comparte el código QR o el código de invitación. El otro padre instala KidGate, inicia sesión como padre, abre *Familia* y pulsa el icono de escaneo (*Escanear código*), luego escanea el código QR o escribe allí el código de invitación. El titular aprueba después la solicitud. Una familia puede tener hasta 3 padres en el plan gratuito y durante la prueba, y hasta 6 con Premium. Una suscripción cubre a toda la familia; solo paga el titular.',

    faq4Q: '¿Cómo funciona la prueba gratuita?',
    faq4A:
      'La prueba de 7 días empieza cuando conectas tu primer dispositivo de padre y de hijo, y da acceso completo a todas las funciones. Quitar un dispositivo infantil no reinicia la prueba. Cuando termina, todas las reglas siguen funcionando gratis y un dispositivo infantil que tú elijas sigue enviando informes; Premium recupera la actividad en vivo, el historial, los informes semanales y los informes de todos los dispositivos.',

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
      'En Android, el bloqueo necesita *Mostrar sobre otras aplicaciones* y el asistente de *Accesibilidad* activados, además de batería sin restricciones. En Xiaomi, Samsung, Oppo, Vivo y dispositivos similares, permite también el inicio automático y quita KidGate de cualquier lista de «apps en reposo» (mira *Estado → Permitir el inicio automático* en el dispositivo del niño). En iOS, el bloqueo depende de la autorización de Tiempo de uso. Si un permiso se desactiva más tarde, recibirás una alerta de protección en el dispositivo del padre.',

    faq9Q: '¿Cómo bloqueo apps concretas?',
    faq9A:
      'La selección de apps se hace en el dispositivo del niño: abre *KidGate → Ajustes*, toca *Desbloquear con el PIN parental*, abre *Apps bloqueadas*, elige las apps y guarda. Después, en el dispositivo del padre, abre la pantalla *Apps bloqueadas* de ese dispositivo y activa *Activar el bloqueo de apps*. En iOS, Apple puede ocultar los nombres exactos de las apps al dispositivo del padre: es una limitación de la plataforma.',

    faq10Q: '¿Por qué no se actualiza la ubicación de mi hijo?',
    faq10A:
      'La ubicación debe estar permitida para KidGate en el dispositivo del niño, y el dispositivo necesita conexión de red. Abre la pantalla *Ubicación* del dispositivo desde el móvil del padre y toca *Actualizar ubicación*. Los modos de ahorro de batería pueden retrasar las actualizaciones, y el GPS en interiores puede ser menos preciso.',

    faq11Q: '¿Cómo quito KidGate del dispositivo de mi hijo?',
    faq11A:
      'Primero elimina el dispositivo desde la app del padre (abre el dispositivo en *Familia* y elige eliminar) y luego desinstala la app en el dispositivo del niño.',

    faq12Q: '¿Cómo elimino mi cuenta y mis datos?',
    faq12A:
      'En la app del padre, ve a *Ajustes → Cuenta → Eliminar cuenta*. Tras un periodo de espera de 14 días, durante el cual puedes cancelarlo, esto borra de forma permanente tu cuenta familiar y todos los datos (dispositivos, actividad, historial de ubicación y fotos SOS) de todos los padres e hijos. Consulta nuestra página de [Eliminación de cuenta y datos](/delete-account) para ver todas las opciones, incluida la eliminación sin tener la app instalada.',

    legalTitle: 'Legal',
    legalDeletion: 'Eliminación de cuenta y datos',
  },

  deleteAccount: {
    title: 'Eliminación de la cuenta y de los datos',
    updated: 'Última actualización: 18 de septiembre de 2026',
    intro:
      'Esta página explica cómo eliminar tu cuenta de KidGate y los datos asociados a ella. Puedes solicitar la eliminación en cualquier momento, y no necesitas tener la app instalada para hacerlo.',
    option1Title: 'Opción 1: elimina tu cuenta en la app',
    option1Step1: 'Abre la app de KidGate e inicia sesión.',
    option1Step2: 'Ve a *Ajustes → Cuenta → Eliminar cuenta*.',
    option1Step3: 'Confirma la eliminación.',
    option2Title: 'Opción 2: solicita la eliminación por correo electrónico',
    option2Step1:
      'Envía un correo a [support@kidgate.app](mailto:support@kidgate.app?subject=Account%20Deletion%20Request) con el asunto «Account Deletion Request».',
    option2Step2:
      'Envía la solicitud desde la dirección de correo asociada a tu cuenta de KidGate para que podamos verificar tu identidad.',
    option2Step3:
      'Confirmaremos tu solicitud y programaremos la eliminación. Queda en espera durante 14 días, en los que puedes cancelarla; pasado ese plazo se ejecuta y no se puede deshacer.',
    deletedTitle: 'Qué se elimina',
    deletedIntro: 'Al eliminar tu cuenta se borran de forma permanente:',
    deleted1:
      'La información de tu cuenta de padre o madre (nombre, dirección de correo electrónico).',
    deleted2: 'Todos los perfiles de niño que creaste.',
    deleted3:
      'Todos los datos de actividad recopilados de los dispositivos gestionados, incluidos el uso de apps, el historial de tiempo de uso, la actividad de navegación, el historial de ubicación y las fotos de Check-in y SOS.',
    deleted4: 'Tus ajustes y preferencias de control parental.',
    deleted5:
      'Las solicitudes de soporte que enviaste, con las capturas de pantalla adjuntas.',
    deleted6:
      'Tu propio acceso (inicio de sesión), de modo que la cuenta no se pueda volver a usar.',
    retentionTitle: 'Plazos de conservación',
    retention1:
      'Los datos se eliminan cuando termina el periodo de espera de **14 días** de una solicitud verificada. La eliminación es permanente y después no es posible exportar nada.',
    retention2:
      'Se conserva durante **12 meses** un registro de que la eliminación se solicitó y se completó —un hash de tu dirección de correo y las fechas, nada más— para poder responder si se cuestiona una eliminación.',
    retention3:
      'Podemos conservar un conjunto mínimo de registros cuando la ley lo exija (por ejemplo, registros de transacciones con fines fiscales), solo durante el tiempo que la ley exija.',
    partialTitle: 'Eliminación parcial',
    partial:
      'Puedes quitar a un niño o un dispositivo en la app, lo que detiene la recopilación de datos de él. El historial ya recopilado caduca según el calendario de la Política de privacidad (30 días para el historial de uso, web y ubicación y para el registro de actividad; 90 días para SOS, Check-in y Solicitudes de tiempo); para que se elimine antes, escribe a [support@kidgate.app](mailto:support@kidgate.app).',
    moreInfo:
      'Para más detalles sobre cómo tratamos tus datos, consulta nuestra [Política de privacidad](/privacy-policy).',
  },

  download: {
    eyebrow: 'Descargar',
    qrScan: 'Escanea con la cámara del móvil para descargar la app',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 o posterior, en un Mac con Apple silicon.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 o posterior, 64 bits.',
    button: 'Descargar',
    warningSub:
      'Windows muestra un aviso de SmartScreen con cualquier app instalada fuera de su propia tienda por un desarrollador que aún no está en su lista verificada: no responde a nada encontrado en KidGate. La tarjeta de Windows de arriba explica cómo permitirlo. El paquete de Mac está firmado con un Apple Developer ID y notarizado por Apple, así que no genera ningún aviso. Descarga solo desde kidgate.app.',
    macosSteps:
      'Abre el paquete descargado y sigue el instalador. Después macOS te pide una vez que permitas la extensión del sistema de KidGate: abre los ajustes que indica ese mensaje y permítela allí. El Filtro web no funciona hasta que lo hagas. Una vez instalado, KidGate sigue funcionando desde su icono en la barra de menús; haz clic en el icono para abrir su ventana.',
    windowsSteps:
      'Es posible que tu navegador te avise primero de que el archivo no se descarga con frecuencia: elige conservarlo. Después, cuando Windows diga que protegió tu PC, elige Más información y luego Ejecutar de todas formas. Una vez instalado, KidGate sigue funcionando desde su icono en el área de notificación; haz clic en el icono para abrir su ventana.',
  },
  about: {
    eyebrow: 'Sobre nosotros',
    title: 'Ayudar a los niños a usar la tecnología con más seguridad,',
    titleAccent: 'y a las familias a preocuparse un poco menos.',
    lede: 'El móvil, el ordenador y la tele ya forman parte de la vida de un niño. Eso no tiene por qué ser malo: lo que importa es cómo los usa, cuánto tiempo y si está protegido de contenidos que no son para él. KidGate ayuda a los padres a poner los límites que de verdad importan, de forma sencilla, clara y justa, para padres e hijos por igual.',
    storyEyebrow: 'Por qué existe KidGate',
    storyTitle: 'Todo empieza con un momento que cualquier familia conoce',
    storyP1:
      '«¡Solo cinco minutos más!». Y los cinco minutos pasan. Mamá o papá vuelve a pedirlo, el niño se enfada, y algo pequeño acaba en una discusión que nadie quería. No creemos que todas las familias necesiten reglas más estrictas. A veces lo que hace falta son reglas claras, que todos entiendan y en las que todos puedan confiar.',
    storyP2:
      'Con KidGate, los padres configuran una vez el Límite diario, las Horas bloqueadas, las Apps bloqueadas y el Filtro web, y a partir de ahí las reglas funcionan solas, hasta donde lo permite cada dispositivo. Los niños también ven sus límites, saben cuándo se va a bloquear el dispositivo y pueden pedir más tiempo cuando lo necesitan.',
    storyP3:
      'Los padres no tienen que recordárselo cada día. Los niños no tienen que adivinar si hoy han cambiado las reglas. Menos discusiones, más tiempo juntos.',
    valuesEyebrow: 'Lo que nos importa',
    valuesTitle: 'Aquello a lo que nunca renunciamos',
    valuesSub: 'Cada función de KidGate nace de estas cuatro ideas.',
    value1Title: 'Claros con padres e hijos por igual',
    value1Text:
      'Los niños tienen derecho a conocer las reglas de su propio dispositivo. Los padres tienen las herramientas para protegerlos; los niños pueden entender sus límites, pedir más tiempo y avisar a sus padres con SOS en los dispositivos compatibles. Queremos que la tecnología ayude a una familia a entenderse, no a distanciarse.',
    value2Title: 'Respetamos la privacidad de tu familia',
    value2Text:
      'KidGate no muestra anuncios y nunca vende los datos de tu hijo a nadie. Puedes pedirnos que borremos tu cuenta familiar y los datos asociados, desde la propia app o por correo, como explica este sitio, y se borran 14 días después según el proceso que publicamos.',
    value3Title: 'Sinceros sobre lo que KidGate puede hacer',
    value3Text:
      'Cada dispositivo tiene sus propios límites, así que algunas funciones se comportan de forma distinta en iPhone, Android, Mac, Windows y la tele. Lo decimos en la pantalla, en lugar de prometer que todo funciona igual en todas partes. Proteger a una familia requiere buenas herramientas e información en la que se pueda confiar.',
    value4Title: 'Una familia, un plan Premium',
    value4Text:
      'Una sola suscripción Premium cubre a todos los padres y todos los dispositivos de los hijos: no hay que comprar nada dispositivo por dispositivo. Sin ella, el Límite diario, las Horas bloqueadas, las Apps bloqueadas, el Bloqueo de dispositivo y el Filtro web siguen funcionando en los dispositivos compatibles, y SOS nunca queda detrás del muro de pago, porque las herramientas de seguridad básicas siempre deben estar al alcance.',
    makeEyebrow: 'Qué hacemos',
    makeTitle: 'Una app, muchos dispositivos',
    makeSub:
      'Los niños usan el móvil cuando salen, el ordenador para el cole y la tele para descansar, así que cuidarlos no debería quedarse en un solo dispositivo. Cada plataforma tiene sus puntos fuertes, pero el objetivo es el mismo: más fácil para los padres, más claro para los niños.',
    make1Title: 'iPhone y iPad',
    make1Text:
      'Límite diario, Horas bloqueadas y Apps bloqueadas sobre Tiempo de uso, la herramienta de Apple, además del Filtro web directamente en el dispositivo.',
    make2Title: 'Android',
    make2Text:
      'Límites, Apps bloqueadas, bloqueo de pantalla y Filtro web, además de un aviso cuando tu hijo instala una app nueva.',
    make3Title: 'macOS',
    make3Text:
      'El mismo horario y los mismos límites que en los móviles, además de un resumen diario que los padres pueden leer de un vistazo.',
    make4Title: 'Windows',
    make4Text:
      'Las mismas reglas en un PC, y KidGate vuelve a arrancar solo si alguien lo cierra o lo detiene.',
    make5Title: 'Android TV',
    make5Text:
      'La pantalla que comparte toda la familia en el salón, con los mismos límites y el mismo horario que los móviles. La tele no comparte ubicación ni tiene SOS.',
    make6Title: 'Chrome',
    make6Text:
      'La extensión de Chrome lleva el Filtro web al navegador, incluso en un ordenador que no puede tener KidGate. Si activas esas opciones, también registra los vídeos de YouTube que ha visto tu hijo, señala las búsquedas preocupantes y te dice qué otras extensiones hay instaladas. No mide el tiempo de uso ni bloquea apps.',
    make7Title: 'Panel para padres',
    make7Text:
      'Cuida de toda la familia desde el navegador de cualquier ordenador. Entra escaneando un código con tu móvil, sin instalar nada.',
    factsEyebrow: 'KidGate hoy',
    factsTitle: 'Cuatro números',
    fact1Label: 'idiomas, para que cada familia lo use en el suyo',
    fact2Label: 'plataformas, más el panel web',
    fact3Label: 'anuncios en KidGate',
    fact4Label: 'plan Premium para toda la familia',
    contactEyebrow: 'Te escuchamos',
    contactTitle: 'Cada mensaje lo lee una persona',
    contactSub:
      'Algo que no funciona como esperabas, una función que tu familia necesita o una traducción que no suena natural en tu idioma: escríbenos. Cada mensaje nos ayuda a que KidGate sea más útil para las familias que lo usan cada día.',
    contactEmail: 'Escríbenos',
    contactSupport: 'Soporte y guías',
    contactPrivacy: 'Cómo tratamos los datos',
  },
  promo: {
    intro: 'Todo el día de tu hijo, con total tranquilidad.',
    school: 'Empieza la clase. El móvil se bloquea solo.',
    apps: 'Las apps que bloqueas no se abren.',
    arrive: 'Llega a casa de la abuela y recibes un aviso.',
    checkIn: 'Le preguntas qué tal. Con un toque, te confirma que está bien.',
    sos: 'Si algo va mal, un SOS te muestra dónde está.',
    limit: 'Se acabó el tiempo de juego. El móvil se bloquea solo.',
    lockNow: '¡A cenar! Bloquea su móvil desde el tuyo.',
    web: 'Bloquea los sitios dañinos en todos los dispositivos.',
    tv: 'La tele del salón sigue las mismas normas de casa.',
    reward: 'Deberes hechos: 15 minutos extra ganados.',
    bedtime: 'A la hora de dormir, el móvil, el ordenador y la tele también descansan.',
    kid: 'Niño',
    parent: 'Padres',
    arrivedNotice: 'Lucía ha llegado a casa de la abuela',
    checkAsk: '¿Estás bien?',
    checkReply: 'Estoy bien',
    sosNotice: 'Lucía ha enviado un SOS',
    timeUp: 'Se acabó el tiempo de juego de hoy',
    lockButton: 'Bloquear ahora',
    task: 'Deberes hechos',
    granted: '+15 min',
    youtubeTitle: 'KidGate — Control parental para móvil, ordenador y tele',
    youtubeDescription:
      'Un día cualquiera con KidGate, desde que empieza el colegio hasta la hora de dormir.',
  },
  setup: {
    parentTitle: 'Configura tu móvil',
    parentSub: 'Es el primer paso. Solo lleva unos minutos.',
    install: 'Busca «KidGate» en el App Store o Google Play e instálala.',
    installSub: 'iPhone, iPad o móvil Android.',
    role: 'Abre KidGate y elige «{{parent}}».',
    signIn: 'Toca «{{signIn}}» e inicia sesión con Apple, Google o tu correo.',
    signInSub: 'Con Apple, solo tienes que confirmar con Face ID.',
    family: 'Ve a «{{tab}}», toca «{{create}}» y ponle nombre a tu familia.',
    done: 'Tu parte ya está hecha.',
    parentYoutubeTitle: 'Cómo configurar KidGate en tu móvil',
    parentYoutubeDescription:
      'Instala KidGate, inicia sesión y crea tu familia: el primer paso antes de conectar los dispositivos de tu hijo.',
    pairSub: 'Conéctalo a tu móvil y después activa su protección.',
    parentPhone: 'Tu móvil',
    openSub: 'Aparece un código QR. Deja esa pantalla abierta.',
    scanSub: '¿No puedes escanearlo? Elige «{{manual}}».',
    protect: 'Toca «{{turnOn}}» para empezar con unas reglas seguras.',
    protectSub: 'Puedes ajustar cada una más adelante.',
    tapAllow: 'Toca «{{allow}}».',
    extras: 'Por último, permite el acceso a la cámara y al micrófono.',
    extrasSub: 'Opcional: así tu hijo puede añadir una foto o un sonido a un SOS.',
    iosTitle: 'Configura el iPhone o iPad de tu hijo',
    childPhone: 'iPhone del niño',
    iosOpen: 'En el iPhone de tu hijo, abre KidGate y elige «{{child}}».',
    iosScan: 'En tu móvil, toca «{{add}}» y escanea el código QR.',
    iosConfirm: 'En el iPhone de tu hijo, comprueba que eres tú y toca «{{yes}}».',
    iosPin: 'Crea tu «{{pin}}» (6 dígitos).',
    iosPinSub: 'El iPhone de tu hijo lo pide antes de cambiar las apps bloqueadas.',
    iosAssign: 'Elige quién usa este iPhone o añade a tu hijo por su nombre.',
    iosScreenTime:
      'En el iPhone de tu hijo, toca «{{allow}}» y da acceso a Tiempo de uso.',
    iosScreenTimeSub: 'Apple pide el Face ID o el código de este iPhone.',
    iosNotify: 'Toca «{{settings}}», activa {{notifications}} y vuelve a KidGate.',
    iosRefresh: 'Toca «{{settings}}» y activa «{{refresh}}».',
    iosRefreshSub: 'Opcional: permite que KidGate siga funcionando en segundo plano.',
    iosBlocked: 'Toca «{{strengthen}}» y después configura «{{blocked}}».',
    iosBlockedSub: 'Tocas «{{unlock}}», introduces tu PIN y eliges las apps.',
    iosDone: 'El iPhone de tu hijo está protegido.',
    iosYoutubeTitle: 'Cómo configurar KidGate en el iPhone o iPad de tu hijo',
    iosYoutubeDescription:
      'Conecta el iPhone o iPad de tu hijo a tu móvil con un código QR y después activa Tiempo de uso y los demás permisos que necesita KidGate, paso a paso.',
    androidTitle: 'Configura el móvil o la tablet Android de tu hijo',
    childAndroid: 'Android del niño',
    androidOpen: 'En el móvil de tu hijo, abre KidGate y elige «{{child}}».',
    androidScan: 'En tu móvil, escanea el código QR con KidGate.',
    androidConfirm: 'En el móvil de tu hijo, comprueba que eres tú y toca «{{yes}}».',
    androidAssign: 'Elige quién usa este móvil o añade a tu hijo por su nombre.',
    androidUsage:
      'En el móvil de tu hijo, toca «{{open}}» y activa el Acceso de uso para KidGate.',
    androidBack: 'Después, desliza hacia atrás para volver a KidGate.',
    androidAccessibility: 'Toca «{{agree}}» y activa KidGate en Accesibilidad.',
    androidOverlay: 'Toca «{{settings}}» y permite «{{overlay}}» para KidGate.',
    androidNotify: 'Toca «{{allow}}» y después activa las notificaciones.',
    androidWebFilter: 'Toca «{{enable}}» y acepta la conexión.',
    androidWebFilterSub: 'El {{filter}} de KidGate funciona en el móvil como una VPN.',
    androidBattery:
      'Toca «{{settings}}» y deja que KidGate funcione siempre en segundo plano.',
    androidStrengthen: 'Toca «{{strengthen}}» y activa «{{uninstall}}».',
    androidMessages:
      'Para «{{alerts}}», toca «{{grant}}» y activa el acceso para KidGate.',
    androidMessagesSub:
      'KidGate revisa los mensajes entrantes en busca de palabras de aviso, en el propio móvil.',
    androidDone: 'El móvil Android de tu hijo está protegido.',
    androidYoutubeTitle:
      'Cómo configurar KidGate en el móvil o la tablet Android de tu hijo',
    androidYoutubeDescription:
      'Conecta el móvil o la tablet Android de tu hijo a tu móvil con un código QR y después activa los permisos que necesita KidGate, paso a paso.',
    macTitle: 'Configura el Mac de tu hijo',
    childMac: 'Mac del niño',
    macDownload: 'En el Mac de tu hijo, descarga KidGate para macOS desde kidgate.app.',
    macInstall: 'Abre el instalador descargado y sigue sus pasos.',
    macPasswordSub: 'macOS pide la contraseña de este Mac.',
    macOpen: 'KidGate se abre y muestra un código QR.',
    macOpenSub: 'Deja esa ventana abierta.',
    macScan:
      'En tu móvil, toca el botón de escanear de KidGate y escanea el código QR.',
    macConfirm: 'En el Mac, comprueba que eres tú y haz clic en «{{yes}}».',
    macAssign: 'Elige quién usa este Mac o añade a tu hijo por su nombre.',
    macFilter:
      'En el Mac, haz clic en «{{open}}» y activa KidGate en Extensiones de red.',
    macAllow:
      'Cuando macOS pida permiso para filtrar el contenido de la red, haz clic en «Permitir».',
    macAllowSub: 'Entonces se activa el {{filter}} de KidGate.',
    macDone: 'El Mac de tu hijo está protegido.',
    macYoutubeTitle: 'Cómo configurar KidGate en el Mac de tu hijo',
    macYoutubeDescription:
      'Instala KidGate en el Mac de tu hijo, conéctalo a tu móvil con un código QR y después activa su Filtro web en Ajustes del Sistema.',
    windowsTitle: 'Configura el PC con Windows de tu hijo',
    childWindows: 'PC del niño',
    windowsDownload:
      'En el PC de tu hijo, descarga KidGate para Windows desde kidgate.app.',
    windowsSmartScreen:
      'Si Windows dice que protegió tu PC, elige Más información y luego Ejecutar de todas formas.',
    windowsInstall:
      'Aprueba la solicitud de permisos de administrador y sigue los pasos del instalador.',
    windowsInstallSub:
      'En una cuenta estándar, Windows pide la contraseña de un administrador.',
    windowsConfirm: 'En el PC, comprueba que eres tú y haz clic en «{{yes}}».',
    windowsAssign: 'Elige quién usa este PC o añade a tu hijo por su nombre.',
    windowsSetup: 'En el PC, haz clic en «{{allow}}» para {{location}}.',
    windowsSetupSub: 'El {{filter}} de KidGate se activa solo en unos segundos.',
    windowsDone: 'El PC de tu hijo está protegido.',
    windowsYoutubeTitle: 'Cómo configurar KidGate en el PC con Windows de tu hijo',
    windowsYoutubeDescription:
      'Instala KidGate en el PC con Windows de tu hijo y conéctalo a tu móvil con un código QR. Después, su Filtro web se activa solo.',
    chromeTitle: 'Configura KidGate en Chrome',
    childChrome: 'Ordenador del niño',
    chromeSite:
      'En Chrome, en el ordenador de tu hijo, abre kidgate.app y elige Chrome.',
    chromeStore:
      'En Chrome Web Store, haz clic en «Añadir a Chrome» y luego en «Añadir extensión».',
    chromeOpen:
      'Haz clic en el icono de KidGate en la barra de herramientas de Chrome. La ventana emergente muestra un código QR.',
    chromeOpenSub: 'Mantenla abierta durante la vinculación.',
    chromeConfirm: 'En KidGate, comprueba que eres tú y haz clic en «{{yes}}».',
    chromeAssign: 'Elige qué hijo usa Chrome en este ordenador.',
    chromeDone: 'Chrome en el ordenador de tu hijo está protegido.',
    chromeYoutubeTitle: 'Cómo configurar KidGate en Chrome, en el ordenador de tu hijo',
    chromeYoutubeDescription:
      'Añade la extensión de KidGate a Chrome en el ordenador de tu hijo y conéctala a tu móvil con un código QR. Después, filtra la web en Chrome.',
    dashboardComputer: 'Tu ordenador',
    dashboardSite: 'En tu ordenador, abre kidgate.app y haz clic en «Panel».',
    dashboardDone: 'Has iniciado sesión en el panel web.',
    tvTitle: 'Configura el Android TV de tu hijo',
    tvAssign: 'Elige quién usa este televisor o añade a tu hijo por su nombre.',
    tvDone: 'El Android TV de tu hijo está protegido.',
    tvYoutubeTitle: 'Cómo configurar KidGate en el Android TV de tu hijo',
    outroTitle: 'Todo listo.',
    outroSub: 'Esperamos que KidGate te facilite la gestión de tu familia.',
    findDeviceTitle: 'Encuentra el dispositivo de tu hijo',
    allYoutubeTitle:
      'Cómo configurar KidGate en tu móvil y en los dispositivos de tu hijo',
    allYoutubeDescription:
      'Toda la configuración en un solo vídeo: primero tu móvil, luego cada dispositivo de tu hijo (iPhone o iPad, móvil o tablet Android, Mac, PC con Windows, Android TV, Chrome) y, por último, el panel web. Elige tu dispositivo en la lista de abajo.',
    // `guide-all`: every how-to in one video (operator, 2026-10-14).
    guideAllYoutubeTitle: 'Cómo usar KidGate: todas las funciones, paso a paso',
    guideAllYoutubeDescription:
      'Todas las funciones de KidGate en un solo vídeo, paso a paso, en el iPhone de un padre o una madre y en el móvil Android de un hijo. Elige en la lista de abajo la función que necesitas.',
    // `guide-parent-devices`' title card: the app's own wording for the device.
    removeParentDeviceTitle: 'Eliminar el dispositivo de un padre o madre',
  },
};
