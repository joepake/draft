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
  lockStateNotChecked: 'Noch nicht geprüft',
  lockStateParent: 'Ja — von einem Elternteil gesperrt',
  lockStateSchedule: 'Ja — Sperrzeiten',
  lockStateDailyLimit: 'Ja — Tageslimit erreicht',

  appBlocking: 'App-Blockierung',
  appBlockingBestEffort:
    'Bestmöglich — Apps werden nach dem Öffnen geschlossen, nicht am Start gehindert',

  webFilterLabel: 'Webfilter',
  webFilterUnavailable: 'Auf diesem Mac nicht verfügbar',
  notSupportedOnThisDevice: 'Auf diesem Gerät nicht unterstützt',

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
