import { memo } from "react";
import style from "./style.module.css";

type TopMenuItem = {
  label: string;
  url: string;
  items?: SubMenuItem[];
};

type SubMenuItem = {
  label: string;
  url?: string;
};

export type MenuProps = TopMenuItem[];

function MutableMenu({ model }: { model: MenuProps }) {
  const subMenu = (subMenu: SubMenuItem[]) =>
    subMenu.map((subMenuItem) => (
      <li key={subMenuItem.label} role="presentation">
        <a href={subMenuItem.url} role="menuitem" aria-hidden={true}>
          {subMenuItem.label}
        </a>
      </li>
    ));

  const topMenu = model.map((topMenuItem) => {
    const hasChild = topMenuItem.items;

    return (
      <li
        key={topMenuItem.label}
        role="presentation"
        className={hasChild ? style.subnav : ""}
      >
        <div>
          <a href={topMenuItem.url} role="menuitem">
            {topMenuItem.label}
          </a>
          {topMenuItem.items && (
            <div role="presentation" className={style["subnav-content"]}>
              <ul role="menu"> {subMenu(topMenuItem.items)} </ul>
            </div>
          )}
        </div>
      </li>
    );
  });

  return (
    <div className={style.nav}>
      <input className={style["side-menu"]} type="checkbox" id="side-menu" />
      <label className={style.hamb} htmlFor="side-menu">
        <span className={style["hamb-line"]}></span>
      </label>

      <nav role="menubar" className={style.menu}>
        <ul role="menu" aria-orientation="horizontal">
          {topMenu}
        </ul>
      </nav>
    </div>
  );
}

export const Menu = memo(MutableMenu, () => true);
