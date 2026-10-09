export const webFilter = {
  title: 'वेब फ़िल्टर',
  fallbackDeviceName: 'बच्चे का डिवाइस',
  appliesToAll: '{{name}} के सभी {{count}} डिवाइस पर लागू होता है',
  appliesToAll_one: '{{name}} के {{count}} डिवाइस पर लागू होता है',
  coverageLine: '{{total}} में से {{enforcing}} डिवाइस पर लागू',
  mergeNotice:
    '{{name}} के डिवाइस पर वेब फ़िल्टर की अलग-अलग सेटिंग थीं। यहाँ सहेजने पर सभी पर एक ही सेट लागू होगा, जो सख़्त विकल्प की ओर मिलाकर बनाया गया है।',
  mergeLoosened: 'अब हर डिवाइस पर अनुमति है: {{domains}}',
  toastUpdateFailed: 'वेब फ़िल्टर अपडेट नहीं हो सका। फिर से कोशिश करें।',
  heroTitle: 'अनुपयुक्त वेबसाइटें फ़िल्टर करें',
  heroSubtitleIos:
    'Apple के अपने वयस्क सामग्री फ़िल्टर के साथ-साथ, ब्राउज़रों और कई ऐप्स में ज्ञात अनुपयुक्त साइटें ब्लॉक करने के लिए बच्चे के iPhone या iPad पर एक निजी कनेक्शन चलाता है।',
  heroSubtitleAndroid:
    'ब्राउज़रों और कई ऐप्स में ज्ञात अनुपयुक्त डोमेन ब्लॉक करने के लिए बच्चे के Android डिवाइस पर लोकल DNS VPN इस्तेमाल करता है।',
  heroSubtitleMacos:
    'ब्राउज़र और कई ऐप में जानी-पहचानी अनुपयुक्त साइटों को ब्लॉक करने के लिए बच्चे के Mac पर KidGate का कॉन्टेंट फ़िल्टर चलाता है।',
  toggleHintIos:
    'बच्चे को एक बार KidGate के VPN को अनुमति देनी होगी और डिवाइस का पासकोड डालना होगा। फ़िल्टर के लिए VPN इंस्टॉल रहने दें।',
  toggleHintAndroid:
    'बच्चे को एक बार KidGate का VPN कनेक्शन स्वीकारना होगा। फ़िल्टर के लिए VPN चालू रखें।',
  toggleHintMacos:
    'बच्चे को सिस्टम सेटिंग्स में एक बार KidGate फ़िल्टर एक्सटेंशन को मंज़ूरी देनी होगी। फ़िल्टर काम करते रहने के लिए इसे मंज़ूर रखें।',
  toggleAccessibilityLabel: 'वेब फ़िल्टर चालू करें',
  safeSearchSectionTitle: 'सुरक्षित खोज और YouTube',
  safeSearchSectionSubtitle:
    'Google, Bing और DuckDuckGo को सुरक्षित परिणामों के लिए बाध्य करें और YouTube को प्रतिबंधित मोड में लॉक करें। इसके लिए वेब फ़िल्टर चालू होना ज़रूरी है।',
  safeSearchLabel: 'SafeSearch लागू करें',
  safeSearchHint:
    'Google SafeSearch, YouTube प्रतिबंधित मोड, Bing और DuckDuckGo को सख्त सेटिंग पर लॉक करता है। Android, Android TV और Chrome।',
  safeSearchStrictNote:
    'YouTube सबसे सख़्त स्तर पर चलता है: टिप्पणियाँ छिप जाती हैं और कुछ सामान्य वीडियो भी ब्लॉक हो जाते हैं। बच्चा इसे अपने खाते से बंद नहीं कर सकता।',
  infoTitle: 'यह कैसे काम करता है',
  infoLine1Ios:
    'KidGate डिवाइस पर एक निजी कनेक्शन चलाता है जो देखता है कि कौन-सी साइटें खोजी जा रही हैं, और आपकी चुनी हुई श्रेणियों वाली साइटें ब्लॉक करता है।',
  infoLine2Ios:
    'Apple का वयस्क सामग्री फ़िल्टर Safari और ऐप्स के अंदर के ब्राउज़रों में सुरक्षा की दूसरी परत के रूप में चालू रहता है।',
  infoLine3Ios:
    'फ़िल्टरिंग के दौरान VPN आइकन दिखता है। सेटिंग्स में इसे बंद करने पर यह कुछ ही सेकंड में फिर चालू हो जाता है; इसे हटाने पर फ़िल्टर तब तक रुका रहता है जब तक KidGate में इसे फिर से अनुमति न दी जाए।',
  infoLine1Android:
    'KidGate डिवाइस पर एक निजी कनेक्शन चलाता है जो देखता है कि कौन-सी साइटें खोजी जा रही हैं, और आपकी चुनी हुई श्रेणियों वाली साइटें ब्लॉक करता है।',
  infoLine2Android:
    'बच्चे के डिवाइस पर प्राइवेट DNS बंद करें। चालू रहने पर ब्राउज़र फ़िल्टर को बायपास कर सकते हैं।',
  infoLine3Android:
    'फ़िल्टरिंग के दौरान बच्चे के डिवाइस पर VPN आइकन दिखता है। VPN बंद करने से फ़िल्टर रुक जाता है — बहाल करने के लिए KidGate दोबारा खोलें।',
  infoLine4Android:
    'सेटिंग्स में नेटवर्क और इंटरनेट, फिर प्राइवेट DNS खोलें और बंद चुनें।',
  infoLine1Macos:
    'KidGate Mac पर एक कॉन्टेंट फ़िल्टर चलाता है जो देखता है कि कौन-सी साइटें खोजी जा रही हैं, और आपकी श्रेणियों वाली साइटों को ब्लॉक करता है।',
  infoLine2Macos:
    'अगर बच्चे के Mac पर फ़िल्टर मंज़ूर नहीं दिखता, तो उसे मंज़ूर करने के लिए System Settings → General → Login Items & Extensions खोलें।',
  infoLine3Macos:
    'मंज़ूरी मिलते ही बच्चे का Mac फ़िल्टर को सक्रिय दिखाता है। अगर वहाँ इसे बंद कर दिया जाए, तो इसे फिर से चालू करने के लिए KidGate दोबारा खोलें।',
  infoLine4Macos:
    'फ़िल्टर साइट के नाम पढ़ता है, जिन्हें आधुनिक ब्राउज़र लगभग आधी विज़िट में छुपा देते हैं — उन साइटों की जाँच आपकी श्रेणियों के अनुसार नहीं होती। फिर भी यह ज़्यादातर उन साइटों को रोकता है जिन तक बच्चे इस तरह पहुँचते हैं।',
  privateDnsBannerTitle: 'प्राइवेट DNS बंद करें',
  privateDnsBannerBody:
    'प्राइवेट DNS चालू है, इसलिए वेब फ़िल्टर बायपास हो सकता है। फ़िल्टर के लिए इसे बंद करें।',
  privateDnsBannerButton: 'DNS सेटिंग्स खोलें',
  vpnConsentBannerTitle: 'वेब फ़िल्टर VPN बहाल करें',
  vpnConsentBannerBody:
    'KidGate का VPN बंद है। वयस्क वेब फ़िल्टर के लिए VPN जुड़ा रहना चाहिए।',
  vpnConsentBannerButton: 'VPN चालू करें',
  vpnDisclosureNote:
    'जब तक वेब फ़िल्टर चालू है, KidGate का VPN केवल इसी डिवाइस पर चलता है। यह डिवाइस द्वारा खोली जाने वाली हर वेबसाइट का नाम देखता है — पेज, टाइप की गई बातें या कोई और ट्रैफ़िक कभी नहीं। यह माता-पिता द्वारा चुनी गई साइटें ब्लॉक करता है और उन्हें इस डिवाइस का वेब ब्राउज़िंग इतिहास दिखाता है, यानी कौन-सी साइटें खोली गईं और कौन-सी ब्लॉक हुईं; यह इतिहास 30 दिन तक रखा जाता है। KidGate यह डेटा कभी नहीं बेचता और न ही किसी और काम में लेता है।',
  iosOnlyNote: 'iPhone पर निजी कनेक्शन और स्क्रीन टाइम इस्तेमाल करता है',
  androidVpnNote: 'Android पर लोकल DNS VPN इस्तेमाल करता है',
  macosFilterNote: 'Mac पर KidGate का कॉन्टेंट फ़िल्टर इस्तेमाल करता है',

  heroSubtitleWindows:
    'बच्चे के PC पर KidGate का अपना रिज़ॉल्वर चलाता है ताकि हर ब्राउज़र में जानी-पहचानी अनुपयुक्त साइटें रोकी जा सकें।',
  heroSubtitleExtension:
    'बच्चे के कंप्यूटर पर Chrome में KidGate एक्सटेंशन चलाता है, ताकि उस ब्राउज़र में जानी-पहचानी अनुपयुक्त साइटें ब्लॉक हो सकें।',

  toggleHintWindows:
    'PC पर कुछ भी मंज़ूर नहीं करना होता। KidGate की बैकग्राउंड सेवा कुछ ही सेकंड में फ़िल्टर चालू कर देती है।',
  toggleHintExtension:
    'कुछ भी मंज़ूर करने की ज़रूरत नहीं। फ़िल्टर सिर्फ़ Chrome में चलता है, दूसरे ब्राउज़र या ऐप्स में नहीं।',

  infoLine1Windows:
    'KidGate PC पर एक रिज़ॉल्वर चलाता है जो देखता है कि कौन-सी साइटें खोजी जा रही हैं और आपकी श्रेणियों वाली साइटें रोक देता है।',

  infoLine2Windows:
    'Chrome, Edge और Firefox को KidGate की लागू की गई सेटिंग इससे बाँधती है। आपके बच्चे से कुछ भी मंज़ूर नहीं कराया जाता।',

  infoLine3Windows:
    'इसके लिए KidGate की बैकग्राउंड सेवा चाहिए। अगर वेब फ़िल्टरिंग बंद ही रहे, तो PC पर KidGate को व्यवस्थापक के रूप में दोबारा इंस्टॉल करें।',

  infoLine4Windows:
    'फ़िल्टर सिर्फ़ साइट के नाम पढ़ता है। वह पेज के अंदर नहीं देख सकता, और अभी-अभी खोजी गई साइट कुछ मिनट तक खुलती रह सकती है।',
  infoLine1Extension:
    'KidGate एक्सटेंशन हर साइट को Chrome में खुलने से पहले जाँचता है और आपकी चुनी हुई श्रेणियों वाली साइटें ब्लॉक करता है।',
  infoLine2Extension:
    'सिर्फ़ Chrome फ़िल्टर होता है, उसी प्रोफ़ाइल में जिसमें KidGate इंस्टॉल है। कंप्यूटर पर दूसरे ब्राउज़र और ऐप्स फ़िल्टर नहीं होते।',
  infoLine3Extension:
    'गुप्त विंडो तभी फ़िल्टर होती हैं जब एक्सटेंशन के लिए “गुप्त मोड में एक्सटेंशन इस्तेमाल करने की अनुमति दें” चालू हो। मेहमान विंडो फ़िल्टर नहीं होतीं।',
  infoLine4Extension:
    'ब्लॉक किए गए पेज से आपका बच्चा आपसे वह साइट खोलने की अनुमति माँग सकता है। एक्सटेंशन हटाने या बंद करने पर फ़िल्टर रुक जाता है।',

  windowsFilterNote: 'Windows पर KidGate का अपना रिज़ॉल्वर',
  extensionFilterNote: 'Chrome में KidGate एक्सटेंशन इस्तेमाल करता है',
  categoriesTitle: 'क्या ब्लॉक करें',
  categoriesSubtitle:
    'KidGate अपनी डोमेन सूचियाँ इस्तेमाल करता है। ये वे साइटें कवर करती हैं जहाँ बच्चे सचमुच पहुँचते हैं, पूरा वेब नहीं — नीचे की सूचियों के साथ मिलाकर उपयोग करें।',
  androidOnlyCategory: 'iPhone पर उपलब्ध नहीं — दूसरे डिवाइस पर काम करता है',
  iosCategoryNote:
    'iPhone केवल {{category}} का समर्थन करता है, Apple के अपने फ़िल्टर से। बाकी श्रेणियाँ दूसरे डिवाइस पर लागू होती हैं।',
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
  allowListOnlyHintExtension:
    'Chrome सिर्फ़ आपकी सूची की साइटें खोल पाएगा। दूसरे ब्राउज़र और ऐप्स पर इसका असर नहीं पड़ता।',
  allowListOnlyNeedsEntries: 'चालू करने से पहले कम से कम एक अनुमत साइट जोड़ें।',
  domainPlaceholder: 'udaharan.com',
  addDomain: 'साइट जोड़ें',
  removeDomain: '{{domain}} हटाएँ',
  invalidDomain: 'साइट का पता लिखें, जैसे udaharan.com',
  listFull: 'इस सूची में अधिकतम {{max}} साइटें सहेजी जा सकती हैं।',
  openHistory: 'वेब इतिहास',
  openHistorySubtitle: 'देखें यह डिवाइस किन साइटों तक पहुँचा और क्या ब्लॉक हुआ',
  blockedPageTitle: 'यह साइट ब्लॉक है',
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
  askToOpenBlockedLabel: 'हाल में ब्लॉक हुईं',
  askToOpenPending: 'आपने पहले ही एक साइट माँगी है। जवाब का इंतज़ार करें।',
  askToOpenTooSoon: 'आपने अभी-अभी अनुरोध भेजा है। एक मिनट बाद फिर से कोशिश करें।',
  askToOpenTooMany: 'आप एक बार में कुछ ही साइटें माँग सकते हैं।',
  requestsTitle: 'साइट के अनुरोध',
  requestsSubtitle: 'वे साइटें जिनके लिए इस डिवाइस ने अनुमति माँगी।',
  siteRequestApproved: 'साइट की अनुमति दी',
  siteRequestApprovedDescription:
    '{{deviceName}} पर {{domain}} को “हमेशा अनुमति दें” में जोड़ा गया।',
  siteRequestDenied: 'साइट का अनुरोध अस्वीकार',
  siteRequestDeniedDescription: '{{deviceName}} पर {{domain}} अब भी ब्लॉक है।',
  siteRequestReceived: 'साइट का अनुरोध',
  siteRequestReceivedDescription: '{{deviceName}} ने {{domain}} खोलने को कहा।',
  privateDnsStep1: 'इस डिवाइस पर सेटिंग्स खोलें।',
  privateDnsStep2: 'नेटवर्क और इंटरनेट चुनें।',
  privateDnsStep3: 'प्राइवेट DNS खोलें और बंद चुनें।',
  vpnConsentStepAllow:
    'Android के VPN अनुरोध पर ठीक है चुनें। फ़िल्टर चलने तक स्टेटस बार में चाबी का आइकन दिखता रहेगा।',
  vpnConsentStepAllowIos:
    'जब iOS VPN कॉन्फ़िगरेशन जोड़ने के लिए पूछे, तो अनुमति दें चुनें, फिर डिवाइस का पासकोड डालें। फ़िल्टर चलने तक VPN आइकन दिखता रहेगा।',
} as const;
