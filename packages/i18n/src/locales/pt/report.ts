export const report = {
  title: 'Relatório semanal',
  subtitle: 'O que o KidGate notou na semana.',
  weekOf: 'Semana {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Enviado no domingo',
  triggerManual: 'Criado por você',

  statScreenTime: 'Tempo de tela',
  statDailyAverage: 'Média diária',
  statBlockedApps: 'Apps bloqueados',
  statBlockedWebVisits: 'Sites filtrados',

  trendUp: '{{value}} a mais que na semana anterior',
  trendDown: '{{value}} a menos que na semana anterior',
  trendFlat: 'Quase igual à semana anterior',
  trendFirstWeek: 'Primeira semana medida',
  barThisWeek: 'Esta semana',
  barLastWeek: 'Semana passada',

  highlights: 'Vale saber',
  sevAttention: 'Vale olhar',
  sevNotable: 'Notável',
  sevInfo: 'Para você saber',

  findingUsageUp:
    'O tempo de tela subiu {{percent}}%: {{delta}} a mais que na semana passada.',
  findingUsageDown:
    'O tempo de tela caiu {{percent}}%: {{delta}} a menos que na semana passada.',
  findingUsageFlat: 'O tempo de tela ficou em {{total}}.',
  findingLateNight_one: 'Uma noite depois das 23h: foi até {{time}}.',
  findingLateNight_other:
    '{{count}} noites depois das 23h; a mais tarde foi até {{time}}.',
  findingNewTopApp: '{{app}} é novo esta semana e já ocupou {{duration}}.',
  findingAppSurge:
    '{{app}} subiu {{delta}} em relação à semana passada: {{duration}} no total.',
  findingLimitHit_one: 'O limite diário de {{limit}} foi atingido em um dia.',
  findingLimitHit_other: 'O limite diário de {{limit}} foi atingido em {{count}} dias.',
  findingBlockedApps:
    '{{count}} aberturas de apps bloqueadas, contra {{previous}} na semana passada.',
  findingBlockedWeb:
    '{{count}} sites filtrados, contra {{previous}} na semana passada.',
  findingQuietWeek:
    'Uma semana tranquila: {{total}} no total e nada que exigisse você.',

  narrativeTitle: 'Em uma frase',
  finePrint:
    'Os números cobrem de {{from}} a {{to}}, em todos os aparelhos da família. O tempo de tela é o que os aparelhos informaram; os minutos que eles não conseguiram medir não entram em nenhum total.',

  generate: 'Criar o relatório desta semana',
  generating: 'Criando…',
  share: 'Compartilhar',
  copySummary: 'Copiar resumo',
  copied: 'Resumo copiado.',
  shareFailed: 'Não foi possível abrir o menu de compartilhamento.',

  emptyTitle: 'Ainda não há relatório',
  emptyBody:
    'O relatório chega todo domingo à noite. Você também pode criar o desta semana agora: ele cobre os últimos sete dias.',
  noUsage:
    'Nenhum tempo de tela foi registrado nas últimas duas semanas, então ainda não há o que relatar. Um aparelho desligado não informa nada, e isso não é o mesmo que uma semana tranquila.',
  rateLimited: 'Tentativas demais. Espere um minuto.',
  failed: 'Não foi possível criar o relatório. Tente de novo em instantes.',

  historyTitle: 'Semanas anteriores',
  historyEmpty:
    'Os relatórios que você receber a partir de agora ficam aqui por um ano.',
} as const;
