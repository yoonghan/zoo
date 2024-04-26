"use client";

import { useCallback, useEffect, useState } from "react";
import style from "./ScrollToTop.module.css";

export interface ScrollToTopStates {
  visible: boolean;
}

const _isOverTheBar = () => {
  const currentScrollPos = window.scrollY;
  return currentScrollPos > 500;
};

const ScrollToTopNoSSR = () => {
  const [visible, setVisible] = useState(_isOverTheBar());

  const _handleScroll = useCallback(() => {
    setVisible(_isOverTheBar());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", _handleScroll);
    return () => {
      window.removeEventListener("scroll", _handleScroll);
    };
  }, [_handleScroll]);

  const clickScrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={clickScrollUp}
      className={style.scroller + `${visible ? "" : ` ${style.hidden}`}`}
      aria-hidden={true}
    >
      Top
    </div>
  );
};

export default ScrollToTopNoSSR;
