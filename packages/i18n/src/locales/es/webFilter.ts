export const webFilter = {
  title: 'Filtro web',
  fallbackDeviceName: 'Dispositivo del niño',
  appliesToAll: 'Se aplica a los {{count}} dispositivos de {{name}}',
  appliesToAll_one: 'Se aplica al dispositivo de {{name}}',
  coverageLine: 'Activo en {{enforcing}} de {{total}} dispositivos',
  mergeNotice:
    'Los dispositivos de {{name}} tenían ajustes de filtro web distintos. Al guardar aquí se aplica un solo conjunto a todos, y en cada ajuste se conserva la opción más estricta.',
  mergeLoosened: 'Ahora permitido en todos los dispositivos: {{domains}}',
  toastUpdateFailed: 'No se pudo actualizar el Filtro web. Inténtalo de nuevo.',
  heroTitle: 'Filtrar sitios web inapropiados',
  heroSubtitleIos:
    'Usa una conexión privada en el iPhone o iPad del niño para bloquear sitios inapropiados conocidos en navegadores y muchas apps, junto con el propio filtro de contenido adulto de Apple.',
  heroSubtitleAndroid:
    'Usa una VPN DNS local en el dispositivo Android del niño para bloquear dominios inapropiados conocidos en navegadores y muchas apps.',
  heroSubtitleMacos:
    'Ejecuta el filtro de contenido de KidGate en el Mac del niño para bloquear sitios inapropiados conocidos en navegadores y muchas apps.',
  toggleHintIos:
    'El niño debe permitir la VPN de KidGate una vez e introducir el código del dispositivo. Mantén la VPN instalada para que el filtro funcione.',
  toggleHintAndroid:
    'El niño debe aprobar la conexión VPN de KidGate una vez. Mantén la VPN activa para que el filtro funcione.',
  toggleHintMacos:
    'El niño debe aprobar la extensión de filtro de KidGate una vez en Ajustes del sistema. Mantenla aprobada para que el filtro funcione.',
  toggleAccessibilityLabel: 'Activar Filtro web',
  safeSearchSectionTitle: 'Búsqueda segura y YouTube',
  safeSearchSectionSubtitle:
    'Fuerza resultados seguros en Google, Bing y DuckDuckGo y fija YouTube en el modo restringido. Requiere el Filtro web activado.',
  safeSearchLabel: 'Forzar SafeSearch',
  safeSearchHint:
    'Fija Google SafeSearch, el modo restringido de YouTube, Bing y DuckDuckGo en su ajuste estricto. Android, Android TV y Chrome.',
  safeSearchStrictNote:
    'YouTube funciona en su nivel más estricto: los comentarios se ocultan y algunos vídeos normales también se bloquean. Un niño no puede desactivarlo desde su cuenta.',
  infoTitle: 'Cómo funciona',
  infoLine1Ios:
    'KidGate mantiene una conexión privada en el dispositivo que comprueba qué sitios se consultan y bloquea los de tus categorías.',
  infoLine2Ios:
    'El filtro de contenido adulto de Apple sigue activo en Safari y en los navegadores integrados en las apps como segunda capa de protección.',
  infoLine3Ios:
    'Aparece un icono de VPN mientras el filtro funciona. Si se desactiva la VPN en Ajustes, vuelve a activarse en unos segundos; si se elimina, el filtro se detiene hasta que se vuelva a permitir en KidGate.',
  infoLine1Android:
    'KidGate mantiene una conexión privada en el dispositivo que comprueba qué sitios se consultan y bloquea los de tus categorías.',
  infoLine2Android:
    'Desactiva el DNS privado en el dispositivo del niño. Si está activo, los navegadores pueden saltarse el filtro.',
  infoLine3Android:
    'El dispositivo del niño muestra un icono de VPN mientras filtra. Apagar la VPN detiene el filtro — vuelve a abrir KidGate para restaurarlo.',
  infoLine4Android:
    'En Ajustes, abre Red e Internet, luego DNS privado y elige Desactivado.',
  infoLine1Macos:
    'KidGate ejecuta un filtro de contenido en el Mac que revisa qué sitios se están buscando y bloquea los que están en tus categorías.',
  infoLine2Macos:
    'Si el filtro aparece como no aprobado en el Mac del niño, abre Ajustes del sistema → General → Elementos de inicio de sesión y extensiones para aprobarlo.',
  infoLine3Macos:
    'El Mac del niño muestra el filtro como activo una vez aprobado. Si se desactiva allí, vuelve a abrir KidGate para restaurarlo.',
  infoLine4Macos:
    'El filtro lee los nombres de los sitios, que los navegadores modernos ocultan en aproximadamente la mitad de las visitas; esos sitios no se comparan con tus categorías. Aun así, bloquea la mayoría de los sitios a los que los niños llegan de esta forma.',
  privateDnsBannerTitle: 'Desactiva el DNS privado',
  privateDnsBannerBody:
    'El DNS privado está activo, así que el filtro web puede eludirse. Desactívalo para que el filtro funcione.',
  privateDnsBannerButton: 'Abrir ajustes de DNS',
  vpnConsentBannerTitle: 'Restaurar la VPN del Filtro web',
  vpnConsentBannerBody:
    'La VPN de KidGate está desactivada. El filtrado de contenido adulto necesita que la VPN siga conectada.',
  vpnConsentBannerButton: 'Activar VPN',
  iosOnlyNote: 'Usa una conexión privada y Tiempo de uso en iPhone',
  androidVpnNote: 'Usa una VPN DNS local en Android',
  macosFilterNote: 'Usa el filtro de contenido de KidGate en Mac',

  heroSubtitleWindows:
    'Ejecuta el propio resolutor de KidGate en el PC del niño para bloquear sitios inapropiados conocidos en todos los navegadores.',
  heroSubtitleExtension:
    'Ejecuta la extensión de KidGate en Chrome, en el ordenador del niño, para bloquear sitios inapropiados conocidos en ese navegador.',

  toggleHintWindows:
    'No hay nada que aprobar en el PC. El servicio en segundo plano de KidGate activa el filtro en unos segundos.',
  toggleHintExtension:
    'No hay nada que aprobar. El filtro solo funciona en Chrome, no en otros navegadores ni apps.',

  infoLine1Windows:
    'KidGate ejecuta un resolutor en el PC que comprueba qué sitios se consultan y bloquea los de tus categorías.',

  infoLine2Windows:
    'Chrome, Edge y Firefox quedan sujetos a él mediante una configuración que aplica KidGate. No se pide nada al menor.',

  infoLine3Windows:
    'Necesita el servicio en segundo plano de KidGate. Si el filtrado sigue desactivado, reinstala KidGate en el PC como administrador.',

  infoLine4Windows:
    'El filtro solo lee nombres de sitios. No ve el interior de una página, y un sitio consultado hace un momento puede seguir abriéndose unos minutos.',
  infoLine1Extension:
    'La extensión de KidGate comprueba cada sitio antes de que Chrome lo abra y bloquea los de tus categorías.',
  infoLine2Extension:
    'Solo se filtra Chrome, en el perfil donde está instalado KidGate. Los demás navegadores y apps del ordenador no.',
  infoLine3Extension:
    'Las ventanas de incógnito solo se filtran si «Permitir en modo incógnito» está activado para la extensión. Las ventanas de invitado no se filtran.',
  infoLine4Extension:
    'Una página bloqueada permite a tu hijo pedirte que permitas el sitio. Quitar o desactivar la extensión detiene el filtro.',

  windowsFilterNote: 'Usa el propio resolutor de KidGate en Windows',
  extensionFilterNote: 'Usa la extensión de KidGate en Chrome',
  categoriesTitle: 'Qué bloquear',
  categoriesSubtitle:
    'KidGate usa sus propias listas de dominios. Cubren los sitios a los que los niños realmente llegan, no toda la web: combínalas con las listas de abajo.',
  androidOnlyCategory: 'No disponible en iPhone: funciona en otros dispositivos',
  iosCategoryNote:
    'El iPhone solo admite {{category}}, usando el filtro de Apple. Las demás categorías se aplican en otros dispositivos.',
  allowListTitle: 'Permitir siempre',
  allowListSubtitle:
    'Sitios que siguen accesibles aunque una categoría los bloquearía.',
  allowListEmpty: 'Todavía no hay excepciones.',
  allowListInputAccessibility: 'Añadir un sitio siempre permitido',
  blockListTitle: 'Bloquear siempre',
  blockListSubtitle: 'Sitios rechazados digan lo que digan las categorías.',
  blockListEmpty: 'Todavía no hay sitios bloqueados.',
  blockListInputAccessibility: 'Añadir un sitio siempre bloqueado',
  allowListOnlyLabel: 'Solo sitios permitidos',
  allowListOnlyHintAndroid:
    'Se rechaza todo salvo tu lista de permitidos. Se aplica a todo el dispositivo, así que otras apps también pierden la conexión.',
  allowListOnlyHintIos:
    'Safari y los navegadores dentro de apps solo pueden abrir los sitios de tu lista.',
  allowListOnlyHintExtension:
    'Chrome solo puede abrir los sitios de tu lista de permitidos. Los demás navegadores y apps no se ven afectados.',
  allowListOnlyNeedsEntries: 'Añade al menos un sitio permitido antes de activarlo.',
  domainPlaceholder: 'ejemplo.com',
  addDomain: 'Añadir sitio',
  removeDomain: 'Quitar {{domain}}',
  invalidDomain: 'Escribe una dirección, como ejemplo.com',
  listFull: 'Puedes guardar hasta {{max}} sitios en esta lista.',
  openHistory: 'Historial web',
  openHistorySubtitle: 'Mira a qué sitios llegó este dispositivo y qué se bloqueó',
  blockedPageTitle: 'Sitio bloqueado',
  blockedPageBody:
    'KidGate bloqueó este sitio para tu familia. Si crees que es un error, pregunta a tu padre o madre.',
  category: {
    adult: 'Contenido adulto',
    selfHarm: 'Autolesiones y trastornos alimentarios',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'Educación',
    utility: 'Utilidades',
    browser: 'Navegadores web',
    devTools: 'Programación y desarrollo',
    messaging: 'Mensajería y llamadas',
    community: 'Foros y comunidades',
    shortVideo: 'Vídeos cortos',
    creative: 'Foto, vídeo y arte',
    productivity: 'Notas y productividad',
    reading: 'Libros y cómics',
    fileSharing: 'Compartir archivos y descargas',
    bypass: 'Apps para saltarse el control',
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
  categoryHint: {
    adult: 'Sitios explícitos y para adultos',
    selfHarm: 'Foros que fomentan la autolesión y no comer',
    gambling: 'Casinos, apuestas deportivas, póquer',
    gameGambling: 'Apertura de cajas, apuestas de skins y Roblox',
    dating: 'Apps de citas',
    strangerChat: 'Clones de Omegle, videochat aleatorio',
    drugs: 'Cannabis, vapeo, alcohol',
    violence: 'Sitios gore y de imágenes impactantes',
    extremism: 'Foros de odio y sitios extremistas',
    piracy: 'Torrents y streaming pirata',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, portales de juegos',
    shopping: 'Amazon, Shein, moda rápida',
    aiCompanion: 'Character.AI, Replika, bots de rol',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, apps de trading',
    vpn: 'Páginas de descarga de VPN. No bloquea una app ya instalada.',
  },
  categoryGroup: {
    harm: 'Contenido dañino',
    contact: 'Desconocidos',
    bypass: 'Evasión del filtro',
    ai: 'IA',
    entertainment: 'Ocio y redes sociales',
    money: 'Compras y dinero',
  },
  categoriesOnCount: '{{on}} de {{total}} activados',
  askToOpen: 'Pedir permiso',
  askToOpenSubtitle: 'Si te dan permiso, esta página se abrirá.',
  askToOpenDomainLabel: '¿Qué sitio?',
  askToOpenBlockedLabel: 'Bloqueados hace poco',
  askToOpenPending: 'Ya pediste un sitio. Espera la respuesta.',
  askToOpenTooSoon: 'Acabas de pedirlo. Prueba otra vez en un minuto.',
  askToOpenTooMany: 'Solo puedes pedir unos pocos sitios a la vez.',
  requestsTitle: 'Peticiones de sitios',
  requestsSubtitle: 'Sitios que este dispositivo pidió permitir.',
  siteRequestApproved: 'Sitio permitido',
  siteRequestApprovedDescription:
    '{{domain}} se añadió a «Permitir siempre» en {{deviceName}}.',
  siteRequestDenied: 'Petición de sitio rechazada',
  siteRequestDeniedDescription: '{{domain}} sigue bloqueado en {{deviceName}}.',
  siteRequestReceived: 'Petición de sitio',
  siteRequestReceivedDescription: '{{deviceName}} pidió abrir {{domain}}.',
  privateDnsStep1: 'Abre Ajustes en este dispositivo.',
  privateDnsStep2: 'Selecciona Red e Internet.',
  privateDnsStep3: 'Abre DNS privado y elige Desactivado.',
  vpnConsentStepAllow:
    'Selecciona Aceptar en la solicitud de VPN de Android. Un icono de llave permanece en la barra de estado mientras el filtro funciona.',
  vpnConsentStepAllowIos:
    'Selecciona Permitir cuando iOS pida añadir configuraciones VPN y luego introduce el código del dispositivo. Aparece un icono de VPN mientras el filtro funciona.',
} as const;
