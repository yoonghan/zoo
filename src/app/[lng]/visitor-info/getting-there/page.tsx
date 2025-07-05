import { ButtonLink } from "@/components/Button";
import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";
import { zooProfile } from "@/config/profile";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faTrain, faCar } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-regular-svg-icons'

import { getTranslation } from "@/i18n";
import { generateSiteMeta } from "@/util/generateMeta";
import { Metadata } from "next";
import { TranslatorProps, withTranslator } from "@/components/util/hoc/withTranslator";
import { JSX } from "react";
import React from "react";

type Props = {
  params: Promise<{ lng: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { lng } = await params
  const { t } = await getTranslation(lng, "pages")

  return generateSiteMeta(lng, t('headers.gettingThere.title'), t('headers.gettingThere.description'))
}

type hashIds = "address" | "car" | "train" | "bus"

interface MiniMenuExtended extends MiniMenuItems {
  hashId: hashIds
}


const getLogo = (hashId: hashIds) => {
  switch (hashId) {
    case "car":
      return faCar
    case "train":
      return faTrain
    default:
      return faBus
  }
}

const Header = ({ idx, title, className }: { idx: number, title: string, className: string }) => {
  const tagName = {
    0: 'h3',
    1: 'h4',
    2: 'h5',
  }[idx];

  const Tag = tagName as keyof JSX.IntrinsicElements;

  return React.createElement(Tag, { className }, <>{title}</>);
}

function GettingThere({ t }: TranslatorProps) {
  const miniLinks: MiniMenuExtended[] = [
    {
      title: t("gettingThere.address"),
      hashId: "address",
    },
    {
      title: t("gettingThere.car.title"),
      hashId: "car",
    },
    {
      title: t("gettingThere.train.title"),
      hashId: "train",
    },
    {
      title: t("gettingThere.bus.title"),
      hashId: "bus",
    },
  ];

  return (
    <>
      <MiniMenu model={miniLinks} />
      <main className="pb-24">
        <h1 className="text-4xl text-center font-bold my-10">{t('gettingThere.title')}</h1>

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
                <FontAwesomeIcon icon={faMap} width="20" className="mr-2 inline" />
                {t("gettingThere.viewBtnText")}
              </ButtonLink>
            </div>
          </div>
        </article>

        {
          miniLinks.slice(1).map((miniLink, idx) => {
            var logo = getLogo(miniLink.hashId);
            var instructions = t(`gettingThere.${miniLink.hashId}.instructions`, { returnObjects: true }) as string[]

            return <article
              className={`anchor-link-header text-left ${idx % 2 == 1 ? "primary" : ""}`}
              id={miniLink.hashId}
              key={miniLink.hashId}>
              <Header className="text-2xl font-bold text-center" idx={idx} title={t(`gettingThere.${miniLink.hashId}.title`)} />
              <FontAwesomeIcon icon={logo} width={50} className="mx-auto mt-4 pb-12" />
              <div className="mt-4 ml-12">
                <strong>{t(`gettingThere.${miniLink.hashId}.description`)}</strong>:
                {<ol className="list-decimal text-left mt-2 ml-6">
                  {instructions.map(instruction => (
                    <li key={instruction}>{instruction}</li>
                  ))}
                </ol>}
              </div>
            </article>
          })
        }
      </main>
    </>
  );
}

export default withTranslator(GettingThere, "pages");