import type { Metadata } from "next";
import "@/themes/lara-light-green/theme.css";
import "./main.css";
import { Announcement } from "@/components/Announcement";
import { zooAnnouncement } from "@/config/announcements";
import { Footer } from "@/components/Footer";
import { zooProfile } from "@/config/profile";
import { Menu } from "@/components/Menu";
import { zooMenu } from "@/config/menu";
import { ButtonLink } from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

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
          <Announcement
            announcements={zooAnnouncement}
            ariaAnnouncementTitle="Zoo Announcement"
          />
          <Menu
            model={zooMenu}
            mobileHomeText="Zoo Negara Malaysia"
            shortcutComponent={
              <ButtonLink
                styling="Secondary"
                href={zooProfile.ticket.admission.url}
              >
                <FontAwesomeIcon icon={faTicket} className="inline mr-2 rotate-45" width={20}/>{zooProfile.ticket.admission.text}
              </ButtonLink>
            }
          />
        </header>
        {children}
        <Footer
          operatingTime={zooProfile.operatingTime}
          address={zooProfile.address}
          companyName={zooProfile.companyName}
          partners={zooProfile.partners}
        />
      </body>
    </html>
  );
}
