import React, { Suspense, lazy } from "react";

const LoadingPage = lazy(() => import("@pages/LoadingPage"));
const AuthPage = lazy(() => import("@pages/AuthPage"));

const SignInForm = lazy(() => import("@pages/auth/SignInForm"));
const Signout = lazy(() => import("@pages/auth/Signout"));

const authRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AuthPage />
      </Suspense>
    ),
    children: [
      {
        path: "signin",
        element: <SignInForm />,
      },
    ],
  },
  {
    path: "/signout",
    element: <Signout />,
  },
];

export default authRoutes;
