"use client";
import { useEffect } from "react";
import "./globals.css";
import "./styles/styles.css"; // Importation du fichier CSS
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome
import { useState } from "react";
import $ from "jquery"; // Importer jQuery directement
import Script from "next/script";
import { usePathname } from "next/navigation";
import Topbar from "@/components/Topbar";
import Copyright from "@/components/Copyright";
import SkeletonCircleLoad3 from "@/components/skeleton/SkeletonCircleLoad3";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Récupère la route active
  const [isHomePage, setIsHomePage] = useState(false);

  // Déclarez les états
  const [blocfooterData, setBlocfooterData] = useState<BlocFooter[]>([]); // Stocke les items
  const [loading, setLoading] = useState<boolean>(true); // Indique si les données sont en cours de chargement

 
  
  interface BlocFooter {
    bloc_header?: {
      contacts_et_localisation?: {
        localisation?: string;
        adresse_mail?: string;
        telephone?: string;
      };
      reseaux_sociaux?: {
        facebook?: string;
        twitter?: string;
        whatsapp?: string;
        linkedin?: string;
      };
    };
    bloc_footer?: {
      liens_utiles?: {
        elements?: Array<{
          titre: string;
          lien: string;
        }>;
      };
      contacts?: {
        groupe?: {
          contact_infos?: string;
          heure_douverture?: Array<{
            jours: string;
            heure: string;
          }>;
        };
      };
    };
  }
  
  
  
  const fetchBlocFooterData = async () => {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/acf-options`;

      // Construire l'URL complète pour les slides
      const res = await fetch(apiUrl, {
        next: { revalidate: 60 },
      }); // Requête vers l'API distante

      if (!res.ok) {
        throw new Error(`Failed to fetch service, status: ${res.status}`);
      }

      const data = await res.json();
      setBlocfooterData(data); // Mettre à jour l'état avec les données récupérées
      setLoading(false); // Fin du chargement
      console.log("blocfooterData[0].bloc_footer");
      console.log(blocfooterData);
      //console.log(blocfooterData[0].bloc_footer.liens_utiles.elements);
      //console.log(serviceData[0].bloc_services);
      //console.log("serviceData[0].bloc_services.services");
      //console.log(serviceData[0].bloc_services.services);
      //console.log(blocfooterData[0].bloc_header.reseaux_sociaux);
      //
    } catch (error) {
      console.error(error); // Ou un log utile
    }
  };

  useEffect(() => {
    fetchBlocFooterData();
  }, []);

  useEffect(() => {
    // Vérifie si la route actuelle est la page d'accueil
    setIsHomePage(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    // Vérifie si la route actuelle est la page d'accueil
    setIsHomePage(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    // Vérifie si le menu hamburger et la liste des liens sont présents
    if (mobileMenu && navLinks) {
      mobileMenu.addEventListener("click", () => {
        // Ajoute ou enlève la classe 'active' pour afficher ou masquer le menu
        navLinks.classList.toggle("active");
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = $; // Assigner jQuery à window
    }
  }, []);

  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.css" />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&subset=devanagari,latin-ext"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-bold-straight/css/uicons-bold-straight.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-thin-straight/css/uicons-thin-straight.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flat-ui/2.3.0/css/flat-ui.min.css"
          integrity="sha512-6f7HT84a/AplPkpSRSKWqbseRTG4aRrhadjZezYQ0oVk/B+nm/US5KzQkyyOyh0Mn9cyDdChRdS9qaxJRHayww=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/*link rel="stylesheet" href="fonts/font-awesome/css/font-awesome.min.css"*/}
        <link rel="stylesheet" href="/fonts/IcoMoon/icomoon.css" />
        <link rel="stylesheet" href="/fonts/linearicon/style.css" />
        {/* Mobile Menu */}

        <link
          type="text/css"
          rel="stylesheet"
          href="/css/jquery.mmenu.all.css"
        />

        {/* Magnific Popup core CSS file */}
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        {/* OWL CAROUSEL
		================================================== */}
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        {/* SELECTBOX
		================================================== */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/fancySelect.css"
          media="screen"
        />
        {/* REVOLUTION STYLE SHEETS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/revolution/css/settings.css"
        />

        {/* REVOLUTION LAYERS STYLES */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/revolution/css/layers.css"
        />
        {/* REVOLUTION NAVIGATION STYLES */}

        {/* Main Style */}

        {/* color scheme */}
        <link rel="stylesheet" href="/switcher/demo.css" type="text/css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto+Slab:wght@100..900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=optional"
          rel="stylesheet"
        />

        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n\t\t* {\n\t\t\tfont-family: "Roboto Slab", serif;\n\t\t\tfont-weight: 300;\n\t\t\tfont-style: normal;\n\t\t}\n\t',
          }}
        />

        {/*<link rel="shortcut icon" href="/images/favicon.png" /> */}
      </head>
      <body>
        {/* Insertion du script */}
        <Script id="scroll-script" strategy="afterInteractive">
          {`
          // Écouteur d'événement pour le défilement
          window.onscroll = function () {
            var navWarp = document.querySelector('.nav-warp-h2');  // Sélectionner le nav-warp-h2
            var is_mobile = window.innerWidth <= 767;  // Vérifier si la largeur de l'écran est <= 767px (mobile)

            // Déterminer la valeur du margin-top en fonction de la taille de l'écran
            var marginTopValue = is_mobile ? '-51px' : '-73px';

            if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
              // Quand l'utilisateur commence à défiler, appliquer la margin-top selon l'écran
              navWarp.style.marginTop = marginTopValue;
            } else {
              // Quand l'utilisateur revient en haut de la page, remettre margin-top: 0
              navWarp.style.marginTop = '0px';
            }
          };          

        

        `}
        </Script>

        {/* Menu global */}

        <header className="header-h2">
          {/* /topbar */}
          <Topbar />
          {/* /topbar */}
          <div
            className="nav-warp nav-warp-h2"
            style={{
              position: "fixed",
              width: "100%",
              zIndex: 5,
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.15)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="navi-warp-home-2">
                    <Link href="/" className="logo">
                      <Image
                        src="/images/Logo-on-light.png"
                        className="img-responsive"
                        alt="Image"
                        width={151} // Largeur de l'image
                        height={38} // Hauteur de l'image
                      />
                    </Link>

                    <nav
                      id="menu"
                      className="hidden hidden-sm hidden-md hidden-lg"
                      style={{ zIndex: 10 }}
                    >
                      <ul>
                        <li className="">
                          <Link href="/">Accueil</Link>
                        </li>
                        <li>
                          <a href="#">Présentation</a>
                          <ul>
                            <li>
                              <Link href="/historique">
                                <span>Historique</span>
                              </Link>
                            </li>

                            <li>
                              <Link href="/forme-juridique">
                                <span>Forme juridique</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/actionnariat">
                                <span>Actionnariat</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/mission">
                                <span>Mission</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/notre-equipe">
                                <span>Equipe</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/organisation">
                                <span>Organisation</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/relation-clientele">
                                <span>Relation clientèle</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Activités </a>
                          <ul>
                            <li>
                              <Link href="/privatisation">
                                <span>Privatisation</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/financement-des-entreprises">
                                <span>Financement des entreprises</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/gestion-des-portefeuilles">
                                <span>Gestion des portefeuilles</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/gestion-du-registre-des-actionnaires">
                                <span>
                                  Gestion du registre des actionnaires
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/intermediation">
                                <span>Intermediation</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Réalisation</a>
                          <ul>
                            <li>
                              <Link href="/emissions-demprunts-prives">
                                <span>Emissions d’emprunts privés</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/emissions-demprunts-publics">
                                <span>Emissions d’emprunts publics</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/capacite-de-placement-de-titre">
                                <span>Capacité de placement de titre</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/telechargement">Téléchargements</Link>
                        </li>
                        <li>
                          <Link href="/souscription">Souscription</Link>
                        </li>
                        <li>
                          <Link href="/nous-contacter">Nous contacter</Link>
                        </li>
                        <li>
                          <Link href="/foire-aux-questions">FAQ</Link>
                        </li>
                      </ul>
                    </nav>

                    <nav>
                      <ul className="navi-level-1 active-subcolor">
                        <li className="activ">
                          <Link href="/">Accueil</Link>
                        </li>
                        <li>
                          <a href="#">Présentation</a>
                          <ul className="navi-level-2">
                            <li>
                              <Link href="/historique">
                                <span>Historique</span>
                              </Link>
                            </li>

                            <li>
                              <Link href="/forme-juridique">
                                <span>Forme juridique</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/actionnariat">
                                <span>Actionnariat</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/mission">
                                <span>Mission</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/notre-equipe">
                                <span>Equipe</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/organisation">
                                <span>Organisation</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/relation-clientele">
                                <span>Relation clientèle</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Activités</a>
                          <ul className="navi-level-2">
                            <li>
                              <Link href="/privatisation">
                                <span>Privatisation</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/financement-des-entreprises">
                                <span>Financement des entreprises</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/gestion-des-portefeuilles">
                                <span>Gestion des portefeuilles</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/gestion-du-registre-des-actionnaires">
                                <span>
                                  Gestion du registre des actionnaires
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/intermediation">
                                <span>Intermediation</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Réalisation</a>
                          <ul className="navi-level-2">
                            <li>
                              <Link href="/emissions-demprunts-prives">
                                <span>Emissions d’emprunts privés</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/emissions-demprunts-publics">
                                <span>Emissions d’emprunts publics</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/capacite-de-placement-de-titre">
                                <span>Capacité de placement de titre</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/telechargement">Téléchargements</Link>
                        </li>
                        <li>
                          <Link href="/souscription">Souscription</Link>
                        </li>
                        <li>
                          <Link href="/nous-contacter">Nous contacter</Link>
                        </li>
                        <li>
                          <Link href="/foire-aux-questions">FAQ</Link>
                        </li>
                      </ul>
                    </nav>
                    {/*
                    <ul className="subnavi">
                      <li>
                        <a className="btn-search-navi" href="#/">
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                        <div className="search-popup">
                          <form className="form-search-navi">
                            <div className="input-group">
                              <input
                                className="form-control"
                                placeholder="Search Here"
                                type="text"
                              />
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                    */}
                    <a href="#menu" className="btn-menu-mobile">
                      <i className="fa fa-bars" aria-hidden="true" />
                    </a>
                    <Script
                      id="menu-toggle-script"
                      strategy="afterInteractive"
                      dangerouslySetInnerHTML={{
                        __html: `
      jQuery(document).ready(function($) {
        $(".btn-menu-mobile").click(function(e) {
          e.preventDefault(); // Empêche l'action par défaut du lien
          
          // Si le menu est caché, retire la classe 'hidden'
          if ($("#menu").hasClass("hidden")) {
            $("#menu").removeClass("hidden"); // Retirer la classe 'hidden'
          }
        });
        
      });
    `,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /nav */}

          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\t\t\t\t.topbar {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\n\t\t\t\t.scroll-up-container {\n\t\t\t\t\theight: 40px;\n\t\t\t\t\t/* Ajustez la hauteur selon vos besoins */\n\n\t\t\t\t}\n\n\t\t\t\t.scroll-up {\n\t\t\t\t\tanimation: scroll-up 5s linear infinite;\n\t\t\t\t}\n\n\t\t\t\t@keyframes scroll-up {\n\t\t\t\t\t0% {\n\t\t\t\t\t\ttransform: translateY(100%);\n\t\t\t\t\t}\n\n\t\t\t\t\t100% {\n\t\t\t\t\t\ttransform: translateY(-100%);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t",
            }}
          />

          {isHomePage && (
            <>
              <br />
              <br />
              <br />

              <div
                className="topbar tb-transparent tb-gradient tb-sm-50 tb-h9 hidden-xs hidden-sm"
                style={{ marginTop: 10 }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="topbar-home1 topbar-home10">
                        <div className="tb-contact tb-oneline">
                          <div className="scroll-up-container">
                            <ul className="scroll-up">
                              <li>
                                <a href="#" style={{ fontSize: 16 }}>
                                  SVOC 2 395{" "}
                                  <span
                                    style={{
                                      color: "#38ab60",
                                      fontWeight: "bolder",
                                    }}
                                  >
                                    0.00%
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#" style={{ fontSize: 16 }}>
                                  UNLC 7 030{" "}
                                  <span
                                    style={{
                                      color: "#38ab60",
                                      fontWeight: "bolder",
                                    }}
                                  >
                                    0.00%
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#" style={{ fontSize: 16 }}>
                                  SIVC 800{" "}
                                  <span style={{ fontWeight: "bolder" }}>
                                    0.00%
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#" style={{ fontSize: 16 }}>
                                  CABC 1 155{" "}
                                  <span style={{ fontWeight: "bolder" }}>
                                    0.00%
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#" style={{ fontSize: 16 }}>
                                  ABJC{" "}
                                  <span style={{ fontWeight: "bolder" }}>
                                    1 575
                                  </span>
                                  &nbsp;&nbsp;
                                  <span
                                    style={{
                                      color: "red",
                                      fontWeight: "bolder",
                                    }}
                                  >
                                    -1.25%
                                  </span>
                                </a>
                                &nbsp;&nbsp;
                                <span
                                  style={{
                                    fontWeight: "bolder",
                                    fontSize: 16,
                                    color: "white",
                                  }}
                                >
                                  CB
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="tb-social-lan language">
                          <div className="warp-lang">
                            <span
                              style={{
                                color: "white",
                                fontSize: 16,
                                fontWeight: "bolder",
                              }}
                            >
                              COTATION DU JOUR
                            </span>
                            <div className="fancy-select">
                              <select
                                className="lang fancified"
                                style={{
                                  display: "block",
                                  width: 1,
                                  height: 1,
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  opacity: 0,
                                }}
                              ></select>
                              <div className="trigger">
                                <div className="flags undefined" />
                              </div>
                              <ul className="options" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </header>

        {/* Contenu principal */}
        <div className="main-content">{children}</div>

        {/* Footer global */}

        <footer className="footer-home-10">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="widget widget-footer widget-footer-text"
                  style={{ padding: "30px 0px !important" }}
                >
                  <p style={{ fontSize: 14 }}></p>
                  <div
                    className="title-block title-on-dark title-xs"
                    style={{ marginBottom: 10 }}
                  >
                    <h4>Liens utiles</h4>
                    <span className="bottom-title" />
                  </div>
                  <ul style={{ marginLeft: 20 }}>
  {loading ? (
    <SkeletonCircleLoad3 />
  ) : (
    // Vérification de blocfooterData et de sa structure
    Array.isArray(blocfooterData) && blocfooterData.length > 0 &&
    blocfooterData[0]?.bloc_footer?.liens_utiles?.elements?.length ? (
      blocfooterData[0].bloc_footer.liens_utiles.elements.map((lien, index) => (
        <li key={index}>
          <Link href={lien.lien || "#"}>{lien.titre || "Lien sans titre"}</Link>
        </li>
      ))
    ) : (
      <p>No links available</p> // Affichage si aucun lien n'est disponible
    )
  )}
</ul>


                </div>
              </div>
              <div className="col-md-4 bg-lighten-theme">
                <div
                  className="widget widget-footer widget-footer-hours"
                  style={{ padding: "30px 0px !important" }}
                >
                  <div
                    className="title-block title-on-dark title-xs"
                    style={{ marginBottom: 10 }}
                  >
                    <h4>Contacts</h4>
                    <span className="bottom-title" />
                  </div>
                  <ul style={{ marginLeft: 20, fontWeight: "bolder" }}>
                    {loading ? (
                      <SkeletonCircleLoad3 />
                    ) : blocfooterData &&
                      blocfooterData[0]?.bloc_footer?.contacts?.groupe
                        ?.contact_infos ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            blocfooterData[0].bloc_footer.contacts.groupe
                              .contact_infos,
                        }}
                      />
                    ) : (
                      <p>Aucun contact enregistré</p> // Message si aucune info de contact
                    )}
                  </ul>

                  <div
                    className="title-block title-on-dark title-xs"
                    style={{ marginBottom: 10 }}
                  >
                    <h4>Heure d&rsquo;ouverture</h4>
                    <span className="bottom-title" />
                  </div>
                  <ul style={{ marginLeft: 0, listStyle: "none", padding: 0 }}>
  {loading ? (
    <SkeletonCircleLoad3 />
  ) : blocfooterData &&
    blocfooterData[0]?.bloc_footer?.contacts?.groupe?.heure_douverture && 
    blocfooterData[0].bloc_footer.contacts.groupe.heure_douverture.length > 0 ? (
    blocfooterData[0].bloc_footer.contacts.groupe.heure_douverture.map(
      (horaire, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            {horaire.jours}
          </span>
          <span>{horaire.heure}</span>
        </li>
      )
    )
  ) : (
    <p>Aucune heure enregistrée.</p> // Affichage si aucune heure n'est disponible
  )}
</ul>


                </div>
              </div>
              <div className="col-md-4 ">
                <div
                  className="widget widget-footer widget-footer-subcri"
                  style={{ padding: "30px 0px !important" }}
                >
                  <div
                    className="title-block title-on-dark title-xs"
                    style={{ marginBottom: 10 }}
                  >
                    <h4>Newsletter</h4>
                    <span className="bottom-title" />
                  </div>
                  <p style={{ fontSize: 14 }}>
                    Abonnez-vous à notre newsletter pour les dernières mises à
                    jours sur notre entreprise
                  </p>
                  <form className="form-subcri-footer">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        style={{ fontSize: 14 }}
                        placeholder="Votre Email"
                      />
                    </div>
                    <button type="submit" className="btn_valider_newsletter">
                      s inscrire
                    </button>
                  </form>
                  <br />
                  <div
                    className="title-block title-on-dark title-xs"
                    style={{ marginBottom: 10 }}
                  >
                    <h4>Réseaux sociaux</h4>
                    <span className="bottom-title" />
                  </div>
                  <ul className="widget widget-footer widget-footer-social-1">
  {loading ? (
    <SkeletonCircleLoad3 /> // Loader pendant le chargement des données
  ) : blocfooterData &&
    blocfooterData[0]?.bloc_header?.reseaux_sociaux ? (
    <>
      {blocfooterData[0].bloc_header.reseaux_sociaux.facebook && (
        <li>
          <a
            href={blocfooterData[0].bloc_header.reseaux_sociaux.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook" aria-hidden="true" />
          </a>
        </li>
      )}
      {blocfooterData[0].bloc_header.reseaux_sociaux.whatsapp && (
        <li>
          <a
            href={blocfooterData[0].bloc_header.reseaux_sociaux.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp" aria-hidden="true" />
          </a>
        </li>
      )}
      {blocfooterData[0].bloc_header.reseaux_sociaux.twitter && (
        <li>
          <a
            href={blocfooterData[0].bloc_header.reseaux_sociaux.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter" />
          </a>
        </li>
      )}
      {blocfooterData[0].bloc_header.reseaux_sociaux.linkedin && (
        <li>
          <a
            href={blocfooterData[0].bloc_header.reseaux_sociaux.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>
        </li>
      )}
    </>
  ) : (
    <p>Aucun lien disponible pour le moment.</p> // Message par défaut si aucune donnée n'est disponible
  )}
</ul>

                </div>
              </div>
            </div>
          </div>
        </footer>

        <section
          className="no-padding cr-h1 cr-h10"
          style={{ backgroundColor: "hsl(197.71deg 100% 44.51%)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Copyright />
              </div>
            </div>
          </div>
        </section>
        {/* /copyright */}

        <a id="to-the-top" className="fixbtt bg-hover-theme">
          <i className="fa fa-chevron-up"></i>
        </a>

        {/* Footer global */}

        {/* Inclusion de tous les scripts nécessaires avec next/script */}
        {/* jQuery and Bootstrap */}
        <Script src="/js/vendor/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/vendor/bootstrap.js" strategy="beforeInteractive" />

        {/* Mobile Menu */}
        <Script
          src="/js/plugins/jquery.mmenu.all.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/plugins/mobilemenu.js" strategy="afterInteractive" />

        {/* Owl Carousel */}
        <Script src="/js/plugins/owl.carousel.js" strategy="afterInteractive" />
        <Script src="/js/plugins/owl.js" strategy="afterInteractive" />

        {/* Preload */}
        {/* <Script src="/js/plugins/royal_preloader.js" strategy="afterInteractive" /> */}

        {/* Parallax */}
        <Script
          src="/js/plugins/jquery.parallax-1.1.3.js"
          strategy="afterInteractive"
        />

        {/* Fancy Select */}
        <Script src="/js/plugins/fancySelect.js" strategy="afterInteractive" />
        <Script src="/js/plugins/lang-select.js" strategy="afterInteractive" />
        <Script src="/js/plugins/cb-select.js" strategy="afterInteractive" />

        {/* Counter Up */}
        <Script
          src="/js/plugins/jquery.counterup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/plugins/counterup.js" strategy="afterInteractive" />

        {/* Magnific Popup */}

        {/*
      <Script src="/js/plugins/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/js/plugins/lightbox.js" strategy="afterInteractive" />
      */}

        {/* Twitter */}
        <Script
          src="/js/plugins/twitterFetcher.js"
          strategy="afterInteractive"
        />
        <Script
          src="/js/plugins/tweets-footer.js"
          strategy="afterInteractive"
        />

        {/* Global JS */}
        <Script src="/js/plugins/template.js" strategy="afterInteractive" />

        {/* Demo Switcher */}
        <Script src="/switcher/demo.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
