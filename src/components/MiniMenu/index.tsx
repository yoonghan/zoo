"use client";

import React, { memo, useCallback, useEffect, useRef } from "react";
import styles from "./mini-menu.module.css";

export type MiniMenuItems = {
  hashId: string;
  title: string;
};

type MiniMenuProps = {
  model: MiniMenuItems[];
  onScrollMonitor?: () => void;
};

function MiniMenu({ model, onScrollMonitor }: MiniMenuProps) {
  const navBar = useRef<HTMLDivElement>(null);
  const navBarPosition = navBar.current?.offsetTop || 0;

  const addStickyToScroll = useCallback(() => {
    if (onScrollMonitor) {
      onScrollMonitor(); // use to monitor unmount
    }
    if (navBar.current) {
      if (window.scrollY >= navBarPosition) {
        navBar.current.classList.add(styles.sticky);
      } else {
        navBar.current.classList.remove(styles.sticky);
      }
    }
  }, [navBarPosition, onScrollMonitor]);

  useEffect(() => {
    window.addEventListener("scroll", addStickyToScroll);
    return () => window.removeEventListener("scroll", addStickyToScroll);
  }, [addStickyToScroll]);

  return (
    <nav className="overflow-x-auto" ref={navBar}>
      <div
        className={`${styles.container} flex gap-4 justify-center py-8 px-8 min-w-max`}
      >
        {model.map((item, idx) => (
          <React.Fragment key={item.hashId}>
            {idx !== 0 && (
              <div
                className={`${styles.separator} border-r border-1`}
                role="separator"
              ></div>
            )}
            <a href={`#${item.hashId}`}>{item.title}</a>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export default memo(MiniMenu, () => true);
