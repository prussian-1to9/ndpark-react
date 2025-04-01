import React from "react";
import styled from "styled-components";

import { logoImageNDParkFooter } from "@assets/image";
import { media } from "@utils/media";

import Image from "@components/Image";
import Container from "@components/Container";

const StyledContainer = styled(Container)`
  padding-bottom: 4rem;

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
    <StyledContainer className="relative flex justify-between gap-4 mx-auto my-0">
      <Image image={logoImageNDParkFooter} />
      {children}
    </StyledContainer>
  );
};

export default FooterInfoSection;
