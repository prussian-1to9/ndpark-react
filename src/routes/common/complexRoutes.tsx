import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

/** @FIXME : 개발예정 페이지 */
const complexRoutes = {
  path: "complex",
  children: [
    {
      index: true,
      element: (
        // <Navigate to='/complex/gurye' />
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/home_information.html" />
      ),
    },
    {
      path: "gurye",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/home_information.html" />
      ),
    },
    {
      path: "community",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/community_center.html" />
      ),
    },
    {
      path: "goesan",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/home_information_goesan.html" />
      ),
    },
  ],
};

export default complexRoutes;
