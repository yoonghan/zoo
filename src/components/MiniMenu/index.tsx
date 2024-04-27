"use client";

import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import style from "./mini-menu.module.css";

export type MiniMenuItems = {
  hashId: string;
  title: string;
};

type MiniMenuProps = {
  model: MiniMenuItems[];
  onScrollMonitor?: () => void; // use to monitor unmount
  onScrollIntoViewMonitor?: () => void; // use to monitor unmount
};

function MiniMenu({
  model,
  onScrollMonitor,
  onScrollIntoViewMonitor,
}: MiniMenuProps) {
  const [selected, setSelected] = useState(0);
  const anchorRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const navBar = useRef<HTMLDivElement>(null);

  const [navBarPosition, setNavBarPosition] = useState(0);

  const addStickyToScroll = useCallback(() => {
    if (onScrollMonitor) {
      onScrollMonitor();
    }
    if (navBar.current) {
      if (window.scrollY >= navBarPosition) {
        navBar.current.classList.add(style.sticky);
      } else {
        navBar.current.classList.remove(style.sticky);
      }
    }
  }, [navBarPosition, onScrollMonitor]);

  const recalculateSelection = useCallback(() => {
    const hashId = window?.location?.hash;
    const selectedIndex = model.findIndex(
      (item) => `#${item.hashId}` === hashId
    );
    setSelected(selectedIndex < 0 ? 0 : selectedIndex);
  }, [model]);

  useLayoutEffect(() => {
    recalculateSelection();
    setNavBarPosition(navBar.current?.offsetHeight || 0);
    window.addEventListener("scroll", addStickyToScroll);
    return () => window.removeEventListener("scroll", addStickyToScroll);
  }, [addStickyToScroll, recalculateSelection]);

  useEffect(() => {
    const elem = anchorRef.current[selected];
    if (elem !== null && window.location.hash !== "") {
      if (onScrollIntoViewMonitor) {
        onScrollIntoViewMonitor();
      }
      elem.scrollIntoView({
        behavior: "instant",
        inline: "center",
      });
    }
  }, [selected, onScrollIntoViewMonitor]);

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
              ref={(el) => {
                anchorRef.current[idx] = el;
              }}
              onClick={() => {
                setSelected(idx);
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
