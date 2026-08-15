export const report = {
  title: 'साप्ताहिक रिपोर्ट',
  subtitle: 'इस हफ़्ते KidGate ने क्या देखा।',
  weekOf: 'सप्ताह {{week}}',
  range: '{{from}} – {{to}}',
  triggerScheduled: 'रविवार को भेजी गई',
  triggerManual: 'आपने बनाई',

  statScreenTime: 'स्क्रीन टाइम',
  statDailyAverage: 'रोज़ का औसत',
  statBlockedApps: 'ब्लॉक किए गए ऐप',
  statBlockedWebVisits: 'फ़िल्टर की गई साइटें',

  trendUp: 'पिछले हफ़्ते से {{value}} ज़्यादा',
  trendDown: 'पिछले हफ़्ते से {{value}} कम',
  trendFlat: 'पिछले हफ़्ते जितना ही',
  trendFirstWeek: 'पहला मापा गया हफ़्ता',
  barThisWeek: 'इस हफ़्ते',
  barLastWeek: 'पिछले हफ़्ते',

  highlights: 'जानने लायक',
  sevAttention: 'देखने लायक',
  sevNotable: 'ध्यान देने योग्य',
  sevInfo: 'जानकारी के लिए',

  findingUsageUp: 'स्क्रीन टाइम {{percent}}% बढ़ा — पिछले हफ़्ते से {{delta}} ज़्यादा।',
  findingUsageDown: 'स्क्रीन टाइम {{percent}}% घटा — पिछले हफ़्ते से {{delta}} कम।',
  findingUsageFlat: 'स्क्रीन टाइम {{total}} पर ही रहा।',
  findingLateNight: 'रात 11 बजे के बाद {{count}} रातें — सबसे देर {{time}} तक।',
  findingNewTopApp: '{{app}} इस हफ़्ते नया है और अभी से {{duration}} ले चुका है।',
  findingAppSurge: '{{app}} पिछले हफ़्ते से {{delta}} बढ़ा — कुल {{duration}}।',
  findingLimitHit: '{{limit}} की रोज़ की सीमा {{count}} दिन पूरी हुई।',
  findingBlockedApps:
    '{{count}} बार ब्लॉक किए ऐप खोलने की कोशिश, पिछले हफ़्ते {{previous}} थी।',
  findingBlockedWeb: '{{count}} साइटें फ़िल्टर हुईं, पिछले हफ़्ते {{previous}} थीं।',
  findingQuietWeek:
    'शांत हफ़्ता — कुल {{total}}, और ऐसा कुछ नहीं जिसमें आपकी ज़रूरत पड़ी हो।',

  narrativeTitle: 'एक वाक्य में',
  finePrint:
    'आँकड़े {{from}} से {{to}} तक के हैं, परिवार के सभी डिवाइस मिलाकर। स्क्रीन टाइम वही है जो डिवाइस ने बताया; जो मिनट वे माप नहीं पाए, वे किसी भी योग में नहीं हैं।',

  generate: 'इस हफ़्ते की रिपोर्ट लिखें',
  generating: 'लिखी जा रही है…',
  share: 'साझा करें',
  copySummary: 'सारांश कॉपी करें',
  copied: 'सारांश कॉपी हो गया।',
  shareFailed: 'साझा करने का मेन्यू नहीं खुल सका।',

  emptyTitle: 'अभी कोई रिपोर्ट नहीं',
  emptyBody:
    'हर रविवार शाम को एक रिपोर्ट आती है। आप इस हफ़्ते की अभी भी लिख सकते हैं — इसमें पिछले सात दिन आते हैं।',
  noUsage:
    'पिछले दो हफ़्तों में कोई स्क्रीन टाइम दर्ज नहीं हुआ, इसलिए अभी बताने को कुछ नहीं है। बंद डिवाइस कुछ नहीं बताता, और यह शांत हफ़्ते जैसा नहीं है।',
  rateLimited: 'बहुत ज़्यादा कोशिशें। एक मिनट रुकें।',
  failed: 'रिपोर्ट नहीं लिखी जा सकी। थोड़ी देर बाद फिर कोशिश करें।',

  historyTitle: 'पिछले हफ़्ते',
  historyEmpty: 'अब से मिलने वाली रिपोर्टें यहाँ एक साल तक रहती हैं।',
} as const;
