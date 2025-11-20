import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const password = "ARIS2025"; // tu contraseña

  // Si ya ingresaron la contraseña en cookie
  if (req.cookies.get("auth")?.value === password) {
    return NextResponse.next();
  }

  // Redirige a /login si no hay cookie
  url.pathname = "/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/chat/:path*"], // aplica solo a /chat
};
