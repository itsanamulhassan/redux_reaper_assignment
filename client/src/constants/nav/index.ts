import type { NavProps } from "@/types/nav";
import {
  IconChartBar,
  IconHelp,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";
import { Blend, Book } from "lucide-react";

export const navData: NavProps = {
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
