import { Suspense } from "react";
import { SimpleFooter } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import LoadingSkeleton from "./loading-skeleton";

export const runtime = "edge";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex-grow w-full">
        <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
      </div>
      <footer className="py-4">
        <SimpleFooter />
      </footer>
    </>
  );
}
