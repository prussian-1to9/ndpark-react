import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

const workshopRoutes = {
  path: "workshop",
  children: [
    {
      index: true,
      element: (
        // <Navigate to='/goesan/workshop/complex-1'/>
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_gongbang_information.html?gubun=A" />
      ),
    },
    {
      path: "tour",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_gongbang_book.html" />
      ),
    },
    {
      path: "complex-1",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_gongbang_information.html?gubun=A" />
      ),
    },
    {
      path: "complex-2",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_gongbang_information.html?gubun=B" />
      ),
    },
  ],
};

export default workshopRoutes;
