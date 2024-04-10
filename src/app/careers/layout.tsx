import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
  description: "Come work with us, great opportunities ahead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
