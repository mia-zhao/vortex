import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import ScrollButton from "@/components/common/scroll-button";
import CookieConsent from "@/components/common/cookie-consent";
import { setRequestLocale } from "next-intl/server";

export const dynamicParams = false;

export default function Page({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  setRequestLocale(locale);
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 flex-grow items-center sm:items-start">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
      <ScrollButton />
      <CookieConsent />
    </>
  );
}
