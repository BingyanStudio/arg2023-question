import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

function resizeListener() {
  let designSize = 393;
  let html = document.documentElement;
  let clientW = html.clientWidth;
  let clientH = html.clientHeight;
  let htmlRem = (clientW * 16) / designSize;
  html.style.fontSize = clientH > clientW ? htmlRem + "px" : "16px";
}

window.addEventListener("resize", resizeListener);
document.addEventListener("DOMContentLoaded", resizeListener);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
