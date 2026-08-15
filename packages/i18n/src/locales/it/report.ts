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

  narrativeTitle: 'In una frase',
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
    'Nelle ultime due settimane non è stato registrato alcun tempo di utilizzo, quindi non c’è ancora nulla da riportare. Un dispositivo spento non riporta nulla, e non è la stessa cosa di una settimana tranquilla.',
  rateLimited: 'Troppi tentativi. Aspetta un minuto.',
  failed: 'Non è stato possibile scrivere il report. Riprova tra poco.',

  historyTitle: 'Settimane precedenti',
  historyEmpty: 'I report che riceverai da ora restano qui per un anno.',
} as const;
