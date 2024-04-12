import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accreditation / Certification/",
  description: "Accreditation and cretificate awarded to the zoo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
