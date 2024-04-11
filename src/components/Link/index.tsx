import style from "./link.module.css";
import NextLink from "next/link";

export type LinkStyles = {
  styling?: "Primary" | "Secondary" | "None";
};

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

  return (
    <NextLink
      href={href}
      className={`${buttonStyleClassName} ${className || ''}`}
      {...additionalProps}
    >
      {children}
    </NextLink>
  );
}
