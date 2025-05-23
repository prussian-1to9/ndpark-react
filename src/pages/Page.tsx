import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { media } from "@utils/media";

import Footer from "@components/Footer";
import Header from "@components/Header";

const StyledMain = styled.main`
  margin-top: 10rem;

  ${media.tablet`
    margin-top: 3.75rem;
  `}
`;

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
};

export default Page;
