export const report = {
  title: 'Report settimanale',
  subtitle: 'Che cosa ha notato KidGate durante la settimana.',
  weekOf: 'Settimana {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'Inviato domenica',
  triggerManual: 'Creato da te',

  statScreenTime: 'Tempo di utilizzo',
  statDailyAverage: 'Media giornaliera',
  statBlockedApps: 'App bloccate',
  statBlockedWebVisits: 'Siti filtrati',

  trendUp: '{{value}} in più della settimana precedente',
  trendDown: '{{value}} in meno della settimana precedente',
  trendFlat: 'Più o meno come la settimana precedente',
  trendFirstWeek: 'Prima settimana misurata',
  barThisWeek: 'Questa settimana',
  barLastWeek: 'Settimana scorsa',

  highlights: 'Da sapere',
  sevAttention: 'Da guardare',
  sevNotable: 'Degno di nota',
  sevInfo: 'Per tua informazione',

  findingUsageUp:
    'Il tempo di utilizzo è salito del {{percent}}%: {{delta}} in più della settimana scorsa.',
  findingUsageDown:
    'Il tempo di utilizzo è sceso del {{percent}}%: {{delta}} in meno della settimana scorsa.',
  findingUsageFlat: 'Il tempo di utilizzo è rimasto a {{total}}.',
  findingLateNight_one: 'Una notte dopo le 23: è arrivata fino alle {{time}}.',
  findingLateNight_other:
    '{{count}} notti dopo le 23; la più tarda è arrivata fino alle {{time}}.',
  findingNewTopApp: '{{app}} è nuova questa settimana e ha già preso {{duration}}.',
  findingAppSurge:
    '{{app}} sale di {{delta}} rispetto alla scorsa settimana: {{duration}} in totale.',
  findingLimitHit_one:
    'Il limite giornaliero di {{limit}} è stato raggiunto in un giorno.',
  findingLimitHit_other:
    'Il limite giornaliero di {{limit}} è stato raggiunto in {{count}} giorni.',
  findingBlockedApps:
    '{{count}} aperture di app bloccate, contro {{previous}} della settimana scorsa.',
  findingBlockedWeb:
    '{{count}} siti filtrati, contro {{previous}} della settimana scorsa.',
  findingQuietWeek:
    'Una settimana tranquilla: {{total}} in tutto e niente che abbia richiesto il tuo intervento.',

  // La metà positiva del report. Ogni frase dice cosa è successo e la cifra che
  // lo sostiene; nessuna elogia — `docs/COPY_STYLE.md` vieta l’adulazione
  // quanto vieta l’allarme.
  findingLimitRespected:
    'Il limite giornaliero di {{limit}} è stato rispettato tutti i {{count}} giorni.',
  findingLateNightGone_one:
    'Nessuna notte tarda questa settimana, dopo una notte la scorsa.',
  findingLateNightGone_other:
    'Nessuna notte tarda questa settimana, dopo {{count}} notti la scorsa.',
  findingBlockedAppsDown:
    '{{count}} aperture di app bloccate, contro {{previous}} la scorsa settimana.',
  findingBlockedWebDown:
    '{{count}} siti filtrati, contro {{previous}} la scorsa settimana.',
  findingLearningTime: '{{duration}} in app didattiche, soprattutto {{app}}.',
  findingTasksDone_one: 'Un compito completato, con {{bonus}} di bonus.',
  findingTasksDone_other: '{{count}} compiti completati, con {{bonus}} di bonus.',
  findingAskedFirst_one: 'Una richiesta inviata, invece di aggirare una regola.',
  findingAskedFirst_other: '{{count}} richieste inviate, invece di aggirare le regole.',
  findingCheckedIn: 'Tutti i {{asked}} check-in hanno avuto risposta.',

  narrativeTitle: 'In una frase',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'Una cosa che puoi fare',
  actionDailyLimit: 'Imposta un Limite giornaliero di {{duration}}',
  actionDailyLimitWhy: 'Era la media giornaliera della settimana scorsa.',
  actionBlockedHours: 'Imposta gli Orari di blocco',
  actionBlockedHoursLateNight: 'Blocca le ore notturne',
  actionOnDevice: 'Su {{device}}',
  finePrint:
    'I dati coprono dal {{from}} al {{to}}, su tutti i dispositivi della famiglia. Il tempo di utilizzo è quello che i dispositivi hanno riportato; i minuti che non hanno potuto misurare non sono in nessun totale.',

  generate: 'Scrivi il report di questa settimana',
  generating: 'Scrittura…',
  share: 'Condividi',
  copySummary: 'Copia il riepilogo',
  copied: 'Riepilogo copiato.',
  shareFailed: 'Non è stato possibile aprire il menu di condivisione.',

  emptyTitle: 'Ancora nessun report',
  emptyBody:
    'Un report arriva ogni domenica sera. Puoi anche scrivere quello di questa settimana adesso: copre gli ultimi sette giorni.',
  noUsage:
    'Nelle ultime due settimane non è stato registrato alcun tempo di utilizzo, quindi non c’è ancora nulla da riportare. Un dispositivo offline non riporta nulla, e non è la stessa cosa di una settimana tranquilla.',
  rateLimited: 'Troppi tentativi. Aspetta un minuto.',
  loadFailedTitle: 'Report non caricati',
  loadFailed:
    'Non è stato possibile aprire i report. Trascina verso il basso per riprovare.',
  failed: 'Non è stato possibile scrivere il report. Riprova tra poco.',

  historyTitle: 'Settimane precedenti',
  historyEmpty: 'I report che riceverai da ora restano qui per un anno.',

  hubToday: 'Oggi',
  hubTodayEmpty: 'Nessun dispositivo ha ancora inviato dati oggi.',
  hubByChild: 'Per bambino',
  hubByDevice: 'Per dispositivo',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'Ogni figlio',
  childrenNote:
    'Le stesse due settimane, per dispositivo. Le percentuali sono sul totale della famiglia.',
  colChild: 'Figlio',
  colScreenTime: 'Tempo di utilizzo',
  colShare: 'Quota',
  colChange: 'Rispetto a settimana scorsa',
  colLimit: 'Oltre il limite',
  colLateNights: 'Notti fino a tardi',
  colTopApp: 'Più usata',
  unnamedChild: 'Senza nome',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'più o meno uguale',
  noLimit: 'Nessun limite',
  noTopApp: '—',
  limitDays_one: '{{count}} giorno',
  limitDays_other: '{{count}} giorni',
  lateNightsNone: 'nessuna',
  busiest: 'Più tempo di utilizzo',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'Cosa vedrai',
  guestPreviewHint: 'Esempio — i dati reali compaiono quando colleghi un dispositivo',
  guestTitle: 'Scopri dov’è finita la settimana',
  guestDescription:
    'Accedi per misurare oggi rispetto a un giorno normale, confrontare i tuoi figli fianco a fianco e ricevere un report ogni domenica.',
  guestBenefitTrendTitle: 'Oggi, rispetto al normale',
  guestBenefitTrendBody:
    'Un numero da solo non dice nulla. Oggi viene sempre tracciato rispetto alla media giornaliera della tua famiglia.',
  guestBenefitChildTitle: 'Ogni figlio, fianco a fianco',
  guestBenefitChildBody:
    'La quota di giornata di ogni figlio, nel suo colore, su tutti i dispositivi che usa.',
  guestBenefitWeeklyTitle: 'Un report ogni domenica',
  guestBenefitWeeklyBody:
    'Cosa è cambiato, quali app sono cresciute e le nottate tardi — conservato per un anno.',
  guestSignInButton: 'Accedi',
  guestCreateAccount: 'Crea un account genitore',
} as const;
