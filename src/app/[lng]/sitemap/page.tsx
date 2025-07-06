import { Fragment, memo, useMemo } from "react"
import { allPages } from "./sitemapConstructor"
import { getTranslation } from "@/i18n";
import { generateSiteMeta } from "@/util/generateMeta";
import { Metadata } from "next";
import { Link } from "@/components/Link";
import { TranslatorProps, withTranslator } from "@/components/util/hoc/withTranslator";

type Props = {
  params: Promise<{ lng: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { lng } = await params
  const { t } = await getTranslation(lng, "pages")

  return generateSiteMeta(lng, t('headers.sitemap.title'), t('headers.sitemap.description'))
}

const calcMargin = (path: string) => {
  if (path === "/") {
    return "ml-2"
  } else {
    return `ml-${path.split('/').length * 4}`
  }
}

const SiteMap = ({ t, lng }: TranslatorProps) => {
  function translatePath(path: string) {
    const givenPathName = path.substring(path.lastIndexOf("/") + 1)

    if (givenPathName === "")
      return t(`headers.default`)

    const camelCasePath = givenPathName.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
    return t(`headers.${camelCasePath}.title`)
  }

  const draw = (paths: string[]) => {
    return (
      <ul className="pl-4">
        {paths.map((path, index) => (
          <Fragment key={`${index}-${path}`}>
            <li className={`pb-2 ${calcMargin(path)}`}>
              <Link href={`${path}${path === "/" ? lng : "/" + lng}`}>{translatePath(path)}</Link>
            </li>
          </Fragment>
        ))}
      </ul>
    )
  }

  return (
    <main className="mb-24 mx-8">
      <h1 className="text-4xl font-bold text-center my-10">{t('headers.sitemap.title')}</h1>
      {draw(allPages)}
    </main>
  )
}

export default withTranslator(SiteMap, "pages");
