export const appLimits = {
  title: 'ऐप सीमाएँ',
  intro:
    'तय करें कि हर ऐप रोज़ कितनी देर चल सकता है। यह डिवाइस की दैनिक सीमा के अलावा लागू होता है।',
  emptyTitle: 'अभी कोई सीमा नहीं',
  emptySubtitle: 'नीचे से कोई ऐप चुनें और उसे अपनी दैनिक सीमा दें।',
  usedToday: 'आज {{limit}} में से {{used}}',
  addSectionTitle: 'सीमा जोड़ें',
  addSectionSubtitle: 'आपके बच्चे ने हाल में जो ऐप इस्तेमाल किए।',
  candidateUsage: 'आज {{duration}}',
  noUsageYet:
    'अभी कोई उपयोग रिपोर्ट नहीं हुआ। बच्चे का डिवाइस भेजते ही सीमाएँ यहाँ दिखेंगी।',
  footnote: 'सीमाएँ बच्चे के डिवाइस पर आधी रात को रीसेट होती हैं।',
  toastSaved: 'ऐप सीमाएँ सहेजी गईं।',
  toastSaveFailed: 'सहेजा नहीं जा सका। फिर कोशिश करें।',
  removeAccessibility: '{{app}} की सीमा हटाएँ',
  increaseAccessibility: '{{app}} की सीमा बढ़ाएँ',
  decreaseAccessibility: '{{app}} की सीमा घटाएँ',
  addAccessibility: '{{app}} के लिए दैनिक सीमा जोड़ें',
} as const;
