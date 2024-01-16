import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

import CountryList from './pages/ListCountry'
import DetailCountry from './pages/DetailCountry'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CountryList />,
  },
  {
    path: "/detail-country",
    element: <DetailCountry />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>
);
