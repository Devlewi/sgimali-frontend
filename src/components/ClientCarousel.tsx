"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import SkeletonSliderLoading from "./skeleton/Skeleton";

// Charger OwlCarousel uniquement côté client
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

type Client = {
  id: number;
  title: { rendered: string };
  description: string;
  client_link: string;
  featured_image_url: string;
};

const ClientCarousel = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isBrowser, setIsBrowser] = useState(false);
  const [loading, setLoading] = useState(true);

  
  // Fonction pour récupérer les données des clients depuis l'API
  const fetchClients = async () => {
    try {
      const apiUrl = "https://sgi.cynomedia-africa.com/wp-json/wp/v2/clients";
      const res = await fetch(apiUrl, {
        next: { revalidate: 60 },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch clients, status: ${res.status}`);
      }

      const data = await res.json();
      setClients(data); // Mettre à jour l'état avec les données récupérées
      //console.log(data);
      setLoading(false); // Fin du chargement
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    fetchClients();
  }, []);

  // Options pour OwlCarousel
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    /*
    navText: [
      "<div class='nav-prev'>&#10094;</div>",
      "<div class='nav-next'>&#10095;</div>",
    ],
    */
    animateOut: "fadeOut",
    animateIn: "fadeIn",
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

  return (
    <>
      {isBrowser && (
        <section className="bg-light-grey" style={{ backgroundColor: "#f8f8f8" }}>
          <div className="container">
            <div className="title-block text-center title-pd">
              <h3>Nos clients</h3>
              <p className="sub-title-client" style={{fontSize:15, lineHeight:2}}>
                Découvrez les clients avec lesquels nous avons travaillé.
              </p>
            </div>

            {loading ? (
              <SkeletonSliderLoading />
            ) : (
              <OwlCarousel className="owl-carousel" {...options}>
                {clients.map((client) => (
                  <div className="item-partner" key={client.id}>
                      <a href={client.client_link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                      <Image
                        src={client.featured_image_url || "/placeholder.png"}
                        alt={"Client Image"}
                        width={200}
                        height={200}
                        className="img-responsive partner-img"
                      />                      
                    </a>
                  </div>
                ))}
              </OwlCarousel>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default ClientCarousel;
