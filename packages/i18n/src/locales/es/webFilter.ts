export const webFilter = {
  title: 'Filtro web',
  fallbackDeviceName: 'Dispositivo del niño',
  toastUpdateFailed: 'No se pudo actualizar el Filtro web. Inténtalo de nuevo.',
  heroTitle: 'Filtrar sitios web para adultos',
  heroSubtitleIos:
    'Usa el filtro de contenido web de Tiempo de uso de Apple para limitar el contenido adulto en Safari y los navegadores dentro de las apps del dispositivo del niño.',
  heroSubtitleAndroid:
    'Usa una VPN DNS local en el dispositivo Android del niño para bloquear dominios de adultos conocidos en navegadores y muchas apps.',
  toggleLabel: 'Activar Filtro web',
  toggleHintIos: 'Requiere el permiso de Tiempo de uso en el dispositivo del niño.',
  toggleHintAndroid:
    'El niño debe aprobar la conexión VPN de KidGate una vez. Mantén la VPN activa para que el filtro funcione.',
  toggleAccessibilityLabel: 'Activar Filtro web',
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
  openHistorySubtitle: 'Mira a qué sitios llegó este teléfono y qué se bloqueó',
  category: {
    adult: 'Contenido adulto',
    gambling: 'Apuestas',
    dating: 'Citas',
    drugs: 'Drogas y alcohol',
    violence: 'Violencia y extremismo',
    piracy: 'Piratería',
    social: 'Redes sociales',
    videoStreaming: 'Vídeo en streaming',
    gaming: 'Juegos',
    shopping: 'Compras',
  },
  categoryHint: {
    adult: 'Sitios explícitos y para adultos',
    gambling: 'Casinos, apuestas, cajas de botín',
    dating: 'Apps de citas y chat con desconocidos',
    drugs: 'Cannabis, vapeo, alcohol',
    violence: 'Foros gore y extremistas',
    piracy: 'Torrents y streaming pirata',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, portales de juegos',
    shopping: 'Amazon, Shein, moda rápida',
  },
} as const;
