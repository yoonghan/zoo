import { systemConfig } from "@/config/system";
import { allRemappedFile } from "@/util/sitegenerator/pages";
import { MetadataRoute } from "next";

const getPriorityAndFrequency = (
  path: string
): {
  priority: number;
  changeFrequency: "weekly" | "yearly";
} => {
  switch (path) {
    case "/":
      return { priority: 0.9, changeFrequency: "weekly" };
    case "/about-us":
      return { priority: 0.8, changeFrequency: "yearly" };
    default:
      return { priority: 0.3, changeFrequency: "weekly" };
  }
};

const generatedSiteMap = allRemappedFile.sort().map((sortedSiteMapPages) => {
  const { priority, changeFrequency } =
    getPriorityAndFrequency(sortedSiteMapPages);
  return {
    url: `${systemConfig.url}${sortedSiteMapPages}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
});

const handler = (): MetadataRoute.Sitemap => generatedSiteMap;

export default handler;
