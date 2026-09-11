export const activities = {
  title: 'गतिविधियाँ',
  subtitleAllDevices: 'सभी डिवाइसों की नवीनतम गतिविधियाँ',
  subtitleTimelineForDevice: '{{deviceName}} की टाइमलाइन',
  subtitleTimelineForChild: '{{childName}} की टाइमलाइन',
  fallbackDeviceName: 'डिवाइस',
  liveBadge: 'लाइव',
  errorTitle: 'गतिविधि लोड नहीं की जा सकी',
  tryAgain: 'फिर से प्रयास करें',

  emptyTitleAll: 'अभी तक कोई गतिविधि नहीं',
  emptyTitleDevice: 'इस डिवाइस के लिए कोई गतिविधि नहीं',
  emptyDescriptionAll:
    'आपके बच्चे के डिवाइस से लॉक, अनलॉक और SOS घटनाएँ यहाँ दिखाई देंगी।',
  emptyDescriptionDevice:
    'कोई अन्य डिवाइस चुनें या इस डिवाइस से लॉक, अनलॉक और SOS घटनाओं की प्रतीक्षा करें।',

  guestEmptyTitle: 'आपकी गतिविधि',
  guestEmptyDescription:
    'बच्चे का डिवाइस कनेक्ट होने के बाद, लॉक, अनलॉक, SOS और ऐप से जुड़ी गतिविधियाँ यहाँ रीयल-टाइम में दिखाई देंगी।',
  guestSignInButton: 'साइन इन करें',
  guestCreateAccount: 'अभिभावक खाता बनाएँ',
  guestSubtitle: 'अपने बच्चे के डिवाइस की गतिविधि देखने के लिए साइन इन करें।',

  guestPreviewHeading: 'आप क्या देखेंगे',
  guestPreviewLock: 'डिवाइस लॉक है',
  guestPreviewSos: 'SOS अलर्ट',
  guestPreviewScreenTime: 'स्क्रीन टाइम अपडेट',
  guestPreviewHint:
    'उदाहरण — डिवाइस कनेक्ट होने के बाद वास्तविक गतिविधियाँ दिखाई देंगी।',

  activityTypeLocked: 'लॉक',
  activityTypeUnlocked: 'अनलॉक',
  activityTypeAppOpened: 'ऐप खोला गया',
  activityTypeAppBlocked: 'ऐप ब्लॉक किया गया',
  activityTypeAppInstalled: 'ऐप इंस्टॉल किया गया',
  activityTypeAppRemoved: 'ऐप हटाया गया',
  activityTypePlaceEnter: 'स्थान पर पहुँचा',
  activityTypePlaceExit: 'स्थान छोड़ा',
  activityTypeTamper: 'सुरक्षा',
  activityTypeScreenTime: 'स्क्रीन टाइम',
  activityTypeCheckIn: 'चेक-इन',
  activityTypeLocationRequest: 'स्थान',
  activityTypeTimeRequest: 'समय अनुरोध',
  activityTypeRewardTask: 'इनाम कार्य',
  activityTypeSearchAlert: 'खोज चेतावनी',
  activityTypeWebFilter: 'वेब फ़िल्टर',
  activityTypeEmergency: 'आपातकाल',
  activityTypeUnknown: 'गतिविधि',

  sosEscapeTitle: 'आपातकालीन अनलॉक',
  sosEscapeBody: 'SOS ने इस डिवाइस को {{minutes}} मिनट के लिए अनलॉक किया।',
  sosEscapeRepeatTitle: 'आपातकालीन अनलॉक (आज {{count}} बार)',
  sosEscapeRepeatBody:
    'SOS ने इस डिवाइस को {{minutes}} मिनट के लिए अनलॉक किया। आज यह {{count}} बार हुआ है।',
  sosEscapeLimitedTitle: 'आपातकालीन ऐप खोले गए',
  sosEscapeLimitedBody:
    'SOS ने इस डिवाइस पर {{minutes}} मिनट के लिए फ़ोन, मैप और संदेश खोले। बाकी सब लॉक ही रहा।',
  sosEscapeLimitedRepeatTitle: 'आपातकालीन ऐप खोले गए (आज {{count}} बार)',
  sosEscapeLimitedRepeatBody:
    'SOS ने इस डिवाइस पर {{minutes}} मिनट के लिए फ़ोन, मैप और संदेश खोले। आज यह {{count}} बार हुआ है।',
  sosPressLockHeldTitle: 'लॉक होने पर SOS दबाया गया',
  sosPressLockHeldBody:
    'इस डिवाइस पर SOS दबाया गया। अलर्ट भेज दिया गया और डिवाइस लॉक ही रहा।',
  sosPressLockHeldRepeatTitle: 'लॉक होने पर SOS दबाया गया (आज {{count}} बार)',
  sosPressLockHeldRepeatBody:
    'इस डिवाइस पर SOS दबाया गया और डिवाइस लॉक ही रहा। आज यह {{count}} बार हुआ है।',
  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'एक ब्लॉक किया गया ऐप खोला गया और KidGate ने उसे बंद कर दिया।',
  appInstalledTitle: 'ऐप इंस्टॉल किया गया',
  appInstalledBody: 'बच्चे के डिवाइस पर ऐप {{appName}} इंस्टॉल किया गया है।',
  appInstalledPendingBody:
    'बच्चे के डिवाइस पर ऐप {{appName}} इंस्टॉल किया गया है और जब तक आप अनुमति नहीं देते, यह ब्लॉक रहेगा।',

  messageAlertTitle: 'चिंताजनक संदेश सामग्री',
  messageAlertBody: '{{appName}} में एक चिह्नित शब्द मिला।',
  messageAlertBodyOutgoing:
    '{{appName}} में आपके बच्चे के लिखे संदेश में एक चिह्नित शब्द मिला।',
  messageAlertTitleSearch: 'चिंताजनक खोज',
  messageAlertBodySearch: '{{appName}} पर की गई खोज में एक चिह्नित शब्द मिला।',
  activityTypeMessageAlert: 'संदेश चेतावनी',
  messageCheckedTitle: 'जाँच हुई, चिंता की बात नहीं',
  messageCheckedBody:
    '{{appName}} में एक निगरानी वाला शब्द दिखा जो संदर्भ में हानिरहित निकला।',
  activityTypeMessageChecked: 'जाँचा गया',
  appRemovedTitle: 'ऐप हटाया गया',
  appRemovedBody: 'बच्चे के डिवाइस से ऐप {{appName}} हटाया गया है।',
  extensionInstalledTitle: 'ब्राउज़र एक्सटेंशन जोड़ा गया',
  extensionInstalledBody: 'बच्चे के ब्राउज़र में {{appName}} एक्सटेंशन जोड़ा गया है।',
  extensionRemovedTitle: 'ब्राउज़र एक्सटेंशन हटाया गया',
  extensionRemovedBody: 'बच्चे के ब्राउज़र से {{appName}} एक्सटेंशन हटाया गया है।',

  placeEnterTitle: '{{placeName}} पहुँचा',
  placeEnterBody: 'बच्चे का डिवाइस सहेजे गए स्थान पर पहुँचा।',

  placeExitTitle: '{{placeName}} छोड़ा',
  placeExitBody: 'बच्चे का डिवाइस सहेजे गए स्थान से बाहर चला गया।',

  tamperTitle: 'सुरक्षा अनुमति बंद कर दी गई',
  tamperFallbackTitle: 'सुरक्षा अनुमति बंद कर दी गई',
  tamperFallbackBody:
    'बच्चे के डिवाइस पर सुरक्षा से संबंधित एक अनुमति बंद कर दी गई है।',

  tamperOverlayTitle: '“अन्य ऐप्स के ऊपर दिखाएँ” अनुमति बंद कर दी गई',
  tamperOverlayBody:
    'जब तक यह अनुमति दोबारा चालू नहीं होती, लॉक स्क्रीन अन्य ऐप्स के ऊपर दिखाई नहीं दे सकती।',

  tamperAccessibilityTitle: 'सुलभता बंद कर दी गई',
  tamperAccessibilityBody:
    'सुलभता दोबारा चालू होने तक ऐप ब्लॉकिंग और सुरक्षा सुविधाएँ ठीक से काम नहीं कर सकतीं।',
  tamperUsageAccessTitle: 'ऐप उपयोग की पहुँच बंद कर दी गई',
  tamperUsageAccessBody:
    'जब तक KidGate बच्चे के डिवाइस पर ऐप उपयोग दोबारा नहीं पढ़ पाता, तब तक ऐप सीमाएँ और ब्लॉक किए गए समय काम करना बंद कर सकते हैं।',
  // iOS and Android name this permission differently; the neutral pair
  // above is what old events fall back to. See utils/tamperAlerts.ts.
  tamperScreenTimeIosTitle: 'स्क्रीन टाइम एक्सेस बंद कर दिया गया',
  tamperScreenTimeIosBody:
    'जब तक बच्चे के डिवाइस पर स्क्रीन टाइम एक्सेस दोबारा नहीं दिया जाता, तब तक ऐप सीमाएँ और ब्लॉक किए गए समय काम करना बंद कर सकते हैं।',
  tamperUsageAccessAndroidTitle: 'उपयोग की पहुँच बंद कर दी गई',
  tamperUsageAccessAndroidBody:
    'जब तक बच्चे के डिवाइस पर KidGate के लिए उपयोग की पहुँच दोबारा चालू नहीं की जाती, तब तक ऐप सीमाएँ और ब्लॉक किए गए समय काम करना बंद कर सकते हैं।',

  tamperBatteryTitle: 'असीमित बैटरी उपयोग बंद कर दिया गया',
  tamperBatteryBody:
    'जब तक बैटरी उपयोग को फिर से “असीमित” पर सेट नहीं किया जाता, सिस्टम KidGate को रोक सकता है।',

  tamperExactAlarmTitle: 'अलार्म और रिमाइंडर बंद कर दिया गया',
  tamperExactAlarmBody:
    'जब तक अलार्म और रिमाइंडर की अनुमति दोबारा नहीं दी जाती, ब्लॉक किए गए समय देर से शुरू या खत्म हो सकते हैं।',

  tamperNotificationsTitle: 'सूचनाएँ बंद कर दी गईं',
  tamperNotificationsBody:
    'रिमोट कमांड और अभिभावकों को भेजी जाने वाली सूचनाएँ इस डिवाइस तक सही ढंग से नहीं पहुँच सकतीं।',

  tamperLocationTitle: 'स्थान सेवा बंद कर दी गई',
  tamperLocationBody:
    'स्थान की अनुमति दोबारा मिलने तक अभिभावकों को स्थान अपडेट प्राप्त नहीं होंगे।',

  tamperCameraTitle: 'कैमरा बंद कर दिया गया',
  tamperCameraBody:
    'कैमरा अनुमति वापस मिलने तक SOS और चेक-इन फ़ोटो भेजी नहीं जा सकतीं।',

  tamperBackgroundRefreshTitle: 'बैकग्राउंड ऐप रिफ्रेश बंद कर दिया गया',
  tamperBackgroundRefreshBody:
    'बैकग्राउंड ऐप रिफ्रेश दोबारा चालू होने तक KidGate कम बार अपडेट हो सकता है।',

  tamperDeviceClockTitle: 'तारीख या समय बदल दिया गया',
  tamperDeviceClockBody:
    'इस डिवाइस का समय सही समय से मेल नहीं खाता। स्क्रीन टाइम और ब्लॉक किए गए समय सही समय के अनुसार ही चलते रहेंगे।',

  /** @deprecated legacy description keys — kept for old activity docs */
  tamperOverlay: '“अन्य ऐप्स के ऊपर दिखाएँ” अनुमति बंद कर दी गई।',
  tamperAccessibility: 'Accessibility सेवा बंद कर दी गई।',
  tamperUsageAccess: 'उपयोग एक्सेस बंद कर दिया गया।',
  tamperBattery: 'असीमित बैटरी उपयोग बंद कर दिया गया।',
  tamperExactAlarm: 'अलार्म और रिमाइंडर की अनुमति बंद कर दी गई।',
  tamperNotifications: 'सूचनाओं की अनुमति बंद कर दी गई।',
  tamperLocation: 'स्थान की अनुमति बंद कर दी गई।',
  tamperCamera: 'कैमरा अनुमति बंद कर दी गई।',
  tamperBackgroundRefresh: 'बैकग्राउंड ऐप रिफ्रेश बंद कर दिया गया।',

  filterAllDevices: 'सभी डिवाइस',
  // The child tier of the feed filter — "All" would read as all devices.
  filterAllChildren: 'सभी',
  dateToday: 'आज',
  dateYesterday: 'कल',

  filterByDevice: '{{label}} के अनुसार फ़िल्टर करें',
  filterByChild: 'केवल {{label}} दिखाएँ',

  openFullSosHistory: 'पूरा SOS इतिहास देखें',
  openActivityDetails: 'विवरण देखें',

  unknownDevice: 'अज्ञात डिवाइस',

  basicActivityNote: 'लॉक, अनलॉक और डिवाइस से जुड़ी गतिविधियाँ यहाँ दर्ज की जाती हैं।',
  tamperUninstallProtectionTitle: 'अनइंस्टॉल सुरक्षा बंद हुई',
  tamperUninstallProtectionBody: 'अब इस फ़ोन से KidGate हटाया जा सकता है।',
} as const;
