import { Suspense } from "react";
import "./blog.css";
import LoadingSkeleton from "./loading-skeleton";

export const runtime = "edge";

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
