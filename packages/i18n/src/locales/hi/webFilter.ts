export const webFilter = {
  title: 'वेब फ़िल्टर',
  fallbackDeviceName: 'बच्चे का डिवाइस',
  appliesToAll: '{{name}} के सभी {{count}} डिवाइस पर लागू होता है',
  coverageLine: '{{total}} में से {{enforcing}} डिवाइस पर लागू',
  mergeNotice:
    '{{name}} के डिवाइस पर वेब फ़िल्टर की अलग-अलग सेटिंग थीं। यहाँ सहेजने पर सभी पर एक ही सेट लागू होगा, जो सख़्त विकल्प की ओर मिलाकर बनाया गया है।',
  mergeLoosened: 'अब हर डिवाइस पर अनुमति है: {{domains}}',
  toastUpdateFailed: 'वेब फ़िल्टर अपडेट नहीं हो सका। फिर से कोशिश करें।',
  heroTitle: 'वयस्क वेबसाइटें फ़िल्टर करें',
  heroSubtitleIos:
    'बच्चे के डिवाइस पर Safari और ऐप के भीतर के ब्राउज़रों में वयस्क सामग्री सीमित करने के लिए Apple स्क्रीन टाइम का वेब सामग्री फ़िल्टर इस्तेमाल करता है।',
  heroSubtitleAndroid:
    'ब्राउज़रों और कई ऐप्स में ज्ञात वयस्क डोमेन ब्लॉक करने के लिए बच्चे के Android डिवाइस पर लोकल DNS VPN इस्तेमाल करता है।',
  heroSubtitleMacos:
    'ब्राउज़र और कई ऐप में जाने-पहचाने वयस्क साइटों को ब्लॉक करने के लिए बच्चे के Mac पर KidGate का कॉन्टेंट फ़िल्टर चलाता है।',
  toggleHintIos: 'बच्चे के डिवाइस पर स्क्रीन टाइम अनुमति चाहिए।',
  toggleHintAndroid:
    'बच्चे को एक बार KidGate का VPN कनेक्शन स्वीकारना होगा। फ़िल्टर के लिए VPN चालू रखें।',
  toggleHintMacos:
    'बच्चे को सिस्टम सेटिंग्स में एक बार KidGate फ़िल्टर एक्सटेंशन को मंज़ूरी देनी होगी। फ़िल्टर काम करते रहने के लिए इसे मंज़ूर रखें।',
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
  infoLine1Macos:
    'KidGate Mac पर एक कॉन्टेंट फ़िल्टर चलाता है जो देखता है कि कौन-सी साइटें खोजी जा रही हैं, और आपकी श्रेणियों वाली साइटों को ब्लॉक करता है।',
  infoLine2Macos:
    'अगर बच्चे के Mac पर फ़िल्टर मंज़ूर नहीं दिखता, तो उसे मंज़ूर करने के लिए सिस्टम सेटिंग्स → जनरल → लॉगिन आइटम और एक्सटेंशन खोलें।',
  infoLine3Macos:
    'मंज़ूरी मिलते ही बच्चे का Mac फ़िल्टर को सक्रिय दिखाता है। अगर वहाँ इसे बंद कर दिया जाए, तो इसे फिर से चालू करने के लिए KidGate दोबारा खोलें।',
  infoLine4Macos:
    'फ़िल्टर साइट के नाम पढ़ता है, जिन्हें आधुनिक ब्राउज़र लगभग आधी विज़िट में छुपा देते हैं — उन साइटों की जाँच आपकी श्रेणियों के अनुसार नहीं होती। फिर भी यह ज़्यादातर उन साइटों को रोकता है जिन तक बच्चे इस तरह पहुँचते हैं।',
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
  macosFilterNote: 'Mac पर KidGate का कॉन्टेंट फ़िल्टर इस्तेमाल करता है',
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
  openHistorySubtitle: 'देखें यह डिवाइस किन साइटों तक पहुँचा और क्या ब्लॉक हुआ',
  blockedPageTitle: 'साइट अवरुद्ध है',
  blockedPageBody:
    'KidGate ने आपके परिवार के लिए यह साइट अवरुद्ध कर दी है। अगर आपको लगता है कि यह गलती है, तो अपने माता-पिता से पूछें।',
  category: {
    adult: 'वयस्क सामग्री',
    selfHarm: 'आत्म-नुकसान और खानपान विकार',
    // App-only categories, from APP_CATEGORIES in @kidgate/schema/aiApps —
    // an app can be a school app, a browser or a code editor, and none of
    // those has a website equivalent worth blocking. They live in this map
    // so a parent meets ONE vocabulary: the app list and the web filter
    // must not name the same idea two different ways. The web filter's own
    // screen iterates WEB_FILTER_CATEGORIES and never reaches these.
    education: 'शिक्षा',
    utility: 'उपयोगिता',
    browser: 'वेब ब्राउज़र',
    devTools: 'कोडिंग और डेवलपर टूल',
    messaging: 'मैसेजिंग और कॉल',
    community: 'फ़ोरम और कम्युनिटी',
    shortVideo: 'शॉर्ट वीडियो',
    creative: 'फ़ोटो, वीडियो और कला',
    productivity: 'नोट्स और प्रोडक्टिविटी',
    reading: 'किताबें और कॉमिक्स',
    fileSharing: 'फ़ाइल शेयरिंग और डाउनलोड',
    bypass: 'रोक हटाने वाले ऐप',
    gambling: 'जुआ',
    gameGambling: 'लूट बॉक्स और स्किन सट्टा',
    dating: 'डेटिंग',
    strangerChat: 'अजनबियों से चैट',
    drugs: 'नशा और शराब',
    violence: 'हिंसा और खून-खराबा',
    extremism: 'उग्रवाद और नफ़रत',
    piracy: 'पायरेसी',
    social: 'सोशल नेटवर्क',
    videoStreaming: 'वीडियो स्ट्रीमिंग',
    music: 'संगीत',
    gaming: 'गेम',
    shopping: 'खरीदारी',
    aiCompanion: 'AI साथी',
    aiAssistant: 'AI सहायक',
    cryptoTrading: 'क्रिप्टो और ट्रेडिंग',
    vpn: 'VPN ऐप',
  },
  categoryHint: {
    adult: 'अश्लील और वयस्क साइटें',
    selfHarm: 'आत्म-नुकसान और आत्महत्या को बढ़ावा देने वाले फ़ोरम',
    gambling: 'कैसीनो, खेल सट्टा, पोकर',
    gameGambling: 'केस ओपनिंग, स्किन और Roblox सट्टा',
    dating: 'डेटिंग ऐप्स',
    strangerChat: 'Omegle जैसी साइटें, रैंडम वीडियो चैट',
    drugs: 'गांजा, वेप, शराब',
    violence: 'खून-खराबे और सदमा देने वाली साइटें',
    extremism: 'नफ़रत फैलाने वाले फ़ोरम और उग्रवादी साइटें',
    piracy: 'टोरेंट और पायरेटेड स्ट्रीमिंग',
    social: 'Facebook, Instagram, TikTok, Discord',
    videoStreaming: 'YouTube, Netflix, Twitch',
    music: 'Spotify, SoundCloud, Zing MP3',
    gaming: 'Roblox, Steam, गेम पोर्टल',
    shopping: 'Amazon, Flipkart, फ़ास्ट फ़ैशन',
    aiCompanion: 'Character.AI, Replika, रोलप्ले बॉट',
    aiAssistant: 'ChatGPT, Gemini, Copilot',
    cryptoTrading: 'Binance, Coinbase, ट्रेडिंग ऐप',
    vpn: 'VPN डाउनलोड पेज। पहले से इंस्टॉल ऐप को ब्लॉक नहीं करता।',
  },
  categoryGroup: {
    harm: 'हानिकारक सामग्री',
    contact: 'अजनबी',
    bypass: 'फ़िल्टर से बचाव',
    ai: 'AI',
    entertainment: 'मनोरंजन और सोशल',
    money: 'खरीदारी और पैसा',
  },
  categoriesOnCount: '{{total}} में से {{on}} चालू',
  askToOpen: 'माता-पिता से पूछें',
  askToOpenSubtitle: 'अगर वे इजाज़त दें, तो यह साइट खुल जाएगी।',
  askToOpenDomainLabel: 'कौन सी साइट?',
  askToOpenPending: 'तुमने पहले ही एक साइट माँगी है। जवाब का इंतज़ार करो।',
  askToOpenTooSoon: 'तुमने अभी-अभी अनुरोध भेजा है। एक मिनट बाद कोशिश करो।',
  requestsTitle: 'साइट के अनुरोध',
  requestsSubtitle: 'वे साइटें जिनके लिए इस डिवाइस ने अनुमति माँगी।',
  siteRequestApproved: 'साइट की अनुमति दी',
  siteRequestApprovedDescription:
    '{{deviceName}} पर {{domain}} को “हमेशा अनुमति दें” में जोड़ा गया।',
  siteRequestDenied: 'साइट का अनुरोध अस्वीकार',
  siteRequestDeniedDescription: '{{deviceName}} पर {{domain}} अब भी ब्लॉक है।',
  siteRequestReceived: 'साइट का अनुरोध',
  siteRequestReceivedDescription: '{{deviceName}} ने {{domain}} खोलने को कहा।',
} as const;
