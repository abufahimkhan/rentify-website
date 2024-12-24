import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { Images } from "../utils/Image";

// Menu items with custom colors.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    color: "text-blue-500", // Blue color for the Home icon
  },
  {
    title: "Flats",
    url: "/flats",
    icon: Inbox,
    color: "text-green-500", // Green color for the Flats icon
  },
  {
    title: "Tenants",
    url: "/tenants",
    icon: Inbox,
    color: "text-sky-500", // Green color for the Flats icon
  },
  {
    title: "Rents",
    url: "/rents",
    icon: Calendar,
    color: "text-purple-500", // Purple color for the Rents icon
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
    color: "text-red-500", // Red color for the Search icon
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    color: "text-yellow-500", // Yellow color for the Settings icon
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="py-12">
            <Image src={Images.logo} alt="Image" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-lg py-5 flex items-center space-x-3"
                  >
                    <Link href={item.url}>
                      {/* Apply the color dynamically */}
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
