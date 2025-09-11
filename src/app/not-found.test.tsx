import { render, screen } from "@testing-library/react";
import NotFound from "./not-found";

describe("not-found", () => {
  it("should render correctly", () => {
    render(<NotFound />);
    expect(screen.getByText("This page is not found")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Return to Zoo Page" })
    ).toHaveAttribute("href", "https://zoo.walcron.com");

    expect(screen.getByRole("link", { name: "Sitemap" })).toHaveAttribute(
      "href",
      "/en/sitemap"
    );
  });
});
