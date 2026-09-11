/** Portuguese (Brazil). */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{flagged}} de {{total}} aplicativos merecem atenção',
    summaryClear: 'Nada sinalizado entre {{total}} aplicativos',
    summaryFlaggedExtension:
      '{{flagged}} de {{total}} extensões do Chrome merecem atenção',
    summaryClearExtension: 'Nada preocupante entre {{total}} extensões do Chrome',
  },
  meta: {
    title: 'KidGate — Controle parental que respeita seu filho',
    description:
      'O KidGate ajuda os pais a gerenciar o tempo de uso, bloquear apps, filtrar a web e manter contato — sem tirar a liberdade da criança.',
  },

  common: {
    comingSoon: 'Em breve',
    loading: 'Carregando…',
    signOut: 'Sair',
  },

  language: {
    title: 'Idioma',
    change: 'Mudar idioma',
    system: 'Idioma do navegador',
    english: 'Inglês',
    vietnamese: 'Vietnamita',
    spanish: 'Espanhol',
    portuguese: 'Português (Brasil)',
    german: 'Alemão',
    french: 'Francês',
    japanese: 'Japonês',
    korean: 'Coreano',
    arabic: 'Árabe',
    indonesian: 'Indonésio',
    italian: 'Italiano',
    turkish: 'Turco',
    hindi: 'Híndi',
    russian: 'Russo',
  },

  nav: {
    skip: 'Pular para o conteúdo',
    main: 'Principal',
    about: 'Sobre',
    support: 'Suporte',
    privacy: 'Privacidade',
    terms: 'Termos',
    dashboard: 'Painel',
  },

  footer: {
    blurb:
      'Controle parental que ajuda as famílias a combinarem o tempo de uso em vez de brigar por causa dele.',
    product: 'Produto',
    about: 'Sobre nós',
    dashboard: 'Painel dos pais',
    supportGuides: 'Suporte e guias',
    download: 'Baixar',
    contact: 'Fale conosco',
    legal: 'Jurídico',
    privacyPolicy: 'Política de Privacidade',
    terms: 'Termos e Condições',
    deleteData: 'Excluir seus dados',
    rights: '© {{year}} KidGate. Todos os direitos reservados.',
    madeFor: 'Feito para famílias no iPhone, Android, Mac e Windows.',
  },

  legalNote:
    'Esta página está disponível apenas em inglês, e o texto em inglês é a versão que vale. Escreva para [support@kidgate.app](mailto:support@kidgate.app) se precisar de ajuda para entender alguma parte.',

  store: {
    appleAria: 'Baixar o KidGate na App Store',
    appleSmall: 'Baixe na',
    appleName: 'App Store',
    googleAria: 'Baixar o KidGate no Google Play',
    googleSmall: 'Disponível no',
    googleName: 'Google Play',
  },

  home: {
    heroBadge: 'Controle parental, do jeito certo',
    heroTitle: 'Proteja seus filhos',
    heroTitleAccent: 'sem tirar a liberdade deles.',
    heroLede:
      'O KidGate dá aos pais um controle calmo e claro sobre tempo de uso, apps e segurança — enquanto as crianças continuam com um celular que ainda parece delas.',
    heroCheck1: 'Tempo de Uso',
    heroCheck2: 'Bloqueio de apps',
    heroCheck3: 'Filtro da web',
    heroCheck4: 'Localização',
    heroCheck5: 'Painel da família',

    phoneDailyLimit: 'Limite diário',
    phoneDailyLimitValue: '1h24 de 3h usadas',
    phoneBlockedHours: 'Horários bloqueados',
    phoneScheduleOn: 'Agenda ativa',
    phoneLocation: 'Localização',
    phoneLocationValue: 'Na escola · há 5 min',
    phoneCheckIn: 'Check-In OK',

    trust1Title: 'Nunca há anúncios',
    trust1Text: 'Os dados das crianças nunca são usados para publicidade',
    trust2Title: 'Exclua quando quiser',
    trust2Text: 'Apague sua conta familiar e todos os dados quando pedir',
    trust3Title: 'Celular e computador',
    trust3Text: 'iPhone, Android, Mac e Windows em uma conta de família',
    trust4Title: 'Um plano por família',
    trust4Text: 'Todos os aparelhos de pais e filhos, uma assinatura',

    featuresEyebrow: 'Recursos',
    featuresTitle: 'Tudo o que um pai ou mãe precisa',
    featuresSub:
      'De limites diários a alertas de emergência — um app para o bem-estar digital da família inteira.',
    feature1Title: 'Tempo de Uso e limites diários',
    feature1Text:
      'Defina um limite diário e Horários bloqueados para a escola e a hora de dormir. O aparelho se bloqueia sozinho quando o tempo acaba.',
    feature2Title: 'Bloqueio de apps',
    feature2Text:
      'Escolha exatamente quais apps seu filho pode abrir, protegido pelo seu PIN de responsável, e ligue o bloqueio à distância.',
    feature3Title: 'Limite por app',
    feature3Text:
      'Limite cada app separadamente, além do limite diário — “meia hora de TikTok” sem precisar proibir de vez.',
    feature4Title: 'Filtro da web e histórico',
    feature4Text:
      'Recuse sites adultos e de apostas no celular e no computador. Com o Premium, veja quais sites foram consultados e quais foram barrados.',
    feature5Title: 'Localização ao vivo e lugares',
    feature5Text:
      'Veja a última localização do seu filho, revise o histórico e seja avisado quando ele chega ou sai de um lugar salvo.',
    feature6Title: 'Check-In e SOS',
    feature6Text:
      'Peça ao seu filho para confirmar que está bem e receba um SOS imediato com localização e foto numa emergência.',
    feature7Title: 'Alertas de proteção e de apps',
    feature7Text:
      'Saiba na hora em que uma permissão importante é desligada. Com o Premium, um novo app no Android espera sua aprovação antes de abrir.',
    feature8Title: 'Tarefas com recompensa e tempo extra',
    feature8Text:
      'As crianças ganham minutos extras concluindo tarefas, ou pedem mais tempo. Os dois chegam ao seu celular para aprovação.',

    feature9Title: 'Bloqueio do aparelho',
    feature9Text:
      'Bloqueie o aparelho agora e libere quando quiser: o jantar, a lição de casa ou uma regra ignorada.',
    feature10Title: 'Relatório semanal',
    feature10Text:
      'Toda segunda-feira: tempo de tela, a média diária, o que foi bloqueado e como a semana ficou em relação à anterior.',
    feature11Title: 'Quadro de estrelas',
    feature11Text:
      'As crianças veem quantas estrelas cada uma ganhou nesta semana. Recomeça toda segunda-feira, e você decide se fica ligado.',
    feature12Title: 'Feed de atividades',
    feature12Text:
      'Tudo o que aconteceu, em ordem: um aparelho desbloqueado, um site filtrado, uma tarefa concluída, um alerta enviado. Hoje é grátis; o Premium guarda 30 dias.',
    featurePremium: 'Premium',
    platformsTitle: 'Um só KidGate, onde estiver a tela',
    platformsSub:
      'As mesmas regras e a mesma conta de família no celular e no computador. O app de computador é instalado por este site, não por uma loja; o Chrome e a Android TV estão esperando a revisão das suas lojas.',

    showcaseEyebrow: 'Painel dos pais',
    showcaseTitle: 'A família inteira em uma tela',
    showcaseSub:
      'Tempo de Uso, tentativas bloqueadas, localização e tudo o que precisa da sua atenção — no seu celular ou em qualquer navegador.',
    showcaseTile1: 'Tempo de Uso hoje',
    showcaseTile2: 'Tentativas bloqueadas',
    showcaseTile3: 'Precisa de atenção',
    showcaseCaption1: 'Leia relatórios de qualquer navegador',
    showcaseCaption2: 'Mudanças aprovadas pelo seu celular',

    setupEyebrow: 'Configuração',
    setupTitle: 'Funcionando em minutos',
    setupSub: 'Sem conhecimento técnico — o app conduz você em cada passo.',
    step1Title: 'Configure seu aparelho',
    step1Text:
      'Instale o KidGate, escolha “Este é um aparelho de responsável” e entre com Google, Apple ou e-mail.',
    step2Title: 'Conecte o aparelho do seu filho',
    step2Text:
      'Instale o KidGate no celular do seu filho e conecte lendo um QR code. Menos de um minuto.',
    step3Title: 'Defina suas regras',
    step3Text:
      'Escolha um limite diário, bloqueie apps e horários e ligue a localização — tudo do seu próprio celular.',

    whyEyebrow: 'Por que o KidGate',
    whyTitle: 'Feito para a confiança, não para a vigilância',
    whySub: 'Pensado para manter aberta a conversa entre pais e filhos.',
    why1Title: 'Um plano, a família toda',
    why1Text:
      'Uma única assinatura Premium cobre todos os aparelhos de pais e filhos, e só o titular da família paga. O plano gratuito mantém um dispositivo infantil monitorado.',
    why2Title: 'Feito para criar em dupla',
    why2Text:
      'Convide um segundo responsável para cuidar das mesmas crianças, com o acesso que o titular aprovar.',
    why3Title: 'Privacidade em primeiro lugar',
    why3Text:
      'Nunca vendemos dados pessoais nem usamos dados de crianças para publicidade. Apague tudo quando quiser.',
    why4Title: 'Honestos sobre os limites',
    why4Text:
      'Dizemos o que cada plataforma consegue e não consegue aplicar, em vez de prometer um controle que não existe.',

    onlyEyebrow: 'Só no KidGate',
    onlyTitle: 'O que você não encontra em outro lugar',
    onlySub:
      'Seis pontos conferidos contra os apps com que os pais nos comparam. Cada um diz em qual plataforma é verdade.',
    only1Title: 'A TV da sala também',
    only1Text:
      'A Android TV recebe Limite diário, Horários bloqueados, bloqueio de apps e Filtro da web. Na TV, o bloqueio faz o melhor possível — um app bloqueado é mandado de volta para a tela inicial — e não há SOS nem pedido de tempo extra a partir do sofá. A versão já roda em hardware real hoje e está esperando o lançamento na loja, e por isso a lista de plataformas diz Planejado. A maioria dos controles parentais para no celular.',
    only2Title: 'Alertas de mensagens que ficam no celular',
    only2Text:
      'No Android, as mensagens são conferidas no próprio aparelho contra listas de palavras-chave em 14 idiomas, e o que sai do celular é a palavra encontrada, nunca a conversa. Só uma coisa muda isso, e apenas se você pedir: ligue a confirmação por IA e uma mensagem recebida ambígua é enviada para ser avaliada, para que você não seja acordado por uma palavra comum.',
    only3Title: 'Todo app, não uma lista de apps',
    only3Text:
      'No Android, os alertas vêm das notificações e do que seu filho ou filha digita em qualquer app — Zalo, LINE, KakaoTalk, o chat de um jogo — não de uma lista fixa de apps compatíveis.',
    only4Title: 'Uma saída para a criança',
    only4Text:
      'Segurar o SOS por cinco segundos avisa você na hora, com a localização; no Android e no Mac também desbloqueia o aparelho por um tempo. Quem sempre consegue pedir ajuda não tem motivo para brigar com o app.',
    only5Title: 'Regras que valem sem internet',
    only5Text:
      'Horários bloqueados e Limite diário são aplicados no próprio aparelho, então desligar o roteador não muda nada. A TV aceita até o seu PIN de responsável sem conexão nenhuma.',
    only6Title: 'Crédito quando a semana mereceu',
    only6Text:
      'Todo relatório semanal guarda espaço para o que deu certo — um limite respeitado, nenhuma madrugada, uma tarefa concluída — e só diz isso quando a semana foi medida de verdade.',

    faqEyebrow: 'Perguntas frequentes',
    faqTitle: 'O que os pais perguntam primeiro',
    faqSub: 'Respostas rápidas antes de baixar.',
    faq1Q: 'Existe teste gratuito?',
    faq1A:
      'Sim. O teste de 7 dias começa quando seu primeiro dispositivo de responsável e de criança são conectados, e inclui todos os recursos Premium. Quando termina, as regras que você definiu — Limite diário, Horários bloqueados, Apps bloqueados, Filtro da web, Bloqueio do dispositivo, pedidos de tempo extra e tarefas com recompensa — continuam funcionando de graça em um dispositivo infantil, e você ainda pode perguntar a esse dispositivo onde ele está. A atividade ao vivo, o histórico, os relatórios semanais e o rastreamento de localização são o que o Premium devolve.',
    faq2Q: 'Quantos aparelhos posso gerenciar?',
    faq2A:
      'Uma assinatura cobre a família inteira — todos os aparelhos de filhos e todos os responsáveis no mesmo plano. No plano gratuito, um dispositivo infantil continua monitorado e você escolhe qual; os outros seguem aplicando as regras que você já definiu e param de enviar atividade.',
    faq3Q: 'Meu filho consegue desinstalar ou burlar o KidGate?',
    faq3A:
      'As configurações sensíveis ficam atrás do seu PIN de responsável, e os Alertas de Proteção avisam na hora se uma permissão importante for desligada no aparelho da criança.',
    faq4Q: 'Posso gerenciar tudo pelo computador?',
    faq4A:
      'Sim. O painel dos pais abre em qualquer navegador — entre com um código do seu celular e você vê a mesma família, os mesmos aparelhos e as mesmas configurações. A consulta funciona na hora; bloquear um aparelho ou mudar um limite pede o seu PIN de responsável, ou uma aprovação pelo app.',
    faq5Q: 'Quanto custa o Premium?',
    faq5A:
      'O Premium custa $6.99 por mês ou $39.99 por ano nos Estados Unidos, cobrado pela App Store ou pelo Google Play e mostrado lá na sua moeda. Um plano Lifetime de pagamento único cobre até três dispositivos infantis. O plano gratuito nunca expira.',
    faqMore: 'Mais dúvidas? Veja o Suporte',

    ctaTitle: 'Comece a proteger sua família hoje',
    ctaSub:
      'Teste gratuito de 7 dias com acesso completo. Sem cartão de crédito para começar.',
    ctaNote: 'Cancele quando quiser pela App Store ou pelo Google Play.',
  },

  login: {
    title: 'Entrar como responsável',
    sub: 'Use a mesma conta que você criou no app do KidGate. Entrar aqui mostra a mesma família, aparelhos e configurações.',
    notConfiguredTitle: 'O Firebase não está configurado nesta implantação.',
    notConfiguredBody:
      'Defina as variáveis de ambiente VITE_FIREBASE_* para habilitar o login.',
    qrWhy:
      'Escanear com o celular faz login e desbloqueia os controles de uma vez. Os métodos abaixo fazem login para consulta; desbloquear os controles depois pede seu PIN de responsável.',
    orViewOnly: 'ou entre de outro jeito',
    google: 'Continuar com o Google',
    googleBusy: 'Abrindo o Google…',
    apple: 'Continuar com a Apple',
    appleBusy: 'Abrindo a Apple…',
    orEmail: 'ou use seu e-mail',
    email: 'E-mail',
    emailPlaceholder: 'voce@exemplo.com',
    password: 'Senha',
    submit: 'Entrar',
    submitBusy: 'Entrando…',
    forgot: 'Esqueceu a senha?',
    resetNeedsEmail: 'Digite seu e-mail primeiro e depois escolha Esqueceu a senha.',
    resetSent: 'E-mail de redefinição de senha enviado para {{email}}.',
    foot: 'As contas do KidGate são criadas no app para celular — o painel web apenas entra em uma família que já existe. É novo por aqui? Instale o app e conecte um aparelho de filho primeiro.',
  },

  qr: {
    start: 'Entrar com o app do KidGate',
    generating: 'Gerando código…',
    step1: 'Abra o KidGate no seu celular.',
    step2: 'Vá em *Configurações → Entrar na web*.',
    step3: 'Leia este código e aprove.',
    waiting: 'Aguardando aprovação · expira em {{time}}',
    signingIn: 'Aprovado. Entrando…',
    expired: 'Este código expirou.',
    failed: 'O login não foi concluído.',
    newCode: 'Mostrar um novo código',
    tryAgain: 'Tentar de novo',
  },

  authError: {
    generic: 'Algo deu errado. Tente de novo.',
    invalidEmail: 'Esse e-mail não parece certo.',
    userDisabled: 'Esta conta foi desativada.',
    userNotFound: 'Nenhuma conta do KidGate usa esse e-mail.',
    wrongPassword: 'E-mail ou senha incorretos.',
    rateLimited:
      'Muitos códigos de acesso nesta rede. Tente novamente em {{minutes}} min.',
    tooManyRequests: 'Tentativas demais. Espere alguns minutos e tente de novo.',
    popupClosed: 'A janela de login foi fechada antes de terminar.',
    popupCancelled: 'O login foi cancelado.',
    popupBlocked:
      'Seu navegador bloqueou a janela de login. Permita pop-ups para este site e tente de novo.',
    accountExists:
      'Esse e-mail já está cadastrado com outro método de login. Use o que você configurou no app.',
    operationNotAllowed:
      'Esse método de login ainda não está habilitado neste projeto.',
    unauthorizedDomain:
      'Este domínio não está autorizado nas configurações do Firebase Authentication.',
    invalidCustomToken: 'Esse link de login não é mais válido. Mostre um novo QR code.',
    webRejected: 'O pedido foi recusado no celular.',
    webExpired: 'O código expirou. Gere um novo.',
    noFunctionsUrl:
      'A URL das Cloud Functions não está configurada (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'Sua sessão expirou. Entre novamente.',
  },

  live: {
    checkingSession: 'Verificando sua sessão…',
    loadingFamily: 'Carregando sua família…',
    loadFailedTitle: 'Não foi possível carregar sua família',
    noAccessTitle: 'Nenhuma família nesta conta',
    noAccess:
      'Esta conta não tem acesso a nenhuma família do KidGate. Entre com a conta de responsável que você usa no app.',
  },

  time: {
    never: 'nunca',
    justNow: 'agora mesmo',
    minutes: 'há {{count}} min',
    hours: 'há {{count}} h',
    days: 'há {{count}} d',
  },

  viz: {
    hours: '{{count}}h',
    minutes: '{{count}}min',
    hoursMinutes: '{{hours}}h {{minutes}}min',
    none: '—',
    byDay: 'Tempo de Uso por dia',
    limit: 'Limite {{value}}',
    screenTime: 'Tempo de Uso',
    bonus: 'Bônus',
    bonusEarned: 'Bônus conquistado',
    overLimit: 'Acima do limite diário',
    dailyLimit: 'Limite diário',
    ofLimit: 'de {{value}}',
    noLimit: 'sem limite definido',
    blocked: 'Bloqueado',
    blockedHours: 'Horários bloqueados',
    day0: 'dom',
    day1: 'seg',
    day2: 'ter',
    day3: 'qua',
    day4: 'qui',
    day5: 'sex',
    day6: 'sáb',
    timelineUsed: 'Em uso',
    timelineIdle: 'Sem uso',
    timelineUnmeasured: 'Não medido',
    timelineUnmeasuredHint:
      'O KidGate não estava em execução no dispositivo, ou o dispositivo estava suspenso. Esses minutos também não entram no total.',
    timelineUnsupported:
      'Este dispositivo consegue informar por quanto tempo foi usado, mas não quando.',
    timelinePending: 'Ainda sem linha do tempo.',
  },

  perm: {
    screenTime: 'Tempo de Uso',
    location: 'Localização',
    notifications: 'Notificações',
    camera: 'Câmera',
    backgroundAppRefresh: 'Atualização em Segundo Plano',
    overlay: 'Exibir sobre outros apps',
    batteryOptimization: 'Bateria sem restrições',
    exactAlarm: 'Alarmes exatos',
    accessibility: 'Acessibilidade',
  },

  webCat: {
    adult: 'Conteúdo adulto',
    selfHarm: 'Automutilação e transtornos alimentares',
    gambling: 'Apostas',
    gameGambling: 'Caixas de recompensa e apostas de skins',
    dating: 'Namoro',
    strangerChat: 'Chat com estranhos',
    drugs: 'Drogas e álcool',
    violence: 'Violência e gore',
    extremism: 'Extremismo e ódio',
    piracy: 'Pirataria',
    social: 'Redes sociais',
    videoStreaming: 'Streaming de vídeo',
    music: 'Música',
    gaming: 'Jogos',
    shopping: 'Compras',
    aiCompanion: 'Companheiros de IA',
    aiAssistant: 'Assistentes de IA',
    cryptoTrading: 'Cripto e trading',
    vpn: 'Apps VPN',
  },

  appCat: {
    adult: 'Conteúdo adulto',
    gambling: 'Apostas',
    gameGambling: 'Caixas de recompensa e apostas de skins',
    dating: 'Namoro',
    drugs: 'Drogas e álcool',
    violence: 'Violência e gore',
    piracy: 'Pirataria',
    bypass: 'Contorno de filtro e VPN',
  },

  webCatGroup: {
    harm: 'Conteúdo nocivo',
    contact: 'Estranhos',
    bypass: 'Contornar o filtro',
    ai: 'IA',
    entertainment: 'Lazer e redes sociais',
    money: 'Compras e dinheiro',
  },

  dash: {
    tabOverview: 'Visão geral',
    tabScreen: 'Tempo de Uso',
    tabApps: 'Apps e web',
    tabSafety: 'Segurança',
    tabControls: 'Controles',
    tabReport: 'Relatório semanal',
    tabReportNew: 'Novo relatório semanal',

    children: 'Filhos',
    noChildren: 'Nenhum aparelho de filho conectado ainda.',
    unassignedDevices: 'Não atribuído',
    manage: 'Gerenciar',
    parents_one: '{{count}} responsável',
    parents_other: '{{count}} responsáveis',
    devices_one: '{{count}} aparelho de filho',
    devices_other: '{{count}} aparelhos de filhos',
    planManageOnPhone: 'Os planos são comprados e alterados no app KidGate do celular.',
    fallbackFamily: 'Sua família',
    fallbackDevice: 'Aparelho do filho',

    statusOnline: 'On-line',
    statusOffline: 'Off-line',
    statusLocked: 'Bloqueado',
    statusLockSent: 'Bloqueio enviado',
    statusLockNotApplied: 'Bloqueio não aplicado',
    statusPaused: 'Pausado',

    stateAllowed: 'Permitido',
    stateDenied: 'Desligado',
    stateNotDetermined: 'Ainda não solicitado',
    stateRestricted: 'Restrito',
    stateUnavailable: 'Indisponível',
    stateUnknown: 'Desconhecido',

    lastActive: 'Última atividade {{when}}',
    appVersion: 'Versão do app',
    appVersionUpdate: '{{running}} · {{latest}} disponível',
    appVersionRestart: '{{running}} · reabra o app para concluir',
    buildOutdated: 'Atualização disponível',
    checkIn: 'Check-In',
    sending: 'Enviando…',
    lockDevice: 'Bloquear aparelho',
    unlock: 'Desbloquear',
    working: 'Processando…',
    save: 'Salvar',

    unlockTitle: 'As alterações estão bloqueadas.',
    unlockBody:
      'Consultar funciona na hora. Para bloquear um aparelho, mudar limites ou aprovar pedidos, desbloqueie este navegador com o seu PIN de responsável — ou aprove escaneando o QR code com o app KidGate. Os Check-Ins funcionam dos dois jeitos.',
    unlockCta: 'Desbloquear alterações',
    unlockToChange: 'Desbloqueie as alterações primeiro',
    pinTitle: 'Digite seu PIN de responsável',
    pinBody:
      'Os mesmos seis dígitos que você usa no app. Este navegador fica desbloqueado por 8 horas; aprovar pelo app o mantém conectado por 7 dias.',
    pinLabel: 'PIN de responsável',
    pinSubmit: 'Desbloquear',
    pinOrScan: 'Ou aprove pelo celular',
    qrSaferNote:
      'Aprovar pelo celular é o mais seguro dos dois: exige o celular vinculado em mãos, enquanto o PIN são seis dígitos que alguém da família pode ter visto você digitar.',
    pinWrong: 'PIN incorreto. Tentativas restantes: {{count}}.',
    pinLocked:
      'Tentativas erradas demais. Espere 15 minutos ou aprove este navegador pelo celular.',
    pinNotSet:
      'Sua família ainda não tem PIN de responsável. Defina um no app ou aprove este navegador pelo celular.',
    unlockedToast: 'Alterações desbloqueadas neste navegador.',
    close: 'Fechar',

    noDeviceTitle: 'Ainda não há aparelho de filho',
    noDeviceBody:
      'Abra o KidGate no seu celular, vá em *Família → + → Conectar o aparelho de um filho* e leia o QR code que aparece no aparelho do seu filho. Ele aparecerá aqui poucos segundos depois da conexão.',

    toastCheckIn: '{{name}} vai receber um pedido de Check-In.',
    toastTimeApproved: 'Tempo extra aprovado.',
    toastCheckInResent: 'Check-In enviado de novo.',

    tileScreenToday: 'Tempo de Uso hoje',
    tileSameAsAverage: 'Igual à média de 7 dias',
    tileDeltaUp: '↑ {{percent}}% em relação à média de 7 dias',
    tileDeltaDown: '↓ {{percent}}% em relação à média de 7 dias',
    tileBlocked: 'Tentativas bloqueadas',
    tileBlockedMeta: 'Apps impedidos desde a instalação',
    tileSites: 'Sites filtrados',
    tileCategoriesHit_one: '{{count}} categoria atingida',
    tileCategoriesHit_other: '{{count}} categorias atingidas',
    tileNothingBlocked: 'Nada bloqueado ainda',
    tileAttention: 'Precisa de atenção',
    tileOpenItems: 'Itens abertos abaixo',
    tileAllClear: 'Tudo certo',

    cardScreenTime: 'Tempo de Uso',
    cardScreenTimeSub: 'Últimos 14 dias, em relação ao limite diário',
    usageSyncNote:
      'O tempo de uso pode levar alguns minutos para aparecer nesta tela — mais tempo se o dispositivo não tiver conexão com a internet ou tiver sido fechado inesperadamente.',
    usageSyncNoteTv:
      'Esta TV só se conecta periodicamente, então o tempo de uso pode levar até uma hora para aparecer nesta tela — mais tempo sem conexão com a internet.',
    cardRecent: 'Atividade recente',
    cardRecentSub: 'Mais recentes primeiro',
    cardRecentEmpty:
      'Nada registrado ainda. Bloqueios, apps bloqueados, alertas de lugares e sincronizações de tempo de uso deste aparelho vão aparecer aqui.',
    cardAttention: 'Precisa da sua atenção',
    cardAttentionSub: '{{count}} em aberto',
    cardAttentionEmpty: 'Nada para revisar. As proteções parecem saudáveis.',
    cardProtection: 'Saúde da proteção',
    cardProtectionSub: 'Verificado {{when}}',

    attnMoreMinutes: '{{name}} pediu mais {{minutes}} minutos',
    attnReason: '“{{reason}}” · {{when}}',
    attnCheckInMissed: 'Um Check-In foi perdido',
    attnCheckInMissedMeta: 'Enviado {{when}} · sem resposta',
    attnLimitReached: 'Limite diário atingido — aparelho bloqueado',
    attnLimitReachedMeta: '{{used}} usados hoje',
    attnBatteryLow: 'Bateria fraca ({{level}}%)',
    attnBatteryLowMeta:
      'As atualizações de localização podem parar se o celular desligar',
    attnReview: 'Revisar',
    attnResend: 'Reenviar',
    attnHowToFix: 'Como resolver',
    attnUnlock: 'Desbloquear',
    attnAppOnly: 'Disponível no app do KidGate',

    todayTitle: 'Hoje',
    todaySub: 'Em relação ao limite diário e ao bônus conquistado',
    used: 'Usado',
    left: 'Restante',
    dailyLimit: 'Limite diário',
    bonusToday: 'Bônus de hoje',
    off: 'Desligado',
    on: 'Ligado',
    topAppsTitle: 'Apps mais usados hoje',
    topAppsTitleDay: 'Apps mais usados · {{date}}',
    topAppsSub: 'Os limites por app aparecem como marcador',
    topAppsFreeHint: 'Top 3 de hoje: a lista completa e o histórico vêm com o Premium.',
    trendTitle: 'Tendência do tempo de uso',
    trendSub: 'Últimos {{count}} dias',
    rangeDays: '{{count}} d',
    blockedHoursTitle: 'Horários bloqueados',
    blockedHoursSub_one:
      '{{count}} faixa de horário · o aparelho fica bloqueado dentro dos blocos sombreados',
    blockedHoursSub_other:
      '{{count}} faixas de horário · o aparelho fica bloqueado dentro dos blocos sombreados',
    scheduleOff: 'A agenda está desligada',
    schedMax: 'Um aparelho guarda no máximo {{max}} intervalos.',

    appUsageTitle: 'Uso de apps hoje',
    appUsageSub: 'Tempo gasto por app',
    topAppsOther: 'Outros apps',
    underAMinute: 'Menos de um minuto',
    appUsageEmpty: 'Ainda não há uso de apps registrado.',
    appBlockingTitle: 'Bloqueio de apps',
    appBlockingSub: 'Escolhido no aparelho da criança com o PIN de responsável',
    blockingLabel: 'Bloqueio',
    appsBlocked: 'Apps bloqueados',
    categories: 'Categorias',
    perAppHint:
      'Os limites por app funcionam à parte da lista de bloqueio — “30 minutos de TikTok” é uma decisão diferente de “nada de TikTok”.',
    limitsMax: 'Um aparelho guarda no máximo {{max}} apps limitados.',
    perDay: '{{value}}/dia',
    webActivityTitle: 'Atividade na web',
    webActivitySub: 'Domínios mais visitados, últimos 30 dias',
    webActivityEmpty: 'Ainda não há atividade na web.',
    inventoryTitle: 'Aplicativos instalados',
    inventorySub: 'Tudo neste dispositivo, não apenas o que mudou',
    inventoryEmpty: 'Este dispositivo ainda não publicou sua lista de aplicativos.',
    inventoryStale:
      'Esta lista está desatualizada. Ela é renovada quando o dispositivo se conectar de novo.',
    inventoryFirstScan:
      'Primeira verificação, então o KidGate não sabe quando cada um chegou.',
    inventoryFlagged: 'Merecem atenção',
    inventoryFlaggedLabel: 'A revisar',
    inventoryOtherLabel: 'Identificados',
    inventoryUnknownLabel: 'Não identificados',
    inventoryIncomplete:
      'Um aplicativo sem ícone na tela inicial pode não aparecer aqui.',
    inventoryPending: 'Aguardando sua aprovação',
    pendingInstallBlocked: 'Bloqueado até você permitir',
    installAllow: 'Permitir',
    pendingInstallsTitle: 'Apps novos aguardando aprovação',
    pendingInstallsSub:
      'Instalados depois de você ativar a aprovação e bloqueados pelo próprio dispositivo',
    pendingInstallsEmpty: 'Nenhum app novo aguardando aprovação.',
    toastInstallAllowed: 'App permitido',
    rowInstallApproval: 'Aprovar apps novos',
    rowInstallApprovalDesc: '{{count}} apps aguardando aprovação',
    rowInstallApprovalDesc_one: '{{count}} app aguardando aprovação',
    rowInstallApprovalDescIos:
      'Oculta a App Store — a Apple não permite aprovação app por app',
    webActivitySyncNote:
      'A atividade na web pode levar alguns minutos para aparecer nesta tela — mais tempo se o dispositivo não tiver conexão com a internet ou tiver sido fechado inesperadamente.',
    webActivitySyncNoteTv:
      'Esta TV só se conecta periodicamente, então a atividade na web pode levar até uma hora para aparecer nesta tela — mais tempo sem conexão com a internet.',
    colDomain: 'Domínio',
    colVisits: 'Visitas',
    colBlocked: 'Bloqueadas',
    colLastSeen: 'Visto por último',
    videosTitle: 'Vídeos assistidos',
    videosSub: 'O que foi assistido no YouTube e na web',
    videosEmpty: 'Nenhum vídeo ainda.',
    colVideo: 'Vídeo',
    colChannel: 'Canal',
    colViews: 'Visualizações',
    filterRefusedTitle: 'O que o filtro recusou',
    filterRefusedSub_one: '{{count}} consulta bloqueada, últimos 30 dias',
    filterRefusedSub_other: '{{count}} consultas bloqueadas, últimos 30 dias',
    nothingBlockedYet: 'Nada foi bloqueado ainda.',
    rollupNoteAi:
      'Alguns tipos foram deduzidos do nome do site em vez de corresponderem a um site conhecido, então alguns podem estar errados.',
    webBackgroundNote:
      'Quando ninguém está usando o aparelho, alguns apps continuam acessando a internet em segundo plano: atualizações, recomendações e verificações rodam sozinhas.',
    filterHintIos:
      'No iOS o filtro usa o controle de conteúdo adulto da Apple — o bloqueio por categoria é só no Android.',
    filterHintAndroid: 'As categorias são aplicadas pelo filtro DNS no aparelho.',
    filterHintMacos:
      'As categorias são aplicadas pelo filtro de conteúdo do KidGate no Mac.',

    locationTitle: 'Localização',
    locationSharingOff: 'O compartilhamento está desligado',
    locationSyncNote:
      'A localização pode levar alguns minutos para ser atualizada — mais tempo se o dispositivo não tiver conexão com a internet ou tiver sido fechado inesperadamente.',
    locationUpdated: 'Atualizado {{when}}',
    locationWaiting: 'Aguardando a primeira atualização',
    lastKnownLocation: 'Última localização conhecida',
    nearPlace: 'Perto de {{place}}',
    noPlaces:
      'Nenhum lugar salvo ainda. Adicione um no app para receber um alerta quando seu filho chegar ou sair.',
    placeRadius: '{{meters}} m · ',
    placeArrive: 'chegada',
    placeLeave: 'saída',
    placeNoAlerts: 'sem alertas',
    placeSamePin:
      'É o mesmo ponto de “{{name}}”. Use o mapa do app para colocá-lo em outro lugar.',
    placeWebHint:
      'Na web só dá para criar um lugar onde o aparelho informou a posição pela última vez. Use o mapa do app para escolher qualquer outro ponto.',
    placeNeedsLocation: 'Esperando uma localização deste aparelho.',
    sosTitle: 'Alertas de SOS',
    sosSub: 'Sinais de emergência do aparelho da criança',
    sosEmpty:
      'Nenhum alerta de SOS. Testem juntos uma vez para os dois saberem como funciona.',
    sosAcknowledged: 'confirmado',
    sosActive: 'ativo',

    checkInsTitle: 'Check-Ins',
    checkInsSub: 'Peça ao seu filho para confirmar que está bem',
    checkInSafe: 'Confirmou que está bem',
    checkInMissed: 'Sem resposta',
    checkInWaiting: 'Aguardando',
    checkInPhotoRequested: 'foto e localização foram pedidas',
    checkInNoReply: 'ainda sem resposta',
    checkInPhotoSkipped: 'foto ignorada',
    checkInPhotoAttached: 'foto anexada',
    checkInNoPhoto: 'nenhuma foto pedida',
    sendCheckIn: 'Enviar um Check-In agora',

    protectionAlertsTitle: 'Alertas de proteção',
    protectionAlertsSub_one: '{{count}} evento desde a instalação',
    protectionAlertsSub_other: '{{count}} eventos desde a instalação',
    protectionAlertsHint:
      'Um alerta de proteção significa que o KidGate consegue aplicar menos do que você definiu. Restaure a permissão no aparelho da criança para limpá-lo.',

    limitCardTitle: 'Limite diário',
    limitCardSub: 'Limite os minutos disponíveis a cada dia',
    limitAria: 'Minutos do limite diário',
    limitScaleMin: '30 min',
    limitScaleMax: '8 h',
    limitHint:
      'Os minutos de bônus das tarefas e dos pedidos de tempo aprovados entram por cima, só naquele dia.',
    limitShared: 'Partilhado por todos os dispositivos',
    limitSharedSpent: 'Hoje foram usados {{used}} de {{limit}}',
    limitSharedHint:
      'É o dia inteiro desta criança, não um limite deste dispositivo — cada dispositivo recebe o que os outros não usaram. Altera-se na aplicação KidGate.',
    whatsOnTitle: 'O que está ligado',
    whatsOnSub: 'As mudanças sincronizam com o aparelho da criança',
    rowBlockedHours: 'Horários bloqueados',
    rowBlockedHoursDesc_one: '{{count}} faixa de horário · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} faixas de horário · {{list}}',
    rowAppBlocking: 'Bloqueio de apps',
    rowAppBlockingApps: '{{count}} apps',
    rowAppBlockingApps_one: '{{count}} app',
    rowAppBlockingCategories: '{{count}} categorias',
    rowAppBlockingCategories_one: '{{count}} categoria',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Filtro da web',
    rowWebFilterDesc_one: '{{count}} categoria recusada',
    rowWebFilterDesc_other: '{{count}} categorias recusadas',
    rowNotSupported: 'Não compatível com este dispositivo',
    rowWebFilterAwaitingApproval: 'Aguardando aprovação no dispositivo',
    rowWebFilterSwitchedOff: 'Desativado no dispositivo',
    rowLocation: 'Compartilhamento de localização',
    rowLocationDesc: 'Última atualização {{when}}',
    rowLocationNone: 'Sem localização ainda',
    rowSearchMonitoring: 'Monitoramento de buscas',
    rowSearchMonitoringDesc:
      'Navegadores e YouTube. Só a palavra sinalizada é informada, nunca a busca em si.',
    rowSafeSearch: 'Forçar SafeSearch',
    rowSafeSearchDesc:
      'Fixa o Google SafeSearch, o Modo restrito do YouTube, o Bing e o DuckDuckGo na configuração rigorosa. Android, Android TV e Chrome. Nesse nível o YouTube também oculta os comentários e bloqueia alguns vídeos comuns.',

    webFilterCatsTitle: 'Categorias do filtro da web',
    webFilterCatsSub: 'Tipos de conteúdo bloqueados',
    dnsHint:
      'Os resolvedores de DNS criptografado são sempre recusados enquanto o filtro funciona — deixá-los acessíveis é o que permite a um navegador contornar todas as outras categorias.',
    starChartTitle: 'Quadro de estrelas',
    starChartSub: 'Estrelas conquistadas nesta semana, por filho',
    starChartEmpty:
      'Adicione um segundo filho no aplicativo para começar o quadro de estrelas.',
    starChartStars: '{{count}} estrelas',
    familyScreenTimeTitle: 'Tempo de Uso da família',
    familyScreenTimeSub: 'Menos Tempo de Uso primeiro, esta semana',
    familyScreenTimeEmpty:
      'Ninguém informou nada ainda esta semana. As linhas aparecem quando os celulares informam.',
    familyScreenTimeParent: 'Responsável',
    familyScreenTimeDays: '{{count}} dias informados',
    rewardTasksTitle: 'Tarefas com recompensa',
    rewardTasksSub: 'Ganhe minutos extras concluindo tarefas',
    rewardTaskMeta: '+{{minutes}} min · {{cadence}}',
    rewardTaskStars: 'Dificuldade: {{count}} de 3',
    rewardTaskWaiting: ' · aguardando sua aprovação',
    approve: 'Aprovar',
    siteRequestsTitle: 'Pedidos de sites',
    siteRequestsSub: 'Sites que este dispositivo pediu para permitir',
    siteRequestAllow: 'Permitir',
    siteRequestDeny: 'Agora não',
    attnSiteRequest: '{{name}} pediu para abrir {{domain}}',
    toastSiteAllowed: 'Site permitido',
    timelineTitle: 'Quando foi usado',
    timelineSub: 'Hoje, de meia-noite a meia-noite. O verde é o tempo no dispositivo.',
  },

  controlError: {
    generic: 'Não foi possível concluir. Tente de novo.',
    network: 'Sem conexão. Verifique sua rede e tente de novo.',
    sessionExpired: 'Sua sessão expirou. Entre novamente.',
    forbidden:
      'Esta sessão do navegador não pode fazer alterações. Entre novamente lendo o QR code com o app do KidGate.',
    notFound: 'Isso não existe mais — pode ter sido alterado no celular.',
    conflict: 'Alguém acabou de alterar isso. Recarregue para ver o resultado.',
    rateLimited: 'Mudanças demais de uma vez. Espere um momento e tente de novo.',
    server: 'O KidGate não conseguiu concluir. Tente de novo em instantes.',
    premiumRequired:
      'Este é um recurso Premium. Os planos são gerenciados no app KidGate no seu telefone.',
  },

  report: {
    title: 'Relatório semanal',
    subtitle: 'O que o KidGate notou durante a semana.',
    weekOf: 'Semana {{week}}',
    range: '{{from}} – {{to}}',
    writtenAt: 'Escrito em {{when}}',
    triggerScheduled: 'Enviado na segunda-feira',
    triggerManual: 'Criado por você',
    statScreenTime: 'Tempo de tela',
    statDailyAverage: 'Média diária',
    statBlockedApps: 'Apps bloqueados',
    statBlockedWebVisits: 'Sites filtrados',
    statTasksApproved: 'Tarefas concluídas',
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
    findingLimitHit_other:
      'O limite diário de {{limit}} foi atingido em {{count}} dias.',
    findingBlockedApps:
      '{{count}} aberturas de apps bloqueadas, contra {{previous}} na semana passada.',
    findingBlockedWeb:
      '{{count}} sites filtrados, contra {{previous}} na semana passada.',
    findingQuietWeek:
      'Uma semana tranquila: {{total}} no total e nada que exigisse você.',
    narrativeTitle: 'Em uma frase',
    finePrint:
      'Os números cobrem de {{from}} a {{to}}, em todos os aparelhos da família. O tempo de tela é o que os aparelhos informaram; os minutos que eles não conseguiram medir não entram em nenhum total.',
    shareImage: 'Salvar como imagem',
    sharePdf: 'Salvar como PDF',
    copySummary: 'Copiar resumo',
    copied: 'Resumo copiado.',
    imageSaved: 'Imagem salva.',
    shareFailed:
      'Este navegador não consegue salvar isso. Em vez disso, copie o resumo.',
    emptyTitle: 'Ainda não há relatório',
    emptyBody:
      'O relatório chega toda segunda-feira de manhã e cobre os sete dias anteriores.',
    noUsage:
      'Nenhum tempo de tela foi registrado nas últimas duas semanas, então ainda não há o que relatar. Um aparelho sem conexão não informa nada, e isso não é o mesmo que uma semana tranquila.',
    rateLimited: 'Tentativas demais. Espere um minuto.',
    loadFailedTitle: 'Relatórios não carregados',
    loadFailed:
      'Não foi possível abrir os relatórios. Recarregue a página para tentar de novo.',
    retryLoad: 'Tentar de novo',
    failed: 'Não foi possível criar o relatório. Tente de novo em instantes.',
    existed: 'Esta semana já tinha um relatório — aqui está.',
    childrenTitle: 'Cada filho',
    childrenNote:
      'As mesmas duas semanas, por aparelho. Os percentuais são do total da família.',
    colChild: 'Filho',
    colScreenTime: 'Tempo de tela',
    colShare: 'Proporção',
    colChange: 'Em relação à semana passada',
    colLimit: 'Acima do limite',
    colLateNights: 'Noites até tarde',
    colTopApp: 'Mais usado',
    unnamedChild: 'Aparelho sem nome',
    changeUp: '+{{value}}',
    changeDown: '−{{value}}',
    changeFlat: 'quase igual',
    noLimit: 'Sem limite',
    noTopApp: '—',
    limitDays_one: '{{count}} dia',
    limitDays_other: '{{count}} dias',
    lateNightsNone: 'nenhuma',
    busiest: 'Mais tempo de tela',

    historyTitle: 'Semanas anteriores',
    historyEmpty:
      'Os relatórios que você receber a partir de agora ficam aqui por um ano.',
  },

  support: {
    title: 'Suporte do KidGate',
    updated: 'Estamos aqui para ajudar',

    contactTitle: 'Fale conosco',
    contactEmail: '**E-mail:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Tempo de resposta:** em até 24 horas (de segunda a sexta)',
    contactNote:
      'Ao entrar em contato, inclua o e-mail da sua conta de responsável do KidGate e uma breve descrição do problema para podermos ajudar mais rápido.',

    startTitle: 'Primeiros passos',
    start1:
      '**1. Configure o aparelho do responsável.** Instale o KidGate, abra o app e escolha *Este é um aparelho de responsável*. Entre com Google, Apple ou e-mail e dê um nome à sua família.',
    start2:
      '**2. Defina um PIN de responsável.** Vá em *Configurações → Segurança* e crie um PIN de 6 dígitos. Você precisa dele para mudar configurações sensíveis e escolher apps bloqueados no aparelho da criança. Não compartilhe com seus filhos.',
    start3:
      '**3. Conecte o aparelho da criança.** Instale o KidGate no aparelho do seu filho e escolha *Este é um aparelho de filho*. No aparelho do responsável, abra *Família → + → Conectar o aparelho de um filho* e leia o QR code exibido no aparelho da criança (ou digite o código de 6 caracteres). Confirme a conexão no aparelho da criança.',
    start4:
      '**4. Conceda permissões no aparelho da criança.** Abra a tela *Status* no aparelho da criança e permita todas as permissões que o KidGate pedir — no Android: notificações, Acesso de uso, Exibir sobre outros apps, Acessibilidade e bateria sem restrições; no iOS: *Permitir uso de apps e sites* (Tempo de Uso). Os controles não funcionarão por completo até que estejam ligados.',
    start5:
      '**5. Configure os controles.** No aparelho do responsável, abra o cartão do aparelho da criança e defina o limite diário, os horários bloqueados, os apps bloqueados, o filtro da web e os recursos de localização.',
    startNote:
      'O app também traz um guia passo a passo: *Configurações → Guia do usuário*, com detalhes sobre conexão de aparelhos, permissões, controles do dia a dia e recursos de segurança.',

    faqTitle: 'Perguntas frequentes',

    faq1Q: 'Posso gerenciar minha família pelo computador?',
    faq1A:
      'Sim. Abra o [painel web](/dashboard) e entre com a mesma conta que você usa no app — Google, Apple ou seu e-mail e senha. Ele mostra a mesma família, aparelhos, relatórios e configurações. Contas e conexão de aparelhos continuam sendo feitas no app para celular.',

    faq2Q: 'Como conecto os aparelhos do responsável e da criança?',
    faq2A:
      'No aparelho da criança, abra o KidGate e escolha *Este é um aparelho de filho* — aparecerão um QR code e um código de 6 caracteres. No aparelho do responsável, abra *Família → + → Conectar o aparelho de um filho* e leia o QR code (recomendado) ou digite o código. Depois confirme o nome do responsável no aparelho da criança. Os códigos expiram — se a conexão falhar, toque em *Novo código* no aparelho da criança e tente de novo.',

    faq3Q: 'Dois responsáveis podem gerenciar a mesma família?',
    faq3A:
      'Sim. No aparelho do titular da família, abra *Família → + → Adicionar outro aparelho de responsável* e compartilhe o QR code ou o código de convite. O outro responsável instala o KidGate, entra como responsável e escolhe *Família → + → Entrar na família*. Depois o titular aprova o pedido. Uma assinatura cobre a família inteira; só o titular paga.',

    faq4Q: 'Como funciona o teste gratuito?',
    faq4A:
      'O teste de 7 dias começa quando seu primeiro dispositivo de responsável e de criança são conectados, e dá acesso completo a todos os recursos. Remover um dispositivo infantil não reinicia o teste. Quando termina, todas as regras continuam funcionando de graça em um dispositivo infantil; o Premium mantém a atividade ao vivo, o histórico, os relatórios semanais e todos os dispositivos.',

    faq5Q: 'Como cancelo minha assinatura?',
    faq5A:
      'As assinaturas são cobradas pela App Store ou pelo Google Play, não diretamente pelo KidGate. No iOS: *Ajustes → seu nome → Assinaturas*. No Android: *Google Play → ícone do perfil → Pagamentos e assinaturas → Assinaturas*. A assinatura se renova automaticamente, a menos que você cancele pelo menos 24 horas antes do fim do período atual.',

    faq6Q: 'Como restauro minhas compras?',
    faq6A:
      'No aparelho do responsável, abra a tela *Planos* e toque em *Restaurar compras*. Confira se está conectado com a mesma conta da loja usada na compra original. Lembre-se de que só o titular da família pode assinar ou restaurar compras.',

    faq7Q: 'Por que os dados de tempo de uso não aparecem?',
    faq7A:
      'Os dados de uso vêm do aparelho da criança. Verifique se ele está on-line, abra o KidGate nele e veja a tela *Status* — todas as linhas de permissão devem aparecer como permitidas (no Android, o Acesso de uso é necessário para acompanhar o tempo de uso). Os relatórios podem levar alguns minutos para sincronizar.',

    faq8Q: 'Por que o bloqueio ou os horários bloqueados não funcionam?',
    faq8A:
      'No Android, o bloqueio precisa de *Exibir sobre outros apps* e do assistente de *Acessibilidade* ativados, além de bateria sem restrições. Em Xiaomi, Samsung, Oppo, Vivo e aparelhos parecidos, permita também a inicialização automática e tire o KidGate de qualquer lista de "apps em suspensão" (veja *Status → Manter o KidGate rodando* no aparelho da criança). No iOS, o bloqueio depende da autorização do Tempo de Uso. Se uma permissão for desligada depois, você receberá um Alerta de Proteção no aparelho do responsável.',

    faq9Q: 'Como bloqueio apps específicos?',
    faq9A:
      'A escolha dos apps acontece no aparelho da criança: abra *KidGate → Configurações*, digite o PIN de responsável, escolha *Escolher apps para bloquear* e salve. Depois, no aparelho do responsável, abra a tela *Apps bloqueados* do aparelho e ative *Ativar bloqueio de apps*. No iOS, a Apple pode esconder os nomes exatos dos apps do aparelho do responsável — é uma limitação da plataforma.',

    faq10Q: 'Por que a localização do meu filho não atualiza?',
    faq10A:
      'A localização precisa estar permitida para o KidGate no aparelho da criança, e o aparelho precisa de conexão de rede. Abra a tela *Localização* do aparelho no celular do responsável e puxe para baixo para atualizar. Modos de economia de bateria podem atrasar as atualizações, e o GPS em ambientes fechados pode ser menos preciso.',

    faq11Q: 'Como removo o KidGate do aparelho do meu filho?',
    faq11A:
      'Remova o aparelho pelo app do responsável primeiro (abra o aparelho em *Família* e escolha remover) e depois desinstale o app no aparelho da criança.',

    faq12Q: 'Como excluo minha conta e meus dados?',
    faq12A:
      'No app do responsável, vá em *Configurações → Conta → Excluir conta*. Isso apaga em definitivo sua conta familiar e todos os dados — aparelhos, atividade, histórico de localização e fotos de SOS — de todos os responsáveis e filhos. Veja nossa página de [Exclusão de conta e dados](/delete-account) para todas as opções, inclusive a exclusão sem ter o app instalado.',

    legalTitle: 'Jurídico',
    legalDeletion: 'Exclusão de conta e dados',
  },

  download: {
    eyebrow: 'Baixar',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 ou posterior. Apple silicon e Intel.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 ou posterior, 64 bits.',
    button: 'Baixar',
    warningSub:
      'O Windows mostra esse aviso para qualquer app instalado fora da loja dele por um desenvolvedor que ainda não está na sua lista verificada — ele não aponta nada encontrado no KidGate. O card do Windows acima explica como permitir. O pacote do Mac é assinado e autenticado pela Apple e não gera nenhum aviso. Baixe somente em kidgate.app.',
    macosSteps:
      'Abra o pacote baixado e siga o instalador. Depois o macOS pede uma vez para você permitir a extensão de sistema do KidGate, em Itens de Início de Sessão e Extensões — o Filtro da web não funciona até você fazer isso.',
    windowsSteps:
      'Quando o Windows disser que protegeu seu PC, escolha Mais informações e depois Executar assim mesmo.',
  },
  about: {
    eyebrow: 'Sobre nós',
    title: 'Controle parental com que a família',
    titleAccent: 'consegue mesmo concordar.',
    lede: 'O KidGate é feito por uma equipe pequena e independente, dedicada a um único produto. Nossa postura é simples: quem cuida precisa poder confiar no que o app diz — inclusive nas partes em que ele diz que não consegue ajudar.',
    storyEyebrow: 'Por que o KidGate existe',
    storyTitle: 'O tempo de tela virou a discussão de toda casa',
    storyP1:
      'Quase toda família tem a mesma noite: um cronômetro que ninguém combinou, um celular tirado da mão e uma criança convencida de que as regras mudaram sem avisar. As ferramentas que deveriam resolver isso quase sempre pioraram: de um lado um bloqueio sem explicação, do outro um painel que parece vigilância.',
    storyP2:
      'Então construímos a versão que queríamos em casa. Você configura uma vez o limite diário, os Horários bloqueados, o Bloqueio de apps e o Filtro da web, e o aparelho respeita isso. A criança vê os mesmos números que os pais veem, pode pedir mais tempo e pode sempre chamar um adulto pelo SOS. O KidGate não finge que não está ali.',
    storyP3:
      'Ele roda em iPhone, Android, Mac e Windows, com uma extensão para o Chrome e um painel que abre em qualquer navegador. Uma família, um plano, todos os aparelhos.',
    valuesEyebrow: 'No que acreditamos',
    valuesTitle: 'Quatro regras que não quebramos',
    valuesSub:
      'As perguntas que mais recebemos, respondidas antes de você precisar fazê-las.',
    value1Title: 'Criança não é suspeita',
    value1Text:
      'As regras ficam visíveis no aparelho em que valem. A criança vê o que está ativo e quanto tempo resta, pode pedir mais e pode acionar o SOS a qualquer momento. Um controle que precisa ser secreto não é um controle sobre o qual a família consegue conversar.',
    value2Title: 'Os dados da sua família não estão à venda',
    value2Text:
      'Nunca há anúncios. Nada sobre uma criança é usado para publicidade nem vendido a terceiros. Você pode apagar a conta da família e tudo o que há nela quando quiser — pelo app ou por este site.',
    value3Title: 'Dizemos o que não conseguimos fazer',
    value3Text:
      'Cada plataforma limita o que um app pode impor. Onde o KidGate faz o melhor possível — fechar um app bloqueado no computador em vez de impedir que ele abra — a tela diz isso, em vez de mostrar um sinal verde.',
    value4Title: 'Uma família, um plano',
    value4Text:
      'Uma assinatura Premium cobre todos os responsáveis e todos os aparelhos das crianças. Limite diário, Horários bloqueados, Apps bloqueados e o Filtro da web continuam funcionando de graça em um dispositivo infantil, então as regras de segurança nunca ficam atrás do paywall.',
    makeEyebrow: 'O que fazemos',
    makeTitle: 'Um KidGate, onde quer que esteja a tela',
    makeSub:
      'As mesmas regras, escritas uma vez, aplicadas com o que cada plataforma permite.',
    make1Title: 'iPhone e iPad',
    make1Text:
      'Limites diários, Horários bloqueados e bloqueio de apps pelo próprio framework Screen Time da Apple.',
    make2Title: 'Android',
    make2Text:
      'Limites, bloqueio de apps, bloqueio em tela cheia e Filtro da web, além de um alerta quando um app novo aparece.',
    make3Title: 'macOS',
    make3Text:
      'O agente de computador num Mac: os mesmos horários e os mesmos limites, e um dia que dá para ler de verdade.',
    make4Title: 'Windows',
    make4Text:
      'O mesmo agente num PC, com um serviço em segundo plano que o inicia de novo se ele for fechado ou encerrado.',
    make5Soon: 'Planejado',
    make5Title: 'Android TV',
    make5Text:
      'A tela da sala, tratada como um aparelho compartilhado da família e não de uma criança só — com os mesmos limites e os mesmos horários dos celulares. Esta versão já rodou em um aparelho real e aguarda o lançamento na loja.',
    make6Title: 'Chrome',
    make6Text:
      'Uma extensão de navegador que leva o mesmo Filtro da web para dentro do Chrome, tanto num computador que já tem o KidGate quanto num que não pode ter. Ela está pronta e conectada, e aguarda a revisão da Chrome Web Store.',
    make7Title: 'Painel dos pais',
    make7Text:
      'O navegador é a segunda tela de quem cuida. Entre de qualquer computador com um código do seu celular; não há nada para instalar.',
    factsEyebrow: 'O KidGate hoje',
    factsTitle: 'Quatro números',
    fact1Label: 'idiomas, do árabe ao vietnamita',
    fact2Label: 'plataformas, mais o painel',
    fact3Label: 'anúncios, nunca',
    fact4Label: 'assinatura por família',
    contactEyebrow: 'Fale com a gente',
    contactTitle: 'Uma pessoa lê cada mensagem',
    contactSub:
      'Uma dúvida, um erro, um recurso de que sua família precisa ou uma tradução que soa errada no seu idioma: escreva para nós.',
    contactEmail: 'Envie um e-mail',
    contactSupport: 'Suporte e guias',
    contactPrivacy: 'Como tratamos os dados',
  },
};
