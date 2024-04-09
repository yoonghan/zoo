import { memo } from "react";
import style from "./style.module.css";
import Image from "next/image";

type TopMenuItem = {
  label: string;
  url: string;
  items?: SubMenuItem[];
};

type SubMenuItem = {
  label: string;
  url?: string;
};

export type MenuType = TopMenuItem[];

function MutableMenu({
  model,
  mobileHomeText,
}: {
  model: MenuType;
  mobileHomeText: string;
}) {
  const replaceWithTopMenuUrlIfAHashlinkOrEmpty = (
    topMenuUrl: string,
    url?: string
  ) => {
    if (url === undefined || url === "") return topMenuUrl;
    return url.replace(/^#/, `${topMenuUrl}#`);
  };

  const subMenu = (subMenu: SubMenuItem[], topMenuUrl: string) =>
    subMenu.map((subMenuItem) => (
      <li key={subMenuItem.label} role="presentation">
        <a
          href={replaceWithTopMenuUrlIfAHashlinkOrEmpty(
            topMenuUrl,
            subMenuItem.url
          )}
          role="menuitem"
        >
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
          <a
            href={topMenuItem.url}
            role="menuitem"
            className={hasChild ? style["top-menu-link"] : ""}
          >
            {topMenuItem.label}
          </a>
          {topMenuItem.items && (
            <div role="presentation" className={style["subnav-content"]}>
              <ul role="menu">{subMenu(topMenuItem.items, topMenuItem.url)}</ul>
            </div>
          )}
        </div>
      </li>
    );
  });

  return (
    <div className={style.nav}>
      <input className={style["side-menu"]} type="checkbox" id="side-menu" />
      <div className={style["mobile-menu"]}>
        <label
          className={style.hamb}
          htmlFor="side-menu"
          aria-label="Main Menu"
        >
          <span className={style["hamb-line"]}></span>
        </label>
        <a href="/" tabIndex={-1}>
          {mobileHomeText}
        </a>
      </div>

      <nav role="menubar" className={style.menu}>
        <ul role="menu" aria-orientation="horizontal">
          <li className={style["non-mobile-menu"]}>
            <a href="/">
              <Image
                src="/home-link.png"
                alt="home link"
                height={20}
                width={20}
              />
            </a>
          </li>
          {topMenu}
        </ul>
      </nav>
    </div>
  );
}

export const Menu = memo(MutableMenu, () => true);
