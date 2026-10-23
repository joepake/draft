export const appLimits = {
  title: 'Uygulama Sınırları',
  emptyTitle: 'Henüz sınır yok',
  emptySubtitle: 'Aşağıdan bir uygulama seçip ona kendi sınırını verin.',
  usedToday: 'Bugün {{used}} / {{limit}}',
  activeSectionTitle: 'Mevcut sınırlar',
  addSectionTitle: 'Sınır ekle',
  addSectionSubtitle: 'Bugün en çok kullanılanlar',
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
