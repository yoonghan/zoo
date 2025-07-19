import enTranslation from "../en/pages";
import zooFaq from "./faq";
import translation from "./translation";

const translations: typeof enTranslation = {
  lang: "zh",
  translation,
  headers: {
    default: "马来西亚国家动物园",
    defaultDescription: "为马来西亚人打造第一家本地动物园而成立的非政府组织。",
    aboutUs: {
      title: "关于国家动物园网站",
      description: "创建马来西亚国家动物园网站副本的原因。",
    },
    frequentAskedQuestions: {
      title: "常见问题",
      description: "有关参观动物园的常见问题，直接由马来西亚国家动物园汇编。",
    },
    careers: {
      title: "国家动物园的职业发展",
      description: "想在马来西亚国家动物园工作吗？",
    },
    contactUs: {
      title: "联系国家动物园",
      description: "动物园信息的联系方式。",
    },
    visitorInfo: {
      title: "访客信息",
      description: "有关动物园开放时间和设施的游客信息。",
    },
    zooMap: {
      title: "马来西亚国家动物园地图",
      description: "下载地图并规划您在马来西亚国家动物园的行程。",
    },
    gettingThere: {
      title: "到达那里",
      description:
        "前往位于吉隆坡 Ampang 的马来西亚国家动物园 (Zoo Negara) 的提示。",
    },
    kiosksNFacilities: {
      title: "亭子和设施",
      description: "动物园内的食品、纪念品亭和设施。",
    },
    sitemap: {
      title: "Sitemap",
      description: "链接",
    },
  },
  homepage: {
    welcome: "欢迎来到 Zoo Negara Malaysia",
    introduction:
      "马来西亚国家动物园由马来西亚动物学会管理，该学会是一个非政府组织，旨在为马来西亚人民打造首个本地动物园。国家动物园于1963年11月14日正式开放，现已发展成为享誉全球的动物园。动物园内共有476个物种，包括哺乳动物、鸟类、爬行动物、两栖动物和鱼类，共计超过5137只动物。",
    introductionRemark: "摘自国家动物园网站",
  },
  aboutUs: {
    title: "About Us",
    aboutWalcron: {
      title: "About Walcron",
      description:
        "We are a couple who have passion and interest in building sustainable websites. Besides, we do love to go to the zoo!",
      desription2:
        "The reason we created a non-associated and alternate website about Zoo Negara Malaysia are due to the lack of basic Website support in the original site. We did try to reach out to the Zoo admin on this site, but our proposal was rejected politely. This zoo website add-ons:",
      descriptionSupport: [
        "Language Support as Malaysian BM as the national language is required.",
        "Supports ARIA for users with disabilities.",
        "No Annoying Pop-up in main page.",
        "Add Missing Sitemap.",
      ],
    },
    aboutZoo: {
      title: "About Zoo Negara Malaysia",
      description:
        "Zoo Negara Malaysia is managed by the Malaysian Zoological Society, a non-governmental organization established to create the first local zoo for Malaysians.",
      descriptionWiki: "wikipedia",
    },
    vision: {
      title: "Vision",
      description:
        "We wish Zoo Negara decides to absorb this website and update the website to fit their needs. The site can be self-maintained as basic DevOps infrastructure has been built around it.",
      descriptionSupport: [
        "Site builds, tests and deploy by itself.",
        "Minimal basic JSON/HTML is required to maintain it.",
        "Everything is integrated with Github pipeline.",
        "Opensourced - anyone can view and contribute.",
        "Process oriented - approval/reviews before accepting changes.",
      ],
    },
  },
  visitorInfo: {
    title: "访客信息",
    additionalInformationText: "Additional Information",
    additionalInformationNotes: [
      "Tickets can be purchased at the zoo.",
      "OKU - 10% discounted price (Please show a valid OKU card).",
      "Vip Booking can be arranged, please check it out with Zoo Administrator in Contact Zoo link.",
      "All rates are stated in Malaysian Ringgit (MYR).",
    ],
    openingHours: {
      title: "营业时间",
      description: "动物园每日开放时间:",
    },
    admissionTicket: {
      title: "Admission Ticket",
      description: "Please get your admission ticket valid",
      additionalInformation: {
        important:
          "Please bring along your identity passport / ID card at the ticket counter for verification purposes.",
        free: "Free Admission",
        freeOne: "Children below 36 months old, enters for free.",
        freeTwo: "For OKU/Disable. Please show a valid OKU card.",
      },
    },
    rental: {
      title: "Rental",
      facilities: [
        {
          title: "Wheelchair",
          description:
            "A wheelchair service on a first come first served basis is available at the Information Counter B. Rental fee and a refundable deposit is required.",
          image: "/images/visitor-info/wheelchair.jpg",
          imageAlt: "Wheelchair",
        },
        {
          title: "Baby Strollers",
          description:
            "A baby stroller service is available now at our new stroller station. This baby stroller is sponsored by Mother Care. Stroller service is available at the Information Counter B on a first come first served basis.",
          image: "/images/visitor-info/stroller.jpg",
          imageAlt: "Baby Strollers",
        },
        {
          title: "Lockers",
          description:
            "The lockers are available at Ticket Counter for storage of personal belongings. Rental fee is required.",
          image: "/images/visitor-info/locker.jpg",
          imageAlt: "Rental Lockers",
        },
      ],
    },
    tramRide: {
      title: "Tram Ride",
      priceTable: {
        description: "Tram Price (as of 5-Jun-2026)",
        h1: "Category",
        h2: "With MyKad",
        h3: "Without MyKad",
        adult: "Adult",
        children: "Child (3-12 years old)",
      },
    },
    zooMap: {
      title: "Zoo Negara Malaysia Map",
      downloadMapBtn: "下载地图",
      description: "下载地图并规划您在马来西亚国家动物园的行程。",
      info: "熊猫展览目前已关闭。",
    },
  },
  frequentAskedQuestions: {
    title: "Frequent Asked Questions",
    zooFaq,
  },
  careers: {
    title: "Zoo Negara - Career",
    description:
      "Please refer to the official Zoo Negara website to view careers:",
    officialCareerLinkText: "Official Zoo Negara career page",
    OR: "OR",
    emailToZoo: "Email to Zoo Negara Malaysia's HR",
  },
  contactUs: {
    title: "Contact Zoo Negara",
    description:
      "We scrap this information from the official website Zoo Negara. Contacts are valid on 5-Jul-2026.",
    enquiry1: "For any enquiries, call the general lines",
    enquiry2: "and ask for the following Department",
    translate: {
      Administration: "Administration",
      Administration_description:
        "Internship programme and business related matters.",
      PublicRelationsMarketing: "Public Relations & Marketing",
      PublicRelationsMarketing_description:
        "Animal adoption, news & media relation, sponsorship and corporate social responsibilities (CSR).",
      CustomerService: "Customer Service",
      CustomerService_description:
        "Corporate events, family days, birthdays, site rentals, visitor related matters and other functions.",
      Education: "Education",
      Education_description:
        "Tours, education packages, volunteering, research programme and student related matters.",
      ReceptionCounter: "Reception Counter",
      ReceptionCounter_description:
        "Opening hours, rates and school concession.",
    },
  },
  gettingThere: {
    title: "Getting There",
    address: "Address",
    car: {
      title: "Drive",
      description: "with Car, Motorcycle, Van or Buses",
      instructions: [
        "A large parking area is available next to the entrance of zoo.",
      ],
    },
    train: {
      title: "Train",
      description: "via Light Rail Transit System (LRT)",
      instructions: [
        "Alight at Wangsa Maju Station, Kelana Jaya Line.",
        "Board a taxi to Zoo Negara.",
        "or Board Rapid KL number 253 from Putra LRT Station, Wangsamaju, KL.",
      ],
    },
    bus: {
      title: "Public Bus",
      description: "via Public Bus",
      instructions: [
        "Rapid KL number 53 from Wangsa Maju Station, Kelana Jaya Line.",
        "Rapid KL number 220 from Lebuh Ampang, KL.",
      ],
    },
    viewBtnText: "View In Google Maps",
  },
  kiosksNFacilities: {
    title: "Kiosks And Facilities",
    food: {
      title: "Food",
      description:
        "Besides lot's of things to do, you can enjoy a meal here too.",
      restaurants: [
        {
          title: "The Wild Restaurant",
          description:
            "Located at the heart of Zoo Negara, the Wild Restaurant is definitely your family restaurant. Catering a wide range of delicious fast food and mouth watering finger food at an affordable price, the Wild Restaurant offer various food for your friends and family.",
        },
        {
          title: "Mane Delicious",
          description:
            "For those interested in cooling and delicious deserts, head on to this cafe for some famous 'Ais Kacang' or 'Cendol'!",
        },
        {
          title: "Panda Cafe",
          description:
            "Looking for a Malaysian food? Then drop by at Panda Cafe for its delicious nasi lemak, curry mee, fried mee hoon and other dishes all guaranteed to satisfy a hungry tummy!",
        },
      ],
    },
    souvenir: {
      title: "Souvenir",
      shops: [
        {
          title: "Kancil Souvenir Shop & Kyoto Enterprise",
          description:
            "Looking for some really unique gifts? Kancil Souvenir Shop and Kyoto Enterprise provide gifts for you to take home!",
        },
        {
          title: "Zoovenir Shop",
          description:
            "Located inside Giant Panda Conservation Centre and in front of Savannah. Hunting for an exclusive Giant Panda merchandise? Drop by to Zoovenir Shop.",
        },
        {
          title: "Bee Museum",
          description:
            "Come and visit our giant bees! The largest honey producer in Malaysia is now in Zoo Negara.",
        },
      ],
    },
    facilities: {
      title: "Facilities",
      facilities: [
        {
          title: "Prayer Room / Surau",
          description:
            "An air-conditioned prayer room is provided with ample space situated nearby the zoo's main entrance.",
          image: "/images/visitor-info/surau.jpg",
          imageAlt: "surau",
        },
        {
          title: "Free Public Wifi",
          description:
            "Do you like being online all the time? Stay connected with our free wifi that is available at the main entrance, show amphitheatre and Giant Panda Conservation Centre.",
          image: "/images/visitor-info/freewifi.jpg",
          imageAlt: "Wifi",
        },
      ],
    },
  },
};

export default translations;
