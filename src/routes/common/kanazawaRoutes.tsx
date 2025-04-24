import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

import roomRoutes from "@routes/common/kanazawa/roomRoutes";
import facilitiesRoutes from "@routes/common/kanazawa/facilitiesRoutes";

/** @FIXME : 개발예정 페이지 */
const kanazawaRoutes = {
  path: "kanazawa",
  children: [
    {
      index: true,
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/intro.html" />
      ),
    },
    roomRoutes,
    facilitiesRoutes,
    {
      path: "attractions",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/tourist_attractions.html" />
      ),
    },
    {
      path: "direction",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/kanazawa/directions.html" />
      ),
    },
  ],
};

export default kanazawaRoutes;
