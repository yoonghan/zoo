import { render, act, screen } from "@testing-library/react";
import ZooMap, { generateMetadata } from "./page";
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
      screen.getByRole("heading", {
        name: translations.visitorInfo.zooMap.title,
      })
    ).toBeInTheDocument();
  });

  it("should have map and image", async () => {
    await act(async () => {
      render(<ZooMap params={Promise.resolve({ lng: "en" })} />);
    });

    expect(
      await screen.findByRole("link", {
        name: translations.visitorInfo.zooMap.downloadMapBtn,
      })
    ).toHaveAttribute("href", `/images/${zooMapFileName}.jpg`);
    expect(
      screen.getByRole("link", {
        name: translations.visitorInfo.zooMap.downloadMapBtn,
      })
    ).toHaveAttribute("download", "");

    expect(
      screen
        .getByRole("img", { name: "Top Zoo Negara Map" })
        .getAttribute("src")
    ).toContain(`${zooMapFileName}-1.webp`);
    expect(
      screen
        .getByRole("img", { name: "Center Zoo Negara Map" })
        .getAttribute("src")
    ).toContain(`${zooMapFileName}-2.webp`);
    expect(
      screen
        .getByRole("img", { name: "Bottom Zoo Negara Map" })
        .getAttribute("src")
    ).toContain(`${zooMapFileName}-3.webp`);
  });

  it("should generate site headers", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ lng: "en" }),
    });

    expect(metadata.title).toBe(translations.headers.zooMap.title);
    expect(metadata.description).toBe(translations.headers.zooMap.description);
  });
});
