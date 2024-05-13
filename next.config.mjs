/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["mobx"] = "mobx";
    config.resolve.alias["mobx-react"] = "mobx-react-lite";
    return config;
  },
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    DOMAIN: process.env.DOMAIN,
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_YANDEX_MAPS_API: process.env.NEXT_PUBLIC_YANDEX_MAPS_API,
    NEXT_PUBLIC_YANDEX_MAPS_GEO_API: process.env.NEXT_PUBLIC_YANDEX_MAPS_GEO_API,
  },
};

export default nextConfig;
