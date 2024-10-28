import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogData } from "./_actions/search";
import { BlogPost } from "@/content/blog/blog-registry";
import { Link } from "@/i18n/routing";
import { formatDate } from "@/lib/utils";
import SearchForm from "@/components/blog/search-form";
import CategoriesCard from "@/components/blog/categories-card";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string };
}) {
  const {
    posts,
    totalPosts,
    categoryCounts: filteredCounts,
    allCategories,
  } = await getBlogData(searchParams.q || "", searchParams.category || "");

  const { categoryCounts: totalCounts } = await getBlogData();

  return (
    <main className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-title mb-8">
          Our Blog{" "}
          {posts.length !== totalPosts && (
            <span className="text-lg font-normal text-muted-foreground ml-2">
              (Showing {posts.length} of {totalPosts} posts)
            </span>
          )}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="md:col-span-2 space-y-8">
            {posts.length > 0 ? (
              posts.map((post) => <BlogPostCard post={post} key={post.slug} />)
            ) : (
              <Card className="p-6">
                <p className="text-center text-muted-foreground">
                  No blog posts found matching your criteria.
                </p>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <SearchForm />
              </CardContent>
            </Card>

            {/* Categories */}
            <CategoriesCard
              categories={allCategories}
              totalCounts={totalCounts}
              filteredCounts={filteredCounts}
            />

            {/* Recent Posts */}
            <RecentPostsCard blogPosts={posts} />
          </div>
        </div>
      </div>
    </main>
  );
}

const BlogPostCard = ({ post }: { post: BlogPost }) => (
  <Card>
    <CardHeader>
      <CardTitle>{post.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-body">{post.excerpt}</p>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <div className="text-sm text-muted-foreground">
        {formatDate(post.date)} | By {post.author}
      </div>
      <Link href={`/blog/${post.slug}`} className="post-link">
        Read More
      </Link>
    </CardFooter>
  </Card>
);

const RecentPostsCard = ({ blogPosts }: { blogPosts: Array<BlogPost> }) => (
  <Card>
    <CardHeader>
      <CardTitle>Recent Posts</CardTitle>
    </CardHeader>
    <CardContent>
      {blogPosts.length === 0 ? (
        <p>No recent posts available.</p>
      ) : (
        <ul className="space-y-2">
          {blogPosts.slice(0, 5).map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="post-link">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </CardContent>
  </Card>
);
