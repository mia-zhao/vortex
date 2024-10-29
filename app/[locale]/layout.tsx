import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import i18nConfig from "@/i18n/config";
import BaseLayout from "@/components/layout/base-layout";

export const runtime = "edge";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "MetaData" });
  const { locales, defaultLocale } = i18nConfig;

  const title = t("title");
  const description = t("description");
  const keywords = t("keywords")
    .split(",")
    .map((keyword) => keyword.trim());

  const baseUrl = process.env.CLOUDFLARE_DEPLOY_URL;
  const url = locale === defaultLocale ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "website",
      locale,
      url,
      title,
      description,
      siteName: "Vortex",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [
          l,
          l === defaultLocale ? baseUrl : `${baseUrl}/${l}`,
        ])
      ),
    },
  };
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ lang: locale }));
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <BaseLayout locale={params.locale}>
      <div className="relative min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
        {children}
      </div>
    </BaseLayout>
  );
}
