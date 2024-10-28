import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@src/assets/global.scss";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "@src/layouts/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AllTodos = lazy(() => import("@src/views/AllTodos"));
const ActiveTodos = lazy(() => import("@src/views/ActiveTodos"));
const DoneTodos = lazy(() => import("@src/views/DoneTodos"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AllTodos />,
      },
      {
        path: "/active",
        element: <ActiveTodos />,
      },
      {
        path: "/done",
        element: <DoneTodos />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
