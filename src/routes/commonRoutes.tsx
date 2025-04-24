import React, { lazy } from "react";
import ExternalRedirect from "@routes/ExternalRedirect";

import goesanRoutes from "@routes/common/goesanRoutes";
import guryeRoutes from "@routes/common/guryeRoutes";
import kanazawaRoutes from "@routes/common/kanazawaRoutes";
import complexRoutes from "@routes/common/complexRoutes";
import eventRoutes from "@routes/common/eventRoutes";

const commonRoutes = [
  /** @FIXME : 개발예정 페이지 */
  {
    path: "mypage",
    element: (
      <ExternalRedirect to="https://www.naturaldreampark.co.kr/cancel_new.html" />
    ),
  },
  {
    path: "cscenter",
    element: (
      <ExternalRedirect to="https://www.naturaldreampark.co.kr/board/community.html" />
    ),
  },
  {
    path: "wishlist",
    element: (
      <ExternalRedirect to="https://www.naturaldreampark.co.kr/wishlist.php?type=B" />
    ),
  },
  goesanRoutes,
  guryeRoutes,
  kanazawaRoutes,
  complexRoutes,
  eventRoutes,
];

export default commonRoutes;
