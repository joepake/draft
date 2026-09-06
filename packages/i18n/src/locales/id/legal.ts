export const legal = {
  privacyPolicy: {
    title: 'Kebijakan Privasi',
    effectiveDate: 'Berlaku mulai 6 September 2026',
    intro:
      'KidGate adalah nama produk dan nama dagang yang digunakan oleh pengembang independen yang mengoperasikan aplikasi ini. Kebijakan ini menjelaskan bagaimana KidGate menangani data ketika orang tua menggunakan layanan untuk mengelola perangkat anak. Kebijakan ini mencakup aplikasi KidGate untuk iPhone, iPad, dan Android, agen KidGate untuk macOS dan Windows, ekstensi browser KidGate, aplikasi Android TV, dasbor orang tua, dan situs kidgate.app.',
    sections: [
      {
        title: '1. Cakupan dan wewenang orang tua',
        body: 'Akun orang tua mengatur izin dan mengelola perangkat anak. Anak tidak membuat akun KidGate sendiri; sebuah perangkat hanya dikelola melalui akun orang tua. Orang tua harus memiliki hak asuh yang sah atau wewenang yang berlaku sebelum memantau atau mengelola perangkat. KidGate tidak boleh digunakan untuk memantau orang dewasa secara diam-diam atau siapa pun di luar pengasuhan sah orang tua.',
      },
      {
        title: '2. Data yang kami proses',
        body: 'Apa yang diproses KidGate bergantung pada fitur yang diaktifkan orang tua dan izin yang diberikan sistem operasi. Data itu dapat mencakup: pengenal akun serta metode masuk Google, Apple, atau email yang dipakai membuat akun orang tua; nama yang diberikan orang tua untuk tiap anak dan perangkat yang ditugaskan kepada mereka; nama perangkat, model, jenis perangkat, versi sistem operasi dan versi aplikasi, tingkat baterai, serta status penyambungan; pengaturannya sendiri — Batas harian, Jam Diblokir, Aplikasi yang Diblokir, batas per aplikasi, kategori Filter web, dan PIN Orang Tua, yang hanya disimpan sebagai hash satu arah; total Waktu Layar, rinciannya per aplikasi, dan catatan per menit tentang kapan perangkat digunakan; aplikasi yang terpasang di perangkat dan ekstensi browser yang ditambahkan padanya; domain yang diminta perangkat anak dan mana saja yang ditolak Filter web, dihitung per hari dan per jam; judul video yang diputar jika platformnya menampilkan judul itu; lokasi, riwayat lokasi, dan tempat yang disimpan orang tua; peringatan SOS, Check-In keselamatan, dan foto yang dikirim anak bersama salah satunya; peringatan yang muncul saat sebuah perlindungan dimatikan, saat sebuah aplikasi dipasang, atau saat sebuah pesan atau pencarian cocok dengan daftar kata kunci yang diaktifkan orang tua; permintaan waktu tambahan, permintaan pembukaan situs, tugas hadiah, dan total bintang mingguan yang ditampilkan di papan bintang; laporan mingguan yang merangkum semua itu; pesan dukungan dan tangkapan layar apa pun yang dilampirkan padanya; laporan kerusakan dan diagnostik teknis; serta data transaksi langganan yang disediakan toko aplikasi. KidGate tidak meminta nama asli anak jika sebuah fitur tidak membutuhkannya.',
      },
      {
        title: '3. Yang tetap berada di perangkat anak',
        body: 'Pemantauan pesan dan pencarian berjalan di perangkat itu sendiri, hanya di Android, dan hanya ketika orang tua mengaktifkannya. Perangkat membandingkan teks dengan daftar kata kunci yang tersimpan secara lokal; yang dikirim adalah peringatan yang menyebutkan kata yang cocok, kategorinya, aplikasi tempat kata itu muncul, dan waktunya. Isi pesannya sendiri, sisa percakapan, dan dengan siapa percakapan itu terjadi tidak dikirim dan tidak disimpan oleh KidGate. Ada satu pengecualian, dan itu merupakan persetujuan tersendiri: jika orang tua juga menyetujui konfirmasi AI, pesan masuk yang kecocokan kata kuncinya ambigu dikirim ke model Gemini milik Google untuk dinilai, sehingga orang tua tidak diberi peringatan karena sebuah kata biasa. Teks yang ditulis anak tidak pernah dikirim untuk konfirmasi AI, apa pun yang telah disetujui keluarga. Di luar jalur itu, KidGate mencatat domain yang diminta perangkat dan apakah domain itu ditolak — bukan alamat sebuah halaman atau isinya — dan berkas, foto, serta penjelajahan yang tidak dibaca oleh fitur aktif mana pun tetap berada di perangkat.',
      },
      {
        title: '4. Cara data digunakan',
        body: 'Data mendukung autentikasi, pemasangan perangkat, kontrol orang tua, sinkronisasi pengaturan, peringatan, laporan, langganan, pencegahan penipuan, keamanan akun, penyelesaian masalah, dan keandalan layanan. KidGate tidak menjual data pribadi dan tidak menggunakan data anak untuk iklan berbasis perilaku. Tidak ada iklan di aplikasi KidGate mana pun.',
      },
      {
        title: '5. Pemrosesan otomatis dan AI',
        body: 'Tiga fitur menggunakan model Gemini milik Google, melalui Google Cloud: ringkasan tertulis pada laporan mingguan, yang dibuat dari angka penggunaan keluarga itu sendiri; klasifikasi aplikasi dan domain situs web ke dalam kategori yang dipakai Filter web dan daftar aplikasi; serta langkah konfirmasi yang dijelaskan di bagian 3, yang hanya berjalan jika orang tua menyetujuinya. Model-model ini menghasilkan penilaian yang bisa keliru. Sebuah kategori, satu kalimat ringkasan, atau sebuah peringatan pesan adalah dorongan untuk melihat, bukan penetapan fakta, dan KidGate tidak mengambil keputusan yang berdampak hukum atau berdampak serupa bagi seorang anak berdasarkan hal itu. Keluaran model tidak digunakan untuk melatih model Google.',
      },
      {
        title: '6. Dasar hukum dan persetujuan',
        body: 'KidGate memproses data untuk menyediakan layanan yang diminta, memenuhi kewajiban hukum, melindungi kepentingan keamanan dan keselamatan yang sah, atau berdasarkan persetujuan apabila diperlukan. Orang tua bertanggung jawab memberikan pemberitahuan yang diperlukan dan memperoleh persetujuan yang sah untuk anak atau pengguna perangkat. Pemantauan pesan dan konfirmasi AI masing-masing merupakan persetujuan eksplisit tersendiri, dicatat per perangkat, dan dapat dicabut kapan saja.',
      },
      {
        title: '7. Penyedia layanan',
        body: 'KidGate dibangun di atas Google Cloud dan Firebase, yang menyediakan autentikasi, basis data, penyimpanan berkas, fungsi server, notifikasi push melalui Firebase Cloud Messaging, pelaporan kerusakan melalui Firebase Crashlytics, dan model Gemini yang disebut di bagian 5. Apple dan Google juga memproses pembelian, perpanjangan, dan pengembalian dana langganan melalui toko aplikasi mereka, dan Google Analytics memproses pengukuran yang dijelaskan di bagian 8. Data hanya diungkapkan kepada para penyedia ini sejauh diperlukan untuk menjalankan layanan; kepada pihak berwenang apabila diwajibkan secara hukum; atau untuk menangani masalah keamanan, penipuan, atau penyalahgunaan. Para penyedia memiliki kewajiban dan kebijakan mereka sendiri, dan tidak satu pun diberi wewenang oleh KidGate untuk menggunakan data anak demi pemasaran independen.',
      },
      {
        title: '8. Analitik situs dan cookie',
        body: 'Situs kidgate.app mengukur tiga hal dengan Google Analytics: kunjungan halaman, serta klik pada masing-masing dari dua tautan unduhan desktop. Pengukuran itu menaruh satu cookie analitik di browser pembaca. Alamat IP dipangkas, Google Signals dan pengenal iklan dimatikan, dan tidak ada yang dikirim yang dapat mengidentifikasi seorang pembaca atau sebuah keluarga. Aplikasi KidGate melaporkan sejumlah kecil peristiwa ke properti yang sama untuk menunjukkan fitur mana yang dipakai; peristiwa itu membawa pengenal instans aplikasi dan tidak pernah membawa nama, pesan, lokasi, atau penjelajahan seorang anak. Aplikasi dan situs ini tidak memakai jaringan iklan atau pelacakan apa pun.',
      },
      {
        title: '9. Tempat data disimpan, dan cara data dilindungi',
        body: 'Data keluarga disimpan di region Singapura milik Google Cloud dan dapat diproses di tempat lain oleh para penyedia yang disebut di bagian 7, yang berarti data itu dapat keluar dari negara tempat keluarga tinggal. KidGate menerapkan perlindungan teknis dan organisasi yang wajar, termasuk kontrol akses, praktik hak akses minimum, aturan di sisi server yang membatasi setiap pembacaan pada satu keluarga, dan transmisi yang aman. PIN Orang Tua hanya disimpan sebagai hash satu arah dan tidak dapat dibaca kembali. Tidak ada sistem yang sepenuhnya aman; KidGate tidak dapat menjamin bahwa data tidak akan pernah hilang, diakses tanpa izin, atau mengalami gangguan.',
      },
      {
        title: '10. Akses personel KidGate untuk dukungan',
        body: 'Jika diperlukan untuk menjawab permintaan dukungan atau mendiagnosis gangguan, personel KidGate yang berwenang dapat membuka sebuah akun keluarga dan melihat apa yang dilihat orang tua: konfigurasi dan perangkatnya, serta aktivitas di dalamnya — termasuk riwayat lokasi, riwayat web, peringatan pesan, dan foto yang dilampirkan pada SOS atau Check-In. Mereka juga dapat mengubah pengaturan dan mengirim perintah ke perangkat. Akses ini terbatas pada personel yang berwenang, memerlukan autentikasi dua faktor, digunakan semata-mata untuk keperluan dukungan, dan setiap kali seseorang masuk ke sebuah akun keluarga dicatat beserta waktu dan alasan yang dinyatakan. Tindakan satu per satu selama sesi dukungan saat ini belum dicatat secara terpisah.',
      },
      {
        title: '11. Berapa lama data disimpan',
        body: 'Catatan kedaluwarsa menurut jadwal dan dihapus otomatis: Waktu Layar dan penggunaan per aplikasi, riwayat web, riwayat video, riwayat lokasi, dan umpan aktivitas setelah 30 hari; peringatan SOS, Check-In keselamatan, dan permintaan waktu tambahan setelah 90 hari; laporan mingguan setelah 365 hari. Kode penyambungan kedaluwarsa dalam hitungan menit dan sesi masuk lewat browser bertahan 7 hari. Sebagian catatan saat ini belum memiliki masa kedaluwarsa dan disimpan sampai akun keluarga dihapus: akun beserta pengaturannya, tempat tersimpan, catatan anak dan perangkat, tugas hadiah, permintaan pembukaan situs, papan bintang dan papan waktu layar, serta daftar aplikasi. Pesan dukungan dan tangkapan layar apa pun yang dilampirkan padanya disimpan tanpa batas waktu dan tidak ikut terhapus saat akun dihapus; menutup celah itu sudah direncanakan. Catatan terbatas juga dapat tetap disimpan apabila diwajibkan oleh hukum, pencegahan penipuan, rotasi cadangan data, atau transaksi toko aplikasi.',
      },
      {
        title: '12. Menghapus akun',
        body: 'Orang tua dapat mengajukan permintaan penghapusan di Pengaturan atau dari kidgate.app. Permintaan itu ditahan selama 14 hari dan dapat dibatalkan selama masa tersebut; setelah itu akun keluarga, setiap anak dan perangkat di dalamnya, serta berkas tersimpan miliknya dihapus, dan data masuknya sendiri ikut dihilangkan. Penghapusan bersifat permanen dan tidak ada ekspor data setelahnya. Catatan dukungan yang disebut di bagian 11 adalah pengecualiannya dan tetap tersimpan.',
      },
      {
        title: '13. Hak dan pilihan',
        body: 'Bergantung pada hukum yang berlaku, pengguna dapat mengajukan permintaan akses, koreksi, penghapusan, pembatasan, keberatan, atau penarikan persetujuan. Pemantauan pesan dan konfirmasi AI dapat dimatikan kapan saja tanpa memengaruhi bagian layanan lainnya. Izin lokasi, notifikasi, kamera, dan perangkat dapat dinonaktifkan melalui sistem operasi, namun fitur yang bergantung padanya akan berhenti atau menjadi tidak lengkap, dan KidGate melaporkan hal itu di layar orang tua alih-alih menampilkan kontrol yang sudah tidak berfungsi.',
      },
      {
        title: '14. Data anak',
        body: 'KidGate memproses data anak hanya berdasarkan konfigurasi dan arahan akun orang tua. Apabila data anak diberikan tanpa wewenang atau persetujuan yang diperlukan, KidGate dapat membatasi akun tersebut dan menghapus data setelah dilakukan verifikasi.',
      },
      {
        title: '15. Insiden data',
        body: 'KidGate akan menilai insiden keamanan yang telah dikonfirmasi, mengambil langkah mitigasi yang wajar, dan memberi tahu pengguna atau pihak berwenang apabila diwajibkan secara hukum. Orang tua wajib melindungi akun, PIN, dan perangkat, serta segera melaporkan dugaan akses tanpa izin.',
      },
      {
        title: '16. Perubahan dan kontak',
        body: 'Kebijakan ini dapat berubah seiring perkembangan fitur atau perubahan hukum. Pembaruan yang material akan disampaikan melalui aplikasi atau saluran distribusi yang sesuai. Permintaan terkait privasi dapat diajukan melalui saluran dukungan yang dipublikasikan pada halaman KidGate di toko aplikasi.',
      },
    ],
  },
  termsOfService: {
    title: 'Ketentuan Layanan',
    effectiveDate: 'Berlaku mulai 6 September 2026',
    intro:
      'Dengan masuk ke atau menggunakan KidGate, Anda menegaskan bahwa Anda telah membaca dan menyetujui ketentuan ini. KidGate adalah nama produk dan nama dagang yang digunakan oleh pengembang independen yang mengoperasikan layanan ini.',
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
        body: 'Menerapkan sebuah aturan memerlukan perangkat lunak di perangkat tempat aturan itu berlaku, dan setiap platform memberikannya dengan cara berbeda: kerangka kerja Waktu Layar milik Apple di iPhone dan iPad, layanan Aksesibilitas dan izin admin perangkat di Android, ekstensi sistem dan agen latar belakang di macOS, layanan latar belakang di Windows, serta ekstensi browser di Chrome. Anda sendiri yang memasangnya, di perangkat yang berhak Anda kelola, dan Anda dapat menghapusnya dari perangkat itu kapan saja. Menghapusnya, atau mencabut izin yang dibutuhkannya, menghentikan penerapan aturan di perangkat itu — KidGate akan memberi tahu Anda bahwa hal itu terjadi, tetapi tidak dapat mencegahnya.',
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
        body: 'Uji coba gratis dengan akses penuh dimulai saat perangkat orang tua dan perangkat anak pertama Anda tersambung, dan berjalan selama periode yang disebutkan di aplikasi. Setelah berakhir, aturan yang Anda atur tetap berjalan tanpa pembayaran di satu perangkat anak — Batas harian, Jam Diblokir, Aplikasi yang Diblokir, Filter web, Kunci perangkat, permintaan waktu tambahan, dan tugas hadiah — sementara aktivitas langsung, riwayat, laporan mingguan, dan pelacakan lokasi menjadi bagian dari Premium. Jika sebuah keluarga memiliki perangkat anak lebih banyak daripada yang dicakup paketnya, perangkat selebihnya dijeda: perangkat itu tetap menerapkan aturan yang sudah diatur dan berhenti mengirim aktivitas, dan Anda yang memilih perangkat mana yang tetap dipantau. Menghapus perangkat anak tidak memulai ulang uji coba, dan satu keluarga hanya dapat menyambungkan sejumlah terbatas perangkat anak sepanjang usia akun.',
      },
      {
        title: '8. Langganan dan pembayaran',
        body: 'Pembelian, perpanjangan, pembatalan, dan pengembalian dana ditangani sesuai ketentuan Apple App Store, Google Play, atau penyedia pembayaran terkait. Satu langganan mencakup seluruh keluarga dan hanya pemilik keluarga yang membayar. Harga dan fitur paket dapat berubah setelah pemberitahuan yang diwajibkan oleh hukum dan aturan toko aplikasi.',
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
        body: 'Layanan dapat berubah, dihentikan sementara, atau diakhiri karena pemeliharaan, keamanan, perubahan platform, hukum, atau alasan operasional. KidGate dioperasikan oleh pengembang independen dan dapat dihentikan; jika hal itu terjadi, langganan aktif ditangani sesuai aturan toko aplikasi yang berlaku. KidGate berupaya menjaga ketersediaan yang wajar namun tidak menjanjikan operasi tanpa gangguan, bebas kesalahan, atau kompatibilitas dengan setiap perangkat.',
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
        body: 'Anda dapat berhenti menggunakan layanan dan meminta penghapusan akun. Penghapusan ditahan selama 14 hari dan dapat dibatalkan dalam masa tersebut; setelah itu akun keluarga dan datanya dihapus secara permanen. KidGate dapat menangguhkan atau mengakhiri layanan karena pelanggaran, risiko keselamatan, atau tuntutan hukum. Para pihak harus terlebih dahulu berupaya menyelesaikan sengketa dengan itikad baik; hukum yang mengatur dan pengadilan yang berwenang ditentukan oleh aturan wajib yang berlaku bagi pengguna dan operator.',
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
        body: 'Ketentuan ini dapat diperbarui. Perubahan material akan disampaikan secara sepatutnya; penggunaan berkelanjutan setelah tanggal berlaku dianggap sebagai penerimaan atas ketentuan yang diperbarui sejauh diizinkan oleh hukum. Pertanyaan dapat diajukan melalui saluran dukungan pada halaman KidGate di toko aplikasi.',
      },
    ],
  },
} as const;
