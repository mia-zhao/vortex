import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import {
  blogRegistry,
  type BlogSlug,
  BlogFrontmatter,
} from "@/content/blog/blog-registry";
import BreadCrumb from "../breadcrumb";
import Blog from "./blog";
import { Locale } from "@/i18n/routing";
import i18nConfig from "@/i18n/config";

export const runtime = "edge";

export default async function BlogPost({
  params,
}: {
  params: { slug: BlogSlug; locale: Locale };
}) {
  const { slug, locale } = params;
  const rawContents = blogRegistry[slug];

  if (!rawContents) {
    notFound();
  }

  const rawContent = await (rawContents[locale] ||
    rawContents[i18nConfig.defaultLocale]);

  if (!rawContent) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source: rawContent,
    options: { parseFrontmatter: true },
  });

  return (
    <>
      <div className="my-8 ml">
        <BreadCrumb title={frontmatter.title} />
      </div>
      <Blog frontmatter={frontmatter} content={content} />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogRegistry).map((slug) => ({
    slug,
  }));
}
