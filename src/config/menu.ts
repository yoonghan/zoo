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
];
