import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and start building your first app.",
    date: "2024-03-15",
    author: "Jane Doe",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt:
      "Dive deep into Tailwind CSS and create beautiful, responsive designs.",
    date: "2024-03-10",
    author: "John Smith",
  },
  {
    id: 3,
    title: "The Power of React Hooks",
    excerpt:
      "Explore how React Hooks can simplify your components and improve performance.",
    date: "2024-03-05",
    author: "Alice Johnson",
  },
];

export default function Blog() {
  return (
    <main className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-title mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="md:col-span-2 space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    {post.date} | By {post.author}
                  </div>
                  <a href={`/blog/${post.id}`} className="post-link">
                    Read More
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="flex space-x-2">
                  <Input type="text" placeholder="Search blog..." />
                  <Button type="submit">Search</Button>
                </form>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="post-link">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="post-link">
                      Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="post-link">
                      JavaScript
                    </a>
                  </li>
                  <li>
                    <a href="#" className="post-link">
                      React
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id}>
                      <a href={`/blog/${post.id}`} className="post-link">
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
