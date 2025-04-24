import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

const facilitiesRoutes = {
  path: "facilities",
  children: [
    {
      index: true,
      element: (
        // <Navigate to='/goesan/facilities/nd-dining'/>
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_7.html" />
      ),
    },
    {
      path: "beerrock",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_2.html" />
      ),
    },
    {
      path: "gwejjaru",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_3.html" />
      ),
    },
    {
      path: "gogitgil",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_4.html" />
      ),
    },
    {
      path: "safenet-hall",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/sapehall.html" />
      ),
    },
    {
      path: "cinema",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_5.html" />
      ),
    },
    {
      path: "jeonju-house",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_6.html" />
      ),
    },
    {
      path: "nd-dining",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_7.html" />
      ),
    },
    {
      path: "sports-center",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_9.html" />
      ),
    },
    {
      path: "nd-bunsik",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_10.html" />
      ),
    },
    {
      path: "in-studio",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_11.html" />
      ),
    },
    {
      path: "goraegorae",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_12.html" />
      ),
    },
    {
      path: "bakery-cafe",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_13.html" />
      ),
    },
    {
      path: "four-seasons",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_14.html" />
      ),
    },
    {
      path: "steak-house",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_15.html" />
      ),
    },
  ],
};

export default facilitiesRoutes;
