import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/App.css";

import Page from "@pages/Page";
import MainPage from "@pages/MainPage";

const App: React.FC = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
