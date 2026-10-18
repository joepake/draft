export const legal = {
  privacyPolicy: {
    title: 'Datenschutzerklärung',
    effectiveDate: 'Gültig ab 18. Oktober 2026',
    intro:
      'KidGate ist der Produkt- und Handelsname, unter dem die App betrieben wird. Diese Richtlinie erläutert, wie KidGate mit Daten umgeht, wenn Eltern den Dienst nutzen, um das Gerät eines Kindes zu verwalten.\n\nSie gilt für die KidGate-Apps für iPhone, iPad und Android, den KidGate-Agenten für macOS und Windows, die KidGate-Browsererweiterung, die Android-TV-App, das Eltern-Dashboard und die Website kidgate.app.\n\n### Zusammenfassung\n\n• KidGate verarbeitet Daten nur für die Funktionen, die ein Elternteil einschaltet, und im Rahmen der Berechtigungen, die das Betriebssystem erteilt.\n• Nachrichten und Suchanfragen werden auf dem Gerät selbst abgeglichen. Gesendet wird nur das gefundene Stichwort, es sei denn, ein Elternteil hat der KI-Bestätigung gesondert zugestimmt (Abschnitt 3).\n• Der Webfilter läuft auf dem Gerät. KidGate erfasst Domains, keine vollständigen Adressen und keine Seiteninhalte.\n• Es gibt keine Werbung, und KidGate verkauft keine personenbezogenen Daten.\n• Der größte Teil des Aktivitätsverlaufs wird nach 30 Tagen automatisch gelöscht, SOS-Alarme nach 90 Tagen (Abschnitt 11).\n• Autorisierte KidGate-Mitarbeiter öffnen ein Familienkonto nur, wenn es für den Support erforderlich ist, und jedes Öffnen erscheint im Aktivitätsverlauf dieser Familie (Abschnitt 10).\n• Ein Elternteil kann die Löschung des Kontos jederzeit beantragen. Nach einer Wartezeit von 14 Tagen werden das Konto und die Daten der Familie gelöscht, mit Ausnahme der in den Abschnitten 11 und 12 genannten minimalen Aufzeichnungen.',
    sections: [
      {
        title: '1. Geltungsbereich und elterliche Befugnis',
        body: 'Das Elternkonto konfiguriert Berechtigungen und verwaltet Kindergeräte. Kinder erstellen keine eigenen KidGate-Konten; ein Gerät wird ausschließlich über ein Elternkonto verwaltet.\n\nEin Elternteil muss über das gesetzliche Sorgerecht oder eine gültige Befugnis verfügen, bevor ein Gerät überwacht oder verwaltet wird. KidGate darf nicht zur verdeckten Überwachung von Erwachsenen oder von Personen außerhalb der gesetzlichen Fürsorge des Elternteils verwendet werden.',
      },
      {
        title: '2. Von uns verarbeitete Daten',
        body: 'Was KidGate verarbeitet, hängt davon ab, welche Funktionen ein Elternteil einschaltet und welche Berechtigungen das Betriebssystem erteilt. Nicht jede der unten genannten Datenarten wird auf jedem Gerät erhoben.\n\n### Konto und Geräte\n\n• Kontokennungen und die Google-, Apple- oder E-Mail-Anmeldung, mit der das Elternkonto erstellt wurde.\n• Die Namen, die ein Elternteil den Kindern gibt, und die ihnen zugeordneten Geräte.\n• Gerätename, Modell, Bauform, Betriebssystem- und App-Version, Akkustand und Kopplungsstatus.\n• Die Einstellungen: Tageslimit, Sperrzeiten, Blockierte Apps, Limits pro App, Webfilter-Kategorien und die Eltern-PIN. Die PIN wird ausschließlich als Einweg-Hash gespeichert.\n\n### Bildschirmzeit und Apps\n\n• Bildschirmzeit-Summen, eine Aufschlüsselung pro App und eine minutengenaue Aufzeichnung, wann das Gerät genutzt wurde.\n• Die auf dem Gerät installierten Apps und die dem Browser hinzugefügten Erweiterungen.\n• Warnungen, wenn eine neue App installiert wird, wenn ein Schutz ausgeschaltet wird oder wenn die Nutzung ungewöhnlich wirkt, etwa bei einer neuen App oder bei Nutzung während der Sperrzeiten.\n\n### Web und Video\n\n• Die Domains, die ein Kindergerät angefragt hat, und welche davon blockiert wurden, gezählt nach Tag und nach Stunde.\n• Titel und Kanalnamen abgespielter Videos, soweit die Plattform sie sichtbar macht und der Videoverlauf eingeschaltet ist.\n• Anfragen zur Freigabe einer Website und die zu ihrer Bearbeitung nötigen Angaben.\n\n### Standort und Sicherheit\n\n• Gerätestandort, Standortverlauf, die von einem Elternteil gespeicherten Orte und Benachrichtigungen, wenn ein Gerät an einem davon ankommt oder ihn verlässt.\n• SOS-Alarme, Sicherheits-Check-ins und das Foto, das ein Kind mit einem von beiden sendet, sowie bis zu 15 Sekunden Ton, die aufgenommen werden, wenn ein Kind von einem Smartphone oder Tablet mit erlaubtem Mikrofon ein SOS sendet.\n• Name und E-Mail-Adresse jedes Vertrauenskontakts, den ein Elternteil hinzufügt, damit KidGate ihm jedes SOS per E-Mail zustellen kann.\n\n### Nachrichten und Suchanfragen\n\n• Warnungen, wenn eine Nachricht oder ein Suchbegriff zu einer Liste passt, deren Überwachung ein Elternteil eingeschaltet hat. Wie das funktioniert, beschreibt Abschnitt 3.\n\n### Berichte, Support und Zahlungen\n\n• Anfragen nach zusätzlicher Zeit, Belohnungsaufgaben und die Wochensummen der Sterne auf der Sternetafel.\n• Der Wochenbericht, der diese Daten zusammenfasst.\n• Supportnachrichten und daran angehängte Screenshots.\n• Absturzberichte und technische Diagnosen.\n• Die von einem App-Store gelieferten Abo-Transaktionsdaten.\n\nKidGate verlangt den echten Namen eines Kindes nicht, wenn eine Funktion ihn nicht braucht.',
      },
      {
        title: '3. Was auf dem Gerät des Kindes bleibt',
        body: '### Überwachung von Nachrichten und Suchanfragen\n\nDie Überwachung von Nachrichten läuft auf dem Android-Gerät selbst. Die Überwachung von Suchanfragen läuft auf dem Android-Gerät und in der KidGate-Browsererweiterung. Beide laufen nur, wenn ein Elternteil sie einschaltet.\n\nDas Gerät gleicht Text mit lokal gespeicherten Stichwortlisten ab. Bei einem Treffer wird eine Warnung gesendet mit dem gefundenen Wort oder der gefundenen kurzen Wortfolge, der Kategorie, der App oder Suchmaschine, in der der Treffer auftauchte, und der Uhrzeit. Die Nachricht oder Suchanfrage selbst, der übrige Gesprächsverlauf und die Person, mit der er geführt wurde, werden nicht übertragen und von KidGate nicht gespeichert.\n\n### KI-Bestätigung\n\nDies ist die einzige Ausnahme, und sie erfordert eine gesonderte Einwilligung eines Elternteils. Ist sie eingeschaltet, wird eine eingehende Nachricht mit mehrdeutigem Stichworttreffer zur Beurteilung an das Gemini-Modell von Google gesendet, damit ein Elternteil nicht wegen eines gewöhnlichen Wortes gewarnt wird. Vor dem Senden werden E-Mail-Adressen, Telefonnummern und Webadressen in der Nachricht maskiert; der übrige Text wird dennoch gesendet und kann weiterhin private Informationen enthalten.\n\nKidGate behält nur das Urteil und speichert die Nachricht nach der Beurteilung nicht. Wie Google Cloud mit den erhaltenen Daten umgeht, beschreibt Abschnitt 5. Text, den das Kind selbst schreibt, wird niemals zur KI-Bestätigung gesendet, unabhängig davon, wozu die Familie eingewilligt hat.\n\n### Web und Video\n\nKidGate erfasst die Domain, die ein Gerät angefragt hat, und ob sie blockiert wurde. Die Adresse einer Seite oder deren Inhalt erfasst KidGate nicht, außer welches Video abgespielt wurde, wenn der Videoverlauf eingeschaltet ist. Dateien, Fotos und Surfverhalten, die keine aktivierte Funktion lesen muss, bleiben auf dem Gerät.\n\n### Aufnahme beim SOS\n\nDas Mikrofon wird für genau eine Sache genutzt: Sendet ein Kind von einem Smartphone oder Tablet mit erlaubtem Mikrofon ein SOS, werden bis zu 15 Sekunden Ton aufgenommen und mit dem Alarm gesendet. Zu keinem anderen Zeitpunkt wird etwas aufgenommen, nichts wird live mitgehört, und kein Elternteil kann aus der Ferne eine Aufnahme starten.\n\n### Webfilter und DNS\n\nAuf iPhone, iPad, Android-Smartphones und Android TV ist der Webfilter ein VPN, das auf dem Gerät selbst läuft. Dieses VPN leitet keinen Datenverkehr über Server von KidGate: Es erhält nur die DNS-Anfragen des Geräts für Websites, lehnt die blockierten ab und gibt den Rest zur Beantwortung an einen DNS-Resolver weiter.\n\n• Auf iPhone und iPad: 1.1.1.1 von Cloudflare.\n• Auf Android: der Resolver des jeweils genutzten Netzwerks oder, wenn dieser nicht antwortet, Google Public DNS.\n\nAuf einem Smartphone oder Tablet erklärt KidGate vor dem ersten Einschalten, was das VPN sieht, und bittet um Erlaubnis. Was das VPN erfasst, dient ausschließlich dem Filtern und dem Webverlauf der Familie; es wird nie verkauft, nie für einen anderen Zweck verwendet und gelangt nur an die in Abschnitt 7 genannten Anbieter, und nur soweit es für den Betrieb des Dienstes erforderlich ist.',
      },
      {
        title: '4. Wie Daten verwendet werden',
        body: 'KidGate verwendet Daten, um:\n\n• Konten zu authentifizieren und Geräte zu koppeln.\n• die elterlichen Kontrollfunktionen bereitzustellen und Einstellungen zwischen Geräten zu synchronisieren.\n• Warnungen zu senden, den Aktivitätsverlauf anzuzeigen und Berichte zu erstellen.\n• Abonnements und Transaktionen abzuwickeln.\n• Konten zu schützen und Betrug oder Missbrauch zu verhindern.\n• Fehler zu beheben, Nutzer zu unterstützen und die Zuverlässigkeit zu verbessern.\n\nKidGate verkauft keine personenbezogenen Daten und verwendet keine Daten von Kindern für verhaltensbasierte Werbung. In keiner KidGate-App gibt es Werbung.',
      },
      {
        title: '5. Automatisierte Verarbeitung und KI',
        body: 'KidGate nutzt die Gemini-Modelle von Google, erreichbar über Google Cloud, für drei Zwecke:\n\n• Zusammenfassung des Wochenberichts: ein schriftlicher Text, der aus den eigenen Nutzungszahlen einer Familie erzeugt wird.\n• Einordnung von Apps und Domains: ihre Zuordnung zu den Kategorien, die der Webfilter und die App-Listen verwenden. Das Ergebnis wird in einer gemeinsamen Tabelle gespeichert, die nur eine Domain und ihre Kategorie festhält, nicht aber, welche Familie sie besucht hat.\n• KI-Bestätigung: die Beurteilung einzelner eingehender Nachrichten mit mehrdeutigem Stichworttreffer, nur wenn ein Elternteil zugestimmt hat, wie in Abschnitt 3 beschrieben.\n\nDiese Modelle können sich irren. Eine Kategorie, ein Satz einer Zusammenfassung oder eine Nachrichtenwarnung ist für ein Elternteil ein Anlass hinzusehen und keine Tatsachenfeststellung, und KidGate trifft auf dieser Grundlage keine Entscheidung mit rechtlicher oder ähnlich erheblicher Wirkung für ein Kind.\n\nNach den Bedingungen von Google Cloud verwendet Google die Daten, die KidGate über diesen Dienst sendet, nicht zum Training seiner Modelle. Google kann Daten jedoch im Rahmen der Betriebs- und Sicherheitsabläufe dieses Dienstes vorübergehend speichern; dass KidGate eine Nachricht nicht speichert, bedeutet daher nicht, dass jede Kopie beim Anbieter sofort verschwindet.',
      },
      {
        title: '6. Rechtsgrundlagen und Einwilligung',
        body: 'Je nach anwendbarem Recht verarbeitet KidGate Daten, um angeforderte Dienste bereitzustellen, gesetzlichen Pflichten nachzukommen, berechtigte Sicherheitsinteressen zu schützen oder, sofern erforderlich, auf Grundlage einer Einwilligung. Eltern sind dafür verantwortlich, erforderliche Hinweise zu erteilen und die notwendige Einwilligung für ein Kind oder einen Gerätenutzer einzuholen.\n\nDie Überwachung von Nachrichten und die KI-Bestätigung sind zwei gesonderte Einwilligungen, die jeweils jederzeit widerrufen werden können:\n\n• Die Überwachung von Nachrichten wird pro Gerät eingeschaltet.\n• Die KI-Bestätigung wird einmal für die Familie erteilt, und KidGate erfasst, wer wann zugestimmt hat.',
      },
      {
        title: '7. Dienstleister',
        body: 'KidGate nutzt die folgenden Anbieter, um den Dienst zu betreiben. Jeder erhält nur, was seine Aufgabe erfordert.\n\n• Google Cloud und Firebase: Authentifizierung, Datenbank, Dateispeicher, die Serverfunktionen, Push-Benachrichtigungen über Firebase Cloud Messaging, Absturzberichte über Firebase Crashlytics und die in Abschnitt 5 genannten Gemini-Modelle.\n• Apple und Google: Abwicklung von Abo-Käufen, Verlängerungen und Rückerstattungen über ihre App-Stores.\n• Google Analytics: die in Abschnitt 8 beschriebene Messung.\n• HERE Technologies: wandelt einen gemeldeten Gerätestandort in eine Adresse um und zeichnet die Kartenkacheln auf den Standortbildschirmen, erhält also die von einem Gerät gemeldeten Koordinaten.\n• Resend: stellt die E-Mails zu, die KidGate versendet, darunter SOS-Alarme an Vertrauenskontakte und den Wochenbericht.\n• Cloudflare: liefert die Desktop-Installationsprogramme aus und beantwortet auf iPhone und iPad die DNS-Anfragen für Websites, die der Webfilter durchlässt, erhält also diese Domainnamen.\n• unpkg: das Content-Netzwerk, das die Kartenbibliothek an die Eltern-Apps liefert.\n\nDaten werden diesen Anbietern nur offengelegt, soweit dies für die Bereitstellung, Wartung und den Schutz des Dienstes erforderlich ist; gegenüber Behörden, sofern gesetzlich vorgeschrieben; oder um Sicherheitsrisiken, Betrug oder Missbrauch abzuwenden. Diese Anbieter unterliegen eigenen Richtlinien und Pflichten für die von ihnen verarbeiteten Daten, und KidGate erlaubt keinem von ihnen, Daten von Kindern für eigene Marketingzwecke zu verwenden.',
      },
      {
        title: '8. Messung und Cookies',
        body: '### Website kidgate.app\n\nDie Website misst mit Google Analytics Seitenaufrufe und die Zahl der Klicks auf jeden Desktop-Download-Link. Die Analyse-Speicherung ist standardmäßig abgelehnt, sodass kein Analyse-Cookie gesetzt und nichts im Browser der lesenden Person abgelegt wird; jeder Besuch wird über eine cookielose Anfrage mit gekürzter IP-Adresse gezählt. Google Signals und Werbekennungen sind ausgeschaltet, und KidGate übermittelt auf diesem Weg nichts, was eine lesende Person oder eine Familie identifiziert.\n\n### KidGate-Apps\n\nDie KidGate-Apps melden eine kleine Zahl von Ereignissen an dieselbe Property, um zu zeigen, welche Funktionen genutzt werden. Diese Ereignisse enthalten eine App-Instanz-Kennung. Sie ist nicht die Werbekennung des Geräts, die die Apps nicht erfassen, unterscheidet aber dennoch eine Installation von einer anderen; diese Daten sind daher nicht vollständig anonym. Die Ereignisse enthalten niemals den Namen, Nachrichten, den Standort oder den Surfverlauf eines Kindes.\n\nDie Apps und die Website verwenden kein Werbe- oder Tracking-Netzwerk jeglicher Art.',
      },
      {
        title: '9. Wo Daten gespeichert werden und wie sie geschützt sind',
        body: 'Familiendaten werden in der Region Singapur von Google Cloud gespeichert und können von den in Abschnitt 7 genannten Anbietern andernorts verarbeitet werden; damit können sie das Land verlassen, in dem eine Familie lebt.\n\nKidGate setzt angemessene technische und organisatorische Schutzmaßnahmen ein, darunter:\n\n• Zugriffskontrollen und das Prinzip der geringsten Berechtigung.\n• Serverseitige Regeln, die jeden Lesezugriff auf eine einzige Familie begrenzen.\n• Sichere Übertragung.\n• Die Eltern-PIN wird ausschließlich als Einweg-Hash gespeichert und kann nicht zurückgelesen werden.\n\nKein System ist vollständig sicher; KidGate kann nicht garantieren, dass Daten niemals verloren gehen, unbefugt abgerufen oder unterbrochen werden.',
      },
      {
        title: '10. Supportzugriff durch KidGate-Mitarbeiter',
        body: '### Wann\n\nNur soweit es zur Bearbeitung einer Supportanfrage oder zur Diagnose eines Fehlers erforderlich ist, und nur durch von KidGate autorisierte Mitarbeiter, die sich mit Zwei-Faktor-Authentifizierung anmelden.\n\n### Was sie sehen und tun können\n\nBeim Öffnen eines Familienkontos sehen sie genau das, was ein Elternteil sieht: dessen Konfiguration und Geräte sowie die darin enthaltenen Aktivitäten, einschließlich Standortverlauf, Webverlauf, Nachrichtenwarnungen und Fotos, die einem SOS oder einem Check-in beigefügt sind. Sie können außerdem wie ein Elternteil Einstellungen ändern und Gerätebefehle auslösen.\n\n### Was protokolliert wird\n\n• Jedes Öffnen eines Familienkontos schreibt einen Eintrag in den Aktivitätsverlauf dieser Familie, sichtbar für ihre Eltern, mit Zeitpunkt und der zugehörigen Supportanfrage.\n• Jeder Lesezugriff auf die Datensätze einer Familie über die Betreiberwerkzeuge wird mit Zeitpunkt und angegebenem Grund protokolliert.\n• Einzelne Handlungen innerhalb einer Supportsitzung, etwa das Ändern einer Einstellung oder das Senden eines Befehls, werden derzeit nicht gesondert protokolliert.',
      },
      {
        title: '11. Wie lange Daten aufbewahrt werden',
        body: 'Die folgenden Fristen beschreiben die Aufbewahrung durch KidGate. Die in Abschnitt 7 genannten Anbieter können Daten nach ihren eigenen Bedingungen verarbeiten oder speichern.\n\n### Automatische Löschung nach einer Frist\n\n• 30 Tage: Bildschirmzeit und Nutzung pro App, Webverlauf, Videoverlauf, Standortverlauf und der Aktivitätsverlauf.\n• 90 Tage: SOS-Alarme und Sicherheits-Check-ins samt ihren Fotos und Tonaufnahmen; Anfragen nach zusätzlicher Zeit.\n• 365 Tage: Wochenberichte.\n• 90 Tage nach Erledigung der Anfrage: Supportanfragen, Antworten und daran angehängte Screenshots.\n• 12 Monate nach Abschluss einer Kontolöschung: ein Nachweis, dass die Löschung beantragt und abgeschlossen wurde, der nur einen Hash der E-Mail-Adresse und die Zeitpunkte enthält, damit eine bestrittene Löschung beantwortet werden kann.\n\nKopplungscodes verfallen innerhalb von Minuten. Eine Browser-Anmeldung gilt 7 Tage, wenn die App sie erteilt hat, und 8 Stunden, wenn sie mit der Eltern-PIN freigeschaltet wurde.\n\n### Aufbewahrung bis zur Löschung des Familienkontos\n\nFür die folgenden Daten gibt es derzeit keine eigene Löschfrist:\n\n• Das Konto und die Einstellungen der Familie.\n• Gespeicherte Orte.\n• Kind- und Gerätedatensätze.\n• Belohnungsaufgaben.\n• Anfragen zur Freigabe einer Website.\n• Die Sternetafel und der wöchentliche Bildschirmzeit-Verlauf.\n• Die Liste der installierten Apps und hinzugefügten Browsererweiterungen.\n\n### Ausnahmen\n\nEinige minimale Aufzeichnungen können länger aufbewahrt werden, soweit Gesetze, App-Store-Transaktionen, eine bestrittene Löschung oder die Betrugsprävention dies erfordern, und nur in dem Umfang, den dieser Zweck erfordert.',
      },
      {
        title: '12. Löschung eines Kontos',
        body: 'Ein Elternteil kann die Löschung in den Einstellungen oder per E-Mail an support@kidgate.app von der im Konto hinterlegten Adresse beantragen, wie unter kidgate.app/delete-account beschrieben.\n\nDer Antrag bleibt 14 Tage lang offen und kann in dieser Zeit zurückgenommen werden. Nach 14 Tagen werden das Familienkonto, jedes darin enthaltene Kind und Gerät sowie die dazugehörigen gespeicherten Dateien gelöscht, und die Anmeldung selbst wird entfernt. Die Löschung ist endgültig, und danach ist kein Export mehr möglich.\n\nEine abgeschlossene Löschung bedeutet nicht, dass jede zugehörige Aufzeichnung sofort verschwindet: Der Nachweis der Löschung und die in Abschnitt 11 genannten Ausnahmen bleiben für die dort genannten Fristen und in dem dort genannten Umfang erhalten.',
      },
      {
        title: '13. Rechte und Wahlmöglichkeiten',
        body: 'Je nach anwendbarem Recht können Nutzer Zugang, Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen, der Verarbeitung widersprechen und eine Einwilligung widerrufen, wenn die Verarbeitung auf einer Einwilligung beruht. Solche Anfragen, auch nach einer Kopie der Daten, die KidGate über eine Familie gespeichert hat, gehen an support@kidgate.app; einen Selbstbedienungs-Export gibt es derzeit nicht.\n\nDie Überwachung von Nachrichten und die KI-Bestätigung können jederzeit ausgeschaltet werden, ohne dass dies den übrigen Dienst berührt.\n\nStandort-, Benachrichtigungs-, Kamera-, Mikrofon- oder Geräteberechtigungen können im Betriebssystem entzogen werden. Die darauf angewiesenen Funktionen stellen dann ihren Betrieb ein oder bleiben unvollständig, und KidGate meldet dies auf dem Bildschirm des Elternteils, statt eine Steuerung anzuzeigen, die nicht mehr funktioniert.',
      },
      {
        title: '14. Daten von Kindern',
        body: 'KidGate verarbeitet Daten von Kindern nur gemäß der Konfiguration und Anweisung des Elternkontos, im Rahmen der von einem Elternteil eingeschalteten Funktionen und der erteilten Berechtigungen. Wurden Daten eines Kindes ohne die erforderliche Befugnis oder Einwilligung bereitgestellt, kann KidGate das Konto einschränken und die Daten nach Verifizierung löschen.',
      },
      {
        title: '15. Datenvorfälle',
        body: 'Wird ein Sicherheitsvorfall bestätigt, der Daten betrifft, bewertet KidGate den Vorfall, ergreift angemessene Abhilfemaßnahmen und benachrichtigt Nutzer oder Behörden, sofern gesetzlich vorgeschrieben. Eltern müssen ihr Konto, ihre PIN und ihre Geräte schützen und KidGate einen vermuteten unbefugten Zugriff umgehend melden.',
      },
      {
        title: '16. Änderungen und Kontakt',
        body: 'Diese Richtlinie kann sich ändern, wenn sich Funktionen oder Gesetze ändern. Wesentliche Aktualisierungen werden in der App oder über einen geeigneten Verbreitungsweg mitgeteilt.\n\nDatenschutzanfragen und Fragen gehen an support@kidgate.app, die Adresse, die auch in den App-Store-Einträgen von KidGate veröffentlicht ist.',
      },
    ],
  },
  termsOfService: {
    title: 'Nutzungsbedingungen',
    effectiveDate: 'Gültig ab 6. September 2026',
    intro:
      'Durch die Anmeldung bei oder die Nutzung von KidGate bestätigen Sie, dass Sie diese Bedingungen gelesen haben und ihnen zustimmen. KidGate ist der Produkt- und Handelsname, unter dem der Dienst betrieben wird.',
    sections: [
      {
        title: '1. Berechtigung',
        body: 'Sie müssen nach anwendbarem Recht alt genug sein, um einen Vertrag zu schließen, und über die gesetzliche Befugnis über jedes Kind, Konto und Gerät verfügen, das Sie verwalten. Nutzen Sie den Dienst nicht, wenn Sie diesen Bedingungen nicht zustimmen.',
      },
      {
        title: '2. Was KidGate ist und was nicht',
        body: 'KidGate stellt Werkzeuge bereit, die Eltern helfen, Geräte zu verwalten, Grenzwerte festzulegen, den Status einzusehen und Warnungen zu erhalten. KidGate ersetzt keine direkte Aufsicht, medizinische Beratung, Notfalldienste, Strafverfolgungsbehörden oder professionelle Kinderschutzdienste. SOS benachrichtigt Sie; es verständigt nicht die Rettungsdienste und funktioniert nicht, wenn das Gerät keine Netzverbindung hat.',
      },
      {
        title: '3. Software auf einem verwalteten Gerät',
        body: 'Die Durchsetzung einer Regel setzt Software auf dem Gerät voraus, für das sie gilt, und jede Plattform gewährt sie anders: das Bildschirmzeit-Framework von Apple auf iPhone und iPad, ein Bedienungshilfen-Dienst und eine Geräteadministrator-Freigabe unter Android, ein Bedienungshilfen-Dienst unter Android TV, eine Systemerweiterung und ein Hintergrundagent unter macOS, ein Hintergrunddienst unter Windows und eine Browsererweiterung in Chrome. Sie installieren diese Software selbst, auf einem Gerät, zu dessen Verwaltung Sie berechtigt sind, und Sie können sie jederzeit von diesem Gerät entfernen. Das Entfernen oder der Entzug einer Berechtigung, auf die sie angewiesen ist, beendet die Durchsetzung auf diesem Gerät — KidGate teilt Ihnen mit, dass es geschehen ist, kann es aber nicht verhindern.',
      },
      {
        title: '4. Pflichten der Eltern',
        body: 'Sie müssen Kindern einen angemessenen Hinweis geben, die erforderliche Einwilligung einholen, Berechtigungen korrekt konfigurieren, Funktionen testen und Datenschutz-, Überwachungs-, Arbeits-, Bildungs- und Kinderschutzgesetze einhalten. Die Überwachung von Nachrichten und die KI-Bestätigung sind jeweils eine gesonderte Zustimmung und Ihre Entscheidung — mit dem Hinweis, den diese Entscheidung in Ihrer Rechtsordnung erfordert. Verwenden Sie KidGate nicht für verdeckte Überwachung, Belästigung, rechtswidrige Kontrolle oder die Verletzung der Rechte einer anderen Person.',
      },
      {
        title: '5. Kontosicherheit und die Eltern-PIN',
        body: 'Sie sind verantwortlich für die Kontoaktivität und für den Schutz von Geräten, PINs und Anmeldeverfahren. Die Eltern-PIN schützt sensible Einstellungen auf einem Kindergerät und kann von einem Gerät nicht wiederhergestellt werden — sie wird als Einweg-Hash gespeichert. Melden Sie vermuteten unbefugten Zugriff umgehend. KidGate kann Konten oder Geräte vorübergehend einschränken, um Nutzer zu schützen oder Missbrauch zu untersuchen.',
      },
      {
        title: '6. Plattformberechtigungen und technische Einschränkungen',
        body: 'Funktionen hängen von Betriebssystemberechtigungen, Netzwerkzugang, Akkustatus, Herstellereinstellungen, Standortdiensten und Plattformen Dritter ab, und was jede Plattform zulässt, ist unterschiedlich. Manche Durchsetzung ist bauartbedingt nur bestmöglich — auf einem Computer wird eine blockierte App geschlossen, statt ihren Start zu verhindern — und KidGate benennt auf dem jeweiligen Bildschirm, welche das ist. Warnungen können verzögert, unvollständig oder ungenau sein. Sie müssen Geräte direkt überprüfen und dürfen sich für Sicherheit oder Notfälle nicht ausschließlich auf KidGate verlassen.',
      },
      {
        title: '7. Tarife, Testphase und kostenlose Stufe',
        body: 'Eine kostenlose Testphase mit vollem Zugriff beginnt, sobald Ihr erstes Eltern- und Kindergerät gekoppelt sind, und läuft für den in der App genannten Zeitraum. Danach laufen die von Ihnen eingerichteten Regeln auf einem Kindergerät ohne Bezahlung weiter — Tageslimit, Sperrzeiten, Blockierte Apps, Limits pro App, der Webfilter, die sichere Suche, die Gerätesperre, Anfragen nach zusätzlicher Zeit und Belohnungsaufgaben —, und ein Elternteil kann dieses Gerät weiterhin nach seiner aktuellen Position fragen, begrenzt auf einige Anfragen pro Tag. SOS steht niemals hinter einer Bezahlung. Live-Aktivität, Verlauf, Wochenberichte, der Standortverlauf, Adressen, Ortsbenachrichtigungen und die Überwachung von Nachrichten werden Teil von Premium. Hat eine Familie mehr Kindergeräte, als der Tarif abdeckt, werden die zusätzlichen Geräte pausiert: Sie setzen die bereits gesetzten Regeln weiter durch, diese Regeln können gelockert, aber nicht verschärft werden, und sie senden keine Aktivität mehr. Sie wählen aus, welches Gerät überwacht bleibt, und diese Wahl kann alle sieben Tage geändert werden. Das Entfernen eines Kindergeräts startet die Testphase nicht neu. Eine Familie kann nur eine begrenzte Anzahl von Kindergeräten gleichzeitig gekoppelt haben; die Zahl hängt vom Tarif ab, und die App nennt sie, sobald sie erreicht ist.',
      },
      {
        title: '8. Abonnements und Zahlungen',
        body: 'Käufe, Verlängerungen, Kündigungen und Rückerstattungen werden gemäß den Bedingungen des Apple App Store oder von Google Play abgewickelt, und ein Abonnement kann nur aus der KidGate-App für iPhone, iPad oder Android gekauft oder wiederhergestellt werden — eine Familie, deren Geräte ausschließlich Computer, Fernseher oder Chromebooks sind, braucht eines davon zum Bezahlen. Ein Abonnement deckt die ganze Familie ab, und nur die Familieninhaberin oder der Familieninhaber kann es kaufen oder wiederherstellen; ein Kaufversuch aus dem Konto eines anderen Elternteils wird abgelehnt. Monats- und Jahrestarife verlängern sich automatisch, sofern Sie nicht mindestens 24 Stunden vor Ablauf über den Store kündigen. Der Einmalkauf verlängert sich nicht, deckt die in der App genannte Anzahl von Kindergeräten ab und gilt, solange es KidGate gibt; Abschnitt 12 beschreibt, was geschieht, wenn das endet. Preise und Funktionen der Tarife können sich nach der gesetzlich vorgeschriebenen und den Store-Regeln entsprechenden Ankündigung ändern.',
      },
      {
        title: '9. Automatisierte und KI-generierte Inhalte',
        body: 'Die Zusammenfassungen der Wochenberichte, die Apps und Websites zugewiesenen Kategorien und der Bestätigungsschritt bei der Nachrichtenüberwachung werden von automatisierten Modellen erzeugt und können in beide Richtungen falsch sein: Eine Seite kann in der falschen Kategorie landen, eine Zusammenfassung kann eine Woche falsch darstellen, und eine Warnung kann bei einer harmlosen Nachricht auslösen oder bei einer schädlichen ausbleiben. Behandeln Sie all das als Anlass hinzusehen und nicht als Feststellung, und stützen Sie eine Entscheidung über ein Kind nicht allein darauf.',
      },
      {
        title: '10. Lizenz und Eigentum',
        body: 'KidGate gewährt eine beschränkte, persönliche, nicht ausschließliche, nicht übertragbare, widerrufliche Lizenz zur Nutzung der App gemäß diesen Bedingungen. Sie dürfen die App nicht weiterverkaufen, zurückentwickeln (Reverse Engineering), Schutzmaßnahmen umgehen, Daten automatisiert extrahieren oder Marken, Quellcode oder Inhalte über das gesetzlich Zulässige hinaus verwenden.',
      },
      {
        title: '11. Verbotenes Verhalten',
        body: 'Beeinträchtigen Sie keine Systeme, verbreiten Sie keine Schadsoftware, geben Sie sich nicht als andere Personen aus, greifen Sie nicht auf unbefugte Daten zu, überlasten Sie keine Dienste, umgehen Sie keine Begrenzungen, verursachen Sie keinen Schaden und verstoßen Sie nicht gegen geltendes Recht. KidGate kann den Zugang einschränken oder beenden, wenn begründet angenommen wird, dass ein Verstoß vorliegt.',
      },
      {
        title: '12. Verfügbarkeit und Änderungen',
        body: 'Der Dienst kann sich aufgrund von Wartung, Sicherheit, Plattformänderungen, Recht oder betrieblichen Erfordernissen ändern, pausiert oder eingestellt werden. KidGate kann eingestellt werden; in diesem Fall werden aktive Abonnements und der Einmalkauf gemäß den anwendbaren App-Store-Regeln behandelt — der Einmalkauf erwirbt den Dienst, solange er angeboten wird, und kein Versprechen, dass er für immer angeboten wird. KidGate strebt eine angemessene Verfügbarkeit an, verspricht jedoch keinen unterbrechungsfreien, fehlerfreien Betrieb oder Kompatibilität mit jedem Gerät.',
      },
      {
        title: '13. Haftungsausschlüsse',
        body: 'Soweit gesetzlich zulässig, wird der Dienst „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne stillschweigende Gewährleistungen der Marktgängigkeit, Eignung, Richtigkeit oder Nichtverletzung von Rechten Dritter. Nichts schließt zwingende Verbraucherrechte oder eine Haftung aus, deren Ausschluss gesetzlich nicht zulässig ist.',
      },
      {
        title: '14. Haftungsbeschränkung',
        body: 'Soweit gesetzlich zulässig, haftet KidGate nicht für indirekte, beiläufig entstandene, besondere, punitive Schäden, Datenverluste, entgangenen Gewinn oder entgangene Geschäftsmöglichkeiten, die sich aus der Nutzung oder der Unfähigkeit zur Nutzung des Dienstes ergeben. Die Gesamthaftung für Ansprüche im Zusammenhang mit dem Dienst übersteigt nicht den an KidGate in den 12 Monaten vor dem Ereignis gezahlten Betrag, sofern das Gesetz nichts anderes vorschreibt.',
      },
      {
        title: '15. Freistellung',
        body: 'Soweit gesetzlich zulässig, verpflichten Sie sich, KidGate von Ansprüchen Dritter freizustellen, die durch rechtswidrige Nutzung, unbefugte Überwachung, Verletzung der Rechte einer anderen Person oder Verstoß gegen diese Bedingungen verursacht werden. Dies gilt nicht für Schäden, die rechtlich unmittelbar KidGate zuzurechnen sind.',
      },
      {
        title: '16. Beendigung und Streitigkeiten',
        body: 'Sie können die Nutzung des Dienstes beenden und die Löschung des Kontos beantragen. Die Löschung bleibt 14 Tage lang offen und kann in diesem Zeitraum zurückgenommen werden; danach werden das Familienkonto und seine Daten endgültig entfernt. KidGate kann den Dienst wegen Verstößen, Sicherheitsrisiken oder rechtlicher Anforderungen aussetzen oder beenden. Die Parteien sollen zunächst nach Treu und Glauben versuchen, Streitigkeiten beizulegen, beginnend mit einer E-Mail an support@kidgate.app. Diese Bedingungen unterliegen dem Recht von Vietnam, und Streitigkeiten werden vor den zuständigen Gerichten in Vietnam ausgetragen, es sei denn, die zwingenden Verbraucherschutzvorschriften des Landes, in dem Sie leben, räumen Ihnen ein anderes anwendbares Recht oder einen anderen Gerichtsstand ein.',
      },
      {
        title: '17. Allgemeines',
        body: 'Sollte eine Bestimmung als nicht durchsetzbar erachtet werden, bleiben die übrigen Bestimmungen wirksam. Die Nichtdurchsetzung einer Bestimmung stellt keinen Verzicht auf diese dar. Diese Bedingungen bilden zusammen mit der Datenschutzerklärung und etwaigen Store-Bedingungen die gesamte Vereinbarung über den Dienst. KidGate kann diese Bedingungen im Rahmen einer Übertragung der App abtreten; Ihre Rechte nach zwingendem Recht bleiben davon unberührt.',
      },
      {
        title: '18. Software von Drittanbietern',
        body: 'KidGate enthält zwei Schriften, beide unter der SIL Open Font License 1.1: Plus Jakarta Sans von Tokotype und Baloo 2 von Ek Type. Die vertikalen Metriken von Baloo 2 sind auf die Zeilenhöhen dieser App neu geschnitten; Konturen und Familienname bleiben unverändert, und die Lizenz erlaubt diese Änderung. Keine der Schriften wird für sich verkauft. Quellen und Lizenz:',
        links: [
          {
            label: 'Plus Jakarta Sans auf GitHub',
            url: 'https://github.com/tokotype/PlusJakartaSans',
          },
          {
            label: 'Baloo 2 auf GitHub',
            url: 'https://github.com/EkType/Baloo2',
          },
          {
            label: 'SIL Open Font License 1.1',
            url: 'https://scripts.sil.org/OFL',
          },
        ],
      },
      {
        title: '19. Änderungen und Kontakt',
        body: 'Diese Bedingungen können aktualisiert werden. Wesentliche Änderungen werden in angemessener Weise mitgeteilt; die fortgesetzte Nutzung nach dem Datum des Inkrafttretens gilt, soweit gesetzlich zulässig, als Annahme der aktualisierten Bedingungen. Fragen gehen an support@kidgate.app.',
      },
    ],
  },
} as const;
