import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
