import fs from "fs";

type PageConfig = {
  path: string;
  display: string;
};

const appFolder = "./src/app";

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
  const appLayoutFile = "/layout.tsx";

  const removeRootPath = (file: string) =>
    file.substring(appFolder.length, file.length);
  const removeExtension = (file: string) => file.split(".")[0];
  const removePage = (file: string) => {
    const filePath = file.substring(
      0,
      file.length - removeExtension(appLayoutFile).length
    );
    return filePath === "" ? "/" : filePath;
  };

  return files
    .filter((file: string) => file.indexOf("/.") === -1) //remove all hidden files, like .DS_Store
    .filter((file: string) => file.lastIndexOf(".test.") === -1) //remove all test files
    .filter((file) => file.endsWith(appLayoutFile))
    .map((file) => removePage(removeExtension(removeRootPath(file))));
};

const allAppFiles = getRecursiveFiles(appFolder);
export const allRemappedFile = remapAppFiles(allAppFiles);
