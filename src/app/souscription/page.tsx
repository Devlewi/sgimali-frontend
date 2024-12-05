import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "SOUSCRIPTION | SGI Mali",
  description:
    "Souscrivez à nos offres et services pour bénéficier des meilleures solutions proposées par SGI Mali.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SOUSCRIPTION | SGI Mali",
    description:
      "Découvrez les offres de souscription et choisissez celle qui répond à vos besoins. SGI Mali vous offre des solutions adaptées.",
    url: "https://sgimali-frontend.vercel.app/souscription",
    siteName: "SGI Mali",
    images: [
      {
        url: "https://sgimali-frontend.vercel.app/images/logo-og.png",
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
    title: "SOUSCRIPTION | SGI Mali",
    description:
      "Souscrivez à l'offre de SGI Mali pour bénéficier d'une expérience sur mesure et adaptée à vos besoins.",
    images: ["https://sgimali-frontend.vercel.app/images/logo-og.png"],
  },
  manifest: "/site.webmanifest",
};

const descData = {
  pageTitle: "Souscription",
  description: [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At aut ratione voluptatum, voluptate asperiores laborum ullam enim repellendus perspiciatis numquam adipisci deserunt dolorum quae perferendis optio animi cupiditate minus totam?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At aut ratione voluptatum, voluptate asperiores laborum ullam enim repellendus perspiciatis numquam adipisci deserunt dolorum quae perferendis optio animi cupiditate minus totam?"
  ]
};


export default function Souscription() {
  return (
    <div>
    
      <HeaderPageSection title={"Souscription"} />

      <section style={{ padding: "39px 0" }}>


        <div className="container">
    <div className="row align-items-center">
      {/* Bloc gauche : Texte */}
      
      
      <div className="col-md-12">
            <div className="title-block title-contac">
            <SectionTitle title="Souscription" />
            </div>
          </div>

      
      <div className="col-md-6">
        <div className="main-page">
            
        <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#555" }}>
                  {descData.description.map((text, index) => (
                    <span key={index}>
                      {text}
                      <br />
                    </span>
                  ))}
                </p>
        </div>
      </div>
      {/* Bloc droit : Image */}
      <div className="col-md-6" style={{marginTop:-5}}>
        <div className="main-page">
        <form
              name="subscriptionForm"
              method="post"
              action=""
            >
              {/* Je souhaite souscrire à l'offre */}
              <div className="form-group">
                <label htmlFor="offer">
                Je souhaite souscrire à l&apos;offre{" "}
                  <span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="offer"
                  name="offer"
                  placeholder="Entrez l'offre"
                />
              </div>
              {/* En tant que personne */}
              <div className="form-group">
                <label htmlFor="person">
                  En tant que personne <span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="person"
                  name="person"
                  placeholder="Entrez votre statut"
                  required={true} 
                />
              </div>
              {/* Nom */}
              <div className="form-group">
                <label htmlFor="lastName">
                Je soussigné(e) Nom <span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="last_name"
                  placeholder="Entrez votre nom"
                />
              </div>
              {/* Prénoms */}
              <div className="form-group">
                <label htmlFor="firstName">
                  Prénoms <span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="first_name"
                  placeholder="Entrez vos prénoms"
                />
              </div>
              {/* Lieu de Naissance */}
              <div className="form-group">
                <label htmlFor="birthPlace">
                  Lieu de Naissance <span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="birthPlace"
                  name="birth_place"
                  placeholder="Entrez votre lieu de naissance"
                />
              </div>
              {/* Date de Naissance */}
              <div className="form-group">
                <label htmlFor="birthDate">
                  Date de Naissance <span className="text-danger">*</span>:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birthDate"
                  name="birth_date"
                />
              </div>
              {/* Sexe */}
              <div className="form-group">
                <label>
                  Sexe <span className="text-danger">*</span>:
                </label>
                <div>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="gender"
                      defaultValue="Masculin"
                    />{" "}
                    Masculin
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="gender"
                      defaultValue="Féminin"
                    />{" "}
                    Féminin
                  </label>
                </div>
              </div>
              {/* Pièce d'identité */}
              <div className="form-group">
                <label htmlFor="identityType">
                Pièce d&apos;identité <span className="text-danger">*</span>:
                </label>
                <select
                  className="form-control"
                  id="identityType"
                  name="identity_type"
                >
                  <option value="">Sélectionnez</option>
                  <option value="CNI">CNI</option>
                  <option value="Passeport">Passeport</option>
                  <option value="Autre">Autre (à préciser)</option>
                </select>
              </div>
              {/* Numéro de pièce d'identité */}
              <div className="form-group">
                <label htmlFor="identityNumber">
                Numéro de pièce d&apos;identité:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="identityNumber"
                  name="identity_number"
                  placeholder="Entrez le numéro"
                />
              </div>
              {/* Délivré le */}
              <div className="form-group">
                <label htmlFor="issuedDate">
                  Délivré le <span className="text-danger">*</span>:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="issuedDate"
                  name="issued_date"
                />
              </div>
              {/* Par */}
              <div className="form-group">
                <label htmlFor="issuedBy">
                  Par <span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="issuedBy"
                  name="issued_by"
                  placeholder="Autorité délivrante"
                />
              </div>
              {/* Adresse postale */}
              <div className="form-group">
                <label htmlFor="postalAddress">
                  Adresse postale <span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="postalAddress"
                  name="postal_address"
                  placeholder="Entrez votre adresse"
                />
              </div>
              {/* Localité */}
              <div className="form-group">
                <label htmlFor="locality">
                  Localité <span className="text-danger">*</span>:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="locality"
                  name="locality"
                  placeholder="Entrez votre localité"
                />
              </div>
              {/* Numéro de téléphone */}
              <div className="form-group">
                <label htmlFor="phoneNumber">
                  Numéro de téléphone <span className="text-danger">*</span>:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phone_number"
                  placeholder="Format 00xxxxx"
                />
              </div>
              {/* Fax */}
              <div className="form-group">
                <label htmlFor="fax">Fax:</label>
                <input
                  type="text"
                  className="form-control"
                  id="fax"
                  name="fax"
                  placeholder="Entrez votre fax"
                />
              </div>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="text-danger">*</span>:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Entrez votre email"
                />
              </div>
              {/* Submit Button */}
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
      </section>
    </div>
  );
}
