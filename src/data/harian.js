// Data untuk Paket A — Catering Harian Dapoer Kuliner

export const harianProofStats = [
  {
    icon: '🏆',
    value: '10+ Tahun',
    label: 'Pengalaman Sejak 2012',
    desc: 'Konsistensi rasa rumahan yang terbukti terjaga lebih dari satu dekade.',
  },
  {
    icon: '👥',
    value: '1000+',
    label: 'Pelanggan Tetap',
    desc: 'Keluarga, profesional, dan kantor yang setia berlangganan setiap bulan.',
  },
  {
    icon: '🛵',
    value: '100+',
    label: 'Pengiriman / Hari',
    desc: 'Diantar hangat dan tepat waktu setiap hari sebelum jam makan Anda.',
  },
]

// PLACEHOLDER: Foto makanan berikut dihasilkan oleh AI sebagai visualisasi mockup realistis
// Wajib diganti dengan foto dokumentasi asli dapur & masakan Dapoer Kuliner di kemudian hari.
export const harianMenuSamples = [
  {
    id: 'sample-1',
    title: 'Ayam Lengkuas & Baceman',
    desc: 'Nasi putih pulen, ayam goreng lengkuas gurih, tahu tempe bacem, tumis buncis wortel, dan sambal terasi segar.',
    image: '/images/harian/menu-1.jpg',
    tag: 'Menu Populer',
  },
  {
    id: 'sample-2',
    title: 'Liwet Ayam Bakar Madu',
    desc: 'Nasi liwet wangi teri, ayam bakar bumbu kecap manis gurih, sayur lodeh kuah santan gurih, tempe mendoan, dan lalapan.',
    image: '/images/harian/menu-2.jpg',
    tag: 'Favorit Keluarga',
  },
  {
    id: 'sample-3',
    title: 'Rendang Daging Empuk',
    desc: 'Nasi hangat, rendang sapi bumbu pekat rempah Minang, gulai daun singkong lembut, telur balado, dan sambal ijo.',
    image: '/images/harian/menu-3.jpg',
    tag: 'Spesial Nusantara',
  },
  {
    id: 'sample-4',
    title: 'Gurame Goreng Sayur Asem',
    desc: 'Ikan gurame goreng garing keemasan, semangkuk sayur asem segar berkuah asam manis, tempe tahu goreng, dan sambal ulek.',
    image: '/images/harian/menu-4.jpg',
    tag: 'Segar & Nikmat',
  },
  {
    id: 'sample-5',
    title: 'Ayam Woku & Kangkung',
    desc: 'Ayam bumbu woku pedas harum kemangi, tumis kangkung terasi renyah, bakwan jagung manis renyah, dan kerupuk.',
    image: '/images/harian/menu-5.jpg',
    tag: 'Pedas Mantap',
  },
  {
    id: 'sample-6',
    title: 'Rawon Daging Telur Asin',
    desc: 'Rawon daging sapi kuah kluwek hitam pekat gurih berlimpah bawang goreng, telur asin masir, tauge pendek, dan kerupuk udang.',
    image: '/images/harian/menu-6.jpg',
    tag: 'Khas Jawa Timur',
  },
]

