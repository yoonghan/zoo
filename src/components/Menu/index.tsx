import { memo } from "react";

type MenuItem = {
  label: string;
  url?: string;
  items?: MenuItem[];
};

export type MenuProps = MenuItem[];

function MutableMenu({ model }: { model: MenuProps }) {
  const topMenu = model.map((topMenuItem) => (
    <li key={topMenuItem.label}>
      <a href={topMenuItem.url}>{topMenuItem.label}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{topMenu}</ul>
    </nav>
  );
}

export const Menu = memo(MutableMenu, () => true);
