export const userGuide = {
  title: 'Panduan pengguna',
  subtitle:
    'Bantuan langkah demi langkah untuk izin, penyandingan perangkat, kontrol harian, dan fitur keamanan.',
  stepLabel: 'Langkah {{n}}',
  stepsSectionTitle: 'Langkah-langkah',
  tipTitle: 'Tips',
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
        'Batas, jadwal, pemblokiran aplikasi, penguncian perangkat, waktu tambahan, dan hadiah',
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
      description: 'Premium, peringatan, dasbor web, PIN, dan penghapusan akun',
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
        '2': 'Masuk dengan Google atau Apple, atau buat akun email.',
        '3': 'Di Keluarga, pilih Buat keluarga, lalu beri nama keluarga Anda (misalnya, “Keluarga Nguyen”). Nama ini akan muncul saat orang tua lain bergabung. Jika orang tua lain sudah membuat keluarga Anda, pilih Bergabung dengan keluarga.',
        '4': 'Atur PIN Orang Tua (6 digit) di Pengaturan, lalu Keamanan. Ingat atau simpan di tempat yang aman, dan jangan bagikan kepada anak.',
        '5': 'Disarankan: aktifkan Kunci Aplikasi dan buka kunci biometrik di Pengaturan agar orang lain tidak dapat membuka aplikasi orang tua di perangkat Anda.',
        '6': 'Buka Keluarga, ketuk +, lalu pilih Tambahkan perangkat anak. Biarkan layar ini tetap terbuka untuk kode QR atau kode yang ditampilkan di perangkat anak.',
        '7': 'Setelah perangkat anak tersambung, buka profil anak di Keluarga (atau perangkat, jika perangkat belum ditetapkan ke anak). Atur Batas harian dan Jam Diblokir, lalu selesaikan izin bersama anak Anda.',
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
        '5': 'Di layar Status, berikan setiap izin yang diminta KidGate (notifikasi, lokasi, kamera, dan hak khusus platform). Ketuk setiap baris hingga ditandai diizinkan.',
        '6': 'Biarkan KidGate tetap terpasang dan masuk di perangkat anak. Selanjutnya orang tua mengelola batasan dari perangkat mereka sendiri.',
      },
    },
    connectChild: {
      title: 'Sambungkan ponsel atau tablet anak',
      summary:
        'Sandingkan perangkat anak baru ke keluarga Anda dengan kode QR atau kode.',
      tip: 'Kode memiliki batas waktu. Jika penyandingan gagal, pilih Kode baru di perangkat anak dan coba lagi.',
      steps: {
        '1': 'Di perangkat anak: buka KidGate, lalu Ini perangkat anak. Biarkan layar kode QR tetap terlihat.',
        '2': 'Di perangkat orang tua: buka Keluarga, lalu ketuk ikon pindai (Pindai kode).',
        '3': 'Kamera langsung terbuka: izinkan akses kamera jika diminta, lalu sejajarkan kode QR perangkat anak di dalam bingkai.',
        '4': 'Atau gunakan kode: pilih Masukkan kode secara manual, ketik 6 karakter yang ditampilkan di perangkat anak, lalu lanjutkan.',
        '5': 'Di perangkat anak, baca layar konfirmasi dengan saksama. Pilih Ya, sambungkan hanya jika nama orang tua sudah benar.',
        '6': 'Tunggu perangkat orang tua mengonfirmasi koneksi. Perangkat baru akan muncul di bawah Keluarga.',
        '7': 'Buka perangkat baru dan periksa apakah Terakhir aktif terus diperbarui. Jika tetap offline, buka lagi KidGate di perangkat anak dan periksa koneksi jaringan.',
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
        '3': 'Buka KidGate di komputer. Aplikasi menampilkan kode QR dan kode 6 karakter; tidak perlu masuk ke akun.',
        '4': 'Di perangkat Anda, buka Keluarga, ketuk ikon pindai (Pindai kode), lalu pindai kode QR — atau pilih Masukkan kode secara manual dan ketik kodenya.',
        '5': 'Di komputer, periksa nama orang tua, lalu pilih Ya, sambungkan.',
        '6': 'Ikuti langkah-langkah di Selesaikan penyiapan perangkat ini. Di Mac, pilih Buka Pengaturan di samping Setujui pemfilteran web, lalu aktifkan KidGate di halaman yang terbuka — Filter web tidak akan berjalan sebelum Anda melakukannya. Pilih Izinkan untuk Lokasi dan Kamera.',
        '7': 'Kembali ke perangkat Anda, pilih anak yang menggunakan komputer ini. Aplikasi yang ingin diblokir dipilih di komputer itu sendiri, dengan PIN Orang Tua (Pilih aplikasi yang ingin diblokir).',
      },
    },
    connectTv: {
      title: 'Sambungkan Android TV',
      summary:
        'Instal KidGate di Android TV dan sandingkan dari perangkat Anda, tanpa perlu mengetik dengan remote.',
      keywords: 'android tv, google tv, televisi, tv, fire tv, box',
      tip: 'TV tidak memiliki Lokasi, SOS, Check-In, maupun Permintaan waktu, dan aplikasi yang diblokir ditutup setelah terbuka, bukan dicegah terbuka. Data waktu layar bisa terlambat masuk hingga satu jam.',
      steps: {
        '1': 'Di TV, buka Google Play, cari KidGate, lalu instal.',
        '2': 'Buka KidGate di TV. Aplikasi menampilkan kode QR dan kode 6 karakter; tidak perlu masuk ke akun.',
        '3': 'Di perangkat Anda, buka Keluarga, ketuk ikon pindai (Pindai kode), lalu pindai kode QR di TV — atau pilih Masukkan kode secara manual dan ketik kodenya.',
        '4': 'TV akan tersambung sendiri dalam beberapa detik. Tidak ada yang perlu dikonfirmasi dengan remote.',
        '5': 'Ikuti langkah Siapkan perlindungan di TV: pilih Buka Pengaturan untuk mengaktifkan Aksesibilitas, Akses Penggunaan, dan Tampil di atas aplikasi lain, lalu setujui koneksi VPN agar Filter web dapat berjalan.',
        '6': 'Jika suatu pengaturan tidak tetap aktif, mulai ulang TV dan coba lagi. Anda dapat membuka lagi Siapkan perlindungan dari layar utama KidGate di TV.',
        '7': 'Kembali ke perangkat Anda, pilih anak yang menggunakan TV ini. Aplikasi yang ingin diblokir dipilih di TV itu sendiri, dengan PIN Orang Tua.',
      },
    },
    connectChrome: {
      title: 'Sambungkan ekstensi Chrome',
      summary:
        'Tambahkan filter web KidGate ke Chrome di Chromebook, Mac, atau PC. Ekstensi ini muncul sebagai perangkat tersendiri.',
      keywords: 'chromebook, ekstensi chrome, ekstensi browser',
      tip: 'Ekstensi ini hanya memfilter Chrome: tidak memfilter browser lain, dan tidak memfilter jendela Samaran kecuali Anda mengizinkannya. Di chrome://extensions, buka Detail untuk KidGate lalu aktifkan Izinkan dalam mode Samaran.',
      steps: {
        '1': 'Di Chrome pada komputer anak Anda, buka Chrome Web Store, cari KidGate, lalu pilih Tambahkan ke Chrome.',
        '2': 'Pilih ikon KidGate di toolbar Chrome. Jika tidak terlihat, sematkan dari menu Ekstensi (ikon kepingan puzzle). Pop-up akan menampilkan kode QR dan kode 6 karakter; biarkan tetap terbuka selama penyandingan.',
        '3': 'Di perangkat Anda, buka Keluarga, ketuk ikon pindai (Pindai kode), lalu pindai kode QR — atau pilih Masukkan kode secara manual dan ketik kodenya.',
        '4': 'Di pop-up KidGate, periksa nama orang tua, lalu pilih Ya, sambungkan.',
        '5': 'Kembali ke perangkat Anda, pilih anak yang menggunakan ekstensi ini, lalu aktifkan Filter web untuknya. Sebelum itu, ekstensi akan menampilkan Tidak aktif.',
        '6': 'Opsional: untuk melihat video apa saja yang ditonton, buka Video yang ditonton dan aktifkan Rekam video yang ditonton untuk ekstensi ini.',
      },
    },
    inviteParent: {
      title: 'Undang orang tua lain',
      summary:
        'Biarkan orang tua kedua bergabung dengan keluarga yang sama dan mengelola perangkat anak yang sama.',
      tip: 'Hanya pemilik keluarga yang dapat menyetujui permintaan bergabung. Setujui secepatnya, karena permintaan dapat kedaluwarsa. Satu keluarga dapat memiliki hingga 3 orang tua di paket gratis dan selama masa uji coba, serta hingga 6 dengan Premium.',
      steps: {
        '1': 'Di perangkat pemilik keluarga, buka Keluarga, lalu ketuk +, lalu Undang orang tua.',
        '2': 'Jika Anda belum membuat nama keluarga, masukkan satu nama dan pilih Buat keluarga.',
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
    androidPermissions: {
      title: 'Izin Android (perangkat anak)',
      summary:
        'Aktifkan Akses Penggunaan, Tampil di atas aplikasi lain, Aksesibilitas, baterai, dan izin terkait.',
      keywords:
        'aksesibilitas, akses penggunaan, tampil di atas aplikasi lain, notifikasi, admin perangkat, vpn, izinkan',
      tip: 'Kelengkapan lebih penting daripada urutan. Setiap baris merah atau belum diizinkan di layar Status anak harus diperbaiki sebelum Anda mengandalkan penguncian atau Jam Diblokir.',
      steps: {
        '1': 'Di perangkat anak, buka KidGate, lalu Status dan kerjakan daftar izin dari atas ke bawah.',
        '2': 'Notifikasi: ketuk barisnya, lalu Izinkan. Orang tua memerlukan notifikasi push untuk perintah kunci dan permintaan waktu.',
        '3': 'Akses Penggunaan: buka layar sistem, lalu cari KidGate, lalu aktifkan. Ini diperlukan untuk pelacakan waktu layar dan batasan.',
        '4': 'Tampil di atas aplikasi lain: izinkan KidGate. Ini diperlukan agar layar kunci dapat muncul di atas aplikasi lain.',
        '5': 'Bantuan kunci Aksesibilitas: buka Pengaturan, lalu Aksesibilitas, cari KidGate di Aplikasi terpasang / diunduh, lalu aktifkan. Ini menjaga penguncian tetap diterapkan.',
        '6': 'Baterai tanpa batasan: pilih Izinkan saat diminta. Jika tidak ada permintaan yang muncul: Info aplikasi, lalu Baterai, lalu Tanpa batasan.',
        '7': 'Alarm & pengingat: izinkan agar Jam Diblokir mulai dan berakhir tepat waktu.',
        '8': 'Lokasi dan Kamera (jika Anda menggunakan Check-In atau foto SOS): izinkan sesuai permintaan KidGate. Kembali ke Status dan pastikan setiap baris sudah diizinkan.',
      },
    },
    iosScreenTime: {
      title: 'Waktu Layar iOS (perangkat anak)',
      summary:
        'Izinkan Penggunaan Aplikasi & Situs Web agar penguncian, jadwal, dan pemilihan aplikasi dapat berfungsi.',
      keywords: 'durasi layar, screen time, family controls, iphone, ipad, otorisasi',
      tip: 'Jika tombol Izinkan tidak muncul, buka Pengaturan iOS, lalu Waktu Layar dan pastikan Waktu Layar sudah diaktifkan di perangkat anak terlebih dahulu.',
      steps: {
        '1': 'Di iPhone anak, buka KidGate dan tetap di layar Status / penyiapan.',
        '2': 'Pilih Izinkan Penggunaan Aplikasi & Situs Web (atau banner Waktu Layar).',
        '3': 'Pada dialog sistem, pilih Izinkan. Mohon jangan menutup dialog tanpa memilih.',
        '4': 'Kembali ke KidGate. Banner akan hilang setelah izin berhasil diberikan.',
        '5': 'Jika izin sebelumnya ditolak: buka Pengaturan iOS, cari KidGate, aktifkan Waktu Layar di halaman itu, lalu buka lagi KidGate.',
        '6': 'Untuk memilih aplikasi yang diblokir: di perangkat anak, buka Pengaturan KidGate, lalu pilih Buka kunci dengan PIN Orang Tua, lalu buka Aplikasi yang Diblokir, lalu simpan.',
        '7': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Aplikasi yang Diblokir, dan pastikan daftarnya telah tersinkronisasi. Aktifkan pemblokiran saat sudah siap.',
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
        '1': 'Di perangkat Android anak, buka KidGate, lalu Status, dan cari langkah Izinkan mulai otomatis. Langkah ini hanya muncul pada perangkat yang produsennya memerlukannya.',
        '2': 'Izinkan mulai otomatis untuk KidGate di layar keamanan pabrikan (istilahnya berbeda-beda tergantung perangkat).',
        '3': 'Atur penggunaan baterai KidGate ke Tanpa batasan, baik di pengaturan Android maupun menu baterai vendor, jika keduanya ada.',
        '4': 'Nonaktifkan daftar “aplikasi tidur”, “aplikasi tidur nyenyak”, atau “istirahatkan aplikasi” yang menyertakan KidGate.',
        '5': 'Jika pintasan tidak berfungsi, buka aplikasi Keamanan / Perawatan perangkat secara manual dan cari KidGate, Mulai otomatis, atau Baterai.',
        '6': 'Tandai setiap baris sebagai Selesai di KidGate setelah Anda menyelesaikannya, agar Anda tahu apa yang masih tersisa.',
      },
    },
    dailyLimit: {
      title: 'Atur Batas harian',
      summary: 'Batasi berapa menit anak boleh menggunakan perangkat setiap hari.',
      keywords: 'durasi layar, jam per hari, waktu habis, jatah, perpanjang',
      tip: 'Data penggunaan berasal dari perangkat anak. Jika penghitung tampak macet, buka KidGate di perangkat anak dan tunggu sinkronisasi.',
      steps: {
        '1': 'Di perangkat orang tua, buka Keluarga, lalu ketuk profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak).',
        '2': 'Di bawah Kontrol utama, pilih Batas harian.',
        '3': 'Pilih nilai menit per hari (atau ubah batas yang ada), lalu simpan.',
        '4': 'Pastikan kartu perangkat menampilkan menit yang terpakai dan batas hari ini setelah perangkat anak melakukan sinkronisasi.',
        '5': 'Saat batas tercapai, perangkat akan terkunci sesuai aturan platform. Pilih Buka kunci di layar perangkat jika Anda ingin memulihkan akses lebih awal.',
      },
    },
    blockedHours: {
      title: 'Atur Jam Diblokir',
      summary: 'Jadwalkan rentang waktu saat perangkat harus tetap terkunci.',
      keywords: 'jam tidur, malam, jam sekolah, jadwal, jeda',
      tip: 'Atur dulu jam sekolah dan rentang waktu tidur. Hindari rentang waktu yang tumpang tindih agar jadwal tetap jelas.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Jam Diblokir.',
        '2': 'Pilih Tambahkan waktu blokir, lalu tentukan waktu mulai, waktu selesai, dan hari pengulangannya.',
        '3': 'Simpan rentangnya. Ulangi langkah ini untuk menambahkan rentang lain.',
        '4': 'Aktifkan jadwal jika ada sakelar pengaktif yang ditampilkan.',
        '5': 'Di perangkat anak, pastikan izin Alarm & pengingat dan Waktu Layar masih diizinkan agar jadwal berjalan tepat waktu.',
        '6': 'Selama rentang aktif, kartu perangkat menampilkan Jam Diblokir aktif · terkunci. Gunakan Buka kunci hanya saat Anda sengaja mengesampingkan jadwal.',
      },
    },
    blockedApps: {
      title: 'Blokir aplikasi tertentu',
      summary:
        'Pilih aplikasi di perangkat anak, lalu aktifkan pemblokiran dari perangkat orang tua.',
      keywords:
        'blokir aplikasi, blokir app, tiktok, facebook, instagram, game, roblox, sembunyikan aplikasi',
      tip: 'Di iOS, Apple mungkin menyembunyikan nama aplikasi yang sebenarnya dari perangkat orang tua. Pemilihan tetap dilakukan di perangkat anak dengan PIN Orang Tua.',
      steps: {
        '1': 'Gunakan perangkat anak secara langsung. Buka KidGate, lalu Pengaturan.',
        '2': 'Pilih Buka kunci dengan PIN Orang Tua, lalu masukkan PIN Orang Tua.',
        '3': 'Buka Aplikasi yang Diblokir (di komputer atau TV: Pilih aplikasi yang ingin diblokir). Pilih aplikasi (dan kategori, jika ditampilkan), lalu simpan di perangkat anak.',
        '4': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Aplikasi yang Diblokir, dan tunggu daftar yang dipilih muncul.',
        '5': 'Nyalakan sakelar Aktifkan Pemblokiran Aplikasi. Status akan menunjukkan Pemblokiran aktif.',
        '6': 'Uji dengan membuka aplikasi yang diblokir di perangkat anak. Aplikasi tersebut harus dibatasi sesuai aturan platform.',
        '7': 'Untuk mengubah daftar nanti, ulangi pemilihan di perangkat anak dengan PIN Orang Tua. Perangkat orang tua akan menyinkronkan daftar baru.',
      },
    },
    appLimits: {
      title: 'Atur Batas Aplikasi',
      summary:
        'Tetapkan batas waktu per hari untuk aplikasi tertentu, di luar Batas harian.',
      keywords: 'batas waktu aplikasi, menit per aplikasi, tiktok, youtube, game',
      tip: 'Batas Aplikasi tidak tersedia di iPhone atau iPad. Di komputer atau TV, aplikasi yang mencapai batasnya ditutup setelah terbuka, bukan dicegah terbuka.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Batas Aplikasi. Jika anak Anda memakai lebih dari satu perangkat, pilih salah satunya: setiap perangkat punya daftarnya sendiri.',
        '2': 'Di bagian Tambah batas, ketuk sebuah aplikasi. Hanya aplikasi yang dipakai hari ini di perangkat tersebut yang ditampilkan, dan masing-masing dimulai dengan batas 60 menit.',
        '3': 'Atur setiap batas dengan dial atau pilihan cepat, dari 5 menit hingga 8 jam per hari. Anda dapat membatasi hingga 20 aplikasi.',
        '4': 'Pilih Simpan. Batas disetel ulang tengah malam di perangkat anak.',
        '5': 'Batas harian tetap berlaku untuk seluruh perangkat, jadi aplikasi bisa terkunci sebelum batasnya sendiri habis. Untuk menghapus batas, pilih Hapus di kartunya, lalu simpan.',
      },
    },
    lockUnlock: {
      title: 'Kunci dan buka kunci perangkat',
      summary: 'Kunci perangkat anak dengan segera, atau pulihkan akses.',
      tip: 'Di Android, penguncian paling kuat saat Tampil di atas aplikasi lain dan Aksesibilitas keduanya aktif. Di iOS, penguncian bergantung pada izin Waktu Layar.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak).',
        '2': 'Pilih Kunci semua untuk mengunci semua perangkat milik anak tersebut, atau buka satu perangkat lalu pilih Kunci perangkat.',
        '3': 'Tunggu beberapa detik. Status akan berubah menjadi Terkunci. Jika tidak ada perubahan, buka KidGate di perangkat anak dan periksa kembali izinnya.',
        '4': 'Untuk memulihkan akses, pilih Buka kunci semua (atau Buka kunci di layar perangkat) dan konfirmasi.',
        '5': 'Opsional: Anda juga dapat mengunci atau membuka kunci dengan cepat dari Keluarga jika pintasan tersebut muncul di kartu perangkat.',
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
        '3': 'Web tetap diblokir di perangkat tersebut sampai waktunya habis. Pengaturan Filter web tidak berubah, dan jeda tetap berjalan meskipun Filter web nonaktif.',
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
        '5': 'Permintaan yang sudah dijawab tercantum di Aktivitas. Untuk menghentikan notifikasi ini di perangkat Anda, nonaktifkan Permintaan waktu tambahan di Notifikasi push, di Pengaturan.',
      },
    },
    rewardTasks: {
      title: 'Siapkan Tugas hadiah',
      summary:
        'Buat tugas kecil yang bisa diselesaikan anak Anda untuk mendapat menit ekstra hari ini.',
      tip: 'Menit bonus hanya dihitung jika perangkat memiliki Batas harian. Menit ditambahkan ke perangkat yang dipakai anak Anda untuk menandai tugas selesai. Tugas hadiah tidak tersedia di Android TV atau di ekstensi Chrome.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Tugas hadiah.',
        '2': 'Pilih Tugas baru, atau mulai dengan templat. Masukkan tugasnya, pilih hadiah dalam menit (5 hingga 240), tingkat kesulitan, dan apakah tugas diulang Setiap hari atau Sekali, lalu pilih Buat tugas.',
        '3': 'Di perangkat anak, tugas muncul di bagian Dapatkan waktu ekstra. Setelah selesai, anak Anda memilih Sudah selesai.',
        '4': 'Anda akan menerima notifikasi. Di Siap ditinjau (di layar Tugas hadiah, di Keluarga, atau di profil anak), pilih Setujui untuk menambahkan menitnya ke hari ini, atau Kembalikan agar anak Anda bisa mencoba lagi.',
        '5': 'Ketuk tugas untuk mengedit atau menghapusnya. Paket gratis dapat menjalankan hingga 10 tugas aktif sekaligus; Premium hingga 20.',
      },
    },
    locationSharing: {
      title: 'Aktifkan berbagi lokasi',
      summary: 'Lihat lokasi terbaru anak Anda di perangkat orang tua.',
      keywords: 'gps, peta, di mana anak saya, cari ponsel, tempat',
      tip: 'Lokasi memerlukan izin di perangkat anak dan koneksi jaringan yang stabil. GPS di dalam ruangan bisa kurang akurat.',
      steps: {
        '1': 'Di perangkat anak, izinkan Lokasi untuk KidGate saat diminta (atau di Pengaturan sistem).',
        '2': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Lokasi.',
        '3': 'Aktifkan berbagi jika sedang nonaktif, lalu tunggu pembaruan pertama.',
        '4': 'Jika status masih menunggu, ketuk tombol perbarui, atau buka lagi layarnya.',
        '5': 'Opsional: buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu bagian Peringatan, dan pilih Lokasi untuk mengatur Peringatan Tempat saat anak Anda memasuki atau meninggalkan lokasi yang disimpan.',
        '6': 'Jika ponsel tertinggal di dekat Anda, buka Lokasi lalu ketuk Bunyikan perangkat. iPhone tidak akan berbunyi saat dalam mode senyap atau mode Fokus aktif.',
      },
    },
    checkIn: {
      title: 'Minta Check-In',
      summary:
        'Minta anak Anda mengonfirmasi bahwa mereka aman, dengan lokasi dan foto opsional.',
      tip: 'Izin kamera di perangkat anak diperlukan untuk Check-In dengan foto.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak).',
        '2': 'Pilih Check-In (tindakan cepat atau baris di bagian Pemantauan keamanan).',
        '3': 'Perangkat anak menerima notifikasi dan layar Check-In. Anak mengetuk untuk mengonfirmasi bahwa mereka baik-baik saja, atau untuk meminta bantuan.',
        '4': 'Jika akses kamera diizinkan, KidGate melampirkan foto beserta lokasi jika memungkinkan.',
        '5': 'Di perangkat orang tua, buka riwayat Check-In untuk meninjau respons dan foto terbaru.',
      },
    },
    sos: {
      title: 'Peringatan darurat SOS',
      summary:
        'Pahami bagaimana anak mengirim SOS dan bagaimana orang tua meninjaunya.',
      tip: 'Uji ini sekali di rumah agar orang tua dan anak sama-sama memahami prosesnya sebelum keadaan darurat sesungguhnya.',
      steps: {
        '1': 'Di perangkat anak, buka tab atau layar SOS di KidGate.',
        '2': 'Ikuti langkah-langkah di layar untuk mengirim SOS (lokasi dan foto bergantung pada izin yang diberikan).',
        '3': 'Orang tua menerima notifikasi push saat SOS dikirim.',
        '4': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu bagian Peringatan, dan pilih SOS untuk membuka Peringatan SOS dan meninjau kejadiannya.',
        '5': 'Sepakati dengan anak Anda kapan harus menggunakan SOS dan kapan Check-In biasa sudah cukup.',
      },
    },
    webFilter: {
      title: 'Batasi situs web tidak pantas',
      summary:
        'Aktifkan Filter web untuk konten tidak pantas jika platform mendukungnya.',
      keywords:
        'blokir situs, blokir link, blokir tautan, url, konten dewasa, pencarian aman, dns, vpn, iphone, ipad',
      tip: 'Pemfilteran web bergantung pada kemampuan platform. Gabungkan dengan Aplikasi yang Diblokir untuk perlindungan yang lebih kuat.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Filter web.',
        '2': 'Tinjau status saat ini (situs tidak pantas dibatasi, atau pemfilteran nonaktif).',
        '3': 'Aktifkan pemfilteran dan simpan jika ada sakelar yang ditampilkan.',
        '4': 'Periksa lagi nanti dari layar yang sama. Jika status tetap Menunggu, buka lagi KidGate di perangkat anak agar pengaturan dapat tersinkronisasi.',
        '5': 'Jika perangkat anak adalah iPhone atau iPad, buka KidGate di perangkat itu, pilih Izinkan saat iOS meminta untuk menambahkan konfigurasi VPN, lalu masukkan kode sandi perangkat. Ini hanya diminta sekali.',
      },
    },
    protectionAlerts: {
      title: 'Peringatan perlindungan',
      summary: 'Dapatkan notifikasi saat izin penting di perangkat anak dinonaktifkan.',
      tip: 'Peringatan perlindungan berarti perlindungan KidGate melemah. Mohon pulihkan izin tersebut di perangkat anak sesegera mungkin.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu bagian Peringatan, dan pilih Perlindungan untuk membuka Peringatan perlindungan.',
        '2': 'Tinjau kejadian terbaru seperti Tampil di atas aplikasi lain, Aksesibilitas, Akses Penggunaan, Kamera, atau Lokasi yang dinonaktifkan.',
        '3': 'Di perangkat anak, buka KidGate, lalu Status dan aktifkan kembali izin yang disebutkan.',
        '4': 'Kembali ke Peringatan perlindungan dan pastikan tidak ada kejadian baru yang tidak terduga muncul.',
        '5': 'Jaga notifikasi tetap aktif di perangkat orang tua agar Anda cepat mengetahui perubahan.',
      },
    },
    usageReports: {
      title: 'Lihat laporan penggunaan',
      summary:
        'Lihat berapa lama setiap perangkat dipakai hari ini dan selama 30 hari terakhir, juga per anak, dan dalam laporan setiap hari Senin.',
      tip: 'Dengan paket gratis, Anda melihat total hari ini dan 3 aplikasi teratas, yang diperbarui setiap 30 menit. Premium menambahkan riwayat 30 hari, kapan setiap perangkat dipakai, semua aplikasi, laporan untuk setiap anak, dan laporan mingguan baru setiap hari Senin. iPhone dan iPad hanya melaporkan totalnya.',
      steps: {
        '1': 'Buka Laporan. Bagian Hari ini menjumlahkan semua perangkat; di bawahnya ada Laporan mingguan, setiap anak (Per anak), dan setiap perangkat (Per perangkat).',
        '2': 'Ketuk perangkat untuk membuka Laporan Penggunaan perangkat itu: pemakaian hari ini dibandingkan Batas harian, 30 hari terakhir, Kapan perangkat dipakai, dan Aplikasi paling sering digunakan. Anda juga dapat membukanya dari Penggunaan hari ini di layar perangkat.',
        '3': 'Ketuk profil anak untuk melihat satu laporan dari semua perangkatnya, untuk Hari ini, 7 hari, atau 30 hari. Waktu di dua layar sekaligus hanya dihitung sekali, jadi angkanya bisa lebih rendah daripada jumlah semua perangkat.',
        '4': 'Setiap Senin pagi, Laporan mingguan terbaru tiba, disertai notifikasi. Laporan ini menyarankan satu hal yang bisa Anda ubah dan membuka pengaturan yang tepat.',
        '5': 'Saat KidGate dibuka, setiap perangkat diminta mengirim angka terbaru, jadi pembaruannya bisa memakan waktu beberapa menit. Perangkat tanpa koneksi internet akan melapor saat kembali online.',
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
        '5': 'Riwayat disimpan selama 30 hari. Saat anak Anda meminta membuka situs yang diblokir, permintaannya muncul di Perlu persetujuan, bukan di sini.',
      },
    },
    videoHistory: {
      title: 'Lihat Video yang ditonton',
      summary:
        'Simpan daftar video YouTube yang ditonton anak Anda, beserta saluran dan waktunya.',
      keywords: 'youtube, shorts, video yang ditonton, riwayat tontonan',
      tip: 'Video yang ditonton termasuk dalam Premium dan hanya mencakup YouTube. Fitur ini berfungsi di ponsel Android, Android TV, dan ekstensi Chrome, tetapi tidak di iPhone atau iPad. Di Mac atau PC, tambahkan ekstensi Chrome. Di TV, Shorts tidak dicantumkan.',
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
      tip: 'Fitur Setujui aplikasi baru tersedia gratis. Layar Aplikasi, dengan riwayat pemasangan dan daftar aplikasi terpasang, termasuk dalam Premium. iPhone dan iPad tidak dapat melaporkan pemasangan; di sana, fitur Setujui aplikasi baru menyembunyikan App Store sebagai gantinya.',
      steps: {
        '1': 'Di perangkat orang tua, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Aplikasi di bagian Peringatan.',
        '2': 'Perubahan terbaru mencantumkan aplikasi yang dipasang dan dihapus, dari yang paling baru. Anda juga menerima notifikasi untuk masing-masing.',
        '3': 'Aplikasi terpasang mencantumkan isi perangkat, dengan grup Perlu diperiksa di bagian atas. Pilih Aman untuk mengeluarkan aplikasi dari grup itu. Untuk menghentikan aplikasi, gunakan Aplikasi yang Diblokir.',
        '4': 'Untuk menahan aplikasi baru sampai Anda mengizinkannya, buka Aplikasi yang Diblokir lalu aktifkan Setujui aplikasi baru. Setiap aplikasi yang dipasang setelah itu tetap diblokir di perangkat.',
        '5': 'Saat ada aplikasi baru yang menunggu, pilih Izinkan di sampingnya agar aplikasi itu bisa dibuka.',
      },
    },
    messageAlerts: {
      title: 'Aktifkan Peringatan pesan',
      summary:
        'Dapatkan peringatan saat kata atau frasa yang mengkhawatirkan muncul di pesan atau pencarian di ponsel Android anak Anda. Anda melihat kata atau frasa yang ditandai, tidak pernah isi pesannya.',
      keywords: 'sms, messenger, whatsapp, kata kunci, perundungan, membaca pesan',
      tip: 'Peringatan pesan termasuk dalam Premium dan hanya berfungsi di ponsel Android. Hanya kategori dan kata atau frasa yang ditandai yang sampai kepada Anda. Analisis AI tetap nonaktif kecuali ada orang tua yang mengaktifkannya untuk keluarga.',
      steps: {
        '1': 'Di ponsel Android anak, buka Pengaturan KidGate, pilih Buka kunci dengan PIN Orang Tua, lalu Izinkan akses notifikasi di bagian Peringatan pesan, dan aktifkan KidGate di daftar yang terbuka.',
        '2': 'Di perangkat Anda, buka profil anak (atau perangkat, jika perangkat belum ditetapkan ke anak), lalu Peringatan pesan di bagian Peringatan, lalu ketuk ikon pengaturan di bagian atas. Jika anak Anda punya beberapa perangkat, pilih ponsel Android-nya terlebih dahulu.',
        '3': 'Aktifkan Pindai pesan yang diterima. Anda juga bisa mengaktifkan Tandai juga kata-kata kasar, serta memilih hingga 3 bahasa di Bahasa yang dipindai.',
        '4': 'Untuk juga memindai yang diketik dan dicari anak Anda: di perangkat anak, pilih Izinkan di bagian Peringatan pesan, lalu aktifkan Pindai pesan yang diketik dan Pindai yang dicari anak di perangkat Anda.',
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
        '2': 'Setelah Anda menyandingkan perangkat baru, KidGate menanyakan siapa yang memakainya. Pilih anak Anda, atau Tidak ada untuk perangkat bersama. Setelah itu KidGate menawarkan serangkaian perlindungan awal: pilih Aktifkan perlindungan atau Nanti saja.',
        '3': 'Perangkat yang belum dipilihkan untuk siapa pun muncul di grup Belum ditetapkan di layar Keluarga. Pilih Tetapkan ke anak… di kartunya.',
        '4': 'Setelah perangkat ditetapkan, Batas harian, Jam Diblokir, Filter web, Check-In, SOS, tempat, dan Tugas hadiah diatur di profil anak dan berlaku untuk semua perangkatnya. Batas harian menjadi satu total untuk semua perangkat tersebut.',
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
        '2': 'Uji coba 7 hari dimulai setelah perangkat anak pertama Anda disandingkan, dan mencakup semua fitur Premium.',
        '3': 'Di paket gratis, semua aturan tetap berjalan, tetapi hanya satu perangkat yang melapor: setiap 30 menit, dengan total hari ini dan 3 aplikasi teratas. Premium menambahkan pembaruan langsung, semua perangkat, riwayat 30 hari, riwayat web dan video, serta laporan mingguan.',
        '4': 'Jika uji coba berakhir saat ada lebih dari satu perangkat anak, KidGate membuka layar Pilih perangkat utama. Perangkat yang dipilih tetap melapor; perangkat lain menampilkan Dijeda, tetapi aturannya tetap berlaku. Anda dapat mengganti pilihan sekali setiap 7 hari.',
        '5': 'Untuk berlangganan, pilih paket lalu pilih Berlangganan Premium. Setelah berlangganan, semua perangkat yang dijeda kembali melapor. Jika Anda pernah membayar sebelumnya, pilih Pulihkan pembelian.',
      },
    },
    notificationSettings: {
      title: 'Pilih peringatan yang Anda terima',
      summary:
        'Aktifkan atau nonaktifkan setiap jenis peringatan, dan atur jam tenang, di setiap ponsel orang tua.',
      tip: 'SOS selalu sampai, meskipun semuanya dimatikan dan selama jam tenang. Pengaturan ini hanya berlaku untuk ponsel ini; orang tua lain memilih pengaturannya sendiri.',
      steps: {
        '1': 'Buka Pengaturan, lalu Notifikasi push.',
        '2': 'Di bagian Peringatan, nonaktifkan jenis peringatan yang tidak Anda inginkan di ponsel ini, misalnya Permintaan waktu tambahan dan Aplikasi dipasang atau dihapus.',
        '3': 'Opsi Ringkasan mingguan mengatur notifikasi hari Senin untuk laporan mingguan.',
        '4': 'Aktifkan Jam tenang lalu atur waktu Dari dan Sampai untuk membisukan peringatan di malam hari. Waktunya mengikuti jam di ponsel ini.',
        '5': 'Di Pengaturan, Peringatan dalam aplikasi dan Sirene SOS adalah opsi terpisah: keduanya mengatur banner di dalam aplikasi dan bunyi SOS yang keras di ponsel ini.',
      },
    },
    webSignIn: {
      title: 'Gunakan KidGate di komputer',
      summary: 'Masuk ke dasbor web dan kelola keluarga Anda dari browser.',
      tip: 'Izinkan hanya browser yang Anda gunakan sendiri untuk masuk: browser itu mendapat kendali yang sama dengan ponsel Anda. Dasbor web tidak dapat menyandingkan perangkat atau membeli paket. Untuk mengeluarkan browser dari akun, gunakan Keluar di dasbor.',
      steps: {
        '1': 'Di komputer, buka dashboard.kidgate.app lalu pilih Masuk dengan aplikasi KidGate. Kode QR akan muncul.',
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
    deleteAccount: {
      title: 'Hapus akun Anda',
      summary:
        'Hapus akun KidGate Anda beserta datanya, dengan waktu 14 hari untuk berubah pikiran.',
      tip: 'Menghapus akun tidak membatalkan langganan App Store atau Google Play; batalkan langganan di tokonya. Orang tua lain yang bukan pemilik dan hanya ingin berhenti mengelola keluarga cukup keluar dari keluarga.',
      steps: {
        '1': 'Buka Pengaturan, lalu di bagian Akun, pilih Hapus akun.',
        '2': 'Baca apa saja yang akan dihapus. Jika Anda pemilik keluarga, semua orang tua lain dan semua perangkat anak juga kehilangan akses.',
        '3': 'Konfirmasi bahwa ini memang Anda (dengan kata sandi, atau masuk lagi dengan Google atau Apple), ketik OK, lalu pilih Hapus permanen.',
        '4': 'Akun dihapus setelah 14 hari. Sebelum itu, buka KidGate dan pilih Batalkan penghapusan untuk mempertahankan semuanya.',
        '5': 'Jika orang tua lain yang bukan pemilik menghapus akunnya, hanya akun miliknya yang dihapus; keluarga tetap ada. Untuk keluar dari keluarga tanpa menghapus akun, buka kartu keluarga di Keluarga lalu pilih Keluar dari keluarga.',
      },
    },
  },
  onChildDevice: 'Di perangkat anak',
  onParentDevice: 'Di perangkat Anda',
  handoffHint:
    'KidGate dapat memandu langkah-langkah ini di perangkat anak: buka di sana, masuk ke Status lalu pilih Selesaikan penyiapan bersama orang tua. Setiap langkah punya tombol yang membuka layar yang tepat.',
} as const;
