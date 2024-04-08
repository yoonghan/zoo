import { render } from "@testing-library/react";
import { htmlConvertor } from "./htmlConvertor";

describe("HTML Convertor", () => {
  describe("change astreick to bold", () => {
    it("will render normal text correctly", () => {
        expect(render(htmlConvertor("hello world")).baseElement.innerHTML).toBe('<div>hello world</div>')
    });

    it("will render with bold correctly", () => {
        expect(render(htmlConvertor("hello *world")).baseElement.innerHTML).toBe('<div>hello <b>world</b></div>')
    });

    it("will render not render an asterik in center", () => {
        expect(render(htmlConvertor("hello * world")).baseElement.innerHTML).toBe('<div>hello * world</div>')
    });
  });
});
