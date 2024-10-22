import NextMdx from "@next/mdx";
import withSvgr from "next-svgr";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const withMDX = NextMdx({
  extension: /\.mdx?$/,
});

const nextConfig = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default withSvgr(nextConfig);
