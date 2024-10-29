import { BlogFrontmatter } from "@/content/blog/blog-registry";
import React from "react";
import { useFormatter, useTranslations } from "next-intl";

export default function Blog({
  frontmatter,
  content,
}: {
  frontmatter: BlogFrontmatter;
  content: React.ReactNode;
}) {
  const t = useTranslations("blog");
  const formatter = useFormatter();

  return (
    <article className="blog max-w-3xl mx-auto p-6 rounded-lg shadow-md">
      <h1>{frontmatter.title}</h1>
      <div className="author">
        {t("author", { author: frontmatter.author })}
      </div>
      <div className="update-time">
        {t("lastUpdate", {
          date: formatter.dateTime(new Date(frontmatter.lastmod)),
        })}
      </div>
      {content}
    </article>
  );
}
