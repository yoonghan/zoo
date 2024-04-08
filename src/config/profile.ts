import { FooterProps } from "@/components/Footer";

export const zooProfile: FooterProps = {
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
    phone: "For enquiries\ncall: +603-4108 3422/7/8\nfax: +603-4107 5375.",
  },
  partners: [
    {
      imageSrc: "/partners/perhilitan.jpg",
      url: "https://www.wildlife.gov.my",
      alt: "Perhilitan Hutan",
    },
    {
      imageSrc: "/partners/dbkl.jpg",
      url: "https://www.dbkl.my",
      alt: "DBKL",
    },
    {
      imageSrc: "/partners/tanchong.jpg",
      url: "https://www.tanchonggroup.com/",
      alt: "Tan Chong Motors",
    },
  ],
};
