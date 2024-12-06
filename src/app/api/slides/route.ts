// src/app/api/slides/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = 'https://sgi.cynomedia-africa.com/wp-json/wp/v2/slides'; // L'URL de l'API WordPress

  try {
    // Faire une requête GET vers l'API WordPress
    const response = await fetch(apiUrl, {
      next: {
        revalidate:0, //actualise les données du slide après 1h => 3600 
      }
    });

    // Si la requête échoue
    if (!response.ok) {
      return NextResponse.json({ error: 'Erreur lors de la récupération des données' }, { status: 500 });
    }

    // Récupérer les données de l'API WordPress
    const data = await response.json();

    // Retourner les données sous forme de réponse
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur du proxy:', error);
    return NextResponse.json({ error: 'Erreur du serveur' }, { status: 500 });
  }
}
