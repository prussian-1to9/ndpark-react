import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import reportWebVitals from "@utils/reportWebVitals";

// render component (react version: 18.3.1)
const root = document.getElementById("wrap") || document.createElement("div");
if (!root.id) {
  root.id = "wrap";
  document.body.appendChild(root);
}

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(console.log);
