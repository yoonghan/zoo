import { render, act, screen } from "@testing-library/react";
import ZooMap from "./page";
import { checkForImageExist } from "@/util/fileHelper";
import translations from "@/i18n/locales/en/pages";

describe("ZooMap", () => {
  const zooMapFileName = "zoo-negara-map";

  it("should contains important keys", async () => {
    await act(async () => {
      render(<ZooMap params={Promise.resolve({ lng: "en" })} />);
    });
    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();
    //h1
    expect(
      screen.getByRole("heading", { name: translations.visitorInfo.zooMap.title })
    ).toBeInTheDocument();
  });

  it("should have map and image", async () => {
    await act(async () => {
      render(<ZooMap params={Promise.resolve({ lng: "en" })} />);
    });
 
    expect(
      await screen.findByRole("button", { name: translations.visitorInfo.zooMap.downloadMapBtn })
    ).toHaveAttribute("href", `/images/${zooMapFileName}.jpg`);
    expect(
      screen.getByRole("button", { name: translations.visitorInfo.zooMap.downloadMapBtn })
    ).toHaveAttribute("download", "");

    expect(
      screen
        .getAllByRole("img", { name: "Top Zoo Negara Map" })[0]
        .getAttribute("src")
    ).toContain(`${zooMapFileName}-web-1.jpg`);
    expect(
      screen
        .getAllByRole("img", { name: "Bottom Zoo Negara Map" })[1]
        .getAttribute("src")
    ).toContain(`${zooMapFileName}-web-2.jpg`);
  });

  it("should have 3 important map files to exist", () => {
    expect(checkForImageExist(`${zooMapFileName}.jpg`));
    expect(checkForImageExist(`${zooMapFileName}-web-1.jpg`));
    expect(checkForImageExist(`${zooMapFileName}-web-2.jpg`));
  });
});
