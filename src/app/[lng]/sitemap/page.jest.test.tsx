import { render, screen, act } from "@testing-library/react";
import SiteMap, { generateMetadata } from "./page";
import translations from "@/i18n/locales/en/pages";

describe("SiteMap", () => {
  function trimTitle(title: string) {
    const colonIdx = title.indexOf(":")
    const idx = colonIdx == -1 ? title.indexOf("|") : colonIdx
    if(idx == -1) {
      return title
    } else { 
      return title.substring(0, idx).trim()
    }
  }

  it("should contains important keys", async () => {
    await act(async () => {
      render(<SiteMap params={Promise.resolve({ lng: "en" })} />);
    })

    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();

    //headers
    expect(screen.getByRole("heading", { name: trimTitle(translations.headers.sitemap.title )})).toBeInTheDocument()

    //links
    expect(screen.getByRole("link", { name: trimTitle(translations.headers.default) })).toHaveAttribute("href", "/en")
    expect(screen.getByRole("link", { name: trimTitle(translations.headers.aboutUs.title) })).toHaveAttribute("href", "/en/about-us")
    expect(screen.getByRole("link", { name: trimTitle(translations.headers.frequentAskedQuestions.title) })).toHaveAttribute("href", "/en/frequent-asked-questions")

    //indentation
    expect(screen.getByRole("link", { name: trimTitle(translations.headers.contactUs.title )}).parentElement).toHaveClass("ml-8")
    expect(screen.getByRole("link", { name: trimTitle(translations.headers.kiosksNFacilities.title) }).parentElement).toHaveClass("ml-12")
  })

  it("should generate site headers", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lng: "en" }) })

    expect(metadata.title).toBe(translations.headers.sitemap.title)
    expect(metadata.description).toBe(translations.headers.sitemap.description)
  })
})