import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getNavMenuLinks } from "@api/index";
import { media } from "@utils/media";
import { useViewPort } from "@utils/Viewport";

import NavMenuHeader from "@components/NavMenu/NavMenuHeader";
import NavMenuFooter from "@components/NavMenu/NavMenuFooter";
import NavMenuUl from "@components/NavMenu/NavMenuUl";
import NavMenuButton from "@components/NavMenu/NavMenuButton";

// z-index : PC < Header < M
const StyledAside = styled.aside`
  position: absolute;
  right: 10rem;
  transform: translateY(-50%);
  transition: all 0.75s ease-in-out;

  min-width: 7.5rem;

  background-color: var(--color-n-50);
  color: var(--color-n-90);
  z-index: 2;

  ${media.tablet`
    position: fixed;
    top: 0;
    left: 0;
    transform: none;
    transition: none;

    overflow-y: scroll;
    width: 15rem;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
  `}
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  & * {
    font-size: 0.75rem;
    width: 100%;
    text-align: center;

    ${media.tablet`
      font-size: 1rem;
    `}
  }
`;

const NavMenu: React.FC<{
  isSignedIn?: boolean;
  setShowNavMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSignedIn = false, setShowNavMenu }) => {
  const { isMobile } = useViewPort();
  const [clickedMenu, setClickedMenu] = useState<string>("");
  const [menuPosition, setMenuPosition] = useState<number>(510);

  const handleScrollInPC = () => {
    const top = window.scrollY + window.innerHeight / 2;
    setMenuPosition(top);
  };

  const handleNavMenuButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (clickedMenu === e.currentTarget.dataset.key) {
      setClickedMenu("");
      return;
    }
    setClickedMenu(e.currentTarget.dataset.key ?? "");
  };

  useEffect(() => {
    // 스크롤시 - 모바일 : 메뉴 닫기 & PC : 따라오기
    if (isMobile) {
      window.addEventListener("scroll", () => {
        setShowNavMenu && setShowNavMenu(false);
      });
    } else window.addEventListener("scroll", handleScrollInPC);
  }, [isMobile]);

  return (
    <StyledAside style={{ top: isMobile ? 0 : menuPosition }}>
      <NavMenuHeader isSignedIn={isSignedIn} />

      <StyledDiv>
        <NavMenuButton
          type="button"
          data-key="goesan"
          className={clickedMenu === "goesan" ? "active" : ""}
          onClick={handleNavMenuButtonClick}
        >
          괴산
        </NavMenuButton>
        <NavMenuButton
          type="button"
          data-key="gurye"
          className={clickedMenu === "gurye" ? "active" : ""}
          onClick={handleNavMenuButtonClick}
        >
          구례
        </NavMenuButton>
      </StyledDiv>

      <NavMenuUl>
        {getNavMenuLinks(clickedMenu, isMobile).map((link) => (
          <li key={link.key}>
            <Link to={link.to}>{link.alt}</Link>
          </li>
        ))}
      </NavMenuUl>

      {isMobile && <NavMenuFooter isSignedIn={isSignedIn} />}
    </StyledAside>
  );
};

export default NavMenu;
