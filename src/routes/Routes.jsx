import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../homepage/Homepage";
import AllApps from "../components/pages/AllApps";
import AppDetails from "../components/pages/AppDetails";
import ErrorPage from "../components/pages/Error/ErrorPage";
import InstallationPage from "../components/pages/InstallationPage/InstallationPage";

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
      },
      {
        path: '/installation',
        element: <InstallationPage/>
      }
    ],
    errorElement: <ErrorPage/>
  },
]);