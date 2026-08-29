export const webFilter = {
  title: 'Filtro da web',
  fallbackDeviceName: 'Dispositivo da criança',
  appliesToAll: 'Aplica-se a todos os {{count}} dispositivos de {{name}}',
  coverageLine: 'Ativo em {{enforcing}} de {{total}} dispositivos',
  mergeNotice:
    'Os dispositivos de {{name}} tinham configurações de filtro da web diferentes. Salvar aqui aplica um único conjunto a todos, combinado para a opção mais rígida.',
  mergeLoosened: 'Agora permitido em todos os dispositivos: {{domains}}',
  toastUpdateFailed: 'Não foi possível atualizar o Filtro da web. Tente novamente.',
  heroTitle: 'Filtrar sites adultos',
  heroSubtitleIos:
    'Usa o filtro de conteúdo da web do Tempo de Uso da Apple para limitar conteúdo adulto no Safari e nos navegadores dentro dos apps do dispositivo da criança.',
  heroSubtitleAndroid:
    'Usa uma VPN DNS local no dispositivo Android da criança para bloquear domínios adultos conhecidos em navegadores e muitos apps.',
  heroSubtitleMacos:
    'Executa o filtro de conteúdo do KidGate no Mac do filho para bloquear sites adultos conhecidos em navegadores e muitos apps.',
  toggleHintIos: 'Requer a permissão do Tempo de Uso no dispositivo da criança.',
  toggleHintAndroid:
    'A criança precisa aprovar a conexão VPN do KidGate uma vez. Mantenha a VPN ativa para o filtro funcionar.',
  toggleHintMacos:
    'O filho precisa aprovar a extensão de filtro do KidGate uma vez em Ajustes do Sistema. Mantenha-a aprovada para o filtro funcionar.',
  toggleAccessibilityLabel: 'Ativar o Filtro da web',
  infoTitle: 'Como funciona',
  infoLine1Ios: 'A Apple filtra sites adultos automaticamente.',
  infoLine2Ios:
    'Usa o filtro de conteúdo adulto da Apple no Safari e não bloqueia tudo dentro de outros apps.',
  infoLine3Ios:
    'O KidGate aplica a configuração automaticamente quando o app no dispositivo da criança sincroniza os controles.',
  infoLine1Android:
    'O KidGate inicia uma VPN local que inspeciona o DNS em busca de domínios adultos e bloqueia alguns resolvedores DNS criptografados.',
  infoLine2Android:
    'Desative o DNS particular no dispositivo da criança. Se estiver ativo, os navegadores podem contornar o filtro.',
  infoLine3Android:
    'O dispositivo da criança mostra um ícone de VPN durante a filtragem. Desligar a VPN interrompe o filtro — reabra o KidGate para restaurar.',
  infoLine4Android: 'Vá em Ajustes → Rede e internet → DNS particular → Desativado.',
  infoLine1Macos:
    'O KidGate executa um filtro de conteúdo no Mac que verifica quais sites estão sendo acessados e bloqueia os que estão nas suas categorias.',
  infoLine2Macos:
    'Se o filtro aparecer como não aprovado no Mac do filho, abra Ajustes do Sistema → Geral → Itens de login e extensões para aprová-lo.',
  infoLine3Macos:
    'O Mac do filho mostra o filtro como ativo assim que aprovado. Se for desativado lá, abra o KidGate novamente para restaurá-lo.',
  infoLine4Macos:
    'O filtro lê os nomes dos sites, que os navegadores modernos ocultam em cerca de metade das visitas — esses sites não são verificados de acordo com suas categorias. Mesmo assim, ele bloqueia a maioria dos sites que os filhos alcançam dessa forma.',
  privateDnsBannerTitle: 'Desative o DNS particular',
  privateDnsBannerBody:
    'O DNS particular está ativo, então o filtro de sites adultos pode ser contornado. Desative-o para o filtro funcionar.',
  privateDnsBannerButton: 'Abrir ajustes de DNS',
  vpnConsentBannerTitle: 'Restaurar a VPN do Filtro da web',
  vpnConsentBannerBody:
    'A VPN do KidGate está desligada. O filtro de sites adultos precisa da VPN conectada.',
  vpnConsentBannerButton: 'Ativar VPN',
  iosOnlyNote: 'Usa o Tempo de Uso no iOS',
  androidVpnNote: 'Usa uma VPN DNS local no Android',
  macosFilterNote: 'Usa o filtro de conteúdo do KidGate no Mac',
  webFilteringNote:
    'O iOS usa o filtro adulto do Tempo de Uso; o Android usa uma lista de bloqueio via VPN DNS local.',
  safeSearchAlertsNote:
    'O Safari não compartilha termos de busca; alertas por palavra-chave exigem um navegador seguro gerenciado.',
  webHistoryNote: 'Requer um navegador com filtro ou relatórios via DNS/VPN.',
  categoriesTitle: 'O que bloquear',
  categoriesSubtitle:
    'O KidGate usa suas próprias listas de domínios. Elas cobrem os sites que as crianças realmente alcançam, não a web inteira — combine com as listas abaixo.',
  androidOnlyCategory: 'Só Android: o iOS não tem controle web por categoria',
  iosCategoryNote:
    'O iPhone só suporta {{category}}, usando o filtro da Apple. As outras categorias valem para dispositivos Android.',
  allowListTitle: 'Sempre permitir',
  allowListSubtitle:
    'Sites que continuam acessíveis mesmo quando uma categoria os bloquearia.',
  allowListEmpty: 'Ainda não há exceções.',
  allowListInputAccessibility: 'Adicionar site sempre permitido',
  blockListTitle: 'Sempre bloquear',
  blockListSubtitle: 'Sites recusados independentemente das categorias.',
  blockListEmpty: 'Ainda não há sites bloqueados.',
  blockListInputAccessibility: 'Adicionar site sempre bloqueado',
  allowListOnlyLabel: 'Só sites permitidos',
  allowListOnlyHintAndroid:
    'Tudo fora da sua lista é recusado. Funciona na camada DNS, então outros apps também perdem conexão.',
  allowListOnlyHintIos:
    'O Safari e os navegadores dentro de apps só abrem os sites da sua lista.',
  allowListOnlyNeedsEntries: 'Adicione pelo menos um site permitido antes de ativar.',
  domainPlaceholder: 'exemplo.com',
  addDomain: 'Adicionar site',
  removeDomain: 'Remover {{domain}}',
  invalidDomain: 'Digite um endereço, como exemplo.com',
  listFull: 'Você pode salvar até {{max}} sites nesta lista.',
  openHistory: 'Histórico da web',
  openHistorySubtitle:
    'Veja quais sites este dispositivo alcançou e o que foi bloqueado',
  blockedPageTitle: 'Site bloqueado',
  blockedPageBody:
    'O KidGate bloqueou este site para a sua família. Se você acha que é um engano, pergunte aos seus pais.',
  category: {
    adult: 'Conteúdo adulto',
    selfHarm: 'Automutilação e transtornos alimentares',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'Educação',
    utility: 'Utilitários',
    browser: 'Navegadores web',
    devTools: 'Programação e dev',
    messaging: 'Mensagens e chamadas',
    community: 'Fóruns e comunidades',
    shortVideo: 'Vídeos curtos',
    creative: 'Foto, vídeo e arte',
    productivity: 'Notas e produtividade',
    reading: 'Livros e quadrinhos',
    fileSharing: 'Arquivos e downloads',
    bypass: 'Apps para burlar o controle',
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
  categoryHint: {
    adult: 'Sites explícitos e adultos',
    selfHarm: 'Fóruns que incentivam automutilação e jejum',
    gambling: 'Cassinos, apostas esportivas, pôquer',
    gameGambling: 'Abertura de loot boxes, apostas de skins e Roblox',
    dating: 'Apps de namoro',
    strangerChat: 'Clones do Omegle, videochat aleatório',
    drugs: 'Cannabis, vape, bebidas',
    violence: 'Sites gore e de imagens chocantes',
    extremism: 'Fóruns de ódio e sites extremistas',
    piracy: 'Torrents e streaming pirata',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, portais de jogos',
    shopping: 'Amazon, Shopee, moda rápida',
    aiCompanion: 'Character.AI, Replika, bots de roleplay',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, apps de trading',
    vpn: 'Páginas de download de VPN. Não bloqueia um app já instalado.',
  },
  categoryGroup: {
    harm: 'Conteúdo nocivo',
    contact: 'Estranhos',
    bypass: 'Contornar o filtro',
    ai: 'IA',
    entertainment: 'Lazer e redes sociais',
    money: 'Compras e dinheiro',
  },
  categoriesOnCount: '{{on}} de {{total}} ativados',
  askToOpen: 'Pedir aos pais',
  askToOpenSubtitle: 'Se permitirem, este site vai abrir.',
  askToOpenDomainLabel: 'Qual site?',
  askToOpenPending: 'Você já pediu um site. Espere a resposta.',
  askToOpenTooSoon: 'Você acabou de pedir. Tente de novo em um minuto.',
  requestsTitle: 'Pedidos de sites',
  requestsSubtitle: 'Sites que este dispositivo pediu para permitir.',
  siteRequestApproved: 'Site permitido',
  siteRequestApprovedDescription:
    '{{domain}} foi adicionado a “Sempre permitir” em {{deviceName}}.',
  siteRequestDenied: 'Pedido de site recusado',
  siteRequestDeniedDescription: '{{domain}} continua bloqueado em {{deviceName}}.',
  siteRequestReceived: 'Pedido de site',
  siteRequestReceivedDescription: '{{deviceName}} pediu para abrir {{domain}}.',
} as const;
