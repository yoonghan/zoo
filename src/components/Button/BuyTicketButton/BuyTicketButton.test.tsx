import { render, screen } from "@testing-library/react";
import BuyTicketButton from ".";
import userEvent from "@testing-library/user-event";
import ReactGA from "react-ga4";

jest.mock("react-ga4");

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

    expect(screen.getByText("ALERT TITLE")).toBeInTheDocument()

    await userEvent.click(screen.getByRole("button", {name: "Ok"}))

    expect(window.location.assign).toHaveBeenCalledWith("/link");
    expect(ReactGA.event).toHaveBeenCalledWith({
      category: "Button",
      action: "Click",
      label: "Buy Ticket - en",
    });
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
