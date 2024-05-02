import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Event",
  description: "Family day event in the zoo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
