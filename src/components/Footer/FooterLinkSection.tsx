import React from "react";
import styled from "styled-components";

import Container from "@components/Container";
import { media } from "@utils/media";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;

  ${media.tablet`
    flex-direction: column;
    gap: 1rem;
  `}
  ${media.mobile`
    font-size: 0.2rem;
  `}
`;

const FooterLinkSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default FooterLinkSection;
