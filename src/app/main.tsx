import "./index.css";
import ReactDOM from "react-dom/client";
import { MainPage } from "@/pages/MainPage";
import { StrictMode } from "react";
import { GlobalLayout } from "@/pages/GlobalLayout";
import { ThemeProvider, queryClient } from "@/shared";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";

const rootRoute = createRootRoute({
  component: GlobalLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MainPage,
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
