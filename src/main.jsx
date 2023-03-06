import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/project",
    element: <Project />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

ReactDOM.render(
  <>
    <App />
    <RouterProvider router={router} />
  </>,
  document.getElementById("root")
);
