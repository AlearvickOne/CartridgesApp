/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["mobx"] = "mobx";
    config.resolve.alias["mobx-react"] = "mobx-react-lite";
    return config;
  },
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_YANDEX_MAPS_API: process.env.NEXT_PUBLIC_YANDEX_MAPS_API,
    NEXT_PUBLIC_YANDEX_MAPS_GEO_API: process.env.NEXT_PUBLIC_YANDEX_MAPS_GEO_API,
  },
};

export default nextConfig;
