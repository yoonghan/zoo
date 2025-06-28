import { MenuType } from "@/components/Menu";

export const zooMenu: MenuType = [
  {
    label: "menu.visitor-info",
    url: "/visitor-info",
    items: [
      {
        label: "menu.opening-and-rates",
      },
      {
        label: "menu.getting-there",
        url: "/visitor-info/getting-there",
      },
      {
        label: "menu.zoo-map",
        url: "/visitor-info/zoo-map",
      },
      {
        label: "menu.kiosk-and-facilities",
        url: "/visitor-info/kiosks-n-facilities",
      },
    ],
  },
  {
    label: "menu.about-us",
    url: "/about-us",
  },
];
