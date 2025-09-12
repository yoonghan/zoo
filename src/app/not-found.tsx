'use client'

import { ButtonLink } from "@/components/Button";
import { systemConfig } from "@/config/system";
import { Link } from "@/components/Link";
import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function NotFound() {

  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (measurementId) {
      ReactGA.initialize(measurementId);
      ReactGA.send({ hitType: "pageview", page: "/404" });
    }
  }, []);

  return (
    <div className="bg-gray-100 bg-[url(/images/not-found.webp)] bg-cover">
      <div className="bg-white/50 w-screen h-screen flex flex-col items-center text-center ">
        <main className="flex-auto justify-center">
          <div className="p-8">
            <h1 className="text-4xl font-bold">404</h1>This page is not found
          </div>
          <ButtonLink href={systemConfig.url} styling="Primary">
            Return to Zoo Page
          </ButtonLink>
        </main>
        <hr className="my-4 border-t w-screen" />
        <footer className="flex-none pb-16">
          <p>
            To navigate our website, checkout{" "}
            <Link href={`/en/sitemap`}>Sitemap</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
