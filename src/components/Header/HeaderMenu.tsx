import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  height: 3.75rem;

  text-align: center;
  font-size: 0.7rem;
  font-weight: 600;

  justify-content: center;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;

  &.active {
    border-bottom: 2px solid var(--color-p-30);
    color: var(--color-p-30);
  }
  &:hover a {
    color: var(--color-p-30);
  }
`;

const HeaderMenu: React.FC<{
  link: LinkProps;
  hoveredMenu: string;
  hoverFunc: (key: string) => void;
}> = ({ link, hoveredMenu, hoverFunc }) => {
  return (
    <StyledDiv
      className={hoveredMenu === link.key ? "active" : ""}
      onMouseEnter={() => hoverFunc(link.key)}
      onMouseLeave={() => hoverFunc("")}
    >
      <Link to={link.to ?? ""}>{link.alt}</Link>
    </StyledDiv>
  );
};

export default HeaderMenu;
