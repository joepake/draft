export const family = {
  title: 'परिवार',
  connectButton: 'कनेक्ट करें',
  connectAccessibility: 'बच्चे या अभिभावक का डिवाइस जोड़ें',
  addDeviceTitle: 'डिवाइस जोड़ें',
  addDeviceMessage: 'आप क्या कनेक्ट करना चाहते हैं?',
  addChildOption: 'बच्चे का डिवाइस जोड़ें',
  addJoinFamilyOption: 'परिवार से जुड़ें',
  addParentOption: 'अभिभावक को आमंत्रित करें',
  loginWebOption: 'वेब पर साइन इन करें',
  // The "who uses this device?" assignment sheet.
  assignSheetTitle: '{{deviceName}} कौन इस्तेमाल करता है?',
  assignSheetBody:
    'स्क्रीन समय और सितारे उसी बच्चे के लिए गिने जाएँगे जिसे आप चुनेंगे।',
  assignSheetNobody: 'कोई नहीं',
  assignSheetNobodyHint: 'साझा डिवाइस — किसी के लिए नहीं गिना जाता।',
  assignSheetAddAndAssign: 'जोड़ें और असाइन करें',
  // The "protect this child now?" starter sheet, offered right after a fresh
  // pairing is assigned. Content pre-exists on the device; this flips it on.
  quickProtectTitle: 'क्या {{childName}} को अभी सुरक्षित करें?',
  quickProtectBody:
    'सुरक्षा का एक शुरुआती सेट चालू करें। बाद में बच्चे की प्रोफ़ाइल में आप हर सेटिंग बदल सकते हैं।',
  quickProtectBedtime: 'रात के ब्लॉक किए गए समय',
  quickProtectBedtimeHint:
    'रात 10:00 बजे से सुबह 7:00 बजे तक डिवाइस का उपयोग ब्लॉक रहेगा।',
  quickProtectDailyLimit: 'दैनिक स्क्रीन समय सीमा',
  quickProtectDailyLimitHint:
    'प्रति दिन {{minutes}} मिनट, बच्चे के सभी डिवाइस पर साझा।',
  quickProtectWebFilter: 'वेब फ़िल्टर',
  quickProtectWebFilterHint: 'वयस्क सामग्री और अन्य जोखिम भरी श्रेणियाँ ब्लॉक करता है।',
  quickProtectWebFilterPremium: 'Premium सुविधा — प्लान के साथ शामिल।',
  quickProtectApply: 'सुरक्षा चालू करें',
  quickProtectSkip: 'अभी नहीं',
  quickProtectDone: 'सुरक्षा चालू है। आप इसे कभी भी समायोजित कर सकते हैं।',
  quickProtectPartial:
    'कुछ सुरक्षा सेटिंग्स सहेजी नहीं जा सकीं। बच्चे की प्रोफ़ाइल से पुनः प्रयास करें।',
  pairDeviceFirstTitle: 'अभी कोई डिवाइस पेयर नहीं है',
  pairDeviceFirstBody:
    'पहले इस बच्चे के लिए एक डिवाइस पेयर करें — परिवार टैब में स्कैन आइकन या "+" पर टैप करके बच्चे का डिवाइस जोड़ें चुनें। डिवाइस कनेक्ट होते ही यह नियंत्रण काम करने लगेगा।',
  // Child-grouped family list: group header lock-all + unassigned group.
  lockAll: 'सभी लॉक करें',
  unlockAll: 'सभी अनलॉक करें',
  lockAllA11y: '{{childName}} के सभी डिवाइस लॉक करें',
  unlockAllA11y: '{{childName}} के सभी डिवाइस अनलॉक करें',
  childDetailUnassignTitle: 'बच्चे से हटाएँ?',
  childDetailUnassignBody:
    '{{deviceName}} अब {{childName}} के लिए नहीं गिना जाएगा और असाइन नहीं में चला जाएगा। यह जुड़ा और सुरक्षित रहेगा।',
  childDetailUnassignConfirm: 'हटाएँ',
  childDetailUnassignA11y: '{{deviceName}} को इस बच्चे से हटाएँ',
  // The fold control on a group heading.
  collapseGroupA11y: '{{name}} को छोटा करें',
  expandGroupA11y: '{{name}} को बड़ा करें',
  assignDeviceCta: 'बच्चे को असाइन करें…',
  unassignedHint: 'ये डिवाइस अभी किसी के लिए नहीं गिने जाते।',
  unassignedHintMember: 'ये डिवाइस बच्चों को परिवार का मालिक ही सौंपता है।',
  // The footer strip: children who hold no device get no group of their own.
  childrenWithoutDeviceTitle: 'बिना डिवाइस वाले बच्चे',
  // Child detail screen.
  childDetailStarsWell: 'इस सप्ताह के सितारे',
  childStarsA11y: 'इस सप्ताह के सितारे: {{count}}',
  childDetailDevicesTitle: 'डिवाइस',
  childDetailAssignMore: 'एक और डिवाइस असाइन करें…',
  childDetailAssignSheetTitle: '{{childName}} को डिवाइस असाइन करें',
  childDetailNoDevices:
    'अभी कोई डिवाइस नहीं। नीचे असाइन करें या परिवार टैब से नया डिवाइस जोड़ें।',
  // Same screen for a joined parent, who may pair but may not assign.
  childDetailNoDevicesMember:
    'अभी कोई डिवाइस नहीं है। कौन-सा डिवाइस किसका है, यह केवल परिवार का मालिक तय करता है।',
  childDetailEditNameTitle: 'नाम बदलें',
  childDetailColorLabel: 'रंग',
  scanButtonAccessibility: 'कोड स्कैन करें',
  scanTitle: 'कोड स्कैन करें',
  scanBody:
    'कैमरे को किसी बच्चे के डिवाइस, फ़ैमिली इनवाइट या कंप्यूटर पर दिखाए गए कोड की ओर करें।',
  manualCodeLabel: '6-अंकों वाला कोड दर्ज करें',
  manualInstructions: 'दूसरे डिवाइस पर दिखाया गया 6-अंकों वाला कोड दर्ज करें।',

  headerHintEmpty: 'अपने बच्चों के डिवाइस प्रबंधित करें और सुरक्षित रखें',

  headerHintGuest:
    'ऐप को स्वतंत्र रूप से देखें। डिवाइस कनेक्ट करने के लिए तैयार होने पर साइन इन करें।',

  familyCardManage: 'परिवार, अभिभावकों और डिवाइस का प्रबंधन करें',

  familyCardJoined: 'आप अभिभावक के रूप में जुड़े हैं',

  chipDeviceCount: '{{count}} डिवाइस',
  chipDeviceCount_one: '{{count}} डिवाइस',

  chipOnlineCount: '{{count}} ऑनलाइन',

  chipSosCount: '{{count}} SOS',

  chipCheckInCount: '{{count}} चेक-इन',
  chipCheckInCount_one: '{{count}} चेक-इन',

  chipRequestCount: '{{count}} अनुरोध',
  chipRequestCount_one: '{{count}} अनुरोध',

  chipNeedsSetupCount: '{{count}} को सेटअप की आवश्यकता है',
  chipNeedsSetupCount_one: '{{count}} को सेटअप की आवश्यकता है',

  chipProtectedCount: '{{count}} सुरक्षित',

  childDevicesProtected: '{{count}} डिवाइस सुरक्षित',

  chipHealthWarnCount: '{{count}} को सेटअप की आवश्यकता है',
  chipHealthWarnCount_one: '{{count}} को सेटअप की आवश्यकता है',

  chipHealthInactiveCount: '{{count}} ऑफ़लाइन',

  chipBlockedCount: '{{count}} लॉक किए गए',

  healthProtected: 'सुरक्षित',
  buildOutdated: 'अपडेट उपलब्ध',

  healthNeedsSetup: 'सेटअप आवश्यक',

  healthOffline: 'ऑफ़लाइन',

  cardWhereLabel: 'स्थान',

  cardWhereAccessibility: '{{deviceName}} का स्थान खोलें',

  cardTodayLabel: 'आज',

  cardTodayUsed: '{{used}} उपयोग',

  cardTodayNoData: 'आज का उपयोग डेटा उपलब्ध नहीं है',

  cardTodayAccessibility: '{{deviceName}} की उपयोग रिपोर्ट खोलें',

  emptyTitle: 'अभी तक कोई बच्चे का डिवाइस नहीं है',

  emptyDescription:
    'स्क्रीन समय और ऐप उपयोग की निगरानी शुरू करने के लिए बच्चे का डिवाइस जोड़ें।',

  setupFamilyTitle: 'अपना परिवार सेट करें',

  setupFamilyDescription:
    'अपने बच्चों के डिवाइस कनेक्ट करने के लिए परिवार बनाएँ या किसी अन्य अभिभावक के निमंत्रण से मौजूदा परिवार में शामिल हों।',

  createFamilyButton: 'परिवार बनाएँ',

  joinFamilyButton: 'परिवार से जुड़ें',

  switchToJoinTitle: 'क्या आप किसी दूसरे परिवार से जुड़ना चाहते हैं?',

  switchToJoinMessage:
    'आपका खाली परिवार हटा दिया जाएगा ताकि आप निमंत्रण कोड का उपयोग करके किसी अन्य परिवार से जुड़ सकें। यदि कोई बच्चे का डिवाइस पहले से जुड़ा है, तो पहले उसे संभालना होगा।',

  guestEmptyTitle: 'यहीं से आपका परिवार शुरू होता है',

  guestEmptyDescription:
    'अपने बच्चों के डिवाइस कनेक्ट करने, सूचनाएँ प्राप्त करने और स्वस्थ स्क्रीन समय सीमाएँ निर्धारित करने के लिए साइन इन करें।',

  guestConnectButton: 'साइन इन करें',

  guestCreateAccount: 'अभिभावक खाता बनाएँ',

  guestBenefitLimitsTitle: 'स्क्रीन समय और ऐप सीमाएँ',

  guestBenefitLimitsBody: 'डिवाइस लॉक करें और दैनिक समय-सारणी निर्धारित करें।',

  guestBenefitAlertsTitle: 'SOS और गतिविधि अलर्ट',

  guestBenefitAlertsBody: 'जब भी आपके ध्यान की आवश्यकता हो, तुरंत सूचना प्राप्त करें।',

  guestBenefitLocationTitle: 'स्थान और चेक-इन',

  guestBenefitLocationBody:
    'अपने बच्चे का स्थान देखें और उससे सुरक्षित होने की पुष्टि करने के लिए कहें।',

  stepsHeading: 'शुरुआत करें',

  step1Title: '“बच्चे का डिवाइस जोड़ें” पर टैप करें',

  step1Description: 'जोड़ने के लिए QR कोड यहीं दिखाई देगा, स्कैन के लिए तैयार।',

  step2Title: 'बच्चे के डिवाइस से स्कैन करें',

  step2Description:
    'अपने बच्चे के फ़ोन या टैबलेट पर KidGate इंस्टॉल करें, “यह बच्चे का डिवाइस है” चुनें और कोड स्कैन करें।',

  connectChildButton: 'बच्चे का डिवाइस कनेक्ट करें',
  listHint: 'हटाने के लिए डिवाइस को बाईं ओर स्वाइप करें',

  removeAlertTitle: 'डिवाइस हटाएँ?',

  removeAlertMessage:
    '{{deviceName}} आपके खाते से डिस्कनेक्ट हो जाएगा। इससे संबंधित सभी समय अनुरोध और गतिविधि इतिहास हटा दिए जाएँगे।',

  toastRemoveFailed: 'डिवाइस हटाया नहीं जा सका। कृपया पुनः प्रयास करें।',

  swipeRemoving: 'हटाया जा रहा है…',

  swipeRemove: 'हटाएँ',

  deviceNotFound: 'डिवाइस नहीं मिला',

  deviceMayHaveBeenRemoved:
    'संभव है कि यह डिवाइस आपके खाते से पहले ही हटा दिया गया हो।',

  deviceNotFoundError: 'डिवाइस नहीं मिला',

  deviceRemovedAlertTitle: 'डिवाइस हटा दिया गया',

  deviceRemovedAlertMessage:
    'किसी अभिभावक ने इस डिवाइस को परिवार खाते से हटा दिया है। इसे फिर से कनेक्ट करने के लिए “बच्चा” भूमिका दोबारा चुनें।',

  deviceNotRegistered: 'यह डिवाइस अभी तक पंजीकृत नहीं है।',

  defaultDeviceName: 'बच्चे का डिवाइस',

  fallbackDeviceName: 'बच्चे का डिवाइस',

  iphone: 'iPhone',
  android: 'Android',
  ipad: 'iPad',

  parentIphone: 'अभिभावक का iPhone',

  parentAndroid: 'अभिभावक का Android',

  childIphone: 'बच्चे का iPhone',

  parentIpad: 'अभिभावक का iPad',

  childIpad: 'बच्चे का iPad',

  childAndroid: 'बच्चे का Android',

  deviceFallbackName: 'डिवाइस',

  iosVersionLabel: 'iOS {{version}}',

  androidVersionLabel: 'Android {{version}}',
  mac: 'Mac',
  windowsPc: 'Windows PC',
  androidTv: 'Android TV',
  chromebook: 'Chromebook',

  deviceNameRequired: 'कृपया डिवाइस का नाम दर्ज करें।',

  deviceNameTooLong: 'डिवाइस का नाम अधिकतम {{max}} अक्षरों का हो सकता है।',

  lastActiveDate: 'अंतिम गतिविधि: {{date}}',

  lastActiveUnknown: 'हाल की कोई गतिविधि नहीं',

  thisDevice: 'यह डिवाइस',

  thisDeviceYou: 'यह डिवाइस (आप)',

  namedDeviceYou: '{{name}} (आप)',

  deviceNameSaved: 'डिवाइस का नाम अपडेट कर दिया गया है।',

  deviceSectionTitle: 'डिवाइस',

  deviceNameLabel: 'डिवाइस का नाम',

  editDeviceNameTitle: 'डिवाइस का नाम बदलें',

  editDeviceNameSubtitle:
    'केवल परिवार का स्वामी ही डिवाइस का नाम बदल सकता है। अधिकतम {{maxLength}} अक्षर।',

  deviceNameInputLabel: 'डिवाइस का नाम',

  deviceNamePlaceholder: 'आरव का iPhone',

  unableToUpdateDeviceName:
    'डिवाइस का नाम अपडेट नहीं किया जा सका। कृपया पुनः प्रयास करें।',

  osLabelFallback: 'ऑपरेटिंग सिस्टम',

  iosLabel: 'iOS',

  androidLabel: 'Android',

  sosNeedsAttentionNow: 'SOS — तुरंत ध्यान देने की आवश्यकता',

  waitingForCheckIn: 'चेक-इन की प्रतीक्षा में',

  timeRequestsWaiting: '{{count}} स्क्रीन समय अनुरोध लंबित हैं',

  timeRequestsWaiting_one: '{{count}} स्क्रीन समय अनुरोध लंबित है',

  youPausedThisDevice: 'आपने इस डिवाइस को लॉक कर दिया है',

  lockSentWaitingForDevice: 'लॉक भेजा गया — डिवाइस का इंतज़ार',

  lockNotAppliedOnDevice: 'इस डिवाइस ने लॉक लागू नहीं किया',

  blockedHoursActiveNow: 'ब्लॉक किए गए समय अभी सक्रिय हैं',

  inactiveOpenKidGate: 'निष्क्रिय — इस डिवाइस पर KidGate खोलें',

  protectionNeedsSetup: '{{issueLabel}} के लिए सेटअप आवश्यक है',

  dailyLimitOn: 'दैनिक सीमा सक्रिय है',

  deviceReady: 'तैयार',

  sos: 'SOS',

  deviceLocked: 'डिवाइस लॉक है',

  deviceUnlocked: 'डिवाइस अनलॉक है',

  parentPausedChildDevice: '{{actorName}} ने इस बच्चे के डिवाइस को लॉक कर दिया है।',

  parentRestoredChildDevice: '{{actorName}} ने इस बच्चे के डिवाइस का लॉक हटा दिया है।',

  parentFallback: 'एक अभिभावक',

  formerParent: 'परिवार छोड़ चुके अभिभावक',
  batteryPercent: '{{percent}}%',
  batteryAccessibility: 'बैटरी {{percent}} प्रतिशत',
  batteryChargingAccessibility: 'बैटरी {{percent}} प्रतिशत, चार्ज हो रही है',
  childDetailPerDevice: 'हर डिवाइस के लिए अलग — चुनें कौन-सा',
  childDetailNotAvailable: 'उपलब्ध नहीं',
  childDetailNotAvailableReason: 'इनके किसी भी डिवाइस पर उपलब्ध नहीं',
  childDetailProtectionOk: 'सुरक्षित',
  childDetailProtectionAttention: '{{count}} डिवाइस पर ध्यान चाहिए',
  childDetailProtectionSheetTitle: 'डिवाइस अनुसार सुरक्षा',
  childDetailRemoveTitle: 'इस बच्चे को हटाएँ',
  childDetailRemovingButton: 'हटाया जा रहा है…',
  childDetailOnlineCount: '{{total}} में से {{online}} ऑनलाइन',
  childDetailBudgetTitle: 'दैनिक सीमा',
  childDetailSectionControls: 'इनके सभी डिवाइस पर लागू नियम',
  childDetailSectionSafety: 'इनके सभी डिवाइस से मिलाकर',
  childDetailSectionAlerts: 'सभी डिवाइस, एक ही सूची',
  childDetailScopeAll: 'सभी डिवाइस',
  childDetailTodayWell: 'आज इस्तेमाल',
  childDetailUnassignAction: 'हटाएँ',
  childDetailLimitShared: 'इनके सभी डिवाइस का कुल',
} as const;
