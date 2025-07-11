import { ButtonLink } from "@/components/Button";
import { systemConfig } from "@/config/system";
import { Link } from "@/components/Link";

export default function NotFound() {
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
