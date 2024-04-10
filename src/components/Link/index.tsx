import style from "./link.module.css";

export type LinkStyles = {
  styling?: "Primary" | "Secondary" | "None";
};

export function Link({
  styling = "Primary",
  className,
  children,
  ...additionalProps
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkStyles) {
  const buttonStyleClassName =
    styling === "None" ? "" : `link-${styling.toLowerCase()}`;

  return (
    <a
      className={`${style[buttonStyleClassName]} ${className}`}
      {...additionalProps}
    >
      {children}
    </a>
  );
}
