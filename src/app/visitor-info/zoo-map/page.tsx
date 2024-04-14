import { ButtonLink } from "@/components/Button";
import Image from "next/image";

export default function ZooMap() {
  return (
    <>
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
              src="/images/zoo-negara-map-web.jpg"
              alt="Zoo Negara Map"
              width={1000}
              height={1058}
            />
          </div>
        </article>
      </main>
    </>
  );
}
