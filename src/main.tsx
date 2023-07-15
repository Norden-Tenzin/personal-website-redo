import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Launch from "./routes/Launch.jsx";
import PicPackr from "./routes/PickPackrPage.js"
import PrivacyPolicyPage from "./routes/PrivacyPolicyPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Launch />,
  },
  {
    path: "/picpackr",
    element: <PicPackr />,
  },
  {
    path: "/picpackr/privacy_policy",
    element: <PrivacyPolicyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
