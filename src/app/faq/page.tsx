import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";

// Métadonnées pour la page
export const metadata = {
  title: "FAQ | SGI Mali",
  description: "FAQ",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "FAQ | SGI Mali",
    description: "FAQ",
    url: "https://frontend-weld-three.vercel.app/",
    siteName: "SGI Mali",
    images: [
      {
        url: "https://frontend-weld-three.vercel.app/images/logo-og.png",
        width: 120,
        height: 120,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | SGI Mali",
    description: "Page Foire Aux Questions de SGI Mali",
    images: ["https://frontend-weld-three.vercel.app/images/logo-og.png"],
  },
  manifest: "/site.webmanifest",
};

// Données statiques pour la FAQ
const faqData = [
  {
    id: 1,
    question: "Can I collect Social Security if I still have a job?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non.",
  },
  {
    id: 2,
    question: "Do tax brackets include Social Security?",
    answer:
      "Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
  },
  {
    id: 3,
    question: "Are student loans amortized?",
    answer:
      "3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
  {
    id: 4,
    question: "Can Direct Consolidation Loans be deferred?",
    answer:
      "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
  },
  {
    id: 5,
    question: "Can Direct Consolidation Loans be deferred?",
    answer:
      "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
  },
];

export default function Mission() {
  return (
    <div>
      {/* Section d'en-tête */}
      <HeaderPageSection title={"Foire aux questions"} />

      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <div className="row">
            {/* Titre principal */}
            <div className="col-md-12">
              <div className="title-block title-contac">
                <SectionTitle title="Foire aux questions" />
              </div>
            </div>

            {/* FAQ Dynamique */}
            <div className="col-md-12">
              <div className="panel-group accordion-1" id="accordion">
                {faqData.map((faq) => (
                  <div key={faq.id} className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          className="accordion-toggle collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href={`#collapse${faq.id}`}
                        >
                          {faq.question}
                        </a>
                      </h4>
                    </div>
                    <div
                      id={`collapse${faq.id}`}
                      className="panel-collapse collapse"
                    >
                      <div className="panel-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
