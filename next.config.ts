import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/website" // TODO: Remove when domain is added
};

export default nextConfig;
