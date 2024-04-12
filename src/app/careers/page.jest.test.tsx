import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Career from "./page";
import fs from "fs";
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

  it("should have valid local download links", () => {
    const result = render(<Career />);
    const container = result.container;
    const allDownloads = Array.from(container.querySelectorAll("a[download]"))
      .map((elem) => {
        const fullPath = (elem as HTMLAnchorElement).href;
        return fullPath.substring("http://localhost/".length, fullPath.length);
      })
      .map((link) => {
        const file = `./public/${link}`;
        return {
          status: fs.existsSync(file),
          file,
        };
      });
    expect(allDownloads).toStrictEqual(
      allDownloads.map((link) => ({ ...link, status: true }))
    );
  });
});
