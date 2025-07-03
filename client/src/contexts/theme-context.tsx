import type { ThemeProps } from "@/types/public";
import { createContext } from "react";

type ThemeProviderStateProps = {
  theme: ThemeProps;
  setTheme: (theme: ThemeProps) => void;
};

const initialState: ThemeProviderStateProps = {
  theme: "system",
  setTheme: () => null,
};
export const ThemeProviderContext =
  createContext<ThemeProviderStateProps>(initialState);
