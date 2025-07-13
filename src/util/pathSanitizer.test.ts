import { sanitizePath } from "./pathSanitizer";

describe("pathSanitizer", () => {
  it("should sanitize a path by adding a leading slash if missing", () => {
    const path = "example/path";
    const sanitizedPath = sanitizePath(path);
    expect(sanitizedPath).toBe("/example/path");
  });

  it("should not modify a path that already starts with a slash", () => {
    const path = "/example/path";
    const sanitizedPath = sanitizePath(path);
    expect(sanitizedPath).toBe("/example/path");
  });

  it("should handle an empty string by returning just a slash", () => {
    const path = "";
    const sanitizedPath = sanitizePath(path);
    expect(sanitizedPath).toBe("/");
  });
});