import { Link } from "@/components/Link";
import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";
import styles from "./kiosks-n-facilities.module.css";
import Image from "next/image";

const miniLinks: MiniMenuItems[] = [
  {
    title: "Food",
    hashId: "food",
  },
  {
    title: "Souvenir Shop",
    hashId: "souvenir-shop",
  },
  {
    title: "Facilities",
    hashId: "facilities",
  },
];

export default function KiosksAndFacilities() {
  return (
    <>
      <MiniMenu model={miniLinks} />
      <main>
        <h1 className="text-4xl text-center font-bold">
          Kiosks And Facilities
        </h1>

        <hr className="mt-8" />

        <article
          className="anchor-link-header text-center primary"
          id={miniLinks[0].hashId}
        >
          <h2 className="text-2xl font-bold">{miniLinks[0].title}</h2>
          <p>
            Besides lot&apos;s of things to do, you can enjoy a meal here too.
          </p>
          <div className={styles.kiosks}>
            <ul>
              <li>
                <strong>The Wild Restaurant</strong>
                <p>
                  Located at the heart of Zoo Negara, the Wild Restaurant is
                  definitely your family restaurant. Catering a wide range of
                  delicious fast food and mouth watering finger food at an
                  affordable price, the Wild Restaurant offer various food for
                  your friends and family.
                </p>
                <p>
                  <i className="text-sm">* Prices vary (price list 2019)</i>
                </p>
                <Link
                  href="/images/visitor-info/food/wild-fast-food.jpg"
                  download={true}
                  styling="Secondary"
                >
                  &gt;&gt; Download Menu
                </Link>
              </li>
              <li>
                <strong>Mane Delicious</strong>
                <p>
                  For those interested in cooling and delicious deserts, head on
                  to this cafe for some famous &quot;Ais Kacang&quot; or
                  &quot;Cendol&quot;!
                </p>
              </li>
              <li>
                <strong>Panda Cafe</strong>
                <p>
                  Looking for a Malaysian food? Then drop by at Panda Cafe for
                  its delicious nasi lemak, curry mee, fried mee hoon and other
                  dishes all guaranteed to satisfy a hungry tummy!
                </p>
              </li>
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
              <li>
                <strong>Kancil Souvenir Shop & Kyoto Enterprise</strong>
                <p>
                  Looking for some really unique gifts? Kancil Souvenir Shop and
                  Kyoto Enterprise provide gifts for you to take home!
                </p>
              </li>
              <li>
                <strong>Zoovenir Shop</strong>
                <p>
                  Located inside Giant Panda Conservation Centre and in front of
                  Savannah.
                </p>
                <p>
                  Hunting for an exclusive Giant Panda merchandise? Drop by to
                  Zoovenir Shop.
                </p>
              </li>
              <li>
                <strong>Bee Museum</strong>
                <p>
                  Come and visit our giant bees! The largest honey producer in
                  Malaysia is now in Zoo Negara.
                </p>
              </li>
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
            <figure>
              <Image
                src="/images/visitor-info/surau.jpg"
                width={365}
                height={271}
                alt="surau"
              />
              <figcaption>
                <strong>Prayer Room / Surau</strong>
                <p>
                  An air-conditioned prayer room is provided with ample space
                  situated nearby the zoo&apos;s main entrance.
                </p>
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/images/visitor-info/freewifi.jpg"
                width={365}
                height={271}
                alt="surau"
              />
              <figcaption>
                <strong>Free Public Wifi</strong>
                <p>
                  Do you like being online all the time? Stay connected with our
                  free wifi that is available at the main entrance, show
                  amphitheatre and Giant Panda Conservation Centre.
                </p>
              </figcaption>
            </figure>
          </div>
        </article>
      </main>
    </>
  );
}
