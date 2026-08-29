export const messageMonitoring = {
  actionTitle: 'Alertas de mensajes',
  actionDescription:
    'Recibe un aviso cuando aparezcan palabras preocupantes en los mensajes',
  title: 'Alertas de mensajes',
  heroTitle: 'Seguridad de mensajes',
  heroSubtitle:
    'KidGate detecta palabras preocupantes en los mensajes de tu hijo y te avisa. Nunca te muestra el mensaje, solo la palabra marcada.',
  androidOnlyNote: 'Solo disponible en dispositivos Android.',
  recentTitle: 'Alertas recientes',
  emptyTitle: 'Aún no hay alertas',
  emptySubtitle: 'No se han detectado palabras preocupantes en los mensajes.',
  emptySubtitleNotWatching:
    'Ahora mismo no se están revisando los mensajes, así que esta lista seguirá vacía pase lo que pase.',
  flaggedTerm: 'Palabra marcada: «{{term}}»',
  flaggedTermPrefix: 'Palabra marcada: «',
  flaggedTermSuffix: '»',
  aiConfirmed: 'Confirmado por IA',
  categoryPredator: 'Posible acoso a menores',
  categorySelfHarm: 'Posible autolesión',
  categoryExplicit: 'Contenido explícito',
  categoryViolence: 'Amenaza o violencia',
  categoryBullying: 'Acoso',
  categoryDrugs: 'Drogas o sustancias',
  categoryAlcohol: 'Alcohol',
  categoryTobacco: 'Tabaco o vapeo',
  categoryGambling: 'Juegos de apuestas',
  categoryProfanity: 'Lenguaje ofensivo',
  categoryUnknown: 'Mensaje marcado',
  setupTitle: 'Seguridad de mensajes',
  setupBody:
    'Vigila los mensajes en busca de palabras preocupantes. KidGate nunca te muestra el mensaje, solo un aviso si aparece algo preocupante.',
  setupGrant: 'Permitir acceso a notificaciones',
  setupEnable: 'Seguridad de mensajes',
  controlledByParentHint:
    'Se activa o desactiva desde la app KidGate en el teléfono de tu padre o madre, no aquí.',
  parentIncomingLabel: 'Revisar los mensajes que recibe',
  parentOutgoingLabel: 'Revisar los mensajes que escribe',
  parentToggleHintGranted: 'En este teléfono.',
  parentToggleHintNotGranted:
    'Aún no se ha permitido en este teléfono: abre KidGate en su dispositivo para concederlo.',
  parentToggleSaveFailed: 'No se pudo guardar el cambio.',
  settingsTitle: 'Ajustes de alertas de mensajes',
  checkedTitle: 'Revisado y sin problema',
  checkedSubtitle:
    'Palabras vigiladas que aparecieron pero resultaron inofensivas en su contexto, así que no se te avisó. Se muestran aquí para que veas qué se filtra en tu nombre, y nos digas si algo debería haberte llegado.',
  consentTitle: 'Análisis de mensajes con IA',
  consentBody:
    'Cuando está activado, los mensajes que una palabra clave marca como dudosos se envían —sin nombres, números ni enlaces— a un servicio de IA para confirmar si son realmente preocupantes antes de avisarte. Las palabras de alto riesgo siguen avisando al instante sin enviar nada.',
  consentEnable: 'Activar análisis con IA',
  consentConfirmTitle: '¿Activar el análisis de mensajes con IA?',
  consentConfirmBody:
    'Los mensajes dudosos, sin datos personales, se enviarán a un servicio de IA para su revisión. Confirmas que consientes este tratamiento.',
  consentAgree: 'Acepto',
  outgoingTitle: 'Mensajes que escribes',
  outgoingBody:
    'KidGate también puede revisar lo que escribes en apps de chat. Busca las mismas palabras de aviso, en este teléfono. Tus mensajes nunca se envían a ningún sitio.',
  outgoingEnable: 'Revisar lo que escribo',
  outgoingGrant: 'Permitir',
  directionIncoming: 'Recibido',
  directionOutgoing: 'Enviado',
  alertBodyIncoming: 'Mensaje desde la app',
  alertBodyOutgoing: 'Mensaje enviado desde la app',
  aiLegend: 'Una alerta con este ícono fue confirmada por la IA antes de notificarte.',
  setupRevoked:
    'Android desactivó el permiso que esto necesita. Vuelve a concederlo para seguir revisando los mensajes.',
  outgoingRevoked:
    'Android desactivó esto. Vuelve a concederlo para seguir revisando lo que escribes.',
  outgoingDisclosureTitle: 'Antes de permitirlo',
  outgoingDisclosureBody:
    'KidGate lee solo lo que escribes en apps de mensajería, nunca en otra app y nunca en un campo de contraseña. Busca las mismas palabras de aviso en este teléfono. Tus mensajes no se envían a ninguna parte; solo la palabra marcada llega a tu padre o madre.',
  outgoingRestrictedHint:
    'Si el interruptor aparece atenuado, abre Ajustes › Aplicaciones › KidGate, toca el menú ⋮ y elige «Permitir ajustes restringidos»; después vuelve aquí.',
  notice: {
    revokedTitle: 'La revisión de mensajes se ha detenido',
    revokedBody:
      'Android desactivó un permiso que KidGate necesita, así que los mensajes ya no se revisan. Abre KidGate en el dispositivo de tu hijo o hija y concédelo de nuevo.',
    offTitle: 'La seguridad de mensajes no está activada',
    offBody:
      'No se está revisando nada en el dispositivo, así que aquí no puede aparecer ninguna alerta. Abre KidGate en su dispositivo para configurarlo.',
    pendingTitle: 'Esperando a que el dispositivo lo aplique',
    pendingBody:
      'Has activado esto. El dispositivo recogerá el cambio en su próxima conexión, normalmente en unos minutos, y antes si el teléfono está en uso. No tienes que hacer nada más.',
    unknownTitle: 'Esperando al dispositivo',
    unknownBody:
      'Este dispositivo aún no ha informado de si la seguridad de mensajes está funcionando, así que una lista vacía no dice mucho. Se actualizará la próxima vez que el dispositivo se conecte.',
    outgoingAvailableTitle: 'Revisa también lo que escribe',
    outgoingAvailableBody:
      'Los mensajes que recibe ya se revisan. KidGate también puede revisar lo que escribe en apps de mensajería: el acoso y la autolesión aparecen ahí mucho más a menudo. Configúralo en su dispositivo.',
  },
  languagesLabel: 'Idiomas analizados',
  languagesHint:
    'Los idiomas en los que este dispositivo busca palabras preocupantes. Elige hasta {{max}}.',
  languagesDefaultHint: 'Por defecto, el idioma del dispositivo.',
} as const;
