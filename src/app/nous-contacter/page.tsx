import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "NOUS CONTACTER | SGI Mali",
  description:
    "Contactez-nous pour toute question ou assistance concernant les services de SGI Mali.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "NOUS CONTACTER | SGI Mali",
    description:
      "Découvrez comment nous joindre pour toute assistance ou demande d'information. Retrouvez nos coordonnées complètes.",
    url: "https://frontend-weld-three.vercel.app/contact",
    siteName: "SGI Mali",
    images: [
      {
        url: "https://frontend-weld-three.vercel.app/images/logo-og.png",
        width: 120,
        height: 120,
        alt: "Logo SGI Mali",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOUS CONTACTER | SGI Mali",
    description:
      "Besoin d'aide ou d'informations supplémentaires ? Retrouvez ici toutes nos coordonnées pour nous joindre.",
    images: ["https://frontend-weld-three.vercel.app/images/logo-og.png"],
  },
  manifest: "/site.webmanifest",
};


// Simulated API Data
const contactData = {
  pageTitle: "Nous contacter",
  contactInfo: [
    {
      id: 1,
      title: "Localisation",
      icon: "icon icon-location2",
      background: "#00a0e2",
      color: "white",
      description:
        "Immeuble du PATRONAT 3eme étage Hamdallaye ACI 2000",
    },
    {
      id: 2,
      title: "Téléphone",
      icon: "icon icon-phone",
      background: "#00a0e2",
      color: "white",
      description: `Tél : +223 20 29 29 72 
                    Tél : +223 20 29 41 19 
                    Fax : +223 20 29 29 75`,
    },
    {
      id: 3,
      title: "Adresse Email",
      icon: "icon icon-envelop",
      background: "#00a0e2",
      color: "white",
      description: "sgi@sgimali.com",
    },
  ],
  mission: `La SGI-Mali a pour mission l’intermédiation entre les capacités de financement 
            et les besoins en financement en vue du développement économique et l’accroissement 
            de la richesse des actionnaires des entreprises, celle des investisseurs particuliers 
            et institutionnels ainsi que toutes les autres parties prenantes.

            Elle se veut donc être l’intermédiaire de ses clients pour accéder au marché financier. 
            Elle peut acheter et/ou vendre des titres (actions, obligations, billets, etc.) pour 
            le compte de ses clients, personnes physiques ou morales, soit à la Bourse régionale 
            des valeurs mobilières (BRVM), soit lors de nouvelles émissions de titres par appel 
            public à l'épargne sur le marché dans la zone UEMOA.`,
};


export default function Contact() {
  const { pageTitle, contactInfo, mission } = contactData;

  return (
    <div>
      
      <HeaderPageSection title={"Nous contacter"} />

      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-block title-contac">
                <SectionTitle title={pageTitle} />
              </div>
            </div>

            {contactInfo.map((info) => (
              <div className="col-md-4" key={info.id}>
                <div className="iconbox-inline">
                  <span
                    className={info.icon}
                    style={{ background: info.background, color: info.color }}
                  />
                  <h4>{info.title}</h4>
                  <p style={{ fontSize: 14 }}>{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="map-canvas" className="map-warp" style={{ height: 360 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15602303.509661775!2d-14.654307987065353!3d17.308014445889167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe143e881b1073cf%3A0xbb3a5be2a0bdcf80!2sMali!5e0!3m2!1sfr!2sci!4v1731600833104!5m2!1sfr!2sci"
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* /Map */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-block title-contac">
              <SectionTitle title="Envoyer un message" />              
            </div>
          </div>

          <div className="col-md-6">
          <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#555" }}>
          {mission}

          </p>
          </div>
          <div className="col-md-6" style={{marginTop:-5}}>
            <div className="main-page">
              <form name="contactform" method="post" action="">
                <div className="form-group">
                  <label htmlFor="offer">
                    Nom et prénoms <span className="text-danger">*</span>:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    placeholder="Nom et prénoms"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="offer">
                  Addresse Email <span className="text-danger">*</span>:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Addresse Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="offer">
                  Objet <span className="text-danger">*</span>:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Objet"
                  />
                </div>
                

                <div className="form-group">
                  <label htmlFor="offer">
                  Votre message <span className="text-danger">*</span>:
                  </label>
                  <textarea
                      name="comments"
                      className="form-control"
                      rows={5}
                      placeholder="Votre message"
                      defaultValue={""}
                    />
                </div>
                
                <div style={{float:'right'}}>
                <button type="submit" className="btn-main-color" style={{borderRadius:4, fontWeight:400, fontSize:15, paddingLeft:25, paddingRight:25, paddingTop:7, paddingBottom:7}}>            
            Envoyer
          </button>                    
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}
