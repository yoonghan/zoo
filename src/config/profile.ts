import { type ContactUsProps } from "@/app/[lng]/contact-us/typings/Props";
import { FooterProps } from "@/components/Footer";

type Donation = {
  price: string;
  gifts: string[];
};

type Programmes = {
  ticket: {
    admission: {
      url: string;
    };
  };
};

export const zooProfile: FooterProps &
  Programmes & { contactus: ContactUsProps } & { careerLink: string } = {
  companyName: "Zoo Negara",
  operatingTime: {
    day: { from: "Monday", to: "Sunday" },
    time: { from: "9:00am", to: "5:00pm" },
    lastAdmissionTime: "4:00pm",
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
      url: "https://ticket.zoonegara.my"
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
        department: "contactUs.translate.Administration",
        email: "admindepartment@zoonegaramalaysia.my",
        departmentFunction:
          "Internship programme and business related matters.",
      },
      {
        department: "contactUs.translate.PublicRelationsMarketing",
        email: "marketing@zoonegaramalaysia.my",
        departmentFunction:
          "contactUs.translate.PublicRelationsMarketing_description",
      },
      {
        department: "contactUs.translate.CustomerService",
        email: "customerservice@zoonegaramalaysia.my",
        departmentFunction:
          "contactUs.translate.CustomerService_description"
      },
      {
        department: "contactUs.translate.Education",
        email: "education@zoonegaramalaysia.my",
        departmentFunction:
          "contactUs.translate.Education_description",
      },
      {
        department: "contactUs.translate.ReceptionCounter",
        email: "receptionist@zoonegaramalaysia.my",
        departmentFunction: "contactUs.translate.ReceptionCounter_description",
      },
    ],
  },
};
