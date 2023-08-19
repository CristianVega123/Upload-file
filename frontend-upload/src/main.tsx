import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Data from './Data.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App /> 
  },{
    path: "api/data/:hash",
    element: <Data /> ,
  }])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
