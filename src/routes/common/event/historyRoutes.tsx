import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

const historyRoutes = {
  path: "history",
  children: [
    {
      index: true,
      // element: <Navigate to='/event/history/gurye-ndpark-fest'/>
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival2.html" />
      ),
    },
    {
      path: "gurye-ndpark-fest",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival2.html" />
      ),
    },
    {
      path: "beerrock-clubday",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/beer_nor.html" />
      ),
    },
  ],
};

export default historyRoutes;
