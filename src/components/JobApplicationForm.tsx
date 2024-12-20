"use client"
import React, { useState, useEffect } from "react";

type JobOffer = {
  id: number;
  title: { rendered: string };
};

const JobApplicationForm: React.FC<{ jobOffers: JobOffer[] }> = ({ jobOffers }) => {
  const [formData, setFormData] = useState({
    jobCode: jobOffers.length > 0 ? jobOffers[0].id : "",  // Sélectionner automatiquement la première offre
    firstName: "",
    phone: "",
    email: "",
    cv: null as File | null,
    message: "",  // Ajouter la propriété message
  });

  // Lorsque jobOffers change, mettre à jour jobCode par défaut
  useEffect(() => {
    if (jobOffers.length > 0 && !formData.jobCode) {
      setFormData((prevData) => ({
        ...prevData,
        jobCode: jobOffers[0].id,  // Sélectionner la première offre si jobCode est vide
      }));
    }
  }, [jobOffers]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation des champs
    if (!formData.firstName || !formData.email || !formData.jobCode || !formData.cv) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    // Créer un FormData pour inclure à la fois des champs de texte et des fichiers
    const formDataToSend = new FormData();
    formDataToSend.append("first_name", formData.firstName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.jobCode.toString());  // Convertir jobCode en string
    formDataToSend.append("message", formData.message || "");  // Message facultatif
    formDataToSend.append("cv", formData.cv);  // Ajouter le fichier CV

    try {
      const response = await fetch("https://sgi.cynomedia-africa.com/wp-json/custom/v1/apply-job/", {
        method: "POST",
        body: formDataToSend, // Envoyer FormData directement
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Erreur API:", errorResponse);
        throw new Error("Erreur lors de l'envoi de la candidature");
      }

      alert("Candidature envoyée avec succès !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi de la candidature");
    }
  };

  return (
    <div className="col-md-6">
      <div className="apply-form">
        <h5>Formulaire de candidature</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="jobCode">Code de l&apos;offre</label>
            <select
              className="form-control"
              id="jobCode"
              name="jobCode"
              value={formData.jobCode}
              onChange={handleInputChange}
              required
            >
              {jobOffers.map((offer) => (
                <option key={offer.id} value={offer.id}>
                  {offer.id} - {offer.title.rendered}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="firstName">Nom et prénoms</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="Votre nom"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Votre téléphone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Votre téléphone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cv">Votre CV</label>
            <input
              type="file"
              className="form-control-file"
              id="cv"
              name="cv"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-submit col-md-3">
            <button type="submit" className="btn_valider">
              Postuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
