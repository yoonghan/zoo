import { useMemo } from "react";

type MenuItem = {
  label: string;
  url?: string;
  items?: MenuItem[];
};

export type MenuProps = MenuItem[];

export function Menu({ model }: { model: MenuProps }) {
  const topMenu = useMemo(
    () =>
      model.map((topMenuItem) => (
        <li key={topMenuItem.label}>
          <a href={topMenuItem.url}>{topMenuItem.label}</a>
        </li>
      )),
    [model]
  );

  return (
    <nav>
      <ul>{topMenu}</ul>
    </nav>
  );
}
