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
      <li key={subMenuItem.label} role="presentation">
        <a href={subMenuItem.url} role="menuitem">
          {subMenuItem.label}
        </a>
      </li>
    ));

  const topMenu = model.map((topMenuItem) => (
    <li key={topMenuItem.label} role="presentation">
      <>
        <a href={topMenuItem.url} role="menuitem">
          {topMenuItem.label}
        </a>
        {topMenuItem.items && (
          <div role="presentation">
            <ul role="menu"> {subMenu(topMenuItem.items)} </ul>
          </div>
        )}
      </>
    </li>
  ));

  return (
    <nav role="menubar">
      <ul role="menu">{topMenu}</ul>
    </nav>
  );
}

export const Menu = memo(MutableMenu, () => true);
