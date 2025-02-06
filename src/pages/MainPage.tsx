import React from "react";

import Footer from "@components/Footer";

const MainPage: React.FC = () => {
  return (
    <div>
      <header style={{ backgroundColor: "red" }}>Header</header>
      <h2 style={{ marginBottom: "10rem" }}>Main Page</h2>
      <Footer />
    </div>
  );
};

export default MainPage;
