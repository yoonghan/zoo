import { ContactUsProps } from "@/app/[lng]/contact-us/page";
import { FooterProps } from "@/components/Footer";

type Donation = {
  price: string;
  gifts: string[];
};

type Programmes = {
  ticket: {
    admission: {
      url: string;
      text: string;
    };
  };
};

export const zooProfile: FooterProps &
  Programmes & { contactus: ContactUsProps } & { careerLink: string } = {
  companyName: "Zoo Negara",
  operatingTime: {
    day: { from: "Monday", to: "Sunday" },
    time: { from: "9:00am", to: "5:00pm" },
    exception: "Last Admission at 4:00pm",
  },
  address: {
    street: "Zoo Negara",
    city: "Hulu Kelang",
    postalCode: 68000,
    state: "Ampang",
    country: "Selangor",
    googleMaps:
      "https://www.google.com.my/maps?f=q&source=embed&hl=en&geocode&q=zoo+negara&sll=4.109495,109.101269&sspn=33.65185,57.084961&ie=UTF8&hq=Zoo+Negara&hnear=Zoo+Negara&ll=3.210945,101.758093&spn=0.016154,0.027874&z=14&iwloc=A&cid=12699137066735775727",
  },
  careerLink: "https://zoonegara.my/jobs.html",
  partners: [],
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
    eventNumber: "+603-41069146",
    marketingEmail: "marketing@zoonegaramalaysia.my",
    donationEmail: "donation@zoonegaramalaysia.my",
    customerserviceEmail: "customerservice@zoonegaramalaysia.my",
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
