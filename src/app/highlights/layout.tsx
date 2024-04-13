import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Highlights",
  description: "Interesting events and highlights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
