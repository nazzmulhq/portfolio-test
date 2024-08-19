import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface IUser extends NextRequest {
    token: string;
    user?: {
        email: string;
        name: string;
    } | null;
}

// This function can be marked `async` if using `await` inside
export function middleware(request: IUser) {
    // This is the middleware function
    // check token in cookies
    const token = request.cookies.get("token");

    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/",
};
