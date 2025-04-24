import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

const roomRoutes = {
  path: "rooms",
  children: [
    {
      index: true,
      element: (
        // <Navigate to='/kanazawa/rooms/main' />
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/rooms_main.html" />
      ),
    },
    {
      path: "main",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/rooms_main.html" />
      ),
    },
    {
      path: "annex",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/rooms_annex.html" />
      ),
    },
  ],
};

export default roomRoutes;
