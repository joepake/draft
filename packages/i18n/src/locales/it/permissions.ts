export const permissions = {
  cameraPermissionRequired:
    'L’accesso alla fotocamera è necessario per questa funzione.',
  allowCameraTitle: 'Consenti fotocamera',
  cameraPermissionMessage:
    'KidGate usa la fotocamera per permetterti di inviare una foto veloce con SOS e Check-in.',
  allow: 'Consenti',
  notNow: 'Non ora',
  cameraTurnedOffTitle: 'La fotocamera è disattivata per KidGate',
  cameraTurnedOffMessage:
    'Apri Impostazioni e consenti la Fotocamera in modo che i tuoi Check-in e gli avvisi SOS possano includere una foto.',
  openSettings: 'Apri Impostazioni',
  notificationsLabel: 'Notifiche',
  notificationsAllowed: 'Le notifiche sono attive per KidGate.',
  notificationsOpenSettings:
    'Apri le Impostazioni del dispositivo per consentire le notifiche di KidGate.',
  backgroundRefreshLabel: 'Aggiornamento in background',
  backgroundRefreshHint: 'Consente a KidGate di continuare a funzionare in background.',
  backgroundRefreshLowPowerHint:
    'La Modalità risparmio energetico è attiva — iOS disattiva l’Aggiornamento app in background. Disattiva la Modalità risparmio energetico, quindi abilita l’Aggiornamento app in background.',
  overlayLabel: 'Mostra sopra le altre app',
  overlayHint:
    'Consenti a KidGate di mostrare una schermata di blocco sopra altre app quando i limiti sono attivi.',
  batteryOptimizationLabel: 'Batteria senza limitazioni',
  batteryOptimizationHint:
    'Impedisce ad Android di mettere in pausa KidGate in background.',
  exactAlarmLabel: 'Sveglie e promemoria',
  exactAlarmHint:
    'Consenti Sveglie e promemoria così gli Orari di blocco iniziano e finiscono in orario.',
  accessibilityLabel: 'Assistente di blocco Accessibilità',
  accessibilityHint: 'Mantiene il blocco di KidGate sopra le altre app.',
  oemSectionDescription:
    'I dispositivi {{brand}} spesso mettono in pausa le app in background. Completa questi passaggi affinché il blocco e gli Orari di blocco continuino a funzionare.',
  oemAutostartLabel: 'Consenti l’avvio automatico',
  oemAutostartHintXiaomi:
    'In Avvio automatico, attiva KidGate in modo che la protezione riparta dopo un riavvio.',
  oemAutostartHintSamsung:
    'In Batteria → Limiti di utilizzo in background → App mai in sospensione, aggiungi KidGate. Se KidGate non è nell’elenco è già consentito e questo passaggio è completato.',
  oemAutostartHintOppo: 'In App di avvio / Avvio automatico, consenti KidGate.',
  oemAutostartHintVivo:
    'In Avvio automatico / Alta potenza in background, consenti KidGate.',
  oemAutostartHintHuawei:
    'In Avvio app / Gestione avvio, imposta KidGate su Gestisci manualmente e consenti tutte le opzioni.',
  oemAutostartHintOther:
    'Consenti a KidGate di avviarsi automaticamente nelle impostazioni di sicurezza o batteria del tuo dispositivo.',
  markDone: 'Fatto',
  overlayStepAllow: 'Attiva «Mostra sopra le altre app» per KidGate.',
  accessibilityStepOpenSettings:
    'Seleziona Impostazioni qui sotto: si apre direttamente la pagina Accessibilità di KidGate.',
  accessibilityStepFindKidGate:
    'Se invece si apre l’elenco completo, seleziona KidGate in App installate/scaricate.',
  accessibilityStepTurnOn:
    'Attiva l’interruttore, poi seleziona Consenti nella conferma di Android.',
  accessibilityWarningNote:
    'Android avvisa che KidGate può osservare le tue azioni. È così che il blocco resta sopra le altre app: KidGate non legge password né messaggi personali.',
  uninstallProtectionWizardBody:
    'Impedisce di disinstallare questa app senza il PIN genitore. Android mostra la sua schermata di conferma.',
  notificationsWizardBody:
    'Consenti le notifiche così questo dispositivo riceve subito approvazioni di tempo e promemoria.',
  backgroundRefreshStepOpen: 'Apri la pagina di KidGate in Impostazioni.',
  backgroundRefreshStepTurnOn: 'Attiva Aggiornamento app in background per KidGate.',
  backgroundRefreshStepGeneral:
    'Se l’interruttore è in grigio, apri Impostazioni, poi Generali, poi Aggiornamento app in background e attivalo.',
  batteryStepAllow: 'Seleziona Consenti nella richiesta di Android.',
  batteryStepAppInfo:
    'Se non compare alcuna richiesta, apri Informazioni app, poi Batteria, poi scegli Senza limitazioni.',
  notificationsStepAllow: 'Seleziona Consenti nella richiesta.',
  exactAlarmStepTurnOn: 'Attiva Sveglie e promemoria per KidGate.',
  cameraStepTurnOn: 'Attiva Fotocamera per KidGate.',
  uninstallProtectionStepConfirm:
    'Seleziona Attiva nella schermata di conferma di Android.',
} as const;
