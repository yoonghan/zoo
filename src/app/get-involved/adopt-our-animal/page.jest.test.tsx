import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import VisitorInfo from "./page";

describe("Adopt Our Animal", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<VisitorInfo />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(
      getByRole("heading", { name: "Adopt Our Animal" })
    ).toBeInTheDocument();
  });
});
