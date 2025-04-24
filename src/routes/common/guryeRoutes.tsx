import React from "react";
import ExternalRedirect from "@routes/ExternalRedirect";

import workshopRoutes from "@routes/common/gurye/workshopRoutes";
import tourRoutes from "@routes/common/gurye/tourRoutes";
import facilitiesRoutes from "@routes/common/gurye/facilitiesRoutes";

/** @FIXME : 개발예정 페이지 */
const guryeRoutes = {
  path: "gurye",
  children: [
    {
      index: true,
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/information.html" />
      ),
    },
    workshopRoutes,
    tourRoutes,
    {
      path: "hue-pension",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/reservation_hue_pension.html" />
      ),
    },
    {
      path: "roum-hotel",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/reservation_hue_new.html" />
      ),
    },
    facilitiesRoutes,
    {
      path: "direction",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/new_location.html" />
      ),
    },
  ],
};

export default guryeRoutes;
