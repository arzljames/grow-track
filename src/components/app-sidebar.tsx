import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { navigationLinkItems } from "@/constant"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"

export function AppSidebar() {
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
        {navigationLinkItems.map((item) => (
          <SidebarGroup key={item.label} className="p-1">
            {item.path ? (
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="transition-all duration-200 hover:translate-x-1 hover:bg-zinc-100"
                  >
                    <a href={item.path}>
                      <HugeiconsIcon icon={item.icon} strokeWidth={1.8} />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            ) : (
              <Collapsible defaultOpen={false} className="group/collapsible">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="transition-all duration-200 hover:translate-x-1 hover:bg-zinc-100"
                    >
                      <CollapsibleTrigger className="flex w-full cursor-pointer items-center gap-2">
                        <HugeiconsIcon icon={item.icon} strokeWidth={1.8} />
                        <span>{item.label}</span>
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          strokeWidth={1.8}
                          className="ml-auto rotate-90 transition-transform duration-200 group-data-[state=closed]/collapsible:rotate-0"
                        />
                      </CollapsibleTrigger>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>

                <CollapsibleContent>
                  <SidebarGroupContent className="pt-1">
                    <SidebarMenuSub>
                      {item.children.map((child) => (
                        <SidebarMenuSubItem key={child.path}>
                          <SidebarMenuSubButton
                            asChild
                            className="transition-all duration-200 hover:translate-x-1 hover:bg-zinc-100"
                          >
                            <a href={child.path}>{child.name}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}
