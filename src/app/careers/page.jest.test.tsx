import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Career from "./page";
import { zooProfile } from "@/config/profile";

describe("Career", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<Career />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(
      getByRole("heading", { name: "Zoo Negara - Career" })
    ).toBeInTheDocument();
    //hr email
    expect(
      getByRole("link", { name: zooProfile.contactus.hrEmail })
    ).toHaveAttribute("href", `mailto:${zooProfile.contactus.hrEmail}`);
  });
});
