import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// function harus diberi nama middleware atau export default (bisa berupa nama apa saja)
// This function can be marked `async` if using `await` inside
export function InnerMiddleware(request: NextRequest) {
  const auth = false;
  if (auth) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth/login", request.url));
}

export default function MainMiddleware(request: NextRequest) {
  return InnerMiddleware(request);
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admins", "/account"],
};
