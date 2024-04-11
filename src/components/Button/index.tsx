import { ReactNode } from "react";
import style from "./button.module.css";
import { Link } from "../Link";

export type ButtonStyles = {
  styling: "Primary" | "Secondary";
};

export function Button({
  styling,
  className,
  children,
  ...additionalProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyles) {
  const buttonStyleClassName = `button-${styling.toLowerCase()}`;

  return (
    <button
      className={`${style[buttonStyleClassName]} ${className}`}
      {...additionalProps}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  styling,
  className,
  children,
  href,
  role,
  ...additionalProps
}: Exclude<React.LinkHTMLAttributes<HTMLAnchorElement>, "href"> &
  ButtonStyles & { href: string | URL }) {
  const buttonStyleClassName = `button-${styling.toLowerCase()}`;

  return (
    <Link
      href={href}
      className={`${style[buttonStyleClassName]} ${className || ''}`}
      role="button"
      {...additionalProps}
    >
      {children}
    </Link>
  );
}
