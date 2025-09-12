import { render, screen } from "@testing-library/react";
import NotFound from "./not-found";
import ReactGA from "react-ga4";

jest.mock("react-ga4");

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

  it("should call GA event on load", () => {
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-12345";
    render(<NotFound />);

    expect(ReactGA.initialize).toHaveBeenCalledWith("G-12345");
    expect(ReactGA.send).toHaveBeenCalledWith({ hitType: "pageview", page: "/404" });
  });
});
