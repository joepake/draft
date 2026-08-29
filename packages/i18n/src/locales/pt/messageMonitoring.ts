export const messageMonitoring = {
  actionTitle: 'Alertas de mensagens',
  actionDescription:
    'Receba um aviso quando palavras preocupantes aparecerem nas mensagens',
  title: 'Alertas de mensagens',
  heroTitle: 'Segurança de mensagens',
  heroSubtitle:
    'O KidGate sinaliza palavras preocupantes nas mensagens do seu filho e avisa você. Nunca mostra a mensagem — apenas a palavra sinalizada.',
  androidOnlyNote: 'Disponível apenas em dispositivos Android.',
  recentTitle: 'Alertas recentes',
  emptyTitle: 'Ainda sem alertas',
  emptySubtitle: 'Nenhuma palavra preocupante foi vista nas mensagens.',
  emptySubtitleNotWatching:
    'As mensagens não estão sendo verificadas agora, então esta lista continuará vazia aconteça o que acontecer.',
  flaggedTerm: 'Palavra sinalizada: “{{term}}”',
  flaggedTermPrefix: 'Palavra sinalizada: “',
  flaggedTermSuffix: '”',
  aiConfirmed: 'Confirmado pela IA',
  categoryPredator: 'Possível aliciamento',
  categorySelfHarm: 'Possível automutilação',
  categoryExplicit: 'Conteúdo explícito',
  categoryViolence: 'Ameaça ou violência',
  categoryBullying: 'Bullying',
  categoryDrugs: 'Drogas ou substâncias',
  categoryAlcohol: 'Álcool',
  categoryTobacco: 'Tabaco ou vape',
  categoryGambling: 'Jogos de aposta',
  categoryProfanity: 'Linguagem ofensiva',
  categoryUnknown: 'Mensagem sinalizada',
  setupTitle: 'Segurança de mensagens',
  setupBody:
    'Observe as mensagens em busca de palavras preocupantes. O KidGate nunca mostra a mensagem — apenas um aviso se algo preocupante aparecer.',
  setupGrant: 'Permitir acesso às notificações',
  setupEnable: 'Segurança de mensagens',
  controlledByParentHint:
    'É ligado ou desligado pelo app KidGate no celular do responsável, não aqui.',
  parentIncomingLabel: 'Verificar mensagens recebidas',
  parentOutgoingLabel: 'Verificar mensagens digitadas',
  parentToggleHintGranted: 'Neste celular.',
  parentToggleHintNotGranted:
    'Ainda não permitido neste celular — abra o KidGate no aparelho dele para conceder.',
  parentToggleSaveFailed: 'Não foi possível salvar a alteração.',
  settingsTitle: 'Configurações de alertas de mensagens',
  checkedTitle: 'Verificado, sem problema',
  checkedSubtitle:
    'Palavras monitoradas que apareceram mas se mostraram inofensivas no contexto, por isso você não foi avisado. Mostradas aqui para você ver o que está sendo filtrado em seu nome — e nos dizer se alguma deveria ter chegado até você.',
  consentTitle: 'Análise de mensagens com IA',
  consentBody:
    'Quando ativado, as mensagens que uma palavra-chave marca como limítrofes são enviadas — sem nomes, números ou links — a um serviço de IA para confirmar se são realmente preocupantes antes de avisar você. Palavras de alto risco continuam avisando na hora sem enviar nada.',
  consentEnable: 'Ativar análise com IA',
  consentConfirmTitle: 'Ativar a análise de mensagens com IA?',
  consentConfirmBody:
    'Mensagens limítrofes, sem dados pessoais, serão enviadas a um serviço de IA para verificação. Você confirma que consente com esse processamento.',
  consentAgree: 'Concordo',
  outgoingTitle: 'Mensagens que você escreve',
  outgoingBody:
    'O KidGate também pode verificar o que você digita em apps de conversa. Ele procura as mesmas palavras de alerta, neste telefone. Suas mensagens nunca são enviadas a lugar nenhum.',
  outgoingEnable: 'Verificar o que eu escrevo',
  outgoingGrant: 'Permitir',
  directionIncoming: 'Recebido',
  directionOutgoing: 'Enviado',
  alertBodyIncoming: 'Mensagem do aplicativo',
  alertBodyOutgoing: 'Mensagem enviada do aplicativo',
  aiLegend:
    'Um alerta com este ícone foi confirmado pela IA antes de você ser notificado.',
  setupRevoked:
    'O Android desativou a permissão necessária. Conceda novamente para continuar verificando as mensagens.',
  outgoingRevoked:
    'O Android desativou isto. Conceda novamente para continuar verificando o que você escreve.',
  outgoingDisclosureTitle: 'Antes de permitir',
  outgoingDisclosureBody:
    'O KidGate lê apenas o que você digita em aplicativos de mensagens — nunca em outro aplicativo e nunca em um campo de senha. Ele procura as mesmas palavras de alerta neste celular. Suas mensagens não são enviadas a lugar nenhum; só a palavra sinalizada chega ao seu pai ou à sua mãe.',
  outgoingRestrictedHint:
    'Se o botão estiver esmaecido, abra Configurações › Aplicativos › KidGate, toque no menu ⋮ e escolha “Permitir configurações restritas”; depois volte aqui.',
  notice: {
    revokedTitle: 'A verificação de mensagens parou',
    revokedBody:
      'O Android desativou uma permissão de que o KidGate precisa, então as mensagens não estão mais sendo verificadas. Abra o KidGate no dispositivo do seu filho e conceda novamente.',
    offTitle: 'A segurança de mensagens não está ativada',
    offBody:
      'Nada está sendo verificado no dispositivo, então nenhum alerta pode aparecer aqui. Abra o KidGate no dispositivo dele para configurar.',
    pendingTitle: 'Aguardando o aparelho aplicar',
    pendingBody:
      'Você ativou isso. O aparelho vai receber a mudança na próxima conexão, normalmente em alguns minutos — mais rápido se o celular estiver em uso. Não precisa fazer mais nada.',
    unknownTitle: 'Aguardando o dispositivo',
    unknownBody:
      'Este dispositivo ainda não informou se a segurança de mensagens está funcionando, então uma lista vazia não diz muita coisa. Deve atualizar na próxima vez que o dispositivo se conectar.',
    outgoingAvailableTitle: 'Verifique também o que ele escreve',
    outgoingAvailableBody:
      'As mensagens recebidas já são verificadas. O KidGate também pode verificar o que ele digita em aplicativos de mensagens — bullying e automutilação aparecem muito mais ali. Configure no dispositivo dele.',
  },
  languagesLabel: 'Idiomas verificados',
  languagesHint:
    'Os idiomas em que este dispositivo procura palavras preocupantes. Escolha até {{max}}.',
  languagesDefaultHint: 'Por padrão, o idioma do dispositivo.',
} as const;
