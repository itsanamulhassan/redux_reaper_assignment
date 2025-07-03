import type { IconProps } from "@tabler/icons-react";
import type { ComponentType } from "react";

export type Icon = ComponentType<IconProps>;
export type Nav = { title: string; url: string; icon?: Icon };

export type NavProps = {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  navMain: Nav[];
  navSecondary: Nav[];
};
