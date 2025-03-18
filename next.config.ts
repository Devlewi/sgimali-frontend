/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Active le mode strict de React pour la détection de bugs en développement
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        pathname: '/wp-content/uploads/**', // Autorise les images depuis localhost
      },
      {
        protocol: 'https',
        hostname: 'cpanel.sgi-mali.com', // Ajoute ce domaine
        pathname: '/wp-content/uploads/**', // Autorise les images depuis ce chemin spécifique
      },
      
    ],
    //domains: ['cpanel.sgi-mali.comm', 'localhost','sgi-mali.com','sgimali-frontend.vercel.app','www.sgi-mali.com'], // Ajoutez localhost ici
    domains: ['cpanel.sgi-mali.com', 'localhost','www.sgi-mali.com','sgi-mali.com','sgimali-frontend.vercel.app'], // Ajoutez localhost ici
  },
  // D'autres configurations possibles si nécessaire
  async rewrites() {
    return [
      {
        source: '/api/images/:path*', // Toutes les requêtes qui commencent par '/api/images/'
        destination: 'https://cpanel.sgi-mali.comm/wp-content/uploads/:path*', // Destination vers le serveur WordPress
      },
    ];
  },
};
//
module.exports = nextConfig;
