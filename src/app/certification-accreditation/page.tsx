import MiniMenu from "@/components/MiniMenu";
import { Link } from "@/components/Link";
import { mBoRLinks, miniLinks, seazaLink } from "./config";

export default function Certification() {
  return (
    <>
      <MiniMenu model={miniLinks} />
      <main>
        <h1 className="text-4xl text-center font-bold mt-10">
          Accreditation / Certification
        </h1>
        <article className="anchor-link-header" id={miniLinks[0].hashId}>
          <h2 className="text-2xl font-bold">{miniLinks[0].title}</h2>
          <ul>
            {mBoRLinks.map((certificate) => (
              <li key={certificate.title} className={"mt-4"}>
                <Link
                  href={`/docs/certification/malaysia-book-of-records/${certificate.link}`}
                  download={true}
                  rel="external"
                >
                  &gt; &gt; {certificate.title}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <hr />
        <article className="anchor-link-header" id={miniLinks[1].hashId}>
          <h3 className="text-2xl font-bold">{miniLinks[1].title}</h3>
          <ul>
            {seazaLink.map((certificate) => (
              <li key={certificate.title} className={"mt-4"}>
                <Link
                  href={`/docs/certification/seaza/${certificate.link}`}
                  download={true}
                  rel="external"
                >
                  &gt; &gt; {certificate.title}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </>
  );
}
