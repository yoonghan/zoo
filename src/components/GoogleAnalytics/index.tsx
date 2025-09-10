"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ReactGA from "react-ga4";

type Props = {
  measurementId?: string;
};

export default function GoogleAnalytics({ measurementId }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId) {
      return;
    }
    ReactGA.initialize(measurementId);
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId) {
      return;
    }
    const url = pathname + searchParams.toString();
    ReactGA.send({ hitType: "pageview", page: url });
  }, [pathname, searchParams, measurementId]);

  return null;
}
