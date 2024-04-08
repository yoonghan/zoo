"use client";

import { useState } from "react";
import style from "./Announcement.module.css";

export type AnnouncementsType = (string)[];

type AnnouncementProps = { announcements: AnnouncementsType };

export function Announcement({ announcements }: AnnouncementProps) {
  const [idx, setIdx] = useState(0);

  const goPrev = () =>
    setIdx(idx - 1 >= 0 ? idx - 1 : announcements.length - 1);

  const goNext = () => setIdx(announcements.length > idx + 1 ? idx + 1 : 0);

  const hasOnly1Announcement = announcements.length === 1;

  return (
    <>
      {announcements.length > 0 && (
        <>
          <input
            className={style["close-announcement"]}
            type="checkbox"
            id="close-announcement"
          />
          <article
            className={`${style.announcement} ${
              hasOnly1Announcement ? style["only-one"] : ""
            }`}
          >
            {!hasOnly1Announcement && (
              <button onClick={goPrev} className="no-style">
                <i
                  className="arrow left black"
                  aria-label="previous announcement"
                ></i>
              </button>
            )}
            <h4>{announcements[idx]}</h4>
            {!hasOnly1Announcement && (
              <button onClick={goNext} className="no-style">
                <i
                  className="arrow right black"
                  aria-label="next announcement"
                ></i>
              </button>
            )}
            <label htmlFor="close-announcement">
              <span className={"close"} aria-label="Close Announcement" role="button"></span>
            </label>
          </article>
        </>
      )}
    </>
  );
}
