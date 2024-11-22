import type { NextConfig } from "next";

const nextConfig : NextConfig = {
  env: { currency: "USD" },
  publicRuntimeConfig: { currency: "USD" },
};

module.exports = nextConfig;
