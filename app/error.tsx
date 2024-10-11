"use client";

import BackButton from "@/components/common/back-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
      <p className="text-xl mb-8">We apologize for the inconvenience.</p>
      <div className="flex space-x-4">
        <Button
          onClick={() => window.location.reload()}
          className="bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Try again
        </Button>
        <Button variant="outline">
          <Link href="/">Return home</Link>
        </Button>
        <Button variant="secondary" onClick={() => window.history.back()}>
          Go back
        </Button>
      </div>
    </div>
  );
}
