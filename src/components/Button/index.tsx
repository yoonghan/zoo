import style from "./button.module.css";
import { Link } from "../Link";

export type ButtonStyles = {
  styling: "Primary" | "Secondary" | "BuyNow";
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
  ...additionalProps
}: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "role"> &
  ButtonStyles & { href: string }) {
  const buttonStyleClassName = `button-${styling.toLowerCase()}`;

  return (
    <Link
      href={href}
      className={`${style.button} ${style[buttonStyleClassName]} ${className || ""}`}
      styling="None"
      {...additionalProps}
    >
      {children}
    </Link>
  );
}
