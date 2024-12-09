import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";
import SkeletonHeaderPageSection from "@/components/skeleton/SkeletonHeaderPageSection";
import SkeletonRelationClientele from "@/components/skeleton/SkeletonRelationClientele";
import { Metadata } from "next";
import Image from "next/image"; // Importer le composant Image de Next.js

// Type de données
type RelationClienteleData = {
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


// Tableau contenant les données dynamiques pour la page

export const metadata: Metadata = {
  title: "RELATION CLIENTELE | SGI Mali",
  description: "Relation clientèle - Découvrez nos services dédiés à la satisfaction et à l'accompagnement de nos clients.",
  icons: {
    icon: "/favicon.ico", // Icône générale pour le site
    apple: "/apple-touch-icon.png", // Icône pour les appareils Apple
    shortcut: "/apple-touch-icon.png", // Icône pour raccourci de navigateur
  }
}

// Fonction pour récupérer les données de l'Relation clientèle
async function getRelationClientele(): Promise<RelationClienteleData[]> {
  const apiUrl = "https://sgimali-frontend.vercel.app/api/pages";
  const res = await fetch(apiUrl, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Relation clientèle data");
  }

  const pages = await res.json();
  return pages.map((page: Page) => ({
    title: page.title.rendered,
    description: page.content.rendered, // Récupération du contenu HTML
    image: page.featured_image_url || "", // Récupération de l'URL de l'image mise en avant
    slug: page.slug,

  }));
}


export default async function RelationClientele() {
  // Accès aux données depuis le tableau contentData
  // const { title, description, image } = contentData[0];

  // Récupérer les données depuis l'API
  const dataRelationClientele = await getRelationClientele();
  //si le slug
  if (!dataRelationClientele || dataRelationClientele.length === 0) {
    return <SkeletonRelationClientele />;
  }

  // Si une des pages a un slug égal à "Relation clientèle", cette page sera retournée par la méthode find() et assignée à la variable Relation clientèle.
  const datarelationclientele = dataRelationClientele.find(page => page.slug === "relation-clientele");

  if (!datarelationclientele) {
    return (
      <SkeletonHeaderPageSection/>
    );
  }
  
  

  return (
    <div>            
      <HeaderPageSection title={datarelationclientele.title} />      
      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Bloc gauche : Texte */}
            <div className="col-md-6">
              <div className="main-page">
                <SectionTitle title={datarelationclientele.title} />
                <div
                  className="Relation clientèle-description"
                  style={{ fontSize: 14, lineHeight: 1.8, color: "#555" }}
                  dangerouslySetInnerHTML={{ __html: datarelationclientele.description }} // Affichage du contenu HTML
                />
              </div>
            </div>

            {/* Bloc droit : Image */}
            <div className="col-md-6">
              <div className="main-page">
                <Image
                  src={datarelationclientele.image} // Source de l'image
                  alt="Relation clientèle SGI Mali" // Texte alternatif
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
