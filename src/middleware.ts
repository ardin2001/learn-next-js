import withAuth from "./middlewares/withAuth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function mainMiddleware(request: NextRequest) {
  return NextResponse.next();
}
export default withAuth(mainMiddleware, ["/account"]);