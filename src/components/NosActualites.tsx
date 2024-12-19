import React from "react";
import Image from "next/image"; // Importation de Image si vous utilisez Next.js
import Link from "next/link";
import SkeletonLastestArticles from "./skeleton/SkeletonLastestArticles";

// Définir les types pour les articles
type Post = {
  id: number;
  date: string; // Date de publication
  title: {
    rendered: string; // Titre de l'article
  };
  categories: number[]; // Liste des IDs de catégories
  excerpt: {
    rendered: string; // Extrait de l'article
  };
  slug: string;
  content: {
    rendered: string; // Contenu complet de l'article (description)
  };
  link: string; // Lien vers l'article complet
  featured_media: number; // ID de l'image vedette
  featured_image_url: string | null; // URL de l'image vedette
  _embedded?: { // Déclare _embedded comme optionnel
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
};

// Fonction pour récupérer les derniers articles
/*async function getLastPosts(): Promise<Post[]> {
  const apiUrl =
    "https://sgi.cynomedia-africa.com/wp-json/wp/v2/posts?orderby=date&per_page=3&_embed"; // Ajout du paramètre "_embed" pour récupérer les données liées

  const res = await fetch(apiUrl, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();

  // Récupérer les catégories
  const categoryRes = await fetch(
    "https://sgi.cynomedia-africa.com/wp-json/wp/v2/categories"
  );
  if (!categoryRes.ok) {
    throw new Error("Failed to fetch categories");
  }

  type Category = {
    id: number;
    name: string;
  };
  
  const categories = await categoryRes.json();

  // Créer un dictionnaire des catégories avec ID comme clé et nom comme valeur
  const categoryDictionary = categories.reduce(
    (acc: { [key: number]: string }, category: Category) => {
      acc[category.id] = category.name;
      return acc;
    },
    {}
  );

  // Extraire les catégories et l'image vedette pour chaque article
  const postsWithCategoriesAndImages = posts.map((post: Post) => {
    const categoryNames = post.categories.map(
      (categoryId: number) => categoryDictionary[categoryId]
    );
    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  
    return {
      id: post.id,
      date: post.date,
      title: { rendered: post.title.rendered },
      categories: categoryNames,
      excerpt: { rendered: post.excerpt.rendered },
      content: { rendered: post.content.rendered },
      slug: post.slug,
      link: post.link,
      featured_media: post.featured_media,
      featured_image_url: featuredImage,
    };
  });
  

  return postsWithCategoriesAndImages;
}*/


// Fonction pour récupérer les derniers articles
async function getLastPosts(): Promise<Post[]> {
  //const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/acf-options`;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/latest-posts`;

  const res = await fetch(apiUrl, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();

  // Créer un dictionnaire des catégories si nécessaire
  // Ici, les catégories sont déjà incluses dans la réponse, donc ce traitement est facultatif

  // Extraire les catégories et l'image vedette pour chaque article
  const postsWithCategoriesAndImages = posts.map((post: Post) => {
    const featuredImage = post.featured_image_url || null;

    return {
      id: post.id,
      date: post.date,
      title: { rendered: post.title },
      categories: post.categories, // Les catégories sont directement incluses dans l'API
      excerpt: { rendered: post.excerpt },
      content: { rendered: post.content },
      slug: post.slug,
      link: post.link,
      featured_media: post.featured_media,
      featured_image_url: featuredImage,
    };
  });

  return postsWithCategoriesAndImages;
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


export default async function NosActualites() {
  const posts = await getLastPosts();

  console.log("posts");
  console.log(posts);

  // Données dynamiques pour la section "Notre actualité"
  const contentData = {
    title: "Notre actualité",
    description: "Les dernières nouvelles et événements",
    subtitleStyle: { fontSize: 15, lineHeight: 2 },
    titleStyle: { fontSize: 28, color: "#021039" },
    marginTop: "-150px",
  };

  return (
    <section className="bg-case-h9 py-5">
      <div className="container">
        {/* Titre de la section */}
        <div
          className="title-block text-center title-pd"
          style={{ marginTop: contentData.marginTop }}
        >
          <h3 style={contentData.titleStyle}>{contentData.title}</h3>
          <p className="sub-title" style={contentData.subtitleStyle}>
            {contentData.description}
          </p>
          <span className="bottom-title" />
        </div>

        {/* Liste des cartes d'actualités */}
        {posts && posts.length > 0 ? (
          <>
            <div className="row" style={{ marginBottom: 20 }}>
              {posts.map((post, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                  <div className="news-card shadow">
                  <Link
                          href={`/articles/${post.slug}`} // Utilisez le slug de l'article pour générer le lien dynamique
                          className="text-decoration-none"
                          style={{ color: "#021039", fontWeight: 600 }}
                        >
                      <div className="news-tag">
                        {post.categories.map((category, index) => (
                          <span key={index} className="category-tag">
                            {category}
                          </span>
                        ))}
                      </div>

                      {/* Vérification de l'image */}
                      {post.featured_image_url ? (
                        <Image
                          src={transformImageUrl(post.featured_image_url)}
                          className="img-fluid news-image"
                          alt={post.title.rendered}
                          width={570}
                          height={380}
                        />
                      ) : (
                        <div
                          className="no-image"
                          style={{
                            /*width: "570px",*/
                            height: "240px",
                            display: "flex",
                            justifyContent: "center", // Centrer horizontalement
                            alignItems: "center", // Centrer verticalement
                            backgroundColor: "#f8f8f8",
                          }}
                        >
                          <i
                            className="fas fa-image"
                            style={{
                              fontSize: "3rem",
                              color: "#ccc",
                            }}
                          ></i>
                        </div>
                      )}
                    </Link>
                    <div className="news-content p-3" style={{ padding: 20}}>
                    <h4 className="news-title">
  <Link
    href={`/articles/${post.slug}`} // Utilisez le slug de l'article pour générer le lien dynamique
    className="text-decoration-none"
    style={{ color: "#021039", fontWeight: 600 }}
  >
    {post.title.rendered.length > 65 
      ? `${post.title.rendered.substring(0, 65)}...` 
      : post.title.rendered}
  </Link>
</h4>

                      <p className="news-date text-muted mt-2">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <SkeletonLastestArticles />
        )}

        {/* Bouton Voir Plus */}
        <div className="text-center mt-4">
          <Link
            href="/notre-actualite"
            className="btn btn-primary mt-3"
            style={{
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: "bold",
              textTransform: "uppercase",
              backgroundColor: "#00a0e2",
            }}
          >
            Tout Voir
          </Link>
        </div>
      </div>
    </section>
  );
}
