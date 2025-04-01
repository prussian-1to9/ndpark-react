import React from "react";
import styled from "styled-components";

import { media } from "@utils/media";

import Container from "@components/Container";

const StyledContainer = styled(Container)`
  & a {
    padding: 0 1rem;
  }

  ${media.tablet`
    flex-direction: column;
    & a, & select {
      line-height: 3rem;
    }
    & a { padding: 0 0.5rem; }
  `}

  & a, & select {
    font-size: 0.9rem;
    line-height: 3.75rem;

    ${media.mobile`
      line-height: 2.5rem;
      font-size: 0.8rem;
    `}
  }
`;

const FooterLinkSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledContainer className="flex justify-between items-center">
      {children}
    </StyledContainer>
  );
};

export default FooterLinkSection;
