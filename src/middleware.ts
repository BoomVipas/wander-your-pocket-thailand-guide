import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AUTH_REALM = 'Basic realm="Admin Area"';

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    // No auth configured; allow access.
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": AUTH_REALM,
      },
    });
  }

  const token = authHeader.split(" ")[1] ?? "";

  try {
    const [incomingUser, incomingPass] = atob(token).split(":");

    if (incomingUser === username && incomingPass === password) {
      return NextResponse.next();
    }
  } catch {
    // Ignore and fall through to unauthorized.
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": AUTH_REALM,
    },
  });
}

export const config = {
  matcher: "/admin/:path*",
};
