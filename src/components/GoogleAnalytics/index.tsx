"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { systemConfig } from "@/config/system";

const measurementId = systemConfig["google-analytic-measurement-id"];

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId) {
      return;
    }
    ReactGA.initialize(measurementId);
  }, []);

  useEffect(() => {
    if (!measurementId) {
      return;
    }
    const url = pathname + searchParams.toString();
    ReactGA.send({ hitType: "pageview", page: url });
  }, [pathname, searchParams]);

  return null;
}