import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/our-people",
        destination: "/about#our-people",
        permanent: true,
      },
      {
        source: "/our-people/",
        destination: "/about#our-people",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/blogs/",
        destination: "/resources/blog",
        permanent: true,
      },
      // wildcards for all blog posts instead of trying to target individual posts
      {
        source: "/blog/:slug",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/blogs/:slug",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/news/:slug",
        destination: "/resources/news",
        permanent: true,
      },
      {
        source: "/news",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/news/",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/sell",
        destination: "/services/disposition",
        permanent: true,
      },
      {
        source: "/sell/",
        destination: "/services/disposition",
        permanent: true,
      },
      {
        source: "/catalog",
        destination: "https://shop.weareiw.com/",
        permanent: true,
      },
      {
        source: "/catalog/",
        destination: "https://shop.weareiw.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
