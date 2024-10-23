import NextMdx from "@next/mdx";
import withSvgr from "next-svgr";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const withMDX = NextMdx({
  extension: /\.mdx?$/,
});

const nextConfig = withSvgr(
  withNextIntl(
    withMDX({
      pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    })
  )
);

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
