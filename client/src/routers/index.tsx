import DashboardLayout from "@/layouts/dashboard-layout";
import Book from "@/pages/dashboard/book";
import Borrow from "@/pages/dashboard/borrow";
import Summary from "@/pages/dashboard/summary";
import Error from "@/pages/public/error";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

export const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <Suspense fallback="fallback --------------">
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <Book />,
      },
      {
        path: "book",
        element: <Book />,
      },
      {
        path: "borrow",
        element: <Borrow />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
    ],
  },
]);

export default routers;
