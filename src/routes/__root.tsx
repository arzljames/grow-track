import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const RootLayout = () => (
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <div className="flex h-14 w-full flex-row items-center bg-gray-100">
        <SidebarTrigger className="M cursor-pointer" />
      </div>
      <div className="flex h-full w-full flex-row justify-center bg-gray-100">
        <div className="h-full w-full max-w-300 p-4">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </SidebarInset>
  </SidebarProvider>
)

export const Route = createRootRoute({ component: RootLayout })
