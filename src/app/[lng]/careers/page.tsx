import { Link } from "@/components/Link";
import { TranslatorProps, withTranslator } from "@/components/util/hoc/withTranslator";
import { zooProfile } from "@/config/profile";
import { getTranslation } from "@/i18n";
import { generateSiteMeta } from "@/util/generateMeta";
import { Metadata } from "next";


type Props = {
  params: Promise<{ lng: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { lng } = await params
  const { t } = await getTranslation(lng, "pages")

  return generateSiteMeta(lng, t('headers.careers.title'), t('headers.careers.description'))
}

function Career({ t }: TranslatorProps) {
  return (
    <main className="pb-48">
      <section className="text-center">
        <h1 className="text-4xl font-bold pb-8">{t('careers.title')}</h1>
        <article>
          <p className="pb-16">{t('careers.description')}</p>

          <Link
            href={zooProfile.careerLink}
            className="hover:underline p-4 text-xl"
            target="_blank" rel="alternate"
          >{t('careers.officialCareerLinkText')}</Link>

          <p className="py-8 text-2xl">{t('careers.OR')}</p>


          <Link
            href={`mailto:${zooProfile.contactus.hrEmail}`}
            className="hover:underline text-xl"
          >{t('careers.emailToZoo')}</Link>
        </article>
      </section>
    </main>
  );
}

export default withTranslator(Career, "pages")