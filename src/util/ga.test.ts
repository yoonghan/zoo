import ReactGA from "react-ga4";
import { trackEvent } from "./ga";

jest.mock("react-ga4");

describe("ga", () => {
  it("should call ReactGA.event with the correct parameters", () => {
    trackEvent("Category", "Action", "Label");

    expect(ReactGA.event).toHaveBeenCalledWith({
      category: "Category",
      action: "Action",
      label: "Label",
    });
  });
});
