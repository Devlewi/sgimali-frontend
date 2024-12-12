"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { Bars } from "react-loader-spinner";

const SubscriptionForm = () => {

  interface FormData {
    offer: string;
    person: string;
    last_name: string;
    first_name: string;
    birth_place: string;
    birth_date: string;
    gender: string;
    identity_type: string;
    identity_number: string;
    issued_date: string;
    issued_by: string;
    postal_address: string;
    locality: string;
    phone_number: string;
    fax: string;
    email: string;
    // Ajoutez d'autres champs si nécessaire
  }

  const [formData, setFormData] = useState<FormData>({
    offer: "",
    person: "",
    last_name: "",
    first_name: "",
    birth_place: "",
    birth_date: "",
    gender: "",
    identity_type: "",
    identity_number: "",
    issued_date: "",
    issued_by: "",
    postal_address: "",
    locality: "",
    phone_number: "",
    fax: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  const fieldLabels: { [key: string]: string } = {
    offer: "Je souhaite souscrire à l'offre",
    person: "En tant que personne",
    last_name: "Je soussigné(e) Nom",
    first_name: "Prénom(s)",
    birth_place: "Lieu de naissance",
    birth_date: "Date de naissance",
    gender: "Genre",
    identity_type: "Type de pièce d'identité",
    identity_number: "Numéro de pièce d'identité",
    issued_date: "Délivré le",
    issued_by: "par",
    postal_address: "Votre adresse postale",
    locality: "Votre localité",
    phone_number: "Votre numéro de téléphone",
    fax: "Fax",
    email: "E-mail",
  };

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation des champs obligatoires
    const requiredFields: (keyof typeof formData)[] = [
      "offer",
      "person",
      "last_name",
      "first_name",
      "birth_place",
      "birth_date",
      "gender",
      "identity_type",
      "identity_number",
      "issued_date",
      "issued_by",
      "postal_address",
      "locality",
      "phone_number",
      "email",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Tous les champs obligatoires doivent être remplis.",
      });
      return;
    }

    setLoading(true);
    setFormDisabled(true);

    try {
      // Enregistrement dans la base
      const apiUrl =
        "https://sgimali-frontend.vercel.app/api/add-subscriber";
        
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'enregistrement.");
      }

      // Envoi de la notification par e-mail
      const emailApiUrl =
        "https://sgimali-frontend.vercel.app/api/send-notif";

      const emailResponse = await fetch(emailApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          email: formData.email,
          subject: "Nouveau Souscripteur",
          message: "Nouveau Souscripteur",//Bonjour ${formData.first_name},\n\nVotre inscription a été enregistrée avec succès.\n\nCordialement.
        }),
      });

      if (!emailResponse.ok) {
        throw new Error("Erreur lors de l'envoi de l'email.");
      }

      Swal.fire({
        icon: "success",
        title: "Succès",
        text: "Enregistrement effectué avec succès !",
      });

      setFormData({
        offer: "",
        person: "",
        last_name: "",
        first_name: "",
        birth_place: "",
        birth_date: "",
        gender: "",
        identity_type: "",
        identity_number: "",
        issued_date: "",
        issued_by: "",
        postal_address: "",
        locality: "",
        phone_number: "",
        fax: "",
        email: "",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: error.message,
        });
      }else {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Une erreur inconnue est survenue.",
        });
      }
    } finally {
      setLoading(false);
      setFormDisabled(false);
    }
  };


  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

// Fonction pour capitaliser la première lettre en minuscule sauf pour la première
function capitalizeFirstLetter(string: string): string {
  if (!string) return ""; // Gestion des chaînes vides ou nulles
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

  return (
    <div className="col-md-6" style={{ marginTop: -5 }}>
      <div className="main-page">
        <form onSubmit={handleSubmit}>
          {loading && (
            <div style={{ textAlign: "center" }}>
              <Bars
                height={50}
                width={50}
                color="#4CAF50"
                visible={true}
                ariaLabel="Loading..."
              />
            </div>
          )}

          {/* Champs de formulaire avec labels en français et première lettre en majuscule */}
          {Object.keys(formData).map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>
                      {fieldLabels[field] || capitalizeFirstLetter(field.replace(/_/g, " "))} <span className="text-danger">*</span>
              </label>
              <input
                type={field.includes("date") ? "date" : "text"}
                className="form-control"
                id={field}
                name={field}                
                value={formData[field as keyof FormData]} // Utilisation de l'indexation sécurisée
                onChange={handleChange}
                disabled={formDisabled}
              />
            </div>
          ))}

          <button
            type="submit"
            className="btn-main-color"
              style={{
                borderRadius: 4,
                fontWeight: 400,
                fontSize: 15,
                paddingLeft: 25,
                paddingRight: 25,
                paddingTop: 7,
                paddingBottom: 7,
                float:"right"
              }}
            disabled={formDisabled}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
