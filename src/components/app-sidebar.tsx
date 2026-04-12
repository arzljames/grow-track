import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { navigationLinkItems } from "@/constant"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link, useRouterState } from "@tanstack/react-router"

export function AppSidebar() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>GrowTrack</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="gap-1 pr-2">
        {navigationLinkItems.map((section, index) => {
          const sectionLabel =
            "label" in section ? section.label : section.sectionTitle

          return (
            <SidebarGroup
              key={sectionLabel ?? `section-${index}`}
              className="p-1"
            >
              {sectionLabel ? (
                <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  {sectionLabel}
                </SidebarGroupLabel>
              ) : null}

              <SidebarGroupContent>
                <SidebarMenu>
                  {section.children.map((item) => {
                    const isActive =
                      item.path === "/"
                        ? pathname === item.path
                        : pathname === item.path ||
                          pathname.startsWith(`${item.path}/`)
                    const itemLabel = "name" in item ? item.name : item.label

                    return (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          className="transition-all duration-200 hover:translate-x-1 hover:bg-zinc-100 data-[active=true]:bg-zinc-100 data-[active=true]:font-semibold"
                        >
                          <Link to={item.path}>
                            {item.icon ? (
                              <HugeiconsIcon icon={item.icon} strokeWidth={1.8} />
                            ) : null}
                            <span>{itemLabel}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
