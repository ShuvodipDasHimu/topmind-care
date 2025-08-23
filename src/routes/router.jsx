import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
]);

export default router;