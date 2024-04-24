import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const urlAdmin = ['/admins']
export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[]
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    if (requireAuth.includes(req.nextUrl.pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (!token) {
        const url = new URL("/auth/login", req.url)
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }
      if(token.role !== "admin" && urlAdmin.includes(req.nextUrl.pathname)){
        return NextResponse.redirect(new URL('/account', req.url))
      }
    }
    return middleware(req, next);
  };
}
