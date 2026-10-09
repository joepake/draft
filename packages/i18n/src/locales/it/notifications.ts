export const notifications = {
  title: 'Notifiche',
  subtitleAllOn: 'Tutti gli avvisi attivi',
  subtitleMuted_one: '1 avviso silenziato',
  subtitleMuted: '{{count}} avvisi silenziati',
  sosAlwaysOn: 'L’SOS arriva sempre, anche con tutto disattivato qui.',
  sosFullScreenOff:
    'Su questo telefono un SOS appare come un piccolo banner invece di occupare tutto lo schermo, quindi è più facile non notarlo. Consenti gli avvisi a schermo intero per risolvere.',
  sosFullScreenAllow: 'Consenti avvisi a schermo intero',
  sectionAlerts: 'Avvisi',
  sectionAlertsHint: 'Scegli di cosa viene avvisato questo telefono.',
  sectionSummary: 'Riepilogo',
  sectionQuietHours: 'Ore silenziose',
  sectionQuietHoursHint:
    'Gli avvisi restano muti in questa fascia. L’SOS non viene mai silenziato, e gli Avvisi messaggi più gravi arrivano comunque.',
  quietHoursLabel: 'Ore silenziose',
  quietHoursOff: 'Disattivate — gli avvisi arrivano a qualsiasi ora',
  quietHoursActive: 'In silenzio dalle {{start}} alle {{end}}',
  quietHoursStart: 'Dalle',
  quietHoursEnd: 'Alle',
  footnote:
    'Queste impostazioni valgono solo per questo telefono. Gli altri dispositivi dei genitori mantengono le proprie.',
  toastSaveFailed: 'Impossibile salvare. Riprova.',
  localReminderSetupTitle: 'Completa la configurazione',
  localReminderIdleTitle: 'Le tue regole restano attive',
  localReminderIdleBody:
    'È una settimana che non apri KidGate. Guarda il tempo di utilizzo di oggi e cosa è stato bloccato.',
  localReminderDormancyTitle: 'I report potrebbero fermarsi',
  localReminderDormancyBody:
    'Se nessuno apre KidGate per {{days}} giorni, i dispositivi di tuo figlio smettono di inviare report finché qualcuno non lo riapre. Le tue regole restano attive.',
  alert: {
    tamperAlerts: {
      label: 'Protezione disattivata',
      hint: 'Su un dispositivo del bambino è stato disattivato un permesso necessario a KidGate, sono stati modificati la data, l’ora o il fuso orario, oppure è stato premuto SOS mentre era bloccato. L’avviso SOS in sé arriva sempre.',
    },
    placeAlerts: {
      label: 'Arrivi e partenze',
      hint: 'Tuo figlio arriva in un luogo salvato o se ne allontana.',
    },
    timeRequests: {
      label: 'Richieste di tempo extra',
      hint: 'Tuo figlio chiede più tempo di utilizzo.',
    },
    siteRequests: {
      label: 'Richieste di siti',
      hint: 'Tuo figlio chiede di aprire un sito bloccato.',
    },
    checkIn: {
      label: 'Risposte al check-in',
      hint: 'Tuo figlio risponde a un check-in di sicurezza.',
    },
    rewardTasks: {
      label: 'Premi richiesti',
      hint: 'Tuo figlio segna come completata un’attività premio.',
    },
    appActivity: {
      label: 'App installate o rimosse',
      hint: 'Un’app compare o sparisce sul dispositivo del bambino.',
    },
    anomalyAlerts: {
      label: 'Attività insolita',
      hint: 'Uso insolito su un dispositivo del bambino: notti fino a tardi, picchi, nuove app.',
    },
    weeklyDigest: {
      label: 'Riepilogo settimanale',
      hint: 'Il resoconto del lunedì su tempo di utilizzo e blocchi.',
    },
    messageAlerts: {
      label: 'Avvisi messaggi',
      hint: 'Nei messaggi o nelle ricerche di tuo figlio compaiono parole preoccupanti.',
    },
    billing: {
      label: 'Promemoria Premium',
      hint: 'Promemoria per abbonarti dopo la fine della prova. Gli avvisi di fine prova o di fine Premium arrivano sempre.',
    },
  },
};
