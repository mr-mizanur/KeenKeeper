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
import { ToastContainer } from "react-toastify";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsofService from "./pages/termsofService/TermsofService";
import Cookies from "./pages/cookies/Cookies";

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
          path: "privacy",
          element: <PrivacyPolicy></PrivacyPolicy>
        },
        {
          path: "terms",
          element: <TermsofService></TermsofService>
        },
        {
          path: "cookies",
          element: <Cookies></Cookies>
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
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);