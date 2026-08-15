export const userGuide = {
  title: 'Guía del usuario',
  subtitle:
    'Ayuda paso a paso sobre permisos, vinculación de dispositivos, controles diarios y funciones de seguridad.',
  stepLabel: 'Paso {{n}}',
  stepsSectionTitle: 'Pasos',
  tipTitle: 'Consejo',
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
      description: 'Límites, horarios, bloqueo de apps y bloqueo del dispositivo',
    },
    safety: {
      title: 'Seguridad y supervisión',
      description: 'Ubicación, Check-In, SOS, Filtro web y protección',
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
        '2': 'Inicia sesión con Google o Apple, o crea una cuenta de correo electrónico. Confirma que eres el propietario de la familia de este hogar.',
        '3': 'Si se te pide, ponle un nombre a tu familia (por ejemplo, «Familia García»). Este nombre aparecerá cuando otros padres se unan.',
        '4': 'Configura un PIN parental (6 dígitos) en Ajustes → Seguridad. Memorízalo o guárdalo en un lugar seguro, y no lo compartas con los niños.',
        '5': 'Recomendado: activa el Bloqueo de la app y el desbloqueo biométrico en Ajustes para que nadie más pueda abrir la app de los padres en tu dispositivo.',
        '6': 'Abre Familia (Dispositivos). Pulsa + y selecciona «Conectar dispositivo del niño». Deja esta pantalla lista para el código QR o el código del dispositivo del niño.',
        '7': 'Cuando el dispositivo del niño se conecte, abre la tarjeta de ese dispositivo. Configura el Límite diario y las Horas bloqueadas, y completa los permisos junto con tu hijo.',
      },
    },
    getStartedChild: {
      title: 'Configura un dispositivo del niño',
      summary: 'Instala KidGate en el dispositivo del niño y completa los permisos.',
      tip: 'Hazlo junto con un padre o madre. Muchas pantallas de permisos aparecen solo una vez y son fáciles de pasar por alto a solas.',
      steps: {
        '1': 'Instala KidGate en el dispositivo del niño. Abre la app y selecciona «Este es un dispositivo del niño».',
        '2': 'Deja abierta la pantalla de vinculación. Muestra el código QR al padre o madre, o léele en voz alta el código de 6 caracteres.',
        '3': 'En el dispositivo del padre, escanea el código QR o introduce el código. En el dispositivo del niño, confirma al padre cuando se te pida — acepta solo a alguien que conozcas.',
        '4': 'Espera hasta que la pantalla de inicio muestre que el dispositivo está conectado. No cierres KidGate a la fuerza durante la configuración.',
        '5': 'En la pantalla Estado, concede todos los permisos que solicita KidGate (notificaciones, ubicación, cámara y permisos específicos de la plataforma). Toca cada fila hasta que aparezca como permitida.',
        '6': 'Deja KidGate instalado y con la sesión iniciada en el dispositivo del niño. A partir de ahora, los padres gestionan los límites desde su propio dispositivo.',
      },
    },
    connectChild: {
      title: 'Conectar un dispositivo del niño',
      summary:
        'Vincula un nuevo dispositivo del niño a tu familia con un código QR o un código.',
      tip: 'Los códigos caducan. Si la vinculación falla, selecciona «Nuevo código» en el dispositivo del niño e inténtalo de nuevo.',
      steps: {
        '1': 'En el dispositivo del niño: abre KidGate → «Este es un dispositivo del niño». Deja visible la pantalla del código QR.',
        '2': 'En el dispositivo del padre: abre Familia → pulsa + → «Conectar dispositivo del niño».',
        '3': 'Se recomienda un código QR: selecciona «Escanear código QR», permite el acceso a la cámara si se solicita, y encuadra el código QR del dispositivo del niño dentro del marco.',
        '4': 'O usa el código: selecciona «Introducir código manualmente», escribe los 6 caracteres que aparecen en el dispositivo del niño y continúa.',
        '5': 'En el dispositivo del niño, lee con atención la pantalla de confirmación. Selecciona «Sí, conectar» solo si el nombre del padre es correcto.',
        '6': 'Espera a que el dispositivo del padre confirme la conexión. El nuevo dispositivo aparecerá en Familia.',
        '7': 'Abre el nuevo dispositivo y comprueba que «Última actividad» se actualiza. Si permanece sin conexión, vuelve a abrir KidGate en el dispositivo del niño y revisa la conexión de red.',
        '8': 'A continuación, concede los permisos en el dispositivo del niño (consulta el grupo Permisos de la app). Los controles no funcionarán del todo hasta que esos permisos estén activados.',
      },
    },
    inviteParent: {
      title: 'Invitar a otro padre o madre',
      summary:
        'Permite que un segundo padre o madre se una a la misma familia y gestione los mismos dispositivos del niño.',
      tip: 'Solo el propietario de la familia puede aprobar las solicitudes de unión. Aprueba con rapidez, ya que las solicitudes pueden caducar.',
      steps: {
        '1': 'En el dispositivo del propietario de la familia, abre Familia → pulsa + → «Añadir otro dispositivo de padre o madre» (o «Invitar a un padre»).',
        '2': 'Si aún no has creado un nombre de familia, introduce uno y selecciona «Crear familia».',
        '3': 'Muestra el código QR de invitación al otro padre o madre, o comparte el código de invitación con él o ella.',
        '4': 'En el otro dispositivo de padre o madre: abre KidGate como padre → Familia → + → «Unirse a una familia», y luego escanea el código QR o introduce el código.',
        '5': 'De vuelta en el dispositivo del propietario, abre la solicitud pendiente y selecciona «Aprobar». Recházala si no reconoces a la persona.',
        '6': 'El nuevo padre o madre verá los mismos dispositivos del niño y podrá ayudar a gestionar los límites. Algunas acciones, como renombrar o eliminar dispositivos, siguen siendo exclusivas del propietario.',
      },
    },
    joinFamily: {
      title: 'Unirse a una familia existente',
      summary:
        'Usa una invitación del propietario de la familia para convertirte en copadre o comadre.',
      tip: 'Si la solicitud de aprobación caduca, pide al propietario un nuevo código QR o código de invitación.',
      steps: {
        '1': 'Instala KidGate e inicia sesión como padre o madre en tu dispositivo.',
        '2': 'Abre Familia → pulsa + → «Unirse a una familia».',
        '3': 'Escanea el código QR de invitación del propietario, o introduce el código de invitación de 6 caracteres.',
        '4': 'Espera a que el propietario apruebe la solicitud. Mantén la app abierta hasta que veas que te has unido a la familia.',
        '5': 'Confirma que los dispositivos del niño aparecen en Familia. Abre un dispositivo para ver su estado y sus controles.',
      },
    },
    androidPermissions: {
      title: 'Permisos de Android (dispositivo del niño)',
      summary:
        'Activa Acceso de uso, Mostrar sobre otras apps, Accesibilidad, batería y permisos relacionados.',
      tip: 'La integridad importa más que el orden. Cada fila en rojo o no permitida en la pantalla Estado del niño debe corregirse antes de confiar en el bloqueo o las Horas bloqueadas.',
      steps: {
        '1': 'En el dispositivo del niño, abre KidGate → Estado y recorre la lista de permisos de arriba abajo.',
        '2': 'Notificaciones: toca la fila → Permitir. Los padres necesitan notificaciones push para las órdenes de bloqueo y las solicitudes de tiempo.',
        '3': 'Acceso de uso: abre la pantalla del sistema → busca KidGate → actívalo. Esto es obligatorio para medir el tiempo de pantalla y aplicar límites.',
        '4': 'Mostrar sobre otras apps: permítelo para KidGate. Es necesario para que la pantalla de bloqueo pueda aparecer sobre otras apps.',
        '5': 'Ayuda de bloqueo por Accesibilidad: Ajustes → Accesibilidad → Apps instaladas/descargadas → KidGate → Activado. Esto mantiene el bloqueo en vigor.',
        '6': 'Batería sin restricciones: selecciona «Permitir» cuando se solicite. Si no aparece ningún aviso: Información de la app → Batería → Sin restricciones.',
        '7': 'Alarmas y recordatorios: permítelo para que las Horas bloqueadas empiecen y terminen puntualmente.',
        '8': 'Ubicación y Cámara (si usas Check-In o fotos de SOS): permítelas cuando KidGate lo solicite. Vuelve a Estado y confirma que todas las filas están permitidas.',
      },
    },
    iosScreenTime: {
      title: 'Tiempo de uso en iOS (dispositivo del niño)',
      summary:
        'Permite el Uso de apps y sitios web para que funcionen el bloqueo, los horarios y la selección de apps.',
      tip: 'Si falta el botón Permitir, abre Ajustes de iOS → Tiempo de uso y comprueba que Tiempo de uso está activado primero en el dispositivo del niño.',
      steps: {
        '1': 'En el iPhone del niño, abre KidGate y permanece en la pantalla Estado / configuración.',
        '2': 'Selecciona «Permitir Uso de apps y sitios web» (o el aviso de Tiempo de uso).',
        '3': 'En el cuadro de diálogo del sistema, selecciona «Permitir». No cierres el diálogo sin elegir una opción.',
        '4': 'Vuelve a KidGate. El aviso desaparece en cuanto la autorización se completa correctamente.',
        '5': 'Si la autorización se denegó antes: abre Ajustes de iOS → busca KidGate → activa las opciones de Tiempo de uso relacionadas y vuelve a abrir KidGate.',
        '6': 'Para elegir las apps bloqueadas: en el dispositivo del niño, abre Ajustes de KidGate → introduce el PIN parental → «Elegir apps a bloquear» → guarda.',
        '7': 'En el dispositivo del padre, abre el dispositivo → Apps bloqueadas y confirma que la lista se ha sincronizado. Activa el bloqueo cuando estés listo.',
      },
    },
    oemKeepRunning: {
      title: 'Mantener KidGate en funcionamiento (ajustes del fabricante)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei y dispositivos similares suelen pausar las apps en segundo plano.',
      tip: 'Tras cambiar las reglas de batería, reinicia el dispositivo del niño una vez, vuelve a abrir KidGate y luego prueba el bloqueo desde el dispositivo del padre.',
      steps: {
        '1': 'En el dispositivo Android del niño, abre KidGate → Estado → «Mantener KidGate en funcionamiento».',
        '2': 'Permite el inicio automático de KidGate en la pantalla de seguridad del fabricante (el texto varía según el dispositivo).',
        '3': 'Configura el uso de batería de KidGate como Sin restricciones tanto en los ajustes de Android como en el menú de batería del fabricante, si existen ambos.',
        '4': 'Desactiva cualquier lista de «apps en reposo», «apps en reposo profundo» o «poner apps en reposo» que incluya a KidGate.',
        '5': 'Si un acceso directo no funciona, abre manualmente la app de Seguridad / Cuidado del dispositivo y busca KidGate, Inicio automático o Batería.',
        '6': 'Marca cada fila como Hecho en KidGate a medida que la completes, para ver lo que falta.',
      },
    },
    dailyLimit: {
      title: 'Configura un Límite diario',
      summary: 'Limita cuántos minutos puede usar el niño el dispositivo cada día.',
      tip: 'Los datos de uso provienen del dispositivo del niño. Si el contador parece estancado, abre KidGate en el dispositivo del niño y espera una sincronización.',
      steps: {
        '1': 'En el dispositivo del padre, abre Familia → toca el dispositivo del niño.',
        '2': 'En Controles esenciales, selecciona «Límite diario».',
        '3': 'Elige un valor de minutos por día (o edita el límite existente) y guarda.',
        '4': 'Confirma que la tarjeta del dispositivo muestra los minutos usados y el límite de hoy tras sincronizar el dispositivo del niño.',
        '5': 'Cuando se alcanza el límite, el dispositivo se bloquea según las reglas de la plataforma. Selecciona «Desbloquear» en la pantalla del dispositivo si quieres restaurar el acceso antes de tiempo.',
      },
    },
    blockedHours: {
      title: 'Configura las Horas bloqueadas',
      summary:
        'Programa hasta 3 franjas horarias en las que el dispositivo debe permanecer bloqueado.',
      tip: 'Configura primero las horas de escuela y las franjas de dormir. Evita franjas superpuestas para mantener el horario claro.',
      steps: {
        '1': 'Abre el dispositivo del niño en el dispositivo del padre → Horas bloqueadas.',
        '2': 'Selecciona «Configurar Horas bloqueadas» (o «Editar Horas bloqueadas»). Añade una franja con hora de inicio, hora de fin y días.',
        '3': 'Guarda la franja. Puedes añadir hasta 3 franjas en total.',
        '4': 'Activa el horario si aparece un interruptor de activación.',
        '5': 'En el dispositivo del niño, confirma que los permisos de Alarmas y recordatorios y Tiempo de uso siguen permitidos para que los horarios se ejecuten a tiempo.',
        '6': 'Durante una franja activa, la tarjeta del dispositivo muestra «Horas bloqueadas activas · bloqueado». Usa «Desbloquear» solo cuando quieras anular el horario a propósito.',
      },
    },
    blockedApps: {
      title: 'Bloquear apps específicas',
      summary:
        'Elige las apps en el dispositivo del niño y luego activa el bloqueo desde el dispositivo del padre.',
      tip: 'En iOS, Apple puede ocultar los nombres exactos de las apps a los dispositivos de los padres. La selección se sigue haciendo en el dispositivo del niño con el PIN parental.',
      steps: {
        '1': 'Usa directamente el dispositivo del niño. Abre KidGate → Ajustes.',
        '2': 'Introduce el PIN parental cuando se te pida.',
        '3': 'Abre «Elegir apps a bloquear». Selecciona las apps (y categorías, si aparecen) y guarda en el dispositivo del niño.',
        '4': 'En el dispositivo del padre, abre el dispositivo → Apps bloqueadas y espera a que aparezca la lista seleccionada.',
        '5': 'Activa «Activar el bloqueo de apps». El estado debería mostrar «Bloqueo activado».',
        '6': 'Pruébalo abriendo una app bloqueada en el dispositivo del niño. Debería quedar restringida según las reglas de la plataforma.',
        '7': 'Para cambiar la lista más adelante, repite la selección en el dispositivo del niño con el PIN parental. El dispositivo del padre sincronizará la nueva lista.',
      },
    },
    lockUnlock: {
      title: 'Bloquear y desbloquear el dispositivo',
      summary: 'Bloquea el dispositivo del niño de inmediato, o restaura el acceso.',
      tip: 'En Android, el bloqueo es más eficaz cuando Mostrar sobre otras apps y Accesibilidad están activados. En iOS, el bloqueo depende de la autorización de Tiempo de uso.',
      steps: {
        '1': 'Abre el dispositivo del niño en el dispositivo del padre.',
        '2': 'Selecciona «Bloquear dispositivo» (o «Bloquear en KidGate», según las opciones de la plataforma que se muestren).',
        '3': 'Espera unos segundos. El estado debería cambiar a «Bloqueado». Si nada cambia, abre KidGate en el dispositivo del niño y revisa los permisos.',
        '4': 'Para restaurar el acceso, selecciona «Desbloquear» en la misma pantalla del dispositivo y confirma.',
        '5': 'Opcional: también puedes bloquear o desbloquear rápidamente desde Familia si esos accesos directos aparecen en la tarjeta del dispositivo.',
      },
    },
    locationSharing: {
      title: 'Activa el uso compartido de la ubicación',
      summary:
        'Consulta la ubicación más reciente de tu hijo en el dispositivo del padre.',
      tip: 'La ubicación requiere permiso en el dispositivo del niño y una conexión de red estable. El GPS en interiores puede ser menos preciso.',
      steps: {
        '1': 'En el dispositivo del niño, permite la Ubicación para KidGate cuando se solicite (o en los Ajustes del sistema).',
        '2': 'En el dispositivo del padre, abre el dispositivo → Ubicación.',
        '3': 'Activa el uso compartido si está desactivado, y luego espera la primera actualización.',
        '4': 'Desliza hacia abajo para actualizar, o vuelve a abrir la pantalla, si el estado sigue mostrando espera.',
        '5': 'Opcional: configura las Alertas de lugares para que te avisen cuando tu hijo entre o salga de un lugar guardado.',
      },
    },
    checkIn: {
      title: 'Solicita un Check-In',
      summary:
        'Pide a tu hijo que confirme que está a salvo, con ubicación y una foto opcional.',
      tip: 'El permiso de la cámara en el dispositivo del niño es necesario para los Check-Ins con foto.',
      steps: {
        '1': 'Abre el dispositivo del niño en el dispositivo del padre.',
        '2': 'Selecciona «Check-In» (la acción rápida o la sección Seguridad).',
        '3': 'El dispositivo del niño recibe una notificación y una pantalla de Check-In. El niño toca para confirmar que está bien, o para pedir ayuda.',
        '4': 'Si el acceso a la cámara está permitido, KidGate adjunta una foto junto con la ubicación cuando es posible.',
        '5': 'En el dispositivo del padre, abre el historial de Check-In para revisar la última respuesta y la foto.',
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
        '4': 'En el dispositivo del padre, abre el dispositivo → Alertas SOS para revisar el evento.',
        '5': 'Acuerda con tu hijo cuándo usar SOS y cuándo basta con un Check-In normal.',
      },
    },
    webFilter: {
      title: 'Restringir sitios web para adultos',
      summary:
        'Activa el Filtro web para contenido de adultos donde la plataforma lo permita.',
      tip: 'El filtrado web depende de las capacidades de la plataforma. Combínalo con Apps bloqueadas para una protección más sólida.',
      steps: {
        '1': 'Abre el dispositivo del niño en el dispositivo del padre → Filtro web.',
        '2': 'Revisa el estado actual (sitios para adultos restringidos, o filtrado desactivado).',
        '3': 'Activa el filtrado y guarda si aparece un interruptor.',
        '4': 'Vuelve a comprobarlo más tarde en la misma pantalla. Si el estado sigue en «Esperando», vuelve a abrir KidGate en el dispositivo del niño para que los ajustes se sincronicen.',
      },
    },
    protectionAlerts: {
      title: 'Alertas de protección',
      summary:
        'Recibe un aviso cuando se desactiva un permiso importante en el dispositivo del niño.',
      tip: 'Una alerta de protección significa que la protección de KidGate se ha debilitado. Restaura el permiso en el dispositivo del niño lo antes posible.',
      steps: {
        '1': 'Abre el dispositivo del niño → Protección (o Alertas de protección).',
        '2': 'Revisa los eventos recientes, como la desactivación de Mostrar sobre otras apps, Accesibilidad, Acceso de uso, Cámara o Ubicación.',
        '3': 'En el dispositivo del niño, abre KidGate → Estado y vuelve a activar el permiso indicado.',
        '4': 'Vuelve a Alertas de protección y confirma que no aparecen nuevos eventos inesperados.',
        '5': 'Mantén las notificaciones activadas en el dispositivo del padre para enterarte rápido de los cambios.',
      },
    },
  },
} as const;
