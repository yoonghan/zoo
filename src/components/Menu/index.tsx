"use client";

import { ChangeEvent, ReactNode, memo, useEffect, useRef } from "react";
import style from "./style.module.css";
import Image from "next/image";
import { Link } from "../Link";
import { formatStringAsId } from "@/util/idGenerator";

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
  shortcutComponent?: ReactNode;
}) {
  const sideMenuRef = useRef<HTMLInputElement>(null);

  const replaceWithTopMenuUrlIfAHashlinkOrEmpty = (
    topMenuUrl: string,
    url?: string
  ) => {
    if (url === undefined || url === "") return topMenuUrl;
    return url.replace(/^#/, `${topMenuUrl}#`);
  };

  const unCheckSideMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.checked = false;
      document.body.style.overflow = "auto";
    }
  };

  const onSideMenuChange = (event: ChangeEvent<HTMLInputElement>) => {
    document.body.style.overflow = event.target.checked ? "hidden" : "auto";
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
          onClick={unCheckSideMenu}
        >
          {subMenuItem.label}
        </Link>
      </li>
    ));

  const desktopTopMenu = model.map((topMenuItem) => {
    const hasChild = topMenuItem.items;

    return (
      <li
        key={topMenuItem.label}
        role="presentation"
        className={hasChild ? style.subnav : ""}
      >
        <div>
          <Link href={topMenuItem.url} role="menuitem">
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

  const mobileTopMenu = model.map((topMenuItem) => {
    const hasChild = topMenuItem.items;

    return (
      <li
        key={topMenuItem.label}
        role="presentation"
        className={hasChild ? style.subnav : ""}
      >
        <div>
          <input
            className={style["top-menu"]}
            type="radio"
            name="top-menu"
            id={formatStringAsId(topMenuItem.label)}
          />
          {hasChild ? (
            <label
              role="menuitem"
              htmlFor={formatStringAsId(topMenuItem.label)}
            >
              {topMenuItem.label}
            </label>
          ) : (
            <Link
              href={topMenuItem.url}
              role="menuitem"
              onClick={unCheckSideMenu}
            >
              {topMenuItem.label}
            </Link>
          )}
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
    <>
      <div className={style.mobile__nav}>
        <input
          className={style["side-menu"]}
          type="checkbox"
          id="side-menu"
          ref={sideMenuRef}
          onChange={onSideMenuChange}
        />
        <div className={style["mobile-menu"]}>
          <label
            className={style.hamb}
            htmlFor="side-menu"
            aria-label="Main Menu"
          >
            <span className={style["hamb-line"]}></span>
            <span className={"visually-hidden"}>Hamburger Menu</span>
          </label>
          <Link href="/" tabIndex={-1} styling="None" onClick={unCheckSideMenu}>
            {mobileHomeText}
          </Link>
          {shortcutComponent && shortcutComponent}
        </div>
        <nav role="menubar" className={style.menu}>
          <ul role="menu" aria-orientation="horizontal">
            {mobileTopMenu}
          </ul>
        </nav>
      </div>
      <div className={style.desktop__nav}>
        <nav role="menubar" className={style.menu}>
          <ul role="menu" aria-orientation="horizontal">
            <li role="menuitem">
              <Link href="/" className={style["home-logo"]}>
                <Image
                  src="/images/home-link.png"
                  alt="home link"
                  height={20}
                  width={20}
                />
              </Link>
            </li>
            {desktopTopMenu}
            <li role="menuitem">{shortcutComponent && shortcutComponent}</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export const Menu = memo(MutableMenu, () => true);
