import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import VisitorInfo from "./page";

describe("Getting Involved", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<VisitorInfo />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(
      getByRole("heading", { name: "Getting Involved" })
    ).toBeInTheDocument();
  });
});
