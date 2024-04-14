import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import GettingThere from "./page";

describe("Getting There", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<GettingThere />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(getByRole("heading", { name: "Getting There" })).toBeInTheDocument();

    expect(getByRole("heading", { name: "Address" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Train" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Bus" })).toBeInTheDocument();
  });
});
