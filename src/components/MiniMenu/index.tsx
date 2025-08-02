"use client";

import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import style from "./mini-menu.module.css";

export type MiniMenuItems = {
  hashId: string;
  title: string;
};

type MiniMenuProps = {
  model: MiniMenuItems[];
  onScrollMonitor?: () => void; // use to monitor unmount;
  fakeNavBarRef?: boolean;
};

function MiniMenu({ model, onScrollMonitor, fakeNavBarRef = false }: Readonly<MiniMenuProps>) {
  const [selected, setSelected] = useState(0);
  const anchorRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const navBarRef = useRef<HTMLDivElement>(null);

  const [navBarPosition, setNavBarPosition] = useState(0);

  const addStickyToScroll = useCallback(() => {
    if (onScrollMonitor) {
      onScrollMonitor();
    }
    if (navBarRef.current) {
      if (window.scrollY >= navBarPosition) {
        navBarRef.current.classList.add(style.sticky);
      } else {
        navBarRef.current.classList.remove(style.sticky);
      }
    }
  }, [navBarPosition, onScrollMonitor]);

  const addMutationObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (intersections: IntersectionObserverEntry[]) => {
        const target = intersections[0].target;
        const idx = model.findIndex((item) => {
          return item.hashId === target.id;
        });

        const validIdx = idx < 0 ? 0 : idx;
        const anchor = anchorRef.current[validIdx];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (anchor as any).scrollIntoViewIfNeeded({
          behavior: "instant",
          inline: "center",
        });
        setSelected(validIdx);
      },
      {
        threshold: [0.3], //never accurate but it's the best
      }
    );
    model.forEach((menuItem) => {
      const elem = document.getElementById(menuItem.hashId);
      if (elem !== null) observer.observe(elem);
    });

    return observer;
  }, [model]);

  useLayoutEffect(() => {
    const observer = addMutationObserver();
    setNavBarPosition(navBarRef.current?.offsetHeight || 0);
    window.addEventListener("scroll", addStickyToScroll);
    return () => {
      window.removeEventListener("scroll", addStickyToScroll);
      observer.disconnect();
    };
  }, [addStickyToScroll, addMutationObserver]);

  return (
    <nav
      className="overflow-x-auto shadow-md"
      ref={fakeNavBarRef ? null : navBarRef}
      id="mini-menu-nav"
    >
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
              ref={(el) => {
                anchorRef.current[idx] = el;
              }}
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

export default MiniMenu;
