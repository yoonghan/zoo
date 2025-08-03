import fs from "fs";

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
  