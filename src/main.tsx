import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Launch from "./routes/Launch.jsx";
import PicPackr from "./routes/PicPackrPage.js";
import PicPackrPrivacyPolicyPage from "./routes/PicPackrPrivacyPolicyPage.js";

import ACNH from "./routes/ACNH-Vill-Finder.js";
import ACNHPricacyPolicyPage from "./routes/ACNH-PrivacyPolicyPage.js";

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
    element: <PicPackrPrivacyPolicyPage />,
  },
  {
    path: "/acnh-vill-finder",
    element: <ACNH />,
  },
  {
    path: "/acnh-vill-finder/privacy_policy",
    element: <ACNHPricacyPolicyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
