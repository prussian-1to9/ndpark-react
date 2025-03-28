import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import { NavermapsProvider } from "react-naver-maps";
import commonRoutes from "@routes/commonRoutes";
import authRoutes from "@routes/authRoutes";

const Page = lazy(() => import("@pages/Page"));
const OnePage = lazy(() => import("@pages/OnePage"));

const NotFound = lazy(() => import("@pages/NotFound"));
const LoadingPage = lazy(() => import("@pages/LoadingPage"));

const MainPage = lazy(() => import("@pages/MainPage"));

const router = createBrowserRouter([
  // exclude header & footer : 세션 & 계정 관련
  ...authRoutes,

  // one page scroll
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <OnePage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },

  // include header & footer : common pages
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Page />
      </Suspense>
    ),
    children: [...commonRoutes],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
