import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zoo Negara Malaysia",
  description:
    "Zoo Negara was officially opened on 14th November 1963 and has matured into a well-known zoo all around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
