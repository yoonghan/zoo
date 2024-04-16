import { MenuType } from "@/components/Menu";

export const zooMenu: MenuType = [
  {
    label: "Visitor Info",
    url: "/visitor-info",
    items: [
      {
        label: "Opening Hours And Rates",
      },
      {
        label: "Getting There",
        url: "/visitor-info/getting-there",
      },
      {
        label: "Zoo Map",
        url: "/visitor-info/zoo-map",
      },
      {
        label: "Kiosks And Facilities",
        url: "/visitor-info/kiosks-n-facilities",
      },
    ],
  },
  {
    label: "About Zoo",
    url: "/about-us",
  },
  {
    label: "Have An Event",
    url: "/event",
    items: [
      {
        label: "Birthday",
        url: "#birthday",
      },
      {
        label: "Family Day",
        url: "#family-day",
      },
      {
        label: "Scenic Point & Function",
        url: "#scenic-point-and-function",
      },
      {
        label: "Kancil Hall",
        url: "#kancil-hall",
      },
      {
        label: "Tunku Abdul Rahman Theather",
        url: "#tunku-abdul-rahman-theater",
      },
    ],
  },
  {
    label: "Get Involved",
    url: "/get-involved",
    items: [
      {
        label: "Adopt Our Animals",
        url: "/get-involved/adopt-our-animal",
      },
      {
        label: "List Of Donors And Sponsors",
        url: "#list-of-donors-and-sponsors",
      },
      {
        label: "KeeperKu Programme",
        url: "#keepersku-programme",
      },
      {
        label: "Student Training",
        url: "#student-training",
      },
      {
        label: "CSR Programme",
        url: "#csr-programme",
      },
    ],
  },
];
