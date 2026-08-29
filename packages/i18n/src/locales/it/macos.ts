/**
 * La finestra dell’agente desktop (macOS e Windows).
 * Contesto chiave per chiave: vedi en/macos.ts.
 */
export const macos = {
  headingNow: 'In questo momento',
  headingEnforce: 'Cosa può applicare questo Mac',
  headingEnforceHint:
    'Cosa hanno impostato i tuoi genitori e con quanta forza questo Mac può mantenerlo.',
  headingRemovable: 'Quanto è facile da rimuovere',

  parentAccessBody:
    'Inserisci il PIN genitore per scegliere quali app bloccare su questo Mac.',
  checking: 'Controllo…',

  enforcing: 'Protezione attiva',
  enforcingYes: 'Sì',
  enforcingFailed: 'No — {{count}} controlli di fila non riusciti',
  enforcingFailed_one: 'No — l’ultimo controllo non è riuscito',

  lockState: 'Dispositivo bloccato',
  lockStateNo: 'No',
  stateNotChecked: 'Non ancora controllato',
  lockStateParent: 'Sì — bloccato da un genitore',
  lockStateSchedule: 'Sì — Orari di blocco',
  lockStateDailyLimit: 'Sì — Limite giornaliero raggiunto',

  appBlocking: 'Blocco delle app',
  appBlockingBestEffort:
    'Al meglio — le app vengono chiuse dopo l’apertura, non impedite prima',

  webFilterLabel: 'Filtro web',
  webFilterUnavailable: 'Non disponibile su questo Mac',
  notSupportedOnThisDevice: 'Non supportato su questo dispositivo',
  filterAwaitingApproval: 'In attesa di approvazione in Impostazioni di Sistema',
  filterSwitchedOff: 'Disattivato in Impostazioni di Sistema',
  filterInterrupted: 'Interrotto dopo un problema: KidGate lo ripristinerà',
  setupFilterApprovalBody:
    'Attiva KidGate in Estensioni di rete per avviare il filtro web.',
  setupFilterSwitchBody:
    'Filter Network Content è disattivato per KidGate. Riattivalo per continuare a filtrare.',
  setupOpenSettings: 'Apri Impostazioni',
  setupTitle: 'Completa la configurazione di questo dispositivo',
  setupRowLabel: 'Autorizzazioni',
  setupRowHint: 'Controlla che cosa resta da consentire su questo dispositivo.',
  setupStepBlockedNoPrompt:
    'Rifiutato, e questo dispositivo non lo richiede più: attiva KidGate in Impostazioni → Privacy e sicurezza.',
  setupSubtitle:
    'Il sistema chiede il permesso per ognuna di queste voci e solo chi sta usando questo dispositivo può darlo. Farlo ora evita che la richiesta arrivi a tuo figlio o tua figlia più avanti.',
  setupStepFilterApprovalTitle: 'Approva il filtro web',
  setupStepFilterSwitchTitle: 'Filter Network Content',
  setupStepFilterSwitchWaiting:
    'Compare in Impostazioni di Sistema una volta approvato il passaggio qui sopra.',
  setupStepLocationBody:
    'Permette alla tua famiglia di vedere dov’è questo dispositivo. Non viene condiviso nulla finché non attivi «Condividi posizione».',
  setupStepCameraTitle: 'Fotocamera',
  setupStepCameraBody:
    'Allega una foto quando tuo figlio o tua figlia invia un SOS o risponde a un Check-in. Adesso non viene scattata nessuna foto.',
  setupStepDone: 'Configurato: qui non c’è altro da fare.',
  setupStepBlocked:
    'Rifiutato in precedenza. macOS lo chiede una sola volta: attiva KidGate in «Privacy e sicurezza».',

  scheduleLabel: 'Orari di blocco',
  dailyLimitLabel: 'Limite giornaliero',
  enforcedHere: 'Attivo, applicato da KidGate',

  screenTimeLabel: 'Tempo di utilizzo',
  screenTimeAgentMeasured:
    'Conteggiato da KidGate. Il tempo in cui KidGate non è in esecuzione non viene contato.',

  batteryLabel: 'Batteria',
  batteryReported: 'Comunicata alla famiglia',
  batteryNone: 'Questo Mac non ha una batteria',

  locationLabel: 'Posizione',
  locationOff: 'Disattivata',
  locationCoarse: 'Approssimativa — dal Wi-Fi, non dal GPS',

  accountLabel: 'Account del bambino',
  accountStandard: 'Standard',
  accountAdmin: 'Amministratore — questo account può disattivare completamente KidGate',

  restartLabel: 'Si riapre se viene chiuso',
  restartYes: 'Sì',
  restartNo: 'No — la configurazione non è completata',

  forceQuitLabel: 'Volte in cui KidGate è stato chiuso',

  startAtLoginSectionTitle: 'Avvio',
  startAtLoginSectionDescription:
    'KidGate misura il tempo di utilizzo e applica le regole solo mentre è in esecuzione.',
  startAtLoginLabel: 'Apri KidGate all’accesso',
  startAtLoginHintOn:
    'KidGate si avvia con questo dispositivo e si riapre se viene chiuso.',
  startAtLoginHintOff:
    'Non viene misurato né bloccato nulla finché qualcuno non riapre KidGate.',
  startAtLoginUnavailable:
    'Questo dispositivo non ha permesso a KidGate di aggiungersi all’avvio.',

  stillRunningTitle: 'KidGate è ancora in esecuzione',
  stillRunningBodyMac: 'Riaprilo dall’icona di KidGate nella barra dei menu.',
  stillRunningBodyWindows: 'Riaprilo dall’icona di KidGate nell’area di notifica.',

  updateAvailableTitle: 'È disponibile una versione più recente di KidGate',
  updateAvailableBody: 'KidGate {{version}} è pronto per il download.',
  updateAction: 'Ottieni l’aggiornamento',

  chooseApps: 'Scegli le app da bloccare',
  chooseAppsHint:
    'Scegli le app da bloccare su questo Mac. Un genitore può attivare o disattivare il blocco dal proprio telefono.',
  saveSelection: 'Salva',
  noAppsFound: 'Nessuna app trovata nella cartella Applications.',
};
