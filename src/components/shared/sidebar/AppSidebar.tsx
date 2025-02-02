"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { CircleGaugeIcon, LayersIcon, ShoppingBasketIcon } from "lucide-react";
import UserComp from "./UserComp";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: CircleGaugeIcon,
  },
  {
    title: "Products List",
    url: "/products",
    icon: LayersIcon,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isItemActive = (itemUrl: string) => {
    if (itemUrl === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(itemUrl);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 py-4 px-4">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <ShoppingBasketIcon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">E-Commerce</h3>
            <p className="text-xs text-muted-foreground">Admin Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu className="py-4">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={isItemActive(item.url)}
                size="lg"
                className="px-4 rounded-none"
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <UserComp />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
