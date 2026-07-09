import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export not needed — Vercel handles SSR.
  // Image domains: just our own for now. If the user adds product
  // logos hosted on third parties later, add them here.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Strict mode for clean builds.
  reactStrictMode: true,
  // Compress aggressively — this is a B2B site, every KB matters.
  compress: true,
  // Powered-by header off — small but signals craft.
  poweredByHeader: false,
};

export default nextConfig;
