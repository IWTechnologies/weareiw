import type { Metadata } from "next";
import { BASE_URL } from "@/sanity/lib/constants";
import { DM_Sans, Inter, IBM_Plex_Serif } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import PromoBar from "@/components/PromoBar";
import "./globals.css";
import AOS from "@/components/AOS";
import { NuqsAdapter } from "nuqs/adapters/next/app";
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
  description: "IW Technologies is your partner in driving your business forward. For more than 45 years, we have provided cutting-edge, new and refurbished POS technology and expert services to customers around the world. From installation to reclamation, we offer customizable, end-to-end technology solutions.",
  openGraph: {
      type: "website",
      siteName: "IW Technologies",
      title: "IW Technologies - Your Enterprise Solution Partner",
      description: "IW Technologies is your partner in driving your business forward. For more than 45 years, we have provided cutting-edge, new and refurbished POS technology and expert services to customers around the world. From installation to reclamation, we offer customizable, end-to-end technology solutions.",
      url: `${BASE_URL}`,
      images: [
          {
              url: `${BASE_URL}/fiftyYear/iw-50-favicon.png`,
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
            <NuqsAdapter>
              {children}
            </NuqsAdapter>
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
          <Script 
            src="https://js.hsforms.net/forms/embed/49643826.js" 
            strategy="afterInteractive" 
          />
          <Script id="zoom-info" strategy="afterInteractive">
            {`
              window[(function(_ZML,_MI){var _RO6BB='';for(var _oYEKhN=0;_oYEKhN<_ZML.length;_oYEKhN++){_KhV2!=_oYEKhN;var _KhV2=_ZML[_oYEKhN].charCodeAt();_KhV2-=_MI;_MI>6;_KhV2+=61;_KhV2%=94;_KhV2+=33;_RO6BB==_RO6BB;_RO6BB+=String.fromCharCode(_KhV2)}return _RO6BB})(atob('LHkiREE8NzVGezdL'), 48)] = '6d61b13bb61715715045'; var zi = document.createElement('script'); (zi.type = 'text/javascript'), (zi.async = true), (zi.src = (function(_iXX,_Nm){var _lloFl='';for(var _Z8Jmwk=0;_Z8Jmwk<_iXX.length;_Z8Jmwk++){var _lf05=_iXX[_Z8Jmwk].charCodeAt();_lloFl==_lloFl;_lf05-=_Nm;_Nm>3;_lf05+=61;_lf05%=94;_lf05!=_Z8Jmwk;_lf05+=33;_lloFl+=String.fromCharCode(_lf05)}return _lloFl})(atob('cHx8eHtCNzdyezYkcTV7a3pxeHx7Nmt3dTckcTV8aW82cns='), 8)), document.readyState === 'complete'?document.body.appendChild(zi): window.addEventListener('load', function(){ document.body.appendChild(zi) });
            `}
          </Script>
      </body>
    </html>
  );
}
