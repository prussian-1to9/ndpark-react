import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "@routes/index";

// general css
import "@styles/App.css";
import "@styles/swiper.css";
import "@styles/tailwind.css";

const App: React.FC = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default App;
