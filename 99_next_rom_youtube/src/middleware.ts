import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const autthenticated = false;
  if (request.nextUrl.pathname.startsWith('/dashboard') && !autthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}