import createMiddleware from "next-intl/middleware";
import { locales, pathnames } from "./config";

export default createMiddleware({
  locales,
  defaultLocale: 'tr',
  pathnames
  });

  export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(tr|en)/:path*',     '/((?!_next|_vercel|.*\\..*).*)'
  ]
  };