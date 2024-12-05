"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import "animate.css";

// Charger OwlCarousel uniquement côté client
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

type Slide = {
  id: number;
  title: { rendered: string };
  description: string;
  button_text: string;
  button_link: string;
  alt_text: string;
  featured_image_url: string; // URL de l'image directement exposée via l'API
};

const BigSlider = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [isBrowser, setIsBrowser] = useState(false);


  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  // Récupérer les données de l'API
  const fetchSlides = async () => {
    try {
      // Remplacer l'URL de l'API WordPress par celle du proxy interne
      const res = await fetch("/api/slides"); // Requête vers l'API Next.js (qui est en fait un proxy)
      
      if (!res.ok) {
        throw new Error("Failed to fetch slides");
      }
      
      const data = await res.json();
      setSlides(data); // Mettez à jour l'état avec les données récupérées
    } catch (error) {
      console.error("Error fetching slides:", error); // Gérer les erreurs de requête
    }
  };
  

  useEffect(() => {
    setIsBrowser(true);
    fetchSlides();
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
    navText: [
      "<div class='nav-prev'>&#10094;</div>",
      "<div class='nav-next'>&#10095;</div>",
    ],
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

  return (
    <>
      {isBrowser && slides.length > 0 && (
        <section id="slider" className="no-padding">
          <OwlCarousel className="owl-theme" {...options}>
            {slides.map((slide) => (
              <div className="item" key={slide.id}>
                <div className="carousel-image">
                  <Image
                    src={slide.featured_image_url || "/placeholder.png"}
                    alt={slide.alt_text || "Slide Image"}
                    width={2560}
                    height={1280}
                    className="img-responsive"
                  />
                  <div className="overlay"></div>
                </div>
                <div className="carousel-caption">
                      <h3>{truncateText(slide.title.rendered, 25)}</h3> 

                      <p
                  className="sl-s3"
                  style={{ fontFamily: '"Roboto Slab", serif' }}
                  dangerouslySetInnerHTML={{
                    __html: truncateText(slide.description, 55) // Limiter la description à 55 caractères
                  }}
                />
                  {slide.button_text && (
                    <a target="_blank" href={slide.button_link} className="btn btn-primary">
                      {slide.button_text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </OwlCarousel>
        </section>
      )}
    </>
  );
};

export default BigSlider;
