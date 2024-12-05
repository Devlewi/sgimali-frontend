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
        hostname: 'sgi.cynomedia-africa.com', // Ajoute ce domaine
        pathname: '/wp-content/uploads/**', // Autorise les images depuis ce chemin spécifique
      },
    ],
  },
  // D'autres configurations possibles si nécessaire
};

module.exports = nextConfig;
