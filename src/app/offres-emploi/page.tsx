import React from "react";
import HeaderPageSection from "@/components/HeaderPageSection";
import SectionTitle from "@/components/SectionTitle";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "OFFRES D'EMPLOI | SGI Mali",
  description: "Offre d'emploi",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    images: [
      { url: "https://sgimali-frontend.vercel.app/images/favicon.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

const jobOffers = [
  {
    code: "JOB001",
    title: "Développeur Full Stack",
    location: "Abidjan, Côte d&apos;Ivoire",
    department: "Informatique",
    expireIn: "5 jours",
    contractType: "CDI",
    experience: "3 ans",
    skills: "React, Node.js, MongoDB, etc.",
    mission: "Développement d'applications web et mobile."
  },
  {
    code: "JOB002",
    title: "Développeur Backend",
    location: "Abidjan, Côte d&apos;Ivoire",
    department: "Informatique",
    expireIn: "10 jours",
    contractType: "CDI",
    experience: "2 ans",
    skills: "Node.js, Express, PostgreSQL, API REST",
    mission: "Développement et gestion des API et services backend."
  },
  {
    code: "JOB003",
    title: "Chef de Projet Digital",
    location: "Bamako, Mali",
    department: "Marketing Digital",
    expireIn: "7 jours",
    contractType: "CDD",
    experience: "5 ans",
    skills: "Gestion de projet, SEO, Marketing Digital, Outils d analyse",
    mission: "Piloter les projets digitaux de l entreprise et coordonner les équipes marketing."
  },
  {
    code: "JOB004",
    title: "Designer UX/UI",
    location: "Dakar, Sénégal",
    department: "Design",
    expireIn: "15 jours",
    contractType: "CDI",
    experience: "4 ans",
    skills: "Figma, Adobe XD, Design thinking, Prototypage",
    mission: "Créer des interfaces utilisateur intuitives et améliorer l'expérience utilisateur."
  },
  {
    code: "JOB005",
    title: "Responsable Marketing",
    location: "Abidjan, Côte d&apos;Ivoire",
    department: "Marketing",
    expireIn: "12 jours",
    contractType: "CDI",
    experience: "6 ans",
    skills: "Marketing stratégique, Publicité, Analyse des données",
    mission: "Diriger les campagnes marketing et développer la stratégie commerciale."
  },
  {
    code: "JOB006",
    title: "Analyste de Données",
    location: "Bamako, Mali",
    department: "Analyse",
    expireIn: "8 jours",
    contractType: "CDI",
    experience: "3 ans",
    skills: "Python, SQL, Tableau, Analyse prédictive",
    mission: "Analyser les données pour aider à la prise de décision stratégique."
  },
  {
    code: "JOB007",
    title: "Administrateur Système",
    location: "Lomé, Togo",
    department: "Informatique",
    expireIn: "20 jours",
    contractType: "CDI",
    experience: "4 ans",
    skills: "Linux, Windows Server, Réseaux, Sécurité informatique",
    mission: "Gérer les infrastructures informatiques et assurer leur sécurité."
  },
  {
    code: "JOB008",
    title: "Consultant en Stratégie",
    location: "Ouagadougou, Burkina Faso",
    department: "Conseil",
    expireIn: "25 jours",
    contractType: "CDI",
    experience: "5 ans",
    skills: "Planification stratégique, Analyse économique, Gestion de projet",
    mission: "Proposer des solutions pour améliorer les performances organisationnelles."
  },
  {
    code: "JOB009",
    title: "Responsable RH",
    location: "Dakar, Sénégal",
    department: "Ressources Humaines",
    expireIn: "18 jours",
    contractType: "CDI",
    experience: "6 ans",
    skills: "Gestion des talents, Relations sociales, Recrutement",
    mission: "Gérer les ressources humaines et renforcer les équipes."
  },
  {
    code: "JOB010",
    title: "Ingénieur DevOps",
    location: "Abidjan, Côte d&apos;Ivoire",
    department: "Informatique",
    expireIn: "14 jours",
    contractType: "CDI",
    experience: "3 ans",
    skills: "Docker, Kubernetes, CI/CD, Cloud Computing",
    mission: "Automatiser les déploiements et optimiser les processus de développement."
  },
];


export default function Emploi() {
  return (
    <div>
      
      <HeaderPageSection title={"Offres d'emploi"} />

      <section style={{ padding: "39px 0" }}>
        <div className="container">
          <SectionTitle title="Offres disponibles" />

          <div className="row">
            <div className="col-md-12">
              <div className="list-job-warp">
                <div className="table-warp">
                  <div className="table-responsive">
                    <table className="table table-hover table-reset">
                      <thead>
                        <tr>
                          <th>Code</th>
                          <th>Intitulé du poste</th>
                          <th>Localisation</th>
                          <th>Département</th>
                          <th>Expire dans...</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobOffers.map((job) => (
                          <React.Fragment key={job.code}>
                            <tr className="clickable-row">
                              <td>{job.code}</td>
                              <td>{job.title}</td>
                              <td>{job.location}</td>
                              <td>{job.department}</td>
                              <td>{job.expireIn}</td>
                            </tr>
                            <tr className="details-row">
                              <td colSpan={5}>
                                <div className="job-details row">
                                  {/* Colonne 1 : Détails de l'offre */}
                                  <div className="col-md-6">
                                    <div className="apply-form">
                                      <h5>Détails de l&apos;offre</h5>
                                      <form>
                                        <div className="job-detail-section">
                                          <div className="detail-card">
                                            <p className="job-detail-title">
                                              Type de contrat:
                                            </p>
                                            <p className="job-detail-description">
                                              {job.contractType}
                                            </p>
                                          </div>
                                          <div className="detail-card">
                                            <p className="job-detail-title">
                                              Expérience requise:
                                            </p>
                                            <p className="job-detail-description">
                                              {job.experience}
                                            </p>
                                          </div>
                                          <div className="detail-card">
                                            <p className="job-detail-title">
                                              Compétences:
                                            </p>
                                            <p className="job-detail-description">
                                              {job.skills}
                                            </p>
                                          </div>
                                          <div className="detail-card">
                                            <p className="job-detail-title">
                                              Mission:
                                            </p>
                                            <p className="job-detail-description">
                                              {job.mission}
                                            </p>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>

                                  {/* Colonne 2 : Formulaire de candidature */}
                                  <div className="col-md-6">
                                    <div className="apply-form">
                                      <h5>Formulaire de candidature</h5>
                                      <form>
                                        {/* Sélection de l'offre */}
                                        <div className="form-group">
                                          <label htmlFor="jobCode">
                                            Code de l&apos;offre
                                          </label>
                                          <select
                                            className="form-control"
                                            id="jobCode"
                                            required
                                          >
                                            {jobOffers.map((offer) => (
                                              <option key={offer.code} value={offer.code}>
                                                {offer.code} - {offer.title}
                                              </option>
                                            ))}
                                          </select>
                                        </div>

                                        {/* Nom et prénoms */}
                                        <div className="form-group">
                                          <label htmlFor="firstName">
                                            Nom et prénoms
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            placeholder="Votre nom"
                                            required
                                          />
                                        </div>

                                        {/* Téléphone */}
                                        <div className="form-group">
                                          <label htmlFor="phone">
                                            Votre téléphone
                                          </label>
                                          <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Votre téléphone"
                                            required
                                          />
                                        </div>

                                        {/* Email */}
                                        <div className="form-group">
                                          <label htmlFor="email">Email</label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Votre email"
                                            required
                                          />
                                        </div>

                                        {/* CV */}
                                        <div className="form-group">
                                          <label htmlFor="cv">Votre CV</label>
                                          <input
                                            type="file"
                                            className="form-control-file"
                                            id="cv"
                                            required
                                          />
                                        </div>

                                        {/* Bouton de soumission */}
                                        <div className="form-submit col-md-3">
                                          <button
                                            type="submit"
                                            className="btn_valider"
                                          >
                                            Postuler
                                          </button>
                                        </div>
                                        <br/><br/><br/><br/>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script id="toggle-details-script">
        {`
          document.querySelectorAll('.details-row').forEach((row) => {
            row.style.display = "none";
          });

          document.querySelectorAll('.clickable-row').forEach((row) => {
            row.addEventListener('click', function() {
              const detailsRow = this.nextElementSibling;
              if (detailsRow.style.display === "table-row") {
                detailsRow.style.display = "none";
              } else {
                document.querySelectorAll('.details-row').forEach((otherDetailsRow) => {
                  otherDetailsRow.style.display = "none";
                });
                detailsRow.style.display = "table-row";
              }
            });
          });
        `}
      </Script>
    </div>
  );
}
