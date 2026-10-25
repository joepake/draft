export const blockedApps = {
  title: 'Blockierte Apps',
  installApprovalTitle: 'Neue Apps genehmigen',
  installApprovalSubtitleOn:
    'Apps, die ab jetzt installiert werden, bleiben blockiert, bis du sie genehmigst.',
  installApprovalSubtitleOff:
    'Aktiviere dies, um jede neu installierte App zu blockieren, bis du sie genehmigst.',
  installApprovalSubtitleIos:
    'Auf iPhone und iPad wird stattdessen der App Store ausgeblendet – Apple erlaubt es nicht, Apps einzeln zu genehmigen.',
  installApprovalStatusOn: 'Neue Apps brauchen eine Genehmigung',
  installApprovalStatusOff: 'Neue Apps lassen sich sofort öffnen',
  installApprovalStatusIos: 'App Store ausgeblendet',
  installApprovalAccessibilityLabel: 'Neue Apps genehmigen',
  installApprovalInfoTitle: 'So funktioniert die Genehmigung',
  installApprovalInfoLine1:
    'Sobald du das einschaltest, blockiert das Gerät deines Kindes jede neu installierte App sofort – ohne auf dich zu warten.',
  installApprovalInfoLine2:
    'Du erhältst eine Benachrichtigung, und die App erscheint unten in „Blockierte Apps“, bis du sie erlaubst.',
  installApprovalInfoLine3:
    'Eine App, die du erlaubst, öffnet sich innerhalb einer Minute auf einem verbundenen Kindergerät. Eine App, die du nicht erlaubst, bleibt blockiert.',
  installApprovalInfoLine1Ios:
    'Solange das eingeschaltet ist, ist der App Store auf dem Gerät deines Kindes ausgeblendet, sodass keine neue App installiert werden kann.',
  installApprovalInfoLine2Ios:
    'Apps, die bereits auf dem Gerät sind, funktionieren weiter.',
  installApprovalInfoLine3Ios:
    'Um eine einzelne App zuzulassen, schalte das aus, installiere sie und schalte es danach wieder ein.',
  pendingSectionTitle: 'Blockierte neue Apps',
  pendingInstalledAt: 'Installiert {{when}}',
  pendingEmpty: 'Keine neuen Apps warten auf Genehmigung.',
  allowApp: 'Erlauben',
  toastAppAllowed: '{{appName}} kann jetzt geöffnet werden.',
  toastAllowFailed: 'Diese App konnte nicht erlaubt werden. Bitte versuche es erneut.',
  toastInstallApprovalSaveFailed: 'Speichern fehlgeschlagen. Bitte versuche es erneut.',
  toastChooseAppsFirst:
    'Wähle zuerst die Apps aus: Öffne die KidGate-Einstellungen auf dem Gerät deines Kindes und gib die Eltern-PIN ein.',
  toastSaveFailed: 'Speichern fehlgeschlagen. Bitte versuche es erneut.',
  statusBlockingOn: 'Sperre aktiviert',
  statusBlockingOff: 'Ausgewählte Apps lassen sich öffnen',
  heroTitle: 'Zum Blockieren ausgewählte Apps',
  heroSubtitle:
    'Diese Apps und Kategorien werden auf dem Gerät deines Kindes ausgewählt. KidGate synchronisiert die Liste hierher, damit du sie überprüfen kannst.',
  toggleTitle: 'Blockierte Apps aktivieren',
  toggleSubtitleOn: 'Die ausgewählten Apps sind auf dem Gerät deines Kindes blockiert.',
  toggleSubtitleOff:
    'Aktiviere diese Option, um die ausgewählten Apps aus der Ferne zu blockieren.',
  toggleAccessibilityLabel: 'Blockierte Apps aktivieren',
  emptyTitle: 'Noch keine blockierten Apps',
  emptySubtitle:
    'Sperre eine App über „Installierte Apps“. Auf einem iPhone wählst du die Apps auf dem iPhone selbst aus.',
  emptySubtitleTv:
    'Öffne auf dem Fernseher KidGate, wähle „{{button}}“, gib die Eltern-PIN ein, wähle dann die Apps aus und speichere.',
  sectionTitle: 'Blockierungsliste',
  privacyTitle: 'Die App-Liste stammt vom Gerät deines Kindes',
  privacySubtitle:
    'Unter iOS kann Apple die genauen App-Namen auf Eltern-Geräten ausblenden. Auf anderen Geräten werden die ausgewählten App-Namen hier synchronisiert. Zum Ändern der Liste ist weiterhin die Eltern-PIN auf dem Gerät deines Kindes erforderlich.',
  infoTitle: 'So funktioniert es',
  infoLine1:
    'Sperre Apps über „Installierte Apps“. Auf einem iPhone wählst du sie mit der Eltern-PIN auf dem iPhone selbst aus.',
  infoLine2: 'Sperre, Sperrzeiten und Tageslimit blockieren weiterhin alle Apps.',
  infoLine3:
    'Du kannst die Blockierung jederzeit auf diesem Bildschirm ein- oder ausschalten. Ein verbundenes Kindergerät erhält jede Änderung innerhalb einer Minute.',
  appKind: 'App',
  categoryKind: 'Kategorie',
  websiteKind: 'Website',
  noAppsSelectedYet: 'Noch keine Apps ausgewählt',
  blockedAppCount: '{{count}} Apps',
  blockedAppCount_one: '{{count}} App',
  blockedCategoryCount: '{{count}} Kategorien',
  blockedCategoryCount_one: '{{count}} Kategorie',
  blockedItemCount: '{{count}} blockierte Elemente',
  blockedItemCount_one: '{{count}} blockiertes Element',
  blockedListReady: 'Blockierungsliste bereit',
  blockedAppsLabel: 'Blockierte Apps',
  appsConfiguredChip: 'Apps eingerichtet',
  appsNotSetChip: 'Apps nicht eingerichtet',
  appBlockingSectionTitle: 'Blockierte Apps',
  appBlockingSectionDescription:
    'Wähle aus, welche Apps Eltern auf diesem Gerät blockieren können.',
  savedItemsForBlocking: '{{count}} Elemente zum Blockieren gespeichert.',
  savedItemsForBlocking_one: '{{count}} Element zum Blockieren gespeichert.',
  noAppsSelected: 'Keine Apps ausgewählt.',
  unableToOpenAppPicker:
    'Die App-Auswahl konnte nicht geöffnet werden. Bitte versuche es erneut.',
  wizardStepPin: 'Gib die Eltern-PIN ein, wenn die Einstellungen danach fragen.',
  wizardStepChoose: 'Öffne „Blockierte Apps“, hake die Apps ab und speichere.',
  pickerSubtitle:
    'Wähle die Apps und Kategorien aus, die auf diesem Gerät blockiert werden sollen.',
  pickerSubtitleAndroid:
    'Angehakte Apps werden sofort nach dem Öffnen geschlossen, solange „Blockierte Apps“ aktiv ist.',
  pickerEmpty: 'Keine Apps auf diesem Gerät gefunden.',
  blockingOffPill: 'Blockierte Apps: aus',
} as const;
