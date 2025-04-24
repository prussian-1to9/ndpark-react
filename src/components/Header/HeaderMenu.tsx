import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  height: 3.75rem;
  font-weight: 600;
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
  menu: MenuProps;
  hoveredMenu: string;
  hoverFunc: (key: string) => void;
}> = ({ menu, hoveredMenu, hoverFunc }) => {
  return (
    <StyledDiv
      className={hoveredMenu === menu.key ? "active" : ""}
      onMouseEnter={() => hoverFunc(menu.key)}
      onMouseLeave={() => hoverFunc("")}
    >
      <Link to={menu.to ?? ""}>{menu.title}</Link>
    </StyledDiv>
  );
};

export default HeaderMenu;
