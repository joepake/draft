export const messageMonitoring = {
  actionTitle: 'Alertas de mensagens',
  actionDescription:
    'Receba um aviso quando palavras preocupantes aparecerem nas mensagens',
  title: 'Alertas de mensagens',
  heroTitle: 'Alertas de mensagens',
  heroSubtitle:
    'O KidGate sinaliza palavras preocupantes nas mensagens e nas buscas do seu filho e avisa você. Você vê apenas a palavra ou frase sinalizada, nunca a mensagem nem a busca.',
  androidOnlyNote:
    'As mensagens só podem ser verificadas em dispositivos Android. As buscas também podem ser verificadas na extensão do Chrome.',
  searchOnlyNote:
    'Aqui só é possível verificar as buscas. As mensagens só podem ser verificadas em dispositivos Android.',
  recentTitle: 'Alertas recentes',
  emptyTitle: 'Ainda sem alertas',
  emptySubtitle: 'Nenhuma palavra preocupante foi vista nas mensagens.',
  emptySubtitleNotWatching:
    'As mensagens não estão sendo verificadas agora, então esta lista continuará vazia aconteça o que acontecer.',
  flaggedTerm: 'Sinalizado: “{{term}}”',
  flaggedTermPrefix: 'Sinalizado: “',
  flaggedTermSuffix: '”',
  flaggedTermMeaning: 'Significado: {{gloss}}',
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
  guidanceToggle: 'O que fazer agora',
  guidanceHide: 'Ocultar',
  guidanceFooter:
    'O KidGate não guardou a mensagem — apenas esta palavra ou frase. O resto precisa vir do seu filho.',
  guidance: {
    predator:
      'A aproximação de um predador quase sempre começa amigável, por alguém que seu filho acredita ter a mesma idade. Pergunte com quem ele tem conversado e como os dois se conheceram, antes de mencionar o alerta: uma criança que se sente pega para de responder.',
    selfHarm:
      'Palavras assim são muito mais um sinal do que um plano, e perguntar diretamente não planta a ideia. Diga o que você viu e que não está com raiva; se a resposta assustar, ligue no mesmo dia para um serviço de apoio em crise.',
    explicit:
      'Pode ter sido enviado a ele, mostrado a ele, ou escrito por ele. Descubra qual dos casos antes de reagir: receber conteúdo explícito é uma conversa diferente de enviá-lo.',
    violence:
      'Uma ameaça merece atenção mesmo quando parece brincadeira entre amigos. Pergunte se veio de alguém da escola; se veio, a escola é o caminho mais rápido para interromper.',
    bullying:
      'Crianças raramente contam isso sozinhas, e as mesmas palavras aparecem tanto se seu filho foi o alvo como se participou. Pergunte o que aconteceu em vez de de quem foi a culpa, e anote as datas caso a escola precise.',
    drugs:
      'Uma palavra sinalizada não prova uso — curiosidade, músicas e piadas também disparam isso. Pergunte abertamente em vez de revistar o quarto; o que mais importa é que ele continue contando as coisas.',
    alcohol:
      'Comum em conversa de adolescente, então leia isso como contexto e não como prova. É um bom momento para dizer com clareza qual é a sua regra, antes que uma festa torne isso urgente.',
    tobacco:
      'O vape se espalha pelo grupo de amigos e costuma ser social, não secreto. Pergunte o que os amigos estão usando: nomear a coisa específica funciona melhor do que um aviso genérico.',
    gambling:
      'Caixas de recompensa, pacotes de cartas e apostas de itens contam, e raramente parecem jogo de azar para uma criança. Veja em que ele gasta dentro dos jogos antes de tratar isso como problema de dinheiro.',
    profanity:
      'Palavrões por si só são comuns e quase nunca dizem algo sobre segurança. Se estes alertas são só ruído para a sua família, desligue “Também sinalizar palavrões” nas configurações desta tela.',
    unknown:
      'Este alerta vem de um dispositivo ou de uma lista de palavras que esta versão já não nomeia. É sobre a palavra ou frase sinalizada acima que vale perguntar; nada mais da mensagem foi guardado.',
  },
  setupTitle: 'Alertas de mensagens',
  setupBody:
    'Quando seus pais ativam isto, o KidGate verifica as mensagens que você recebe em busca de palavras de alerta, aqui mesmo neste celular. Seus pais veem apenas uma palavra ou frase sinalizada, nunca as suas mensagens. Se eles também ativarem a análise de mensagens com IA, uma mensagem pouco clara pode ser enviada a um serviço de IA para verificação, com e-mails, números de telefone, links e @usuários removidos.',
  setupGrant: 'Permitir acesso às notificações',
  setupEnable: 'Alertas de mensagens',
  controlledByParentHint:
    'É ligado ou desligado pelo app dos pais ou pelo painel web, não aqui.',
  parentIncomingLabel: 'Verificar mensagens recebidas',
  parentOutgoingLabel: 'Verificar mensagens digitadas',
  parentSearchLabel: 'Verificar buscas',
  parentSearchHint:
    'Navegadores e YouTube. Só a palavra ou frase sinalizada é informada, nunca a busca em si.',
  parentSearchHintNotGranted:
    'Precisa da mesma permissão que “Verificar mensagens digitadas”. Ative “Verificar mensagens recebidas” e depois permita no dispositivo dele.',
  parentToggleHintGranted: 'Neste celular.',
  parentToggleHintNotGranted:
    'Ainda não permitido neste celular — abra o KidGate no aparelho dele para conceder.',
  parentProfanityLabel: 'Também sinalizar palavrões',
  parentProfanityHint:
    'Desativado por padrão — palavrões comuns são frequentes, isso também os transforma em alerta.',
  parentToggleSaveFailed: 'Não foi possível salvar a alteração.',
  settingsTitle: 'Configurações de Alertas de mensagens',
  checkedTitle: 'Verificado, sem problema',
  checkedSubtitle:
    'Palavras monitoradas que apareceram mas se mostraram inofensivas no contexto, por isso você não foi avisado. Mostradas aqui para você ver o que está sendo filtrado em seu nome — e nos dizer se alguma deveria ter chegado até você.',
  consentTitle: 'Análise de mensagens com IA',
  consentBody:
    'Quando ativado, uma mensagem cuja palavra sinalizada possa ser inofensiva ou ter correspondido só de forma aproximada é enviada a um serviço de IA para confirmar se é realmente preocupante antes de avisar você. E-mails, números de telefone, links e @usuários são removidos antes; nomes e o resto da mensagem, não. Uma correspondência clara avisa na hora, sem enviar nada.',
  consentEnable: 'Ativar análise com IA',
  consentConfirmTitle: 'Ativar a análise de mensagens com IA?',
  consentConfirmBody:
    'Mensagens limítrofes serão enviadas a um serviço de IA para verificar se há motivo de preocupação, com e-mails, números de telefone, links e @usuários removidos. Nomes e o resto da mensagem não são removidos. Você confirma que consente com esse processamento.',
  consentAgree: 'Concordo',
  outgoingTitle: 'Mensagens que você escreve',
  outgoingBody:
    'O KidGate também pode verificar o que você digita em apps de conversa. Ele procura as mesmas palavras de alerta, neste telefone. Suas mensagens nunca são enviadas a lugar nenhum.',
  outgoingEnable: 'Verificar o que eu escrevo',
  outgoingGrant: 'Permitir',
  directionIncoming: 'Recebido',
  directionOutgoing: 'Enviado',
  directionSearch: 'Buscado',
  alertBodyIncoming: 'Mensagem do aplicativo',
  alertBodyOutgoing: 'Mensagem enviada do aplicativo',
  alertBodySearch: 'Busca feita em',
  aiLegend:
    'Um alerta com este ícone foi confirmado pela IA antes de você ser notificado.',
  setupRevoked:
    'O Android desativou a permissão necessária. Conceda novamente para continuar verificando as mensagens.',
  outgoingRevoked:
    'O Android desativou isto. Conceda novamente para continuar verificando o que você escreve.',
  outgoingDisclosureTitle: 'Antes de permitir',
  outgoingDisclosureBody:
    'O KidGate verifica o que você digita em aplicativos de mensagens em busca das mesmas palavras de alerta. Se seus pais ativarem os alertas de busca, ele também verifica o que você digita em navegadores, no YouTube e no app do Google. Ele nunca lê um campo de senha. A verificação acontece neste celular: nada do que você digita é enviado a lugar nenhum, e só uma palavra ou frase sinalizada chega aos seus pais.',
  outgoingRestrictedHint:
    'Se o botão estiver esmaecido, abra Configurações › Aplicativos › KidGate, toque no menu ⋮ e escolha “Permitir configurações restritas”; depois volte aqui.',
  notice: {
    revokedTitle: 'A verificação de mensagens parou',
    revokedBody:
      'O Android desativou uma permissão de que o KidGate precisa, então as mensagens não estão mais sendo verificadas. Abra o KidGate no dispositivo do seu filho e conceda novamente.',
    offTitle: 'Os Alertas de mensagens não estão ativados',
    offBody:
      'Nada está sendo verificado no dispositivo, então nenhum alerta pode aparecer aqui. Abra o KidGate no dispositivo dele para configurar.',
    switchedOffBody:
      'Nada está sendo verificado no dispositivo do seu filho, então nenhum alerta pode aparecer aqui. Ative “Verificar mensagens recebidas” nas configurações desta tela.',
    pendingTitle: 'Aguardando o aparelho aplicar',
    pendingBody:
      'Você ativou isso. O aparelho vai receber a mudança na próxima conexão, normalmente em alguns minutos — mais rápido se o celular estiver em uso. Não precisa fazer mais nada.',
    unknownTitle: 'Aguardando o dispositivo',
    unknownBody:
      'Este dispositivo ainda não informou se os Alertas de mensagens estão funcionando, então uma lista vazia não diz muita coisa. Deve atualizar na próxima vez que o dispositivo se conectar.',
    outgoingAvailableTitle: 'Verifique também o que ele escreve',
    outgoingAvailableBody:
      'As mensagens recebidas já são verificadas. O KidGate também pode verificar o que ele digita em aplicativos de mensagens — bullying e automutilação aparecem muito mais ali. Configure no dispositivo dele.',
    outgoingSwitchedOffBody:
      'As mensagens que seu filho recebe estão sendo verificadas. O KidGate também pode verificar o que ele digita em aplicativos de mensagens — bullying e automutilação aparecem muito mais ali. Ative “Verificar mensagens digitadas” nas configurações desta tela.',
  },
  languagesLabel: 'Idiomas verificados',
  languagesHint:
    'Os idiomas em que este dispositivo procura palavras preocupantes. Escolha até {{max}}.',
  languagesDefaultHint: 'Por padrão, o idioma do dispositivo.',
  setupStepFindKidGate: 'Ative o acesso a notificações para o KidGate e confirme.',
} as const;
