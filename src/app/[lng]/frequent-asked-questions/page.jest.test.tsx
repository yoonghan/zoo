import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Faq from "./page";

describe("Frequent Asked Questions", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<Faq />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(
      getByRole("heading", { name: "Frequent Asked Questions" })
    ).toBeInTheDocument();
  });
});
