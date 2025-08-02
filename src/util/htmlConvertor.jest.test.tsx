import { render, screen } from "@testing-library/react";
import { htmlConvertor } from "./htmlConvertor";

describe("HTML Convertor", () => {
  it("will render normal text correctly", () => {
    expect(render(htmlConvertor("hello world")).baseElement.innerHTML).toBe(
      "<div>hello world</div>"
    );
  });

  it("will replace all new lines with spaces", () => {
    expect(render(htmlConvertor("hello\nworld")).baseElement.innerHTML).toBe(
      "<div>hello world</div>"
    );
  });

  describe("change astrick to bold", () => {
    it("will render with bold correctly", () => {
      expect(render(htmlConvertor("hello *world")).baseElement.innerHTML).toBe(
        "<div>hello <strong>world</strong></div>"
      );
    });

    it("will not render a standalone asterik in center", () => {
      expect(render(htmlConvertor("hello * world")).baseElement.innerHTML).toBe(
        "<div>hello * world</div>"
      );
    });
  });

  describe("change square bracket to anchor link", () => {
    it("will render normal link correctly", () => {
      render(
        htmlConvertor("[https://www.google.com|Google]")
      );
      expect(screen.getByRole("link", { name: "Google" })).toHaveAttribute(
        "href",
        "https://www.google.com"
      );
      expect(screen.getByRole("link", { name: "Google" })).toHaveAttribute(
        "rel",
        "external"
      );
    });

    it("will not render a standalone [ to link", () => {
      expect(
        render(htmlConvertor("hello [link world")).baseElement.innerHTML
      ).toBe("<div>hello [link world</div>");
    });

    it("will render text to link that is with space", () => {
      const { getByRole } = render(
        htmlConvertor("[/visitors/about-us|About Us]")
      );
      expect(getByRole("link", { name: "About Us" })).toHaveAttribute(
        "href",
        "/visitors/about-us"
      );
    });

    it("will render asterick text with | wrapped with link", () => {
      const { getByRole } = render(
        htmlConvertor("hello [/link|*world i know is the best]")
      );
      expect(
        getByRole("link", { name: "*world i know is the best" })
      ).toHaveAttribute("href", "/link");
    });

    it("can render link that ends with ,(comma) and .(dot)", () => {
      const component = render(
        htmlConvertor("Let's [/link1|here], or [/link2|there] or [/link3|end].")
      );
      expect(
        component.getByRole("link", {
          name: "here",
        })
      ).toHaveAttribute("href", "/link1");
      expect(
        component.getByRole("link", {
          name: "there",
        })
      ).toHaveAttribute("href", "/link2");
      expect(component.baseElement.innerText).toBe(
        "Let's here, or there or end."
      );
    });
  });

  describe("change any new lines into new lines!", () => {
    it("will change any ! into line break", () => {
      const component = render(htmlConvertor("Hi there !! How are you?"));
      expect(component.baseElement.innerHTML).toBe(
        "<div>Hi there <br> How are you?</div>"
      );
    });
  });
});
