export const notifications = {
  title: 'Notificações',
  subtitleAllOn: 'Todos os alertas ativados',
  subtitleMuted_one: '1 alerta silenciado',
  subtitleMuted: '{{count}} alertas silenciados',
  sosAlwaysOn: 'O SOS sempre chega, mesmo com tudo aqui desativado.',
  sosFullScreenOff:
    'Neste celular, um SOS aparece como um pequeno banner em vez de ocupar a tela inteira, então é mais fácil perdê-lo. Permita alertas em tela cheia para corrigir isso.',
  sosFullScreenAllow: 'Permitir alertas em tela cheia',
  sectionAlerts: 'Alertas',
  sectionAlertsHint: 'Escolha quais alertas são enviados ao celular de um responsável.',
  sectionSummary: 'Resumo',
  sectionQuietHours: 'Horário silencioso',
  sectionQuietHoursHint:
    'Neste período, só chegam o SOS e os Alertas de mensagens mais graves. Nada é enviado depois; os eventos continuam aparecendo em Atividades.',
  quietHoursLabel: 'Horário silencioso',
  quietHoursOff: 'Desativado — os alertas chegam a qualquer hora',
  quietHoursActive: 'Sem alertas das {{start}} às {{end}}',
  quietHoursStart: 'Das',
  quietHoursEnd: 'Às',
  quietHoursSameTime: 'Escolha dois horários diferentes.',
  footnote:
    'Estas configurações valem para um só celular. Outros dispositivos dos responsáveis mantêm as suas.',
  toastSaveFailed: 'Não foi possível salvar. Tente novamente.',
  localReminderSetupTitle: 'Conclua a configuração',
  localReminderIdleTitle: 'Suas regras seguem ativas',
  localReminderIdleBody:
    'Faz uma semana que você não abre o KidGate. Veja o tempo de tela de hoje e o que foi bloqueado.',
  localReminderDormancyTitle: 'Os relatórios podem parar',
  localReminderDormancyBody:
    'Se ninguém abrir o KidGate por {{days}} dias, os dispositivos do seu filho param de enviar relatórios até alguém abri-lo de novo. Suas regras continuam funcionando.',
  alert: {
    tamperAlerts: {
      label: 'Alertas de proteção',
      hint: 'Uma permissão de que o KidGate precisa é desativada em um dispositivo da criança, a data, a hora ou o fuso horário é alterado, ou o SOS é acionado enquanto ele está bloqueado.',
    },
    placeAlerts: {
      label: 'Alertas de locais',
      hint: 'Seu filho chega a um lugar salvo ou sai dele.',
    },
    timeRequests: {
      label: 'Solicitações de tempo',
      hint: 'Seu filho pede mais tempo de tela.',
    },
    siteRequests: {
      label: 'Pedidos de sites',
      hint: 'Seu filho pede para abrir um site bloqueado.',
    },
    checkIn: {
      label: 'Respostas de check-in',
      hint: 'Seu filho responde a um check-in de segurança.',
    },
    rewardTasks: {
      label: 'Tarefas com recompensa',
      hint: 'Seu filho marca uma tarefa de recompensa como concluída.',
    },
    appActivity: {
      label: 'Apps instalados ou removidos',
      hint: 'Um app aparece ou desaparece no dispositivo da criança.',
    },
    anomalyAlerts: {
      label: 'Atividade incomum',
      hint: 'Uso fora do padrão no dispositivo da criança — madrugadas, picos, apps novos.',
    },
    weeklyDigest: {
      label: 'Relatório semanal',
      hint: 'Uma retrospectiva de segunda-feira do tempo de tela e dos bloqueios.',
    },
    messageAlerts: {
      label: 'Alertas de mensagens',
      hint: 'Palavras preocupantes aparecem nas mensagens ou nas buscas do seu filho.',
    },
    billing: {
      label: 'Lembretes do Premium',
      hint: 'Lembretes para assinar depois que o teste terminar. Os avisos de fim do teste ou do Premium sempre chegam.',
    },
  },
};
