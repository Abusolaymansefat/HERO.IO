import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../homepage/Homepage";
import AllApps from "../components/pages/AllApps";
import AppDetails from "../components/pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/all-apps',
        element: <AllApps/>
      },
      {
        path: '/app/:id',
        element: <AppDetails/>
      }
    ]
  },
]);