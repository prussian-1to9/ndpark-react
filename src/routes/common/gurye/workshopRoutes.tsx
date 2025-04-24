import React from "react";
import ExternalRedirect from "@routes/ExternalRedirect";

/** @FIXME : 개발예정 페이지 */
const workshopRoutes = {
  path: "workshop",
  children: [
    {
      index: true,
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/reservation_new3.html" />
      ),
    },
    {
      path: "tour",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/reservation_new.html" />
      ),
    },
  ],
};

export default workshopRoutes;
