import { ReactNode, useState } from "react";

export type AnnouncementProps = { announcements: (string | ReactNode)[] };

export function Announcement({ announcements }: AnnouncementProps) {
  const [idx, setIdx] = useState(0);

  const goPrev = () =>
    setIdx(idx - 1 >= 0 ? idx - 1 : announcements.length - 1);

  const goNext = () => setIdx(announcements.length > idx + 1 ? idx + 1 : 0);

  return (
    <>
      {announcements.length >= idx + 1 && (
        <div>
          <button onClick={goPrev}>&lt;</button>
          <span>{announcements[idx]}</span>
          <button onClick={goNext}>&gt;</button>
        </div>
      )}
    </>
  );
}
