import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting There",
  description: "Tips to get to Zoo Negara, Malaysia in Ampang, Kuala Lumpur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
