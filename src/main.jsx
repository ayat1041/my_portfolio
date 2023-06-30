import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1900px] mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
