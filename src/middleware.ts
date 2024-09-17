import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./db/helpers/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookie = cookies().get("Authorization");
  // kalo belom login
  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  // kalo udah login
  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register")
  ) {
    if (cookie) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith("/api/wishlist")) {
    if (!cookie) {
      return Response.json(
        {
          msg: "Unauthenticated",
        },
        {
          status: 401,
        }
      );
    }
    const [bearer, token] = cookie.value.split(" ");
    if (bearer !== "Bearer") {
      return Response.json(
        {
          msg: "Unauthenticated",
        },
        {
          status: 401,
        }
      );
    }
    const payload = await verifyToken<{ _id: string }>(token);

    const requestHeaders = new Headers(request.headers);
    // You can also set request headers in NextResponse.next
    const response = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    });

    // Set a new response header `x-id`
    response.headers.set("x-id", payload._id);
    return response;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/wishlist/:path*",
    "/api/wishlist/:path*",
    "/login",
    "/register",
    "/api/login",
    "/api/register",
  ],
};
