'use client'

import { ButtonLink } from "@/components/Button";
import ReactGA from "react-ga4";

interface DownloadButtonProps {
  lng: string;
  text: string;
}

export default function DownloadButton({ lng, text }: Readonly<DownloadButtonProps>) {
  const onDownloadClick = () => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: `Download Map - ${lng}`,
    });
  };

  return (
    <ButtonLink
      href="/images/zoo-negara-map.jpg"
      download={true}
      styling="Secondary"
      onClick={onDownloadClick}
    >
      {text}
    </ButtonLink>
  );
}
