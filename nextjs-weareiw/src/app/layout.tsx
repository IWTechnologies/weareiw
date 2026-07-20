import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import { DM_Sans, Inter, IBM_Plex_Serif } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import PromoBar from "@/components/PromoBar";
import "./globals.css";
import AOS from "@/components/AOS";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
});

const umamiID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export const metadata: Metadata = {
  title: "IW Technologies - Your Enterprise Solution Partner",
  description: "IW Technologies powers tech ecosystems for top brands in Retail, QSR, Grocery, Hospitality, Convenience, Distribution.",
  openGraph: {
      type: "website",
      siteName: "IW Technologies",
      title: "IW Technologies - Your Enterprise Solution Partner",
      description: "IW Technologies powers tech ecosystems for top brands in Retail, QSR, Grocery, Hospitality, Convenience, Distribution.",
      url: `${BASE_URL}`,
      images: [
          {
              url: `${BASE_URL}/iw-logo-simple.png`,
              alt: 'IW Technologies',
          }
      ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth"
    className={`${dmSans.variable} ${inter.variable} ${ibmPlexSerif.variable}`}>
      <body
        className="flex flex-col min-h-screen min-w-[320px] font-body text-base lg:text-lg antialiased">
        <PromoBar />
        <Header 
          link={{
            href: "/get-in-touch",
            label: "Get In Touch",
            variant: "light",
          }}
        />
        <AOS>
          <main className="grow">
            {children}
          </main>
        </AOS>
        <Footer 
          link={{
            href: "/get-in-touch",
            label: "Get In Touch",
            variant: "dark",
          }}
          />
          <Script
            src="https://cloud.umami.is/script.js" 
            data-website-id={umamiID}
            strategy="afterInteractive" 
          />
      </body>
    </html>
  );
}
