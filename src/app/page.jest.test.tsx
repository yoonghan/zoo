import "@testing-library/jest-dom";
import Home from "./page";
import { render } from "@testing-library/react";

/** Testing is limited for layout, as it renders whole html. The only best solution is via e2e test. */
describe("Main Homepage", () => {
  it("should contains 3 important keys", () => {
    const { getByRole } = render(<Home />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //headers
    expect(
      getByRole("heading", { name: "Welcome to Zoo Negara" })
    ).toBeInTheDocument();
    expect(getByRole("heading", { name: "Highlights" })).toBeInTheDocument();
  });
});
