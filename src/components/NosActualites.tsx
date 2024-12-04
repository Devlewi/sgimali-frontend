import React from 'react';
import Image from 'next/image'; // Importation de Image si vous utilisez Next.js
import Link from 'next/link';

const NosActualites = () => {
  // Données dynamiques pour la section "Notre actualité"
  const contentData = {
    title: "Notre actualité",
    description: "Les dernières nouvelles et événements",
    subtitleStyle: { fontSize: 15, lineHeight: 2 },
    titleStyle: { fontSize: 28, color: "#021039" },
    marginTop: "-150px",
  };

  const newsItems = [
    {
      tag: "Actualité",
      imageSrc: "/images/News/n7.jpeg",
      title: "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#"
    },
    {
      tag: "After Work",
      imageSrc: "/images/News/n8.jpeg",
      title: "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#"
    },
    {
      tag: "Cérémonie",
      imageSrc: "/images/News/n9.jpeg",
      title: "NESTLE CI affiche un résultat net de 8 milliards FCFA au premier semestre 2023...",
      date: "Le 21 Novembre 2024",
      link: "#"
    },
    // Ajoutez plus d'objets pour les autres cartes
  ];

  return (
    <section className="bg-case-h9 py-5">
      <div className="container">
        {/* Titre de la section */}
        <div className="title-block text-center title-pd" style={{ marginTop: contentData.marginTop }}>
          <h3 style={contentData.titleStyle}>{contentData.title}</h3>
          <p className="sub-title" style={contentData.subtitleStyle}>
            {contentData.description}
          </p>
          <span className="bottom-title" />
        </div>
        
        {/* Liste des cartes d'actualités */}
        <div className="row" style={{ marginBottom: 20 }}>
          {newsItems.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="news-card shadow">
                <a href={item.link}>
                  <div className="news-tag">{item.tag}</div>
                  <Image
                    src={item.imageSrc}
                    className="img-fluid news-image"
                    alt={item.tag}
                    width={570}
                    height={380}
                  />
                </a>
                <div className="news-content p-3" style={{ padding: 20 }}>
                  <h4 className="news-title">
                    <a href={item.link} className="text-decoration-none" style={{ color: "#021039", fontWeight: 600 }}>
                      {item.title}
                    </a>
                  </h4>
                  <p className="news-date text-muted mt-2">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bouton Voir Plus */}
        <div className="text-center mt-4">
          <Link
            href="/notre-actualite"
            className="btn btn-primary mt-3"
            style={{
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: "bold",
              textTransform: "uppercase",
              backgroundColor: "#00a0e2",
            }}
          >
            Tout Voir
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NosActualites;
