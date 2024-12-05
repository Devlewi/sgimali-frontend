import { Metadata } from "next";
import Head from "next/head";
import "animate.css";

import ClientCarousel from "@/components/ClientCarousel";
import BigSlider from "@/components/BigSlider";
import NosActualites from "@/components/NosActualites";
import NoServices from "@/components/NoServices";
import MotPresident from "@/components/MotPresident";

export const metadata: Metadata = {
  title: "ACCUEIL | SGI Mali",
  description: "Page d'accueil de SGI Mali",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    images: [
      { url: "https://sgimali-frontend.vercel.app/images/favicon.png" },
    ],
  },
  manifest: "/site.webmanifest",
};


export default function Home() {
  return (
    <div>
      <Head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="ACCUEIL | SGI Mali" />
        <meta property="og:description" content="Page d'accueil de SGI Mali" />
        <meta
          property="og:url"
          content="https://sgimali-frontend.vercel.app/"
        />
        <meta property="og:site_name" content="SGI Mali" />
        <meta property="og:image" content="/images/logo-og.png" />
        <meta property="og:image:width" content="120" />
        <meta property="og:image:height" content="120" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ACCUEIL | SGI Mali" />
        <meta name="twitter:description" content="Page d'accueil de SGI Mali" />
        <meta name="twitter:image" content="/images/logo-og.png" />

        <title>SGI MALI</title>
      </Head>

      {/* Slider */}
      <BigSlider/>
      {/* /Slider */}

      <MotPresident/>


      <NoServices/>

      <NosActualites/>

      <ClientCarousel/>

    </div>
  );
}
