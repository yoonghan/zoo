import "@/themes/lara-light-green/theme.css";
import "./main.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="
            default-src 'self' 'unsafe-inline';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
            style-src 'self' 'unsafe-inline';
            img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;
            connect-src 'self' https://www.google-analytics.com https://analytics.google.com;
          "
        ></meta>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4GRBN4E8PX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4GRBN4E8PX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}