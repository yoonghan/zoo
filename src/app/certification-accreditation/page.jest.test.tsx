import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import fs from "fs";
import Certification from "./page";
import { miniLinks } from "./config";

describe("Certification/Accreditation", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<Certification />);
    //main
    expect(getByRole("main")).toBeInTheDocument();

    /* Start headers from config key */
    expect(
      getByRole("heading", { name: "Accreditation / Certification" })
    ).toBeInTheDocument();

    expect(
      getByRole("heading", { name: "Malaysia Book of Records" })
    ).toBeInTheDocument();

    expect(getByRole("heading", { name: "SEAZA" })).toBeInTheDocument();
    /* End headers from config key */
  });

  it("should have a class 'anchor-link-header' for sticky header handling", () => {
    const result = render(<Certification />);
    const container = result.container;

    miniLinks.forEach((miniLink) => {
      expect(container.querySelector(`#${miniLink.hashId}`)).toHaveClass(
        "anchor-link-header"
      );
    });
  });

  it("should have valid local download links", () => {
    const result = render(<Certification />);
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
