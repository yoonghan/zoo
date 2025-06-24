import fs from 'fs'
import backstopConfigJson from "./origin.backstop.json" with {type: "json"}
    
/** backstop config file to create **/
const backstopConfigFile = "./backstop.json"

/** base url */
const baseUrl = "http://localhost:3000".replace(/\/$/,"")

/** standard page config */
const backStopConfigFor = (page) => {
  return {
    "misMatchThreshold": 0.3,
    "requireSameDimensions": false
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
  const appLayoutFile = "/layout.tsx";

  const removeRootPath = (file) =>
    file.substring(appFolder.length, file.length);
  const removeExtension = (file ) => file.split(".")[0];
  const removePage = (file) => {
    const filePath = file.substring(
      0,
      file.length - removeExtension(appLayoutFile).length
    );
    return filePath === "" ? "/" : filePath;
  };

  return files
    .filter((file) => file.indexOf("/.") === -1) //remove all hidden files, like .DS_Store
    .filter((file) => file.lastIndexOf(".test.") === -1) //remove all test files
    .filter((file) => file.endsWith(appLayoutFile))
    .map((file) => removePage(removeExtension(removeRootPath(file))));
};

const allAppFiles = getRecursiveFiles(appFolder);
const allRemappedFile = remapAppFiles(allAppFiles);

/** Test every page created [E] **/

/* Add snapshot for each new page.ts created */
allRemappedFile.sort().forEach(pathToTest => {
   backstopConfigJson.scenarios.push({
      "label": `${pathToTest}`,
      "url": `${baseUrl}/en${pathToTest}?version=none`, 
      ...backStopConfigFor(pathToTest)
   })
})

fs.writeFile(backstopConfigFile, JSON.stringify(backstopConfigJson, null, 4), function writeJSON(err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(backstopConfigJson));
  console.log('writing to ' + backstopConfigFile);
});