export const harianSegments = [
  {
    id: 'keluarga',
    name: 'Paket Keluarga',
    badge: 'FAVORIT KELUARGA',
    badgeColor: '#f2b724',
    accentColor: '#f2b724',
    bgColor: '#fffbf0',
    tagline: 'Makan bersama di rumah tanpa pusing belanja & masak tiap hari.',
    porsi: 'Porsi Rantang (3 – 5 Orang)',
    jadwal: 'Makan Siang (11.00) atau Makan Malam (16.30), Senin – Sabtu / Tiap Hari',
    sistemBayar: 'Mingguan (6 hari) atau Bulanan (24/26 hari), transfer fleksibel',
    features: [
      'Menu lauk utama, lauk pendamping, sayur kuah/tumis, & sambal',
      'Porsi kenyang pas untuk seluruh anggota keluarga',
      'Rotasi 10–15 variasi menu bulanan tanpa membosankan',
      'Bisa request tidak pedas untuk anak-anak',
    ],
  },
  {
    id: 'karyawan',
    name: 'Paket Karyawan & Kantor',
    badge: 'PRAKTIS & HEMAT',
    badgeColor: '#e7543d',
    accentColor: '#e7543d',
    bgColor: '#fff5f3',
    tagline: 'Makan siang kantor tepat waktu tanpa repot antre ojek online.',
    porsi: 'Porsi Personal Box / Bento Rapi',
    jadwal: 'Makan Siang diantar ke meja kantor (11.00 – 11.45 WIB), Senin – Jumat / Sabtu',
    sistemBayar: 'Mingguan per orang atau invoice kolektif kantor bulanan',
    features: [
      'Kemasan box higienis, praktis langsung santap di meja kerja',
      'Lengkap nasi, lauk utama bergizi, sayur segar, & kerupuk',
      'Tiba tepat waktu sebelum jam istirahat kantor',
      'Lebih hemat 30–40% dibandingkan pesan makanan pesan-antar instan',
    ],
  },
  {
    id: 'institusi',
    name: 'Paket Institusi & Bisnis',
    badge: 'VOLUME BESAR',
    badgeColor: '#8ec637',
    accentColor: '#8ec637',
    bgColor: '#f7fff0',
    tagline: 'Catering rutin skala besar untuk mess karyawan, pabrik, klinik, & sekolah.',
    porsi: 'Volume Besar (15 – 100+ Porsi/Hari)',
    jadwal: 'Jadwal shift presisi (Pagi, Siang, atau Sore) sesuai operasional',
    sistemBayar: 'Invoice korporat resmi bulanan dengan Term of Payment (TOP)',
    features: [
      'Standar gizi seimbang untuk tenaga kerja produktif',
      'Kapasitas produksi dapur teruji hingga ratusan porsi setiap hari',
      'Faktur & kwitansi resmi lengkap untuk kebutuhan administrasi kantor',
      'Dedicated delivery team memastikan pengiriman tanpa terlambat',
    ],
  },
]

export const harianSteps = [
  {
    number: '1',
    title: 'Pilih Segmen Paket',
    desc: 'Pilih paket Keluarga, Karyawan Kantor, atau Institusi sesuai jumlah porsi yang Anda butuhkan.',
    icon: '🎯',
  },
  {
    number: '2',
    title: 'Tentukan Porsi & Jadwal',
    desc: 'Atur jumlah porsi harian, jam makan siang atau makan malam, serta hari pengantaran.',
    icon: '📅',
  },
  {
    number: '3',
    title: 'Konfirmasi WhatsApp',
    desc: 'Admin ramah kami mencatat alamat, preferensi masakan, dan mengaktifkan jadwal langganan Anda.',
    icon: '💬',
  },
  {
    number: '4',
    title: 'Info Menu Dikirim H-1',
    desc: 'Setiap malam sebelum pengantaran, admin membagikan info menu esok hari ke WhatsApp Anda.',
    icon: '📲',
  },
  {
    number: '5',
    title: 'Makanan Tiba Tepat Waktu',
    desc: 'Dimasak segar hari itu dan dikirim hangat oleh kurir khusus tepat sebelum waktu santap Anda.',
    icon: '🛵',
  },
]

export const harianFaqs = [
  {
    q: 'Apakah bisa request menu khusus bila ada alergi atau pantangan?',
    a: 'Tentu bisa! Silakan informasikan kepada admin saat konsultasi jika ada anggota keluarga atau rekan yang alergi seafood, tidak mengonsumsi daging sapi, menghindari santan, atau membutuhkan menu ramah anak (tidak pedas). Dapur kami akan menyesuaikan varian menu pengganti yang setara.',
  },
  {
    q: 'Berapa hari minimal periode langganan catering harian?',
    a: 'Minimal periode langganan adalah 5 atau 6 hari (paket trial 1 minggu) agar Anda dan keluarga bisa mencoba variasi menu dan ketepatan layanan kami. Setelah masa percobaan, Anda dapat dengan mudah memperpanjang ke paket bulanan (20–26 hari).',
  },
  {
    q: 'Bagaimana jika ingin libur atau pause sementara saat keluar kota?',
    a: 'Sangat fleksibel dan praktis. Cukup konfirmasi ke WhatsApp admin kami paling lambat H-1 pukul 18.00 WIB. Hari libur tersebut tidak akan memotong kuota langganan Anda dan otomatis dialihkan ke hari berikutnya.',
  },
  {
    q: 'Di mana saja cakupan area pengiriman dan berapa biaya ongkos kirimnya?',
    a: 'Kami melayani seluruh area Kota Malang dan sekitarnya. Pengantaran menggunakan kurir khusus catering agar makanan tiba rapi dan hangat tepat waktu. Untuk rute reguler dan area tertentu tersedia promo Gratis Ongkir, silakan bagikan titik lokasi Anda ke admin untuk pengecekan rute pengantaran.',
  },
]
