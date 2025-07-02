import Styles from "./about-us.module.css";
import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";
import { Link } from "@/components/Link";
import { withTranslator, TranslatorProps } from "@/components/util/hoc/withTranslator";

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
      <main className={Styles["about-us"]}>
        <h1 className="text-4xl text-center font-bold my-10">
          {t('aboutUs.title')}
        </h1>
        <article
          className="primary anchor-link-header"
          id={miniLinks[0].hashId}
        >
          <h2 className="text-4xl text-center font-bold">
            {miniLinks[0].title}
          </h2>
          <p className="mt-10">
            {t("aboutUs.aboutWalcron.description")}
          </p>
          <p className="mt-10">
            {t("aboutUs.aboutWalcron.desription2")}
          </p>
          <ul className="list-disc">
            {(t("aboutUs.aboutWalcron.descriptionSupport", { returnObjects: true }) as string[])?.map(
                obj => <li key={obj}>obj</li>
            )}
          </ul>
        </article>
        <article className="anchor-link-header" id={miniLinks[1].hashId}>
          <h3 className="text-xl font-bold">
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
          <h4 className="text-xl font-bold">
            {miniLinks[2].title}
          </h4>
          <p>
            {t("aboutUs.vision.description")} 
          </p>
          <ul className="list-disc">
            {(t("aboutUs.vision.descriptionSupport", { returnObjects: true }) as string[])?.map(
                obj => <li key={obj}>obj</li>
            )}
          </ul>
        </article>
      </main>
    </>
  );
}

export default withTranslator(About, "pages")