export const messageMonitoring = {
  actionTitle: 'Alertas de mensajes',
  actionDescription:
    'Recibe un aviso cuando aparezcan palabras preocupantes en los mensajes',
  title: 'Alertas de mensajes',
  heroTitle: 'Alertas de mensajes',
  heroSubtitle:
    'KidGate detecta palabras preocupantes en los mensajes y las búsquedas de tu hijo, y te avisa. Solo ves la palabra o frase marcada, nunca el mensaje ni la búsqueda.',
  androidOnlyNote:
    'Los mensajes solo se pueden revisar en dispositivos Android. Las búsquedas también se pueden revisar en la extensión de Chrome.',
  searchOnlyNote:
    'Aquí solo se pueden revisar las búsquedas. Los mensajes solo se pueden revisar en dispositivos Android.',
  recentTitle: 'Alertas recientes',
  emptyTitle: 'Aún no hay alertas',
  emptySubtitle: 'No se han detectado palabras preocupantes en los mensajes.',
  emptySubtitleNotWatching:
    'Ahora mismo no se están revisando los mensajes, así que esta lista seguirá vacía pase lo que pase.',
  flaggedTerm: 'Marcado: «{{term}}»',
  flaggedTermPrefix: 'Marcado: «',
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
    'KidGate no guardó el mensaje, solo esta palabra o frase. Todo lo demás tiene que venir de tu hijo.',
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
      'Las cajas de botín, los sobres de cartas y las apuestas de skins cuentan, y rara vez le parecen juego de azar a un niño. Mira en qué gasta dentro de los juegos antes de tratarlo como un problema de dinero.',
    profanity:
      'El lenguaje soez por sí solo es común y casi nunca dice nada sobre su seguridad. Si estos avisos son ruido para tu familia, desactiva «Marcar también el lenguaje soez» en los ajustes de esta pantalla.',
    unknown:
      'Este aviso viene de un dispositivo o una lista de palabras que esta versión ya no nombra. La palabra o frase marcada de arriba es lo que hay que preguntar; del mensaje no se guardó nada más.',
  },
  setupTitle: 'Alertas de mensajes',
  setupBody:
    'Cuando tu padre o madre lo activa, KidGate revisa los mensajes que recibes en busca de palabras de aviso, aquí mismo en este teléfono. Tu padre o madre solo ve una palabra o frase marcada, nunca tus mensajes. Si además activa el análisis de mensajes con IA, un mensaje poco claro puede enviarse a un servicio de IA para revisarlo, tras eliminar los correos electrónicos, los números de teléfono, los enlaces y los @usuarios.',
  setupGrant: 'Permitir acceso a notificaciones',
  setupEnable: 'Alertas de mensajes',
  controlledByParentHint:
    'Se activa o desactiva desde la app parental o el panel web, no aquí.',
  parentIncomingLabel: 'Revisar los mensajes que recibe',
  parentOutgoingLabel: 'Revisar los mensajes que escribe',
  parentSearchLabel: 'Revisar lo que busca',
  parentSearchHint:
    'Navegadores y YouTube. Solo se informa la palabra o frase marcada, nunca la búsqueda en sí.',
  parentSearchHintNotGranted:
    'Necesita el mismo permiso que «Revisar los mensajes que escribe». Activa «Revisar los mensajes que recibe» y luego permítelo en su dispositivo.',
  parentToggleHintGranted: 'En este teléfono.',
  parentToggleHintNotGranted:
    'Aún no se ha permitido en este teléfono: abre KidGate en su dispositivo para concederlo.',
  parentProfanityLabel: 'Marcar también el lenguaje soez',
  parentProfanityHint:
    'Desactivado por defecto — las groserías comunes son frecuentes, y esto también las convierte en alerta.',
  parentToggleSaveFailed: 'No se pudo guardar el cambio.',
  settingsTitle: 'Ajustes de Alertas de mensajes',
  checkedTitle: 'Revisado y sin problema',
  checkedSubtitle:
    'Palabras vigiladas que aparecieron pero resultaron inofensivas en su contexto, así que no se te avisó. Se muestran aquí para que veas qué se filtra en tu nombre, y nos digas si algo debería haberte llegado.',
  consentTitle: 'Análisis de mensajes con IA',
  consentBody:
    'Cuando está activado, un mensaje cuya palabra marcada podría ser inofensiva o haber coincidido solo de forma aproximada se envía a un servicio de IA para confirmar si es realmente preocupante antes de avisarte. Primero se eliminan los correos electrónicos, los números de teléfono, los enlaces y los @usuarios; los nombres y el resto del mensaje, no. Una coincidencia clara avisa al instante sin enviar nada.',
  consentEnable: 'Activar análisis con IA',
  consentConfirmTitle: '¿Activar el análisis de mensajes con IA?',
  consentConfirmBody:
    'Los mensajes dudosos se enviarán a un servicio de IA para comprobar si son preocupantes, tras eliminar los correos electrónicos, los números de teléfono, los enlaces y los @usuarios. Los nombres y el resto del mensaje no se eliminan. Confirmas que consientes este tratamiento.',
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
    'KidGate revisa lo que escribes en apps de mensajería en busca de las mismas palabras de aviso. Si tu padre o madre activa las alertas de búsqueda, también revisa lo que escribes en navegadores, YouTube y la app de Google. Nunca lee un campo de contraseña. La revisión se hace en este teléfono: nada de lo que escribes se envía a ningún sitio, y solo una palabra o frase marcada llega a tu padre o madre.',
  outgoingRestrictedHint:
    'Si el interruptor aparece atenuado, abre Ajustes › Aplicaciones › KidGate, toca el menú ⋮ y elige «Permitir ajustes restringidos»; después vuelve aquí.',
  notice: {
    revokedTitle: 'La revisión de mensajes se ha detenido',
    revokedBody:
      'Android desactivó un permiso que KidGate necesita, así que los mensajes ya no se revisan. Abre KidGate en el dispositivo de tu hijo o hija y concédelo de nuevo.',
    offTitle: 'Las Alertas de mensajes no están activadas',
    offBody:
      'No se está revisando nada en el dispositivo, así que aquí no puede aparecer ninguna alerta. Abre KidGate en su dispositivo para configurarlo.',
    switchedOffBody:
      'No se está revisando nada en el dispositivo de tu hijo, así que aquí no puede aparecer ninguna alerta. Activa «Revisar los mensajes que recibe» en los ajustes de esta pantalla.',
    pendingTitle: 'Esperando a que el dispositivo lo aplique',
    pendingBody:
      'Has activado esto. El dispositivo recogerá el cambio en su próxima conexión, normalmente en unos minutos, y antes si el teléfono está en uso. No tienes que hacer nada más.',
    unknownTitle: 'Esperando al dispositivo',
    unknownBody:
      'Este dispositivo aún no ha informado de si las Alertas de mensajes están funcionando, así que una lista vacía no dice mucho. Se actualizará la próxima vez que el dispositivo se conecte.',
    outgoingAvailableTitle: 'Revisa también lo que escribe',
    outgoingAvailableBody:
      'Los mensajes que recibe ya se revisan. KidGate también puede revisar lo que escribe en apps de mensajería: el acoso y la autolesión aparecen ahí mucho más a menudo. Configúralo en su dispositivo.',
    outgoingSwitchedOffBody:
      'Los mensajes que recibe tu hijo ya se revisan. KidGate también puede revisar lo que escribe en apps de mensajería: el acoso y la autolesión aparecen ahí mucho más a menudo. Activa «Revisar los mensajes que escribe» en los ajustes de esta pantalla.',
  },
  languagesLabel: 'Idiomas analizados',
  languagesHint:
    'Los idiomas en los que este dispositivo busca palabras preocupantes. Elige hasta {{max}}.',
  languagesDefaultHint: 'Por defecto, el idioma del dispositivo.',
  setupStepFindKidGate: 'Activa el acceso a notificaciones para KidGate y confirma.',
} as const;
