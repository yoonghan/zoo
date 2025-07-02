import { render, screen, act } from "@testing-library/react";
import About from "./page";
import translations from "@/i18n/en/pages";

describe("About Us", () => {

  const expectedHeaders = ["aboutWalcron", "aboutZoo", "vision"]

  const consoleError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });

  afterAll(async () => {
    //hack due to iframe unload issue.
    await new Promise((res) => setTimeout(res, 1000));
    console.error = consoleError;
  });

  it("should contains important keys", async() => {
    await act(async () => {
      render(<About params={Promise.resolve({ lng: "en" })} />);
    })
    //main
    expect(screen.findByRole("main")).toBeInTheDocument();

    /* Start headers from config key */
    expect(screen.getByRole("heading", { name: "About Us" })).toBeInTheDocument();

    expectedHeaders.forEach(headers => {
      expect(
        screen.getByRole("heading", { name: translations[headers].title })
      ).toBeInTheDocument();
    })

    /* End headers from config key */
  });

  it("should have a class 'anchor-link-header' for sticky header handling", async () => {
    await act(async () => {
      result = render(<About params={Promise.resolve({ lng: "en" })} />);
    })

    //main
    expect(screen.findByRole("main")).toBeInTheDocument();

    expectedHeaders.forEach((miniLink) => {
      expect(screen.findByRole("main").querySelector(`#${miniLink.hashId}`)).toHaveClass(
        "anchor-link-header"
      );
    });
  });
});
