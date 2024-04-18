import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import HaveAnEvent from "./page";

describe("Have An Event", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<HaveAnEvent />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(getByRole("heading", { name: "Have An Event" })).toBeInTheDocument();
  });
});
