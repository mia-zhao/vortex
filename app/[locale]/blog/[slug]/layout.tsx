import { Suspense } from "react";
import "./blog.css";
import LoadingSkeleton from "./loading-skeleton";
import { BLOG_SLUGS } from "@/content/blog/blog-registry";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({
    slug,
  }));
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8 sm:px-6 lg:px-8">
      <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
    </div>
  );
}
