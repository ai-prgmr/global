/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/global",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "contribution.usercontent.google.com",
      },
    ],
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.29.11'],
}

export default nextConfig
