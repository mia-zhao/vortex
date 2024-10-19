import { NextRequest, NextResponse } from "next/server";
import i18nConfig from "./i18nConfig";

const { locales, defaultLocale } = i18nConfig;

export { defaultLocale };

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  const preferredLocale: string[] = acceptLanguage
    ? acceptLanguage.split(",").map((lang) => lang.split(";")[0].trim())
    : [];

  const matchedLocale = preferredLocale.find((locale) =>
    locales.includes(locale)
  );
  return matchedLocale || defaultLocale;
}

export function middleware(request: NextRequest): NextResponse | undefined {
  const { pathname } = request.nextUrl;

  // Check if the pathname starts with /_next
  if (pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  const pathnameHasLocale = locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  if (pathname === "/") {
    request.nextUrl.pathname = `/${locale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  if (!pathnameHasLocale) {
    request.nextUrl.pathname = pathname.replace(/^\/[^/]+/, `/${locale}`);
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}
