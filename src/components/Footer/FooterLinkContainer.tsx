import React from "react";
import styled from "styled-components";

import Container from "@components/Container";
import { media } from "@utils/media";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`
    flex-direction: column;
  `}

  & a, & select {
    line-height: 3.75rem;
    font-size: 0.9rem;

    ${media.tablet`
      line-height: 3rem;
    `}
    ${media.mobile`
      line-height: 2.5rem;
      font-size: 0.8rem;
    `}
  }

  & a {
    padding: 0 1rem;

    ${media.tablet`
      padding: 0 0.5rem;
    `}
  }
`;

const FooterLinkSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default FooterLinkSection;
