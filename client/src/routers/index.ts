import { createBrowserRouter } from "react-router";

const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <Suspense fallback="fallback --------------">
        <PublicLayout />
      </Suspense>
    ),
    children: [...publicRoutes],
  },
  {
    path: "/dashboard",
    errorElement: <Error />,
    element: (
      <Suspense fallback="fallback --------------">
        <DashboardLayout />
      </Suspense>
    ),
    children: [...dashboardRoutes],
  },
]);

export default routers;
