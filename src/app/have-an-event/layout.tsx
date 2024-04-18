import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Have an Event",
  description: "Organize an event at the zoo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
