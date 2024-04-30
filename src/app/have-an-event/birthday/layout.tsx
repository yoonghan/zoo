import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birthday Event",
  description: "Have a birthday event in the zoo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
