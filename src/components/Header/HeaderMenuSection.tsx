import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "@components/Container";
import Image from "@components/Image";

import {
  headerNDParkLogo,
  mobileHeaderSideMenuIcon,
  mobileHeaderCartMenuIcon,
} from "@api/image";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  border-bottom: 1px solid var(--color-n-90);

  & > * {
    display: flex;
  }
`;

const HeaderMenuSection: React.FC<{
  children: React.ReactNode;
  isMobile: boolean;
}> = ({ children, isMobile }) => {
  return (
    <StyledDiv>
      {isMobile ? (
        <StyledContainer>
          <Link to="https://www.naturaldreampark.co.kr/mobile/main.php#navigator">
            <Image image={mobileHeaderSideMenuIcon} />
          </Link>
          <Link to="https://www.icoop.or.kr">
            <Image image={headerNDParkLogo} />
          </Link>
          <Link to="https://www.naturaldreampark.co.kr/mobile/wishlist.php">
            <Image image={mobileHeaderCartMenuIcon} />
          </Link>
        </StyledContainer>
      ) : (
        <>
          <StyledContainer>
            <Link to="https://www.icoop.or.kr">
              <Image image={headerNDParkLogo} />
            </Link>
          </StyledContainer>
          {children}
        </>
      )}
    </StyledDiv>
  );
};

export default HeaderMenuSection;
