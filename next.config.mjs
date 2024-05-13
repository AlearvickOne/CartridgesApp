/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["mobx"] = "mobx";
    config.resolve.alias["mobx-react"] = "mobx-react-lite";
    return config;
  },
};

export default nextConfig;
