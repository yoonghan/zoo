import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import KiosksAndFacilities from "./page";
import { checkDownloadLinkHasHostAllLocalFiles } from "@/util/fileHelper";

describe("ShopsAndFacilities", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<KiosksAndFacilities />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(
      getByRole("heading", { name: "Kiosks And Facilities" })
    ).toBeInTheDocument();
  });

  it("should have valid local download links", () => {
    const result = render(<KiosksAndFacilities />);
    const allDownloads = checkDownloadLinkHasHostAllLocalFiles(
      result.container
    );
    expect(allDownloads).toStrictEqual(
      allDownloads.map((link) => ({ ...link, status: true }))
    );
  });
});
