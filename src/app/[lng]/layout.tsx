import type { Metadata } from "next";
import "@/themes/lara-light-green/theme.css";
import "../main.css";
import { Announcement } from "@/components/Announcement";
import { Footer } from "@/components/Footer";
import { zooProfile } from "@/config/profile";
import { Menu } from "@/components/Menu";
import { zooMenu } from "@/config/menu";
import { ButtonLink } from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "@/components/ScrollToTop";
import { dir } from 'i18next'
import { languages } from '../../i18n/settings'
import { Usable, use } from 'react'
import { PageParams } from "@/typings/params";
import Link from "next/link";

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
  params: Usable<{ lng: string }>
}>) {
  const { lng } = use(params)

  const zooAnnouncement = require(`../../i18n/locales/${lng}/announcements`).default

  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <header>
          <Announcement
            announcements={zooAnnouncement}
            ariaAnnouncementTitle="Zoo Announcement"
          />
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
