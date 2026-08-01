import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VANZASHOP | Marketplace Specialists",
  description:
    "VANZASHOP helps brands grow on Brazil's leading marketplaces with consulting, automation and premium operations support.",
  keywords: [
    "marketplace management",
    "e-commerce consulting",
    "Mercado Livre",
    "Amazon",
    "Shopee",
    "Magalu",
  ],
  openGraph: {
    title: "VANZASHOP | Marketplace Specialists",
    description:
      "Premium marketplace management and consulting for brands seeking sustainable growth in Brazil.",
    url: "https://www.vanzashop.com.br",
    siteName: "VANZASHOP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VANZASHOP | Marketplace Specialists",
    description:
      "Premium marketplace management and consulting for brands seeking sustainable growth in Brazil.",
  },
  alternates: {
    canonical: "https://www.vanzashop.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-slate-900">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VANZASHOP",
              url: "https://www.vanzashop.com.br",
              logo: "https://www.vanzashop.com.br/logo.png",
              description:
                "Marketplace specialists helping brands scale across Brazil's largest e-commerce channels.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Caxias do Sul",
                addressRegion: "RS",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-54-99998-1574",
                contactType: "sales",
                email: "vanzashop@vanzashop.com.br",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
