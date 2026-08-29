export const webHistory = {
  title: 'Historial web',
  fallbackDeviceName: 'Dispositivo del niño',
  syncNote:
    'El historial web puede tardar unos minutos en aparecer en esta pantalla, más si el dispositivo no tiene conexión a Internet o se cerró de forma inesperada.',
  syncNoteTv:
    'Este televisor solo se conecta de forma periódica, así que el historial web puede tardar hasta 30 minutos en aparecer en esta pantalla, más si no hay conexión a Internet.',
  summarySites: 'Sitios vistos',
  summaryBlocked: 'Sitios bloqueados',
  sourceNoteIos:
    'En iPhone esto viene del informe de Tiempo de uso de Apple: los sitios en los que tu hijo pasó tiempo, no cada página que abrió.',
  sourceNoteAndroid:
    'En Android esto viene del filtro DNS de KidGate: los sitios que este teléfono consultó, no cada página que abrió.',
  sourceNoteMacos:
    'En Mac esto viene del filtro de KidGate: los sitios que este Mac consultó, no cada página que abrió.',
  sourceNoteExtension:
    'En este navegador KidGate ve las páginas que se abrieron realmente: solo este navegador, no el resto del equipo.',
  filterOffNoteAndroid:
    'El filtro web está desactivado, así que este dispositivo no registra ni bloquea nada. Actívalo para ver por dónde navega.',
  filterOffNoteMacos:
    'El filtro web está desactivado, así que este Mac no registra ni bloquea nada. Actívalo para ver por dónde navega.',
  filterOffNoteIos:
    'El filtro web está desactivado, así que no se bloquea nada. Esta lista solo muestra por dónde navegó el teléfono.',
  filterAll: 'Todos los sitios',
  filterBlocked: 'Solo bloqueados',
  emptyTitle: 'Aún no hay registros',
  emptyBody:
    'Los sitios aparecerán aquí cuando el dispositivo del niño navegue con KidGate en marcha.',
  emptyBlockedBody: 'Todavía no se ha bloqueado nada.',
  dayBlockedBadge: '{{count}} bloqueados',
  visitsMeta: '{{count}} visitas',
  visitsMeta_one: '{{count}} visita',
  blockedMeta: 'Bloqueado {{count}} veces · {{category}}',
  blockedMeta_one: 'Bloqueado una vez · {{category}}',
  categoryUnknown: 'Lista de bloqueo',
  sectionUncategorized: 'Otros sitios',
  blockCategory: 'Bloquear {{category}}',
  blockCategoryConfirmTitle: '¿Bloquear {{category}}?',
  blockCategoryConfirmBody:
    'Todos los sitios que KidGate clasifica como {{category}} se rechazarán en este dispositivo. Puedes desactivarlo de nuevo en el Filtro web.',
  blockCategoryConfirmAction: 'Bloquear',
  blockCategoryDone: '{{category}} ya está bloqueado.',
  unblockCategory: 'Desbloquear {{category}}',
  unblockCategoryConfirmTitle: '¿Desbloquear {{category}}?',
  unblockCategoryConfirmBody:
    'Los sitios que KidGate clasifica como {{category}} volverán a ser accesibles en este dispositivo.',
  unblockCategoryConfirmAction: 'Desbloquear',
  unblockCategoryDone: '{{category}} ya no está bloqueado.',
  serviceSites: '{{count}} sitios',
  serviceSites_one: '{{count}} sitio',
  serviceNote:
    'Los sitios que un servicio carga por su cuenta se agrupan en una fila: abrir YouTube una vez alcanza varios. Toca una fila para verlos.',
  showMoreDays: 'Ver {{count}} días más',
  showMoreDays_one: 'Ver 1 día más',
  rollupTitle: 'Visitas por tipo de sitio',
  rollupShare: '{{percent}} %',
  rollupNote:
    'Consultas, no minutos: un vídeo largo son unas pocas, diez minutos de navegación son docenas.',
  rollupNoteAi:
    'Algunos tipos se dedujeron del nombre del sitio en vez de coincidir con uno conocido, así que alguno puede fallar.',
  rollupNoteExtension:
    'Páginas, no minutos: un vídeo largo cuenta una vez, diez minutos de navegación cuentan docenas.',
  hoursTitle: 'Cuándo navegó',
  hoursNote:
    'Páginas cargadas por hora, según el reloj del dispositivo. Una pestaña abierta toda la tarde cuenta una vez.',
  hoursEmpty: 'Aún no hay páginas hoy.',
  sourceNoteChild:
    'Combinado de {{count}} dispositivos. Cada uno registra solo lo que ve su propio filtro.',
  filterOffNoteChild:
    'El filtro web está desactivado en todos los dispositivos, así que las visitas nuevas no se registran.',
} as const;
