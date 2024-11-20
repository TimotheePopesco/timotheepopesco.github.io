import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Active le mode Static Export
  basePath: "/my-app", // Remplace "my-app" par le nom de ton dépôt GitHub
  images: {
    unoptimized: true, // Désactive l'optimisation des images pour GitHub Pages
  },
};

export default nextConfig;
