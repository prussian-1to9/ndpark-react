import React, { lazy } from "react";
import styled from "styled-components";

const PlannedPage = styled.div`
  text-align: center;
  height: 24rem;
  font-size: 1.5rem;
  line-height: 2rem;
`;

/** @FIXME : 개발예정 페이지 */
const commonRoutes = [
  {
    path: "mypage",
    element: <PlannedPage>마이페이지(개발예정)</PlannedPage>,
  },
  {
    path: "cscenter",
    element: <PlannedPage>고객센터(개발예정)</PlannedPage>,
  },
  {
    path: "wishlist",
    element: <PlannedPage>장바구니(개발예정)</PlannedPage>,
  },
];

export default commonRoutes;
