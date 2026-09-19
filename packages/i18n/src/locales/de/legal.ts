export const legal = {
  privacyPolicy: {
    title: 'Datenschutzerklärung',
    effectiveDate: 'Gültig ab 6. September 2026',
    intro:
      'KidGate ist der Produkt- und Handelsname, den der unabhängige Entwickler verwendet, der die App betreibt. Diese Richtlinie erläutert, wie KidGate mit Daten umgeht, wenn Eltern den Dienst nutzen, um das Gerät eines Kindes zu verwalten. Sie gilt für die KidGate-Apps für iPhone, iPad und Android, den KidGate-Agenten für macOS und Windows, die KidGate-Browsererweiterung, die Android-TV-App, das Eltern-Dashboard und die Website kidgate.app.',
    sections: [
      {
        title: '1. Geltungsbereich und elterliche Befugnis',
        body: 'Das Elternkonto konfiguriert Berechtigungen und verwaltet Kindergeräte. Kinder erstellen keine eigenen KidGate-Konten; ein Gerät wird ausschließlich über ein Elternkonto verwaltet. Ein Elternteil muss über das gesetzliche Sorgerecht oder eine gültige Befugnis verfügen, bevor ein Gerät überwacht oder verwaltet wird. KidGate darf nicht zur verdeckten Überwachung von Erwachsenen oder von Personen außerhalb der gesetzlichen Fürsorge des Elternteils verwendet werden.',
      },
      {
        title: '2. Von uns verarbeitete Daten',
        body: 'Was KidGate verarbeitet, hängt davon ab, welche Funktionen ein Elternteil einschaltet und welche Berechtigungen das Betriebssystem erteilt. Dazu können gehören: Kontokennungen und die Google-, Apple- oder E-Mail-Anmeldung, mit der das Elternkonto erstellt wurde; die Namen, die ein Elternteil den Kindern gibt, und die ihnen zugeordneten Geräte; Gerätename, Modell, Bauform, Betriebssystem- und App-Version, Akkustand und Kopplungsstatus; die Einstellungen selbst — Tageslimit, Sperrzeiten, Blockierte Apps, Limits pro App, Webfilter-Kategorien und die Eltern-PIN, die ausschließlich als Einweg-Hash gespeichert wird; Bildschirmzeit-Summen, eine Aufschlüsselung pro App und eine minutengenaue Aufzeichnung, wann das Gerät genutzt wurde; die auf dem Gerät installierten Apps und die dort hinzugefügten Browsererweiterungen; die Domains, die ein Kindergerät angefragt hat, und welche davon der Webfilter abgewiesen hat, gezählt nach Tag und nach Stunde; Titel und Kanalnamen abgespielter Videos, soweit die Plattform sie sichtbar macht; Standort, Standortverlauf, die von einem Elternteil gespeicherten Orte und Benachrichtigungen, wenn ein Gerät an einem davon ankommt oder ihn verlässt; SOS-Alarme, Sicherheits-Check-ins und das Foto, das ein Kind mit einem von beiden sendet; Name und E-Mail-Adresse jedes Vertrauenskontakts, den ein Elternteil hinzufügt, damit KidGate ihm jedes SOS per E-Mail zustellen kann; Warnungen, wenn ein Schutz ausgeschaltet wird, wenn eine App installiert wird, wenn die Nutzung ungewöhnlich wirkt — eine neue App oder Nutzung während der Sperrzeiten — oder wenn eine Nachricht oder eine Suche zu einer vom Elternteil aktivierten Stichwortliste passt; Anfragen nach zusätzlicher Zeit, Anfragen zur Freigabe einer Website, Belohnungsaufgaben und die Wochensummen der Sterne auf der Sternetafel; der Wochenbericht, der all das zusammenfasst; Supportnachrichten und ein daran angehängter Screenshot; Absturzberichte und technische Diagnosen; sowie die von einem App-Store gelieferten Abo-Transaktionsdaten. KidGate verlangt den echten Namen eines Kindes nicht, wenn eine Funktion ihn nicht braucht.',
      },
      {
        title: '3. Was auf dem Gerät des Kindes bleibt',
        body: 'Die Überwachung von Nachrichten und Suchanfragen läuft auf dem Gerät selbst, nur unter Android und nur, wenn ein Elternteil sie einschaltet. Das Gerät gleicht Text mit lokal gespeicherten Stichwortlisten ab; gesendet wird eine Warnung mit dem gefundenen Wort oder der gefundenen kurzen Wortfolge, der Kategorie, der App, in der der Treffer auftauchte, und der Uhrzeit. Die Nachricht selbst, der übrige Gesprächsverlauf und die Person, mit der er geführt wurde, werden nicht übertragen und von KidGate nicht gespeichert. Es gibt eine Ausnahme, und sie ist eine gesonderte Einwilligung: Hat ein Elternteil zusätzlich der KI-Bestätigung zugestimmt, wird eine eingehende Nachricht mit mehrdeutigem Stichworttreffer zur Beurteilung an das Gemini-Modell von Google gesendet, wobei E-Mail-Adressen, Telefonnummern und Webadressen vorher maskiert werden, damit ein Elternteil nicht wegen eines gewöhnlichen Wortes gewarnt wird. Nur das Urteil wird behalten; die Nachricht wird nach der Beurteilung verworfen. Text, den das Kind selbst schreibt, wird niemals zur KI-Bestätigung gesendet, unabhängig davon, wozu die Familie eingewilligt hat. Außerhalb dieses Wegs erfasst KidGate die Domain, die ein Gerät angefragt hat, und ob sie abgewiesen wurde — nicht die Adresse einer Seite oder deren Inhalt — und Dateien, Fotos und Surfverhalten, die keine aktivierte Funktion liest, bleiben auf dem Gerät.',
      },
      {
        title: '4. Wie Daten verwendet werden',
        body: 'Daten unterstützen Authentifizierung, Gerätekopplung, elterliche Kontrollen, Einstellungssynchronisierung, Warnungen, Berichte, Abonnements, Betrugsprävention, Kontosicherheit, Fehlerbehebung und Zuverlässigkeit. KidGate verkauft keine personenbezogenen Daten und verwendet keine Daten von Kindern für verhaltensbasierte Werbung. In keiner KidGate-App gibt es Werbung.',
      },
      {
        title: '5. Automatisierte Verarbeitung und KI',
        body: 'Drei Funktionen nutzen die Gemini-Modelle von Google, erreichbar über Google Cloud: die schriftliche Zusammenfassung des Wochenberichts, die aus den eigenen Nutzungszahlen einer Familie erzeugt wird; die Einordnung von Apps und Website-Domains in die Kategorien, die der Webfilter und die App-Listen verwenden, gespeichert in einer gemeinsamen Tabelle, die eine Domain und ihre Kategorie festhält, nicht aber, welche Familie sie besucht hat; und der in Abschnitt 3 beschriebene Bestätigungsschritt, der nur läuft, wenn ein Elternteil ihm zugestimmt hat. Diese Modelle liefern Einschätzungen, die falsch sein können. Eine Kategorie, ein Satz einer Zusammenfassung oder eine Nachrichtenwarnung ist ein Anlass hinzusehen und keine Tatsachenfeststellung, und KidGate trifft auf dieser Grundlage keine Entscheidung mit rechtlicher oder ähnlich erheblicher Wirkung für ein Kind. Die Ausgaben der Modelle werden nicht zum Training der Modelle von Google verwendet.',
      },
      {
        title: '6. Rechtsgrundlagen und Einwilligung',
        body: 'KidGate verarbeitet Daten, um angeforderte Dienste bereitzustellen, gesetzlichen Pflichten nachzukommen, berechtigte Sicherheitsinteressen zu schützen oder, sofern erforderlich, auf Grundlage einer Einwilligung. Eltern sind dafür verantwortlich, erforderliche Hinweise zu erteilen und eine gültige Einwilligung für ein Kind oder einen Gerätenutzer einzuholen. Die Überwachung von Nachrichten und die KI-Bestätigung sind jeweils eine gesonderte, ausdrückliche Zustimmung und können jederzeit widerrufen werden: Die Überwachung von Nachrichten wird pro Gerät eingeschaltet, und die KI-Bestätigung wird einmal für die Familie erteilt und mit der Angabe erfasst, wer wann zugestimmt hat.',
      },
      {
        title: '7. Dienstleister',
        body: 'KidGate baut auf Google Cloud und Firebase auf; von dort kommen Authentifizierung, Datenbank, Dateispeicher, die Serverfunktionen, Push-Benachrichtigungen über Firebase Cloud Messaging, Absturzberichte über Firebase Crashlytics und die in Abschnitt 5 genannten Gemini-Modelle. Apple und Google verarbeiten zudem Abo-Käufe, Verlängerungen und Rückerstattungen über ihre App-Stores, und Google Analytics verarbeitet die in Abschnitt 8 beschriebene Messung. Vier weitere Anbieter sehen jeweils nur eines: HERE Technologies wandelt eine gemeldete Position in eine Adresse um und zeichnet die Kartenkacheln hinter den Standortbildschirmen, erhält also die von einem Gerät gemeldeten Koordinaten; Resend stellt die E-Mails zu, die KidGate versendet — einen SOS-Alarm an einen Vertrauenskontakt und den Wochenbericht; Cloudflare liefert die Desktop-Installationsprogramme aus; und das Content-Netzwerk unpkg liefert die Kartenbibliothek an die Eltern-Apps. Daten werden diesen Anbietern nur offengelegt, soweit dies für den Betrieb des Dienstes erforderlich ist; gegenüber Behörden, sofern gesetzlich vorgeschrieben; oder um Sicherheits-, Betrugs- oder Missbrauchsfragen zu adressieren. Anbieter unterliegen eigenen Pflichten und Richtlinien, und keiner von ihnen ist von KidGate autorisiert, Daten von Kindern für eigenständiges Marketing zu verwenden.',
      },
      {
        title: '8. Website-Analyse und Cookies',
        body: 'Die Website kidgate.app misst mit Google Analytics drei Dinge: Seitenaufrufe sowie Klicks auf jeden der beiden Desktop-Download-Links. Die Analyse-Speicherung ist standardmäßig abgelehnt, sodass kein Analyse-Cookie gesetzt und nichts im Browser der lesenden Person abgelegt wird; jeder Besuch wird über eine cookielose Anfrage mit gekürzter IP-Adresse gezählt. Google Signals und Werbekennungen sind ausgeschaltet, und es wird nichts übermittelt, was eine lesende Person oder eine Familie identifiziert. Die KidGate-Apps melden eine kleine Zahl von Ereignissen an dieselbe Property, um zu zeigen, welche Funktionen genutzt werden; diese Ereignisse enthalten eine App-Instanz-Kennung — niemals die Werbekennung des Geräts, die die Apps nicht erfassen — und niemals den Namen, eine Nachricht, den Standort oder das Surfverhalten eines Kindes. Die Apps und die Website verwenden kein Werbe- oder Tracking-Netzwerk jeglicher Art.',
      },
      {
        title: '9. Wo Daten gespeichert werden und wie sie geschützt sind',
        body: 'Familiendaten werden in der Region Singapur von Google Cloud gespeichert und können von den in Abschnitt 7 genannten Anbietern andernorts verarbeitet werden; damit können sie das Land verlassen, in dem eine Familie lebt. KidGate setzt angemessene technische und organisatorische Schutzmaßnahmen ein, einschließlich Zugriffskontrollen, dem Prinzip der geringsten Berechtigung, serverseitiger Regeln, die jeden Lesezugriff auf eine einzige Familie begrenzen, und sicherer Übertragung. Die Eltern-PIN wird ausschließlich als Einweg-Hash gespeichert und kann nicht zurückgelesen werden. Kein System ist vollständig sicher; KidGate kann nicht garantieren, dass Daten niemals verloren gehen, unbefugt abgerufen oder unterbrochen werden.',
      },
      {
        title: '10. Supportzugriff durch KidGate-Mitarbeiter',
        body: 'Soweit es zur Bearbeitung einer Supportanfrage oder zur Diagnose eines Fehlers erforderlich ist, können autorisierte KidGate-Mitarbeiter ein Familienkonto öffnen und sehen, was ein Elternteil sieht: dessen Konfiguration und Geräte sowie die darin enthaltenen Aktivitäten — einschließlich Standortverlauf, Webverlauf, Nachrichtenwarnungen und Fotos, die einem SOS oder einem Check-in beigefügt sind. Sie können außerdem Einstellungen ändern und Gerätebefehle auslösen. Dieser Zugriff ist auf autorisierte Personen beschränkt, erfordert eine Zwei-Faktor-Authentifizierung und dient ausschließlich Supportzwecken. Das Öffnen eines Familienkontos schreibt einen Eintrag in den Aktivitätsverlauf dieser Familie, sichtbar für ihre Eltern, mit Zeitpunkt und der zugehörigen Supportanfrage; jeder Lesezugriff auf die Datensätze einer Familie über die Betreiberwerkzeuge wird mit Zeitpunkt und angegebenem Grund protokolliert. Einzelne Handlungen innerhalb einer Supportsitzung werden derzeit nicht gesondert protokolliert.',
      },
      {
        title: '11. Wie lange Daten aufbewahrt werden',
        body: 'Aufzeichnungen laufen nach einem festen Zeitplan ab und werden automatisch gelöscht: Bildschirmzeit und Nutzung pro App, Webverlauf, Videoverlauf, Standortverlauf und der Aktivitätsverlauf nach 30 Tagen; SOS-Alarme, Sicherheits-Check-ins und Anfragen nach zusätzlicher Zeit nach 90 Tagen; Wochenberichte nach 365 Tagen. Kopplungscodes verfallen innerhalb von Minuten, und eine Browser-Anmeldung gilt 7 Tage, wenn die App sie erteilt hat, und 8 Stunden, wenn sie mit der Eltern-PIN freigeschaltet wurde. Einige Aufzeichnungen haben derzeit kein Ablaufdatum und bleiben bis zur Löschung des Familienkontos erhalten: das Konto und seine Einstellungen, gespeicherte Orte, Kind- und Gerätedatensätze, Belohnungsaufgaben, Anfragen zur Freigabe einer Website, die Sternetafel und der wöchentliche Bildschirmzeit-Verlauf sowie die Liste der auf jedem Gerät installierten Apps. Supportanfragen, Antworten und daran angehängte Screenshots werden 90 Tage nach Erledigung der Anfrage gelöscht. Ein Nachweis, dass eine Kontolöschung beantragt und abgeschlossen wurde — ein Hash der E-Mail-Adresse und die beiden Zeitpunkte, sonst nichts —, wird 12 Monate nach Abschluss aufbewahrt, damit eine bestrittene Löschung beantwortet werden kann. Begrenzte Aufzeichnungen können außerdem verbleiben, soweit dies gesetzlich vorgeschrieben ist oder zur Betrugsprävention oder für App-Store-Transaktionen erforderlich ist.',
      },
      {
        title: '12. Löschung eines Kontos',
        body: 'Ein Elternteil kann die Löschung in den Einstellungen, über kidgate.app oder per E-Mail an support@kidgate.app von der im Konto hinterlegten Adresse beantragen. Der Antrag bleibt 14 Tage lang offen und kann in dieser Zeit zurückgenommen werden; danach werden das Familienkonto, jedes darin enthaltene Kind und Gerät sowie die dazugehörigen gespeicherten Dateien gelöscht, und die Anmeldung selbst wird entfernt. Die Löschung ist endgültig, und danach ist kein Export mehr möglich.',
      },
      {
        title: '13. Rechte und Wahlmöglichkeiten',
        body: 'Je nach anwendbarem Recht können Nutzer Zugang, Berichtigung, Löschung, Einschränkung, Widerspruch oder Widerruf der Einwilligung verlangen. Solche Anfragen, auch nach einer Kopie der über eine Familie gespeicherten Daten, gehen an support@kidgate.app; einen Selbstbedienungs-Export gibt es derzeit nicht. Die Überwachung von Nachrichten und die KI-Bestätigung können jederzeit ausgeschaltet werden, ohne dass dies den übrigen Dienst berührt. Standort-, Benachrichtigungs-, Kamera- und Geräteberechtigungen können im Betriebssystem deaktiviert werden, die darauf angewiesenen Funktionen stellen dann jedoch ihren Betrieb ein oder bleiben unvollständig; KidGate meldet auf dem Bildschirm des Elternteils, dass dies geschehen ist, statt eine Steuerung anzuzeigen, die nicht mehr funktioniert.',
      },
      {
        title: '14. Daten von Kindern',
        body: 'KidGate verarbeitet Daten von Kindern nur gemäß der Konfiguration und Anweisung des Elternkontos. Wurden Daten eines Kindes ohne die erforderliche Befugnis oder Einwilligung bereitgestellt, kann KidGate das Konto einschränken und die Daten nach Verifizierung löschen.',
      },
      {
        title: '15. Datenvorfälle',
        body: 'KidGate bewertet bestätigte Sicherheitsvorfälle, ergreift angemessene Abhilfemaßnahmen und benachrichtigt Nutzer oder Behörden, sofern gesetzlich vorgeschrieben. Eltern müssen Konten, PINs und Geräte schützen und einen vermuteten unbefugten Zugriff umgehend melden.',
      },
      {
        title: '16. Änderungen und Kontakt',
        body: 'Diese Richtlinie kann sich ändern, wenn sich Funktionen oder Gesetze ändern. Wesentliche Aktualisierungen werden in der App oder über einen geeigneten Verbreitungsweg mitgeteilt. Datenschutzanfragen und Fragen gehen an support@kidgate.app, die Adresse, die auch in den App-Store-Einträgen von KidGate veröffentlicht ist.',
      },
    ],
  },
  termsOfService: {
    title: 'Nutzungsbedingungen',
    effectiveDate: 'Gültig ab 6. September 2026',
    intro:
      'Durch die Anmeldung bei oder die Nutzung von KidGate bestätigen Sie, dass Sie diese Bedingungen gelesen haben und ihnen zustimmen. KidGate ist der Produkt- und Handelsname, den der unabhängige Entwickler verwendet, der den Dienst betreibt.',
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
        body: 'Eine kostenlose Testphase mit vollem Zugriff beginnt, sobald Ihr erstes Eltern- und Kindergerät gekoppelt sind, und läuft für den in der App genannten Zeitraum. Danach laufen die von Ihnen eingerichteten Regeln auf einem Kindergerät ohne Bezahlung weiter — Tageslimit, Sperrzeiten, Blockierte Apps, Limits pro App, der Webfilter, die sichere Suche, die Gerätesperre, Anfragen nach zusätzlicher Zeit, Belohnungsaufgaben und die Überwachung von Nachrichten —, und ein Elternteil kann dieses Gerät weiterhin nach seiner aktuellen Position fragen, begrenzt auf einige Anfragen pro Tag. SOS steht niemals hinter einer Bezahlung. Live-Aktivität, Verlauf, Wochenberichte, der Standortverlauf, Adressen und Ortsbenachrichtigungen werden Teil von Premium. Hat eine Familie mehr Kindergeräte, als der Tarif abdeckt, werden die zusätzlichen Geräte pausiert: Sie setzen die bereits gesetzten Regeln weiter durch, diese Regeln können gelockert, aber nicht verschärft werden, und sie senden keine Aktivität mehr. Sie wählen aus, welches Gerät überwacht bleibt, und diese Wahl kann alle sieben Tage geändert werden. Das Entfernen eines Kindergeräts startet die Testphase nicht neu. Eine Familie kann über die Lebensdauer des Kontos nur eine begrenzte Anzahl von Kindergeräten koppeln; die Zahl hängt vom Tarif ab, die App nennt sie, sobald sie erreicht ist, und ein entferntes Gerät zählt weiterhin mit.',
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
        body: 'Der Dienst kann sich aufgrund von Wartung, Sicherheit, Plattformänderungen, Recht oder betrieblichen Erfordernissen ändern, pausiert oder eingestellt werden. KidGate wird von einem unabhängigen Entwickler betrieben und kann eingestellt werden; in diesem Fall werden aktive Abonnements und der Einmalkauf gemäß den anwendbaren App-Store-Regeln behandelt — der Einmalkauf erwirbt den Dienst, solange er angeboten wird, und kein Versprechen, dass er für immer angeboten wird. KidGate strebt eine angemessene Verfügbarkeit an, verspricht jedoch keinen unterbrechungsfreien, fehlerfreien Betrieb oder Kompatibilität mit jedem Gerät.',
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
