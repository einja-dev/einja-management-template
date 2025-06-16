import { auth } from "@/lib/auth";

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;

	// Protected routes that require authentication
	const protectedRoutes = ["/dashboard", "/profile"];
	const isProtectedRoute = protectedRoutes.some((route) =>
		nextUrl.pathname.startsWith(route),
	);

	// Public routes that authenticated users shouldn't access
	const publicRoutes = ["/auth/signin", "/auth/signup"];
	const isPublicRoute = publicRoutes.some((route) =>
		nextUrl.pathname.startsWith(route),
	);

	// Redirect authenticated users away from public routes
	if (isLoggedIn && isPublicRoute) {
		return Response.redirect(new URL("/", nextUrl));
	}

	// Redirect unauthenticated users to sign in
	if (!isLoggedIn && isProtectedRoute) {
		return Response.redirect(new URL("/auth/signin", nextUrl));
	}
});

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
