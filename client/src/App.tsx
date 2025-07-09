import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import routers from "./routers";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <Suspense fallback="Loading.........................">
      <RouterProvider router={routers} />

      <Toaster />
    </Suspense>
  );
}

export default App;
