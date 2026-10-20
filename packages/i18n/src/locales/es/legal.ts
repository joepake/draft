export const legal = {
  privacyPolicy: {
    title: 'Política de Privacidad',
    effectiveDate: 'Vigente a partir del 20 de octubre de 2026',
    intro:
      'KidGate es el nombre de producto y comercial bajo el que se opera la aplicación. Esta política explica cómo KidGate gestiona los datos cuando los padres utilizan el servicio para administrar el dispositivo de un hijo.\n\nCubre la app de KidGate para iPhone, iPad y Android, la app de KidGate para macOS y Windows, la extensión de navegador, la app para Android TV, el panel para padres y el sitio web kidgate.app.\n\n### Resumen\n\n• KidGate solo procesa datos para las funciones que activa un padre o madre y dentro de los permisos que concede el sistema operativo.\n• Los mensajes y las búsquedas se comparan en el propio dispositivo. Solo se envía la palabra clave detectada, salvo que un padre o madre haya aceptado por separado la confirmación por IA (sección 3).\n• El Filtro web funciona en el dispositivo. KidGate registra el dominio, no la dirección completa ni el contenido de la página.\n• No hay anuncios, y KidGate no vende datos personales.\n• La mayor parte del historial de actividad se elimina automáticamente a los 30 días, y las alertas SOS a los 90 días (sección 11).\n• El personal autorizado de KidGate solo abre una cuenta familiar cuando el soporte lo requiere, y cada apertura aparece en el historial de actividad de la familia (sección 10).\n• Un padre o madre puede solicitar la eliminación de la cuenta en cualquier momento. Tras una espera de 14 días, se eliminan la cuenta y los datos de la familia, salvo algunos registros mínimos indicados en las secciones 11 y 12.',
    sections: [
      {
        title: '1. Alcance y papel del padre o madre',
        body: 'La cuenta parental es la que configura, concede los permisos y administra los dispositivos de los hijos. Los niños no crean sus propias cuentas de KidGate; un dispositivo solo se administra a través de una cuenta parental.\n\nUn padre o madre debe contar con la tutela legal o la autoridad válida antes de supervisar o administrar un dispositivo. KidGate no está pensado para la vigilancia encubierta de adultos ni de nadie fuera del cuidado legal del padre o madre.',
      },
      {
        title: '2. Datos que procesamos',
        body: 'Lo que KidGate procesa depende de qué funciones activa un padre o madre y de qué permisos concede el sistema operativo a la app. No todos los tipos de datos que figuran a continuación se recogen en todos los dispositivos.\n\n### Cuenta y dispositivos\n\n• Identificadores de cuenta y el inicio de sesión de Google, Apple o correo con el que se creó la cuenta parental.\n• Los nombres que un padre o madre da a cada hijo y los dispositivos asignados a ellos.\n• Nombre, modelo y formato del dispositivo, versión del sistema operativo y de la app, nivel de batería y estado de vinculación.\n• Los ajustes: Límite diario, Horas bloqueadas, Apps bloqueadas, límites por app, categorías del Filtro web y el PIN parental. El PIN parental solo se guarda como un hash unidireccional.\n\n### Tiempo de uso y apps\n\n• Los totales de Tiempo de uso, un desglose por app y un registro minuto a minuto de cuándo se usó el dispositivo.\n• Las apps instaladas en el dispositivo y las extensiones añadidas a su navegador.\n• Alertas cuando se instala una app nueva, cuando se desactiva una protección o cuando el uso parece inusual, por ejemplo una app nueva o uso durante las Horas bloqueadas.\n\n### Web y vídeo\n\n• Los dominios que solicitó el dispositivo del hijo y los que fueron bloqueados, contados por día y por hora.\n• Los títulos y los nombres de canal de los vídeos reproducidos, en las plataformas que permiten leer esa información, cuando el historial de vídeos está activado.\n• Las peticiones de desbloqueo de sitios y la información necesaria para tramitarlas.\n\n### Ubicación y seguridad\n\n• La ubicación del dispositivo, el historial de ubicación, los lugares que un padre o madre ha guardado y las alertas cuando el dispositivo llega a uno de ellos o sale de él.\n• Las alertas SOS, los check-in de seguridad y la foto que un hijo envía con cualquiera de los dos, y hasta 15 segundos de sonido grabados cuando un hijo envía un SOS desde un teléfono o una tableta con el micrófono permitido.\n• El nombre y la dirección de correo de los contactos de confianza que un padre o madre añade, para que KidGate pueda enviarles cada SOS por correo.\n\n### Mensajes y búsquedas\n\n• Alertas cuando un mensaje o una búsqueda coincide con una lista de palabras clave cuya supervisión activó un padre o madre. Su funcionamiento se explica en la sección 3.\n\n### Informes, soporte y pagos\n\n• Las peticiones de tiempo extra, las tareas con recompensa y los totales semanales de estrellas que muestra la tabla de estrellas.\n• El informe semanal que resume esos datos.\n• Los mensajes de soporte y cualquier captura de pantalla adjunta a uno.\n• Los informes de fallos y los diagnósticos técnicos.\n• Los datos de transacciones de suscripción facilitados por una tienda de aplicaciones.\n\nKidGate no exige el nombre real de un menor cuando una función no lo necesita.',
      },
      {
        title: '3. Qué permanece en el dispositivo del hijo',
        body: '### Supervisión de mensajes y búsquedas\n\nLa supervisión de mensajes se ejecuta en el propio dispositivo Android. La supervisión de búsquedas se ejecuta en el dispositivo Android y en la extensión de navegador de KidGate. Ambas solo funcionan cuando un padre o madre las activa.\n\nEl dispositivo compara el texto con listas de palabras clave guardadas localmente. Cuando hay una coincidencia, lo que se envía es una alerta que indica la palabra o frase corta detectada, su categoría, la app o el buscador en el que apareció y la hora. El mensaje o la búsqueda en sí, el resto de la conversación y la identidad de la otra persona ni se transmiten ni los guarda KidGate.\n\n### Confirmación por IA\n\nEsta es la única excepción, y requiere un consentimiento aparte del padre o madre. Cuando está activada, un mensaje entrante cuya coincidencia es ambigua se envía al modelo Gemini de Google para que lo valore, de modo que no se avise a un padre o madre por una palabra corriente. Antes del envío se enmascaran las direcciones de correo, los números de teléfono y las direcciones web del mensaje; el resto del texto sí se envía y puede seguir conteniendo información privada.\n\nKidGate solo conserva el veredicto y no guarda el mensaje una vez valorado. Cómo trata Google Cloud los datos recibidos se explica en la sección 5. El texto que escribe el hijo nunca se envía para la confirmación por IA, sea cual sea el consentimiento de la familia.\n\n### Web y vídeo\n\nKidGate registra el dominio que pidió el dispositivo y si fue bloqueado. KidGate no registra la dirección completa de una página ni su contenido, salvo qué vídeo se reprodujo si el historial de vídeos está activado. Los archivos, las fotos y la navegación que ninguna función activada necesita leer permanecen en el dispositivo.\n\n### Grabación de sonido al enviar un SOS\n\nEl micrófono se usa para una sola cosa: cuando un hijo envía un SOS desde un teléfono o una tableta con el micrófono permitido, se graban hasta 15 segundos de sonido y se envían con la alerta. Fuera de ese momento, KidGate no graba nada, nadie escucha en directo y ningún padre o madre puede iniciar una grabación a distancia.\n\n### Filtro web y DNS\n\nEn iPhone, iPad, teléfonos Android y Android TV, el Filtro web es una VPN que funciona en el propio dispositivo. Esta VPN no hace pasar ningún tráfico por los servidores de KidGate: solo recibe las consultas de sitios web del dispositivo, rechaza las que están bloqueadas y pasa el resto a un servidor DNS para que las responda.\n\n• En iPhone y iPad: el servidor DNS de la propia red que se está usando, Google Public DNS o 1.1.1.1 de Cloudflare.\n• En Android: el servidor DNS de la propia red que se está usando o, si no responde, Google Public DNS.\n\nEn un teléfono o una tableta, antes de activar la VPN por primera vez, KidGate explica lo que ve y pide permiso. Lo que observa la VPN se usa solo para filtrar y para mostrar a la familia su historial web; nunca se vende, nunca se usa con ningún otro fin y solo llega a los proveedores de la sección 7 en la medida necesaria para hacer funcionar el servicio.',
      },
      {
        title: '4. Cómo se utilizan los datos',
        body: 'KidGate utiliza los datos para:\n\n• Autenticar las cuentas y vincular los dispositivos.\n• Ofrecer las funciones de control parental y sincronizar los ajustes entre dispositivos.\n• Enviar alertas, mostrar el historial de actividad y generar informes.\n• Gestionar las suscripciones y las transacciones.\n• Proteger las cuentas y prevenir el fraude o el abuso.\n• Corregir errores, dar soporte a los usuarios y mejorar la fiabilidad.\n\nKidGate no vende datos personales ni utiliza los datos de los hijos para publicidad basada en el comportamiento. Ninguna app de KidGate contiene anuncios.',
      },
      {
        title: '5. Procesamiento automatizado e IA',
        body: 'KidGate utiliza los modelos Gemini de Google, a través de Google Cloud, para tres tareas:\n\n• Resumir el informe semanal: un párrafo escrito, generado a partir de las propias cifras de uso de la familia.\n• Clasificar apps y dominios: asignarlos a las categorías que usan el Filtro web y las listas de apps. El resultado se guarda en una tabla compartida que registra solo el dominio y su categoría, no qué familia lo visitó.\n• Confirmación por IA: valorar algunos mensajes entrantes cuya coincidencia es ambigua, solo cuando un padre o madre lo ha consentido, tal como se explica en la sección 3.\n\nEstos modelos pueden equivocarse. Una categoría, una frase de un resumen o una alerta de mensaje es un aviso para que el padre o madre lo revise, no una constatación, y KidGate no toma sobre esa base ninguna decisión con efectos jurídicos o similarmente significativos para un menor.\n\nSegún las condiciones de Google Cloud, Google no utiliza los datos que KidGate envía a través de este servicio para entrenar sus propios modelos. Aun así, Google puede conservar datos temporalmente conforme a los mecanismos de funcionamiento y seguridad de ese servicio, por lo que el hecho de que KidGate no guarde un mensaje no significa que todas las copias en el lado del proveedor desaparezcan de inmediato.',
      },
      {
        title: '6. Bases legales y consentimiento',
        body: 'Según la ley aplicable, KidGate procesa datos para prestar los servicios solicitados, cumplir con obligaciones legales, proteger intereses legítimos de seguridad, o sobre la base del consentimiento cuando la ley lo exija. Los padres son responsables de proporcionar todos los avisos y de obtener todos los consentimientos necesarios para un hijo o usuario del dispositivo.\n\nLa supervisión de mensajes y la confirmación por IA son dos consentimientos independientes que pueden retirarse en cualquier momento:\n\n• La supervisión de mensajes se activa por dispositivo.\n• La confirmación por IA se acepta una sola vez para toda la familia, y KidGate registra quién la aceptó y cuándo.',
      },
      {
        title: '7. Proveedores de servicios',
        body: 'KidGate utiliza los siguientes proveedores para hacer funcionar el servicio. Cada uno recibe solo lo que su tarea necesita.\n\n• Google Cloud y Firebase: la autenticación, la base de datos, el almacenamiento de archivos, las funciones de servidor, las notificaciones push mediante Firebase Cloud Messaging, los informes de fallos mediante Firebase Crashlytics y los modelos Gemini mencionados en la sección 5.\n• Google Public DNS: en Android, iPhone y iPad, puede responder a las consultas de sitios web que el Filtro web deja pasar, por lo que puede recibir esos nombres de dominio.\n• Apple y Google: procesan las compras de suscripción, las renovaciones y los reembolsos a través de sus tiendas de aplicaciones.\n• Google Analytics: la medición descrita en la sección 8.\n• HERE Technologies: convierte la posición que comunica un dispositivo en una dirección y dibuja las teselas del mapa en las pantallas de ubicación, por lo que recibe las coordenadas que comunicó el dispositivo.\n• Resend: entrega los correos que envía KidGate, es decir, las alertas SOS a los contactos de confianza y el informe semanal.\n• Cloudflare: sirve los instaladores para ordenador y, en iPhone y iPad, puede responder a las consultas de sitios web que el Filtro web deja pasar, por lo que puede recibir esos nombres de dominio.\n• unpkg: la red de contenidos que sirve la biblioteca de mapas a las apps para padres.\n\nLos datos solo se comparten con estos proveedores en la medida necesaria para prestar, mantener y proteger el servicio; con las autoridades cuando la ley lo exija; o para prevenir riesgos de seguridad, fraude o abuso. Estos proveedores tienen sus propias políticas y obligaciones respecto de los datos que tratan, y KidGate no autoriza a ninguno a utilizar los datos de los hijos para sus propios fines de marketing.',
      },
      {
        title: '8. Analítica y cookies',
        body: '### El sitio web kidgate.app\n\nEl sitio web mide con Google Analytics las visitas a las páginas y el número de clics en cada enlace de descarga para ordenador. El almacenamiento de analítica está rechazado por defecto, de modo que no se instala ninguna cookie de analítica ni se guarda nada en el navegador de quien lee; cada visita se cuenta a partir de una petición sin cookies con la dirección IP truncada. Google Signals y los identificadores publicitarios están desactivados, y KidGate no envía por esta vía nada que identifique a quien lee ni a una familia.\n\n### Las apps de KidGate\n\nLas apps de KidGate comunican un pequeño conjunto de eventos a la misma propiedad de medición para saber qué funciones se usan. Esos eventos llevan un identificador de la instalación de la app. No es el identificador publicitario del dispositivo, que las apps no recogen, pero sí permite distinguir una instalación de otra, por lo que estos datos no son totalmente anónimos. Los eventos nunca llevan el nombre, los mensajes, la ubicación ni la navegación de un menor.\n\nLas apps y el sitio web no utilizan ninguna red publicitaria ni de rastreo de ningún tipo.',
      },
      {
        title: '9. Dónde se almacenan los datos y cómo se protegen',
        body: 'Los datos de las familias se almacenan en la región de Singapur de Google Cloud y pueden procesarse en otros lugares por los proveedores mencionados en la sección 7, lo que significa que pueden salir del país en el que vive una familia.\n\nKidGate emplea medidas de seguridad técnicas y organizativas razonables, entre ellas:\n\n• Controles de acceso y permisos limitados al mínimo necesario.\n• Reglas en el servidor que limitan cada lectura a una sola familia.\n• Transporte seguro de los datos.\n• Un PIN parental que solo se guarda como un hash unidireccional y no puede volver a leerse.\n\nNingún sistema es completamente seguro; KidGate no puede garantizar que los datos nunca se perderán, se accederá a ellos sin autorización o sufrirán interrupciones.',
      },
      {
        title: '10. Acceso del personal de KidGate para soporte',
        body: '### Cuándo\n\nSolo cuando es necesario para atender una solicitud de soporte o diagnosticar un fallo, y solo por personal autorizado por KidGate que inicia sesión con autenticación en dos pasos.\n\n### Qué ven y qué pueden hacer\n\nAl abrir una cuenta familiar, esa persona ve exactamente lo que ve un padre o madre: la configuración, los dispositivos y la actividad de la cuenta, incluidos el historial de ubicación, el historial web, las alertas de mensajes y las fotos adjuntas a un SOS o a un check-in. También puede cambiar ajustes y enviar comandos a los dispositivos, igual que un padre o madre.\n\n### Qué queda registrado\n\n• Cada vez que se abre una cuenta familiar, se escribe una fila en el propio historial de actividad de esa familia, visible para sus padres, con la hora y la solicitud de soporte a la que corresponde.\n• Cada lectura de los registros de una familia a través de las herramientas del operador queda registrada con la hora y el motivo indicado.\n• Las acciones concretas realizadas dentro de una sesión de soporte, como cambiar un ajuste o enviar un comando, no se registran hoy por separado.',
      },
      {
        title: '11. Cuánto tiempo se conservan los datos',
        body: 'Los plazos siguientes son el mecanismo de conservación de KidGate. Los proveedores de la sección 7 pueden procesar o guardar datos conforme a sus propias condiciones.\n\n### Eliminación automática tras un plazo\n\n• 30 días: el Tiempo de uso y el uso por app, el historial web, el historial de vídeos, el historial de ubicación y el historial de actividad.\n• 90 días: las alertas SOS y los check-in de seguridad, con sus fotos y grabaciones de sonido; las peticiones de tiempo extra.\n• 365 días: los informes semanales.\n• 90 días después de resolverse la solicitud: las solicitudes de soporte, las respuestas y cualquier captura de pantalla adjunta.\n• 12 meses después de completarse la eliminación de una cuenta: un registro de que se solicitó y se completó la eliminación, que contiene solo un hash de la dirección de correo y las fechas, para poder responder si se disputa una eliminación.\n\nLos códigos de vinculación caducan en cuestión de minutos. Una sesión iniciada en el navegador dura 7 días cuando la ha concedido la app, u 8 horas cuando se ha desbloqueado con el PIN parental.\n\n### Se conservan hasta que se elimina la cuenta familiar\n\nLos siguientes datos no tienen hoy un plazo de eliminación automática propio:\n\n• La cuenta y los ajustes de la familia.\n• Los lugares guardados.\n• Las fichas de hijos y dispositivos.\n• Las tareas con recompensa.\n• Las peticiones de desbloqueo de sitios.\n• La tabla de estrellas y el historial semanal de tiempo de uso.\n• La lista de apps instaladas y de extensiones de navegador añadidas.\n\n### Excepciones\n\nAlgunos registros mínimos pueden conservarse durante más tiempo cuando lo exijan la ley, las transacciones de la tienda de aplicaciones, una eliminación en disputa o la prevención de fraude, y solo en la medida que requiera esa finalidad.',
      },
      {
        title: '12. Eliminación de una cuenta',
        body: 'Un padre o madre puede solicitar la eliminación en Configuración, o por correo a support@kidgate.app desde la dirección de correo de la cuenta, como explica kidgate.app/delete-account.\n\nLa solicitud queda en espera durante 14 días y puede cancelarse en ese plazo. Pasados los 14 días, se eliminan la cuenta familiar, cada ficha de hijo y cada dispositivo que dependen de ella y los archivos almacenados, y también se retiran las credenciales de inicio de sesión de la cuenta. La eliminación es permanente y después no hay exportación posible.\n\nCompletar la eliminación no significa que todos los registros relacionados desaparezcan de inmediato: el registro que confirma la eliminación y las excepciones indicadas en la sección 11 se conservan durante el plazo y con el alcance que allí se indican.',
      },
      {
        title: '13. Derechos y opciones',
        body: 'Según la ley aplicable, los usuarios pueden solicitar el acceso, la corrección, la eliminación o la restricción de sus datos, oponerse a su tratamiento y retirar el consentimiento cuando el tratamiento se base en él. Estas solicitudes, incluida la de una copia de los datos que KidGate conserva sobre una familia, se dirigen a support@kidgate.app; hoy no existe una exportación de autoservicio.\n\nLa supervisión de mensajes y la confirmación por IA pueden desactivarse en cualquier momento sin que ello afecte al resto del servicio.\n\nLos permisos de ubicación, notificaciones, cámara, micrófono o dispositivo pueden retirarse en el sistema operativo. En ese caso, las funciones que dependen de ellos dejarán de funcionar o quedarán incompletas, y KidGate lo indica en la pantalla del padre o madre en lugar de mostrar un control que ya no funciona.',
      },
      {
        title: '14. Datos de los hijos',
        body: 'KidGate procesa los datos de los hijos únicamente conforme a la configuración e instrucciones de la cuenta parental, dentro de las funciones que el padre o madre ha activado y de los permisos concedidos. Si se detecta que los datos de un hijo se proporcionaron sin la autoridad o el consentimiento requeridos, KidGate podrá restringir la cuenta y eliminar los datos tras su verificación.',
      },
      {
        title: '15. Incidentes de datos',
        body: 'Cuando se confirme un incidente de seguridad que afecte a datos, KidGate lo evaluará, adoptará medidas de mitigación razonables y notificará a los usuarios o a las autoridades competentes cuando la ley lo exija. Los padres deben proteger sus cuentas, sus PIN y sus dispositivos, e informar con prontitud a KidGate de cualquier sospecha de acceso no autorizado.',
      },
      {
        title: '16. Cambios y contacto',
        body: 'Esta política puede actualizarse cuando cambien las funciones o las leyes. Los cambios importantes se comunicarán en la aplicación o a través de un canal de distribución adecuado.\n\nLas preguntas y solicitudes relacionadas con la privacidad se dirigen a support@kidgate.app, la dirección publicada también en las fichas de KidGate en las tiendas de aplicaciones.',
      },
    ],
  },
  termsOfService: {
    title: 'Términos de Servicio',
    effectiveDate: 'Vigente a partir del 6 de septiembre de 2026',
    intro:
      'Al iniciar sesión en KidGate o utilizarlo, usted confirma que ha leído y acepta estos términos. KidGate es el nombre de producto y comercial bajo el que se opera el servicio.',
    sections: [
      {
        title: '1. Elegibilidad',
        body: 'Usted debe tener la edad suficiente para celebrar un contrato conforme a la ley aplicable y contar con la autoridad legal sobre cada hijo, cuenta y dispositivo que administre. No utilice el servicio si no está de acuerdo con estos términos.',
      },
      {
        title: '2. Qué es KidGate y qué no es',
        body: 'KidGate proporciona herramientas que ayudan a los padres a administrar dispositivos, establecer límites, ver el estado y recibir alertas. No sustituye la supervisión directa, el asesoramiento médico, los servicios de emergencia, las fuerzas del orden ni los servicios profesionales de protección infantil. El SOS le avisa a usted; no contacta con los servicios de emergencia y no funciona cuando el dispositivo no tiene red.',
      },
      {
        title: '3. Software instalado en un dispositivo administrado',
        body: 'Aplicar una regla requiere software en el dispositivo al que afecta, y cada plataforma se lo concede de forma distinta: el marco Tiempo de uso de Apple en iPhone y iPad, un servicio de accesibilidad y una concesión de administrador de dispositivos en Android, un servicio de accesibilidad en Android TV, una extensión del sistema y un agente en segundo plano en macOS, un servicio en segundo plano en Windows, y una extensión de navegador en Chrome. Usted lo instala por su cuenta, en un dispositivo que tiene derecho a administrar, y puede retirarlo de ese dispositivo en cualquier momento. Retirarlo, o revocar un permiso del que depende, detiene la aplicación de las reglas en ese dispositivo — KidGate le avisará de que ha ocurrido, pero no puede impedirlo.',
      },
      {
        title: '4. Responsabilidades de los padres',
        body: 'Usted debe proporcionar el aviso adecuado a los hijos, obtener el consentimiento requerido, configurar los permisos correctamente, probar las funciones y cumplir con las leyes de privacidad, vigilancia, empleo, educación y protección infantil. La supervisión de mensajes y la confirmación por IA son cada una un consentimiento independiente y una decisión suya, con el aviso que esa decisión exija en su jurisdicción. No utilice KidGate para la vigilancia encubierta, el acoso, el control ilícito o la vulneración de los derechos de otra persona.',
      },
      {
        title: '5. Seguridad de la cuenta y PIN parental',
        body: 'Usted es responsable de la actividad de la cuenta y de proteger los dispositivos, los PIN y los métodos de inicio de sesión. El PIN parental protege los ajustes sensibles en un dispositivo infantil y no puede recuperarse desde un dispositivo — se guarda como un hash unidireccional. Informe con prontitud de cualquier sospecha de acceso no autorizado. KidGate podrá restringir temporalmente cuentas o dispositivos para proteger a los usuarios o investigar un posible abuso.',
      },
      {
        title: '6. Permisos de la plataforma y limitaciones técnicas',
        body: 'Las funciones dependen de los permisos del sistema operativo, el acceso a la red, el estado de la batería, la configuración del fabricante, los servicios de ubicación y las plataformas de terceros, y lo que permite cada plataforma es distinto. Parte de la aplicación de las reglas es, por diseño, solo del mejor esfuerzo posible — en un ordenador, una app bloqueada se cierra en lugar de impedirse su arranque — y KidGate indica cuál es en la pantalla que la ofrece. Las alertas pueden retrasarse, ser incompletas o inexactas. Usted debe verificar los dispositivos directamente y no debe depender únicamente de KidGate para la seguridad o las emergencias.',
      },
      {
        title: '7. Planes, prueba gratuita y nivel gratuito',
        body: 'Una prueba gratuita con acceso completo empieza cuando se vinculan sus primeros dispositivos de padre y de hijo, y dura el periodo indicado en la aplicación. Cuando termina, las reglas que configuró siguen funcionando sin pago en un dispositivo infantil — Límite diario, Horas bloqueadas, Apps bloqueadas, límites por app, el Filtro web, la búsqueda segura, el Bloqueo de dispositivo, las peticiones de tiempo extra y las tareas con recompensa — y un padre o madre puede seguir pidiendo a ese dispositivo su posición actual un número limitado de veces al día. El SOS nunca está detrás de un pago. La actividad en vivo, el historial, los informes semanales, el rastro de ubicación, las direcciones, las alertas de lugares y la supervisión de mensajes pasan a formar parte de Premium. Cuando una familia tiene más dispositivos infantiles de los que cubre el plan, los dispositivos adicionales quedan en pausa: siguen aplicando las reglas ya establecidas, esas reglas pueden relajarse pero no endurecerse, y dejan de enviar actividad. Usted elige qué dispositivo permanece supervisado, y esa elección puede cambiarse una vez cada siete días. Quitar un dispositivo infantil no reinicia la prueba. Una familia puede tener vinculado a la vez un número limitado de dispositivos infantiles; el número depende del plan, y la aplicación lo indica cuando se alcanza.',
      },
      {
        title: '8. Suscripciones y pagos',
        body: 'Las compras, renovaciones, cancelaciones y reembolsos se gestionan conforme a los términos de Apple App Store o Google Play, y una suscripción solo puede comprarse o restaurarse desde la app de KidGate para iPhone, iPad o Android — una familia cuyos dispositivos son todos ordenadores, televisores o Chromebooks necesita uno de esos para pagar. Una suscripción cubre a toda la familia y solo el titular de la familia puede comprarla o restaurarla; una compra intentada desde la cuenta de otro padre o madre se rechaza. Los planes mensual y anual se renuevan automáticamente salvo que se cancelen a través de la tienda al menos 24 horas antes de que termine el periodo. El pago único no se renueva, cubre el número de dispositivos infantiles indicado en la aplicación y dura mientras KidGate esté disponible; la sección 12 indica qué ocurre si eso termina. Los precios y las funciones de los planes pueden cambiar previo el aviso exigido por la ley y las normas de la tienda.',
      },
      {
        title: '9. Contenido automatizado y generado por IA',
        body: 'Los resúmenes de los informes semanales, las categorías asignadas a apps y sitios web y el paso de confirmación de la supervisión de mensajes los producen modelos automatizados y pueden equivocarse en ambos sentidos: un sitio puede quedar en la categoría equivocada, un resumen puede describir mal una semana, y una alerta puede saltar con un mensaje inofensivo o no saltar con uno dañino. Trátelo todo como un motivo para mirar y no como una constatación, y no lo tome como única base de una decisión sobre un hijo.',
      },
      {
        title: '10. Licencia y propiedad',
        body: 'KidGate concede una licencia limitada, personal, no exclusiva, intransferible y revocable para utilizar la aplicación conforme a estos términos. Usted no podrá revender, aplicar ingeniería inversa, eludir las protecciones, automatizar la extracción de datos, ni utilizar la marca, el código fuente o el contenido más allá de lo permitido por la ley.',
      },
      {
        title: '11. Conducta prohibida',
        body: 'No comprometa sistemas, distribuya malware, suplante a otras personas, acceda a datos no autorizados, sobrecargue los servicios, eluda los límites, cause daños ni infrinja la ley. KidGate podrá restringir o cancelar el acceso cuando considere razonablemente que se ha producido una infracción.',
      },
      {
        title: '12. Disponibilidad y cambios',
        body: 'El servicio puede cambiar, pausarse o finalizar debido a mantenimiento, seguridad, cambios de plataforma, la ley u operaciones. KidGate podría interrumpirse; en tal caso, las suscripciones activas y el pago único se gestionarán conforme a las normas aplicables de la tienda de aplicaciones — el pago único compra el servicio mientras se ofrezca, no una promesa de que se ofrecerá para siempre. KidGate procura una disponibilidad razonable, pero no promete un funcionamiento ininterrumpido, libre de errores ni compatible con todos los dispositivos.',
      },
      {
        title: '13. Exenciones de responsabilidad',
        body: 'En la medida permitida por la ley, el servicio se proporciona «tal cual» y «según disponibilidad», sin garantías implícitas de comerciabilidad, idoneidad, exactitud o no infracción. Nada excluye los derechos obligatorios del consumidor ni la responsabilidad que la ley no permita excluir.',
      },
      {
        title: '14. Limitación de responsabilidad',
        body: 'En la medida permitida por la ley, KidGate no será responsable de daños indirectos, incidentales, especiales, punitivos, por pérdida de datos, de beneficios o de oportunidades derivados del uso o de la imposibilidad de uso del servicio. La responsabilidad total por reclamaciones relacionadas con el servicio no excederá el importe pagado a KidGate durante los 12 meses anteriores al hecho, salvo que la ley exija lo contrario.',
      },
      {
        title: '15. Indemnización',
        body: 'En la medida permitida por la ley, usted acepta indemnizar a KidGate frente a reclamaciones de terceros causadas por el uso ilícito, la vigilancia no autorizada, la vulneración de los derechos de otra persona o el incumplimiento de estos términos. Esto no cubre los daños legalmente atribuibles directamente a KidGate.',
      },
      {
        title: '16. Terminación y controversias',
        body: 'Usted puede dejar de utilizar el servicio y solicitar la eliminación de la cuenta. La eliminación queda en espera durante 14 días y puede cancelarse en ese plazo; después, la cuenta familiar y sus datos se eliminan de forma permanente. KidGate podrá suspender o cancelar el servicio por infracciones, riesgos de seguridad o requerimientos legales. Las partes deben intentar primero, de buena fe, resolver las controversias, empezando por un correo a support@kidgate.app. Estos términos se rigen por las leyes de Vietnam y las controversias se someten a los tribunales competentes de Vietnam, salvo que las normas obligatorias de protección del consumidor del país en el que usted vive le den derecho a una ley o un tribunal distintos.',
      },
      {
        title: '17. Disposiciones generales',
        body: 'Si alguna disposición se considera inaplicable, las disposiciones restantes permanecerán vigentes. La falta de ejecución de una disposición no constituye una renuncia a la misma. Estos términos, junto con la Política de Privacidad y las condiciones de la tienda que resulten aplicables, constituyen el acuerdo íntegro relativo al servicio. KidGate podrá ceder estos términos como parte de una transferencia de la aplicación; sus derechos conforme a la ley obligatoria no se verán afectados.',
      },
      {
        title: '18. Software de terceros',
        body: 'KidGate incluye dos tipografías, ambas usadas bajo la licencia SIL Open Font License 1.1: Plus Jakarta Sans de Tokotype y Baloo 2 de Ek Type. Las métricas verticales de Baloo 2 se han reajustado para las alturas de línea de esta app; los trazos y el nombre de la familia no cambian, y la licencia permite esa modificación. Ninguna de las dos se vende por separado. Fuentes y licencia:',
        links: [
          {
            label: 'Plus Jakarta Sans en GitHub',
            url: 'https://github.com/tokotype/PlusJakartaSans',
          },
          {
            label: 'Baloo 2 en GitHub',
            url: 'https://github.com/EkType/Baloo2',
          },
          {
            label: 'SIL Open Font License 1.1',
            url: 'https://scripts.sil.org/OFL',
          },
        ],
      },
      {
        title: '19. Cambios y contacto',
        body: 'Estos términos pueden actualizarse. Los cambios importantes se comunicarán de manera adecuada; el uso continuado después de la fecha de vigencia implica la aceptación de los términos actualizados cuando la ley lo permita. Las preguntas se dirigen a support@kidgate.app.',
      },
    ],
  },
} as const;
