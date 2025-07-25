import Image from "next/image";
import { withTranslator, TranslatorProps } from "@/components/util/hoc/withTranslator";

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
    </main>
  );
}

export default withTranslator(Home, "pages")
