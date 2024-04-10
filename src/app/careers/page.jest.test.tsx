import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Career, { hrEmail } from "./page";

describe("Career", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<Career />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(getByRole("heading", { name: "Career" })).toBeInTheDocument();
    //hr email
    expect(getByRole("link", { name: hrEmail })).toHaveAttribute(
      "href",
      `mailto:${hrEmail}`
    );
  });
});
