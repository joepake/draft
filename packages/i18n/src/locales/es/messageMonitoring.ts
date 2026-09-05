export const messageMonitoring = {
  actionTitle: 'Alertas de mensajes',
  actionDescription:
    'Recibe un aviso cuando aparezcan palabras preocupantes en los mensajes',
  title: 'Alertas de contenido',
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
  flaggedTermMeaning: 'Significado: {{gloss}}',
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
  guidanceToggle: 'Qué hacer ahora',
  guidanceHide: 'Ocultar',
  guidanceFooter:
    'KidGate no guardó el mensaje, solo esta palabra. Todo lo demás tiene que venir de tu hijo.',
  guidance: {
    predator:
      'El acoso de adultos suele empezar de forma amable, de alguien que tu hijo cree de su edad. Pregunta con quién habla últimamente y cómo se conocieron, antes de mencionar el aviso: un niño que se siente descubierto deja de responder.',
    selfHarm:
      'Estas palabras son mucho más a menudo una señal que un plan, y preguntar directamente no siembra la idea. Di lo que has visto y que no estás enfadado; si la respuesta te asusta, llama a una línea de crisis el mismo día.',
    explicit:
      'Puede ser algo que le enviaron, algo que le mostraron o algo que escribió. Averigua qué fue antes de reaccionar: recibir contenido explícito es una conversación distinta de enviarlo.',
    violence:
      'Una amenaza merece atención incluso cuando parece una broma entre amigos. Pregunta si viene de alguien del colegio; si es así, el colegio es la vía más rápida para detenerlo.',
    bullying:
      'Los niños casi nunca lo cuentan solos, y aparecen las mismas palabras tanto si tu hijo fue el objetivo como si participó. Pregunta qué pasó en lugar de de quién fue la culpa, y anota las fechas por si el colegio las necesita.',
    drugs:
      'Una palabra marcada no prueba consumo: la curiosidad, las canciones y las bromas también lo activan. Pregunta abiertamente en lugar de registrar su cuarto; lo que más importa es que siga contándote cosas.',
    alcohol:
      'Es habitual en la conversación adolescente, así que tómalo como contexto y no como prueba. Es un buen momento para decir con claridad cuál es tu norma, antes de que una fiesta lo haga urgente.',
    tobacco:
      'El vapeo se extiende por el grupo de amigos y suele ser social más que secreto. Pregunta qué usan sus amigos: nombrar la cosa concreta funciona mejor que una advertencia general.',
    gambling:
      'Las cajas de recompensas, los sobres de cartas y las apuestas de objetos cuentan, y rara vez le parecen juego de azar. Mira en qué gasta dentro de los juegos antes de tratarlo como un problema de dinero.',
    profanity:
      'El lenguaje soez por sí solo es común y casi nunca dice nada sobre su seguridad. Si estos avisos son ruido para tu familia, desactiva “Marcar también el lenguaje soez” en los ajustes de esta pantalla.',
    unknown:
      'Este aviso viene de un dispositivo o una lista de palabras que esta versión ya no nombra. La palabra marcada de arriba es lo que hay que preguntar; del mensaje no se guardó nada más.',
  },
  setupTitle: 'Seguridad de mensajes',
  setupBody:
    'Vigila los mensajes en busca de palabras preocupantes. KidGate nunca te muestra el mensaje, solo un aviso si aparece algo preocupante.',
  setupGrant: 'Permitir acceso a notificaciones',
  setupEnable: 'Seguridad de mensajes',
  controlledByParentHint:
    'Se activa o desactiva desde la app KidGate en el teléfono de tu padre o madre, no aquí.',
  parentIncomingLabel: 'Revisar los mensajes que recibe',
  parentOutgoingLabel: 'Revisar los mensajes que escribe',
  parentSearchLabel: 'Revisar lo que busca',
  parentSearchHint:
    'Navegadores y YouTube. Solo se informa la palabra marcada, nunca la búsqueda en sí.',
  parentToggleHintGranted: 'En este teléfono.',
  parentToggleHintNotGranted:
    'Aún no se ha permitido en este teléfono: abre KidGate en su dispositivo para concederlo.',
  parentProfanityLabel: 'Marcar también el lenguaje soez',
  parentProfanityHint:
    'Desactivado por defecto — las groserías comunes son frecuentes, y esto también las convierte en alerta.',
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
  directionSearch: 'Buscado',
  alertBodyIncoming: 'Mensaje desde la app',
  alertBodyOutgoing: 'Mensaje enviado desde la app',
  alertBodySearch: 'Búsqueda hecha en',
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
