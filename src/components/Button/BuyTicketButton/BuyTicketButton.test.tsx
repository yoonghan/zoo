import { render, screen } from "@testing-library/react";
import BuyTicketButton from ".";
import userEvent from "@testing-library/user-event";
import { trackEvent } from "@/util/ga";

jest.mock("@/util/ga", () => ({
  trackEvent: jest.fn(),
}));

describe("BuyTicketButton", () => {
  it("should render correctly", async () => {
    window.location.assign = jest.fn();

    render(<BuyTicketButton
      text="I am a Button"
      href="/link"
      alert={{ title: "Alert Title", message: "Alert Message", okBtnText: "Ok" }}
      lng="en"
    />);

    const buyTixButton =screen.getByRole("link", { name: "I am a Button" })

    expect(buyTixButton).toHaveAttribute("href", "/link")

    await userEvent.click(buyTixButton);

    expect(trackEvent).toHaveBeenCalledWith(
      "Button",
      "Click",
      "Buy Ticket - en",
    );

    expect(screen.getByText("ALERT TITLE")).toBeInTheDocument()

    await userEvent.click(screen.getByRole("button", {name: "Ok"}))

    expect(window.location.assign).toHaveBeenCalledWith("/link");
    expect(trackEvent).toHaveBeenCalledWith(
      "Button",
      "Click",
      "Buy Ticket Redirect - en",
    );
  });

  it("should hide button on mobile", async () => {
    window.location.assign = jest.fn();

    render(<BuyTicketButton
      text="I am a Button"
      href="/link"
      alert={{ title: "Alert Title", message: "Alert Message", okBtnText: "Ok" }}
      hideOnMobile={true}
      lng="en"
    />);

    const buyTixButton =screen.getByRole("link", { name: "I am a Button" })
    expect(buyTixButton.innerHTML).toContain("hidden sm:inline");
  });
});
