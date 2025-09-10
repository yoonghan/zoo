"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const measurementId = "G-4GRBN4E8PX";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ReactGA.initialize(measurementId);
  }, []);

  useEffect(() => {
    const url = pathname + searchParams.toString();
    ReactGA.send({ hitType: "pageview", page: url });
  }, [pathname, searchParams]);

  return null;
}
