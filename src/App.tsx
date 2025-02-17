import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/App.css";

import Page from "@pages/Page";
import MainPage from "@pages/MainPage";
import AuthPage from "@pages/AuthPage";

import SignInForm from "@pages/auth/SignInForm";
import Signout from "@pages/auth/Signout";

const App: React.FC = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
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
          <Route path="/mypage" element={<div>MyPage</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
