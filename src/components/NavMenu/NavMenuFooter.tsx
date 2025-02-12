import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import NavMenuButton from "./NavMenuButton";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  & * {
    flex-grow: 1;
  }

  & a {
    width: 100%;
    padding: 0.5rem;

    border-top: 1px solid var(--color-n-90);
    background-color: var(--color-n-95);
    color: var(--color-n-20);
  }
`;

const NavMenuFooter: React.FC<{ isSignedIn: boolean }> = ({ isSignedIn }) => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <Link to="tel:1833-5753">
        <b>고객센터</b> Tel. 1833-5753
      </Link>
      {isSignedIn && (
        <NavMenuButton type="button" data-key="mypage">
          로그아웃
        </NavMenuButton>
      )}
      <NavMenuButton
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </NavMenuButton>
    </StyledDiv>
  );
};

export default NavMenuFooter;
