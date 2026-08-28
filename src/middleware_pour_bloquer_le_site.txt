import { NextResponse } from "next/server";

export default function middleware() {
  // Renvoie directement un document HTML blanc
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
        "cache-control": "no-store, max-age=0",
      },
    }
  );
}

export const config = {
  matcher: [
    /*
     * Intercepte toutes les pages du site sauf le dossier _next statique et les favicons
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};