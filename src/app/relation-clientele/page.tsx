import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";
import { Metadata } from "next";
import Image from "next/image"; // Importer le composant Image de Next.js

// Tableau contenant les données dynamiques pour la page
const contentData = [
  {
    title: "Relation clientèle",
    description:
      "La SGI-Mali compte de nombreux clients de par le monde qui sont des grandes entreprises, des PME, des Etats, des investisseurs institutionnels et des particuliers. Fournir des prestations ayant le meilleur rapport qualité–prix en mettant à leur disposition une gestion professionnelle pour un investissement rentable tout en tenant compte de leurs objectifs de placement, vaut en retour à la SGI-Mali, leur confiance et leur fidélité. Les stratégies gagnantes sont celles qui créent de la valeur et apportent du sens à votre portefeuille en optimisant le rendement de votre investissement. La SGI-Mali n’a qu’un seul et unique objectif : valoriser le capital de ses clients. Elle met en œuvre à cet effet, une approche originale du marketing relationnel basée sur une expertise qui trouve sa pleine efficacité dans sa capacité à concilier les objectifs du client et les produits offerts.",
    image: "/images/default1.png", // Lien de l'image
  },
];

export const metadata: Metadata = {
  title: "RELATION CLIENTELE | SGI Mali",
  description: "Relation clientèle - Découvrez nos services dédiés à la satisfaction et à l'accompagnement de nos clients.",
  icons: {
    icon: "/favicon.ico", // Icône générale pour le site
    apple: "/apple-touch-icon.png", // Icône pour les appareils Apple
    shortcut: "/apple-touch-icon.png", // Icône pour raccourci de navigateur
  },
  openGraph: {
    title: "RELATION CLIENTELE | SGI Mali", // Titre de la page pour Open Graph
    description: "Nous mettons tout en œuvre pour répondre à vos demandes et assurer une relation clientèle de qualité.",
    url: "https://sgimali-frontend.vercel.app/relation-clientele", // URL canonique de la page
    siteName: "SGI Mali", // Nom du site
    images: [
      {
        url: "https://sgimali-frontend.vercel.app/images/favicon.png", // Image de prévisualisation pour Open Graph
        width: 120, // Largeur de l'image
        height: 120, // Hauteur de l'image
        alt: "Logo SGI Mali", // Texte alternatif pour l'image
      },
    ],
    locale: "fr_FR", // Langue et région
    type: "website", // Type de contenu
  },
  twitter: {
    card: "summary_large_image", // Type de carte Twitter
    title: "RELATION CLIENTELE | SGI Mali", // Titre sur Twitter
    description: "Découvrez comment SGI Mali prend soin de sa clientèle avec des services de qualité.",
    images: ["https://sgimali-frontend.vercel.app/images/favicon.png"], // Image partagée sur Twitter
  },
  manifest: "/site.webmanifest", // Fichier manifeste pour PWA
};

export default function RelationClientele() {
  // Accès aux données depuis le tableau contentData
  const { title, description, image } = contentData[0];

  return (
    <div>

      {/* Section principale */}
      <HeaderPageSection title={title} />

      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Bloc gauche : Texte */}
            <div className="col-md-6">
              <div className="main-page">
                <SectionTitle title={title} />
                <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#555" }}>
                  {description}
                </p>
              </div>
            </div>

            {/* Bloc droit : Image */}
            <div className="col-md-6">
              <div className="main-page">
                <Image
                  src={image}
                  alt="Description de l'image"
                  className="img-fluid"
                  layout="responsive" // Permet d'optimiser la gestion de l'image
                  width={800} // Largeur de l'image
                  height={600} // Hauteur de l'image
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
