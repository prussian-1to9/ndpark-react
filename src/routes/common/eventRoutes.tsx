import React from "react";
// import { Navigate } from "react-router-dom";
import ExternalRedirect from "@routes/ExternalRedirect";

import rockfestRoutes from "@routes/common/event/rockfestRoutes";
import historyRoutes from "@routes/common/event/historyRoutes";

/** @FIXME : 개발예정 페이지 */
const eventRoutes = {
  path: "event",
  children: [
    {
      index: true,
      //   element: <Navigate to="/event/rockfest" />,
      element: (
        <ExternalRedirect to="https://www.naturaldreampark.co.kr/festival3_history.html" />
      ),
    },
    rockfestRoutes,
    historyRoutes,
  ],
};

export default eventRoutes;
