import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

const facilitiesRoutes = {
  path: "facilities",
  children: [
    {
      index: true,
      element: (
        // <Navigate to='/kanazawa/facilities/healing-table'/>
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/facilities.html" />
      ),
    },
    {
      path: "healing-table",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/facilities.html" />
      ),
    },
    {
      path: "lounge",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/facilities.html#lounge" />
      ),
    },
    {
      path: "baths",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/facilities.html#bath" />
      ),
    },
    {
      path: "footbath",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/facilities.html#footbath" />
      ),
    },
    {
      path: "conference-room",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/facilities.html#conference" />
      ),
    },
  ],
};

export default facilitiesRoutes;
