import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

const rockfextHistoryRoutes = [
  {
    index: true,
    //   elment: <Navigate to="/event/rockfest/history/2023" />,
    element: (
      <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival_2023_hisrock.html" />
    ),
  },
  {
    path: "2023",
    element: (
      <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival_2023_hisrock.html" />
    ),
  },
  {
    path: "2022",
    element: (
      <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival_2022_hisrock.html" />
    ),
  },
  {
    path: "2017",
    element: (
      <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival_2017_hisrock.html" />
    ),
  },
  {
    path: "2016",
    element: (
      <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival_2016_hisrock.html" />
    ),
  },
  {
    path: "2015",
    element: (
      <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival3_hisrock.html" />
    ),
  },
];

const rockfestRoutes = {
  path: "rockfest",
  children: [
    {
      index: true,
      // element: <Navigate to='/event/rockfest/'/>
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival3_history.html" />
      ),
    },
    {
      path: "artists",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival3_art.html" />
      ),
    },
    {
      path: "booking",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival3_ticket.html" />
      ),
    },
    {
      path: "direction",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival3_market.html" />
      ),
    },
    {
      path: "history",
      children: rockfextHistoryRoutes,
    },
  ],
};

export default rockfestRoutes;
