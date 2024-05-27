import "./globals.css";
import { cx } from "@/src/utils";
// import { Inter, Manrope } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";
import siteMetadata from "../utils/siteMetaData";
import Script from "next/script";
import AdScript from "../components/AdScript";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-in",
// });

// const manrope = Manrope({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-mr",
// });

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: `%s | ${siteMetadata.description}`,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          // inter.variable,
          // manrope.variable,
          " font-mr bg-light dark:bg-dark"
        )}
      >

    {/* infolinks tags */}
      {/* <Script type="text/javascript">
        var infolinks_pid = 3415703;
        var infolinks_wsid = 0;
      </Script>
      <Script type="text/javascript" src="http://resources.infolinks.com/js/infolinks_main.js"></Script> */}


      {/* <AdScript /> */}


      {/* Google tag (gtag.js) */}
        <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZVVFK6NSPJ"
      />


      <Script id="" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config','G-ZVVFK6NSPJ', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
        {children}
      </body>
    </html>
  );
}
