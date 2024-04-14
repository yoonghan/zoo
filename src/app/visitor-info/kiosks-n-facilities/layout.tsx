import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kioks And Facilities",
  description: "Food, Souvenir Kiosks And Facilities within Zoo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
