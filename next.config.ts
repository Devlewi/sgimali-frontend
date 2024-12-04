/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Active le mode strict de React pour la détection de bugs en développement
  //swcMinify: true, // Assure que la minification fonctionne correctement avec SWC
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        pathname: '/wp-content/uploads/**', // Cette configuration permet de charger des images depuis cette source
      },
    ],
  },
  // D'autres configurations possibles si nécessaire
};

module.exports = nextConfig;
