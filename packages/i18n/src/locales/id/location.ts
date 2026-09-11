export const location = {
  title: 'Lokasi',
  fallbackDeviceName: 'Perangkat anak',
  syncNote:
    'Lokasi bisa butuh beberapa menit untuk diperbarui — lebih lama jika perangkat tidak memiliki koneksi internet atau ditutup secara tidak terduga.',
  toastUpdateFailed: 'Tidak dapat memperbarui berbagi lokasi. Silakan coba lagi.',
  toggleLabel: 'Bagikan lokasi',
  toggleHint: 'Setelah mengaktifkan fitur ini, buka KidGate sekali di perangkat ini.',
  toggleAccessibilityLabel: 'Bagikan lokasi',
  lastKnownLocation: 'Lokasi terakhir diketahui',
  nearPlace: 'Dekat {{place}}',
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
  locationBannerBodySharingOff:
    'Berbagi lokasi sedang mati, jadi tidak ada yang dikirim. Kalau kamu izinkan di sini, fiturnya langsung jalan saat orang tuamu menyalakannya nanti.',
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
  childSharingHint: 'Berlaku untuk setiap perangkat yang ditetapkan ke {{childName}}.',
  childNoCapableDevices:
    'Tidak ada perangkat {{childName}} yang bisa melaporkan lokasi.',
  childCarriedQuestion: 'Perangkat mana yang dibawa {{childName}}?',
  childCarriedHint:
    'Lokasi dibaca dari perangkat itu. Tablet yang ditinggal di rumah bisa melaporkan lokasi lebih baru daripada ponsel di tas, jadi KidGate tidak pernah menebak.',
  childDevicesOnline: '{{online}} dari {{total}} online',
  childNoneOnline: 'Tidak ada perangkat online',
  childPickCarried: 'Dibawa',
  childPickCarriedA11y:
    'Tandai {{deviceName}} sebagai perangkat yang dibawa {{childName}}',
  stayRange: '{{from}} – {{to}}',
  placeTotalsTitle: 'Waktu di tempat Anda',
  placeTotalsNote:
    'Dari riwayat {{count}} hari terakhir. Hanya tempat yang tersimpan di sini yang dihitung.',
  wizardStepAllow:
    'Pilih Izinkan, lalu Selalu agar pembaruan tetap berjalan di latar belakang.',
  requestNoFix:
    'Perangkat ini tidak bisa mendapatkan posisi. Lokasi mungkin belum diizinkan di perangkat ini.',
  requestSharingOff: 'Berbagi lokasi nonaktif untuk perangkat ini.',
  requestUnsupported: 'Perangkat ini tidak dapat melaporkan posisi.',
  cardSharingOff: 'Berbagi lokasi nonaktif',
  cardPermissionOff: 'Lokasi belum diizinkan di perangkat ini',
  cardNotUpdating: 'Lokasi berhenti diperbarui',
} as const;
