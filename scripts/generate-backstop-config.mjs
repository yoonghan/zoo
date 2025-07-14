import fs from 'fs'
import backstopConfigJson from "./origin.backstop.json" with {type: "json"}

/** backstop config file to create **/
const backstopConfigFile = "./backstop.json"

/** base url */
const baseUrl = "http://localhost:3000".replace(/\/$/, "")

/** set as no image load */
const isNoImageTest = process.env.LOAD_NO_IMAGE

/** postfix reference folder */
const refFolderPostfix = process.env.REF_FOLDER_POSTFIX

/** standard page config */
const backStopConfigFor = (page) => {
  return {
    "misMatchThreshold": 0.3,
    "requireSameDimensions": false,
    "delay": 500,
  }
}

/** Test every page created, this code is a duplicate of siteGenerator [S]**/
const appFolder = "./src/app/[lng]";

const getRecursiveFiles = (srcpath) => {
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

const remapAppFiles = (files) => {
  const appPageFile = "/page.tsx";

  const removeRootPath = (file) =>
    file.substring(appFolder.length, file.length);
  const removeExtension = (file) => file.split(".")[0];
  const removePage = (file) => {
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
    .map((file) => removePage(removeExtension(removeRootPath(file))));
};

const allAppFiles = getRecursiveFiles(appFolder);
const allRemappedFile = remapAppFiles(allAppFiles);

/** Test every page created [E] **/

/* Add snapshot for each new page.ts created */
allRemappedFile.sort().forEach(pathToTest => {
  backstopConfigJson.scenarios.push({
    "label": `${pathToTest}`,
    "url": `${baseUrl}/en${pathToTest === "/" ? "" : pathToTest}?version=none`,
    "loadNoImage": isNoImageTest,
    ...backStopConfigFor(pathToTest)
  })
})

/* Add page not found */
backstopConfigJson.scenarios.push({
  "label": "Page Not Found",
  "url": `${baseUrl}/en/not-found-page`,
  "loadNoImage": isNoImageTest,
  "misMatchThreshold": 0.4,
  "requireSameDimensions": false,
  "delay": 300,
})

/* Reference postfix if wanted to save in different refs */
if(refFolderPostfix && refFolderPostfix !== '') {
  backstopConfigJson.paths.bitmaps_reference = `${backstopConfigJson.paths.bitmaps_reference}_${refFolderPostfix}`
}

fs.writeFile(backstopConfigFile, JSON.stringify(backstopConfigJson, null, 4), function writeJSON(err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(backstopConfigJson));
  console.log('writing to ' + backstopConfigFile);
});
