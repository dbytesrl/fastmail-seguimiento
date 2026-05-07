import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fastmail - Seguimiento de Envíos",
  description: "Consultá el estado de tu envío en tiempo real con Fastmail",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-fastmail-dark">
        {children}
        <Script src="https://api.clientify.net/web-marketing/webforms/script/145890.js" strategy="afterInteractive" />
        <Script src="https://api.clientify.net/web-marketing/chatbots/script/168100.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
