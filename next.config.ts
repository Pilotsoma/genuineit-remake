import type { NextConfig } from "next";

// Static export: the current host is Apache + PHP 8.1, so the site is exported to
// plain HTML/CSS/JS (out/) and the inquiry forms post to a small PHP handler.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
