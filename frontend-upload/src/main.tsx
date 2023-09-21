import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import DataLocal from "./components/DataLocal.tsx";
import DataProduct from './components/DataProduct.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/product/data/:hash",
    element: <DataProduct />
  },
  {
    path: "api/data/:hash",
    element: <DataLocal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <NextUIProvider>
  //     <RouterProvider router={router} />
  //   </NextUIProvider>
  // </React.StrictMode>
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);
