/**
 * डेस्कटॉप एजेंट की अपनी विंडो (macOS और Windows)।
 * हर कुंजी का संदर्भ: en/macos.ts देखें।
 */
export const macos = {
  headingNow: 'अभी',
  headingEnforce: 'यह Mac क्या लागू कर सकता है',
  headingEnforceHint:
    'आपके माता-पिता ने जो सेट किया है, और यह Mac उसे कितनी मज़बूती से बनाए रख सकता है।',
  headingRemovable: 'इसे हटाना कितना आसान है',

  parentAccessBody:
    'इस Mac पर कौन से ऐप्स ब्लॉक होंगे यह चुनने के लिए Parent PIN डालें।',
  checking: 'जाँच हो रही है…',

  enforcing: 'सुरक्षा चालू है',
  enforcingYes: 'हाँ',
  enforcingFailed: 'नहीं — लगातार {{count}} जाँचें विफल रहीं',
  enforcingFailed_one: 'नहीं — पिछली जाँच विफल रही',

  lockState: 'डिवाइस लॉक है',
  lockStateNo: 'नहीं',
  lockStateNotChecked: 'अभी जाँच नहीं हुई',
  lockStateParent: 'हाँ — माता-पिता ने लॉक किया है',
  lockStateSchedule: 'हाँ — ब्लॉक किए गए समय',
  lockStateDailyLimit: 'हाँ — दैनिक सीमा पूरी हो गई',

  appBlocking: 'ऐप ब्लॉकिंग',
  appBlockingBestEffort:
    'यथासंभव — ऐप्स खुलने के बाद बंद किए जाते हैं, खुलने से नहीं रोके जाते',

  webFilterLabel: 'वेब फ़िल्टर',
  webFilterUnavailable: 'इस Mac पर उपलब्ध नहीं',
  notSupportedOnThisDevice: 'इस डिवाइस पर समर्थित नहीं',

  scheduleLabel: 'ब्लॉक किए गए समय',
  dailyLimitLabel: 'दैनिक सीमा',
  enforcedHere: 'चालू, KidGate लागू करता है',

  screenTimeLabel: 'स्क्रीन टाइम',
  screenTimeAgentMeasured:
    'KidGate गिनता है। जब KidGate नहीं चल रहा हो, वह समय नहीं गिना जाता।',

  batteryLabel: 'बैटरी',
  batteryReported: 'परिवार को बताई जाती है',
  batteryNone: 'इस Mac में बैटरी नहीं है',

  locationLabel: 'लोकेशन',
  locationOff: 'बंद',
  locationCoarse: 'अनुमानित — Wi-Fi से, GPS से नहीं',

  accountLabel: 'बच्चे का खाता',
  accountStandard: 'सामान्य',
  accountAdmin: 'एडमिनिस्ट्रेटर — यह खाता KidGate को पूरी तरह बंद कर सकता है',

  restartLabel: 'बंद करने पर फिर चलता है',
  restartYes: 'हाँ',
  restartNo: 'नहीं — सेटअप पूरा नहीं हुआ',

  forceQuitLabel: 'KidGate कितनी बार बंद किया गया',

  startAtLoginSectionTitle: 'स्टार्टअप',
  startAtLoginSectionDescription:
    'KidGate केवल चलते समय ही स्क्रीन टाइम मापता है और नियम लागू करता है।',
  startAtLoginLabel: 'लॉगिन पर KidGate खोलें',
  startAtLoginHintOn:
    'KidGate इस डिवाइस के साथ शुरू होता है और बंद करने पर फिर खुल जाता है।',
  startAtLoginHintOff:
    'जब तक कोई KidGate फिर से नहीं खोलता, कुछ भी मापा या ब्लॉक नहीं होता।',
  startAtLoginUnavailable: 'इस डिवाइस ने KidGate को स्टार्टअप में जुड़ने नहीं दिया।',

  stillRunningTitle: 'KidGate अभी भी चल रहा है',
  stillRunningBodyMac: 'मेनू बार में KidGate आइकन से इसे फिर खोलें।',
  stillRunningBodyWindows: 'सूचना क्षेत्र में KidGate आइकन से इसे फिर खोलें।',

  updateAvailableTitle: 'KidGate का नया संस्करण उपलब्ध है',
  updateAvailableBody: 'KidGate {{version}} डाउनलोड के लिए तैयार है।',
  updateAction: 'अपडेट पाएँ',

  chooseApps: 'ब्लॉक करने के लिए ऐप्स चुनें',
  chooseAppsHint:
    'इस Mac पर ब्लॉक करने के लिए ऐप्स चुनें। माता-पिता अपने फ़ोन से ब्लॉकिंग चालू या बंद कर सकते हैं।',
  saveSelection: 'सहेजें',
  noAppsFound: 'Applications फ़ोल्डर में कोई ऐप नहीं मिला।',
};
