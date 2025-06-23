import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoo Map",
  description: "Zoo Map and structure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
