import { allRemappedFile } from "./pages";

describe("all sites are defined", () => {
  it("should some basic real files and is only 1", () => {
    const allApp = allRemappedFile;

    expect(allApp.filter((app) => app === "/careers")).toHaveLength(1);
    expect(allApp.filter((app) => app === "/")).toHaveLength(1);
  });
});
