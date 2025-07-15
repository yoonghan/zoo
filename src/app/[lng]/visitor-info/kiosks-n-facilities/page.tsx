import { Link } from "@/components/Link";
import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";
import styles from "./kiosks-n-facilities.module.css";
import Image from "next/image";

import { getTranslation } from "@/i18n";
import { generateSiteMeta } from "@/util/generateMeta";
import { Metadata } from "next";
import { TranslatorProps, withTranslator } from "@/components/util/hoc/withTranslator";


type Props = {
  params: Promise<{ lng: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { lng } = await params
  const { t } = await getTranslation(lng, "pages")

  return generateSiteMeta(lng, t('headers.kiosksNFacilities.title'), t('headers.kiosksNFacilities.description'))
}

function KiosksAndFacilities({ t }: TranslatorProps) {

  const foods = t('kiosksNFacilities.food.restaurants', { returnObjects: true }) as { title: string, description: string }[]
  const souvenirs = t('kiosksNFacilities.souvenir.shops', { returnObjects: true }) as { title: string, description: string }[]
  const facilities = t('kiosksNFacilities.facilities.facilities', { returnObjects: true }) as { title: string, description: string, image: string, imageAlt: string }[]


  const miniLinks: MiniMenuItems[] = [
    {
      title: t('kiosksNFacilities.food.title'),
      hashId: "food",
    },
    {
      title: t('kiosksNFacilities.souvenir.title'),
      hashId: "souvenir-shop",
    },
    {
      title: t('kiosksNFacilities.facilities.title'),
      hashId: "facilities",
    },
  ];

  return (
    <>
      <MiniMenu model={miniLinks} />
      <main>
        <h1>
          {t('kiosksNFacilities.title')}
        </h1>
        <article
          className="anchor-link-header text-center primary"
          id={miniLinks[0].hashId}
        >
          <h2 className="text-2xl font-bold pb-4">{miniLinks[0].title}</h2>
          <p>
            {t('kiosksNFacilities.food.description')}
          </p>
          <div className={styles.kiosks}>
            <ul>
              {foods.map(food => <li key={food.title}>
                <strong>{food.title}</strong>
                <p>{food.description}</p>
              </li>)
              }
            </ul>
          </div>
        </article>

        <article
          className="anchor-link-header text-left"
          id={miniLinks[1].hashId}
        >
          <h3 className="text-2xl font-bold text-center">
            {miniLinks[1].title}
          </h3>
          <div className={styles.kiosks}>
            <ul>
              {souvenirs.map(souvenir => <li key={souvenir.title}>
                <strong>{souvenir.title}</strong>
                <p>{souvenir.description}</p>
              </li>)
              }
            </ul>
          </div>
        </article>

        <article
          className="anchor-link-header text-left primary"
          id={miniLinks[2].hashId}
        >
          <h4 className="text-2xl font-bold text-center">
            {miniLinks[2].title}
          </h4>
          <div className={styles.facilities}>
            {facilities.map(facility =>
              <figure key={facility.title}>
                <Image
                  src={facility.image}
                  width={365}
                  height={271}
                  alt={facility.imageAlt}
                />
                <figcaption>
                  <strong>{facility.title}</strong>
                  <p>{facility.description}</p>
                </figcaption>
              </figure>
            )}
          </div>
        </article>
      </main>
    </>
  );
}

export default withTranslator(KiosksAndFacilities, "pages");