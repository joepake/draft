export const webHistory = {
  title: 'वेब इतिहास',
  fallbackDeviceName: 'बच्चे का डिवाइस',
  summarySites: 'देखी गई साइटें',
  summaryBlocked: 'ब्लॉक की गई साइटें',
  sourceNoteIos:
    'iPhone पर यह Apple की स्क्रीन टाइम रिपोर्ट से आता है — वे साइटें जहाँ आपके बच्चे ने समय बिताया, हर खुला पेज नहीं।',
  sourceNoteAndroid:
    'Android पर यह KidGate DNS फ़िल्टर से आता है — वे साइटें जो इस फ़ोन ने खोजीं, हर खुला पेज नहीं।',
  filterOffNoteAndroid:
    'वेब फ़िल्टर बंद है, इसलिए यह फ़ोन कुछ भी रिकॉर्ड या ब्लॉक नहीं कर रहा। कहाँ जा रहा है यह देखने के लिए चालू करें।',
  filterOffNoteIos:
    'वेब फ़िल्टर बंद है, इसलिए कुछ भी ब्लॉक नहीं हो रहा। यह सूची सिर्फ़ बताती है कि फ़ोन कहाँ गया।',
  filterAll: 'सभी साइटें',
  filterBlocked: 'सिर्फ़ ब्लॉक',
  emptyTitle: 'अभी कुछ दर्ज नहीं',
  emptyBody:
    'जब KidGate चालू रहते हुए बच्चे का डिवाइस ब्राउज़ करेगा, साइटें यहाँ दिखेंगी।',
  emptyBlockedBody: 'अभी तक कुछ ब्लॉक नहीं हुआ।',
  dayBlockedBadge: '{{count}} ब्लॉक',
  visitsMeta: '{{count}} बार देखा',
  blockedMeta: '{{count}} बार ब्लॉक · {{category}}',
  categoryUnknown: 'ब्लॉक सूची',
  showMoreDays: '{{count}} और दिन दिखाएँ',
  rollupTitle: 'समय कहाँ गया',
  rollupShare: '{{percent}}%',
  rollupNote:
    'दर्ज विज़िट का साइट प्रकार के अनुसार हिस्सा। सिर्फ़ Android — iPhone KidGate को नहीं बताता कि डोमेन किस प्रकार का है।',
} as const;
