import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isDashboardRoute = createRouteMatcher([
  "/dashboard",
  "/dashboard/[...page]",
  "/dashboard/[...page]/[...page]",
])

const isAdminRoute = createRouteMatcher([
  "/admin",
  "/admin/[...page]",
  "/admin/[...page]/[...page]",
])

export default clerkMiddleware((auth, req) => {
  if (isDashboardRoute(req)) {
    auth().protect({ role: "org:admin" })
  }

  if (isAdminRoute(req)) {
    auth().protect()
  }
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
