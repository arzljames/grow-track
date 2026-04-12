import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const RootLayout = () => (
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <div className="flex h-12 w-full flex-row items-center">
        <SidebarTrigger className="cursor-pointer" />
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </SidebarInset>
  </SidebarProvider>
)

export const Route = createRootRoute({ component: RootLayout })
