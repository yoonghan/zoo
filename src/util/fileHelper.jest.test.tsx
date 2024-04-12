import { render } from "@testing-library/react";
import { checkDownloadLinkHasHostAllLocalFiles } from "./fileHelper";

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
});
