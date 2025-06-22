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
    label: "Get Involved",
    url: "/get-involved",
    items: [
      {
        label: "Adopt Our Animals",
        url: "/get-involved/adopt-our-animal",
      },
      {
        label: "List Of Donors And Sponsors",
        url: "/get-involved",
      },
      {
        label: "KeeperKu Programme",
        url: "/get-involved",
      },
      {
        label: "Student Training",
        url: "/get-involved",
      },
      {
        label: "CSR Programme",
        url: "/get-involved",
      },
    ],
  },
];
