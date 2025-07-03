export type ErrorProps = {
  status: number | string;
  statusText: string;
  error: {
    message: string;
  };
};

export type ThemeProps = "dark" | "light" | "system";

export type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};
