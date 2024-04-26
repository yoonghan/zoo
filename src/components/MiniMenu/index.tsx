"use client";

import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import style from "./mini-menu.module.css";

export type MiniMenuItems = {
  hashId: string;
  title: string;
};

type MiniMenuProps = {
  model: MiniMenuItems[];
  onScrollMonitor?: () => void;
};

function MiniMenu({ model, onScrollMonitor }: MiniMenuProps) {
  const [selected, setSelected] = useState(0);
  const navBar = useRef<HTMLDivElement>(null);

  /* c8 ignore next */
  const [navBarPosition, setNavBarPosition] = useState(0);

  const addStickyToScroll = useCallback(() => {
    if (onScrollMonitor) {
      onScrollMonitor(); // use to monitor unmount
    }
    if (navBar.current) {
      if (window.scrollY >= navBarPosition) {
        navBar.current.classList.add(style.sticky);
      } else {
        navBar.current.classList.remove(style.sticky);
      }
    }
  }, [navBarPosition, onScrollMonitor]);

  useEffect(() => {
    setNavBarPosition(navBar.current?.offsetHeight || 0);
    window.addEventListener("scroll", addStickyToScroll);
    return () => window.removeEventListener("scroll", addStickyToScroll);
  }, [addStickyToScroll]);

  const scrollIntoView =
    (idx: number) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.currentTarget.scrollIntoView({ behavior: "instant", inline: "center" });
      setSelected(idx);
    };

  return (
    <nav className="overflow-x-auto shadow-md" ref={navBar}>
      <div
        className={`${style.container} flex gap-4 justify-center p-6 min-w-max`}
      >
        {model.map((item, idx) => (
          <React.Fragment key={item.hashId}>
            {idx !== 0 && (
              <div
                className={`${style.separator} border-r border-1`}
                role="separator"
              ></div>
            )}
            <a
              href={`#${item.hashId}`}
              onClick={scrollIntoView(idx)}
              className={idx === selected ? "underline italic" : undefined}
            >
              {item.title}
            </a>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export default memo(MiniMenu, () => true);
