import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";
import SkeletonHeaderPageSection from "@/components/skeleton/SkeletonHeaderPageSection";
import SkeletonTemplatePages from "@/components/skeleton/SkeletonTemplatePages";
import { Metadata } from "next";


// Type de données
type TelechargementData = {
  title: string;
  description: string;
  image: string;
  slug: string;
  acf: {
    elements: Array<{
      libelle: string;
      description: string;
      pdf: number;
      date_de_mise_a_jour: string;
    }>;
  };
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
  acf: {
    elements: Array<{
      libelle: string;
      description: string;
      pdf: number;
      date_de_mise_a_jour: string;
    }>;
  };
}

export const metadata: Metadata = {
  title: "TELECHARGEMENT | SGI Mali",
  description: "Page telechargement SGI Mali",
  icons: {
    icon: "/favicon.ico", // Icône générale pour le site
    apple: "/apple-touch-icon.png", // Icône pour les appareils Apple
    shortcut: "/apple-touch-icon.png", // Icône pour raccourci de navigateur
  }
}

// Fonction pour récupérer l'URL du média (PDF) à partir de son ID
async function getMediaUrlById(mediaId: number): Promise<string> {
  const apiUrl = `https://sgi.cynomedia-africa.com/wp-json/wp/v2/media/${mediaId}`;
  const res = await fetch(apiUrl);

  if (!res.ok) {
    const errorData = await res.text(); // Afficher les détails de l'erreur
    throw new Error(`Failed to fetch media with ID ${mediaId}: ${errorData}`);
  }

  const mediaData = await res.json();
  return mediaData.source_url;  // Retourner l'URL du média
}

// Fonction pour récupérer les données de l'telechargement
async function getTelechargement(): Promise<TelechargementData[]> {
  const apiUrl = "https://sgi.cynomedia-africa.com/wp-json/wp/v2/pages?per_page=30";
  const res = await fetch(apiUrl, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch telechargement data");
  }

  const pages = await res.json();
  return pages.map((page: Page) => ({
    title: page.title.rendered,
    description: page.content.rendered,
    image: page.featured_image_url || "",
    slug: page.slug,
    acf: page.acf,  // Inclure les éléments ACF dans les données
  }));
}

export default async function Telechargement() {
  const dataHistorique = await getTelechargement();
  if (!dataHistorique || dataHistorique.length === 0) {
    return <SkeletonTemplatePages />;
  }

  const telechargement = dataHistorique.find(page => page.slug === "telechargement");

  if (!telechargement) {
    return (
      <SkeletonHeaderPageSection />
    );
  }

  // Récupérer les liens PDF pour chaque élément
  const elementsWithPdfUrl = await Promise.all(
    telechargement.acf.elements.map(async (element) => {
      const pdfUrl = await getMediaUrlById(element.pdf);
      return { ...element, pdfUrl };
    })
  );

  return (
    <div>
      <HeaderPageSection title={telechargement.title} />
      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="main-page">
                <SectionTitle title={telechargement.title} />
                <div
                  className="telechargement-description"
                  style={{ fontSize: 14, lineHeight: 1.8, color: "#555" }}
                  dangerouslySetInnerHTML={{ __html: telechargement.description }} // Affichage du contenu HTML
                />

                {/* Liste des éléments ACF avec lien de téléchargement */}
                <div className="col-md-12">
                  <div className="list-job-warp">
                    <div className="table-warp">
                      <div className="table-responsive">
                        <table className="table table-hover table-reset">
                          <thead>
                            <tr>
                              <th>Nom</th>
                              <th>Description</th>
                              <th>Mise à jour le</th>
                              <th>Télécharger</th>
                            </tr>
                          </thead>
                          <tbody>
                            {elementsWithPdfUrl.map((element, index) => (
                              <tr key={index}>
                                <td>
                                  
                                  <a href={element.pdfUrl} target="_blank" rel="noopener noreferrer">
                                  {element.libelle}
                                  </a>
                                  </td>
                                <td>{element.description}</td>
                                <td>{element.date_de_mise_a_jour}</td>
                                <td>
                                  {/* Lien de téléchargement du fichier PDF */}
                                  <a href={element.pdfUrl} target="_blank" rel="noopener noreferrer">
                                    Télécharger
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
