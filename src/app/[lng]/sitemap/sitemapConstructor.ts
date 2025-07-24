import { allRemappedFile } from "@/util/sitegenerator/pages";

export const allPages = allRemappedFile.filter(path => path !== "/sitemap").sort((a, b) => a.localeCompare(b))
