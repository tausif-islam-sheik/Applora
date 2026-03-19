import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root";
import axios from "axios";
import Apps from "./pages/Apps";
import Installation from "./pages/Installation";
import AppDetails from "./pages/AppDetails";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await axios.get("/apps.json");
          return res.data;
        },
      },
      {
        path: "apps",
        Component: Apps,
        loader: async () => {
          const res = await axios.get("/apps.json");
          return res.data;
        },
      },
      {
        path: "installation",
        Component: Installation,
        loader: async () => {
          const res = await axios.get("/apps.json");
          return res.data;
        },
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
        loader: async ({ params }) => {
          const res = await axios.get("/apps.json");
          const apps = res.data.find((app) => app.id === Number(params.id));
          return apps;
        },
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
