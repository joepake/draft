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
    'El tiempo de pantalla subió un {{percent}}%: {{delta}} más que la semana pasada.',
  findingUsageDown:
    'El tiempo de pantalla bajó un {{percent}}%: {{delta}} menos que la semana pasada.',
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

  narrativeTitle: 'En una frase',
  finePrint:
    'Las cifras cubren del {{from}} al {{to}}, en todos los dispositivos de la familia. El tiempo de pantalla es lo que informaron los dispositivos; los minutos que no pudieron medir no están en ningún total.',

  generate: 'Crear el informe de esta semana',
  generating: 'Creando…',
  share: 'Compartir',
  copySummary: 'Copiar resumen',
  copied: 'Resumen copiado.',
  shareFailed: 'No se pudo abrir el menú de compartir.',

  emptyTitle: 'Todavía no hay informe',
  emptyBody:
    'El informe llega cada domingo por la tarde. También puedes crear el de esta semana ahora: cubre los últimos siete días.',
  noUsage:
    'No se registró tiempo de pantalla en las últimas dos semanas, así que aún no hay nada que informar. Un dispositivo apagado no informa nada, y eso no es lo mismo que una semana tranquila.',
  rateLimited: 'Demasiados intentos. Espera un minuto.',
  failed: 'No se pudo crear el informe. Inténtalo de nuevo en un momento.',

  historyTitle: 'Semanas anteriores',
  historyEmpty:
    'Los informes que recibas a partir de ahora se guardan aquí durante un año.',
} as const;
