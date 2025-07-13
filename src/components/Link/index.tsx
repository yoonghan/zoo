import { escape } from "lodash";
import style from "./link.module.css";
import NextLink from "next/link";

export type LinkStyles = {
  styling?: "Primary" | "Secondary" | "None";
};

const isExternalUrlRegex = new RegExp("^https?://");

export function Link({
  styling = "Primary",
  href,
  className,
  children,
  ...additionalProps
}: Exclude<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  LinkStyles & { href: URL | string }) {
  const buttonStyleClassName =
    styling === "None" ? "" : style[`link-${styling.toLowerCase()}`];

  const isExternalLink = isExternalUrlRegex.test(href);

  const sanitizeHref = (href: string): string => {
    // Ensure the href is sanitized to prevent XSS attacks
    const safeHref = /^(\/|mailto:|tel:|http:|https:).*/.test(href) ? href : `/${href}`
    return escape(safeHref);
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
  );
}
