import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'

// const options = {
//   // Specify your desired options here
// };

// function Layout() {
//   const lenis = useLenis(({scroll}) => {
//     // called every scroll
//   })
// }
// function ScrollableContent() {
//   useLenis((lenis) => {
//     console.log('Current page progress', lenis.progress)
//   })
// }
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis root options={{smoothTouch: true}}>
    <div className="max-w-[1900px] mx-auto">
      <RouterProvider router={router} />
    </div>
    </ReactLenis>
  </React.StrictMode>
);
