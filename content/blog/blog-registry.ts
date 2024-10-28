import { compileMDX } from "next-mdx-remote/rsc";
import howToUseMarkdownContent from "!!raw-loader!./how-to-use-markdown-in-next-js.mdx";
import deployToCloudflareContent from "!!raw-loader!./deploy-to-cloudflare.mdx";

export const blogRegistry = {
  "how-to-use-markdown-in-next-js": howToUseMarkdownContent,
  "deploy-to-cloudflare": deployToCloudflareContent,
} as const;

export type BlogSlug = keyof typeof blogRegistry;

export type BlogFrontmatter = {
  title: string;
  author: string;
  date: string;
  lastmod: string;
  categories: string[];
  excerpt: string;
};

export type BlogPost = BlogFrontmatter & { slug: BlogSlug };

export async function getBlogPosts() {
  const posts: Array<BlogPost> = [];

  for (const [slug, content] of Object.entries(blogRegistry) as [
    BlogSlug,
    string
  ][]) {
    const { frontmatter } = await compileMDX<BlogFrontmatter>({
      source: content,
      options: { parseFrontmatter: true },
    });
    posts.push({ ...frontmatter, slug });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
