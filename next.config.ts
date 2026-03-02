import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const customBasePath = process.env.BASE_PATH?.trim();
const normalizedCustomBasePath = customBasePath
  ? `/${customBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";
const basePath = normalizedCustomBasePath || (repositoryName ? `/${repositoryName}` : "");

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
