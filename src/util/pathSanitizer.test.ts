import { sanitizePath } from "./pathSanitizer";

describe("pathSanitizer", () => {
  it("should not sanitize and stay as it is", () => {
    const path = "example/path";
    const sanitizedPath = sanitizePath(path);
    expect(sanitizedPath).toBe("example/path");
  });
});
