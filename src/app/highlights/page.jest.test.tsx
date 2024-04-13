import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Highlights from "./page";

describe("Highlights", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<Highlights />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(getByRole("heading", { name: "Highlights" })).toBeInTheDocument();
  });
});
