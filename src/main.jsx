import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLaout from "./layout/MainLaout";
import Homepage from "./pages/homepage/Homepage";
import Timeline from "./pages/timeline/Timeline";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLaout></MainLaout>,
    children:[
      {
        index:true,
        element:<Homepage></Homepage>
      },
      {
        path:"/Timeline",
        element: <Timeline></Timeline>
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
