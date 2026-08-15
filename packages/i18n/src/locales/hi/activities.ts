export const activities = {
  title: 'गतिविधियाँ',
  subtitleAllDevices: 'सभी डिवाइसों की नवीनतम गतिविधियाँ',
  subtitleTimelineForDevice: '{{deviceName}} की गतिविधि',
  fallbackDeviceName: 'डिवाइस',
  liveBadge: 'लाइव',
  errorTitle: 'गतिविधि लोड नहीं की जा सकी',
  tryAgain: 'फिर से प्रयास करें',

  emptyTitleAll: 'अभी तक कोई गतिविधि नहीं',
  emptyTitleDevice: 'इस डिवाइस के लिए कोई गतिविधि नहीं',
  emptyDescriptionAll:
    'आपके बच्चे के डिवाइस से लॉक, अनलॉक और SOS घटनाएँ यहाँ दिखाई देंगी.',
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
  activityTypeEmergency: 'आपातकाल',
  activityTypeUnknown: 'गतिविधि',

  appBlockedTitle: '{{appName}}',
  appBlockedBody: 'एक ब्लॉक किया गया ऐप खोला गया और KidGate ने उसे बंद कर दिया।',
  appInstalledTitle: '{{appName}}',
  appInstalledBody: 'बच्चे के डिवाइस पर एक नया ऐप इंस्टॉल किया गया है।',

  appRemovedTitle: '{{appName}}',
  appRemovedBody: 'बच्चे के डिवाइस से एक ऐप हटाया गया है।',

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

  tamperAccessibilityTitle: 'Accessibility बंद कर दी गई',
  tamperAccessibilityBody:
    'Accessibility दोबारा चालू होने तक ऐप ब्लॉकिंग और सुरक्षा सुविधाएँ ठीक से काम नहीं कर सकतीं।',
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
    'कैमरा अनुमति वापस मिलने तक SOS और Check-In फ़ोटो भेजी नहीं जा सकतीं।',

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
  dateToday: 'आज',
  dateYesterday: 'कल',

  filterByDevice: '{{label}} के अनुसार फ़िल्टर करें',

  openFullSosHistory: 'पूरा SOS इतिहास देखें',

  unknownDevice: 'अज्ञात डिवाइस',

  basicActivityNote: 'लॉक, अनलॉक और डिवाइस से जुड़ी गतिविधियाँ यहाँ दर्ज की जाती हैं।',
  tamperUninstallProtectionTitle: 'अनइंस्टॉल सुरक्षा बंद हुई',
  tamperUninstallProtectionBody: 'अब इस फ़ोन से KidGate हटाया जा सकता है।',
} as const;
