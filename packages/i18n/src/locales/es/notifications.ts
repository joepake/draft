export const notifications = {
  title: 'Notificaciones',
  subtitleAllOn: 'Todas las alertas activadas',
  subtitleMuted_one: '1 alerta silenciada',
  subtitleMuted: '{{count}} alertas silenciadas',
  sosAlwaysOn: 'El SOS siempre llega, aunque desactives todo lo de aquí.',
  sosFullScreenOff:
    'En este teléfono, un SOS aparece como un aviso pequeño en lugar de ocupar toda la pantalla, así que es más fácil pasarlo por alto. Permite las alertas a pantalla completa para solucionarlo.',
  sosFullScreenAllow: 'Permitir alertas a pantalla completa',
  sectionAlerts: 'Alertas',
  sectionAlertsHint: 'Elige qué alertas se envían a un teléfono de padre o madre.',
  sectionSummary: 'Resumen',
  sectionQuietHours: 'Horas de silencio',
  sectionQuietHoursHint:
    'Durante este intervalo solo llegan el SOS y las Alertas de mensajes más graves. Después no se envía nada; los eventos siguen apareciendo en Actividad.',
  quietHoursLabel: 'Horas de silencio',
  quietHoursOff: 'Desactivado: las alertas llegan a cualquier hora',
  quietHoursActive: 'No se envían alertas de {{start}} a {{end}}',
  quietHoursStart: 'Desde',
  quietHoursEnd: 'Hasta',
  quietHoursSameTime: 'Elige dos horas distintas.',
  footnote:
    'Estos ajustes se aplican a un solo teléfono. Los demás dispositivos de madres y padres mantienen los suyos.',
  toastSaveFailed: 'No se pudo guardar. Inténtalo de nuevo.',
  localReminderSetupTitle: 'Termina de configurar KidGate',
  localReminderIdleTitle: 'Tus reglas siguen funcionando',
  localReminderIdleBody:
    'Hace una semana que no abres KidGate. Consulta el tiempo de pantalla de hoy y lo que se bloqueó.',
  localReminderDormancyTitle: 'Los informes podrían parar',
  localReminderDormancyBody:
    'Si nadie abre KidGate durante {{days}} días, los dispositivos de tu hijo dejan de enviar informes hasta que alguien vuelva a abrirlo. Tus reglas siguen funcionando.',
  alert: {
    tamperAlerts: {
      label: 'Alertas de protección',
      hint: 'En un dispositivo del niño se desactiva un permiso que KidGate necesita, se cambia el reloj o la zona horaria, o se pulsa SOS con el dispositivo bloqueado.',
    },
    placeAlerts: {
      label: 'Alertas de lugares',
      hint: 'Tu hijo o hija llega a un lugar guardado o sale de él.',
    },
    timeRequests: {
      label: 'Solicitudes de tiempo',
      hint: 'Tu hijo o hija pide más tiempo de pantalla.',
    },
    siteRequests: {
      label: 'Peticiones de sitios',
      hint: 'Tu hijo o hija pide abrir un sitio bloqueado.',
    },
    checkIn: {
      label: 'Respuestas de Check-in',
      hint: 'Tu hijo o hija responde a un Check-in.',
    },
    rewardTasks: {
      label: 'Tareas con recompensa',
      hint: 'Tu hijo o hija marca una tarea de recompensa como hecha.',
    },
    appActivity: {
      label: 'Apps instaladas o eliminadas',
      hint: 'Aparece o desaparece una app en el dispositivo del niño.',
    },
    anomalyAlerts: {
      label: 'Actividad inusual',
      hint: 'Uso fuera de lo habitual en un dispositivo infantil: uso nocturno, picos, apps nuevas.',
    },
    weeklyDigest: {
      label: 'Informe semanal',
      hint: 'Un repaso de los lunes del tiempo de pantalla y los bloqueos.',
    },
    messageAlerts: {
      label: 'Alertas de mensajes',
      hint: 'Aparecen palabras preocupantes en los mensajes o las búsquedas de tu hijo.',
    },
    billing: {
      label: 'Recordatorios de Premium',
      hint: 'Recordatorios para suscribirte después de que termine tu prueba. Los avisos de que tu prueba o Premium terminan siempre llegan.',
    },
  },
};
