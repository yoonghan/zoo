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

export const checkForImageExist = (imgSrcWithImageFolder: string) =>
  fs.existsSync(`./public/${imgSrcWithImageFolder}`);
