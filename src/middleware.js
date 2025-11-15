import { NextResponse } from 'next/server';

export function middleware(req) {
  const ua = (req.headers.get('user-agent') || '').toLowerCase();
  const isGooglebot = ua.includes('googlebot') || ua.includes('bingbot') || ua.includes('slurp');
  
  // Define all your public routes
  const publicPaths = [
    '/',
    '/vorxoc',
    '/about-us',
    '/contact-us',
    '/faq',
    '/sitemap.xml',
    '/robots.txt',
    '/_next',
    '/favicon.ico',
  ];

  const pathname = req.nextUrl.pathname;

  // Allow search engine bots and public paths
  if (isGooglebot || publicPaths.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Allow all static assets
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/assets/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Your existing auth/redirect logic for private areas can go here
  // For now, we allow everything through since all pages are public
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

