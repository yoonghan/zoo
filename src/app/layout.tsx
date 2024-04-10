import type { Metadata } from "next";
import "@/themes/lara-light-green/theme.css";
import "./main.css";
import { Announcement } from "@/components/Announcement";
import { Menu } from "@/components/Menu";
import { zooMenu } from "@/config/menu";
import { zooAnnouncement } from "@/config/announcements";
import { Footer } from "@/components/Footer";
import { zooProfile } from "@/config/profile";
import { Link } from "@/components/Button";

export const metadata: Metadata = {
  title: "Zoo Negara Malaysia",
  description:
    "A non-governmental organization established to create the first local zoo for Malaysians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Announcement announcements={zooAnnouncement} />
          <Menu
            model={zooMenu}
            mobileHomeText="Zoo Negara Malaysia"
            shortcutComponent={
              <Link styling="Secondary" href={zooProfile.ticket.admission.url}>
                {zooProfile.ticket.admission.text}
              </Link>
            }
          />
        </header>
        {children}
        <Footer
          operatingTime={zooProfile.operatingTime}
          contact={zooProfile.contact}
          address={zooProfile.address}
          companyName={zooProfile.companyName}
          partners={zooProfile.partners}
        />
      </body>
    </html>
  );
}
