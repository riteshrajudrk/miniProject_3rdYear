// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
 <ToastContainer
  position="top-center"
  autoClose={2500}
  hideProgressBar={true}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="colored"
  toastClassName="custom-toast"
  bodyClassName="custom-toast-body"
/>

  </React.StrictMode>
);
