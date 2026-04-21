import type { MetadataRoute } from "next"
import { systemConfig } from "@/config/system"
import { languages } from "@/i18n/settings"
import { allRemappedFile } from "@/util/sitegenerator/pages"

export const dynamic = "force-static"

const generatedSiteMap: MetadataRoute.Sitemap = allRemappedFile
	.toSorted((a, b) => a.localeCompare(b))
	.map((sortedSiteMapPages) => {
		if (sortedSiteMapPages === "/") {
			return {
				url: `${systemConfig.url}/`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: 0.9,
				alternates: {
					languages: languages.reduce(
						(a, language) => ({
							// biome-ignore lint/performance/noAccumulatingSpread: Expected
							...a,
							[language]: `${systemConfig.url}/${language}`,
						}),
						{},
					),
				},
			}
		}

		return {
			url: `${systemConfig.url}/${languages[0]}${sortedSiteMapPages}`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.3,
			alternates: {
				languages: languages.reduce(
					(a, language) => ({
						// biome-ignore lint/performance/noAccumulatingSpread: Expected
						...a,
						[language]: `${systemConfig.url}/${language}${sortedSiteMapPages}`,
					}),
					{},
				),
			},
		}
	})

const handler = (): MetadataRoute.Sitemap => generatedSiteMap

export default handler