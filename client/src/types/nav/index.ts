import type { IconProps } from "@tabler/icons-react";
import type { LucideProps } from "lucide-react";
import type {
  ComponentType,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export type Icon = ComponentType<IconProps> | LucideIcon;

export type Nav = { title: string; url: string; icon: Icon };

export type NavProps = {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  navMain: Nav[];
  navSecondary: Nav[];
};
