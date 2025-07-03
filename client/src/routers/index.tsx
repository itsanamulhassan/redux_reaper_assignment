import DashboardLayout from "@/layouts/dashboard-layout";
import Error from "@/pages/public/error";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <Suspense fallback="fallback --------------">
        <DashboardLayout />
      </Suspense>
    ),
    // children: [...dashboardRoutes],
  },
]);

export default routers;
