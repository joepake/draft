export const userGuide = {
  title: 'Panduan pengguna',
  subtitle:
    'Bantuan langkah demi langkah untuk izin, penyandingan perangkat, kontrol harian, dan fitur keamanan.',
  stepLabel: 'Langkah {{n}}',
  stepsSectionTitle: 'Langkah-langkah',
  tipTitle: 'Tips',
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
      description: 'Batas, jadwal, pemblokiran aplikasi, dan penguncian perangkat',
    },
    safety: {
      title: 'Keamanan dan pemantauan',
      description: 'Lokasi, Check-In, SOS, Filter Web, dan perlindungan',
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
        '2': 'Masuk dengan Google atau Apple, atau buat akun email. Konfirmasi bahwa Anda adalah pemilik keluarga untuk rumah tangga ini.',
        '3': 'Jika diminta, beri nama keluarga Anda (misalnya, “Keluarga Nguyen”). Nama ini akan muncul saat orang tua lain bergabung.',
        '4': 'Atur PIN Orang Tua (6 digit) di Pengaturan → Keamanan. Ingat atau simpan di tempat yang aman, dan jangan bagikan kepada anak.',
        '5': 'Disarankan: aktifkan Kunci Aplikasi dan buka kunci biometrik di Pengaturan agar orang lain tidak dapat membuka aplikasi orang tua di perangkat Anda.',
        '6': 'Buka Keluarga (Perangkat). Ketuk + dan pilih Sambungkan perangkat anak. Siapkan layar ini untuk kode QR atau kode dari perangkat anak.',
        '7': 'Setelah perangkat anak tersambung, buka kartu perangkat tersebut. Atur Batas Harian dan Jam Diblokir, lalu selesaikan izin bersama anak Anda.',
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
      title: 'Sambungkan perangkat anak',
      summary:
        'Sandingkan perangkat anak baru ke keluarga Anda dengan kode QR atau kode.',
      tip: 'Kode memiliki batas waktu. Jika penyandingan gagal, pilih Kode baru di perangkat anak dan coba lagi.',
      steps: {
        '1': 'Di perangkat anak: buka KidGate → Ini perangkat anak. Biarkan layar kode QR tetap terlihat.',
        '2': 'Di perangkat orang tua: buka Keluarga → ketuk + → Sambungkan perangkat anak.',
        '3': 'Kode QR disarankan: pilih Pindai kode QR, izinkan akses kamera jika diminta, lalu sejajarkan kode QR perangkat anak di dalam bingkai.',
        '4': 'Atau gunakan kode: pilih Masukkan kode secara manual, ketik 6 karakter yang ditampilkan di perangkat anak, lalu lanjutkan.',
        '5': 'Di perangkat anak, baca layar konfirmasi dengan saksama. Pilih Ya, sambungkan hanya jika nama orang tua sudah benar.',
        '6': 'Tunggu perangkat orang tua mengonfirmasi koneksi. Perangkat baru akan muncul di bawah Keluarga.',
        '7': 'Buka perangkat baru dan periksa apakah Terakhir aktif terus diperbarui. Jika tetap offline, buka lagi KidGate di perangkat anak dan periksa koneksi jaringan.',
        '8': 'Selanjutnya, berikan izin di perangkat anak (lihat grup Izin aplikasi). Kontrol tidak akan berfungsi penuh sampai izin tersebut aktif.',
      },
    },
    inviteParent: {
      title: 'Undang orang tua lain',
      summary:
        'Biarkan orang tua kedua bergabung dengan keluarga yang sama dan mengelola perangkat anak yang sama.',
      tip: 'Hanya pemilik keluarga yang dapat menyetujui permintaan bergabung. Setujui secepatnya, karena permintaan dapat kedaluwarsa.',
      steps: {
        '1': 'Di perangkat pemilik keluarga, buka Keluarga → ketuk + → Tambahkan perangkat orang tua lain (atau Undang orang tua).',
        '2': 'Jika Anda belum membuat nama keluarga, masukkan satu nama dan pilih Buat keluarga.',
        '3': 'Tunjukkan kode QR undangan ke orang tua lain, atau bagikan kode undangannya.',
        '4': 'Di perangkat orang tua lain: buka KidGate sebagai orang tua → Keluarga → + → Gabung keluarga, lalu pindai kode QR atau masukkan kodenya.',
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
        '2': 'Buka Keluarga → ketuk + → Gabung keluarga.',
        '3': 'Pindai kode QR undangan pemilik, atau masukkan kode undangan 6 karakter.',
        '4': 'Tunggu pemilik menyetujui. Biarkan aplikasi tetap terbuka sampai Anda melihat bahwa Anda telah bergabung dengan keluarga.',
        '5': 'Pastikan perangkat anak muncul di bawah Keluarga. Buka salah satu perangkat untuk melihat status dan kontrolnya.',
      },
    },
    androidPermissions: {
      title: 'Izin Android (perangkat anak)',
      summary:
        'Aktifkan Akses Penggunaan, Tampil di atas aplikasi lain, Aksesibilitas, baterai, dan izin terkait.',
      tip: 'Kelengkapan lebih penting daripada urutan. Setiap baris merah atau belum diizinkan di layar Status anak harus diperbaiki sebelum Anda mengandalkan penguncian atau Jam Diblokir.',
      steps: {
        '1': 'Di perangkat anak, buka KidGate → Status dan kerjakan daftar izin dari atas ke bawah.',
        '2': 'Notifikasi: ketuk barisnya → Izinkan. Orang tua memerlukan notifikasi push untuk perintah kunci dan permintaan waktu.',
        '3': 'Akses Penggunaan: buka layar sistem → cari KidGate → aktifkan. Ini diperlukan untuk pelacakan waktu layar dan batasan.',
        '4': 'Tampil di atas aplikasi lain: izinkan KidGate. Ini diperlukan agar layar kunci dapat muncul di atas aplikasi lain.',
        '5': 'Bantuan kunci Aksesibilitas: Pengaturan → Aksesibilitas → Aplikasi terpasang / diunduh → KidGate → Aktif. Ini menjaga penguncian tetap diterapkan.',
        '6': 'Baterai tanpa batasan: pilih Izinkan saat diminta. Jika tidak ada permintaan yang muncul: Info aplikasi → Baterai → Tanpa batasan.',
        '7': 'Alarm & pengingat: izinkan agar Jam Diblokir mulai dan berakhir tepat waktu.',
        '8': 'Lokasi dan Kamera (jika Anda menggunakan Check-In atau foto SOS): izinkan sesuai permintaan KidGate. Kembali ke Status dan pastikan setiap baris sudah diizinkan.',
      },
    },
    iosScreenTime: {
      title: 'Waktu Layar iOS (perangkat anak)',
      summary:
        'Izinkan Penggunaan Aplikasi & Situs Web agar penguncian, jadwal, dan pemilihan aplikasi dapat berfungsi.',
      tip: 'Jika tombol Izinkan tidak muncul, buka Pengaturan iOS → Waktu Layar dan pastikan Waktu Layar sudah diaktifkan di perangkat anak terlebih dahulu.',
      steps: {
        '1': 'Di iPhone anak, buka KidGate dan tetap di layar Status / penyiapan.',
        '2': 'Pilih Izinkan Penggunaan Aplikasi & Situs Web (atau banner Waktu Layar).',
        '3': 'Pada dialog sistem, pilih Izinkan. Mohon jangan menutup dialog tanpa memilih.',
        '4': 'Kembali ke KidGate. Banner akan hilang setelah izin berhasil diberikan.',
        '5': 'Jika izin sebelumnya ditolak: buka Pengaturan iOS → cari KidGate → aktifkan opsi Waktu Layar / Kontrol Keluarga terkait, lalu buka lagi KidGate.',
        '6': 'Untuk memilih aplikasi yang diblokir: di perangkat anak, buka Pengaturan KidGate → masukkan PIN Orang Tua → Pilih aplikasi untuk diblokir → simpan.',
        '7': 'Di perangkat orang tua, buka perangkat → Aplikasi yang Diblokir dan pastikan daftarnya telah tersinkronisasi. Aktifkan pemblokiran saat sudah siap.',
      },
    },
    oemKeepRunning: {
      title: 'Menjaga KidGate tetap berjalan (pengaturan pabrikan)',
      summary:
        'Xiaomi, Samsung, Oppo, Vivo, Huawei, dan perangkat serupa sering menjeda aplikasi latar belakang.',
      tip: 'Setelah mengubah aturan baterai, mulai ulang perangkat anak sekali, buka lagi KidGate, lalu uji penguncian dari perangkat orang tua.',
      steps: {
        '1': 'Di perangkat Android anak, buka KidGate → Status → Menjaga KidGate tetap berjalan.',
        '2': 'Izinkan mulai otomatis untuk KidGate di layar keamanan pabrikan (istilahnya berbeda-beda tergantung perangkat).',
        '3': 'Atur penggunaan baterai KidGate ke Tanpa batasan, baik di pengaturan Android maupun menu baterai vendor, jika keduanya ada.',
        '4': 'Nonaktifkan daftar “aplikasi tidur”, “aplikasi tidur nyenyak”, atau “istirahatkan aplikasi” yang menyertakan KidGate.',
        '5': 'Jika pintasan tidak berfungsi, buka aplikasi Keamanan / Perawatan perangkat secara manual dan cari KidGate, Mulai otomatis, atau Baterai.',
        '6': 'Tandai setiap baris sebagai Selesai di KidGate setelah Anda menyelesaikannya, agar Anda tahu apa yang masih tersisa.',
      },
    },
    dailyLimit: {
      title: 'Atur Batas Harian',
      summary: 'Batasi berapa menit anak boleh menggunakan perangkat setiap hari.',
      tip: 'Data penggunaan berasal dari perangkat anak. Jika penghitung tampak macet, buka KidGate di perangkat anak dan tunggu sinkronisasi.',
      steps: {
        '1': 'Di perangkat orang tua, buka Keluarga → ketuk perangkat anak.',
        '2': 'Di bawah Kontrol utama, pilih Batas Harian.',
        '3': 'Pilih nilai menit per hari (atau ubah batas yang ada), lalu simpan.',
        '4': 'Pastikan kartu perangkat menampilkan menit yang terpakai dan batas hari ini setelah perangkat anak melakukan sinkronisasi.',
        '5': 'Saat batas tercapai, perangkat akan terkunci sesuai aturan platform. Pilih Buka kunci di layar perangkat jika Anda ingin memulihkan akses lebih awal.',
      },
    },
    blockedHours: {
      title: 'Atur Jam Diblokir',
      summary: 'Jadwalkan hingga 3 rentang waktu saat perangkat harus tetap terkunci.',
      tip: 'Atur dulu jam sekolah dan rentang waktu tidur. Hindari rentang waktu yang tumpang tindih agar jadwal tetap jelas.',
      steps: {
        '1': 'Buka perangkat anak di perangkat orang tua → Jam Diblokir.',
        '2': 'Pilih Atur Jam Diblokir (atau Ubah Jam Diblokir). Tambahkan rentang waktu dengan waktu mulai, waktu selesai, dan hari.',
        '3': 'Simpan rentangnya. Anda dapat menambahkan hingga 3 rentang secara total.',
        '4': 'Aktifkan jadwal jika ada sakelar pengaktif yang ditampilkan.',
        '5': 'Di perangkat anak, pastikan izin Alarm & pengingat dan Waktu Layar masih diizinkan agar jadwal berjalan tepat waktu.',
        '6': 'Selama rentang aktif, kartu perangkat menampilkan Jam Diblokir aktif · terkunci. Gunakan Buka kunci hanya saat Anda sengaja mengesampingkan jadwal.',
      },
    },
    blockedApps: {
      title: 'Blokir aplikasi tertentu',
      summary:
        'Pilih aplikasi di perangkat anak, lalu aktifkan pemblokiran dari perangkat orang tua.',
      tip: 'Di iOS, Apple mungkin menyembunyikan nama aplikasi yang sebenarnya dari perangkat orang tua. Pemilihan tetap dilakukan di perangkat anak dengan PIN Orang Tua.',
      steps: {
        '1': 'Gunakan perangkat anak secara langsung. Buka KidGate → Pengaturan.',
        '2': 'Masukkan PIN Orang Tua saat diminta.',
        '3': 'Buka Pilih aplikasi untuk diblokir. Pilih aplikasi (dan kategori, jika ditampilkan), lalu simpan di perangkat anak.',
        '4': 'Di perangkat orang tua, buka perangkat → Aplikasi yang Diblokir dan tunggu daftar yang dipilih muncul.',
        '5': 'Aktifkan Aktifkan Pemblokiran Aplikasi. Status akan menunjukkan Pemblokiran aktif.',
        '6': 'Uji dengan membuka aplikasi yang diblokir di perangkat anak. Aplikasi tersebut harus dibatasi sesuai aturan platform.',
        '7': 'Untuk mengubah daftar nanti, ulangi pemilihan di perangkat anak dengan PIN Orang Tua. Perangkat orang tua akan menyinkronkan daftar baru.',
      },
    },
    lockUnlock: {
      title: 'Kunci dan buka kunci perangkat',
      summary: 'Kunci perangkat anak dengan segera, atau pulihkan akses.',
      tip: 'Di Android, penguncian paling kuat saat Tampil di atas aplikasi lain dan Aksesibilitas keduanya aktif. Di iOS, penguncian bergantung pada izin Waktu Layar.',
      steps: {
        '1': 'Buka perangkat anak di perangkat orang tua.',
        '2': 'Pilih Kunci perangkat (atau Kunci di KidGate, tergantung opsi platform yang ditampilkan).',
        '3': 'Tunggu beberapa detik. Status akan berubah menjadi Terkunci. Jika tidak ada perubahan, buka KidGate di perangkat anak dan periksa kembali izinnya.',
        '4': 'Untuk memulihkan akses, pilih Buka kunci di layar perangkat yang sama dan konfirmasi.',
        '5': 'Opsional: Anda juga dapat mengunci atau membuka kunci dengan cepat dari Keluarga jika pintasan tersebut muncul di kartu perangkat.',
      },
    },
    locationSharing: {
      title: 'Aktifkan berbagi lokasi',
      summary: 'Lihat lokasi terbaru anak Anda di perangkat orang tua.',
      tip: 'Lokasi memerlukan izin di perangkat anak dan koneksi jaringan yang stabil. GPS di dalam ruangan bisa kurang akurat.',
      steps: {
        '1': 'Di perangkat anak, izinkan Lokasi untuk KidGate saat diminta (atau di Pengaturan sistem).',
        '2': 'Di perangkat orang tua, buka perangkat → Lokasi.',
        '3': 'Aktifkan berbagi jika sedang nonaktif, lalu tunggu pembaruan pertama.',
        '4': 'Tarik ke bawah untuk menyegarkan, atau buka lagi layarnya, jika status masih menunggu.',
        '5': 'Opsional: atur Peringatan Tempat agar Anda diberi tahu saat anak Anda memasuki atau meninggalkan lokasi yang disimpan.',
      },
    },
    checkIn: {
      title: 'Minta Check-In',
      summary:
        'Minta anak Anda mengonfirmasi bahwa mereka aman, dengan lokasi dan foto opsional.',
      tip: 'Izin kamera di perangkat anak diperlukan untuk Check-In dengan foto.',
      steps: {
        '1': 'Buka perangkat anak di perangkat orang tua.',
        '2': 'Pilih Check-In (tindakan cepat atau bagian Keamanan).',
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
        '4': 'Di perangkat orang tua, buka perangkat → Peringatan SOS untuk meninjau kejadiannya.',
        '5': 'Sepakati dengan anak Anda kapan harus menggunakan SOS dan kapan Check-In biasa sudah cukup.',
      },
    },
    webFilter: {
      title: 'Batasi situs dewasa',
      summary: 'Aktifkan Filter Web untuk konten dewasa jika platform mendukungnya.',
      tip: 'Pemfilteran web bergantung pada kemampuan platform. Gabungkan dengan Aplikasi yang Diblokir untuk perlindungan yang lebih kuat.',
      steps: {
        '1': 'Buka perangkat anak di perangkat orang tua → Filter Web.',
        '2': 'Tinjau status saat ini (situs dewasa dibatasi, atau pemfilteran nonaktif).',
        '3': 'Aktifkan pemfilteran dan simpan jika ada sakelar yang ditampilkan.',
        '4': 'Periksa lagi nanti dari layar yang sama. Jika status tetap Menunggu, buka lagi KidGate di perangkat anak agar pengaturan dapat tersinkronisasi.',
      },
    },
    protectionAlerts: {
      title: 'Peringatan perlindungan',
      summary: 'Dapatkan notifikasi saat izin penting di perangkat anak dinonaktifkan.',
      tip: 'Peringatan perlindungan berarti perlindungan KidGate melemah. Mohon pulihkan izin tersebut di perangkat anak sesegera mungkin.',
      steps: {
        '1': 'Buka perangkat anak → Perlindungan (atau Peringatan perlindungan).',
        '2': 'Tinjau kejadian terbaru seperti Tampil di atas aplikasi lain, Aksesibilitas, Akses Penggunaan, Kamera, atau Lokasi yang dinonaktifkan.',
        '3': 'Di perangkat anak, buka KidGate → Status dan aktifkan kembali izin yang disebutkan.',
        '4': 'Kembali ke Peringatan perlindungan dan pastikan tidak ada kejadian baru yang tidak terduga muncul.',
        '5': 'Jaga notifikasi tetap aktif di perangkat orang tua agar Anda cepat mengetahui perubahan.',
      },
    },
  },
} as const;
