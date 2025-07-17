
import { systemConfig } from "@/config/system";

export const generateSiteMeta = (lng: string, title: string, description: string) => {
  /* c8 ignore next */
  const canonical = lng !== "en" ? { canonical: `/` } : {}

  return (
    {
      metadataBase: new URL(systemConfig.url),
      title,
      description,
      alternates: {
        ...canonical,
        languages: {
          "id": "/ms",
          "en": "/en",
          "ms": "/ms"
        }
      }
    }
  )
}