import React from "react";
import styled from "styled-components";

import Image from "@components/Image";
import Container from "@components/Container";

import { media } from "@utils/media";

import { footerNDParkLogo } from "@api/image";

const StyledContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 4rem;
  gap: 1rem;

  ${media.tablet`
    flex-direction: column;
    font-size: 0.8rem;
    gap: 0.5rem;

    & img {
      position: absolute;
      right: 1.5rem;
      bottom: 1rem;
    }
  `}
  ${media.mobile`
    font-size: 0.75rem;
    gap: 0.25rem;
  `}
`;

const FooterInfoSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledContainer>
      <Image image={footerNDParkLogo} />
      {children}
    </StyledContainer>
  );
};

export default FooterInfoSection;
