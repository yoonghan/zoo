import { render, waitFor } from "@testing-library/react";
import ReactGA from "react-ga4";
import GoogleAnalytics from ".";

jest.mock("react-ga4");
jest.mock("next/navigation", () => ({
  usePathname: () => "/mock-path",
  useSearchParams: () => new URLSearchParams("mock_param=1"),
}));

describe("GoogleAnalytics", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("initializes GA and sends a pageview when measurementId is defined", async () => {
    render(<GoogleAnalytics measurementId="G-4GRBN4E8PX" />);

    expect(ReactGA.initialize).toHaveBeenCalledWith("G-4GRBN4E8PX");

    await waitFor(() => {
      expect(ReactGA.send).toHaveBeenCalledWith({
        hitType: "pageview",
        page: "/mock-pathmock_param=1",
      });
    });
  });

  it("does not initialize GA or send a pageview when measurementId is not defined", () => {
    render(<GoogleAnalytics />);

    expect(ReactGA.initialize).not.toHaveBeenCalled();
    expect(ReactGA.send).not.toHaveBeenCalled();
  });
});
