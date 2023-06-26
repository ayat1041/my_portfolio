import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../components/layouts/Main";
import Home from "../components/pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        }
    ]
  },
]);
