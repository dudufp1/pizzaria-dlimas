import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizzaria D'Limas - Pizzas Gourmet em Ceilândia, Brasília",
  description: "A melhor pizzaria de Ceilândia, Brasília. Pizzas tradicionais, premium e doces com qualidade premium. Entrega e retirada. (61) 99527-9317",
  keywords: "pizzaria, pizzas, Ceilândia, Brasília, delivery, pizza gourmet, pizza tradicional",
  openGraph: {
    title: "Pizzaria D'Limas - Pizzas Gourmet em Ceilândia, Brasília",
    description: "A melhor pizzaria de Ceilândia, Brasília. Pizzas tradicionais, premium e doces com qualidade premium.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pizzaria D'Limas",
              image: "",
              telephone: "+5561995279317",
              address: {
                "@type": "PostalAddress",
                streetAddress: "CEILÂNDIA NORTE QNQ 04 CONJUNTO 1 LOTE 26",
                addressLocality: "Ceilândia",
                addressRegion: "DF",
                postalCode: "72260-401",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-15.7801",
                longitude: "-47.9292",
              },
              url: "https://www.google.com.br/maps/place/Pizzaria+D%E2%80%99Limas/",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
                  opens: "18:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday", "Sunday"],
                  opens: "18:00",
                  closes: "23:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
