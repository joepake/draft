// errors.ts (Bahasa Indonesia)

export const errors = {
  timeRequestAlreadyResolved: 'Permintaan ini sudah ditangani orang tua lain.',
  emailAlreadyInUse: 'Email ini sudah terdaftar.',
  invalidEmail: 'Alamat email tidak valid.',
  weakPassword: 'Kata sandi harus terdiri dari minimal 6 karakter.',
  invalidEmailOrPassword: 'Email atau kata sandi tidak valid.',
  tooManyRequests: 'Terlalu banyak percobaan. Silakan coba lagi nanti.',
  somethingWentWrong: 'Terjadi kesalahan. Silakan coba lagi.',
  unableToCreateAccount: 'Tidak dapat membuat akun Anda. Silakan coba lagi.',
  unableToSignIn: 'Tidak dapat masuk. Silakan coba lagi.',
  unableToJoinFamilyAccount:
    'Tidak dapat bergabung dengan akun keluarga. Silakan coba lagi.',
  enterEmailAddress: 'Silakan masukkan alamat email Anda.',
  unableToCreatePairingCode: 'Tidak dapat membuat kode pemasangan. Silakan coba lagi.',
  unableToRedeemPairingCode: 'Kode pemasangan tidak benar atau telah kedaluwarsa.',
  unableToClaimChildPairing:
    'Tidak dapat menghubungkan perangkat anak. Silakan coba lagi.',
  unableToPollChildPairing: 'Tidak dapat memeriksa status pemasangan.',
  unableToConfirmChildPairing:
    'Tidak dapat mengonfirmasi pemasangan ini. Silakan coba lagi.',
  unableToRejectChildPairing: 'Tidak dapat menolak pemasangan ini. Silakan coba lagi.',
  photoCaptureCancelled: 'Pengambilan foto dibatalkan.',
  unableToOpenCamera:
    'Tidak dapat membuka kamera. Harap izinkan akses Kamera di Pengaturan perangkat.',
  noPhotoCaptured: 'Tidak ada foto yang diambil.',
  simulatorCameraHint:
    'Di simulator, aktifkan kamera terlebih dahulu melalui Simulator → Camera → Front Camera, lalu coba SOS lagi. Untuk foto asli, uji pada iPhone fisik.',
  notSignedInReopenApp:
    'Anda belum masuk. Tutup dan buka kembali aplikasi, lalu coba lagi.',
  accountMismatchSignOut: 'Akun tidak cocok. Silakan keluar lalu masuk kembali.',
  storageUploadUnauthorized:
    'Tidak dapat mengunggah foto saat ini. Silakan coba lagi sebentar lagi.',
  storageNotSetup:
    'Tidak dapat mengunggah foto saat ini. Silakan coba lagi sebentar lagi.',
  noNetworkConnection:
    'Tidak ada koneksi internet. Periksa Wi-Fi atau data seluler, lalu coba lagi.',
  connectionFailedTitle: 'Koneksi gagal',
  connectionFailedBody:
    'KidGate tidak dapat terhubung. Periksa Wi-Fi atau data seluler, lalu pilih Hubungkan kembali.',
  reconnect: 'Hubungkan kembali',
  unableToUploadPhoto: 'Tidak dapat mengunggah foto. Silakan coba lagi.',
  premiumSubscriptionRequired:
    'Fitur ini butuh Premium. Batas harian, Jam Diblokir, lokasi, dan SOS tetap gratis.',
  trialEndedCannotJoinFamily:
    'Masa uji coba gratis Anda telah berakhir. Silakan berlangganan Premium untuk bergabung dengan keluarga lain.',

  notFamilyMember:
    'Anda bukan lagi anggota keluarga ini. Minta pemilik keluarga untuk mengundang Anda kembali.',
  familyNotCreated:
    'Silakan buat keluarga Anda terlebih dahulu, lalu undang orang tua lainnya.',
  childDeviceNotAllowed:
    'Ini adalah perangkat anak sehingga tidak dapat mengelola pengaturan keluarga.',
  deviceCredentialMissing:
    'Perangkat ini perlu dihubungkan kembali. Tutup lalu buka kembali KidGate, kemudian coba lagi.',
  deviceNotFound: 'Perangkat tersebut sudah tidak ada di keluarga Anda.',
  registerParentDeviceFirst:
    'Atur perangkat ini sebagai perangkat orang tua terlebih dahulu, lalu coba lagi.',
  pairingCodeFormat: 'Masukkan kode yang terdiri dari 6 karakter.',
  pairingCodeUsed: 'Kode tersebut sudah digunakan. Silakan minta kode baru.',
  pairingCodeExpiredChild:
    'Kode tersebut telah kedaluwarsa. Minta anak Anda membuat kode baru.',
  pairingCodeExpiredParent:
    'Kode tersebut telah kedaluwarsa. Minta kode baru dari orang tua lainnya.',
  pairingOwnFamily: 'Ini adalah keluarga Anda sendiri, jadi tidak perlu bergabung.',
  pairingSessionNotFound: 'Permintaan pemasangan ini sudah tidak tersedia.',
  pairingAlreadyCompleted: 'Perangkat ini sudah dipasangkan.',
  pairingDeclined: 'Permintaan pemasangan ditolak di perangkat lain.',
  pairingNoParentWaiting:
    'Tidak ada orang tua yang menunggu konfirmasi. Mulai proses pemasangan lagi dari perangkat orang tua.',
  pairingRequestExpired: 'Permintaan pemasangan telah kedaluwarsa. Silakan mulai lagi.',
  joinRequestNotFound: 'Permintaan bergabung ini sudah tidak tersedia.',
  joinRequestResolved: 'Permintaan bergabung ini sudah dijawab.',
  joinRequestExpired:
    'Permintaan bergabung telah kedaluwarsa. Silakan minta undangan baru.',
  timeRequestPendingExists:
    'Anda sudah memiliki permintaan yang masih menunggu jawaban.',
  timeRequestCooldown: 'Tunggu sebentar sebelum mengirim permintaan lainnya.',
  deviceClockOutOfRange:
    'Tanggal dan waktu pada perangkat ini tampaknya tidak benar. Atur agar diperbarui secara otomatis.',
  locationSharingDisabled:
    'Berbagi lokasi dinonaktifkan pada perangkat ini. Aktifkan di Pengaturan perangkat, lalu coba lagi.',
  childDeviceNoPushToken:
    'Perangkat anak ini belum dapat menerima permintaan. Buka KidGate di perangkat anak dan izinkan Notifikasi.',
  unableToRequestLocation:
    'Tidak dapat meminta pembaruan lokasi saat ini. Silakan coba lagi.',
  unableToVerifyPurchase:
    'Tidak dapat memverifikasi pembelian tersebut. Silakan coba lagi sebentar lagi.',
  noPurchasesToRestore: 'Tidak ada pembelian yang dapat dipulihkan untuk akun ini.',
  noActiveSubscription: 'Tidak ditemukan langganan aktif untuk akun ini.',
  unableToRestorePurchases:
    'Tidak dapat memulihkan pembelian Anda saat ini. Silakan coba lagi.',
  alreadyInFamily: 'Anda sudah menjadi anggota keluarga ini.',
  leaveFamilyBeforeJoining:
    'Silakan keluar dari keluarga Anda saat ini sebelum bergabung dengan keluarga lain.',
  deviceLimitReached:
    'Paket ini mencakup satu perangkat anak. Berlangganan untuk menambah lagi.',
};
