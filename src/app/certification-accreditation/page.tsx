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
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="text-left">Award</th>
                <th className="text-left">Download links</th>
              </tr>
            </thead>
            <tbody>
              {mBoRLinks.map((certificate) => (
                <tr key={certificate.title} className="even:bg-gray-300">
                  <td>{certificate.title}</td>
                  <td>
                    <Link
                      href={`/docs/certification/malaysia-book-of-records/${certificate.link}`}
                      download={true}
                      rel="external"
                    >
                      Download PDF
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <hr />
        <article className="anchor-link-header" id={miniLinks[1].hashId}>
          <h3 className="text-2xl font-bold">{miniLinks[1].title}</h3>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="text-left">Award</th>
                <th className="text-left">Download links</th>
              </tr>
            </thead>
            <tbody>
              {seazaLink.map((certificate) => (
                <tr key={certificate.title}>
                  <td>{certificate.title}</td>
                  <td>
                    <Link
                      href={`/docs/certification/seaza/${certificate.link}`}
                      download={true}
                      rel="external"
                    >
                      Download PDF
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </main>
    </>
  );
}
