import type { Metadata } from "next";
import { PrimeReactProvider } from 'primereact/api';
import "@/themes/lara-light-green/theme.css";

export const metadata: Metadata = {
  title: "Zoo Negara Malaysia",
  description: "A non-governmental organization established to create the first local zoo for Malaysians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <html lang="en">
        <body >
          <PrimeReactProvider>
              {children}
          </PrimeReactProvider>
        </body>
      </html>
    );
}