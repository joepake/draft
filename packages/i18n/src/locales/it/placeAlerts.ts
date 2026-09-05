export const placeAlerts = {
  title: 'Avvisi sui luoghi',
  familyScope: 'Una lista per tutta la famiglia',
  mergedFromDevices:
    'Unita dai luoghi già presenti su ogni dispositivo. Salvando, questa unica lista si applica a tutti i dispositivi.',
  fallbackDeviceName: 'Dispositivo del bambino',
  statusReady: 'Posizione pronta',
  statusNeedLocation: 'In attesa della posizione del dispositivo del bambino',
  tabPlaces: 'Luoghi',
  tabActivity: 'Attività',
  searchPlaceholder: 'Cerca un indirizzo…',
  lookingUpAddress: 'Ricerca indirizzo…',
  addressUnavailable: 'Indirizzo non disponibile',
  nameLabel: 'Nome',
  namePlaceholder: 'Casa, Scuola…',
  addButton: 'Salva',
  updateButton: 'Aggiorna',
  deletePlace: 'Elimina',
  newPlaceTitle: 'Nuovo luogo',
  editPlaceTitle: 'Modifica luogo',
  addPlaceButton: 'Aggiungi luogo',
  editPlaceAccessibility: 'Modifica {{name}}',
  radiusLabel: 'Raggio di allerta',
  radiusValue: '{{meters}} m',
  radiusHint:
    'Quanto deve essere vicino il dispositivo perché questo luogo venga rilevato. Un raggio più piccolo dell’errore di posizione del dispositivo avvisa a caso, non con più precisione.',
  radiusAccuracyHint:
    'Qui questo dispositivo indica la propria posizione con circa ±{{accuracy}} m di scarto.',
  radiusBelowAccuracy:
    'Qui il dispositivo è preciso solo a circa ±{{accuracy}} m. Usa {{minimum}} m o più, altrimenti questo luogo avviserà a caso.',
  radiusDecrease: 'Riduci raggio',
  radiusIncrease: 'Aumenta raggio',
  notifyEnterLabel: 'Avvisa all’arrivo',
  notifyExitLabel: 'Avvisa alla partenza',
  notifyNoneHint:
    'Con entrambe le opzioni disattivate, questo luogo non invierà mai un avviso.',
  unsavedTitle: 'Eliminare le modifiche?',
  unsavedMessage: 'Le modifiche a questo luogo non sono state salvate.',
  unsavedDiscard: 'Elimina',
  unsavedKeepEditing: 'Continua a modificare',
  mapHint: 'Trascina la mappa per spostare il segnaposto.',
  placesFull: 'Hai salvato il numero massimo di {{max}} luoghi.',
  deleteConfirmTitle: 'Eliminare questo luogo?',
  deleteConfirmMessage: 'Rimuovi “{{name}}” dagli Avvisi sui luoghi.',
  emptyEventsTitle: 'Ancora nessuna attività nei luoghi',
  emptyEventsSubtitle:
    'Quando questo dispositivo entra o esce da un luogo salvato, gli eventi appariranno qui.',
  emptyPlaces:
    'Scegli un punto sulla mappa, assegnagli un nome, quindi salva. Fino a {{max}} luoghi.',
  noLocationToast:
    'Attendi prima un aggiornamento della posizione dal dispositivo del bambino.',
  maxPlacesToast: 'Puoi salvare fino a {{max}} luoghi.',
  nameRequiredToast: 'Inserisci il nome del luogo.',
  duplicateNameToast: 'Esiste già un luogo con questo nome.',
  samePinToast:
    'È lo stesso punto di “{{name}}”. Trascina la mappa per spostare il segnaposto.',
  overlapWarning:
    '“{{name}}” è a {{meters}} m e il suo cerchio arriva fin qui. Mentre il dispositivo è in entrambi, avvisa solo il più vicino. Salva di nuovo per mantenerlo.',
  copyTitle: 'Aggiungere anche agli altri figli?',
  copyMessage:
    'Copiare “{{name}}” sugli altri {{count}} dispositivi dei bambini in questa famiglia?',
  copyMessage_one:
    'Copiare “{{name}}” sull’altro dispositivo del bambino in questa famiglia?',
  copyConfirm: 'Copia',
  copyDoneToast: 'Copiato su {{count}} dispositivi.',
  copyDoneToast_one: 'Copiato su {{count}} dispositivo.',
  copySkippedToast:
    'Gli altri figli hanno già questo luogo o hanno raggiunto il numero massimo.',
  savedToast: 'Luogo salvato.',
  updatedToast: 'Luogo aggiornato.',
  removedToast: 'Luogo rimosso.',
  saveFailedToast: 'Impossibile salvare. Riprova.',
  enteredLabel: 'Arrivo',
  exitedLabel: 'Partenza',
  footerNote:
    'Verificato ogni volta che la posizione si sincronizza — non sempre in background.',
} as const;
