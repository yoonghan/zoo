import fs from "fs";
import { render } from "@testing-library/react";

export const checkDownloadLinkHasHostAllLocalFiles = (
  htmlElement: HTMLElement
) => {
  return Array.from(htmlElement.querySelectorAll("a[download]"))
    .map((elem) => {
      const fullPath = (elem as HTMLAnchorElement).href;
      return fullPath.substring("http://localhost/".length, fullPath.length);
    })
    .map((link) => {
      const file = `./public/${link}`;
      return {
        status: fs.existsSync(file),
        file,
      };
    });
};

export const isImageAssetExist = (imgSrc: string) => {
  const removedImgLeadingPath = imgSrc.replace(/^\/images\//, "")
  return fs.existsSync(`./public/images/${removedImgLeadingPath}`);
}

export const isNextJsImageAssetExist = (imgSrc: string) => {
  const removedLeadingNextFormat = imgSrc.replace(/\/_next\/image\?url=%2Fimages%2F/, "")
  const removedTrailingNextFormat = removedLeadingNextFormat.replace(/\&.+$/, "")
  return fs.existsSync(`./public/images/${removedTrailingNextFormat}`);
}

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
      expect(isImageAssetExist("zoo-negara-map.jpg")).toBeTruthy();
      expect(isImageAssetExist("/images/zoo-negara-map.jpg")).toBeTruthy();
    });

    it("should be able to check _nextjs image", () => {
      expect(isNextJsImageAssetExist("/_next/image?url=%2Fimages%2Fzoo-negara-map-1.webp&w=3840&q=75")).toBeTruthy();
    })
  });
});
	