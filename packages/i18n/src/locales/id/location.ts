export const location = {
  title: 'Lokasi',
  fallbackDeviceName: 'Perangkat anak',
  toastUpdateFailed: 'Tidak dapat memperbarui berbagi lokasi. Silakan coba lagi.',
  toggleLabel: 'Bagikan lokasi',
  toggleHint: 'Setelah mengaktifkan fitur ini, buka KidGate sekali di perangkat ini.',
  toggleAccessibilityLabel: 'Bagikan lokasi',
  lastKnownLocation: 'Lokasi terakhir diketahui',
  noLocationHint: 'Aktifkan berbagi lokasi, lalu buka KidGate sekali di perangkat ini.',
  waitingForLocation: 'Menunggu lokasi',
  updatedAt: 'Diperbarui {{date}}',
  openInMaps: 'Buka di Maps',
  openInMapsAccessibility: 'Buka di Maps',
  refreshButton: 'Perbarui lokasi',
  refreshingButton: 'Memperbarui…',
  refreshAccessibility: 'Perbarui lokasi',
  toastEnableSharingFirst:
    'Harap aktifkan berbagi lokasi sebelum meminta pembaruan lokasi.',
  activityTitleRefreshRequested: 'Permintaan pembaruan lokasi dikirim',
  activityDescriptionRefreshRequested:
    'Meminta {{deviceName}} mengirimkan lokasi terbarunya.',
  toastRefreshSent:
    '{{deviceName}} akan memperbarui lokasinya segera setelah menerima permintaan.',
  toastRefreshFailed: 'Tidak dapat meminta pembaruan lokasi. Silakan coba lagi.',
  toastChildNeedsNotifications:
    'Silakan buka KidGate di perangkat anak dan izinkan Notifikasi agar permintaan pembaruan lokasi dapat diterima.',
  checkInBadge: 'Check-In',
  movementHistoryTitle: 'Riwayat lokasi',
  historyEmpty:
    'Belum ada riwayat. Titik lokasi akan muncul setelah pembaruan lokasi atau Check-In.',
  historyHighlightAccessibility: 'Sorot {{place}} di peta',
  historyOpenMapsAccessibility: 'Buka {{place}} di Maps',
  latestBadge: 'Terbaru',
  unableToRequestLocationRefresh: 'Tidak dapat meminta pembaruan lokasi',
  locationBannerTitle: 'Aktifkan lokasi',
  locationBannerBody:
    'Orang tua Anda ingin melihat lokasi perangkat ini agar mengetahui bahwa Anda telah tiba dengan selamat.',
  allowLocationButton: 'Izinkan lokasi',
  locationNotAllowed:
    'Izin lokasi belum diberikan. Buka Pengaturan → KidGate → Lokasi (atau aktifkan Layanan Lokasi terlebih dahulu). Pilih “Izinkan lokasi” lagi jika opsi Lokasi tidak muncul.',
  locationServicesOff:
    'Layanan Lokasi dinonaktifkan untuk perangkat ini. Buka Pengaturan → Privasi & Keamanan → Layanan Lokasi, aktifkan, lalu kembali ke KidGate dan pilih “Izinkan lokasi”.',
  locationDeniedInSettings:
    'Akses lokasi untuk KidGate ditolak. Buka Pengaturan → KidGate → Lokasi, lalu pilih “Saat menggunakan aplikasi” atau “Selalu”.',
  locationEnabled:
    'Lokasi telah diaktifkan. Pilih “Selalu” agar KidGate dapat memperbarui lokasi meskipun aplikasi ditutup.',
  backgroundLocationTitle: 'Izinkan lokasi saat aplikasi ditutup',
  backgroundLocationBody:
    'KidGate memerlukan akses lokasi di latar belakang agar orang tua dapat melihat lokasi perangkat ini meskipun aplikasi ditutup, demi keamanan keluarga.',
  locationNote:
    'Menampilkan lokasi anak saat berbagi lokasi diaktifkan pada perangkat anak.',
  placeAlertsNote:
    'Mengirim peringatan lokasi untuk rumah, sekolah, dan tempat aman lainnya.',
  mapNoLocationsEmpty: 'Belum ada lokasi untuk ditampilkan',
  mapUnavailable: 'Peta tidak tersedia. Periksa koneksi internet Anda lalu coba lagi.',
  historyShowMore: 'Tampilkan {{count}} lokasi lagi',
} as const;
