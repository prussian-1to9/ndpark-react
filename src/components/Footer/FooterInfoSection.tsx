import React from "react";
import styled from "styled-components";

import Container from "@components/Container";
import { media } from "@utils/media";

const StyledContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 4rem;
  gap: 1rem;

  ${media.tablet`
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.6rem;

    & img {
      position: absolute;
      right: 1.5rem;
      bottom: 1rem;
    }
  `}
  ${media.mobile`
    font-size: 0.2rem;
  `}
`;

const FooterInfoSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default FooterInfoSection;
