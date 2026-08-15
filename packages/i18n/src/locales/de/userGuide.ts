export const userGuide = {
  title: 'Anleitung',
  subtitle:
    'Schritt-für-Schritt-Hilfe zu Berechtigungen, Gerätekopplung, täglichen Steuerungen und Sicherheitsfunktionen.',
  stepLabel: 'Schritt {{n}}',
  stepsSectionTitle: 'Schritte',
  tipTitle: 'Tipp',
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
      description: 'Limits, Zeitpläne, App-Blockierung und Gerätesperre',
    },
    safety: {
      title: 'Sicherheit und Überwachung',
      description: 'Standort, Check-In, SOS, Webfilter und Schutz',
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
        '2': 'Melde dich mit Google oder Apple an, oder erstelle ein E-Mail-Konto. Bestätige, dass du der Familienbesitzer für diesen Haushalt bist.',
        '3': 'Falls du dazu aufgefordert wirst, gib deiner Familie einen Namen (zum Beispiel „Familie Müller“). Dieser Name wird angezeigt, wenn andere Elternteile beitreten.',
        '4': 'Lege eine Eltern-PIN (6 Ziffern) unter Einstellungen → Sicherheit fest. Merke sie dir oder bewahre sie an einem sicheren Ort auf und teile sie nicht mit Kindern.',
        '5': 'Empfohlen: Aktiviere App-Sperre und biometrische Entsperrung in den Einstellungen, damit niemand sonst die Eltern-App auf deinem Gerät öffnen kann.',
        '6': 'Öffne Familie (Geräte). Tippe auf + und wähle „Gerät des Kindes verbinden“. Halte diesen Bildschirm für den QR-Code oder Code vom Kindergerät bereit.',
        '7': 'Sobald das Kindergerät verbunden ist, öffne die Gerätekarte. Lege gemeinsam mit deinem Kind das Tageslimit und die Sperrzeiten fest und schließt die Berechtigungen ab.',
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
        '3': 'Scanne auf dem Elterngerät den QR-Code oder gib den Code ein. Bestätige auf dem Kindergerät den Elternteil, wenn du dazu aufgefordert wirst — akzeptiere nur eine dir bekannte Person.',
        '4': 'Warte, bis der Startbildschirm anzeigt, dass das Gerät verbunden ist. Beende KidGate während der Einrichtung nicht erzwungen.',
        '5': 'Erteile auf dem Status-Bildschirm jede von KidGate angeforderte Berechtigung (Mitteilungen, Standort, Kamera und plattformspezifische Rechte). Tippe auf jede Zeile, bis sie als erlaubt angezeigt wird.',
        '6': 'Lasse KidGate auf dem Kindergerät installiert und angemeldet. Eltern verwalten die Limits ab jetzt von ihrem eigenen Gerät aus.',
      },
    },
    connectChild: {
      title: 'Ein Kindergerät verbinden',
      summary:
        'Koppele ein neues Kindergerät mit deiner Familie per QR-Code oder Code.',
      tip: 'Codes laufen ab. Wenn die Kopplung fehlschlägt, wähle auf dem Kindergerät „Neuer Code“ und versuche es erneut.',
      steps: {
        '1': 'Auf dem Kindergerät: Öffne KidGate → „Dies ist ein Kindergerät“. Lasse den QR-Code-Bildschirm sichtbar.',
        '2': 'Auf dem Elterngerät: Öffne Familie → tippe auf + → „Gerät des Kindes verbinden“.',
        '3': 'Ein QR-Code wird empfohlen: Wähle „QR-Code scannen“, erlaube bei Aufforderung den Kamerazugriff und richte den QR-Code des Kindergeräts im Rahmen aus.',
        '4': 'Oder verwende den Code: Wähle „Code manuell eingeben“, gib die 6 auf dem Kindergerät angezeigten Zeichen ein und fahre fort.',
        '5': 'Lies auf dem Kindergerät den Bestätigungsbildschirm sorgfältig durch. Wähle „Ja, verbinden“ nur, wenn der Elternname korrekt ist.',
        '6': 'Warte, bis das Elterngerät die Verbindung bestätigt. Das neue Gerät erscheint unter Familie.',
        '7': 'Öffne das neue Gerät und prüfe, ob sich „Zuletzt aktiv“ aktualisiert. Bleibt es offline, öffne KidGate erneut auf dem Kindergerät und überprüfe die Netzwerkverbindung.',
        '8': 'Erteile als Nächstes die Berechtigungen auf dem Kindergerät (siehe die Gruppe App-Berechtigungen). Die Steuerungen funktionieren erst vollständig, wenn diese Berechtigungen aktiv sind.',
      },
    },
    inviteParent: {
      title: 'Einen weiteren Elternteil einladen',
      summary:
        'Lass einen zweiten Elternteil derselben Familie beitreten und dieselben Kindergeräte verwalten.',
      tip: 'Nur der Familienbesitzer kann Beitrittsanfragen genehmigen. Genehmige zeitnah, da Anfragen ablaufen können.',
      steps: {
        '1': 'Öffne auf dem Gerät des Familienbesitzers Familie → tippe auf + → „Weiteres Elterngerät hinzufügen“ (oder „Elternteil einladen“).',
        '2': 'Falls du noch keinen Familiennamen erstellt hast, gib einen ein und wähle „Familie erstellen“.',
        '3': 'Zeige dem anderen Elternteil den Einladungs-QR-Code oder teile den Einladungscode mit ihm.',
        '4': 'Auf dem anderen Elterngerät: Öffne KidGate als Elternteil → Familie → + → „Familie beitreten“ und scanne den QR-Code oder gib den Code ein.',
        '5': 'Öffne auf dem Gerät des Besitzers die ausstehende Anfrage und wähle „Genehmigen“. Lehne ab, wenn du die Person nicht erkennst.',
        '6': 'Der neue Elternteil sieht dieselben Kindergeräte und kann bei der Verwaltung der Limits helfen. Manche Aktionen, wie das Umbenennen oder Entfernen von Geräten, bleiben dem Besitzer vorbehalten.',
      },
    },
    joinFamily: {
      title: 'Einer bestehenden Familie beitreten',
      summary:
        'Nutze eine Einladung des Familienbesitzers, um Mitelternteil zu werden.',
      tip: 'Läuft die Genehmigungsanfrage ab, bitte den Besitzer um einen neuen Einladungs-QR-Code oder -Code.',
      steps: {
        '1': 'Installiere KidGate und melde dich auf deinem Gerät als Elternteil an.',
        '2': 'Öffne Familie → tippe auf + → „Familie beitreten“.',
        '3': 'Scanne den Einladungs-QR-Code des Besitzers oder gib den 6-stelligen Einladungscode ein.',
        '4': 'Warte auf die Genehmigung des Besitzers. Lasse die App geöffnet, bis du siehst, dass du der Familie beigetreten bist.',
        '5': 'Bestätige, dass die Kindergeräte unter Familie erscheinen. Öffne ein Gerät, um dessen Status und Steuerungen anzuzeigen.',
      },
    },
    androidPermissions: {
      title: 'Android-Berechtigungen (Kindergerät)',
      summary:
        'Aktiviere Nutzungszugriff, Über anderen Apps anzeigen, Bedienungshilfen, Akku und verwandte Berechtigungen.',
      tip: 'Vollständigkeit ist wichtiger als die Reihenfolge. Jede rote oder nicht erlaubte Zeile auf dem Status-Bildschirm des Kindes sollte behoben werden, bevor du dich auf die Sperre oder Sperrzeiten verlässt.',
      steps: {
        '1': 'Öffne auf dem Kindergerät KidGate → Status und arbeite die Berechtigungsliste von oben nach unten durch.',
        '2': 'Mitteilungen: Tippe auf die Zeile → Erlauben. Eltern benötigen Push-Mitteilungen für Sperrbefehle und Zeitanfragen.',
        '3': 'Nutzungszugriff: Öffne den Systembildschirm → suche KidGate → schalte ihn ein. Dies ist für die Bildschirmzeit-Erfassung und Limits erforderlich.',
        '4': 'Über anderen Apps anzeigen: Erlaube dies für KidGate. Dies ist erforderlich, damit der Sperrbildschirm über anderen Apps erscheinen kann.',
        '5': 'Bedienungshilfen-Sperrfunktion: Einstellungen → Bedienungshilfen → Installierte/Heruntergeladene Apps → KidGate → An. So bleibt die Sperre durchgesetzt.',
        '6': 'Akku ohne Einschränkung: Wähle bei Aufforderung „Erlauben“. Erscheint keine Aufforderung: App-Info → Akku → Ohne Einschränkung.',
        '7': 'Wecker und Erinnerungen: Erlaube dies, damit Sperrzeiten pünktlich beginnen und enden.',
        '8': 'Standort und Kamera (falls du Check-In oder SOS-Fotos nutzt): Erlaube sie, wenn KidGate danach fragt. Kehre zu Status zurück und bestätige, dass jede Zeile erlaubt ist.',
      },
    },
    iosScreenTime: {
      title: 'iOS-Bildschirmzeit (Kindergerät)',
      summary:
        'Erlaube App- & Websitenutzung, damit Sperre, Zeitpläne und App-Auswahl funktionieren können.',
      tip: 'Fehlt der Erlauben-Button, öffne iOS-Einstellungen → Bildschirmzeit und stelle sicher, dass Bildschirmzeit auf dem Kindergerät zuerst aktiviert ist.',
      steps: {
        '1': 'Öffne auf dem iPhone des Kindes KidGate und bleibe auf dem Status-/Einrichtungsbildschirm.',
        '2': 'Wähle „App- & Websitenutzung erlauben“ (oder das Bildschirmzeit-Banner).',
        '3': 'Wähle im Systemdialog „Erlauben“. Bitte schließe den Dialog nicht ohne eine Auswahl.',
        '4': 'Kehre zu KidGate zurück. Das Banner verschwindet, sobald die Autorisierung erfolgreich ist.',
        '5': 'Wurde die Autorisierung zuvor verweigert: Öffne iOS-Einstellungen → suche KidGate → aktiviere die zugehörigen Bildschirmzeit-Optionen, öffne dann KidGate erneut.',
        '6': 'Um blockierte Apps auszuwählen: Öffne auf dem Kindergerät KidGate-Einstellungen → gib die Eltern-PIN ein → „Zu blockierende Apps auswählen“ → speichern.',
        '7': 'Öffne auf dem Elterngerät das Gerät → Blockierte Apps und bestätige, dass die Liste synchronisiert wurde. Schalte die Blockierung ein, sobald du bereit bist.',
      },
    },
    oemKeepRunning: {
      title: 'KidGate im Hintergrund aktiv halten (Herstellereinstellungen)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei und ähnliche Geräte pausieren Hintergrund-Apps oft.',
      tip: 'Starte das Kindergerät nach Ändern der Akkuregeln einmal neu, öffne KidGate erneut und teste dann die Sperre vom Elterngerät aus.',
      steps: {
        '1': 'Öffne auf dem Android-Kindergerät KidGate → Status → „KidGate am Laufen halten“.',
        '2': 'Erlaube den Autostart für KidGate im Sicherheitsbildschirm des Herstellers (der Wortlaut variiert je nach Gerät).',
        '3': 'Stelle die Akkunutzung für KidGate sowohl in den Android-Einstellungen als auch im Akkumenü des Herstellers, falls beide vorhanden sind, auf „Ohne Einschränkung“.',
        '4': 'Deaktiviere alle „Ruhende Apps“-, „Tiefschlaf-Apps“- oder „Apps in den Ruhezustand versetzen“-Listen, die KidGate enthalten.',
        '5': 'Funktioniert eine Verknüpfung nicht, öffne die Sicherheits-/Geräteschutz-App manuell und suche nach KidGate, Autostart oder Akku.',
        '6': 'Markiere in KidGate jede Zeile als erledigt, sobald du sie abgeschlossen hast, damit du siehst, was noch fehlt.',
      },
    },
    dailyLimit: {
      title: 'Ein Tageslimit festlegen',
      summary: 'Begrenze, wie viele Minuten das Kind das Gerät täglich nutzen darf.',
      tip: 'Die Nutzungsdaten stammen vom Kindergerät. Wirkt der Zähler festgefahren, öffne KidGate auf dem Kindergerät und warte auf eine Synchronisierung.',
      steps: {
        '1': 'Öffne auf dem Elterngerät Familie → tippe auf das Kindergerät.',
        '2': 'Wähle unter Wichtige Steuerungen „Tageslimit“.',
        '3': 'Wähle einen Minutenwert pro Tag (oder bearbeite das bestehende Limit) und speichere.',
        '4': 'Bestätige, dass die Gerätekarte nach der Synchronisierung des Kindergeräts die heute genutzten Minuten und das Limit anzeigt.',
        '5': 'Ist das Limit erreicht, sperrt sich das Gerät gemäß Plattformregeln. Wähle „Entsperren“ auf dem Gerätebildschirm, wenn du den Zugriff vorzeitig wiederherstellen möchtest.',
      },
    },
    blockedHours: {
      title: 'Sperrzeiten festlegen',
      summary: 'Plane bis zu 3 Zeiträume, in denen das Gerät gesperrt bleiben soll.',
      tip: 'Lege zuerst Schulzeiten und Schlafenszeiten fest. Vermeide sich überschneidende Zeiträume, damit der Zeitplan übersichtlich bleibt.',
      steps: {
        '1': 'Öffne das Kindergerät auf dem Elterngerät → Sperrzeiten.',
        '2': 'Wähle „Sperrzeiten festlegen“ (oder „Sperrzeiten bearbeiten“). Füge einen Zeitraum mit Start-, Endzeit und Wochentagen hinzu.',
        '3': 'Speichere den Zeitraum. Du kannst insgesamt bis zu 3 Zeiträume hinzufügen.',
        '4': 'Schalte den Zeitplan ein, falls ein Aktivierungsschalter angezeigt wird.',
        '5': 'Bestätige auf dem Kindergerät, dass die Berechtigungen für Wecker und Erinnerungen und für Bildschirmzeit weiterhin erlaubt sind, damit die Zeitpläne pünktlich laufen.',
        '6': 'Während eines aktiven Zeitraums zeigt die Gerätekarte „Sperrzeit aktiv · gesperrt“. Verwende „Entsperren“ nur, wenn du den Zeitplan bewusst außer Kraft setzt.',
      },
    },
    blockedApps: {
      title: 'Bestimmte Apps blockieren',
      summary:
        'Wähle Apps auf dem Kindergerät aus und aktiviere dann die Blockierung vom Elterngerät aus.',
      tip: 'Unter iOS kann Apple die genauen App-Namen vor Elterngeräten verbergen. Die Auswahl erfolgt weiterhin auf dem Kindergerät mit der Eltern-PIN.',
      steps: {
        '1': 'Verwende direkt das Kindergerät. Öffne KidGate → Einstellungen.',
        '2': 'Gib bei Aufforderung die Eltern-PIN ein.',
        '3': 'Öffne „Zu blockierende Apps auswählen“. Wähle die Apps (und Kategorien, falls angezeigt) und speichere auf dem Kindergerät.',
        '4': 'Öffne auf dem Elterngerät das Gerät → Blockierte Apps und warte, bis die ausgewählte Liste erscheint.',
        '5': 'Schalte „App-Blockierung aktivieren“ ein. Der Status sollte „Blockierung aktiviert“ anzeigen.',
        '6': 'Teste dies, indem du eine blockierte App auf dem Kindergerät öffnest. Sie sollte gemäß Plattformregeln eingeschränkt sein.',
        '7': 'Um die Liste später zu ändern, wiederhole die Auswahl auf dem Kindergerät mit der Eltern-PIN. Das Elterngerät synchronisiert die neue Liste.',
      },
    },
    lockUnlock: {
      title: 'Das Gerät sperren und entsperren',
      summary: 'Sperre das Kindergerät sofort oder stelle den Zugriff wieder her.',
      tip: 'Unter Android ist die Sperre am stärksten, wenn sowohl Über anderen Apps anzeigen als auch Bedienungshilfen aktiviert sind. Unter iOS hängt die Sperre von der Bildschirmzeit-Autorisierung ab.',
      steps: {
        '1': 'Öffne das Kindergerät auf dem Elterngerät.',
        '2': 'Wähle „Gerät sperren“ (oder „In KidGate sperren“, je nach angezeigten Plattformoptionen).',
        '3': 'Warte einige Sekunden. Der Status sollte auf „Gesperrt“ wechseln. Ändert sich nichts, öffne KidGate auf dem Kindergerät und überprüfe die Berechtigungen erneut.',
        '4': 'Um den Zugriff wiederherzustellen, wähle „Entsperren“ auf demselben Gerätebildschirm und bestätige.',
        '5': 'Optional: Du kannst ein Gerät auch schnell aus Familie sperren oder entsperren, wenn diese Verknüpfungen auf der Gerätekarte erscheinen.',
      },
    },
    locationSharing: {
      title: 'Standortfreigabe aktivieren',
      summary: 'Sieh den neuesten Standort deines Kindes auf dem Elterngerät.',
      tip: 'Der Standort erfordert eine Berechtigung auf dem Kindergerät und eine stabile Netzwerkverbindung. In Innenräumen kann GPS weniger genau sein.',
      steps: {
        '1': 'Erlaube auf dem Kindergerät den Standort für KidGate, wenn du dazu aufgefordert wirst (oder in den Systemeinstellungen).',
        '2': 'Öffne auf dem Elterngerät das Gerät → Standort.',
        '3': 'Schalte die Freigabe ein, falls sie aus ist, und warte dann auf die erste Aktualisierung.',
        '4': 'Ziehe zum Aktualisieren nach unten oder öffne den Bildschirm erneut, falls der Status weiterhin „Wartend“ anzeigt.',
        '5': 'Optional: Richte Ortsbenachrichtigungen ein, damit du benachrichtigt wirst, wenn dein Kind einen gespeicherten Ort betritt oder verlässt.',
      },
    },
    checkIn: {
      title: 'Einen Check-In anfordern',
      summary:
        'Bitte dein Kind zu bestätigen, dass es sicher ist, mit Standort und optionalem Foto.',
      tip: 'Für Check-Ins mit Foto ist die Kameraberechtigung auf dem Kindergerät erforderlich.',
      steps: {
        '1': 'Öffne das Kindergerät auf dem Elterngerät.',
        '2': 'Wähle „Check-In“ (die Schnellaktion oder den Bereich Sicherheit).',
        '3': 'Das Kindergerät erhält eine Check-In-Mitteilung und einen entsprechenden Bildschirm. Das Kind tippt, um zu bestätigen, dass alles in Ordnung ist, oder um Hilfe zu bitten.',
        '4': 'Ist der Kamerazugriff erlaubt, fügt KidGate wenn möglich ein Foto zusammen mit dem Standort hinzu.',
        '5': 'Öffne auf dem Elterngerät den Check-in-Verlauf, um die letzte Antwort und das Foto zu prüfen.',
      },
    },
    sos: {
      title: 'SOS-Notfallalarme',
      summary:
        'Verstehe, wie ein Kind einen SOS-Alarm sendet und wie Eltern ihn überprüfen.',
      tip: 'Teste dies einmal zu Hause, damit Eltern und Kind den Ablauf vor einem echten Notfall kennen.',
      steps: {
        '1': 'Öffne auf dem Kindergerät den SOS-Tab oder -Bildschirm in KidGate.',
        '2': 'Folge den Schritten auf dem Bildschirm, um einen SOS-Alarm zu senden (Standort und Foto hängen von den erteilten Berechtigungen ab).',
        '3': 'Eltern erhalten eine Push-Mitteilung, sobald ein SOS-Alarm gesendet wird.',
        '4': 'Öffne auf dem Elterngerät das Gerät → SOS-Warnungen, um das Ereignis zu überprüfen.',
        '5': 'Vereinbare mit deinem Kind, wann SOS verwendet werden soll und wann ein normaler Check-In ausreicht.',
      },
    },
    webFilter: {
      title: 'Websites für Erwachsene einschränken',
      summary:
        'Aktiviere den Webfilter für Erwachseneninhalte, wo die Plattform dies unterstützt.',
      tip: 'Die Webfilterung hängt von den Plattformfähigkeiten ab. Kombiniere sie mit Blockierten Apps für einen stärkeren Schutz.',
      steps: {
        '1': 'Öffne das Kindergerät auf dem Elterngerät → Webfilter.',
        '2': 'Überprüfe den aktuellen Status (Erwachseneninhalte eingeschränkt oder Filterung aus).',
        '3': 'Schalte die Filterung ein und speichere, falls ein Schalter angezeigt wird.',
        '4': 'Überprüfe später erneut denselben Bildschirm. Bleibt der Status „Wartend“, öffne KidGate erneut auf dem Kindergerät, damit die Einstellungen synchronisieren können.',
      },
    },
    protectionAlerts: {
      title: 'Schutzwarnungen',
      summary:
        'Werde benachrichtigt, wenn eine wichtige Berechtigung auf dem Kindergerät deaktiviert wird.',
      tip: 'Eine Schutzwarnung bedeutet, dass der KidGate-Schutz geschwächt wurde. Bitte stelle die Berechtigung auf dem Kindergerät so schnell wie möglich wieder her.',
      steps: {
        '1': 'Öffne das Kindergerät → Schutz (oder Schutzwarnungen).',
        '2': 'Überprüfe aktuelle Ereignisse wie das Deaktivieren von Über anderen Apps anzeigen, Bedienungshilfen, Nutzungszugriff, Kamera oder Standort.',
        '3': 'Öffne auf dem Kindergerät KidGate → Status und schalte die genannte Berechtigung wieder ein.',
        '4': 'Kehre zu Schutzwarnungen zurück und bestätige, dass keine neuen unerwarteten Ereignisse auftauchen.',
        '5': 'Lasse die Mitteilungen auf dem Elterngerät aktiviert, damit du schnell von Änderungen erfährst.',
      },
    },
  },
} as const;
