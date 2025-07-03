import type { SidebarContextProps } from "@/types/public";
import { createContext, useContext } from "react";

export const SidebarContext = createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

export default useSidebar;
