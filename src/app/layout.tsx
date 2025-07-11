import "@/themes/lara-light-green/theme.css";
import "./main.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body>{children}</body>
    </html>
  );
}
