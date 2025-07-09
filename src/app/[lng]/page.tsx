import Image from "next/image";
import { withTranslator, TranslatorProps } from "@/components/util/hoc/withTranslator";

function Home({ t }: TranslatorProps) {

  return (
    <main className="no-margin-y">
      How good is the program<br/>
      How good is the program<br/>
      How good is the program<br/>
      How good is the program<br/>
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
    </main>
  );
}

export default withTranslator(Home, "pages")
