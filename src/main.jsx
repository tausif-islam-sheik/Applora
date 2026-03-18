import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Home";
import Root from "./Root";
import NotFound from "./PageNotFound";
import axios from "axios";
import Apps from "./Apps";
import Installation from "./Installation";
import AppDetails from "./AppDetails";

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
      },
      {
        path: "/app-details/:id",
        Component: AppDetails,
        loader: async ({params}) => {
          const res = await axios.get("/apps.json");
          const apps = res.data.find(app => app.id === Number(params.id))
          return apps;
        },
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
