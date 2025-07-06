import { allPages } from "./sitemapConstructor"

describe("sitemap constructor", () => {

  it("should be grouping pages at root / and does not contain sitemap", () => {
    expect(allPages).toContain("/")
    expect(allPages).toContain("/careers")
    expect(allPages).not.toContain("/sitemap")
  })
})
