import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Oval } from "react-loader-spinner";

// general css
import "@styles/App.css";
import "@styles/swiper.css";
import "@styles/tailwind.css";

const Page = lazy(() => import("@pages/Page"));
const MainPage = lazy(() => import("@pages/MainPage"));
const AuthPage = lazy(() => import("@pages/AuthPage"));
const NotFound = lazy(() => import("@pages/NotFound"));

const SignInForm = lazy(() => import("@pages/auth/SignInForm"));
const Signout = lazy(() => import("@pages/auth/Signout"));

const PlannedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-2xl text-center">{children}</div>;
};

const App: React.FC = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Suspense fallback={<Oval color="#00BFFF" height={80} width={80} />}>
        <Routes>
          {/* exclude header & footer : 세션 & 계정 관련 */}
          <Route path="/signout" element={<Signout />} />
          {/* AuthPage : 로그인 시 접근 불가 */}
          <Route path="/" element={<AuthPage />}>
            <Route path="signin" element={<SignInForm />} />
          </Route>
          {/* include header & footer */}
          <Route path="/" element={<Page />}>
            <Route index element={<MainPage />} />
            <Route
              path="/mypage"
              element={<PlannedPage>마이페이지(개발예정)</PlannedPage>}
            />
            <Route
              path="/cscenter"
              element={<PlannedPage>고객센터(개발예정)</PlannedPage>}
            />
            <Route
              path="/wishlist"
              element={<PlannedPage>장바구니(개발예정)</PlannedPage>}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
