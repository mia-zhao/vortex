import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 flex-grow items-center sm:items-start">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
