export const family = {
  title: 'Família',
  connectButton: 'Conectar',
  connectAccessibility: 'Adicionar um dispositivo de criança ou de um responsável',
  addDeviceTitle: 'Adicionar dispositivo',
  addDeviceMessage: 'O que você deseja conectar?',
  addChildOption: 'Adicionar dispositivo da criança',
  addJoinFamilyOption: 'Entrar em uma família',
  addParentOption: 'Convidar um responsável',
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
  quickProtectBedtime: 'Horários bloqueados na hora de dormir',
  quickProtectBedtimeHint:
    'Bloqueia o uso do dispositivo durante a noite, das 22h às 7h.',
  quickProtectDailyLimit: 'Limite diário de tempo de tela',
  quickProtectDailyLimitHint:
    '{{minutes}} minutos por dia, compartilhados entre os dispositivos da criança.',
  quickProtectWebFilter: 'Filtro da web',
  quickProtectWebFilterHint: 'Bloqueia conteúdo adulto e outras categorias de risco.',
  quickProtectWebFilterPremium: 'Recurso Premium — incluído em um plano.',
  quickProtectApply: 'Ativar proteção',
  quickProtectSkip: 'Agora não',
  quickProtectDone: 'A proteção está ativada. Ajuste quando quiser.',
  quickProtectPartial:
    'Algumas proteções não puderam ser salvas. Tente novamente no perfil da criança.',
  pairDeviceFirstTitle: 'Nenhum dispositivo pareado ainda',
  pairDeviceFirstBody:
    'Primeiro pareie um dispositivo para esta criança — na aba Família, toque no ícone de escanear ou em "+" e escolha Adicionar dispositivo da criança. Este controle começa a funcionar assim que um dispositivo se conectar.',
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
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'Crianças sem dispositivo',
  // Child detail screen.
  childDetailStarsWell: 'Estrelas desta semana',
  childStarsA11y: 'Estrelas desta semana: {{count}}',
  childDetailDevicesTitle: 'Dispositivos',
  childDetailAssignMore: 'Atribuir outro dispositivo…',
  childDetailAssignSheetTitle: 'Atribuir um dispositivo a {{childName}}',
  childDetailNoDevices:
    'Ainda não há dispositivos. Atribua um abaixo ou pareie um novo na aba Família.',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'Ainda não há dispositivos. Somente o proprietário da família decide de quem é cada dispositivo.',
  childDetailEditNameTitle: 'Editar nome',
  childDetailColorLabel: 'Cor',
  scanButtonAccessibility: 'Escanear código',
  scanTitle: 'Escanear código',
  scanBody:
    'Aponte a câmera para um dispositivo infantil, um convite de família ou o código exibido em um computador.',
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

  chipHealthInactiveCount: '{{count}} offline',

  chipBlockedCount: '{{count}} bloqueados',

  healthProtected: 'Protegido',
  buildOutdated: 'Atualização disponível',
  healthNeedsSetup: 'Configuração necessária',
  healthOffline: 'Offline',

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

  setupFamilyDescription:
    'Crie uma família para conectar os dispositivos dos seus filhos ou entre em uma usando um convite de outro responsável.',

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

  step1Title: 'Toque em “Adicionar dispositivo da criança”',

  step1Description: 'Um QR Code de pareamento aparece aqui, pronto para ser escaneado.',

  step2Title: 'Escaneie pelo dispositivo da criança',

  step2Description:
    'Instale o KidGate no celular ou tablet do seu filho, escolha “Este é um dispositivo da criança” e escaneie o código.',

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
  childDetailRemoveTitle: 'Remover este filho',
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
