import { render, screen } from "@testing-library/react";
import BuyTicketButton from ".";
import userEvent from "@testing-library/user-event";

describe("BuyTicketButton", () => {
  it("should render correctly", async () => {
    window.location.assign = jest.fn();

    render(<BuyTicketButton
      text="I am a Button"
      href="/link"
      alert={{ title: "Alert Title", message: "Alert Message", okBtnText: "Ok" }}
    />);

    const buyTixButton =screen.getByRole("link", { name: "I am a Button" })

    expect(buyTixButton).toHaveAttribute("href", "/link")

    await userEvent.click(buyTixButton);

    expect(screen.getByText("ALERT TITLE")).toBeInTheDocument()

    await userEvent.click(screen.getByRole("button", {name: "Ok"}))

    expect(window.location.assign).toHaveBeenCalledWith("/link");
  });
});
