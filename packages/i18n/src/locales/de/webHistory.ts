export const webHistory = {
  title: 'Web-Verlauf',
  fallbackDeviceName: 'Kindergerät',
  summarySites: 'Gesehene Seiten',
  summaryBlocked: 'Blockierte Seiten',
  sourceNoteIos:
    'Auf dem iPhone stammt das aus Apples Bildschirmzeit-Bericht: die Seiten, auf denen dein Kind Zeit verbracht hat, nicht jede geöffnete Seite.',
  sourceNoteAndroid:
    'Auf Android stammt das aus dem DNS-Filter von KidGate: die Seiten, die dieses Handy abgefragt hat, nicht jede geöffnete Seite.',
  filterOffNoteAndroid:
    'Der Webfilter ist aus, dieses Gerät zeichnet nichts auf und blockiert nichts. Schalte ihn ein, um zu sehen, wohin es geht.',
  filterOffNoteIos:
    'Der Webfilter ist aus, es wird also nichts blockiert. Diese Liste zeigt nur, wo das Handy war.',
  filterAll: 'Alle Seiten',
  filterBlocked: 'Nur blockierte',
  emptyTitle: 'Noch nichts erfasst',
  emptyBody:
    'Seiten erscheinen hier, sobald das Kindergerät mit laufendem KidGate surft.',
  emptyBlockedBody: 'Es wurde noch nichts blockiert.',
  dayBlockedBadge: '{{count}} blockiert',
  visitsMeta: '{{count}} Besuche',
  visitsMeta_one: '{{count}} Besuch',
  blockedMeta: '{{count}}-mal blockiert · {{category}}',
  blockedMeta_one: 'Einmal blockiert · {{category}}',
  categoryUnknown: 'Sperrliste',
  showMoreDays: '{{count}} weitere Tage anzeigen',
  showMoreDays_one: '1 weiteren Tag anzeigen',
  rollupTitle: 'Wohin die Zeit ging',
  rollupShare: '{{percent}} %',
  rollupNote:
    'Anteil der erfassten Besuche nach Art der Seite. Nur Android — das iPhone sagt KidGate nicht, welcher Art eine Domain ist.',
} as const;
