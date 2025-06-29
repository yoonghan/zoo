import { systemConfig } from "@/config/system";

export const generateSiteMeta = (lng: string, title: string, description: string) => (
  {
    metadataBase: new URL(systemConfig.url),
    title,
    description,
    alternates: {
      ...(lng !== "en" && { canonical: `/` }),
      languages: {
        "id": "/ms",
        "en": "/en",
        "ms": "/ms"
      }
    }
  }
)