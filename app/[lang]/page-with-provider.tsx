"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import { LocaleProvider, DataType } from "@/context/locale-context";

export default function Page({ data }: { data: DataType }) {
  return (
    <LocaleProvider locale={data}>
      <Header />
      <main className="flex flex-col gap-8 flex-grow items-center sm:items-start">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
