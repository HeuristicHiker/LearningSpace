import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from './routeTree.gen'
import { RouterProvider, createRouter } from "@tanstack/react-router";

const router = createRouter({ routeTree })

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
