import Image from "next/image";

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

export function Footer({
  companyName,
  operatingTime,
  address,
  contact,
  partners,
}: FooterProps) {
  const currentYearUpdated = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div className="border-b"></div>
        <div></div>
        <div className="border-b"></div>
        <small>&copy; {companyName}</small>
        <section>
          <ul>
            <li>
              <h3>Operation Hours:</h3>
            </li>
            <li>
              {operatingTime.day.from} - {operatingTime.day.to}
            </li>
            <li>
              {operatingTime.time.from} - {operatingTime.time.to}
            </li>
            {operatingTime.exception && <li> {operatingTime.exception}</li>}
          </ul>
          <ul>
            <li>
              <h3>Address:</h3>
            </li>
            <li>{address.street},</li>
            {address.city && <li>{address.city},</li>}
            <li>{address.state},</li>
            <li>
              {address.postalCode} {address.country}.
            </li>
          </ul>
          <ul>
            <li>
              <h3>Contact</h3>
            </li>
            <li>{contact.phone}</li>
            {contact.email && <li>{contact.email}</li>}
          </ul>
        </section>
        <section>
          <h3>Partners:</h3>
          <ul>
            {partners.map(({ url, imageSrc, alt }, idx) => (
              <li key={`foorter-partner-${idx}`}>
                <a href={url}>
                  <Image src={imageSrc} alt={alt} width={100} height={100} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div>Website is maintained from 2021 - {currentYearUpdated}</div>
    </footer>
  );
}
