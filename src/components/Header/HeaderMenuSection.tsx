import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu, FiShoppingCart } from "react-icons/fi";

import Container from "@components/Container";
import Image from "@components/Image";

import { media } from "@utils/media";
import { headerNDParkLogo } from "@api/image";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.75rem;
  border-bottom: 1px solid var(--color-n-90);

  ${media.tablet`
    border: none;
  `}

  & * {
    display: flex;
    align-items: center;
  }
  & svg {
    height: 2rem;
    width: auto;
    color: var(--color-n-10);
  }
`;

const HeaderMenuSection: React.FC<{
  isMobile: boolean;
  children?: React.ReactNode;
  setshowNavMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ children, isMobile, setshowNavMenu }) => {
  return (
    <StyledDiv>
      {isMobile ? (
        <StyledContainer>
          <FiMenu onClick={() => setshowNavMenu && setshowNavMenu(true)} />
          <Link to="/">
            <Image image={headerNDParkLogo} />
          </Link>
          <Link to="https://www.naturaldreampark.co.kr/mobile/wishlist.php">
            <FiShoppingCart />
          </Link>
        </StyledContainer>
      ) : (
        <>
          <StyledContainer>
            <Link to="/">
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
