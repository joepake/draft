export const pin = {
  title: 'PIN genitore',
  subtitleSet: 'Tocca per cambiare il tuo PIN a 6 cifre',
  subtitleNotSet:
    'Crea un PIN a 6 cifre per proteggere la configurazione sui dispositivi dei bambini',
  statusSet: 'Impostato',
  statusNotSet: 'Non impostato',
  unlockChildPinTitle: 'Sblocca il PIN su {{deviceName}}',
  unlockChildPinSubtitle:
    'Azzera i tentativi di PIN errati su questo dispositivo del bambino',
  statusLocked: 'Bloccato',
  toastPinUnlocked: 'PIN sbloccato su {{deviceName}}.',
  toastPinUnlockFailed: 'Impossibile sbloccare il PIN del bambino. Riprova.',
  toastPinSaved:
    'PIN genitore salvato. Usalo sui dispositivi dei bambini prima di modificare le App bloccate.',
  createParentPin: 'Crea PIN genitore',
  changeParentPin: 'Cambia PIN genitore',
  parentPinSetupSubtitle:
    'Un PIN a 6 cifre protegge la configurazione delle App bloccate sui dispositivi dei bambini.',
  parentPinSetupHelper:
    'I dispositivi dei bambini richiederanno questo PIN prima di modificare quali app sono bloccate.',
  parentPinMismatch: 'I nuovi PIN inseriti non corrispondono.',
  unableToSaveParentPin: 'Impossibile salvare il PIN genitore. Riprova.',
  onlyOwnerCanManageChildPin:
    'Solo il proprietario della famiglia può creare o modificare il PIN genitore usato sui dispositivi dei bambini.',
  parentPinRequired: 'PIN genitore richiesto',
  enterParentPinToContinue: 'Inserisci il PIN genitore a 6 cifre per continuare.',
  parentPinLockoutMessage:
    'Troppi tentativi errati. Chiedi a un genitore di sbloccare il PIN dalle Impostazioni genitore.',
  parentPinHelperText:
    'Solo un genitore può modificare le app bloccate o uscire — a questo serve il PIN. Se lo dimentichi, un genitore può accedere a KidGate su qualsiasi dispositivo e reimpostarlo nelle Impostazioni genitore.',
  forgotPin: 'Hai dimenticato il PIN?',
  resetPinNotice:
    'Stai reimpostando il PIN come proprietario dell’account. Da ora in poi, i dispositivi dei bambini richiederanno il nuovo PIN.',
  unableToVerifyParentPin: 'Il PIN genitore non è corretto. Riprova.',
  parentPinGateSubtitle:
    'Inserisci il PIN genitore a 6 cifre per modificare le impostazioni.',
  parentPinMustBeSixDigits: 'Il PIN genitore deve essere di esattamente 6 cifre.',
  pinSixDigits: 'PIN (6 cifre)',
  attemptsRemaining: '{{count}} tentativi rimasti.',
  attemptsRemaining_one: '{{count}} tentativo rimasto.',
  currentPin: 'PIN attuale',
  newPin: 'Nuovo PIN',
  pin: 'PIN',
  confirmPin: 'Conferma PIN',
  updatePin: 'Aggiorna PIN',
  savePin: 'Salva PIN',
  pinLockedTitle: 'PIN bloccato',
  pinLockedBody:
    'Troppi tentativi errati. Chiedi a un genitore di sbloccare il PIN dalle Impostazioni genitore.',
  parentAccessRequiredTitle: 'Accesso genitore richiesto',
  parentAccessRequiredBody:
    'Inserisci il tuo PIN per rinominare questo dispositivo, scegliere le App bloccate o uscire.',
  unlockWithParentPinButton: 'Sblocca con il PIN genitore',
  whyPinTitle: 'Perché un PIN?',
  whyPinBody:
    'Solo un genitore dovrebbe modificare le App bloccate o disconnettere questo dispositivo da KidGate. I colori del tema non richiedono un PIN.',
  pinLockedToast:
    'Il PIN è bloccato dopo troppi tentativi errati. Chiedi a un genitore di sbloccarlo dalle Impostazioni genitore.',
  pinNotConfiguredToast:
    'Crea prima un PIN a 6 cifre nelle Impostazioni genitore su un dispositivo del genitore.',
  enterSixDigitParentPin: 'Inserisci il PIN genitore a 6 cifre.',
  askParentCreatePin:
    'Chiedi prima a un genitore di creare un PIN genitore nelle Impostazioni genitore.',
  incorrectPinAttemptsLeft: 'PIN errato. {{count}} tentativi rimasti.',
  incorrectPinAttemptsLeft_one: 'PIN errato. {{count}} tentativo rimasto.',
  enterCurrentParentPin: 'Inserisci il tuo PIN genitore attuale.',
  currentParentPinIncorrect: 'Il PIN genitore attuale non è corretto.',
} as const;
