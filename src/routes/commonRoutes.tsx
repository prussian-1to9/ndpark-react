import React, { lazy } from "react";
import styled from "styled-components";

const PlannedPage = styled.div`
  text-align: center;
  height: 24rem;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const MainPage = lazy(() => import("@pages/MainPage"));
const NewMainPage = lazy(() => import("@pages/NewMainPage"));

const commonRoutes = [
  {
    index: true,
    // element: <MainPage />,
    element: <NewMainPage />,
  },
  /** @FIXME : 개발예정 페이지 */
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
