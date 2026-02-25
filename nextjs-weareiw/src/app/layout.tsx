import type { Metadata } from "next";
import { DM_Sans, Inter, IBM_Plex_Serif } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import PromoBar from "@/components/PromoBar";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "IW Technologies - Your Enterprise Solution Partner",
  description: "IW Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${ibmPlexSerif.variable}`}>
      <body
        className="flex flex-col min-h-screen font-body text-base lg:text-lg antialiased">
        <PromoBar />
        <Header 
          link={{
            href: "#",
            label: "Get In Touch",
            variant: "light",
          }}
        />
        <main className="grow">
          {children}
        </main>
        <Footer 
          link={{
            href: "#",
            label: "Get In Touch",
            variant: "dark",
          }}
          />
      </body>
    </html>
  );
}
