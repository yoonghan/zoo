import enTranslation from "../en/pages";
import zooFaq from "./faq";

const translations: typeof enTranslation = {
  lang: "ms",
  headers: {
    default: "Zoo Negara Malaysia",
    defaultDescription: "Sebuah pertubuhan bukan kerajaan yang ditubuhkan untuk mewujudkan zoo tempatan pertama untuk rakyat Malaysia.",
    zooMap: {
      title: "Peta Zoo Negara Malaysia Map",
      description: "Muat turun peta dan merancang hari anda di Zoo Negara Malaysia."
    },
    aboutUs: {
      title: "Tentang Zoo Negara Malaysia",
      description: "Cerita mengapa Zoo Negara Malaysia website dibina."
    },
    faq: {
      title: "Frequent Asked Question",
      description: "Soalan lazim tentang lawatan ke zoo, disusun terus dari Zoo Negara Malaysia."
    },
    careers: {
      title: "Kerjaya di Zoo Negara",
      description: "Ingin bekerja di Zoo Negara Malaysia?"
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
    zooMap: {
      title: "Peta Zoo Negara Malaysia",
      downloadMapBtn: "Muat turun Peta",
      description: "Untuk menerokai zoo kami, muat turunnya."
    }
  },
  faq: {
    title: "Soalan Lazim",
    zooFaq
  },
  careers: {
    title: "Zoo Negara - Kerjaya",
    description: "Sila rujuk laman web rasmi Zoo Negara untuk melihat kerjaya:",
    officialCareerLinkText: "Kerjaya di laman Zoo Negara",
    OR: "ATAU",
    emailToZoo: "Email ke Zoo Negara Malaysia HR"
  }
}

export default translations;
