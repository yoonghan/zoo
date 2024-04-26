"use client";

import { useMemo, useEffect, useState } from "react";
import style from "./ScrollToTop.module.css";
import { debounce } from "lodash";

export interface ScrollToTopStates {
  visible: boolean;
}

const _isOverTheBar = () => {
  const currentScrollPos = window.scrollY;
  return currentScrollPos > 500;
};

const ScrollToTopNoSSR = () => {
  const [visible, setVisible] = useState(_isOverTheBar());

  const debouncedOnScroll = useMemo(
    () =>
      debounce(() => {
        setVisible(_isOverTheBar());
      }, 50),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", debouncedOnScroll);
    return () => {
      window.removeEventListener("scroll", debouncedOnScroll);
    };
  }, [debouncedOnScroll]);

  const clickScrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={clickScrollUp}
      className={style.scroller + `${visible ? "" : ` ${style.hidden}`}`}
    >
      Top
    </div>
  );
};

export default ScrollToTopNoSSR;
