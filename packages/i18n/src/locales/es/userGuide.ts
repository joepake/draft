export const userGuide = {
  title: 'Guía del usuario',
  subtitle:
    'Ayuda paso a paso sobre permisos, vinculación de dispositivos, controles diarios y funciones de seguridad.',
  stepLabel: 'Paso {{n}}',
  stepsSectionTitle: 'Pasos',
  tipTitle: 'Consejo',
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
        'Límites, horarios, bloqueo de apps, bloqueo del dispositivo, tiempo extra y recompensas',
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
      description: 'Premium, alertas, panel web, PIN y eliminación de la cuenta',
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
        '2': 'Inicia sesión con Google o Apple, o crea una cuenta de correo electrónico.',
        '3': 'En Familia, selecciona «Crear familia» y ponle un nombre a tu familia (por ejemplo, «Familia García»). Este nombre aparecerá cuando otros padres se unan. Si otro padre o madre ya creó tu familia, selecciona «Unirse a una familia».',
        '4': 'Configura un PIN parental (6 dígitos) en Ajustes, luego Seguridad. Memorízalo o guárdalo en un lugar seguro, y no lo compartas con los niños.',
        '5': 'Recomendado: activa el Bloqueo de la app y el desbloqueo biométrico en Ajustes para que nadie más pueda abrir la app de los padres en tu dispositivo.',
        '6': 'Abre Familia, pulsa + y selecciona «Añadir dispositivo del niño». Deja esta pantalla abierta para el código QR o el código que aparece en el dispositivo del niño.',
        '7': 'Cuando el dispositivo del niño se conecte, abre el perfil del niño en Familia (o el dispositivo, si no está asignado a ningún niño). Configura el Límite diario y las Horas bloqueadas, y completa los permisos junto con tu hijo.',
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
        '5': 'En la pantalla Estado, concede todos los permisos que solicita KidGate (notificaciones, ubicación, cámara y permisos específicos de la plataforma). Toca cada fila hasta que aparezca como permitida.',
        '6': 'Deja KidGate instalado y con la sesión iniciada en el dispositivo del niño. A partir de ahora, los padres gestionan los límites desde su propio dispositivo.',
      },
    },
    connectChild: {
      title: 'Conectar el teléfono o la tablet del niño',
      summary:
        'Vincula un nuevo dispositivo del niño a tu familia con un código QR o un código.',
      tip: 'Los códigos caducan. Si la vinculación falla, selecciona «Nuevo código» en el dispositivo del niño e inténtalo de nuevo.',
      steps: {
        '1': 'En el dispositivo del niño: abre KidGate, luego «Este es un dispositivo de un niño». Deja visible la pantalla del código QR.',
        '2': 'En el dispositivo del padre o madre: abre Familia y pulsa el icono de escaneo («Escanear código»).',
        '3': 'La cámara se abre directamente: permite el acceso a la cámara si se solicita, y encuadra el código QR del dispositivo del niño dentro del marco.',
        '4': 'O usa el código: selecciona «Introducir el código manualmente», escribe los 6 caracteres que aparecen en el dispositivo del niño y continúa.',
        '5': 'En el dispositivo del niño, lee con atención la pantalla de confirmación. Selecciona «Sí, conectar» solo si el nombre del padre o madre es correcto.',
        '6': 'Espera a que el dispositivo del padre confirme la conexión. El nuevo dispositivo aparecerá en Familia.',
        '7': 'Abre el nuevo dispositivo y comprueba que «Última actividad» se actualiza. Si permanece sin conexión, vuelve a abrir KidGate en el dispositivo del niño y revisa la conexión de red.',
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
        '3': 'Abre KidGate en el ordenador. Muestra un código QR y un código de 6 caracteres; no hace falta iniciar sesión.',
        '4': 'En tu dispositivo, abre Familia, pulsa el icono de escaneo («Escanear código») y escanea el código QR, o selecciona «Introducir el código manualmente» y escribe el código.',
        '5': 'En el ordenador, comprueba el nombre del padre o madre y selecciona «Sí, conectar».',
        '6': 'Sigue los pasos de «Terminar de configurar este dispositivo». En un Mac, selecciona «Abrir Ajustes» junto a «Aprobar el filtro web» y activa KidGate en la página que se abre: el Filtro web no funciona hasta que lo hagas. Selecciona «Permitir» para Ubicación y Cámara.',
        '7': 'De vuelta en tu dispositivo, elige qué hijo usa el ordenador. Las apps que quieres bloquear se eligen en el propio ordenador, con el PIN parental («Elegir apps para bloquear»).',
      },
    },
    connectTv: {
      title: 'Conectar un Android TV',
      summary:
        'Instala KidGate en un Android TV y vincúlalo desde tu dispositivo, sin escribir nada con el mando a distancia.',
      keywords: 'android tv, google tv, televisor, tele, fire tv, box',
      tip: 'En una TV no hay Ubicación, SOS, Check-in ni Solicitudes de tiempo, y una app bloqueada se cierra después de abrirse: no se impide que se abra. El tiempo de pantalla puede llegar con hasta una hora de retraso.',
      steps: {
        '1': 'En la TV, abre Google Play, busca KidGate e instálalo.',
        '2': 'Abre KidGate en la TV. Muestra un código QR y un código de 6 caracteres; no hace falta iniciar sesión.',
        '3': 'En tu dispositivo, abre Familia, pulsa el icono de escaneo («Escanear código») y escanea el código QR de la TV, o selecciona «Introducir el código manualmente» y escribe el código.',
        '4': 'La TV se conecta sola en unos segundos. No hay que confirmar nada con el mando.',
        '5': 'Sigue los pasos de «Configurar protección» en la TV: selecciona «Abrir Ajustes» para activar Accesibilidad, Acceso de uso y Mostrar sobre otras aplicaciones, y luego aprueba la conexión VPN para que funcione el Filtro web.',
        '6': 'Si un ajuste no se mantiene activado, reinicia la TV e inténtalo de nuevo. Puedes volver a abrir «Configurar protección» desde la pantalla principal de KidGate en la TV.',
        '7': 'De vuelta en tu dispositivo, elige qué hijo usa la TV. Las apps que quieres bloquear se eligen en la propia TV, con el PIN parental.',
      },
    },
    connectChrome: {
      title: 'Conectar la extensión de Chrome',
      summary:
        'Añade el filtro web de KidGate a Chrome en un Chromebook, Mac o PC. Aparece como un dispositivo propio.',
      keywords: 'chromebook, extensión de chrome, extensión del navegador',
      tip: 'La extensión solo filtra Chrome: no otros navegadores, ni las ventanas de incógnito a menos que lo permitas. En chrome://extensions, abre «Detalles» de KidGate y activa «Permitir en modo incógnito».',
      steps: {
        '1': 'En Chrome, en el ordenador de tu hijo, abre Chrome Web Store, busca KidGate y selecciona «Añadir a Chrome».',
        '2': 'Selecciona el icono de KidGate en la barra de herramientas de Chrome. Si no lo ves, fíjalo desde el menú Extensiones (el icono de la pieza de puzle). La ventana emergente muestra un código QR y un código de 6 caracteres; mantenla abierta durante la vinculación.',
        '3': 'En tu dispositivo, abre Familia, pulsa el icono de escaneo («Escanear código») y escanea el código QR, o selecciona «Introducir el código manualmente» y escribe el código.',
        '4': 'En la ventana emergente de KidGate, comprueba el nombre del padre o madre y selecciona «Sí, conectar».',
        '5': 'De vuelta en tu dispositivo, elige qué hijo usa la extensión y luego activa el Filtro web para ella. Hasta entonces, la extensión muestra «Inactivo».',
        '6': 'Opcional: para saber qué vídeos ve tu hijo, abre Vídeos vistos y activa «Registrar vídeos vistos» para la extensión.',
      },
    },
    inviteParent: {
      title: 'Invitar a otro padre o madre',
      summary:
        'Permite que un segundo padre o madre se una a la misma familia y gestione los mismos dispositivos del niño.',
      tip: 'Solo el propietario de la familia puede aprobar las solicitudes de unión. Aprueba con rapidez, ya que las solicitudes pueden caducar. Una familia puede tener hasta 3 padres en el plan gratuito y durante la prueba, y hasta 6 con Premium.',
      steps: {
        '1': 'En el dispositivo del propietario de la familia, abre Familia, luego pulsa +, luego «Invitar a un padre».',
        '2': 'Si aún no has creado un nombre de familia, introduce uno y selecciona «Crear familia».',
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
    androidPermissions: {
      title: 'Permisos de Android (dispositivo del niño)',
      summary:
        'Activa Acceso de uso, Mostrar sobre otras aplicaciones, Accesibilidad, batería y permisos relacionados.',
      keywords:
        'accesibilidad, acceso al uso, mostrar sobre otras apps, notificaciones, administrador del dispositivo, vpn, conceder',
      tip: 'Importa más completarlos todos que el orden en que lo hagas. Cada fila en rojo o no permitida en la pantalla Estado del niño debe corregirse antes de confiar en el bloqueo o las Horas bloqueadas.',
      steps: {
        '1': 'En el dispositivo del niño, abre KidGate, luego Estado y recorre la lista de permisos de arriba abajo.',
        '2': 'Notificaciones: toca la fila, luego Permitir. Los padres necesitan notificaciones push para las órdenes de bloqueo y las solicitudes de tiempo.',
        '3': 'Acceso de uso: abre la pantalla del sistema, luego busca KidGate, luego actívalo. Esto es obligatorio para medir el tiempo de pantalla y aplicar límites.',
        '4': 'Mostrar sobre otras aplicaciones: permítelo para KidGate. Es necesario para que la pantalla de bloqueo pueda aparecer sobre otras apps.',
        '5': 'Ayuda de bloqueo por Accesibilidad: Ajustes, luego Accesibilidad, luego Apps instaladas/descargadas, luego KidGate, luego Activado. Esto mantiene el bloqueo en vigor.',
        '6': 'Batería sin restricciones: selecciona «Permitir» cuando se solicite. Si no aparece ningún aviso: Información de la app, luego Batería, luego Sin restricciones.',
        '7': 'Alarmas y recordatorios: permítelo para que las Horas bloqueadas empiecen y terminen puntualmente.',
        '8': 'Ubicación y Cámara (si usas Check-in o fotos de SOS): permítelas cuando KidGate lo solicite. Vuelve a Estado y confirma que todas las filas están permitidas.',
      },
    },
    iosScreenTime: {
      title: 'Tiempo de uso en iOS (dispositivo del niño)',
      summary:
        'Permite el Uso de apps y sitios web para que funcionen el bloqueo, los horarios y la selección de apps.',
      keywords:
        'tiempo de uso, tiempo en pantalla, family controls, iphone, ipad, autorizar',
      tip: 'Si falta el botón Permitir, abre Ajustes de iOS, luego Tiempo de uso y comprueba que Tiempo de uso está activado primero en el dispositivo del niño.',
      steps: {
        '1': 'Abre KidGate y permanece en la pantalla «Estado».',
        '2': 'Selecciona «Permitir uso de apps y sitios web» (o el aviso de Tiempo de uso).',
        '3': 'En el cuadro de diálogo del sistema, selecciona «Permitir». No cierres el diálogo sin elegir una opción.',
        '4': 'Vuelve a KidGate. El aviso desaparece en cuanto la autorización se completa correctamente.',
        '5': 'Si la autorización se denegó antes: abre Ajustes de iOS, busca KidGate, activa Tiempo de uso en esa página y vuelve a abrir KidGate.',
        '6': 'Para elegir las apps bloqueadas: en el dispositivo del niño, abre Ajustes de KidGate, luego selecciona «Desbloquear con el PIN parental», luego abre Apps bloqueadas y guarda.',
        '7': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Apps bloqueadas, y confirma que la lista se ha sincronizado. Activa el bloqueo cuando estés listo.',
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
        '1': 'En el dispositivo Android del niño, abre KidGate, luego Estado, y busca el paso «Permitir el inicio automático». Solo aparece en dispositivos cuyo fabricante lo necesita.',
        '2': 'Permite el inicio automático de KidGate en la pantalla de seguridad del fabricante (el texto varía según el dispositivo).',
        '3': 'Configura el uso de batería de KidGate como Sin restricciones tanto en los ajustes de Android como en el menú de batería del fabricante, si existen ambos.',
        '4': 'Desactiva cualquier lista de «apps en reposo», «apps en reposo profundo» o «poner apps en reposo» que incluya a KidGate.',
        '5': 'Si un acceso directo no funciona, abre manualmente la app de Seguridad / Cuidado del dispositivo y busca KidGate, Inicio automático o Batería.',
        '6': 'Marca cada fila como «Listo» en KidGate a medida que la completes, para ver lo que falta.',
      },
    },
    dailyLimit: {
      title: 'Configura un Límite diario',
      summary: 'Limita cuántos minutos puede usar el niño el dispositivo cada día.',
      keywords:
        'tiempo de pantalla, horas por día, se acabó el tiempo, presupuesto, ampliar',
      tip: 'Los datos de uso provienen del dispositivo del niño. Si el contador parece estancado, abre KidGate en el dispositivo del niño y espera una sincronización.',
      steps: {
        '1': 'En el dispositivo del padre, abre Familia, luego toca el perfil del niño (o el dispositivo, si no está asignado a ningún niño).',
        '2': 'En Controles esenciales, selecciona «Límite diario».',
        '3': 'Elige un valor de minutos por día (o edita el límite existente) y guarda.',
        '4': 'Confirma que la tarjeta del dispositivo muestra los minutos usados y el límite de hoy tras sincronizar el dispositivo del niño.',
        '5': 'Cuando se alcanza el límite, el dispositivo se bloquea según las reglas de la plataforma. Selecciona «Desbloquear» en la pantalla del dispositivo si quieres restaurar el acceso antes de tiempo.',
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
        '2': 'Selecciona «Añadir franja» y luego define la hora de inicio, la hora de fin y los días en que se repite.',
        '3': 'Guarda la franja. Repite el proceso para añadir otra franja.',
        '4': 'Activa el horario si aparece un interruptor de activación.',
        '5': 'En el dispositivo del niño, confirma que los permisos de Alarmas y recordatorios y Tiempo de uso siguen permitidos para que los horarios se ejecuten a tiempo.',
        '6': 'Durante una franja activa, la tarjeta del dispositivo muestra «Horas bloqueadas activas · bloqueado». Usa «Desbloquear» solo cuando quieras anular el horario a propósito.',
      },
    },
    blockedApps: {
      title: 'Bloquear apps específicas',
      summary:
        'Elige las apps en el dispositivo del niño y luego activa el bloqueo desde el dispositivo del padre.',
      keywords:
        'bloquear app, bloquear aplicación, tiktok, facebook, instagram, juegos, roblox, ocultar app',
      tip: 'En iOS, Apple puede ocultar los nombres exactos de las apps a los dispositivos de los padres. La selección se sigue haciendo en el dispositivo del niño con el PIN parental.',
      steps: {
        '1': 'Usa directamente el dispositivo del niño. Abre KidGate, luego Ajustes.',
        '2': 'Selecciona «Desbloquear con el PIN parental» e introduce el PIN parental.',
        '3': 'Abre Apps bloqueadas (en un ordenador o una TV: «Elegir apps para bloquear»). Selecciona las apps (y categorías, si aparecen) y guarda en el dispositivo del niño.',
        '4': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Apps bloqueadas, y espera a que aparezca la lista seleccionada.',
        '5': 'Activa «Activar el bloqueo de apps». El estado debería mostrar «Bloqueo activado».',
        '6': 'Pruébalo abriendo una app bloqueada en el dispositivo del niño. Debería quedar restringida según las reglas de la plataforma.',
        '7': 'Para cambiar la lista más adelante, repite la selección en el dispositivo del niño con el PIN parental. El dispositivo del padre sincronizará la nueva lista.',
      },
    },
    appLimits: {
      title: 'Configura los Límites de apps',
      summary:
        'Limita por separado el tiempo diario de las apps que elijas, además del Límite diario.',
      keywords: 'límite de tiempo por app, minutos por app, tiktok, youtube, juegos',
      tip: 'Los Límites de apps no están disponibles en iPhone ni iPad. En un ordenador o una TV, una app que alcanza su límite se cierra después de abrirse: no se impide que se abra.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Límites de apps. Si tu hijo usa más de un dispositivo, elige cuál: cada dispositivo tiene su propia lista.',
        '2': 'En «Añadir un límite», toca una app. Solo aparecen las apps que se han usado hoy en ese dispositivo, y cada una empieza con un límite de 60 minutos.',
        '3': 'Ajusta cada límite con el selector o con un valor predefinido, de 5 minutos a 8 horas al día. Puedes limitar hasta 20 apps.',
        '4': 'Selecciona «Guardar». Los límites se reinician a medianoche en el dispositivo del niño.',
        '5': 'El Límite diario sigue aplicándose a todo el dispositivo, así que una app puede bloquearse antes de agotar su propio límite. Para quitar un límite, selecciona «Quitar» en su tarjeta y guarda.',
      },
    },
    lockUnlock: {
      title: 'Bloquear y desbloquear el dispositivo',
      summary: 'Bloquea el dispositivo del niño de inmediato, o restaura el acceso.',
      tip: 'En Android, el bloqueo es más eficaz cuando Mostrar sobre otras aplicaciones y Accesibilidad están activados. En iOS, el bloqueo depende de la autorización de Tiempo de uso.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño).',
        '2': 'Selecciona «Bloquear todo» para bloquear todos sus dispositivos, o abre un solo dispositivo y selecciona «Bloquear dispositivo».',
        '3': 'Espera unos segundos. El estado debería cambiar a «Bloqueado». Si nada cambia, abre KidGate en el dispositivo del niño y revisa los permisos.',
        '4': 'Para restaurar el acceso, selecciona «Desbloquear todo» (o «Desbloquear» en la pantalla del dispositivo) y confirma.',
        '5': 'Opcional: también puedes bloquear o desbloquear rápidamente desde Familia si esos accesos directos aparecen en la tarjeta del dispositivo.',
      },
    },
    pauseBrowsing: {
      title: 'Pausar la navegación un rato',
      summary:
        'Bloquea la web en un dispositivo entre 5 minutos y 8 horas. Las llamadas y las apps sin conexión siguen funcionando.',
      keywords: 'apagar internet, pausar wifi, sin red, sin conexión, pausa',
      tip: 'En la extensión de Chrome, la pausa solo afecta a Chrome. Para un descanso que se repita cada día, usa las Horas bloqueadas.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego «Pausar la navegación» en la sección Supervisión de seguridad.',
        '2': 'Elige una duración con el selector o con un valor rápido (30, 60 o 120 minutos) y confirma.',
        '3': 'La web queda bloqueada en ese dispositivo hasta que se acabe el tiempo. Los ajustes del Filtro web no cambian, y la pausa funciona aunque el Filtro web esté desactivado.',
        '4': 'Para terminarla antes, abre el dispositivo, toca la tarjeta «Pausar la navegación» y selecciona «Reanudar». Los minutos restantes no se guardan.',
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
        '5': 'Las solicitudes respondidas aparecen en Actividad. Para dejar de recibir estas notificaciones en tu dispositivo, desactiva Peticiones de tiempo extra en Notificaciones push, dentro de Ajustes.',
      },
    },
    rewardTasks: {
      title: 'Configura las Tareas con recompensa',
      summary:
        'Crea pequeñas tareas que tu hijo pueda completar para ganar minutos extra hoy.',
      tip: 'Los minutos extra solo cuentan si el dispositivo tiene un Límite diario. Los minutos van al dispositivo con el que tu hijo marcó la tarea como hecha. Las Tareas con recompensa no están disponibles en Android TV ni en la extensión de Chrome.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Tareas con recompensa.',
        '2': 'Selecciona «Nueva tarea» o empieza con una plantilla. Escribe la tarea y elige la recompensa en minutos (de 5 a 240), la dificultad y si se repite «Cada día» o «Una vez»; luego selecciona «Crear tarea».',
        '3': 'En el dispositivo del niño, la tarea aparece en «Gana tiempo extra». Cuando la termine, tu hijo selecciona «Ya lo hice».',
        '4': 'Recibes una notificación. En «Listas para revisar» (en la pantalla Tareas con recompensa, en Familia o en el perfil del niño), selecciona «Aprobar» para sumar los minutos a hoy, o «Devolver» para que tu hijo lo intente de nuevo.',
        '5': 'Toca una tarea para editarla o eliminarla. El plan gratuito permite hasta 10 tareas activas a la vez; Premium permite 20.',
      },
    },
    locationSharing: {
      title: 'Activa el uso compartido de la ubicación',
      summary:
        'Consulta la ubicación más reciente de tu hijo en el dispositivo del padre.',
      keywords: 'gps, mapa, dónde está mi hijo, encontrar el teléfono, lugares',
      tip: 'La ubicación requiere permiso en el dispositivo del niño y una conexión de red estable. El GPS en interiores puede ser menos preciso.',
      steps: {
        '1': 'En el dispositivo del niño, permite la Ubicación para KidGate cuando se solicite (o en los Ajustes del sistema).',
        '2': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Ubicación.',
        '3': 'Activa el uso compartido si está desactivado, y luego espera la primera actualización.',
        '4': 'Si el estado sigue mostrando espera, toca el botón de actualizar o vuelve a abrir la pantalla.',
        '5': 'Opcional: abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego la sección Alertas, y selecciona Lugares para configurar las Alertas de lugares cuando tu hijo entre o salga de un lugar guardado.',
        '6': 'Si el teléfono se ha perdido cerca, abre Ubicación y toca Hacer sonar el dispositivo. Un iPhone no suena mientras esté en silencio o con un modo de concentración activado.',
      },
    },
    checkIn: {
      title: 'Solicita un Check-in',
      summary:
        'Pide a tu hijo que confirme que está a salvo, con ubicación y una foto opcional.',
      tip: 'El permiso de la cámara en el dispositivo del niño es necesario para los Check-ins con foto.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño).',
        '2': 'Selecciona «Check-in» (la acción rápida o la fila de la sección Supervisión de seguridad).',
        '3': 'El dispositivo del niño recibe una notificación y una pantalla de Check-in. El niño toca para confirmar que está bien, o para pedir ayuda.',
        '4': 'Si el acceso a la cámara está permitido, KidGate adjunta una foto junto con la ubicación cuando es posible.',
        '5': 'En el dispositivo del padre, abre el historial de Check-in para revisar la última respuesta y la foto.',
      },
    },
    sos: {
      title: 'Alertas de emergencia SOS',
      summary: 'Entiende cómo envía un niño un SOS y cómo lo revisan los padres.',
      tip: 'Pruébalo una vez en casa para que tanto el padre como el niño conozcan el proceso antes de una emergencia real.',
      steps: {
        '1': 'En el dispositivo del niño, abre la pestaña o pantalla SOS en KidGate.',
        '2': 'Sigue los pasos que aparecen en pantalla para enviar un SOS (la ubicación y la foto dependen de los permisos concedidos).',
        '3': 'Los padres reciben una notificación push cuando se envía un SOS.',
        '4': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego la sección Alertas, y selecciona SOS para abrir las Alertas SOS y revisar el evento.',
        '5': 'Acuerda con tu hijo cuándo usar SOS y cuándo basta con un Check-in normal.',
      },
    },
    webFilter: {
      title: 'Restringir sitios web inapropiados',
      summary:
        'Activa el Filtro web para contenido inapropiado donde la plataforma lo permita.',
      keywords:
        'bloquear sitio web, bloquear enlace, url, contenido para adultos, búsqueda segura, dns, vpn, iphone, ipad',
      tip: 'El filtrado web depende de las capacidades de la plataforma. Combínalo con Apps bloqueadas para una protección más sólida.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Filtro web.',
        '2': 'Revisa el estado actual (sitios inapropiados restringidos, o filtrado desactivado).',
        '3': 'Activa el filtrado y guarda si aparece un interruptor.',
        '4': 'Vuelve a comprobarlo más tarde en la misma pantalla. Si el estado sigue en «Esperando», vuelve a abrir KidGate en el dispositivo del niño para que los ajustes se sincronicen.',
        '5': 'En un iPhone o iPad, abre KidGate en el dispositivo del niño y selecciona Permitir cuando iOS pida añadir configuraciones VPN; luego introduce el código del dispositivo. Solo se pide una vez.',
      },
    },
    protectionAlerts: {
      title: 'Alertas de protección',
      summary:
        'Recibe un aviso cuando se desactiva un permiso importante en el dispositivo del niño.',
      tip: 'Una alerta de protección significa que la protección de KidGate se ha debilitado. Restaura el permiso en el dispositivo del niño lo antes posible.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego la sección Alertas, y selecciona Protección para abrir las Alertas de protección.',
        '2': 'Revisa los eventos recientes, como la desactivación de Mostrar sobre otras aplicaciones, Accesibilidad, Acceso de uso, Cámara o Ubicación.',
        '3': 'En el dispositivo del niño, abre KidGate, luego Estado y vuelve a activar el permiso indicado.',
        '4': 'Vuelve a Alertas de protección y confirma que no aparecen nuevos eventos inesperados.',
        '5': 'Mantén las notificaciones activadas en el dispositivo del padre para enterarte rápido de los cambios.',
      },
    },
    usageReports: {
      title: 'Consulta los informes de uso',
      summary:
        'Mira cuánto tiempo se usó cada dispositivo hoy y en los últimos 30 días, también por cada hijo, y en un informe cada lunes.',
      tip: 'Con el plan gratuito ves el total de hoy y las 3 apps principales, actualizados cuando consultas KidGate. Premium añade 30 días de historial, cuándo se usó cada dispositivo, todas las apps, un informe por cada hijo y un nuevo informe semanal cada lunes. iPhone y iPad solo informan del total.',
      steps: {
        '1': 'Abre Informes. «Hoy» suma todos los dispositivos; debajo están el Informe semanal, cada hijo («Por niño») y cada dispositivo («Por dispositivo»).',
        '2': 'Toca un dispositivo para ver su Informe de uso: el uso de hoy frente al Límite diario, «Últimos 30 días», «Cuándo se usó» y «Apps más usadas». También puedes abrirlo desde «Uso de hoy» en la pantalla del dispositivo.',
        '3': 'Toca el perfil de un hijo para ver un único informe de todos sus dispositivos, en «Hoy», «7 días» o «30 días». El tiempo en dos pantallas a la vez cuenta una sola vez, así que el total puede ser menor que la suma de los dispositivos.',
        '4': 'Cada lunes por la mañana llega un nuevo Informe semanal, con una notificación. Sugiere un cambio que podrías hacer y abre el ajuste correspondiente.',
        '5': 'Al abrir KidGate se piden datos nuevos a cada dispositivo, así que pueden tardar unos minutos en actualizarse. Un dispositivo sin conexión a Internet envía sus datos cuando vuelve a conectarse.',
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
        '5': 'El historial se guarda 30 días. Cuando tu hijo pide abrir un sitio bloqueado, la solicitud aparece en «Requiere aprobación», no aquí.',
      },
    },
    videoHistory: {
      title: 'Consulta los Vídeos vistos',
      summary:
        'Guarda una lista de los vídeos de YouTube que ve tu hijo, con el canal y la hora.',
      keywords: 'youtube, shorts, videos vistos, historial de reproducción',
      tip: 'Vídeos vistos forma parte de Premium y solo cubre YouTube. Funciona en teléfonos Android, Android TV y la extensión de Chrome, no en iPhone ni iPad. En un Mac o PC, añade la extensión de Chrome. En una TV, los Shorts no aparecen.',
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
      tip: '«Aprobar aplicaciones nuevas» es gratis. La pantalla Aplicaciones, con el historial de instalaciones y la lista de apps instaladas, forma parte de Premium. iPhone y iPad no pueden informar de las instalaciones; en ellos, «Aprobar aplicaciones nuevas» oculta la App Store en su lugar.',
      steps: {
        '1': 'En el dispositivo del padre, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Aplicaciones en la sección Alertas.',
        '2': '«Cambios recientes» muestra las apps instaladas y eliminadas, de la más reciente a la más antigua. También recibes una notificación por cada una.',
        '3': '«Aplicaciones instaladas» muestra lo que hay en el dispositivo, con el grupo «Conviene revisarlas» arriba. Selecciona «Segura» para sacar una app de ese grupo. Para impedir que se use una app, usa Apps bloqueadas.',
        '4': 'Para retener las apps nuevas hasta que las permitas, abre Apps bloqueadas y activa «Aprobar aplicaciones nuevas». Cualquier app instalada a partir de entonces queda bloqueada en el dispositivo.',
        '5': 'Cuando haya una app nueva esperando, selecciona «Permitir» junto a ella para que pueda abrirse.',
      },
    },
    messageAlerts: {
      title: 'Activa las Alertas de mensajes',
      summary:
        'Recibe un aviso cuando aparezca una palabra o frase preocupante en los mensajes o las búsquedas del teléfono Android de tu hijo. Ves la palabra o frase marcada, nunca el mensaje.',
      keywords: 'sms, messenger, whatsapp, palabras clave, acoso, leer mensajes',
      tip: 'Las Alertas de mensajes forman parte de Premium y solo funcionan en teléfonos Android. Solo te llegan la categoría y la palabra o frase marcada. El análisis con IA está desactivado salvo que un padre o madre lo active para toda la familia.',
      steps: {
        '1': 'En el teléfono Android del niño, abre Ajustes de KidGate, selecciona «Desbloquear con el PIN parental», luego «Permitir acceso a notificaciones» en la sección Alertas de mensajes, y activa KidGate en la lista que se abre.',
        '2': 'En tu dispositivo, abre el perfil del niño (o el dispositivo, si no está asignado a ningún niño), luego Alertas de mensajes en la sección Alertas, y toca el icono de ajustes de arriba. Si tu hijo tiene varios dispositivos, selecciona primero el teléfono Android.',
        '3': 'Activa «Revisar los mensajes que recibe». «Marcar también el lenguaje soez» es opcional, y puedes elegir hasta 3 idiomas en «Idiomas analizados».',
        '4': 'Para revisar también lo que escribe y busca tu hijo: en el dispositivo del niño, selecciona «Permitir» en la sección Alertas de mensajes y luego activa «Revisar los mensajes que escribe» y «Revisar lo que busca» en tu dispositivo.',
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
        '2': 'Después de vincular un dispositivo nuevo, KidGate pregunta quién lo usa. Elige a tu hijo, o «Nadie» si es un dispositivo compartido. Después, KidGate ofrece un conjunto inicial de protecciones: selecciona «Activar protección» o «Ahora no».',
        '3': 'Un dispositivo para el que no se ha elegido a nadie aparece en «Sin asignar», en Familia. Selecciona «Asignar a un niño…» en su tarjeta.',
        '4': 'Cuando un dispositivo está asignado, el Límite diario, las Horas bloqueadas, el Filtro web, el Check-in, SOS, los lugares y las Tareas con recompensa se configuran en el perfil del niño y se aplican a todos sus dispositivos. El Límite diario pasa a ser un total compartido entre esos dispositivos.',
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
        '2': 'La prueba de 7 días empieza cuando se vincula tu primer dispositivo del niño e incluye todo lo de Premium.',
        '3': 'Con el plan gratuito, todas las reglas siguen funcionando, pero solo un dispositivo envía informes: el total de hoy y las 3 apps principales, actualizados cuando consultas KidGate. Premium añade actualizaciones en vivo, todos los dispositivos, 30 días de historial, historial web y de vídeos, e informes semanales.',
        '4': 'Si la prueba termina con más de un dispositivo del niño, KidGate muestra «Elige tu dispositivo principal». El que elijas sigue enviando informes; los demás muestran «En pausa», pero conservan sus reglas. Puedes cambiar tu elección una vez cada 7 días.',
        '5': 'Para suscribirte, elige un plan y selecciona «Suscribirse a Premium». Al suscribirte, todos los dispositivos en pausa vuelven a enviar informes. Si ya pagaste antes, selecciona «Restaurar compras».',
      },
    },
    notificationSettings: {
      title: 'Elige qué alertas recibes',
      summary:
        'Activa o desactiva cada tipo de alerta y configura las horas de silencio en cada teléfono de padre o madre.',
      tip: 'El SOS siempre llega, aunque lo desactives todo y durante las horas de silencio. Estos ajustes solo se aplican a este teléfono; los demás padres eligen los suyos.',
      steps: {
        '1': 'Abre Ajustes y luego Notificaciones push.',
        '2': 'En la sección Alertas, desactiva los tipos de alerta que no quieras en este teléfono, por ejemplo «Peticiones de tiempo extra» o «Apps instaladas o eliminadas».',
        '3': '«Resumen semanal» controla la notificación de los lunes sobre el informe semanal.',
        '4': 'Activa «Horas de silencio» y define «Desde» y «Hasta» para silenciar las alertas por la noche. Las horas siguen el reloj de este teléfono.',
        '5': 'En Ajustes, «Alertas en la app» y «Sirena SOS» son opciones aparte: controlan el aviso dentro de la app y el sonido fuerte del SOS en este teléfono.',
      },
    },
    webSignIn: {
      title: 'Usa KidGate en un ordenador',
      summary:
        'Inicia sesión en el panel web y gestiona tu familia desde un navegador.',
      tip: 'Autoriza solo un navegador en el que estés iniciando sesión tú: tendrá el mismo control que tu teléfono. El panel web no puede vincular dispositivos ni comprar un plan. Para cerrar la sesión de un navegador, usa «Cerrar sesión» en el panel.',
      steps: {
        '1': 'En el ordenador, abre dashboard.kidgate.app y elige «Iniciar sesión con la app de KidGate». Aparece un código QR.',
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
    deleteAccount: {
      title: 'Eliminar tu cuenta',
      summary:
        'Elimina tu cuenta de KidGate y sus datos, con 14 días para cambiar de opinión.',
      tip: 'Eliminar tu cuenta no cancela una suscripción de App Store o Google Play; cancélala en la tienda. Un segundo padre o madre que solo quiera dejar de gestionar la familia puede salir de ella.',
      steps: {
        '1': 'Abre Ajustes y, en Cuenta, selecciona «Eliminar cuenta».',
        '2': 'Lee lo que se eliminará. Si eres el propietario de la familia, todos los demás padres y todos los dispositivos de los niños también pierden el acceso.',
        '3': 'Confirma que eres tú (con tu contraseña o volviendo a iniciar sesión con Google o Apple), escribe OK y selecciona «Eliminar permanentemente».',
        '4': 'La cuenta se elimina a los 14 días. Hasta entonces, abre KidGate y selecciona «Cancelar eliminación» para conservarlo todo.',
        '5': 'Si un segundo padre o madre elimina su cuenta, solo se elimina la suya; la familia se mantiene. Para salir de una familia sin eliminar tu cuenta, abre la tarjeta de la familia en Familia y selecciona «Salir de la familia».',
      },
    },
  },
  onChildDevice: 'En el dispositivo del niño',
  onParentDevice: 'En tu dispositivo',
  handoffHint:
    'KidGate puede guiar estos pasos en el propio dispositivo del niño: ábrelo allí, ve a Estado y selecciona Termina la configuración con tus padres. Cada paso tiene un botón que abre la pantalla correcta.',
} as const;
