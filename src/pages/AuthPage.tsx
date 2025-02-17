import React from "react";
import styled from "styled-components";
import { Link, Outlet, Navigate } from "react-router-dom";
import { ConfigProvider } from "antd";

import Image from "@components/Image";
import Container from "@components/Container";

import AuthFooter from "@components/AuthPage/AuthFooter";

import { headerNDParkLogo } from "@api/image";

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & img {
    width: 50vw;
    max-width: 12rem;
    height: auto;
  }
`;

const AuthPage: React.FC = () => {
  const isSignedIn =
    localStorage.getItem(process.env.SIGNIN_CHECK_KEY || "") !== null;

  if (isSignedIn) {
    alert("이미 로그인 하셨습니다.\n메인 페이지로 이동합니다.");
    return <Navigate to="/" />;
  }

  return (
    <StyledContainer>
      <Link to="/">
        <Image image={headerNDParkLogo} />
      </Link>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#a01749",
            borderRadius: 16,
            colorText: "#666",
          },
        }}
      >
        <Outlet />
      </ConfigProvider>

      <AuthFooter />
    </StyledContainer>
  );
};

export default AuthPage;
