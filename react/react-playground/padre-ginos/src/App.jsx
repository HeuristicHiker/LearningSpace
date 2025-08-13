import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from './routeTree.gen'
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/*
more info on react19
https://react-v9.holt.courses/lessons/whats-next/react-19
*/

const router = createRouter({ routeTree })
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      experimental_prefetchInRender: true
    }
  }
})

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
