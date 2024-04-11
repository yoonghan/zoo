import { ReactNode, memo } from "react";
import style from "./style.module.css";
import Image from "next/image";
import { Link } from "../Link";

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
  shortcutComponent,
}: {
  model: MenuType;
  mobileHomeText: string;
  shortcutComponent?: (env: "mobile"|"desktop") => ReactNode;
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
        <Link
          href={replaceWithTopMenuUrlIfAHashlinkOrEmpty(
            topMenuUrl,
            subMenuItem.url
          )}
          role="menuitem"
        >
          {subMenuItem.label}
        </Link>
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
          <Link
            href={topMenuItem.url}
            role="menuitem"
            className={hasChild ? style["top-menu-link"] : ""}
          >
            {topMenuItem.label}
          </Link>
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
        <Link href="/" tabIndex={-1} styling="None">
          {mobileHomeText}
        </Link>
        {shortcutComponent && shortcutComponent("mobile")}
      </div>

      <nav role="menubar" className={style.menu}>
        <ul role="menu" aria-orientation="horizontal">
          <li className={style["non-mobile-menu"]} role="menuitem">
            <Link href="/" className={style["home-logo"]}>
              <Image
                src="/images/home-link.png"
                alt="home link"
                height={20}
                width={20}
              />
            </Link>
          </li>
          {topMenu}
          <li className={`${style["non-mobile-menu"]}`} role="menuitem">
            {shortcutComponent && shortcutComponent("desktop")}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export const Menu = memo(MutableMenu, () => true);
