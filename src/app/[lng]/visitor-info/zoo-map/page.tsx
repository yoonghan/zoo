import { ButtonLink } from "@/components/Button";
import {
  TranslatorProps,
  withTranslator,
} from "@/components/util/hoc/withTranslator";
import Image from "next/image";

function ZooMap({ t }: TranslatorProps) {
  return (
    <main>
      <article className="primary">
        <h1 className="text-4xl text-center font-bold">Zoo Map</h1>
        <hr />
        <div className="py-8 text-center">
          <p>To explore our zoo download it.</p>
          <div className="mt-6">
            <ButtonLink
              href="/images/zoo-negara-map.jpg"
              download={true}
              styling="Secondary"
            >
              Download Map
            </ButtonLink>
          </div>
        </div>
        <div>
          <Image
            src="/images/zoo-negara-map-web-1.jpg"
            alt="Zoo Negara Map"
            width={2200}
            height={1100}
            className="clear-both"
          />
          <Image
            src="/images/zoo-negara-map-web-2.jpg"
            alt="Zoo Negara Map"
            width={2200}
            height={1227}
            className="clear-both"
          />
        </div>
      </article>
    </main>
  );
}

export default withTranslator(ZooMap);
