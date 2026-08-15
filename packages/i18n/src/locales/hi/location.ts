export const location = {
  title: 'स्थान',
  fallbackDeviceName: 'बच्चे का डिवाइस',
  toastUpdateFailed:
    'स्थान साझा करने की सेटिंग अपडेट नहीं की जा सकी। कृपया पुनः प्रयास करें।',
  toggleLabel: 'स्थान साझा करें',
  toggleHint: 'इसे चालू करने के बाद इस डिवाइस पर KidGate को एक बार खोलें।',
  toggleAccessibilityLabel: 'स्थान साझा करें',
  lastKnownLocation: 'अंतिम ज्ञात स्थान',
  noLocationHint:
    'स्थान साझा करना चालू करें, फिर इस डिवाइस पर KidGate को एक बार खोलें।',
  waitingForLocation: 'स्थान की प्रतीक्षा की जा रही है',
  updatedAt: '{{date}} को अपडेट किया गया',
  openInMaps: 'मैप्स में खोलें',
  openInMapsAccessibility: 'मैप्स में खोलें',
  refreshButton: 'स्थान रीफ़्रेश करें',
  refreshingButton: 'रीफ़्रेश किया जा रहा है…',
  refreshAccessibility: 'स्थान रीफ़्रेश करें',
  toastEnableSharingFirst:
    'रीफ़्रेश का अनुरोध भेजने से पहले कृपया स्थान साझा करना चालू करें।',
  activityTitleRefreshRequested: 'स्थान रीफ़्रेश का अनुरोध भेजा गया',
  activityDescriptionRefreshRequested:
    '{{deviceName}} से नवीनतम स्थान भेजने का अनुरोध किया गया है।',
  toastRefreshSent: '{{deviceName}} अनुरोध प्राप्त होते ही अपना स्थान अपडेट करेगा।',
  toastRefreshFailed:
    'स्थान रीफ़्रेश का अनुरोध भेजा नहीं जा सका। कृपया पुनः प्रयास करें।',
  toastChildNeedsNotifications:
    'कृपया बच्चे के डिवाइस पर KidGate खोलें और सूचनाओं (Notifications) की अनुमति दें ताकि स्थान रीफ़्रेश अनुरोध प्राप्त हो सकें।',
  checkInBadge: 'चेक-इन',
  movementHistoryTitle: 'स्थान इतिहास',
  historyEmpty:
    'अभी तक कोई इतिहास उपलब्ध नहीं है। स्थान अपडेट या चेक-इन के बाद स्थान दिखाई देंगे।',
  historyHighlightAccessibility: 'मानचित्र पर {{place}} को हाइलाइट करें',
  historyOpenMapsAccessibility: '{{place}} को मैप्स में खोलें',
  latestBadge: 'नवीनतम',
  unableToRequestLocationRefresh: 'स्थान रीफ़्रेश का अनुरोध भेजा नहीं जा सका',
  locationBannerTitle: 'स्थान सेवा चालू करें',
  locationBannerBody:
    'आपके माता-पिता यह देखना चाहते हैं कि यह डिवाइस कहाँ है, ताकि उन्हें पता चल सके कि आप सुरक्षित पहुँच गए हैं।',
  allowLocationButton: 'स्थान की अनुमति दें',
  locationNotAllowed:
    'स्थान की अनुमति अभी तक नहीं दी गई है। सेटिंग्स → KidGate → स्थान खोलें (या पहले स्थान सेवाएँ चालू करें)। यदि “स्थान” विकल्प दिखाई नहीं देता है, तो फिर से “स्थान की अनुमति दें” चुनें।',
  locationServicesOff:
    'इस डिवाइस पर स्थान सेवाएँ बंद हैं। सेटिंग्स → गोपनीयता और सुरक्षा → स्थान सेवाएँ खोलें, उन्हें चालू करें, फिर KidGate पर वापस जाकर “स्थान की अनुमति दें” चुनें।',
  locationDeniedInSettings:
    'KidGate के लिए स्थान अनुमति अस्वीकार कर दी गई है। सेटिंग्स → KidGate → स्थान खोलें और “ऐप का उपयोग करते समय” या “हमेशा” चुनें।',
  locationEnabled:
    'स्थान सेवा चालू है। कृपया “हमेशा अनुमति दें” चुनें ताकि KidGate ऐप बंद होने पर भी स्थान अपडेट कर सके।',
  backgroundLocationTitle: 'ऐप बंद होने पर भी स्थान की अनुमति दें',
  backgroundLocationBody:
    'परिवार की सुरक्षा के लिए KidGate को बैकग्राउंड में स्थान की आवश्यकता होती है ताकि माता-पिता ऐप बंद होने पर भी इस डिवाइस का स्थान देख सकें।',
  locationNote:
    'जब बच्चे के डिवाइस पर स्थान साझा करना चालू होता है, तब बच्चे का स्थान दिखाता है।',
  placeAlertsNote: 'घर, स्कूल और अन्य सुरक्षित स्थानों के लिए स्थान अलर्ट भेजता है।',
  mapNoLocationsEmpty: 'दिखाने के लिए अभी कोई स्थान उपलब्ध नहीं है',
  mapUnavailable:
    'मानचित्र उपलब्ध नहीं है। कृपया अपना इंटरनेट कनेक्शन जाँचें और पुनः प्रयास करें।',
  historyShowMore: '{{count}} और स्थान दिखाएँ',
} as const;
