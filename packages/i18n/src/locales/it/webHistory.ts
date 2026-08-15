export const webHistory = {
  title: 'Cronologia web',
  fallbackDeviceName: 'Dispositivo del bambino',
  summarySites: 'Siti visti',
  summaryBlocked: 'Siti bloccati',
  sourceNoteIos:
    'Su iPhone questi dati vengono dal report Tempo di utilizzo di Apple: i siti su cui tuo figlio ha passato tempo, non ogni pagina aperta.',
  sourceNoteAndroid:
    'Su Android questi dati vengono dal filtro DNS di KidGate: i siti che questo telefono ha interrogato, non ogni pagina aperta.',
  filterOffNoteAndroid:
    'Il filtro web è disattivato, quindi questo telefono non registra né blocca nulla. Attivalo per vedere dove va.',
  filterOffNoteIos:
    'Il filtro web è disattivato, quindi non viene bloccato nulla. Questo elenco mostra solo dove è andato il telefono.',
  filterAll: 'Tutti i siti',
  filterBlocked: 'Solo bloccati',
  emptyTitle: 'Ancora nessun dato',
  emptyBody:
    'I siti compaiono qui quando il dispositivo del bambino naviga con KidGate attivo.',
  emptyBlockedBody: 'Non è ancora stato bloccato nulla.',
  dayBlockedBadge: '{{count}} bloccati',
  visitsMeta: '{{count}} visite',
  visitsMeta_one: '{{count}} visita',
  blockedMeta: 'Bloccato {{count}} volte · {{category}}',
  blockedMeta_one: 'Bloccato una volta · {{category}}',
  categoryUnknown: 'Elenco bloccati',
  showMoreDays: 'Mostra altri {{count}} giorni',
  showMoreDays_one: 'Mostra 1 altro giorno',
  rollupTitle: 'Dove è andato il tempo',
  rollupShare: '{{percent}}%',
  rollupNote:
    'Quota delle visite registrate per tipo di sito. Solo Android: l’iPhone non dice a KidGate di che tipo è un dominio.',
} as const;
