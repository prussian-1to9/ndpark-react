import React from "react";
import styled from "styled-components";

import { useViewPort } from "@utils/Viewport";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  font-size: 0.75rem;

  & > span {
    text-align: center;
    width: 100%;
  }
  & h3 {
    flex-grow: 1;
    width: 100%;
    margin: 0.5rem 0;
  }
`;
const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;

  & li {
    background-color: var(--color-n-95);
    color: var(--color-n-20);
  }
  & li,
  & a {
    display: flex;
    justify-content: center;
    width: 100%;
    line-height: 2;
  }
`;

const NavMenuHeader: React.FC<{
  children?: React.ReactNode;
  isSignedIn?: boolean;
}> = ({ children, isSignedIn = false }) => {
  const { isMobile } = useViewPort();

  if (!isMobile)
    return (
      <StyledDiv>
        <span>빠른 예약</span>
        {children}
      </StyledDiv>
    );

  return (
    <StyledDiv>
      {isSignedIn ? (
        <>
          <h3>테스터님</h3>
          <StyledUl>
            <li>
              <Link to="/">마이페이지</Link>
            </li>
            <li>
              <Link to="https://www.naturaldreampark.co.kr/mobile/wishlist.php">
                예약하기/결제
              </Link>
            </li>
          </StyledUl>
        </>
      ) : (
        <>
          <h3>로그인 후 이용 바랍니다.</h3>
          <StyledUl>
            <li>
              <Link to="/signin">로그인</Link>
            </li>
          </StyledUl>
        </>
      )}
    </StyledDiv>
  );
};

export default NavMenuHeader;
