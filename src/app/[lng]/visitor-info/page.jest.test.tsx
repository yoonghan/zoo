import { render, screen, act } from "@testing-library/react";
import VisitorInfo from "./page";

describe("Visitor Info", () => {
  it("should contains important keys", async () => {
    await act(async () => {
      render(<VisitorInfo params={Promise.resolve({ lng: "en" })} />);
    })
    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();
    //h1
    expect(screen.getByRole("heading", { name: "Visitor Info" })).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: "Opening Hours" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Admission Ticket" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Rental" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Tram Ride" })).toBeInTheDocument();
  });
});
