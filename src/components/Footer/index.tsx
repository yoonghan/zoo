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
};

export function Footer({
  companyName,
  operatingTime,
  address,
  contact,
}: FooterProps) {
  return (
    <>
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
      </div>
    </>
  );
}
