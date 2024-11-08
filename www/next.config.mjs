/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // or 'http' if the images use HTTP
        hostname: "img.transistor.fm", // specify the domain name
        pathname: "/**", // allows images from any path under the domain
      },
    ],
  },
};

export default nextConfig;
