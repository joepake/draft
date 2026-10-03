export const family = {
  settingsReachedDevice: 'As configurações chegaram a este aparelho {{when}}',
  title: 'Família',
  connectButton: 'Conectar',
  connectAccessibility: 'Adicionar um dispositivo de criança ou de um responsável',
  addDeviceTitle: 'Adicionar dispositivo',
  addDeviceMessage: 'O que você deseja conectar?',
  addChildOption: 'Adicionar dispositivo da criança',
  addJoinFamilyOption: 'Entrar em uma família',
  addParentOption: 'Convidar um responsável',
  parentLimitFull: 'Esse é o número máximo de responsáveis que uma família pode ter.',
  loginWebOption: 'Entrar na web',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: 'Quem usa {{deviceName}}?',
  assignSheetBody: 'O tempo de tela e as estrelas contam para quem você escolher.',
  assignSheetNobody: 'Ninguém',
  assignSheetNobodyHint: 'Dispositivo compartilhado — não conta para ninguém.',
  assignSheetAddAndAssign: 'Adicionar e atribuir',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: 'Proteger {{childName}} agora?',
  quickProtectBody:
    'Ative um conjunto inicial de proteções. Você pode ajustar tudo depois no perfil da criança.',
  quickProtectSourceLabel: 'Começar a partir de',
  quickProtectAllOnBody:
    '{{childName}} já tem estas proteções ativadas. Escolha outra criança para copiar os horários, o limite e as listas de sites dela.',
  quickProtectReplaces: 'Substitui o que {{childName}} tem agora.',
  quickProtectWebFilterCopyHint:
    'Copia as categorias de {{childName}}, mais {{allowed}} sites permitidos e {{blocked}} recusados.',
  quickProtectSourceDefault: 'Padrões do KidGate',
  quickProtectSourceBody:
    'Copia as regras de {{childName}}, incluindo os sites permitidos e bloqueados.',
  quickProtectBedtime: 'Horários bloqueados na hora de dormir',
  quickProtectBedtimeHint:
    'Bloqueia o uso do dispositivo durante a noite, das 22h às 7h.',
  quickProtectDailyLimit: 'Limite diário',
  quickProtectDailyLimitHint:
    '{{minutes}} minutos por dia, compartilhados entre os dispositivos da criança.',
  quickProtectWebFilter: 'Filtro da web',
  quickProtectWebFilterHint:
    'Bloqueia conteúdo inadequado e ativa a pesquisa segura e as restrições do YouTube.',
  quickProtectWebFilterPremium: 'Recurso Premium — incluído em um plano.',
  quickProtectApply: 'Ativar proteção',
  quickProtectSkip: 'Agora não',
  quickProtectDone: 'A proteção está ativada. Ajuste quando quiser.',
  quickProtectPartial:
    'Algumas proteções não puderam ser salvas. Tente novamente no perfil da criança.',
  pairDeviceFirstTitle: 'Nenhum dispositivo pareado ainda',
  pairDeviceFirstBody:
    'Primeiro pareie um dispositivo para esta criança — na aba Família, toque no ícone de escanear ou em “+” e escolha Adicionar dispositivo da criança. Este controle começa a funcionar assim que um dispositivo se conectar.',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'Bloquear tudo',
  unlockAll: 'Desbloquear tudo',
  lockAllA11y: 'Bloquear todos os dispositivos de {{childName}}',
  unlockAllA11y: 'Desbloquear todos os dispositivos de {{childName}}',
  childDetailUnassignTitle: 'Remover da criança?',
  childDetailUnassignBody:
    '{{deviceName}} deixará de contar para {{childName}} e irá para Não atribuído. Continua pareado e protegido.',
  childDetailUnassignConfirm: 'Remover',
  childDetailUnassignA11y: 'Remover {{deviceName}} desta criança',
  // The fold control on a group heading.
  collapseGroupA11y: 'Recolher {{name}}',
  expandGroupA11y: 'Expandir {{name}}',
  assignDeviceCta: 'Atribuir a uma criança…',
  unassignedHint: 'Estes dispositivos ainda não contam para ninguém.',
  unassignedHintMember:
    'O proprietário da família atribui estes dispositivos aos filhos.',
  // One device's own page (the web's Controls tab): the two sentences above are
  // said to a group heading, and "these devices" is false about one machine.
  unassignedDeviceHint: 'Este dispositivo ainda não conta para ninguém.',
  unassignedDeviceHintMember:
    'O proprietário da família escolhe quem usa este dispositivo.',
  // The pairing sheets' success step for a joined parent, who may pair but not assign.
  pairedDeviceBodyMember:
    'O dispositivo da criança confirmou o pareamento. O proprietário da família escolhe quem usa esse dispositivo.',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'Crianças sem dispositivo',
  // Child detail screen.
  childDetailStarsWell: 'Estrelas desta semana',
  childStarsA11y: 'Estrelas desta semana: {{count}}',
  childDetailDevicesTitle: 'Dispositivos',
  childDetailSwipeHint: 'Deslize um dispositivo para remover a atribuição.',
  childDetailAssignMore: 'Atribuir outro dispositivo…',
  // The same row while the child has no device yet — "another" needs a first.
  childDetailAssignFirst: 'Atribuir um dispositivo…',
  childDetailAssignSheetTitle: 'Atribuir um dispositivo a {{childName}}',
  childDetailNoDevices:
    'Ainda não há dispositivos. Atribua um abaixo ou pareie um novo na aba Família.',
  // Same screen when nothing is left below to assign.
  childDetailNoDevicesPair:
    'Ainda não há dispositivos. Pareie um na aba Família e escolha esta criança quando o app perguntar quem o usa.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'Ainda não há dispositivos. Somente o proprietário da família decide de quem é cada dispositivo.',
  childDetailEditNameTitle: 'Editar nome',
  childDetailColorLabel: 'Cor',
  scanButtonAccessibility: 'Escanear código',
  scanTitle: 'Escanear código',
  scanBody:
    'Aponte a câmera para o código de um dispositivo infantil, um convite de família ou um código de login na web.',
  manualCodeLabel: 'Digite o código de 6 caracteres',
  manualInstructions: 'Digite o código de 6 caracteres exibido no outro dispositivo.',

  headerHintEmpty: 'Gerencie e proteja os dispositivos dos seus filhos',

  headerHintGuest:
    'Explore livremente — faça login quando estiver pronto para conectar dispositivos.',

  familyCardManage: 'Gerenciar família, responsáveis e dispositivos',

  familyCardJoined: 'Você entrou como responsável',

  chipDeviceCount: '{{count}} dispositivos',
  chipDeviceCount_one: '{{count}} dispositivo',

  chipOnlineCount: '{{count}} online',
  metaOnlineCount: '{{online}}/{{count}} online',
  metaOnlineCount_one: '1 dispositivo online',

  chipSosCount: '{{count}} SOS',

  chipCheckInCount: '{{count}} Check-ins',
  chipCheckInCount_one: '{{count}} Check-in',

  chipRequestCount: '{{count}} solicitações',
  chipRequestCount_one: '{{count}} solicitação',

  chipNeedsSetupCount: '{{count}} precisam de configuração',
  chipNeedsSetupCount_one: '{{count}} precisa de configuração',

  chipProtectedCount: '{{count}} protegidos',

  childDevicesProtected: '{{count}} dispositivos protegidos',

  chipHealthWarnCount: '{{count}} precisam de configuração',
  chipHealthWarnCount_one: '{{count}} precisa de configuração',

  chipHealthInactiveCount: '{{count}} inativos há mais de 24 h',
  chipLocationBlocked: 'Sem localização',

  chipBlockedCount: '{{count}} bloqueados',
  chipBlockedCount_one: '{{count}} bloqueado',

  healthProtected: 'Protegido',
  buildOutdated: 'Atualização disponível',
  healthNeedsSetup: 'Configuração necessária',
  healthOffline: 'Offline',
  devicePausedLabel: 'Pausado',
  devicePausedHint: 'Pausado no plano gratuito: todas as regras continuam valendo',
  // What Paused means, said where the choice is made: the choose-a-device sheet on
  // both consoles. Checked against every agent 2026-09-28 — enforcement never
  // stops while parked; the reports do, and an SOS still goes through.
  devicePausedMeaning:
    'Um dispositivo pausado continua aplicando as regras que já tem. Ele deixa de enviar tempo de tela, localização e histórico, mas um SOS continua chegando até você.',
  parkReviewTitle: 'Ative isto antes de o teste acabar',
  parkReviewBody:
    'Quando o teste acabar, um dispositivo continua enviando relatórios e aceitando mudanças nas regras, e os outros mantêm as regras que já têm. Neles você só vai poder afrouxar uma regra depois, então o que estiver desativado agora continua desativado.',
  rulesEnforcedOn: 'Aplicadas em {{enforced}} de {{total}} dispositivos',
  rulesPausedBehind: 'Em pausa — ainda com um ajuste anterior',
  rulesTightenRefused:
    'Num dispositivo em pausa, as regras só podem ser afrouxadas, nunca apertadas. Faça upgrade para mudar isso em todos os dispositivos.',
  parkedBannerTitle: 'Escolha o dispositivo que você vai continuar acompanhando',
  parkedBannerBody:
    'Suas regras continuam funcionando em todos os dispositivos. O plano gratuito recebe relatórios de um dispositivo e só nele você pode apertar as regras: escolha esse dispositivo, ou faça upgrade para manter todos.',
  parkedBannerAction: 'Escolher dispositivo',
  holdFamilyTitle: 'O KidGate suspendeu esta família temporariamente',
  holdDeviceTitle: 'O KidGate suspendeu {{deviceName}} temporariamente',
  holdFamilyBody:
    'Todos os dispositivos mantêm suas regras, mas não enviam relatórios até a suspensão ser retirada.',
  holdDeviceBody:
    'Este dispositivo mantém suas regras, mas não envia relatórios até a suspensão ser retirada.',
  holdReasonUnusualActivity: 'Motivo: atividade incomum nesta conta.',
  holdReasonOutdatedApp:
    'Motivo: um app KidGate desta conta está desatualizado. Atualize-o e depois fale com o suporte.',
  holdReasonTermsViolation: 'Motivo: uma violação dos termos de uso do KidGate.',
  holdReasonOther: 'Motivo: o KidGate está analisando esta conta.',
  holdNote: 'Mensagem do KidGate: {{note}}',
  holdAppeal: 'Falar com o suporte',
  holdAppealMessage: 'Gostaria de saber sobre a suspensão da conta da minha família.',
  pairedDevicePaused:
    'O plano gratuito recebe relatórios de um dispositivo e só nele você pode apertar as regras, então este dispositivo começa em pausa.',
  pairingWillStartPaused:
    'O plano gratuito recebe relatórios de um dispositivo e só nele você pode apertar as regras, então o novo dispositivo começará em pausa.',
  chooseMonitoredTitle: 'Escolha seu dispositivo principal',
  chooseMonitoredBody:
    'Todas as regras continuam ativas em todos. O dispositivo que você escolher envia tempo de tela e localização, e é o único em que você ainda pode apertar as regras: nos outros dá só para afrouxar. Você pode trocar de dispositivo uma vez a cada {{days}} dias.',
  chooseMonitoredConfirm: 'Acompanhar este dispositivo',
  chooseMonitoredUpgrade: 'Manter todos: fazer upgrade',
  chooseMonitoredDone: '{{name}} agora é o dispositivo que reporta',
  chooseMonitoredCurrent: 'Reportando agora',
  monitoredCooldown:
    'O dispositivo que reporta só pode mudar uma vez a cada {{days}} dias',
  monitoredChooseFailed:
    'Não foi possível trocar o dispositivo que reporta. Tente novamente.',

  cardWhereLabel: 'Localização',
  cardWhereAccessibility: 'Abrir a localização de {{deviceName}}',

  cardTodayLabel: 'Hoje',

  cardTodayUsed: '{{used}} de uso',

  cardTodayNoData: 'Ainda não há dados de uso',

  cardTodayAccessibility: 'Abrir o relatório de uso de {{deviceName}}',

  emptyTitle: 'Ainda não há dispositivos de crianças',

  emptyDescription:
    'Adicione o dispositivo do seu filho para começar a monitorar o tempo de tela e o uso de aplicativos.',

  setupFamilyTitle: 'Configure sua família',

  createFamilyButton: 'Criar família',

  joinFamilyButton: 'Entrar em uma família',

  switchToJoinTitle: 'Entrar em outra família?',

  switchToJoinMessage:
    'Isso removerá sua família vazia para que você possa entrar em outra usando um código de convite. Se já houver um dispositivo de criança vinculado, será necessário resolvê-lo primeiro.',

  guestEmptyTitle: 'Sua família começa aqui',

  guestEmptyDescription:
    'Faça login para vincular os dispositivos dos seus filhos, receber alertas e definir limites saudáveis de tempo de tela.',

  guestConnectButton: 'Entrar',

  guestCreateAccount: 'Criar conta de responsável',

  guestBenefitLimitsTitle: 'Tempo de tela e limites de aplicativos',

  guestBenefitLimitsBody: 'Bloqueie dispositivos e defina horários diários.',

  guestBenefitAlertsTitle: 'Alertas de SOS e atividade',

  guestBenefitAlertsBody:
    'Seja avisado imediatamente quando algo precisar da sua atenção.',

  guestBenefitLocationTitle: 'Localização e Check-ins',

  guestBenefitLocationBody:
    'Veja onde seu filho está e peça que confirme que está em segurança.',

  stepsHeading: 'Primeiros passos',

  step1Title: 'Abra o KidGate no dispositivo da criança',

  step1Description:
    'Instale o KidGate no celular, tablet, TV ou computador que seu filho usa. Em um celular ou tablet, escolha “Este é um dispositivo de uma criança”. Um QR Code e um código de 6 caracteres vão aparecer.',

  step2Title: 'Toque aqui em “Adicionar dispositivo da criança”',

  step2Description:
    'Escaneie esse QR Code com este celular ou digite o código de 6 caracteres.',

  connectChildButton: 'Conectar dispositivo da criança',
  listHint: 'Deslize um dispositivo para a esquerda para removê-lo',

  removeAlertTitle: 'Remover dispositivo?',

  removeAlertMessage:
    '{{deviceName}} será desconectado da sua conta. Todas as solicitações de tempo e o histórico de atividades associados serão excluídos.',

  toastRemoveFailed: 'Não foi possível remover o dispositivo. Tente novamente.',

  swipeRemoving: 'Removendo…',

  swipeRemove: 'Remover',

  deviceNotFound: 'Dispositivo não encontrado',

  deviceMayHaveBeenRemoved: 'Este dispositivo pode ter sido removido da sua conta.',

  deviceNotFoundError: 'Dispositivo não encontrado',

  deviceRemovedAlertTitle: 'Dispositivo removido',

  deviceRemovedAlertMessage:
    'Um responsável removeu este dispositivo da conta da família. Selecione novamente a função Criança para reconectá-lo.',

  deviceNotRegistered: 'Este dispositivo ainda não está registrado.',

  defaultDeviceName: 'Dispositivo da criança',

  fallbackDeviceName: 'Dispositivo da criança',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: 'iPhone do responsável',

  parentAndroid: 'Android do responsável',

  childIphone: 'iPhone da criança',

  parentIpad: 'iPad do responsável',

  childIpad: 'iPad da criança',

  childAndroid: 'Android da criança',

  deviceFallbackName: 'Dispositivo',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'PC com Windows',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: 'Digite um nome para o dispositivo.',

  deviceNameTooLong: 'O nome do dispositivo deve ter no máximo {{max}} caracteres.',

  lastActiveDate: 'Última atividade: {{date}}',

  lastActiveUnknown: 'Nenhuma atividade recente',

  thisDevice: 'Este dispositivo',

  thisDeviceYou: 'Este dispositivo (Você)',

  namedDeviceYou: '{{name}} (Você)',

  deviceNameSaved: 'O nome do dispositivo foi atualizado.',

  deviceSectionTitle: 'Dispositivo',

  deviceNameLabel: 'Nome do dispositivo',

  editDeviceNameTitle: 'Editar nome do dispositivo',

  editDeviceNameSubtitle:
    'Somente o proprietário da família pode renomear dispositivos. Máximo de {{maxLength}} caracteres.',

  deviceNameInputLabel: 'Nome do dispositivo',

  deviceNamePlaceholder: 'iPhone da Sofia',

  unableToUpdateDeviceName:
    'Não foi possível atualizar o nome do dispositivo. Tente novamente.',

  osLabelFallback: 'Sistema operacional',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS — atenção imediata necessária',

  waitingForCheckIn: 'Aguardando Check-in',

  timeRequestsWaiting: '{{count}} solicitações de tempo pendentes',

  timeRequestsWaiting_one: '{{count}} solicitação de tempo pendente',

  youPausedThisDevice: 'Você bloqueou este dispositivo',

  lockSentWaitingForDevice: 'Bloqueio enviado — a aguardar o dispositivo',

  lockNotAppliedOnDevice: 'Este dispositivo não aplicou o bloqueio',

  blockedHoursActiveNow: 'Horários bloqueados ativos',

  inactiveOpenKidGate: 'Inativo — abra o KidGate neste dispositivo',

  protectionNeedsSetup: '{{issueLabel}} precisa de configuração',

  freeTierCadenceHint: 'Plano gratuito: última atividade: {{date}}',
  dailyLimitOn: 'Limite diário ativado',

  deviceReady: 'Pronto',

  sos: 'SOS',

  deviceLocked: 'Dispositivo bloqueado',

  deviceUnlocked: 'Dispositivo desbloqueado',

  parentPausedChildDevice: '{{actorName}} bloqueou este dispositivo da criança.',

  parentRestoredChildDevice: '{{actorName}} desbloqueou este dispositivo da criança.',

  parentFallback: 'Um responsável',

  formerParent: 'Um pai ou mãe que saiu',
  batteryPercent: '{{percent}}%',
  batteryAccessibility: 'Bateria em {{percent}} por cento',
  batteryChargingAccessibility: 'Bateria em {{percent}} por cento, carregando',
  childDetailPerDevice: 'Por dispositivo — escolha qual',
  childDetailNotAvailable: 'Indisponível',
  childDetailNotAvailableReason: 'Indisponível em todos os seus dispositivos',
  childDetailProtectionOk: 'Protegido',
  childDetailProtectionAttention: '{{count}} dispositivos precisam de atenção',
  childDetailProtectionAttention_one: '{{count}} dispositivo precisa de atenção',
  childDetailProtectionSheetTitle: 'Proteção por dispositivo',
  childDetailRemoveTitle: 'Remover o perfil de {{childName}}',
  childDetailRemovingButton: 'Removendo…',
  childDetailOnlineCount: '{{online}} de {{total}} on-line',
  childDetailBudgetTitle: 'Limite diário',
  childDetailSectionControls: 'Regras em todos os dispositivos',
  childDetailSectionSafety: 'Combinado de todos os dispositivos',
  childDetailSectionAlerts: 'Todos os dispositivos, uma só lista',
  childDetailScopeAll: 'Todos os dispositivos',
  childDetailTodayWell: 'Usado hoje',
  childDetailUnassignAction: 'Remover',
  childDetailLimitShared: 'Total em todos os dispositivos',
} as const;
