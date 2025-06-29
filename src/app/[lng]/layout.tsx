import type { Metadata, ResolvingMetadata } from "next";
import "@/themes/lara-light-green/theme.css";
import "../main.css";
import ScrollToTop from "@/components/ScrollToTop";
import { dir } from 'i18next'
import { languages } from '../../i18n/settings'
import { use } from 'react'
import { TranslatedAnnouncement } from "./TranslatedAnnouncement";
import { TranslatedMenu } from "./TranslatedMenu";
import { TranslatedFooter } from "./TranslatedFooter";
import { getTranslation } from "@/i18n";
import { generateSiteMeta } from "@/util/generateMeta";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

type Props = {
  params: Promise<{ lng: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lng } = await params
  const { t } = await getTranslation(lng, "pages")

  return generateSiteMeta(lng, t('headers.default'), t('headers.defaultDescription'))
}

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
