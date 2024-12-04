import React from 'react';
import Image from 'next/image';

const MotPresident = () => {
  // Données du contenu
  const contentData = {
    title: "Mot du Président",
    subtitle: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text",
    imageSrc: "/images/president.jpg",
    imageAlt: "President",
    missionVision: {
      title: "Notre mission et vision",
      content: [
        "Notre société la SGI-Mali a été créée grâce à l'impulsion de l'Association professionnelle des banques et établissements financiers (APBEF), le 11 décembre 1996, et en partenariat avec la Chambre de commerce et d'industrie.",
        "La SGI-Mali bénéficie du monopole de la négociation des titres (actions, obligations…) à la Bourse régionale des valeurs mobilières (BRVM), de la tenue des comptes-titres, ainsi que de façon générale, de l'exécution de tout appel public à l'épargne dans la zone UEMOA.",
        "Nous sommes engagés à accompagner les PME/PMI du Mali et de l'UEMOA à financer leur croissance par le marché. Une équipe jeune, professionnelle et dynamique est à votre disposition pour analyser vos objectifs d'investissements, et vous accompagner dans leur réalisation."
      ]
    },
    buttonLink: "about.html",
    buttonText: "En savoir plus",
  };

  return (
    <section className="bg-case-h9 py-5">
      <div className="container">
        {/* Titre de la section */}
        <div className="title-block text-center title-pd" style={{ marginTop: "-70px" }}>
          <h3 style={{ fontSize: 28, color: "#021039" }}>{contentData.title}</h3>
          <p className="sub-title" style={{ fontSize: 15, lineHeight: 2 }}>
            {contentData.subtitle}
          </p>
          <span className="bottom-title" />
        </div>

        {/* Contenu principal */}
        <div className="row align-items-center">
          {/* Colonne gauche : image */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <Image
              src={contentData.imageSrc}
              alt={contentData.imageAlt}
              className="img-responsive img-thumbnail"
              style={{ marginBottom: 20, borderColor: "#f8f8f8 !important" }}
              width={1024}
              height={683}
            />
          </div>

          {/* Colonne droite : texte */}
          <div className="col-lg-6 col-md-12">
            <div className="content-container">
              <h3 className="text-title" style={{ fontSize: 22, fontWeight: "bold", color: "#333" }}>
                {contentData.missionVision.title}
              </h3>
              {contentData.missionVision.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-details"
                  style={{ fontSize: 14, color: "#555", lineHeight: "1.8" }}
                >
                  {paragraph}
                </p>
              ))}
              <center>
                <a
                  href={contentData.buttonLink}
                  className="btn btn-primary mt-3"
                  style={{
                    padding: "10px 20px",
                    fontSize: 14,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    backgroundColor: "#00a0e2",
                  }}
                >
                  {contentData.buttonText}
                </a>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotPresident;
