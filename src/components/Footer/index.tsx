import Image from "next/image";
import { memo } from "react";
import labels from "./constant";
import { Link } from "../Link";

export type FooterProps = {
  companyName: string;
  operatingTime: {
    day: { from: string; to: string };
    time: { from: string; to: string };
    exception?: string;
  };
  address: {
    street: string;
    city?: string;
    state: string;
    postalCode: string | number;
    country: string;
  };
  partners: {
    imageSrc: string;
    url: string;
    alt: string;
  }[];
};

export function MutableFooter({
  companyName,
  operatingTime,
  address,
  partners,
}: FooterProps) {
  const currentYearUpdated = new Date().getFullYear();

  return (
    <footer className="p-6 border-t">
      <section>
        <article className="flex justify-between mt-6 max-w-xl text-center m-auto">
          <ul>
            <li>
              <h3>
                <strong>{labels.operationHours}:</strong>
              </h3>
            </li>
            <li>
              {operatingTime.day.from} - {operatingTime.day.to}
            </li>
            <li>
              {operatingTime.time.from} - {operatingTime.time.to}
            </li>
            {operatingTime.exception && <li> {operatingTime.exception}</li>}
          </ul>
          <div className="border-2 secondary-border my-4"></div>
          <ul>
            <li>
              <h3>
                <strong>{labels.address}:</strong>
              </h3>
            </li>
            <li>{address.street},</li>
            {address.city && <li>{address.city},</li>}
            <li>{address.state},</li>
            <li>
              {address.postalCode} {address.country}.
            </li>
          </ul>
        </article>
        <article className="mt-6 m-auto max-w-xl">
          <h3 className="mb-4 text-center">
            <strong>{labels.partners}:</strong>
          </h3>
          <ul className="flex gap-8 justify-center">
            {partners.map(({ url, imageSrc, alt }, idx) => (
              <div key={`footer-partner-${idx}`}>
                <Link href={url} target="_blank" rel="external">
                  <Image src={imageSrc} alt={alt} width={50} height={50} />
                </Link>
              </div>
            ))}
          </ul>
        </article>
      </section>
      <ul className="text-center mt-16 text-sm">
        <li>
          <Link href="/contact-us">{labels.contactUs}</Link>
        </li>
        <li>
          <Link href="/careers">{labels.careers}</Link>
        </li>
      </ul>
      <div className="text-center text-sm mt-8">
        <span>&copy; {companyName}</span>{" "}
        <span>{`- ${currentYearUpdated} ${labels.maintainedInfo}`}</span>
      </div>
    </footer>
  );
}

export const Footer = memo(MutableFooter, () => true);
