import React, { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { getMessages } from "next-intl/server";
import { Locale } from "@/i18n/routing";
import BaseError from "./error";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function BaseLayout({
  children,
  locale,
}: {
  children: ReactNode;
  locale?: Locale;
}) {
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    console.error("Failed to load messages:", error);
    return (
      <html>
        <body>
          <BaseError
            errorMsg={{
              title: "Oops! Something went wrong",
              description: "We apologize for the inconvenience.",
              tryAgain: "Try again",
              backHome: "Return Home",
            }}
          />
        </body>
      </html>
    );
  }

  return (
    // The suppressHydrationWarning prop is set to true to suppress warnings related to
    // discrepancies between server-rendered and client-rendered attributes. This is
    // intentional, as the theme configuration is managed on the client side, leading
    // to potential differences during hydration.
    <html suppressHydrationWarning={true} lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
