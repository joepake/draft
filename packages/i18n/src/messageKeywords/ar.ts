import type { MessageKeywordPack } from './types';

/**
 * Arabic message-monitoring keywords.
 *
 * Added 2026-08-29 and **NOT reviewed by anyone who reads Arabic**. The
 * smallest pack here, and phrase-only, because the risk is highest: Arabic is
 * heavily dialectal, Modern Standard forms below may read as stilted or wrong
 * in a real chat, and nobody in this repo can tell a false positive from a
 * true one. Treat every line as provisional.
 *
 * The folding pipeline does nothing for Arabic script — no diacritic
 * stripping, no leet — so these match on the exact pass only. Optional
 * short vowels (tashkil) are therefore NOT tolerated: a message carrying them
 * will miss. That is a known gap, not an oversight.
 */
export const ar: MessageKeywordPack = {
  terms: {
    predator: [
      'لا تخبر والديك',
      'لا تخبري والديك',
      'لا تقل لأحد',
      'سرنا الصغير',
      'احذف المحادثة',
      'احذف الرسائل',
      'أرسل لي صورة',
      'هل أنت وحدك في البيت',
      'هل والداك في البيت',
      'لنلتقي وحدنا',
      'تعال وحدك',
      'لنتحدث على الخاص',
      'لننتقل إلى تيليجرام',
      'احذف بعد ما تقرأ',
      'لا تصور الشاشة',
      'بحول لك فلوس',
      'بشتري لك جوال',
      'نتقابل بالسر',
      'كم عمرك بالضبط',
      'شغل الكاميرا',
      'حساب وهمي',
      'حساب ثاني',
      'ارسل لي صورتك',
    ],
    selfHarm: [
      'أريد أن أموت',
      'لا أريد العيش',
      'سأنهي حياتي',
      'سأقتل نفسي',
      'أؤذي نفسي',
      'أبغى أموت',
      'تعبت من الحياة',
      'جرحت نفسي',
      'قطعت يدي',
      'ما حد بيحس فيني',
      'أخذت حبوب كثير',
    ],
    explicit: [
      'أرسل صورة عارية',
      'اخلع ملابسك',
      'أرني جسدك',
      'صور خاصة',
      'صور بدون ملابس',
      'ابعث صور',
      'تبادل صور',
    ],
    violence: [
      'سأقتلك',
      'سأضربك',
      'سأطعنك',
      'سأحضر سكيناً',
      'بذبحك',
      'معي سكين',
      'بنضربه كلنا',
    ],
    bullying: [
      'لا أحد يحبك',
      'الجميع يكرهك',
      'أنت لا تساوي شيئاً',
      'الأفضل أن تموت',
      'ما حد يحبك',
      'انت زبالة',
      'سمين قبيح',
      'موت أحسن لك',
    ],
    drugs: ['أريد شراء حشيش', 'حبوب مخدرة', 'حشيش', 'شبو', 'كبتاجون', 'ترامادول'],
    alcohol: ['نشرب كحول', 'نسكر', 'نشرب خمر', 'نسكر اليوم'],
    tobacco: ['اشتر سجائر', 'سيجارة إلكترونية', 'شيشة', 'فيب', 'سجائر إلكترونية'],
    gambling: [
      'مراهنة على الإنترنت',
      'كازينو أونلاين',
      'مراهنات أونلاين',
      'كازينو',
      'قمار',
    ],
    profanity: ['ابن الكلب', 'كس أمك', 'كلب ابن كلب', 'يا حقير', 'ابن الحرام'],
  },
  ambiguous: {
    alcohol: ['نسكر', 'نسكر اليوم'],
    tobacco: ['سيجارة إلكترونية', 'شيشة', 'فيب'],
    predator: ['حساب ثاني'],
    selfHarm: ['تعبت من الحياة'],
    explicit: ['صور خاصة'],
    drugs: ['ترامادول'],
    gambling: ['كازينو'],
  },
};
