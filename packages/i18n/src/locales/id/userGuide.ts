export const userGuide = {
  title: 'Panduan pengguna',
  subtitle:
    'Bantuan langkah demi langkah untuk izin, penyandingan perangkat, kontrol harian, dan fitur keamanan.',
  stepLabel: 'Langkah {{n}}',
  stepsSectionTitle: 'Langkah-langkah',
  tipTitle: 'Tips',
  // The Help Center video button: the wizard's own label (child.setupWizardWatchGuide).
  watchVideo: 'Lihat caranya',
  searchPlaceholder: 'Cari di panduan…',
  searchClear: 'Hapus pencarian',
  searchEmpty: 'Tidak ada yang cocok di panduan. Coba kata lain.',
  groups: {
    gettingStarted: {
      title: 'Memulai',
      description: 'Siapkan perangkat orang tua dan anak untuk pertama kalinya',
    },
    connection: {
      title: 'Hubungkan perangkat',
      description: 'Sandingkan perangkat anak atau undang orang tua lain',
    },
    permissions: {
      title: 'Izin aplikasi',
      description: 'Berikan izin yang diperlukan KidGate di perangkat anak',
    },
    controls: {
      title: 'Kontrol harian',
      description:
        'Batas harian, Jam Diblokir, Aplikasi yang Diblokir, Batas Aplikasi, Kunci perangkat, Permintaan waktu, dan Tugas hadiah',
    },
    safety: {
      title: 'Keamanan dan pemantauan',
      description: 'Lokasi, Check-In, SOS, Filter web, dan perlindungan',
    },
    reports: {
      title: 'Laporan dan riwayat',
      description:
        'Laporan waktu layar, riwayat web dan video, serta peringatan aplikasi dan pesan',
    },
    account: {
      title: 'Akun dan paket',
      description:
        'Premium, peringatan, bahasa, dasbor web, PIN, dukungan, dan penghapusan akun',
    },
  },
  topics: {
    getStartedParent: {
      title: 'Siapkan perangkat orang tua',
      summary:
        'Buat akun dan keluarga Anda, lalu hubungkan perangkat anak pertama Anda.',
      tip: 'Atur PIN Orang Tua sejak awal. Anda memerlukannya untuk mengubah pengaturan penting dan membuka kontrol di perangkat anak.',
      steps: {
        '1': 'Instal KidGate di perangkat Anda. Buka aplikasi dan pilih Ini perangkat orang tua.',
        '2': 'Pilih “Gabung ke KidGate”, lalu masuk dengan Google atau Apple, atau buat akun email.',
        '3': 'Di Keluarga, pilih Buat keluarga, lalu beri nama keluarga Anda (misalnya, “Keluarga Nguyen”). Nama ini akan muncul saat orang tua lain bergabung. Jika orang tua lain sudah membuat keluarga Anda, pilih Bergabung dengan keluarga.',
        '4': 'Jika Anda pemilik keluarga, atur PIN Orang Tua (6 digit) di Pengaturan, lalu Keamanan. Ingat atau simpan di tempat yang aman, dan jangan bagikan kepada anak.',
        '5': 'Disarankan: aktifkan Kunci Aplikasi dan buka kunci biometrik di Pengaturan agar orang lain tidak dapat membuka aplikasi orang tua di perangkat Anda.',
        '6': 'Buka Keluarga, lalu ketuk ikon pindai (Pindai kode). Kamera langsung terbuka: pindai kode QR di perangkat anak, atau pilih Masukkan kode secara manual dan ketik kodenya.',
        '7': 'Setelah perangkat anak tersambung, KidGate menanyakan siapa yang memakainya: pilih anak Anda (atau tambahkan anak), atau “Tidak ada” untuk perangkat bersama. Lalu buka profil anak di Keluarga (atau perangkat, jika perangkat belum ditetapkan ke anak). Atur Batas harian dan Jam Diblokir, lalu selesaikan izin bersama anak Anda.',
      },
    },
    getStartedChild: {
      title: 'Siapkan perangkat anak',
      summary: 'Instal KidGate di perangkat anak dan selesaikan izinnya.',
      tip: 'Lakukan ini bersama orang tua. Banyak layar izin hanya muncul sekali dan mudah terlewat jika dilakukan sendiri.',
      steps: {
        '1': 'Instal KidGate di perangkat anak. Buka aplikasi dan pilih Ini perangkat anak.',
        '2': 'Biarkan layar penyandingan tetap terbuka. Tunjukkan kode QR ke orang tua, atau bacakan kode 6 karakternya.',
        '3': 'Di perangkat orang tua, pindai kode QR atau masukkan kodenya. Di perangkat anak, konfirmasi orang tua saat diminta — hanya terima orang yang Anda kenal.',
        '4': 'Tunggu hingga layar utama menunjukkan bahwa perangkat sudah tersambung. Jangan paksa tutup KidGate selama penyiapan.',
        '5': 'Di layar Status, pilih “Lanjutkan penyiapan” pada kartu “Selesaikan penyiapan bersama orang tua”. “Siapkan perlindungan” lalu meminta setiap izin yang dibutuhkan KidGate (notifikasi, lokasi, kamera, dan hak khusus platform), satu langkah demi satu. Izinkan setiap izin, atau lewati langkah opsional untuk sementara.',
        '6': 'Biarkan KidGate tetap terpasang dan terhubung di perangkat anak. Selanjutnya orang tua mengelola batasan dari perangkat mereka sendiri.',
      },
    },
    connectChild: {
      title: 'Sambungkan ponsel atau tablet anak',
      summary:
        'Sandingkan perangkat anak baru ke keluarga Anda dengan kode QR atau kode.',
      tip: 'Kode memiliki batas waktu. Jika penyandingan gagal, pilih Kode baru di perangkat anak dan coba lagi. Paket gratis melapor dari satu perangkat dan hanya di perangkat itu Anda dapat memperketat aturan, jadi perangkat lain yang Anda sandingkan dimulai dalam keadaan Dijeda.',
      steps: {
        '1': 'Di perangkat anak: buka KidGate, lalu Ini perangkat anak. Biarkan layar kode QR tetap terlihat.',
        '2': 'Di perangkat orang tua: buka Keluarga, lalu ketuk ikon pindai (Pindai kode).',
        '3': 'Kamera langsung terbuka: izinkan akses kamera jika diminta, lalu sejajarkan kode QR perangkat anak di dalam bingkai.',
        '4': 'Atau gunakan kode: pilih Masukkan kode secara manual, ketik 6 karakter yang ditampilkan di perangkat anak, lalu lanjutkan.',
        '5': 'Di perangkat anak, baca layar konfirmasi dengan saksama. Pilih Ya, sambungkan hanya jika nama orang tua sudah benar.',
        '6': 'Tunggu perangkat orang tua mengonfirmasi koneksi. Pemilik keluarga lalu ditanya siapa yang memakai perangkat baru: pilih anak, atau “Tidak ada” untuk perangkat bersama. Perangkat akan muncul di bawah Keluarga.',
        '7': 'Buka perangkat baru dan periksa apakah perangkat itu menampilkan waktu Terakhir aktif (Terakhir terhubung di iPhone). Online berarti seseorang memakai perangkat dalam 10 menit terakhir, jadi perangkat yang tidak dipakai siapa pun terbaca Offline walau masih terhubung. Jika tidak ada waktu yang muncul, buka lagi KidGate di perangkat anak dan periksa koneksi jaringan.',
        '8': 'Selanjutnya, berikan izin di perangkat anak (lihat grup Izin aplikasi). Kontrol tidak akan berfungsi penuh sampai izin tersebut aktif.',
      },
    },
    connectComputer: {
      title: 'Sambungkan komputer (Mac atau Windows)',
      summary:
        'Instal KidGate di Mac atau PC Windows anak Anda, lalu sandingkan dengan cara yang sama seperti ponsel.',
      keywords: 'mac, macbook, windows, pc, laptop, komputer',
      tip: 'Siapkan KidGate saat akun milik anak Anda sendiri sedang masuk di komputer, dan jadikan akun tersebut akun standar (bukan administrator). Akun administrator dapat menghapus KidGate.',
      steps: {
        '1': 'Di komputer, buka kidgate.app/download lalu unduh KidGate untuk Mac atau Windows.',
        '2': 'Jalankan penginstal dan setujui permintaan akses administrator. Di Windows, jika muncul pesan bahwa Windows telah melindungi PC Anda, pilih Info selengkapnya (More info), lalu Tetap jalankan (Run anyway).',
        '3': 'Buka KidGate di komputer. Aplikasi menampilkan kode QR dan kode 6 karakter; tidak perlu masuk ke akun. Jika jendelanya tertutup, klik ikon KidGate di bilah menu (Mac) atau di area notifikasi (Windows).',
        '4': 'Di perangkat Anda, buka Keluarga, ketuk ikon pindai (Pindai kode), lalu pindai kode QR — atau pilih Masukkan kode secara manual dan ketik kodenya.',
        '5': 'Di komputer, periksa nama orang tua, lalu pilih Ya, sambungkan.',
        '6': 'Ikuti langkah-langkah di Selesaikan penyiapan perangkat ini. Di Mac, pilih Buka Pengaturan di samping Setujui pemfilteran web, lalu aktifkan KidGate di halaman yang terbuka — Filter web tidak akan berjalan sebelum Anda melakukannya. Di Mac, pilih Izinkan untuk Lokasi dan Kamera. Di Windows, aktifkan KidGate untuk keduanya di Pengaturan, di bagian Privasi & keamanan, jika langkah itu memintanya.',
        '7': 'Kembali ke perangkat Anda, pemilik keluarga memilih anak yang menggunakan komputer ini. Di Mac atau PC Windows, Anda memblokir aplikasi dari “Aplikasi terpasang”.',
      },
    },
    updateComputer: {
      title: 'Perbarui KidGate di komputer',
      summary:
        'Instal versi baru di Mac atau PC Windows anak Anda. Pembaruan dilakukan langsung di komputer tersebut, dengan kata sandi administratornya — bukan dari perangkat Anda.',
      keywords:
        'update, upgrade, versi terbaru, versi lama, kedaluwarsa, instal ulang, pasang ulang, admin, kontrol akun pengguna, uac, macbook, imac, laptop',
      tip: 'Jika anak Anda memakai akun standar (bukan administrator), seperti yang disarankan saat menyambungkan komputer, pembaruan memerlukan nama dan kata sandi administrator, sehingga anak Anda tidak dapat menginstalnya sendiri. Anda tidak perlu berganti akun: ketikkan keduanya di permintaan yang muncul. Komputer tetap tersambung dan aturannya tetap berlaku; tidak ada yang perlu disandingkan ulang.',
      steps: {
        '1': 'Anda menerima notifikasi untuk setiap komputer yang perlu diperbarui, dan halaman komputer tersebut menunjukkan bahwa versinya sudah usang. Tidak ada yang perlu diinstal dari perangkat Anda: datangi komputer tersebut.',
        '2': 'Di komputer, buka KidGate. Jika jendelanya tertutup, klik ikon KidGate di bilah menu (Mac) atau di area notifikasi (Windows). Di dekat bagian atas layar Status, ada banner bertuliskan Tersedia KidGate versi lebih baru — berwarna merah, dengan Pembaruan penting, jika pembaruan sebaiknya tidak ditunda.',
        '3': 'Pilih Ambil pembaruan. KidGate mengunduh versi baru lalu membuka penginstal. Jika unduhan gagal, kidgate.app/download akan terbuka: unduh KidGate di sana lalu jalankan, seperti saat pertama kali Anda menginstalnya.',
        '4': 'Di Mac, ikuti petunjuk penginstal dan masukkan nama serta kata sandi administrator saat diminta. Di Windows, Windows terlebih dahulu menanyakan apakah aplikasi ini boleh membuat perubahan: masukkan kata sandi administrator jika diminta, pilih Ya (Yes), lalu ikuti petunjuk penginstal.',
        '5': 'Biarkan komputer menyala sampai KidGate berjalan lagi dengan sendirinya. Kembali ke perangkat Anda, komputer tersebut tidak lagi ditandai usang (di dasbor web, muat ulang halamannya).',
      },
    },
    connectTv: {
      title: 'Sambungkan Android TV',
      summary:
        'Instal KidGate di Android TV dan sandingkan dari perangkat Anda, tanpa perlu mengetik dengan remote.',
      keywords: 'android tv, google tv, televisi, tv, box',
      tip: 'TV tidak memiliki Lokasi, SOS, Check-In, maupun Permintaan waktu, dan aplikasi yang diblokir ditutup setelah terbuka, bukan dicegah terbuka. Data waktu layar bisa terlambat masuk hingga satu jam. TV tanpa layanan Google Play tidak menerima push, sehingga perintah kunci, buka kunci, atau perubahan aturan bisa memerlukan hingga 30 menit untuk sampai.',
      steps: {
        '1': 'Di TV, buka Google Play, cari KidGate, lalu instal.',
        '2': 'Buka KidGate di TV. Aplikasi menampilkan kode QR dan kode 6 karakter; tidak perlu masuk ke akun.',
        '3': 'Di perangkat Anda, buka Keluarga, ketuk ikon pindai (Pindai kode), lalu pindai kode QR di TV — atau pilih Masukkan kode secara manual dan ketik kodenya.',
        '4': 'TV akan tersambung sendiri dalam beberapa detik. Tidak ada yang perlu dikonfirmasi dengan remote.',
        '5': 'Ikuti langkah Siapkan perlindungan di TV: pilih Setuju untuk mengaktifkan Aksesibilitas, pilih Buka Pengaturan untuk Akses Penggunaan dan Tampil di atas aplikasi lain, lalu pilih Aktifkan VPN dan setujui koneksinya agar Filter web dapat berjalan.',
        '6': 'Jika suatu pengaturan tidak tetap aktif, mulai ulang TV dan coba lagi. Anda dapat membuka lagi Siapkan perlindungan dari layar utama KidGate di TV.',
        '7': 'Kembali ke perangkat Anda, pemilik keluarga memilih anak yang menggunakan TV ini. Anda memblokir aplikasi TV dari “Aplikasi terpasang”.',
      },
    },
    connectChrome: {
      title: 'Sambungkan ekstensi Chrome',
      summary:
        'Tambahkan filter web KidGate ke Chrome di Chromebook, Mac, atau PC. Ekstensi ini muncul sebagai perangkat tersendiri.',
      keywords: 'chromebook, ekstensi chrome, ekstensi browser',
      tip: 'Ekstensi ini hanya memfilter Chrome: tidak memfilter browser lain, dan tidak memfilter jendela Samaran kecuali Anda mengizinkannya. Di chrome://extensions, buka Detail untuk KidGate lalu aktifkan Izinkan dalam mode Samaran. Ekstensi ini tidak memiliki Batas harian, Jam Diblokir, Kunci perangkat, Aplikasi yang Diblokir, atau waktu layar; semuanya memerlukan ponsel, komputer, atau TV.',
      steps: {
        '1': 'Di Chrome pada komputer anak Anda, buka Chrome Web Store, cari KidGate, lalu pilih Tambahkan ke Chrome.',
        '2': 'Pilih ikon KidGate di toolbar Chrome. Jika tidak terlihat, sematkan dari menu Ekstensi (ikon kepingan puzzle). Pop-up akan menampilkan kode QR dan kode 6 karakter; biarkan tetap terbuka selama penyandingan.',
        '3': 'Di perangkat Anda, buka Keluarga, ketuk ikon pindai (Pindai kode), lalu pindai kode QR — atau pilih Masukkan kode secara manual dan ketik kodenya.',
        '4': 'Di pop-up KidGate, periksa nama orang tua, lalu pilih Ya, sambungkan.',
        '5': 'Kembali ke perangkat Anda, pemilik keluarga memilih anak yang menggunakan ekstensi ini; lalu aktifkan Filter web untuknya. Sebelum itu, ekstensi akan menampilkan Tidak aktif.',
        '6': 'Opsional, dengan Premium: untuk melihat video apa saja yang ditonton, buka Video yang ditonton dan aktifkan Rekam video yang ditonton untuk ekstensi ini.',
      },
    },
    inviteParent: {
      title: 'Undang orang tua lain',
      summary:
        'Biarkan orang tua kedua bergabung dengan keluarga yang sama dan mengelola perangkat anak yang sama.',
      tip: 'Hanya pemilik keluarga yang dapat menyetujui permintaan bergabung. Setujui secepatnya, karena permintaan dapat kedaluwarsa. Satu keluarga dapat memiliki hingga 3 orang tua di paket gratis dan selama masa uji coba, serta hingga 6 dengan Premium.',
      steps: {
        '1': 'Di perangkat pemilik keluarga, buka Keluarga. Jika keluarga Anda belum punya nama, ketuk +, pilih Buat keluarga, lalu beri nama.',
        '2': 'Ketuk + lalu pilih Undang orang tua.',
        '3': 'Tunjukkan kode QR undangan ke orang tua lain, atau bagikan kode undangannya.',
        '4': 'Di perangkat orang tua lain: buka KidGate sebagai orang tua, buka Keluarga, lalu ketuk ikon pindai (Pindai kode). Kemudian pindai kode QR undangan atau masukkan kodenya.',
        '5': 'Kembali di perangkat pemilik, buka permintaan yang tertunda dan pilih Setujui. Tolak jika Anda tidak mengenali orang tersebut.',
        '6': 'Orang tua baru akan melihat perangkat anak yang sama dan dapat membantu mengelola batasan. Beberapa tindakan, seperti mengganti nama atau menghapus perangkat, tetap hanya untuk pemilik.',
      },
    },
    joinFamily: {
      title: 'Gabung dengan keluarga yang sudah ada',
      summary: 'Gunakan undangan dari pemilik keluarga untuk menjadi co-parent.',
      tip: 'Jika permintaan persetujuan kedaluwarsa, minta kode QR atau kode undangan baru dari pemilik.',
      steps: {
        '1': 'Instal KidGate dan masuk sebagai orang tua di perangkat Anda.',
        '2': 'Buka Keluarga, lalu ketuk ikon pindai (Pindai kode).',
        '3': 'Pindai kode QR undangan pemilik, atau pilih Masukkan kode secara manual lalu ketik kode undangan 6 karakter.',
        '4': 'Tunggu pemilik menyetujui. Biarkan aplikasi tetap terbuka sampai Anda melihat bahwa Anda telah bergabung dengan keluarga.',
        '5': 'Pastikan perangkat anak muncul di bawah Keluarga. Buka salah satu perangkat untuk melihat status dan kontrolnya.',
      },
    },
    manageDevices: {
      title: 'Ganti nama atau hapus perangkat',
      summary:
        'Beri perangkat nama yang mudah dikenali semua orang, atau putuskan perangkat yang tidak dipakai anak lagi.',
      keywords:
        'lepas pasangan, putuskan, hapus perangkat, ponsel lama, ponsel baru, dijual, ganti nama, reset',
      tip: 'Hanya pemilik keluarga yang dapat mengganti nama atau menghapus perangkat. Penghapusan tidak dapat dibatalkan: waktu layar, lokasi, riwayat web dan video, aktivitas, daftar aplikasi, peringatan SOS, Check-In, permintaan, dan tugas hadiah perangkat ikut dihapus. Untuk melindunginya lagi, sambungkan sebagai perangkat baru.',
      steps: {
        '1': 'Untuk mengganti nama perangkat, buka perangkat dari Keluarga atau dari profil anak, lalu pilih Ubah di samping namanya.',
        '2': 'Masukkan nama yang langsung dikenali semua orang tua, lalu simpan.',
        '3': 'Untuk menghapus perangkat, buka perangkat, pilih Hapus perangkat di bagian bawah layarnya, lalu konfirmasi. Di tab Perangkat anak pada kartu keluarga, Anda juga bisa menggeser perangkat ke kiri.',
        '4': 'Perangkat keluar dari keluarga Anda. Ponsel menampilkan bahwa perangkat telah dihapus; komputer, TV, atau ekstensi Chrome kembali ke layar penyandingan.',
        '5': 'Untuk memakai perangkat lagi, misalnya setelah direset atau diberikan ke anak lain, sambungkan sebagai perangkat baru: buka Keluarga, lalu ketuk ikon pindai (Pindai kode).',
      },
    },
    androidPermissions: {
      title: 'Izin Android (perangkat anak)',
      summary:
        'Aktifkan Akses Penggunaan, Tampil di atas aplikasi lain, Aksesibilitas, baterai, dan izin terkait.',
      keywords:
        'aksesibilitas, akses penggunaan, tampil di atas aplikasi lain, notifikasi, admin perangkat, perlindungan penghapusan, mikrofon, vpn, izinkan',
      tip: 'Kelengkapan lebih penting daripada urutan. Selesaikan setiap langkah yang ditawarkan panduan penyiapan, termasuk yang opsional, sebelum Anda mengandalkan penguncian atau Jam Diblokir. Langkah yang Anda lewati tetap ada di layar Status sampai Anda menyelesaikannya.',
      steps: {
        '1': 'Buka KidGate di perangkat anak lalu masuk ke Status. Pada kartu “Selesaikan penyiapan bersama orang tua”, pilih “Lanjutkan penyiapan” (setelah langkah wajib selesai, kartu itu berbunyi “Perlindungan inti aktif”, dengan “Perkuat sekarang”). “Siapkan perlindungan” lalu memandu izin satu per satu, sesuai urutan di bawah.',
        '2': 'Akses Penggunaan: buka layar sistem, lalu cari KidGate, lalu aktifkan. Ini diperlukan untuk pelacakan waktu layar dan batasan.',
        '3': 'Bantuan kunci Aksesibilitas: baca penjelasan yang tampil lalu pilih Setuju; halaman Aksesibilitas akan terbuka. Jika daftar terbuka, cari KidGate di Aplikasi terpasang / diunduh, aktifkan, lalu pilih Izinkan pada konfirmasi Android. Ini menjaga penguncian tetap diterapkan.',
        '4': 'Tampil di atas aplikasi lain: izinkan KidGate, agar layar kunci dapat muncul di atas aplikasi lain. Lalu Notifikasi: pilih Izinkan. KidGate memerlukan notifikasi perangkat ini untuk persetujuan waktu dan pengingat.',
        '5': 'Lokasi: pilih “Izinkan sepanjang waktu”, jika tidak peta hanya diperbarui saat KidGate terbuka. Jika Filter web aktif, langkah berikutnya meminta koneksi VPN: pilih Aktifkan VPN dan setujui permintaan Android.',
        '6': 'Baterai tanpa batasan: pilih Izinkan saat diminta. Jika tidak ada permintaan yang muncul: Info aplikasi, lalu Baterai, lalu Tanpa batasan.',
        '7': 'Alarm & pengingat: izinkan agar Jam Diblokir mulai dan berakhir tepat waktu. Lalu Cegah penghapusan: pilih Izinkan, kemudian Aktifkan pada layar konfirmasi Android. Setelah itu, untuk menghapus KidGate perlu mematikan ini terlebih dahulu, dan orang tua akan menerima peringatan.',
        '8': 'Peringatan pesan: pilih “Izinkan akses notifikasi” dan aktifkan KidGate di daftar yang terbuka; ini baru berpengaruh setelah orang tua mengaktifkan Peringatan pesan. Lalu Kamera (untuk foto Check-In dan SOS) dan mikrofon (untuk suara SOS): izinkan saat aplikasi digunakan. Saat panduan menampilkan “Selesai”, penyiapan sudah rampung.',
      },
    },
    iosScreenTime: {
      title: 'Waktu Layar iOS (perangkat anak)',
      summary:
        'Izinkan Penggunaan Aplikasi & Situs Web agar penguncian, jadwal, dan pemilihan aplikasi dapat berfungsi.',
      keywords: 'durasi layar, screen time, family controls, iphone, ipad, otorisasi',
      tip: 'Jika otorisasi gagal, KidGate menjelaskan sebabnya: perangkat memerlukan kode sandi, aplikasi lain sudah mengendalikan Waktu Layar, atau pembatasan menghalangi KidGate menggunakannya. Perbaiki di Pengaturan iOS, lalu coba lagi.',
      steps: {
        '1': 'Buka KidGate di perangkat anak lalu masuk ke layar “Status”. Pada kartu “Selesaikan penyiapan bersama orang tua”, pilih “Lanjutkan penyiapan” (setelah langkah wajib selesai, kartu itu berbunyi “Perlindungan inti aktif”, dengan “Perkuat sekarang”).',
        '2': 'Di “Siapkan perlindungan”, pilih “Izinkan Penggunaan Aplikasi & Situs Web”.',
        '3': 'Pada dialog sistem, pilih Izinkan. Mohon jangan menutup dialog tanpa memilih.',
        '4': 'Kembali ke KidGate. Setelah otorisasi berhasil, panduan beralih ke langkah berikutnya.',
        '5': 'Jika izin sebelumnya ditolak: buka Pengaturan iOS, cari KidGate, aktifkan Waktu Layar di halaman itu, lalu buka lagi KidGate.',
        '6': 'Untuk memilih aplikasi yang diblokir: di perangkat anak, buka Pengaturan KidGate, lalu pilih Buka kunci dengan PIN Orang Tua, lalu buka Aplikasi yang Diblokir, lalu simpan.',
        '7': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Aplikasi, dan pastikan daftarnya telah tersinkronisasi. Aktifkan pemblokiran saat sudah siap.',
      },
    },
    oemKeepRunning: {
      title: 'Menjaga KidGate tetap berjalan (pengaturan pabrikan)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei, dan perangkat serupa sering menjeda aplikasi latar belakang.',
      keywords:
        'xiaomi, samsung, oppo, vivo, huawei, realme, hemat baterai, mulai otomatis, berhenti bekerja, tertutup di latar belakang',
      tip: 'Setelah mengubah aturan baterai, mulai ulang perangkat anak sekali, buka lagi KidGate, lalu uji penguncian dari perangkat orang tua.',
      steps: {
        '1': 'Buka KidGate, masuk ke Status, lalu buka Siapkan perlindungan. Cari langkah Izinkan mulai otomatis; langkah ini hanya muncul pada perangkat yang produsennya memerlukannya.',
        '2': 'Izinkan mulai otomatis untuk KidGate di layar keamanan pabrikan (istilahnya berbeda-beda tergantung perangkat).',
        '3': 'Atur penggunaan baterai KidGate ke Tanpa batasan, baik di pengaturan Android maupun menu baterai vendor, jika keduanya ada.',
        '4': 'Nonaktifkan daftar “aplikasi tidur”, “aplikasi tidur nyenyak”, atau “istirahatkan aplikasi” yang menyertakan KidGate.',
        '5': 'Jika pintasan tidak berfungsi, buka aplikasi Keamanan / Perawatan perangkat secara manual dan cari KidGate, Mulai otomatis, atau Baterai.',
        '6': 'KidGate tidak dapat membaca pengaturan produsen, jadi pilih Selesai pada langkah Izinkan mulai otomatis setelah Anda mengizinkannya di sana.',
      },
    },
    dailyLimit: {
      title: 'Atur Batas harian',
      summary:
        'Batasi berapa menit seorang anak boleh menggunakan perangkatnya setiap hari.',
      keywords: 'durasi layar, jam per hari, waktu habis, jatah, perpanjang',
      tip: 'Data penggunaan berasal dari perangkat anak. Jika penghitung tampak macet, buka KidGate di perangkat anak dan tunggu sinkronisasi.',
      steps: {
        '1': 'Di perangkat orang tua, buka Keluarga, lalu ketuk profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak).',
        '2': 'Di bawah Kontrol utama, pilih Batas harian.',
        '3': 'Pilih nilai menit per hari (atau ubah batas yang ada), lalu simpan. Untuk seorang anak, ini satu total yang dibagi di semua perangkatnya.',
        '4': 'Setelah perangkat anak melakukan sinkronisasi, pastikan menit yang terpakai hari ini tampil di samping batasnya.',
        '5': 'Saat batas tercapai, perangkat terkunci sampai tengah malam. Untuk memberi waktu tambahan hari ini, setujui permintaan waktu atau naikkan Batas harian. “Buka kunci” hanya melepas kunci yang Anda pasang sendiri.',
      },
    },
    blockedHours: {
      title: 'Atur Jam Diblokir',
      summary: 'Jadwalkan rentang waktu saat perangkat harus tetap terkunci.',
      keywords: 'jam tidur, malam, jam sekolah, jadwal, jeda',
      tip: 'Atur dulu jam sekolah dan rentang waktu tidur. Hindari rentang waktu yang tumpang tindih agar jadwal tetap jelas.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Jam Diblokir.',
        '2': 'Nyalakan sakelar “Aktifkan Jam Diblokir”. Sebelum aktif, layar tidak menampilkan rentang waktu dan tidak ada cara untuk menambahkannya.',
        '3': 'Jadwal baru dimulai dengan satu rentang, 22:00 sampai 07:00. Ketuk rentang untuk mengatur waktunya di lingkaran jam dan hari pengulangannya. Untuk rentang lain, pilih “Tambah rentang waktu” atau salah satu pilihan di “Tambah cepat”.',
        '4': 'Setiap perubahan langsung tersimpan. Untuk menghapus rentang, geser rentang itu ke kiri, atau buka lalu pilih “Hapus”.',
        '5': 'Di perangkat anak Android, pastikan izin Alarm & pengingat masih diizinkan agar rentang waktu mulai dan berakhir tepat waktu. Di iPhone atau iPad, pastikan izin Waktu Layar masih diizinkan.',
        '6': 'Selama rentang aktif, kartu Jam Diblokir menampilkan Jam Diblokir aktif · terkunci. “Buka kunci” tidak mengakhiri rentang: untuk mengakhirinya lebih awal, matikan “Aktifkan Jam Diblokir” atau ubah waktunya.',
      },
    },
    blockedApps: {
      title: 'Blokir aplikasi tertentu',
      summary:
        'Blokir aplikasi dari “Aplikasi terpasang”. Di iPhone, pilih aplikasinya langsung di iPhone itu.',
      keywords:
        'blokir aplikasi, blokir app, tiktok, facebook, instagram, game, roblox, sembunyikan aplikasi',
      tip: 'Perangkat anak yang terhubung menerima setiap perubahan dalam satu menit. Di iOS, Apple mungkin menyembunyikan nama aplikasi yang sebenarnya dari perangkat orang tua, dan aplikasi dipilih di iPhone dengan PIN Orang Tua.',
      steps: {
        '1': 'Di perangkat Anda, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu “Aplikasi”, lalu “Aplikasi terpasang”.',
        '2': 'Ketuk aplikasi dan pilih “Blokir”. Memblokir aplikasi baru butuh Premium.',
        '3': 'Aplikasi akan tertutup di perangkat anak begitu dibuka. Untuk mengizinkannya lagi, ketuk aplikasi itu dan pilih “Buka blokir”.',
        '4': 'Di iPhone, pilih aplikasinya langsung di iPhone itu: buka KidGate, lalu Pengaturan, pilih “Buka kunci dengan PIN Orang Tua”, lalu buka “Aplikasi yang Diblokir”.',
        '5': 'Lalu nyalakan sakelar “Aktifkan Aplikasi yang Diblokir” di perangkat Anda. Status akan menunjukkan “Pemblokiran aktif”.',
        '6': 'Uji dengan membuka aplikasi yang diblokir di perangkat anak. Aplikasi tersebut harus dibatasi sesuai aturan platform.',
        '7': 'Untuk mengubah daftar di iPhone nanti, ulangi pemilihan di iPhone itu dengan PIN Orang Tua.',
      },
    },
    appLimits: {
      title: 'Atur Batas Aplikasi',
      summary:
        'Tetapkan batas waktu per hari untuk aplikasi tertentu, di luar Batas harian.',
      keywords: 'batas waktu aplikasi, menit per aplikasi, tiktok, youtube, game',
      tip: 'Batas Aplikasi tidak tersedia di iPhone atau iPad. Di komputer atau TV, aplikasi yang mencapai batasnya ditutup setelah terbuka, bukan dicegah terbuka.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Aplikasi. Setiap perangkat punya batasnya sendiri; jika ada lebih dari satu perangkat, setiap aplikasi menunjukkan di perangkat mana aplikasi itu berada.',
        '2': 'Buka Aplikasi terpasang, ketuk aplikasinya, lalu pilih Atur batas waktu. Batas baru dimulai dari 60 menit.',
        '3': 'Atur setiap batas dengan dial atau pilihan cepat, dari 5 menit hingga 8 jam per hari. Anda dapat membatasi hingga 20 aplikasi.',
        '4': 'Pilih Simpan batas. Batas itu langsung berlaku, dan semua batas disetel ulang tengah malam di perangkat anak.',
        '5': 'Batas harian tetap berlaku untuk seluruh perangkat, jadi aplikasi bisa terkunci sebelum batasnya sendiri habis. Untuk menghapus batas, ketuk batas itu di bagian Batas saat ini pada tab Ringkasan, lalu pilih Hapus batas.',
      },
    },
    lockUnlock: {
      title: 'Kunci dan buka kunci perangkat',
      summary: 'Kunci perangkat anak dengan segera, atau pulihkan akses.',
      tip: 'Di Android, penguncian paling kuat saat Tampil di atas aplikasi lain dan Aksesibilitas keduanya aktif. Di iOS, penguncian bergantung pada izin Waktu Layar, dan jika KidGate ditutup di iPhone, kunci muncul setelah KidGate berjalan lagi.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak).',
        '2': 'Pilih Kunci semua untuk mengunci semua perangkat milik anak tersebut, atau buka satu perangkat lalu pilih Kunci perangkat.',
        '3': 'Tunggu beberapa detik. Status akan berubah menjadi Terkunci. Jika tidak ada perubahan, buka KidGate di perangkat anak dan periksa kembali izinnya.',
        '4': 'Untuk memulihkan akses, pilih Buka kunci semua (atau Buka kunci di layar perangkat).',
        '5': 'Opsional: Anda juga dapat mengunci atau membuka kunci dengan cepat dari Keluarga jika pintasan tersebut muncul di kartu perangkat.',
        '6': 'Ponsel atau komputer yang terkunci tetap memungkinkan anak Anda mengirim SOS. Di Android, panggilan selalu berfungsi, dan SOS juga membuka peta dan pesan selama 5 menit sementara yang lain tetap terkunci; SOS itu muncul di Aktivitas.',
      },
    },
    siri: {
      title: 'Gunakan Siri di iPhone',
      summary:
        'Kunci atau buka kunci perangkat anak, beri menit ekstra, dan dengarkan waktu layar hari ini dengan suara.',
      keywords:
        'suara, perintah suara, bicara, tanpa tangan, asisten, Pintasan, voice, inggris',
      tip: 'Siri belum mendukung bahasa Indonesia, jadi atur bahasa Siri ke English dan ucapkan perintah berbahasa Inggris di bawah. Perintah suara berfungsi di iPhone orang tua, untuk setiap orang tua dalam keluarga. Ponsel Android dan dasbor web tidak memilikinya.',
      steps: {
        '1': 'Masuk ke KidGate di iPhone Anda dan buka aplikasinya sekali. Dari situ Siri mengenal nama anak-anak Anda, dan anak atau perangkat yang ditambahkan kemudian dikenali Siri saat Anda membuka KidGate berikutnya. Jika Siri meminta Anda masuk lebih dulu, buka KidGate di iPhone ini.',
        '2': 'Ucapkan kepada Siri “KidGate, lock Rina”, dengan nama anak Anda. Semua perangkat anak itu terkunci, sama seperti Kunci semua. Perangkat yang belum ditetapkan ke anak dipanggil dengan namanya sendiri.',
        '3': 'Ucapkan “KidGate, unlock Rina” untuk mengembalikan akses. Untuk semua perangkat keluarga sekaligus, ucapkan “KidGate, lock everything” atau “KidGate, unlock everything”.',
        '4': 'Ucapkan “KidGate, give Rina extra minutes” untuk menambah 15 menit hari ini di semua perangkat anak itu. Waktu ekstra berakhir tengah malam.',
        '5': 'Ucapkan “KidGate screen time for Rina” untuk mendengar waktu layar hari ini. Siri membacakan angka terakhir yang ditampilkan KidGate kepada Anda, jadi buka KidGate dulu untuk angka terbaru.',
        '6': 'Aplikasi Pintasan menampilkan perintah yang sama di bawah KidGate, siap dijalankan dengan satu ketukan. Untuk memberi jumlah lain, dari 5 sampai 180 menit, tambahkan tindakan Beri anak menit ekstra ke pintasan Anda sendiri dan atur menitnya di sana.',
      },
    },
    pauseBrowsing: {
      title: 'Jeda penjelajahan untuk sementara',
      summary:
        'Blokir web di satu perangkat selama 5 menit hingga 8 jam. Telepon dan aplikasi offline tetap berjalan.',
      keywords: 'matikan internet, jeda wifi, tanpa jaringan, offline, jeda',
      tip: 'Di ekstensi Chrome, jeda hanya berlaku untuk Chrome. Untuk jeda yang berulang setiap hari, gunakan Jam Diblokir.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Jeda penjelajahan di bagian Pemantauan keamanan.',
        '2': 'Pilih durasi dengan dial atau pilihan cepat (30, 60, atau 120 menit), lalu konfirmasi.',
        '3': 'Web tetap diblokir di perangkat tersebut sampai waktunya habis. Pengaturan Filter web tidak berubah, dan jeda tetap berjalan meskipun Filter web nonaktif. Di komputer, browser ditutup sampai jeda berakhir.',
        '4': 'Untuk mengakhirinya lebih awal, buka perangkat, ketuk kartu Jeda penjelajahan, lalu pilih Lanjutkan. Sisa menitnya tidak disimpan.',
        '5': 'Dari profil anak, jeda berlaku untuk satu perangkat. Jika anak Anda memakai beberapa perangkat, jeda masing-masing dari layar perangkatnya sendiri.',
      },
    },
    timeRequests: {
      title: 'Tanggapi Permintaan waktu',
      summary:
        'Anak Anda dapat meminta menit tambahan saat Batas harian hampir habis, lalu Anda menyetujui atau menolaknya dari perangkat Anda.',
      tip: 'Permintaan hanya muncul jika perangkat memiliki Batas harian. Menit yang disetujui berlaku untuk hari ini, di perangkat yang meminta, dan tidak membuka kunci yang Anda pasang maupun Jam Diblokir. Android TV dan ekstensi Chrome tidak dapat mengirim permintaan.',
      steps: {
        '1': 'Di perangkat anak, anak Anda memilih Minta waktu tambahan di layar utama KidGate (di Android, juga dari layar kunci saat batas tercapai), memilih jumlah menit, menambahkan alasan jika mau, lalu mengirimnya.',
        '2': 'Anda akan menerima notifikasi. Buka KidGate: permintaan menunggu di kartu Perlu persetujuan di Keluarga, di profil anak, dan di perangkat.',
        '3': 'Periksa jumlah menit dan alasannya, lalu pilih Setujui untuk menambahkan tepat sejumlah menit itu untuk hari ini, atau Nanti saja untuk menolak.',
        '4': 'Perangkat anak menerima jawabannya, dan menit yang disetujui langsung berlaku. Setiap perangkat hanya bisa memiliki satu permintaan yang menunggu dalam satu waktu.',
        '5': 'Permintaan yang sudah dijawab tercantum di Aktivitas. Untuk menghentikan notifikasi ini di perangkat Anda, nonaktifkan Permintaan waktu di Notifikasi push, di Pengaturan.',
      },
    },
    rewardTasks: {
      title: 'Siapkan Tugas hadiah',
      summary:
        'Buat tugas kecil yang bisa diselesaikan anak Anda untuk mendapat menit ekstra hari ini.',
      tip: 'Menit bonus hanya dihitung jika perangkat memiliki Batas harian. Menit ditambahkan ke perangkat yang dipakai anak Anda untuk menandai tugas selesai. Tugas hadiah tidak tersedia di Android TV atau di ekstensi Chrome.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Tugas hadiah.',
        '2': 'Pilih Tugas baru (selama daftar masih kosong, Anda juga bisa mulai dengan templat). Masukkan tugasnya, pilih hadiah dalam menit (5 hingga 240), tingkat kesulitan, dan apakah tugas diulang Setiap hari atau Sekali, lalu pilih Buat tugas.',
        '3': 'Di perangkat anak, tugas muncul di bagian Dapatkan waktu ekstra. Setelah selesai, anak Anda memilih Sudah selesai.',
        '4': 'Anda akan menerima notifikasi. Tugas muncul di Perlu persetujuan (di Keluarga dan di profil anak) dan di Siap ditinjau (di layar Tugas hadiah). Pilih Setujui untuk menambahkan menitnya ke hari ini, atau Kembalikan agar anak Anda bisa mencoba lagi.',
        '5': 'Ketuk tugas untuk mengedit atau menghapusnya. Paket gratis dapat menjalankan hingga 10 tugas aktif sekaligus; Premium hingga 20.',
        '6': 'Setiap tugas bernilai 1 sampai 3 bintang sesuai tingkat kesulitannya, dan bintang dihitung setelah Anda menyetujui tugas. Dalam keluarga dengan 2 anak atau lebih, setiap anak melihat Papan bintang minggu ini di KidGate pada perangkatnya; papan itu dimulai ulang setiap minggu. Untuk menyembunyikannya, pemilik keluarga membuka Keluarga, lalu kartu keluarga, dan mematikan Papan bintang di tab Anak.',
      },
    },
    locationSharing: {
      title: 'Aktifkan berbagi lokasi',
      summary: 'Lihat lokasi terbaru anak Anda di perangkat orang tua.',
      keywords: 'gps, peta, di mana anak saya, cari ponsel, tempat',
      tip: 'Lokasi memerlukan izin di perangkat anak dan koneksi jaringan yang stabil. GPS di dalam ruangan bisa kurang akurat.',
      steps: {
        '1': 'Di perangkat anak, izinkan Lokasi untuk KidGate saat diminta (atau di Pengaturan sistem). Pilih “Izinkan sepanjang waktu” di Android, atau “Selalu” di iPhone atau iPad, jika tidak lokasi hanya diperbarui saat KidGate terbuka.',
        '2': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Lokasi.',
        '3': 'Aktifkan berbagi jika sedang nonaktif, lalu tunggu pembaruan pertama.',
        '4': 'Jika status masih menunggu, ketuk tombol perbarui, atau buka lagi layarnya.',
        '5': 'Opsional, dan termasuk dalam Premium: buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu bagian Peringatan, dan pilih Lokasi untuk mengatur Peringatan Tempat saat anak Anda memasuki atau meninggalkan lokasi yang disimpan.',
        '6': 'Jika ponsel tertinggal di dekat Anda, buka Lokasi lalu ketuk Bunyikan perangkat. iPhone tidak akan berbunyi saat dalam mode senyap atau mode Fokus aktif.',
      },
    },
    checkIn: {
      title: 'Minta Check-In',
      summary:
        'Minta anak Anda mengonfirmasi bahwa mereka aman, dengan lokasinya dan, dengan Premium, sebuah foto.',
      tip: 'Foto termasuk dalam Premium; paket gratis hanya meminta lokasi. Izin kamera di perangkat anak diperlukan untuk foto.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak).',
        '2': 'Pilih Check-In di bagian Pemantauan keamanan, lalu pilih Kirim di samping perangkat.',
        '3': 'Perangkat anak menerima notifikasi dan layar Check-In. Anak mengetuk untuk mengonfirmasi bahwa mereka baik-baik saja, atau untuk meminta bantuan.',
        '4': 'Dengan Premium, jika akses kamera diizinkan, KidGate melampirkan foto beserta lokasi jika memungkinkan. Di paket gratis, hanya lokasi yang dikirim.',
        '5': 'Di perangkat orang tua, Riwayat Check-In di layar yang sama menampilkan respons terbaru, dan fotonya jika ada.',
      },
    },
    sos: {
      title: 'Peringatan darurat SOS',
      summary:
        'Cara anak mengirim SOS, apa saja yang dikirim, dan cara orang tua menanggapinya.',
      keywords:
        'tombol panik, tolong, bantuan, bahaya, tidak aman, audio, suara, mikrofon, sirene, email, kakek, nenek, tetangga',
      tip: 'SOS berfungsi di ponsel dan komputer, tidak di TV atau ekstensi Chrome. Suara hanya direkam di ponsel. Uji sekali di rumah, sebelum Anda menambahkan Kontak tepercaya atau setelah Anda memberi tahu mereka, karena setiap SOS dikirim lewat email ke mereka. Sepakati dengan anak Anda kapan menggunakan SOS dan kapan Check-In sudah cukup.',
      steps: {
        '1': 'Di perangkat anak, buka SOS di KidGate. Di ponsel, ini adalah tombol di tengah bilah bawah.',
        '2': 'Tahan tombol SOS selama 5 detik. Jika dilepas lebih awal, pengiriman dibatalkan.',
        '3': 'Peringatan terkirim begitu KidGate mendapatkan lokasi, yang bisa memakan waktu hingga setengah menit; tanpa lokasi, peringatan tetap dikirim. Di ponsel, kamera lalu terbuka untuk mengambil foto, yang bisa dilewati. Jika mikrofon diizinkan saat penyiapan, suara hingga 15 detik direkam sejak SOS dikirim.',
        '4': 'Orang tua menerima notifikasi mendesak, bahkan selama Jam tenang. Jika KidGate sedang terbuka, peringatan muncul di layar, dengan Sirene SOS kecuali dinonaktifkan di Pengaturan.',
        '5': 'Buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu bagian Peringatan, dan pilih SOS. Setiap peringatan menampilkan lokasi (Buka di Maps), foto, dan Rekaman suara, yang bisa tiba sedikit setelah peringatan. Pilih Segera saya tangani untuk menandainya sudah ditanggapi.',
        '6': 'Agar orang di luar keluarga juga menerima email, buka Keluarga, lalu kartu keluarga, dan pilih Kontak tepercaya. Pilih Tambah kontak untuk menambahkan hingga 5 orang. Setiap ada SOS, mereka menerima email berisi nama perangkat dan lokasi terakhir yang diketahui, tanpa foto atau suara. Beri tahu mereka lebih dulu.',
      },
    },
    webFilter: {
      title: 'Batasi situs web tidak pantas',
      summary:
        'Aktifkan Filter web untuk konten tidak pantas jika platform mendukungnya.',
      keywords:
        'blokir situs, blokir link, blokir tautan, url, konten dewasa, pencarian aman, mode terbatas youtube, kategori, dns, dns pribadi, vpn, iphone, ipad',
      tip: 'Filter membaca nama situs, bukan halaman, dan jangkauannya bergantung pada perangkat. Ponsel memfilter browser dan banyak aplikasi. Mac tidak dapat memeriksa situs yang namanya disembunyikan browser, sekitar separuh kunjungan. Windows memeriksa Chrome, Edge, dan Firefox, hanya berdasarkan nama situs. Ekstensi Chrome hanya memfilter Chrome. Memilih kategori, daftar milik Anda sendiri, dan menjawab permintaan situs termasuk dalam Premium. Gabungkan Filter web dengan Aplikasi yang Diblokir untuk perlindungan yang lebih kuat.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Filter web.',
        '2': 'Aktifkan “Filter situs web tidak pantas” di bagian atas. Perubahan langsung berlaku, jadi tidak ada yang perlu disimpan. “Paksa SafeSearch” di layar yang sama juga mengunci Google, Bing, dan DuckDuckGo ke hasil aman dan YouTube ke Mode Terbatas, di Android, Android TV, dan Chrome. Di YouTube, Mode Terbatas juga menyembunyikan komentar dan ikut memblokir sebagian video biasa, jadi KidGate meminta konfirmasi sebelum menyalakannya.',
        '3': 'Di bawah “Apa yang diblokir”, pilih kategori yang ditolak. Tambahkan situs ke “Selalu izinkan” atau “Selalu blokir”, atau aktifkan “Hanya situs yang diizinkan” untuk menolak semuanya kecuali daftar izin Anda. Saat anak Anda meminta membuka situs yang diblokir, permintaannya menunggu di “Permintaan situs”. Kontrol ini termasuk dalam Premium; paket gratis memakai kumpulan kategori yang tetap.',
        '4': 'Periksa lagi nanti dari layar yang sama. Perubahan sampai ke perangkat anak dalam beberapa menit, dan situs yang sudah terbuka di sana bisa tetap dimuat sampai browser ditutup. Jika setelah itu perubahan belum sampai, buka lagi KidGate di perangkat anak agar pengaturan dapat tersinkronisasi.',
        '5': 'Di perangkat anak, buka KidGate dan setujui filter sekali. Di iPhone atau iPad, pilih Izinkan saat iOS meminta untuk menambahkan konfigurasi VPN, lalu masukkan kode sandi perangkat. Di Android, setujui permintaan VPN, lalu buka Setelan → Jaringan & internet → DNS Pribadi dan pilih Nonaktif, karena browser dapat melewati filter selama DNS Pribadi aktif. Di Mac, pilih Buka Pengaturan di samping Setujui pemfilteran web, lalu aktifkan KidGate.',
      },
    },
    protectionAlerts: {
      title: 'Peringatan perlindungan',
      summary: 'Dapatkan notifikasi saat izin penting di perangkat anak dinonaktifkan.',
      tip: 'Peringatan perlindungan berarti perlindungan KidGate melemah. Mohon pulihkan izin tersebut di perangkat anak sesegera mungkin.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu bagian Peringatan, dan pilih Peringatan perlindungan.',
        '2': 'Bagian Izin yang dipantau menunjukkan apakah setiap izin yang dibutuhkan KidGate masih aktif. Di bawahnya tercantum setiap perubahan selama 30 hari terakhir, misalnya Aksesibilitas atau Lokasi yang dinonaktifkan.',
        '3': 'Di perangkat anak, buka KidGate, lalu Status dan aktifkan kembali izin yang disebutkan.',
        '4': 'Kembali ke Peringatan perlindungan dan pastikan izin itu sudah tampil aktif lagi di bagian Izin yang dipantau.',
        '5': 'Jaga notifikasi tetap aktif di perangkat orang tua agar Anda cepat mengetahui perubahan.',
      },
    },
    usageReports: {
      title: 'Lihat laporan penggunaan',
      summary:
        'Lihat berapa lama setiap perangkat dipakai hari ini dan selama 30 hari terakhir, juga per anak, dan dalam laporan setiap hari Senin.',
      tip: 'Dengan paket gratis, Anda melihat total hari ini dan 3 aplikasi teratas, yang diperbarui saat Anda memeriksa. Premium menambahkan riwayat 30 hari, kapan setiap perangkat dipakai, 10 aplikasi teratas, laporan untuk setiap anak, dan laporan mingguan baru setiap hari Senin. iPhone dan iPad hanya melaporkan totalnya. Pada hari perangkat bergabung dengan keluarga, penggunaan sebelum itu mungkin tidak lengkap atau dihitung dalam “Aplikasi lain”.',
      steps: {
        '1': 'Buka Laporan. Bagian Hari ini menjumlahkan semua perangkat; di bawahnya ada Laporan mingguan, setiap anak (Per anak), dan setiap perangkat (Per perangkat).',
        '2': 'Ketuk perangkat untuk membuka Laporan Penggunaan perangkat itu: pemakaian hari ini dibandingkan Batas harian, 30 hari terakhir, Kapan layar menyala, dan Paling banyak dipakai. Anda juga dapat membukanya dari Penggunaan hari ini di layar perangkat.',
        '3': 'Ketuk profil anak untuk melihat satu laporan dari semua perangkatnya, untuk Hari ini, 7 hari, atau 30 hari. Waktu di dua layar sekaligus hanya dihitung sekali, jadi angkanya bisa lebih rendah daripada jumlah semua perangkat.',
        '4': 'Dengan Premium, Laporan mingguan terbaru tiba setiap Senin pagi, disertai notifikasi, untuk setiap minggu saat sebuah perangkat dipakai. Saat satu perangkat menonjol, laporan ini menyarankan satu hal untuk diubah dan membuka pengaturan yang tepat.',
        '5': 'Saat KidGate dibuka, setiap perangkat diminta mengirim angka terbaru, jadi pembaruannya bisa memakan waktu beberapa menit. Perangkat tanpa koneksi internet akan melapor saat kembali online.',
      },
    },
    screenTimeCounting: {
      title: 'Cara waktu layar dihitung',
      summary:
        'Apa saja yang menambah menit ke Batas harian dan laporan penggunaan, termasuk video yang diputar di jendela mengambang kecil.',
      keywords:
        'picture-in-picture, pip, video mengambang, pemutar mini, jendela kecil, youtube, musik, dijeda, latar belakang',
      tip: 'Di iPhone dan iPad, Durasi Layar Apple yang menentukan apa yang dihitung. Di Mac, suara video bisa tetap terdengar di balik kunci.',
      steps: {
        '1': 'Waktu dihitung selama sebuah aplikasi terbuka di layar anak. Layar utama, desktop komputer, layar kunci, dan KidGate sendiri tidak dihitung.',
        '2': 'Di ponsel Android atau komputer, video yang diputar di jendela mengambang kecil (picture-in-picture, PIP) dihitung untuk aplikasi yang memutarnya, bahkan saat aplikasi lain sedang terbuka di depan.',
        '3': 'Saat video mengambang itu diputar di atas aplikasi lain, kedua aplikasi menampilkan waktu itu di bagian Paling banyak dipakai, tetapi total hari itu hanya menghitungnya sekali.',
        '4': 'Video yang dijeda dan dibiarkan di jendela mengambangnya tetap dihitung selama jendela itu ada di layar. Tutup jendela itu agar tidak dihitung lagi.',
        '5': 'Di komputer, waktu saat perangkat terkunci tidak dihitung. Di komputer Windows, penguncian juga menjeda video dan musik di sebagian besar aplikasi, dan keduanya tetap terjeda saat kunci dibuka.',
      },
    },
    widget: {
      title: 'Tambahkan widget waktu layar',
      summary:
        'Lihat waktu layar setiap anak di layar utama Anda, dan biarkan anak melihat sisa waktunya di layar utamanya.',
      keywords:
        'layar utama, peluncur, sekali lihat, sisa waktu, sisa menit, iphone, android',
      tip: 'Widget berfungsi di iPhone, iPad, dan Android, tidak di komputer atau TV. Widget menampilkan angka terakhir yang diterima KidGate dan waktu pembaruan itu.',
      steps: {
        '1': 'Buka Pengaturan dan pilih Tambahkan widget ke layar utama. Di sebagian besar ponsel Android, Anda cukup mengonfirmasi letaknya. Jika tidak, KidGate menampilkan langkah untuk menambahkannya sendiri.',
        '2': 'Untuk menambahkannya sendiri, tekan lama area kosong di layar utama. Di iPhone, ketuk Edit (atau + di versi lama), lalu Tambah Widget. Di Android, ketuk Widget. Cari KidGate dan pilih widget Waktu layar.',
        '3': 'Setiap baris menampilkan waktu layar hari ini milik seorang anak dibandingkan dengan Batas harian, dan anak yang sudah mencapainya tampil paling atas. Maksimal 2 anak di iPhone dan 3 anak di Android. Perangkat yang tidak ditetapkan ke seorang anak tidak ditampilkan.',
        '4': 'Widget diperbarui saat Anda membuka KidGate. Saat aplikasi tertutup, dengan Premium, widget diperbarui paling sering setiap 20 menit, dan hanya saat ada anak yang memakai perangkat.',
        '5': 'Di ponsel anak, tambahkan widget Waktu tersisa dengan cara yang sama. Widget ini menampilkan sisa waktu hari ini, atau alasan perangkat terkunci, dan diperbarui saat KidGate terbuka di ponsel itu.',
      },
    },
    webHistory: {
      title: 'Periksa Riwayat web',
      summary:
        'Lihat situs mana saja yang diakses perangkat dan mana yang diblokir Filter web, hari demi hari.',
      keywords: 'riwayat penjelajahan, situs yang dikunjungi, browser, chrome, safari',
      tip: 'Riwayat web termasuk dalam Premium. Riwayat ini mencantumkan situs, bukan halaman atau menit, dan sebagian baris adalah lalu lintas latar belakang dari aplikasi. Android TV bisa terlambat hingga satu jam.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Riwayat web di bagian Pemantauan keamanan. Dari profil anak, riwayat menggabungkan semua perangkatnya.',
        '2': 'Setiap hari mencantumkan situs menurut jenisnya, beserta berapa kali masing-masing diakses. Pilih Hanya yang diblokir untuk melihat apa saja yang dihentikan Filter web.',
        '3': 'Untuk memblokir satu jenis situs sekaligus, buka bagian jenis itu dan pilih tombol Blokir di bagian akhirnya. Dari profil anak, ini berlaku untuk semua perangkatnya.',
        '4': 'Riwayat berasal dari Filter web, jadi hanya terisi selama filter berjalan di perangkat tersebut.',
        '5': 'Layar ini menampilkan 7 hari terakhir. Saat anak Anda meminta membuka situs yang diblokir, permintaannya muncul di Perlu persetujuan, bukan di sini.',
      },
    },
    videoHistory: {
      title: 'Lihat Video yang ditonton',
      summary:
        'Simpan daftar video YouTube yang ditonton anak Anda, beserta saluran dan waktunya.',
      keywords: 'youtube, shorts, video yang ditonton, riwayat tontonan',
      tip: 'Video yang ditonton termasuk dalam Premium dan hanya mencakup YouTube. Fitur ini berfungsi di ponsel Android dan di ekstensi Chrome, tetapi tidak di iPhone atau iPad. Di Mac atau PC, tambahkan ekstensi Chrome. Android TV hanya merekam video setelah KidGate memiliki akses notifikasi di TV tersebut, yang belum bisa diberikan dari layar TV mana pun; bahkan setelah itu, Shorts tidak dicantumkan.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Video yang ditonton di bagian Pemantauan keamanan.',
        '2': 'Aktifkan Rekam video yang ditonton. Opsi ini nonaktif sampai Anda mengaktifkannya, dan jika diaktifkan dari profil anak, berlaku untuk semua perangkatnya.',
        '3': 'Di ponsel Android, KidGate juga memerlukan akses notifikasi: di perangkat anak, buka Pengaturan KidGate, pilih Buka kunci dengan PIN Orang Tua, lalu Izinkan akses notifikasi di bagian Peringatan pesan. Shorts juga memerlukan Aksesibilitas.',
        '4': 'Video muncul per hari, beserta salurannya dan berapa kali masing-masing diputar. Ketuk salah satunya untuk mencarinya di YouTube.',
        '5': 'Di Mac atau PC, layar ini justru menunjukkan cara menambahkan ekstensi Chrome. Ekstensi merekam video sebagai perangkat tersendiri.',
      },
    },
    appAlerts: {
      title: 'Pantau pemasangan aplikasi',
      summary:
        'Lihat kapan aplikasi dipasang atau dihapus, lihat daftar aplikasi di perangkat, dan tahan aplikasi baru sampai Anda mengizinkannya.',
      tip: 'Fitur Setujui aplikasi baru dan daftar aplikasi terpasang tersedia gratis; riwayat pemasangan dan pemblokiran aplikasi baru termasuk dalam Premium. iPhone dan iPad tidak dapat melaporkan pemasangan; di sana, fitur Setujui aplikasi baru menyembunyikan App Store sebagai gantinya.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Aplikasi.',
        '2': 'Perubahan terbaru mencantumkan aplikasi yang dipasang dan dihapus, dari yang paling baru. Anda juga menerima notifikasi untuk masing-masing.',
        '3': 'Aplikasi terpasang mencantumkan isi perangkat, dan Ringkasan menampilkan grup Perlu diperiksa. Pilih Tandai aman untuk mengeluarkan aplikasi dari grup itu. Untuk menghentikan aplikasi, ketuk aplikasi itu dan pilih Blokir.',
        '4': 'Untuk menahan aplikasi baru sampai Anda mengizinkannya, buka Ringkasan lalu aktifkan Setujui aplikasi baru. Setiap aplikasi yang dipasang setelah itu tetap diblokir di perangkat.',
        '5': 'Saat ada aplikasi baru yang menunggu, pilih Izinkan di sampingnya agar aplikasi itu bisa dibuka.',
      },
    },
    messageAlerts: {
      title: 'Aktifkan Peringatan pesan',
      summary:
        'Dapatkan peringatan saat kata atau frasa yang mengkhawatirkan muncul di pesan atau pencarian di ponsel Android anak Anda. Anda melihat kata atau frasa yang ditandai, tidak pernah isi pesannya.',
      keywords: 'sms, messenger, whatsapp, kata kunci, perundungan, membaca pesan',
      tip: 'Peringatan pesan termasuk dalam Premium. Pesan hanya diperiksa di ponsel Android; pencarian juga diperiksa di ekstensi Chrome. Hanya kategori dan kata atau frasa yang ditandai yang sampai kepada Anda. Analisis AI tetap nonaktif kecuali ada orang tua yang mengaktifkannya untuk keluarga.',
      steps: {
        '1': 'Di ponsel Android anak, buka Pengaturan KidGate, pilih Buka kunci dengan PIN Orang Tua, lalu Izinkan akses notifikasi di bagian Peringatan pesan, dan aktifkan KidGate di daftar yang terbuka.',
        '2': 'Di perangkat Anda, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Peringatan pesan di bagian Peringatan, lalu ketuk ikon pengaturan di bagian atas. Jika anak Anda punya beberapa perangkat, pilih ponsel Android-nya terlebih dahulu.',
        '3': 'Aktifkan Pindai pesan yang diterima. Anda juga bisa mengaktifkan Tandai juga kata-kata kasar, serta memilih hingga 3 bahasa di Bahasa yang dipindai.',
        '4': 'Untuk juga memindai yang diketik dan dicari anak Anda: setelah “Pindai pesan yang diterima” aktif, perangkat anak menampilkan “Sebelum kamu mengizinkan” di bagian Peringatan pesan. Pilih Setuju di sana, lalu aktifkan “Pindai pesan yang diketik” dan “Pindai yang dicari anak” di perangkat Anda.',
        '5': 'Peringatan muncul di Peringatan terbaru beserta kategori dan kata atau frasa yang ditandai. Pilih Langkah berikutnya untuk saran cara membicarakannya dengan anak Anda.',
      },
    },
    childProfiles: {
      title: 'Tambah anak dan tetapkan perangkat',
      summary:
        'Buat profil untuk setiap anak, lalu tetapkan perangkat yang mereka pakai, agar aturan dan waktu layar mengikuti mereka.',
      tip: 'Hanya pemilik keluarga yang dapat menambah anak dan menetapkan perangkat. Perangkat baru belum ditetapkan ke siapa pun sampai Anda memilih.',
      steps: {
        '1': 'Di Keluarga, ketuk + lalu pilih Tambah anak. Masukkan nama, lalu simpan.',
        '2': 'Setelah Anda menyandingkan perangkat baru, KidGate menanyakan kepada pemilik keluarga siapa yang memakainya. Pilih anak Anda, atau Tidak ada untuk perangkat bersama. Jika Anda memilih seorang anak, KidGate lalu menawarkan serangkaian perlindungan awal: pilih Aktifkan perlindungan atau Nanti saja.',
        '3': 'Perangkat yang belum dipilihkan untuk siapa pun muncul di grup Belum ditetapkan di layar Keluarga. Pilih Tetapkan ke anak… di kartunya.',
        '4': 'Setelah perangkat ditetapkan, Batas harian, Jam Diblokir, Filter web, Check-In, SOS, Peringatan Tempat, dan Tugas hadiah diatur di profil anak dan berlaku untuk semua perangkatnya. Batas harian menjadi satu total untuk semua perangkat tersebut.',
        '5': 'Untuk memindahkan perangkat, pilih Tetapkan perangkat lain… di profil anak yang akan memakainya. Untuk melepaskannya dari anak, geser perangkat di profil anak lalu pilih Lepaskan. Jika profil anak dihapus, perangkatnya tetap tersanding.',
      },
    },
    plans: {
      title: 'Premium dan paket gratis',
      summary:
        'Apa saja yang termasuk dalam uji coba, paket gratis, dan Premium, serta cara berlangganan.',
      keywords:
        'premium, harga, langganan, uji coba gratis, batalkan, pengembalian dana, upgrade',
      tip: 'Hanya pemilik keluarga yang dapat berlangganan atau memulihkan pembelian, dan hanya di aplikasi ponsel. Satu paket mencakup seluruh keluarga dan semua orang tua di dalamnya.',
      steps: {
        '1': 'Buka Pengaturan. Kartu di bagian atas menampilkan paket Anda saat ini; pilih Lihat paket.',
        '2': 'Uji coba 7 hari dimulai setelah perangkat anak pertama Anda disandingkan, dan mencakup setiap fitur Premium. Satu batas yang tetap berlaku adalah jumlah orang tua: hingga 3 selama uji coba, hingga 6 dengan Premium.',
        '3': 'Di paket gratis, semua aturan tetap berjalan, tetapi hanya satu perangkat yang melapor: total hari ini dan 3 aplikasi teratas, yang diperbarui saat Anda memeriksa. Premium menambahkan pembaruan langsung, semua perangkat, riwayat 30 hari, riwayat web dan video, serta laporan mingguan.',
        '4': 'Jika uji coba berakhir saat ada lebih dari satu perangkat anak, KidGate membuka layar Pilih perangkat yang melapor. Perangkat yang dipilih tetap melapor; perangkat lain menampilkan Dijeda dan aturannya tetap berlaku, tetapi di sana aturan hanya bisa dilonggarkan, tidak bisa diperketat. Orang tua mana pun dapat mengganti pilihan sekali setiap 7 hari.',
        '5': 'Untuk berlangganan, pilih paket lalu pilih Berlangganan Premium, atau Beli paket seumur hidup untuk pembelian sekali bayar. Setelah berlangganan, semua perangkat yang dijeda kembali melapor. Jika Anda pernah membayar sebelumnya, pilih Pulihkan pembelian.',
      },
    },
    notificationSettings: {
      title: 'Pilih peringatan yang Anda terima',
      summary:
        'Aktifkan atau nonaktifkan setiap jenis peringatan, dan atur jam tenang, di setiap ponsel orang tua.',
      tip: 'SOS selalu sampai, meskipun semuanya dimatikan dan selama jam tenang. Pengaturan ini hanya berlaku untuk ponsel ini; orang tua lain memilih pengaturannya sendiri.',
      steps: {
        '1': 'Buka Pengaturan, lalu Notifikasi push.',
        '2': 'Di bagian Peringatan, nonaktifkan jenis peringatan yang tidak Anda inginkan di ponsel ini, misalnya Permintaan waktu atau Aplikasi dipasang atau dihapus.',
        '3': 'Opsi Laporan mingguan mengatur notifikasi hari Senin bahwa laporan baru sudah siap.',
        '4': 'Aktifkan Jam tenang, lalu seret kedua ujung lingkaran jam untuk mengatur kapan peringatan dibisukan. Waktunya mengikuti jam di ponsel ini.',
        '5': 'Di Pengaturan, Peringatan dalam aplikasi dan Sirene SOS adalah opsi terpisah: keduanya mengatur banner di dalam aplikasi dan bunyi SOS yang keras di ponsel ini.',
      },
    },
    appLanguage: {
      title: 'Ganti bahasa aplikasi',
      summary:
        'Pilih bahasa yang digunakan KidGate di setiap ponsel dan di dasbor web.',
      keywords: 'bahasa indonesia, inggris, terjemahan, bahasa salah, bahasa tampilan',
      tip: 'Setiap ponsel menyimpan bahasanya sendiri. Notifikasi dan widget di ponsel itu mengikutinya.',
      steps: {
        '1': 'Di ponsel orang tua atau anak, buka Pengaturan dan pilih Bahasa.',
        '2': 'Pilih satu bahasa agar tetap, atau Bahasa perangkat untuk mengikuti pengaturan ponsel. Jika KidGate tidak menyediakan bahasa ponsel, bahasa Inggris yang dipakai.',
        '3': 'Aplikasi langsung berganti. Notifikasi ke ponsel ini dan widgetnya juga memakai bahasa baru.',
        '4': 'Di dasbor web, ganti bahasa di bagian akun pada menu samping. Pilihan ini hanya berlaku untuk browser itu.',
      },
    },
    appearance: {
      title: 'Ganti tampilan aplikasi',
      summary: 'Pilih mode gelap, gaya tema, dan warna tema di setiap ponsel.',
      keywords: 'tema, mode malam, warna, pink, merah muda, latar gelap, kustomisasi',
      tip: 'Setiap ponsel menyimpan tampilannya sendiri, jadi perubahan di ponsel anak Anda tidak pernah mengubah ponsel Anda.',
      steps: {
        '1': 'Di ponsel orang tua, buka Pengaturan. Mode gelap, gaya tema, dan warna tema ada di bagian Tampilan.',
        '2': 'Aktifkan Mode gelap agar layar lebih gelap dan lebih nyaman di mata pada malam hari.',
        '3': 'Pilih Gaya tema, lalu pilih Klasik atau Manis, dengan warna pastel hangat dan nuansa yang lebih lembut dan ceria.',
        '4': 'Pilih Warna tema, lalu pilih warna untuk tombol dan aksen. Warna yang tersedia mengikuti gaya: Manis hanya menawarkan nuansa merah muda.',
        '5': 'Anak Anda dapat membuat pilihan yang sama di ponselnya sendiri, di Pengaturan bagian Preferensi, tanpa PIN Orang Tua.',
        '6': 'Di dasbor web, aktifkan Mode gelap di bagian akun pada menu samping. Pilihan ini hanya berlaku untuk browser itu.',
      },
    },
    webSignIn: {
      title: 'Gunakan KidGate di komputer',
      summary: 'Masuk ke dasbor web dan kelola keluarga Anda dari browser.',
      tip: 'Izinkan hanya browser yang Anda gunakan sendiri untuk masuk: browser itu mendapat kendali yang sama dengan ponsel Anda. Dasbor web tidak dapat menyandingkan perangkat anak atau membeli paket. Untuk mengeluarkan browser dari akun, gunakan Keluar di dasbor. Untuk menghentikan browser membuat perubahan, buka Keluarga, lalu Orang tua, dan hapus browser itu di bagian Dasbor; browser itu tetap dapat melihat keluarga Anda sampai seseorang keluar dari akun di sana.',
      steps: {
        '1': 'Di komputer, buka dashboard.kidgate.app. Kode QR langsung muncul.',
        '2': 'Di ponsel Anda, buka Pengaturan, lalu Masuk di web. Anda juga dapat memindai dari Keluarga dengan ikon pindai.',
        '3': 'Pindai kode QR di browser. Jika kamera tidak dapat membacanya, masukkan kode 6 karakter sebagai gantinya.',
        '4': 'Pastikan kodenya cocok, lalu pilih Izinkan. Pilih Jangan izinkan jika bukan Anda yang memulai proses masuk ini.',
        '5': 'Browser akan masuk dalam beberapa detik dan dapat membuat perubahan selama 7 hari. Setelah itu, browser tetap menampilkan keluarga Anda; untuk mengubah sesuatu, pilih Buka kunci perubahan di dasbor lalu masukkan PIN Orang Tua Anda, atau izinkan lagi browser ini dari ponsel Anda.',
      },
    },
    securityPins: {
      title: 'PIN Orang Tua dan Kunci Aplikasi',
      summary:
        'Dua PIN yang berbeda: PIN Orang Tua melindungi pengaturan di perangkat anak Anda, dan Kunci Aplikasi melindungi aplikasi orang tua di ponsel Anda.',
      tip: 'Hanya pemilik keluarga yang dapat mengatur atau mengatur ulang PIN Orang Tua. Jangan pernah membagikannya kepada anak Anda.',
      steps: {
        '1': 'Buka Pengaturan. Di bagian Keamanan, pilih PIN Orang Tua untuk membuat PIN 6 digit, atau untuk mengubahnya.',
        '2': 'Perangkat anak Anda meminta PIN Orang Tua sebelum Aplikasi yang Diblokir dapat diubah atau sebelum keluar dari akun KidGate di perangkat itu.',
        '3': 'Jika Anda lupa, pilih Lupa PIN? di tempat yang sama untuk membuat PIN baru sebagai pemilik keluarga.',
        '4': 'Jika PIN terkunci di perangkat anak setelah 5 kali percobaan yang salah, bagian Keamanan menampilkan baris buka kunci untuk perangkat itu. Pilih baris tersebut untuk mengatur ulang percobaan.',
        '5': 'Untuk melindungi aplikasi orang tua di ponsel ini, aktifkan Kunci Aplikasi dan buat PIN 6 digit tersendiri. Anda juga dapat mengizinkan buka kunci dengan Face ID, Touch ID, atau sidik jari.',
      },
    },
    reportProblem: {
      title: 'Laporkan masalah',
      summary:
        'Beri tahu tim KidGate apa yang salah, lampirkan tangkapan layar, dan baca balasannya di aplikasi.',
      keywords:
        'bug, error, kontak, masukan, tidak berfungsi, rusak, layanan pelanggan, bantuan, email',
      tip: 'Anda menerima notifikasi saat KidGate membalas. Jika terlewat, baris Dukungan di Pengaturan menampilkan Balasan baru.',
      steps: {
        '1': 'Buka Pengaturan dan pilih Dukungan. Di dasbor web, Dukungan ada di menu.',
        '2': 'Pilih Laporkan masalah, atau Laporan baru jika Anda pernah mengirim laporan.',
        '3': 'Jelaskan apa yang terjadi dan di perangkat mana, lampirkan hingga 5 tangkapan layar jika membantu, lalu pilih Kirim laporan.',
        '4': 'Setiap laporan menampilkan statusnya: Diterima, Sedang ditinjau, atau Selesai. Balasan dari KidGate muncul di bawah laporan.',
        '5': 'Setelah KidGate membalas, Anda bisa menjawab di bawah laporan, satu pesan per balasan, sampai laporan ditandai Selesai. Untuk masalah lain, kirim laporan baru.',
      },
    },
    deleteAccount: {
      title: 'Hapus akun Anda',
      summary:
        'Hapus akun KidGate Anda beserta datanya, dengan waktu 14 hari untuk berubah pikiran.',
      tip: 'Menghapus akun tidak membatalkan langganan App Store atau Google Play; batalkan langganan di tokonya. Orang tua lain yang bukan pemilik dan hanya ingin berhenti mengelola keluarga cukup keluar dari keluarga.',
      steps: {
        '1': 'Buka Pengaturan, lalu di bagian Akun, pilih Hapus akun.',
        '2': 'Baca apa saja yang akan dihapus. Jika Anda pemilik keluarga, semua orang tua lain dan semua perangkat anak juga kehilangan akses.',
        '3': 'Konfirmasi bahwa ini memang Anda (dengan kata sandi, atau masuk lagi dengan Google atau Apple), ketik OK, lalu pilih Jadwalkan penghapusan. Ini hanya menjadwalkan penghapusan: belum ada yang dihapus.',
        '4': 'Akun dihapus setelah 14 hari. Sebelum itu, buka KidGate dan pilih Batalkan penghapusan untuk mempertahankan semuanya.',
        '5': 'Jika orang tua lain yang bukan pemilik menghapus akunnya, hanya akun miliknya yang dihapus; keluarga tetap ada. Untuk keluar dari keluarga tanpa menghapus akun, buka kartu keluarga di Keluarga lalu pilih Keluar dari keluarga.',
      },
    },
  },
  onChildDevice: 'Di perangkat anak',
  onParentDevice: 'Di perangkat Anda',
  onParentPhone: 'Di aplikasi ponsel Anda',
  handoffHint:
    'KidGate dapat memandu langkah-langkah ini di perangkat anak: buka di sana, masuk ke Status lalu pilih Lanjutkan penyiapan pada kartu Selesaikan penyiapan bersama orang tua. Setiap langkah punya tombol yang membuka layar yang tepat.',
} as const;
