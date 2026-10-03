export const blockedApps = {
  title: 'Apps bloqueados',
  installApprovalTitle: 'Aprovar novos apps',
  installApprovalSubtitleOn:
    'Os apps instalados a partir de agora ficam bloqueados até você aprová-los.',
  installApprovalSubtitleOff:
    'Ative para bloquear todo app recém-instalado até você aprová-lo.',
  installApprovalSubtitleIos:
    'No iPhone e no iPad, isso oculta a App Store — a Apple não permite aprovar apps um a um.',
  installApprovalStatusOn: 'Novos apps precisam de aprovação',
  installApprovalStatusOff: 'Novos apps abrem livremente',
  installApprovalStatusIos: 'App Store oculta',
  installApprovalAccessibilityLabel: 'Aprovar novos apps',
  installApprovalInfoTitle: 'Como funciona a aprovação',
  installApprovalInfoLine1:
    'O dispositivo da criança bloqueia qualquer app instalado depois que você ativa isso, sem esperar por você.',
  installApprovalInfoLine2:
    'Você recebe uma notificação, e o app aparece abaixo, em Apps bloqueados, até você permiti-lo.',
  installApprovalInfoLine3:
    'Permitir um app faz com que ele abra imediatamente. Um app que você não permite simplesmente continua bloqueado.',
  installApprovalInfoLine1Ios:
    'Enquanto isto estiver ativado, a App Store fica oculta no dispositivo da criança, então nenhum app novo pode ser instalado.',
  installApprovalInfoLine2Ios:
    'Os apps que já estão no dispositivo continuam funcionando.',
  installApprovalInfoLine3Ios:
    'Para liberar um app, desative isto, instale o app e depois ative de novo.',
  pendingSectionTitle: 'Bloqueados automaticamente, aguardando você',
  pendingSectionSubtitle:
    'Instalados depois que você ativou a aprovação. Nada aqui foi escolhido no dispositivo da criança.',
  pendingInstalledAt: 'Instalado {{when}}',
  pendingEmpty: 'Nenhum app novo aguardando aprovação.',
  allowApp: 'Permitir',
  allowingApp: 'Permitindo…',
  toastAppAllowed: '{{appName}} já pode ser aberto.',
  toastAllowFailed: 'Não foi possível permitir este app. Tente novamente.',
  toastInstallApprovalSaveFailed: 'Não foi possível salvar. Tente novamente.',
  toastChooseAppsFirst:
    'Escolha os apps primeiro: abra os Ajustes do KidGate no dispositivo da criança e digite o PIN dos pais.',
  toastSaveFailed: 'Não foi possível salvar. Tente novamente.',
  statusBlockingOn: 'Bloqueio ativado',
  statusBlockingOff: 'Sem bloqueio',
  heroTitle: 'Apps selecionados para bloquear',
  heroSubtitle:
    'Esses apps e categorias são escolhidos no dispositivo da criança. O KidGate sincroniza a lista aqui para você revisar.',
  statAppsLabel: 'Apps',
  statCategoriesLabel: 'Categorias',
  toggleTitle: 'Ativar o bloqueio de apps',
  toggleSubtitleOn: 'Os apps selecionados estão bloqueados no dispositivo da criança.',
  toggleSubtitleOff: 'Ative para bloquear remotamente os apps selecionados.',
  toggleAccessibilityLabel: 'Ativar o bloqueio de apps',
  emptyTitle: 'Nenhum app bloqueado ainda',
  emptySubtitle:
    'No dispositivo da criança, abra os Ajustes do KidGate, digite o PIN dos pais, depois abra Bloqueio de apps → Apps bloqueados e salve a seleção.',
  emptySubtitleTv:
    'Na TV, abra o KidGate, selecione “{{button}}”, digite o PIN dos pais, depois escolha os apps e salve.',
  sectionTitle: 'Lista de bloqueio',
  privacyTitle: 'A lista de apps vem do dispositivo da criança',
  privacySubtitle:
    'No iOS, a Apple pode ocultar os nomes exatos dos apps dos dispositivos dos pais. Em outros dispositivos, os nomes selecionados são sincronizados aqui. Alterar a lista continua exigindo o PIN dos pais no dispositivo da criança.',
  infoTitle: 'Como funciona',
  infoLine1: 'Escolha os apps no dispositivo da criança após digitar o PIN dos pais.',
  infoLine2:
    'Bloqueio, Horários bloqueados e Limite diário continuam bloqueando todos os apps.',
  infoLine3: 'Ative ou desative o bloqueio a qualquer momento nesta tela.',
  appKind: 'App',
  categoryKind: 'Categoria',
  websiteKind: 'Site',
  noAppsSelectedYet: 'Nenhum app selecionado ainda',
  blockedAppCount: '{{count}} apps',
  blockedAppCount_one: '{{count}} app',
  blockedCategoryCount: '{{count}} categorias',
  blockedCategoryCount_one: '{{count}} categoria',
  blockedItemCount: '{{count}} itens bloqueados',
  blockedItemCount_one: '{{count}} item bloqueado',
  blockedListReady: 'Lista de bloqueio pronta',
  blockedAppsLabel: 'Apps bloqueados',
  appsConfiguredChip: 'Apps configurados',
  appsNotSetChip: 'Apps não definidos',
  appBlockingSectionTitle: 'Bloqueio de apps',
  appBlockingSectionDescription:
    'Escolha quais apps os pais podem bloquear neste dispositivo.',
  savedItemsForBlocking: '{{count}} itens salvos para bloqueio.',
  savedItemsForBlocking_one: '{{count}} item salvo para bloqueio.',
  noAppsSelected: 'Nenhum app foi selecionado.',
  unableToOpenAppPicker: 'Não foi possível abrir o seletor de apps. Tente novamente.',
  wizardStepPin: 'Digite o PIN dos pais quando os Ajustes pedirem.',
  wizardStepChoose:
    'Em Bloqueio de apps, abra Apps bloqueados, marque os apps e salve.',
  pickerSubtitle: 'Escolha os apps e as categorias a bloquear neste dispositivo.',
  pickerSubtitleAndroid:
    'Os apps marcados não abrem enquanto o Bloqueio de apps estiver ativado.',
  pickerEmpty: 'Nenhum app encontrado neste dispositivo.',
} as const;
