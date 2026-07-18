import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    // Pin the project root: the monorepo above this app has its own lockfile.
    root: import.meta.dirname,
  },
  images: {
    // Static export has no image optimization server; images are served as-is.
    unoptimized: true,
  },
};

export default nextConfig;
