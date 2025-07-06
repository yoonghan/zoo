import { Accordion, AccordionProps } from "@/components/Accordion";
import { TranslatorProps, withTranslator } from "@/components/util/hoc/withTranslator";
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

  return generateSiteMeta(lng, t('headers.frequentAskedQuestions.title'), t('headers.frequentAskedQuestions.description'))
}

function Faq({ t }: TranslatorProps) {

  const faq: AccordionProps = t("frequentAskedQuestions.zooFaq", { returnObjects: true }) as AccordionProps

  return (
    <>
      <main>
        <article>
          <h1 className="text-4xl font-bold text-center">
            {t("frequentAskedQuestions.title")}
          </h1>
          <div className="mt-8">
            <Accordion model={faq} groupName="faq" />
          </div>
        </article>
      </main>
    </>
  );
}

export default withTranslator(Faq, "pages");