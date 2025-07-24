import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";
import { zooProfile } from "@/config/profile";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import styles from "./visitor-info.module.css";
import { withTranslator, TranslatorProps } from "@/components/util/hoc/withTranslator";
import { getTranslation } from "@/i18n";
import { generateSiteMeta } from "@/util/generateMeta";

type Props = {
  params: Promise<{ lng: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { lng } = await params
  const { t } = await getTranslation(lng, "pages")

  return generateSiteMeta(lng, t('headers.visitorInfo.title'), t('headers.visitorInfo.description'))
}

function OperatingHours({ t }: TranslatorProps) {
  return <>
    <div className="mt-2 text-xl font-bold">
      {t(zooProfile.operatingTime.day.from)} {t("to")}{" "}
      {t(zooProfile.operatingTime.day.to)}
    </div>
    <div className="mt-2">
      ({zooProfile.operatingTime.time.from} {t("to")}{" "}
      {zooProfile.operatingTime.time.to})
    </div>
    <div className="italic text-sm mt-8">(* {t('footer.lastAdmission', { "time": zooProfile.operatingTime.lastAdmissionTime })})</div>
  </>
}

const TranslatedOperatingHours = withTranslator(OperatingHours)

function VisitorInfo({ t, lng }: TranslatorProps) {

  const rentals = t("visitorInfo.rental.facilities", { returnObjects: true }) as { title: string, description: string, image: string, imageAlt: string }[]
  const additionalInformationNotes = t("visitorInfo.additionalInformationNotes", { returnObjects: true }) as string[]

  const miniLinks: MiniMenuItems[] = [
    {
      title: t('visitorInfo.openingHours.title'),
      hashId: "opening-hours",
    },
    {
      title: t('visitorInfo.admissionTicket.title'),
      hashId: "admission-ticket",
    },
    {
      title: t('visitorInfo.rental.title'),
      hashId: "rental",
    },
    {
      title: t('visitorInfo.tramRide.title'),
      hashId: "tram-ride",
    },
  ];

  return (
    <>
      <MiniMenu model={miniLinks} />
      <main>
        <h1>{t('visitorInfo.title')}</h1>
        <article
          className="anchor-link-header text-center primary"
          id={miniLinks[0].hashId}
        >
          <h2 className="text-2xl font-bold">{miniLinks[0].title}</h2>
          <div className="mt-4">{t('visitorInfo.openingHours.description')}</div>
          <TranslatedOperatingHours params={Promise.resolve({ lng })} />
        </article>

        <article
          className="anchor-link-header text-center"
          id={miniLinks[1].hashId}
        >
          <h3 className="text-2xl font-bold">{miniLinks[1].title}</h3>
          <p>{t('visitorInfo.admissionTicket.description')}</p>
          <div className="mt-8">
            <ButtonLink href={zooProfile.ticket.admission.url} styling="BuyNow">
              <FontAwesomeIcon
                icon={faTicket}
                className="inline mr-4"
                width={20}
              />
              {t("translation.buyTicket")}
            </ButtonLink>
          </div>
          <div className="mt-16 text-left">
            <strong>{t('visitorInfo.additionalInformationText')}:</strong>
            <ol className="list-decimal ml-6">
              <li>{t('visitorInfo.admissionTicket.additionalInformation.important')}</li>
              <li>
                <i className="text-yellow-700">{t('visitorInfo.admissionTicket.additionalInformation.free')}</i> - {t('visitorInfo.admissionTicket.additionalInformation.freeOne')}
              </li>
              <li>
                <i className="text-yellow-700">{t('visitorInfo.admissionTicket.additionalInformation.free')}</i> - {t('visitorInfo.admissionTicket.additionalInformation.freeTwo')}
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
            {rentals.map(rental =>
              <figure key={rental.title}>
                <Image
                  src={rental.image}
                  width={365}
                  height={271}
                  alt={rental.imageAlt}
                />
                <figcaption>
                  <strong>{rental.title}</strong>
                  <p>{rental.description}</p>
                </figcaption>
              </figure>
            )}
          </div>
        </article>

        <article className="anchor-link-header" id={miniLinks[3].hashId}>
          <h4 className="text-2xl font-bold">{miniLinks[3].title}</h4>

          <div className="mt-4">
            <div>{t("visitorInfo.tramRide.priceTable.description")}</div>
            <table className="mt-2 w-full">
              <thead>
                <tr>
                  <th>{t("visitorInfo.tramRide.priceTable.h1")}</th>
                  <th>{t("visitorInfo.tramRide.priceTable.h2")}</th>
                  <th>{t("visitorInfo.tramRide.priceTable.h3")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("visitorInfo.tramRide.priceTable.adult")}</td>
                  <td>MYR 10.90</td>
                  <td>MYR 14.90</td>
                </tr>
                <tr>
                  <td>{t("visitorInfo.tramRide.priceTable.children")}</td>
                  <td>MYR 6.90</td>
                  <td>MYR 11.90</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-8">
              <strong>{t("visitorInfo.additionalInformationText")}:</strong>
              <ol className="list-decimal ml-6">
                {additionalInformationNotes.map(additionalInformation =>
                  <li key={additionalInformation}>{additionalInformation}</li>
                )}
              </ol>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default withTranslator(VisitorInfo, "pages")
