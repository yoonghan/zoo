import { render, act, screen } from "@testing-library/react";
import ZooMap, { generateMetadata } from "./page";
import translations from "@/i18n/locales/en/pages";
import { isImageAssetExist, isNextJsImageAssetExist } from "@/__tests__/helpers/fileHelper";

describe("ZooMap", () => {
  const zooMapFileName = "zoo-negara-map";

  function assertImageAssetExists(src: string, isNextJs: boolean) {
    if(isNextJs) {
      expect(isNextJsImageAssetExist(src)).toBeTruthy()
    } else {
      expect(isImageAssetExist(src)).toBeTruthy()
    }
  }

  it("should contains important keys", async () => {
    await act(async () => {
      render(<ZooMap params={Promise.resolve({ lng: "en" })} />);
    });
    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();
    //h1
    expect(
      screen.getByRole("heading", {
        name: translations.visitorInfo.zooMap.title,
      })
    ).toBeInTheDocument();
  });

  it("should have map and image and asset exists", async () => {
    await act(async () => {
      render(<ZooMap params={Promise.resolve({ lng: "en" })} />);
    });

    const mainImageAsset = `/images/${zooMapFileName}.jpg`
    const downloadBtn = await screen.findByRole("link", {
      name: translations.visitorInfo.zooMap.downloadMapBtn,
    });
    expect(downloadBtn).toHaveAttribute("href", mainImageAsset);

    assertImageAssetExists(mainImageAsset, false)

    expect(
      screen.getByRole("link", {
        name: translations.visitorInfo.zooMap.downloadMapBtn,
      })
    ).toHaveAttribute("download", "");

    assertImageAssetExists(screen
      .getByRole("img", { name: "Top Zoo Negara Map" })
      .getAttribute("src")!, true)

    assertImageAssetExists(screen
      .getByRole("img", { name: "Center Zoo Negara Map" })
      .getAttribute("src")!, true)
    
    assertImageAssetExists(screen
      .getByRole("img", { name: "Bottom Zoo Negara Map" })
      .getAttribute("src")!, true)
  });

  it("should generate site headers", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ lng: "en" }),
    });

    expect(metadata.title).toBe(translations.headers.zooMap.title);
    expect(metadata.description).toBe(translations.headers.zooMap.description);
  });
});
