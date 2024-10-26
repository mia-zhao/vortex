import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { ThemeProvider } from "@/components/theme/theme-provider";
import i18nConfig from "@/i18n/config";

export const runtime = "edge";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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

  const baseUrl = "https://vortex-app.pages.dev";
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

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    // Set suppressHydrationWarning to true to prevent warnings about extra attributes
    // being rendered from the server. This is expected behavior since the theme
    // configuration is handled on the client side.
    <html lang={params.locale} suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
              {children}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
