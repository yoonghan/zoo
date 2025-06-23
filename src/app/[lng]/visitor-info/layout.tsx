import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visitor Info",
  description: "Visitor information about zoo opening hours and facilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
