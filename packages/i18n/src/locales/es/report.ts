export const report = {
  title: 'Informe semanal',
  subtitle: 'Lo que KidGate observó durante la semana.',
  weekOf: 'Semana {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Enviado el domingo',
  triggerManual: 'Creado por ti',

  statScreenTime: 'Tiempo de pantalla',
  statDailyAverage: 'Promedio diario',
  statBlockedApps: 'Apps bloqueadas',
  statBlockedWebVisits: 'Sitios filtrados',

  trendUp: '{{value}} más que la semana anterior',
  trendDown: '{{value}} menos que la semana anterior',
  trendFlat: 'Casi igual que la semana anterior',
  trendFirstWeek: 'Primera semana con datos',
  barThisWeek: 'Esta semana',
  barLastWeek: 'Semana pasada',

  highlights: 'Vale la pena saber',
  sevAttention: 'Para revisar',
  sevNotable: 'Destacable',
  sevInfo: 'Para tu información',

  findingUsageUp:
    'El tiempo de pantalla subió un {{percent}} %: {{delta}} más que la semana pasada.',
  findingUsageDown:
    'El tiempo de pantalla bajó un {{percent}} %: {{delta}} menos que la semana pasada.',
  findingUsageFlat: 'El tiempo de pantalla se mantuvo en {{total}}.',
  findingLateNight_one: 'Una noche después de las 23:00: llegó hasta las {{time}}.',
  findingLateNight_other:
    '{{count}} noches después de las 23:00; la más tarde llegó hasta las {{time}}.',
  findingNewTopApp: '{{app}} es nueva esta semana y ya ocupó {{duration}}.',
  findingAppSurge:
    '{{app}} subió {{delta}} respecto a la semana pasada: {{duration}} en total.',
  findingLimitHit_one: 'Se alcanzó el límite diario de {{limit}} un día.',
  findingLimitHit_other: 'Se alcanzó el límite diario de {{limit}} en {{count}} días.',
  findingBlockedApps:
    '{{count}} aperturas de apps bloqueadas, frente a {{previous}} la semana pasada.',
  findingBlockedWeb:
    '{{count}} sitios filtrados, frente a {{previous}} la semana pasada.',
  findingQuietWeek:
    'Una semana tranquila: {{total}} en total y nada que requiriera tu atención.',

  // La mitad positiva del informe. Cada frase dice qué pasó y la cifra que lo
  // respalda; ninguna elogia — `docs/COPY_STYLE.md` prohíbe la adulación igual
  // que prohíbe la alarma.
  findingLimitRespected: 'El límite diario de {{limit}} se respetó los {{count}} días.',
  findingLateNightGone_one:
    'Ninguna noche tardía esta semana, tras una la semana pasada.',
  findingLateNightGone_other:
    'Ninguna noche tardía esta semana, tras {{count}} la semana pasada.',
  findingBlockedAppsDown:
    '{{count}} aperturas de apps bloqueadas, frente a {{previous}} la semana pasada.',
  findingBlockedWebDown:
    '{{count}} sitios filtrados, frente a {{previous}} la semana pasada.',
  findingLearningTime: '{{duration}} en apps educativas, sobre todo {{app}}.',
  findingTasksDone_one: 'Una tarea completada, con {{bonus}} de premio.',
  findingTasksDone_other: '{{count}} tareas completadas, con {{bonus}} de premio.',
  findingAskedFirst_one: 'Una solicitud enviada, en vez de saltarse una regla.',
  findingAskedFirst_other:
    '{{count}} solicitudes enviadas, en vez de saltarse las reglas.',
  findingCheckedIn: 'Se respondieron los {{asked}} Check-ins.',

  narrativeTitle: 'En una frase',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'Algo que podrías hacer',
  actionDailyLimit: 'Poner un Límite diario de {{duration}}',
  actionDailyLimitWhy: 'Ese fue el promedio diario de la semana pasada.',
  actionBlockedHours: 'Configurar Horas bloqueadas',
  actionBlockedHoursLateNight: 'Bloquear las horas de la madrugada',
  actionOnDevice: 'En {{device}}',
  finePrint:
    'Las cifras cubren del {{from}} al {{to}}, en todos los dispositivos de la familia. El tiempo de pantalla es lo que informaron los dispositivos; los minutos que no pudieron medir no están en ningún total.',

  generate: 'Crear el informe de esta semana',
  generating: 'Creando…',
  share: 'Compartir',
  copySummary: 'Copiar resumen',
  copied: 'Resumen copiado.',
  shareFailed: 'No se pudo abrir el menú de compartir.',
  shareFooterDesc:
    'KidGate ayuda a los padres a ver el tiempo de pantalla, la ubicación y los mensajes.',
  shareFooterCta: 'Descarga la app en kidgate.app/get',

  emptyTitle: 'Todavía no hay informe',
  emptyBody:
    'El informe llega cada domingo por la tarde. También puedes crear el de esta semana ahora: cubre los últimos siete días.',
  noUsage:
    'No se registró tiempo de pantalla en las últimas dos semanas, así que aún no hay nada que informar. Un dispositivo sin conexión no informa nada, y eso no es lo mismo que una semana tranquila.',
  rateLimited: 'Demasiados intentos. Espera un minuto.',
  loadFailedTitle: 'No se cargaron los informes',
  loadFailed: 'No se pudieron abrir los informes. Desliza hacia abajo para reintentar.',
  failed: 'No se pudo crear el informe. Inténtalo de nuevo en un momento.',

  historyTitle: 'Semanas anteriores',
  historyEmpty:
    'Los informes que recibas a partir de ahora se guardan aquí durante un año.',

  hubToday: 'Hoy',
  hubTodayEmpty: 'Ningún dispositivo ha informado todavía hoy.',
  hubByChild: 'Por niño',
  hubByDevice: 'Por dispositivo',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'Cada hijo',
  childrenNote:
    'La misma quincena, por dispositivo. Los porcentajes son del total familiar.',
  colChild: 'Hijo',
  colScreenTime: 'Tiempo de pantalla',
  colShare: 'Proporción',
  colChange: 'Frente a la semana pasada',
  colLimit: 'Sobre el límite',
  colLateNights: 'Noches tardías',
  colTopApp: 'Más usada',
  unnamedChild: 'Sin nombre',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'prácticamente igual',
  noLimit: 'Sin límite',
  noTopApp: '—',
  limitDays_one: '{{count}} día',
  limitDays_other: '{{count}} días',
  lateNightsNone: 'ninguna',
  busiest: 'Más tiempo de pantalla',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'Lo que verás',
  guestPreviewHint:
    'Ejemplo — las cifras reales aparecen cuando conectes un dispositivo',
  guestTitle: 'Mira adónde se fue la semana',
  guestDescription:
    'Inicia sesión para medir hoy frente a un día normal, comparar a tus hijos lado a lado y recibir un informe cada domingo.',
  guestBenefitTrendTitle: 'Hoy, frente a lo normal',
  guestBenefitTrendBody:
    'Una cifra sola no dice nada. Hoy siempre se dibuja frente al promedio diario de tu propia familia.',
  guestBenefitChildTitle: 'Cada hijo, lado a lado',
  guestBenefitChildBody:
    'La parte del día de cada hijo, en su propio color, en todos los dispositivos que usa.',
  guestBenefitWeeklyTitle: 'Un informe cada domingo',
  guestBenefitWeeklyBody:
    'Qué cambió, qué apps crecieron y las noches tardías: se guarda durante un año.',
  guestSignInButton: 'Iniciar sesión',
  guestCreateAccount: 'Crear una cuenta para padres',
} as const;
