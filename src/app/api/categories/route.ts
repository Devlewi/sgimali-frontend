// app/src/api/categories/route.js
export async function GET(req) {
    const targetUrl = "https://sgi.cynomedia-africa.com/wp-json/wp/v2/categories";
    
    try {
      // Effectuer la requête vers l'API externe
      const response = await fetch(targetUrl, {
        method: 'GET', // Méthode GET ou POST selon votre cas
        headers: {
          'Authorization': 'Bearer YOUR_TOKEN', // Si vous avez besoin d'un token
          'Content-Type': 'application/json',
        },
      });
  
      // Vérifier si la réponse est valide
      if (!response.ok) {
        return new Response(
          JSON.stringify({ error: 'Failed to fetch data from external API' }),
          { status: response.status }
        );
      }
  
      // Extraire les données au format JSON
      const data = await response.json();
  
      // Retourner les données au client
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({ error: 'Something went wrong while fetching the data' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
  