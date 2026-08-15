// errors.ts (Italiano)

export const errors = {
  timeRequestAlreadyResolved:
    'Questa richiesta è già stata gestita da un altro genitore.',
  emailAlreadyInUse: 'Questo indirizzo email è già registrato.',
  invalidEmail: 'Indirizzo email non valido.',
  weakPassword: 'La password deve contenere almeno 6 caratteri.',
  invalidEmailOrPassword: 'Email o password non valide.',
  tooManyRequests: 'Troppi tentativi. Riprova più tardi.',
  somethingWentWrong: 'Si è verificato un errore. Riprova.',
  unableToCreateAccount: 'Impossibile creare il tuo account. Riprova.',
  unableToSignIn: 'Impossibile accedere. Riprova.',
  unableToJoinFamilyAccount: 'Impossibile entrare nell’account famiglia. Riprova.',
  enterEmailAddress: 'Inserisci il tuo indirizzo email.',
  unableToCreatePairingCode: 'Impossibile creare un codice di associazione. Riprova.',
  unableToRedeemPairingCode: 'Il codice di associazione non è valido oppure è scaduto.',
  unableToClaimChildPairing:
    'Impossibile collegare il dispositivo del bambino. Riprova.',
  unableToPollChildPairing: 'Impossibile verificare lo stato dell’associazione.',
  unableToConfirmChildPairing: 'Impossibile confermare questa associazione. Riprova.',
  unableToRejectChildPairing: 'Impossibile rifiutare questa associazione. Riprova.',
  photoCaptureCancelled: 'Acquisizione della foto annullata.',
  unableToOpenCamera:
    'Impossibile aprire la fotocamera. Consenti l’accesso alla fotocamera nelle impostazioni del dispositivo.',
  noPhotoCaptured: 'Nessuna foto acquisita.',
  simulatorCameraHint:
    'Nel simulatore, abilita prima una fotocamera: Simulator → Camera → Front Camera, quindi riprova SOS. Per una foto reale, prova su un iPhone fisico.',
  notSignedInReopenApp:
    'Non hai effettuato l’accesso. Chiudi e riapri l’app, quindi riprova.',
  accountMismatchSignOut: 'L’account non corrisponde. Esci e accedi di nuovo.',
  storageUploadUnauthorized:
    'Impossibile caricare la foto in questo momento. Riprova tra poco.',
  storageNotSetup: 'Impossibile caricare la foto in questo momento. Riprova tra poco.',
  noNetworkConnection:
    'Nessuna connessione di rete. Controlla il Wi-Fi o la connessione dati e riprova.',
  connectionFailedTitle: 'Connessione non riuscita',
  connectionFailedBody:
    'KidGate non è riuscito a connettersi. Controlla il Wi-Fi o la connessione dati, quindi seleziona Riconnetti.',
  reconnect: 'Riconnetti',
  unableToUploadPhoto: 'Impossibile caricare la foto. Riprova.',
  premiumSubscriptionRequired:
    'Questa funzione richiede Premium. Limite giornaliero, Orari di blocco, posizione e SOS restano gratuiti.',
  trialEndedCannotJoinFamily:
    'Il periodo di prova gratuito è terminato. Abbonati a Premium per unirti a un’altra famiglia.',

  notFamilyMember:
    'Non fai più parte di questa famiglia. Chiedi al proprietario della famiglia di invitarti nuovamente.',
  familyNotCreated: 'Crea prima la tua famiglia, poi invita un altro genitore.',
  childDeviceNotAllowed:
    'Questo è un dispositivo per bambini e non può gestire le impostazioni della famiglia.',
  deviceCredentialMissing:
    'Questo dispositivo deve essere ricollegato. Chiudi e riapri KidGate, quindi riprova.',
  deviceNotFound: 'Questo dispositivo non appartiene più alla tua famiglia.',
  registerParentDeviceFirst:
    'Configura prima questo dispositivo come dispositivo genitore, quindi riprova.',
  pairingCodeFormat: 'Inserisci il codice di 6 caratteri.',
  pairingCodeUsed: 'Questo codice è già stato utilizzato. Richiedine uno nuovo.',
  pairingCodeExpiredChild:
    'Questo codice è scaduto. Chiedi a tuo figlio di generarne uno nuovo.',
  pairingCodeExpiredParent:
    'Questo codice è scaduto. Chiedi un nuovo codice all’altro genitore.',
  pairingOwnFamily: 'Questa è già la tua famiglia: non è necessario unirsi.',
  pairingSessionNotFound: 'Questa richiesta di associazione non è più disponibile.',
  pairingAlreadyCompleted: 'Questo dispositivo è già associato.',
  pairingDeclined:
    'La richiesta di associazione è stata rifiutata sull’altro dispositivo.',
  pairingNoParentWaiting:
    'Nessun genitore è in attesa di conferma. Avvia di nuovo l’associazione dal dispositivo del genitore.',
  pairingRequestExpired: 'La richiesta di associazione è scaduta. Ricomincia.',
  joinRequestNotFound: 'Questa richiesta di adesione non è più disponibile.',
  joinRequestResolved: 'Questa richiesta di adesione ha già ricevuto una risposta.',
  joinRequestExpired: 'La richiesta di adesione è scaduta. Richiedi un nuovo invito.',
  timeRequestPendingExists: 'Hai già una richiesta in attesa di risposta.',
  timeRequestCooldown: 'Attendi qualche istante prima di inviare un’altra richiesta.',
  deviceClockOutOfRange:
    'La data e l’ora di questo dispositivo sembrano non essere corrette. Impostale per l’aggiornamento automatico.',
  locationSharingDisabled:
    'La condivisione della posizione è disattivata su questo dispositivo. Attivala nelle impostazioni del dispositivo e riprova.',
  childDeviceNoPushToken:
    'Questo dispositivo del bambino non può ancora ricevere richieste. Apri KidGate sul dispositivo del bambino e consenti le notifiche.',
  unableToRequestLocation:
    'Impossibile richiedere una posizione aggiornata in questo momento. Riprova.',
  unableToVerifyPurchase: 'Impossibile verificare questo acquisto. Riprova tra poco.',
  noPurchasesToRestore: 'Non ci sono acquisti da ripristinare per questo account.',
  noActiveSubscription: 'Nessun abbonamento attivo trovato per questo account.',
  unableToRestorePurchases:
    'Impossibile ripristinare gli acquisti in questo momento. Riprova.',
  alreadyInFamily: 'Fai già parte di questa famiglia.',
  leaveFamilyBeforeJoining:
    'Esci dalla tua famiglia attuale prima di unirti a un’altra.',
  deviceLimitReached:
    'Questo piano copre un dispositivo. Abbonati per aggiungerne un altro.',
};
