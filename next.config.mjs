/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tekup.vn",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "**",
      },
    ],
    formats: ["image/webp"],
  },
};

export default nextConfig;
