export const appLimits = {
  title: 'حدود التطبيقات',
  emptyTitle: 'لا توجد حدود بعد',
  emptySubtitle: 'اختر تطبيقًا بالأسفل لتمنحه حدًا خاصًا به.',
  usedToday: '{{used}} من {{limit}} اليوم',
  activeSectionTitle: 'الحدود الحالية',
  addSectionTitle: 'إضافة حد',
  addSectionSubtitle: 'الأكثر استخدامًا اليوم',
  candidateUsage: '{{duration}} اليوم',
  noUsageYet:
    'لا يوجد استخدام مُبلَّغ بعد. ستظهر الحدود بمجرد أن يرسل جهاز الطفل بياناته.',
  footnote: 'تُعاد الحدود إلى الصفر عند منتصف الليل على جهاز الطفل.',
  toastSaved: 'تم حفظ حدود التطبيقات.',
  toastSaveFailed: 'تعذّر الحفظ. حاول مرة أخرى.',
  removeAccessibility: 'إزالة حد {{app}}',
  increaseAccessibility: 'زيادة حد {{app}}',
  decreaseAccessibility: 'خفض حد {{app}}',
  addAccessibility: 'إضافة حد يومي لـ {{app}}',
} as const;
