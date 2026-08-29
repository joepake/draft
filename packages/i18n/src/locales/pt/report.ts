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

  // A metade positiva do relatório. Cada frase diz o que aconteceu e o número
  // por trás; nenhuma elogia — `docs/COPY_STYLE.md` proíbe a bajulação tanto
  // quanto proíbe o alarme.
  findingLimitRespected:
    'O limite diário de {{limit}} foi respeitado nos {{count}} dias.',
  findingLateNightGone_one:
    'Nenhuma noite tardia esta semana, depois de uma na semana passada.',
  findingLateNightGone_other:
    'Nenhuma noite tardia esta semana, depois de {{count}} na semana passada.',
  findingBlockedAppsDown:
    '{{count}} aberturas de apps bloqueadas, contra {{previous}} na semana passada.',
  findingBlockedWebDown:
    '{{count}} sites filtrados, contra {{previous}} na semana passada.',
  findingLearningTime: '{{duration}} em apps educativos, sobretudo {{app}}.',
  findingTasksDone_one: 'Uma tarefa concluída, ganhando {{bonus}}.',
  findingTasksDone_other: '{{count}} tarefas concluídas, ganhando {{bonus}}.',
  findingAskedFirst_one: 'Um pedido enviado, em vez de contornar uma regra.',
  findingAskedFirst_other: '{{count}} pedidos enviados, em vez de contornar as regras.',
  findingCheckedIn: 'Todos os {{asked}} check-ins foram respondidos.',

  narrativeTitle: 'Em uma frase',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'Algo que pode fazer',
  actionDailyLimit: 'Definir um Limite diário de {{duration}}',
  actionDailyLimitWhy: 'Foi essa a média diária da semana passada.',
  actionBlockedHours: 'Definir Horários bloqueados',
  actionBlockedHoursLateNight: 'Bloquear as horas da madrugada',
  actionOnDevice: 'Em {{device}}',
  finePrint:
    'Os números cobrem de {{from}} a {{to}}, em todos os dispositivos da família. O tempo de tela é o que os dispositivos informaram; os minutos que eles não conseguiram medir não entram em nenhum total.',

  generate: 'Criar o relatório desta semana',
  generating: 'Criando…',
  share: 'Compartilhar',
  copySummary: 'Copiar resumo',
  copied: 'Resumo copiado.',
  shareFailed: 'Não foi possível abrir o menu de compartilhamento.',
  shareFooterDesc:
    'O KidGate ajuda os pais a ver o tempo de tela, a localização e as mensagens.',
  shareFooterCta: 'Baixe o app em kidgate.app/get',

  emptyTitle: 'Ainda não há relatório',
  emptyBody:
    'O relatório chega todo domingo à noite. Você também pode criar o desta semana agora: ele cobre os últimos sete dias.',
  noUsage:
    'Nenhum tempo de tela foi registrado nas últimas duas semanas, então ainda não há o que relatar. Um dispositivo sem conexão não informa nada, e isso não é o mesmo que uma semana tranquila.',
  rateLimited: 'Tentativas demais. Espere um minuto.',
  loadFailedTitle: 'Relatórios não carregados',
  loadFailed:
    'Não foi possível abrir os relatórios. Puxe para baixo para tentar de novo.',
  failed: 'Não foi possível criar o relatório. Tente de novo em instantes.',

  historyTitle: 'Semanas anteriores',
  historyEmpty:
    'Os relatórios que você receber a partir de agora ficam aqui por um ano.',

  hubToday: 'Hoje',
  hubTodayEmpty: 'Nenhum dispositivo enviou dados hoje ainda.',
  hubByChild: 'Por criança',
  hubByDevice: 'Por dispositivo',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'Cada filho',
  childrenNote:
    'As mesmas duas semanas, por dispositivo. Os percentuais são do total da família.',
  colChild: 'Filho',
  colScreenTime: 'Tempo de tela',
  colShare: 'Proporção',
  colChange: 'Em relação à semana passada',
  colLimit: 'Acima do limite',
  colLateNights: 'Noites até tarde',
  colTopApp: 'Mais usado',
  unnamedChild: 'Sem nome',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'quase igual',
  noLimit: 'Sem limite',
  noTopApp: '—',
  limitDays_one: '{{count}} dia',
  limitDays_other: '{{count}} dias',
  lateNightsNone: 'nenhuma',
  busiest: 'Mais tempo de tela',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'O que você verá',
  guestPreviewHint:
    'Exemplo — os números reais aparecem depois de conectar um dispositivo',
  guestTitle: 'Veja para onde foi a semana',
  guestDescription:
    'Entre para medir hoje contra um dia normal, comparar seus filhos lado a lado e receber um relatório todo domingo.',
  guestBenefitTrendTitle: 'Hoje, contra o normal',
  guestBenefitTrendBody:
    'Um número sozinho não diz nada. Hoje é sempre traçado contra a média diária da sua própria família.',
  guestBenefitChildTitle: 'Cada filho, lado a lado',
  guestBenefitChildBody:
    'A parte do dia de cada filho, na cor dele, em todos os dispositivos que usa.',
  guestBenefitWeeklyTitle: 'Um relatório todo domingo',
  guestBenefitWeeklyBody:
    'O que mudou, quais apps cresceram e as noites tarde — guardado por um ano.',
  guestSignInButton: 'Entrar',
  guestCreateAccount: 'Criar conta de responsável',
} as const;
