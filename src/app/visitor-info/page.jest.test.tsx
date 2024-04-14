import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import VisitorInfo from "./page";

describe("Visitor Info", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<VisitorInfo />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(getByRole("heading", { name: "Visitor Info" })).toBeInTheDocument();

    expect(getByRole("heading", { name: "Opening Hours" })).toBeInTheDocument();
    expect(
      getByRole("heading", { name: "Admission Ticket" })
    ).toBeInTheDocument();
    expect(getByRole("heading", { name: "Rental" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Tram Ride" })).toBeInTheDocument();
  });
});
