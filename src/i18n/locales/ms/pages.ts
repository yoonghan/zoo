import enTranslation from "../en/pages";
import zooFaq from "./faq";

const translations: typeof enTranslation = {
  lang: "ms",
  headers: {
    default: "Zoo Negara Malaysia",
    defaultDescription: "Sebuah pertubuhan bukan kerajaan yang ditubuhkan untuk mewujudkan zoo tempatan pertama untuk rakyat Malaysia.",
    aboutUs: {
      title: "Tentang Zoo Negara Malaysia",
      description: "Cerita mengapa Zoo Negara Malaysia website dibina."
    },
    frequentAskedQuestions: {
      title: "Frequent Asked Question",
      description: "Soalan lazim tentang lawatan ke zoo, disusun terus dari Zoo Negara Malaysia."
    },
    careers: {
      title: "Kerjaya di Zoo Negara",
      description: "Ingin bekerja di Zoo Negara Malaysia?"
    },
    contactUs: {
      title: "Hubungi Zoo Negara",
      description: "Hubungi Zoo untuk maklumat.",
    },
    visitorInfo: {
      title: "Maklumat Pelawat",
      description: "Maklumat pelawat tentang waktu dan kemudahan dibuka zoo."
    },
    zooMap: {
      title: "Peta Zoo Negara Malaysia Map",
      description: "Muat turun peta dan merancang hari anda di Zoo Negara Malaysia."
    },
    gettingThere: {
      title: "Sampai ke sana",
      description: "Tips untuk ke Zoo Negara, Malaysia di Ampang, Kuala Lumpur."
    },
    kiosksNFacilities: {
      title: "Kiosks And Kemudahan",
      description: "Makanan, Kiosk Cenderamata dan Kemudahan dalam Zoo."
    },
    sitemap: {
      title: "Peta laman",
      description: "Peta laman hierarki Zoo Walcron."
    }
  },
  homepage: {
    welcome: "Selamat datang ke Zoo Negara",
    introduction:
      "Zoo Negara Malaysia diuruskan oleh Persatuan Zoologi Malaysia, sebuah pertubuhan bukan kerajaan yang ditubuhkan untuk mewujudkan zoo tempatan yang pertama untuk rakyat Malaysia. Zoo Negara telah dibuka secara rasmi pada 14 November 1963 dan telah matang menjadi zoo terkenal di seluruh dunia. Kami mempunyai sejumlah lebih 5137 spesimen daripada 476 spesimen, haiwan, haiwan mamalia dan haiwan mamalia.",
    "introduction-remark": "diterjemahkan dari laman web Zoo Negara",
  },
  aboutUs: {
    title: "Tentang Kami",
    aboutWalcron: {
      title: "Tentang Walcron",
      description:
        "Kami adalah pasangan yang mempunyai berminat dalam membina laman web yang mampan. Selain itu, kami suka pergi ke zoo!",
      desription2:
        "Laman website yang tidak berkaitan dan alternatif tentang Zoo Negara Malaysia dicipta kerana kekurangan sokongan di laman Zoo Negara. Kami pernah menghubungi admin Zoo tentang laman ini, akan tetapi cadangan kami telah ditolak dengan sopan. Laman Zoo ini ditambahkan:",
      descriptionSupport: [
        "Sokongan Bahasa, terjemahan Bahasa Melayu ditambahkan.",
        "Sokongan ARIA atau untuk orang kurang upaya.",
        "Tiada Pop-up Halaman utama yang menjengkelkan.",
        "Tambahan Sitemap.",
      ],
    },
    aboutZoo: {
      title: "Tentang Zoo Negara Malaysia",
      description:
        "Zoo Negara Malaysia diuruskan oleh Persatuan Zoologi Malaysia, sebuah pertubuhan bukan kerajaan yang ditubuhkan untuk mewujudkan zoo tempatan pertama untuk rakyat Malaysia.",
      descriptionWiki: "https://en.wikipedia.org/wiki/National_Zoo_of_Malaysia",
    },
    vision: {
      title: "Visi",
      description:
        "Kami berharap Zoo Negara mengambil keputusan untuk menyerap laman web ini dan mengemas kini laman web tersebut agar memenuhi keperluan mereka. Tapak ini boleh diselenggara sendiri kerana semua infrastruktur asas DevOps telah dibina di sekelilingnya.",
      descriptionSupport: [
        "Website membina, menguji dan menggunakan dengan sendirinya.",
        "Hanya pemahaman format JSON/HTML asas diperlukan untuk mengekalkan laman.",
        "Semuanya disepadukan dengan saluran paip Github.",
        "Opensourced - sesiapa sahaja boleh melihat dan menyumbang.",
        "Sistematic proses - kelulusan/semakan sebelum menerima perubahan."
      ]
    }
  },
  visitorInfo: {
    title: "Maklumat Pelawat",
    additionalInformationText: "Maklumat Tambahan",
    additionalInformationNotes: [
      "Tiket boleh dibeli di zoo.",
      "OKU - 10% diskaun harga (Sila tunjukkan kad OKU yang sah).",
      "Tempahan Vip boleh diatur, sila semak dengan Pentadbir Zoo dalam pautan Hubungi Zoo.",
      "Semua kadar dinyatakan dalam Ringgit Malaysia (MYR).",
    ],
    openingHours: {
      title: "Waktu Buka",
      description: "Zoo Dibuka Setiap Hari dari:"
    },
    admissionTicket: {
      title: "Tiket Masuk",
      description: "Sila dapatkan valid tiket masuk andad",
      additionalInformation: {
        important: "Sila bawa bersama pasport pengenalan / kad pengenalan anda di kaunter tiket untuk tujuan pengesahan.",
        free: "Kemasukan Percuma",
        freeOne: "Kanak-kanak di bawah umur 36 bulan, masuk secara percuma.",
        freeTwo: "Untuk OKU/OKU. Sila tunjukkan kad OKU yang sah."
      }
    },
    rental: {
      title: "Sewa",
      facilities: [
        {
          title: "Kerusi roda",
          description: "Perkhidmatan kerusi roda atas dasar siapa cepat dia dapat disediakan di Kaunter Maklumat B. Bayaran sewa dan deposit yang akan dikembalikan diperlukan.",
          image: "/images/visitor-info/wheelchair.jpg",
          imageAlt: "Sewa Kerusi roda"
        },
        {
          title: "Kereta Sorong Bayi",
          description: "Perkhidmatan kereta sorong bayi kini tersedia di stesen kereta sorong baharu kami. Kereta sorong bayi ini ditaja oleh Mother Care. Perkhidmatan kereta sorong boleh didapati di Kaunter Maklumat B atas dasar siapa cepat dia dapat.",
          image: "/images/visitor-info/stroller.jpg",
          imageAlt: "Baby Strollers"
        },
        {
          title: "Loker",
          description: "Loker boleh didapati di Kaunter Tiket untuk penyimpanan barang peribadi. Bayaran sewa diperlukan.",
          image: "/images/visitor-info/locker.jpg",
          imageAlt: "Loker Sewa"
        }
      ]
    },
    tramRide: {
      title: "Naik Tram",
      priceTable: {
        description: "Harga Trem (semasa 5-Jun-2026)",
        h1: "Kategori",
        h2: "Dengan MyKad",
        h3: "Tiada MyKad",
        adult: "Dewasa",
        children: "Kanak-Kanak (3-12 years old)"
      }
    },
    zooMap: {
      title: "Peta Zoo Negara Malaysia",
      downloadMapBtn: "Muat turun Peta",
      description: "Untuk menerokai zoo kami, muat turunnya."
    }
  },
  frequentAskedQuestions: {
    title: "Soalan Lazim",
    zooFaq
  },
  careers: {
    title: "Zoo Negara - Kerjaya",
    description: "Sila rujuk laman web rasmi Zoo Negara untuk melihat kerjaya:",
    officialCareerLinkText: "Kerjaya di laman Zoo Negara",
    OR: "ATAU",
    emailToZoo: "Email ke Zoo Negara Malaysia HR"
  },
  contactUs: {
    title: "Hubungi Zoo Negara",
    description: "Kami mengikis maklumat ini daripada laman web rasmi Zoo Negara. Kenalan sah dari 5-Jul-2026.",
    enquiry1: "Untuk sebarang pertanyaan, hubungi talian am Zoo Negara",
    enquiry2: "dan tanya Jabatan berikut",
    translate: {
      "Administration": "Pentadbiran",
      "Administration_description": "Program amali dan hal-hal berkaitan perniagaan.",
      "PublicRelationsMarketing": "Perhubungan Awam & Pemasaran",
      "PublicRelationsMarketing_description": "Penerimaan haiwan, berita & perhubungan media, penajaan dan tanggungjawab sosial korporat.",
      "CustomerService": "Perkhidmatan Pelanggan",
      "CustomerService_description": "Acara korporat, hari keluarga, hari lahir, penyewaan tapak, hal berkaitan pelawat dan fungsi lain.",
      "Education": "Pendidikan",
      "Education_description": "Lawatan, pakej pendidikan, sukarelawan, program penyelidikan dan hal-hal berkaitan pelajar.",
      "ReceptionCounter": "Kaunter Penerimaan",
      "ReceptionCounter_description": "Waktu buka, kadar dan konsesi sekolah."
    }
  },
  gettingThere: {
    title: "Menuju Ke Sana",
    "address": "Alamat",
    "car": {
      title: "Memandu",
      description: "dengan Kereta, Motosikal, Van atau Bas",
      instructions: [
        "Tempat letak kereta yang besar disediakan di sebelah pintu masuk zoo."
      ]
    },
    "train": {
      title: "Kereta api",
      description: "melalui Light Rail Transit System (LRT)",
      instructions: [
        "Turun di Stesen Wangsa Maju, Laluan Kelana Jaya.",
        "Naik teksi ke Zoo Negara.",
        "atau Naik Rapid KL nombor 253 dari Stesen LRT Putra, Wangsamaju, KL."
      ]
    },
    "bus": {
      title: "Bus",
      description: "melalui Bus Awam",
      instructions: [
        "Rapid KL nombor 53 dari Stesen Wangsa Maju, Laluan Kelana Jaya.",
        "Rapid KL nombor 220 dari Lebuh Ampang, KL."
      ]
    },
    viewBtnText: "Lihat Dalam Peta Google",
  },
  kiosksNFacilities: {
    title: "Kiosks And Kemudahan",
    food: {
      title: 'Makan',
      description: "Selain banyak perkara yang perlu dilakukan, anda juga boleh menikmati hidangan di sini.",
      restaurants: [
        {
          title: "The Wild Restaurant",
          description: "Terletak di tengah-tengah Zoo Negara, Restoran Wild sememangnya restoran keluarga anda. Menyajikan pelbagai jenis makanan segera yang lazat dan makanan jari yang menyelerakan pada harga yang berpatutan, Restoran Wild menawarkan pelbagai makanan untuk rakan dan keluarga anda."
        },
        {
          title: "Mane Delicious",
          description: "Bagi mereka yang berminat dengan padang pasir yang menyejukkan dan lazat, kunjungi kafe ini untuk melihat 'Ais Kacang' atau 'Cendol' yang terkenal!"
        },
        {
          title: "Panda Cafe",
          description: "Mencari makanan Malaysia? Kemudian singgah di Panda Cafe untuk nasi lemaknya yang lazat, mee kari, mee hoon goreng dan hidangan lain semuanya dijamin mengenyangkan perut yang lapar!"
        },
      ]
    },
    souvenir: {
      title: "Souvenir",
      shops: [
        {
          title: "Kancil Souvenir Shop & Kyoto Enterprise",
          description: "Mencari beberapa hadiah yang benar-benar unik? Kedai Cenderamata Kancil dan Kyoto Enterprise menyediakan hadiah untuk anda bawa pulang!"
        },
        {
          title: "Kedai Zoovenir",
          description: "Terletak di dalam Pusat Pemuliharaan Panda Gergasi dan di hadapan Savannah. Memburu barangan Panda Gergasi eksklusif? Singgah ke Kedai Zoovenir."
        },
        {
          title: "Muzium Lebah",
          description: "Datang dan lawati lebah gergasi kami! Pengeluar madu terbesar di Malaysia kini berada di Zoo Negara."
        }
      ]
    },
    facilities: {
      title: "Kemudahan",
      facilities: [
        {
          title: "Surau",
          description: "Ruang solat berhawa dingin disediakan dengan ruang yang luas yang terletak berhampiran pintu masuk utama zoo.",
          image: "/images/visitor-info/surau.jpg",
          imageAlt: "surau"
        },
        {
          title: "Free Public Wifi",
          description: "Adakah anda suka berada dalam talian sepanjang masa? Kekal berhubung dengan wifi percuma kami yang tersedia di pintu masuk utama, pertunjukan amfiteater dan Pusat Konservasi Panda Gergasi.",
          image: "/images/visitor-info/freewifi.jpg",
          imageAlt: "Wifi"
        }
      ]
    }
  }
}

export default translations;
