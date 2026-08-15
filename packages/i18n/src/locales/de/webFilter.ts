export const webFilter = {
  title: 'Webfilter',
  fallbackDeviceName: 'Kindergerät',
  toastUpdateFailed:
    'Webfilter konnte nicht aktualisiert werden. Bitte versuche es erneut.',
  heroTitle: 'Websites für Erwachsene filtern',
  heroSubtitleIos:
    'Nutzt den Webinhaltsfilter der Apple-Bildschirmzeit, um Erwachseneninhalte in Safari und In-App-Browsern auf dem Kindergerät zu begrenzen.',
  heroSubtitleAndroid:
    'Nutzt ein lokales DNS-VPN auf dem Android-Kindergerät, um bekannte Erwachsenen-Domains in Browsern und vielen Apps zu blockieren.',
  toggleLabel: 'Webfilter aktivieren',
  toggleHintIos: 'Benötigt die Bildschirmzeit-Berechtigung auf dem Kindergerät.',
  toggleHintAndroid:
    'Das Kind muss die KidGate-VPN-Verbindung einmal bestätigen. Lass das VPN an, damit der Filter funktioniert.',
  toggleAccessibilityLabel: 'Webfilter aktivieren',
  infoTitle: 'So funktioniert es',
  infoLine1Ios: 'Apple filtert Erwachsenen-Websites automatisch.',
  infoLine2Ios:
    'Nutzt den Apple-Erwachsenenfilter in Safari und blockiert nicht alles innerhalb anderer Apps.',
  infoLine3Ios:
    'KidGate übernimmt die Einstellung automatisch, sobald die App auf dem Kindergerät die Steuerungen synchronisiert.',
  infoLine1Android:
    'KidGate startet ein lokales VPN, das DNS auf Erwachsenen-Domains prüft und einige verschlüsselte DNS-Resolver blockiert.',
  infoLine2Android:
    'Bitte deaktiviere privates DNS auf dem Kindergerät. Ist es aktiv, können Browser den Filter umgehen.',
  infoLine3Android:
    'Das Kindergerät zeigt beim Filtern ein VPN-Symbol. VPN aus bedeutet Filter aus — öffne KidGate erneut, um ihn wiederherzustellen.',
  infoLine4Android: 'Gehe zu Einstellungen → Netzwerk & Internet → Privates DNS → Aus.',
  privateDnsBannerTitle: 'Privates DNS deaktivieren',
  privateDnsBannerBody:
    'Privates DNS ist aktiv, daher kann der Erwachsenenfilter umgangen werden. Bitte deaktiviere es.',
  privateDnsBannerButton: 'DNS-Einstellungen öffnen',
  vpnConsentBannerTitle: 'Webfilter-VPN wiederherstellen',
  vpnConsentBannerBody:
    'Das KidGate-VPN ist aus. Der Erwachsenenfilter braucht eine bestehende VPN-Verbindung.',
  vpnConsentBannerButton: 'VPN aktivieren',
  iosOnlyNote: 'Nutzt Bildschirmzeit auf iOS',
  androidVpnNote: 'Nutzt ein lokales DNS-VPN auf Android',
  webFilteringNote:
    'iOS nutzt den Erwachsenenfilter der Bildschirmzeit; Android eine Blockliste über lokales DNS-VPN.',
  safeSearchAlertsNote:
    'Safari teilt keine Suchbegriffe; Stichwort-Warnungen erfordern einen verwalteten sicheren Browser.',
  webHistoryNote: 'Erfordert einen gefilterten Browser oder DNS/VPN-Berichte.',
  categoriesTitle: 'Was blockiert wird',
  categoriesSubtitle:
    'KidGate bringt eigene Domain-Listen mit. Sie decken die Seiten ab, die Kinder wirklich erreichen, nicht das ganze Web — ergänze sie mit den Listen unten.',
  androidOnlyCategory: 'Nur Android — iOS hat keine Websteuerung pro Kategorie',
  iosCategoryNote:
    'Das iPhone unterstützt nur {{category}}, über Apples eigenen Filter. Die übrigen Kategorien gelten für Android-Geräte.',
  allowListTitle: 'Immer erlauben',
  allowListSubtitle:
    'Seiten, die erreichbar bleiben, auch wenn eine Kategorie sie blockieren würde.',
  allowListEmpty: 'Noch keine Ausnahmen.',
  allowListInputAccessibility: 'Immer erlaubte Seite hinzufügen',
  blockListTitle: 'Immer blockieren',
  blockListSubtitle: 'Seiten, die unabhängig von den Kategorien abgewiesen werden.',
  blockListEmpty: 'Noch keine blockierten Seiten.',
  blockListInputAccessibility: 'Immer blockierte Seite hinzufügen',
  allowListOnlyLabel: 'Nur erlaubte Seiten',
  allowListOnlyHintAndroid:
    'Alles außerhalb deiner Liste wird abgewiesen. Das wirkt auf DNS-Ebene, also verlieren auch andere Apps ihre Verbindungen.',
  allowListOnlyHintIos:
    'Safari und In-App-Browser öffnen nur die Seiten aus deiner Liste.',
  allowListOnlyNeedsEntries:
    'Füge mindestens eine erlaubte Seite hinzu, bevor du das einschaltest.',
  domainPlaceholder: 'beispiel.de',
  addDomain: 'Seite hinzufügen',
  removeDomain: '{{domain}} entfernen',
  invalidDomain: 'Gib eine Adresse ein, z. B. beispiel.de',
  listFull: 'Du kannst bis zu {{max}} Seiten in dieser Liste speichern.',
  openHistory: 'Web-Verlauf',
  openHistorySubtitle:
    'Sieh, welche Seiten dieses Gerät erreicht hat und was blockiert wurde',
  category: {
    adult: 'Nur für Erwachsene',
    gambling: 'Glücksspiel',
    dating: 'Dating',
    drugs: 'Drogen & Alkohol',
    violence: 'Gewalt & Extremismus',
    piracy: 'Piraterie',
    social: 'Soziale Netzwerke',
    videoStreaming: 'Video-Streaming',
    gaming: 'Spiele',
    shopping: 'Shopping',
  },
  categoryHint: {
    adult: 'Explizite und Erwachsenen-Seiten',
    gambling: 'Casinos, Wetten, Lootboxen',
    dating: 'Dating- und Fremden-Chat-Apps',
    drugs: 'Cannabis, Vapes, Alkohol',
    violence: 'Gore- und Extremistenforen',
    piracy: 'Torrents und Pirate-Streaming',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, Spieleportale',
    shopping: 'Amazon, Shein, Fast Fashion',
  },
} as const;
