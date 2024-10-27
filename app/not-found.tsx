import BaseLayout from "@/components/layout/base-layout";
import LocalizedNotFound from "@/components/layout/not-found";

export const runtime = "edge";

export default function NotFound() {
  return (
    <BaseLayout>
      <LocalizedNotFound />
    </BaseLayout>
  );
}
