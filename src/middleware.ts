// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(request: NextRequest) {
  // Rvoie directement un document HTML minimaliste et blanc
  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <title>SGI Mali</title>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body style="background-color: white; margin: 0; padding: 0;"></body>
    </html>`,
    {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        // Empêche la mise en cache par les navigateurs/CDN
        "cache-control": "no-store, max-age=0",
      },
    }
  );
}

export const config = {
  matcher: [
    /*
     * Intercepte absolument toutes les routes de l'application,
     * sauf les fichiers statiques système (_next/static, favicon, images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};