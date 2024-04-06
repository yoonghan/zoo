"use client";

import { ReactNode, useState } from "react";
import style from "./Announcement.module.css";

export type AnnouncementsType = (string | ReactNode)[];

type AnnouncementProps = { announcements: AnnouncementsType };

export function Announcement({ announcements }: AnnouncementProps) {
  const [idx, setIdx] = useState(0);

  const goPrev = () =>
    setIdx(idx - 1 >= 0 ? idx - 1 : announcements.length - 1);

  const goNext = () => setIdx(announcements.length > idx + 1 ? idx + 1 : 0);

  return (
    <>
      {announcements.length > 0 && (
        <article className={style.announcement}>
          {announcements.length > 1 && (
            <button onClick={goPrev} className="no-style">
              <i className="arrow left black"></i>
            </button>
          )}
          <div>{announcements[idx]}</div>
          {announcements.length > 1 && (
            <button onClick={goNext} className="no-style">
              <i className="arrow right black"></i>
            </button>
          )}
        </article>
      )}
    </>
  );
}
