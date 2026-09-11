/** German. */
export default {
  /**
   * Shared with the phone: `appInventorySummaryKey` in
   * `@kidgate/core/domain/appInventoryReport` returns these key names, so the
   * dashboard and `apps/mobile` render one sentence from one decision. Absent
   * until 2026-09-01, which meant this card's subtitle printed the raw key.
   */
  appInventory: {
    summaryFlagged: '{{flagged}} von {{total}} Apps sind einen Blick wert',
    summaryClear: 'Nichts auffällig unter {{total}} Apps',
    summaryFlaggedExtension:
      '{{flagged}} von {{total}} Chrome-Erweiterungen sind einen Blick wert',
    summaryClearExtension: 'Nichts Auffälliges unter {{total}} Chrome-Erweiterungen',
  },
  meta: {
    title: 'KidGate — Kindersicherung, die dein Kind respektiert',
    description:
      'KidGate hilft Eltern, Bildschirmzeit zu steuern, Apps zu sperren, das Web zu filtern und in Kontakt zu bleiben — ohne dem Kind seine Freiheit zu nehmen.',
  },

  common: {
    comingSoon: 'Demnächst',
    loading: 'Wird geladen…',
    signOut: 'Abmelden',
  },

  language: {
    title: 'Sprache',
    change: 'Sprache wechseln',
    system: 'Browsersprache',
    english: 'Englisch',
    vietnamese: 'Vietnamesisch',
    spanish: 'Spanisch',
    portuguese: 'Portugiesisch (Brasilien)',
    german: 'Deutsch',
    french: 'Französisch',
    japanese: 'Japanisch',
    korean: 'Koreanisch',
    arabic: 'Arabisch',
    indonesian: 'Indonesisch',
    italian: 'Italienisch',
    turkish: 'Türkisch',
    hindi: 'Hindi',
    russian: 'Russisch',
  },

  nav: {
    skip: 'Zum Inhalt springen',
    main: 'Haupt',
    about: 'Über uns',
    support: 'Support',
    privacy: 'Datenschutz',
    terms: 'AGB',
    dashboard: 'Dashboard',
  },

  footer: {
    blurb:
      'Kindersicherung, die Familien hilft, sich über Bildschirmzeit zu einigen, statt darüber zu streiten.',
    product: 'Produkt',
    about: 'Über uns',
    dashboard: 'Eltern-Dashboard',
    supportGuides: 'Support & Anleitungen',
    download: 'Download',
    contact: 'Kontakt',
    legal: 'Rechtliches',
    privacyPolicy: 'Datenschutzerklärung',
    terms: 'Allgemeine Geschäftsbedingungen',
    deleteData: 'Deine Daten löschen',
    rights: '© {{year}} KidGate. Alle Rechte vorbehalten.',
    madeFor: 'Gemacht für Familien auf iPhone, Android, Mac und Windows.',
  },

  legalNote:
    'Diese Seite gibt es nur auf Englisch, und der englische Text ist die maßgebliche Fassung. Schreib an [support@kidgate.app](mailto:support@kidgate.app), wenn du bei einem Abschnitt Hilfe brauchst.',

  store: {
    appleAria: 'KidGate im App Store laden',
    appleSmall: 'Laden im',
    appleName: 'App Store',
    googleAria: 'KidGate bei Google Play holen',
    googleSmall: 'Jetzt bei',
    googleName: 'Google Play',
  },

  home: {
    heroBadge: 'Kindersicherung, richtig gemacht',
    heroTitle: 'Schütze deine Kinder',
    heroTitleAccent: 'ohne ihnen ihre Freiheit zu nehmen.',
    heroLede:
      'KidGate gibt Eltern eine ruhige, klare Kontrolle über Bildschirmzeit, Apps und Sicherheit — und das Kind behält ein Handy, das sich weiter nach seinem anfühlt.',
    heroCheck1: 'Bildschirmzeit',
    heroCheck2: 'App-Sperre',
    heroCheck3: 'Webfilter',
    heroCheck4: 'Standort',
    heroCheck5: 'Familien-Dashboard',

    phoneDailyLimit: 'Tageslimit',
    phoneDailyLimitValue: '1 Std. 24 Min. von 3 Std. genutzt',
    phoneBlockedHours: 'Sperrzeiten',
    phoneScheduleOn: 'Zeitplan aktiv',
    phoneLocation: 'Standort',
    phoneLocationValue: 'In der Schule · vor 5 Min.',
    phoneCheckIn: 'Check-in OK',

    trust1Title: 'Niemals Werbung',
    trust1Text: 'Kinderdaten werden nie für Werbung verwendet',
    trust2Title: 'Jederzeit löschen',
    trust2Text: 'Familienkonto und alle Daten auf Wunsch löschen',
    trust3Title: 'Handy und Computer',
    trust3Text: 'iPhone, Android, Mac und Windows in einem Familienkonto',
    trust4Title: 'Ein Tarif pro Familie',
    trust4Text: 'Alle Eltern- und Kindergeräte, ein Abo',

    featuresEyebrow: 'Funktionen',
    featuresTitle: 'Alles, was Eltern brauchen',
    featuresSub:
      'Von Tageslimits bis zum Notfallalarm — eine App für das digitale Wohlbefinden der ganzen Familie.',
    feature1Title: 'Bildschirmzeit & Tageslimits',
    feature1Text:
      'Lege ein Tageslimit und Sperrzeiten für Schule und Schlafenszeit fest. Das Gerät sperrt sich selbst, wenn die Zeit um ist.',
    feature2Title: 'App-Sperre',
    feature2Text:
      'Bestimme genau, welche Apps dein Kind öffnen darf, geschützt durch deine Eltern-PIN, und schalte die Sperre aus der Ferne ein.',
    feature3Title: 'Limits pro App',
    feature3Text:
      'Begrenze jede App einzeln, zusätzlich zum Tageslimit — „eine halbe Stunde TikTok“, ohne es ganz zu verbieten.',
    feature4Title: 'Webfilter & Verlauf',
    feature4Text:
      'Weise Erwachsenen- und Glücksspielseiten auf dem Handy und auf dem Computer ab. Mit Premium siehst du, welche Seiten aufgerufen wurden und welche gestoppt wurden.',
    feature5Title: 'Live-Standort & Orte',
    feature5Text:
      'Sieh den letzten Standort deines Kindes, prüfe den Verlauf und lass dich benachrichtigen, wenn es an einem gespeicherten Ort ankommt oder ihn verlässt.',
    feature6Title: 'Check-in & SOS',
    feature6Text:
      'Bitte dein Kind zu bestätigen, dass alles in Ordnung ist, und erhalte im Notfall sofort ein SOS mit Standort und Foto.',
    feature7Title: 'Schutz- & App-Warnungen',
    feature7Text:
      'Erfahre sofort, wenn eine wichtige Berechtigung ausgeschaltet wird. Mit Premium wartet eine neue App unter Android auf deine Freigabe, bevor sie sich öffnet.',
    feature8Title: 'Belohnungsaufgaben & Extrazeit',
    feature8Text:
      'Kinder verdienen Bonusminuten durch erledigte Aufgaben oder bitten um mehr Zeit. Beides landet zur Freigabe auf deinem Handy.',

    feature9Title: 'Gerätesperre',
    feature9Text:
      'Sperre das Gerät sofort und gib es wieder frei, wenn du so weit bist — Abendessen, Hausaufgaben oder eine ignorierte Regel.',
    feature10Title: 'Wochenbericht',
    feature10Text:
      'Jeden Montag: Bildschirmzeit, Tagesdurchschnitt, was blockiert wurde und wie die Woche im Vergleich zur letzten aussieht.',
    feature11Title: 'Sternetafel',
    feature11Text:
      'Kinder sehen, wie viele Sterne jedes von ihnen diese Woche verdient hat. Montags beginnt sie von vorn, und du entscheidest, ob es sie überhaupt gibt.',
    feature12Title: 'Aktivitätsverlauf',
    feature12Text:
      'Alles, was passiert ist, der Reihe nach — ein Gerät entsperrt, eine Seite gefiltert, eine Aufgabe erledigt, ein Alarm ausgelöst. Der heutige Tag ist kostenlos; Premium behält 30 Tage.',
    featurePremium: 'Premium',
    platformsTitle: 'Ein KidGate, überall wo ein Bildschirm ist',
    platformsSub:
      'Dieselben Regeln und dasselbe Familienkonto auf dem Handy und auf dem Computer. Die Desktop-App wird von dieser Seite installiert, nicht aus einem Store; Chrome und Android TV warten noch auf ihre Store-Prüfung.',

    showcaseEyebrow: 'Eltern-Dashboard',
    showcaseTitle: 'Die ganze Familie auf einem Bildschirm',
    showcaseSub:
      'Bildschirmzeit, blockierte Versuche, Standort und alles, was deine Aufmerksamkeit braucht — auf dem Handy oder in jedem Browser.',
    showcaseTile1: 'Bildschirmzeit heute',
    showcaseTile2: 'Blockierte Versuche',
    showcaseTile3: 'Braucht Aufmerksamkeit',
    showcaseCaption1: 'Berichte in jedem Browser lesen',
    showcaseCaption2: 'Änderungen werden per Handy freigegeben',

    setupEyebrow: 'Einrichtung',
    setupTitle: 'In wenigen Minuten startklar',
    setupSub:
      'Keine technischen Kenntnisse nötig — die App führt dich durch jeden Schritt.',
    step1Title: 'Richte dein Gerät ein',
    step1Text:
      'Installiere KidGate, wähle „Das ist ein Elterngerät“ und melde dich mit Google, Apple oder E-Mail an.',
    step2Title: 'Verbinde das Gerät deines Kindes',
    step2Text:
      'Installiere KidGate auf dem Handy deines Kindes und verbinde es per QR-Code. Unter einer Minute.',
    step3Title: 'Lege deine Regeln fest',
    step3Text:
      'Wähle ein Tageslimit, sperre Apps und Zeiten und aktiviere den Standort — alles von deinem eigenen Handy aus.',

    whyEyebrow: 'Warum KidGate',
    whyTitle: 'Für Vertrauen gebaut, nicht für Überwachung',
    whySub: 'So gestaltet, dass Eltern und Kind im Gespräch bleiben.',
    why1Title: 'Ein Tarif, die ganze Familie',
    why1Text:
      'Ein einziges Premium-Abo deckt alle Eltern- und Kindergeräte ab, und nur die Familieninhaberin oder der Familieninhaber zahlt. Im kostenlosen Tarif bleibt ein Kindergerät überwacht.',
    why2Title: 'Für gemeinsame Erziehung gemacht',
    why2Text:
      'Lade ein zweites Elternteil ein, dieselben Kinder zu betreuen — mit dem Zugriff, den die Inhaberin oder der Inhaber freigibt.',
    why3Title: 'Datenschutz zuerst',
    why3Text:
      'Wir verkaufen niemals persönliche Daten und nutzen Kinderdaten nie für Werbung. Lösche jederzeit alles.',
    why4Title: 'Ehrlich über Grenzen',
    why4Text:
      'Wir sagen dir, was jede Plattform durchsetzen kann und was nicht, statt eine Kontrolle zu versprechen, die es nicht gibt.',

    onlyEyebrow: 'Nur bei KidGate',
    onlyTitle: 'Was du woanders nicht findest',
    onlySub:
      'Sechs Punkte, geprüft gegen die Apps, mit denen Eltern uns vergleichen. Jeder nennt die Plattform, auf der er gilt.',
    only1Title: 'Auch der Fernseher im Wohnzimmer',
    only1Text:
      'Android TV bekommt ein Tageslimit, Sperrzeiten, App-Sperre und einen Webfilter. Auf einem Fernseher funktioniert die Sperre nur nach bestem Bemühen — eine gesperrte App wird zurück auf den Startbildschirm geschickt — und vom Sofa aus gibt es weder SOS noch eine Anfrage nach zusätzlicher Zeit. Der Build läuft heute auf echter Hardware und wartet auf seine Store-Veröffentlichung — deshalb steht in der Plattformliste Geplant. Die meisten Kindersicherungen hören beim Handy auf.',
    only2Title: 'Nachrichtenwarnungen, die auf dem Handy bleiben',
    only2Text:
      'Auf Android werden Nachrichten direkt auf dem Gerät mit Stichwortlisten in 14 Sprachen abgeglichen, und was das Handy verlässt, ist das gefundene Wort, niemals das Gespräch. Eines ändert das, und nur wenn du es willst: Schaltest du die KI-Bestätigung ein, wird eine mehrdeutige eingehende Nachricht zur Beurteilung gesendet, damit dich nicht ein gewöhnliches Wort aus dem Schlaf reißt.',
    only3Title: 'Jede App, keine App-Liste',
    only3Text:
      'Auf Android kommen Warnungen aus Benachrichtigungen und Tippeingaben in allem, was dein Kind nutzt — Zalo, LINE, KakaoTalk, der Chat eines Spiels — nicht aus einer festen Liste unterstützter Apps.',
    only4Title: 'Ein Ausweg für das Kind',
    only4Text:
      'Fünf Sekunden SOS gedrückt, und du wirst sofort benachrichtigt, mit Standort — auf Android und Mac wird das Gerät zudem kurz entsperrt. Ein Kind, das immer Hilfe erreichen kann, hat keinen Grund, gegen die App zu kämpfen.',
    only5Title: 'Regeln, die ohne Internet gelten',
    only5Text:
      'Sperrzeiten und Tageslimit werden auf dem Gerät selbst durchgesetzt; den Router auszustecken ändert nichts. Der Fernseher nimmt deine Eltern-PIN sogar ganz ohne Verbindung an.',
    only6Title: 'Anerkennung, wenn die Woche sie verdient hat',
    only6Text:
      'Jeder Wochenbericht hält Platz für das, was gut lief — ein eingehaltenes Limit, keine späte Nacht mehr, eine erledigte Aufgabe — und sagt es erst, wenn die Woche wirklich gemessen wurde.',

    faqEyebrow: 'FAQ',
    faqTitle: 'Was Eltern zuerst fragen',
    faqSub: 'Schnelle Antworten vor dem Download.',
    faq1Q: 'Gibt es eine kostenlose Testphase?',
    faq1A:
      'Ja. Die 7-tägige Testphase beginnt, sobald dein erstes Eltern- und Kindergerät verbunden sind, und umfasst alle Premium-Funktionen. Danach laufen die Regeln, die du gesetzt hast — Tageslimit, Sperrzeiten, Blockierte Apps, Webfilter, Gerätesperre, Anfragen nach zusätzlicher Zeit und Belohnungsaufgaben — auf einem Kindergerät kostenlos weiter, und du kannst dieses Gerät weiterhin nach seinem Standort fragen. Live-Aktivität, Verlauf, Wochenberichte und Standortverfolgung sind das, was Premium wieder hinzufügt.',
    faq2Q: 'Wie viele Geräte kann ich verwalten?',
    faq2A:
      'Ein Abo deckt deine ganze Familie ab — jedes Kindergerät und jedes Elternteil im selben Tarif. Im kostenlosen Tarif bleibt ein Kindergerät überwacht, und du wählst welches; die anderen setzen die bereits gesetzten Regeln weiter durch und senden keine Aktivität mehr.',
    faq3Q: 'Kann mein Kind KidGate deinstallieren oder umgehen?',
    faq3A:
      'Sensible Einstellungen liegen hinter deiner Eltern-PIN, und Schutzwarnungen melden sofort, wenn auf dem Kindergerät eine wichtige Berechtigung ausgeschaltet wird.',
    faq4Q: 'Kann ich alles vom Computer aus verwalten?',
    faq4A:
      'Ja. Das Eltern-Dashboard öffnet sich in jedem Browser — melde dich mit einem Code von deinem Handy an, und du siehst dieselbe Familie, dieselben Geräte und dieselben Einstellungen. Lesen funktioniert sofort; ein Gerät zu sperren oder ein Limit zu ändern verlangt deine Eltern-PIN oder eine Freigabe aus der App.',
    faq5Q: 'Was kostet Premium?',
    faq5A:
      'Premium kostet in den USA $6.99 im Monat oder $39.99 im Jahr, abgerechnet über den App Store oder Google Play und dort in deiner eigenen Währung angezeigt. Ein einmalig bezahlter Lifetime-Tarif deckt bis zu drei Kindergeräte ab. Der kostenlose Tarif läuft nie ab.',
    faqMore: 'Noch Fragen? Zum Support',

    ctaTitle: 'Schütze deine Familie ab heute',
    ctaSub:
      '7 Tage kostenlose Testphase mit vollem Zugriff. Zum Start keine Kreditkarte nötig.',
    ctaNote: 'Jederzeit im App Store oder bei Google Play kündbar.',
  },

  login: {
    title: 'Eltern-Anmeldung',
    sub: 'Nutze dasselbe Konto, das du in der KidGate-App erstellt hast. Hier siehst du dieselbe Familie, dieselben Geräte und Einstellungen.',
    notConfiguredTitle: 'Firebase ist in diesem Deployment nicht konfiguriert.',
    notConfiguredBody:
      'Setze die Umgebungsvariablen VITE_FIREBASE_*, um die Anmeldung zu aktivieren.',
    qrWhy:
      'Mit dem Handy zu scannen meldet dich an und entsperrt die Steuerung in einem Schritt. Die Methoden unten melden dich zum Lesen an; die Steuerung zu entsperren braucht dann deine Eltern-PIN.',
    orViewOnly: 'oder anders anmelden',
    google: 'Weiter mit Google',
    googleBusy: 'Google wird geöffnet…',
    apple: 'Weiter mit Apple',
    appleBusy: 'Apple wird geöffnet…',
    orEmail: 'oder nutze deine E-Mail',
    email: 'E-Mail',
    emailPlaceholder: 'du@beispiel.de',
    password: 'Passwort',
    submit: 'Anmelden',
    submitBusy: 'Anmeldung läuft…',
    forgot: 'Passwort vergessen?',
    resetNeedsEmail:
      'Gib zuerst deine E-Mail-Adresse ein und wähle dann „Passwort vergessen“.',
    resetSent: 'E-Mail zum Zurücksetzen des Passworts an {{email}} gesendet.',
    foot: 'KidGate-Konten werden in der mobilen App erstellt — das Web-Dashboard meldet sich nur bei einer bestehenden Familie an. Neu hier? Installiere zuerst die App und verbinde ein Kindergerät.',
  },

  qr: {
    start: 'Mit der KidGate-App anmelden',
    generating: 'Code wird erzeugt…',
    step1: 'Öffne KidGate auf deinem Handy.',
    step2: 'Gehe zu *Einstellungen → Im Web anmelden*.',
    step3: 'Scanne diesen Code und gib ihn frei.',
    waiting: 'Warte auf Freigabe · läuft ab in {{time}}',
    signingIn: 'Freigegeben. Anmeldung läuft…',
    expired: 'Dieser Code ist abgelaufen.',
    failed: 'Die Anmeldung wurde nicht abgeschlossen.',
    newCode: 'Neuen Code anzeigen',
    tryAgain: 'Erneut versuchen',
  },

  authError: {
    generic: 'Etwas ist schiefgelaufen. Versuche es erneut.',
    invalidEmail: 'Diese E-Mail-Adresse sieht nicht richtig aus.',
    userDisabled: 'Dieses Konto wurde deaktiviert.',
    userNotFound: 'Kein KidGate-Konto nutzt diese E-Mail-Adresse.',
    wrongPassword: 'Falsche E-Mail oder falsches Passwort.',
    rateLimited:
      'Zu viele Anmeldecodes aus diesem Netzwerk. Versuchen Sie es in {{minutes}} Min. erneut.',
    tooManyRequests:
      'Zu viele Versuche. Warte ein paar Minuten und versuche es erneut.',
    popupClosed: 'Das Anmeldefenster wurde vor dem Abschluss geschlossen.',
    popupCancelled: 'Die Anmeldung wurde abgebrochen.',
    popupBlocked:
      'Dein Browser hat das Anmeldefenster blockiert. Erlaube Pop-ups für diese Seite und versuche es erneut.',
    accountExists:
      'Diese E-Mail ist bereits mit einer anderen Anmeldemethode registriert. Nutze die, die du in der App eingerichtet hast.',
    operationNotAllowed:
      'Diese Anmeldemethode ist für dieses Projekt noch nicht aktiviert.',
    unauthorizedDomain:
      'Diese Domain ist in den Einstellungen von Firebase Authentication nicht autorisiert.',
    invalidCustomToken:
      'Dieser Anmeldelink ist nicht mehr gültig. Zeige einen neuen QR-Code an.',
    webRejected: 'Die Anfrage wurde am Handy abgelehnt.',
    webExpired: 'Der Code ist abgelaufen. Erzeuge einen neuen.',
    noFunctionsUrl:
      'Die Cloud-Functions-URL ist nicht konfiguriert (VITE_FIREBASE_FUNCTIONS_URL).',
    sessionExpired: 'Deine Sitzung ist abgelaufen. Melde dich erneut an.',
  },

  live: {
    checkingSession: 'Deine Sitzung wird geprüft…',
    loadingFamily: 'Deine Familie wird geladen…',
    loadFailedTitle: 'Deine Familie konnte nicht geladen werden',
    noAccessTitle: 'Keine Familie in diesem Konto',
    noAccess:
      'Dieses Konto hat keinen Zugriff auf eine KidGate-Familie. Melde dich mit dem Elternkonto an, das du in der App nutzt.',
  },

  time: {
    never: 'nie',
    justNow: 'gerade eben',
    minutes: 'vor {{count}} Min.',
    hours: 'vor {{count}} Std.',
    days: 'vor {{count}} T.',
  },

  viz: {
    hours: '{{count}}h',
    minutes: '{{count}}min',
    hoursMinutes: '{{hours}}h {{minutes}}min',
    none: '—',
    byDay: 'Bildschirmzeit pro Tag',
    limit: 'Limit {{value}}',
    screenTime: 'Bildschirmzeit',
    bonus: 'Bonus',
    bonusEarned: 'Verdienter Bonus',
    overLimit: 'Über dem Tageslimit',
    dailyLimit: 'Tageslimit',
    ofLimit: 'von {{value}}',
    noLimit: 'kein Limit gesetzt',
    blocked: 'Gesperrt',
    blockedHours: 'Sperrzeiten',
    day0: 'So',
    day1: 'Mo',
    day2: 'Di',
    day3: 'Mi',
    day4: 'Do',
    day5: 'Fr',
    day6: 'Sa',
    timelineUsed: 'In Benutzung',
    timelineIdle: 'Nicht in Benutzung',
    timelineUnmeasured: 'Nicht gemessen',
    timelineUnmeasuredHint:
      'KidGate lief nicht auf dem Gerät, oder das Gerät war im Ruhezustand. Diese Minuten zählen auch nicht zur Gesamtzeit.',
    timelineUnsupported:
      'Dieses Gerät kann melden, wie lange es genutzt wurde – aber nicht wann.',
    timelinePending: 'Noch keine Zeitleiste gemeldet.',
  },

  perm: {
    screenTime: 'Bildschirmzeit',
    location: 'Standort',
    notifications: 'Mitteilungen',
    camera: 'Kamera',
    backgroundAppRefresh: 'Hintergrundaktualisierung',
    overlay: 'Über anderen Apps anzeigen',
    batteryOptimization: 'Akku ohne Einschränkung',
    exactAlarm: 'Exakte Wecker',
    accessibility: 'Bedienungshilfen',
  },

  webCat: {
    adult: 'Nur für Erwachsene',
    selfHarm: 'Selbstverletzung & Essstörungen',
    gambling: 'Glücksspiel',
    gameGambling: 'Lootboxen & Skin-Wetten',
    dating: 'Dating',
    strangerChat: 'Chat mit Fremden',
    drugs: 'Drogen & Alkohol',
    violence: 'Gewalt & Gore',
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

  appCat: {
    adult: 'Nur für Erwachsene',
    gambling: 'Glücksspiel',
    gameGambling: 'Lootboxen & Skin-Wetten',
    dating: 'Dating',
    drugs: 'Drogen & Alkohol',
    violence: 'Gewalt & Gore',
    piracy: 'Piraterie',
    bypass: 'Filterumgehung & VPN',
  },

  webCatGroup: {
    harm: 'Schädliche Inhalte',
    contact: 'Fremde',
    bypass: 'Filter umgehen',
    ai: 'KI',
    entertainment: 'Unterhaltung & Soziales',
    money: 'Einkaufen & Geld',
  },

  dash: {
    tabOverview: 'Übersicht',
    tabScreen: 'Bildschirmzeit',
    tabApps: 'Apps & Web',
    tabSafety: 'Sicherheit',
    tabControls: 'Steuerung',
    tabReport: 'Wochenbericht',
    tabReportNew: 'Neuer Wochenbericht',

    children: 'Kinder',
    noChildren: 'Noch keine Kindergeräte verbunden.',
    unassignedDevices: 'Nicht zugeordnet',
    manage: 'Verwalten',
    parents_one: '{{count}} Elternteil',
    parents_other: '{{count}} Eltern',
    devices_one: '{{count}} Kindergerät',
    devices_other: '{{count}} Kindergeräte',
    planManageOnPhone:
      'Tarife werden in der KidGate-App auf dem Handy gekauft und geändert.',
    fallbackFamily: 'Deine Familie',
    fallbackDevice: 'Kindergerät',

    statusOnline: 'Online',
    statusOffline: 'Offline',
    statusLocked: 'Gesperrt',
    statusLockSent: 'Sperre gesendet',
    statusLockNotApplied: 'Sperre nicht angewendet',
    statusPaused: 'Pausiert',

    stateAllowed: 'Erlaubt',
    stateDenied: 'Ausgeschaltet',
    stateNotDetermined: 'Noch nicht angefragt',
    stateRestricted: 'Eingeschränkt',
    stateUnavailable: 'Nicht verfügbar',
    stateUnknown: 'Unbekannt',

    lastActive: 'Zuletzt aktiv {{when}}',
    appVersion: 'App-Version',
    appVersionUpdate: '{{running}} · {{latest}} verfügbar',
    appVersionRestart: '{{running}} · App neu starten, um abzuschließen',
    buildOutdated: 'Update verfügbar',
    checkIn: 'Check-in',
    sending: 'Wird gesendet…',
    lockDevice: 'Gerät sperren',
    unlock: 'Entsperren',
    working: 'Wird ausgeführt…',
    save: 'Speichern',

    unlockTitle: 'Änderungen sind gesperrt.',
    unlockBody:
      'Ansehen geht sofort. Um ein Gerät zu sperren, Limits zu ändern oder Anfragen zu genehmigen, entsperre diesen Browser mit deiner Eltern-PIN – oder bestätige ihn, indem du den QR-Code mit der KidGate-App scannst. Check-ins funktionieren in beiden Fällen.',
    unlockCta: 'Änderungen entsperren',
    unlockToChange: 'Erst Änderungen entsperren',
    pinTitle: 'Eltern-PIN eingeben',
    pinBody:
      'Dieselben sechs Ziffern wie in der App. Dieser Browser bleibt 8 Stunden entsperrt; eine Freigabe aus der App hält ihn 7 Tage angemeldet.',
    pinLabel: 'Eltern-PIN',
    pinSubmit: 'Entsperren',
    pinOrScan: 'Oder vom Handy bestätigen',
    qrSaferNote:
      'Die Bestätigung vom Handy ist die sicherere der beiden: Sie verlangt das gekoppelte Handy in der Hand, während die PIN sechs Ziffern sind, bei denen dir jemand in der Familie zugesehen haben kann.',
    pinWrong: 'Falsche PIN. Verbleibende Versuche: {{count}}.',
    pinLocked:
      'Zu viele Fehlversuche. Warte 15 Minuten oder bestätige diesen Browser vom Handy aus.',
    pinNotSet:
      'Deine Familie hat noch keine Eltern-PIN. Lege in der App eine fest oder bestätige diesen Browser vom Handy aus.',
    unlockedToast: 'Änderungen in diesem Browser entsperrt.',
    close: 'Schließen',

    noDeviceTitle: 'Noch kein Kindergerät',
    noDeviceBody:
      'Öffne KidGate auf deinem Handy, gehe zu *Familie → + → Kindergerät verbinden* und scanne den QR-Code auf dem Gerät deines Kindes. Es erscheint hier wenige Sekunden nach dem Verbinden.',

    toastCheckIn: '{{name}} erhält eine Check-in-Anfrage.',
    toastTimeApproved: 'Zusatzzeit freigegeben.',
    toastCheckInResent: 'Check-in erneut gesendet.',

    tileScreenToday: 'Bildschirmzeit heute',
    tileSameAsAverage: 'Wie der 7-Tage-Durchschnitt',
    tileDeltaUp: '↑ {{percent}} % gegenüber dem 7-Tage-Durchschnitt',
    tileDeltaDown: '↓ {{percent}} % gegenüber dem 7-Tage-Durchschnitt',
    tileBlocked: 'Blockierte Versuche',
    tileBlockedMeta: 'Seit der Installation gestoppte Apps',
    tileSites: 'Gefilterte Seiten',
    tileCategoriesHit_one: '{{count}} Kategorie betroffen',
    tileCategoriesHit_other: '{{count}} Kategorien betroffen',
    tileNothingBlocked: 'Noch nichts blockiert',
    tileAttention: 'Braucht Aufmerksamkeit',
    tileOpenItems: 'Offene Punkte unten',
    tileAllClear: 'Alles in Ordnung',

    cardScreenTime: 'Bildschirmzeit',
    cardScreenTimeSub: 'Letzte 14 Tage, gemessen am Tageslimit',
    usageSyncNote:
      'Bildschirmzeit kann ein paar Minuten brauchen, bis sie hier angezeigt wird — länger, wenn das Gerät keine Internetverbindung hat oder unerwartet beendet wurde.',
    usageSyncNoteTv:
      'Dieser Fernseher meldet sich nur regelmäßig, daher kann es bis zu einer Stunde dauern, bis die Bildschirmzeit hier angezeigt wird — länger ohne Internetverbindung.',
    cardRecent: 'Letzte Aktivität',
    cardRecentSub: 'Neueste zuerst',
    cardRecentEmpty:
      'Noch nichts protokolliert. Sperren, blockierte Apps, Ortsmeldungen und Bildschirmzeit-Abgleiche dieses Geräts erscheinen hier.',
    cardAttention: 'Braucht deine Aufmerksamkeit',
    cardAttentionSub: '{{count}} offen',
    cardAttentionEmpty: 'Nichts zu prüfen. Der Schutz sieht gut aus.',
    cardProtection: 'Schutzstatus',
    cardProtectionSub: 'Geprüft {{when}}',

    attnMoreMinutes: '{{name}} hat um {{minutes}} Minuten mehr gebeten',
    attnReason: '„{{reason}}“ · {{when}}',
    attnCheckInMissed: 'Ein Check-in wurde verpasst',
    attnCheckInMissedMeta: 'Gesendet {{when}} · keine Antwort',
    attnLimitReached: 'Tageslimit erreicht — Gerät gesperrt',
    attnLimitReachedMeta: 'Heute {{used}} genutzt',
    attnBatteryLow: 'Akku ist schwach ({{level}} %)',
    attnBatteryLowMeta: 'Standort-Updates können pausieren, wenn das Handy ausgeht',
    attnReview: 'Prüfen',
    attnResend: 'Erneut senden',
    attnHowToFix: 'So behebst du das',
    attnUnlock: 'Entsperren',
    attnAppOnly: 'In der KidGate-App verfügbar',

    todayTitle: 'Heute',
    todaySub: 'Gemessen am Tageslimit und verdientem Bonus',
    used: 'Genutzt',
    left: 'Übrig',
    dailyLimit: 'Tageslimit',
    bonusToday: 'Bonus heute',
    off: 'Aus',
    on: 'An',
    topAppsTitle: 'Top-Apps heute',
    topAppsTitleDay: 'Top-Apps · {{date}}',
    topAppsSub: 'App-Limits werden als Markierung angezeigt',
    topAppsFreeHint:
      'Top 3 heute – die vollständige Liste und der Verlauf gibt es mit Premium.',
    trendTitle: 'Bildschirmzeit-Verlauf',
    trendSub: 'Letzte {{count}} Tage',
    rangeDays: '{{count}} T',
    blockedHoursTitle: 'Sperrzeiten',
    blockedHoursSub_one:
      '{{count}} Zeitfenster · das Gerät bleibt in den schattierten Blöcken gesperrt',
    blockedHoursSub_other:
      '{{count}} Zeitfenster · das Gerät bleibt in den schattierten Blöcken gesperrt',
    scheduleOff: 'Zeitplan ist aus',
    schedMax: 'Mehr als {{max}} Zeitfenster kann ein Gerät nicht halten.',

    appUsageTitle: 'App-Nutzung heute',
    appUsageSub: 'Zeit pro App',
    topAppsOther: 'Andere Apps',
    underAMinute: 'Unter einer Minute',
    appUsageEmpty: 'Noch keine App-Nutzung gemeldet.',
    appBlockingTitle: 'App-Sperre',
    appBlockingSub: 'Auf dem Kindergerät mit der Eltern-PIN ausgewählt',
    blockingLabel: 'Sperre',
    appsBlocked: 'Gesperrte Apps',
    categories: 'Kategorien',
    perAppHint:
      'App-Limits laufen unabhängig von der Sperrliste — „30 Minuten TikTok“ ist eine andere Entscheidung als „kein TikTok“.',
    limitsMax: 'Mehr als {{max}} begrenzte Apps kann ein Gerät nicht halten.',
    perDay: '{{value}}/Tag',
    webActivityTitle: 'Web-Aktivität',
    webActivitySub: 'Meistbesuchte Domains, letzte 30 Tage',
    webActivityEmpty: 'Noch keine Web-Aktivität.',
    inventoryTitle: 'Installierte Apps',
    inventorySub: 'Alles auf diesem Gerät, nicht nur die Änderungen',
    inventoryEmpty: 'Dieses Gerät hat seine App-Liste noch nicht veröffentlicht.',
    inventoryStale:
      'Diese Liste ist veraltet. Sie wird erneuert, sobald sich das Gerät das nächste Mal meldet.',
    inventoryFirstScan:
      'Erster Scan – KidGate kann nicht sagen, wann diese Apps dazugekommen sind.',
    inventoryFlagged: 'Einen Blick wert',
    inventoryFlaggedLabel: 'Zu prüfen',
    inventoryOtherLabel: 'Bestimmt',
    inventoryUnknownLabel: 'Unbestimmt',
    inventoryIncomplete:
      'Eine App ohne Symbol auf dem Startbildschirm erscheint hier möglicherweise nicht.',
    inventoryPending: 'Wartet auf deine Freigabe',
    pendingInstallBlocked: 'Gesperrt, bis du sie erlaubst',
    installAllow: 'Erlauben',
    pendingInstallsTitle: 'Neue Apps warten auf Freigabe',
    pendingInstallsSub:
      'Nach dem Einschalten der Freigabe installiert und vom Gerät von selbst gesperrt',
    pendingInstallsEmpty: 'Keine neuen Apps warten auf Freigabe.',
    toastInstallAllowed: 'App erlaubt',
    rowInstallApproval: 'Neue Apps freigeben',
    rowInstallApprovalDesc: '{{count}} Apps warten auf Freigabe',
    rowInstallApprovalDesc_one: '{{count}} App wartet auf Freigabe',
    rowInstallApprovalDescIos:
      'Blendet den App Store aus — Apple erlaubt keine Freigabe pro App',
    webActivitySyncNote:
      'Die Web-Aktivität kann ein paar Minuten brauchen, bis sie hier angezeigt wird — länger, wenn das Gerät keine Internetverbindung hat oder unerwartet beendet wurde.',
    webActivitySyncNoteTv:
      'Dieser Fernseher meldet sich nur regelmäßig, daher kann es bis zu einer Stunde dauern, bis die Web-Aktivität hier angezeigt wird — länger ohne Internetverbindung.',
    colDomain: 'Domain',
    colVisits: 'Besuche',
    colBlocked: 'Blockiert',
    colLastSeen: 'Zuletzt gesehen',
    videosTitle: 'Angesehene Videos',
    videosSub: 'Was auf YouTube und im Web angesehen wurde',
    videosEmpty: 'Noch keine Videos.',
    colVideo: 'Video',
    colChannel: 'Kanal',
    colViews: 'Aufrufe',
    filterRefusedTitle: 'Was der Filter abgewiesen hat',
    filterRefusedSub_one: '{{count}} blockierte Anfrage, letzte 30 Tage',
    filterRefusedSub_other: '{{count}} blockierte Anfragen, letzte 30 Tage',
    nothingBlockedYet: 'Es wurde noch nichts blockiert.',
    rollupNoteAi:
      'Einige Arten wurden aus dem Seitennamen abgeleitet statt einer bekannten Seite zugeordnet — ein paar können daneben liegen.',
    webBackgroundNote:
      'Wenn niemand das Gerät benutzt, gehen einige Apps im Hintergrund weiter ins Internet — Updates, Empfehlungen und Abgleiche laufen von selbst.',
    filterHintIos:
      'Unter iOS nutzt der Filter Apples Sperre für Erwachseneninhalte — das Blocken einzelner Kategorien gibt es nur unter Android.',
    filterHintAndroid: 'Die Kategorien setzt der DNS-Filter auf dem Gerät durch.',
    filterHintMacos:
      'Die Kategorien setzt der KidGate-Inhaltsfilter auf dem Mac durch.',

    locationTitle: 'Standort',
    locationSharingOff: 'Teilen ist aus',
    locationSyncNote:
      'Der Standort kann ein paar Minuten brauchen, bis er aktualisiert wird — länger, wenn das Gerät keine Internetverbindung hat oder unerwartet beendet wurde.',
    locationUpdated: 'Aktualisiert {{when}}',
    locationWaiting: 'Warte auf die erste Aktualisierung',
    lastKnownLocation: 'Letzter bekannter Standort',
    nearPlace: 'In der Nähe von {{place}}',
    noPlaces:
      'Noch keine Orte gespeichert. Füge in der App einen hinzu, um benachrichtigt zu werden, wenn dein Kind ankommt oder geht.',
    placeRadius: '{{meters}} m · ',
    placeArrive: 'Ankunft',
    placeLeave: 'Abfahrt',
    placeNoAlerts: 'keine Warnungen',
    placeSamePin:
      'Das ist dieselbe Stelle wie „{{name}}“. Nutze die Karte in der App, um ihn woanders zu setzen.',
    placeWebHint:
      'Im Web lässt sich ein Ort nur dort setzen, wo das Gerät zuletzt seine Position gemeldet hat. Für jeden anderen Ort die Karte in der App nutzen.',
    placeNeedsLocation: 'Warte auf eine Position von diesem Gerät.',
    sosTitle: 'SOS-Alarme',
    sosSub: 'Notsignale vom Kindergerät',
    sosEmpty:
      'Keine SOS-Alarme. Probiert es einmal gemeinsam aus, damit ihr beide wisst, wie es funktioniert.',
    sosAcknowledged: 'bestätigt',
    sosActive: 'aktiv',

    checkInsTitle: 'Check-ins',
    checkInsSub: 'Bitte dein Kind zu bestätigen, dass alles in Ordnung ist',
    checkInSafe: 'Sicherheit bestätigt',
    checkInMissed: 'Keine Antwort',
    checkInWaiting: 'Wartet',
    checkInPhotoRequested: 'Foto und Standort wurden angefordert',
    checkInNoReply: 'noch keine Antwort',
    checkInPhotoSkipped: 'Foto übersprungen',
    checkInPhotoAttached: 'Foto angehängt',
    checkInNoPhoto: 'kein Foto angefordert',
    sendCheckIn: 'Jetzt einen Check-in senden',

    protectionAlertsTitle: 'Schutzwarnungen',
    protectionAlertsSub_one: '{{count}} Ereignis seit der Installation',
    protectionAlertsSub_other: '{{count}} Ereignisse seit der Installation',
    protectionAlertsHint:
      'Eine Schutzwarnung heißt, dass KidGate weniger durchsetzen kann, als du eingestellt hast. Stelle die Berechtigung auf dem Kindergerät wieder her, um sie zu löschen.',

    limitCardTitle: 'Tageslimit',
    limitCardSub: 'Begrenze die verfügbaren Minuten pro Tag',
    limitAria: 'Minuten des Tageslimits',
    limitScaleMin: '30 Min.',
    limitScaleMax: '8 Std.',
    limitHint:
      'Bonusminuten aus Aufgaben und freigegebenen Zeitanfragen kommen obendrauf, nur für diesen Tag.',
    limitShared: 'Für alle Geräte zusammen',
    limitSharedSpent: 'Heute {{used}} von {{limit}} genutzt',
    limitSharedHint:
      'Das ist der ganze Tag dieses Kindes, kein Limit für dieses eine Gerät — jedes Gerät bekommt, was die anderen übrig lassen. Änderbar in der KidGate-App.',
    whatsOnTitle: 'Was aktiviert ist',
    whatsOnSub: 'Änderungen werden mit dem Kindergerät synchronisiert',
    rowBlockedHours: 'Sperrzeiten',
    rowBlockedHoursDesc_one: '{{count}} Zeitfenster · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} Zeitfenster · {{list}}',
    rowAppBlocking: 'App-Sperre',
    rowAppBlockingApps: '{{count}} Apps',
    rowAppBlockingApps_one: '{{count}} App',
    rowAppBlockingCategories: '{{count}} Kategorien',
    rowAppBlockingCategories_one: '{{count}} Kategorie',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Webfilter',
    rowWebFilterDesc_one: '{{count}} Kategorie abgewiesen',
    rowWebFilterDesc_other: '{{count}} Kategorien abgewiesen',
    rowNotSupported: 'Auf diesem Gerät nicht unterstützt',
    rowWebFilterAwaitingApproval: 'Wartet auf Freigabe auf dem Gerät',
    rowWebFilterSwitchedOff: 'Auf dem Gerät ausgeschaltet',
    rowLocation: 'Standortfreigabe',
    rowLocationDesc: 'Letzte Aktualisierung {{when}}',
    rowLocationNone: 'Noch kein Standort',
    rowSearchMonitoring: 'Suchanfragen prüfen',
    rowSearchMonitoringDesc:
      'Browser und YouTube. Gemeldet wird nur das markierte Wort, nie die Suchanfrage selbst.',
    rowSafeSearch: 'SafeSearch erzwingen',
    rowSafeSearchDesc:
      'Sperrt Google SafeSearch, den eingeschränkten YouTube-Modus, Bing und DuckDuckGo auf die strenge Einstellung. Android, Android TV und Chrome. Auf dieser Stufe blendet YouTube außerdem Kommentare aus und blockiert manche harmlosen Videos.',

    webFilterCatsTitle: 'Webfilter-Kategorien',
    webFilterCatsSub: 'Blockierte Inhaltstypen',
    dnsHint:
      'Verschlüsselte DNS-Resolver werden immer abgewiesen, solange der Filter läuft — sie erreichbar zu lassen ist genau das, was einem Browser erlaubt, alle anderen Kategorien zu umgehen.',
    starChartTitle: 'Sternetafel',
    starChartSub: 'Diese Woche gesammelte Sterne, pro Kind',
    starChartEmpty:
      'Fügen Sie in der App ein zweites Kind hinzu, um die Sternetafel zu starten.',
    starChartStars: '{{count}} Sterne',
    familyScreenTimeTitle: 'Bildschirmzeit der Familie',
    familyScreenTimeSub: 'Wenigste Bildschirmzeit zuerst, diese Woche',
    familyScreenTimeEmpty:
      'Diese Woche hat noch niemand gemeldet. Zeilen erscheinen, sobald Handys melden.',
    familyScreenTimeParent: 'Elternteil',
    familyScreenTimeDays: '{{count}} Tage gemeldet',
    rewardTasksTitle: 'Belohnungsaufgaben',
    rewardTasksSub: 'Verdiene Extraminuten durch erledigte Aufgaben',
    rewardTaskMeta: '+{{minutes}} Min. · {{cadence}}',
    rewardTaskStars: 'Schwierigkeit: {{count}} von 3',
    rewardTaskWaiting: ' · wartet auf deine Freigabe',
    approve: 'Freigeben',
    siteRequestsTitle: 'Website-Anfragen',
    siteRequestsSub: 'Websites, für die dieses Gerät um Erlaubnis gebeten hat',
    siteRequestAllow: 'Erlauben',
    siteRequestDeny: 'Jetzt nicht',
    attnSiteRequest: '{{name}} möchte {{domain}} öffnen',
    toastSiteAllowed: 'Website erlaubt',
    timelineTitle: 'Wann es genutzt wurde',
    timelineSub: 'Heute, von Mitternacht bis Mitternacht. Grün ist Zeit am Gerät.',
  },

  controlError: {
    generic: 'Das hat nicht geklappt. Noch einmal versuchen.',
    network: 'Keine Verbindung. Netzwerk prüfen und erneut versuchen.',
    sessionExpired: 'Die Sitzung ist abgelaufen. Bitte erneut anmelden.',
    forbidden:
      'Diese Browser-Sitzung kann nichts ändern. Melde dich erneut an, indem du den QR-Code mit der KidGate-App scannst.',
    notFound: 'Das gibt es nicht mehr — womöglich wurde es am Telefon geändert.',
    conflict:
      'Jemand hat das gerade geändert. Neu laden, um den aktuellen Stand zu sehen.',
    rateLimited:
      'Zu viele Änderungen auf einmal. Einen Moment warten und erneut versuchen.',
    server: 'KidGate konnte das nicht abschließen. Gleich noch einmal versuchen.',
    premiumRequired:
      'Das ist eine Premium-Funktion. Tarife werden in der KidGate-App auf deinem Handy verwaltet.',
  },

  report: {
    title: 'Wochenbericht',
    subtitle: 'Was KidGate in dieser Woche aufgefallen ist.',
    weekOf: 'Woche {{week}}',
    range: '{{from}} – {{to}}',
    writtenAt: 'Geschrieben am {{when}}',
    triggerScheduled: 'Montag versendet',
    triggerManual: 'Selbst erstellt',
    statScreenTime: 'Bildschirmzeit',
    statDailyAverage: 'Tagesdurchschnitt',
    statBlockedApps: 'Blockierte Apps',
    statBlockedWebVisits: 'Gefilterte Seiten',
    statTasksApproved: 'Erledigte Aufgaben',
    trendUp: '{{value}} mehr als in der Vorwoche',
    trendDown: '{{value}} weniger als in der Vorwoche',
    trendFlat: 'Etwa wie in der Vorwoche',
    trendFirstWeek: 'Erste gemessene Woche',
    barThisWeek: 'Diese Woche',
    barLastWeek: 'Letzte Woche',
    highlights: 'Wissenswert',
    sevAttention: 'Einen Blick wert',
    sevNotable: 'Bemerkenswert',
    sevInfo: 'Gut zu wissen',
    findingUsageUp:
      'Die Bildschirmzeit stieg um {{percent}}% — {{delta}} mehr als in der Vorwoche.',
    findingUsageDown:
      'Die Bildschirmzeit sank um {{percent}}% — {{delta}} weniger als in der Vorwoche.',
    findingUsageFlat: 'Die Bildschirmzeit blieb bei {{total}}.',
    findingLateNight_one: 'Eine Nacht nach 23 Uhr — bis {{time}}.',
    findingLateNight_other: '{{count}} Nächte nach 23 Uhr — die längste bis {{time}}.',
    findingNewTopApp:
      '{{app}} ist neu in dieser Woche und kommt schon auf {{duration}}.',
    findingAppSurge: '{{app}} legt um {{delta}} zu — insgesamt {{duration}}.',
    findingLimitHit_one: 'Das Tageslimit von {{limit}} wurde an einem Tag erreicht.',
    findingLimitHit_other:
      'Das Tageslimit von {{limit}} wurde an {{count}} Tagen erreicht.',
    findingBlockedApps:
      '{{count}} blockierte App-Starts, gegenüber {{previous}} in der Vorwoche.',
    findingBlockedWeb:
      '{{count}} gefilterte Seiten, gegenüber {{previous}} in der Vorwoche.',
    findingQuietWeek:
      'Eine ruhige Woche — {{total}} insgesamt, und nichts, was Aufmerksamkeit gebraucht hätte.',
    narrativeTitle: 'In einem Satz',
    finePrint:
      'Die Zahlen umfassen {{from}} bis {{to}} über alle Geräte der Familie. Bildschirmzeit ist das, was die Geräte gemeldet haben; nicht messbare Minuten stecken in keiner der Summen.',
    shareImage: 'Als Bild sichern',
    sharePdf: 'Als PDF sichern',
    copySummary: 'Zusammenfassung kopieren',
    copied: 'Zusammenfassung kopiert.',
    imageSaved: 'Bild gesichert.',
    shareFailed:
      'Dieser Browser kann das nicht sichern. Stattdessen die Zusammenfassung kopieren.',
    emptyTitle: 'Noch kein Bericht',
    emptyBody:
      'Jeden Montagmorgen kommt ein Bericht; er umfasst die sieben Tage davor.',
    noUsage:
      'In den letzten zwei Wochen wurde keine Bildschirmzeit erfasst, daher gibt es noch nichts zu berichten. Ein Gerät ohne Verbindung meldet nichts, und das ist nicht dasselbe wie eine ruhige Woche.',
    rateLimited: 'Zu viele Versuche. Eine Minute warten.',
    loadFailedTitle: 'Berichte nicht geladen',
    loadFailed:
      'Die Berichte lassen sich nicht öffnen. Seite neu laden, um es erneut zu versuchen.',
    retryLoad: 'Erneut versuchen',
    failed:
      'Der Bericht konnte nicht geschrieben werden. Gleich noch einmal versuchen.',
    existed: 'Für diese Woche gibt es bereits einen Bericht — hier ist er.',
    childrenTitle: 'Jedes Kind',
    childrenNote:
      'Dieselben zwei Wochen, pro Gerät. Prozentwerte beziehen sich auf die Familiensumme.',
    colChild: 'Kind',
    colScreenTime: 'Bildschirmzeit',
    colShare: 'Anteil',
    colChange: 'Ggü. Vorwoche',
    colLimit: 'Über dem Limit',
    colLateNights: 'Späte Nächte',
    colTopApp: 'Meistgenutzt',
    unnamedChild: 'Unbenanntes Gerät',
    changeUp: '+{{value}}',
    changeDown: '−{{value}}',
    changeFlat: 'etwa gleich',
    noLimit: 'Kein Limit',
    noTopApp: '—',
    limitDays_one: '{{count}} Tag',
    limitDays_other: '{{count}} Tage',
    lateNightsNone: 'keine',
    busiest: 'Meiste Bildschirmzeit',

    historyTitle: 'Frühere Wochen',
    historyEmpty: 'Ab jetzt empfangene Berichte bleiben hier ein Jahr lang erhalten.',
  },

  support: {
    title: 'KidGate-Support',
    updated: 'Wir helfen gerne',

    contactTitle: 'Kontakt',
    contactEmail: '**E-Mail:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Antwortzeit:** innerhalb von 24 Stunden (Montag–Freitag)',
    contactNote:
      'Nenne uns bitte die E-Mail-Adresse deines KidGate-Elternkontos und beschreibe kurz das Problem, damit wir schneller helfen können.',

    startTitle: 'Erste Schritte',
    start1:
      '**1. Richte das Elterngerät ein.** Installiere KidGate, öffne die App und wähle *Das ist ein Elterngerät*. Melde dich mit Google, Apple oder E-Mail an und benenne deine Familie.',
    start2:
      '**2. Lege eine Eltern-PIN fest.** Gehe zu *Einstellungen → Sicherheit* und setze eine 6-stellige Eltern-PIN. Du brauchst sie, um sensible Einstellungen zu ändern und gesperrte Apps auf dem Kindergerät auszuwählen. Teile sie nicht mit deinen Kindern.',
    start3:
      '**3. Verbinde das Kindergerät.** Installiere KidGate auf dem Gerät deines Kindes und wähle *Das ist ein Kindergerät*. Öffne auf dem Elterngerät *Familie → + → Kindergerät verbinden* und scanne den QR-Code auf dem Kindergerät (oder gib den 6-stelligen Code ein). Bestätige die Verbindung auf dem Kindergerät.',
    start4:
      '**4. Erteile Berechtigungen auf dem Kindergerät.** Öffne den Bildschirm *Status* auf dem Kindergerät und erlaube alle Berechtigungen, die KidGate anfragt — unter Android: Mitteilungen, Nutzungszugriff, Über anderen Apps anzeigen, Bedienungshilfen und uneingeschränkter Akku; unter iOS: *App- & Websitenutzung erlauben* (Bildschirmzeit). Die Steuerung funktioniert erst vollständig, wenn diese aktiv sind.',
    start5:
      '**5. Richte die Steuerung ein.** Öffne auf dem Elterngerät die Gerätekarte des Kindes und lege Tageslimit, Sperrzeiten, gesperrte Apps, Webfilter und Standortfunktionen fest.',
    startNote:
      'Die App enthält außerdem eine Schritt-für-Schritt-Anleitung: *Einstellungen → Benutzerhandbuch*, mit Details zu Gerätekopplung, Berechtigungen, täglicher Steuerung und Sicherheitsfunktionen.',

    faqTitle: 'Häufige Fragen',

    faq1Q: 'Kann ich meine Familie vom Computer aus verwalten?',
    faq1A:
      'Ja. Öffne das [Web-Dashboard](/dashboard) und melde dich mit demselben Konto an, das du in der App nutzt — Google, Apple oder E-Mail und Passwort. Es zeigt dieselbe Familie, dieselben Geräte, Berichte und Einstellungen. Konten und Gerätekopplung laufen weiterhin über die mobile App.',

    faq2Q: 'Wie koppele ich Eltern- und Kindergerät?',
    faq2A:
      'Öffne auf dem Kindergerät KidGate und wähle *Das ist ein Kindergerät* — ein QR-Code und ein 6-stelliger Code erscheinen. Öffne auf dem Elterngerät *Familie → + → Kindergerät verbinden* und scanne den QR-Code (empfohlen) oder gib den Code manuell ein. Bestätige danach den Namen des Elternteils auf dem Kindergerät. Codes laufen ab — schlägt die Kopplung fehl, tippe auf dem Kindergerät auf *Neuer Code* und versuche es erneut.',

    faq3Q: 'Können zwei Eltern dieselbe Familie verwalten?',
    faq3A:
      'Ja. Öffne auf dem Gerät der Familieninhaberin oder des Familieninhabers *Familie → + → Weiteres Elterngerät hinzufügen* und teile den Einladungs-QR-Code oder -Code. Das andere Elternteil installiert KidGate, meldet sich als Elternteil an und wählt *Familie → + → Familie beitreten*. Danach gibt die Inhaberin oder der Inhaber die Anfrage frei. Ein Abo deckt die ganze Familie ab; nur die Inhaberin oder der Inhaber zahlt.',

    faq4Q: 'Wie funktioniert die kostenlose Testphase?',
    faq4A:
      'Die 7-tägige Testphase beginnt, sobald dein erstes Eltern- und Kindgerät verbunden sind, und schaltet alle Funktionen frei. Das Entfernen eines Kindgeräts setzt sie nicht zurück. Danach laufen alle Regeln auf einem Kindgerät kostenlos weiter; Premium behält Live-Aktivität, Verlauf, Wochenberichte und alle Geräte.',

    faq5Q: 'Wie kündige ich mein Abo?',
    faq5A:
      'Abos werden über den App Store oder Google Play abgerechnet, nicht direkt über KidGate. Unter iOS: *Einstellungen → dein Name → Abos*. Unter Android: *Google Play → Profilsymbol → Zahlungen und Abos → Abos*. Das Abo verlängert sich automatisch, sofern du nicht mindestens 24 Stunden vor Ende der laufenden Periode kündigst.',

    faq6Q: 'Wie stelle ich meine Käufe wieder her?',
    faq6A:
      'Öffne auf dem Elterngerät den Bildschirm *Tarife* und tippe auf *Käufe wiederherstellen*. Achte darauf, mit demselben App-Store-Konto angemeldet zu sein, mit dem du gekauft hast. Beachte: Nur die Familieninhaberin oder der Familieninhaber kann abonnieren oder Käufe wiederherstellen.',

    faq7Q: 'Warum werden keine Bildschirmzeit-Daten angezeigt?',
    faq7A:
      'Die Nutzungsdaten kommen vom Kindergerät. Prüfe, ob es online ist, öffne dort KidGate und sieh dir den Bildschirm *Status* an — jede Berechtigungszeile sollte als erlaubt angezeigt werden (unter Android ist der Nutzungszugriff für die Bildschirmzeit-Erfassung nötig). Berichte brauchen manchmal ein paar Minuten zum Abgleichen.',

    faq8Q: 'Warum funktionieren Sperren oder Sperrzeiten nicht?',
    faq8A:
      'Unter Android braucht das Sperren *Über anderen Apps anzeigen* und den Helfer unter *Bedienungshilfen*, dazu einen uneingeschränkten Akku. Auf Xiaomi, Samsung, Oppo, Vivo und ähnlichen Geräten erlaube außerdem den Autostart und nimm KidGate aus jeder Liste „schlafender Apps“ (siehe *Status → KidGate am Laufen halten* auf dem Kindergerät). Unter iOS hängt das Sperren von der Bildschirmzeit-Freigabe ab. Wird eine Berechtigung später ausgeschaltet, bekommst du auf dem Elterngerät eine Schutzwarnung.',

    faq9Q: 'Wie sperre ich bestimmte Apps?',
    faq9A:
      'Die App-Auswahl passiert auf dem Kindergerät: Öffne *KidGate → Einstellungen*, gib die Eltern-PIN ein, wähle *Apps zum Sperren auswählen* und speichere. Öffne danach auf dem Elterngerät den Bildschirm *Gesperrte Apps* und aktiviere *App-Sperre aktivieren*. Unter iOS blendet Apple exakte App-Namen für das Elterngerät möglicherweise aus — das ist eine Plattformgrenze.',

    faq10Q: 'Warum wird der Standort meines Kindes nicht aktualisiert?',
    faq10A:
      'Der Standort muss für KidGate auf dem Kindergerät erlaubt sein, und das Gerät braucht eine Netzverbindung. Öffne auf dem Elterngerät den Bildschirm *Standort* und ziehe zum Aktualisieren nach unten. Energiesparmodi können Updates verzögern, und GPS in Innenräumen kann ungenauer sein.',

    faq11Q: 'Wie entferne ich KidGate vom Gerät meines Kindes?',
    faq11A:
      'Entferne das Gerät zuerst in der Eltern-App (öffne das Gerät unter *Familie* und wähle Entfernen) und deinstalliere danach die App auf dem Gerät des Kindes.',

    faq12Q: 'Wie lösche ich mein Konto und meine Daten?',
    faq12A:
      'Gehe in der Eltern-App zu *Einstellungen → Konto → Konto löschen*. Das löscht dein Familienkonto und alle Daten endgültig — Geräte, Aktivität, Standortverlauf und SOS-Fotos — für alle Eltern und Kinder. Auf unserer Seite [Konto- und Datenlöschung](/delete-account) findest du alle Optionen, auch die Löschung ohne installierte App.',

    legalTitle: 'Rechtliches',
    legalDeletion: 'Konto- und Datenlöschung',
  },

  download: {
    eyebrow: 'Download',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 oder neuer. Apple Silicon und Intel.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 oder neuer, 64 Bit.',
    button: 'Herunterladen',
    warningSub:
      'Windows zeigt diese Warnung bei jeder App, die außerhalb des eigenen Stores von einem Entwickler installiert wird, der noch nicht auf der verifizierten Liste steht — sie beruht nicht auf einem Fund in KidGate. Auf der Windows-Karte oben steht, wie du sie erlaubst. Das Mac-Paket ist von Apple signiert und notarisiert und löst keine Warnung aus. Lade nur von kidgate.app.',
    macosSteps:
      'Öffne das geladene Paket und folge dem Installationsprogramm. macOS fragt dich danach einmal, ob du die KidGate-Systemerweiterung erlauben möchtest, unter Anmeldeobjekte & Erweiterungen — der Webfilter läuft erst danach.',
    windowsSteps:
      'Wenn Windows meldet, dass es deinen PC geschützt hat, wähle Weitere Informationen und dann Trotzdem ausführen.',
  },
  about: {
    eyebrow: 'Über uns',
    title: 'Kindersicherung, auf die sich eine Familie',
    titleAccent: 'wirklich einigen kann.',
    lede: 'KidGate entsteht in einem kleinen unabhängigen Team, das an einem einzigen Produkt arbeitet. Unsere Haltung: Eltern müssen dem vertrauen können, was die App sagt — auch dort, wo sie sagt, dass sie nicht helfen kann.',
    storyEyebrow: 'Warum es KidGate gibt',
    storyTitle: 'Bildschirmzeit wurde zum Streit in jedem Haushalt',
    storyP1:
      'Fast jede Familie kennt denselben Abend: ein Timer, den niemand vereinbart hat, ein weggenommenes Handy und ein Kind, das sicher ist, die Regeln hätten sich heimlich geändert. Die Werkzeuge dagegen haben es meist schlimmer gemacht — auf der einen Seite eine Sperre ohne Erklärung, auf der anderen ein Dashboard, das sich wie Überwachung liest.',
    storyP2:
      'Also haben wir die Version gebaut, die wir zu Hause haben wollten. Eltern legen Tageslimit, Sperrzeiten, App-Sperre und Webfilter einmal fest, und das Gerät hält sich daran. Das Kind sieht dieselben Zahlen wie die Eltern, kann mehr Zeit anfragen und erreicht mit SOS jederzeit ein Elternteil. KidGate tut nicht so, als wäre es nicht da.',
    storyP3:
      'Es läuft auf iPhone, Android, Mac und Windows, dazu eine Erweiterung für Chrome und ein Dashboard für jeden Browser. Eine Familie, ein Tarif, alle Geräte.',
    valuesEyebrow: 'Woran wir glauben',
    valuesTitle: 'Vier Regeln, die wir nicht brechen',
    valuesSub:
      'Die Fragen, die uns am häufigsten gestellt werden — beantwortet, bevor sie gestellt werden müssen.',
    value1Title: 'Ein Kind ist kein Verdächtiger',
    value1Text:
      'Die Regeln sind auf dem Gerät sichtbar, für das sie gelten. Ein Kind sieht, was eingestellt ist und wie viel Zeit bleibt, kann mehr anfragen und jederzeit SOS auslösen. Kontrolle, die heimlich bleiben muss, ist keine Kontrolle, über die eine Familie sprechen kann.',
    value2Title: 'Die Daten Ihrer Familie sind nicht zu verkaufen',
    value2Text:
      'Niemals Werbung. Nichts über ein Kind wird für Werbung genutzt oder weiterverkauft. Sie können das Familienkonto mit allem darin jederzeit löschen — in der App oder auf dieser Website.',
    value3Title: 'Wir sagen, was wir nicht können',
    value3Text:
      'Jede Plattform begrenzt, was eine App durchsetzen darf. Wo KidGate nur nach bestem Bemühen arbeitet — eine gesperrte App auf dem Computer beenden, statt den Start zu verhindern — steht genau das auf dem Bildschirm, statt eines grünen Hakens.',
    value4Title: 'Eine Familie, ein Tarif',
    value4Text:
      'Ein Premium-Abo deckt alle Eltern und alle Kindergeräte ab. Tageslimit, Sperrzeiten, Blockierte Apps und der Webfilter laufen auf einem Kindergerät kostenlos weiter, damit die Sicherheitsregeln nie hinter der Bezahlschranke liegen.',
    makeEyebrow: 'Was wir bauen',
    makeTitle: 'Ein KidGate, wo immer der Bildschirm steht',
    makeSub:
      'Dieselben Regeln, einmal geschrieben, durchgesetzt mit dem, was die Plattform erlaubt.',
    make1Title: 'iPhone und iPad',
    make1Text:
      'Tageslimits, Sperrzeiten und App-Sperre über Apples eigenes Screen-Time-Framework.',
    make2Title: 'Android',
    make2Text:
      'Limits, App-Sperre, Vollbildsperre und Webfilter, dazu eine Meldung, sobald eine neue App auftaucht.',
    make3Title: 'macOS',
    make3Text:
      'Der Desktop-Agent auf dem Mac: derselbe Zeitplan und dieselben Limits, und ein Tag, den Eltern wirklich lesen können.',
    make4Title: 'Windows',
    make4Text:
      'Derselbe Agent auf dem PC, mit einem Hintergrunddienst, der ihn neu startet, wenn er geschlossen oder beendet wird.',
    make5Soon: 'Geplant',
    make5Title: 'Android TV',
    make5Text:
      'Der Bildschirm im Wohnzimmer, behandelt als gemeinsames Familiengerät statt als das eines Kindes — mit denselben Limits und demselben Zeitplan wie auf den Handys. Diese Version ist bereits auf echter Hardware gelaufen und wartet auf die Veröffentlichung im Store.',
    make6Title: 'Chrome',
    make6Text:
      'Eine Browser-Erweiterung, die denselben Webfilter in Chrome bringt — auf einem Computer, der KidGate schon hat, und auf einem, der es nicht haben kann. Sie ist fertig gebaut und gekoppelt und wartet auf die Prüfung im Chrome Web Store.',
    make7Title: 'Eltern-Dashboard',
    make7Text:
      'Der Browser ist der zweite Bildschirm der Eltern. Anmeldung an jedem Computer mit einem Code vom Handy; nichts zu installieren.',
    factsEyebrow: 'KidGate heute',
    factsTitle: 'Vier Zahlen',
    fact1Label: 'Sprachen, von Arabisch bis Vietnamesisch',
    fact2Label: 'Plattformen, plus das Dashboard',
    fact3Label: 'Werbung, niemals',
    fact4Label: 'Abo pro Familie',
    contactEyebrow: 'Sprechen Sie mit uns',
    contactTitle: 'Jede Nachricht wird von einem Menschen gelesen',
    contactSub:
      'Eine Frage, ein Fehler, eine Funktion, die Ihre Familie braucht, oder eine Übersetzung, die in Ihrer Sprache falsch klingt — schreiben Sie uns.',
    contactEmail: 'Schreiben Sie uns',
    contactSupport: 'Support und Anleitungen',
    contactPrivacy: 'Wie wir mit Daten umgehen',
  },
};
