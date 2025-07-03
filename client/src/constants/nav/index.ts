import type { NavProps } from "@/types/nav";
import {
  IconChartBar,
  IconDashboard,
  IconHelp,
  IconListDetails,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";

export const data: NavProps = {
  user: {
    name: "Anamul Hassan",
    email: "hassan@mail.com",
    avatar: "../../../public/avatar.jpg",
  },
  navMain: [
    {
      title: "Users",
      url: "users",
      icon: IconDashboard,
    },
    {
      title: "Tasks",
      url: "tasks",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "analytics",
      icon: IconChartBar,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
};
