"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamique pour charger OwlCarousel côté client
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';

// Charger OwlCarousel uniquement côté client
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const ClientCarousel = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  // On s'assure que le code qui dépend du navigateur s'exécute seulement côté client
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Données de contenu des clients
  const contentData = [
    {
      image: "/images/Partner/1608030479810.jpeg",
      link: "#",
      altText: "Client 1",
      backgroundColor: "#f8f8f8",
    },
    {
      image: "/images/Partner/amfa.jpeg",
      link: "#",
      altText: "Client 2",
      backgroundColor: "#ffffff",
    },
    {
      image: "/images/Partner/brvm.jpg",
      link: "#",
      altText: "Client 3",
      backgroundColor: "#eeeeee",
    },
    {
      image: "/images/Partner/logo_UT_HD-1.jpg",
      link: "#",
      altText: "Client 4",
      backgroundColor: "#f0f0f0",
    },
    // Ajoutez d'autres clients ici si nécessaire
  ];

  // Données de contenu pour le titre et la description
  const titleData = {
    mainTitle: "Nos clients",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    subtitleStyle: { fontSize: 15, lineHeight: 2 },
    titleStyle: { fontSize: 28, color: "#021039" },
    marginTop: "-150px",
  };

  const options = {
    loop: true,
    margin: 10, // Espace entre les éléments
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1, // Affiche 1 élément sur les petits écrans (mobiles)
      },
      600: {
        items: 2, // Affiche 2 éléments sur les tablettes
      },
      1000: {
        items: 4, // Affiche 4 éléments sur les écrans plus larges
      },
    },
  };

  if (!isBrowser) {
    return null;
  }

  return (
    <section className="bg-light-grey" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="container">
        <div className="title-block text-center title-pd" style={{ marginTop: titleData.marginTop }}>
          <h3 style={titleData.titleStyle}>{titleData.mainTitle}</h3>
          <p className="sub-title" style={titleData.subtitleStyle}>
            {titleData.description}
          </p>
          <span className="bottom-title" />
        </div>

        <OwlCarousel className="owl-carousel" {...options}>
          {contentData.map((client, index) => (
            <div className="item-partner" key={index} style={{ backgroundColor: client.backgroundColor }}>
              <a href={client.link}>
                <Image
                  src={client.image}
                  className="img-responsive partner-img"
                  alt={client.altText}
                  width={200}
                  height={200}
                />
              </a>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default ClientCarousel;
