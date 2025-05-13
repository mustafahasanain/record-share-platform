import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // if user is not regesterd, direct to the sign in page
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // if they have a session, allow pass through
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
