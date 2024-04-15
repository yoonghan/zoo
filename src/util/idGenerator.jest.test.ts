import { formatStringAsId } from "./idGenerator";

describe("ID Generator", () => {
  describe("formatStringAsId", () => {
    it("should convert all spaces to dash-", () => {
      expect(formatStringAsId("hello world")).toBe("hello-world");
      expect(formatStringAsId("hello   world")).toBe("hello-world");
      expect(formatStringAsId("hello   world    ")).toBe("hello-world");
      expect(formatStringAsId("   hello   world    ")).toBe("hello-world");
      expect(formatStringAsId("A few spaces should do")).toBe("a-few-spaces-should-do");
    });

    it("should all to lower space", () => {
      expect(formatStringAsId("hello3World")).toBe("hello3world");
      expect(formatStringAsId("HELLOWorld")).toBe("helloworld");
    });
  });
});
