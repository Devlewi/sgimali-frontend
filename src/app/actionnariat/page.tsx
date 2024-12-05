import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export const metadata = {
  title: "ACTIONNARIAT | SGI Mali",
  description: "Actionnariat",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
  /*
  ,
  openGraph: {
    title: "ACTIONNARIAT | SGI Mali",
    description: "Actionnariat",
    url: "https://sgimali-frontend.vercel.app/",
    siteName: "SGI Mali",
    images: [
      {
        url: "https://sgimali-frontend.vercel.app/images/logo-og.png",
        width: 120,
        height: 120,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HISTORIQUE | SGI Mali",
    description: "Page d'accueil de SGI Mali",
    images: ["https://sgimali-frontend.vercel.app/images/logo-og.png"],
  },
  manifest: "/site.webmanifest",
  */
};


// Données statiques simulant une réponse d'API
const actionnariatData = [
  {
    title: "Actionnariat",
    description: `
      La SGI-Mali est une société anonyme régie par les dispositions
      légales édictées par le Conseil Régional de l'épargne Publique
      et des Marchés Financiers de l’Union Economique et Monétaire
      Ouest Africain (UEMOA). Elle est un établissement financier de
      statut et de fonctionnement dérogatoire à la réglementation
      bancaire, exclusivement soumise aux dispositions de la
      convention portant réglementation du Marché Financier Régional
      de l’UEMOA. En général, les Sociétés de Gestion et
      d’Intermédiation (SGI) sont une catégorie d’établissements
      financiers expressément soustraite de la règlementation bancaire. 
      Les SGI sont autorisées, à titre exclusif, à exercer les activités 
      de négociateur-compensateur de valeurs mobilières cotées pour le 
      compte de tiers. Elles sont, en conséquence, habilitées à recevoir 
      et à détenir des fonds du public dans le cadre de cette activité. 
      Toutes les cessions sur titres cotés à la BRVM sont effectuées par 
      l’entremise d’une SGI, sauf cas de dérogation accordée par la BRVM. 
      Les SGI sont habilitées à exercer l'activité de teneur de compte 
      de valeurs mobilières. Toutefois, les émetteurs pourront détenir 
      leurs propres titres pour le compte de tiers. Le capital minimum 
      des SGI est fixé par une instruction du Conseil Régional. Il est 
      actuellement de 150 millions de FCFA. Les SGI sont obligatoirement 
      constituées sous la forme juridique de Sociétés Anonymes. Les 
      conditions d’agrément des SGI sont définies dans le Règlement Général 
      du CREPMF et par l’Instruction 4/97 du CREPMF relative à l’agrément 
      des Sociétés de Gestion et d’Intermédiation (SGI).
    `,
    image: "/images/img2.jpg",
    alt: "Description de l'image",
  },
];




export default function Actionnariat() {
  const data = actionnariatData[0]; // On récupère la première entrée pour cet exemple

  return (
    <div>
      <HeaderPageSection title={data.title} />
      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Bloc gauche : Texte */}
            <div className="col-md-6">
              <div className="main-page">
                <SectionTitle title={data.title} />
                <p
                  style={{ fontSize: "14px", lineHeight: "1.8", color: "#555" }}
                  dangerouslySetInnerHTML={{ __html: data.description }}
                ></p>
              </div>
            </div>
            {/* Bloc droit : Image */}
            <div className="col-md-6">
              <div className="main-page">
<Image
      src={data.image}         // source de l'image
      alt={data.alt}           // texte alternatif
      className="img img-responsive"    // classe CSS pour la fluidité
      style={{
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
      width={500}              // largeur de l'image (à ajuster selon vos besoins)
      height={200}             // hauteur de l'image (à ajuster selon vos besoins)
      layout="intrinsic"       // option pour ajuster automatiquement la taille
    />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
