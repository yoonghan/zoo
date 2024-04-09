import style from "./button.module.css";

export type ButtonProps = {
  text: string;
  type: "Primary" | "Secondary";
};

export function Button({
  text,
  type,
  onClick,
}: ButtonProps & { onClick: () => void }) {
  const buttonStyleClassName = `button-${type.toLowerCase()}`;

  return (
    <button className={style[buttonStyleClassName]} onClick={onClick}>
      {text}
    </button>
  );
}

export function Link({
  text,
  type,
  href,
  rel,
}: ButtonProps & { href: string; rel?: string }) {
  const buttonStyleClassName = `button-${type.toLowerCase()}`;

  return (
    <a
      href={href}
      rel={rel}
      className={style[buttonStyleClassName]}
      role="button"
    >
      {text}
    </a>
  );
}
