import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Involved",
  description: "Be a part of a animal lover of Zoo Negara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
