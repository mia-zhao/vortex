import NextMdx from "@next/mdx";
import withSvgr from "next-svgr";

/** @type {import('next').NextConfig} */
const withMDX = NextMdx({
  extension: /\.mdx?$/,
});

const nextConfig = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

export default withSvgr(nextConfig);
