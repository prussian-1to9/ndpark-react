import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

import workshopRoutes from "@routes/common/goesan/workshopRoutes";
import experienceRoutes from "@routes/common/goesan/experienceRoutes";
import facilitiesRoutes from "@routes/common/goesan/facilitiesRoutes";
import communalRoutes from "@routes/common/goesan/communalRoutes";

/** @FIXME : 개발예정 페이지 */
const goesanRoutes = {
  path: "goesan",
  children: [
    {
      index: true,
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/goesan_information.html" />
      ),
    },
    workshopRoutes,
    experienceRoutes,
    {
      path: "roum",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/g_facilities_information.html" />
      ),
    },
    facilitiesRoutes,
    communalRoutes,
    {
      path: "attractions",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/tour_info.html" />
      ),
    },
    {
      path: "direction",
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/new_location2.html" />
      ),
    },
  ],
};

export default goesanRoutes;
