import { SimpleFooter } from "@/components/layout/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Header /> */}
      <div className="flex-grow w-full">{children}</div>
      <footer className="py-4">
        <SimpleFooter />
      </footer>
    </>
  );
}
