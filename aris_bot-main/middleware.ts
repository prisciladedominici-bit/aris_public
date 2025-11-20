import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSWORD = "ARIS2025";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/chat")) {
    const entered = req.cookies.get("chat-password")?.value;

    if (entered !== PASSWORD) {
      url.pathname = "/login"; // redirige a login
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/chat/:path*"],
};
