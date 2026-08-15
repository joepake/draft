export const webHistory = {
  title: 'Historial web',
  fallbackDeviceName: 'Dispositivo del niño',
  summarySites: 'Sitios vistos',
  summaryBlocked: 'Sitios bloqueados',
  sourceNoteIos:
    'En iPhone esto viene del informe de Tiempo de uso de Apple: los sitios en los que tu hijo pasó tiempo, no cada página que abrió.',
  sourceNoteAndroid:
    'En Android esto viene del filtro DNS de KidGate: los sitios que este teléfono consultó, no cada página que abrió.',
  filterOffNoteAndroid:
    'El filtro web está desactivado, así que este teléfono no registra ni bloquea nada. Actívalo para ver por dónde navega.',
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
  showMoreDays: 'Ver {{count}} días más',
  showMoreDays_one: 'Ver 1 día más',
  rollupTitle: 'En qué se fue el tiempo',
  rollupShare: '{{percent}} %',
  rollupNote:
    'Proporción de visitas registradas por tipo de sitio. Solo Android: el iPhone no indica a KidGate de qué tipo es un dominio.',
} as const;
