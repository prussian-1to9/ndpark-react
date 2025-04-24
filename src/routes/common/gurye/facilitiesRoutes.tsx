import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

/** @FIXME : 개발예정 페이지 */
const facilitiesRoutes = {
  path: "facilities",
  children: [
    {
      index: true,
      element: (
        // <Navigate to='/gurye/facilities/room' />
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/reservation_food.html" />
      ),
    },
    {
      path: "healing-table",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/reservation_food.html" />
      ),
    },
    {
      path: "beerrock",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/beerrock_house.html" />
      ),
    },
    {
      path: "ru-dolpan",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/information_ru.html" />
      ),
    },
    {
      path: "conference-room",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/conference_room.html" />
      ),
    },
    {
      path: "cinema",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/movie.html" />
      ),
    },
    {
      path: "etc",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/guide_etc.html" />
      ),
    },
  ],
};

export default facilitiesRoutes;
