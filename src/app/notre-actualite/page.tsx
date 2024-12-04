import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ACTUALITE | SGI Mali", // Titre de la page affiché dans le navigateur et pour le SEO
  description: "Les dernières actualités et événements de SGI Mali. Découvrez nos nouvelles informations et mises à jour.",
  icons: {
    icon: ["/favicon.ico"], // Icône générale pour le site
    apple: ["/apple-touch-icon.png"], // Icône pour les appareils Apple
    shortcut: ["/apple-touch-icon.png"], // Icône pour les raccourcis d'écran d'accueil sur mobile
  },
  openGraph: {
    title: "ACTUALITE | SGI Mali", // Titre de la page pour Open Graph
    description: "Les dernières actualités et événements de SGI Mali. Découvrez les mises à jour et nouvelles informations.",
    url: "https://frontend-weld-three.vercel.app/actualite", // URL canonique de la page des actualités
    siteName: "SGI Mali", // Nom du site pour Open Graph
    images: [
      {
        url: "https://frontend-weld-three.vercel.app/images/favicon.png", // Image utilisée pour la prévisualisation sur les réseaux sociaux
        width: 120, // Largeur de l'image
        height: 120, // Hauteur de l'image
        alt: "Logo SGI Mali", // Texte alternatif pour l'image
      },
    ],
    locale: "fr_FR", // Langue et région pour Open Graph
    type: "website", // Type de contenu
  },
  twitter: {
    card: "summary_large_image", // Type de carte Twitter (avec une grande image)
    title: "ACTUALITE | SGI Mali", // Titre sur Twitter
    description: "Les dernières actualités et événements de SGI Mali. Découvrez nos nouvelles informations.",
    images: ["https://frontend-weld-three.vercel.app/images/favicon.png"], // Image partagée sur Twitter
  },
  manifest: "/site.webmanifest", // Lien vers le manifeste pour la Progressive Web App (PWA)
};


export default function Nosactualites() {
  const newsItems = [
    {
      tag: "Actualité",
      imageSrc: "/images/News/n7.jpeg",
      title:
        "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#",
    },
    {
      tag: "After Work",
      imageSrc: "/images/News/n8.jpeg",
      title:
        "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#",
    },
    {
      tag: "Cérémonie",
      imageSrc: "/images/News/n9.jpeg",
      title:
        "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#",
    },
    {
      tag: "After Work",
      imageSrc: "/images/News/n8.jpeg",
      title:
        "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#",
    },
    {
      tag: "Cérémonie",
      imageSrc: "/images/News/n9.jpeg",
      title:
        "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#",
    },
    {
      tag: "After Work",
      imageSrc: "/images/News/n8.jpeg",
      title:
        "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#",
    },
    {
      tag: "Cérémonie",
      imageSrc: "/images/News/n9.jpeg",
      title:
        "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#",
    },
    {
      tag: "After Work",
      imageSrc: "/images/News/n8.jpeg",
      title:
        "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#",
    },
    {
      tag: "Cérémonie",
      imageSrc: "/images/News/n9.jpeg",
      title:
        "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#",
    },
  ];

  return (
    <div>
      
      {/* Header Section */}
      <HeaderPageSection title="Actualité" />

      {/* Main Content Section */}
      <section style={{ padding: "39px 0" }}>
      <div className="container">
        <SectionTitle title="Nos articles" />

        <div className="row" style={{ marginBottom: 20 }}>
          {newsItems.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="news-card shadow">
              <a href={item.link}>
                <div className="news-tag">{item.tag}</div>
                <Image src={item.imageSrc} className="img-fluid news-image" alt={item.tag} width={570} height={380} />
              </a>
              <div className="news-content p-3" style={{ padding: 20 }}>
                <h4 className="news-title">
                  <a href={item.link} className="text-decoration-none" style={{ color: "#021039" , fontWeight: 600 }}>
                    {item.title}
                  </a>
                </h4>
                <p className="news-date text-muted mt-2">{item.date}</p>
              </div>
            </div>
          </div>
          ))}
  
  {/**met le code de pagination ici et qu il soit vercticalement aligné sous les articles ici**/}
  </div>
  

  <ul className="pagine">
      <li>
        <a href="#" className="previous">Préc</a>
      </li>
      <li>
        <a href="#" className="page">1</a>
      </li>
      <li>
        <a href="#" className="page">2</a>
      </li>
      <li>
        <a href="#" className="next">Suiv</a>
      </li>
    </ul>




      </div>
      </section>
    </div>
  );
}
