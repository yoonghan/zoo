import { ReactNode } from "react";
import style from "./button.module.css";

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

export function Link({
  styling,
  className,
  children,
  ...additionalProps
}: React.LinkHTMLAttributes<HTMLAnchorElement> & ButtonStyles) {
  const buttonStyleClassName = `button-${styling.toLowerCase()}`;

  return (
    <a
      className={`${style[buttonStyleClassName]} ${className}`}
      role="button"
      {...additionalProps}
    >
      {children}
    </a>
  );
}
