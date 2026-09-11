export const webFilter = {
  title: 'Webfilter',
  fallbackDeviceName: 'Kindergerät',
  appliesToAll: 'Gilt für alle {{count}} Geräte von {{name}}',
  coverageLine: 'Aktiv auf {{enforcing}} von {{total}} Geräten',
  mergeNotice:
    'Die Geräte von {{name}} hatten unterschiedliche Webfilter-Einstellungen. Beim Speichern gilt hier ein Satz für alle, zusammengeführt zur strengeren Wahl.',
  mergeLoosened: 'Jetzt auf jedem Gerät erlaubt: {{domains}}',
  toastUpdateFailed:
    'Webfilter konnte nicht aktualisiert werden. Bitte versuche es erneut.',
  heroTitle: 'Ungeeignete Websites filtern',
  heroSubtitleIos:
    'Nutzt den Webinhaltsfilter der Apple-Bildschirmzeit, um Erwachseneninhalte in Safari und In-App-Browsern auf dem Kindergerät zu begrenzen.',
  heroSubtitleAndroid:
    'Nutzt ein lokales DNS-VPN auf dem Android-Kindergerät, um bekannte ungeeignete Domains in Browsern und vielen Apps zu blockieren.',
  heroSubtitleMacos:
    'Führt den Inhaltsfilter von KidGate auf dem Mac des Kindes aus, um bekannte ungeeignete Seiten in Browsern und vielen Apps zu blockieren.',
  toggleHintIos: 'Benötigt die Bildschirmzeit-Berechtigung auf dem Kindergerät.',
  toggleHintAndroid:
    'Das Kind muss die KidGate-VPN-Verbindung einmal bestätigen. Lass das VPN an, damit der Filter funktioniert.',
  toggleHintMacos:
    'Das Kind muss die KidGate-Filtererweiterung einmal in den Systemeinstellungen genehmigen. Lass sie genehmigt, damit der Filter funktioniert.',
  toggleAccessibilityLabel: 'Webfilter aktivieren',
  safeSearchSectionTitle: 'Sichere Suche & YouTube',
  safeSearchSectionSubtitle:
    'Google, Bing und DuckDuckGo auf sichere Ergebnisse zwingen und YouTube im eingeschränkten Modus sperren. Erfordert den aktiven Webfilter.',
  safeSearchLabel: 'SafeSearch erzwingen',
  safeSearchHint:
    'Sperrt Google SafeSearch, den eingeschränkten YouTube-Modus, Bing und DuckDuckGo auf die strenge Einstellung. Android, Android TV und Chrome.',
  safeSearchStrictNote:
    'YouTube läuft in der strengsten Stufe: Kommentare werden ausgeblendet und manche harmlosen Videos ebenfalls blockiert. Ein Kind kann das im eigenen Konto nicht abschalten.',
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
    'Das Kindergerät zeigt beim Filtern ein VPN-Symbol. VPN aus bedeutet Filter aus – öffne KidGate erneut, um ihn wiederherzustellen.',
  infoLine4Android:
    'Öffne in den Einstellungen „Netzwerk & Internet“, dann „Privates DNS“, und wähle „Aus“.',
  infoLine1Macos:
    'KidGate führt auf dem Mac einen Inhaltsfilter aus, der prüft, welche Websites aufgerufen werden, und blockiert die, die zu deinen Kategorien gehören.',
  infoLine2Macos:
    'Wird der Filter auf dem Mac des Kindes als nicht genehmigt angezeigt, öffne Systemeinstellungen → Allgemein → Anmeldeobjekte & Erweiterungen, um ihn zu genehmigen.',
  infoLine3Macos:
    'Der Mac des Kindes zeigt den Filter als aktiv an, sobald er genehmigt ist. Wird er dort ausgeschaltet, öffne KidGate erneut, um ihn wiederherzustellen.',
  infoLine4Macos:
    'Der Filter liest Website-Namen, die moderne Browser bei etwa der Hälfte der Besuche verbergen – diese Seiten werden nicht anhand deiner Kategorien geprüft. Er blockiert aber weiterhin die meisten Seiten, die Kinder auf diesem Weg erreichen.',
  privateDnsBannerTitle: 'Privates DNS deaktivieren',
  privateDnsBannerBody:
    'Privates DNS ist aktiv, daher kann der Inhaltsfilter umgangen werden. Bitte deaktiviere es.',
  privateDnsBannerButton: 'DNS-Einstellungen öffnen',
  vpnConsentBannerTitle: 'Webfilter-VPN wiederherstellen',
  vpnConsentBannerBody:
    'Das KidGate-VPN ist aus. Der Erwachsenenfilter braucht eine bestehende VPN-Verbindung.',
  vpnConsentBannerButton: 'VPN aktivieren',
  iosOnlyNote: 'Nutzt Bildschirmzeit auf iOS',
  androidVpnNote: 'Nutzt ein lokales DNS-VPN auf Android',
  macosFilterNote: 'Nutzt den Inhaltsfilter von KidGate auf dem Mac',

  heroSubtitleWindows:
    'Führt KidGates eigenen Resolver auf dem PC des Kindes aus, um bekannte ungeeignete Seiten in jedem Browser zu blockieren.',

  toggleHintWindows:
    'Auf dem PC ist nichts zu bestätigen. Der KidGate-Hintergrunddienst schaltet den Filter binnen Sekunden ein.',

  infoLine1Windows:
    'KidGate betreibt auf dem PC einen Resolver, der prüft, welche Seiten nachgeschlagen werden, und die aus Ihren Kategorien blockiert.',

  infoLine2Windows:
    'Chrome, Edge und Firefox werden über eine von KidGate gesetzte Richtlinie daran gebunden. Ihr Kind muss nichts bestätigen.',

  infoLine3Windows:
    'Dafür wird der KidGate-Hintergrunddienst benötigt. Bleibt der Webfilter aus, installieren Sie KidGate auf dem PC als Administrator neu.',

  infoLine4Windows:
    'Der Filter liest nur Seitennamen. Er sieht nicht in eine Seite hinein, und eine gerade nachgeschlagene Seite kann noch einige Minuten laden.',

  windowsFilterNote: 'Nutzt KidGates eigenen Resolver unter Windows',
  webFilteringNote:
    'iOS nutzt den Erwachsenenfilter der Bildschirmzeit; Android eine Blockliste über lokales DNS-VPN.',
  safeSearchAlertsNote:
    'Safari teilt keine Suchbegriffe; Stichwort-Warnungen erfordern einen verwalteten sicheren Browser.',
  webHistoryNote: 'Erfordert einen gefilterten Browser oder DNS/VPN-Berichte.',
  categoriesTitle: 'Was blockiert wird',
  categoriesSubtitle:
    'KidGate bringt eigene Domain-Listen mit. Sie decken die Seiten ab, die Kinder wirklich erreichen, nicht das ganze Web – ergänze sie mit den Listen unten.',
  androidOnlyCategory: 'Nur Android – iOS hat keine Websteuerung pro Kategorie',
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
  blockedPageTitle: 'Website blockiert',
  blockedPageBody:
    'KidGate hat diese Website für deine Familie blockiert. Wenn du denkst, das ist ein Fehler, frag deine Eltern.',
  category: {
    adult: 'Erwachseneninhalte',
    selfHarm: 'Selbstverletzung & Essstörungen',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'Bildung',
    utility: 'Werkzeuge',
    browser: 'Webbrowser',
    devTools: 'Programmierung & Dev-Tools',
    messaging: 'Nachrichten & Anrufe',
    community: 'Foren & Communitys',
    shortVideo: 'Kurzvideo-Feeds',
    creative: 'Foto, Video & Kunst',
    productivity: 'Notizen & Produktivität',
    reading: 'Bücher & Comics',
    fileSharing: 'Dateien teilen & Downloads',
    bypass: 'Umgehungs-Apps',
    gambling: 'Glücksspiel',
    gameGambling: 'Lootboxen & Skin-Wetten',
    dating: 'Dating',
    strangerChat: 'Chat mit Fremden',
    drugs: 'Drogen & Alkohol',
    violence: 'Gewalt & verstörende Bilder',
    extremism: 'Extremismus & Hass',
    piracy: 'Piraterie',
    social: 'Soziale Netzwerke',
    videoStreaming: 'Video-Streaming',
    music: 'Musik',
    gaming: 'Spiele',
    shopping: 'Shopping',
    aiCompanion: 'KI-Begleiter',
    aiAssistant: 'KI-Assistenten',
    cryptoTrading: 'Krypto & Trading',
    vpn: 'VPN-Apps',
  },
  categoryHint: {
    adult: 'Explizite und Erwachsenen-Seiten',
    selfHarm: 'Foren, die Selbstverletzung und Hungern verherrlichen',
    gambling: 'Casinos, Sportwetten, Poker',
    gameGambling: 'Lootboxen öffnen, Skin- und Roblox-Wetten',
    dating: 'Dating-Apps',
    strangerChat: 'Omegle-Klone, zufälliger Videochat',
    drugs: 'Cannabis, Vapes, Alkohol',
    violence: 'Schock- und Gewaltseiten',
    extremism: 'Hassforen und extremistische Seiten',
    piracy: 'Torrents und illegales Streaming',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, Spieleportale',
    shopping: 'Amazon, Shein, Fast Fashion',
    aiCompanion: 'Character.AI, Replika, Rollenspiel-Bots',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, Trading-Apps',
    vpn: 'VPN-Downloadseiten. Blockiert keine bereits installierte App.',
  },
  categoryGroup: {
    harm: 'Schädliche Inhalte',
    contact: 'Fremde',
    bypass: 'Filter umgehen',
    ai: 'KI',
    entertainment: 'Unterhaltung & Soziales',
    money: 'Einkaufen & Geld',
  },
  categoriesOnCount: '{{on}} von {{total}} an',
  askToOpen: 'Eltern fragen',
  askToOpenSubtitle: 'Wenn sie es erlauben, öffnet sich diese Seite.',
  askToOpenDomainLabel: 'Welche Seite?',
  askToOpenBlockedLabel: 'Kürzlich blockiert',
  askToOpenPending: 'Du hast schon eine Seite angefragt. Warte auf die Antwort.',
  askToOpenTooSoon: 'Du hast gerade gefragt. Versuch es in einer Minute noch einmal.',
  askToOpenTooMany: 'Du kannst nur ein paar Seiten auf einmal anfragen.',
  requestsTitle: 'Website-Anfragen',
  requestsSubtitle: 'Websites, für die dieses Gerät um Erlaubnis gebeten hat.',
  siteRequestApproved: 'Website erlaubt',
  siteRequestApprovedDescription:
    '{{domain}} wurde auf {{deviceName}} zu „Immer erlauben“ hinzugefügt.',
  siteRequestDenied: 'Website-Anfrage abgelehnt',
  siteRequestDeniedDescription: '{{domain}} bleibt auf {{deviceName}} gesperrt.',
  siteRequestReceived: 'Website-Anfrage',
  siteRequestReceivedDescription: '{{deviceName}} möchte {{domain}} öffnen.',
  privateDnsStep1: 'Öffne die Einstellungen auf diesem Gerät.',
  privateDnsStep2: 'Wähle „Netzwerk & Internet“.',
  privateDnsStep3: 'Öffne „Privates DNS“ und wähle „Aus“.',
  vpnConsentStepAllow:
    'Wähle „OK“ bei Androids VPN-Anfrage. Ein Schlüsselsymbol bleibt in der Statusleiste, solange der Filter läuft.',
} as const;
