export const appLimits = {
  title: 'Batas Aplikasi',
  emptyTitle: 'Belum ada batas',
  emptySubtitle: 'Pilih aplikasi di bawah untuk memberinya batas sendiri.',
  usedToday: '{{used}} dari {{limit}} hari ini',
  activeSectionTitle: 'Batas saat ini',
  addSectionTitle: 'Tambah batas',
  addSectionSubtitle: 'Paling sering dipakai hari ini',
  candidateUsage: '{{duration}} hari ini',
  noUsageYet:
    'Belum ada laporan pemakaian. Batas muncul begitu perangkat anak mengirim datanya.',
  footnote: 'Batas disetel ulang tengah malam di perangkat anak.',
  toastSaved: 'Batas aplikasi tersimpan.',
  toastSaveFailed: 'Tidak dapat menyimpan. Coba lagi.',
  removeAccessibility: 'Hapus batas untuk {{app}}',
  increaseAccessibility: 'Naikkan batas untuk {{app}}',
  decreaseAccessibility: 'Turunkan batas untuk {{app}}',
  addAccessibility: 'Tambah batas harian untuk {{app}}',
} as const;
