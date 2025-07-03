import * as React from "react";
import {
  IconChartBar,
  IconHelp,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";
import { NavMain } from "@/components/dashboard/nav/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import Logo from "@/assets/icons/logo";
import { Blend, Book } from "lucide-react";
import type { NavProps } from "@/types/nav";

const data: NavProps = {
  user: {
    name: "Anamul Hassan",
    email: "itsanamulhassan@gmail.com",
    avatar: "/avatars/ah.jpg",
  },
  navMain: [
    {
      title: "Book",
      url: "book",
      icon: Book,
    },
    {
      title: "Borrow",
      url: "borrow",
      icon: Blend,
    },
    {
      title: "Summary",
      url: "summary",
      icon: IconChartBar,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "",
      icon: IconSearch,
    },
  ],
};

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="/">
                <Logo />

                <span className="text-base font-semibold">
                  Library Management
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
