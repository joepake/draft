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
    'Du erhältst eine Benachrichtigung, und die App erscheint unten sowie unter Apps, bis du sie erlaubst.',
  installApprovalInfoLine3:
    'Wenn du eine App erlaubst, lässt sie sich sofort öffnen. Eine App, die du nicht erlaubst, bleibt einfach blockiert.',
  pendingSectionTitle: 'Automatisch blockiert, wartet auf dich',
  pendingSectionSubtitle:
    'Installiert, nachdem du die Genehmigung aktiviert hast. Nichts davon wurde auf dem Gerät deines Kindes ausgewählt.',
  pendingInstalledAt: 'Installiert {{when}}',
  pendingEmpty: 'Keine neuen Apps warten auf Genehmigung.',
  allowApp: 'Erlauben',
  allowingApp: 'Wird erlaubt…',
  toastAppAllowed: '{{appName}} kann jetzt geöffnet werden.',
  toastAllowFailed: 'Diese App konnte nicht erlaubt werden. Bitte versuche es erneut.',
  toastInstallApprovalSaveFailed: 'Speichern fehlgeschlagen. Bitte versuche es erneut.',
  toastChooseAppsFirst:
    'Bitte dein Kind, zuerst die KidGate-Einstellungen zu öffnen und die zu blockierenden Apps auszuwählen.',
  toastSaveFailed: 'Speichern fehlgeschlagen. Bitte versuche es erneut.',
  statusBlockingOn: 'Sperre aktiviert',
  statusBlockingOff: 'Keine Sperre',
  heroTitle: 'Zum Blockieren ausgewählte Apps',
  heroSubtitle:
    'Diese Apps und Kategorien werden auf dem Gerät deines Kindes ausgewählt. KidGate synchronisiert die Liste hierher, damit du sie überprüfen kannst.',
  statAppsLabel: 'Apps',
  statCategoriesLabel: 'Kategorien',
  toggleTitle: 'App-Blockierung aktivieren',
  toggleSubtitleOn: 'Die ausgewählten Apps sind auf dem Gerät deines Kindes blockiert.',
  toggleSubtitleOff:
    'Aktiviere diese Option, um die ausgewählten Apps aus der Ferne zu blockieren.',
  toggleAccessibilityLabel: 'App-Blockierung aktivieren',
  emptyTitle: 'Noch keine blockierten Apps',
  emptySubtitle:
    'Öffne auf dem Gerät deines Kindes „KidGate-Einstellungen → Apps zum Blockieren auswählen“, gib die Eltern-PIN ein und speichere die Auswahl.',
  sectionTitle: 'Blockierungsliste',
  privacyTitle: 'Die App-Liste stammt vom Gerät deines Kindes',
  privacySubtitle:
    'Unter iOS kann Apple die genauen App-Namen auf Eltern-Geräten ausblenden. Auf anderen Geräten werden die ausgewählten App-Namen hier synchronisiert. Zum Ändern der Liste ist weiterhin die Eltern-PIN auf dem Gerät deines Kindes erforderlich.',
  infoTitle: 'So funktioniert es',
  infoLine1:
    'Wähle die Apps auf dem Gerät deines Kindes aus, nachdem du die Eltern-PIN eingegeben hast.',
  infoLine2: 'Sperre, Sperrzeiten und Tageslimit blockieren weiterhin alle Apps.',
  infoLine3:
    'Du kannst die Blockierung jederzeit auf diesem Bildschirm ein- oder ausschalten.',
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
  appBlockingSectionTitle: 'App-Blockierung',
  appBlockingSectionDescription:
    'Wähle aus, welche Apps Eltern auf diesem Gerät blockieren können.',
  savedItemsForBlocking: '{{count}} Elemente zum Blockieren gespeichert.',
  savedItemsForBlocking_one: '{{count}} Element zum Blockieren gespeichert.',
  noAppsSelected: 'Keine Apps ausgewählt.',
  unableToOpenAppPicker:
    'Die App-Auswahl konnte nicht geöffnet werden. Bitte versuche es erneut.',
  wizardStepPin: 'Gib die Eltern-PIN ein, wenn die Einstellungen danach fragen.',
  wizardStepChoose:
    'Öffne „Apps zum Blockieren auswählen“, hake die Apps ab und speichere.',
} as const;
