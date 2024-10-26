import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    `/(de|en|es|fr|zh_CN|zh_TW)/:path*`,
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
