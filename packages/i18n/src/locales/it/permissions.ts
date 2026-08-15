export const permissions = {
  cameraPermissionRequired:
    'L’accesso alla fotocamera è necessario per questa funzione.',
  allowCameraTitle: 'Consenti fotocamera',
  cameraPermissionMessage:
    'KidGate usa la fotocamera per permetterti di inviare una foto veloce con SOS e Check-In.',
  allow: 'Consenti',
  notNow: 'Non ora',
  cameraTurnedOffTitle: 'La fotocamera è disattivata per KidGate',
  cameraTurnedOffMessage:
    'Apri Impostazioni e consenti la Fotocamera in modo che i tuoi Check-In e gli avvisi SOS possano includere una foto.',
  openSettings: 'Apri Impostazioni',
  notificationsLabel: 'Notifiche',
  notificationsAllowed: 'Le notifiche sono attive per KidGate.',
  notificationsOpenSettings:
    'Apri le Impostazioni del dispositivo per consentire le notifiche di KidGate.',
  backgroundRefreshLabel: 'Aggiornamento in background',
  backgroundRefreshHint:
    'Attiva prima Impostazioni → Generali → Aggiornamento app in background, poi abilitalo per KidGate. Se l’interruttore è disattivato in grigio, l’impostazione generale di Aggiornamento app in background è ancora disattivata.',
  backgroundRefreshLowPowerHint:
    'La Modalità risparmio energetico è attiva — iOS disattiva l’Aggiornamento app in background. Disattiva la Modalità risparmio energetico, quindi abilita l’Aggiornamento app in background.',
  overlayLabel: 'Visualizza sopra altre app',
  overlayHint:
    'Consenti a KidGate di mostrare una schermata di blocco sopra altre app quando i limiti sono attivi.',
  batteryOptimizationLabel: 'Batteria senza limitazioni',
  batteryOptimizationHint:
    'Seleziona Consenti nella richiesta di sistema in modo che KidGate possa funzionare in background. Se non compare alcuna richiesta: Informazioni app → Batteria → Senza limitazioni.',
  exactAlarmLabel: 'Sveglie e promemoria',
  exactAlarmHint:
    'Consenti Sveglie e promemoria così gli Orari di blocco iniziano e finiscono in orario.',
  accessibilityLabel: 'Assistente di blocco Accessibilità',
  accessibilityHint:
    'Attiva KidGate in Accessibilità → App installate/scaricate. Questo è necessario affinché il blocco resti sopra le altre app.',
  oemSectionDescription:
    'I dispositivi {{brand}} spesso mettono in pausa le app in background. Completa questi passaggi affinché il blocco e gli Orari di blocco continuino a funzionare.',
  oemAutostartLabel: 'Consenti l’avvio automatico',
  oemAutostartHintXiaomi:
    'In Avvio automatico, attiva KidGate in modo che la protezione riparta dopo un riavvio.',
  oemAutostartHintSamsung:
    'In Cura del dispositivo / Batteria, consenti a KidGate di restare attivo in background.',
  oemAutostartHintOppo: 'In App di avvio / Avvio automatico, consenti KidGate.',
  oemAutostartHintVivo:
    'In Avvio automatico / Alta potenza in background, consenti KidGate.',
  oemAutostartHintHuawei:
    'In Avvio app / Gestione avvio, imposta KidGate su Gestisci manualmente e consenti tutte le opzioni.',
  oemAutostartHintOther:
    'Consenti a KidGate di avviarsi automaticamente nelle impostazioni di sicurezza o batteria del tuo dispositivo.',
  markDone: 'Fatto',
  notificationsWizardBody:
    'Consenti le notifiche così questo dispositivo riceve subito approvazioni di tempo e promemoria.',
} as const;
