import type { Metadata } from "next"
import "@/themes/lara-light-green/theme.css"
import "../main.css"
import { dir } from "i18next"
import { Suspense, use } from "react"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import ScrollToTop from "@/components/ScrollToTop"
import { systemConfig } from "@/config/system"
import { getTranslation } from "@/i18n"
import { generateSiteMeta } from "@/util/generateMeta"
import { languages } from "../../i18n/settings"
import { TranslatedAnnouncement } from "./TranslatedAnnouncement"
import { TranslatedFooter } from "./TranslatedFooter"
import { TranslatedMenu } from "./TranslatedMenu"

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }))
}

type Props = {
	params: Promise<{ lng: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { lng } = await params
	const { t } = await getTranslation(lng, "pages")

	return generateSiteMeta(
		lng,
		t("headers.default"),
		t("headers.defaultDescription"),
	)
}

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ lng: string }>
}>) {
	const { lng } = use(params)

	return (
		<html lang={lng} dir={dir(lng)}>
			<body>
				<Suspense>
					<GoogleAnalytics
						measurementId={
							systemConfig["google-analytic-measurement-id"]
						}
					/>
				</Suspense>
				<header>
					<TranslatedAnnouncement params={params} />
					<TranslatedMenu params={params} />
				</header>
				{children}
				<ScrollToTop />
				<TranslatedFooter params={params} />
			</body>
		</html>
	)
}