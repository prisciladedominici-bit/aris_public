import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSWORD = "tu_contraseña_aquí";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Si la persona ya puso la contraseña correcta → dejar entrar
  const hasAuth = req.cookies.get("auth")?.value === PASSWORD;
  if (hasAuth) return NextResponse.next();

  // Si está enviando password desde el form
  if (req.method === "POST") {
    const formData = req.nextUrl.searchParams.get("pw");
    if (formData === PASSWORD) {
      const res = NextResponse.redirect(url.origin + url.pathname);
      res.cookies.set("auth", PASSWORD, { path: "/" });
      return res;
    } else {
      url.pathname = "/password";
      url.searchParams.set("error", "1");
      return NextResponse.redirect(url);
    }
  }

  // Si no tiene acceso, mandarlo a la pantalla de password
  if (url.pathname !== "/password") {
    url.pathname = "/password";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
