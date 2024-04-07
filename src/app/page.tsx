"use client";

import { Announcement } from "@/components/Announcement";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { zooAnnouncement } from "@/config/announcements";
import { zooMenu } from "@/config/menu";
import { zooProfile } from "@/config/profile";

export default function Home() {
  return (
    <>
      <header>
        <Announcement announcements={zooAnnouncement} />
        <Menu model={zooMenu} mobileHomeText="Zoo Negara Malaysia" />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
      <Footer
        operatingTime={zooProfile.operatingTime}
        contact={zooProfile.contact}
        address={zooProfile.address}
        companyName={zooProfile.companyName}
        partners={zooProfile.partners}
      />
    </>
  );
}
