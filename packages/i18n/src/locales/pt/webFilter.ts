export const webFilter = {
  title: 'Filtro da web',
  fallbackDeviceName: 'Dispositivo da criança',
  toastUpdateFailed: 'Não foi possível atualizar o Filtro da web. Tente novamente.',
  heroTitle: 'Filtrar sites adultos',
  heroSubtitleIos:
    'Usa o filtro de conteúdo da web do Tempo de Uso da Apple para limitar conteúdo adulto no Safari e nos navegadores dentro dos apps do aparelho da criança.',
  heroSubtitleAndroid:
    'Usa uma VPN DNS local no aparelho Android da criança para bloquear domínios adultos conhecidos em navegadores e muitos apps.',
  toggleLabel: 'Ativar o Filtro da web',
  toggleHintIos: 'Requer a permissão do Tempo de Uso no aparelho da criança.',
  toggleHintAndroid:
    'A criança precisa aprovar a conexão VPN do KidGate uma vez. Mantenha a VPN ativa para o filtro funcionar.',
  toggleAccessibilityLabel: 'Ativar o Filtro da web',
  infoTitle: 'Como funciona',
  infoLine1Ios: 'A Apple filtra sites adultos automaticamente.',
  infoLine2Ios:
    'Usa o filtro de conteúdo adulto da Apple no Safari e não bloqueia tudo dentro de outros apps.',
  infoLine3Ios:
    'O KidGate aplica a configuração automaticamente quando o app no aparelho da criança sincroniza os controles.',
  infoLine1Android:
    'O KidGate inicia uma VPN local que inspeciona o DNS em busca de domínios adultos e bloqueia alguns resolvedores DNS criptografados.',
  infoLine2Android:
    'Desative o DNS particular no aparelho da criança. Se estiver ativo, os navegadores podem contornar o filtro.',
  infoLine3Android:
    'O aparelho da criança mostra um ícone de VPN durante a filtragem. Desligar a VPN interrompe o filtro — reabra o KidGate para restaurar.',
  infoLine4Android: 'Vá em Ajustes → Rede e internet → DNS particular → Desativado.',
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
  openHistorySubtitle: 'Veja quais sites este telefone alcançou e o que foi bloqueado',
  category: {
    adult: 'Conteúdo adulto',
    gambling: 'Apostas',
    dating: 'Namoro',
    drugs: 'Drogas e álcool',
    violence: 'Violência e extremismo',
    piracy: 'Pirataria',
    social: 'Redes sociais',
    videoStreaming: 'Streaming de vídeo',
    gaming: 'Jogos',
    shopping: 'Compras',
  },
  categoryHint: {
    adult: 'Sites explícitos e adultos',
    gambling: 'Cassinos, apostas, caixas de recompensa',
    dating: 'Apps de namoro e chat com estranhos',
    drugs: 'Cannabis, vape, bebidas',
    violence: 'Fóruns gore e extremistas',
    piracy: 'Torrents e streaming pirata',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, portais de jogos',
    shopping: 'Amazon, Shopee, moda rápida',
  },
} as const;
