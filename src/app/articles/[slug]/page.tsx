import SkeletonDetailsArticles from "@/components/skeleton/SkeletonDetailsArticle";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Type pour représenter un article
type Post = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  categories: Array<{ id: number; name: string }>;
  featured_image_url: string | null;
};

// Fonction pour récupérer un article par son slug
async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(
    `https://sgi.cynomedia-africa.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );

  if (!res.ok) {
    return null;
  }

  const posts = await res.json();

  // Si aucun article n'est trouvé, retourner null
  if (posts.length === 0) {
    return null;
  }

  const post = posts[0];

  type Category = {
    id: number;
    name: string;
  };
  
  // Extraire les informations nécessaires
  return {
    id: post.id,
    title: { rendered: post.title.rendered },
    content: { rendered: post.content.rendered },
    date: post.date,
    categories: post._embedded["wp:term"]?.[0]?.map((category: Category) => ({
      id: category.id,
      name: category.name,
    })) || [],    
    featured_image_url: post._embedded["wp:featuredmedia"]
      ? post._embedded["wp:featuredmedia"][0]?.source_url
      : null,
  };
}

// Fonction pour générer des métadonnées dynamiques
// Fonction pour générer des métadonnées dynamiques
// Fonction pour générer des métadonnées dynamiques
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Attendre la résolution de `params`
  const post = await getPostBySlug(slug);

  // Si l'article n'est pas trouvé, retourner une page 404
  if (!post) {
    return { title: "Article non trouvé" };
  }

  // Vérifier si l'image de l'article est disponible, sinon utiliser une image par défaut
  const imageUrl = post.featured_image_url
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/images/${post.featured_image_url}` // Utiliser l'URL dynamique de l'image
    : "URL_DE_DEFAULT_IMAGE"; // Utiliser une image par défaut si nécessaire

  // Retourner les métadonnées de l'article avec les balises Open Graph et Twitter
  return {
    title: post.title.rendered,
    description: `Découvrez notre article : ${post.title.rendered}`,
    openGraph: {
      title: post.title.rendered,
      description: `Découvrez notre article : ${post.title.rendered}`,
      url: `https://votre-site.com/articles/${slug}`, // Assurez-vous de mettre le bon URL de l'article
      images: [
        {
          url: imageUrl, // URL de l'image de l'article
          width: 1200, // Largeur de l'image
          height: 630, // Hauteur de l'image
          alt: post.title.rendered, // Texte alternatif
        },
      ],
    },
    twitter: {
      card: "summary_large_image", // Utiliser un résumé avec une image
      title: post.title.rendered,
      description: `Découvrez notre article : ${post.title.rendered}`,
      image: imageUrl, // URL de l'image
    },
  };
}



function transformImageUrl(imageUrl: string): string {
  // Extraire les parties de l'URL : année, mois et nom de l'image
  const parts = imageUrl.split('/');
  const year = parts[parts.length - 3]; // L'année est l'avant-dernier élément
  const month = parts[parts.length - 2]; // Le mois est l'avant-avant-dernier élément
  const imageName = parts.pop(); // Le nom de l'image est le dernier élément
  // Construire l'URL locale pour l'image
  return `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/images/${year}/${month}/${imageName}`;
}


// Fonction principale pour afficher la page de l'article
export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params; // Attendez la résolution de `params`
  const post = await getPostBySlug(slug);

  // Si l'article n'est pas trouvé, rediriger vers la page 404
  if (!post) {
    notFound();
  }

  // Format de la date
  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });



  return (
    <section style={{ padding: "100px 0" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Bloc principal */}
          {!post ? (
  <SkeletonDetailsArticles /> 
) : (
  <>


          <div className="col-md-12">
            <div className="main-page">
              {/* En-tête */}
              <header className="mb-6">
                <nav className="text-sm text-gray-600 mb-4 flex flex-wrap items-center space-x-2" style={{background:'#dbebf2', padding:10}}>
                  <Link
                    href="/"
                    className="hover:underline text-gray-600"
                    style={{ color: "#019ee2", fontWeight:700 }}
                  >
                    <i className="fa fa-home"></i>&nbsp;Accueil&nbsp;
                  </Link>
                  <span>/</span>
                  <Link
                    href="/articles"
                    className="hover:underline text-gray-600"
                    style={{ color: "#019ee2", fontWeight:700 }}
                  >
                    &nbsp;Articles&nbsp;
                  </Link>
                  <span>/</span>
                  <span className="text-gray-800 font-medium truncate" style={{fontWeight:700}}>
                  &nbsp;{post.title.rendered}&nbsp;
                  </span>
                </nav>
                <br />
                {post.featured_image_url && (
                    <Image
                      src={transformImageUrl(post.featured_image_url)}
                      alt={post.title.rendered}
                      width={1200} // Définissez une largeur appropriée
                      height={800} // Définissez une hauteur appropriée
                      className="w-full h-auto mb-4 rounded-lg img img-responsive"
                    />
                  )}

                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {post.title.rendered}
                </h1>
                <div
                  className="text-sm text-gray-500 mb-4"
                  style={{ color: "#019ee2" }}
                >
                  <i className="fa fa-clock"></i> <span style={{ fontWeight: 700 }}>{formattedDate}</span>{" "}
                  
                    
                  
                </div>
              </header>

              {/* Contenu de l'article */}
              <div
                className="prose max-w-none mb-8 detail-article"
                style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#555",
                  marginTop: 10,
                }}
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
              catégorie: <span className="capitalize category-tag" style={{ color: "#019ee2" }}>
                      {post.categories
                        .map((category) => category.name)
                        .join(", ")}                        
                    </span>
            </div>
          </div>
  </>
)}


        </div>
      </div>
    </section>
  );
}
