import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

const communalRoutes = {
  path: "communal",
  children: [
    {
      index: true,
      element: (
        // <Navigate to='/goesan/communal/in-to-the-beauty' />
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_public_book.html?chk=A" />
      ),
    },
    {
      path: "in-to-the-beauty",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_public_book.html?chk=A" />
      ),
    },
    {
      path: "lymphatic",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_9.html" />
      ),
    },
    {
      path: "exercise-facility",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_public_ex.html" />
      ),
    },
    {
      path: "library",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_library.html" />
      ),
    },
    {
      path: "library-meeting-room",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_16.html" />
      ),
    },
  ],
};

export default communalRoutes;
