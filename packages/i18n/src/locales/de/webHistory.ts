export const webHistory = {
  title: 'Web-Verlauf',
  fallbackDeviceName: 'Kindergerät',
  syncNote:
    'Der Web-Verlauf kann ein paar Minuten brauchen, bis er hier angezeigt wird — länger, wenn das Gerät keine Internetverbindung hat oder unerwartet beendet wurde.',
  syncNoteTv:
    'Dieser Fernseher meldet sich nur regelmäßig, daher kann es bis zu 30 Minuten dauern, bis der Web-Verlauf hier angezeigt wird — länger ohne Internetverbindung.',
  summarySites: 'Gesehene Seiten',
  summaryBlocked: 'Blockierte Seiten',
  sourceNoteIos:
    'Auf dem iPhone stammt das aus Apples Bildschirmzeit-Bericht: die Seiten, auf denen dein Kind Zeit verbracht hat, nicht jede geöffnete Seite.',
  sourceNoteAndroid:
    'Auf Android stammt das aus dem DNS-Filter von KidGate: die Seiten, die dieses Handy abgefragt hat, nicht jede geöffnete Seite.',
  sourceNoteMacos:
    'Auf dem Mac stammt das aus dem KidGate-Filter: die Seiten, die dieser Mac abgefragt hat, nicht jede geöffnete Seite.',
  sourceNoteExtension:
    'In diesem Browser sieht KidGate die tatsächlich geöffneten Seiten — nur diesen Browser, nicht den Rest des Computers.',
  filterOffNoteAndroid:
    'Der Webfilter ist aus, dieses Gerät zeichnet nichts auf und blockiert nichts. Schalte ihn ein, um zu sehen, wo dieses Gerät unterwegs ist.',
  filterOffNoteMacos:
    'Der Webfilter ist aus, dieser Mac zeichnet nichts auf und blockiert nichts. Schalte ihn ein, um zu sehen, wo dieses Gerät unterwegs ist.',
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
  sectionUncategorized: 'Andere Seiten',
  blockCategory: '{{category}} sperren',
  blockCategoryConfirmTitle: '{{category}} sperren?',
  blockCategoryConfirmBody:
    'Jede Seite, die KidGate unter {{category}} einordnet, wird auf diesem Gerät abgewiesen. Du kannst das im Webfilter wieder ausschalten.',
  blockCategoryConfirmAction: 'Sperren',
  blockCategoryDone: '{{category}} ist jetzt gesperrt.',
  unblockCategory: '{{category}} freigeben',
  unblockCategoryConfirmTitle: '{{category}} freigeben?',
  unblockCategoryConfirmBody:
    'Seiten, die KidGate unter {{category}} einordnet, sind auf diesem Gerät wieder erreichbar.',
  unblockCategoryConfirmAction: 'Freigeben',
  unblockCategoryDone: '{{category}} ist nicht mehr gesperrt.',
  serviceSites: '{{count}} Seiten',
  serviceSites_one: '{{count}} Seite',
  serviceNote:
    'Seiten, die ein Dienst selbst nachlädt, stehen in einer Zeile zusammen — YouTube einmal zu öffnen erreicht mehrere. Tippe auf eine Zeile, um sie zu sehen.',
  showMoreDays: '{{count}} weitere Tage anzeigen',
  showMoreDays_one: '1 weiteren Tag anzeigen',
  rollupTitle: 'Aufrufe nach Art der Seite',
  rollupShare: '{{percent}} %',
  rollupNote:
    'Abfragen, keine Minuten — ein langes Video sind wenige, zehn Minuten Surfen sind Dutzende.',
  rollupNoteAi:
    'Einige Arten wurden aus dem Seitennamen abgeleitet statt einer bekannten Seite zugeordnet — ein paar können daneben liegen.',
  rollupNoteExtension:
    'Seiten, keine Minuten — ein langes Video zählt einmal, zehn Minuten Surfen zählen Dutzende.',
  hoursTitle: 'Wann gesurft wurde',
  hoursNote:
    'Seitenaufrufe pro Stunde, nach der Uhr des Geräts. Ein den ganzen Nachmittag offener Tab zählt einmal.',
  hoursEmpty: 'Heute noch keine Seiten.',
  sourceNoteChild:
    'Zusammengeführt aus {{count}} Geräten. Jedes erfasst nur, was sein eigener Filter sieht.',
  filterOffNoteChild:
    'Der Webfilter ist auf allen Geräten aus, neue Besuche werden nicht erfasst.',
} as const;
