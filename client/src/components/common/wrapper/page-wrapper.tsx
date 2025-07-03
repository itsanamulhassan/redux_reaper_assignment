import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";
import PageTransition from "../effect/page-transition";
interface IPageWrapperProps {
  children: ReactNode;
  className?: string;
}
const PageWrapper: FC<IPageWrapperProps> = ({ children, className }) => {
  return (
    <section className={cn(className, "w-full")}>
      <PageTransition variant="fade">{children}</PageTransition>
    </section>
  );
};

export default PageWrapper;
