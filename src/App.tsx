import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/App.css";

import MainPage from "@pages/MainPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
