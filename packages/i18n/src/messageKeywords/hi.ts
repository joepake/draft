import type { MessageKeywordPack } from './types';

/**
 * Hindi message-monitoring keywords.
 *
 * Added 2026-08-29 and **NOT reviewed by anyone who reads Hindi**. Small and
 * phrase-only for the same reason as the Arabic pack. Treat every line as
 * provisional.
 *
 * Two known gaps. Real Hindi chat is very often written in Latin script
 * (Hinglish) rather than Devanagari, and none of that is covered here — the
 * Latin forms would need their own entries and would collide with English
 * terms, so they are deliberately left out until a reviewer can weigh that.
 * And the folding pipeline does nothing for Devanagari, so these match on the
 * exact pass only.
 */
export const hi: MessageKeywordPack = {
  terms: {
    predator: [
      'माता पिता को मत बताना',
      'किसी को मत बताना',
      'हमारा छोटा सा राज़',
      'यह चैट डिलीट कर दो',
      'मैसेज डिलीट कर दो',
      'मुझे फोटो भेजो',
      'क्या तुम घर पर अकेली हो',
      'तुम्हारे माता पिता घर पर हैं',
      'अकेले में मिलते हैं',
      'अकेले आना',
      'निजी में बात करते हैं',
      'टेलीग्राम पर आ जाओ',
      'parents ko mat batana',
      'kisi ko mat batana',
      'photo bhejo na',
      'apni photo bhejo',
      'akeli ho ghar pe',
      'ghar pe koi hai',
      'screenshot mat lena',
      'baad me delete kar dena',
      'paise bhej dunga',
      'tumhe gift dunga',
      'chupke se milte hain',
      'sach me kitni umar hai',
      'camera on karo',
      'fake id',
      'dusra account',
    ],
    selfHarm: [
      'मरना चाहता हूं',
      'मरना चाहती हूं',
      'जीना नहीं चाहता',
      'आत्महत्या',
      'खुद को नुकसान',
      'marna chahta hu',
      'marna chahti hu',
      'jeena nahi chahta',
      'khudkushi',
      'suicide karna hai',
      'haath kaat liya',
      'nas kaat',
      'koi yaad nahi karega',
      'goliyan kha li',
    ],
    explicit: [
      'नंगी फोटो भेजो',
      'कपड़े उतारो',
      'अपना शरीर दिखाओ',
      'nangi photo bhejo',
      'bina kapdo ki photo',
      'sexy photo bhejo',
      'nudes bhejo',
    ],
    violence: [
      'तुझे मार डालूंगा',
      'तुझे पीटूंगा',
      'चाकू लेकर आऊंगा',
      'tujhe maar dunga',
      'chaku hai mere paas',
      'sab milkar maarenge',
    ],
    bullying: [
      'कोई तुझे पसंद नहीं करता',
      'सब तुझसे नफरत करते हैं',
      'तू बेकार है',
      'तू मर जा',
      'koi tujhe pasand nahi karta',
      'tu bekar hai',
      'mar ja tu',
      'mota hathi',
      'tu kachra hai',
    ],
    drugs: [
      'गांजा खरीदना',
      'नशीली गोलियां',
      'ganja',
      'weed lena hai',
      'charas',
      'maal hai kya',
      'nasha karna',
      'gutkha',
    ],
    alcohol: ['शराब पीने चलें', 'नशे में', 'daru peene chalein', 'tallii hona'],
    tobacco: [
      'सिगरेट खरीदो',
      'ई सिगरेट',
      'cigarette lene chalo',
      'vape lena hai',
      'hookah',
    ],
    gambling: [
      'ऑनलाइन सट्टा',
      'सट्टा लगाना',
      'online satta',
      'satta lagana',
      'teen patti cash',
      'dream11 paisa',
    ],
    profanity: [
      'मादरचोद',
      'भोसड़ी के',
      'हरामी',
      'bsdk',
      'bhosdike',
      'madarchod',
      'chutiya',
      'gaandu',
      'harami',
      'randi',
      'lodu',
      'bc',
      'mc',
    ],
  },
  ambiguous: {
    alcohol: ['नशे में', 'tallii hona'],
    tobacco: ['ई सिगरेट', 'hookah'],
    predator: ['dusra account', 'ghar pe koi hai'],
    selfHarm: ['jeena nahi chahta'],
    bullying: ['tu bekar hai'],
    drugs: ['maal hai kya', 'gutkha', 'ganja'],
    gambling: ['satta lagana', 'dream11 paisa'],
    profanity: ['bc', 'mc', 'lodu'],
  },
};
