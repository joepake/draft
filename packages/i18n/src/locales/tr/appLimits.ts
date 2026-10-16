export const appLimits = {
  title: 'Uygulama Sınırları',
  intro:
    'Her uygulamanın günde ne kadar kullanılabileceğini belirleyin. Bu, Günlük sınıra ek olarak çalışır.',
  emptyTitle: 'Henüz sınır yok',
  emptySubtitle: 'Aşağıdan bir uygulama seçip ona kendi sınırını verin.',
  usedToday: 'Bugün {{used}} / {{limit}}',
  addSectionTitle: 'Sınır ekle',
  addSectionSubtitle: 'Bu cihazda bugün en çok kullanılan uygulamalar.',
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
