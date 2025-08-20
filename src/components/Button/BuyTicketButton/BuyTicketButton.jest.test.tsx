import { render, screen } from "@testing-library/react";
import BuyTicketButton from ".";
import userEvent from "@testing-library/user-event";

describe("BuyTicketButton", () => {
  it("should render correct button className", async () => {
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
  });
});
