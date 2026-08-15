export const webFilter = {
  title: 'वेब फ़िल्टर',
  fallbackDeviceName: 'बच्चे का डिवाइस',
  toastUpdateFailed: 'वेब फ़िल्टर अपडेट नहीं हो सका। फिर से कोशिश करें।',
  heroTitle: 'वयस्क वेबसाइटें फ़िल्टर करें',
  heroSubtitleIos:
    'बच्चे के डिवाइस पर Safari और ऐप के भीतर के ब्राउज़रों में वयस्क सामग्री सीमित करने के लिए Apple स्क्रीन टाइम का वेब सामग्री फ़िल्टर इस्तेमाल करता है।',
  heroSubtitleAndroid:
    'ब्राउज़रों और कई ऐप्स में ज्ञात वयस्क डोमेन ब्लॉक करने के लिए बच्चे के Android डिवाइस पर लोकल DNS VPN इस्तेमाल करता है।',
  toggleLabel: 'वेब फ़िल्टर चालू करें',
  toggleHintIos: 'बच्चे के डिवाइस पर स्क्रीन टाइम अनुमति चाहिए।',
  toggleHintAndroid:
    'बच्चे को एक बार KidGate का VPN कनेक्शन स्वीकारना होगा। फ़िल्टर के लिए VPN चालू रखें।',
  toggleAccessibilityLabel: 'वेब फ़िल्टर चालू करें',
  infoTitle: 'यह कैसे काम करता है',
  infoLine1Ios: 'Apple वयस्क वेबसाइटें अपने आप फ़िल्टर करता है।',
  infoLine2Ios:
    'यह Safari में Apple का वयस्क सामग्री फ़िल्टर इस्तेमाल करता है और दूसरे ऐप्स के अंदर सब कुछ ब्लॉक नहीं करता।',
  infoLine3Ios:
    'बच्चे के डिवाइस का ऐप कंट्रोल सिंक करते ही KidGate सेटिंग अपने आप लागू कर देता है।',
  infoLine1Android:
    'KidGate एक लोकल VPN चलाता है जो वयस्क डोमेन के लिए DNS जाँचता है और कुछ एन्क्रिप्टेड DNS रिज़ॉल्वर ब्लॉक करता है।',
  infoLine2Android:
    'बच्चे के डिवाइस पर प्राइवेट DNS बंद करें। चालू रहने पर ब्राउज़र फ़िल्टर को बायपास कर सकते हैं।',
  infoLine3Android:
    'फ़िल्टरिंग के दौरान बच्चे के डिवाइस पर VPN आइकन दिखता है। VPN बंद करने से फ़िल्टर रुक जाता है — बहाल करने के लिए KidGate दोबारा खोलें।',
  infoLine4Android: 'सेटिंग्स → नेटवर्क और इंटरनेट → प्राइवेट DNS → बंद पर जाएँ।',
  privateDnsBannerTitle: 'प्राइवेट DNS बंद करें',
  privateDnsBannerBody:
    'प्राइवेट DNS चालू है, इसलिए वयस्क वेब फ़िल्टर बायपास हो सकता है। फ़िल्टर के लिए इसे बंद करें।',
  privateDnsBannerButton: 'DNS सेटिंग्स खोलें',
  vpnConsentBannerTitle: 'वेब फ़िल्टर VPN बहाल करें',
  vpnConsentBannerBody:
    'KidGate का VPN बंद है। वयस्क वेब फ़िल्टर के लिए VPN जुड़ा रहना चाहिए।',
  vpnConsentBannerButton: 'VPN चालू करें',
  iosOnlyNote: 'iOS पर स्क्रीन टाइम इस्तेमाल करता है',
  androidVpnNote: 'Android पर लोकल DNS VPN इस्तेमाल करता है',
  webFilteringNote:
    'iOS स्क्रीन टाइम का वयस्क फ़िल्टर इस्तेमाल करता है; Android लोकल DNS VPN ब्लॉकलिस्ट।',
  safeSearchAlertsNote:
    'Safari खोज शब्द साझा नहीं करता; कीवर्ड अलर्ट के लिए प्रबंधित सुरक्षित ब्राउज़र चाहिए।',
  webHistoryNote: 'फ़िल्टर वाला ब्राउज़र या DNS/VPN-शैली की रिपोर्टिंग चाहिए।',
  categoriesTitle: 'क्या ब्लॉक करें',
  categoriesSubtitle:
    'KidGate अपनी डोमेन सूचियाँ इस्तेमाल करता है। ये वे साइटें कवर करती हैं जहाँ बच्चे सचमुच पहुँचते हैं, पूरा वेब नहीं — नीचे की सूचियों के साथ मिलाकर उपयोग करें।',
  androidOnlyCategory: 'सिर्फ़ Android — iOS में श्रेणी-वार वेब नियंत्रण नहीं है',
  iosCategoryNote:
    'iPhone केवल {{category}} का समर्थन करता है, Apple के अपने फ़िल्टर से। बाकी श्रेणियाँ Android डिवाइस पर लागू होती हैं।',
  allowListTitle: 'हमेशा अनुमति दें',
  allowListSubtitle: 'वे साइटें जो किसी श्रेणी के ब्लॉक करने पर भी खुलती रहेंगी।',
  allowListEmpty: 'अभी कोई अपवाद नहीं।',
  allowListInputAccessibility: 'हमेशा अनुमत साइट जोड़ें',
  blockListTitle: 'हमेशा ब्लॉक करें',
  blockListSubtitle: 'वे साइटें जो श्रेणियों की परवाह किए बिना रोकी जाती हैं।',
  blockListEmpty: 'अभी कोई साइट ब्लॉक नहीं है।',
  blockListInputAccessibility: 'हमेशा ब्लॉक साइट जोड़ें',
  allowListOnlyLabel: 'सिर्फ़ अनुमत साइटें',
  allowListOnlyHintAndroid:
    'आपकी सूची के बाहर सब कुछ रोका जाता है। यह DNS स्तर पर काम करता है, इसलिए दूसरे ऐप भी कनेक्शन खो देते हैं।',
  allowListOnlyHintIos:
    'Safari और ऐप के अंदर के ब्राउज़र सिर्फ़ आपकी सूची की साइटें खोल पाएँगे।',
  allowListOnlyNeedsEntries: 'चालू करने से पहले कम से कम एक अनुमत साइट जोड़ें।',
  domainPlaceholder: 'udaharan.com',
  addDomain: 'साइट जोड़ें',
  removeDomain: '{{domain}} हटाएँ',
  invalidDomain: 'साइट का पता लिखें, जैसे udaharan.com',
  listFull: 'इस सूची में अधिकतम {{max}} साइटें सहेजी जा सकती हैं।',
  openHistory: 'वेब इतिहास',
  openHistorySubtitle: 'देखें यह फ़ोन किन साइटों तक पहुँचा और क्या ब्लॉक हुआ',
  category: {
    adult: 'वयस्क सामग्री',
    gambling: 'जुआ',
    dating: 'डेटिंग',
    drugs: 'नशा और शराब',
    violence: 'हिंसा और उग्रवाद',
    piracy: 'पायरेसी',
    social: 'सोशल नेटवर्क',
    videoStreaming: 'वीडियो स्ट्रीमिंग',
    gaming: 'गेम',
    shopping: 'खरीदारी',
  },
  categoryHint: {
    adult: 'अश्लील और वयस्क साइटें',
    gambling: 'कैसीनो, सट्टा, लूट बॉक्स',
    dating: 'डेटिंग और अजनबी चैट ऐप',
    drugs: 'गांजा, वेप, शराब',
    violence: 'हिंसक और उग्रवादी फ़ोरम',
    piracy: 'टोरेंट और पायरेटेड स्ट्रीमिंग',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    gaming: 'Roblox, Steam, गेम पोर्टल',
    shopping: 'Amazon, Flipkart, फ़ास्ट फ़ैशन',
  },
} as const;
