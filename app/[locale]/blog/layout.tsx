import { SimpleFooter } from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const runtime = "edge";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex-grow w-full">{children}</div>
      <footer className="py-4">
        <SimpleFooter />
      </footer>
    </>
  );
}
