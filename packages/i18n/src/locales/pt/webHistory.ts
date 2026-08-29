export const webHistory = {
  title: 'Histórico da web',
  fallbackDeviceName: 'Dispositivo da criança',
  syncNote:
    'O histórico da web pode levar alguns minutos para aparecer nesta tela — mais tempo se o dispositivo não tiver conexão com a internet ou tiver sido fechado inesperadamente.',
  syncNoteTv:
    'Esta TV só se conecta periodicamente, então o histórico da web pode levar até 30 minutos para aparecer nesta tela — mais tempo sem conexão com a internet.',
  summarySites: 'Sites vistos',
  summaryBlocked: 'Sites bloqueados',
  sourceNoteIos:
    'No iPhone isto vem do relatório de Tempo de Uso da Apple: os sites em que seu filho passou tempo, não cada página aberta.',
  sourceNoteAndroid:
    'No Android isto vem do filtro DNS do KidGate: os sites que este telefone consultou, não cada página aberta.',
  sourceNoteMacos:
    'No Mac isto vem do filtro do KidGate: os sites que este Mac consultou, não cada página aberta.',
  sourceNoteExtension:
    'Neste navegador o KidGate vê as páginas realmente abertas — só este navegador, não o resto do computador.',
  filterOffNoteAndroid:
    'O filtro web está desligado, então este dispositivo não registra nem bloqueia nada. Ligue para ver por onde ele passa.',
  filterOffNoteMacos:
    'O filtro web está desligado, então este Mac não registra nem bloqueia nada. Ligue para ver por onde ele passa.',
  filterOffNoteIos:
    'O filtro web está desligado, então nada está sendo bloqueado. Esta lista só mostra por onde o telefone passou.',
  filterAll: 'Todos os sites',
  filterBlocked: 'Só bloqueados',
  emptyTitle: 'Nada registrado ainda',
  emptyBody:
    'Os sites aparecem aqui quando o dispositivo da criança navega com o KidGate ativo.',
  emptyBlockedBody: 'Nada foi bloqueado ainda.',
  dayBlockedBadge: '{{count}} bloqueados',
  visitsMeta: '{{count}} visitas',
  visitsMeta_one: '{{count}} visita',
  blockedMeta: 'Bloqueado {{count}} vezes · {{category}}',
  blockedMeta_one: 'Bloqueado uma vez · {{category}}',
  categoryUnknown: 'Lista de bloqueio',
  sectionUncategorized: 'Outros sites',
  blockCategory: 'Bloquear {{category}}',
  blockCategoryConfirmTitle: 'Bloquear {{category}}?',
  blockCategoryConfirmBody:
    'Todos os sites que o KidGate classifica como {{category}} serão recusados neste dispositivo. Podes desativar isto no Filtro web.',
  blockCategoryConfirmAction: 'Bloquear',
  blockCategoryDone: '{{category}} está agora bloqueado.',
  unblockCategory: 'Desbloquear {{category}}',
  unblockCategoryConfirmTitle: 'Desbloquear {{category}}?',
  unblockCategoryConfirmBody:
    'Os sites que o KidGate classifica como {{category}} voltarão a estar acessíveis neste dispositivo.',
  unblockCategoryConfirmAction: 'Desbloquear',
  unblockCategoryDone: '{{category}} já não está bloqueado.',
  serviceSites: '{{count}} sites',
  serviceSites_one: '{{count}} site',
  serviceNote:
    'Os sites que um serviço carrega sozinho ficam juntos numa linha: abrir o YouTube uma vez alcança vários. Toque numa linha para vê-los.',
  showMoreDays: 'Ver mais {{count}} dias',
  showMoreDays_one: 'Ver mais 1 dia',
  rollupTitle: 'Visitas por tipo de site',
  rollupShare: '{{percent}}%',
  rollupNote:
    'Consultas, não minutos — um vídeo longo são poucas, dez minutos de navegação são dezenas.',
  rollupNoteAi:
    'Alguns tipos foram deduzidos do nome do site em vez de corresponderem a um site conhecido, então alguns podem estar errados.',
  rollupNoteExtension:
    'Páginas, não minutos — um vídeo longo conta uma vez, dez minutos de navegação contam dezenas.',
  hoursTitle: 'Quando navegou',
  hoursNote:
    'Páginas carregadas por hora, pelo relógio do dispositivo. Uma aba aberta a tarde toda conta uma vez.',
  hoursEmpty: 'Ainda não há páginas hoje.',
  sourceNoteChild:
    'Combinado de {{count}} dispositivos. Cada um registra só o que o próprio filtro vê.',
  filterOffNoteChild:
    'O filtro da web está desligado em todos os dispositivos, então novas visitas não são registradas.',
} as const;
