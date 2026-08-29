/**
 * Das eigene Fenster des Desktop-Agents (macOS und Windows).
 * Schlüssel-für-Schlüssel-Kontext: siehe en/macos.ts.
 */
export const macos = {
  headingNow: 'Aktuell',
  headingEnforce: 'Was dieser Mac durchsetzen kann',
  headingEnforceHint:
    'Was deine Eltern festgelegt haben und wie stark dieser Mac es halten kann.',
  headingRemovable: 'Wie leicht sich das entfernen lässt',

  parentAccessBody:
    'Eltern-PIN eingeben, um festzulegen, welche Apps auf diesem Mac blockiert werden.',
  checking: 'Wird geprüft…',

  enforcing: 'Schutz aktiv',
  enforcingYes: 'Ja',
  enforcingFailed: 'Nein — {{count}} Prüfungen in Folge fehlgeschlagen',
  enforcingFailed_one: 'Nein — die letzte Prüfung ist fehlgeschlagen',

  lockState: 'Gerät gesperrt',
  lockStateNo: 'Nein',
  stateNotChecked: 'Noch nicht geprüft',
  lockStateParent: 'Ja — von einem Elternteil gesperrt',
  lockStateSchedule: 'Ja — Sperrzeiten',
  lockStateDailyLimit: 'Ja — Tageslimit erreicht',

  appBlocking: 'App-Blockierung',
  appBlockingBestEffort:
    'Bestmöglich — Apps werden nach dem Öffnen geschlossen, nicht am Start gehindert',

  webFilterLabel: 'Webfilter',
  webFilterUnavailable: 'Auf diesem Mac nicht verfügbar',
  notSupportedOnThisDevice: 'Auf diesem Gerät nicht unterstützt',
  filterAwaitingApproval: 'Wartet auf Freigabe in den Systemeinstellungen',
  filterSwitchedOff: 'In den Systemeinstellungen deaktiviert',
  filterInterrupted: 'Nach einem Problem gestoppt — KidGate stellt ihn wieder her',
  setupFilterApprovalBody:
    'Aktiviere KidGate unter Netzwerkerweiterungen, damit die Webfilterung starten kann.',
  setupFilterSwitchBody:
    '„Filter Network Content“ ist für KidGate ausgeschaltet. Schalte es wieder ein, um weiter zu filtern.',
  setupOpenSettings: 'Einstellungen öffnen',
  setupTitle: 'Einrichtung dieses Geräts abschließen',
  setupRowLabel: 'Berechtigungen',
  setupRowHint: 'Prüfe, was auf diesem Gerät noch erlaubt werden muss.',
  setupStepBlockedNoPrompt:
    'Abgelehnt, und dieses Gerät zeigt keine erneute Abfrage – aktiviere KidGate unter Einstellungen → Datenschutz & Sicherheit.',
  setupSubtitle:
    'Das System fragt für jeden dieser Punkte um Erlaubnis, und nur wer gerade an diesem Gerät sitzt, kann zustimmen. Wenn du das jetzt erledigst, wird dein Kind später nicht gefragt.',
  setupStepFilterApprovalTitle: 'Webfilter freigeben',
  setupStepFilterSwitchTitle: 'Filter Network Content',
  setupStepFilterSwitchWaiting:
    'Erscheint in den Systemeinstellungen, sobald der Schritt darüber freigegeben ist.',
  setupStepLocationBody:
    'Zeigt deiner Familie, wo dieses Gerät ist. Geteilt wird nichts, solange „Standort teilen“ aus ist.',
  setupStepCameraTitle: 'Kamera',
  setupStepCameraBody:
    'Hängt ein Foto an, wenn dein Kind einen SOS sendet oder auf einen Check-in antwortet. Jetzt wird kein Foto aufgenommen.',
  setupStepDone: 'Eingerichtet – hier ist nichts mehr zu tun.',
  setupStepBlocked:
    'Zuvor abgelehnt. macOS fragt nur einmal – aktiviere KidGate unter „Datenschutz & Sicherheit“.',

  scheduleLabel: 'Sperrzeiten',
  dailyLimitLabel: 'Tageslimit',
  enforcedHere: 'An, durchgesetzt von KidGate',

  screenTimeLabel: 'Bildschirmzeit',
  screenTimeAgentMeasured:
    'Von KidGate gezählt. Zeit, in der KidGate nicht läuft, wird nicht gezählt.',

  batteryLabel: 'Batterie',
  batteryReported: 'Wird der Familie gemeldet',
  batteryNone: 'Dieser Mac hat keine Batterie',

  locationLabel: 'Standort',
  locationOff: 'Aus',
  locationCoarse: 'Ungefähr — über WLAN, nicht GPS',

  accountLabel: 'Kinderkonto',
  accountStandard: 'Standard',
  accountAdmin: 'Administrator — dieses Konto kann KidGate vollständig abschalten',

  restartLabel: 'Startet nach dem Schließen neu',
  restartYes: 'Ja',
  restartNo: 'Nein — die Einrichtung ist nicht abgeschlossen',

  forceQuitLabel: 'Wie oft KidGate geschlossen wurde',

  startAtLoginSectionTitle: 'Autostart',
  startAtLoginSectionDescription:
    'KidGate misst Bildschirmzeit und setzt Regeln nur durch, während es läuft.',
  startAtLoginLabel: 'KidGate beim Anmelden starten',
  startAtLoginHintOn:
    'KidGate startet mit diesem Gerät und öffnet sich nach dem Schließen erneut.',
  startAtLoginHintOff:
    'Bis KidGate wieder geöffnet wird, wird nichts gemessen oder blockiert.',
  startAtLoginUnavailable:
    'Dieses Gerät hat KidGate nicht erlaubt, sich zum Autostart hinzuzufügen.',

  stillRunningTitle: 'KidGate läuft weiter',
  stillRunningBodyMac: 'Über das KidGate-Symbol in der Menüleiste wieder öffnen.',
  stillRunningBodyWindows: 'Über das KidGate-Symbol im Infobereich wieder öffnen.',

  updateAvailableTitle: 'Eine neuere KidGate-Version ist verfügbar',
  updateAvailableBody: 'KidGate {{version}} steht zum Download bereit.',
  updateAction: 'Update holen',

  chooseApps: 'Apps zum Blockieren auswählen',
  chooseAppsHint:
    'Die Apps auswählen, die auf diesem Mac blockiert werden. Ein Elternteil kann die Blockierung vom Telefon aus ein- und ausschalten.',
  saveSelection: 'Speichern',
  noAppsFound: 'Keine Apps im Ordner Applications gefunden.',
};
