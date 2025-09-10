import { render, waitFor } from "@testing-library/react";
import ReactGA from "react-ga4";
import GoogleAnalytics from ".";

// Mock react-ga4
jest.mock("react-ga4");

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/mock-path",
  useSearchParams: () => new URLSearchParams("mock_param=1"),
}));

describe("GoogleAnalytics", () => {
  it("initializes GA and sends a pageview", async () => {
    render(<GoogleAnalytics />);

    // Check for initialization
    expect(ReactGA.initialize).toHaveBeenCalledWith("G-4GRBN4E8PX");

    // Check for pageview
    await waitFor(() => {
      expect(ReactGA.send).toHaveBeenCalledWith({
        hitType: "pageview",
        page: "/mock-pathmock_param=1",
      });
    });
  });
});
