import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

const experienceRoutes = {
  path: "experience",
  children: [
    {
      index: true,
      element: (
        // <Navigate to='/goesan/experience/jomullak' />
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_exper_information.html" />
      ),
    },
    {
      path: "jomullak",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_exper_information.html" />
      ),
    },
    {
      path: "kkomjilak",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_exper_2.html" />
      ),
    },
  ],
};

export default experienceRoutes;
