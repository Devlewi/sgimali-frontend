import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";
import SkeletonHeaderPageSection from "@/components/skeleton/SkeletonHeaderPageSection";
import SkeletonHistorique from "@/components/skeleton/SkeletonHistorique";
import { Metadata } from "next";
import Image from "next/image";


// Type de données
type HistoriqueData = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

interface Page {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_image_url?: string;
  slug: string;
}


export const metadata: Metadata = {
  title: "HISTORIQUE | SGI Mali",
  description: "Page d'historique de SGI Mali",
  icons: {
    icon: "/favicon.ico", // Icône générale pour le site
    apple: "/apple-touch-icon.png", // Icône pour les appareils Apple
    shortcut: "/apple-touch-icon.png", // Icône pour raccourci de navigateur
  },
  openGraph: {
    title: "HISTORIQUE | SGI Mali", // Titre de la page pour Open Graph
    description: "Découvrez l'historique et les réalisations de SGI Mali.",
    url: "https://sgimali-frontend.vercel.app/historique", // URL canonique de la page
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
    title: "HISTORIQUE | SGI Mali", // Titre sur Twitter
    description: "Découvrez l'historique et les réalisations de SGI Mali.",
    images: ["https://sgimali-frontend.vercel.app/images/favicon.png"], // Image partagée sur Twitter
  },
  manifest: "/site.webmanifest", // Fichier manifeste pour PWA
};

// Fonction pour récupérer les données de l'historique
async function getHistorique(): Promise<HistoriqueData[]> {
  const apiUrl = "https://sgi.cynomedia-africa.com/wp-json/wp/v2/pages";
  const res = await fetch(apiUrl, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch historique data");
  }

  const pages = await res.json();
  return pages.map((page: Page) => ({
    title: page.title.rendered,
    description: page.content.rendered, // Récupération du contenu HTML
    image: page.featured_image_url || "/images/default.png", // Récupération de l'URL de l'image mise en avant
    slug: page.slug,

  }));
}

export default async function Historique() {
  // Récupérer les données depuis l'API
  const dataHistorique = await getHistorique();
  //si le slug
  if (!dataHistorique || dataHistorique.length === 0) {
    return <SkeletonHistorique />;
  }

  // Si une des pages a un slug égal à "historique", cette page sera retournée par la méthode find() et assignée à la variable historique.
  const historique = dataHistorique.find(page => page.slug === "historique");

  if (!historique) {
    return (
      <></>
    );
  }
  
    
  return (
    <div>
      <HeaderPageSection title={historique.title} />      
      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Bloc gauche : Texte */}
            <div className="col-md-6">
              <div className="main-page">
                <SectionTitle title={historique.title} />
                <div
                  className="historique-description"
                  style={{ fontSize: 14, lineHeight: 1.8, color: "#555" }}
                  dangerouslySetInnerHTML={{ __html: historique.description }} // Affichage du contenu HTML
                />



              </div>
            </div>

            {/* Bloc droit : Image */}
            <div className="col-md-6">
              <div className="main-page">
                <Image
                  src={historique.image} // Source de l'image
                  alt="Historique SGI Mali" // Texte alternatif
                  className="img-responsive"
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  width={500}
                  height={300}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
