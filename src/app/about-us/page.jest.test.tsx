import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import About from "./page";
import fs from "fs";
import { miniLinks } from "./config";

describe("About Us", () => {
  const consoleError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });

  afterAll(async () => {
    //hack due to iframe unload issue.
    await new Promise((res) => setTimeout(res, 1000));
    console.error = consoleError;
  });

  it("should contains important keys", () => {
    const { getByRole } = render(<About />);
    //main
    expect(getByRole("main")).toBeInTheDocument();

    /* Start headers from config key */
    expect(
      getByRole("heading", { name: "Zoo Negara - About Us" })
    ).toBeInTheDocument();

    expect(
      getByRole("heading", { name: "Zoo Negara - Vision" })
    ).toBeInTheDocument();

    expect(
      getByRole("heading", { name: "Zoo Negara - Mission" })
    ).toBeInTheDocument();

    expect(
      getByRole("heading", {
        name: "Zoo Negara - The Five Pillars We Stand On",
      })
    ).toBeInTheDocument();

    expect(
      getByRole("heading", { name: "Journey Through Time" })
    ).toBeInTheDocument();

    expect(
      getByRole("heading", { name: "Research Papers" })
    ).toBeInTheDocument();

    /* End headers from config key */
  });

  it("should have a class 'anchor-link-header' for sticky header handling", () => {
    const result = render(<About />);
    const container = result.container;

    miniLinks.forEach((miniLink) => {
      expect(container.querySelector(`#${miniLink.hashId}`)).toHaveClass(
        "anchor-link-header"
      );
    });
  });

  it("should have valid local download links", () => {
    const result = render(<About />);
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