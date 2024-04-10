import style from "./link.module.css";

export type LinkStyles = {
  styling?: "Primary" | "Secondary";
};

export function Link({
  styling = "Primary",
  className,
  children,
  ...additionalProps
}: React.LinkHTMLAttributes<HTMLAnchorElement> & LinkStyles) {
  const buttonStyleClassName = `link-${styling.toLowerCase()}`;

  return (
    <a
      className={`${style[buttonStyleClassName]} ${className}`}
      {...additionalProps}
    >
      {children}
    </a>
  );
}
