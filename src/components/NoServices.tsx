import React from 'react';
import Image from 'next/image'; // Importer Image de Next.js si vous l'utilisez

const NoServices = () => {
  // Définir le contenu dynamique avec les couleurs de fond et autres détails
  const contentData = [
    {
      title: "GESTION DE PORTEFEUILLE",
      icon: "lnr-briefcase",
      image: "/images/img4.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptates nihil ducimus.",
      backgroundColor: "#021039",
    },
    {
      title: "INGENIERIE FINANCIERE",
      icon: "lnr-arrow-up",
      image: "/images/img22.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptates nihil ducimus.",
      backgroundColor: "#00a0e2",
    },
    {
      title: "EMPRUNTS OBLIGATAIRES",
      icon: "lnr-chart-bars",
      image: "/images/img1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptates nihil ducimus.",
      backgroundColor: "#021039",
    },
    {
      title: "BILLETS DE TRESORERIE",
      icon: "lnr-layers",
      image: "/images/img4.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptates nihil ducimus.",
      backgroundColor: "#00a0e2",
    },
    {
      title: "PRIVATISATIONS",
      icon: null, // Pas d'icône mais une image
      image: "/images/img4.png",
      //image: "/images/money.png", // Image spécifique pour ce service
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptates nihil ducimus.",
      backgroundColor: "#021039",
    },
    {
      title: "Accumulation",
      icon: "lnr-arrow-up",
      image: "/images/img4.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptates nihil ducimus.",
      backgroundColor: "#00a0e2",
    }
  ];

  return (
    <section className="no-padding" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-block text-center" style={{ marginTop: 0, marginBottom: 20 }}>
              <h3 style={{ fontSize: 28, color: "#021039" }}>Nos services</h3>
              <p className="sub-title" style={{ fontSize: 15, lineHeight: 2 }}>
                Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
              </p>
              <span className="bottom-title" />
            </div>
            <div className="warp-full-width services-h1-warp offer-h10-warp">
              {/* Itérer sur contentData pour afficher chaque service */}
              {contentData.map((service, index) => (
                <div key={index} className="col-md-4 col-sm-6" style={{ backgroundColor: service.backgroundColor }}>
                  <div className="item-offer-h10">
                    <div className="iconbox-type-xs text-center">
                      {/* Vérifier s'il y a une image ou une icône */}
                      {service.image ? (
                        <center>
                          <Image
                            src={service.image}
                            className="img img-responsive img-circle"
                            width={105}
                            height={20}
                            alt={service.title}
                          />
                        </center>
                      ) : (
                        <span className={`lnr ${service.icon}`} style={{ fontSize: 60, color: "white" }} />
                      )}
                      <h4 style={{ fontSize: 21, marginBottom: "-1px", color: "white" }}>
                        {service.title}
                      </h4>
                      <p style={{ fontSize: 14, color: "white" }}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoServices;
