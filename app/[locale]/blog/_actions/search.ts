import { getBlogPosts, BlogPost } from "@/content/blog/blog-registry";

type BlogResponse = {
  posts: BlogPost[];
  totalPosts: number;
  categoryCounts: Record<string, number>;
  allCategories: string[];
};

export async function getBlogData(
  query: string = "",
  category: string = ""
): Promise<BlogResponse> {
  const allPosts = await getBlogPosts();

  // Get all unique categories and their total counts (unfiltered)
  const allCategoryCounts = allPosts.reduce((acc, post) => {
    post.categories.forEach((cat) => {
      acc[cat] = (acc[cat] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // Sort categories by name
  const allCategories = Object.keys(allCategoryCounts).sort();

  // Apply filters
  let filteredPosts = allPosts;

  if (category) {
    filteredPosts = filteredPosts.filter((post) =>
      post.categories.includes(category)
    );
  }

  if (query) {
    const searchTerms = query.toLowerCase().split(" ");
    filteredPosts = filteredPosts.filter((post) => {
      const searchableText = `
        ${post.title} 
        ${post.excerpt} 
        ${post.author} 
        ${post.categories.join(" ")}
      `.toLowerCase();

      return searchTerms.every((term) => searchableText.includes(term));
    });
  }

  // Get counts for filtered posts
  const filteredCategoryCounts = filteredPosts.reduce((acc, post) => {
    post.categories.forEach((cat) => {
      acc[cat] = (acc[cat] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  return {
    posts: filteredPosts,
    totalPosts: allPosts.length,
    categoryCounts: filteredCategoryCounts,
    allCategories,
  };
}