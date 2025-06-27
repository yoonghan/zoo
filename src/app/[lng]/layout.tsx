import type { Metadata } from "next";
import "@/themes/lara-light-green/theme.css";
import "../main.css";
import { Footer } from "@/components/Footer";
import { zooProfile } from "@/config/profile";
import { Menu } from "@/components/Menu";
import { zooMenu } from "@/config/menu";
import { ButtonLink } from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "@/components/ScrollToTop";
import { dir, TFunction } from 'i18next'
import { languages } from '../../i18n/settings'
import { use } from 'react'
import Link from "next/link";
import { TranslatedAnnouncement } from "./TranslatedAnnouncement";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: "Zoo Negara Malaysia",
  description:
    "A non-governmental organization established to create the first local zoo for Malaysians.",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: string }>
}>) {
  const { lng } = use(params)

  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <header>
          <TranslatedAnnouncement params={params}/>
          <Menu
            model={zooMenu}
            mobileHomeText="Zoo Negara"
            language={lng}
            shortcutComponent={
              <form>
                {languages.map((language, idx) => (
                  <span key={language} className={language === lng ? "hidden sm:inline" : ""}>
                    {idx !== 1 || <span className={"hidden sm:inline -mx-2"}> | </span>}
                    <Link href={`/${language}`} className={language === lng ? "hidden sm:inline underline mx-4" : "mx-4"}> 
                      {language === "ms" ? "BM" : language.toUpperCase()}
                    </Link>
                  </span>
                ))}
                <ButtonLink
                  styling="BuyNow"
                  href={zooProfile.ticket.admission.url}
                >
                  <FontAwesomeIcon
                    icon={faTicket}
                    className="inline mr-2"
                    width={20}
                  />
                  <span className="hidden sm:inline">{zooProfile.ticket.admission.text}</span>
                </ButtonLink>
              </form>
            }
          />
        </header>
        {children}
        <ScrollToTop />
        <Footer
          language={lng}
          operatingTime={zooProfile.operatingTime}
          address={zooProfile.address}
          companyName={zooProfile.companyName}
          partners={zooProfile.partners}
        />
      </body>
    </html>
  );
}
