import Image from "next/image";
import Modal from "./modal-example";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";

export default function Home() {
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
