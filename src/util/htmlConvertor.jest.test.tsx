import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { htmlConvertor } from "./htmlConvertor";

describe("HTML Convertor", () => {
  it("will render normal text correctly", () => {
      expect(render(htmlConvertor("hello world")).baseElement.innerHTML).toBe('<div>hello world</div>')
  });

  it("will replace all new lines with spaces", () => {
    expect(render(htmlConvertor("hello\nworld")).baseElement.innerHTML).toBe('<div>hello world</div>')
});

  describe("change astrick to bold", () => {
    it("will render with bold correctly", () => {
        expect(render(htmlConvertor("hello *world")).baseElement.innerHTML).toBe('<div>hello <b>world</b></div>')
    });

    it("will not render a standalone asterik in center", () => {
        expect(render(htmlConvertor("hello * world")).baseElement.innerHTML).toBe('<div>hello * world</div>')
    });
  });

  describe("change square bracket to anchor link", () => {
    it("will render normal link correctly", () => {
      const {getByRole} = render(htmlConvertor("[https://www.google.com|Google]"))
      expect(getByRole("link", {name: "Google"})).toHaveAttribute("href", "https://www.google.com")
      expect(getByRole("link", {name: "Google"})).toHaveAttribute("rel", "external")
    });

    it("will not render a standalone [ to link", () => {
      expect(render(htmlConvertor("hello [link world")).baseElement.innerHTML).toBe('<div>hello [link world</div>')
    });

    it("will render text to link that is with space", () => {
      const {getByRole} = render(htmlConvertor("[/visitors/about-us|About Us]"))
      expect(getByRole("link", {name: "About Us"})).toHaveAttribute("href", "/visitors/about-us")
    });

    it("will render asterick text with | wrapped with link", () => {
      const {getByRole} = render(htmlConvertor("hello [/link|*world i know is the best]"))
      expect(getByRole("link", {name: "*world i know is the best"})).toHaveAttribute("href", "/link")
    });
  });
});
