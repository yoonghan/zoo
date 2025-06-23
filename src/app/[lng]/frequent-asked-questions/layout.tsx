import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequent Asked Questions",
  description: "Frequent Asked Question about the Zoo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
