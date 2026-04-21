import { escape as esc } from "lodash"
import NextLink from "next/link"
import style from "./link.module.css"

export type LinkStyles = {
	styling?: "Primary" | "Secondary" | "None"
}

const isExternalUrlRegex = /^https?:\/\//

export function Link({
	styling = "Primary",
	href,
	className,
	children,
	...additionalProps
}: Exclude<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
	LinkStyles & { href: URL | string }) {
	const buttonStyleClassName =
		styling === "None" ? "" : style[`link-${styling.toLowerCase()}`]

	const isExternalLink = isExternalUrlRegex.test(href)

	const sanitizeHref = (href: string): string => {
		// Ensure the href is sanitized to prevent XSS attacks
		return esc(href).replace(/&amp;/g, "&")
	}

	return (
		<NextLink
			href={sanitizeHref(href)}
			className={`${buttonStyleClassName} ${className || ""}`}
			rel={isExternalLink ? "external" : undefined}
			{...additionalProps}
		>
			{children}
		</NextLink>
	)
}