import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import "./index.css"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"
import { AppSidebar } from "./components/app-sidebar"

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex h-svh w-full flex-col">
          <div className="flex h-12 w-full flex-row items-center">
            <SidebarTrigger className="cursor-pointer" />
          </div>
          <RouterProvider router={router} />
        </div>
      </SidebarProvider>
    </StrictMode>
  )
}
