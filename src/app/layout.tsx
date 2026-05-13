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
        <Script id="clientify-whatsapp" strategy="afterInteractive">
          {`
            (function() {
              var script = document.createElement('script');
              script.async = true;
              script.innerHTML = '(function (w, d) { setTimeout(() => {var iwapp = d.createElement("whatsApp-root");d.getElementsByTagName("body")[0].appendChild(iwapp);w.Clientify_WhatsappBID = "168100";w.Clientify_WhatsappUID = "27235";var h = d.head || d.getElementsByTagName("head")[0];var s = d.createElement("script");s.setAttribute("type", "text/javascript");s.setAttribute("src", "https://api.clientify.net/static/js/whatsapp-widget/embed-whatsapp/embed.js");h.appendChild(s);}, 1000)})(window, document);';
              document.body.appendChild(script);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
