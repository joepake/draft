export const userGuide = {
  title: 'Anleitung',
  subtitle:
    'Schritt-für-Schritt-Hilfe zu Berechtigungen, Gerätekopplung, täglichen Steuerungen und Sicherheitsfunktionen.',
  stepLabel: 'Schritt {{n}}',
  stepsSectionTitle: 'Schritte',
  tipTitle: 'Tipp',
  // The Help Center video button: the wizard's own label (child.setupWizardWatchGuide).
  watchVideo: 'So geht’s',
  searchPlaceholder: 'In der Anleitung suchen…',
  searchClear: 'Suche löschen',
  searchEmpty: 'Nichts in der Anleitung passt dazu. Probiere ein anderes Wort.',
  groups: {
    gettingStarted: {
      title: 'Erste Schritte',
      description: 'Eltern- und Kindergerät zum ersten Mal einrichten',
    },
    connection: {
      title: 'Geräte verbinden',
      description: 'Ein Kindergerät koppeln oder einen weiteren Elternteil einladen',
    },
    permissions: {
      title: 'App-Berechtigungen',
      description:
        'Die Berechtigungen erteilen, die KidGate auf dem Kindergerät benötigt',
    },
    controls: {
      title: 'Tägliche Steuerungen',
      description:
        'Tageslimit, Sperrzeiten, Blockierte Apps, App-Limits, Gerätesperre, Zeitanfragen und Belohnungsaufgaben',
    },
    safety: {
      title: 'Sicherheit und Überwachung',
      description: 'Standort, Check-in, SOS, Webfilter und Schutz',
    },
    reports: {
      title: 'Berichte und Verlauf',
      description:
        'Berichte zur Bildschirmzeit, Web- und Videoverlauf, App- und Nachrichtenwarnungen',
    },
    account: {
      title: 'Konto und Plan',
      description:
        'Premium, Hinweise, Sprache, das Web-Dashboard, PINs, Support und das Löschen deines Kontos',
    },
  },
  topics: {
    getStartedParent: {
      title: 'Ein Elterngerät einrichten',
      summary:
        'Erstelle dein Konto und deine Familie, und verbinde dann dein erstes Kindergerät.',
      tip: 'Lege die Eltern-PIN frühzeitig fest. Du benötigst sie, um sensible Einstellungen zu ändern und Steuerungen auf dem Kindergerät zu entsperren.',
      steps: {
        '1': 'Installiere KidGate auf deinem Gerät. Öffne die App und wähle „Dies ist ein Elterngerät“.',
        '2': 'Melde dich mit Google oder Apple an, oder erstelle ein E-Mail-Konto.',
        '3': 'Öffne Familie, wähle „Familie erstellen“ und gib deiner Familie einen Namen (zum Beispiel „Familie Müller“). Dieser Name wird angezeigt, wenn andere Elternteile beitreten. Hat ein anderer Elternteil deine Familie bereits erstellt, wähle stattdessen „Familie beitreten“.',
        '4': 'Lege eine Eltern-PIN (6 Ziffern) unter Einstellungen, dann Sicherheit fest. Merke sie dir oder bewahre sie an einem sicheren Ort auf und teile sie nicht mit Kindern.',
        '5': 'Empfohlen: Aktiviere App-Sperre und biometrische Entsperrung in den Einstellungen, damit niemand sonst die Eltern-App auf deinem Gerät öffnen kann.',
        '6': 'Öffne Familie und tippe auf das Scan-Symbol („Code scannen“). Die Kamera öffnet sich sofort: Scanne den QR-Code auf dem Kindergerät oder wähle „Code manuell eingeben“ und gib den Code ein.',
        '7': 'Sobald das Kindergerät verbunden ist, fragt KidGate, wer es nutzt: Wähle dein Kind (oder füge eines hinzu) oder „Niemand“ für ein geteiltes Gerät. Öffne dann unter Familie das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist). Lege gemeinsam mit deinem Kind das Tageslimit und die Sperrzeiten fest und schließe die Berechtigungen ab.',
      },
    },
    getStartedChild: {
      title: 'Ein Kindergerät einrichten',
      summary:
        'Installiere KidGate auf dem Kindergerät und schließe die Berechtigungen ab.',
      tip: 'Mache dies gemeinsam mit einem Elternteil. Viele Berechtigungsbildschirme erscheinen nur einmal und werden allein leicht übersehen.',
      steps: {
        '1': 'Installiere KidGate auf dem Kindergerät. Öffne die App und wähle „Dies ist ein Kindergerät“.',
        '2': 'Lasse den Kopplungsbildschirm geöffnet. Zeige dem Elternteil den QR-Code oder lies den 6-stelligen Code vor.',
        '3': 'Scanne auf dem Elterngerät den QR-Code oder gib den Code ein. Bestätige auf dem Kindergerät den Elternteil, wenn du dazu aufgefordert wirst – akzeptiere nur eine dir bekannte Person.',
        '4': 'Warte, bis der Startbildschirm anzeigt, dass das Gerät verbunden ist. Beende KidGate während der Einrichtung nicht über den App-Umschalter.',
        '5': 'Wähle auf dem Bildschirm „Status“ in der Karte „Einrichtung mit einem Elternteil abschließen“ den Eintrag „Einrichtung fortsetzen“. „Schutz einrichten“ fragt dann Schritt für Schritt nach jeder Berechtigung, die KidGate braucht (Benachrichtigungen, Standort, Kamera und plattformspezifische Rechte). Erlaube jede einzelne oder überspringe einen optionalen Schritt vorerst.',
        '6': 'Lass KidGate auf dem Kindergerät installiert und verbunden. Eltern verwalten die Limits ab jetzt von ihrem eigenen Gerät aus.',
      },
    },
    connectChild: {
      title: 'Das Handy oder Tablet eines Kindes verbinden',
      summary:
        'Koppele ein neues Kindergerät mit deiner Familie per QR-Code oder Code.',
      tip: 'Codes laufen ab. Wenn die Kopplung fehlschlägt, wähle auf dem Kindergerät „Neuer Code“ und versuche es erneut.',
      steps: {
        '1': 'Auf dem Kindergerät: Öffne KidGate, dann „Dies ist ein Kindergerät“. Lasse den QR-Code-Bildschirm sichtbar.',
        '2': 'Auf dem Elterngerät: Öffne Familie und tippe auf das Scan-Symbol („Code scannen“).',
        '3': 'Die Kamera öffnet sich sofort: Erlaube bei Aufforderung den Kamerazugriff und richte den QR-Code des Kindergeräts im Rahmen aus.',
        '4': 'Oder verwende den Code: Wähle „Code manuell eingeben“, gib die 6 auf dem Kindergerät angezeigten Zeichen ein und fahre fort.',
        '5': 'Lies auf dem Kindergerät den Bestätigungsbildschirm sorgfältig durch. Wähle „Ja, verbinden“ nur, wenn der Elternname korrekt ist.',
        '6': 'Warte, bis das Elterngerät die Verbindung bestätigt. Der Familieninhaber wird dann gefragt, wer das neue Gerät nutzt: Wähle ein Kind oder „Niemand“ für ein geteiltes Gerät. Das Gerät erscheint unter „Familie“.',
        '7': 'Öffne das neue Gerät und prüfe, ob sich „Zuletzt aktiv“ aktualisiert. Bleibt es offline, öffne KidGate erneut auf dem Kindergerät und überprüfe die Netzwerkverbindung.',
        '8': 'Erteile als Nächstes die Berechtigungen auf dem Kindergerät (siehe die Gruppe App-Berechtigungen). Die Steuerungen funktionieren erst vollständig, wenn diese Berechtigungen aktiv sind.',
      },
    },
    connectComputer: {
      title: 'Einen Computer verbinden (Mac oder Windows)',
      summary:
        'Installiere KidGate auf dem Mac oder Windows-PC deines Kindes und kopple ihn genauso wie ein Handy.',
      keywords: 'mac, macbook, windows, pc, laptop, desktop',
      tip: 'Richte KidGate ein, während dein Kind mit seinem eigenen Benutzerkonto am Computer angemeldet ist, und mache dieses Konto zu einem Standardkonto (ohne Administratorrechte). Ein Administratorkonto kann KidGate entfernen.',
      steps: {
        '1': 'Öffne auf dem Computer kidgate.app/download und lade KidGate für Mac oder Windows herunter.',
        '2': 'Führe das Installationsprogramm aus und bestätige die Administratorabfrage. Wenn Windows meldet, dass es deinen PC geschützt hat, wähle „Weitere Informationen“ und dann „Trotzdem ausführen“.',
        '3': 'Öffne KidGate auf dem Computer. Die App zeigt einen QR-Code und einen 6-stelligen Code an; eine Anmeldung ist nicht nötig.',
        '4': 'Öffne auf deinem Gerät Familie, tippe auf das Scan-Symbol („Code scannen“) und scanne den QR-Code – oder wähle „Code manuell eingeben“ und gib den Code ein.',
        '5': 'Prüfe auf dem Computer den Elternnamen und wähle „Ja, verbinden“.',
        '6': 'Gehe die Schritte unter „Einrichtung dieses Geräts abschließen“ durch. Wähle auf einem Mac bei „Webfilter freigeben“ die Option „Einstellungen öffnen“ und schalte KidGate auf der Seite ein, die sich dann öffnet – der Webfilter läuft erst, wenn du das getan hast. Wähle „Erlauben“ für Standort und Kamera.',
        '7': 'Wähle anschließend auf deinem Gerät aus, welches Kind den Computer nutzt. Die zu blockierenden Apps werden direkt auf dem Computer ausgewählt, nach Eingabe der Eltern-PIN („Apps zum Blockieren auswählen“).',
      },
    },
    connectTv: {
      title: 'Einen Fernseher mit Android TV verbinden',
      summary:
        'Installiere KidGate auf einem Fernseher mit Android TV und kopple ihn von deinem Gerät aus – ohne Eingaben per Fernbedienung.',
      keywords: 'android tv, google tv, fernseher, box',
      tip: 'Auf einem Fernseher gibt es weder Standort noch SOS, Check-in oder Zeitanfragen, und eine blockierte App wird nach dem Öffnen geschlossen, statt gar nicht erst zu starten. Die Bildschirmzeit kann mit bis zu einer Stunde Verspätung eintreffen. Ein Fernseher ohne Google-Play-Dienste hat keine Push-Benachrichtigungen, deshalb kann es bis zu 30 Minuten dauern, bis eine Sperre, eine Entsperrung oder eine Regeländerung ankommt.',
      steps: {
        '1': 'Öffne auf dem Fernseher Google Play, suche nach KidGate und installiere die App.',
        '2': 'Öffne KidGate auf dem Fernseher. Die App zeigt einen QR-Code und einen 6-stelligen Code an; eine Anmeldung ist nicht nötig.',
        '3': 'Öffne auf deinem Gerät Familie, tippe auf das Scan-Symbol („Code scannen“) und scanne den QR-Code auf dem Fernseher – oder wähle „Code manuell eingeben“ und gib den Code ein.',
        '4': 'Der Fernseher verbindet sich innerhalb weniger Sekunden von selbst. Mit der Fernbedienung musst du nichts bestätigen.',
        '5': 'Folge auf dem Fernseher den Schritten unter „Schutz einrichten“: Wähle „Einstellungen öffnen“, um Bedienungshilfen, Nutzungszugriff und Über anderen Apps anzeigen einzuschalten, und bestätige dann die VPN-Verbindung, damit der Webfilter laufen kann.',
        '6': 'Bleibt eine Einstellung nicht aktiv, starte den Fernseher neu und versuche es erneut. Du kannst „Schutz einrichten“ über den Hauptbildschirm von KidGate auf dem Fernseher erneut öffnen.',
        '7': 'Wähle anschließend auf deinem Gerät aus, welches Kind den Fernseher nutzt. Die zu blockierenden Apps werden direkt auf dem Fernseher ausgewählt, nach Eingabe der Eltern-PIN.',
      },
    },
    connectChrome: {
      title: 'Die Chrome-Erweiterung verbinden',
      summary:
        'Füge den KidGate-Webfilter zu Chrome auf einem Chromebook, Mac oder PC hinzu. Die Erweiterung erscheint als eigenes Gerät.',
      keywords: 'chromebook, chrome-erweiterung, browser-erweiterung',
      tip: 'Die Erweiterung filtert nur Chrome: keine anderen Browser und keine Inkognitofenster, außer du erlaubst es. Öffne unter chrome://extensions die „Details“ von KidGate und aktiviere „Im Inkognitomodus zulassen“. Sie hat weder Tageslimit noch Sperrzeiten, Gerätesperre, Blockierte Apps oder Bildschirmzeit; dafür brauchst du ein Handy, einen Computer oder einen Fernseher.',
      steps: {
        '1': 'Öffne in Chrome auf dem Computer deines Kindes den Chrome Web Store, suche nach KidGate und wähle „Zu Chrome hinzufügen“.',
        '2': 'Wähle das KidGate-Symbol in der Chrome-Symbolleiste. Siehst du es nicht, pinne es über das Menü „Erweiterungen“ (Puzzleteil-Symbol) an. Das Pop-up zeigt einen QR-Code und einen 6-stelligen Code; lasse es geöffnet, während du koppelst.',
        '3': 'Öffne auf deinem Gerät Familie, tippe auf das Scan-Symbol („Code scannen“) und scanne den QR-Code – oder wähle „Code manuell eingeben“ und gib den Code ein.',
        '4': 'Prüfe im KidGate-Pop-up den Elternnamen und wähle „Ja, verbinden“.',
        '5': 'Wähle anschließend auf deinem Gerät aus, welches Kind die Erweiterung nutzt, und schalte dann den Webfilter für sie ein. Bis dahin zeigt die Erweiterung „Inaktiv“ an.',
        '6': 'Optional: Um zu sehen, welche Videos angesehen werden, öffne „Angesehene Videos“ und schalte „Angesehene Videos aufzeichnen“ für die Erweiterung ein.',
      },
    },
    inviteParent: {
      title: 'Einen weiteren Elternteil einladen',
      summary:
        'Lass einen zweiten Elternteil derselben Familie beitreten und dieselben Kindergeräte verwalten.',
      tip: 'Nur der Familieninhaber kann Beitrittsanfragen genehmigen. Genehmige zeitnah, da Anfragen ablaufen können. Eine Familie kann im Gratis-Tarif und während der Testphase bis zu 3 Elternteile haben, mit Premium bis zu 6.',
      steps: {
        '1': 'Öffne auf dem Gerät des Familieninhabers Familie, dann tippe auf +, dann „Elternteil einladen“.',
        '2': 'Falls du noch keinen Familiennamen erstellt hast, gib einen ein und wähle „Familie erstellen“.',
        '3': 'Zeige dem anderen Elternteil den Einladungs-QR-Code oder teile den Einladungscode mit ihm.',
        '4': 'Auf dem anderen Elterngerät: Öffne KidGate als Elternteil, dann Familie, und tippe auf das Scan-Symbol („Code scannen“). Scanne dann den Einladungs-QR-Code oder gib den Code ein.',
        '5': 'Öffne auf dem Gerät des Inhabers die ausstehende Anfrage und wähle „Genehmigen“. Lehne ab, wenn du die Person nicht erkennst.',
        '6': 'Der neue Elternteil sieht dieselben Kindergeräte und kann bei der Verwaltung der Limits helfen. Manche Aktionen, wie das Umbenennen oder Entfernen von Geräten, bleiben dem Inhaber vorbehalten.',
      },
    },
    joinFamily: {
      title: 'Einer bestehenden Familie beitreten',
      summary: 'Nutze eine Einladung des Familieninhabers, um Mitelternteil zu werden.',
      tip: 'Läuft die Genehmigungsanfrage ab, bitte den Inhaber um einen neuen Einladungs-QR-Code oder -Code.',
      steps: {
        '1': 'Installiere KidGate und melde dich auf deinem Gerät als Elternteil an.',
        '2': 'Öffne Familie und tippe auf das Scan-Symbol („Code scannen“).',
        '3': 'Scanne den Einladungs-QR-Code des Inhabers oder wähle „Code manuell eingeben“ und gib den 6-stelligen Einladungscode ein.',
        '4': 'Warte auf die Genehmigung des Inhabers. Lasse die App geöffnet, bis du siehst, dass du der Familie beigetreten bist.',
        '5': 'Bestätige, dass die Kindergeräte unter Familie erscheinen. Öffne ein Gerät, um dessen Status und Steuerungen anzuzeigen.',
      },
    },
    manageDevices: {
      title: 'Ein Gerät umbenennen oder entfernen',
      summary:
        'Gib einem Gerät einen Namen, den alle erkennen, oder trenne eines, das dein Kind nicht mehr nutzt.',
      keywords:
        'koppeln aufheben, trennen, gerät löschen, altes handy, neues handy, verkauft, name ändern, zurücksetzen',
      tip: 'Nur der Familieninhaber kann Geräte umbenennen oder entfernen. Das Entfernen lässt sich nicht rückgängig machen: Zeitanfragen und Aktivitätsverlauf des Geräts werden gelöscht. Um es wieder zu schützen, kopple es als neues Gerät.',
      steps: {
        '1': 'Um ein Gerät umzubenennen, öffne es über „Familie“ oder über dein Kind und wähle „Bearbeiten“ neben seinem Namen.',
        '2': 'Gib einen Namen ein, den alle Eltern auf einen Blick erkennen, und speichere ihn.',
        '3': 'Um ein Gerät zu entfernen, öffne es, wähle unten auf seinem Bildschirm „Gerät entfernen“ und bestätige. Im Tab „Kindergeräte“ der Familienkarte kannst du ein Gerät auch nach links wischen.',
        '4': 'Das Gerät verlässt deine Familie, und KidGate zeigt auf dem Gerät an, dass es entfernt wurde.',
        '5': 'Um das Gerät wieder zu nutzen, etwa nach einem Zurücksetzen oder wenn es an ein anderes Kind geht, kopple es als neues Gerät: Öffne „Familie“ und tippe auf das Scan-Symbol („Code scannen“).',
      },
    },
    androidPermissions: {
      title: 'Android-Berechtigungen (Kindergerät)',
      summary:
        'Aktiviere Nutzungszugriff, Über anderen Apps anzeigen, Bedienungshilfen, Akku und verwandte Berechtigungen.',
      keywords:
        'bedienungshilfen, nutzungszugriff, über anderen apps anzeigen, benachrichtigungen, geräteadministrator, deinstallationsschutz, mikrofon, vpn, erlauben',
      tip: 'Vollständigkeit ist wichtiger als die Reihenfolge. Führe jeden Schritt aus, den der Assistent anbietet, auch die optionalen, bevor du dich auf die Sperre oder Sperrzeiten verlässt. Ein übersprungener Schritt bleibt auf dem Status-Bildschirm stehen, bis du ihn erledigst.',
      steps: {
        '1': 'Öffne KidGate auf dem Kindergerät und gehe zu „Status“. Wähle in der Karte „Einrichtung mit einem Elternteil abschließen“ den Eintrag „Einrichtung fortsetzen“. „Schutz einrichten“ führt dann Schritt für Schritt durch die Berechtigungen; die folgenden Schritte beschreiben jede einzelne.',
        '2': 'Mitteilungen: Wähle „Erlauben“. KidGate braucht die Mitteilungen dieses Geräts für Zeitfreigaben und Erinnerungen.',
        '3': 'Nutzungszugriff: Öffne den Systembildschirm, dann suche KidGate, dann schalte ihn ein. Dies ist für die Bildschirmzeit-Erfassung und Limits erforderlich.',
        '4': 'Über anderen Apps anzeigen: Erlaube dies für KidGate. Dies ist erforderlich, damit der Sperrbildschirm über anderen Apps erscheinen kann.',
        '5': 'Bedienungshilfen-Sperrfunktion: Lies den Hinweis und wähle „Zustimmen“; dann öffnet sich die Seite „Bedienungshilfen“. Öffnet sich eine Liste, suche KidGate unter „Installierte/Heruntergeladene Apps“, schalte es ein und wähle in der Bestätigung von Android „Erlauben“. So bleibt die Sperre durchgesetzt.',
        '6': 'Akku ohne Einschränkung: Wähle bei Aufforderung „Erlauben“. Erscheint keine Aufforderung: App-Info, dann Akku, dann Ohne Einschränkung.',
        '7': 'Wecker und Erinnerungen: Erlaube dies, damit Sperrzeiten pünktlich beginnen und enden. Als Nächstes Deinstallation verhindern: Wähle „Erlauben“ und dann auf dem Bestätigungsbildschirm von Android „Aktivieren“. Danach lässt sich KidGate nur entfernen, wenn man dies zuerst ausschaltet, und ein Elternteil wird benachrichtigt.',
        '8': 'Standort: Wähle „Immer zulassen“, sonst wird die Karte nur aktualisiert, solange KidGate geöffnet ist. Kamera (für Check-in- und SOS-Fotos) und Mikrofon (für den SOS-Ton): Erlaube sie bei Nutzung der App. Sobald der Assistent „Alles bereit“ zeigt, ist die Einrichtung abgeschlossen.',
      },
    },
    iosScreenTime: {
      title: 'iOS-Bildschirmzeit (Kindergerät)',
      summary:
        'Erlaube App- & Websitenutzung, damit Sperre, Zeitpläne und App-Auswahl funktionieren können.',
      keywords: 'bildschirmzeit, family controls, iphone, ipad, autorisieren',
      tip: 'Fehlt der Erlauben-Button, öffne iOS-Einstellungen, dann Bildschirmzeit und stelle sicher, dass Bildschirmzeit auf dem Kindergerät zuerst aktiviert ist.',
      steps: {
        '1': 'Öffne KidGate auf dem Kindergerät und gehe zu „Status“. Wähle in der Karte „Einrichtung mit einem Elternteil abschließen“ den Eintrag „Einrichtung fortsetzen“.',
        '2': 'Wähle in „Schutz einrichten“ die Option „App- & Websitenutzung erlauben“.',
        '3': 'Wähle im Systemdialog „Erlauben“. Bitte schließe den Dialog nicht ohne eine Auswahl.',
        '4': 'Kehre zu KidGate zurück. Der Assistent geht zum nächsten Schritt weiter, sobald die Autorisierung erfolgreich ist.',
        '5': 'Wurde die Autorisierung zuvor verweigert: Öffne iOS-Einstellungen, suche KidGate, aktiviere auf dieser Seite Bildschirmzeit, und öffne dann KidGate erneut.',
        '6': 'Um blockierte Apps auszuwählen: Öffne auf dem Kindergerät KidGate-Einstellungen, wähle „Mit Eltern-PIN entsperren“, öffne Blockierte Apps und speichere.',
        '7': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann Blockierte Apps, und bestätige, dass die Liste synchronisiert wurde. Schalte die Blockierung ein, sobald du bereit bist.',
      },
    },
    oemKeepRunning: {
      title: 'KidGate im Hintergrund aktiv halten (Herstellereinstellungen)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei und ähnliche Geräte pausieren Hintergrund-Apps oft.',
      keywords:
        'xiaomi, samsung, oppo, vivo, huawei, realme, energiesparmodus, autostart, funktioniert nicht mehr, im hintergrund beendet',
      tip: 'Starte das Kindergerät nach Ändern der Akkuregeln einmal neu, öffne KidGate erneut und teste dann die Sperre vom Elterngerät aus.',
      steps: {
        '1': 'Öffne auf dem Android-Kindergerät KidGate, dann Status, und suche den Schritt „Autostart erlauben“. Er erscheint nur auf Geräten, deren Hersteller ihn benötigt.',
        '2': 'Erlaube den Autostart für KidGate im Sicherheitsbildschirm des Herstellers (der Wortlaut variiert je nach Gerät).',
        '3': 'Stelle die Akkunutzung für KidGate sowohl in den Android-Einstellungen als auch im Akkumenü des Herstellers, falls beide vorhanden sind, auf „Ohne Einschränkung“.',
        '4': 'Deaktiviere alle „Ruhende Apps“-, „Tiefschlaf-Apps“- oder „Apps in den Ruhezustand versetzen“-Listen, die KidGate enthalten.',
        '5': 'Funktioniert eine Verknüpfung nicht, öffne die Sicherheits-/Geräteschutz-App manuell und suche nach KidGate, Autostart oder Akku.',
        '6': 'Markiere in KidGate jede Zeile als „Fertig“, sobald du sie abgeschlossen hast, damit du siehst, was noch fehlt.',
      },
    },
    dailyLimit: {
      title: 'Ein Tageslimit festlegen',
      summary: 'Begrenze, wie viele Minuten das Kind das Gerät täglich nutzen darf.',
      keywords: 'bildschirmzeit, stunden pro tag, zeit abgelaufen, budget, verlängern',
      tip: 'Die Nutzungsdaten stammen vom Kindergerät. Wirkt der Zähler festgefahren, öffne KidGate auf dem Kindergerät und warte auf eine Synchronisierung.',
      steps: {
        '1': 'Öffne auf dem Elterngerät Familie, dann tippe auf das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist).',
        '2': 'Wähle unter Wichtige Steuerungen „Tageslimit“.',
        '3': 'Wähle einen Minutenwert pro Tag (oder bearbeite das bestehende Limit) und speichere.',
        '4': 'Bestätige, dass die Gerätekarte nach der Synchronisierung des Kindergeräts die heute genutzten Minuten und das Limit anzeigt.',
        '5': 'Ist das Limit erreicht, sperrt sich das Gerät gemäß Plattformregeln. Wähle „Entsperren“ auf dem Gerätebildschirm, wenn du den Zugriff vorzeitig wiederherstellen möchtest.',
      },
    },
    blockedHours: {
      title: 'Sperrzeiten festlegen',
      summary: 'Plane die Zeiträume, in denen das Gerät gesperrt bleiben soll.',
      keywords: 'schlafenszeit, nachts, schulzeit, zeitplan, auszeit',
      tip: 'Lege zuerst Schulzeiten und Schlafenszeiten fest. Vermeide sich überschneidende Zeiträume, damit der Zeitplan übersichtlich bleibt.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann Sperrzeiten.',
        '2': 'Schalte den Schalter „Sperrzeiten aktivieren“ ein. Solange er aus ist, zeigt der Bildschirm keine Zeiträume und keine Möglichkeit, einen hinzuzufügen.',
        '3': 'Wähle „Sperrzeit hinzufügen“ und lege dann Startzeit, Endzeit und Wochentage fest.',
        '4': 'Wähle unten auf dem Bildschirm „Speichern“. Um einen weiteren Zeitraum hinzuzufügen, wiederhole zuerst den vorherigen Schritt.',
        '5': 'Bestätige auf einem Android-Kindergerät, dass „Wecker und Erinnerungen“ weiterhin erlaubt ist, damit die Zeiträume pünktlich beginnen und enden. Bestätige auf einem iPhone oder iPad, dass „Bildschirmzeit“ weiterhin erlaubt ist.',
        '6': 'Während eines aktiven Zeitraums zeigt die Gerätekarte „Sperrzeiten aktiv · gesperrt“. Verwende „Entsperren“ nur, wenn du den Zeitplan bewusst außer Kraft setzt.',
      },
    },
    blockedApps: {
      title: 'Bestimmte Apps blockieren',
      summary:
        'Wähle Apps auf dem Kindergerät aus und aktiviere dann die Blockierung vom Elterngerät aus.',
      keywords:
        'app sperren, tiktok, facebook, instagram, spiele, roblox, app verstecken',
      tip: 'Unter iOS kann Apple die genauen App-Namen vor Elterngeräten verbergen. Die Auswahl erfolgt weiterhin auf dem Kindergerät mit der Eltern-PIN.',
      steps: {
        '1': 'Verwende direkt das Kindergerät. Öffne KidGate, dann Einstellungen.',
        '2': 'Wähle „Mit Eltern-PIN entsperren“ und gib dann die Eltern-PIN ein.',
        '3': 'Öffne Blockierte Apps (auf einem Computer oder Fernseher: „Apps zum Blockieren auswählen“). Wähle die Apps (und Kategorien, falls angezeigt) und speichere auf dem Kindergerät.',
        '4': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann Blockierte Apps, und warte, bis die ausgewählte Liste erscheint.',
        '5': 'Schalte „App-Blockierung aktivieren“ ein. Der Status sollte „Sperre aktiviert“ anzeigen.',
        '6': 'Teste dies, indem du eine blockierte App auf dem Kindergerät öffnest. Sie sollte gemäß Plattformregeln eingeschränkt sein.',
        '7': 'Um die Liste später zu ändern, wiederhole die Auswahl auf dem Kindergerät mit der Eltern-PIN. Das Elterngerät synchronisiert die neue Liste.',
      },
    },
    appLimits: {
      title: 'App-Limits festlegen',
      summary:
        'Gib einzelnen Apps ein eigenes Limit pro Tag, zusätzlich zum Tageslimit.',
      keywords: 'app-zeitlimit, minuten pro app, tiktok, youtube, spiele',
      tip: 'App-Limits gibt es nicht auf iPhone und iPad. Auf einem Computer oder Fernseher wird eine App, die ihr Limit erreicht hat, nach dem Öffnen geschlossen, statt gar nicht erst zu starten.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann App-Limits. Nutzt dein Kind mehr als ein Gerät, wähle eines aus: Jedes Gerät hat seine eigene Liste.',
        '2': 'Tippe unter „Limit hinzufügen“ auf eine App. Aufgeführt sind nur Apps, die heute auf diesem Gerät genutzt wurden, und jede startet mit einem Limit von 60 Minuten.',
        '3': 'Stelle jedes Limit mit dem Drehregler oder einer Voreinstellung ein, von 5 Minuten bis 8 Stunden pro Tag. Du kannst bis zu 20 Apps begrenzen.',
        '4': 'Wähle „Speichern“. Limits setzen sich um Mitternacht auf dem Kindergerät zurück.',
        '5': 'Das Tageslimit gilt weiterhin für das ganze Gerät, daher kann eine App gesperrt werden, bevor ihr eigenes Limit aufgebraucht ist. Um ein Limit zu entfernen, wähle auf seiner Karte „Entfernen“ und speichere dann.',
      },
    },
    lockUnlock: {
      title: 'Das Gerät sperren und entsperren',
      summary: 'Sperre das Kindergerät sofort oder stelle den Zugriff wieder her.',
      tip: 'Unter Android ist die Sperre am stärksten, wenn sowohl Über anderen Apps anzeigen als auch Bedienungshilfen aktiviert sind. Unter iOS hängt die Sperre von der Bildschirmzeit-Autorisierung ab.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist).',
        '2': 'Wähle „Alle sperren“, um alle Geräte dieses Kindes zu sperren, oder öffne ein einzelnes Gerät und wähle „Gerät sperren“.',
        '3': 'Warte einige Sekunden. Der Status sollte auf „Gesperrt“ wechseln. Ändert sich nichts, öffne KidGate auf dem Kindergerät und überprüfe die Berechtigungen erneut.',
        '4': 'Um den Zugriff wiederherzustellen, wähle „Alle entsperren“ (oder „Entsperren“ auf dem Gerätebildschirm).',
        '5': 'Optional: Du kannst ein Gerät auch schnell aus Familie sperren oder entsperren, wenn diese Verknüpfungen auf der Gerätekarte erscheinen.',
        '6': 'Ein gesperrtes Handy oder ein gesperrter Computer lässt dein Kind weiterhin einen SOS-Alarm senden. Auf Android öffnet SOS außerdem 5 Minuten lang Anrufe, Karten und Nachrichten, während alles andere gesperrt bleibt, und es erscheint unter „Aktivitäten“.',
      },
    },
    siri: {
      title: 'Siri auf dem iPhone verwenden',
      summary:
        'Per Stimme die Geräte eines Kindes sperren oder entsperren, Extra-Minuten geben und die heutige Bildschirmzeit hören.',
      keywords:
        'Stimme, Sprachbefehl, sprechen, freihändig, Sprachassistent, Kurzbefehle, voice',
      tip: 'Sprachbefehle funktionieren auf dem iPhone eines Elternteils, für alle Eltern der Familie, in der Sprache, die für Siri eingestellt ist. Android-Smartphones und das Web-Dashboard haben keine.',
      steps: {
        '1': 'Melde dich auf deinem iPhone bei KidGate an und öffne die App einmal. So lernt Siri die Namen deiner Kinder, und ein später hinzugefügtes Kind oder Gerät kennt Siri, sobald du KidGate das nächste Mal öffnest. Sagt Siri „Melde dich zuerst bei KidGate an.“, öffne KidGate auf diesem iPhone.',
        '2': 'Sag zu Siri „KidGate, sperre Lena“, mit dem Namen deines Kindes. Alle Geräte dieses Kindes werden gesperrt, wie mit „Alle sperren“. Ein Gerät, das keinem Kind zugewiesen ist, hört auf seinen eigenen Namen.',
        '3': 'Sag „KidGate, entsperre Lena“, um den Zugriff wiederherzustellen. Für alle Geräte der Familie auf einmal sag „KidGate, sperre alles“ oder „KidGate, entsperre alles“.',
        '4': 'Sag „KidGate, gib Lena Extra-Minuten“, um heute 15 Minuten auf allen Geräten dieses Kindes hinzuzufügen. Die Extrazeit endet um Mitternacht.',
        '5': 'Sag „KidGate Bildschirmzeit von Lena“, um die heutige Bildschirmzeit zu hören. Siri liest die letzten Zahlen vor, die KidGate dir angezeigt hat. Öffne KidGate vorher, um die neuesten zu bekommen.',
        '6': 'Die App Kurzbefehle listet dieselben Befehle unter KidGate auf, mit einem Tippen ausführbar. Für eine andere Anzahl von 5 bis 180 Minuten füge die Aktion „Einem Kind Extra-Minuten geben“ zu einem eigenen Kurzbefehl hinzu und stelle die Minuten dort ein.',
      },
    },
    pauseBrowsing: {
      title: 'Surfen eine Weile pausieren',
      summary:
        'Blockiere das Web auf einem Gerät für 5 Minuten bis 8 Stunden. Anrufe und Offline-Apps funktionieren weiter.',
      keywords: 'internet ausschalten, wlan pausieren, kein netz, offline, auszeit',
      tip: 'In der Chrome-Erweiterung gilt eine Pause nur für Chrome. Für eine Pause, die sich jeden Tag wiederholt, verwende stattdessen Sperrzeiten.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann „Surfen pausieren“ im Bereich Sicherheitsüberwachung.',
        '2': 'Wähle eine Dauer mit dem Drehregler oder einer Schnellauswahl (30, 60 oder 120 Minuten) und bestätige.',
        '3': 'Das Web bleibt auf diesem Gerät blockiert, bis die Zeit abgelaufen ist. Deine Webfilter-Einstellungen werden nicht geändert, und die Pause wirkt auch, wenn der Webfilter aus ist.',
        '4': 'Um sie vorzeitig zu beenden, öffne das Gerät, tippe auf die Karte „Surfen pausieren“ und wähle „Fortsetzen“. Die restlichen Minuten verfallen.',
        '5': 'Vom Profil deines Kindes aus gilt eine Pause für ein einzelnes Gerät. Nutzt dein Kind mehrere, pausiere jedes über seinen eigenen Gerätebildschirm.',
      },
    },
    timeRequests: {
      title: 'Zeitanfragen beantworten',
      summary:
        'Dein Kind kann um zusätzliche Minuten bitten, wenn das Tageslimit fast aufgebraucht ist, und du genehmigst oder lehnst von deinem Gerät aus ab.',
      tip: 'Anfragen erscheinen nur, wenn das Gerät ein Tageslimit hat. Genehmigte Minuten gelten für heute auf dem Gerät, das gefragt hat, und heben weder eine von dir gesetzte Sperre noch Sperrzeiten auf. Android TV und die Chrome-Erweiterung können keine Anfragen senden.',
      steps: {
        '1': 'Auf dem Kindergerät wählt dein Kind auf dem KidGate-Startbildschirm „Mehr Zeit anfragen“ (unter Android auch auf dem Sperrbildschirm, wenn das Limit erreicht ist), legt die Minuten fest, fügt optional einen Grund hinzu und sendet die Anfrage.',
        '2': 'Du erhältst eine Mitteilung. Öffne KidGate: Die Anfrage wartet in der Karte „Genehmigung erforderlich“ unter Familie, im Profil deines Kindes und auf dem Gerät.',
        '3': 'Prüfe die Minuten und den Grund und wähle dann „Genehmigen“, um genau diese Minuten für heute hinzuzufügen, oder „Nicht jetzt“, um abzulehnen.',
        '4': 'Das Kindergerät erhält die Antwort, und genehmigte Minuten gelten sofort. Pro Gerät kann jeweils nur eine Anfrage offen sein.',
        '5': 'Beantwortete Anfragen stehen in Aktivitäten. Um diese Mitteilungen auf deinem Gerät abzuschalten, deaktiviere „Zeitanfragen“ unter „Push-Benachrichtigungen“ in den Einstellungen.',
      },
    },
    rewardTasks: {
      title: 'Belohnungsaufgaben einrichten',
      summary:
        'Erstelle kleine Aufgaben, mit denen sich dein Kind heute zusätzliche Minuten verdienen kann.',
      tip: 'Bonusminuten zählen nur, wenn das Gerät ein Tageslimit hat. Die Minuten gehen an das Gerät, auf dem dein Kind die Aufgabe als erledigt markiert hat. Belohnungsaufgaben sind auf Android TV und in der Chrome-Erweiterung nicht verfügbar.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann Belohnungsaufgaben.',
        '2': 'Wähle „Neue Aufgabe“ oder starte mit einer Vorlage. Gib die Aufgabe ein, wähle die Belohnung in Minuten (5 bis 240), einen Schwierigkeitsgrad und die Wiederholung („Täglich“ oder „Einmalig“) und wähle dann „Aufgabe erstellen“.',
        '3': 'Auf dem Kindergerät erscheint die Aufgabe unter „Extra-Zeit verdienen“. Ist sie erledigt, wählt dein Kind „Geschafft“.',
        '4': 'Du erhältst eine Mitteilung. Wähle unter „Bereit zur Prüfung“ (auf dem Bildschirm Belohnungsaufgaben, unter Familie oder im Profil deines Kindes) „Genehmigen“, um die Minuten für heute gutzuschreiben, oder „Zurückgeben“, damit dein Kind es noch einmal versuchen kann.',
        '5': 'Tippe auf eine Aufgabe, um sie zu bearbeiten oder zu löschen. Im Gratis-Tarif laufen bis zu 10 aktive Aufgaben gleichzeitig, mit Premium 20.',
        '6': 'Jede Aufgabe ist je nach Schwierigkeit 1 bis 3 Sterne wert, und Sterne zählen, sobald du die Aufgabe genehmigst. Damit deine Kinder die Sterne dieser Woche vergleichen können, öffnet der Familieninhaber „Familie“, dann die Familienkarte, und schaltet im Tab „Kinder“ die „Sternetafel“ ein. Jedes Kind sieht sie dann in KidGate auf seinem Gerät. Sie beginnt jede Woche neu.',
      },
    },
    locationSharing: {
      title: 'Standortfreigabe aktivieren',
      summary: 'Sieh den neuesten Standort deines Kindes auf dem Elterngerät.',
      keywords: 'gps, karte, wo ist mein kind, handy finden, orte',
      tip: 'Der Standort erfordert eine Berechtigung auf dem Kindergerät und eine stabile Netzwerkverbindung. In Innenräumen kann GPS weniger genau sein.',
      steps: {
        '1': 'Erlaube auf dem Kindergerät den Standort für KidGate, wenn du dazu aufgefordert wirst (oder in den Systemeinstellungen). Wähle auf Android „Immer zulassen“ bzw. auf dem iPhone oder iPad „Immer“, sonst wird der Standort nur aktualisiert, solange KidGate geöffnet ist.',
        '2': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann Standort.',
        '3': 'Schalte die Freigabe ein, falls sie aus ist, und warte dann auf die erste Aktualisierung.',
        '4': 'Zeigt der Status weiterhin „Wartet“ an, tippe auf den Button zum Aktualisieren oder öffne den Bildschirm erneut.',
        '5': 'Optional und Teil von Premium: Öffne das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann den Bereich Benachrichtigungen, und wähle Orte, um Ortsbenachrichtigungen einzurichten, wenn dein Kind einen gespeicherten Ort betritt oder verlässt.',
        '6': 'Wenn das Telefon in der Nähe verlegt wurde, öffne Standort und tippe auf Gerät klingeln lassen. Ein iPhone bleibt stumm, solange es auf lautlos gestellt ist oder ein Fokus aktiv ist.',
      },
    },
    checkIn: {
      title: 'Einen Check-in anfordern',
      summary:
        'Bitte dein Kind, zu bestätigen, dass es in Sicherheit ist – mit seinem Standort und, mit Premium, einem Foto.',
      tip: 'Das Foto gehört zu Premium; im Gratis-Tarif wird nur der Standort abgefragt. Für das Foto ist die Kameraberechtigung auf dem Kindergerät erforderlich.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist).',
        '2': 'Wähle „Check-in“ (die Schnellaktion oder die Zeile im Bereich Sicherheitsüberwachung).',
        '3': 'Das Kindergerät erhält eine Check-in-Mitteilung und einen entsprechenden Bildschirm. Das Kind tippt, um zu bestätigen, dass alles in Ordnung ist, oder um Hilfe zu bitten.',
        '4': 'Mit Premium fügt KidGate, wenn der Kamerazugriff erlaubt ist, wenn möglich ein Foto zusammen mit dem Standort hinzu. Im Gratis-Tarif wird nur der Standort gesendet.',
        '5': 'Auf dem Elterngerät zeigt „Check-in-Verlauf“ auf demselben Bildschirm die letzte Antwort und, falls vorhanden, das Foto.',
      },
    },
    sos: {
      title: 'SOS-Notfallalarme',
      summary:
        'Wie ein Kind einen SOS-Alarm sendet, was er enthält und wie Eltern darauf reagieren.',
      keywords:
        'notfallknopf, panikknopf, hilfe, gefahr, unsicher, audio, stimme, mikrofon, sirene, e-mail, großeltern, nachbarn',
      tip: 'SOS funktioniert auf Handys und Computern, nicht auf einem Fernseher und nicht in der Chrome-Erweiterung. Ton wird nur auf Handys aufgenommen. Teste es einmal zu Hause, bevor du Vertrauenskontakte hinzufügst oder nachdem du ihnen Bescheid gegeben hast, denn jedes SOS schickt ihnen eine E-Mail. Vereinbare mit deinem Kind, wann SOS verwendet wird und wann ein Check-in reicht.',
      steps: {
        '1': 'Öffne auf dem Kindergerät SOS in KidGate. Auf einem Handy ist es die Taste in der Mitte der unteren Leiste.',
        '2': 'Halte die SOS-Taste 5 Sekunden lang gedrückt. Wird sie früher losgelassen, wird der Alarm abgebrochen.',
        '3': 'Der Alarm wird sofort gesendet, mit dem Standort, sofern verfügbar. Auf einem Handy öffnet sich danach die Kamera für ein Foto, das übersprungen werden kann. Wurde das Mikrofon bei der Einrichtung erlaubt, werden ab dem Senden bis zu 15 Sekunden Ton aufgenommen.',
        '4': 'Eltern erhalten eine dringende Mitteilung, auch während der „Ruhezeiten“. Ist KidGate geöffnet, erscheint der Alarm auf dem Bildschirm, mit der „SOS-Sirene“, sofern sie in den Einstellungen nicht ausgeschaltet ist.',
        '5': 'Öffne das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann den Bereich „Benachrichtigungen“, und wähle „SOS“. Jeder Alarm zeigt den Standort („In Karten öffnen“), das Foto und die „Tonaufnahme“, die etwas nach dem Alarm eintreffen kann. Wähle „Ich kümmere mich darum“, um ihn als beantwortet zu markieren.',
        '6': 'Um auch Personen außerhalb der Familie per E-Mail zu benachrichtigen, öffne „Familie“, dann die Familienkarte, und wähle „Vertrauenskontakte“. Wähle „Kontakt hinzufügen“, um bis zu 5 hinzuzufügen. Bei jedem SOS erhalten sie per E-Mail den Gerätenamen und den letzten bekannten Standort, nie das Foto oder den Ton. Sag ihnen vorher Bescheid.',
      },
    },
    webFilter: {
      title: 'Ungeeignete Websites einschränken',
      summary:
        'Aktiviere den Webfilter für ungeeignete Inhalte, wo die Plattform dies unterstützt.',
      keywords:
        'webseite sperren, link sperren, url, erwachseneninhalte, sichere suche, youtube eingeschränkter modus, kategorien, dns, privates dns, vpn, iphone, ipad',
      tip: 'Der Filter liest Website-Namen, nicht Seiten, und seine Reichweite hängt vom Gerät ab. Handys filtern Browser und viele Apps. Ein Mac kann Websites nicht prüfen, deren Namen der Browser verbirgt – etwa die Hälfte der Besuche. Windows prüft jeden Browser, aber nur anhand des Website-Namens. Die Chrome-Erweiterung filtert nur Chrome. Die Auswahl von Kategorien, eigene Listen und das Beantworten von Website-Anfragen gehören zu Premium. Kombiniere den Webfilter mit Blockierten Apps für einen stärkeren Schutz.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann Webfilter.',
        '2': 'Schalte oben „Ungeeignete Websites filtern“ ein. Die Einstellung gilt sofort, du musst nichts speichern. „SafeSearch erzwingen“ auf demselben Bildschirm sperrt außerdem Google, Bing und DuckDuckGo auf sichere Ergebnisse und YouTube auf den eingeschränkten Modus, auf Android, Android TV und Chrome.',
        '3': 'Wähle unter „Was blockiert wird“ die Kategorien, die gesperrt werden sollen. Füge Websites zu „Immer erlauben“ oder „Immer blockieren“ hinzu, oder aktiviere „Nur erlaubte Seiten“, um alles außer deiner Liste erlaubter Seiten zu sperren. Wenn dein Kind bittet, eine blockierte Website zu öffnen, wartet die Anfrage unter „Website-Anfragen“. Diese Einstellungen gehören zu Premium; der Gratis-Tarif nutzt eine feste Auswahl an Kategorien.',
        '4': 'Überprüfe später erneut denselben Bildschirm. Bleibt der Status „Wartet“, öffne KidGate erneut auf dem Kindergerät, damit die Einstellungen synchronisieren können.',
        '5': 'Öffne auf dem Kindergerät KidGate und genehmige den Filter einmalig. Wähle auf einem iPhone oder iPad „Erlauben“, wenn iOS fragt, ob VPN-Konfigurationen hinzugefügt werden dürfen, und gib dann den Gerätecode ein. Bestätige auf Android die VPN-Anfrage, öffne dann Einstellungen, dann Netzwerk & Internet, dann Privates DNS und wähle „Aus“, denn Browser können den Filter umgehen, solange Privates DNS aktiv ist.',
      },
    },
    protectionAlerts: {
      title: 'Schutzwarnungen',
      summary:
        'Werde benachrichtigt, wenn eine wichtige Berechtigung auf dem Kindergerät deaktiviert wird.',
      tip: 'Eine Schutzwarnung bedeutet, dass der KidGate-Schutz geschwächt wurde. Bitte stelle die Berechtigung auf dem Kindergerät so schnell wie möglich wieder her.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann den Bereich Benachrichtigungen, und wähle Schutzwarnungen.',
        '2': 'Überprüfe aktuelle Ereignisse wie das Deaktivieren von Über anderen Apps anzeigen, Bedienungshilfen, Nutzungszugriff, Kamera oder Standort.',
        '3': 'Öffne auf dem Kindergerät KidGate, dann Status und schalte die genannte Berechtigung wieder ein.',
        '4': 'Kehre zu Schutzwarnungen zurück und bestätige, dass keine neuen unerwarteten Ereignisse auftauchen.',
        '5': 'Lasse die Mitteilungen auf dem Elterngerät aktiviert, damit du schnell von Änderungen erfährst.',
      },
    },
    usageReports: {
      title: 'Nutzungsberichte lesen',
      summary:
        'Sieh, wie lange jedes Gerät heute und in den letzten 30 Tagen genutzt wurde – pro Kind und jeden Montag in einem Bericht.',
      tip: 'Im Gratis-Tarif siehst du die heutige Gesamtzeit und die Top 3 Apps, aktualisiert, wenn du nachsiehst. Premium ergänzt 30 Tage Verlauf, wann jedes Gerät genutzt wurde, die Top 10 Apps, einen Bericht für jedes Kind und jeden Montag einen neuen Wochenbericht. iPhone und iPad melden nur die Gesamtzeit. Am Tag, an dem ein Gerät der Familie beitritt, kann die Nutzung davor unvollständig sein oder unter „Andere Apps“ gezählt werden.',
      steps: {
        '1': 'Öffne Berichte. „Heute“ zählt alle Geräte zusammen; darunter folgen der Wochenbericht, jedes Kind („Nach Kind“) und jedes Gerät („Nach Gerät“).',
        '2': 'Tippe auf ein Gerät, um seinen Nutzungsbericht zu öffnen: heute im Vergleich zum Tageslimit, „Letzte 30 Tage“, „Wann es genutzt wurde“ und „Meistgenutzte Apps“. Du kannst ihn auch über „Nutzung heute“ auf dem Gerätebildschirm öffnen.',
        '3': 'Tippe auf ein Kind, um einen gemeinsamen Bericht über alle seine Geräte zu sehen, für „Heute“, „7 Tage“ oder „30 Tage“. Zeit auf zwei Bildschirmen gleichzeitig zählt nur einmal, daher kann die Summe niedriger sein als die Werte der einzelnen Geräte zusammen.',
        '4': 'Jeden Montagmorgen kommt ein neuer Wochenbericht, zusammen mit einer Mitteilung. Er schlägt eine Sache vor, die du ändern könntest, und öffnet die passende Einstellung.',
        '5': 'Beim Öffnen von KidGate wird jedes Gerät nach aktuellen Zahlen gefragt, daher kann die Aktualisierung ein paar Minuten dauern. Ein Gerät ohne Internetverbindung sendet seine Daten, sobald es wieder online ist.',
      },
    },
    widget: {
      title: 'Ein Bildschirmzeit-Widget hinzufügen',
      summary:
        'Sieh die Bildschirmzeit jedes Kindes auf deinem Home-Bildschirm, und dein Kind sieht auf seinem, wie viel Zeit noch übrig ist.',
      keywords:
        'startbildschirm, launcher, auf einen blick, restzeit, verbleibende minuten, iphone, android',
      tip: 'Widgets gibt es auf iPhone, iPad und Android, nicht auf Computern oder Fernsehern. Ein Widget zeigt die zuletzt von KidGate empfangenen Zahlen und die Uhrzeit dieser Aktualisierung.',
      steps: {
        '1': 'Öffne „Einstellungen“ und wähle „Widget zum Home-Bildschirm hinzufügen“. Auf den meisten Android-Handys bestätigst du nur noch, wo es hin soll. Andernfalls zeigt KidGate die Schritte, um es selbst hinzuzufügen.',
        '2': 'Um es selbst hinzuzufügen, halte eine freie Stelle auf dem Home-Bildschirm gedrückt. Tippe auf dem iPhone auf „Bearb.“ (bei älteren Versionen auf +) und dann auf „Widget hinzufügen“. Tippe auf Android auf „Widgets“. Suche KidGate und wähle das Widget „Bildschirmzeit“.',
        '3': 'Jede Zeile zeigt die heutige Bildschirmzeit eines Kindes im Vergleich zu seinem Tageslimit; Kinder, die es erreicht haben, stehen oben. Auf dem iPhone passen bis zu 2 Kinder hinein, auf Android bis zu 3.',
        '4': 'Es aktualisiert sich, wenn du KidGate öffnest. Ist die App geschlossen, höchstens alle 20 Minuten und nur, während ein Kind ein Gerät nutzt.',
        '5': 'Füge auf dem Handy deines Kindes das Widget „Verbleibende Zeit“ auf die gleiche Weise hinzu. Es zeigt, wie viel Zeit heute noch übrig ist oder warum das Gerät gesperrt ist, und aktualisiert sich, während KidGate auf diesem Handy geöffnet ist.',
      },
    },
    webHistory: {
      title: 'Web-Verlauf prüfen',
      summary:
        'Sieh Tag für Tag, welche Websites ein Gerät aufgerufen hat und welche davon der Webfilter blockiert hat.',
      keywords: 'browserverlauf, besuchte seiten, browser, chrome, safari',
      tip: 'Der Web-Verlauf gehört zu Premium. Er listet Websites auf, keine einzelnen Seiten oder Minuten, und manche Zeilen stammen aus dem Hintergrundverkehr von Apps. Auf Android TV kann er bis zu einer Stunde verzögert sein.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann Web-Verlauf im Bereich Sicherheitsüberwachung. Vom Profil deines Kindes aus fasst er alle seine Geräte zusammen.',
        '2': 'Für jeden Tag werden die Websites nach Art gruppiert aufgelistet, jeweils mit der Anzahl der Aufrufe. Wähle „Nur blockierte“, um nur zu sehen, was der Webfilter gestoppt hat.',
        '3': 'Um eine ganze Art von Websites zu sperren, öffne ihren Abschnitt und wähle den Button zum Sperren an dessen Ende. Vom Profil deines Kindes aus gilt das für alle seine Geräte.',
        '4': 'Der Verlauf stammt aus dem Webfilter, er füllt sich also nur, solange der Filter auf diesem Gerät läuft.',
        '5': 'Der Verlauf wird 30 Tage lang aufbewahrt. Bittet dein Kind darum, eine blockierte Website zu öffnen, erscheint die Anfrage in der Karte „Genehmigung erforderlich“, nicht hier.',
      },
    },
    videoHistory: {
      title: 'Angesehene Videos prüfen',
      summary:
        'Halte fest, welche YouTube-Videos dein Kind ansieht – mit Kanal und Uhrzeit.',
      keywords: 'youtube, shorts, angesehene videos, wiedergabeverlauf',
      tip: '„Angesehene Videos“ gehört zu Premium und erfasst nur YouTube. Die Funktion läuft auf Android-Handys und in der Chrome-Erweiterung, nicht auf iPhone oder iPad. Füge auf einem Mac oder PC die Chrome-Erweiterung hinzu. Ein Android TV erfasst Videos erst, wenn KidGate dort Zugriff auf Benachrichtigungen hat, was sich auf einem Fernseher bisher nicht erteilen lässt; selbst dann werden Shorts nicht aufgeführt.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann „Angesehene Videos“ im Bereich Sicherheitsüberwachung.',
        '2': 'Schalte „Angesehene Videos aufzeichnen“ ein. Die Aufzeichnung bleibt aus, bis du sie einschaltest, und vom Profil deines Kindes aus gilt sie für alle seine Geräte.',
        '3': 'Auf einem Android-Handy braucht KidGate außerdem Benachrichtigungszugriff: Öffne auf dem Kindergerät KidGate, dann Einstellungen, wähle „Mit Eltern-PIN entsperren“ und dann „Benachrichtigungszugriff erlauben“ im Bereich Nachrichtenwarnungen. Für Shorts sind zusätzlich Bedienungshilfen nötig.',
        '4': 'Die Videos erscheinen nach Tagen geordnet, mit Kanal und der Anzahl der Wiedergaben. Tippe auf ein Video, um es auf YouTube zu finden.',
        '5': 'Auf einem Mac oder PC zeigt der Bildschirm stattdessen, wie du die Chrome-Erweiterung hinzufügst. Die Erweiterung zeichnet Videos als eigenes Gerät auf.',
      },
    },
    appAlerts: {
      title: 'App-Installationen verfolgen',
      summary:
        'Sieh, wann Apps installiert oder entfernt werden und welche Apps auf einem Gerät sind, und halte neue Apps zurück, bis du sie erlaubst.',
      tip: '„Neue Apps genehmigen“ ist kostenlos. Der Bildschirm „Apps“ mit dem Installationsverlauf und der Liste installierter Apps gehört zu Premium. iPhone und iPad können keine Installationen melden; dort blendet „Neue Apps genehmigen“ stattdessen den App Store aus.',
      steps: {
        '1': 'Öffne auf dem Elterngerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann die Karte „Apps“ im Bereich Benachrichtigungen.',
        '2': '„Letzte Änderungen“ listet installierte und entfernte Apps auf, die neuesten zuerst. Zu jeder App erhältst du außerdem eine Mitteilung.',
        '3': '„Installierte Apps“ zeigt, was auf dem Gerät ist, mit den Apps unter „Einen Blick wert“ ganz oben. Wähle „Unbedenklich“, um eine App aus dieser Gruppe zu nehmen. Um eine App zu stoppen, verwende Blockierte Apps.',
        '4': 'Um neue Apps zurückzuhalten, bis du sie erlaubst, öffne Blockierte Apps und schalte „Neue Apps genehmigen“ ein. Jede danach installierte App bleibt auf dem Gerät blockiert.',
        '5': 'Wartet eine neue App, wähle daneben „Erlauben“, damit sie sich öffnen lässt.',
      },
    },
    messageAlerts: {
      title: 'Nachrichtenwarnungen einschalten',
      summary:
        'Werde gewarnt, wenn ein bedenkliches Wort oder ein bedenklicher Ausdruck in Nachrichten oder Suchanfragen auf dem Android-Handy deines Kindes auftaucht. Du siehst das markierte Wort oder den markierten Ausdruck, nie die Nachricht.',
      keywords: 'sms, messenger, whatsapp, schlüsselwörter, mobbing, nachrichten lesen',
      tip: 'Nachrichtenwarnungen gehören zu Premium. Nachrichten werden nur auf Android-Handys geprüft; Suchanfragen werden auch in der Chrome-Erweiterung geprüft. Dich erreichen nur die Kategorie und das markierte Wort oder der markierte Ausdruck. Die KI-Analyse bleibt aus, solange kein Elternteil sie für die Familie einschaltet.',
      steps: {
        '1': 'Öffne auf dem Android-Handy deines Kindes KidGate, dann Einstellungen, wähle „Mit Eltern-PIN entsperren“ und dann „Benachrichtigungszugriff erlauben“ im Bereich Nachrichtenwarnungen, und schalte KidGate in der Liste ein, die sich öffnet.',
        '2': 'Öffne auf deinem Gerät das Profil deines Kindes (oder das Gerät, falls es keinem Kind zugewiesen ist), dann Nachrichtenwarnungen im Bereich Benachrichtigungen, und tippe oben auf das Einstellungssymbol. Hat dein Kind mehrere Geräte, wähle zuerst das Android-Handy aus.',
        '3': 'Schalte „Empfangene Nachrichten prüfen“ ein. „Auch Kraftausdrücke melden“ ist optional, und unter „Geprüfte Sprachen“ kannst du bis zu 3 Sprachen wählen.',
        '4': 'Um auch zu prüfen, was dein Kind tippt und sucht: Wähle auf dem Kindergerät „Erlauben“ im Bereich Nachrichtenwarnungen und schalte dann auf deinem Gerät „Getippte Nachrichten prüfen“ und „Suchanfragen prüfen“ ein.',
        '5': 'Warnungen erscheinen unter „Neueste Warnungen“ mit der Kategorie und dem markierten Wort oder dem markierten Ausdruck. Wähle „Was jetzt zu tun ist“, um Tipps zu bekommen, wie du das Thema ansprechen kannst.',
      },
    },
    childProfiles: {
      title: 'Ein Kind hinzufügen und Geräte zuweisen',
      summary:
        'Lege für jedes Kind ein Profil an und weise ihm dann seine Geräte zu, damit Regeln und Bildschirmzeit dem Kind folgen.',
      tip: 'Nur der Familieninhaber kann Kinder hinzufügen und Geräte zuweisen. Ein neues Gerät ist niemandem zugewiesen, bis du eine Auswahl triffst.',
      steps: {
        '1': 'Tippe in Familie auf + und wähle „Kind hinzufügen“. Gib einen Namen ein und speichere.',
        '2': 'Nachdem du ein neues Gerät gekoppelt hast, fragt KidGate, wer es nutzt. Wähle dein Kind oder „Niemand“ für ein geteiltes Gerät. Danach bietet KidGate ein Starter-Set an Schutzfunktionen an: Wähle „Schutz einschalten“ oder „Nicht jetzt“.',
        '3': 'Ein Gerät, für das noch niemand ausgewählt wurde, erscheint in Familie unter „Nicht zugeordnet“. Wähle auf seiner Karte „Einem Kind zuweisen…“.',
        '4': 'Sobald ein Gerät zugewiesen ist, werden Tageslimit, Sperrzeiten, Webfilter, Check-in, SOS, Ortsbenachrichtigungen und Belohnungsaufgaben im Profil deines Kindes festgelegt und gelten für alle seine Geräte. Das Tageslimit wird dann zu einer gemeinsamen Summe über diese Geräte.',
        '5': 'Um ein Gerät zu verschieben, öffne das Profil des Kindes, das es bekommen soll, und wähle „Weiteres Gerät zuweisen…“. Um eine Zuordnung aufzuheben, wische im Profil deines Kindes über das Gerät und wähle „Zuordnung aufheben“. Wenn du das Profil eines Kindes entfernst, bleiben seine Geräte gekoppelt.',
      },
    },
    plans: {
      title: 'Premium und der Gratis-Tarif',
      summary:
        'Was Testphase, Gratis-Tarif und Premium umfassen und wie du abonnierst.',
      keywords:
        'premium, preis, abo, abonnement, kostenlos testen, kündigen, erstattung, upgrade',
      tip: 'Nur der Familieninhaber kann abonnieren oder einen Kauf wiederherstellen, und nur in der App auf dem Handy. Ein Plan gilt für die ganze Familie und jeden Elternteil darin.',
      steps: {
        '1': 'Öffne Einstellungen. Die Karte oben zeigt deinen aktuellen Plan; wähle „Pläne ansehen“.',
        '2': 'Die 7-tägige Testphase beginnt, sobald dein erstes Kindergerät gekoppelt ist, und umfasst alle Premium-Funktionen. Eine Grenze bleibt bestehen: die Zahl der Elternteile – bis zu 3 während der Testphase, bis zu 6 mit Premium.',
        '3': 'Im Gratis-Tarif funktionieren alle Regeln weiter, aber nur ein Gerät sendet Berichte: die heutige Gesamtzeit und die Top 3 Apps, aktualisiert, wenn du nachsiehst. Premium ergänzt Live-Updates, alle Geräte, 30 Tage Verlauf, Web- und Videoverlauf sowie Wochenberichte.',
        '4': 'Endet die Testphase mit mehr als einem Kindergerät, zeigt KidGate „Wähle dein Hauptgerät“ an. Dieses Gerät sendet weiter Berichte; die anderen zeigen „Pausiert“, behalten aber ihre Regeln. Du kannst die Wahl alle 7 Tage einmal ändern.',
        '5': 'Um zu abonnieren, wähle einen Plan und dann „Premium abonnieren“. Mit einem Abo senden alle pausierten Geräte wieder Berichte. Hast du schon einmal bezahlt, wähle „Käufe wiederherstellen“.',
      },
    },
    notificationSettings: {
      title: 'Festlegen, welche Hinweise du bekommst',
      summary:
        'Schalte jede Art von Hinweis ein oder aus und lege Ruhezeiten fest – auf jedem Eltern-Handy einzeln.',
      tip: 'SOS kommt immer durch, auch wenn alles ausgeschaltet ist, und auch während der Ruhezeiten. Diese Einstellungen gelten nur für dieses Handy; andere Elternteile legen ihre eigenen fest.',
      steps: {
        '1': 'Öffne Einstellungen, dann „Push-Benachrichtigungen“.',
        '2': 'Schalte unter „Hinweise“ jede Art von Hinweis aus, die du auf diesem Handy nicht möchtest, zum Beispiel „Zeitanfragen“ oder „Apps installiert oder entfernt“.',
        '3': '„Wochenbericht“ steuert die Mitteilung am Montag, dass ein neuer Bericht bereitsteht.',
        '4': 'Schalte „Ruhezeiten“ ein und lege „Von“ und „Bis“ fest, um Hinweise über Nacht stummzuschalten. Die Zeiten richten sich nach der Uhr dieses Handys.',
        '5': 'In den Einstellungen sind „In-App-Benachrichtigungen“ und „SOS-Sirene“ eigene Schalter: Sie steuern das Banner in der App und den lauten SOS-Ton auf diesem Handy.',
      },
    },
    appLanguage: {
      title: 'Die App-Sprache ändern',
      summary:
        'Wähle, welche Sprache KidGate auf jedem Handy und im Web-Dashboard verwendet.',
      keywords: 'deutsch, englisch, übersetzung, falsche sprache, anzeigesprache',
      tip: 'Jedes Handy behält seine eigene Sprache. Mitteilungen und das Widget auf diesem Handy folgen ihr.',
      steps: {
        '1': 'Öffne auf einem Eltern- oder Kinderhandy „Einstellungen“ und wähle „Sprache“.',
        '2': 'Wähle eine Sprache, um sie festzulegen, oder „Gerätesprache“, um der Einstellung des Handys zu folgen. Bietet KidGate die Sprache des Handys nicht an, wird Englisch verwendet.',
        '3': 'Die App wechselt sofort. Mitteilungen an dieses Handy und sein Widget verwenden ebenfalls die neue Sprache.',
        '4': 'Im Web-Dashboard änderst du die Sprache im Kontobereich des Seitenmenüs. Sie gilt nur für diesen Browser.',
      },
    },
    appearance: {
      title: 'Das Aussehen der App ändern',
      summary: 'Wähle auf jedem Handy Dunkelmodus, Design-Stil und Themenfarbe.',
      keywords: 'theme, nachtmodus, farben, rosa, dunkler hintergrund, personalisieren',
      tip: 'Jedes Handy behält sein eigenes Aussehen. Eine Änderung auf dem Handy deines Kindes ändert deins also nie.',
      steps: {
        '1': 'Öffne auf einem Elternhandy „Einstellungen“. Dunkelmodus, Design-Stil und Themenfarbe findest du im Bereich „Darstellung“.',
        '2': 'Schalte „Dunkelmodus“ ein, damit die Bildschirme dunkler und abends angenehmer für die Augen sind.',
        '3': 'Wähle „Design-Stil“ und dann „Klassisch“ oder „Zuckersüß“ mit warmen Pastelltönen und einem weicheren, verspielteren Look.',
        '4': 'Wähle „Themenfarbe“ und dann die Farbe für Schaltflächen und Akzente. Welche Farben angeboten werden, hängt vom Stil ab: „Zuckersüß“ bietet nur Rosatöne.',
        '5': 'Dein Kind kann dasselbe auf seinem eigenen Handy wählen, unter „Einstellungen“ im Bereich „Präferenzen“, ohne Eltern-PIN.',
        '6': 'Im Web-Dashboard schaltest du „Dunkelmodus“ im Kontobereich des Seitenmenüs ein. Er gilt nur für diesen Browser.',
      },
    },
    webSignIn: {
      title: 'KidGate am Computer nutzen',
      summary: 'Melde dich im Web-Dashboard an und verwalte deine Familie im Browser.',
      tip: 'Lass nur einen Browser zu, in dem du dich selbst anmeldest: Er bekommt die gleiche Kontrolle wie dein Handy. Im Web-Dashboard kannst du kein Kindergerät koppeln und keinen Plan kaufen. Um einen Browser abzumelden, wähle im Dashboard „Abmelden“. Damit ein Browser nichts mehr ändern kann, öffne „Familie“, dann „Elternteile“ und entferne ihn unter „Browser, die Änderungen vornehmen können“; er kann deine Familie aber weiterhin anzeigen, bis er abgemeldet ist.',
      steps: {
        '1': 'Öffne auf dem Computer dashboard.kidgate.app und wähle „Mit der KidGate-App anmelden“. Ein QR-Code erscheint.',
        '2': 'Öffne auf deinem Handy Einstellungen, dann „Im Web anmelden“. Du kannst auch in Familie über das Scan-Symbol scannen.',
        '3': 'Scanne den QR-Code im Browser. Kann die Kamera ihn nicht lesen, gib stattdessen den 6-stelligen Code ein.',
        '4': 'Prüfe, ob der Code übereinstimmt, und wähle dann „Zulassen“. Wähle „Nicht zulassen“, wenn du diese Anmeldung nicht selbst gestartet hast.',
        '5': 'Der Browser meldet sich innerhalb weniger Sekunden an und kann 7 Tage lang Änderungen vornehmen. Danach zeigt er deine Familie weiterhin an; um etwas zu ändern, wähle im Dashboard „Änderungen entsperren“ und gib deine Eltern-PIN ein oder bestätige ihn erneut auf deinem Handy.',
      },
    },
    securityPins: {
      title: 'Eltern-PIN und App-Sperre',
      summary:
        'Zwei verschiedene PINs: Die Eltern-PIN schützt Einstellungen auf dem Gerät deines Kindes, die App-Sperre schützt die Eltern-App auf deinem Handy.',
      tip: 'Nur der Familieninhaber kann die Eltern-PIN festlegen oder zurücksetzen. Teile sie nie mit deinem Kind.',
      steps: {
        '1': 'Öffne Einstellungen. Wähle unter Sicherheit „Eltern-PIN“, um eine 6-stellige PIN zu erstellen oder sie zu ändern.',
        '2': 'Das Gerät deines Kindes verlangt die Eltern-PIN, bevor dort Blockierte Apps geändert werden oder KidGate abgemeldet wird.',
        '3': 'Hast du sie vergessen, wähle an derselben Stelle „PIN vergessen?“, um als Familieninhaber eine neue festzulegen.',
        '4': 'Sperrt sich ein Kindergerät nach 5 falschen PIN-Versuchen, zeigt der Bereich Sicherheit eine Zeile zum Entsperren dieses Geräts. Wähle sie, um die Versuche zurückzusetzen.',
        '5': 'Um die Eltern-App auf diesem Handy zu schützen, schalte „App-Sperre“ ein und erstelle eine eigene 6-stellige PIN. Du kannst auch das Entsperren mit Face ID, Touch ID oder Fingerabdruck erlauben.',
      },
    },
    reportProblem: {
      title: 'Ein Problem melden',
      summary:
        'Sag dem KidGate-Team, was nicht funktioniert hat, hänge Screenshots an und lies die Antwort in der App.',
      keywords:
        'fehler, bug, kontakt, feedback, funktioniert nicht, kaputt, kundendienst, hilfe, e-mail',
      tip: 'Du bekommst eine Mitteilung, wenn KidGate antwortet. Falls du sie verpasst hast, zeigt die Zeile „Support“ in den Einstellungen „Neue Antwort“.',
      steps: {
        '1': 'Öffne „Einstellungen“ und wähle „Support“. Im Web-Dashboard steht „Support“ im Menü.',
        '2': 'Wähle „Problem melden“ oder „Neue Meldung“, wenn du schon einmal eine gesendet hast.',
        '3': 'Beschreibe, was passiert ist und auf welchem Gerät, hänge bei Bedarf bis zu 5 Screenshots an und wähle „Bericht senden“.',
        '4': 'Jede Meldung zeigt ihren Status: „Eingegangen“, „In Bearbeitung“ oder „Gelöst“. Die Antwort von KidGate erscheint unter der Meldung.',
        '5': 'Du kannst unter der Meldung antworten, bis sie geschlossen ist. Für ein anderes Problem sende eine neue Meldung.',
      },
    },
    deleteAccount: {
      title: 'Dein Konto löschen',
      summary: 'Entferne dein KidGate-Konto und seine Daten – mit 14 Tagen Bedenkzeit.',
      tip: 'Das Löschen deines Kontos kündigt kein Abo im App Store oder bei Google Play; kündige es dort. Ein Mitelternteil, der nur die Familie nicht mehr verwalten möchte, kann sie stattdessen verlassen.',
      steps: {
        '1': 'Öffne Einstellungen und wähle unter Konto „Konto löschen“.',
        '2': 'Lies, was entfernt wird. Bist du der Familieninhaber, verlieren auch alle Mitelternteile und alle Kindergeräte den Zugriff.',
        '3': 'Bestätige, dass du es bist (mit deinem Passwort oder einer erneuten Anmeldung mit Google oder Apple), gib „OK“ ein und wähle „Löschung planen“. Damit wird die Löschung nur geplant: Es wird noch nichts entfernt.',
        '4': 'Das Konto wird nach 14 Tagen gelöscht. Bis dahin kannst du KidGate öffnen und „Löschung abbrechen“ wählen, um alles zu behalten.',
        '5': 'Löscht ein Mitelternteil sein Konto, wird nur dieses Konto entfernt; die Familie bleibt bestehen. Um eine Familie zu verlassen, ohne dein Konto zu löschen, öffne in Familie die Familienkarte und wähle „Familie verlassen“.',
      },
    },
  },
  onChildDevice: 'Auf dem Kindergerät',
  onParentDevice: 'Auf deinem Gerät',
  handoffHint:
    'KidGate kann diese Schritte auf dem Kindergerät selbst durchgehen: dort öffnen, zu „Status“ gehen und in der Karte „Einrichtung mit einem Elternteil abschließen“ die Option „Einrichtung fortsetzen“ wählen. Jeder Schritt hat einen Button, der den richtigen Bildschirm öffnet.',
} as const;
