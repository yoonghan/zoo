import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";
import { zooHighlights } from "@/config/highlights";
import Image from "next/image";

const miniLinks: MiniMenuItems[] = [
  {
    hashId: "jom-memancing",
    title: "Jom Memancing",
  },
  {
    hashId: "zoo-camping",
    title: "Camping",
  },
];

export default function Highlights() {
  return (
    <>
      <main>
        <h1 className="text-4xl font-bold text-center">Highlights</h1>
        <article id={miniLinks[0].hashId}>
          <h2 className="text-2xl font-bold mb-4">{miniLinks[0].title}</h2>
          <div className="flex flex-col md:flex-row">
            <Image
              src="/images/highlights/zoo-negara-fishing.jpg"
              alt="Zoo Negara Fishing"
              width="1026"
              height="705"
            />
            <Image
              src="/images/highlights/zoo-negara-fishing-2.jpg"
              alt="Zoo Negara Fishing"
              width="1026"
              height="705"
            />
          </div>
        </article>
      </main>
    </>
  );
}
