import type { Metadata } from "next";
import "@/themes/lara-light-green/theme.css";
import "../main.css";
import ScrollToTop from "@/components/ScrollToTop";
import { dir } from 'i18next'
import { languages } from '../../i18n/settings'
import { use } from 'react'
import { TranslatedAnnouncement } from "./TranslatedAnnouncement";
import { TranslatedMenu } from "./TranslatedMenu";
import { TranslatedFooter } from "./TranslatedFooter";

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
          <TranslatedAnnouncement params={params} />
          <TranslatedMenu params={params} />
        </header>
        {children}
        <ScrollToTop />
        <TranslatedFooter params={params} />
      </body>
    </html>
  );
}
