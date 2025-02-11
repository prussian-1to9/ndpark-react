import React from "react";
import AnimateHeight from "react-animate-height";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: var(--color-n-95);
  padding: 0.25rem 0 1rem 0;
`;

const HeaderDetailMenuSection: React.FC<{
  children: React.ReactNode;
  isDetailMenuOpen: boolean;
}> = ({ children, isDetailMenuOpen }) => {
  return (
    <AnimateHeight
      duration={500}
      height={isDetailMenuOpen ? "auto" : 0}
      easing="ease-in-out"
    >
      <StyledDiv>{children}</StyledDiv>
    </AnimateHeight>
  );
};

export default HeaderDetailMenuSection;
