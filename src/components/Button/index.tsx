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
  role = "button",
  ...additionalProps
}: Exclude<React.AnchorHTMLAttributes<HTMLAnchorElement>, ["role" | "href"]> &
  ButtonStyles & { href: string }) {
  const buttonStyleClassName = `button-${styling.toLowerCase()}`;

  return (
    <Link
      href={href}
      className={`${style[buttonStyleClassName]} ${className || ""}`}
      role={"button"}
      styling="None"
      {...additionalProps}
    >
      {children}
    </Link>
  );
}
