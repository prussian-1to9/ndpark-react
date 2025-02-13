import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "@components/Image";
import Container from "@components/Container";

import { getHeaderFamilySiteLinks, getHeaderUserLinks } from "@api/index";
import { headerINLogo } from "@api/image";

const StyledDiv = styled.div`
  color: var(--color-n-20);
  background-color: var(--color-n-95);
  height: 2.5rem;
  border-bottom: 1px solid var(--color-n-90);

  font-size: 1rem;
  font-weight: 500;
`;
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;

  & * {
    display: flex;
  }
`;
const StyledLi = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;

  &.border-right {
    border-right: 1px solid var(--color-n-90);
  }
  &.border-right:last-child {
    border: none;
  }
  &.border-left {
    border-left: 1px solid var(--color-n-90);
  }
  &.border-left:first-child {
    border: none;
  }
`;

// 해당 섹션은 모바일에선 보이지 않습니다.
const HeaderLinkSection: React.FC<{ isSignedIn: boolean }> = ({
  isSignedIn,
}) => {
  return (
    <StyledDiv>
      <StyledContainer>
        <StyledUl>
          <StyledLi className="border-right">
            <Link to="https://www.icoop.or.kr/coopmall/">
              <Image image={headerINLogo} />
            </Link>
          </StyledLi>
          {getHeaderFamilySiteLinks().map((link) => (
            <StyledLi key={link.key} className="border-right">
              <Link to={link.to}>{link.alt}</Link>
            </StyledLi>
          ))}
        </StyledUl>
        <StyledUl>
          {getHeaderUserLinks(isSignedIn).map((link) => (
            <StyledLi key={link.key} className="border-left">
              <Link to={link.to}>{link.alt}</Link>
            </StyledLi>
          ))}
        </StyledUl>
      </StyledContainer>
    </StyledDiv>
  );
};

export default HeaderLinkSection;
