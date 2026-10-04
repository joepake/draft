export const child = {
  pageTitle: 'Stato',
  statusPaused: 'Bloccato',
  statusActive: 'Attivo',
  readyTitle: 'Tutto pronto',
  readyBody:
    'Se ti serve più tempo di utilizzo, puoi inviare una richiesta ai tuoi genitori qui sopra. In un’emergenza usa il pulsante SOS.',
  setupCollapsedTitle: 'Completa la configurazione con un genitore',
  setupCollapsedRequiredCount: '{{count}} passaggi obbligatori',
  setupCollapsedRequiredCount_one: '{{count}} passaggio obbligatorio',
  setupCollapsedOptionalCount: '{{count}} passaggi facoltativi',
  setupCollapsedOptionalCount_one: '{{count}} passaggio facoltativo',
  oneMoment: 'Un attimo…',
  paused: 'Bloccato',
  blockedHours: 'Orari di blocco',
  limitReached: 'Limite raggiunto',
  active: 'Attivo',
  parentPausedThisDevice: 'I tuoi genitori hanno bloccato questo dispositivo per ora.',
  blockedHoursOnPaused:
    'Gli Orari di blocco sono attivi. È un buon momento per una pausa.',
  outOfScreenTimeAskParent:
    'Hai usato tutto il tempo di oggi. Puoi chiederne di più qui sotto.',
  screenTimeToday: 'Tempo di utilizzo oggi',
  usedOverLimitMinutes: '{{used}} / {{limit}}',
  usedMinutesOnly: '{{used}}',
  outOfScreenTimeToday:
    'Hai usato tutto il tempo di oggi. Puoi chiederne di più ai tuoi genitori.',
  devicePaused: 'Dispositivo bloccato',
  devicePausedByParent: '{{deviceName}} è bloccato al momento.',
  phonePausedByParent: 'I tuoi genitori hanno bloccato questo dispositivo per ora.',
  pausedAskParentOrSos:
    'Chiedi ai tuoi genitori di sbloccarlo quando ti serve. In un’emergenza puoi comunque inviare un SOS.',
  blockedHoursLockTitle: 'Orari di blocco',
  blockedHoursLockBody:
    'Gli Orari di blocco sono attivi. È un buon momento per una pausa.',
  blockedHoursLockHint:
    'Se ti serve questo dispositivo adesso, chiedi ai tuoi genitori di modificare gli Orari di blocco. In un’emergenza puoi comunque inviare un SOS.',
  blockedHoursLockBodyUntil:
    'Gli Orari di blocco sono attivi fino alle {{time}}. È un buon momento per una pausa.',
  dailyLimitLockHint:
    'Chiedi ai tuoi genitori se ti serve più tempo. In un’emergenza puoi comunque inviare un SOS.',
  appClosedTitle: 'App chiusa',
  appClosedBody: 'KidGate l’ha chiusa perché ora è bloccata.',
  parentPausedAccess: 'I tuoi genitori hanno bloccato questo dispositivo per ora.',
  parentRestoredAccess:
    'I tuoi genitori hanno sbloccato il dispositivo. Puoi continuare a usarlo.',
  toastDailyLimitIncreased:
    'I tuoi genitori hanno aggiunto {{minutes}} minuti di utilizzo.',
  toastDailyLimitIncreased_one:
    'I tuoi genitori hanno aggiunto {{minutes}} minuto di utilizzo.',
  errorDeviceNotRegistered:
    'Questo dispositivo non è ancora pronto. Riprova tra poco, oppure associalo di nuovo se il problema continua.',
  errorScreenTimeRequired:
    'È richiesto l’accesso a Tempo di utilizzo. Consentilo a KidGate, poi riprova.',
  minUsed: '{{used}} di utilizzo',
  setupContinueButton: 'Continua configurazione',
  setupWizardTitle: 'Configura la protezione',
  setupWizardProgress: '{{done}}/{{total}} completati',
  setupWizardRequired: 'Obbligatorio',
  setupWizardOptional: 'Facoltativo',
  setupWizardSkip: 'Salta per ora',
  setupWizardWatchGuide: 'Guarda come fare',
  setupGrantStuckHint:
    'Attivato ma non è cambiato nulla? Riavvia il televisore e riprova.',
  setupWizardAllDoneTitle: 'Tutto pronto',
  setupWizardAllDoneSubtitle: 'Questo dispositivo è ora protetto.',
  setupWizardStepDone: 'Fatto — questa è attiva.',
  setupWizardCoreDoneTitle: 'La protezione di base è attiva',
  setupWizardCoreDoneBody:
    'Le autorizzazioni indispensabili sono concesse e questo dispositivo è protetto. I passaggi rimanenti sono extra facoltativi, da completare ora o più tardi.',
  setupWizardCoreDoneContinue: 'Rafforzala ora',
  setupWizardCoreDoneLater: 'Completa più tardi',
  setupWizardParentPinNote:
    'Serve il PIN genitore: un genitore lo inserisce nella schermata successiva.',
} as const;
