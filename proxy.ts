import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Locale routing.
 *
 * English is the default locale and is served from unprefixed URLs. Internally
 * every page lives under `app/[locale]`, so:
 *   - `/solutions`      -> rewrite to `/en/solutions`
 *   - `/en/solutions`   -> redirect to `/solutions`
 *   - `/ar/solutions`   -> pass through unchanged
 *
 * Anything that is not a page (API routes, Next internals, static files) is
 * excluded by the matcher below.
 */

const PUBLIC_FILE = /\.(?:avif|css|gif|ico|jpe?g|js|json|map|mjs|pdf|png|svg|txt|webp|woff2?|xml)$/i;

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Never touch API routes, Next internals or static assets.
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Arabic is already prefixed.
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    return NextResponse.next();
  }

  // Keep English URLs unprefixed: redirect the internal prefix away.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const stripped = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = stripped;
    url.search = search;
    return NextResponse.redirect(url, 308);
  }

  // Rewrite everything else to the English dictionary route.
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.png).*)"],
};
