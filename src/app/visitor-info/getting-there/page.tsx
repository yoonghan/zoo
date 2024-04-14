import { ButtonLink } from "@/components/Button";
import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";
import { zooProfile } from "@/config/profile";

const miniLinks: MiniMenuItems[] = [
  {
    title: "Address",
    hashId: "address",
  },
  {
    title: "Train",
    hashId: "train",
  },
  {
    title: "Bus",
    hashId: "bus",
  },
];

export default function GettingThere() {
  return (
    <>
      <MiniMenu model={miniLinks} />
      <main>
        <h1 className="text-4xl text-center font-bold">Getting There</h1>

        <hr className="mt-8" />

        <article
          className="anchor-link-header text-center primary"
          id={miniLinks[0].hashId}
        >
          <h2 className="text-2xl font-bold">{miniLinks[0].title}</h2>
          <div className="mt-2">
            <ul>
              <li>{zooProfile.address.street},</li>
              {zooProfile.address.city && <li>{zooProfile.address.city},</li>}
              <li>{zooProfile.address.state},</li>
              <li>
                {zooProfile.address.postalCode} {zooProfile.address.country}.
              </li>
            </ul>
            <div className="mt-8">
              <ButtonLink
                href={zooProfile.address.googleMaps}
                styling={"Secondary"}
                rel="external"
              >
                View In Google Maps
              </ButtonLink>
            </div>
          </div>
        </article>

        <article
          className="anchor-link-header text-left"
          id={miniLinks[1].hashId}
        >
          <h2 className="text-2xl font-bold text-center">
            {miniLinks[1].title}
          </h2>
          <div className="mt-4">
            The nearest transport is via{" "}
            <strong>Light Rail Transit System (LRT)</strong>:
            <ol className="list-decimal text-left mt-2 ml-6">
              <li>Alight at Wangsa Maju Station, Kelana Jaya Line.</li>
              <li>Board a taxi to Zoo Negara.</li>
              <li>
                or Board Rapid KL number <strong>253</strong> from Putra LRT
                Station, Wangsamaju, KL.
              </li>
            </ol>
          </div>
        </article>

        <article
          className="anchor-link-header text-left primary"
          id={miniLinks[2].hashId}
        >
          <h2 className="text-2xl font-bold text-center">
            {miniLinks[2].title}
          </h2>
          <div className="mt-4">
            <strong>Rapid KL is a</strong>:
            <ol className="list-decimal text-left mt-2 ml-6">
              <li>
                Rapid KL number <strong>253</strong> from Wangsa Maju Station,
                Kelana Jaya Line.
              </li>
              <li>
                Rapid KL number <strong>220</strong> from Lebuh Ampang, KL.
              </li>
            </ol>
          </div>
        </article>
      </main>
    </>
  );
}
