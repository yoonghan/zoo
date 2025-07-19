import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import {
  TranslatorProps,
  withTranslator,
} from "@/components/util/hoc/withTranslator";
import Image from "next/image";
import { getTranslation } from "@/i18n";
import { generateSiteMeta } from "@/util/generateMeta";

type Props = {
  params: Promise<{ lng: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "pages");

  return generateSiteMeta(
    lng,
    t("headers.zooMap.title"),
    t("headers.zooMap.description")
  );
}

function ZooMap({ t }: TranslatorProps) {
  return (
    <main className="no-margin-y">
      <article className="primary">
        <h1>{t("visitorInfo.zooMap.title")}</h1>
        <div className="py-8 text-center">
          <p>{t("visitorInfo.zooMap.description")}</p>
          <p className="italic text-red-300">
            * {t("visitorInfo.zooMap.info")}
          </p>
          <div className="mt-6">
            <ButtonLink
              href="/images/zoo-negara-map.jpg"
              download={true}
              styling="Secondary"
            >
              {t("visitorInfo.zooMap.downloadMapBtn")}
            </ButtonLink>
          </div>
        </div>
        <div>
          <Image
            src="/images/zoo-negara-map-1.webp"
            alt="Top Zoo Negara Map"
            width={2200}
            height={700}
            className="clear-both"
          />
          <Image
            src="/images/zoo-negara-map-2.webp"
            alt="Center Zoo Negara Map"
            width={2200}
            height={720}
            className="clear-both"
          />
          <Image
            src="/images/zoo-negara-map-3.webp"
            alt="Bottom Zoo Negara Map"
            width={2200}
            height={915}
            className="clear-both"
          />
        </div>
      </article>
    </main>
  );
}

export default withTranslator(ZooMap, "pages");
