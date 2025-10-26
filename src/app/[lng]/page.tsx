import Image from "next/image";
import { withTranslator, TranslatorProps } from "@/components/util/hoc/withTranslator";
import { getTranslation } from "@/i18n";
import { generateSiteMeta } from "@/util/generateMeta";
import { Metadata } from "next";
import { postEmail } from "@/util/tempConfig";
import { ButtonLink } from "@/components/Button";

type Props = {
  params: Promise<{ lng: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { lng } = await params
  const { t } = await getTranslation(lng, "pages")

  return generateSiteMeta(lng, t('headers.default'), t('headers.defaultDescription'))
}

function Home({ t }: Readonly<TranslatorProps>) {


  return (
    <main>
      <Image
        src="/images/header.jpg"
        width={960}
        height={130}
        alt="Zoo logo"
      />
      <Image
        src="/images/home/zoo-negara-lion.jpg"
        width={960}
        height={320}
        alt="Zoo tiger in water"
      />
      <article className="primary">
        <h1>
          {t('homepage.welcome')}
        </h1>
        <figure>
          <figcaption className="mb-4">
            <span>{t('homepage.introduction')}</span>
            <span className="text-sm italic"> - {t('homepage.introductionRemark')}</span>
          </figcaption>
          <Image
            src="/images/home/zoo-negara-entrance.jpg"
            alt="Zoo Entrance"
            width={200}
            height={185}
            className="m-auto"
          />
        </figure>
      </article>
      <article className="secondary align-center">
        <h2 className="text-2xl py-8 text-center font-bold">
          {t('homepage.help.title')}
        </h2>
        <p>
          {t('homepage.help.description')}
        </p>
        <div className="text-center py-8" >
          <ButtonLink href={`mailto:${postEmail}?subject=Contribution%20to%20Zoo%20Negara%20Website&body=Dear%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20contribute%20to%20the%20Zoo%20Negara%20website.%20Please%20let%20me%20know%20how%20I%20can%20help.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Name]`} styling={"Primary"}>{t('homepage.help.contributeBtn')}</ButtonLink>
        </div>
      </article>
    </main>
  );
}

export default withTranslator(Home, "pages")
