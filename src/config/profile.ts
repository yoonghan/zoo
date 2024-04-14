import { ContactUsProps } from "@/app/contact-us/page";
import { FooterProps } from "@/components/Footer";

type Ticket = {
  ticket: {
    admission: {
      url: string;
      text: string;
    };
  };
};

export const zooProfile: FooterProps & Ticket & { contactus: ContactUsProps } =
  {
    companyName: "Zoo Negara",
    operatingTime: {
      day: { from: "Monday", to: "Sunday" },
      time: { from: "9:00am", to: "5:00pm" },
      shows: [
        "Saturday to Thursday: 11:00am and 3:00pm",
        "Our Multi-animal Show is *CLOSED on Friday *EXCEPT school holidays & public holidays.",
      ],
      animalFeeding: [
        "Only on Weekends and Public Holidays",
        "Children's World : 12.00 pm - 1.00 pm",
        "Javan Deer : 2.00 pm - 3.00 pm",
      ],
    },
    address: {
      street: "Zoo Negara",
      city: "Hulu Kelang",
      postalCode: 68000,
      state: "Ampang",
      country: "Selangor",
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
    contactus: {
      phoneNumber1: "+603-4108 3422",
      phoneNumber2: "+603-4108 3424",
      hrEmail: "hrd@zoonegaramalaysia.my",
      administration: [
        {
          department: "Administration",
          email: "admindepartment@zoonegaramalaysia.my",
          departmentFunction:
            "Internship programme and business related matters.",
        },
        {
          department: "Public Relations & Marketing",
          email: "marketing@zoonegaramalaysia.my",
          departmentFunction:
            "Animal adoption, news & media relation, sponsorship and corporate social responsibilities (CSR).",
        },
        {
          department: "Customer Service",
          email: "customerservice@zoonegaramalaysia.my",
          departmentFunction:
            "Corporate events, family days, birthdays, site rentals, visitor related matters and other functions.",
        },
        {
          department: "Education",
          email: "education@zoonegaramalaysia.my",
          departmentFunction:
            "Tours, education packages, volunteering, research programme and student related matters.",
        },
        {
          department: "Reception Counter",
          email: "receptionist@zoonegaramalaysia.my",
          departmentFunction: "Opening hours, rates and school concession.",
        },
      ],
    },
  };
