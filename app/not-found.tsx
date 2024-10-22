import Link from "next/link";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/common/back-button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="flex gap-4">
        <Button variant="outline">
          <Link href="/">Return Home</Link>
        </Button>
        <BackButton />
      </div>
    </div>
  );
}
