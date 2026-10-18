export const legal = {
  privacyPolicy: {
    title: 'Kebijakan Privasi',
    effectiveDate: 'Berlaku mulai 18 Oktober 2026',
    intro:
      'Aplikasi ini dioperasikan dengan nama produk dan nama dagang KidGate. Kebijakan ini menjelaskan bagaimana KidGate menangani data ketika orang tua menggunakan layanan untuk mengelola perangkat anak.\n\nKebijakan ini mencakup aplikasi KidGate untuk iPhone, iPad, dan Android, aplikasi KidGate untuk macOS dan Windows, ekstensi browser KidGate, aplikasi Android TV, dasbor orang tua, dan situs kidgate.app.\n\n### Ringkasan\n\n• KidGate hanya memproses data untuk fitur yang diaktifkan orang tua dan izin yang diberikan sistem operasi.\n• Pesan dan pencarian dicocokkan langsung di perangkat. Hanya kata kunci yang cocok yang dikirim, kecuali orang tua secara tersendiri menyetujui penggunaan konfirmasi AI (bagian 3).\n• Filter web berjalan di perangkat. KidGate mencatat domain, bukan alamat lengkap atau isi halaman.\n• Tidak ada iklan, dan KidGate tidak menjual data pribadi.\n• Sebagian besar riwayat aktivitas terhapus otomatis setelah 30 hari, peringatan SOS setelah 90 hari (bagian 11).\n• Personel KidGate yang berwenang hanya membuka akun keluarga bila diperlukan untuk dukungan, dan setiap pembukaan tampil di umpan aktivitas keluarga (bagian 10).\n• Orang tua dapat meminta penghapusan akun kapan saja. Setelah masa tunggu 14 hari, akun dan data keluarga dihapus, kecuali sejumlah catatan minimum yang disebut di bagian 11 dan 12.',
    sections: [
      {
        title: '1. Cakupan dan wewenang orang tua',
        body: 'Akun orang tua mengatur izin dan mengelola perangkat anak. Anak tidak membuat akun KidGate sendiri; sebuah perangkat hanya dikelola melalui akun orang tua.\n\nOrang tua harus memiliki hak asuh yang sah atau wewenang yang berlaku sebelum memantau atau mengelola perangkat. KidGate tidak boleh digunakan untuk memantau orang dewasa secara diam-diam atau siapa pun di luar pengasuhan sah orang tua.',
      },
      {
        title: '2. Data yang kami proses',
        body: 'Apa yang diproses KidGate bergantung pada fitur yang diaktifkan orang tua dan izin yang diberikan sistem operasi kepada aplikasi. Tidak setiap jenis data di bawah ini dikumpulkan di setiap perangkat.\n\n### Akun dan perangkat\n\n• Pengenal akun serta metode masuk Google, Apple, atau email yang dipakai membuat akun orang tua.\n• Nama yang diberikan orang tua untuk tiap anak dan perangkat yang ditugaskan kepada mereka.\n• Nama perangkat, model, jenis perangkat, versi sistem operasi dan versi aplikasi, tingkat baterai, serta status penyambungan.\n• Pengaturan: Batas harian, Jam Diblokir, Aplikasi yang Diblokir, batas per aplikasi, kategori Filter web, dan PIN Orang Tua. PIN hanya disimpan sebagai hash satu arah.\n\n### Waktu Layar dan aplikasi\n\n• Total Waktu Layar, rinciannya per aplikasi, dan catatan per menit tentang kapan perangkat digunakan.\n• Aplikasi yang terpasang di perangkat dan ekstensi yang ditambahkan ke browser.\n• Peringatan saat aplikasi baru dipasang, saat sebuah perlindungan dimatikan, atau saat penggunaan tampak tidak biasa, misalnya aplikasi baru atau penggunaan selama Jam Diblokir.\n\n### Web dan video\n\n• Domain yang diminta perangkat anak dan domain yang diblokir, dihitung per hari dan per jam.\n• Judul dan nama kanal video yang diputar, di platform yang memungkinkan informasi itu dibaca, saat riwayat video aktif.\n• Permintaan pembukaan situs dan informasi yang diperlukan untuk memprosesnya.\n\n### Lokasi dan keselamatan\n\n• Lokasi perangkat, riwayat lokasi, tempat yang disimpan orang tua, dan peringatan saat perangkat tiba di atau meninggalkan salah satunya.\n• Peringatan SOS, Check-In keselamatan, dan foto yang dikirim anak bersamanya, serta suara hingga 15 detik yang direkam saat anak mengirim SOS dari ponsel atau tablet yang mengizinkan mikrofon.\n• Nama dan alamat email kontak tepercaya yang ditambahkan orang tua, agar KidGate dapat mengirimi mereka email pada setiap SOS.\n\n### Pesan dan pencarian\n\n• Peringatan saat sebuah pesan atau kata kunci pencarian cocok dengan daftar kata kunci yang pemantauannya diaktifkan orang tua. Cara kerjanya dijelaskan di bagian 3.\n\n### Laporan, dukungan, dan pembayaran\n\n• Permintaan waktu tambahan, tugas hadiah, dan total bintang mingguan di papan bintang.\n• Laporan mingguan yang merangkum data tersebut.\n• Pesan dukungan dan tangkapan layar yang dilampirkan padanya.\n• Laporan kerusakan dan data diagnostik teknis.\n• Data transaksi langganan yang disediakan toko aplikasi.\n\nKidGate tidak meminta nama asli anak jika sebuah fitur tidak membutuhkannya.',
      },
      {
        title: '3. Yang tetap berada di perangkat anak',
        body: '### Pemantauan pesan dan pencarian\n\nPemantauan pesan berjalan langsung di perangkat Android. Pemantauan pencarian berjalan di perangkat Android dan di ekstensi browser KidGate. Keduanya hanya berjalan ketika orang tua mengaktifkannya.\n\nPerangkat mencocokkan isi dengan daftar kata kunci yang tersimpan di perangkat. Jika ada yang cocok, yang dikirim adalah peringatan yang menyebutkan kata atau frasa pendek yang cocok, kategorinya, aplikasi atau mesin pencari tempat kata itu muncul, dan waktunya. Isi pesan atau pencariannya sendiri, sisa percakapan, dan identitas lawan bicara tidak dikirim dan tidak disimpan oleh KidGate.\n\n### Konfirmasi AI\n\nIni satu-satunya pengecualian, dan memerlukan persetujuan tersendiri dari orang tua. Jika diaktifkan, pesan masuk yang kecocokannya ambigu dikirim ke model Gemini milik Google untuk dinilai, agar orang tua tidak diberi peringatan karena sebuah kata biasa. Sebelum dikirim, alamat email, nomor telepon, dan alamat web di dalam pesan disamarkan; sisa isinya tetap dikirim dan masih dapat memuat informasi pribadi.\n\nKidGate hanya menyimpan hasil penilaian dan tidak menyimpan pesan tersebut setelah penilaian selesai. Cara Google Cloud menangani data yang diterimanya dijelaskan di bagian 5. Isi yang ditulis sendiri oleh anak tidak pernah dikirim untuk konfirmasi AI, apa pun yang telah disetujui keluarga.\n\n### Web dan video\n\nKidGate mencatat domain yang diminta perangkat dan apakah domain itu diblokir. KidGate tidak mencatat alamat lengkap halaman atau isinya, kecuali video mana yang diputar saat riwayat video aktif. Berkas, foto, dan penjelajahan yang tidak perlu dibaca oleh fitur aktif mana pun tetap berada di perangkat.\n\n### Rekaman suara saat mengirim SOS\n\nMikrofon hanya dipakai untuk satu hal: saat anak mengirim SOS dari ponsel atau tablet yang mengizinkan mikrofon, suara hingga 15 detik direkam dan dikirim bersama peringatan. Di luar itu, KidGate tidak merekam, tidak ada yang didengarkan secara langsung, dan orang tua tidak dapat memulai rekaman sendiri dari jarak jauh.\n\n### Filter web dan DNS\n\nDi iPhone, iPad, ponsel Android, dan Android TV, Filter web adalah VPN yang berjalan di perangkat itu sendiri. VPN ini tidak meneruskan lalu lintas melalui server KidGate: VPN ini hanya menerima pencarian nama situs dari perangkat, menolak yang diblokir, dan meneruskan sisanya ke server DNS untuk dijawab.\n\n• Di iPhone dan iPad: 1.1.1.1 milik Cloudflare.\n• Di Android: server DNS milik jaringan yang sedang dipakai, atau Google Public DNS jika server itu tidak menjawab.\n\nDi ponsel dan tablet, sebelum VPN pertama kali diaktifkan, KidGate menjelaskan apa yang dilihat VPN dan meminta izin. Apa yang dicatat VPN hanya digunakan untuk memfilter dan agar keluarga dapat melihat riwayat web mereka sendiri; data ini tidak dijual, tidak digunakan untuk tujuan lain, dan hanya sampai ke penyedia di bagian 7 sejauh diperlukan untuk menjalankan layanan.',
      },
      {
        title: '4. Cara data digunakan',
        body: 'KidGate menggunakan data untuk:\n\n• Mengautentikasi akun dan menyambungkan perangkat.\n• Menyediakan fitur pengelolaan bagi orang tua dan menyinkronkan pengaturan antarperangkat.\n• Mengirim peringatan, menampilkan riwayat aktivitas, dan membuat laporan.\n• Memproses langganan dan transaksi.\n• Melindungi akun serta mencegah penipuan atau penyalahgunaan.\n• Memperbaiki masalah, memberikan dukungan kepada pengguna, dan meningkatkan stabilitas.\n\nKidGate tidak menjual data pribadi dan tidak menggunakan data anak untuk iklan berbasis perilaku. Tidak ada iklan di aplikasi KidGate mana pun.',
      },
      {
        title: '5. Pemrosesan otomatis dan AI',
        body: 'KidGate menggunakan model Gemini milik Google, melalui Google Cloud, untuk tiga hal:\n\n• Ringkasan laporan mingguan: ringkasan tertulis yang dibuat dari angka penggunaan keluarga itu sendiri.\n• Klasifikasi aplikasi dan domain: mengelompokkannya ke dalam kategori yang dipakai Filter web dan daftar aplikasi. Hasilnya disimpan dalam satu tabel bersama yang hanya mencatat domain dan kategorinya, bukan keluarga mana yang mengunjunginya.\n• Konfirmasi AI: menilai sebagian pesan masuk yang kecocokannya ambigu, hanya jika orang tua telah menyetujuinya, dengan cara yang dijelaskan di bagian 3.\n\nModel-model ini bisa keliru. Sebuah kategori, satu kalimat ringkasan, atau sebuah peringatan pesan adalah pengingat bagi orang tua untuk memeriksa, bukan kesimpulan, dan KidGate tidak mengambil keputusan yang berdampak hukum atau berdampak serupa bagi seorang anak berdasarkan hal itu.\n\nBerdasarkan ketentuan Google Cloud, Google tidak menggunakan data yang dikirim KidGate melalui layanan ini untuk melatih modelnya. Google tetap dapat menyimpan data untuk sementara sesuai mekanisme operasional dan keamanan layanan tersebut, sehingga fakta bahwa KidGate tidak menyimpan sebuah pesan tidak berarti semua salinan di pihak penyedia langsung hilang.',
      },
      {
        title: '6. Dasar hukum dan persetujuan',
        body: 'Bergantung pada hukum yang berlaku, KidGate memproses data untuk menyediakan layanan yang diminta, memenuhi kewajiban hukum, melindungi kepentingan keamanan dan keselamatan yang sah, atau berdasarkan persetujuan apabila diwajibkan oleh hukum. Orang tua bertanggung jawab memberikan pemberitahuan yang diperlukan dan memperoleh persetujuan yang diperlukan untuk anak atau pengguna perangkat.\n\nPemantauan pesan dan konfirmasi AI adalah dua pilihan persetujuan yang terpisah dan dapat dicabut kapan saja:\n\n• Pemantauan pesan diaktifkan per perangkat.\n• Konfirmasi AI disetujui satu kali untuk seluruh keluarga, dan KidGate mencatat siapa yang menyetujui dan kapan.',
      },
      {
        title: '7. Penyedia layanan',
        body: 'KidGate menggunakan penyedia berikut untuk menjalankan layanan. Setiap penyedia hanya menerima apa yang dibutuhkan tugasnya.\n\n• Google Cloud dan Firebase: autentikasi, basis data, penyimpanan berkas, fungsi server, notifikasi push melalui Firebase Cloud Messaging, pelaporan kerusakan melalui Firebase Crashlytics, dan model Gemini yang disebut di bagian 5.\n• Apple dan Google: memproses pembelian, perpanjangan, dan pengembalian dana langganan melalui toko aplikasi mereka.\n• Google Analytics: pengukuran yang dijelaskan di bagian 8.\n• HERE Technologies: mengubah lokasi yang dilaporkan perangkat menjadi alamat dan menggambar petak peta di layar lokasi, sehingga menerima koordinat yang dilaporkan perangkat.\n• Resend: mengirimkan email yang dikirim KidGate, termasuk peringatan SOS kepada kontak tepercaya dan laporan mingguan.\n• Cloudflare: menyajikan pemasang aplikasi desktop dan, di iPhone dan iPad, menjawab pencarian nama situs yang diloloskan Filter web, sehingga menerima nama-nama domain tersebut.\n• unpkg: jaringan konten yang menyajikan pustaka peta untuk aplikasi orang tua.\n\nData hanya dibagikan kepada para penyedia ini sejauh diperlukan untuk menyediakan, memelihara, dan melindungi layanan; kepada pihak berwenang apabila diwajibkan secara hukum; atau untuk mencegah risiko keamanan, penipuan, atau penyalahgunaan. Para penyedia memiliki kebijakan dan kewajiban mereka sendiri atas data yang mereka proses, dan KidGate tidak mengizinkan satu pun dari mereka menggunakan data anak untuk tujuan pemasaran mereka sendiri.',
      },
      {
        title: '8. Pengukuran dan cookie',
        body: '### Situs kidgate.app\n\nSitus ini mengukur kunjungan halaman dan jumlah klik pada setiap tautan unduhan desktop dengan Google Analytics. Penyimpanan analitik ditolak secara bawaan, sehingga tidak ada cookie analitik yang dipasang dan tidak ada yang disimpan di browser pembaca; setiap kunjungan dihitung dari permintaan tanpa cookie dengan alamat IP yang dipangkas. Google Signals dan pengenal iklan dimatikan, dan KidGate tidak mengirim apa pun yang dapat mengidentifikasi seorang pembaca atau sebuah keluarga melalui mekanisme ini.\n\n### Aplikasi KidGate\n\nAplikasi KidGate mengirim sejumlah kecil peristiwa ke properti pengukuran yang sama untuk mengetahui fitur mana yang dipakai. Peristiwa ini membawa pengenal instalasi aplikasi. Pengenal ini bukan pengenal iklan perangkat, yang tidak dikumpulkan aplikasi, tetapi tetap dapat membedakan satu instalasi dari instalasi lain, sehingga data ini tidak sepenuhnya anonim. Peristiwa ini tidak pernah membawa nama, pesan, lokasi, atau riwayat penjelajahan seorang anak.\n\nAplikasi dan situs ini tidak memakai jaringan iklan atau pelacakan apa pun.',
      },
      {
        title: '9. Tempat data disimpan, dan cara data dilindungi',
        body: 'Data keluarga disimpan di region Singapura milik Google Cloud dan dapat diproses di tempat lain oleh para penyedia yang disebut di bagian 7, yang berarti data itu dapat keluar dari negara tempat keluarga tinggal.\n\nKidGate menerapkan perlindungan teknis dan organisasi yang wajar, termasuk:\n\n• Kontrol akses dan praktik hak akses minimum.\n• Aturan di sisi server yang membatasi setiap pembacaan pada satu keluarga.\n• Transmisi data melalui koneksi yang aman.\n• PIN Orang Tua yang hanya disimpan sebagai hash satu arah dan tidak dapat dibaca kembali.\n\nTidak ada sistem yang sepenuhnya aman; KidGate tidak dapat menjamin bahwa data tidak akan pernah hilang, diakses tanpa izin, atau mengalami gangguan.',
      },
      {
        title: '10. Akses personel KidGate untuk dukungan',
        body: '### Kapan\n\nHanya jika diperlukan untuk menangani permintaan dukungan atau mendiagnosis gangguan, dan hanya oleh personel yang diberi wewenang oleh KidGate, yang masuk dengan autentikasi dua faktor.\n\n### Apa yang dapat mereka lihat dan lakukan\n\nSaat membuka sebuah akun keluarga, personel tersebut melihat persis apa yang dilihat orang tua: konfigurasi, perangkat, dan aktivitas di dalam akun, termasuk riwayat lokasi, riwayat web, peringatan pesan, dan foto yang dilampirkan pada SOS atau Check-In. Mereka juga dapat mengubah pengaturan dan mengirim perintah ke perangkat seperti orang tua.\n\n### Apa yang dicatat\n\n• Setiap kali sebuah akun keluarga dibuka, satu baris ditulis ke umpan aktivitas keluarga itu sendiri, yang dapat dilihat orang tua, beserta waktu dan permintaan dukungan yang terkait.\n• Setiap pembacaan catatan sebuah keluarga melalui perkakas operator dicatat beserta waktu dan alasan yang dinyatakan.\n• Tindakan satu per satu di dalam sesi dukungan, seperti mengubah pengaturan atau mengirim perintah, saat ini belum dicatat secara terpisah.',
      },
      {
        title: '11. Berapa lama data disimpan',
        body: 'Jangka waktu di bawah ini adalah mekanisme penyimpanan KidGate. Penyedia di bagian 7 dapat memproses atau menyimpan data berdasarkan ketentuan mereka sendiri.\n\n### Dihapus otomatis setelah jangka waktu tertentu\n\n• 30 hari: Waktu Layar dan penggunaan per aplikasi, riwayat web, riwayat video, riwayat lokasi, dan umpan aktivitas.\n• 90 hari: peringatan SOS dan Check-In keselamatan beserta foto dan rekaman suaranya; permintaan waktu tambahan.\n• 365 hari: laporan mingguan.\n• 90 hari setelah permintaan diselesaikan: permintaan dukungan, balasan, dan tangkapan layar yang dilampirkan.\n• 12 bulan setelah penghapusan akun selesai: catatan bahwa penghapusan pernah diminta dan diselesaikan, yang hanya berisi hash alamat email dan tanggalnya, agar penghapusan yang dipersengketakan dapat dijawab.\n\nKode penyambungan kedaluwarsa dalam hitungan menit. Sesi masuk lewat browser bertahan 7 hari bila diberikan lewat aplikasi, atau 8 jam bila dibuka dengan PIN Orang Tua.\n\n### Disimpan sampai akun keluarga dihapus\n\nData berikut saat ini belum memiliki masa hapus otomatis tersendiri:\n\n• Akun dan pengaturan keluarga.\n• Tempat tersimpan.\n• Catatan anak dan perangkat.\n• Tugas hadiah.\n• Permintaan pembukaan situs.\n• Papan bintang dan papan Waktu Layar mingguan.\n• Daftar aplikasi yang terpasang dan ekstensi browser yang ditambahkan.\n\n### Pengecualian\n\nSejumlah catatan minimum dapat disimpan lebih lama apabila diwajibkan oleh hukum, transaksi toko aplikasi, sengketa penghapusan, atau pencegahan penipuan, dan hanya sejauh yang dibutuhkan tujuan tersebut.',
      },
      {
        title: '12. Menghapus akun',
        body: 'Orang tua dapat mengajukan permintaan penghapusan di Pengaturan, atau lewat email ke support@kidgate.app dari alamat email akun, sebagaimana dijelaskan di kidgate.app/delete-account.\n\nPermintaan itu ditahan selama 14 hari dan dapat dibatalkan selama masa tersebut. Setelah 14 hari, akun keluarga, semua catatan anak dan perangkat di dalamnya, serta berkas tersimpan dihapus, dan data masuk akun ikut dihilangkan. Penghapusan bersifat permanen dan tidak ada ekspor data setelahnya.\n\nPenghapusan yang telah selesai tidak berarti semua catatan terkait langsung hilang: catatan yang mengonfirmasi penghapusan dan pengecualian yang disebut di bagian 11 tetap disimpan dalam jangka waktu dan cakupan yang dijelaskan di sana.',
      },
      {
        title: '13. Hak dan pilihan',
        body: 'Bergantung pada hukum yang berlaku, pengguna dapat meminta akses, koreksi, penghapusan, atau pembatasan pemrosesan data, menyatakan keberatan atas pemrosesan, serta menarik persetujuan apabila pemrosesan didasarkan pada persetujuan. Permintaan semacam itu, termasuk permintaan salinan data yang disimpan KidGate tentang keluarga, dikirim ke support@kidgate.app; saat ini belum ada fitur ekspor mandiri.\n\nPemantauan pesan dan konfirmasi AI dapat dimatikan kapan saja tanpa memengaruhi bagian layanan lainnya.\n\nIzin lokasi, notifikasi, kamera, mikrofon, atau izin perangkat dapat dicabut melalui sistem operasi. Jika demikian, fitur yang bergantung pada izin itu akan berhenti atau tidak berfungsi sepenuhnya, dan KidGate melaporkan hal itu langsung di layar orang tua alih-alih menampilkan kontrol yang sudah tidak berfungsi.',
      },
      {
        title: '14. Data anak',
        body: 'KidGate memproses data anak hanya berdasarkan konfigurasi dan arahan akun orang tua, dalam lingkup fitur yang diaktifkan orang tua dan izin yang telah diberikan. Apabila diketahui bahwa data anak diberikan tanpa wewenang atau persetujuan yang diperlukan, KidGate dapat membatasi akun tersebut dan menghapus data setelah dilakukan verifikasi.',
      },
      {
        title: '15. Insiden data',
        body: 'Apabila insiden keamanan yang melibatkan data telah dikonfirmasi, KidGate akan menilai insiden tersebut, mengambil langkah mitigasi yang wajar, dan memberi tahu pengguna atau pihak berwenang apabila diwajibkan secara hukum. Orang tua wajib melindungi akun, PIN, dan perangkat mereka, serta segera memberi tahu KidGate jika menduga ada akses tanpa izin.',
      },
      {
        title: '16. Perubahan dan kontak',
        body: 'Kebijakan ini dapat diperbarui seiring perubahan fitur atau hukum. Perubahan yang material akan disampaikan melalui aplikasi atau saluran distribusi yang sesuai.\n\nPertanyaan dan permintaan terkait privasi dikirim ke support@kidgate.app, alamat yang juga dipublikasikan pada halaman KidGate di toko aplikasi.',
      },
    ],
  },
  termsOfService: {
    title: 'Ketentuan Layanan',
    effectiveDate: 'Berlaku mulai 6 September 2026',
    intro:
      'Dengan masuk ke atau menggunakan KidGate, Anda menegaskan bahwa Anda telah membaca dan menyetujui ketentuan ini. Layanan ini dioperasikan dengan nama produk dan nama dagang KidGate.',
    sections: [
      {
        title: '1. Kelayakan',
        body: 'Anda harus cukup umur untuk membuat perjanjian menurut hukum yang berlaku dan memiliki wewenang sah atas setiap anak, akun, dan perangkat yang Anda kelola. Jangan gunakan layanan ini apabila Anda tidak menyetujui ketentuan ini.',
      },
      {
        title: '2. Apa itu KidGate, dan apa yang bukan',
        body: 'KidGate menyediakan alat yang membantu orang tua mengelola perangkat, menetapkan batasan, melihat status, dan menerima peringatan. Layanan ini tidak menggantikan pengawasan langsung, nasihat medis, layanan darurat, penegakan hukum, atau layanan perlindungan anak profesional. SOS memberi tahu Anda; SOS tidak menghubungi layanan darurat, dan tidak berfungsi jika perangkat tidak memiliki jaringan.',
      },
      {
        title: '3. Perangkat lunak yang dipasang di perangkat yang dikelola',
        body: 'Menerapkan sebuah aturan memerlukan perangkat lunak di perangkat tempat aturan itu berlaku, dan setiap platform memberikannya dengan cara berbeda: kerangka kerja Waktu Layar milik Apple di iPhone dan iPad, layanan Aksesibilitas dan izin admin perangkat di Android, layanan Aksesibilitas di Android TV, ekstensi sistem dan agen latar belakang di macOS, layanan latar belakang di Windows, serta ekstensi browser di Chrome. Anda sendiri yang memasangnya, di perangkat yang berhak Anda kelola, dan Anda dapat menghapusnya dari perangkat itu kapan saja. Menghapusnya, atau mencabut izin yang dibutuhkannya, menghentikan penerapan aturan di perangkat itu — KidGate akan memberi tahu Anda bahwa hal itu terjadi, tetapi tidak dapat mencegahnya.',
      },
      {
        title: '4. Tanggung jawab orang tua',
        body: 'Anda wajib memberikan pemberitahuan yang sesuai kepada anak, memperoleh persetujuan yang diperlukan, mengonfigurasi izin dengan benar, menguji fitur, serta mematuhi hukum privasi, pemantauan, ketenagakerjaan, pendidikan, dan perlindungan anak. Pemantauan pesan dan konfirmasi AI masing-masing merupakan pilihan tersendiri dan keputusannya ada pada Anda, beserta pemberitahuan yang dituntut keputusan itu di yurisdiksi Anda. Jangan gunakan KidGate untuk pemantauan diam-diam, pelecehan, kontrol yang melanggar hukum, atau pelanggaran hak orang lain.',
      },
      {
        title: '5. Keamanan akun dan PIN Orang Tua',
        body: 'Anda bertanggung jawab atas aktivitas akun serta perlindungan perangkat, PIN, dan metode masuk. PIN Orang Tua menjaga pengaturan sensitif di perangkat anak dan tidak dapat dipulihkan dari perangkat — PIN itu disimpan sebagai hash satu arah. Segera laporkan dugaan akses tanpa izin. KidGate dapat membatasi akun atau perangkat sementara untuk melindungi pengguna atau menyelidiki penyalahgunaan.',
      },
      {
        title: '6. Izin platform dan batasan teknis',
        body: 'Fitur bergantung pada izin sistem operasi, akses jaringan, kondisi baterai, pengaturan pabrikan, layanan lokasi, dan platform pihak ketiga, dan apa yang diizinkan tiap platform berbeda-beda. Sebagian penerapan aturan memang dirancang sebagai upaya terbaik — menutup aplikasi yang diblokir di komputer alih-alih mencegahnya terbuka — dan KidGate menyebutkan yang mana di layar yang menawarkannya. Peringatan dapat tertunda, tidak lengkap, atau tidak akurat. Anda harus memeriksa perangkat secara langsung dan tidak boleh hanya mengandalkan KidGate untuk keselamatan atau keadaan darurat.',
      },
      {
        title: '7. Paket, uji coba, dan tingkat gratis',
        body: 'Uji coba gratis dengan akses penuh dimulai saat perangkat orang tua dan perangkat anak pertama Anda tersambung, dan berjalan selama periode yang disebutkan di aplikasi. Setelah berakhir, aturan yang Anda atur tetap berjalan tanpa pembayaran di satu perangkat anak — Batas harian, Jam Diblokir, Aplikasi yang Diblokir, batas per aplikasi, Filter web, SafeSearch, Kunci perangkat, permintaan waktu tambahan, dan tugas hadiah — dan orang tua tetap dapat menanyakan posisi terkini perangkat itu dalam jumlah terbatas per hari. SOS tidak pernah berada di balik pembayaran. Aktivitas langsung, riwayat, laporan mingguan, jejak lokasi, alamat, Peringatan Tempat, dan pemantauan pesan menjadi bagian dari Premium. Jika sebuah keluarga memiliki perangkat anak lebih banyak daripada yang dicakup paketnya, perangkat selebihnya dijeda: perangkat itu tetap menerapkan aturan yang sudah diatur, aturan itu dapat dilonggarkan tetapi tidak dapat diperketat, dan perangkat itu berhenti mengirim aktivitas. Anda yang memilih perangkat mana yang tetap dipantau, dan pilihan itu dapat diubah sekali setiap tujuh hari. Menghapus perangkat anak tidak memulai ulang uji coba. Satu keluarga hanya dapat menyambungkan sejumlah terbatas perangkat anak pada saat yang sama; jumlahnya bergantung pada paket, dan aplikasi menyebutkannya saat batas itu tercapai.',
      },
      {
        title: '8. Langganan dan pembayaran',
        body: 'Pembelian, perpanjangan, pembatalan, dan pengembalian dana ditangani sesuai ketentuan Apple App Store atau Google Play, dan langganan hanya dapat dibeli atau dipulihkan dari aplikasi KidGate untuk iPhone, iPad, atau Android — keluarga yang seluruh perangkatnya berupa komputer, televisi, atau Chromebook memerlukan salah satunya untuk membayar. Satu langganan mencakup seluruh keluarga dan hanya pemilik keluarga yang dapat membeli atau memulihkannya; pembelian yang dicoba dari akun orang tua lain ditolak. Paket bulanan dan tahunan diperpanjang otomatis kecuali dibatalkan melalui toko minimal 24 jam sebelum periode berakhir. Pembelian sekali bayar tidak diperpanjang, mencakup jumlah perangkat anak yang disebutkan di aplikasi, dan berlaku selama KidGate tersedia; bagian 12 menjelaskan apa yang terjadi jika hal itu berakhir. Harga dan fitur paket dapat berubah setelah pemberitahuan yang diwajibkan oleh hukum dan aturan toko aplikasi.',
      },
      {
        title: '9. Konten otomatis dan hasil AI',
        body: 'Ringkasan laporan mingguan, kategori yang diberikan kepada aplikasi dan situs web, serta langkah konfirmasi dalam pemantauan pesan dihasilkan oleh model otomatis dan dapat keliru ke dua arah: sebuah situs bisa masuk kategori yang salah, sebuah ringkasan bisa salah menggambarkan satu pekan, dan sebuah peringatan bisa muncul untuk pesan yang tidak berbahaya atau justru tidak muncul untuk pesan yang berbahaya. Perlakukan semuanya sebagai dorongan untuk melihat, bukan sebagai kesimpulan, dan jangan menjadikannya satu-satunya dasar keputusan tentang seorang anak.',
      },
      {
        title: '10. Lisensi dan kepemilikan',
        body: 'KidGate memberikan lisensi terbatas, pribadi, non-eksklusif, tidak dapat dialihkan, dan dapat dicabut untuk menggunakan aplikasi berdasarkan ketentuan ini. Anda tidak boleh menjual kembali, melakukan rekayasa balik, melumpuhkan perlindungan, mengotomatiskan ekstraksi data, atau menggunakan merek, kode sumber, atau konten di luar batas yang diizinkan oleh hukum.',
      },
      {
        title: '11. Perilaku yang dilarang',
        body: 'Jangan membahayakan sistem, menyebarkan malware, menyamar sebagai orang lain, mengakses data tanpa izin, membebani layanan secara berlebihan, melewati batasan, menimbulkan kerugian, atau melanggar hukum. KidGate dapat membatasi atau menghentikan akses apabila secara wajar meyakini telah terjadi pelanggaran.',
      },
      {
        title: '12. Ketersediaan dan perubahan',
        body: 'Layanan dapat berubah, dihentikan sementara, atau diakhiri karena pemeliharaan, keamanan, perubahan platform, hukum, atau alasan operasional. KidGate dapat dihentikan; jika hal itu terjadi, langganan aktif dan pembelian sekali bayar ditangani sesuai aturan toko aplikasi yang berlaku — pembelian sekali bayar membeli layanan selama layanan itu tersedia, bukan janji bahwa layanan akan tersedia selamanya. KidGate berupaya menjaga ketersediaan yang wajar namun tidak menjanjikan operasi tanpa gangguan, bebas kesalahan, atau kompatibilitas dengan setiap perangkat.',
      },
      {
        title: '13. Penyangkalan',
        body: 'Sejauh diizinkan oleh hukum, layanan ini disediakan “sebagaimana adanya” dan “sebagaimana tersedia”, tanpa jaminan tersirat atas kelayakan jual, kesesuaian untuk tujuan tertentu, keakuratan, atau non-pelanggaran. Tidak ada ketentuan yang mengesampingkan hak konsumen yang bersifat wajib atau tanggung jawab yang menurut hukum tidak dapat dikesampingkan.',
      },
      {
        title: '14. Batasan tanggung jawab',
        body: 'Sejauh diizinkan oleh hukum, KidGate tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, punitif, kehilangan data, keuntungan, atau peluang yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan. Total tanggung jawab atas klaim terkait layanan tidak akan melebihi jumlah yang dibayarkan kepada KidGate selama 12 bulan sebelum kejadian tersebut, kecuali diwajibkan lain oleh hukum.',
      },
      {
        title: '15. Ganti rugi',
        body: 'Sejauh diizinkan oleh hukum, Anda setuju untuk mengganti rugi KidGate atas klaim pihak ketiga yang disebabkan oleh penggunaan yang melanggar hukum, pemantauan tanpa izin, pelanggaran hak orang lain, atau pelanggaran ketentuan ini. Hal ini tidak mencakup kerugian yang secara hukum dapat diatribusikan langsung kepada KidGate.',
      },
      {
        title: '16. Pengakhiran dan sengketa',
        body: 'Anda dapat berhenti menggunakan layanan dan meminta penghapusan akun. Penghapusan ditahan selama 14 hari dan dapat dibatalkan dalam masa tersebut; setelah itu akun keluarga dan datanya dihapus secara permanen. KidGate dapat menangguhkan atau mengakhiri layanan karena pelanggaran, risiko keselamatan, atau tuntutan hukum. Para pihak harus terlebih dahulu berupaya menyelesaikan sengketa dengan itikad baik, dimulai dengan email ke support@kidgate.app. Ketentuan ini diatur oleh hukum Vietnam dan sengketa diajukan ke pengadilan yang berwenang di Vietnam, kecuali apabila aturan perlindungan konsumen yang bersifat wajib di negara tempat Anda tinggal memberi Anda hak atas hukum atau pengadilan yang berbeda.',
      },
      {
        title: '17. Ketentuan umum',
        body: 'Apabila suatu ketentuan dinyatakan tidak dapat diberlakukan, ketentuan lainnya tetap berlaku. Tidak diberlakukannya suatu ketentuan bukan berarti pelepasan hak atas ketentuan tersebut. Ketentuan ini, bersama dengan Kebijakan Privasi dan ketentuan toko aplikasi mana pun, merupakan keseluruhan perjanjian mengenai layanan ini. KidGate dapat mengalihkan ketentuan ini sebagai bagian dari pengalihan aplikasi; hak Anda berdasarkan hukum yang bersifat wajib tidak terpengaruh.',
      },
      {
        title: '18. Perangkat lunak pihak ketiga',
        body: 'KidGate menyertakan dua jenis huruf, keduanya digunakan di bawah SIL Open Font License 1.1: Plus Jakarta Sans dari Tokotype dan Baloo 2 dari Ek Type. Metrik vertikal Baloo 2 disesuaikan ulang untuk tinggi baris aplikasi ini; bentuk huruf dan nama keluarganya tidak berubah, dan lisensinya mengizinkan perubahan tersebut. Tidak satu pun dijual secara terpisah. Sumber dan lisensi:',
        links: [
          {
            label: 'Plus Jakarta Sans di GitHub',
            url: 'https://github.com/tokotype/PlusJakartaSans',
          },
          {
            label: 'Baloo 2 di GitHub',
            url: 'https://github.com/EkType/Baloo2',
          },
          {
            label: 'SIL Open Font License 1.1',
            url: 'https://scripts.sil.org/OFL',
          },
        ],
      },
      {
        title: '19. Perubahan dan kontak',
        body: 'Ketentuan ini dapat diperbarui. Perubahan material akan disampaikan secara sepatutnya; penggunaan berkelanjutan setelah tanggal berlaku dianggap sebagai penerimaan atas ketentuan yang diperbarui sejauh diizinkan oleh hukum. Pertanyaan dikirim ke support@kidgate.app.',
      },
    ],
  },
} as const;
