import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  const { pathname } = req.nextUrl;
  if (!user && pathname !== "/api/auth/login" && pathname == "/profile") {
    const url = req.nextUrl.clone();
    url.pathname = "/api/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
