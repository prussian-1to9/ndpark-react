import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div<{ isHovered: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;

  text-align: center;
  font-size: 0.7rem;
  font-weight: 600;

  justify-content: center;
  border-bottom: 2px solid
    ${(props) => (props.isHovered ? "var(--color-p-30)" : "transparent")};
  transition: border-bottom 0.3s;
`;

const HeaderMenu: React.FC<{
  link: LinkProps;
  hoveredMenu: string;
  hoverFunc: (key: string) => void;
}> = ({ link, hoveredMenu, hoverFunc }) => {
  return (
    <StyledDiv
      isHovered={hoveredMenu === link.key}
      onMouseEnter={() => hoverFunc(link.key)}
      onMouseLeave={() => hoverFunc("")}
    >
      <Link to={link.to ?? ""}>{link.alt}</Link>
    </StyledDiv>
  );
};

export default HeaderMenu;
