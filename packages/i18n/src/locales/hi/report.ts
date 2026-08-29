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
  findingLateNight_one: 'रात 11 बजे के बाद एक रात — {{time}} तक।',
  findingLateNight_other: 'रात 11 बजे के बाद {{count}} रातें — सबसे देर {{time}} तक।',
  findingNewTopApp: '{{app}} इस हफ़्ते नया है और अभी से {{duration}} ले चुका है।',
  findingAppSurge: '{{app}} पिछले हफ़्ते से {{delta}} बढ़ा — कुल {{duration}}।',
  findingLimitHit: '{{limit}} की रोज़ की सीमा {{count}} दिन पूरी हुई।',
  findingBlockedApps:
    '{{count}} बार ब्लॉक किए ऐप खोलने की कोशिश, पिछले हफ़्ते {{previous}} थी।',
  findingBlockedWeb: '{{count}} साइटें फ़िल्टर हुईं, पिछले हफ़्ते {{previous}} थीं।',
  findingQuietWeek:
    'शांत हफ़्ता — कुल {{total}}, और ऐसा कुछ नहीं जिसमें आपकी ज़रूरत पड़ी हो।',

  // रिपोर्ट का सकारात्मक हिस्सा। हर वाक्य बताता है कि क्या हुआ और उसके पीछे का
  // आँकड़ा — कोई तारीफ़ नहीं: `docs/COPY_STYLE.md` चापलूसी को उतना ही मना करता
  // है जितना डर को।
  //
  // वाक्य कर्मवाच्य/नामिक रखे गए हैं: बच्चे का लिंग उत्पाद को मालूम नहीं, और
  // 'किया/की' वही अनुमान है जो यहाँ नहीं होना चाहिए।
  findingLimitRespected: '{{count}} दिन तक {{limit}} की दैनिक सीमा बनी रही।',
  findingLateNightGone:
    'इस हफ़्ते देर रात कोई इस्तेमाल नहीं — पिछले हफ़्ते {{count}} रातें थीं।',
  findingBlockedAppsDown:
    '{{count}} बार ब्लॉक किए गए ऐप खुले, पिछले हफ़्ते {{previous}} थे।',
  findingBlockedWebDown:
    '{{count}} साइटें फ़िल्टर हुईं, पिछले हफ़्ते {{previous}} थीं।',
  findingLearningTime: 'शिक्षा ऐप्स में {{duration}}, ज़्यादातर {{app}} में।',
  findingTasksDone: '{{count}} काम पूरे हुए, {{bonus}} का बोनस मिला।',
  findingAskedFirst: 'नियम तोड़ने के बजाय {{count}} अनुरोध भेजे गए।',
  findingCheckedIn: 'सभी {{asked}} चेक-इन का जवाब मिला।',

  narrativeTitle: 'एक वाक्य में',

  // Machine-written, pending a native pass. The feature names are taken
  // verbatim from this locale's `blockedHours.title` and
  // `controls.dailyLimit` — a button naming a screen differently from
  // the screen it opens is the seam `docs/COPY_STYLE.md` is about.
  actionTitle: 'एक काम जो आप कर सकते हैं',
  actionDailyLimit: '{{duration}} की दैनिक सीमा तय करें',
  actionDailyLimitWhy: 'पिछले हफ़्ते का रोज़ाना औसत यही था।',
  actionBlockedHours: 'ब्लॉक किए गए समय तय करें',
  actionBlockedHoursLateNight: 'देर रात के घंटे ब्लॉक करें',
  actionOnDevice: '{{device}} पर',
  finePrint:
    'आँकड़े {{from}} से {{to}} तक के हैं, परिवार के सभी डिवाइस मिलाकर। स्क्रीन टाइम वही है जो डिवाइस ने बताया; जो मिनट वे माप नहीं पाए, वे किसी भी योग में नहीं हैं।',

  generate: 'इस हफ़्ते की रिपोर्ट लिखें',
  generating: 'लिखी जा रही है…',
  share: 'साझा करें',
  copySummary: 'सारांश कॉपी करें',
  copied: 'सारांश कॉपी हो गया।',
  shareFailed: 'साझा करने का मेन्यू नहीं खुल सका।',
  shareFooterDesc:
    'KidGate माता-पिता को स्क्रीन टाइम, लोकेशन और मैसेज देखने में मदद करता है।',
  shareFooterCta: 'kidgate.app/get से ऐप पाएं',

  emptyTitle: 'अभी कोई रिपोर्ट नहीं',
  emptyBody:
    'हर रविवार शाम को एक रिपोर्ट आती है। आप इस हफ़्ते की अभी भी लिख सकते हैं — इसमें पिछले सात दिन आते हैं।',
  noUsage:
    'पिछले दो हफ़्तों में कोई स्क्रीन टाइम दर्ज नहीं हुआ, इसलिए अभी बताने को कुछ नहीं है। ऑफ़लाइन डिवाइस कुछ नहीं बताता, और यह शांत हफ़्ते जैसा नहीं है।',
  rateLimited: 'बहुत ज़्यादा कोशिशें। एक मिनट रुकें।',
  loadFailedTitle: 'रिपोर्ट लोड नहीं हुईं',
  loadFailed: 'रिपोर्ट नहीं खुल सकीं। दोबारा कोशिश करने के लिए नीचे खींचें।',
  failed: 'रिपोर्ट नहीं लिखी जा सकी। थोड़ी देर बाद फिर कोशिश करें।',

  historyTitle: 'पिछले हफ़्ते',
  historyEmpty: 'अब से मिलने वाली रिपोर्टें यहाँ एक साल तक रहती हैं।',

  hubToday: 'आज',
  hubTodayEmpty: 'आज अभी तक किसी डिवाइस ने डेटा नहीं भेजा है।',
  hubByChild: 'बच्चे के अनुसार',
  hubByDevice: 'डिवाइस के अनुसार',

  // Per-child rows. The dashboard has rendered these since the table
  // existed; the phone could not, because the copy lived only in the web
  // pack.
  childrenTitle: 'हर बच्चा',
  childrenNote: 'वही दो सप्ताह, हर डिवाइस के हिसाब से। प्रतिशत परिवार के कुल पर हैं।',
  colChild: 'बच्चा',
  colScreenTime: 'स्क्रीन समय',
  colShare: 'हिस्सा',
  colChange: 'पिछले सप्ताह से',
  colLimit: 'सीमा से ऊपर',
  colLateNights: 'देर रातें',
  colTopApp: 'सबसे ज़्यादा',
  unnamedChild: 'बिना नाम',
  changeUp: '+{{value}}',
  changeDown: '−{{value}}',
  changeFlat: 'लगभग वही',
  noLimit: 'कोई सीमा नहीं',
  noTopApp: '—',
  limitDays_one: '{{count}} दिन',
  limitDays_other: '{{count}} दिन',
  lateNightsNone: 'कोई नहीं',
  busiest: 'सबसे ज़्यादा स्क्रीन समय',

  // The signed-out reports tab: a sample week, what the tab is for, and the
  // two ways in. `guestPreviewHint` is not decoration — the chart above it is
  // drawn from constants, and a week nobody measured has to say so.
  guestPreviewHeading: 'आप क्या देखेंगे',
  guestPreviewHint: 'नमूना — कोई डिवाइस जोड़ते ही असली आंकड़े दिखने लगेंगे',
  guestTitle: 'देखें कि हफ़्ता कहाँ बीता',
  guestDescription:
    'साइन इन करें और आज की तुलना एक सामान्य दिन से करें, बच्चों को साथ-साथ देखें, और हर रविवार एक रिपोर्ट पाएँ।',
  guestBenefitTrendTitle: 'आज, सामान्य के मुक़ाबले',
  guestBenefitTrendBody:
    'अकेला आंकड़ा कुछ नहीं कहता। आज को हमेशा आपके अपने परिवार के दैनिक औसत के सामने रखा जाता है।',
  guestBenefitChildTitle: 'हर बच्चा, साथ-साथ',
  guestBenefitChildBody:
    'हर बच्चे के दिन का हिस्सा, उसके अपने रंग में, उसके हर डिवाइस पर।',
  guestBenefitWeeklyTitle: 'हर रविवार एक रिपोर्ट',
  guestBenefitWeeklyBody:
    'क्या बदला, कौन-से ऐप बढ़े और देर रात का समय — एक साल तक सहेजा जाता है।',
  guestSignInButton: 'साइन इन करें',
  guestCreateAccount: 'अभिभावक खाता बनाएँ',
} as const;
