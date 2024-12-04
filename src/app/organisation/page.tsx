import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";
import { Metadata } from "next";
import Image from "next/image";

// Définition des métadonnées
export const metadata: Metadata = {
  title: "ORGANISATION | SGI Mali",
  description: "Découvrez l'organisation de SGI Mali et son équipe de professionnels.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    title: "ORGANISATION | SGI Mali",
    description: "Découvrez l'organisation de SGI Mali et son équipe de professionnels.",
    url: "https://frontend-weld-three.vercel.app/organisation", // URL de la page de l'organisation
    siteName: "SGI Mali",
    images: [
      {
        url: "https://frontend-weld-three.vercel.app/images/logo-og.png", // URL de l'image d'aperçu
        width: 120,
        height: 120,
        alt: "Logo SGI Mali",
      },
    ],
    locale: "fr_FR",  // Langue et région
    type: "website",  // Type de contenu
  },
  twitter: {
    card: "summary_large_image",  // Type de carte Twitter
    title: "ORGANISATION | SGI Mali",
    description: "Découvrez l'organisation de SGI Mali et son équipe de professionnels.",
    images: ["https://frontend-weld-three.vercel.app/images/logo-og.png"],  // Image pour Twitter
  },
  manifest: "/site.webmanifest",  // Chemin vers le manifeste
};


const contentData = {
  leftImage: {
    src: "/images/default1.png",
    alt: "Image de l'organisation SGI Mali",
    width: 600,  // Largeur spécifiée
    height: 400, // Hauteur spécifiée
  },
  rightImage: {
    src: "/images/default1.png",
    alt: "Autre vue de l'organisation SGI Mali",
    width: 600,  // Largeur spécifiée
    height: 400, // Hauteur spécifiée
  },
  sectionTitle: "Organisation de SGI Mali",
  sectionDescription:
    "SGI Mali est une organisation de premier plan dans le domaine des investissements et de la gestion de portefeuilles. Nous combinons expertise, réactivité, et savoir-faire pour offrir des solutions adaptées à nos clients.",
};


export default function Organisation() {
  return (
    <div>
      
      <HeaderPageSection title={"Organisation"} />

      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <SectionTitle title={contentData.sectionTitle} />

          <div className="row align-items-center">
            {/* Bloc gauche : Texte avec Image */}
            <div className="col-md-6" style={{ marginBottom: 20 }}>
              <div className="main-page">
              <Image
                  src={contentData.leftImage.src}
                  alt={contentData.leftImage.alt}
                  width={contentData.leftImage.width}
                  height={contentData.leftImage.height}
                  className="img-responsive"  // Ajout de la classe img-fluid pour rendre l'image responsive
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            </div>

            {/* Bloc droit : Image */}
            <div className="col-md-6">
              <div className="main-page">
              <Image
                  src={contentData.rightImage.src}
                  alt={contentData.rightImage.alt}
                  width={contentData.rightImage.width}
                  height={contentData.rightImage.height}
                  className="img-responsive"  // Ajout de la classe img-fluid pour rendre l'image responsive
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            </div>
          </div>


          
        </div>
      </section>
    </div>
  );
}
