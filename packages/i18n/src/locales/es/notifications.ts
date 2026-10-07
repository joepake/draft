export const notifications = {
  title: 'Notificaciones',
  subtitleAllOn: 'Todas las alertas activadas',
  subtitleMuted_one: '1 alerta silenciada',
  subtitleMuted: '{{count}} alertas silenciadas',
  sosAlwaysOn: 'El SOS siempre llega, aunque desactives todo lo de aquí.',
  sectionAlerts: 'Alertas',
  sectionAlertsHint: 'Elige de qué se notifica este teléfono.',
  sectionSummary: 'Resumen',
  sectionQuietHours: 'Horas de silencio',
  sectionQuietHoursHint:
    'Las alertas quedan en silencio en este intervalo. El SOS nunca se silencia, y las Alertas de mensajes más graves siguen llegando.',
  quietHoursLabel: 'Horas de silencio',
  quietHoursOff: 'Desactivado: las alertas llegan a cualquier hora',
  quietHoursActive: 'En silencio de {{start}} a {{end}}',
  quietHoursStart: 'Desde',
  quietHoursEnd: 'Hasta',
  footnote:
    'Estos ajustes solo se aplican a este teléfono. Los demás dispositivos de madres y padres mantienen los suyos.',
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
      label: 'Protección desactivada',
      hint: 'En un dispositivo del niño se desactivó un permiso que KidGate necesita, se cambió la fecha, la hora o la zona horaria, o se pulsó SOS mientras estaba bloqueado. La propia alerta de SOS siempre llega.',
    },
    placeAlerts: {
      label: 'Llegadas y salidas',
      hint: 'Tu hijo o hija llega a un lugar guardado o sale de él.',
    },
    timeRequests: {
      label: 'Peticiones de tiempo extra',
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
      label: 'Recompensas reclamadas',
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
      label: 'Resumen semanal',
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
