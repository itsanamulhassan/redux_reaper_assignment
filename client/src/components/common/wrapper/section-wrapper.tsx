import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";
interface ISectionWrapperProps {
  children: ReactNode;
  className?: string;
}
const SectionWrapper: FC<ISectionWrapperProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "w-[1300px] flex flex-col items-center  mx-auto my-[100px]",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
