import { memo } from "react";

type MenuItem = {
  label: string;
  url?: string;
  items?: MenuItem[];
};

export type MenuProps = MenuItem[];

function MutableMenu({ model }: { model: MenuProps }) {
  const subMenu = (subMenu: MenuItem[]) =>
    subMenu.map((subMenuItem) => (
      <li key={subMenuItem.label}>
        <a href={subMenuItem.url}>{subMenuItem.label}</a>
      </li>
    ));

  const topMenu = model.map((topMenuItem) => (
    <li key={topMenuItem.label}>
      <>
        <a href={topMenuItem.url}>{topMenuItem.label}</a>
        {topMenuItem.items && (
          <div>
            <ul> {subMenu(topMenuItem.items)} </ul>
          </div>
        )}
      </>
    </li>
  ));

  return (
    <nav>
      <ul>{topMenu}</ul>
    </nav>
  );
}

export const Menu = memo(MutableMenu, () => true);
