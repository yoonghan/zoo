import { ButtonLink } from "@/components/Button";
import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";
import { zooProfile } from "@/config/profile";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import styles from "./visitor-info.module.css";
import { withTranslator, TranslatorProps } from "@/components/util/hoc/withTranslator";

const miniLinks: MiniMenuItems[] = [
  {
    title: "Opening Hours",
    hashId: "opening-hours",
  },
  {
    title: "Admission Ticket",
    hashId: "admission-ticket",
  },
  {
    title: "Rental",
    hashId: "rental",
  },
  {
    title: "Tram Ride",
    hashId: "tram-ride",
  },
];

function VisitorInfo({ t }: TranslatorProps) {
  return (
    <>
      <MiniMenu model={miniLinks} />
      <main>
        <h1 className="text-4xl text-center font-bold my-10">Visitor Info</h1>

        <article
          className="anchor-link-header text-center primary"
          id={miniLinks[0].hashId}
        >
          <h2 className="text-2xl font-bold">{miniLinks[0].title}</h2>
          <div className="mt-4">Zoo Opens Daily from:</div>
          <div className="mt-2 text-xl font-bold">
            {zooProfile.operatingTime.day.from} to{" "}
            {zooProfile.operatingTime.day.to}
          </div>
          <div className="mt-2">
            ({zooProfile.operatingTime.time.from} to{" "}
            {zooProfile.operatingTime.time.to})
          </div>
          <div className="italic text-sm mt-8">(* {t('footer.lastAdmission', { "time": zooProfile.operatingTime.lastAdmissionTime })})</div>
        </article>

        <article
          className="anchor-link-header text-center"
          id={miniLinks[1].hashId}
        >
          <h3 className="text-2xl font-bold">{miniLinks[1].title}</h3>
          <p>Please get your admission ticket valid</p>
          <div className="mt-8">
            <ButtonLink href={zooProfile.ticket.admission.url} styling="BuyNow">
              <FontAwesomeIcon
                icon={faTicket}
                className="inline mr-4"
                width={20}
              />
              {t("Buy Ticket")}
            </ButtonLink>
          </div>
          <div className="mt-16 text-left">
            <strong>Additional Information:</strong>
            <ol className="list-decimal ml-6">
              <li>
                Please bring along your identity passport / ID card at the
                ticket counter for verification purposes.
              </li>
              <li>
                <i className="text-yellow-700">Free Admission</i> - Children
                below 36 months old, enters for free.
              </li>
              <li>
                <i className="text-yellow-700">Free Admission</i> - For
                OKU/Disable. Please show a valid OKU card.
              </li>
              <li>
                All price exchange are in{" "}
                <strong>Malaysian Ringgit (MYR)</strong>
              </li>
            </ol>
          </div>
        </article>

        <article
          className="anchor-link-header text-center primary"
          id={miniLinks[2].hashId}
        >
          <h4 className="text-2xl font-bold">{miniLinks[2].title}</h4>

          <div className={styles.rental}>
            <figure>
              <Image
                src="/images/visitor-info/wheelchair.jpg"
                width={365}
                height={271}
                alt="rental wheelchair"
              />
              <figcaption>
                <strong>WheelChair</strong>
                <p>
                  A wheelchair service on a first come first served basis is
                  available at the Information Counter B. Rental fee is RM5.00
                  and a refundable deposit for RM50.00 is required.
                </p>
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/images/visitor-info/stroller.jpg"
                width={365}
                height={271}
                alt="rental stroller"
              />
              <figcaption>
                <strong>Baby Strollers</strong>
                <p>
                  A baby stroller service is available now at our new stroller
                  station. This baby stroller is sponsored by Mother Care.
                  Stroller service is available at the Information Counter B on
                  a first come first served basis.
                </p>
                <p>
                  Rental fee is RM20.00. A refundable deposit of RM50.00 is
                  required.
                </p>
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/images/visitor-info/locker.jpg"
                width={365}
                height={271}
                alt="rental locker"
              />
              <figcaption>
                <strong>Lockers</strong>
                <p>
                  The lockers are available at Ticket Counter for storage of
                  personal belongings. Rental fee is RM2.00.
                </p>
              </figcaption>
            </figure>
          </div>
        </article>

        <article className="anchor-link-header" id={miniLinks[3].hashId}>
          <h4 className="text-2xl font-bold">{miniLinks[3].title}</h4>

          <div className="mt-4">
            <strong>Tram Station Price</strong>
            <table className="mt-2 w-full">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>With MyKad</th>
                  <th>Without MyKad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adults</td>
                  <td>MYR 10.90</td>
                  <td>MYR 14.90</td>
                </tr>
                <tr>
                  <td>
                    Children <br />
                    <i>(3 to 12 years old)</i>
                  </td>
                  <td>MYR 6.90</td>
                  <td>MYR 11.90</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-8">
              <strong>Additional Information:</strong>
              <ol className="list-decimal ml-6">
                <li>Tickets can be purchased at the zoo.</li>
                <li>
                  OKU - 10% discounted price (Please show a valid OKU card).
                </li>
                <li>Vip Booking - 1 hour, RM399.00.</li>
                <li>All rates are stated in Malaysian Ringgit (MYR).</li>
              </ol>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default withTranslator(VisitorInfo)