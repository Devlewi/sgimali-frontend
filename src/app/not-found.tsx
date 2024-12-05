import React from "react";
import HeaderPageSection from "@/components/HeaderPageSection";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Non Trouvée | SGI Mali",
  description: "La page demandée est introuvable.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Page Non Trouvée | SGI Mali",
    description: "La page demandée est introuvable.",
    url: "https://frontend-weld-three.vercel.app/404",
    siteName: "SGI Mali",
    images: [
      {
        url: "https://frontend-weld-three.vercel.app/images/favicon.png",
        width: 120,
        height: 120,
        alt: "Logo SGI Mali",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Non Trouvée | SGI Mali",
    description: "La page demandée est introuvable.",
    images: ["https://frontend-weld-three.vercel.app/images/favicon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function NotFound() {
  return (
    <div>
      <HeaderPageSection title="404 - Page Non Trouvée" />
      <section style={{ padding: "50px 0", textAlign: "center" }}>
        <div className="container">
          <div>
            <h1 style={{ fontSize: "36px", color: "#333", marginBottom: "20px" }}>
              Oups ! Cette page est introuvable.
            </h1>
            <p style={{ fontSize: "16px", color: "#555", marginBottom: "30px" }}>
              Il semble que la page que vous cherchez n'existe pas ou a été déplacée.
            </p>
            <a href="/" className="btn btn-primary btn_valider_newsletter">
              Retourner à l'accueil
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
