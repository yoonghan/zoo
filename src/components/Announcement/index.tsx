"use client";

import { htmlConvertor } from "@/util/htmlConvertor";
import { useState } from "react";
import style from "./Announcement.module.css";

type AnnouncementsType = string[];

type AnnouncementProps = {
  ariaAnnouncementTitle: string;
  announcements: AnnouncementsType
};

export function Announcement({ ariaAnnouncementTitle, announcements }: Readonly<AnnouncementProps>) {
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
          <div
            role="status"
            title={ariaAnnouncementTitle}
            className={`${style.announcement} ${hasOnly1Announcement ? style["only-one"] : ""
              } p-6 md:text-center`}
          >
            {!hasOnly1Announcement && (
              <button onClick={goPrev} className="no-style">
                <i
                  className="arrow left black"
                  aria-label="previous announcement"
                ></i>
              </button>
            )}
            <p data-testid="announcement">
              {htmlConvertor(announcements[idx])}
            </p>
            {!hasOnly1Announcement && (
              <button onClick={goNext} className="no-style">
                <i
                  className="arrow right black"
                  aria-label="next announcement"
                ></i>
              </button>
            )}
            <label htmlFor="close-announcement" className="relative" aria-label="Close Announcement">
              <span className={"close"}></span>
            </label>
          </div>
        </>
      )}
    </>
  );
}
