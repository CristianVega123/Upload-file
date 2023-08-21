import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./assets/components/App.tsx";
import Data from "./assets/components/Data.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App  />,

  },
  {
    path: "api/data/:hash",
    element: <Data />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
