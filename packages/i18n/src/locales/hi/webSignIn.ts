export const webSignIn = {
  // Settings section header; the row under it is `title` + `subtitle`.
  sectionTitle: 'वेब पर KidGate',
  title: 'ब्राउज़र को अनुमति दें',
  subtitle: 'कंप्यूटर से परिवार संभालें',

  // The screen. The steps name the site and the button to press on the
  // computer — without them the QR the parent is told to scan is nowhere
  // to be found.
  intro:
    'कोई भी ब्राउज़र आपके परिवार तक तभी पहुँचता है जब आप इस फ़ोन से अनुमति देते हैं।',
  stepsTitle: 'अपने कंप्यूटर पर',
  step1: 'ब्राउज़र में {{url}} खोलें।',
  step2: '“KidGate ऐप से साइन इन करें” चुनें।',
  step3: 'दिखने वाले QR कोड को नीचे कैमरे से स्कैन करें।',
  scanHint: 'QR कोड को फ़्रेम के अंदर रखें।',
  manualTitle: '6 अक्षरों का कोड डालें',
  manualHint: 'कोड कंप्यूटर पर QR कोड के नीचे लिखा है।',
  manualPlaceholder: 'K7M2QP',
  continueButton: 'जारी रखें',

  // The decision. `declineButton` refuses the browser outright — it is not
  // "later", and it must not read like it.
  confirmTitle: 'इस ब्राउज़र को अनुमति दें?',
  confirmBody:
    'इसे इस फ़ोन जितना ही नियंत्रण मिलेगा: यह देख सकेगा कि बच्चे कहाँ हैं, सीमाएँ बदल सकेगा, डिवाइस लॉक कर सकेगा और अनुरोध मंज़ूर कर सकेगा। अनुमति तभी दें जब साइन इन आप ही कर रहे हों।',
  confirmCodeLabel: 'कंप्यूटर पर दिख रहा कोड',
  approveButton: 'अनुमति दें',
  declineButton: 'अनुमति न दें',
  declinedToast: 'ब्राउज़र को अनुमति नहीं दी गई।',
  approvedTitle: 'ब्राउज़र को अनुमति मिली',
  approvedBody: 'आपका कंप्यूटर साइन इन हो रहा है। फ़ोन रख सकते हैं।',

  // Errors. Each says what to do next on the computer, not just what broke.
  invalidCode:
    'यह QR कोड वेब साइन इन का कोड नहीं है। देखें कि कंप्यूटर पर साइन इन स्क्रीन खुली है।',
  expired: 'कोड की समय-सीमा खत्म हो गई। कंप्यूटर पर नया कोड दिखाएँ।',
  alreadyUsed: 'यह कोड पहले ही इस्तेमाल हो चुका है। कंप्यूटर पर नया कोड दिखाएँ।',
  notFound: 'यह कोड मान्य नहीं है। छह अक्षर जाँचकर फिर कोशिश करें।',
  failed: 'अनुरोध पूरा नहीं हो सका। कृपया फिर कोशिश करें।',

  // Revocation screen (server side already ships; app screen is pending).
  sessionsTitle: 'अनुमति वाले ब्राउज़र',
  sessionsEmpty: 'आपके खाते में कोई ब्राउज़र साइन इन नहीं है।',
  sessionsRevoke: 'साइन आउट',
  sessionExpires: '{{when}} को खत्म',
  revokedToast: 'उस ब्राउज़र को साइन आउट कर दिया गया।',
} as const;
