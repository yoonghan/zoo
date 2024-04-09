import Image from "next/image";
import { memo } from "react";
import labels from "./constant";

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
  contact: {
    phone: string;
    email?: string;
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
  contact,
  partners,
}: FooterProps) {
  const currentYearUpdated = new Date().getFullYear();

  return (
    <footer className="p-6 border-t">
      <section>
        <small>&copy; {companyName}</small>
        <article className="flex justify-between px-2 mt-6">
          <ul>
            <li>
              <h3>{labels.operationHours}:</h3>
            </li>
            <li>
              {operatingTime.day.from} - {operatingTime.day.to}
            </li>
            <li>
              {operatingTime.time.from} - {operatingTime.time.to}
            </li>
            {operatingTime.exception && <li> {operatingTime.exception}</li>}
          </ul>
          <div className="border-2"></div>
          <ul>
            <li>
              <h3>{labels.address}:</h3>
            </li>
            <li>{address.street},</li>
            {address.city && <li>{address.city},</li>}
            <li>{address.state},</li>
            <li>
              {address.postalCode} {address.country}.
            </li>
          </ul>
          <div className="border-2"></div>
          <ul>
            <li>
              <h3>{labels.contact}:</h3>
            </li>
            <li>
              <pre>{contact.phone}</pre>
            </li>
            {contact.email && <li>{contact.email}</li>}
          </ul>
        </article>
        <article className="mt-6">
          <h3>{labels.partners}:</h3>
          <ul className="flex gap-2">
            {partners.map(({ url, imageSrc, alt }, idx) => (
              <li key={`footer-partner-${idx}`}>
                <a href={url} target="_blank" rel="external">
                  <Image src={imageSrc} alt={alt} width={50} height={50} />
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <div className="text-center text-sm">
        {labels.maintainedInfo} 2021 - {currentYearUpdated}
      </div>
    </footer>
  );
}

export const Footer = memo(MutableFooter, () => true);
