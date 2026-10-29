export const userGuide = {
  title: 'Guía del usuario',
  subtitle:
    'Ayuda paso a paso sobre permisos, vinculación de dispositivos, controles diarios y funciones de seguridad.',
  stepLabel: 'Paso {{n}}',
  stepsSectionTitle: 'Pasos',
  tipTitle: 'Consejo',
  // The Help Center video button: the wizard's own label (child.setupWizardWatchGuide).
  watchVideo: 'Ver cómo hacerlo',
  searchPlaceholder: 'Buscar en la guía…',
  searchClear: 'Borrar búsqueda',
  searchEmpty: 'Nada en la guía coincide con eso. Prueba con otra palabra.',
  groups: {
    gettingStarted: {
      title: 'Primeros pasos',
      description: 'Configura los dispositivos de padres e hijos por primera vez',
    },
    connection: {
      title: 'Conectar dispositivos',
      description: 'Vincula un dispositivo del niño o invita a otro padre',
    },
    permissions: {
      title: 'Permisos de la app',
      description:
        'Concede los permisos que KidGate necesita en el dispositivo del niño',
    },
    controls: {
      title: 'Controles diarios',
      description:
        'Límite diario, Horas bloqueadas, Apps bloqueadas, Límites de apps, Bloqueo de dispositivo, Solicitudes de tiempo y Tareas premiadas',
    },
    safety: {
      title: 'Seguridad y supervisión',
      description: 'Ubicación, Check-in, SOS, Filtro web y protección',
    },
    reports: {
      title: 'Informes e historial',
      description:
        'Informes de tiempo de pantalla, historial web y de vídeos, y alertas de apps y de mensajes',
    },
    account: {
      title: 'Cuenta y plan',
      description:
        'Premium, alertas, idioma, panel web, PIN, soporte y eliminación de la cuenta',
    },
  },
  topics: {
    getStartedParent: {
      title: 'Configura un dispositivo de padre o madre',
      summary:
        'Crea tu cuenta y tu familia, y luego conecta tu primer dispositivo del niño.',
      tip: 'Configura el PIN parental cuanto antes. Lo necesitarás para cambiar ajustes sensibles y desbloquear controles en el dispositivo del niño.',
      steps: {
        '1': 'Instala KidGate en tu dispositivo. Abre la app y selecciona «Este es un dispositivo de padre o madre».',
        '2': 'Selecciona «Únete a KidGate» e inicia sesión con Google o Apple, o crea una cuenta de correo electrónico.',
        '3': 'En Familia, selecciona «Crear familia» y ponle un nombre a tu familia (por ejemplo, «Familia García»). Este nombre aparecerá cuando otros padres se unan. Si otro padre o madre ya creó tu familia, selecciona «Unirse a una familia».',
        '4': 'Si eres el propietario de la familia, configura un PIN parental (6 dígitos) en Ajustes, luego Seguridad. Memorízalo o guárdalo en un lugar seguro, y no lo compartas con los niños.',
        '5': 'Recomendado: activa el Bloqueo de la app y el desbloqueo biométrico en Ajustes para que nadie más pueda abrir la app de los padres en tu dispositivo.',
        '6': 'Abre Familia y pulsa el icono de escaneo («Escanear código»). La cámara se abre directamente: escanea el código QR del dispositivo del niño o selecciona «Introducir el código manualmente» y escribe el código.',
        '7': 'Cuando el dispositivo del niño se conecte, KidGate te pregunta quién lo usa: elige a tu hijo o hija (o añade un perfil), o «Nadie» si es un dispositivo compartido. Después abre el perfil del niño en Familia (o el dispositivo, si no está asignado a ningún niño). Configura el Límite diario y las Horas bloqueadas, y completa los permisos junto con tu hijo.',
      },
    },
    getStartedChild: {
      title: 'Configura un dispositivo del niño',
      summary: 'Instala KidGate en el dispositivo del niño y completa los permisos.',
      tip: 'Hazlo junto con un padre o madre. Muchas pantallas de permisos aparecen solo una vez y son fáciles de pasar por alto a solas.',
      steps: {
        '1': 'Instala KidGate en el dispositivo del niño. Abre la app y selecciona «Este es un dispositivo de un niño».',
        '2': 'Deja abierta la pantalla de vinculación. Muestra el código QR al padre o madre, o léele en voz alta el código de 6 caracteres.',
        '3': 'En el dispositivo del padre, escanea el código QR o introduce el código. En el dispositivo del niño, confirma al padre cuando se te pida — acepta solo a alguien que conozcas.',
        '4': 'Espera hasta que la pantalla de inicio muestre que el dispositivo está conectado. No cierres KidGate a la fuerza durante la configuración.',
        '5': 'En la pantalla «Estado», selecciona «Continuar configuración» en la tarjeta «Termina la configuración con tu padre o madre». Después, «Configurar protección» te pide cada permiso que necesita KidGate (notificaciones, ubicación, cámara y permisos específicos de la plataforma), uno por uno. Permite cada uno, o salta por ahora un paso opcional.',
        '6': 'Deja KidGate instalado y conectado en el dispositivo del niño. A partir de ahora, los padres gestionan los límites desde su propio dispositivo.',
      },
    },
    connectChild: {
      title: 'Conectar el teléfono o la tablet del niño',
      summary:
        'Vincula un nuevo dispositivo del niño a tu familia con un código QR o un código.',
      tip: 'Los códigos caducan. Si la vinculación falla, selecciona «Nuevo código» en el dispositivo del niño e inténtalo de nuevo. El plan gratuito envía informes desde un solo dispositivo y solo permite endurecer las reglas en ese dispositivo, así que otro dispositivo que vincules empieza en pausa.',
      steps: {
        '1': 'En el dispositivo del niño: abre KidGate, luego «Este es un dispositivo de un niño». Deja visible la pantalla del código QR.',
        '2': 'En el dispositivo del padre o madre: abre Familia y pulsa el icono de escaneo («Escanear código»).',
        '3': 'La cámara se abre directamente: permite el acceso a la cámara si se solicita, y encuadra el código QR del dispositivo del niño dentro del marco.',
        '4': 'O usa el código: selecciona «Introducir el código manualmente», escribe los 6 caracteres que aparecen en el dispositivo del niño y continúa.',
        '5': 'En el dispositivo del niño, lee con atención la pantalla de confirmación. Selecciona «Sí, conectar» solo si el nombre del padre o madre es correcto.',
        '6': 'Espera a que el dispositivo del padre confirme la conexión. Después se le pregunta al propietario de la familia quién usa el nuevo dispositivo: un niño, o «Nadie» si es un dispositivo compartido. El dispositivo aparecerá en «Familia».',
        '7': 'Abre el nuevo dispositivo y comprueba que muestra una hora en «Última actividad» (en un iPhone, Última conexión). Que un dispositivo esté en línea significa que alguien lo usó en los últimos 10 minutos, así que uno que nadie usa figura como sin conexión aunque siga conectado. Si no aparece ninguna hora, vuelve a abrir KidGate en el dispositivo del niño y revisa la conexión de red.',
        '8': 'A continuación, concede los permisos en el dispositivo del niño (consulta el grupo Permisos de la app). Los controles no funcionarán del todo hasta que esos permisos estén activados.',
      },
    },
    connectComputer: {
      title: 'Conectar un ordenador (Mac o Windows)',
      summary:
        'Instala KidGate en el Mac o el PC con Windows de tu hijo y vincúlalo igual que un teléfono.',
      keywords: 'mac, macbook, windows, pc, portátil, ordenador, computadora',
      tip: 'Configura KidGate mientras tu hijo tiene la sesión iniciada con su propia cuenta en el ordenador, y haz que esa cuenta sea estándar (no de administrador). Una cuenta de administrador puede eliminar KidGate.',
      steps: {
        '1': 'En el ordenador, abre kidgate.app/download y descarga KidGate para Mac o Windows.',
        '2': 'Ejecuta el instalador y aprueba la solicitud de permisos de administrador. En Windows, si un mensaje indica que Windows protegió tu PC, elige «Más información» y luego «Ejecutar de todas formas».',
        '3': 'Abre KidGate en el ordenador. Muestra un código QR y un código de 6 caracteres; no hace falta iniciar sesión. Si su ventana está cerrada, haz clic en el icono de KidGate en la barra de menús (Mac) o en el área de notificación (Windows).',
        '4': 'En tu dispositivo, abre Familia, pulsa el icono de escaneo («Escanear código») y escanea el código QR, o selecciona «Introducir el código manualmente» y escribe el código.',
        '5': 'En el ordenador, comprueba el nombre del padre o madre y selecciona «Sí, conectar».',
        '6': 'Sigue los pasos de «Terminar de configurar este dispositivo». En un Mac, selecciona «Abrir Ajustes» junto a «Aprobar el filtro web» y activa KidGate en la página que se abre: el Filtro web no funciona hasta que lo hagas. En un Mac, selecciona «Permitir» para Ubicación y Cámara. En Windows, activa KidGate para ambas en Configuración, en Privacidad y seguridad, si el paso te lo pide.',
        '7': 'De vuelta en tu dispositivo, el propietario de la familia elige qué hijo usa el ordenador. En un Mac o un PC con Windows, bloqueas las apps desde «Aplicaciones instaladas».',
      },
    },
    updateComputer: {
      title: 'Actualizar KidGate en un ordenador',
      summary:
        'Instala una nueva versión en el Mac o el PC con Windows de tu hijo. Se hace en el propio ordenador, con la contraseña de administrador, no desde tu dispositivo.',
      keywords:
        'upgrade, obsoleto, versión antigua, versión vieja, última versión, reinstalar, admin, control de cuentas de usuario, macbook, imac, portátil, laptop, computadora',
      tip: 'Si tu hijo usa una cuenta estándar (no de administrador), como se recomienda al conectar el ordenador, la actualización pide el nombre y la contraseña de un administrador, así que tu hijo no puede instalarla solo. No hace falta cambiar de cuenta: escríbelos en la ventana que aparece. El ordenador sigue conectado y conserva sus reglas; no hay que volver a vincular nada.',
      steps: {
        '1': 'Recibes una notificación por cada ordenador que necesita la actualización, y la página del ordenador indica que está desactualizado. No hay nada que instalar desde tu dispositivo: ve al ordenador.',
        '2': 'En el ordenador, abre KidGate. Si su ventana está cerrada, haz clic en el icono de KidGate en la barra de menús (Mac) o en el área de notificación (Windows). En la parte superior de la pantalla Estado, un aviso indica «Hay una versión más reciente de KidGate»; si la actualización no debe esperar, aparece en rojo con «Actualización importante».',
        '3': 'Selecciona «Obtener la actualización». KidGate descarga la nueva versión y abre el instalador. Si la descarga falla, se abre kidgate.app/download: descarga KidGate allí y ejecútalo, como la primera vez que lo instalaste.',
        '4': 'En un Mac, sigue el instalador e introduce el nombre y la contraseña del administrador cuando se te pidan. En Windows, primero Windows pregunta si quieres permitir que la aplicación haga cambios: introduce la contraseña del administrador si se te pide, selecciona «Sí» y luego sigue el instalador.',
        '5': 'Mantén el ordenador encendido hasta que KidGate se vuelva a abrir por sí solo. De vuelta en tu dispositivo, el ordenador ya no aparece como desactualizado (en el panel web, recarga la página).',
      },
    },
    connectTv: {
      title: 'Conectar un Android TV',
      summary:
        'Instala KidGate en un Android TV y vincúlalo desde tu dispositivo, sin escribir nada con el mando a distancia.',
      keywords: 'android tv, google tv, televisor, tele, box',
      tip: 'En una TV no hay Ubicación, SOS, Check-in ni Solicitudes de tiempo, y una app bloqueada se cierra después de abrirse: no se impide que se abra. El tiempo de pantalla puede llegar con hasta una hora de retraso. Una TV sin servicios de Google Play no recibe notificaciones push, así que un bloqueo, un desbloqueo o un cambio de reglas pueden tardar hasta 30 minutos en llegar.',
      steps: {
        '1': 'En la TV, abre Google Play, busca KidGate e instálalo.',
        '2': 'Abre KidGate en la TV. Muestra un código QR y un código de 6 caracteres; no hace falta iniciar sesión.',
        '3': 'En tu dispositivo, abre Familia, pulsa el icono de escaneo («Escanear código») y escanea el código QR de la TV, o selecciona «Introducir el código manualmente» y escribe el código.',
        '4': 'La TV se conecta sola en unos segundos. No hay que confirmar nada con el mando.',
        '5': 'Sigue los pasos de «Configurar protección» en la TV: selecciona «Aceptar» para activar Accesibilidad, «Abrir Ajustes» para Acceso de uso y Mostrar sobre otras aplicaciones, y luego «Activar VPN» y aprueba la conexión para que funcione el Filtro web.',
        '6': 'Si un ajuste no se mantiene activado, reinicia la TV e inténtalo de nuevo. Puedes volver a abrir «Configurar protección» desde la pantalla principal de KidGate en la TV.',
        '7': 'De vuelta en tu dispositivo, el propietario de la familia elige qué hijo usa la TV. Las apps de la TV las bloqueas desde «Aplicaciones instaladas».',
      },
    },
    connectChrome: {
      title: 'Conectar la extensión de Chrome',
      summary:
        'Añade el filtro web de KidGate a Chrome en un Chromebook, Mac o PC. Aparece como un dispositivo propio.',
      keywords: 'chromebook, extensión de chrome, extensión del navegador',
      tip: 'La extensión solo filtra Chrome: no otros navegadores, ni las ventanas de incógnito a menos que lo permitas. En chrome://extensions, abre «Detalles» de KidGate y activa «Permitir en modo incógnito». No incluye Límite diario, Horas bloqueadas, Bloqueo de dispositivo, Apps bloqueadas ni tiempo de uso; para eso hace falta un teléfono, un ordenador o una TV.',
      steps: {
        '1': 'En Chrome, en el ordenador de tu hijo, abre Chrome Web Store, busca KidGate y selecciona «Añadir a Chrome».',
        '2': 'Selecciona el icono de KidGate en la barra de herramientas de Chrome. Si no lo ves, fíjalo desde el menú Extensiones (el icono de la pieza de puzle). La ventana emergente muestra un código QR y un código de 6 caracteres; mantenla abierta durante la vinculación.',
        '3': 'En tu dispositivo, abre Familia, pulsa el icono de escaneo («Escanear código») y escanea el código QR, o selecciona «Introducir el código manualmente» y escribe el código.',
        '4': 'En la ventana emergente de KidGate, comprueba el nombre del padre o madre y selecciona «Sí, conectar».',
        '5': 'De vuelta en tu dispositivo, el propietario de la familia elige qué hijo usa la extensión; luego activa el Filtro web para ella. Hasta entonces, la extensión muestra «Inactivo».',
        '6': 'Opcional, con Premium: para saber qué vídeos ve tu hijo, abre «Vídeos vistos» y activa «Registrar vídeos vistos» para la extensión.',
      },
    },
    inviteParent: {
      title: 'Invitar a otro padre o madre',
      summary:
        'Permite que un segundo padre o madre se una a la misma familia y gestione los mismos dispositivos del niño.',
      tip: 'Solo el propietario de la familia puede aprobar las solicitudes de unión. Aprueba con rapidez, ya que las solicitudes pueden caducar. Una familia puede tener hasta 3 padres en el plan gratuito y durante la prueba, y hasta 6 con Premium.',
      steps: {
        '1': 'En el dispositivo del propietario de la familia, abre Familia. Si tu familia aún no tiene nombre, pulsa +, elige «Crear familia» y ponle un nombre.',
        '2': 'Pulsa + y elige «Invitar a un padre».',
        '3': 'Muestra el código QR de invitación al otro padre o madre, o comparte el código de invitación con él o ella.',
        '4': 'En el otro dispositivo de padre o madre: abre KidGate como padre o madre, abre Familia y pulsa el icono de escaneo («Escanear código»). Luego escanea el código QR de invitación o introduce el código.',
        '5': 'De vuelta en el dispositivo del propietario, abre la solicitud pendiente y selecciona «Aprobar». Recházala si no reconoces a la persona.',
        '6': 'El nuevo padre o madre verá los mismos dispositivos del niño y podrá ayudar a gestionar los límites. Algunas acciones, como renombrar o eliminar dispositivos, siguen siendo exclusivas del propietario.',
      },
    },
    joinFamily: {
      title: 'Unirse a una familia existente',
      summary:
        'Usa una invitación del propietario de la familia para unirte como segundo padre o madre.',
      tip: 'Si la solicitud de aprobación caduca, pide al propietario un nuevo código QR o código de invitación.',
      steps: {
        '1': 'Instala KidGate e inicia sesión como padre o madre en tu dispositivo.',
        '2': 'Abre Familia y pulsa el icono de escaneo («Escanear código»).',
        '3': 'Escanea el código QR de invitación del propietario, o selecciona «Introducir el código manualmente» y escribe el código de invitación de 6 caracteres.',
        '4': 'Espera a que el propietario apruebe la solicitud. Mantén la app abierta hasta que veas que te has unido a la familia.',
        '5': 'Confirma que los dispositivos del niño aparecen en Familia. Abre un dispositivo para ver su estado y sus controles.',
      },
    },
    manageDevices: {
      title: 'Cambiar el nombre o eliminar un dispositivo',
      summary:
        'Pon a un dispositivo un nombre que todos reconozcan, o desconecta uno que tu hijo ya no use.',
      keywords:
        'desvincular, desconectar, borrar dispositivo, móvil viejo, móvil nuevo, vendido, cambiar nombre, restablecer',
      tip: 'Solo el propietario de la familia puede cambiar el nombre de los dispositivos o eliminarlos. Eliminar no se puede deshacer: se borran el tiempo de pantalla, la ubicación, el historial web y de vídeos, la actividad, la lista de apps, las alertas de SOS, los Check-in, las solicitudes y las tareas premiadas del dispositivo. Para protegerlo de nuevo, vincúlalo como un dispositivo nuevo.',
      steps: {
        '1': 'Para cambiar el nombre de un dispositivo, ábrelo desde «Familia» o desde el perfil de tu hijo y selecciona «Editar» junto a su nombre.',
        '2': 'Escribe un nombre que todos los padres reconozcan de un vistazo y guárdalo.',
        '3': 'Para eliminar un dispositivo, ábrelo, selecciona «Eliminar dispositivo» al final de su pantalla y confirma. En la pestaña «Dispositivos de los niños» de la tarjeta de la familia, también puedes deslizar un dispositivo hacia la izquierda.',
        '4': 'El dispositivo sale de tu familia. Un teléfono indica que se ha eliminado; un ordenador, una TV o la extensión de Chrome vuelve a su pantalla de vinculación.',
        '5': 'Para volver a usar el dispositivo, por ejemplo tras restablecerlo o si pasa a otro hijo, vincúlalo como nuevo: abre «Familia» y pulsa el icono de escaneo («Escanear código»).',
      },
    },
    androidPermissions: {
      title: 'Permisos de Android (dispositivo del niño)',
      summary:
        'Activa Acceso de uso, Mostrar sobre otras aplicaciones, Accesibilidad, batería y permisos relacionados.',
      keywords:
        'accesibilidad, acceso al uso, mostrar sobre otras apps, notificaciones, administrador del dispositivo, impedir desinstalación, micrófono, vpn, conceder',
      tip: 'Importa más completarlos todos que el orden en que lo hagas. Haz todos los pasos que ofrece el asistente, incluidos los opcionales, antes de confiar en el bloqueo o en las Horas bloqueadas. Un paso que omitas se queda en la pantalla Estado hasta que lo hagas.',
      steps: {
        '1': 'Abre KidGate en el dispositivo del niño y ve a «Estado». En la tarjeta «Termina la configuración con tu padre o madre», selecciona «Continuar configuración» (cuando los pasos imprescindibles están hechos, la tarjeta dice «La protección básica está activada», con «Reforzarla ahora»). Después, «Configurar protección» recorre los permisos uno por uno, en el orden siguiente.',
        '2': '«Acceso de uso»: abre la pantalla del sistema, busca KidGate y actívalo. Esto es obligatorio para medir el tiempo de pantalla y aplicar límites.',
        '3': 'Ayuda de bloqueo por «Accesibilidad»: lee el aviso y selecciona «Aceptar»; se abre la página de Accesibilidad. Si se abre una lista, busca KidGate en «Apps instaladas/descargadas», actívalo y selecciona «Permitir» en la confirmación de Android. Así se mantiene el bloqueo en vigor.',
        '4': '«Mostrar sobre otras aplicaciones»: permítelo para KidGate, para que la pantalla de bloqueo pueda aparecer sobre otras apps. Después, «Notificaciones»: selecciona «Permitir». KidGate necesita las notificaciones de este dispositivo para las aprobaciones de tiempo y los recordatorios.',
        '5': '«Ubicación»: elige «Permitir siempre»; si no, el mapa solo se actualiza mientras KidGate está abierto. Si el Filtro web está activado, el paso siguiente pide su VPN: selecciona «Activar VPN» y aprueba la solicitud de Android.',
        '6': 'Batería sin restricciones: selecciona «Permitir» cuando se solicite. Si no aparece ningún aviso: Información de la app, luego Batería, luego Sin restricciones.',
        '7': '«Alarmas y recordatorios»: permítelo para que las Horas bloqueadas empiecen y terminen puntualmente. Después, «Impedir desinstalación»: selecciona «Permitir» y luego Activar en la pantalla de confirmación de Android. A partir de entonces, para quitar KidGate hay que desactivar esto primero, y se avisa a un padre o una madre.',
        '8': '«Alertas de mensajes»: selecciona «Permitir acceso a notificaciones» y activa KidGate en la lista que se abre; solo importa cuando un padre o madre activa las Alertas de mensajes. Después, «Cámara» (para las fotos de Check-in y SOS) y el micrófono (para el sonido del SOS): permítelos mientras usas la app. Cuando el asistente muestre «Todo listo», la configuración habrá terminado.',
      },
    },
    iosScreenTime: {
      title: 'Tiempo de uso en iOS (dispositivo del niño)',
      summary:
        'Permite el Uso de apps y sitios web para que funcionen el bloqueo, los horarios y la selección de apps.',
      keywords:
        'tiempo de uso, tiempo en pantalla, family controls, iphone, ipad, autorizar',
      tip: 'Si falla la autorización, KidGate indica el motivo: el dispositivo necesita un código, otra app ya controla Tiempo de uso, o una restricción impide que KidGate lo use. Corrígelo en Ajustes de iOS y vuelve a intentarlo.',
      steps: {
        '1': 'Abre KidGate en el dispositivo del niño y ve a «Estado». En la tarjeta «Termina la configuración con tu padre o madre», selecciona «Continuar configuración» (cuando los pasos imprescindibles están hechos, la tarjeta dice «La protección básica está activada», con «Reforzarla ahora»).',
        '2': 'En «Configurar protección», selecciona «Permitir uso de apps y sitios web».',
        '3': 'En el cuadro de diálogo del sistema, selecciona «Permitir». No cierres el diálogo sin elegir una opción.',
        '4': 'Vuelve a KidGate. El asistente pasa al siguiente paso en cuanto la autorización se completa correctamente.',
        '5': 'Si la autorización se denegó antes: abre Ajustes de iOS, busca KidGate, activa Tiempo de uso en esa página y vuelve a abrir KidGate.',
        '6': 'Para elegir las apps bloqueadas: en el dispositivo del niño, abre Ajustes de KidGate, luego selecciona «Desbloquear con el PIN parental», luego abre Apps bloqueadas y guarda.',
        '7': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Aplicaciones, y confirma que la lista se ha sincronizado. Activa el bloqueo cuando estés listo.',
      },
    },
    oemKeepRunning: {
      title: 'Mantener KidGate en funcionamiento (ajustes del fabricante)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei y dispositivos similares suelen pausar las apps en segundo plano.',
      keywords:
        'xiaomi, samsung, oppo, vivo, huawei, realme, ahorro de batería, inicio automático, deja de funcionar, se cierra en segundo plano',
      tip: 'Tras cambiar las reglas de batería, reinicia el dispositivo del niño una vez, vuelve a abrir KidGate y luego prueba el bloqueo desde el dispositivo del padre.',
      steps: {
        '1': 'Abre KidGate, ve a «Estado» y abre «Configurar protección». Busca el paso «Permitir el inicio automático»; solo aparece en dispositivos cuyo fabricante lo necesita.',
        '2': 'Permite el inicio automático de KidGate en la pantalla de seguridad del fabricante (el texto varía según el dispositivo).',
        '3': 'Configura el uso de batería de KidGate como Sin restricciones tanto en los ajustes de Android como en el menú de batería del fabricante, si existen ambos.',
        '4': 'Desactiva cualquier lista de «apps en reposo», «apps en reposo profundo» o «poner apps en reposo» que incluya a KidGate.',
        '5': 'Si un acceso directo no funciona, abre manualmente la app de Seguridad / Cuidado del dispositivo y busca KidGate, Inicio automático o Batería.',
        '6': 'KidGate no puede leer los ajustes del fabricante, así que selecciona «Listo» en el paso «Permitir el inicio automático» cuando lo hayas permitido allí.',
      },
    },
    dailyLimit: {
      title: 'Configura un Límite diario',
      summary: 'Limita cuántos minutos puede un niño usar sus dispositivos cada día.',
      keywords:
        'tiempo de pantalla, horas por día, se acabó el tiempo, presupuesto, ampliar',
      tip: 'Los datos de uso provienen del dispositivo del niño. Si el contador parece estancado, abre KidGate en el dispositivo del niño y espera una sincronización.',
      steps: {
        '1': 'En el dispositivo del padre, abre Familia, luego toca el perfil del niño (o el dispositivo, si no está asignado a ningún niño).',
        '2': 'En Controles esenciales, selecciona «Límite diario».',
        '3': 'Elige un valor de minutos por día (o edita el límite existente) y guarda. Para un niño, es un total único compartido por todos sus dispositivos.',
        '4': 'Cuando el dispositivo del niño se sincronice, comprueba que los minutos usados hoy aparecen junto al límite.',
        '5': 'Cuando se alcanza el límite, el dispositivo se bloquea hasta la medianoche. Para dar más tiempo hoy, aprueba una solicitud de tiempo o sube el Límite diario. «Desbloquear» solo quita un bloqueo que hayas puesto tú.',
      },
    },
    blockedHours: {
      title: 'Configura las Horas bloqueadas',
      summary:
        'Programa las franjas horarias en las que el dispositivo debe permanecer bloqueado.',
      keywords: 'hora de dormir, noche, horario escolar, horario, pausa',
      tip: 'Configura primero las horas de escuela y las franjas de dormir. Evita franjas superpuestas para mantener el horario claro.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Horas bloqueadas.',
        '2': 'Activa el interruptor «Activar Horas bloqueadas». Mientras esté desactivado, la pantalla no muestra franjas horarias ni forma de añadir una.',
        '3': 'Un horario nuevo empieza con una franja, de 22:00 a 07:00. Toca una franja para ajustar sus horas en el círculo y los días en que se repite. Para añadir otra franja, selecciona «Añadir franja» o una opción de «Añadir rápido».',
        '4': 'Cada cambio se guarda en cuanto lo haces. Para quitar una franja, deslízala hacia la izquierda, o ábrela y selecciona «Quitar».',
        '5': 'En un dispositivo Android del niño, confirma que «Alarmas y recordatorios» sigue permitido para que las franjas empiecen y terminen puntualmente. En un iPhone o iPad, confirma que «Tiempo de uso» sigue permitido.',
        '6': 'Durante una franja activa, la tarjeta de Horas bloqueadas muestra «Horas bloqueadas activas · bloqueado». «Desbloquear» no termina una franja: para terminarla antes, desactiva «Activar Horas bloqueadas» o cambia sus horas.',
      },
    },
    blockedApps: {
      title: 'Bloquear apps específicas',
      summary:
        'Bloquea apps desde «Aplicaciones instaladas». En un iPhone, elígelas en el propio iPhone.',
      keywords:
        'bloquear app, bloquear aplicación, tiktok, facebook, instagram, juegos, roblox, ocultar app',
      tip: 'Un dispositivo del niño conectado recibe cada cambio en un minuto. En iOS, Apple puede ocultar los nombres exactos de las apps a los dispositivos de los padres, y las apps se eligen en el iPhone con el PIN parental.',
      steps: {
        '1': 'En tu dispositivo, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego «Aplicaciones» y después «Aplicaciones instaladas».',
        '2': 'Toca una app y elige «Bloquear». Bloquear una app nueva requiere Premium.',
        '3': 'La app se cierra en el dispositivo del niño en cuanto se abre. Para volver a permitirla, tócala y elige «Desbloquear».',
        '4': 'En un iPhone, elige las apps en el propio iPhone: abre KidGate, luego Ajustes, selecciona «Desbloquear con el PIN parental» y abre «Apps bloqueadas».',
        '5': 'Después, activa «Activar Apps bloqueadas» en tu dispositivo. El estado debería mostrar «Bloqueo activado».',
        '6': 'Pruébalo abriendo una app bloqueada en el dispositivo del niño. Debería quedar restringida según las reglas de la plataforma.',
        '7': 'Para cambiar más adelante la lista de un iPhone, repite la selección en el iPhone con el PIN parental.',
      },
    },
    appLimits: {
      title: 'Configura los Límites de apps',
      summary:
        'Limita por separado el tiempo diario de las apps que elijas, además del Límite diario.',
      keywords: 'límite de tiempo por app, minutos por app, tiktok, youtube, juegos',
      tip: 'Los Límites de apps no están disponibles en iPhone ni iPad. En un ordenador o una TV, una app que alcanza su límite se cierra después de abrirse: no se impide que se abra.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Aplicaciones. Cada dispositivo tiene sus propios límites; si hay más de un dispositivo, cada app indica en cuál está.',
        '2': 'Abre «Aplicaciones instaladas», toca la app y selecciona «Fijar un límite de tiempo». Un límite nuevo empieza en 60 minutos.',
        '3': 'Ajusta cada límite con el selector o con un valor predefinido, de 5 minutos a 8 horas al día. Puedes limitar hasta 20 apps.',
        '4': 'Selecciona «Guardar límite». Se aplica al instante, y los límites se reinician a medianoche en el dispositivo del niño.',
        '5': 'El Límite diario sigue aplicándose a todo el dispositivo, así que una app puede bloquearse antes de agotar su propio límite. Para quitar un límite, tócalo en la sección «Límites actuales» de «Resumen» y luego selecciona «Quitar límite».',
      },
    },
    lockUnlock: {
      title: 'Bloquear y desbloquear el dispositivo',
      summary: 'Bloquea el dispositivo del niño de inmediato, o restaura el acceso.',
      tip: 'En Android, el bloqueo es más eficaz cuando Mostrar sobre otras aplicaciones y Accesibilidad están activados. En iOS, el bloqueo depende de la autorización de Tiempo de uso, y si KidGate estaba cerrado en el iPhone, el bloqueo aparece cuando KidGate vuelve a ejecutarse.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño).',
        '2': 'Selecciona «Bloquear todo» para bloquear todos sus dispositivos, o abre un solo dispositivo y selecciona «Bloquear dispositivo».',
        '3': 'Espera unos segundos. El estado debería cambiar a «Bloqueado». Si nada cambia, abre KidGate en el dispositivo del niño y revisa los permisos.',
        '4': 'Para restaurar el acceso, selecciona «Desbloquear todo» (o «Desbloquear» en la pantalla del dispositivo).',
        '5': 'Opcional: también puedes bloquear o desbloquear rápidamente desde Familia si esos accesos directos aparecen en la tarjeta del dispositivo.',
        '6': 'Un teléfono u ordenador bloqueado sigue permitiendo que tu hijo envíe un SOS. En Android, las llamadas siempre funcionan, y el SOS también abre los mapas y los mensajes durante 5 minutos mientras todo lo demás sigue bloqueado; el SOS aparece en «Actividad».',
      },
    },
    siri: {
      title: 'Usar Siri en tu iPhone',
      summary:
        'Con la voz, bloquea o desbloquea los dispositivos de un niño, dale minutos extra y escucha su tiempo de uso de hoy.',
      keywords: 'voz, comando de voz, hablar, manos libres, asistente, Atajos, voice',
      tip: 'Los comandos de voz funcionan en el iPhone de un padre o madre, para todos los padres de la familia, en el idioma configurado para Siri. En algunos idiomas, Siri no reconoce el nombre KidGate dicho en voz alta (en vietnamita no lo reconoce): escríbele el comando a Siri, o ejecútalo desde la app Atajos. Los teléfonos Android y el panel web no los tienen.',
      steps: {
        '1': 'Inicia sesión en KidGate en tu iPhone y ábrelo una vez. Así Siri aprende los nombres de tus hijos, y un niño o dispositivo que añadas después llega a Siri la próxima vez que abras KidGate. Si Siri dice «Inicia sesión en KidGate primero.», abre KidGate en este iPhone.',
        '2': 'Dile a Siri «KidGate, bloquea a Lucía», con el nombre de tu hijo. Se bloquean todos sus dispositivos, igual que con «Bloquear todo». Un dispositivo no asignado a ningún niño responde a su propio nombre.',
        '3': 'Di «KidGate, desbloquea a Lucía» para devolverle el acceso. Para todos los dispositivos de la familia a la vez, di «KidGate, bloquea todo» o «KidGate, desbloquea todo».',
        '4': 'Di «KidGate, dale minutos extra a Lucía» para añadir 15 minutos hoy en todos sus dispositivos. El tiempo extra termina a medianoche.',
        '5': 'Di «KidGate tiempo de uso de Lucía» para oír su tiempo de uso de hoy. Siri lee los últimos datos que KidGate te mostró, así que abre KidGate antes para tener los más recientes.',
        '6': 'La app Atajos muestra los mismos comandos bajo KidGate, listos para ejecutar con un toque. Para dar otra cantidad, de 5 a 180 minutos, añade la acción «Dar minutos extra a un hijo» a un atajo propio y ajusta allí los minutos.',
      },
    },
    pauseBrowsing: {
      title: 'Pausar la web un rato',
      summary:
        'Bloquea la web en un dispositivo entre 5 minutos y 8 horas. Las llamadas y las apps sin conexión siguen funcionando.',
      keywords: 'apagar internet, pausar wifi, sin red, sin conexión, pausa',
      tip: 'En la extensión de Chrome, la pausa solo afecta a Chrome. Para un descanso que se repita cada día, usa las Horas bloqueadas.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego «Pausar la web» en la sección Supervisión de seguridad.',
        '2': 'Elige una duración con el selector o con un valor rápido (30, 60 o 120 minutos) y confirma.',
        '3': 'La web queda bloqueada en ese dispositivo hasta que se acabe el tiempo. Los ajustes del Filtro web no cambian, y la pausa funciona aunque el Filtro web esté desactivado. En un ordenador, los navegadores se cierran hasta que termina la pausa.',
        '4': 'Para terminarla antes, abre el dispositivo, toca la tarjeta «Pausar la web» y selecciona «Reanudar». Los minutos restantes no se guardan.',
        '5': 'Desde el perfil del niño, la pausa se aplica a un solo dispositivo. Si tu hijo usa varios, pausa cada uno desde la pantalla de ese dispositivo.',
      },
    },
    timeRequests: {
      title: 'Responder a las Solicitudes de tiempo',
      summary:
        'Tu hijo puede pedir minutos extra cuando se le está acabando el Límite diario, y tú los apruebas o rechazas desde tu dispositivo.',
      tip: 'Las solicitudes solo aparecen si el dispositivo tiene un Límite diario. Los minutos aprobados cuentan para hoy, en el dispositivo que los pidió, y no levantan un bloqueo que hayas puesto ni las Horas bloqueadas. Android TV y la extensión de Chrome no pueden enviar solicitudes.',
      steps: {
        '1': 'En el dispositivo del niño, tu hijo selecciona «Solicitar más tiempo» en la pantalla de inicio de KidGate (en Android, también desde la pantalla de bloqueo cuando se alcanza el límite), elige los minutos, añade un motivo si quiere y envía la solicitud.',
        '2': 'Recibes una notificación. Abre KidGate: la solicitud espera en la tarjeta «Requiere aprobación» en Familia, en el perfil del niño y en el dispositivo.',
        '3': 'Revisa los minutos y el motivo, y selecciona «Aprobar» para añadir exactamente esos minutos para hoy, o «Ahora no» para rechazarla.',
        '4': 'El dispositivo del niño recibe la respuesta, y los minutos aprobados se aplican al momento. Cada dispositivo puede tener una sola solicitud pendiente a la vez.',
        '5': 'Las solicitudes respondidas aparecen en «Actividad». Para dejar de recibir estas notificaciones en tu dispositivo, desactiva «Solicitudes de tiempo» en «Notificaciones push», dentro de Ajustes.',
      },
    },
    rewardTasks: {
      title: 'Configura las Tareas premiadas',
      summary:
        'Crea pequeñas tareas que tu hijo pueda completar para ganar minutos extra hoy.',
      tip: 'Los minutos extra solo cuentan si el dispositivo tiene un Límite diario. Los minutos van al dispositivo con el que tu hijo marcó la tarea como hecha. Las Tareas premiadas no están disponibles en Android TV ni en la extensión de Chrome.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Tareas premiadas.',
        '2': 'Selecciona «Nueva tarea» (mientras la lista está vacía, también puedes empezar con una plantilla). Escribe la tarea y elige la recompensa en minutos (de 5 a 240), la dificultad y si se repite «Cada día» o «Una vez»; luego selecciona «Crear tarea».',
        '3': 'En el dispositivo del niño, la tarea aparece en «Gana tiempo extra». Cuando la termine, tu hijo selecciona «Ya lo hice».',
        '4': 'Recibes una notificación. La tarea aparece en «Requiere aprobación» (en Familia y en el perfil del niño) y en «Listas para revisar» (en la pantalla Tareas premiadas). Selecciona «Aprobar» para sumar los minutos a hoy, o «Devolver» para que tu hijo lo intente de nuevo.',
        '5': 'Toca una tarea para editarla o eliminarla. El plan gratuito permite hasta 10 tareas activas a la vez; Premium permite 20.',
        '6': 'Cada tarea vale de 1 a 3 estrellas según su dificultad, y las estrellas cuentan cuando apruebas la tarea. En una familia con 2 o más hijos, cada hijo ve la Tabla de estrellas de esta semana en KidGate en su dispositivo; empieza de nuevo cada semana. Para ocultarla, el propietario de la familia abre «Familia», luego la tarjeta de la familia, y desactiva la «Tabla de estrellas» en la pestaña «Hijos».',
      },
    },
    locationSharing: {
      title: 'Activa el uso compartido de la ubicación',
      summary:
        'Consulta la ubicación más reciente de tu hijo en el dispositivo del padre.',
      keywords: 'gps, mapa, dónde está mi hijo, encontrar el teléfono, lugares',
      tip: 'La ubicación requiere permiso en el dispositivo del niño y una conexión de red estable. El GPS en interiores puede ser menos preciso.',
      steps: {
        '1': 'En el dispositivo del niño, permite la Ubicación para KidGate cuando se solicite (o en los Ajustes del sistema). Elige «Permitir siempre» en Android o «Siempre» en iPhone o iPad; si no, la ubicación solo se actualiza mientras KidGate está abierto.',
        '2': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Ubicación.',
        '3': 'Activa el uso compartido si está desactivado, y luego espera la primera actualización.',
        '4': 'Si el estado sigue mostrando espera, toca el botón de actualizar o vuelve a abrir la pantalla.',
        '5': 'Opcional y parte de Premium: abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego la sección Alertas, y selecciona Lugares para configurar las Alertas de lugares cuando tu hijo entre o salga de un lugar guardado.',
        '6': 'Si el teléfono se ha perdido cerca, abre Ubicación y toca Hacer sonar el dispositivo. Un iPhone no suena mientras esté en silencio o con un modo de concentración activado.',
      },
    },
    checkIn: {
      title: 'Solicita un Check-in',
      summary:
        'Pide a tu hijo que confirme que está a salvo, con su ubicación y, con Premium, una foto.',
      tip: 'La foto forma parte de Premium; el plan gratuito solo pide la ubicación. Para la foto hace falta el permiso de la cámara en el dispositivo del niño.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño).',
        '2': 'Selecciona «Check-in» en la sección Supervisión de seguridad y luego «Enviar» junto al dispositivo.',
        '3': 'El dispositivo del niño recibe una notificación y una pantalla de Check-in. El niño toca para confirmar que está bien, o para pedir ayuda.',
        '4': 'Con Premium, si el acceso a la cámara está permitido, KidGate adjunta una foto junto con la ubicación cuando es posible. En el plan gratuito solo se envía la ubicación.',
        '5': 'En el dispositivo del padre, «Historial de Check-in», en la misma pantalla, muestra la última respuesta y la foto, si la hay.',
      },
    },
    sos: {
      title: 'Alertas de emergencia SOS',
      summary: 'Cómo envía un niño un SOS, qué incluye y cómo responden los padres.',
      keywords:
        'botón de pánico, ayuda, peligro, inseguro, audio, voz, micrófono, sirena, correo, email, abuelos, vecino',
      tip: 'SOS funciona en teléfonos y ordenadores, no en una TV ni en la extensión de Chrome. El sonido solo se graba en teléfonos. Pruébalo una vez en casa, antes de añadir Contactos de confianza o después de avisarles, porque cada SOS les envía un correo. Acuerda con tu hijo cuándo usar SOS y cuándo basta con un Check-in.',
      steps: {
        '1': 'En el dispositivo del niño, abre SOS en KidGate. En un teléfono, es el botón del centro de la barra inferior.',
        '2': 'Mantén pulsado el botón SOS durante 5 segundos. Si se suelta antes, se cancela.',
        '3': 'La alerta se envía en cuanto KidGate tiene la ubicación, lo que puede tardar hasta medio minuto; si no la consigue, se envía igualmente. En un teléfono, después se abre la cámara para una foto, que se puede omitir. Si el micrófono se permitió durante la configuración, se graban hasta 15 segundos de sonido desde el momento en que se envía el SOS.',
        '4': 'Los padres reciben una notificación urgente, incluso durante las «Horas de silencio». Si KidGate está abierto, la alerta aparece en pantalla, con la «Sirena SOS» salvo que esté desactivada en Ajustes.',
        '5': 'Abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego la sección «Alertas», y selecciona «SOS». Cada alerta muestra la ubicación («Abrir en Mapas»), la foto y la «Grabación de sonido», que puede llegar un poco después de la alerta. Selecciona «Me ocupo yo» para marcarla como atendida.',
        '6': 'Para avisar también por correo a personas fuera de la familia, abre «Familia», luego la tarjeta de la familia, y elige «Contactos de confianza». Selecciona «Añadir contacto» para añadir hasta 5. Con cada SOS reciben por correo el nombre del remitente y la última ubicación conocida, nunca la foto ni el sonido. Avísales antes.',
      },
    },
    webFilter: {
      title: 'Restringir sitios web inapropiados',
      summary:
        'Activa el Filtro web para contenido inapropiado donde la plataforma lo permita.',
      keywords:
        'bloquear sitio web, bloquear enlace, url, contenido para adultos, búsqueda segura, modo restringido de youtube, categorías, dns, dns privado, vpn, iphone, ipad',
      tip: 'El filtro lee los nombres de los sitios, no las páginas, y su alcance depende del dispositivo. Los teléfonos filtran los navegadores y muchas apps. Un Mac no puede comprobar los sitios cuyo nombre oculta el navegador, aproximadamente la mitad de las visitas. Windows comprueba Chrome, Edge y Firefox, solo por el nombre del sitio. La extensión de Chrome filtra solo Chrome. Elegir categorías, tener tus propias listas y responder a las peticiones de sitios forman parte de Premium. Combina el Filtro web con las Apps bloqueadas para una protección más sólida.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Filtro web.',
        '2': 'Activa «Filtrar sitios web inapropiados» en la parte superior. Se aplica al instante, así que no hay nada que guardar. «Forzar SafeSearch», en la misma pantalla, también fija Google, Bing y DuckDuckGo en resultados seguros y YouTube en el modo restringido, en Android, Android TV y Chrome. En YouTube, el modo restringido también oculta los comentarios y bloquea algunos vídeos normales, por eso KidGate pregunta antes de activarlo.',
        '3': 'En «Qué bloquear», elige las categorías que quieres rechazar. Añade sitios a «Permitir siempre» o «Bloquear siempre», o activa «Solo sitios permitidos» para rechazar todo lo que no esté en tu lista de permitidos. Cuando tu hijo o hija pide abrir un sitio bloqueado, la petición queda en espera en «Peticiones de sitios». Estos controles forman parte de Premium; el plan gratuito usa un conjunto fijo de categorías.',
        '4': 'Vuelve a comprobarlo más tarde en la misma pantalla. Un cambio llega al dispositivo del niño en unos minutos, y un sitio que ya esté abierto allí puede seguir cargando hasta que se cierre el navegador. Si para entonces no ha llegado, vuelve a abrir KidGate en el dispositivo del niño para que los ajustes se sincronicen.',
        '5': 'En el dispositivo del niño, abre KidGate y aprueba el filtro una vez. En un iPhone o iPad, selecciona Permitir cuando iOS pida añadir configuraciones VPN y luego introduce el código del dispositivo. En Android, aprueba la solicitud de VPN y después abre Ajustes, luego Red e Internet, luego DNS privado, y elige Desactivado, porque los navegadores pueden saltarse el filtro mientras el DNS privado esté activado. En un Mac, selecciona «Abrir Ajustes» junto a «Aprobar el filtro web» y activa KidGate.',
      },
    },
    protectionAlerts: {
      title: 'Alertas de protección',
      summary:
        'Recibe un aviso cuando se desactiva un permiso importante en el dispositivo del niño.',
      tip: 'Una alerta de protección significa que la protección de KidGate se ha debilitado. Restaura el permiso en el dispositivo del niño lo antes posible.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego la sección Alertas, y selecciona Alertas de protección.',
        '2': '«Permisos vigilados» muestra si cada permiso que KidGate necesita sigue activado. Debajo aparece cada cambio de los últimos 30 días, como la desactivación de Accesibilidad o Ubicación.',
        '3': 'En el dispositivo del niño, abre KidGate, luego Estado y vuelve a activar el permiso indicado.',
        '4': 'Vuelve a Alertas de protección y comprueba que el permiso vuelve a aparecer como activado en «Permisos vigilados».',
        '5': 'Mantén las notificaciones activadas en el dispositivo del padre para enterarte rápido de los cambios.',
      },
    },
    usageReports: {
      title: 'Consulta los informes de uso',
      summary:
        'Mira cuánto tiempo se usó cada dispositivo hoy y en los últimos 30 días, también por cada hijo, y en un informe cada lunes.',
      tip: 'Con el plan gratuito ves el total de hoy y las 3 apps principales, actualizados cuando consultas KidGate. Premium añade 30 días de historial, cuándo se usó cada dispositivo, las 10 apps principales, un informe por cada hijo y un nuevo informe semanal cada lunes. iPhone y iPad solo informan del total. El día en que un dispositivo se une a la familia, el uso anterior puede estar incompleto o contarse en «Otras apps».',
      steps: {
        '1': 'Abre Informes. «Hoy» suma todos los dispositivos; debajo están el Informe semanal, cada hijo («Por niño») y cada dispositivo («Por dispositivo»).',
        '2': 'Toca un dispositivo para ver su Informe de uso: el uso de hoy frente al Límite diario, los últimos 30 días, «Cuándo estuvo encendida la pantalla» y «Más usadas». También puedes abrirlo desde «Uso de hoy» en la pantalla del dispositivo.',
        '3': 'Toca el perfil de un hijo para ver un único informe de todos sus dispositivos, en «Hoy», «7 días» o «30 días». El tiempo en dos pantallas a la vez cuenta una sola vez, así que el total puede ser menor que la suma de los dispositivos.',
        '4': 'Con Premium, cada lunes por la mañana llega un nuevo «Informe semanal», con una notificación, para cualquier semana en que se haya usado un dispositivo. Cuando un dispositivo destaca, sugiere un cambio y abre el ajuste correspondiente.',
        '5': 'Al abrir KidGate se piden datos nuevos a cada dispositivo, así que pueden tardar unos minutos en actualizarse. Un dispositivo sin conexión a Internet envía sus datos cuando vuelve a conectarse.',
      },
    },
    screenTimeCounting: {
      title: 'Cómo se cuenta el tiempo de pantalla',
      summary:
        'Qué suma minutos al Límite diario y a los informes de uso, incluido un vídeo que se reproduce en una pequeña ventana flotante.',
      keywords:
        'imagen en imagen, pip, vídeo flotante, minirreproductor, ventana pequeña, youtube, música, en pausa, segundo plano',
      tip: 'En iPhone y iPad, Tiempo de uso de Apple decide qué cuenta. En un Mac, el sonido de un vídeo puede seguir sonando detrás del bloqueo.',
      steps: {
        '1': 'El tiempo cuenta mientras una app está abierta en la pantalla de tu hijo. La pantalla de inicio, el escritorio del ordenador, la pantalla de bloqueo y el propio KidGate no cuentan.',
        '2': 'En un teléfono Android o un ordenador, un vídeo que se reproduce en una pequeña ventana flotante (imagen en imagen, PIP) cuenta para la app que lo reproduce, aunque otra app esté en primer plano.',
        '3': 'Cuando ese vídeo flotante se reproduce sobre otra app, las dos apps muestran ese tiempo en «Más usadas», pero el total del día lo cuenta una sola vez.',
        '4': 'Un vídeo en pausa que se queda en su ventana flotante sigue contando mientras la ventana esté en pantalla. Cierra la ventana para que deje de contar.',
        '5': 'En un ordenador, el tiempo detrás del bloqueo no cuenta. En un ordenador con Windows, el bloqueo además pausa los vídeos y la música en la mayoría de las apps, y siguen en pausa cuando se levanta el bloqueo.',
      },
    },
    widget: {
      title: 'Añadir un widget de tiempo de pantalla',
      summary:
        'Ve el tiempo de pantalla de cada hijo en tu pantalla de inicio, y deja que tu hijo vea en la suya cuánto tiempo le queda.',
      keywords:
        'pantalla de inicio, launcher, de un vistazo, tiempo restante, minutos restantes, iphone, android',
      tip: 'Los widgets funcionan en iPhone, iPad y Android, no en un ordenador ni en una TV. Un widget muestra los últimos datos que recibió KidGate y la hora de esa actualización.',
      steps: {
        '1': 'Abre «Ajustes» y selecciona «Añadir widget a la pantalla de inicio». En la mayoría de los teléfonos Android, solo tienes que confirmar dónde va. Si no, KidGate muestra los pasos para añadirlo tú.',
        '2': 'Para añadirlo tú, mantén pulsado un espacio vacío de la pantalla de inicio. En iPhone, toca «Editar» (o + en versiones anteriores) y luego «Añadir widget». En Android, toca «Widgets». Busca KidGate y elige el widget «Tiempo de pantalla».',
        '3': 'Cada fila muestra el tiempo de pantalla de hoy de un hijo frente a su Límite diario, y quienes lo han alcanzado aparecen primero. Caben hasta 2 hijos en iPhone y hasta 3 en Android. Los dispositivos sin un hijo asignado no aparecen.',
        '4': 'Se actualiza al abrir KidGate. Con la app cerrada, y con Premium, se actualiza como mucho cada 20 minutos, y solo mientras un hijo usa un dispositivo.',
        '5': 'En el teléfono de tu hijo, añade el widget «Tiempo restante» de la misma forma. Muestra cuánto tiempo le queda hoy, o por qué el dispositivo está bloqueado, y se actualiza mientras KidGate está abierto en ese teléfono.',
      },
    },
    webHistory: {
      title: 'Revisa el Historial web',
      summary:
        'Consulta a qué sitios accedió un dispositivo y cuáles bloqueó el Filtro web, día a día.',
      keywords: 'historial de navegación, sitios visitados, navegador, chrome, safari',
      tip: 'El Historial web forma parte de Premium. Muestra sitios, no páginas ni minutos, y algunas filas son tráfico de apps en segundo plano. Android TV puede llevar hasta una hora de retraso.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Historial web en la sección Supervisión de seguridad. Desde el perfil del niño, el historial reúne todos sus dispositivos.',
        '2': 'Cada día muestra los sitios por tipo, con cuántas veces se accedió a cada uno. Selecciona «Solo bloqueados» para ver únicamente lo que detuvo el Filtro web.',
        '3': 'Para bloquear todo un tipo de sitio, abre su sección y selecciona el botón Bloquear que hay al final. Desde el perfil del niño, el bloqueo se aplica a todos sus dispositivos.',
        '4': 'El historial viene del Filtro web, así que solo se llena mientras el filtro está funcionando en ese dispositivo.',
        '5': 'La pantalla muestra los últimos 7 días. Cuando tu hijo pide abrir un sitio bloqueado, la solicitud aparece en «Requiere aprobación», no aquí.',
      },
    },
    videoHistory: {
      title: 'Consulta los Vídeos vistos',
      summary:
        'Guarda una lista de los vídeos de YouTube que ve tu hijo, con el canal y la hora.',
      keywords: 'youtube, shorts, videos vistos, historial de reproducción',
      tip: 'Vídeos vistos forma parte de Premium y solo cubre YouTube. Funciona en teléfonos Android y en la extensión de Chrome, no en iPhone ni iPad. En un Mac o PC, añade la extensión de Chrome. Una Android TV solo registra vídeos cuando KidGate tiene acceso a las notificaciones en ella, algo que todavía no se puede conceder desde ninguna pantalla de TV; incluso entonces, los Shorts no aparecen.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Vídeos vistos en la sección Supervisión de seguridad.',
        '2': 'Activa «Registrar vídeos vistos». El registro está desactivado hasta que lo actives, y si lo activas desde el perfil del niño, se aplica a todos sus dispositivos.',
        '3': 'En un teléfono Android, KidGate también necesita acceso a las notificaciones: en el dispositivo del niño, abre Ajustes de KidGate, selecciona «Desbloquear con el PIN parental» y luego «Permitir acceso a notificaciones» en la sección Alertas de mensajes. Los Shorts también necesitan Accesibilidad.',
        '4': 'Los vídeos aparecen por día, con el canal y cuántas veces se reprodujo cada uno. Toca uno para buscarlo en YouTube.',
        '5': 'En un Mac o PC, la pantalla explica en su lugar cómo añadir la extensión de Chrome. La extensión registra los vídeos como un dispositivo propio.',
      },
    },
    appAlerts: {
      title: 'Sigue las instalaciones de apps',
      summary:
        'Consulta cuándo se instalan o eliminan apps, mira qué hay en un dispositivo y retén las apps nuevas hasta que las permitas.',
      tip: '«Aprobar aplicaciones nuevas» y la lista de apps instaladas son gratis; el historial de instalaciones y el bloqueo de apps nuevas forman parte de Premium. iPhone y iPad no pueden informar de las instalaciones; en ellos, «Aprobar aplicaciones nuevas» oculta la App Store en su lugar.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Aplicaciones.',
        '2': '«Cambios recientes» muestra las apps instaladas y eliminadas, de la más reciente a la más antigua. También recibes una notificación por cada una.',
        '3': '«Aplicaciones instaladas» muestra lo que hay en el dispositivo, y «Resumen» muestra el grupo «Conviene revisarlas». Selecciona «Marcar como segura» para sacar una app de ese grupo. Para impedir que se use una app, tócala y selecciona «Bloquear».',
        '4': 'Para retener las apps nuevas hasta que las permitas, abre «Resumen» y activa «Aprobar aplicaciones nuevas». Cualquier app instalada a partir de entonces queda bloqueada en el dispositivo.',
        '5': 'Cuando haya una app nueva esperando, selecciona «Permitir» junto a ella para que pueda abrirse.',
      },
    },
    messageAlerts: {
      title: 'Activa las Alertas de mensajes',
      summary:
        'Recibe un aviso cuando aparezca una palabra o frase preocupante en los mensajes o las búsquedas del teléfono Android de tu hijo. Ves la palabra o frase marcada, nunca el mensaje.',
      keywords: 'sms, messenger, whatsapp, palabras clave, acoso, leer mensajes',
      tip: 'Las Alertas de mensajes forman parte de Premium. Los mensajes solo se revisan en teléfonos Android; las búsquedas también se revisan en la extensión de Chrome. Solo te llegan la categoría y la palabra o frase marcada. El análisis con IA está desactivado salvo que un padre o madre lo active para toda la familia.',
      steps: {
        '1': 'En el teléfono Android del niño, abre Ajustes de KidGate, selecciona «Desbloquear con el PIN parental», luego «Permitir acceso a notificaciones» en la sección Alertas de mensajes, y activa KidGate en la lista que se abre.',
        '2': 'En tu dispositivo, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Alertas de mensajes en la sección Alertas, y toca el icono de ajustes de arriba. Si tu hijo tiene varios dispositivos, selecciona primero el teléfono Android.',
        '3': 'Activa «Revisar los mensajes que recibe». «Marcar también el lenguaje soez» es opcional, y puedes elegir hasta 3 idiomas en «Idiomas analizados».',
        '4': 'Para revisar también lo que escribe y busca tu hijo: cuando «Revisar los mensajes que recibe» está activado, el dispositivo del niño muestra «Antes de permitirlo» en la sección «Alertas de mensajes». Selecciona «Aceptar» ahí y luego activa «Revisar los mensajes que escribe» y «Revisar lo que busca» en tu dispositivo.',
        '5': 'Las alertas aparecen en «Alertas recientes» con la categoría y la palabra o frase marcada. Selecciona «Qué hacer ahora» para ver consejos sobre cómo hablarlo con tu hijo.',
      },
    },
    childProfiles: {
      title: 'Añade un hijo y asigna dispositivos',
      summary:
        'Crea un perfil para cada hijo y asígnale los dispositivos que usa, para que sus reglas y su tiempo de pantalla lo acompañen.',
      tip: 'Solo el propietario de la familia puede añadir hijos y asignar dispositivos. Un dispositivo nuevo no está asignado a nadie hasta que elijas.',
      steps: {
        '1': 'En Familia, pulsa + y selecciona «Añadir un hijo». Escribe un nombre y guarda.',
        '2': 'Después de vincular un dispositivo nuevo, KidGate pregunta al propietario de la familia quién lo usa. Elige a tu hijo, o «Nadie» si es un dispositivo compartido. Si elegiste a un hijo, KidGate ofrece un conjunto inicial de protecciones: selecciona «Activar protección» o «Ahora no».',
        '3': 'Un dispositivo para el que no se ha elegido a nadie aparece en «Sin asignar», en Familia. Selecciona «Asignar a un niño…» en su tarjeta.',
        '4': 'Cuando un dispositivo está asignado, el Límite diario, las Horas bloqueadas, el Filtro web, el Check-in, SOS, las Alertas de lugares y las Tareas premiadas se configuran en el perfil del niño y se aplican a todos sus dispositivos. El Límite diario pasa a ser un total compartido entre esos dispositivos.',
        '5': 'Para mover un dispositivo, abre el perfil del niño que debe tenerlo y selecciona «Asignar otro dispositivo…». Para quitarlo de un niño, deslízalo en su perfil y selecciona «Quitar». Si eliminas el perfil de un niño, sus dispositivos siguen vinculados.',
      },
    },
    plans: {
      title: 'Premium y el plan gratuito',
      summary:
        'Qué incluyen la prueba, el plan gratuito y Premium, y cómo suscribirte.',
      keywords:
        'premium, precio, suscripción, prueba gratis, cancelar, reembolso, mejorar',
      tip: 'Solo el propietario de la familia puede suscribirse o restaurar una compra, y solo desde la app del teléfono. Un solo plan cubre a toda la familia y a todos los padres que forman parte de ella.',
      steps: {
        '1': 'Abre Ajustes. La tarjeta de arriba muestra tu plan actual; selecciona «Ver planes».',
        '2': 'La prueba de 7 días empieza cuando se vincula tu primer dispositivo del niño e incluye todas las funciones de Premium. El único límite que se mantiene es el de padres: hasta 3 durante la prueba y hasta 6 con Premium.',
        '3': 'Con el plan gratuito, todas las reglas siguen funcionando, pero solo un dispositivo envía informes: el total de hoy y las 3 apps principales, actualizados cuando consultas KidGate. Premium añade actualizaciones en vivo, todos los dispositivos, 30 días de historial, historial web y de vídeos, e informes semanales.',
        '4': 'Si la prueba termina con más de un dispositivo del niño, KidGate muestra «Elige el dispositivo que informa». El que elijas sigue enviando informes; los demás muestran «En pausa» y conservan sus reglas, pero en ellos una regla solo se puede relajar, no endurecer. Cualquier padre o madre puede cambiar la elección una vez cada 7 días.',
        '5': 'Para suscribirte, elige un plan y selecciona «Suscribirse a Premium», o «Comprar de por vida» para la compra única. Al suscribirte, todos los dispositivos en pausa vuelven a enviar informes. Si ya pagaste antes, selecciona «Restaurar compras».',
      },
    },
    notificationSettings: {
      title: 'Elige qué alertas recibes',
      summary:
        'Activa o desactiva cada tipo de alerta y configura las horas de silencio en cada teléfono de padre o madre.',
      tip: 'El SOS siempre llega, aunque lo desactives todo y durante las horas de silencio. Estos ajustes solo se aplican a este teléfono; los demás padres eligen los suyos.',
      steps: {
        '1': 'Abre Ajustes y luego Notificaciones push.',
        '2': 'En la sección Alertas, desactiva los tipos de alerta que no quieras en este teléfono, por ejemplo «Solicitudes de tiempo» o «Apps instaladas o eliminadas».',
        '3': '«Informe semanal» controla la notificación de los lunes que avisa de que hay un informe nuevo.',
        '4': 'Activa «Horas de silencio» y luego arrastra los dos extremos del círculo para definir cuándo se silencian las alertas. Las horas siguen el reloj de este teléfono.',
        '5': 'En Ajustes, «Alertas en la app» y «Sirena SOS» son opciones aparte: controlan el aviso dentro de la app y el sonido fuerte del SOS en este teléfono.',
      },
    },
    appLanguage: {
      title: 'Cambiar el idioma de la app',
      summary: 'Elige qué idioma usa KidGate en cada teléfono y en el panel web.',
      keywords: 'español, inglés, traducción, idioma equivocado, idioma de la pantalla',
      tip: 'Cada teléfono conserva su propio idioma. Sus notificaciones y su widget lo siguen.',
      steps: {
        '1': 'En el teléfono de un padre o de un hijo, abre «Ajustes» y selecciona «Idioma».',
        '2': 'Elige un idioma para fijarlo, o «Idioma del dispositivo» para seguir el ajuste del teléfono. Si KidGate no ofrece el idioma del teléfono, usa el inglés.',
        '3': 'La app cambia al instante. Las notificaciones a este teléfono y su widget también usan el nuevo idioma.',
        '4': 'En el panel web, cambia el idioma en la sección de la cuenta del menú lateral. Solo se aplica a ese navegador.',
      },
    },
    appearance: {
      title: 'Cambiar el aspecto de la app',
      summary: 'Elige el modo oscuro, un estilo y un color del tema en cada teléfono.',
      keywords: 'tema, modo noche, colores, rosa, fondo oscuro, personalizar',
      tip: 'Cada teléfono conserva su propio aspecto, así que un cambio en el teléfono de tu hijo nunca cambia el tuyo.',
      steps: {
        '1': 'En el teléfono de un padre, abre «Ajustes». El modo oscuro, el estilo y el color del tema están en su sección «Apariencia».',
        '2': 'Activa «Modo oscuro» para tener pantallas más oscuras que descansan la vista por la noche.',
        '3': 'Selecciona «Estilo del tema» y elige «Clásico» o «Dulce», que trae tonos pastel cálidos y un aspecto más suave y alegre.',
        '4': 'Selecciona «Color del tema» y elige el color de los botones y los detalles. Los colores disponibles dependen del estilo: «Dulce» solo ofrece tonos rosas.',
        '5': 'Tu hijo puede hacer las mismas elecciones en su propio teléfono, en «Ajustes», sección «Preferencias», sin el PIN parental.',
        '6': 'En el panel web, activa «Modo oscuro» en la sección de la cuenta del menú lateral. Solo se aplica a ese navegador.',
      },
    },
    webSignIn: {
      title: 'Usa KidGate en un ordenador',
      summary:
        'Inicia sesión en el panel web y gestiona tu familia desde un navegador.',
      tip: 'Autoriza solo un navegador en el que estés iniciando sesión tú: tendrá el mismo control que tu teléfono. El panel web no puede vincular un dispositivo del niño ni comprar un plan. Para cerrar la sesión de un navegador, usa «Cerrar sesión» en el panel. Para que un navegador deje de hacer cambios, abre «Familia», luego «Padres» y quítalo en «Panel»; podrá seguir mostrando tu familia hasta que se cierre su sesión.',
      steps: {
        '1': 'En el ordenador, abre dashboard.kidgate.app. Aparece un código QR de inmediato.',
        '2': 'En tu teléfono, abre Ajustes y luego «Iniciar sesión en la web». También puedes escanearlo desde Familia con el icono de escaneo.',
        '3': 'Escanea el código QR del navegador. Si la cámara no puede leerlo, introduce en su lugar el código de 6 caracteres.',
        '4': 'Comprueba que el código coincide y selecciona «Autorizar». Selecciona «No autorizar» si no eres tú quien está iniciando sesión.',
        '5': 'El navegador inicia sesión en unos segundos y puede hacer cambios durante 7 días. Pasado ese plazo, sigue mostrando tu familia; para cambiar algo, selecciona «Desbloquear cambios» en el panel e introduce tu PIN parental, o vuelve a autorizar el navegador desde tu teléfono.',
      },
    },
    securityPins: {
      title: 'PIN parental y Bloqueo de la app',
      summary:
        'Dos PIN distintos: el PIN parental protege los ajustes del dispositivo de tu hijo, y el Bloqueo de la app protege la app de los padres en tu teléfono.',
      tip: 'Solo el propietario de la familia puede configurar o restablecer el PIN parental. No lo compartas nunca con tu hijo.',
      steps: {
        '1': 'Abre Ajustes. En Seguridad, selecciona PIN parental para crear un PIN de 6 dígitos o para cambiarlo.',
        '2': 'El dispositivo de tu hijo pide el PIN parental antes de que se puedan cambiar las Apps bloqueadas o cerrar la sesión de KidGate en él.',
        '3': 'Si lo olvidas, selecciona «¿Olvidaste el PIN?» en el mismo lugar para configurar uno nuevo como propietario de la familia.',
        '4': 'Si el PIN queda bloqueado en un dispositivo del niño tras 5 intentos fallidos, la sección Seguridad muestra una fila de desbloqueo para ese dispositivo. Selecciónala para restablecer los intentos.',
        '5': 'Para proteger la app de los padres en este teléfono, activa el Bloqueo de la app y crea su propio PIN de 6 dígitos. También puedes permitir el desbloqueo con Face ID, Touch ID o huella digital.',
      },
    },
    reportProblem: {
      title: 'Reportar un problema',
      summary:
        'Cuenta al equipo de KidGate qué ha fallado, adjunta capturas de pantalla y lee la respuesta en la app.',
      keywords:
        'error, fallo, contacto, opinión, no funciona, roto, atención al cliente, ayuda, correo',
      tip: 'Recibes una notificación cuando KidGate responde. Si te la perdiste, la fila «Soporte» de Ajustes muestra «Nueva respuesta».',
      steps: {
        '1': 'Abre «Ajustes» y selecciona «Soporte». En el panel web, «Soporte» está en el menú.',
        '2': 'Selecciona «Reportar un problema», o «Nuevo informe» si ya has enviado alguno.',
        '3': 'Describe qué pasó y en qué dispositivo, adjunta hasta 5 capturas de pantalla si ayudan y selecciona «Enviar informe».',
        '4': 'Cada informe muestra su estado: «Recibido», «En revisión» o «Resuelto». La respuesta de KidGate aparece debajo del informe.',
        '5': 'Cuando KidGate haya respondido, puedes contestar debajo del informe, con un mensaje por cada respuesta de KidGate, hasta que esté «Resuelto». Para otro problema, envía un informe nuevo.',
      },
    },
    deleteAccount: {
      title: 'Eliminar tu cuenta',
      summary:
        'Elimina tu cuenta de KidGate y sus datos, con 14 días para cambiar de opinión.',
      tip: 'Eliminar tu cuenta no cancela una suscripción de App Store o Google Play; cancélala en la tienda. Un segundo padre o madre que solo quiera dejar de gestionar la familia puede salir de ella.',
      steps: {
        '1': 'Abre Ajustes y, en Cuenta, selecciona «Eliminar cuenta».',
        '2': 'Lee lo que se eliminará. Si eres el propietario de la familia, todos los demás padres y todos los dispositivos de los niños también pierden el acceso.',
        '3': 'Confirma que eres tú (con tu contraseña o volviendo a iniciar sesión con Google o Apple), escribe OK y selecciona «Programar eliminación». Esto solo programa la eliminación: todavía no se elimina nada.',
        '4': 'La cuenta se elimina a los 14 días. Hasta entonces, abre KidGate y selecciona «Cancelar eliminación» para conservarlo todo.',
        '5': 'Si un segundo padre o madre elimina su cuenta, solo se elimina la suya; la familia se mantiene. Para salir de una familia sin eliminar tu cuenta, abre la tarjeta de la familia en Familia y selecciona «Salir de la familia».',
      },
    },
  },
  ios: {
    blockedHours: {
      steps: {
        '5': 'En el dispositivo del niño, confirma que KidGate sigue teniendo los permisos que pidió durante la configuración para que las franjas empiecen y terminen puntualmente. En un iPhone o iPad, confirma que «Tiempo de uso» sigue permitido.',
      },
    },
    lockUnlock: {
      tip: 'En un iPhone o iPad, el bloqueo depende de la autorización de Tiempo de uso, y si KidGate estaba cerrado en el iPhone, el bloqueo aparece cuando KidGate vuelve a ejecutarse. En otros dispositivos, el bloqueo es más eficaz cuando todos los permisos que pide KidGate están concedidos.',
      steps: {
        '6': 'Un teléfono u ordenador bloqueado sigue permitiendo que tu hijo envíe un SOS, y el SOS aparece en «Actividad». En algunos teléfonos del niño, las llamadas siempre funcionan, y el SOS también abre los mapas y los mensajes durante 5 minutos mientras todo lo demás sigue bloqueado.',
      },
    },
    siri: {
      tip: 'Los comandos de voz funcionan en el iPhone de un padre o madre, para todos los padres de la familia, en el idioma configurado para Siri. En algunos idiomas, Siri no reconoce el nombre KidGate dicho en voz alta (en vietnamita no lo reconoce): escríbele el comando a Siri, o ejecútalo desde la app Atajos. El panel web no los tiene.',
    },
    timeRequests: {
      tip: 'Las solicitudes solo aparecen si el dispositivo tiene un Límite diario. Los minutos aprobados cuentan para hoy, en el dispositivo que los pidió, y no levantan un bloqueo que hayas puesto ni las Horas bloqueadas. Las TV y la extensión de Chrome no pueden enviar solicitudes.',
      steps: {
        '1': 'En el dispositivo del niño, tu hijo selecciona «Solicitar más tiempo» en la pantalla de inicio de KidGate (en algunos teléfonos, también desde la pantalla de bloqueo cuando se alcanza el límite), elige los minutos, añade un motivo si quiere y envía la solicitud.',
      },
    },
    rewardTasks: {
      tip: 'Los minutos extra solo cuentan si el dispositivo tiene un Límite diario. Los minutos van al dispositivo con el que tu hijo marcó la tarea como hecha. Las Tareas premiadas no están disponibles en una TV ni en la extensión de Chrome.',
    },
    locationSharing: {
      steps: {
        '1': 'En el dispositivo del niño, permite la Ubicación para KidGate cuando se solicite (o en los Ajustes del sistema). Elige «Siempre» en iPhone o iPad o «Permitir siempre» en otros teléfonos; si no, la ubicación solo se actualiza mientras KidGate está abierto.',
      },
    },
    webFilter: {
      steps: {
        '2': 'Activa «Filtrar sitios web inapropiados» en la parte superior. Se aplica al instante, así que no hay nada que guardar. «Forzar SafeSearch», en la misma pantalla, también fija Google, Bing y DuckDuckGo en resultados seguros y YouTube en el modo restringido, en otros teléfonos, TV y Chrome, no en iPhone ni iPad. En YouTube, el modo restringido también oculta los comentarios y bloquea algunos vídeos normales, por eso KidGate pregunta antes de activarlo.',
        '5': 'En el dispositivo del niño, abre KidGate y aprueba el filtro una vez. En un iPhone o iPad, el filtro de contenido para adultos de Apple se aplica a través de Tiempo de uso, sin ningún paso adicional. En otro teléfono, aprueba la solicitud que muestra y luego desactiva el DNS privado en sus ajustes de red, porque los navegadores pueden saltarse el filtro mientras el DNS privado esté activado. En un Mac, selecciona «Abrir Ajustes» junto a «Aprobar el filtro web» y activa KidGate.',
      },
    },
    screenTimeCounting: {
      steps: {
        '2': 'En un ordenador y en algunos teléfonos, un vídeo que se reproduce en una pequeña ventana flotante (imagen en imagen, PIP) cuenta para la app que lo reproduce, aunque otra app esté en primer plano.',
      },
    },
    widget: {
      keywords:
        'pantalla de inicio, launcher, de un vistazo, tiempo restante, minutos restantes, iphone, ipad',
      tip: 'Los widgets funcionan en teléfonos y tablets, no en un ordenador ni en una TV. Un widget muestra los últimos datos que recibió KidGate y la hora de esa actualización.',
      steps: {
        '1': 'Abre «Ajustes» y selecciona «Añadir widget a la pantalla de inicio». En algunos teléfonos, solo tienes que confirmar dónde va. Si no, KidGate muestra los pasos para añadirlo tú.',
        '2': 'Para añadirlo tú, mantén pulsado un espacio vacío de la pantalla de inicio. En iPhone, toca «Editar» (o + en versiones anteriores) y luego «Añadir widget». Busca KidGate y elige el widget «Tiempo de pantalla».',
        '3': 'Cada fila muestra el tiempo de pantalla de hoy de un hijo frente a su Límite diario, y quienes lo han alcanzado aparecen primero. Caben hasta 2 hijos en iPhone. Los dispositivos sin un hijo asignado no aparecen.',
      },
    },
    webHistory: {
      tip: 'El Historial web forma parte de Premium. Muestra sitios, no páginas ni minutos, y algunas filas son tráfico de apps en segundo plano. Una TV puede llevar hasta una hora de retraso.',
    },
    videoHistory: {
      tip: 'Vídeos vistos forma parte de Premium y solo cubre YouTube. Funciona en otros teléfonos y en la extensión de Chrome, no en iPhone ni iPad. En un Mac o PC, añade la extensión de Chrome. Una TV solo registra vídeos cuando KidGate tiene acceso a las notificaciones en ella, algo que todavía no se puede conceder desde ninguna pantalla de TV; incluso entonces, los Shorts no aparecen.',
      steps: {
        '3': 'En otros teléfonos, KidGate también necesita acceso a las notificaciones: en el dispositivo del niño, abre Ajustes de KidGate, selecciona «Desbloquear con el PIN parental» y luego «Permitir acceso a notificaciones» en la sección Alertas de mensajes. Los Shorts también necesitan Accesibilidad.',
      },
    },
    messageAlerts: {
      summary:
        'Recibe un aviso cuando aparezca una palabra o frase preocupante en los mensajes o las búsquedas del teléfono de tu hijo. Ves la palabra o frase marcada, nunca el mensaje.',
      tip: 'Las Alertas de mensajes forman parte de Premium. Los mensajes no se pueden revisar en iPhone ni iPad; las búsquedas también se revisan en la extensión de Chrome. Solo te llegan la categoría y la palabra o frase marcada. El análisis con IA está desactivado salvo que un padre o madre lo active para toda la familia.',
      steps: {
        '1': 'En el teléfono de tu hijo, abre Ajustes de KidGate, selecciona «Desbloquear con el PIN parental», luego «Permitir acceso a notificaciones» en la sección Alertas de mensajes, y activa KidGate en la lista que se abre.',
        '2': 'En tu dispositivo, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Alertas de mensajes en la sección Alertas, y toca el icono de ajustes de arriba. Si tu hijo tiene varios dispositivos, selecciona primero su teléfono.',
      },
    },
  },
  onChildDevice: 'En el dispositivo del niño',
  onParentDevice: 'En tu dispositivo',
  onParentPhone: 'En la app de tu teléfono',
  handoffHint:
    'KidGate puede guiar estos pasos en el propio dispositivo del niño: ábrelo allí, ve a Estado y selecciona «Continuar configuración» en la tarjeta «Termina la configuración con tu padre o madre». Cada paso tiene un botón que abre la pantalla correcta.',
} as const;
