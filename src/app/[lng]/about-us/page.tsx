import styles from "./about-us.module.css";
import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";
import { Link } from "@/components/Link";
import { withTranslator, TranslatorProps } from "@/components/util/hoc/withTranslator";
import { getTranslation } from "@/i18n";
import type { Metadata } from "next";
import { generateSiteMeta } from "@/util/generateMeta";

type Props = {
  params: Promise<{ lng: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { lng } = await params
  const { t } = await getTranslation(lng, "pages")

  return generateSiteMeta(lng, t('headers.aboutUs.title'), t('headers.aboutUs.description'))
}

function About({ t }: TranslatorProps) {

  const miniLinks: MiniMenuItems[] = [
    {
      hashId: "aboutWalcron",
      title: t('aboutUs.aboutWalcron.title'),
    },
    {
      hashId: "aboutZoo",
      title: t("aboutUs.aboutZoo.title"),
    },
    {
      hashId: "vision",
      title: t("aboutUs.vision.title"),
    }
  ];

  return (
    <>
      <MiniMenu model={miniLinks} />
      <main className={styles["about-us"]}>
        <h1 className="text-4xl text-center font-bold my-10">
          {t('aboutUs.title')}
        </h1>
        <article
          className="primary anchor-link-header"
          id={miniLinks[0].hashId}
        >
          <h2 className="text-4xl text-center font-bold pb-4">
            {miniLinks[0].title}
          </h2>
          <p className="mt-10">
            {t("aboutUs.aboutWalcron.description")}
          </p>
          <p className="mt-10">
            {t("aboutUs.aboutWalcron.desription2")}
          </p>
          <ul className="list-disc ml-8 mt-4">
            {(t("aboutUs.aboutWalcron.descriptionSupport", { returnObjects: true }) as string[])?.map(
              description => <li key={description}>{description}</li>
            )}
          </ul>
        </article>
        <article className="anchor-link-header" id={miniLinks[1].hashId}>
          <h3 className="text-2xl text-center font-bold pb-4">
            {miniLinks[1].title}
          </h3>
          <p>
            {t("aboutUs.aboutZoo.description")} [<Link href={t("aboutUs.aboutWalcron.descriptionWiki")}>1</Link>]
          </p>
        </article>
        <article
          className="primary anchor-link-header"
          id={miniLinks[2].hashId}
        >
          <h4 className="text-2xl text-center font-bold pb-4">
            {miniLinks[2].title}
          </h4>
          <p>
            {t("aboutUs.vision.description")}
          </p>
          <ul className="list-disc ml-8 mt-4">
            {(t("aboutUs.vision.descriptionSupport", { returnObjects: true }) as string[])?.map(
              description => <li key={description}>{description}</li>
            )}
          </ul>
        </article>
        <div className="anchor-link-header pb-8">
        </div>
      </main>
    </>
  );
}

export default withTranslator(About, "pages")
