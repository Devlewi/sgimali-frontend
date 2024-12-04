import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "MISSION | SGI Mali",
  description: "Page Mission de SGI Mali",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MISSION | SGI Mali",
    description: "Page Mission de SGI Mali",
    url: "https://frontend-weld-three.vercel.app/mission", // URL de la page de la mission
    siteName: "SGI Mali",
    images: [
      {
        url: "https://frontend-weld-three.vercel.app/images/logo-og.png", // Image pour l'Open Graph
        width: 120,
        height: 120,
        alt: "Logo SGI Mali",
      },
    ],
    locale: "fr_FR", // Langue française
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Type de carte Twitter
    title: "MISSION | SGI Mali",
    description: "Page Mission de SGI Mali",
    images: ["https://frontend-weld-three.vercel.app/images/logo-og.png"], // Image pour Twitter
  },
  manifest: "/site.webmanifest", // Manifest du site
};


const contentData = {
  title: "Mission",
  text: `La SGI-Mali a pour mission l’intermédiation entre les capacités de financement et
           les besoins en financement en vue du développement économique et l’accroissement de
           la richesse des actionnaires des entreprises, celle des investisseurs particuliers
           et institutionnels ainsi que toutes les autres parties prenantes.

           Elle se veut donc être l’intermédiaire de ses clients pour accéder au marché
           financier. Elle peut acheter et/ou vendre des titres (actions, obligations, billets,
           etc.) pour le compte de ses clients, personnes physiques ou morales, soit à la
           Bourse régionale des valeurs mobilières (BRVM), soit lors de nouvelles émissions de
           titres par appel public à l'épargne sur le marché dans la zone UEMOA.`,
  imageSrc: "/images/default1.png",
  imageAlt: "Description de l'image",
};

export default function Mission() {
  return (
    <div>
      
      <HeaderPageSection title={contentData.title} />

      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Bloc gauche : Texte */}
            <div className="col-md-6">
              <div className="main-page">
                <SectionTitle title={contentData.title} />
                <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#555" }}>
                  {contentData.text}
                </p>
              </div>
            </div>

            {/* Bloc droit : Image */}
            <div className="col-md-6">
              <div className="main-page">
                <Image
                  src={contentData.imageSrc}
                  alt={contentData.imageAlt}
                  width={500}
                  height={300}
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
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
