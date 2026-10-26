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
    crashTitle: 'Diese Seite funktioniert nicht mehr',
    crashBody:
      'Ein Neuladen hilft meistens. An den Einstellungen deiner Familie und den Geräten deines Kindes ändert sich nichts.',
    crashReload: 'Seite neu laden',
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
    plans: 'Pläne',
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
    madeFor:
      'Gemacht für Familien auf iPhone, Android, Mac, Windows, Android TV und Chrome.',
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
    chromeName: 'Chrome Web Store',
  },

  home: {
    heroBadge: 'Kindersicherung, richtig gemacht',
    launchCountdown: 'Start in',
    heroTitle: 'Schütze deine Kinder',
    heroTitleAccent: 'ohne ihnen ihre Freiheit zu nehmen.',
    heroLede:
      'KidGate gibt Eltern eine ruhige, klare Kontrolle über Bildschirmzeit, Apps und Sicherheit — und das Kind behält ein Handy, das sich weiter nach seinem anfühlt.',
    heroCheck1: 'Bildschirmzeit',
    heroCheck2: 'Blockierte Apps',
    heroCheck3: 'Webfilter',
    heroCheck4: 'Standort',
    heroCheck5: 'SOS',

    phoneDailyLimit: 'Tageslimit',
    phoneBlockedHours: 'Sperrzeiten',
    phoneScheduleOn: 'Zeitplan aktiv',
    phoneLocation: 'Standort',
    phoneCheckIn: 'Check-in OK',

    trust1Title: 'Niemals Werbung',
    trust1Text: 'Kinderdaten werden nie für Werbung verwendet',
    trust2Title: 'Jederzeit löschen',
    trust2Text: 'Familienkonto und alle Daten auf Wunsch löschen',
    trust3Title: 'Handy, Computer und Fernseher',
    trust3Text:
      'iPhone, Android, Mac, Windows, Android TV und Chrome in einem Familienkonto',
    trust4Title: 'Ein Tarif pro Familie',
    trust4Text: 'Alle Eltern- und Kindergeräte, ein Abo',

    featuresEyebrow: 'Funktionen',
    featuresTitle: 'Alles, was Eltern brauchen',
    featuresSub:
      'Von Tageslimits bis zum Notfallalarm — eine App für das digitale Wohlbefinden der ganzen Familie.',
    feature1Title: 'Bildschirmzeit & Tageslimit',
    feature1Text:
      'Lege ein Tageslimit und Sperrzeiten für Schule und Schlafenszeit fest. Das Gerät sperrt sich selbst, wenn die Zeit um ist.',
    feature2Title: 'Blockierte Apps',
    feature2Text:
      'Bestimme, welche Apps dein Kind nicht öffnen darf, geschützt durch deine Eltern-PIN, und schalte die Sperre aus der Ferne ein.',
    feature3Title: 'App-Limits',
    feature3Text:
      'Auf Android, Android TV und Computern begrenzt du jede App einzeln — „eine halbe Stunde TikTok“, ohne es ganz zu verbieten.',
    feature4Title: 'Webfilter & Verlauf',
    feature4Text:
      'Blockiere Seiten für Erwachsene, Glücksspiel, Selbstverletzung und mehr auf jedem Gerät; mit Premium siehst du auch, welche Seiten aufgerufen wurden.',
    feature5Title: 'Standort & Orte',
    feature5Text:
      'Sieh bis zu 10-mal am Tag nach, wo dein Kind ist; Premium ergänzt den Live-Standort und Benachrichtigungen für gespeicherte Orte.',
    feature6Title: 'Check-in & SOS',
    feature6Text:
      'Bitte dein Kind zu bestätigen, dass alles in Ordnung ist; im Notfall schickt dir sein Handy sofort ein SOS mit Standort.',
    feature7Title: 'Schutzwarnungen & App-Warnungen',
    feature7Text:
      'Erfahre sofort, wenn auf dem Handy deines Kindes eine wichtige Berechtigung ausgeschaltet wird, und gib neue Apps auf Android, Android TV oder einem Computer frei, bevor sie sich öffnen.',
    feature8Title: 'Bonusaufgaben & Zeitanfragen',
    feature8Text:
      'Kinder verdienen Bonusminuten und Sterne mit erledigten Aufgaben oder bitten um mehr Zeit — beides gibst du auf deinem Handy frei.',

    feature9Title: 'Gerätesperre',
    feature9Text:
      'Sperre das Gerät sofort und gib es wieder frei, wenn du so weit bist — Abendessen, Hausaufgaben oder eine ignorierte Regel.',
    feature10Title: 'Wochenbericht',
    feature10Text:
      'Jeden Montag: Bildschirmzeit, Tagesdurchschnitt, was blockiert wurde und wie die Woche im Vergleich zur letzten aussieht.',
    feature11Title: 'YouTube- & Videoverlauf',
    feature11Text:
      'Die YouTube-Videos und Shorts, die dein Kind auf Android und in Chrome angesehen hat, dazu die Videos auf Android TV. Nicht auf dem iPhone.',
    feature12Title: 'Aktivitätsverlauf',
    feature12Text:
      'Alles, was passiert ist, der Reihe nach — ein Gerät entsperrt, eine Anfrage beantwortet, ein Alarm ausgelöst; im kostenlosen Tarif der heutige Tag, mit Premium 30 Tage.',
    featurePremium: 'Premium',
    platformsTitle: 'Ein KidGate, überall wo ein Bildschirm ist',
    platformsSub:
      'Dieselben Regeln und dasselbe Familienkonto auf dem Handy, auf dem Computer und auf Android TV — und derselbe Webfilter in Chrome. Die Desktop-App kommt von dieser Seite, nicht aus einem Store.',

    showcaseEyebrow: 'Eltern-Dashboard',
    showcaseTitle: 'Die ganze Familie auf einem Bildschirm',
    showcaseSub:
      'Bildschirmzeit, blockierte Versuche, Standort und alles, was deine Aufmerksamkeit braucht — auf dem Handy oder in jedem Browser.',
    showcaseCaption1: 'Berichte in jedem Browser lesen',
    showcaseCaption2: 'Änderungen werden per Handy freigegeben',

    setupEyebrow: 'Einrichtung',
    setupTitle: 'In wenigen Minuten startklar',
    setupSub:
      'Keine technischen Kenntnisse nötig — die App führt dich durch jeden Schritt.',
    step1Title: 'Richte dein Gerät ein',
    step1Text:
      'Installiere KidGate, wähle „Dies ist ein Elterngerät“ und melde dich mit Google oder E-Mail an — oder auf einem iPhone mit Apple.',
    step2Title: 'Verbinde das Gerät deines Kindes',
    step2Text:
      'Installiere KidGate auf dem Handy deines Kindes und verbinde es per QR-Code. Unter einer Minute.',
    step3Title: 'Lege deine Regeln fest',
    step3Text:
      'Wähle ein Tageslimit und Sperrzeiten und schalte Standort und „Blockierte Apps“ von deinem eigenen Handy aus ein. Welche Apps blockiert werden, wählst du einmal auf dem Gerät deines Kindes aus, mit deiner Eltern-PIN.',

    whyEyebrow: 'Warum KidGate',
    whyTitle: 'Für Vertrauen gebaut, nicht für Überwachung',
    whySub: 'So gestaltet, dass Eltern und Kind im Gespräch bleiben.',
    why1Title: 'Ein Tarif, die ganze Familie',
    why1Text:
      'Ein einziges Premium-Abo deckt alle Eltern- und Kindergeräte ab, und nur die Familieninhaberin oder der Familieninhaber zahlt. Im kostenlosen Tarif bleibt ein Kindergerät überwacht.',
    why2Title: 'Für gemeinsame Erziehung gemacht',
    why2Text:
      'Lade ein zweites Elternteil ein, dieselben Kinder zu betreuen — mit dem Zugriff, den die Inhaberin oder der Inhaber freigibt. Eine Familie kann im kostenlosen Tarif und während der Testphase bis zu 3 Elternteile haben, mit Premium bis zu 6.',
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
      'Android TV bekommt ein Tageslimit, Sperrzeiten, Blockierte Apps und einen Webfilter. Auf einem Fernseher sperrt KidGate nur so gut es geht — eine gesperrte App wird zurück auf den Startbildschirm geschickt — und vom Sofa aus gibt es weder SOS noch eine Anfrage nach zusätzlicher Zeit. Einen Standort teilt der Fernseher auch nicht. Die meisten Kindersicherungen hören beim Handy auf.',
    only2Title: 'Chatwarnungen, die auf dem Handy bleiben',
    only2Text:
      'Mit Premium auf Android werden Nachrichten direkt auf dem Gerät mit Stichwortlisten in bis zu drei Sprachen abgeglichen, die du aus 14 auswählst, und was das Handy verlässt, ist das gefundene Wort oder der gefundene Ausdruck, niemals das Gespräch. Eines ändert das, und nur wenn du es willst: Schaltest du die KI-Bestätigung ein, wird eine mehrdeutige eingehende Nachricht zur Beurteilung an Gemini von Google gesendet, damit dich nicht ein gewöhnliches Wort aus dem Schlaf reißt.',
    only3Title: 'Jede App, keine App-Liste',
    only3Text:
      'Warnungen kommen aus den Benachrichtigungen jeder App, die dein Kind nutzt — nicht aus einer festen Liste unterstützter Apps — und aus Tippeingaben in den wichtigsten Chat-, Social-Media- und Spiele-Apps, darunter Zalo, LINE und KakaoTalk. Nur auf Android, mit Premium.',
    only4Title: 'Ein Ausweg für das Kind',
    only4Text:
      'Hält dein Kind auf einem Handy SOS fünf Sekunden lang gedrückt, erreicht es dich sofort, mit Standort — und auf Android gibt das zudem Anrufe, Karten und Nachrichten für fünf Minuten frei, selbst auf einem gesperrten Handy. Ein Kind, das vom Sperrbildschirm aus Hilfe erreichen kann, hat keinen Grund, gegen die App zu kämpfen.',
    only5Title: 'Regeln, die ohne Internet gelten',
    only5Text:
      'Sperrzeiten und Tageslimit werden auf dem Gerät selbst durchgesetzt; den Router auszustecken ändert nichts. Der Fernseher nimmt deine Eltern-PIN sogar ganz ohne Verbindung an.',
    only6Title: 'Anerkennung, wenn die Woche sie verdient hat',
    only6Text:
      'Mit Premium hält jeder Wochenbericht Platz für das, was gut lief — ein eingehaltenes Limit, kein Aufbleiben bis spät in die Nacht mehr, eine erledigte Aufgabe — und sagt es erst, wenn die Woche wirklich gemessen wurde.',

    faqEyebrow: 'FAQ',
    faqTitle: 'Was Eltern zuerst fragen',
    faqSub: 'Schnelle Antworten vor dem Download.',
    faq1Q: 'Gibt es eine kostenlose Testphase?',
    faq1A:
      'Ja. Die 7-tägige Testphase beginnt, sobald dein erstes Eltern- und Kindergerät verbunden sind, und umfasst alle Premium-Funktionen. Danach laufen die Regeln, die du gesetzt hast — Tageslimit, Sperrzeiten, Blockierte Apps, Webfilter, Gerätesperre, Zeitanfragen und Bonusaufgaben — auf jedem Kindergerät, das sie unterstützt, kostenlos weiter, und das eine Gerät, das du für die weitere Überwachung auswählst, teilt weiterhin seinen Standort. Live-Aktivität, Verlauf, Wochenberichte und Standortverfolgung bringt Premium zurück.',
    faq2Q: 'Wie viele Geräte kann ich verwalten?',
    faq2A:
      'Premium umfasst bis zu 25 Kindergeräte und 6 Elternteile, dich eingeschlossen, und jedes Gerät sendet Aktivität. Der kostenlose Tarif umfasst bis zu 8 Kindergeräte und 3 Elternteile. Jedes Gerät setzt deine Regeln weiter durch, aber nur das von dir gewählte sendet Aktivität; auf den anderen lassen sich diese Regeln lockern, aber nicht verschärfen.',
    faq3Q: 'Kann mein Kind KidGate deinstallieren oder umgehen?',
    faq3A:
      'Sensible Einstellungen liegen hinter deiner Eltern-PIN, und Schutzwarnungen melden sofort, wenn auf dem Kindergerät eine wichtige Berechtigung ausgeschaltet wird.',
    faq4Q: 'Kann ich alles vom Computer aus verwalten?',
    faq4A:
      'Ja. Das Eltern-Dashboard öffnet sich in jedem Browser. Scanne den angezeigten Code mit der KidGate-App auf deinem Handy, und du siehst dieselbe Familie, dieselben Geräte und dieselben Einstellungen, mit freigeschalteter Steuerung. Du kannst dich auch mit deinem Konto zum Lesen anmelden; ein Gerät zu sperren oder ein Limit zu ändern verlangt dann deine Eltern-PIN.',
    faq5Q: 'Was kostet Premium?',
    faq5A:
      'Premium kostet in den USA 4,99 $ im Monat oder 39,99 $ im Jahr, abgerechnet über den App Store oder Google Play und dort in deiner eigenen Währung angezeigt. Der Tarif „Lebenslang“ mit Einmalzahlung bietet dasselbe Premium auf jedem Kindergerät, solange es KidGate gibt. Der kostenlose Tarif läuft nie ab.',
    faqMore: 'Noch Fragen? Zum Support',

    ctaTitle: 'Schütze deine Familie ab heute',
    ctaSub: '7 Tage kostenlose Testphase mit vollem Zugriff. Keine Kreditkarte nötig.',
    ctaNote: 'Danach laufen deine Regeln im kostenlosen Tarif weiter.',
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
    step2: 'Tippe im Tab *Familie* auf das Scan-Symbol.',
    step3: 'Scanne diesen Code und gib ihn frei.',
    waiting: 'Warte auf Freigabe · läuft ab in {{time}}',
    signingIn: 'Freigegeben. Anmeldung läuft…',
    expired: 'Dieser Code ist abgelaufen.',
    failed: 'Die Anmeldung wurde nicht abgeschlossen.',
    newCode: 'Neuen Code anzeigen',
    tryAgain: 'Erneut versuchen',
  },

  authAction: {
    checking: 'Link wird geprüft…',
    resetTitle: 'Neues Passwort festlegen',
    newPassword: 'Neues Passwort',
    confirmPassword: 'Neues Passwort bestätigen',
    mismatch: 'Die Passwörter stimmen nicht überein.',
    tooShort: 'Das Passwort muss mindestens 6 Zeichen lang sein.',
    save: 'Passwort speichern',
    saving: 'Wird gespeichert…',
    resetDone: 'Passwort geändert',
    resetDoneBody: 'Melde dich hier oder in der KidGate-App mit dem neuen Passwort an.',
    verifyDone: 'E-Mail bestätigt',
    verifyDoneBody: 'Kehre zur KidGate-App zurück, um fortzufahren.',
    invalid: 'Dieser Link ist abgelaufen oder wurde bereits verwendet',
    invalidBody: 'Öffne KidGate und fordere einen neuen Link an.',
  },
  authError: {
    generic: 'Etwas ist schiefgelaufen. Versuche es erneut.',
    invalidEmail: 'Diese E-Mail-Adresse sieht nicht richtig aus.',
    userDisabled: 'Dieses Konto wurde deaktiviert.',
    userNotFound: 'Kein KidGate-Konto nutzt diese E-Mail-Adresse.',
    wrongPassword:
      'E-Mail-Adresse oder Passwort stimmt nicht. Bitte versuche es erneut.',
    rateLimited:
      'Zu viele Anmeldecodes aus diesem Netzwerk. Versuche es in {{minutes}} Min. erneut.',
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
    partialLoadFailed:
      'Ein Teil dieser Seite wurde nicht geladen — eine Liste kann leer aussehen, obwohl sie es nicht ist.',
    noAccessTitle: 'Keine Familie in diesem Konto',
    noAccess:
      'Dieses Konto hat keinen Zugriff auf eine KidGate-Familie. Melde dich mit dem Elternkonto an, das du in der App nutzt.',
    noFamily:
      'Dieses Konto hat noch keine KidGate-Familie. Wenn du KidGate auf deinem Handy nutzt, melde dich ab und hier mit demselben Konto wieder an. Um eine Familie zu gründen, richte sie auf deinem Handy ein und lade diese Seite dann neu.',
    noFamilyStep1:
      'Installiere KidGate auf deinem Handy, wähle *Dies ist ein Elterngerät* und melde dich mit diesem Konto an.',
    noFamilyStep2:
      'Öffne *Familie* und wähle *Familie erstellen* – oder *Familie beitreten*, wenn dich ein anderer Elternteil eingeladen hat.',
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
  },

  webCat: {
    adult: 'Erwachseneninhalte',
    selfHarm: 'Selbstverletzung & Essstörungen',
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

  appCat: {
    adult: 'Erwachseneninhalte',
    gambling: 'Glücksspiel',
    gameGambling: 'Lootboxen & Skin-Wetten',
    dating: 'Dating',
    drugs: 'Drogen & Alkohol',
    violence: 'Gewalt & verstörende Bilder',
    piracy: 'Piraterie',
    bypass: 'Umgehungs-Apps',
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
    tabApps: 'Apps',
    tabWeb: 'Web',
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
      'Pläne werden in der KidGate-App auf dem Handy gekauft und geändert.',
    fallbackFamily: 'Deine Familie',
    fallbackDevice: 'Kindergerät',

    statusOnline: 'Online',
    statusOffline: 'Offline',
    statusLocked: 'Gesperrt',
    statusLockSent: 'Sperre gesendet',
    statusLockNotApplied: 'Sperre nicht angewendet',
    statusPaused: 'Pausiert',

    lastActive: 'Zuletzt aktiv {{when}}',
    appVersion: 'App-Version',
    appVersionUpdate: '{{running}} · {{latest}} verfügbar',
    appVersionRestart: '{{running}} · App neu starten, um abzuschließen',
    checkIn: 'Check-in',
    sending: 'Wird gesendet…',
    lockDevice: 'Gerät sperren',
    unlock: 'Entsperren',
    working: 'Wird ausgeführt…',
    save: 'Speichern',

    unlockTitle: 'Änderungen sind gesperrt.',
    unlockBody: 'Du kannst weiterhin alles ansehen und Check-ins senden.',
    unlockCta: 'Änderungen entsperren',
    unlockToChange: 'Erst Änderungen entsperren',
    refresh: 'Aktualisieren',
    liveOnApp: 'Für Live-Updates die App öffnen',
    pinTitle: 'Eltern-PIN eingeben',
    pinBody:
      'Dieselben sechs Ziffern wie in der App. Dieser Browser bleibt 8 Stunden entsperrt; eine Freigabe aus der App hält ihn 7 Tage angemeldet.',
    pinLabel: 'Eltern-PIN',
    pinSubmit: 'Entsperren',
    pinOrScan: 'Oder vom Handy bestätigen',
    qrSaferNote:
      'Die Bestätigung vom Handy ist die sicherere der beiden: sie verlangt das gekoppelte Handy in der Hand, während die PIN sechs Ziffern sind, bei denen dir jemand in der Familie zugesehen haben kann.',
    pinWrong: 'Falsche PIN. Verbleibende Versuche: {{count}}.',
    pinLocked:
      'Zu viele Fehlversuche. Warte 15 Minuten oder bestätige diesen Browser vom Handy aus.',
    pinNotSet:
      'Deine Familie hat noch keine Eltern-PIN. Lege in der App eine fest oder bestätige diesen Browser vom Handy aus.',
    unlockedToast: 'Änderungen in diesem Browser entsperrt.',
    close: 'Schließen',

    noDeviceBody:
      'Öffne KidGate auf deinem Handy, gehe zu *Familie* und tippe auf das Scan-Symbol (*Code scannen*). Scanne den QR-Code auf dem Gerät deines Kindes oder gib seinen 6-stelligen Code ein. Wähle dann hier *Aktualisieren*.',
    pairStep2Title: 'Code mit deinem Handy scannen',
    getKidGate: 'KidGate herunterladen',
    childNoDevices:
      'Noch keine Geräte. Kopple eines und wähle dieses Kind, wenn die App fragt, wer es nutzt.',
    childNoDevicesAssign:
      'Noch keine Geräte. Weise unten eines zu oder kopple ein neues.',

    toastCheckIn: '{{name}} erhält eine Check-in-Anfrage.',
    toastTimeApproved: 'Zusatzzeit freigegeben.',
    toastCheckInResent: 'Check-in erneut gesendet.',

    tileScreenToday: 'Bildschirmzeit heute',
    tileSameAsAverage: 'Wie der 7-Tage-Durchschnitt',
    tileDeltaUp: '↑ {{percent}} % gegenüber dem 7-Tage-Durchschnitt',
    tileDeltaDown: '↓ {{percent}} % gegenüber dem 7-Tage-Durchschnitt',
    tileBlocked: 'Blockierte Versuche',
    tileBlockedMeta: 'Seit der Installation gestoppte Apps',
    tileAttention: 'Braucht Aufmerksamkeit',
    tileOpenItems: 'Offene Punkte unten',
    tileAllClear: 'Alles in Ordnung',

    cardScreenTime: 'Bildschirmzeit',
    cardScreenTimeSub: 'Letzte 14 Tage, gemessen am Tageslimit',
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
    attnBatteryLow: 'Akku ist schwach ({{level}} %)',
    attnBatteryLowMeta: 'Standort-Updates können pausieren, wenn das Handy ausgeht',
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
    appUsageEmpty: 'Noch keine App-Nutzung gemeldet.',
    appBlockingTitle: 'Blockierte Apps',
    blockingLabel: 'Blockierung',
    appsBlocked: 'Blockierte Apps',
    categories: 'Kategorien',
    limitsMax: 'Mehr als {{max}} begrenzte Apps kann ein Gerät nicht halten.',
    perDay: '{{value}}/Tag',
    webActivityTitle: 'Web-Aktivität',
    webActivitySub: 'Meistbesuchte Domains, letzte 7 Tage',
    webActivityEmpty: 'Noch keine Web-Aktivität.',
    inventoryEmpty: 'Dieses Gerät hat seine App-Liste noch nicht veröffentlicht.',
    inventoryFirstScan:
      'Erster Scan – KidGate kann nicht sagen, wann diese Apps dazugekommen sind.',
    inventoryOtherLabel: 'Bestimmt',
    inventoryUnknownLabel: 'Unbestimmt',
    installAllow: 'Erlauben',
    toastInstallAllowed: 'App erlaubt',
    rowInstallApprovalDesc: '{{count}} Apps warten auf Genehmigung',
    rowInstallApprovalDesc_one: '{{count}} App wartet auf Genehmigung',
    rowInstallApprovalDescIos:
      'Blendet den App Store aus — Apple erlaubt keine Genehmigung pro App',
    colDomain: 'Domain',
    colVisits: 'Besuche',
    colBlocked: 'Blockiert',
    colLastSeen: 'Zuletzt gesehen',
    videosSub: 'Was auf YouTube und im Web angesehen wurde',
    videosEmpty: 'Noch keine Videos.',
    colVideo: 'Video',
    colChannel: 'Kanal',
    colViews: 'Aufrufe',
    filterRefusedTitle: 'Was der Filter blockiert hat',
    filterRefusedSub_one: '{{count}} blockierte Anfrage, letzte 7 Tage',
    filterRefusedSub_other: '{{count}} blockierte Anfragen, letzte 7 Tage',
    filterHintIos:
      'Dieses iPhone oder iPad filtert nur mit Apples Sperre für Erwachseneninhalte. Aktualisiere KidGate darauf und erlaube das KidGate-VPN, um nach Kategorien zu blockieren.',

    locationTitle: 'Standort',
    locationUpdated: 'Aktualisiert {{when}}',
    locationWaiting: 'Warte auf die erste Aktualisierung',
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
    sosSub: 'Notsignale vom Kindergerät',
    sosEmpty:
      'Keine SOS-Alarme. Probiert es einmal gemeinsam aus, damit ihr beide wisst, wie es funktioniert.',
    sosAcknowledged: 'bestätigt',
    sosActive: 'aktiv',

    checkInsTitle: 'Check-ins',
    checkInsSub: 'Bitte dein Kind zu bestätigen, dass alles in Ordnung ist',
    checkInSafe: 'Sicherheit bestätigt',
    checkInPhotoRequested: 'Foto und Standort wurden angefordert',
    checkInNoReply: 'noch keine Antwort',
    checkInPhotoSkipped: 'Foto übersprungen',
    checkInPhotoAttached: 'Foto angehängt',
    checkInNoPhoto: 'kein Foto angefordert',
    sendCheckIn: 'Jetzt einen Check-in senden',

    protectionAlertsTitle: 'Schutzwarnungen',
    protectionAlertsSub_one: '{{count}} Ereignis seit der Installation',
    protectionAlertsSub_other: '{{count}} Ereignisse seit der Installation',

    limitCardTitle: 'Tageslimit',
    limitCardSub: 'Begrenze die verfügbaren Minuten pro Tag',
    limitAria: 'Minuten des Tageslimits',
    limitScaleMin: '30 Min.',
    limitScaleMax: '8 Std.',
    limitHint:
      'Bonusminuten aus Bonusaufgaben und genehmigten Zeitanfragen kommen obendrauf, nur für diesen Tag.',
    limitShared: 'Für alle Geräte zusammen',
    limitSharedSpent: 'Heute {{used}} von {{limit}} genutzt',
    limitSharedHint:
      'Das ist der ganze Tag dieses Kindes, kein Limit für dieses eine Gerät — jedes Gerät bekommt, was die anderen übrig lassen. Änderbar in der KidGate-App.',
    whatsOnSub: 'Änderungen werden mit dem Kindergerät synchronisiert',
    rowBlockedHours: 'Sperrzeiten',
    rowBlockedHoursDesc_one: '{{count}} Zeitfenster · {{list}}',
    rowBlockedHoursDesc_other: '{{count}} Zeitfenster · {{list}}',
    rowAppBlocking: 'Blockierte Apps',
    rowAppBlockingDesc: '{{apps}} · {{categories}}',
    rowWebFilter: 'Webfilter',
    rowWebFilterDesc_one: '{{count}} Kategorie blockiert',
    rowWebFilterDesc_other: '{{count}} Kategorien blockiert',
    rowNotSupported: 'Auf diesem Gerät nicht unterstützt',
    rowLocation: 'Standortfreigabe',
    rowLocationDesc: 'Letzte Aktualisierung {{when}}',
    rowLocationNone: 'Noch kein Standort',
    rowSearchMonitoring: 'Suchanfragen prüfen',
    rowSafeSearchDesc:
      'Sperrt Google SafeSearch, Bing und DuckDuckGo auf die strenge Einstellung, auf Android, Android TV und Chrome. Auf Android und Chrome sperrt es auch den eingeschränkten YouTube-Modus, der außerdem Kommentare ausblendet und manche harmlosen Videos blockiert.',

    webFilterCatsTitle: 'Webfilter-Kategorien',
    webFilterCatsSub: 'Blockierte Inhaltstypen',
    dnsHint:
      'Verschlüsseltes DNS wird immer blockiert, solange der Filter läuft, damit ein Browser ihn nicht umgehen kann.',
    starChartTitle: 'Sternetafel',
    starChartSub: 'Diese Woche gesammelte Sterne, pro Kind',
    starChartEmpty:
      'Füge in der App ein zweites Kind hinzu, um die Sternetafel zu starten.',
    starChartStars: '{{count}} Sterne',
    rewardTasksTitle: 'Bonusaufgaben',
    rewardTasksSub: 'Verdiene Extraminuten durch erledigte Aufgaben',
    rewardTaskMeta: '+{{minutes}} Min. · {{cadence}}',
    rewardTaskStars: 'Schwierigkeit: {{count}} von 3',
    rewardTaskWaiting: ' · wartet auf deine Genehmigung',
    approve: 'Genehmigen',
    siteRequestAllow: 'Erlauben',
    siteRequestDeny: 'Nicht jetzt',
    attnSiteRequest: '{{name}} möchte {{domain}} öffnen',
    timelineSub: 'Heute, von Mitternacht bis Mitternacht. Grün ist Zeit am Gerät.',
    timelineSubDay:
      '{{date}}, von Mitternacht bis Mitternacht. Grün ist Zeit am Gerät.',
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
      'Das ist eine Premium-Funktion. Pläne werden in der KidGate-App auf deinem Handy verwaltet.',
  },

  report: {
    writtenAt: 'Geschrieben am {{when}}',
    shareImage: 'Als Bild sichern',
    sharePdf: 'Als PDF sichern',
    imageSaved: 'Bild gesichert.',
    shareFailed:
      'Aus diesem Browser lässt sich nicht speichern. Kopiere stattdessen die Zusammenfassung.',
    emptyBody:
      'Mit Premium kommt jeden Montagmorgen ein Bericht, der die sieben Tage davor abdeckt. Den Bericht für diese Woche kannst du auch in der KidGate-App auf deinem Handy schreiben.',
    loadFailed: 'Die Berichte lassen sich nicht öffnen.',
    retryLoad: 'Erneut versuchen',
    existed: 'Für diese Woche gibt es bereits einen Bericht — hier ist er.',
  },

  support: {
    title: 'KidGate-Support',
    updated: 'Wir helfen gerne',

    contactTitle: 'Kontakt',
    contactEmail: '**E-Mail:** [support@kidgate.app](mailto:support@kidgate.app)',
    contactResponse: '**Antwortzeit:** in der Regel innerhalb eines Werktags',
    contactNote:
      'Nenne uns bitte die E-Mail-Adresse deines KidGate-Elternkontos und beschreibe kurz das Problem, damit wir schneller helfen können.',

    startTitle: 'Erste Schritte',
    start1:
      '**1. Richte das Elterngerät ein.** Installiere KidGate, öffne die App und wähle *Dies ist ein Elterngerät*. Melde dich mit Google oder E-Mail an (auf einem iPhone auch mit Apple) und benenne deine Familie.',
    start2:
      '**2. Lege eine Eltern-PIN fest.** Gehe zu *Einstellungen → Sicherheit* und setze eine 6-stellige Eltern-PIN. Du brauchst sie, um sensible Einstellungen zu ändern und gesperrte Apps auf dem Kindergerät auszuwählen. Teile sie nicht mit deinen Kindern.',
    start3:
      '**3. Verbinde das Kindergerät.** Installiere KidGate auf dem Gerät deines Kindes und öffne es. Wähle auf einem Smartphone oder Tablet *Dies ist ein Kindergerät*. Öffne auf dem Elterngerät *Familie* und tippe auf das Scan-Symbol (*Code scannen*), scanne dann den QR-Code auf dem Kindergerät (oder gib den 6-stelligen Code ein). Fragt das Kindergerät nach, bestätige dort die Verbindung; ein Fernseher verbindet sich von selbst.',
    start4:
      '**4. Erteile Berechtigungen auf dem Kindergerät.** Öffne den Bildschirm *Status* auf dem Kindergerät und tippe auf *Einrichtung fortsetzen* — die App führt dich durch jede Berechtigung, die KidGate braucht. Unter Android: Mitteilungen, Nutzungszugriff, Über anderen Apps anzeigen, Bedienungshilfen (Sperrfunktion), Wecker und Erinnerungen, Akku ohne Einschränkung, die VPN-Verbindung, auf der der Webfilter läuft, Deinstallationsschutz und, für Chatwarnungen, Zugriff auf Benachrichtigungen; unter iOS: *App- & Websitenutzung erlauben* (Bildschirmzeit) und für den Webfilter *Erlauben*, wenn iOS fragt, ob VPN-Konfigurationen hinzugefügt werden dürfen. Die Steuerung funktioniert erst vollständig, wenn diese aktiv sind.',
    start5:
      '**5. Richte die Steuerung ein.** Öffne auf dem Elterngerät die Gerätekarte des Kindes und lege Tageslimit, Sperrzeiten, Blockierte Apps, Webfilter und Standortfunktionen fest.',
    startNote:
      'Die App enthält außerdem eine Schritt-für-Schritt-Anleitung: *Einstellungen → Anleitung*, mit Details zu Gerätekopplung, Berechtigungen, täglicher Steuerung und Sicherheitsfunktionen.',

    faqTitle: 'Häufige Fragen',

    faq1Q: 'Kann ich meine Familie vom Computer aus verwalten?',
    faq1A:
      'Ja. Öffne das [Web-Dashboard](/dashboard) und scanne den angezeigten Code mit der KidGate-App auf deinem Handy — oder melde dich mit demselben Konto an, das du in der App nutzt: Google, Apple oder E-Mail und Passwort. Es zeigt dieselbe Familie, dieselben Geräte, Berichte und Einstellungen. Bist du mit einem Konto angemeldet, verlangt jede Änderung an der Steuerung deine Eltern-PIN. Konten und Gerätekopplung laufen weiterhin über die mobile App.',

    faq2Q: 'Wie koppele ich Eltern- und Kindergerät?',
    faq2A:
      'Öffne auf dem Kindergerät KidGate. Wähle auf einem Smartphone oder Tablet *Dies ist ein Kindergerät*. Dann erscheinen ein QR-Code und ein 6-stelliger Code. Öffne auf dem Elterngerät *Familie* und tippe auf das Scan-Symbol (*Code scannen*), scanne dann den QR-Code (empfohlen) oder gib den Code manuell ein. Fragt das Kindergerät nach, bestätige dort den Namen des Elternteils; ein Fernseher verbindet sich von selbst. Codes laufen ab — schlägt die Kopplung fehl, tippe auf dem Kindergerät auf *Neuer Code* und versuche es erneut.',

    faq3Q: 'Können zwei Eltern dieselbe Familie verwalten?',
    faq3A:
      'Ja. Öffne auf dem Gerät der Familieninhaberin oder des Familieninhabers *Familie → + → Elternteil einladen* und teile den Einladungs-QR-Code oder -Code. Das andere Elternteil installiert KidGate, meldet sich als Elternteil an, öffnet *Familie* und tippt auf das Scan-Symbol (*Code scannen*), scannt dann den QR-Code oder gibt dort den Einladungscode ein. Danach gibt die Inhaberin oder der Inhaber die Anfrage frei. Eine Familie kann im kostenlosen Tarif und während der Testphase bis zu 3 Elternteile haben, mit Premium bis zu 6. Ein Abo deckt die ganze Familie ab; nur die Inhaberin oder der Inhaber zahlt.',

    faq4Q: 'Wie funktioniert die kostenlose Testphase?',
    faq4A:
      'Die 7-tägige Testphase beginnt, sobald dein erstes Eltern- und Kindergerät verbunden sind, und schaltet alle Funktionen frei. Das Entfernen eines Kindergeräts setzt sie nicht zurück. Danach laufen alle Regeln kostenlos weiter, und ein Kindergerät deiner Wahl sendet weiter Berichte; Premium bringt Live-Aktivität, Verlauf, Wochenberichte und Berichte von jedem Gerät zurück.',

    faq5Q: 'Wie kündige ich mein Abo?',
    faq5A:
      'Abos werden über den App Store oder Google Play abgerechnet, nicht direkt über KidGate. Unter iOS: *Einstellungen → dein Name → Abonnements*. Unter Android: *Google Play → Profilsymbol → Zahlungen und Abos → Abos*. Das Abo verlängert sich automatisch, sofern du nicht mindestens 24 Stunden vor Ende der laufenden Periode kündigst.',

    faq6Q: 'Wie stelle ich meine Käufe wieder her?',
    faq6A:
      'Öffne auf dem Elterngerät den Bildschirm *Pläne* und tippe auf *Käufe wiederherstellen*. Achte darauf, mit demselben App-Store-Konto angemeldet zu sein, mit dem du gekauft hast. Beachte: Nur die Familieninhaberin oder der Familieninhaber kann abonnieren oder Käufe wiederherstellen.',

    faq7Q: 'Warum werden keine Bildschirmzeit-Daten angezeigt?',
    faq7A:
      'Die Nutzungsdaten kommen vom Kindergerät. Prüfe, ob es online ist, öffne dort KidGate und sieh dir den Bildschirm *Status* an — jede Berechtigungszeile sollte als erlaubt angezeigt werden (unter Android ist der Nutzungszugriff für die Bildschirmzeit-Erfassung nötig). Berichte brauchen manchmal ein paar Minuten zum Abgleichen.',

    faq8Q: 'Warum funktionieren Sperren oder Sperrzeiten nicht?',
    faq8A:
      'Unter Android braucht das Sperren *Über anderen Apps anzeigen* und den Helfer unter *Bedienungshilfen*, dazu einen uneingeschränkten Akku. Auf Xiaomi, Samsung, Oppo, Vivo und ähnlichen Geräten erlaube außerdem den Autostart und nimm KidGate aus jeder Liste „schlafender Apps“ (siehe *Status → Autostart erlauben* auf dem Kindergerät). Unter iOS hängt das Sperren von der Bildschirmzeit-Freigabe ab. Wird eine Berechtigung später ausgeschaltet, bekommst du auf dem Elterngerät eine Schutzwarnung.',

    faq9Q: 'Wie sperre ich bestimmte Apps?',
    faq9A:
      'Öffne auf dem Elterngerät die *Apps* deines Kindes, dann *Installierte Apps*, tippe auf eine App und wähle *Sperren*. Auf einem iPhone werden die Apps stattdessen auf dem iPhone ausgewählt: Öffne *KidGate → Einstellungen*, tippe auf *Mit Eltern-PIN entsperren*, öffne *Blockierte Apps*, wähle die Apps aus und speichere. Schalte danach auf dem Elterngerät *Blockierte Apps aktivieren* ein. Ein verbundenes Kindergerät erhält jede Änderung innerhalb einer Minute. Unter iOS blendet Apple exakte App-Namen für das Elterngerät möglicherweise aus.',

    faq10Q: 'Warum wird der Standort meines Kindes nicht aktualisiert?',
    faq10A:
      'Der Standort muss für KidGate auf dem Kindergerät erlaubt sein, und das Gerät braucht eine Netzverbindung. Öffne auf dem Elterngerät den Bildschirm *Standort* dieses Geräts und tippe auf *Standort aktualisieren*. Energiesparmodi können Updates verzögern, und GPS in Innenräumen kann ungenauer sein.',

    faq11Q: 'Wie entferne ich KidGate vom Gerät meines Kindes?',
    faq11A:
      'Entferne das Gerät zuerst in der Eltern-App (öffne das Gerät unter *Familie* und wähle Entfernen) und deinstalliere danach die App auf dem Gerät des Kindes.',

    faq12Q: 'Wie lösche ich mein Konto und meine Daten?',
    faq12A:
      'Gehe in der Eltern-App zu *Einstellungen → Konto → Konto löschen*. Nach einer Wartezeit von 14 Tagen, in der du den Antrag zurücknehmen kannst, löscht das dein Familienkonto und alle Daten endgültig — Geräte, Aktivität, Standortverlauf und SOS-Fotos — für alle Eltern und Kinder. Auf unserer Seite [Konto- und Datenlöschung](/delete-account) findest du alle Optionen, auch die Löschung ohne installierte App.',

    legalTitle: 'Rechtliches',
    legalDeletion: 'Konto- und Datenlöschung',
  },

  deleteAccount: {
    title: 'Löschung von Konto und Daten',
    updated: 'Zuletzt aktualisiert: 18. September 2026',
    intro:
      'Diese Seite erklärt, wie du dein KidGate-Konto und die damit verbundenen Daten löschen kannst. Du kannst die Löschung jederzeit beantragen, und dafür muss die App nicht installiert sein.',

    option1Title: 'Option 1: Konto in der App löschen',
    option1Step1: 'Öffne die KidGate-App und melde dich an.',
    option1Step2: 'Gehe zu *Einstellungen → Konto → Konto löschen*.',
    option1Step3: 'Bestätige die Löschung.',

    option2Title: 'Option 2: Löschung per E-Mail beantragen',
    option2Step1:
      'Sende eine E-Mail an [support@kidgate.app](mailto:support@kidgate.app?subject=Account%20Deletion%20Request) mit dem Betreff „Account Deletion Request“.',
    option2Step2:
      'Sende die Anfrage von der E-Mail-Adresse, die mit deinem KidGate-Konto verknüpft ist, damit wir deine Identität prüfen können.',
    option2Step3:
      'Wir bestätigen deine Anfrage und planen die Löschung ein. Sie wird 14 Tage lang zurückgehalten; in dieser Zeit kannst du sie abbrechen. Danach wird sie ausgeführt und lässt sich nicht mehr rückgängig machen.',

    deletedTitle: 'Was gelöscht wird',
    deletedIntro: 'Beim Löschen deines Kontos werden dauerhaft entfernt:',
    deleted1: 'Die Daten deines Elternkontos (Name, E-Mail-Adresse).',
    deleted2: 'Alle von dir angelegten Kinderprofile.',
    deleted3:
      'Alle von verwalteten Geräten erfassten Aktivitätsdaten, darunter App-Nutzung, Bildschirmzeit-Verlauf, Browser-Aktivität, Standortverlauf sowie Check-in- und SOS-Fotos.',
    deleted4: 'Deine Einstellungen und Präferenzen zur Kindersicherung.',
    deleted5: 'Von dir gestellte Supportanfragen samt angehängten Screenshots.',
    deleted6:
      'Deine Anmeldung selbst, sodass das Konto nicht erneut verwendet werden kann.',

    retentionTitle: 'Aufbewahrungsfristen',
    retention1:
      'Die Daten werden gelöscht, wenn die **14-tägige** Wartefrist für eine verifizierte Anfrage endet. Die Löschung ist endgültig, und danach gibt es keinen Export mehr.',
    retention2:
      'Ein Nachweis, dass die Löschung beantragt und durchgeführt wurde – ein Hash deiner E-Mail-Adresse und die Zeitpunkte, sonst nichts – wird **12 Monate** lang aufbewahrt, damit wir bei einer angezweifelten Löschung Auskunft geben können.',
    retention3:
      'Wo das Gesetz es verlangt, bewahren wir möglicherweise einen minimalen Satz an Unterlagen auf (zum Beispiel Transaktionsbelege für steuerliche Zwecke) – nur so lange, wie es rechtlich vorgeschrieben ist.',

    partialTitle: 'Teilweise Löschung',
    partial:
      'In der App kannst du ein Kind oder ein Gerät entfernen; damit endet die Datenerfassung dafür. Bereits erfasster Verlauf läuft nach dem Zeitplan der Datenschutzerklärung ab (30 Tage für Nutzungs-, Web- und Standortverlauf sowie den Aktivitätsverlauf; 90 Tage für SOS, Check-in und Zeitanfragen); wenn er früher gelöscht werden soll, schreibe an [support@kidgate.app](mailto:support@kidgate.app).',
    moreInfo:
      'Weitere Informationen dazu, wie wir mit deinen Daten umgehen, findest du in unserer [Datenschutzerklärung](/privacy-policy).',
  },

  download: {
    eyebrow: 'Download',
    qrScan: 'Mit der Handykamera scannen und die App laden',
    macosTitle: 'macOS',
    macosRequires: 'macOS 12 oder neuer, auf einem Mac mit Apple Silicon.',
    windowsTitle: 'Windows',
    windowsRequires: 'Windows 10 oder neuer, 64 Bit.',
    button: 'Herunterladen',
    warningSub:
      'Windows zeigt eine SmartScreen-Warnung bei jeder App, die außerhalb des eigenen Stores von einem Entwickler installiert wird, der noch nicht auf der verifizierten Liste steht — sie beruht nicht auf einem Fund in KidGate. Auf der Windows-Karte oben steht, wie du sie erlaubst. Das Mac-Paket ist mit einer Apple Developer ID signiert und von Apple notarisiert und löst deshalb keine Warnung aus. Lade KidGate nur von kidgate.app herunter.',
    macosSteps:
      'Öffne das geladene Paket und folge dem Installationsprogramm. macOS fragt dich danach einmal, ob du die KidGate-Systemerweiterung erlauben möchtest: Öffne die Einstellungen, auf die diese Meldung verweist, und erlaube sie dort. Der Webfilter läuft erst, wenn du das getan hast. Nach der Installation läuft KidGate über sein Symbol in der Menüleiste weiter; klicke auf das Symbol, um das Fenster zu öffnen.',
    windowsSteps:
      'Dein Browser warnt möglicherweise zuerst, dass die Datei nicht häufig heruntergeladen wird — behalte sie. Wenn Windows danach meldet, dass es deinen PC geschützt hat, wähle Weitere Informationen und dann Trotzdem ausführen. Nach der Installation läuft KidGate über sein Symbol im Infobereich weiter; klicke auf das Symbol, um das Fenster zu öffnen.',
  },
  about: {
    eyebrow: 'Über uns',
    title: 'Kindern helfen, Technik sicherer zu nutzen,',
    titleAccent: 'und Familien ein paar Sorgen abnehmen.',
    lede: 'Handys, Computer und Fernseher gehören heute zum Leben eines Kindes. Das ist nicht unbedingt schlecht — entscheidend ist, wie und wie lange sie genutzt werden und ob Kinder vor Inhalten geschützt sind, die nicht zu ihnen passen. KidGate hilft Eltern, die wichtigen Grenzen zu setzen: einfach, offen und fair — für Eltern wie für Kinder.',
    storyEyebrow: 'Warum es KidGate gibt',
    storyTitle: 'Es beginnt mit einem Moment, den jede Familie kennt',
    storyP1:
      '„Nur noch fünf Minuten!“ Dann sind die fünf Minuten um. Die Eltern fragen noch einmal, das Kind ist verärgert, und aus einer Kleinigkeit wird ein Streit, den niemand wollte. Wir glauben nicht, dass jede Familie strengere Regeln braucht. Manchmal braucht sie einfach Regeln, die klar sind, die alle verstehen und auf die sich alle verlassen können.',
    storyP2:
      'Mit KidGate legen Eltern Tageslimit, Sperrzeiten, Blockierte Apps und Webfilter einmal fest, und danach laufen die Regeln von selbst — so weit das jeweilige Gerät es zulässt. Auch Kinder sehen ihre Limits, wissen, wann das Gerät gesperrt wird, und können um mehr Zeit bitten, wenn sie sie brauchen.',
    storyP3:
      'Eltern müssen nicht jeden Tag daran erinnern. Kinder müssen nicht raten, ob sich die Regeln heute geändert haben. Weniger Streit, mehr Zeit miteinander.',
    valuesEyebrow: 'Was uns wichtig ist',
    valuesTitle: 'Woran wir immer festhalten',
    valuesSub: 'Jede Funktion von KidGate beginnt bei diesen vier Dingen.',
    value1Title: 'Offen zu Eltern und Kindern',
    value1Text:
      'Kinder haben ein Recht darauf, die Regeln auf ihrem eigenen Gerät zu kennen. Eltern haben die Werkzeuge, um sie zu schützen; Kinder verstehen ihre Limits, können um mehr Zeit bitten und erreichen auf unterstützten Geräten mit SOS ein Elternteil. Technik soll einer Familie helfen, einander zu verstehen, nicht sich voneinander zu entfernen.',
    value2Title: 'Die Privatsphäre deiner Familie zählt',
    value2Text:
      'KidGate zeigt keine Werbung und verkauft die Daten deines Kindes an niemanden. Du kannst verlangen, dass wir dein Familienkonto und die dazugehörigen Daten löschen — in der App oder per E-Mail, wie es auf dieser Website erklärt ist —, und nach dem von uns veröffentlichten Ablauf ist alles 14 Tage später gelöscht.',
    value3Title: 'Ehrlich darüber, was KidGate kann',
    value3Text:
      'Jedes Gerät hat seine eigenen Grenzen, deshalb funktionieren manche Funktionen auf iPhone, Android, Mac, Windows und Fernseher unterschiedlich. Das sagen wir direkt auf dem Bildschirm, statt zu versprechen, dass überall alles gleich läuft. Eine Familie zu schützen braucht gute Werkzeuge — und Informationen, auf die man sich verlassen kann.',
    value4Title: 'Eine Familie, ein Premium-Abo',
    value4Text:
      'Ein Premium-Abo gilt für alle Eltern und alle Kindergeräte — nichts muss pro Gerät gekauft werden. Auch ohne Abo laufen Tageslimit, Sperrzeiten, Blockierte Apps, Gerätesperre und der Webfilter auf unterstützten Geräten weiter, und SOS liegt nie hinter der Bezahlschranke — denn die wichtigsten Sicherheitswerkzeuge sollten immer erreichbar sein.',
    makeEyebrow: 'Was wir bauen',
    makeTitle: 'Eine App, viele Geräte',
    makeSub:
      'Unterwegs nutzen Kinder das Handy, für die Schule den Computer und zum Entspannen den Fernseher — da sollte die Fürsorge nicht an einem Gerät enden. Jede Plattform hat ihre eigenen Stärken, aber das Ziel bleibt dasselbe: leichter für Eltern, klarer für Kinder.',
    make1Title: 'iPhone und iPad',
    make1Text:
      'Tageslimit, Sperrzeiten und Blockierte Apps auf Basis von Apples eigener Bildschirmzeit, dazu der Webfilter direkt auf dem Gerät.',
    make2Title: 'Android',
    make2Text:
      'Limits, Blockierte Apps, eine Bildschirmsperre und der Webfilter, dazu eine Nachricht, wenn dein Kind eine neue App installiert.',
    make3Title: 'macOS',
    make3Text:
      'Derselbe Zeitplan und dieselben Limits wie auf den Handys, dazu eine Tagesübersicht, die Eltern auf einen Blick erfassen.',
    make4Title: 'Windows',
    make4Text:
      'Dieselben Regeln auf dem PC, und KidGate startet von selbst neu, wenn es geschlossen oder beendet wird.',
    make5Title: 'Android TV',
    make5Text:
      'Der gemeinsame Bildschirm der Familie im Wohnzimmer, mit denselben Limits und demselben Zeitplan wie auf den Handys. Ein Fernseher teilt keinen Standort und hat kein SOS.',
    make6Title: 'Chrome',
    make6Text:
      'Die Chrome-Erweiterung bringt den Webfilter in den Browser, auch auf einem Computer, auf dem KidGate nicht laufen kann. Wenn du es einschaltest, zeichnet sie außerdem die YouTube-Videos auf, die dein Kind angesehen hat, markiert bedenkliche Suchanfragen und zeigt dir, welche anderen Erweiterungen installiert sind. Sie misst keine Bildschirmzeit und sperrt keine Apps.',
    make7Title: 'Eltern-Dashboard',
    make7Text:
      'Behalte die ganze Familie in einem Browser auf jedem Computer im Blick. Zum Anmelden scannst du einfach einen Code mit deinem Handy — nichts zu installieren.',
    factsEyebrow: 'KidGate heute',
    factsTitle: 'Vier Zahlen',
    fact1Label: 'Sprachen, damit jede Familie KidGate in ihrer eigenen nutzen kann',
    fact2Label: 'Plattformen, plus das Web-Dashboard',
    fact3Label: 'Werbung in KidGate',
    fact4Label: 'Premium-Abo für die ganze Familie',
    contactEyebrow: 'Wir hören zu',
    contactTitle: 'Jede Nachricht liest ein Mensch',
    contactSub:
      'Etwas funktioniert nicht wie erwartet, deiner Familie fehlt eine Funktion, oder eine Übersetzung klingt in deiner Sprache nicht natürlich — schreib uns. Jede Nachricht hilft, KidGate für die Familien, die es jeden Tag nutzen, noch hilfreicher zu machen.',
    contactEmail: 'Schreib uns',
    contactSupport: 'Support und Anleitungen',
    contactPrivacy: 'Wie wir mit Daten umgehen',
  },
  promo: {
    intro: 'Den ganzen Tag über: dein Kind geschützt, du entspannt.',
    school: 'Der Unterricht beginnt. Das Handy sperrt sich selbst.',
    apps: 'Apps, die du sperrst, lassen sich nicht öffnen.',
    arrive: 'Bei Oma angekommen — und du wirst benachrichtigt.',
    checkIn: 'Du fragst nach, und mit einem Tipp meldet dein Kind: alles in Ordnung.',
    sos: 'Wenn etwas passiert, zeigt dir ein SOS sofort, wo dein Kind ist.',
    limit: 'Spielzeit vorbei. Das Handy sperrt sich selbst.',
    lockNow: 'Essen ist fertig. Sperre das Handy deines Kindes von deinem aus.',
    web: 'Blockiere schädliche Seiten auf jedem Gerät.',
    tv: 'Auch der Fernseher im Wohnzimmer hält sich an eure Familienregeln.',
    reward: 'Hausaufgaben erledigt. 15 Bonusminuten verdient.',
    bedtime: 'Zur Schlafenszeit gehen auch Handy, Computer und Fernseher schlafen.',
    kid: 'Kind',
    parent: 'Eltern',
    arrivedNotice: 'Mia ist bei Oma angekommen',
    checkAsk: 'Alles okay?',
    checkReply: 'Mir geht’s gut',
    sosNotice: 'Mia hat ein SOS gesendet',
    timeUp: 'Die Spielzeit für heute ist vorbei',
    lockButton: 'Jetzt sperren',
    task: 'Hausaufgaben erledigt',
    granted: '+15 Min.',
    youtubeTitle: 'KidGate — Kindersicherung für Handy, Computer und Fernseher',
    youtubeDescription:
      'Ein ganz normaler Tag mit KidGate, vom Schulbeginn bis zur Schlafenszeit.',
  },
  setup: {
    parentTitle: 'Dein Handy einrichten',
    parentSub: 'Der erste Schritt. Er dauert nur ein paar Minuten.',
    install:
      'Suche „KidGate“ im App Store oder bei Google Play und installiere die App.',
    installSub: 'iPhone, iPad oder Android-Handy.',
    role: 'Öffne KidGate und wähle „{{parent}}“.',
    signIn:
      'Tippe auf „{{signIn}}“ und melde dich dann mit Apple, Google oder E-Mail an.',
    signInSub: 'Mit Apple bestätigst du einfach per Face ID.',
    family: 'Tippe im „{{tab}}“ auf „{{create}}“ und benenne deine Familie.',
    done: 'Dein Teil ist erledigt.',
    parentYoutubeTitle: 'So richtest du KidGate auf deinem Handy ein',
    parentYoutubeDescription:
      'Installiere KidGate, melde dich an und erstelle deine Familie: der erste Schritt, bevor du die Geräte deines Kindes verbindest.',
    pairSub: 'Verbinde es mit deinem Handy und schalte dann seinen Schutz ein.',
    parentPhone: 'Dein Handy',
    openSub: 'Ein QR-Code erscheint. Lass diesen Bildschirm geöffnet.',
    scanSub: 'Scannen klappt nicht? Wähle „{{manual}}“.',
    protect: 'Tippe auf „{{turnOn}}“, um mit sicheren Standardregeln zu beginnen.',
    protectSub: 'Jede Regel kannst du später feiner einstellen.',
    tapAllow: 'Tippe auf „{{allow}}“.',
    extras: 'Erlaube zuletzt Kamera und Mikrofon.',
    extrasSub:
      'Optional: Dann kann dein Kind einem SOS ein Foto oder einen Ton anhängen.',
    iosTitle: 'Das iPhone oder iPad deines Kindes einrichten',
    childPhone: 'iPhone des Kindes',
    iosOpen: 'Öffne KidGate auf dem iPhone deines Kindes und wähle „{{child}}“.',
    iosScan: 'Tippe auf deinem Handy auf „{{add}}“ und scanne den QR-Code.',
    iosConfirm:
      'Prüfe auf dem iPhone deines Kindes, dass du es bist, und tippe dann auf „{{yes}}“.',
    iosPin: 'Lege deine „{{pin}}“ fest (6 Ziffern).',
    iosPinSub:
      'Das iPhone deines Kindes fragt danach, bevor sich blockierte Apps ändern lassen.',
    iosAssign:
      'Wähle aus, wer dieses iPhone nutzt, oder füge dein Kind mit Namen hinzu.',
    iosScreenTime:
      'Tippe auf dem iPhone deines Kindes auf „{{allow}}“ und erlaube den Zugriff auf Bildschirmzeit.',
    iosScreenTimeSub:
      'Apple verlangt dafür Face ID oder den Gerätecode dieses iPhones.',
    iosNotify:
      'Tippe auf „{{settings}}“, aktiviere {{notifications}} und kehre dann zu KidGate zurück.',
    iosRefresh: 'Tippe auf „{{settings}}“ und aktiviere „{{refresh}}“.',
    iosRefreshSub: 'Optional: So läuft KidGate auch im Hintergrund weiter.',
    iosBlocked: 'Tippe auf „{{strengthen}}“ und richte dann „{{blocked}}“ ein.',
    iosBlockedSub:
      'Du tippst auf „{{unlock}}“, gibst deine PIN ein und wählst dann die Apps aus.',
    iosDone: 'Das iPhone deines Kindes ist geschützt.',
    iosYoutubeTitle:
      'So richtest du KidGate auf dem iPhone oder iPad deines Kindes ein',
    iosYoutubeDescription:
      'Verbinde das iPhone oder iPad deines Kindes per QR-Code mit deinem Handy und aktiviere dann Schritt für Schritt Bildschirmzeit und die weiteren Berechtigungen, die KidGate braucht.',
    androidTitle: 'Das Android-Handy oder -Tablet deines Kindes einrichten',
    childAndroid: 'Android-Handy des Kindes',
    androidOpen: 'Öffne KidGate auf dem Handy deines Kindes und wähle „{{child}}“.',
    androidScan: 'Scanne auf deinem Handy den QR-Code mit KidGate.',
    androidConfirm:
      'Prüfe auf dem Handy deines Kindes, dass du es bist, und tippe dann auf „{{yes}}“.',
    androidAssign:
      'Wähle aus, wer dieses Handy nutzt, oder füge dein Kind mit Namen hinzu.',
    androidUsage:
      'Tippe auf dem Handy deines Kindes auf „{{open}}“ und erlaube KidGate den Zugriff auf Nutzungsdaten.',
    androidBack: 'Wische dann zurück zu KidGate.',
    androidAccessibility:
      'Tippe auf „{{agree}}“ und aktiviere dann KidGate unter Bedienungshilfen.',
    androidOverlay: 'Tippe auf „{{settings}}“ und erlaube „{{overlay}}“ für KidGate.',
    androidNotify: 'Tippe auf „{{allow}}“ und lass dann Benachrichtigungen zu.',
    androidWebFilter: 'Tippe auf „{{enable}}“ und erlaube die Verbindung.',
    androidWebFilterSub: 'Der {{filter}} von KidGate läuft auf dem Handy als VPN.',
    androidBattery:
      'Tippe auf „{{settings}}“ und lass KidGate dann immer im Hintergrund laufen.',
    androidStrengthen: 'Tippe auf „{{strengthen}}“ und aktiviere dann „{{uninstall}}“.',
    androidMessages:
      'Tippe bei „{{alerts}}“ auf „{{grant}}“ und aktiviere den Zugriff für KidGate.',
    androidMessagesSub:
      'KidGate prüft eingehende Nachrichten auf Warnwörter, direkt auf dem Handy.',
    androidDone: 'Das Android-Handy deines Kindes ist geschützt.',
    androidYoutubeTitle:
      'So richtest du KidGate auf dem Android-Handy oder -Tablet deines Kindes ein',
    androidYoutubeDescription:
      'Verbinde das Android-Handy oder -Tablet deines Kindes per QR-Code mit deinem Handy und aktiviere dann Schritt für Schritt die Berechtigungen, die KidGate braucht.',
    macTitle: 'Den Mac deines Kindes einrichten',
    childMac: 'Mac des Kindes',
    macDownload:
      'Lade auf dem Mac deines Kindes KidGate für macOS von kidgate.app herunter.',
    macInstall:
      'Öffne das heruntergeladene Installationsprogramm und folge den Schritten.',
    macPasswordSub: 'macOS fragt nach dem Passwort dieses Macs.',
    macOpen: 'KidGate öffnet sich und zeigt einen QR-Code.',
    macOpenSub: 'Lass dieses Fenster geöffnet.',
    macScan:
      'Tippe auf deinem Handy in KidGate auf das Scan-Symbol und scanne den QR-Code.',
    macConfirm: 'Prüfe auf dem Mac, dass du es bist, und klicke dann auf „{{yes}}“.',
    macAssign: 'Wähle aus, wer diesen Mac nutzt, oder füge dein Kind mit Namen hinzu.',
    macFilter:
      'Klicke auf dem Mac auf „{{open}}“ und aktiviere dann KidGate unter Netzwerkerweiterungen.',
    macAllow:
      'Wenn macOS fragt, ob KidGate Netzwerkinhalte filtern darf, klicke auf „Erlauben“.',
    macAllowSub: 'Danach schaltet sich der {{filter}} von KidGate ein.',
    macDone: 'Der Mac deines Kindes ist geschützt.',
    macYoutubeTitle: 'So richtest du KidGate auf dem Mac deines Kindes ein',
    macYoutubeDescription:
      'Installiere KidGate auf dem Mac deines Kindes, verbinde ihn per QR-Code mit deinem Handy und aktiviere dann seinen Webfilter in den Systemeinstellungen.',
    windowsTitle: 'Den Windows-PC deines Kindes einrichten',
    childWindows: 'PC des Kindes',
    windowsDownload:
      'Lade auf dem PC deines Kindes KidGate für Windows von kidgate.app herunter.',
    windowsSmartScreen:
      'Wenn Windows meldet, dass es deinen PC geschützt hat, wähle Weitere Informationen und dann Trotzdem ausführen.',
    windowsInstall:
      'Bestätige die Administratorabfrage und folge dann den Schritten des Installationsprogramms.',
    windowsInstallSub:
      'Bei einem Standardkonto fragt Windows nach dem Passwort eines Administrators.',
    windowsConfirm: 'Prüfe auf dem PC, dass du es bist, und klicke dann auf „{{yes}}“.',
    windowsAssign:
      'Wähle aus, wer diesen PC nutzt, oder füge dein Kind mit Namen hinzu.',
    windowsSetup: 'Klicke auf dem PC bei {{location}} auf „{{allow}}“.',
    windowsSetupSub:
      'Der {{filter}} von KidGate schaltet sich innerhalb weniger Sekunden von selbst ein.',
    windowsDone: 'Der PC deines Kindes ist geschützt.',
    windowsYoutubeTitle: 'So richtest du KidGate auf dem Windows-PC deines Kindes ein',
    windowsYoutubeDescription:
      'Installiere KidGate auf dem Windows-PC deines Kindes und verbinde ihn per QR-Code mit deinem Handy. Danach schaltet sich sein Webfilter von selbst ein.',
    chromeTitle: 'KidGate in Chrome einrichten',
    childChrome: 'Computer des Kindes',
    chromeSite:
      'Öffne in Chrome auf dem Computer deines Kindes kidgate.app und wähle Chrome.',
    chromeStore:
      'Klicke im Chrome Web Store auf „Zu Chrome hinzufügen“ und dann auf „Erweiterung hinzufügen“.',
    chromeOpen:
      'Klicke in der Chrome-Symbolleiste auf das KidGate-Symbol. Das Pop-up zeigt einen QR-Code.',
    chromeOpenSub: 'Lasse das Pop-up geöffnet, während du koppelst.',
    chromeConfirm: 'Prüfe in KidGate, dass du es bist, und klicke dann auf „{{yes}}“.',
    chromeAssign: 'Wähle aus, welches Kind Chrome auf diesem Computer nutzt.',
    chromeDone: 'Chrome auf dem Computer deines Kindes ist geschützt.',
    chromeYoutubeTitle:
      'So richtest du KidGate in Chrome auf dem Computer deines Kindes ein',
    chromeYoutubeDescription:
      'Füge die KidGate-Erweiterung zu Chrome auf dem Computer deines Kindes hinzu und verbinde sie per QR-Code mit deinem Handy. Danach filtert sie das Web in Chrome.',
    dashboardComputer: 'Dein Computer',
    dashboardSite: 'Öffne auf deinem Computer kidgate.app und klicke auf „Dashboard“.',
    dashboardDone: 'Du bist im Web-Dashboard angemeldet.',
    tvTitle: 'Den Android TV deines Kindes einrichten',
    tvAssign:
      'Wähle aus, wer diesen Fernseher nutzt, oder füge dein Kind mit Namen hinzu.',
    tvDone: 'Der Android TV deines Kindes ist geschützt.',
    tvYoutubeTitle: 'So richtest du KidGate auf dem Android TV deines Kindes ein',
    outroTitle: 'Alles ist eingerichtet.',
    outroSub: 'Wir hoffen, dass KidGate dir den Familienalltag erleichtert.',
    findDeviceTitle: 'Das Gerät deines Kindes finden',
    allYoutubeTitle:
      'So richtest du KidGate auf deinem Handy und den Geräten deines Kindes ein',
    allYoutubeDescription:
      'Jede Einrichtung in einem Video: zuerst dein Handy, dann jedes Gerät deines Kindes (iPhone oder iPad, Android-Handy oder -Tablet, Mac, Windows-PC, Android TV, Chrome) und zum Schluss das Web-Dashboard. Wähle dein Gerät in der Liste unten.',
    // `guide-all`: every how-to in one video (operator, 2026-10-14).
    guideAllYoutubeTitle: 'So nutzt du KidGate: jede Funktion Schritt für Schritt',
    guideAllYoutubeDescription:
      'Jede Funktion von KidGate in einem Video, Schritt für Schritt, auf dem iPhone eines Elternteils und dem Android-Handy eines Kindes. Wähle unten in der Liste die Funktion, die du brauchst.',
    // `guide-parent-devices`' title card: the app's own wording for the device.
    removeParentDeviceTitle: 'Ein Elterngerät entfernen',
  },
};
