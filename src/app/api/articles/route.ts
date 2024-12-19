import { NextResponse, NextRequest } from 'next/server';

const POSTS_API_URL = "https://sgi.cynomedia-africa.com/wp-json/wp/v2/posts";

// Fonction pour récupérer les articles avec des paramètres de catégorie et de pagination
export async function GET(request: NextRequest) { // Spécifiez le type NextRequest ici
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1'; // Par défaut, page = 1
    const categoryParam = url.searchParams.get('categories') || ''; // Paramètre de catégorie
    const perPage = 6; // Nombre d'articles par page

    // Construction de l'URL de l'API externe
    const apiUrl = `${POSTS_API_URL}?orderby=date&per_page=${perPage}&page=${page}${categoryParam ? `&categories=${categoryParam}` : ''}&_embed`;

    const postsRes = await fetch(apiUrl);
    if (!postsRes.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await postsRes.json();

    // Retourner les articles sous forme de JSON
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
