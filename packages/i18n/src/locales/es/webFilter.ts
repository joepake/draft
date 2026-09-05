export const webFilter = {
  title: 'Filtro web',
  fallbackDeviceName: 'Dispositivo del niño',
  appliesToAll: 'Se aplica a los {{count}} dispositivos de {{name}}',
  coverageLine: 'Activo en {{enforcing}} de {{total}} dispositivos',
  mergeNotice:
    'Los dispositivos de {{name}} tenían ajustes de filtro web distintos. Al guardar aquí se aplica un solo conjunto a todos, combinado hacia la opción más estricta.',
  mergeLoosened: 'Ahora permitido en todos los dispositivos: {{domains}}',
  toastUpdateFailed: 'No se pudo actualizar el Filtro web. Inténtalo de nuevo.',
  heroTitle: 'Filtrar sitios web para adultos',
  heroSubtitleIos:
    'Usa el filtro de contenido web de Tiempo de uso de Apple para limitar el contenido adulto en Safari y los navegadores dentro de las apps del dispositivo del niño.',
  heroSubtitleAndroid:
    'Usa una VPN DNS local en el dispositivo Android del niño para bloquear dominios de adultos conocidos en navegadores y muchas apps.',
  heroSubtitleMacos:
    'Ejecuta el filtro de contenido de KidGate en el Mac del niño para bloquear sitios para adultos conocidos en navegadores y muchas apps.',
  toggleHintIos: 'Requiere el permiso de Tiempo de uso en el dispositivo del niño.',
  toggleHintAndroid:
    'El niño debe aprobar la conexión VPN de KidGate una vez. Mantén la VPN activa para que el filtro funcione.',
  toggleHintMacos:
    'El niño debe aprobar la extensión de filtro de KidGate una vez en Ajustes del sistema. Mantenla aprobada para que el filtro funcione.',
  toggleAccessibilityLabel: 'Activar Filtro web',
  safeSearchSectionTitle: 'Búsqueda segura y YouTube',
  safeSearchSectionSubtitle:
    'Fuerza resultados seguros en Google, Bing y DuckDuckGo y bloquea YouTube en modo restringido. Requiere el filtro web activado.',
  safeSearchLabel: 'Forzar SafeSearch',
  safeSearchHint:
    'Fija Google SafeSearch, el modo restringido de YouTube, Bing y DuckDuckGo en su ajuste estricto. Android, Android TV y Chrome.',
  infoTitle: 'Cómo funciona',
  infoLine1Ios: 'Apple filtra automáticamente los sitios para adultos.',
  infoLine2Ios:
    'Usa el filtro de contenido adulto de Apple en Safari y no bloquea todo dentro de otras apps.',
  infoLine3Ios:
    'KidGate aplica el ajuste automáticamente cuando la app del dispositivo del niño sincroniza los controles.',
  infoLine1Android:
    'KidGate inicia una VPN local que inspecciona el DNS en busca de dominios de adultos y bloquea algunos resolutores DNS cifrados.',
  infoLine2Android:
    'Desactiva el DNS privado en el dispositivo del niño. Si está activo, los navegadores pueden saltarse el filtro.',
  infoLine3Android:
    'El dispositivo del niño muestra un icono de VPN mientras filtra. Apagar la VPN detiene el filtro — vuelve a abrir KidGate para restaurarlo.',
  infoLine4Android: 'Ve a Ajustes → Redes e Internet → DNS privado → Desactivado.',
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
    'El DNS privado está activo, así que el filtro web para adultos puede eludirse. Desactívalo para que el filtro funcione.',
  privateDnsBannerButton: 'Abrir ajustes de DNS',
  vpnConsentBannerTitle: 'Restaurar la VPN del Filtro web',
  vpnConsentBannerBody:
    'La VPN de KidGate está desactivada. El filtro web para adultos necesita que la VPN siga conectada.',
  vpnConsentBannerButton: 'Activar VPN',
  iosOnlyNote: 'Usa Tiempo de uso en iOS',
  androidVpnNote: 'Usa una VPN DNS local en Android',
  macosFilterNote: 'Usa el filtro de contenido de KidGate en Mac',
  webFilteringNote:
    'iOS usa el filtro de adultos de Tiempo de uso; Android usa una lista de bloqueo por VPN DNS local.',
  safeSearchAlertsNote:
    'Safari no comparte los términos de búsqueda; las alertas por palabras clave requieren un navegador seguro gestionado.',
  webHistoryNote: 'Requiere un navegador con filtro o informes tipo DNS/VPN.',
  categoriesTitle: 'Qué bloquear',
  categoriesSubtitle:
    'KidGate usa sus propias listas de dominios. Cubren los sitios a los que los niños realmente llegan, no toda la web: combínalas con las listas de abajo.',
  androidOnlyCategory: 'Solo Android: iOS no tiene control web por categoría',
  iosCategoryNote:
    'El iPhone solo admite {{category}}, usando el filtro de Apple. Las demás categorías se aplican a dispositivos Android.',
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
    'Se rechaza todo salvo tu lista de permitidos. Funciona en la capa DNS, así que otras apps también pierden conexión.',
  allowListOnlyHintIos:
    'Safari y los navegadores dentro de apps solo pueden abrir los sitios de tu lista.',
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
    'KidGate bloqueó este sitio para tu familia. Si crees que es un error, pregunta a tus padres.',
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
} as const;
