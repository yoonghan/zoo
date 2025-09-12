'use client'

import { ButtonLink } from "@/components/Button";
import { trackEvent } from "@/util/ga";

interface DownloadButtonProps {
  lng: string;
  text: string;
}

export default function DownloadButton({ lng, text }: Readonly<DownloadButtonProps>) {
  const onDownloadClick = () => {
    trackEvent("Button", "Click", `Download Map - ${lng}`);
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
