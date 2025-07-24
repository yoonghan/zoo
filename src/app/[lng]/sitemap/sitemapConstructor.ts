import fs from 'fs'
import { sanitizePath } from "@/util/pathSanitizer";

const appFolder = "./src/app/[lng]";

const getRecursiveFiles = (srcpath: string): string[] => {
  return fs
    .readdirSync(srcpath, {
      withFileTypes: true,
    })
    .flatMap((file) => {
      const relativePath = `${srcpath}/${file.name}`;
      if (file.isDirectory()) {
        return getRecursiveFiles(relativePath);
      } else {
        return relativePath;
      }
    });
};

const remapAppFiles = (files: string[]) => {
  const appPageFile = "/page.tsx";

  const removeRootPath = (file: string) =>
    file.substring(appFolder.length, file.length);
  const removeExtension = (file: string) => file.split(".")[0];
  const removePage = (file: string) => {
    const filePath = file.substring(
      0,
      file.length - removeExtension(appPageFile).length
    );
    return filePath === "" ? "/" : filePath;
  };

  return files
    .filter((file) => file.indexOf("/.") === -1) //remove all hidden files, like .DS_Store
    .filter((file) => file.lastIndexOf(".test.") === -1) //remove all test files
    .filter((file) => file.endsWith(appPageFile))
    .map((file) => sanitizePath(removePage(removeExtension(removeRootPath(file)))));
};

const allAppFiles = getRecursiveFiles(appFolder);
const allRemappedFile = remapAppFiles(allAppFiles);

export const allPages = allRemappedFile.filter(path => path !== "/sitemap").sort((a, b) => a.localeCompare(b))