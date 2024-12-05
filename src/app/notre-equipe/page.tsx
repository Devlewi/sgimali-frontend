import HeaderPageSection from "@/components/HeaderPageSection";
import { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "ORGANISATION | SGI Mali",
  description: "Découvrez l'organisation de SGI Mali et son équipe de professionnels.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    title: "ORGANISATION | SGI Mali",
    description: "Découvrez l'organisation de SGI Mali et son équipe de professionnels.",
    url: "https://sgimali-frontend.vercel.app/organisation", // URL de la page de l'organisation
    siteName: "SGI Mali",
    images: [
      {
        url: "https://sgimali-frontend.vercel.app/images/logo-og.png", // URL de l'image d'aperçu
        width: 120,
        height: 120,
        alt: "Logo SGI Mali",
      },
    ],
    locale: "fr_FR",  // Langue et région
    type: "website",  // Type de contenu
  },
  twitter: {
    card: "summary_large_image",  // Type de carte Twitter
    title: "ORGANISATION | SGI Mali",
    description: "Découvrez l'organisation de SGI Mali et son équipe de professionnels.",
    images: ["https://sgimali-frontend.vercel.app/images/logo-og.png"],  // Image pour Twitter
  },
  manifest: "/site.webmanifest",  // Chemin vers le manifeste
};


const contentData = [
  {
    name: "Fatma Mahmoud",
    role: "Financial advisor",
    image: "/images/Team/dummy_269x265.png", // Correct path
    linkedin: "#",
  },
  {
    name: "Ahmed Magdy",
    role: "LOANS advisor",
    image: "/images/Team/dummy_269x265.png", // Correct path
    linkedin: "#",
  },
  {
    name: "Amany Abody",
    role: "BONDS advisor",
    image: "/images/Team/dummy_269x265.png", // Correct path
    linkedin: "#",
  },
  {
    name: "Ali Mahmoud",
    role: "Financial advisor",
    image: "/images/Team/dummy_269x265.png", // Correct path
    linkedin: "#",
  },
  {
    name: "Fatma Mahmoud",
    role: "Financial advisor",
    image: "/images/Team/dummy_269x265.png", // Correct path
    linkedin: "#",
  },
  {
    name: "Ahmed Magdy",
    role: "LOANS advisor",
    image: "/images/Team/dummy_269x265.png", // Correct path
    linkedin: "#",
  },
];


const dataContent = {
  imageSrc: "/images/Content/dummy_370x370.png",
  title: "Equipe SGI-Mali",
  description:
    "La SGI-Mali s’appuie sur une équipe de professionnels expérimentés dont les qualités sont la discrétion, l’expertise, la disponibilité, et la réactivité. Notre structure est connue dans la sous-région pour son savoir-faire en privatisation, dans la gestion des portefeuilles ainsi que la gestion du registre des actionnaires.",
  signatureImg: "/images/Content/sig.png",
};

export default function Equipe() {
  return (
    <div>
      <HeaderPageSection title="Equipe" />

      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-page">
                <div className="about-founder">
                  <div className="box-img-left">
                    <div className="feature">
                    <Image 
  src={dataContent.imageSrc} 
  alt="Image" 
  width={370} 
  height={370} 
  className="img-responsive"
/>
                    </div>
                    <div className="boxcontent">
                      <h3
                        style={{
                          marginTop: -5,
                          color: "rgb(2, 16, 57)",
                        }}
                      >
                        {dataContent.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "black" }}>
                        {dataContent.description}
                      </p>
                      <Image 
  src={dataContent.signatureImg} 
  alt="Signature" 
  width={150} 
  height={100} 
  className="img-responsive sig"
/>
                    </div>
                  </div>
                </div>

                {/* Team Section */}
                <section className="ourteam-page">
                  {/* Section Title */}
                  <div className="title-block text-center title-pd" style={{ marginTop: 0 }}>
                    <h3 style={{ fontSize: 28, color: "#021039" }}>L&apos;équipe</h3>
                    <p className="sub-title" style={{ fontSize: 15, lineHeight: 2 }}>
                      Une équipe dédiée à la réussite de votre projet
                    </p>
                    <span className="bottom-title" />
                  </div>

                  {/* Team Members */}
                  <div className="container">
                    <div className="row">
                      {contentData.map((member, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                          <div className="item-team">
                          <Image
  src={member.image}
  alt={member.name}
  width={269}
  height={265}
  className="img-responsive img-thumbnail"
/>

                            <div className="body-team">
                              <h4>{member.name.replace("'", "&apos;")}</h4>
                              <p>{member.role}</p>
                            </div>
                            <div className="footer-team">
                              <a className="linkedin" href={member.linkedin}>
                                <i className="fab fa-linkedin" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
