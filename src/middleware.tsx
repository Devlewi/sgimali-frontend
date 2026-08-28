import { NextResponse } from "next/server";

export default function middleware() {
  // Renvoie directement un document HTML blanc
    return NextResponse.next();

}

export const config = {
  matcher: [
    /*
     * Intercepte toutes les pages du site sauf le dossier _next statique et les favicons
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};