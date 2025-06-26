import { systemConfig } from "@/config/system";
import { allRemappedFile } from "@/util/sitegenerator/pages";
import { MetadataRoute } from "next";

export const dynamic = "force-static"

const getPriorityAndFrequency = (
  path: string
): {
  priority: number;
  changeFrequency: "weekly" | "yearly";
} => {
  if(/^\/\w{2}\/$/.test(path)) {
    return { priority: 0.9, changeFrequency: "weekly" };
  } else {
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
}).concat({
  url: `${systemConfig.url}/`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
});

const handler = (): MetadataRoute.Sitemap => generatedSiteMap;

export default handler;
