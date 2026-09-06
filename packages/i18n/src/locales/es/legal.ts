export const legal = {
  privacyPolicy: {
    title: 'Política de Privacidad',
    effectiveDate: 'Vigente a partir del 6 de septiembre de 2026',
    intro:
      'KidGate es el nombre de producto y comercial utilizado por el desarrollador independiente que opera la aplicación. Esta política explica cómo KidGate gestiona los datos cuando los padres utilizan el servicio para administrar el dispositivo de un hijo. Cubre las apps de KidGate para iPhone, iPad y Android, el agente de KidGate para macOS y Windows, la extensión de navegador de KidGate, la app para Android TV, el panel para padres y el sitio web kidgate.app.',
    sections: [
      {
        title: '1. Alcance y autoridad parental',
        body: 'La cuenta parental configura los permisos y administra los dispositivos de los hijos. Los niños no crean sus propias cuentas de KidGate; un dispositivo solo se administra a través de una cuenta parental. Un padre o madre debe contar con la tutela legal o la autoridad válida antes de supervisar o administrar un dispositivo. KidGate no debe utilizarse para la vigilancia encubierta de adultos ni de nadie fuera del cuidado legal del padre o madre.',
      },
      {
        title: '2. Datos que procesamos',
        body: 'Lo que KidGate procesa depende de qué funciones activa un padre o madre y de qué permisos concede el sistema operativo. Puede incluir: identificadores de cuenta y el inicio de sesión de Google, Apple o correo con el que se creó la cuenta parental; los nombres que un padre o madre da a cada hijo y los dispositivos asignados a ellos; nombre, modelo y formato del dispositivo, versión del sistema operativo y de la app, nivel de batería y estado de vinculación; los propios ajustes — Límite diario, Horas bloqueadas, Apps bloqueadas, límites por app, categorías del Filtro web y el PIN parental, que solo se guarda como un hash unidireccional; los totales de Tiempo de uso, un desglose por app y un registro minuto a minuto de cuándo se usó el dispositivo; las apps instaladas en el dispositivo y las extensiones añadidas a su navegador; los dominios que solicitó un dispositivo infantil y cuáles de ellos rechazó el Filtro web, contados por día y por hora; los títulos de los vídeos reproducidos cuando la plataforma los hace visibles; la ubicación, el historial de ubicación y los lugares que un padre o madre ha guardado; las alertas SOS, los check-in de seguridad y la foto que un hijo envía con cualquiera de los dos; las alertas que se generan cuando se desactiva una protección, cuando se instala una app o cuando un mensaje o una búsqueda coincide con una lista de palabras clave que un padre o madre activó; las peticiones de tiempo extra, las peticiones de desbloqueo de sitios, las tareas con recompensa y los totales semanales de estrellas que muestra la tabla de estrellas; el informe semanal que resume todo lo anterior; los mensajes de soporte y cualquier captura de pantalla adjunta a uno; los informes de fallos y los diagnósticos técnicos; y los datos de transacciones de suscripción facilitados por una tienda de aplicaciones. KidGate no exige el nombre real de un menor cuando una función no lo necesita.',
      },
      {
        title: '3. Qué permanece en el dispositivo del hijo',
        body: 'La supervisión de mensajes y búsquedas se ejecuta en el propio dispositivo, solo en Android, y solo cuando un padre o madre la activa. El dispositivo compara el texto con listas de palabras clave guardadas localmente; lo que se envía es una alerta que indica la palabra detectada, su categoría, la app en la que apareció y la hora. El mensaje en sí, el resto de la conversación y con quién se mantuvo ni se transmiten ni los guarda KidGate. Hay una excepción, y es un consentimiento aparte: cuando un padre o madre ha aceptado además la confirmación por IA, un mensaje entrante cuya coincidencia era ambigua se envía al modelo Gemini de Google para que lo valore, de modo que no se avise a un padre o madre por una palabra corriente. El texto que escribe el hijo nunca se envía para la confirmación por IA, sea cual sea el consentimiento de la familia. Fuera de esa vía, KidGate registra el dominio que pidió un dispositivo y si fue rechazado — no la dirección de una página ni su contenido — y los archivos, las fotos y la navegación que ninguna función activada lee permanecen en el dispositivo.',
      },
      {
        title: '4. Cómo se utilizan los datos',
        body: 'Los datos respaldan la autenticación, el emparejamiento de dispositivos, los controles parentales, la sincronización de configuraciones, las alertas, los informes, las suscripciones, la prevención de fraude, la seguridad de la cuenta, la resolución de problemas y la fiabilidad. KidGate no vende datos personales ni utiliza los datos de los hijos para publicidad basada en el comportamiento. Ninguna app de KidGate contiene anuncios.',
      },
      {
        title: '5. Procesamiento automatizado e IA',
        body: 'Tres funciones utilizan los modelos Gemini de Google, a los que se accede a través de Google Cloud: el resumen escrito del informe semanal, generado a partir de las propias cifras de uso de la familia; la clasificación de apps y dominios de sitios web en las categorías que usan el Filtro web y las listas de apps; y el paso de confirmación descrito en la sección 3, que solo se ejecuta cuando un padre o madre lo ha consentido. Estos modelos producen valoraciones que pueden ser erróneas. Una categoría, una frase de un resumen o una alerta de mensaje es un motivo para mirar, no una constatación, y KidGate no toma sobre esa base ninguna decisión con efectos jurídicos o similarmente significativos para un menor. Los resultados de los modelos no se usan para entrenar los modelos de Google.',
      },
      {
        title: '6. Bases legales y consentimiento',
        body: 'KidGate procesa datos para prestar los servicios solicitados, cumplir con obligaciones legales, proteger intereses legítimos de seguridad, o sobre la base del consentimiento cuando así se requiera. Los padres son responsables de proporcionar los avisos requeridos y de obtener el consentimiento válido para un hijo o usuario del dispositivo. La supervisión de mensajes y la confirmación por IA son cada una un consentimiento expreso e independiente, registrado por dispositivo y revocable en cualquier momento.',
      },
      {
        title: '7. Proveedores de servicios',
        body: 'KidGate está construido sobre Google Cloud y Firebase, que aportan la autenticación, la base de datos, el almacenamiento de archivos, las funciones de servidor, las notificaciones push mediante Firebase Cloud Messaging, los informes de fallos mediante Firebase Crashlytics y los modelos Gemini mencionados en la sección 5. Apple y Google procesan además las compras de suscripción, las renovaciones y los reembolsos a través de sus tiendas de aplicaciones, y Google Analytics procesa la medición descrita en la sección 8. Los datos se divulgan a estos proveedores únicamente en la medida necesaria para prestar el servicio; a las autoridades cuando la ley lo exija; o para abordar cuestiones de seguridad, fraude o abuso. Los proveedores tienen sus propias obligaciones y políticas, y KidGate no autoriza a ninguno a utilizar los datos de los hijos para fines de marketing independientes.',
      },
      {
        title: '8. Analítica del sitio web y cookies',
        body: 'El sitio web kidgate.app mide tres cosas con Google Analytics: las visitas a las páginas y los clics en cada uno de los dos enlaces de descarga para ordenador. Esa medición instala una cookie de analítica en el navegador de quien lee. Las direcciones IP se truncan, Google Signals y los identificadores publicitarios están desactivados, y no se envía nada que identifique a quien lee ni a una familia. Las apps de KidGate comunican un pequeño conjunto de eventos a la misma propiedad para mostrar qué funciones se usan; esos eventos llevan un identificador de instancia de app y nunca el nombre, un mensaje, la ubicación ni la navegación de un menor. Las apps y el sitio web no utilizan ninguna red publicitaria ni de rastreo de ningún tipo.',
      },
      {
        title: '9. Dónde se almacenan los datos y cómo se protegen',
        body: 'Los datos de las familias se almacenan en la región de Singapur de Google Cloud y pueden procesarse en otros lugares por los proveedores mencionados en la sección 7, lo que significa que pueden salir del país en el que vive una familia. KidGate emplea medidas de seguridad técnicas y organizativas razonables, incluidos controles de acceso, prácticas de privilegio mínimo, reglas en el servidor que limitan cada lectura a una sola familia y transporte seguro. El PIN parental solo se guarda como un hash unidireccional y no puede volver a leerse. Ningún sistema es completamente seguro; KidGate no puede garantizar que los datos nunca se perderán, se accederá a ellos sin autorización o sufrirán interrupciones.',
      },
      {
        title: '10. Acceso del personal de KidGate para soporte',
        body: 'Cuando es necesario para atender una solicitud de soporte o diagnosticar un fallo, el personal autorizado de KidGate puede abrir una cuenta familiar y ver lo que ve un padre o madre: su configuración y sus dispositivos, y la actividad que contiene — incluidos el historial de ubicación, el historial web, las alertas de mensajes y las fotos adjuntas a un SOS o a un check-in. También puede cambiar ajustes y enviar comandos a los dispositivos. Este acceso se limita al personal autorizado, exige autenticación en dos pasos y se utiliza únicamente con fines de soporte; cada entrada en una cuenta familiar queda registrada con la hora y el motivo indicado. Las acciones concretas realizadas durante una sesión de soporte no se registran hoy por separado.',
      },
      {
        title: '11. Cuánto tiempo se conservan los datos',
        body: 'Los registros caducan según un calendario y se eliminan automáticamente: el Tiempo de uso y el uso por app, el historial web, el historial de vídeos, el historial de ubicación y el historial de actividad a los 30 días; las alertas SOS, los check-in de seguridad y las peticiones de tiempo extra a los 90 días; los informes semanales a los 365 días. Los códigos de vinculación caducan en cuestión de minutos y una sesión iniciada en el navegador dura 7 días. Algunos registros no tienen hoy fecha de caducidad y se conservan hasta que se elimina la cuenta familiar: la cuenta y sus ajustes, los lugares guardados, las fichas de hijos y dispositivos, las tareas con recompensa, las peticiones de desbloqueo de sitios, la tabla de estrellas y el historial semanal de tiempo de uso, y la lista de apps instaladas en cada dispositivo. Los mensajes de soporte y cualquier captura de pantalla adjunta a uno se conservan indefinidamente y no se eliminan al borrar la cuenta; está previsto cerrar esa brecha. También pueden conservarse registros limitados cuando lo exija la ley, para la prevención de fraude, copias de seguridad rotativas o transacciones de la tienda de aplicaciones.',
      },
      {
        title: '12. Eliminación de una cuenta',
        body: 'Un padre o madre puede solicitar la eliminación en Configuración o desde kidgate.app. La solicitud queda en espera durante 14 días y puede cancelarse en ese plazo; después, se eliminan la cuenta familiar, cada hijo y dispositivo que dependen de ella y los archivos almacenados que le pertenecen, y se retira el propio inicio de sesión. La eliminación es permanente y después no hay exportación posible. Los registros de soporte mencionados en la sección 11 son la excepción y sobreviven a ella.',
      },
      {
        title: '13. Derechos y opciones',
        body: 'Según la ley aplicable, los usuarios pueden solicitar acceso, corrección, eliminación, restricción, oposición o retirada del consentimiento. La supervisión de mensajes y la confirmación por IA pueden desactivarse en cualquier momento sin que ello afecte al resto del servicio. Los permisos de ubicación, notificaciones, cámara y dispositivo pueden desactivarse en el sistema operativo, pero las funciones que dependen de ellos dejarán de funcionar o quedarán incompletas, y KidGate lo indica en la pantalla del padre o madre en lugar de mostrar un control que ya no funciona.',
      },
      {
        title: '14. Datos de los hijos',
        body: 'KidGate procesa los datos de los hijos únicamente conforme a la configuración e instrucciones de la cuenta parental. Si los datos de un hijo se proporcionaron sin la autoridad o el consentimiento requeridos, KidGate podrá restringir la cuenta y eliminar los datos tras su verificación.',
      },
      {
        title: '15. Incidentes de datos',
        body: 'KidGate evaluará los incidentes de seguridad confirmados, adoptará medidas de mitigación razonables y notificará a los usuarios o a las autoridades cuando la ley lo exija. Los padres deben proteger las cuentas, los PIN y los dispositivos, e informar con prontitud de cualquier sospecha de acceso no autorizado.',
      },
      {
        title: '16. Cambios y contacto',
        body: 'Esta política puede cambiar a medida que cambien las funciones o las leyes. Las actualizaciones importantes se comunicarán en la aplicación o a través de un canal de distribución adecuado. Las solicitudes relacionadas con la privacidad pueden enviarse a través del canal de asistencia publicado en la ficha de KidGate en la tienda de aplicaciones.',
      },
    ],
  },
  termsOfService: {
    title: 'Términos de Servicio',
    effectiveDate: 'Vigente a partir del 6 de septiembre de 2026',
    intro:
      'Al iniciar sesión en KidGate o utilizarlo, usted confirma que ha leído y acepta estos términos. KidGate es el nombre de producto y comercial utilizado por el desarrollador independiente que opera el servicio.',
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
        body: 'Aplicar una regla requiere software en el dispositivo al que afecta, y cada plataforma se lo concede de forma distinta: el marco Tiempo de uso de Apple en iPhone y iPad, un servicio de accesibilidad y una concesión de administrador de dispositivos en Android, una extensión del sistema y un agente en segundo plano en macOS, un servicio en segundo plano en Windows, y una extensión de navegador en Chrome. Usted lo instala por su cuenta, en un dispositivo que tiene derecho a administrar, y puede retirarlo de ese dispositivo en cualquier momento. Retirarlo, o revocar un permiso del que depende, detiene la aplicación de las reglas en ese dispositivo — KidGate le avisará de que ha ocurrido, pero no puede impedirlo.',
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
        body: 'Una prueba gratuita con acceso completo empieza cuando se vinculan sus primeros dispositivos de padre y de hijo, y dura el periodo indicado en la aplicación. Cuando termina, las reglas que configuró siguen funcionando sin pago en un dispositivo infantil — Límite diario, Horas bloqueadas, Apps bloqueadas, el Filtro web, el Bloqueo de dispositivo, las peticiones de tiempo extra y las tareas con recompensa — mientras que la actividad en vivo, el historial, los informes semanales y el seguimiento de ubicación pasan a formar parte de Premium. Cuando una familia tiene más dispositivos infantiles de los que cubre el plan, los dispositivos adicionales quedan en pausa: siguen aplicando las reglas ya establecidas y dejan de enviar actividad, y usted elige qué dispositivo permanece supervisado. Quitar un dispositivo infantil no reinicia la prueba, y una familia solo puede vincular un número limitado de dispositivos infantiles durante la vida de la cuenta.',
      },
      {
        title: '8. Suscripciones y pagos',
        body: 'Las compras, renovaciones, cancelaciones y reembolsos se gestionan conforme a los términos de Apple App Store, Google Play o el proveedor de pagos correspondiente. Una suscripción cubre a toda la familia y solo paga el titular de la familia. Los precios y las funciones de los planes pueden cambiar previo el aviso exigido por la ley y las normas de la tienda.',
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
        body: 'El servicio puede cambiar, pausarse o finalizar debido a mantenimiento, seguridad, cambios de plataforma, la ley u operaciones. KidGate está operado por un desarrollador independiente y podría interrumpirse; en tal caso, las suscripciones activas se gestionarán conforme a las normas aplicables de la tienda de aplicaciones. KidGate procura una disponibilidad razonable, pero no promete un funcionamiento ininterrumpido, libre de errores ni compatible con todos los dispositivos.',
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
        body: 'Usted puede dejar de utilizar el servicio y solicitar la eliminación de la cuenta. La eliminación queda en espera durante 14 días y puede cancelarse en ese plazo; después, la cuenta familiar y sus datos se eliminan de forma permanente. KidGate podrá suspender o cancelar el servicio por infracciones, riesgos de seguridad o requerimientos legales. Las partes deben intentar primero, de buena fe, resolver las controversias; la ley y los tribunales competentes se determinan conforme a las normas obligatorias aplicables al usuario y al operador.',
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
        body: 'Estos términos pueden actualizarse. Los cambios importantes se comunicarán de manera adecuada; el uso continuado después de la fecha de vigencia implica la aceptación de los términos actualizados cuando la ley lo permita. Las preguntas pueden enviarse a través del canal de asistencia en la ficha de KidGate en la tienda de aplicaciones.',
      },
    ],
  },
} as const;
