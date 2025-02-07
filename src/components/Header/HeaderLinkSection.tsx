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
  border-bottom: 1px solid var(--color-n-90);

  font-size: 0.6rem;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 1.5rem;

  & > * {
    display: flex;
    align-items: center;

    height: 100%;
    padding: 0 0.5rem;
  }
`;

// 해당 섹션은 모바일에선 보이지 않습니다.
const HeaderLinkSection: React.FC<{ isSignedIn: boolean }> = ({
  isSignedIn,
}) => {
  return (
    <StyledDiv>
      <StyledContainer>
        <HeaderLinkWrapper>
          <Link to="https://www.naturaldreampark.co.kr">
            <Image image={headerINLogo} />
          </Link>
          {getHeaderFamilySiteLinks().map((link) => (
            <Link key={link.key} to={link.to}>
              {link.alt}
            </Link>
          ))}
        </HeaderLinkWrapper>
        <HeaderLinkWrapper>
          {getHeaderUserLinks(isSignedIn).map((link) => (
            <Link key={link.key} to={link.to}>
              {link.alt}
            </Link>
          ))}
        </HeaderLinkWrapper>
      </StyledContainer>
    </StyledDiv>
  );
};

export default HeaderLinkSection;
