import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLaout";
import Homepage from "./pages/homepage/Homepage";
import Timeline from "./pages/timeline/Timeline";
import Status from "./pages/status/Status";
import { HiH2 } from "react-icons/hi2";
import Error from "./component/error/Error";
import FriendDetails from "./pages/friendDetails/FriendDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "status",
        element: <Status></Status>
      },
      {
       path:"/friendDetails/:id",
       Component: FriendDetails

      },
    ],
    errorElement: <Error></Error>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);