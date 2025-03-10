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
  const handleNavMenuButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { key } = e.currentTarget.dataset;
    if (!key) return;

    if (key === "signout") navigate("/signout");
    else if (key === "home") navigate("/");
    return;
  };

  return (
    <StyledDiv>
      <Link to="tel:1833-5753">
        <b>고객센터</b> Tel. 1833-5753
      </Link>
      {isSignedIn && (
        <NavMenuButton
          type="button"
          data-key="signout"
          onClick={handleNavMenuButtonClick}
        >
          로그아웃
        </NavMenuButton>
      )}
      <NavMenuButton
        type="button"
        data-key="home"
        onClick={handleNavMenuButtonClick}
      >
        Home
      </NavMenuButton>
    </StyledDiv>
  );
};

export default NavMenuFooter;
