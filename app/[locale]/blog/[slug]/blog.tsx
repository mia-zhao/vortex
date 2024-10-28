import { BlogFrontmatter } from "@/content/blog/blog-registry";
import React from "react";
import { formatDate } from "@/lib/utils";

export default function Blog({
  frontmatter,
  content,
}: {
  frontmatter: BlogFrontmatter;
  content: React.ReactNode;
}) {
  return (
    <article className="blog max-w-3xl mx-auto p-6 rounded-lg shadow-md">
      <h1>{frontmatter.title}</h1>
      <div className="author">Author: {frontmatter.author}</div>
      <div className="update-time">
        Last Update: {formatDate(frontmatter.lastmod)}
      </div>
      {content}
    </article>
  );
}
