/** देखें `en/childReport.ts` — वही रजिस्टर, और दोनों कुल आँकड़े आपस में न मिलाएँ। */
export const childReport = {
  title: 'रिपोर्ट',
  devicesCount: '{{count}} डिवाइस',

  periodToday: 'आज',
  periodWeek: '7 दिन',
  periodMonth: '30 दिन',

  heroScreenOn: 'असल इस्तेमाल का समय',
  heroAtLeast: '≥ {{value}}',
  heroRange: '{{low}} – {{high}}',
  heroRangeNote:
    'यह अनुमान है — एक डिवाइस बताता है कि कितनी देर चला, पर कब चला यह नहीं।',
  heroOverlap:
    'इसमें से {{value}} दो स्क्रीन एक साथ — डिवाइस जोड़ने पर यह दो बार गिना जाता है।',
  barsExplain:
    'दो डिवाइस पर एक साथ बीता एक मिनट, डिवाइस जोड़ने पर दो मिनट गिना जाता है।',
  heroEmpty: 'अभी तक कोई उपयोग दर्ज नहीं',

  trendUp: 'पिछली अवधि से {{value}} ज़्यादा',
  trendDown: 'पिछली अवधि से {{value}} कम',
  trendFlat: 'पिछली अवधि जैसा ही',
  trendFirst: 'तुलना के लिए पिछली अवधि नहीं है',

  coverage: 'इस अवधि का {{percent}}% मापा गया',
  wellLateNights: 'देर रातें',
  coverageNone: 'यहाँ कोई डिवाइस यह नहीं बता सकता कि उसकी स्क्रीन कब चालू थी',

  barCombined: 'सभी डिवाइस मिलाकर',

  sectionDays: 'दिन-प्रतिदिन',
  backToPeriod: 'पूरी अवधि पर वापस जाएँ',
  bandLatestDay: 'अंतिम मापा गया दिन',
  sectionWhen: 'स्क्रीन कब चालू थीं',
  bandMerged: 'सभी डिवाइस',
  bandTooThin: 'इस दिन का इतना कम मापा गया कि उसे दिखाया नहीं जा सकता।',

  sectionDevices: 'कौन-सा डिवाइस',
  deviceTotalsOnly: 'सिर्फ़ कुल',
  openDeviceReport: '{{name}} की रिपोर्ट खोलें',

  sectionApps: 'सबसे ज़्यादा इस्तेमाल',
  appOnDevices: '{{count}} डिवाइस पर',
  appsEmpty: 'ऐप के अनुसार ब्यौरा अभी नहीं है।',

  emptyNoDevices: 'इस बच्चे को अभी कोई डिवाइस नहीं सौंपा गया है।',
  emptyAssign: 'डिवाइस सौंपें',
  partialError: 'एक डिवाइस पढ़ा नहीं जा सका। नीचे के आँकड़ों में वह शामिल नहीं है।',
};
