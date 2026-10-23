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
    crashTitle: 'Esta página parou de funcionar',
    crashBody:
      'Recarregar costuma resolver. As configurações da sua família e os aparelhos do seu filho não mudaram.',
    crashReload: 'Recarregar a página',
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
    plans: 'Planos',
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
    madeFor:
      'Feito para famílias no iPhone, Android, Mac, Windows, Android TV e Chrome.',
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
    chromeName: 'Chrome Web Store',
  },

  home: {
    heroBadge: 'Controle parental, do jeito certo',
    launchCountdown: 'Lançamento em',
    heroTitle: 'Proteja seus filhos',
    heroTitleAccent: 'sem tirar a liberdade deles.',
    heroLede:
      'O KidGate dá aos pais um controle calmo e claro sobre tempo de uso, apps e segurança — enquanto as crianças continuam com um celular que ainda parece delas.',
    heroCheck1: 'Tempo de Uso',
    heroCheck2: 'Apps bloqueados',
    heroCheck3: 'Filtro da web',
    heroCheck4: 'Localização',
    heroCheck5: 'SOS',

    phoneDailyLimit: 'Limite diário',
    phoneBlockedHours: 'Horários bloqueados',
    phoneScheduleOn: 'Agenda ativa',
    phoneLocation: 'Localização',
    phoneCheckIn: 'Check-in OK',

    trust1Title: 'Sem anúncios, nunca',
    trust1Text: 'Os dados das crianças nunca são usados para publicidade',
    trust2Title: 'Exclua quando quiser',
    trust2Text: 'Apague sua conta familiar e todos os dados quando pedir',
    trust3Title: 'Celular, computador e TV',
    trust3Text:
      'iPhone, Android, Mac, Windows, Android TV e Chrome em uma conta de família',
    trust4Title: 'Um plano por família',
    trust4Text: 'Todos os aparelhos de pais e filhos, uma assinatura',

    featuresEyebrow: 'Recursos',
    featuresTitle: 'Tudo o que um pai ou mãe precisa',
    featuresSub:
      'De limites diários a alertas de emergência — um app para o bem-estar digital da família inteira.',
    feature1Title: 'Tempo de Uso e Limite diário',
    feature1Text:
      'Defina um limite diário e Horários bloqueados para a escola e a hora de dormir. O aparelho se bloqueia sozinho quando o tempo acaba.',
    feature2Title: 'Apps bloqueados',
    feature2Text:
      'Escolha quais apps seu filho não pode abrir, com a escolha protegida pelo seu PIN dos pais, e ligue o bloqueio à distância.',
    feature3Title: 'Limites de apps',
    feature3Text:
      'No Android, na Android TV e em computadores, limite cada app separadamente — “meia hora de TikTok” sem precisar proibir de vez.',
    feature4Title: 'Filtro da web e histórico',
    feature4Text:
      'Bloqueie sites adultos, apostas, automutilação e mais em todos os dispositivos; com o Premium, veja também quais sites foram consultados.',
    feature5Title: 'Localização e lugares',
    feature5Text:
      'Veja onde seu filho está até 10 vezes por dia; o Premium adiciona a localização ao vivo e avisos para lugares salvos.',
    feature6Title: 'Check-in e SOS',
    feature6Text:
      'Peça ao seu filho para confirmar que está bem; numa emergência, o celular dele envia um SOS imediato com a localização.',
    feature7Title: 'Alertas de proteção e de apps',
    feature7Text:
      'Saiba na hora em que uma permissão importante é desligada no celular do seu filho e aprove novos apps antes que abram no Android, na Android TV ou num computador.',
    feature8Title: 'Tarefas com recompensa e Solicitações de tempo',
    feature8Text:
      'As crianças ganham minutos extras e estrelas concluindo tarefas, ou pedem mais tempo — você aprova os dois pelo seu celular.',

    feature9Title: 'Bloqueio do dispositivo',
    feature9Text:
      'Bloqueie o aparelho agora e libere quando quiser: o jantar, a lição de casa ou uma regra ignorada.',
    feature10Title: 'Relatório semanal',
    feature10Text:
      'Toda segunda-feira: tempo de tela, a média diária, o que foi bloqueado e como a semana ficou em relação à anterior.',
    feature11Title: 'Histórico do YouTube e de vídeos',
    feature11Text:
      'Os vídeos e os Shorts do YouTube que seu filho assistiu no Android e no Chrome, além dos vídeos na Android TV. Não está disponível no iPhone.',
    feature12Title: 'Feed de atividades',
    feature12Text:
      'Tudo o que aconteceu, em ordem — um dispositivo desbloqueado, um pedido respondido, um alerta enviado; o dia de hoje no plano gratuito, 30 dias no Premium.',
    featurePremium: 'Premium',
    platformsTitle: 'Um só KidGate, onde estiver a tela',
    platformsSub:
      'As mesmas regras e a mesma conta de família no celular, no computador e na Android TV — e o mesmo Filtro da web no Chrome. O app de computador vem deste site, não de uma loja.',

    showcaseEyebrow: 'Painel dos pais',
    showcaseTitle: 'A família inteira em uma tela',
    showcaseSub:
      'Tempo de Uso, tentativas bloqueadas, localização e tudo o que precisa da sua atenção — no seu celular ou em qualquer navegador.',
    showcaseCaption1: 'Leia relatórios de qualquer navegador',
    showcaseCaption2: 'Mudanças aprovadas pelo seu celular',

    setupEyebrow: 'Configuração',
    setupTitle: 'Funcionando em minutos',
    setupSub: 'Sem conhecimento técnico — o app conduz você em cada passo.',
    step1Title: 'Configure seu aparelho',
    step1Text:
      'Instale o KidGate, escolha “Este é um dispositivo dos pais” e entre com Google ou e-mail — ou com Apple, no iPhone.',
    step2Title: 'Conecte o aparelho do seu filho',
    step2Text:
      'Instale o KidGate no celular do seu filho e conecte lendo um QR code. Menos de um minuto.',
    step3Title: 'Defina suas regras',
    step3Text:
      'Escolha um Limite diário e Horários bloqueados, e ative a localização e o bloqueio de apps pelo seu próprio celular. Os apps a bloquear são escolhidos uma vez no dispositivo do seu filho, com o seu PIN dos pais.',

    whyEyebrow: 'Por que o KidGate',
    whyTitle: 'Feito para a confiança, não para a vigilância',
    whySub: 'Pensado para manter aberta a conversa entre pais e filhos.',
    why1Title: 'Um plano, a família toda',
    why1Text:
      'Uma única assinatura Premium cobre todos os aparelhos de pais e filhos, e só o titular da família paga. O plano gratuito mantém um dispositivo infantil monitorado.',
    why2Title: 'Feito para criar os filhos a dois',
    why2Text:
      'Convide um segundo responsável para cuidar das mesmas crianças, com o acesso que o titular aprovar. Uma família pode ter até 3 responsáveis no plano gratuito e durante o teste, e até 6 com o Premium.',
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
      'A Android TV recebe Limite diário, Horários bloqueados, Apps bloqueados e Filtro da web. Na TV, o bloqueio faz o melhor possível — um app bloqueado é mandado de volta para a tela inicial — e não há SOS nem pedido de tempo extra a partir do sofá. A TV também não compartilha localização. A maioria dos controles parentais para no celular.',
    only2Title: 'Alertas de mensagens que ficam no celular',
    only2Text:
      'Com o Premium no Android, as mensagens são conferidas no próprio aparelho contra listas de palavras-chave em até três idiomas que você escolhe, entre 14, e o que sai do celular é a palavra ou frase encontrada, nunca a conversa. Só uma coisa muda isso, e apenas se você pedir: ligue a confirmação por IA e uma mensagem recebida ambígua é enviada ao Gemini, do Google, para ser avaliada, para que você não seja acordado por uma palavra comum.',
    only3Title: 'Todo app, não uma lista de apps',
    only3Text:
      'Os alertas vêm das notificações de qualquer app que seu filho ou filha use — não de uma lista fixa de apps compatíveis — e do que é digitado nos principais apps de conversa, redes sociais e jogos, entre eles Zalo, LINE e KakaoTalk. Só no Android, com o Premium.',
    only4Title: 'Uma saída para a criança',
    only4Text:
      'Segurar o SOS por cinco segundos num celular avisa você na hora, com a localização; no Android, também libera chamadas, mapas e mensagens por cinco minutos, mesmo com o celular bloqueado. Quem consegue pedir ajuda pela tela de bloqueio não tem motivo para brigar com o app.',
    only5Title: 'Regras que valem sem internet',
    only5Text:
      'Horários bloqueados e Limite diário são aplicados no próprio aparelho, então desligar o roteador não muda nada. A TV aceita até o seu PIN dos pais sem conexão nenhuma.',
    only6Title: 'Crédito quando a semana mereceu',
    only6Text:
      'Com o Premium, todo relatório semanal guarda espaço para o que deu certo — um limite respeitado, nenhuma madrugada, uma tarefa concluída — e só diz isso quando a semana foi medida de verdade.',

    faqEyebrow: 'Perguntas frequentes',
    faqTitle: 'O que os pais perguntam primeiro',
    faqSub: 'Respostas rápidas antes de baixar.',
    faq1Q: 'Existe teste gratuito?',
    faq1A:
      'Sim. O teste de 7 dias começa quando seus primeiros dispositivos de responsável e de criança são conectados, e inclui todos os recursos Premium. Quando termina, as regras que você definiu — Limite diário, Horários bloqueados, Apps bloqueados, Filtro da web, Bloqueio do dispositivo, Solicitações de tempo e Tarefas com recompensa — continuam funcionando de graça em todos os dispositivos compatíveis das crianças, e o dispositivo que você escolher manter monitorado continua compartilhando a localização. A atividade ao vivo, o histórico, os relatórios semanais e o rastreamento de localização são o que o Premium traz de volta.',
    faq2Q: 'Quantos aparelhos posso gerenciar?',
    faq2A:
      'O Premium cobre até 25 dispositivos das crianças e 6 responsáveis, contando com você, e todos os dispositivos enviam atividade. O plano gratuito cobre até 8 dispositivos das crianças e 3 responsáveis. Todos os dispositivos seguem aplicando as regras que você definiu, mas só o que você escolher envia atividade; nos outros, essas regras podem ser afrouxadas mas não apertadas.',
    faq3Q: 'Meu filho consegue desinstalar ou burlar o KidGate?',
    faq3A:
      'As configurações sensíveis ficam atrás do seu PIN dos pais, e os Alertas de proteção avisam na hora se uma permissão importante for desligada no aparelho da criança.',
    faq4Q: 'Posso gerenciar tudo pelo computador?',
    faq4A:
      'Sim. O painel dos pais abre em qualquer navegador. Escaneie o código que ele mostra com o app KidGate no seu celular e você vê a mesma família, os mesmos dispositivos e as mesmas configurações, com os controles liberados. Você também pode entrar com a sua conta para consultar; nesse caso, bloquear um dispositivo ou mudar um limite pede o seu PIN dos pais.',
    faq5Q: 'Quanto custa o Premium?',
    faq5A:
      'O Premium custa US$ 4,99 por mês ou US$ 39,99 por ano nos Estados Unidos, cobrado pela App Store ou pelo Google Play e mostrado lá na sua moeda. Um plano Vitalício de pagamento único oferece o mesmo Premium em todos os dispositivos infantis, enquanto o KidGate estiver disponível. O plano gratuito nunca expira.',
    faqMore: 'Mais dúvidas? Veja o Suporte',

    ctaTitle: 'Comece a proteger sua família hoje',
    ctaSub: 'Teste gratuito de 7 dias com acesso completo.',
    ctaNote: 'Cancele quando quiser pela App Store ou pelo Google Play.',
  },

  login: {
    title: 'Entrar como responsável',
    sub: 'Use a mesma conta que você criou no app do KidGate. Entrar aqui mostra a mesma família, aparelhos e configurações.',
    notConfiguredTitle: 'O Firebase não está configurado nesta implantação.',
    notConfiguredBody:
      'Defina as variáveis de ambiente VITE_FIREBASE_* para habilitar o login.',
    qrWhy:
      'Escanear com o celular faz login e desbloqueia os controles de uma vez. Os métodos abaixo fazem login para consulta; desbloquear os controles depois pede seu PIN dos pais.',
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
    step2: 'Toque no ícone de escanear na aba *Família*.',
    step3: 'Leia este código e aprove.',
    waiting: 'Aguardando aprovação · expira em {{time}}',
    signingIn: 'Aprovado. Entrando…',
    expired: 'Este código expirou.',
    failed: 'O login não foi concluído.',
    newCode: 'Mostrar um novo código',
    tryAgain: 'Tentar de novo',
  },

  authAction: {
    checking: 'Verificando o link…',
    resetTitle: 'Escolha uma nova senha',
    newPassword: 'Nova senha',
    confirmPassword: 'Confirme a nova senha',
    mismatch: 'As senhas não coincidem.',
    tooShort: 'A senha deve ter pelo menos 6 caracteres.',
    save: 'Salvar senha',
    saving: 'Salvando…',
    resetDone: 'Senha alterada',
    resetDoneBody: 'Entre com a nova senha, aqui ou no app do KidGate.',
    verifyDone: 'E-mail confirmado',
    verifyDoneBody: 'Volte ao app do KidGate para continuar.',
    invalid: 'Este link expirou ou já foi usado',
    invalidBody: 'Abra o KidGate e peça um novo link.',
  },
  authError: {
    generic: 'Algo deu errado. Tente de novo.',
    invalidEmail: 'Esse e-mail não parece certo.',
    userDisabled: 'Esta conta foi desativada.',
    userNotFound: 'Nenhuma conta do KidGate usa esse e-mail.',
    wrongPassword: 'O e-mail ou a senha estão incorretos. Tente novamente.',
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
    partialLoadFailed:
      'Parte desta página não carregou, então uma lista pode parecer vazia sem estar.',
    noAccessTitle: 'Nenhuma família nesta conta',
    noAccess:
      'Esta conta não tem acesso a nenhuma família do KidGate. Entre com a conta de responsável que você usa no app.',
    noFamily:
      'Esta conta ainda não tem uma família do KidGate. Se você usa o KidGate no celular, saia e entre aqui com a mesma conta. Para criar uma família, configure-a no celular e depois recarregue esta página.',
    noFamilyStep1:
      'Instale o KidGate no celular, escolha *Este é um dispositivo dos pais* e entre com esta conta.',
    noFamilyStep2:
      'Abra *Família* e escolha *Criar família*, ou *Entrar em uma família* se outro responsável convidou você.',
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
    bypass: 'Apps para burlar o controle',
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
    tabApps: 'Apps',
    tabWeb: 'Web',
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

    lastActive: 'Última atividade {{when}}',
    appVersion: 'Versão do app',
    appVersionUpdate: '{{running}} · {{latest}} disponível',
    appVersionRestart: '{{running}} · reabra o app para concluir',
    checkIn: 'Check-in',
    sending: 'Enviando…',
    lockDevice: 'Bloquear aparelho',
    unlock: 'Desbloquear',
    working: 'Processando…',
    save: 'Salvar',

    unlockTitle: 'As alterações estão bloqueadas.',
    unlockBody:
      'Consultar funciona na hora. Para bloquear um aparelho, mudar limites ou aprovar pedidos, desbloqueie este navegador com o seu PIN dos pais — ou aprove escaneando o QR code com o app KidGate. Os Check-ins funcionam dos dois jeitos.',
    unlockCta: 'Desbloquear alterações',
    unlockToChange: 'Desbloqueie as alterações primeiro',
    refresh: 'Atualizar',
    liveOnApp: 'Abra o app para ver em tempo real',
    pinTitle: 'Digite seu PIN dos pais',
    pinBody:
      'Os mesmos seis dígitos que você usa no app. Este navegador fica desbloqueado por 8 horas; aprovar pelo app o mantém conectado por 7 dias.',
    pinLabel: 'PIN dos pais',
    pinSubmit: 'Desbloquear',
    pinOrScan: 'Ou aprove pelo celular',
    qrSaferNote:
      'Aprovar pelo celular é o mais seguro dos dois: exige o celular vinculado em mãos, enquanto o PIN são seis dígitos que alguém da família pode ter visto você digitar.',
    pinWrong: 'PIN incorreto. Tentativas restantes: {{count}}.',
    pinLocked:
      'Tentativas erradas demais. Espere 15 minutos ou aprove este navegador pelo celular.',
    pinNotSet:
      'Sua família ainda não tem PIN dos pais. Defina um no app ou aprove este navegador pelo celular.',
    unlockedToast: 'Alterações desbloqueadas neste navegador.',
    close: 'Fechar',

    noDeviceBody:
      'Abra o KidGate no seu celular, vá em *Família* e toque no ícone de escanear (*Escanear código*). Leia o QR code no aparelho do seu filho ou digite o código de 6 caracteres dele. Depois, clique em *Atualizar* aqui.',
    pairStep2Title: 'Escaneie o código com o celular',
    getKidGate: 'Baixar o KidGate',
    childNoDevices:
      'Ainda não há dispositivos. Pareie um e escolha esta criança quando o app perguntar quem o usa.',
    childNoDevicesAssign:
      'Ainda não há dispositivos. Atribua um abaixo ou pareie um novo.',

    toastCheckIn: '{{name}} vai receber um pedido de Check-in.',
    toastTimeApproved: 'Tempo extra aprovado.',
    toastCheckInResent: 'Check-in enviado de novo.',

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
    cardRecent: 'Atividade recente',
    cardRecentSub: 'Mais recentes primeiro',
    cardRecentEmpty:
      'Nada registrado ainda. Bloqueios, apps bloqueados, alertas de locais e sincronizações de tempo de uso deste aparelho vão aparecer aqui.',
    cardAttention: 'Precisa da sua atenção',
    cardAttentionSub: '{{count}} em aberto',
    cardAttentionEmpty: 'Nada para revisar. As proteções parecem saudáveis.',
    cardProtection: 'Saúde da proteção',
    cardProtectionSub: 'Verificado {{when}}',

    attnMoreMinutes: '{{name}} pediu mais {{minutes}} minutos',
    attnReason: '“{{reason}}” · {{when}}',
    attnCheckInMissed: 'Um Check-in foi perdido',
    attnCheckInMissedMeta: 'Enviado {{when}} · sem resposta',
    attnLimitReached: 'Limite diário atingido — aparelho bloqueado',
    attnBatteryLow: 'Bateria fraca ({{level}}%)',
    attnBatteryLowMeta:
      'As atualizações de localização podem parar se o celular desligar',
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
    trendTitle: 'Tendência do Tempo de Uso',
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
    appUsageEmpty: 'Ainda não há uso de apps registrado.',
    appBlockingTitle: 'Apps bloqueados',
    blockingLabel: 'Bloqueio',
    appsBlocked: 'Apps bloqueados',
    categories: 'Categorias',
    perAppHint:
      'Os limites por app funcionam à parte da lista de bloqueio — “30 minutos de TikTok” é uma decisão diferente de “nada de TikTok”.',
    limitsMax: 'Um aparelho guarda no máximo {{max}} apps limitados.',
    perDay: '{{value}}/dia',
    webActivityTitle: 'Atividade na web',
    webActivitySub: 'Domínios mais visitados, últimos 7 dias',
    webActivityEmpty: 'Ainda não há atividade na web.',
    inventoryEmpty: 'Este dispositivo ainda não publicou sua lista de aplicativos.',
    inventoryFirstScan:
      'Primeira verificação, então o KidGate não sabe quando cada um chegou.',
    inventoryOtherLabel: 'Identificados',
    inventoryUnknownLabel: 'Não identificados',
    installAllow: 'Permitir',
    toastInstallAllowed: 'App permitido',
    rowInstallApprovalDesc: '{{count}} apps aguardando aprovação',
    rowInstallApprovalDesc_one: '{{count}} app aguardando aprovação',
    rowInstallApprovalDescIos:
      'Oculta a App Store — a Apple não permite aprovação app por app',
    colDomain: 'Domínio',
    colVisits: 'Visitas',
    colBlocked: 'Bloqueadas',
    colLastSeen: 'Visto por último',
    videosSub: 'O que foi assistido no YouTube e na web',
    videosEmpty: 'Nenhum vídeo ainda.',
    colVideo: 'Vídeo',
    colChannel: 'Canal',
    colViews: 'Visualizações',
    filterRefusedTitle: 'O que o filtro recusou',
    filterRefusedSub_one: '{{count}} consulta bloqueada, últimos 7 dias',
    filterRefusedSub_other: '{{count}} consultas bloqueadas, últimos 7 dias',
    filterHintIos:
      'Este iPhone ou iPad filtra apenas com o controle de conteúdo adulto da Apple. Atualize o KidGate nele e permita a VPN do KidGate para bloquear por categoria.',
    filterHintAndroid: 'As categorias são aplicadas pelo filtro DNS no aparelho.',

    locationTitle: 'Localização',
    locationUpdated: 'Atualizado {{when}}',
    locationWaiting: 'Aguardando a primeira atualização',
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
    sosSub: 'Sinais de emergência do aparelho da criança',
    sosEmpty:
      'Nenhum alerta de SOS. Testem juntos uma vez para os dois saberem como funciona.',
    sosAcknowledged: 'confirmado',
    sosActive: 'ativo',

    checkInsTitle: 'Check-ins',
    checkInsSub: 'Peça ao seu filho para confirmar que está bem',
    checkInSafe: 'Confirmou que está bem',
    checkInPhotoRequested: 'foto e localização foram pedidas',
    checkInNoReply: 'ainda sem resposta',
    checkInPhotoSkipped: 'foto ignorada',
    checkInPhotoAttached: 'foto anexada',
    checkInNoPhoto: 'nenhuma foto pedida',
    sendCheckIn: 'Enviar um Check-in agora',

    protectionAlertsTitle: 'Alertas de proteção',
    protectionAlertsSub_one: '{{count}} evento desde a instalação',
    protectionAlertsSub_other: '{{count}} eventos desde a instalação',

    limitCardTitle: 'Limite diário',
    limitCardSub: 'Limite os minutos disponíveis a cada dia',
    limitAria: 'Minutos do limite diário',
    limitScaleMin: '30 min',
    limitScaleMax: '8 h',
    limitHint:
      'Os minutos de bônus das tarefas com recompensa e das solicitações de tempo aprovadas entram por cima, só naquele dia.',
    limitShared: 'Compartilhado entre todos os dispositivos',
    limitSharedSpent: 'Hoje foram usados {{used}} de {{limit}}',
    limitSharedHint:
      'É o dia inteiro desta criança, não um limite deste dispositivo — cada dispositivo recebe o que os outros não usaram. Altere isso no app KidGate.',
    whatsOnSub: 'As mudanças sincronizam com o aparelho da criança',
    rowBlockedHours: 'Horários bloqueados',
    rowBlockedHoursDesc_one: '{{count}} faixa de horário · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} faixas de horário · {{list}}',
    rowAppBlocking: 'Apps bloqueados',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Filtro da web',
    rowWebFilterDesc_one: '{{count}} categoria recusada',
    rowWebFilterDesc_other: '{{count}} categorias recusadas',
    rowNotSupported: 'Não compatível com este dispositivo',
    rowLocation: 'Compartilhamento de localização',
    rowLocationDesc: 'Última atualização {{when}}',
    rowLocationNone: 'Sem localização ainda',
    rowSearchMonitoring: 'Monitoramento de buscas',
    rowSafeSearchDesc:
      'Fixa o Google SafeSearch, o Bing e o DuckDuckGo na configuração rigorosa no Android, na Android TV e no Chrome. No Android e no Chrome, fixa também o Modo restrito do YouTube, que oculta os comentários e bloqueia alguns vídeos comuns.',

    webFilterCatsTitle: 'Categorias do filtro da web',
    webFilterCatsSub: 'Tipos de conteúdo bloqueados',
    dnsHint:
      'Os resolvedores de DNS criptografado são sempre recusados enquanto o filtro funciona — deixá-los acessíveis é o que permite a um navegador contornar todas as outras categorias.',
    starChartTitle: 'Quadro de estrelas',
    starChartSub: 'Estrelas conquistadas nesta semana, por filho',
    starChartEmpty:
      'Adicione um segundo filho no aplicativo para começar o quadro de estrelas.',
    starChartStars: '{{count}} estrelas',
    rewardTasksTitle: 'Tarefas com recompensa',
    rewardTasksSub: 'Ganhe minutos extras concluindo tarefas',
    rewardTaskMeta: '+{{minutes}} min · {{cadence}}',
    rewardTaskStars: 'Dificuldade: {{count}} de 3',
    rewardTaskWaiting: ' · aguardando sua aprovação',
    approve: 'Aprovar',
    siteRequestAllow: 'Permitir',
    siteRequestDeny: 'Agora não',
    attnSiteRequest: '{{name}} pediu para abrir {{domain}}',
    timelineSub: 'Hoje, de meia-noite a meia-noite. O verde é o tempo no dispositivo.',
    timelineSubDay:
      '{{date}}, de meia-noite a meia-noite. O verde é o tempo no dispositivo.',
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
    writtenAt: 'Escrito em {{when}}',
    shareImage: 'Salvar como imagem',
    sharePdf: 'Salvar como PDF',
    imageSaved: 'Imagem salva.',
    shareFailed: 'Não foi possível salvar a partir deste navegador. Copie o resumo.',
    emptyBody:
      'Com o Premium, um relatório chega toda segunda-feira de manhã e cobre os sete dias anteriores. Você também pode criar o desta semana no app KidGate, no celular.',
    loadFailed:
      'Não foi possível abrir os relatórios. Recarregue a página para tentar de novo.',
    retryLoad: 'Tentar de novo',
    existed: 'Esta semana já tinha um relatório — aqui está.',
  },

  support: {
    title: 'Suporte do KidGate',
    updated: 'Estamos aqui para ajudar',

    contactTitle: 'Fale conosco',
    contactEmail: '**E-mail:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Tempo de resposta:** normalmente em até um dia útil',
    contactNote:
      'Ao entrar em contato, inclua o e-mail da sua conta de responsável do KidGate e uma breve descrição do problema para podermos ajudar mais rápido.',

    startTitle: 'Primeiros passos',
    start1:
      '**1. Configure o dispositivo dos pais.** Instale o KidGate, abra o app e escolha *Este é um dispositivo dos pais*. Entre com Google ou e-mail (ou com Apple, no iPhone) e dê um nome à sua família.',
    start2:
      '**2. Defina um PIN dos pais.** Vá em *Ajustes → Segurança* e crie um PIN de 6 dígitos. Você precisa dele para mudar configurações sensíveis e escolher apps bloqueados no aparelho da criança. Não compartilhe com seus filhos.',
    start3:
      '**3. Conecte o aparelho da criança.** Instale o KidGate no aparelho do seu filho e abra-o. Em um celular ou tablet, escolha *Este é um dispositivo de uma criança*. No aparelho do responsável, abra *Família* e toque no ícone de escanear (*Escanear código*), depois leia o QR code exibido no aparelho da criança (ou digite o código de 6 caracteres). Se o aparelho da criança pedir, confirme a conexão nele; a TV se conecta sozinha.',
    start4:
      '**4. Conceda permissões no aparelho da criança.** Abra a tela *Status* no aparelho da criança e toque em *Continuar configuração* — ela conduz você por todas as permissões de que o KidGate precisa. No Android: notificações, Acesso de uso, Exibir sobre outros apps, Assistente de bloqueio por Acessibilidade, Alarmes e lembretes, Bateria sem restrições, a conexão VPN em que o Filtro da web funciona, a proteção contra desinstalação e, para os Alertas de mensagens, o acesso às notificações; no iOS: *Permitir uso de apps e sites* (Tempo de Uso) e, para o Filtro da web, *Permitir* quando o iOS pedir para adicionar configurações de VPN. Os controles não funcionarão por completo até que estejam ligados.',
    start5:
      '**5. Configure os controles.** No aparelho do responsável, abra o cartão do aparelho da criança e defina o limite diário, os horários bloqueados, os apps bloqueados, o filtro da web e os recursos de localização.',
    startNote:
      'O app também traz um guia passo a passo: *Ajustes → Guia do usuário*, com detalhes sobre conexão de aparelhos, permissões, controles do dia a dia e recursos de segurança.',

    faqTitle: 'Perguntas frequentes',

    faq1Q: 'Posso gerenciar minha família pelo computador?',
    faq1A:
      'Sim. Abra o [painel web](/dashboard) e escaneie o código que ele mostra com o app KidGate no seu celular — ou entre com a mesma conta que você usa no app: Google, Apple ou seu e-mail e senha. Ele mostra a mesma família, dispositivos, relatórios e configurações. Quando você entra com uma conta, mudar um controle pede o seu PIN dos pais. Contas e conexão de dispositivos continuam sendo feitas no app para celular.',

    faq2Q: 'Como conecto os aparelhos do responsável e da criança?',
    faq2A:
      'No aparelho da criança, abra o KidGate. Em um celular ou tablet, escolha *Este é um dispositivo de uma criança*. Aparecerão um QR code e um código de 6 caracteres. No aparelho do responsável, abra *Família* e toque no ícone de escanear (*Escanear código*), em seguida leia o QR code (recomendado) ou digite o código. Se o aparelho da criança pedir, confirme nele o nome do responsável; a TV se conecta sozinha. Os códigos expiram — se a conexão falhar, toque em *Novo código* no aparelho da criança e tente de novo.',

    faq3Q: 'Dois responsáveis podem gerenciar a mesma família?',
    faq3A:
      'Sim. No aparelho do titular da família, abra *Família → + → Convidar um responsável* e compartilhe o QR code ou o código de convite. O outro responsável instala o KidGate, entra como responsável, abre *Família* e toca no ícone de escanear (*Escanear código*), depois lê o QR code ou digita o código de convite ali. Em seguida, o titular aprova o pedido. Uma família pode ter até 3 responsáveis no plano gratuito e durante o teste, e até 6 com o Premium. Uma assinatura cobre a família inteira; só o titular paga.',

    faq4Q: 'Como funciona o teste gratuito?',
    faq4A:
      'O teste de 7 dias começa quando seus primeiros dispositivos de responsável e de criança são conectados, e dá acesso completo a todos os recursos. Remover um dispositivo infantil não reinicia o teste. Quando termina, todas as regras continuam funcionando de graça e um dispositivo infantil à sua escolha continua enviando dados; o Premium traz de volta a atividade ao vivo, o histórico, os relatórios semanais e o envio de dados de todos os dispositivos.',

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
      'No Android, o bloqueio precisa de *Exibir sobre outros apps* e do assistente de *Acessibilidade* ativados, além de bateria sem restrições. Em Xiaomi, Samsung, Oppo, Vivo e aparelhos parecidos, permita também a inicialização automática e tire o KidGate de qualquer lista de “apps em suspensão” (veja *Status → Permitir inicialização automática* no aparelho da criança). No iOS, o bloqueio depende da autorização do Tempo de Uso. Se uma permissão for desligada depois, você receberá um alerta de proteção no dispositivo dos pais.',

    faq9Q: 'Como bloqueio apps específicos?',
    faq9A:
      'A escolha dos apps acontece no dispositivo da criança: abra *KidGate → Ajustes*, toque em *Desbloquear com o PIN dos pais*, abra *Apps bloqueados*, escolha os apps e salve. Depois, no dispositivo dos pais, abra a tela *Apps bloqueados* desse dispositivo e ative *Ativar o bloqueio de apps*. No iOS, a Apple pode esconder os nomes exatos dos apps do dispositivo dos pais — é uma limitação da plataforma.',

    faq10Q: 'Por que a localização do meu filho não atualiza?',
    faq10A:
      'A localização precisa estar permitida para o KidGate no dispositivo da criança, e o dispositivo precisa de conexão de rede. No dispositivo dos pais, abra a tela *Localização* desse dispositivo e toque em *Atualizar localização*. Modos de economia de bateria podem atrasar as atualizações, e o GPS em ambientes fechados pode ser menos preciso.',

    faq11Q: 'Como removo o KidGate do aparelho do meu filho?',
    faq11A:
      'Remova o aparelho pelo app do responsável primeiro (abra o aparelho em *Família* e escolha remover) e depois desinstale o app no aparelho da criança.',

    faq12Q: 'Como excluo minha conta e meus dados?',
    faq12A:
      'No app dos pais, vá em *Ajustes → Conta → Excluir conta*. Depois de um prazo de 14 dias, durante o qual você pode cancelar, isso apaga em definitivo sua conta familiar e todos os dados — aparelhos, atividade, histórico de localização e fotos de SOS — de todos os responsáveis e filhos. Veja nossa página de [Exclusão de conta e dados](/delete-account) para todas as opções, inclusive a exclusão sem ter o app instalado.',

    legalTitle: 'Jurídico',
    legalDeletion: 'Exclusão de conta e dados',
  },

  deleteAccount: {
    title: 'Exclusão de conta e dados',
    updated: 'Última atualização: 18 de setembro de 2026',
    intro:
      'Esta página explica como excluir sua conta do KidGate e os dados associados a ela. Você pode solicitar a exclusão a qualquer momento e não precisa ter o app instalado para isso.',
    option1Title: 'Opção 1: exclua sua conta no app',
    option1Step1: 'Abra o app KidGate e entre na sua conta.',
    option1Step2: 'Vá em *Ajustes → Conta → Excluir conta*.',
    option1Step3: 'Confirme a exclusão.',
    option2Title: 'Opção 2: solicite a exclusão por e-mail',
    option2Step1:
      'Envie um e-mail para [support@kidgate.app](mailto:support@kidgate.app?subject=Account%20Deletion%20Request) com o assunto “Account Deletion Request”.',
    option2Step2:
      'Envie a solicitação do endereço de e-mail associado à sua conta do KidGate, para que possamos verificar sua identidade.',
    option2Step3:
      'Vamos confirmar sua solicitação e agendar a exclusão. Ela fica em espera por 14 dias, período em que você pode cancelá-la; depois disso, é executada e não pode ser desfeita.',
    deletedTitle: 'O que é excluído',
    deletedIntro: 'Excluir sua conta remove permanentemente:',
    deleted1: 'As informações da sua conta de responsável (nome, endereço de e-mail).',
    deleted2: 'Todos os perfis de crianças que você criou.',
    deleted3:
      'Todos os dados de atividade coletados dos aparelhos gerenciados, incluindo uso de apps, histórico de tempo de tela, atividade de navegação, histórico de localização e fotos de Check-in e de SOS.',
    deleted4: 'Suas configurações e preferências de controle parental.',
    deleted5:
      'As solicitações de suporte que você enviou, com qualquer captura de tela anexada a elas.',
    deleted6: 'O seu próprio login, de modo que a conta não possa ser usada novamente.',
    retentionTitle: 'Prazos de retenção',
    retention1:
      'Os dados são excluídos quando termina o período de espera de **14 dias** de uma solicitação verificada. A exclusão é permanente e não há exportação depois.',
    retention2:
      'Um registro de que a exclusão foi solicitada e concluída — um hash do seu endereço de e-mail e as datas, nada mais — é mantido por **12 meses**, para que seja possível responder caso a exclusão seja contestada.',
    retention3:
      'Podemos reter um conjunto mínimo de registros quando a lei exigir (por exemplo, registros de transações para fins fiscais), apenas pelo tempo exigido por lei.',
    partialTitle: 'Exclusão parcial',
    partial:
      'Você pode remover uma criança ou um aparelho no app, o que interrompe a coleta de dados dele. O histórico já coletado expira conforme o cronograma da Política de Privacidade (30 dias para o histórico de uso, da web e de localização e para o feed de atividades; 90 dias para SOS, Check-in e Solicitações de tempo); para que seja excluído antes, escreva para [support@kidgate.app](mailto:support@kidgate.app).',
    moreInfo:
      'Para mais detalhes sobre como tratamos seus dados, consulte nossa [Política de Privacidade](/privacy-policy).',
  },

  download: {
    eyebrow: 'Baixar',
    qrScan: 'Aponte a câmera do celular para baixar o app',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 ou posterior, em um Mac com Apple silicon.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 ou posterior, 64 bits.',
    button: 'Baixar',
    warningSub:
      'O Windows mostra um aviso do SmartScreen para qualquer app instalado fora da loja dele por um desenvolvedor que ainda não está na sua lista verificada — ele não aponta nada encontrado no KidGate. O card do Windows acima explica como permitir. O pacote do Mac é assinado com um Apple Developer ID e autenticado pela Apple, por isso não gera nenhum aviso. Baixe somente em kidgate.app.',
    macosSteps:
      'Abra o pacote baixado e siga o instalador. Depois o macOS pede uma vez para você permitir a extensão de sistema do KidGate: abra os ajustes que essa mensagem indica e permita a extensão ali. O Filtro da web não funciona até você fazer isso. Depois de instalado, o KidGate continua funcionando pelo ícone na barra de menus; clique no ícone para abrir a janela.',
    windowsSteps:
      'Seu navegador pode avisar primeiro que o arquivo não costuma ser baixado — escolha mantê-lo. Em seguida, quando o Windows disser que protegeu seu PC, escolha Mais informações e depois Executar assim mesmo. Depois de instalado, o KidGate continua funcionando pelo ícone na área de notificação; clique no ícone para abrir a janela.',
  },
  about: {
    eyebrow: 'Sobre nós',
    title: 'Ajudar as crianças a usar a tecnologia com mais segurança,',
    titleAccent: 'e as famílias a se preocuparem um pouco menos.',
    lede: 'Celular, computador e TV já fazem parte da vida de uma criança. Isso não é necessariamente ruim — o que importa é como ela usa, por quanto tempo e se está protegida de conteúdos que não são para ela. O KidGate ajuda os pais a definir os limites que importam de um jeito simples, transparente e justo — para pais e filhos.',
    storyEyebrow: 'Por que o KidGate existe',
    storyTitle: 'Tudo começa num momento que toda família conhece',
    storyP1:
      '“Só mais cinco minutinhos!” Aí os cinco minutos passam. O pai ou a mãe pede de novo, a criança fica chateada, e uma coisa pequena vira uma briga que ninguém queria. Não achamos que toda família precise de regras mais rígidas. Às vezes, o que falta são regras claras, que todo mundo entende e em que todo mundo confia.',
    storyP2:
      'Com o KidGate, os pais configuram uma vez o Limite diário, os Horários bloqueados, os Apps bloqueados e o Filtro da web, e depois as regras funcionam sozinhas, até onde cada dispositivo permite. As crianças também veem os próprios limites, sabem quando o dispositivo vai bloquear e podem pedir mais tempo quando precisarem.',
    storyP3:
      'Os pais não precisam lembrar todo dia. As crianças não precisam adivinhar se as regras mudaram hoje. Menos brigas, mais tempo juntos.',
    valuesEyebrow: 'O que importa para nós',
    valuesTitle: 'Aquilo de que nunca abrimos mão',
    valuesSub: 'Toda função do KidGate começa por estas quatro coisas.',
    value1Title: 'Transparente com pais e filhos',
    value1Text:
      'As crianças têm o direito de conhecer as regras do próprio dispositivo. Os pais têm as ferramentas para protegê-las; as crianças podem entender seus limites, pedir mais tempo e chamar um responsável pelo SOS nos dispositivos compatíveis. Queremos que a tecnologia ajude a família a se entender, não a se afastar.',
    value2Title: 'A privacidade da sua família é respeitada',
    value2Text:
      'O KidGate não mostra anúncios e nunca vende os dados do seu filho para ninguém. Você pode pedir que a gente apague a conta da família e os dados ligados a ela — pelo próprio app ou por e-mail, como este site explica — e tudo é apagado 14 dias depois, seguindo o processo que publicamos.',
    value3Title: 'Sinceros sobre o que o KidGate consegue fazer',
    value3Text:
      'Cada dispositivo tem seus próprios limites, então algumas funções funcionam de um jeito diferente no iPhone, no Android, no Mac, no Windows e na TV. A gente avisa isso na tela, em vez de prometer que tudo funciona igual em todo lugar. Proteger uma família exige boas ferramentas e informações em que você possa confiar.',
    value4Title: 'Uma família, um plano Premium',
    value4Text:
      'Uma única assinatura Premium cobre todos os responsáveis e todos os dispositivos das crianças — nada de comprar aparelho por aparelho. Sem ela, Limite diário, Horários bloqueados, Apps bloqueados, Bloqueio do dispositivo e o Filtro da web continuam funcionando nos dispositivos compatíveis, e o SOS nunca fica atrás do paywall — porque as ferramentas essenciais de segurança devem estar sempre ao alcance.',
    makeEyebrow: 'O que fazemos',
    makeTitle: 'Um app, vários dispositivos',
    makeSub:
      'As crianças usam o celular quando saem, o computador para a escola e a TV para relaxar, então cuidar delas não deveria parar em um único aparelho. Cada plataforma tem seus pontos fortes, mas o objetivo é o mesmo: mais fácil para os pais, mais claro para as crianças.',
    make1Title: 'iPhone e iPad',
    make1Text:
      'Limite diário, Horários bloqueados e Apps bloqueados com base no próprio Tempo de Uso da Apple, e o Filtro da web direto no dispositivo.',
    make2Title: 'Android',
    make2Text:
      'Limites, Apps bloqueados, bloqueio de tela e o Filtro da web, além de um aviso quando seu filho instala um app novo.',
    make3Title: 'macOS',
    make3Text:
      'Os mesmos horários e os mesmos limites dos celulares, além de um resumo diário que os pais leem num piscar de olhos.',
    make4Title: 'Windows',
    make4Text:
      'As mesmas regras num PC, e o KidGate volta a abrir sozinho se for fechado ou encerrado.',
    make5Title: 'Android TV',
    make5Text:
      'A tela que a família toda divide na sala, com os mesmos limites e os mesmos horários dos celulares. A TV não compartilha localização nem tem SOS.',
    make6Title: 'Chrome',
    make6Text:
      'A extensão para o Chrome leva o Filtro da web para o navegador, até num computador que não pode ter o KidGate. Quando você ativa essas opções, ela também registra os vídeos do YouTube que seu filho assistiu, sinaliza buscas preocupantes e mostra quais outras extensões estão instaladas. Ela não mede o tempo de tela nem bloqueia apps.',
    make7Title: 'Painel dos pais',
    make7Text:
      'Cuide da família toda pelo navegador de qualquer computador. Entre escaneando um código com o celular — sem instalar nada.',
    factsEyebrow: 'O KidGate hoje',
    factsTitle: 'Quatro números',
    fact1Label: 'idiomas, para cada família usar o seu',
    fact2Label: 'plataformas, mais o painel na web',
    fact3Label: 'anúncios no KidGate',
    fact4Label: 'plano Premium para a família toda',
    contactEyebrow: 'Estamos ouvindo',
    contactTitle: 'Uma pessoa lê cada mensagem',
    contactSub:
      'Algo que não funciona como esperado, um recurso de que sua família precisa ou uma tradução que não soa natural no seu idioma — escreva para nós. Cada mensagem ajuda a deixar o KidGate mais útil para as famílias que o usam todos os dias.',
    contactEmail: 'Envie um e-mail',
    contactSupport: 'Suporte e guias',
    contactPrivacy: 'Como tratamos os dados',
  },
  promo: {
    intro: 'O dia inteiro do seu filho, com toda a tranquilidade.',
    school: 'Começou a aula. O celular se bloqueia sozinho.',
    apps: 'Os apps que você bloqueia não abrem.',
    arrive: 'Chegou na casa da vovó, e você recebe uma notificação.',
    checkIn: 'Você pergunta como ele está. Com um toque, ele confirma que está bem.',
    sos: 'Se algo der errado, um SOS mostra onde ele está.',
    limit: 'Acabou o tempo de jogo. O celular se bloqueia sozinho.',
    lockNow: 'O jantar está pronto. Bloqueie o celular dele pelo seu.',
    web: 'Bloqueie sites nocivos em todos os dispositivos.',
    tv: 'A TV da sala segue as mesmas regras da casa.',
    reward: 'Lição de casa feita: 15 minutos extras ganhos.',
    bedtime: 'Na hora de dormir, celular, computador e TV também vão dormir.',
    kid: 'Filho',
    parent: 'Pais',
    arrivedNotice: 'Ana chegou na casa da vovó',
    checkAsk: 'Tudo bem?',
    checkReply: 'Estou bem',
    sosNotice: 'Ana enviou um SOS',
    timeUp: 'Acabou o tempo de jogo hoje',
    lockButton: 'Bloquear agora',
    task: 'Lição de casa feita',
    granted: '+15 min',
    youtubeTitle: 'KidGate — Controle parental para celular, computador e TV',
    youtubeDescription:
      'Um dia comum com o KidGate, do sinal da escola até a hora de dormir.',
  },
  setup: {
    parentTitle: 'Configure seu celular',
    parentSub: 'O primeiro passo. Leva só alguns minutos.',
    install: 'Procure “KidGate” na App Store ou no Google Play e instale.',
    installSub: 'iPhone, iPad ou celular Android.',
    role: 'Abra o KidGate e escolha “{{parent}}”.',
    signIn: 'Toque em “{{signIn}}” e escolha Apple, Google ou e-mail.',
    signInSub: 'Com a Apple, é só confirmar com o Face ID.',
    family: 'Na “{{tab}}”, toque em “{{create}}” e dê um nome à sua família.',
    done: 'Sua parte está feita.',
    parentYoutubeTitle: 'Como configurar o KidGate no seu celular',
    parentYoutubeDescription:
      'Instale o KidGate, entre e crie sua família: o primeiro passo antes de conectar os aparelhos do seu filho.',
    pairSub: 'Conecte-o ao seu celular e depois ative a proteção.',
    parentPhone: 'Seu celular',
    openSub: 'Aparece um QR code. Deixe essa tela aberta.',
    scanSub: 'Não conseguiu ler? Escolha “{{manual}}”.',
    protect: 'Toque em “{{turnOn}}” para começar com um conjunto de regras seguras.',
    protectSub: 'Você pode ajustar cada uma depois.',
    tapAllow: 'Toque em “{{allow}}”.',
    extras: 'Por fim, permita o acesso à câmera e ao microfone.',
    extrasSub:
      'Opcional: assim seu filho pode anexar uma foto ou uma gravação a um SOS.',
    iosTitle: 'Configure o iPhone ou iPad do seu filho',
    childPhone: 'iPhone da criança',
    iosOpen: 'No iPhone do seu filho, abra o KidGate e escolha “{{child}}”.',
    iosScan: 'No seu celular, toque em “{{add}}” e leia o QR code.',
    iosConfirm: 'No iPhone do seu filho, confira se é você e toque em “{{yes}}”.',
    iosPin: 'Crie seu “{{pin}}” (6 dígitos).',
    iosPinSub:
      'O iPhone do seu filho pede esse PIN antes de qualquer mudança nos apps bloqueados.',
    iosAssign: 'Escolha quem usa este iPhone ou adicione seu filho pelo nome.',
    iosScreenTime:
      'No iPhone do seu filho, toque em “{{allow}}” e permita o Tempo de Uso.',
    iosScreenTimeSub: 'A Apple pede o Face ID ou o código deste iPhone.',
    iosNotify:
      'Toque em “{{settings}}”, ative as {{notifications}} e volte ao KidGate.',
    iosRefresh: 'Toque em “{{settings}}” e ative “{{refresh}}”.',
    iosRefreshSub: 'Opcional: mantém o KidGate funcionando em segundo plano.',
    iosBlocked: 'Toque em “{{strengthen}}” e depois configure “{{blocked}}”.',
    iosBlockedSub: 'Você toca em “{{unlock}}”, digita seu PIN e escolhe os apps.',
    iosDone: 'O iPhone do seu filho está protegido.',
    iosYoutubeTitle: 'Como configurar o KidGate no iPhone ou iPad do seu filho',
    iosYoutubeDescription:
      'Conecte o iPhone ou iPad do seu filho ao seu celular com um QR code. Depois, ative o Tempo de Uso e as outras permissões de que o KidGate precisa, passo a passo.',
    androidTitle: 'Configure o celular ou tablet Android do seu filho',
    childAndroid: 'Android da criança',
    androidOpen: 'No celular do seu filho, abra o KidGate e escolha “{{child}}”.',
    androidScan: 'No seu celular, leia o QR code com o KidGate.',
    androidConfirm: 'No celular do seu filho, confira se é você e toque em “{{yes}}”.',
    androidAssign: 'Escolha quem usa este celular ou adicione seu filho pelo nome.',
    androidUsage:
      'No celular do seu filho, toque em “{{open}}” e ative o Acesso de uso para o KidGate.',
    androidBack: 'Depois, deslize para voltar ao KidGate.',
    androidAccessibility: 'Toque em “{{agree}}” e ative o KidGate em Acessibilidade.',
    androidOverlay: 'Toque em “{{settings}}” e permita “{{overlay}}” para o KidGate.',
    androidNotify: 'Toque em “{{allow}}” e depois autorize as notificações.',
    androidWebFilter: 'Toque em “{{enable}}” e permita a conexão.',
    androidWebFilterSub:
      'O {{filter}} do KidGate funciona no próprio celular, como uma VPN.',
    androidBattery:
      'Toque em “{{settings}}” e permita que o KidGate funcione sempre em segundo plano.',
    androidStrengthen: 'Toque em “{{strengthen}}” e depois ative “{{uninstall}}”.',
    androidMessages:
      'Em “{{alerts}}”, toque em “{{grant}}” e ative o acesso para o KidGate.',
    androidMessagesSub:
      'O KidGate procura palavras preocupantes nas mensagens recebidas, no próprio celular.',
    androidDone: 'O celular Android do seu filho está protegido.',
    androidYoutubeTitle:
      'Como configurar o KidGate no celular ou tablet Android do seu filho',
    androidYoutubeDescription:
      'Conecte o celular ou tablet Android do seu filho ao seu celular com um QR code. Depois, ative as permissões de que o KidGate precisa, passo a passo.',
    macTitle: 'Configure o Mac do seu filho',
    childMac: 'Mac da criança',
    macDownload: 'No Mac do seu filho, baixe o KidGate para macOS em kidgate.app.',
    macInstall: 'Abra o instalador baixado e siga os passos.',
    macPasswordSub: 'O macOS pede a senha deste Mac.',
    macOpen: 'O KidGate abre e mostra um QR code.',
    macOpenSub: 'Deixe essa janela aberta.',
    macScan: 'No seu celular, toque no botão de escanear do KidGate e leia o QR code.',
    macConfirm: 'No Mac, confira se é você e clique em “{{yes}}”.',
    macAssign: 'Escolha quem usa este Mac ou adicione seu filho pelo nome.',
    macFilter: 'No Mac, clique em “{{open}}” e ative o KidGate em Extensões de rede.',
    macAllow:
      'Quando o macOS perguntar se o KidGate pode filtrar conteúdo da rede, clique em “Permitir”.',
    macAllowSub: 'Em seguida, o {{filter}} do KidGate é ativado.',
    macDone: 'O Mac do seu filho está protegido.',
    macYoutubeTitle: 'Como configurar o KidGate no Mac do seu filho',
    macYoutubeDescription:
      'Instale o KidGate no Mac do seu filho, conecte-o ao seu celular com um QR code e depois ative o filtro da web nos Ajustes do Sistema.',
    windowsTitle: 'Configure o PC com Windows do seu filho',
    childWindows: 'PC da criança',
    windowsDownload: 'No PC do seu filho, baixe o KidGate para Windows em kidgate.app.',
    windowsSmartScreen:
      'Se o Windows disser que protegeu seu PC, escolha Mais informações e depois Executar assim mesmo.',
    windowsInstall:
      'Aprove a solicitação de administrador e siga os passos do instalador.',
    windowsInstallSub:
      'Em uma conta padrão, o Windows pede a senha de um administrador.',
    windowsConfirm: 'No PC, confira se é você e clique em “{{yes}}”.',
    windowsAssign: 'Escolha quem usa este PC ou adicione seu filho pelo nome.',
    windowsSetup: 'No PC, clique em “{{allow}}” em {{location}}.',
    windowsSetupSub: 'O {{filter}} do KidGate é ativado sozinho em alguns segundos.',
    windowsDone: 'O PC do seu filho está protegido.',
    windowsYoutubeTitle: 'Como configurar o KidGate no PC com Windows do seu filho',
    windowsYoutubeDescription:
      'Instale o KidGate no PC com Windows do seu filho e conecte-o ao seu celular com um QR code. Depois, o filtro da web é ativado sozinho.',
    chromeTitle: 'Configure o KidGate no Chrome',
    childChrome: 'Computador da criança',
    chromeSite:
      'No Chrome do computador do seu filho, abra kidgate.app e escolha Chrome.',
    chromeStore:
      'Na Chrome Web Store, clique em “Usar no Chrome” e depois em “Adicionar extensão”.',
    chromeOpen:
      'Clique no ícone do KidGate na barra de ferramentas do Chrome. O pop-up mostra um QR code.',
    chromeOpenSub: 'Mantenha o pop-up aberto durante o pareamento.',
    chromeConfirm: 'No KidGate, confira se é você e clique em “{{yes}}”.',
    chromeAssign: 'Escolha qual filho usa o Chrome neste computador.',
    chromeDone: 'O Chrome do computador do seu filho está protegido.',
    chromeYoutubeTitle:
      'Como configurar o KidGate no Chrome do computador do seu filho',
    chromeYoutubeDescription:
      'Adicione a extensão do KidGate ao Chrome do computador do seu filho e conecte-a ao seu celular com um QR code. Depois, ela filtra a web no Chrome.',
    dashboardComputer: 'Seu computador',
    dashboardSite: 'No seu computador, abra kidgate.app e clique em “Painel”.',
    dashboardDone: 'Você entrou no painel web.',
    tvTitle: 'Configure a Android TV do seu filho',
    tvAssign: 'Escolha quem usa esta TV ou adicione seu filho pelo nome.',
    tvDone: 'A Android TV do seu filho está protegida.',
    tvYoutubeTitle: 'Como configurar o KidGate na Android TV do seu filho',
    outroTitle: 'Tudo pronto.',
    outroSub: 'Esperamos que o KidGate facilite o cuidado com a sua família.',
    findDeviceTitle: 'Encontre o dispositivo do seu filho',
    allYoutubeTitle:
      'Como configurar o KidGate no seu celular e nos aparelhos do seu filho',
    allYoutubeDescription:
      'Toda a configuração em um só vídeo: primeiro o seu celular, depois cada aparelho do seu filho (iPhone ou iPad, celular ou tablet Android, Mac, PC com Windows, Android TV, Chrome) e, por fim, o painel web. Escolha o seu aparelho na lista abaixo.',
    // `guide-all`: every how-to in one video (operator, 2026-10-14).
    guideAllYoutubeTitle: 'Como usar o KidGate: todos os recursos, passo a passo',
    guideAllYoutubeDescription:
      'Todos os recursos do KidGate em um só vídeo, passo a passo, no iPhone de um responsável e no celular Android de um filho. Escolha na lista abaixo o recurso de que você precisa.',
    // `guide-parent-devices`' title card: the app's own wording for the device.
    removeParentDeviceTitle: 'Remover o dispositivo de um responsável',
  },
};
