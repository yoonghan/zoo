import { render } from "@testing-library/react";
import {
  checkDownloadLinkHasHostAllLocalFiles,
  checkForImageExist,
} from "./fileHelper";

describe("fileHelper", () => {
  describe("checkDownloadLinkHasHostAllLocalFiles", () => {
    const renderLinksWithDownload = () =>
      render(
        <div>
          <a
            href="http://localhost/docs/zoo-negara-journey-through-time.pdf"
            download={true}
          >
            Journey Through Time
          </a>
          <a href="http://localhost/docs/notfound.pdf" download={true}>
            Not Found Doc
          </a>
        </div>
      );

    it("should display 1 file missing and the other shown", () => {
      const result = renderLinksWithDownload();
      const status = checkDownloadLinkHasHostAllLocalFiles(result.container);
      expect(status).toStrictEqual([
        {
          file: "./public/docs/zoo-negara-journey-through-time.pdf",
          status: true,
        },
        {
          file: "./public/docs/notfound.pdf",
          status: false,
        },
      ]);
    });
  });

  describe("checkForImageExist", () => {
    it("should show true as image of Map should exist in public folder", () => {
      expect(checkForImageExist("zoo-negara-map.jpg")).toBeTruthy();
    });
  });
});
