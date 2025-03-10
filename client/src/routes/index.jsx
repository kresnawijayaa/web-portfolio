import Layout from "../pages/Layout";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Running from "../pages/Running";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Playground from "../pages/Playground";
import WaReminder from "../pages/playgrounds/WaReminder";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
      {
        path: "/playground/wa-reminder",
        element: <WaReminder />, // Tambahkan route WaReminder
      },
    ],
  },
  {
    path: "/run",
    element: <Running />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
