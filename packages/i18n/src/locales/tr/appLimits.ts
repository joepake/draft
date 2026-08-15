export const appLimits = {
  title: 'Uygulama Sınırları',
  intro:
    'Her uygulamanın günde ne kadar kullanılabileceğini belirleyin. Cihazın günlük sınırına ek olarak çalışır.',
  emptyTitle: 'Henüz sınır yok',
  emptySubtitle: 'Aşağıdan bir uygulama seçip kendi günlük sınırını verin.',
  usedToday: 'Bugün {{limit}} sınırının {{used}} kadarı',
  addSectionTitle: 'Sınır ekle',
  addSectionSubtitle: 'Çocuğunuzun son kullandığı uygulamalar.',
  candidateUsage: 'Bugün {{duration}}',
  noUsageYet:
    'Henüz kullanım bildirilmedi. Çocuk cihazı veri gönderince sınırlar burada görünür.',
  footnote: 'Sınırlar çocuk cihazında gece yarısı sıfırlanır.',
  toastSaved: 'Uygulama sınırları kaydedildi.',
  toastSaveFailed: 'Kaydedilemedi. Lütfen tekrar deneyin.',
  removeAccessibility: '{{app}} sınırını kaldır',
  increaseAccessibility: '{{app}} sınırını artır',
  decreaseAccessibility: '{{app}} sınırını azalt',
  addAccessibility: '{{app}} için günlük sınır ekle',
} as const;
