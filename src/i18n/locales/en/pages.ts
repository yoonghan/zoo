import zooFaq from "./faq";
import translation from "./translation";

const translations = {
  lang: "en",
  translation,
  headers: {
    default: "Zoo Negara Malaysia",
    defaultDescription:
      "A non-governmental organization established to create the first local zoo for Malaysians.",
    aboutUs: {
      title: "About Zoo Negara Website",
      description:
        "The story why a copy of Zoo Negara Malaysia website was created.",
    },
    frequentAskedQuestions: {
      title: "Frequent Asked Questions",
      description:
        "Frequent questions about the visit to the zoo, compiled directly from Zoo Negara Malaysia.",
    },
    careers: {
      title: "Careers in Zoo Negara",
      description: "Looking to work for Zoo Negara Malaysia?",
    },
    contactUs: {
      title: "Contact Zoo Negara",
      description: "Contacts for zoo information.",
    },
    visitorInfo: {
      title: "Visitor Info",
      description:
        "Visitor information about zoo opening hours and facilities.",
    },
    zooMap: {
      title: "Zoo Negara Malaysia Map",
      description:
        "Download the map and plan your visit in Zoo Negara Malaysia.",
    },
    gettingThere: {
      title: "Getting There",
      description:
        "Tips to get to Zoo Negara, Malaysia in Ampang, Kuala Lumpur.",
    },
    kiosksNFacilities: {
      title: "Kiosks And Facilities",
      description: "Food, Souvenir Kiosks and Facilities within the Zoo.",
    },
    sitemap: {
      title: "Sitemap",
      description: "Hierarchical sitemap of Walcron Zoo.",
    },
  },
  homepage: {
    welcome: "Welcome to Zoo Negara",
    introduction:
      "Zoo Negara Malaysia is managed by the Malaysian Zoological Society, a non-governmental organization established to create the first local zoo for Malaysians. Zoo Negara was officially opened on 14th November 1963 and has matured into a well-known zoo all around the world. We have a total of over 5137 specimen from 476 species of mammals, birds, reptiles, amphibians and fish.",
    introductionRemark: "taken from Zoo Negara website",
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
    title: "Visitor Information",
    additionalInformationText: "Additional Information",
    additionalInformationNotes: [
      "Tickets can be purchased at the zoo.",
      "OKU - 10% discounted price (Please show a valid OKU card).",
      "Vip Booking can be arranged, please check it out with Zoo Administrator in Contact Zoo link.",
      "All rates are stated in Malaysian Ringgit (MYR).",
    ],
    openingHours: {
      title: "Opening Hours",
      description: "Zoo Opens Daily from:",
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
      downloadMapBtn: "Download Map",
      description: "To explore our zoo, download it.",
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
