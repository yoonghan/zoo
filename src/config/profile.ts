import { FooterProps } from "@/components/Footer";

type Ticket = {
  ticket: {
    admission: {
      url: string;
      text: string;
    };
  };
};

export const zooProfile: FooterProps & Ticket = {
  companyName: "Zoo Negara",
  operatingTime: {
    day: { from: "Monday", to: "Sunday" },
    time: { from: "9:00am", to: "5:00pm" },
  },
  address: {
    street: "Zoo Negara",
    city: "Hulu Kelang",
    postalCode: 68000,
    state: "Ampang",
    country: "Selangor",
  },
  contact: {
    phone: "+603-4108 3422",
    phoneExtension: "7/8",
    fax: "+603-4107 5375",
  },
  partners: [
    {
      imageSrc: "/images/partners/perhilitan.jpg",
      url: "https://www.wildlife.gov.my",
      alt: "Perhilitan Hutan",
    },
    {
      imageSrc: "/images/partners/dbkl.jpg",
      url: "https://www.dbkl.my",
      alt: "DBKL",
    },
    {
      imageSrc: "/images/partners/tanchongmotor.jpg",
      url: "https://www.tanchonggroup.com/",
      alt: "Tan Chong Motors",
    },
  ],
  ticket: {
    admission: {
      url: "https://ticket.zoonegara.my",
      text: "Buy Ticket",
    },
  },
};
