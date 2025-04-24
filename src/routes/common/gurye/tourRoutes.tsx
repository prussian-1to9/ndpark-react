import React from "react";
import ExternalRedirect from "@routes/ExternalRedirect";

/** @FIXME : 개발예정 페이지 */
const tourRoutes = {
  path: "tour",
  children: [
    {
      index: true,
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/reservation_new2.html" />
      ),
    },
    {
      path: "marketing-center",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/reservation_new4.html" />
      ),
    },
  ],
};

export default tourRoutes;
