import Image from "next/image";
import { memo } from "react";
import { Link } from "../Link";
import { Version } from "./Version";

export type FooterProps = {
  companyName: string;
  operatingTime: {
    day: { from: string; to: string };
    time: { from: string; to: string };
    lastAdmissionTime: string;
  };
  address: {
    street: string;
    city?: string;
    state: string;
    postalCode: string | number;
    country: string;
    googleMaps: string;
  };
  partners: {
    imageSrc: string;
    url: string;
    alt: string;
  }[];
};

function MutableFooter({
  language,
  companyName,
  operatingTime,
  address,
  partners,
  labels
}: FooterProps & {
  language: string, labels: {
    operationHours: string,
    address: string,
    partners: string,
    maintainedInfo: string,
    contactUs: string,
    careers: string,
    faq: string,
    sitemap: string
  }
}) {

  const currentYearUpdated = new Date().getFullYear();

  return (
    <footer className="border-t pb-6 bg-slate-100">
      <div className="mx-4">
        <div className="flex flex-col md:flex-row justify-around mt-6 max-w-xl md:text-center m-auto">
          <article>
            <strong>{labels.operationHours}:</strong>
            <ul>
              <li>
                {operatingTime.day.from} - {operatingTime.day.to}
              </li>
              <li>
                {operatingTime.time.from} - {operatingTime.time.to}
              </li>
              <li className="text-sm">({operatingTime.lastAdmissionTime})</li>
            </ul>
          </article>
          <div className="border-2 secondary-border my-4"></div>
          <article>
            <strong>{labels.address}:</strong>
            <ul>
              <li>{address.street},</li>
              {address.city && <li>{address.city},</li>}
              <li>{address.state},</li>
              <li>
                {address.postalCode} {address.country}.
              </li>
            </ul>
          </article>
        </div>
        {partners.length > 0 && <article className="mt-10 m-auto max-w-xl md:text-center">
          <strong>{labels.partners}:</strong>
          <ul className="flex gap-8 md:justify-center mt-4">
            {partners.map(({ url, imageSrc, alt }, idx) => (
              <li key={`footer-partner-${idx}`}>
                <Link href={url} target="_blank" rel="external">
                  <Image src={imageSrc} alt={alt} width={50} height={50} />
                </Link>
              </li>
            ))}
          </ul>
        </article>}
      </div>
      <hr className="my-4 border-t"></hr>
      <ul className="text-center text-sm leading-10">
        <li>
          <Link href={`/${language}/contact-us`}>{labels.contactUs}</Link>
        </li>
        <li>
          <Link href={`/${language}/careers`}>{labels.careers}</Link>
        </li>
        <li>
          <Link href={`/${language}/frequent-asked-questions`}>{labels.faq}</Link>
        </li>
        <li>
          <Link href={`/${language}/sitemap`}>{labels.sitemap}</Link>
        </li>
      </ul>
      <hr className="my-4 border-t"></hr>
      <div className="text-center text-sm mt-4">
        <span>&copy; {companyName}</span>{" "}
        <span>{`- ${currentYearUpdated} ${labels.maintainedInfo}`}</span>
        <Version version={process.env.RELEASE_VERSION || 'local'} />
      </div>
    </footer>
  );
}

export const Footer = memo(MutableFooter, () => true);
