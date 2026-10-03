export const webHistory = {
  title: 'Web-Verlauf',
  fallbackDeviceName: 'Kindergerät',
  syncNote:
    'Der Web-Verlauf kann bis zu etwa 15 Minuten brauchen, bis er hier angezeigt wird – länger, wenn das Gerät keine Internetverbindung hat oder unerwartet beendet wurde.',
  syncNoteIos:
    'Auf dem iPhone kommt der Web-Verlauf erst an, nachdem KidGate auf dem Gerät deines Kindes gelaufen ist. Wurde die App nicht geöffnet, kann er Stunden hinterherhinken.',
  syncNoteTv:
    'Dieser Fernseher meldet sich nur in größeren Abständen, daher kann es bis zu einer Stunde dauern, bis der Web-Verlauf hier angezeigt wird – länger ohne Internetverbindung.',
  summarySites: 'Gesehene Seiten',
  summaryBlocked: 'Blockierte Seiten',
  sourceNoteIos:
    'Auf dem iPhone stammt das aus Apples Bildschirmzeit-Bericht: die Seiten, auf denen dein Kind Zeit verbracht hat, nicht jede geöffnete Seite.',
  sourceNoteFilter:
    'Das stammt aus dem KidGate-Filter: die Seiten, die dieses Gerät abgefragt hat, nicht jede geöffnete Seite.',
  backgroundNote:
    'Wenn niemand das Gerät benutzt, gehen einige Apps im Hintergrund weiter ins Internet – Updates, Empfehlungen und Abgleiche laufen von selbst.',
  sourceNoteExtension:
    'In diesem Browser sieht KidGate die tatsächlich geöffneten Seiten – nur diesen Browser, nicht den Rest des Computers.',
  filterOffNoteAndroid:
    'Der Webfilter ist aus, dieses Gerät zeichnet nichts auf und blockiert nichts. Schalte ihn ein, um zu sehen, wo dieses Gerät unterwegs ist.',
  filterOffNoteMacos:
    'Der Webfilter ist aus, dieser Mac zeichnet nichts auf und blockiert nichts. Schalte ihn ein, um zu sehen, wo dieses Gerät unterwegs ist.',
  filterOffNoteIos:
    'Der Webfilter ist aus, es wird also nichts blockiert. Diese Liste zeigt nur, welche Seiten das Handy aufgerufen hat.',
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
    'Seiten, die ein Dienst selbst nachlädt, stehen in einer Zeile zusammen – YouTube einmal zu öffnen erreicht mehrere. Tippe auf eine Zeile, um sie zu sehen.',
  showMoreDays: '{{count}} weitere Tage anzeigen',
  showMoreDays_one: '1 weiteren Tag anzeigen',
  rollupTitle: 'Aufrufe nach Art der Seite',
  rollupTitleMinutes: 'Zeit nach Art der Seite',
  rollupShare: '{{percent}} %',
  rollupNote:
    'Abfragen, keine Minuten – ein langes Video sind wenige, zehn Minuten Surfen sind Dutzende.',
  rollupNoteAi:
    'Einige Arten wurden aus dem Seitennamen abgeleitet statt einer bekannten Seite zugeordnet – ein paar können daneben liegen.',
  rollupNoteExtension:
    'Seiten, keine Minuten – ein langes Video zählt einmal, zehn Minuten Surfen zählen Dutzende.',
  rollupNoteMinutes:
    'Minuten, keine Aufrufe – aus dem Bildschirmzeit-Bericht von Apple über die auf jeder Seite verbrachte Zeit.',
  hoursTitle: 'Wann gesurft wurde',
  hoursNote:
    'Seitenaufrufe pro Stunde, nach der Uhr des Geräts. Ein den ganzen Nachmittag offener Tab zählt einmal.',
  hoursEmpty: 'Heute noch keine Seiten.',
  sourceNoteChild:
    'Zusammengeführt aus {{count}} Geräten. Jedes erfasst nur, was sein eigener Filter sieht.',
  filterOffNoteChild:
    'Der Webfilter ist auf allen Geräten aus, neue Besuche werden nicht erfasst.',
  filterOffNoteChildIos:
    'Der Webfilter ist auf allen Geräten aus, daher wird nichts blockiert. Nur iPhones und iPads melden weiterhin Seiten, über Bildschirmzeit.',
} as const;
