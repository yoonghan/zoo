"use client";

import { Announcement } from "@/components/Announcement";
import { Menu } from "@/components/Menu";
import { zooAnnouncement } from "@/config/announcements";
import { zooMenu } from "@/config/menu";

export default function Home() {
  return (
    <>
      <header>
        <Announcement announcements={zooAnnouncement} />
        <Menu model={zooMenu} />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
